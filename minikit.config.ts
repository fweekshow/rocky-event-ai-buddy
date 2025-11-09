const ROOT_URL = import.meta.env.VITE_APP_URL || window.location.origin;

export const minikitConfig = {
  accountAssociation: {
    header:
      "eyJmaWQiOjE0NTU1NTgsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgyRWIwYmYyMGI2N2I3MTYzMEU1OTJhMGU2MDFDMDA3N2M1MTczREZEIn0",
    payload: "eyJkb21haW4iOiJyb2NreS1ldmVudC1haS1idWRkeS5sb3ZhYmxlLmFwcCJ9",
    signature: "bxQjQM7JelX0n4IRrPGcrxkxyaBThTUK0/GR3S5bBKgUJYw7TEk0wU9o0k/6IkBBIHyAVbkd+8s4kKqLLo+WNBw=",
  },
  miniapp: {
    version: "1",
    name: "Rocky",
    subtitle: "Your AI Event Copilot Born on Base",
    description: "Your AI Event Copilot Born on Base",
    screenshotUrls: [`${ROOT_URL}/rocky.jpg`],
    iconUrl: `${ROOT_URL}/rocky.jpg`,
    splashImageUrl: `${ROOT_URL}/rocky.jpg`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "crm", "events", "leadgen", "ai"],
    heroImageUrl: `${ROOT_URL}/rocky.jpg`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/rocky.jpg`,
  },
  baseBuilder: {
    ownerAddress: "0x1cE2aF6f886b353c21CcE43e3b02a93e13E0F740",
  },
} as const;
