
import Papa from 'papaparse';

export interface CsvPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  licenceDescription: string;
  features: string;
  products: string;
}

// Parse CSV string into an array of objects
export const parseCsv = (csvString: string): CsvPlan[] => {
  const result = Papa.parse(csvString, {
    header: true,
    skipEmptyLines: true
  });
  
  return result.data as CsvPlan[];
};

// Parse a features string like "feature1|feature2|feature3" into an array
export const parseFeatures = (featuresString: string): string[] => {
  return featuresString.split('|').filter(feature => feature.trim() !== '');
};

// Parse a products string like "product1:icon1|product2:icon2" into an array of product objects
export const parseProducts = (productsString: string): { name: string, icon: string }[] => {
  return productsString.split('|')
    .filter(product => product.trim() !== '')
    .map(product => {
      const [name, icon] = product.split(':');
      return { name: name.trim(), icon: icon.trim() };
    });
};

// Example CSV format (as a string):
// name,monthlyPrice,yearlyPrice,licenceDescription,features,products
// "Microsoft 365 Business Basic","₹145","₹1,740","Min 300 licence","Feature 1|Feature 2|Feature 3","Microsoft Word:/path/to/icon.png|Microsoft Excel:/path/to/icon.png"

export const productDescriptions: { [key: string]: string } = {
  "Microsoft Word": "Create and edit professional documents",
  "Microsoft Excel": "Analyze and visualize data with spreadsheets",
  "Microsoft PowerPoint": "Create impactful presentations",
  "Microsoft Outlook": "Manage emails, calendars, and contacts",
  "Microsoft Teams": "Chat, meet, call, and collaborate",
  "Microsoft Exchange": "Business-class email hosting",
  "Microsoft OneDrive": "Cloud storage and file sharing",
  "SharePoint": "Team collaboration and content management",
  "Microsoft Loop": "Real-time collaborative workspaces",
  "Clipchamp": "Create and edit videos easily",
  "Microsoft Intune": "Cloud-based device management",
  "Microsoft Defender": "Advanced security protection",
  "Microsoft Pureview": "Information protection and governance"
};
