const dummyProducts = [
  {
    title: "Lavender Essential Oil",
    description:
      "A calming and soothing essential oil that promotes relaxation and restful sleep.",
    prices: [12, 20, 28],
    discount: 15,
    reviews: [],
    sold: 85,
    sizes: [10, 30, 50],
    rate: 4.8,
    benefits: ["Promotes relaxation", "Aids sleep", "Reduces anxiety"],
    ingredients: ["Pure Lavender Oil"],
    faqs: [
      {
        question: "How can I use this oil?",
        answer:
          "Diffuse it, add to a warm bath, or apply topically with a carrier oil.",
      },
      {
        question: "Is it safe for children?",
        answer:
          "Use with caution and dilute properly for children. Consult a healthcare professional if concerned.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/1/1.jpg", "/images/1/2.jpg"],
  },
  {
    title: "Argan Oil",
    description:
      "A nourishing oil that enhances shine and revitalizes hair, leaving it smooth and healthy.",
    prices: [18, 30, 45],
    discount: 5,
    reviews: [],
    sold: 120,
    sizes: [50, 100],
    rate: 4.6,
    benefits: ["Adds shine", "Reduces frizz", "Promotes hair health"],
    ingredients: ["Pure Argan Oil"],
    faqs: [
      {
        question: "How do I apply it?",
        answer: "Apply a few drops to damp or dry hair, focusing on the ends.",
      },
      {
        question: "Will it make my hair oily?",
        answer: "Use sparingly, especially on the scalp. It's easily absorbed.",
      },
    ],
    categories: ["Hair Care", "Oils"],
    images: ["/images/2/1.jpg", "/images/2/2.jpg"],
  },
  {
    title: "Tea Tree Oil",
    description:
      "Known for its anti-inflammatory properties, this oil cleanses and clarifies the skin.",
    prices: [10, 18, 25],
    discount: 12,
    reviews: [],
    sold: 95,
    sizes: [15, 30],
    rate: 4.3,
    benefits: ["Cleansing", "Soothes skin", "Reduces blemishes"],
    ingredients: ["Pure Tea Tree Oil"],
    faqs: [
      {
        question: "How should I use it on my face?",
        answer: "Dilute with a carrier oil and apply to affected areas.",
      },
      {
        question: "Is it too strong for sensitive skin?",
        answer: "Always dilute and do a patch test first.",
      },
    ],
    categories: ["Skin Care", "Essential Oils"],
    images: ["/images/3/1.jpg", "/images/3/2.jpg"],
  },
  {
    title: "Rosemary Oil",
    description:
      "Stimulates hair growth and strengthens strands for thicker, fuller hair.",
    prices: [13, 21, 30],
    discount: 7,
    reviews: [],
    sold: 78,
    sizes: [30, 50],
    rate: 4.4,
    benefits: ["Stimulates hair growth", "Strengthens hair"],
    ingredients: ["Pure Rosemary Oil"],
    faqs: [
      {
        question: "How do I apply it to my hair?",
        answer: "Dilute with a carrier oil and massage into the scalp.",
      },
      {
        question: "How often should I use it?",
        answer: "2-3 times per week for best results.",
      },
    ],
    categories: ["Hair Care", "Essential Oils"],
    images: ["/images/4/1.jpg", "/images/4/2.jpg"],
  },
  {
    title: "Peppermint Oil",
    description:
      "Refreshing and invigorating, this oil can help relieve headaches and boost energy.",
    prices: [9, 16, 22],
    discount: 10,
    reviews: [],
    sold: 110,
    sizes: [10, 30],
    rate: 4.5,
    benefits: ["Boosts focus", "Relieves headaches", "Eases muscle tension"],
    ingredients: ["Pure Peppermint Oil"],
    faqs: [
      {
        question: "How can I use it for headaches?",
        answer: "Dilute and apply to temples and back of the neck.",
      },
      {
        question: "Can I ingest it?",
        answer:
          "Consult a healthcare professional before ingesting essential oils.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/5/1.jpg", "/images/5/2.jpg"],
  },
  {
    title: "Lemon Oil",
    description:
      "A bright and uplifting essential oil that can boost mood and purify the air.",
    prices: [8, 15, 20],
    discount: 14,
    reviews: [],
    sold: 70,
    sizes: [10, 30, 50],
    rate: 4.7,
    benefits: ["Uplifting aroma", "Purifies air", "Boosts focus"],
    ingredients: ["Pure Lemon Oil"],
    faqs: [
      {
        question: "How can I diffuse it?",
        answer: "Add a few drops to your diffuser.",
      },
      {
        question: "Can I apply it to my skin?",
        answer:
          "Dilute with a carrier oil and avoid sun exposure after application as it can increase sun sensitivity.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/6/1.jpg", "/images/6/2.jpg"],
  },
  {
    title: "Orange Oil",
    description:
      "A sweet and cheerful essential oil that can help reduce stress and create a happy atmosphere.",
    prices: [7, 14, 19],
    discount: 11,
    reviews: [],
    sold: 88,
    sizes: [10, 30, 50],
    rate: 4.6,
    benefits: [
      "Reduces stress",
      "Uplifting aroma",
      "Creates a happy environment",
    ],
    ingredients: ["Pure Orange Oil"],
    faqs: [
      {
        question: "How can I use it?",
        answer:
          "Diffuse it, add to cleaning products for a fresh scent, or apply topically when diluted.",
      },
      {
        question: "Does it have any special precautions?",
        answer:
          "Avoid sun exposure after topical application as it can increase sun sensitivity.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/7/1.jpg", "/images/7/2.jpg"],
  },
  {
    title: "Eucalyptus Oil",
    description: "Supports respiratory health and clears congestion.",
    prices: [11, 19],
    discount: 18,
    reviews: [],
    sold: 65,
    sizes: [15, 30],
    rate: 4.2,
    benefits: ["Supports respiratory health", "Clears congestion"],
    ingredients: ["Pure Eucalyptus Oil"],
    faqs: [
      {
        question: "How do I use it for congestion?",
        answer:
          "Diffuse it or add a few drops to a bowl of hot water and inhale the steam.",
      },
      {
        question: "Is it safe for young children?",
        answer:
          "Use with caution and dilute significantly for young children. Consult a pediatrician.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/8/1.jpg", "/images/8/2.jpg"],
  },
  {
    title: "Grapefruit Oil",
    description:
      "An energizing and uplifting essential oil that can help boost metabolism and improve mood.",
    prices: [10, 17, 24],
    discount: 9,
    reviews: [],
    sold: 72,
    sizes: [10, 30, 50],
    rate: 4.5,
    benefits: ["Energizing", "Uplifting", "May support metabolism"],
    ingredients: ["Pure Grapefruit Oil"],
    faqs: [
      {
        question: "How can I use it for an energy boost?",
        answer: "Diffuse it or inhale directly from the bottle.",
      },
      {
        question: "Does it have any skin sensitivities?",
        answer:
          "Avoid sun exposure after topical application as it can increase photosensitivity.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/9/1.jpg", "/images/9/2.jpg"],
  },
  {
    title: "Frankincense Oil",
    description:
      "A revered essential oil known for its grounding, spiritual, and skin-rejuvenating properties.",
    prices: [25, 40, 60],
    discount: 10,
    reviews: [],
    sold: 48,
    sizes: [10, 30],
    rate: 4.8,
    benefits: [
      "Grounding",
      "Supports skin health",
      "Enhances spiritual practices",
    ],
    ingredients: ["Pure Frankincense Oil"],
    faqs: [
      {
        question: "How can I use it for skin?",
        answer: "Dilute with a carrier oil and apply to the face.",
      },
      {
        question: "Is it safe for internal use?",
        answer:
          "Consult a healthcare professional before ingesting essential oils.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils", "Skin Care"],
    images: ["/images/10/1.jpg", "/images/10/2.jpg"],
  },
  {
    title: "Cedarwood Oil",
    description:
      "A warm and woody essential oil that promotes relaxation and can help improve focus.",
    prices: [12, 20, 27],
    discount: 13,
    reviews: [],
    sold: 62,
    sizes: [10, 30, 50],
    rate: 4.3,
    benefits: ["Promotes relaxation", "Improves focus", "Woody aroma"],
    ingredients: ["Pure Cedarwood Oil"],
    faqs: [
      {
        question: "How can I use it for focus?",
        answer: "Diffuse it or apply a drop to your wrists.",
      },
      {
        question: "Is it safe for pets?",
        answer:
          "Use caution when diffusing around pets, as some essential oils can be harmful to them.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/11/1.jpg", "/images/11/2.jpg"],
  },
  {
    title: "Chamomile Oil",
    description:
      "Gently cleanses and soothes sensitive scalps, leaving hair soft and manageable.",
    prices: [14, 22],
    discount: 8,
    reviews: [],
    sold: 70,
    sizes: [250, 500],
    rate: 4.7,
    benefits: ["Soothes scalp", "Gentle cleansing", "Adds softness"],
    ingredients: ["Chamomile extract", "Aloe vera", "Mild surfactants"],
    faqs: [
      {
        question: "Is it sulfate-free?",
        answer: "Yes, this shampoo is sulfate-free.",
      },
      {
        question: "Can it be used daily?",
        answer: "Yes, it's gentle enough for daily use.",
      },
    ],
    categories: ["Hair Care", "Shampoos"],
    images: ["/images/12/1.jpg", "/images/12/2.jpg"],
  },
  {
    title: "Ylang Ylang Oil",
    description:
      "A sweet and floral essential oil known for its mood-boosting and aphrodisiac properties.",
    prices: [18, 32],
    discount: 16,
    reviews: [],
    sold: 58,
    sizes: [10, 30],
    rate: 4.6,
    benefits: ["Mood-boosting", "Promotes relaxation", "Floral aroma"],
    ingredients: ["Pure Ylang Ylang Oil"],
    faqs: [
      {
        question: "How can I best enjoy its scent?",
        answer:
          "Diffuse it or wear it as a natural perfume (diluted with a carrier oil).",
      },
      {
        question: "Is it safe for pregnant women?",
        answer:
          "Consult a healthcare professional before using essential oils during pregnancy.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils"],
    images: ["/images/13/1.jpg", "/images/13/2.jpg"],
  },
  {
    title: "Geranium Oil",
    description:
      "A floral and slightly sweet essential oil that balances emotions and promotes healthy skin.",
    prices: [15, 26, 38],
    discount: 11,
    reviews: [],
    sold: 68,
    sizes: [10, 30, 50],
    rate: 4.5,
    benefits: ["Balances emotions", "Promotes healthy skin", "Floral aroma"],
    ingredients: ["Pure Geranium Oil"],
    faqs: [
      {
        question: "How can I use it on my skin?",
        answer: "Dilute with a carrier oil and apply to the face or body.",
      },
      {
        question: "Can I diffuse it?",
        answer: "Yes, it has a lovely floral aroma when diffused.",
      },
    ],
    categories: ["Aromatherapy", "Essential Oils", "Skin Care"],
    images: ["/images/14/1.jpg", "/images/14/2.jpg"],
  },
];
export default dummyProducts;
