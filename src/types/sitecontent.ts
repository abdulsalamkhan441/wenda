import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

import type {
  SimpleNavLink,
  HeroSectionConfig,
  DifferenceConfig,
  Agent,
  Property,
  ReviewPageData,
  CTAContentConfig,
  DashboardCardConfig,
  StatBarConfig,
  ValuationConfig,
  PropertiesSectionConfig,
  FooterConfig,
} from "../types";

/**
 ============================================================
   SITE CONFIG — SINGLE SOURCE OF TRUTH FOR THIS CLIENT
 ============================================================
 * Client: Wenda Wherleyca Loui-Gene - eXp Agence Immobilière
 * Listings: 1 real + 6 demo (demo entries are marked // DEMO)
 * VERIFY: Years, sold volume, satisfaction %, area count are placeholders; service area inferred from the Montréal listing.
 * VERIFY: Studio area uses the official 30 m² (~323 sq ft), not the old 379 sq ft. '40,000+ sq ft amenities' claim NOT used.
 * VERIFY: Centris profile lists French only: do not claim bilingual service. She already has an eXp agent site.
 ============================================================
 */

// ----------------------------------------------------------
// Navbar.tsx
// ----------------------------------------------------------

export const navbarLinks: SimpleNavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutus" },
  { name: "Services", href: "/services" },
  { name: "Properties", href: "/#properties" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/#contact" },
];

// ----------------------------------------------------------
// HeroSection.tsx
// ----------------------------------------------------------

export const heroConfig: HeroSectionConfig = {
  brand: {
    initials: "WL",
    name: "Wenda Wherleyca Loui-Gene",
    title: "Residential Real Estate Broker",
    heroImage: "/3.jpg",
    heroImageAlt: "Montréal Real Estate",
  },
  hero: {
    eyebrow: "eXp Agence Immobilière · Montréal & Surrounding Areas",
    headingMain: "Buy, sell, and invest with",
    headingItalic: "confidence",
    headingEnd: "with Wenda Wherleyca Loui-Gene.",
    subheading:
      "Dedicated residential real estate broker serving Montréal, Ville-Marie, and surrounding communities since 2020. Delivering personalized guidance and seamless property transactions.",
    primaryCtaText: "Start a Conversation",
    primaryCtaLink: "/aboutus",
    headerCtaText: "Get In Touch",
    headerCtaLink: "/#contact",
  },
  navLinks: [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/", active: false },
    { name: "Services", href: "/", active: false },
    { name: "Properties", href: "/#properties", active: false },
    { name: "Insights", href: "/#insights", active: false },
    { name: "Contact", href: "/#contact", active: false },
  ],
  stats: [
    { icon: Award, value: "$10M+", suffix: "", label: "worth of real estate sold" },
    { icon: Building2, value: "6+", suffix: " Yrs", label: "of experience (Since 2020)" },
    { icon: Users, value: "96%", suffix: "", label: "client satisfaction" },
    { icon: Clock, value: "8+", suffix: " Areas", label: "areas served" },
  ],
};

// ----------------------------------------------------------
// WhyUsSection.tsx ("The Wenda Difference")
// ----------------------------------------------------------

export const differenceConfig: DifferenceConfig = {
  eyebrow: "/ Why Choose Wenda?",
  headingMain: "The Wenda ",
  headingItalic: "Difference",
  subtext:
    "Combining deep local market knowledge across Montréal, Ville-Marie, and surrounding communities with personalized service, clear communication, and dedicated professional representation.",
  callNowText: "Call Direct",
  callNowHref: "tel:4384090590",
  bookConsultationText: "Book a Consultation",
  bookConsultationHref: "#contact",
  features: [
    {
      icon: TrendingUp,
      title: "Extensive Regional Coverage",
      description:
        "Serving Montréal, Ville-Marie, Saint-Laurent, Laval, and surrounding communities.",
    },
    {
      icon: ShieldCheck,
      title: "OACIQ & eXp Québec Standards",
      description:
        "Professional brokerage representation ensuring all legal, contractual, and regulatory standards are rigorously met.",
    },
    {
      icon: BadgeCheck,
      title: "Licensed Real Estate Professional",
      description:
        "Expert strategic guidance tailored to condominiums, studios, investment properties, and first-time buyers.",
      linkText: "Our services",
      linkHref: "/services",
    },
    {
      icon: HeartHandshake,
      title: "Client-Centric Commitment",
      description:
        "A personalized, responsive approach focused on building lasting trust and achieving your unique real estate goals.",
      linkText: "Learn about Wenda",
      linkHref: "/aboutus",
    },
  ],
};

