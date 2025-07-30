import Image from "next/image";
import { VentureCard } from "@/components/venture-card";
import { ThemeToggle } from "@/components/theme-toggle";
import {Logo} from "@/components/logo";

const ventures = [
  {
    name: "Wheelerz",
    field: "Accessible Tourism",
    founders: ["Hadar Elia"],
    vision: "Wheelerz empowers travelers with mobility disabilities to experience the world freely and confidently. We are building the world's go-to platform for planning, booking, and enjoying fully accessible trips.",
    problem: "Millions of people with mobility challenges face significant barriers when planning travel: fragmented information, lack of transparency about accessibility, and no central place to book inclusive services with confidence.",
    solution: "Wheelerz is a community-driven platform that makes accessible travel simple, empowering, and joyful. Travelers can use our AI-powered accessible trip planner, connect with vetted service providers, and access curated itineraries in destinations around the world.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a6f2ec83e23fb9b913d00"
  },
  {
    name: "Bunckers",
    field: "Functional Food",
    founders: ["Dor Perez"],
    vision: "To redefine what it means to indulge - by creating high-protein, nutrient-rich frozen snacks. Bunckers helps people enjoy delicious treats that align with a healthy, active lifestyle.",
    problem: "Most frozen treats today are either delicious but unhealthy, or healthy but lacking in flavor and texture. Health-conscious and active individuals often skip dessert because no existing product meets both their taste expectations and nutritional needs.",
    solution: "Bunckers introduces a new category: a high-protein, all-natural frozen treat made without added sugar, preservatives, or stabilizers. Each product is crafted from clean ingredients — fruits, nuts, and superfoods — offering a truly functional indulgence.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a6fbdc83e23fb9b91429b"
  },
  {
    name: "Matana",
    field: "Second-Hand Digital Marketplace",
    founders: ["Omer Mund"],
    vision: "To become the go-to platform for secure and community-driven exchange of second-hand digital assets—empowering both individuals and companies to trade smarter and more sustainably.",
    problem: "There is no trusted solution for buying and selling second-hand digital items. Users face high fraud risk on unregulated platforms like social media and forums, with no security or support mechanisms.",
    solution: "MATANA provides a safe, verified marketplace for trading digital assets such as gift cards and tickets. The platform now extends to a B2B model, enabling companies to offer MATANA to their employees—reducing digital waste, improving internal gifting culture, and supporting sustainable perks.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a6fcdc83e23fb9b9142b8"
  },
  {
    name: "FabriComm",
    field: "Printed Electronics on Textiles",
    founders: ["Einav Margalit"],
    vision: "To revolutionize the retail and supply chain industries through intelligent, fabric-based technologies.",
    problem: "Traditional methods of inventory management, theft prevention, and customer interaction are limited and inefficient, leading to significant annual losses for retailers.",
    solution: "Fabricomm is a deep-tech startup in the field of printed electronics on textiles, aiming to transform everyday fabrics into smart, connected surfaces. FabriComm embeds concealed tags directly into textiles using advanced printing technology, creating an invisible digital ID for each product.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a6fdec83e23fb9b9142d5"
  },
  {
    name: "PapinoTies",
    field: "Luxury Fashion Jewelry",
    founders: ["Michal Zaguri Lavi"],
    vision: "To redefine dress codes through bold, artistic jewelry that empowers personal expression at life's most meaningful moments.",
    problem: "Formalwear lacks unique and expressive jewelry options that suit both men and women, leaving little room for individuality in luxury dress codes.",
    solution: "PapinoTies transforms the iconic bow tie into a piece of gold statement jewelry, crafted with masterful goldsmithing, bold design, and a commitment to self-expression. The brand offers a new way to stand out, even in the most classic settings.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a6fefc83e23fb9b9142f2"
  },
  {
    name: "B-Scooter",
    field: "Automotive Safety Systems",
    founders: ["Daniel Rosenzweig"],
    vision: "Harnessing AI and computer vision to build safer, smarter cities—improving mobility, parking, and micro-mobility safety for both municipalities and citizens.",
    problem: "Cities struggle with inefficient parking management and the growing challenge of unsafe micro-mobility usage. Drivers waste time and fuel searching for parking, while electric scooters often operate unsafely in crowded urban environments, causing frequent accidents.",
    solution: "Our system offers two integrated products: A computer vision platform that detects real-time parking availability using city cameras and a safety kit for electric scooters that uses visual sensors and embedded intelligence to detect dangerous scenarios and prevent accidents.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a6ffbc83e23fb9b91430f"
  },
  {
    name: "NOFFF",
    field: "AI-Powered Creative Tools",
    founders: ["Neel Brosh"],
    vision: "To revolutionize how designers explore, connect, and develop ideas—by offering intuitive, AI-powered access to surprising and meaningful inspiration from across the web.",
    problem: "Creative professionals are overwhelmed by fragmented content, repetitive platforms, and algorithmic filters that limit discovery. Instead of tools that flatten creative expression, there's a growing need for platforms that empower designers, amplify their intuition, and help them stay irreplaceable.",
    solution: "nofff helps creatives gather, organize, and explore meaningful inspiration from across the web by uncovering unexpected visual and conceptual connections. By working with their intuition and creative instincts—not against them—nofff empowers designers to generate original ideas, deepen their perspective, and stay ahead in an AI-driven world.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a7007c83e23fb9b91432c"
  },
  {
    name: "Tovali",
    field: "Community-Based Services",
    founders: ["Yarom Cohen", "Tomer Misk"],
    vision: "At TOVALI, we aim to build a dynamic, accessible, and efficient community for everyday services that don't require professional qualifications. Our goal is to make it easy for anyone to get help from others in their community, quickly and conveniently. At the same time, we provide an opportunity for individuals to earn extra income during their free time.",
    problem: "Many people need help with simple daily tasks but struggle to find someone reliable, available, and affordable. Currently, there is no single platform that aggregates these types of services and makes them accessible in a user-friendly way.",
    solution: "TOVALI is an app that connects people who need basic services with local community members willing to help—quickly, directly, and without intermediaries. The app enables task posting, offer management, in-app chat, and scheduling—all in one place.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a7011c83e23fb9b914349"
  },
  {
    name: "AuraTrain",
    field: "Fitness Industry SaaS",
    founders: ["Amit Kadison", "Reuven Kadison", "Guy Herzog"],
    vision: "To empower fitness businesses to scale effectively by maximizing client value, reducing churn, and driving sustainable growth — all through a smart and engaging SaaS platform.",
    problem: "Fitness business owners struggle to consistently track their clients' progress and deliver an engaging experience that fosters long-term commitment.",
    solution: "We provide a dedicated SaaS platform that combines gamification and community-building. Instead of using outdated tools like PDFs or Excel — which are difficult to scale and lack technological impact — our solution offers a smart, branded app that empowers trainers to build personalized workout and nutrition plans.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a701bc83e23fb9b914363"
  },
  {
    name: "Oceaneo",
    field: "Marine Safety & Freediving Technologies",
    founders: ["Yoel Kopelman", "Dor Perez"],
    vision: "To redefine personal safety in freediving through intelligent, human-centered design that empowers divers and prevents avoidable tragedies.",
    problem: "Freedivers often dive without adequate safety support, increasing the risk of faint under water (blackouts) and other life-threatening incidents—especially outside supervised environments.",
    solution: "BuddyGuard is a smart, compact safety device for freedivers. It monitors diving patterns and triggers an automatic or manual CO₂-based flotation system in emergencies, providing real-time protection, performance tracking, and peace of mind—without replacing established human safety protocols.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a7025c83e23fb9b914383"
  },
  {
    name: "Shenzo",
    field: "Fashion-Tech / Retail",
    founders: ["Sheli Friedman"],
    vision: "To redefine the experience of wearing high heels by combining technology, elegance, and functionality.",
    problem: "Wearing high heels comes at a high cost: pain, discomfort, long-term foot and posture issues, and limited mobility. Still, high heels are a symbol of confidence, elegance, and professionalism. This ongoing dilemma forces women to choose between looking polished and feeling comfortable—carrying extra shoes, removing heels at events, or avoiding them altogether.",
    solution: "Our soles allow women to easily and quickly switch from heels to flats whenever they do not need - or want - to wear high heels. This reduces the amount of time they spent wearing heels and minimizes their negative impacts.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a7030c83e23fb9b9143a0",
    status: "New venture"
  },
  {
    name: "Platypus",
    field: "Pest Control Industry",
    founders: ["Gilad Yarkoni", "Marina Arshavsky Rosental"],
    vision: "Platypus introduces a fresh approach and innovative formulation technology to the pest control industry with the PlatyForm gel. With PlatyForm, pest control companies will develop new solutions that are more economical, ecological, and efficient.",
    problem: "The time and cost to market of a new pest control product are 12 years and $300 million. It includes long R&D and registration processes. Today, each company inefficiently develops a different chemical formulation (delivery system) for each product.",
    solution: "The PlatyForm is the first ready-to-use delivery system for volatile bioactive ingredients, including terpenes, terpenoids, pheromones, and essential oils. Using a single delivery system for multiple products is the new approach to reduce years of lengthy and costly R&D stages and operational expenses.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a703ac83e23fb9b9143bd",
    status: "New venture"
  },
  {
    name: "Armato",
    field: "Fashion & Utility",
    founders: ["Ido Sachli", "Zion Karsenti"],
    vision: "Founded on the principles of comfort, security, and fashion, Armato creates joggers and trainers adapted for concealed carry.",
    problem: "More than 21 million Americans carry a concealed firearm, yet their daily wardrobe forces an uncomfortable choice resulting with constant adjusting, reduced mobility, and a very real risk that carriers will leave their weapon at home. There is no apparel that allows people to stay armed, comfortable, and stylish.",
    solution: "Armato has redefined everyday carry with a waistband designed for seamless belt insertion and firearm support. It lets wearers transition effortlessly from lounging on the couch to commuting or even cardio—no outfit change required. With minimalist styling that pairs just as easily with sneakers as it does with a blazer, Armato delivers discreet protection that feels natural, looks sharp, and stays with you all day, every day.",
    brainshopUrl: "https://brainshop.oneqmethod.com/boards/688a7045c83e23fb9b9143da",
    status: "New venture"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from to-gradient-to">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo className="h-12 w-auto" />
            <div className="hidden sm:block h-8 w-px bg-border"></div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-foreground">
                × Shenkar Hub
              </h1>
              <p className="text-sm text-muted-foreground">
                Joint Venture Program
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Innovation in Action
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Discover groundbreaking startups from our joint venture program, 
          where cutting-edge technology meets entrepreneurial excellence.
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span>{ventures.length} Active Ventures</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span>Q2 2025 Cohort</span>
          </div>
        </div>
      </section>

      {/* Ventures Grid */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <VentureCard
              key={index}
              name={venture.name}
              field={venture.field}
              founders={venture.founders}
              vision={venture.vision}
              problem={venture.problem}
              solution={venture.solution}
              brainshopUrl={venture.brainshopUrl}
              status={venture.status}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 OneQ × Shenkar Hub. Empowering innovation through collaboration.
          </p>
        </div>
      </footer>
    </div>
  );
}
