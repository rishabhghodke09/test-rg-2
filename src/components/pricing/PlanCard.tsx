import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";

interface Product {
  name: string;
  icon: string;
}

interface PlanProps {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  products: Product[];
  billingPeriod: string;
  licenceDescription: string;
  productDescriptions: { [key: string]: string };
}

export const PlanCard = ({
  name,
  monthlyPrice,
  yearlyPrice,
  features,
  products,
  billingPeriod,
  licenceDescription,
  productDescriptions
}: PlanProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="h-full">
        <Card className="bg-black/40 border border-axima-blue/20 hover:border-axima-blue text-white transform transition-all duration-300 hover:scale-102 hover:bg-black/60 h-full">
          <div className="bg-axima-blue p-7 rounded-t-lg">
            <h2 className="text-xl text-white">{name}</h2>
          </div>
          <div className="p-4">
            <center>
              <p className="text-axima-blue font-semibold text-2xl mb-4">
                {billingPeriod === "yearly" ? yearlyPrice : monthlyPrice}
                <span className="text-sm text-gray-400">
                  /user/{billingPeriod === "yearly" ? "year" : "month"}
                </span>
              </p>
              <p className="text-sm text-gray-400 mb-1">(Advance yearly billing)</p>
              <p className="text-sm text-gray-400 mb-1">GST extras as applicable</p>
              <p className="text-sm text-gray-400 mb-1">{licenceDescription}</p>
            </center>
            <br />
            <div className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <p key={idx} className="text-gray-300 text-sm">• {feature}</p>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4">
              <h4 className="text-sm font-semibold mb-3">Included Products:</h4>
              <div className="grid grid-cols-3 gap-2">
                {products.map((product, idx) => (
                  <TooltipProvider key={idx}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex flex-col items-center">
                          <img src={product.icon} alt={product.name} className="w-8 h-8 object-contain mb-1" />
                          <span className="text-xs text-center text-gray-400">{product.name}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-sm">{productDescriptions[product.name]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      {/* <HoverCardContent className="w-80 bg-black/90 text-white border border-axima-blue">
        <h4 className="font-semibold mb-2">{name}</h4>
        <p className="text-sm text-gray-300 mb-2">
          Get started with our {name.split(" ").pop()} plan
        </p>
        <ul className="text-sm space-y-1">
          {features.map((feature, idx) => (
            <li key={idx} className="text-gray-300">• {feature}</li>
          ))}
        </ul>
      </HoverCardContent> */}
    </HoverCard>
  );
};