// ----------------------------------------------------------
// AgentSection.tsx
// ----------------------------------------------------------

export const agent: Agent = {
  name: "Wenda Wherleyca Loui-Gene",
  role: "Residential Real Estate Broker | eXp Agence Immobilière",
  bio: "A residential real estate broker with eXp Agence Immobilière, Wenda Wherleyca Loui-Gene helps buyers, sellers, and investors in Montréal and the surrounding area. Holding a valid OACIQ permit, Wenda offers attentive service, clear communication, and a client-first approach to condos, investment properties, and family homes.",
  image: "/user.png",
  specialties: [
    "Condominiums & Studios",
    "Investment Properties",
    "First-Time Homebuyer Guidance",
    "Buyer & Seller Representation",
    "Free Comparative Market Assessments",
    "Montréal, Ville-Marie & Surrounding Communities",
  ],
  recentClosings: [
    { address: "Condos & Studios", neighbourhood: "Ville-Marie & Quartier des Spectacles", price: "Guidance" },
    { address: "Investment Properties", neighbourhood: "Montréal & Surrounding Areas", price: "Opportunity" },
    { address: "Free Property Evaluation", neighbourhood: "Montréal", price: "Value" },
    { address: "Client Satisfaction Focus", neighbourhood: "96% Satisfaction Rate", price: "Trust" },
  ],
};

// ----------------------------------------------------------
// PropertiesCarousel.tsx (7 Total Listings — 1 real, 6 demo)
// ----------------------------------------------------------

export const properties: Property[] = [
  {
    id: "1",
    number: "01/07",
    title: "Plateau-Mont-Royal Condo",
    subtitle: "Bright condo with exposed brick, high ceilings, and walkable access to cafés and the metro.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "850 sq ft", beds: "2 Beds", baths: "1 Bath" },
    mls: "MLS® 202624001",  // DEMO
  },
  {
    id: "2",
    number: "02/07",
    title: "Rosemont Family Townhome",
    subtitle: "Well-kept townhome close to parks, schools, and transit with a private backyard.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "1,500 sq ft", beds: "3 Beds", baths: "2 Baths" },
    mls: "MLS® 202624002",  // DEMO
  },
  {
    id: "3",
    number: "03/07",
    title: "Saint-Laurent Detached Home",
    subtitle: "Spacious family home with a finished basement, a double driveway, and a quiet street setting.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "residential",
    status: "Active",
    specs: { size: "2,000 sq ft", beds: "4 Beds", baths: "2.5 Baths" },
    mls: "MLS® 202624003",  // DEMO
  },
  {
    id: "4",
    number: "04/07",
    title: "#3910 - 1210 Rue Jeanne-Mance, Montréal (Ville-Marie)",
    subtitle: "Modern studio in the Maestria project, Quartier des Spectacles, with investment potential.",
    image: "/listing.jpg",
    price: "$380,000",
    category: "residential",
    status: "Active",
    specs: { size: "30 m² (~323 sq ft)", beds: "Studio", baths: "1 Bath" },
    mls: "Centris® 26315235",
  },
  {
    id: "5",
    number: "05/07",
    title: "Outremont Executive Residence",
    subtitle: "Refined living in a prestigious neighbourhood with premium finishes and a landscaped garden.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,200 sq ft", beds: "5 Beds", baths: "3.5 Baths" },
    mls: "MLS® 202624005",  // DEMO
  },
  {
    id: "6",
    number: "06/07",
    title: "Laval Country Retreat",
    subtitle: "Peaceful property with mature trees and open space, a short drive from downtown Montréal.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "2,500 sq ft", beds: "4 Beds", baths: "3 Baths" },
    mls: "MLS® 202624006",  // DEMO
  },
  {
    id: "7",
    number: "07/07",
    title: "Villeray Investment Triplex",
    subtitle: "Well-maintained triplex offering reliable rental income close to the metro.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    price: "Contact for Price",
    category: "portfolio",
    status: "Active",
    specs: { size: "3,000 sq ft", beds: "6 Beds", baths: "3 Baths" },
    mls: "MLS® 202624007",  // DEMO
  },
];

