
/**
 * Security utility functions for form handling and API calls
 */

/**
 * Sanitizes user input to prevent XSS attacks
 * @param input - The string to sanitize
 * @returns The sanitized string
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return "";
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;")
    .trim();
};

/**
 * Validates an email address format
 * @param email - The email to validate
 * @returns Boolean indicating if the email format is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Creates secure headers for API fetch requests
 * @returns Object containing secure headers
 */
export const getSecureHeaders = (): Record<string, string> => {
  return {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // Prevent MIME type sniffing
    "X-Content-Type-Options": "nosniff",
    // Prevent clickjacking
    "X-Frame-Options": "DENY",
    // Enable Cross-Site Scripting filter
    "X-XSS-Protection": "1; mode=block",
  };
};

/**
 * Safely parses JSON without throwing exceptions
 * @param jsonString - The JSON string to parse
 * @returns The parsed object or null if parsing fails
 */
export const safeJsonParse = (jsonString: string): any => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Error parsing JSON:", e);
    return null;
  }
};

/**
 * Validates a phone/contact number format
 * @param phoneNumber - The phone number to validate
 * @returns Boolean indicating if the phone number format is valid
 */
export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  // This regex allows for different phone number formats with optional country codes
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phoneNumber);
};
