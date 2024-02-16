const products = [
    {
      id: 1,
      category: "toothpaste",
      low: {
        productName: "Low Quality",
        productQuality: "low",
        productPrice: 4,
        productCost: 2,
        value: 6,
        productImage: "/graphics/StandardToothpasteAI.png"
      },
      high: {
        productName: "High Quality",
        productQuality: "high",
        productPrice: 8,
        productCost: 6,
        value: 10,
        productImage: "/graphics/PremiumToothpasteAI.png"
      },
      productWarrants: [
        {
          icon: "https://res.cloudinary.com/dgccztjql/image/upload/v1704638438/SimPPL/Gum_Protection_onbo0t.png",
          description: "Fresher Breath with this Toothpaste!",
          multiplier: 3,
          challengeMultiplier: 0.2,
        },
        {
          icon: "https://res.cloudinary.com/dgccztjql/image/upload/v1704638434/SimPPL/Fresh_Breath_he5jws.png",
          description: "Fresh Breath Guaranteed along with Enhanced Whitening",
          multiplier: 4,
          challengeMultiplier: 0.2,
        },
        {
          icon: "https://res.cloudinary.com/dgccztjql/image/upload/v1704638437/SimPPL/Healthy_Gum_domd4m.png",
          description: "Fresh Breath, Enhanced Whitening, and Healthy Gums!",
          multiplier: 5,
          challengeMultiplier: 0.2,
        },
      ],
    },
    {
        id: 2,
        category: "Toothpaste",
        low: {
          productName: "Ayurvedic",
          productQuality: "low",
          productPrice: 4,
          productCost: 2,
          value: 6,
          productImage:
          "/graphics/StandardToothpasteAI.png"        },
        high: {
          productName: "Ayurvedic",
          productQuality: "high",
          productPrice: 8,
          productCost: 6,
          value: 10,
          productImage: "/graphics/PremiumToothpasteAI.png"        },
        productWarrants: [
          {
            icon: "https://res.cloudinary.com/dgccztjql/image/upload/v1704638438/SimPPL/Gum_Protection_onbo0t.png",
            description: "Fresher Breath with this Toothpaste!",
            multiplier: 3,
            challengeMultiplier: 0.2,
          },
          {
            icon: "https://res.cloudinary.com/dgccztjql/image/upload/v1704638434/SimPPL/Fresh_Breath_he5jws.png",
            description: "Fresh Breath Guaranteed along with Enhanced Whitening",
            multiplier: 4,
            challengeMultiplier: 0.2,
          },
          {
            icon: "https://res.cloudinary.com/dgccztjql/image/upload/v1704638437/SimPPL/Healthy_Gum_domd4m.png",
            description: "Fresh Breath, Enhanced Whitening, and Healthy Gums!",
            multiplier: 5,
            challengeMultiplier: 0.2,
          },
        ],
      },
  ];
  
  export { products };
  