export const propertiesSectionConfig: PropertiesSectionConfig = {
  brand: { initial: agent.name.charAt(0), name: agent.name },
  contactLink: { label: "Get in touch", href: "#contact" },
  filters: {
    all: "All Properties",
    residential: "Residential & buyers",
    portfolio: "Rural & specialty",
  },
  heading: {
    line1: "Explore",
    line1Emphasis: "your",
    line2: "possibilities",
    line2Emphasis: "with",
  },
  inquireButtonText: "Inquire",
  footerNote: {
    label: "Montréal Clients",
    body: "From downtown condos to family homes across Montréal, receive personal guidance for the move ahead.",
  },
  areaBadge: "Montréal & surrounding areas",
};

// ----------------------------------------------------------
// ReviewsGlassSection.tsx
// ----------------------------------------------------------

export const reviewPages: ReviewPageData[] = [
  {
    featured: {
      name: "Trusted Regional Professional",
      quote: "Providing dedicated guidance and professional expertise for every step of your real estate transaction.",
      tags: ["eXp Québec", "96% Satisfaction"],
      handle: "Wenda Wherleyca Loui-Gene | eXp Québec",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    quoteBanner: {
      quote: "Committed to delivering smooth, stress-free real estate experiences across Montréal, Ville-Marie, and surrounding communities.",
      name: "Wenda Wherleyca Loui-Gene",
      role: "Residential Real Estate Broker",
      initials: "WL",
      rating: 5,
    },
    wide: {
      name: "Attentive & Professional",
      timeAgo: "Since 2020",
      quote: "6+ years of professional real estate experience serving over 8 regional communities with passion and dedication.",
      rating: 5,
    },
    hero: {
      name: "Wenda Wherleyca Loui-Gene",
      role: "Residential Real Estate Broker | eXp Agence Immobilière",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Experience & Integrity",
      body: "Wenda brings local market knowledge, thorough communication, and personalized care to clients across Montréal.",
      rating: 5,
    },
    badge: { reviewCount: "96%", ratingLabel: "Client Satisfaction", clientsCount: "8+ Areas" },
    split: {
      date: "Montréal & Surrounding Areas",
      title: "Your Regional Real Estate Partner",
      quote: "Helping families, buyers, and investors navigate local real estate markets with complete confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    search: { title: "Montréal Real Estate", body: "Comprehensive buy, sell, and market evaluation services." },
    teal: {
      name: "Market Expertise",
      body: "Leveraging the eXp Québec network and regional market insight to deliver optimal results for every client.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      likes: 0,
      views: "$10M+ Sold",
    },
  },
];

// ----------------------------------------------------------
// FinalCTASection.tsx
// ----------------------------------------------------------

export const ctaConfig: CTAContentConfig = {
  headingMain: "Ready to Start Your",
  headingItalic: "Real Estate Journey?",
  subheading:
    "Contact Wenda Wherleyca Loui-Gene at eXp Agence Immobilière for expert real estate services across Montréal, Ville-Marie, and surrounding communities.",
  bulletPoints: [
    "Over 6 years of dedicated experience serving clients since 2020",
    "Free, no-obligation comparative market analysis for your property",
    "Attentive service across 8+ areas including Montréal, Ville-Marie, surrounding communities",
  ],
  primaryCtaText: "Book Consult",
  primaryCtaLink: "#contact",
  secondaryCtaText: "Call Wenda (438) 409-0590",
  secondaryCtaLink: "tel:4384090590",
  agentName: "Wenda Wherleyca Loui-Gene",
  agentTitle: "Residential Real Estate Broker",
};

export const dashboardCardConfig: DashboardCardConfig = {
  title: "Wenda's Approach",
  subtitle: "Montréal",
  stats: [
    { label: "Satisfaction", value: "96%" },
    { label: "Experience", value: "6+ Years" },
  ],
  marketStatusLabel: "Status",
  marketStatusValue: "Ready to Assist",
  badgeName: "eXp Agence Immobilière",
  badgeTagline: "Trust, Professionalism, Results",
};

export const ctaStatBars: StatBarConfig[] = [
  { label: "Experience", value: "6+ Years", color: "bg-accent-champagne", valueColor: "text-accent-champagne" },
  { label: "Satisfaction", value: "96%", color: "bg-emerald-400", valueColor: "text-emerald-400" },
];

// ----------------------------------------------------------
// HomeValuationSection.tsx
// ----------------------------------------------------------

export const valuationConfig: ValuationConfig = {
  sectionTag: "Home Evaluation",
  title: {
    main: "What Is Your Property",
    highlight: "Really Worth?",
  },
  description:
    "Thinking of selling or curious about market value in your sector? Request a free, professional market evaluation prepared by Wenda Wherleyca Loui-Gene.",
  defaultPropertyType: "Single Family Home",
  formPlaceholders: {
    name: "e.g. John Smith",
    emailOrPhone: "e.g. name@example.com or (438) 555-0199",
    address: "e.g. 123 Main Street, Montréal",
  },
  contactDetails: {
    phone: { label: "Direct: (438) 409-0590", href: "tel:4384090590" },
    email: { label: "wherleyca@gmail.com", href: "mailto:wherleyca@gmail.com" },
    location: "eXp Agence Immobilière, 1111 boulevard Dr.-Frederick-Philips, suite 601, Saint-Laurent, QC H4M 2X6",
  },
  propertyOptions: [
    { label: "Single Family Home", value: "Single Family Home" },
    { label: "Condominium", value: "Condominium" },
    { label: "Multi-Family / Income Property", value: "Multi-Family" },
    { label: "Townhouse / Rowhouse", value: "Townhouse" },
  ],
};

// ----------------------------------------------------------
// FooterSection.tsx
// ----------------------------------------------------------

export const footerConfig: FooterConfig = {
  headerImage: {
    src: "/7.jpg",
    alt: "eXp Agence Immobilière - Wenda Wherleyca Loui-Gene",
  },
  exploreSection: {
    title: "Explore",
    links: [
      { label: "Buy & Sell Residential", href: "#services" },
      { label: "Free Property Valuation", href: "#valuation" },
      { label: "Featured Listings", href: "#properties" },
      { label: "About Wenda Wherleyca Loui-Gene", href: "#about" },
    ],
  },
  resourcesSection: {
    title: "Resources",
    links: [
      { label: "First-Time Buyer Guide", href: "#services" },
      { label: "Home Seller Tips", href: "#services" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Get in Touch", href: "#contact" },
    ],
  },
  legalSection: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "OACIQ Compliance", href: "#disclaimer" },
    ],
  },
  contactDetails: {
    location: "Montréal, QC",
    phonePrimary: { label: "Direct: (438) 409-0590", href: "tel:4384090590" },
    phoneSecondary: { label: "Office: (438) 387-5743", href: "tel:4383875743" },
    contactLink: { label: "Email: wherleyca@gmail.com", href: "mailto:wherleyca@gmail.com" },
  },
  brandBar: {
    brandName: "WENDA WHERLEYCA LOUI-GENE",
    badgeText: "eXp Agence Immobilière",
    footerLinks: [
      { label: "Terms & Conditions", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Sitemap", href: "#sitemap" },
    ],
    copyrightHolder: "Wenda Wherleyca Loui-Gene - eXp Agence Immobilière.",
    copyrightRights: "All rights reserved.",
  },
};