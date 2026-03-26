export const client = {
  // Business Details
  name: "C.Smith Paving And Landscaping",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Bath.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01225 314265",
  email: "",
  website: "",

  // Location
  address: "Bath",
  city: "Bath",
  county: "",
  postcode: "",
  basedIn: "Bath",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "3",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Golding's Gardeners Ltd", rating: 5, text: "Brilliant service. Ordered a grab, came on time, well early which was even better! And didn't charge the earth..... just moved it. Proper", date: "a month ago", badge: "Local Guide" },
    { name: "Paul Hussey", rating: 5, text: "Outstanding work! Beautiful landscaping, flawless paver installation, and great attention to detail. Professional, dependable, and easy to work with. I would definitely use them again!", date: "a month ago" },
    { name: "Louise Kiely", rating: 5, text: "Carl was fantastic, efficient, clean & tidy and did a great job. Would highly recommend.", date: "a month ago" },
    { name: "Kirsty Derrick", rating: 5, text: "We’re absolutely delighted with the completed patio and a new driveway in summer 2025.  From the initial consultation through to the final finish, Carl and his team were professional, knowledgeable, and clearly took pride in their work. The quality of the workmanship is excellent, with great attention to detail and a finish that has completely transformed the look and practicality of our outdoor space.  The project was well organised, kept on schedule, and the team were friendly, tidy, and respectful throughout. Communication was clear at every stage, and any questions we had were answered promptly and honestly.  It was also very reassuring to know that the company is BANES Council accredited for dropped kerbs, which gave us confidence that all work was carried out to the correct standards and fully compliant with local authority requirements. We wouldn’t hesitate to recommend them to anyone looking for high quality landscaping, patio, or driveway work. A truly professional service from start to finish", date: "a month ago", badge: "Local Guide" },
    { name: "josh gordon", rating: 5, text: "Nice lads, get the job done to a high standard! Clean tidy and very reliable 👌  would highly recommend …", date: "a month ago" },
    { name: "Samantha Archer", rating: 5, text: "If you’re looking for a reliable, skilled, and hardworking landscaper who truly takes pride in their work, I highly recommend them. We’ve already received so many compliments from neighbours in regards to the patio they laid and will absolutely use them again for future projects! Attention to detail was spot on - lovely lads", date: "a month ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "C.Smith Paving And Landscaping | Landscaper in Bath",
    description: "Professional landscaper in Bath. 5.0-star rated on Google. Call for a free quote.",
  },
};
