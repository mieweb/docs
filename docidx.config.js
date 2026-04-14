/**
 * Docidx configuration for Enterprise Health / WebChart documentation
 */

export default {
  // Base URL where the documentation is hosted
  // This will be prepended to all document links in Melvil
  baseUrl: "http://localhost:1313", // Hugo dev server
  // For production, you might use:
  // baseUrl: 'https://docs.enterprisehealth.com',

  // Project name
  name: "Enterprise Health Documentation",

  // Agent configuration
  agent: {
    model: "llama3.2",
    maxIterations: 5,
  },
};
