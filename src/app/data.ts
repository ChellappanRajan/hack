// Placeholder image URLs (replace with actual URLs)
const placeholderImageUrl = (name: string) =>
  `https://placehold.co/400x400/EEE/31343C?text=${name}&font=Montserrat`;

// Judge Data
interface Judge {
  name: string;
  twitter: string;
  bio: string;
  avatarUrl: string; // Add avatarUrl to the interface
}

export const judgesData: Judge[] = [
  {
    name: "Saranormous",
    twitter: "saranormous",
    bio: "A very enthusiastic and creative coder.",
    avatarUrl: placeholderImageUrl("Saran"),
  },
  {
    name: "Theo",
    twitter: "theo",
    bio: "Known for his insightful and humorous takes on tech.",
    avatarUrl: placeholderImageUrl("Theo"),
  },
  {
    name: "Youxi",
    twitter: "youyuxi",
    bio: "Creator of Vue.js, a popular JavaScript framework.",
    avatarUrl: placeholderImageUrl("Youxi"),
  },
  {
    name: "KP",
    twitter: "thisiskp_",
    bio: "A prominent figure in the web development community.",
    avatarUrl: placeholderImageUrl("KP"),
  },
  {
    name: "Alex Albert",
    twitter: "alexalbert__",
    bio: "Expert in building scalable and performant systems.",
    avatarUrl: placeholderImageUrl("Alex"),
  },
  {
    name: "Ben Tossell",
    twitter: "bentossell",
    bio: "Founder of a popular AI community.",
    avatarUrl: placeholderImageUrl("Ben"),
  },
];

// Sponsor Data (add logos)
interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

export const sponsorsData: Sponsor[] = [
  {
    name: "Supabase",
    logoUrl:
      "https://supabase.com/brand-assets/supabase-logo-wordmark-light.svg", // Replace with actual URL
    websiteUrl: "https://supabase.com/",
  },
  {
    name: "Netlify",
    logoUrl:
      "https://www.netlify.com/img/press/logos/netlify-logomark-full-colored.svg", // Replace
    websiteUrl: "https://www.netlify.com/",
  },
  {
    name: "Cloudflare",
    logoUrl: "https://www.cloudflare.com/img/cf-logo-horizontal-white.svg", // Replace
    websiteUrl: "https://www.cloudflare.com/",
  },
  {
    name: "Sentry",
    logoUrl:
      "https://sentry-brand.storage.googleapis.com/sentry-logo-black.svg", // Replace
    websiteUrl: "https://sentry.io/",
  },
  {
    name: "Loops",
    logoUrl: "https://www.loops.so/images/email/retina/logo.png", // Replace
    websiteUrl: "https://www.loops.so/",
  },
  {
    name: "AlgoFoundation",
    logoUrl:
      "https://algorand.foundation/wp-content/uploads/2020/06/algorand-foundation-logo.png", // Replace
    websiteUrl: "https://algorand.foundation/",
  },
  {
    name: "ExaAILabs",
    logoUrl: "https://exa.ai/images/logo.svg", // Replace
    websiteUrl: "https://exa.ai/",
  },
  {
    name: "HSR Hacker House",
    logoUrl:
      "https://hsrhackerhouse.com/wp-content/uploads/2023/01/HSR-Logo-Dark-1.svg", // Replace
    websiteUrl: "https://hsrhackerhouse.com/",
  },
];
