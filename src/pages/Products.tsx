
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Skeleton } from "@/components/ui/skeleton";
import { lazy, Suspense, useState, useEffect, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Microsoft365ProductsModal } from "@/components/Microsoft365ProductsModal";

// Import products data separately to improve code splitting
import { microsoftSolutions, innovativeSolutions } from "@/data/productsData";

const ProductCardSkeleton = () => (
  <div className="p-4 rounded-lg bg-black/40 border border-axima-blue/20">
    <div className="flex flex-col items-center gap-4">
      <Skeleton className="w-20 h-16 rounded-lg" />
      <div className="w-full">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  </div>
);

// Memoized components to reduce re-renders
const MicrosoftSolutionCard = memo(({ solution, onCardClick }: { 
  solution: typeof microsoftSolutions[0], 
  onCardClick: (name: string, e: React.MouseEvent) => void 
}) => {
  return (
    <Card 
      className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 cursor-pointer"
      onClick={(e) => onCardClick(solution.name, e)}
    >
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{solution.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <img 
          src={solution.image} 
          alt={solution.name} 
          className="w-full h-40 object-contain rounded-lg mb-4"
          loading="lazy"
          width="160"
          height="160"
        />
        <p className="text-gray-300 text-sm">{solution.description}</p>
      </CardContent>
    </Card>
  );
});

const InnovativeSolutionCard = memo(({ solution, onCardClick }: { 
  solution: typeof innovativeSolutions[0], 
  onCardClick: (route: string) => void 
}) => {
  return (
    <div 
      className="p-4 rounded-lg bg-black/40 border border-axima-blue/20 hover:border-axima-blue hover:bg-black/60 transition-all duration-300 transform hover:scale-102 cursor-pointer"
      onClick={() => onCardClick(solution.route)}
    >
      <div className="flex flex-col items-center gap-4">
        <img 
          src={solution.image} 
          alt={solution.name}
          className="w-20 h-16 object-contain rounded-lg"
          loading="lazy"
          width="80"
          height="64"
        />
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{solution.name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{solution.description}</p>
        </div>
      </div>
    </div>
  );
});

// Main component with performance optimizations
const Products = () => {
  const navigate = useNavigate();
  const [showM365Modal, setShowM365Modal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Load content with performance optimizations
  useEffect(() => {
    // Use requestIdleCallback or setTimeout for non-critical initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Memoize handlers to prevent recreating functions on each render
  const handleMicrosoft365Click = useCallback((name: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (name === "Microsoft 365") {
      setShowM365Modal(true);
    } else {
      // For other cards, navigate to their routes
      const solution = microsoftSolutions.find(s => s.name === name);
      if (solution) {
        navigate(solution.route);
      }
    }
  }, [navigate]);

  const handleInnovativeSolutionClick = useCallback((route: string) => {
    navigate(route);
  }, [navigate]);

  // Render Microsoft solutions section
  const renderMicrosoftSolutions = () => {
    if (isLoading) {
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-3 gap-6">
        {microsoftSolutions.map((solution, index) => (
          <MicrosoftSolutionCard 
            key={index} 
            solution={solution} 
            onCardClick={handleMicrosoft365Click} 
          />
        ))}
      </div>
    );
  };

  // Render innovative solutions section
  const renderInnovativeSolutions = () => {
    if (isLoading) {
      return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {innovativeSolutions.map((solution, index) => (
          <InnovativeSolutionCard 
            key={index} 
            solution={solution} 
            onCardClick={handleInnovativeSolutionClick} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <Navbar />
      <div className="pt-20 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Products</h1>
          
          <div className="text-center text-white mb-8">
            <h2 className="text-2xl font-semibold mb-2">We Provide Complete Cloud Solutions to Meet All Your Needs under one roof</h2>
            <h3 className="text-xl">Explore Our Microsoft Solutions</h3>
          </div>

          {renderMicrosoftSolutions()}

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Other Innovative Solutions</h2>
            {renderInnovativeSolutions()}
          </div>
        </div>
      </div>
      <Microsoft365ProductsModal 
        open={showM365Modal} 
        onOpenChange={setShowM365Modal}
      />
      <Footer />
    </div>
  );
};

export default Products;
