
export interface SecurityService {
  service: string;
  description: string;
  price?: string;
}

export const securityAssessmentServices: SecurityService[] = [
  {
    service: "M365 Security Assessment",
    description: "Quick security assessment (takes ~15 minutes).",
    // price: "₹5,000 + GST"
  },
  {
    service: "Policy Implementation (Per Policy)",
    description: "Configuration of a single security policy",
    // price: "₹1,000 + GST"
  },
  {
    service: "Policy Implementation (Full-Day)",
    description: "Full-day engagement for policy setup & security hardening",
    // price: "₹10,000 + GST"
  }
];

export const trainingServices: SecurityService[] = [
  {
    service: "M365 Admin Console Overview",
    description: "1 hour training",
    // price: "₹10,000 + GST"
  },
  {
    service: "M365 Admin Level Training",
    description: "3 hours of training with full admin console features introductions",
    // price: "₹30,000 + GST"
  },
  {
    service: "M365 User Level Training",
    description: "2 Hour training",
    // price: "₹20,000 + GST"
  }
];
