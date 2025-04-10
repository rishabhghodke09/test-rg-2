
import { useState, useEffect } from 'react';
import { parseCsv, CsvPlan, parseFeatures, parseProducts } from '@/utils/csvUtils';

interface PlanData {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  licenceDescription: string;
  features: string[];
  products: { name: string; icon: string }[];
}

export const useCSVData = (csvFilePath: string) => {
  const [plans, setPlans] = useState<PlanData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Try to load from the public folder
        const response = await fetch(csvFilePath);
        if (!response.ok) {
          throw new Error(`Failed to fetch CSV: ${response.status}`);
        }
        
        const csvText = await response.text();
        const csvData = parseCsv(csvText);
        
        // Transform CSV data to our format
        const parsedPlans = csvData.map((csvPlan: CsvPlan) => ({
          name: csvPlan.name,
          monthlyPrice: csvPlan.monthlyPrice,
          yearlyPrice: csvPlan.yearlyPrice,
          licenceDescription: csvPlan.licenceDescription,
          features: parseFeatures(csvPlan.features),
          products: parseProducts(csvPlan.products),
        }));
        
        setPlans(parsedPlans);
      } catch (err) {
        console.error('Error loading CSV data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error loading CSV data');
        // Fallback to default data
        setPlans([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [csvFilePath]);

  return { plans, isLoading, error };
};
