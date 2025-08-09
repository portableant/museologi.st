// This file contains the configuration for gatsby-plugin-google-gtag-cookieconsent
module.exports = {
  // This is the configuration for the underlying gatsby-plugin-google-gtag
  googleGtagPluginConfig: {
    trackingIds: [
      "G-M5H80B9MSP", // Your Google Analytics 4 Measurement ID
    ],
    pluginConfig: {
      // Respect the "Do Not Track" browser header
      respectDNT: true,
    },
  },
  // This is the configuration for the cookie consent banner itself
  cookieConsentConfig: {
    categories: {
      necessary: {
        enabled: true, // This is a required category and cannot be disabled
        readOnly: true,
      },
      // The 'analytics' category is automatically linked to the gtag script
      analytics: {
        enabled: true, // This category is enabled by default
      },
    },
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "I use one cookie!🍪",
            description: "Museologi.st uses cookies to analyze site traffic and understand how visitors use our website. You can manage your preferences below.",
            acceptAllBtn: "Accept",
            showPreferencesBtn: "Manage preferences",
          },
          preferencesModal: {
            title: "Manage cookie preferences",
            acceptAllBtn: "Accept all",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close modal",
            sections: [
              {
                title: "Performance and Analytics",
                description: "These cookies help us measure how visitors interact with our website by collecting and reporting information anonymously. All data is anonymized and cannot be used to identify you.",
                linkedCategory: "analytics", // This links the section to the 'analytics' category
              },
              {
                title: "More information",
                description: "We only use cookies for performance and analytics purposes. No personally identifiable information is collected or stored.",
              },
            ],
          },
        },
      },
    },
  },
};
