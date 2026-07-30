import { useLocation } from "react-router-dom";
import SEOHead from "./SEOHead";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://the-connections.com/#organization",
  name: "The Connections",
  url: "https://the-connections.com/",
  logo: "https://the-connections.com/favicon.png",
  image: "https://the-connections.com/og-image.jpeg",
  description:
    "India-based business process outsourcing company delivering cross-industry BPO solutions and specialist healthcare operations support.",
  email: "info@the-connections.com",
  telephone: "+91-788-789-8196",
  areaServed: "Worldwide",
  knowsAbout: [
    "Business process outsourcing",
    "Customer experience management",
    "Contact centre services",
    "Back-office operations",
    "Data management and analytics",
    "Customer acquisition",
    "Healthcare revenue cycle management",
    "Medical billing and coding",
  ],
  sameAs: ["https://www.linkedin.com/company/theconnectionsbpo/"],
};

const pages: Record<string, { title: string; description: string; keywords: string; schema?: Record<string, unknown>[] }> = {
  "/": {
    title: "BPO Services & Healthcare Operations | The Connections",
    description:
      "Scale customer experience, contact centre, back-office, analytics and acquisition with The Connections. Cross-industry BPO expertise plus specialist healthcare operations support.",
    keywords:
      "BPO services company, business process outsourcing, customer experience outsourcing, contact centre services, back office support, data analytics, healthcare operations, medical billing",
    schema: [
      organizationSchema,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://the-connections.com/#website",
        url: "https://the-connections.com/",
        name: "The Connections",
        publisher: { "@id": "https://the-connections.com/#organization" },
      },
    ],
  },
  "/bpo-services": {
    title: "BPO Services for Customer Experience & Operations | The Connections",
    description:
      "End-to-end BPO services for customer care, contact centres, back-office support, customer acquisition, analytics, surveys, invoice management and startup operations.",
    keywords:
      "BPO services, customer support outsourcing, contact centre outsourcing, back office services, customer acquisition, invoice management, business analytics",
  },
  "/healthcare-services": {
    title: "Healthcare Operations, Medical Billing & Coding | The Connections",
    description:
      "Specialist healthcare operations support covering medical billing, coding, RCM, credentialing, prior authorization, eligibility, claims, denials and patient support.",
    keywords:
      "healthcare operations outsourcing, medical billing services, medical coding services, revenue cycle management, healthcare RCM, credentialing, prior authorization",
  },
  "/all-services": {
    title: "BPO & Healthcare Operations Services | The Connections",
    description:
      "Explore The Connections services: cross-industry customer experience, contact centre, back-office, analytics and acquisition, plus specialist healthcare operations.",
    keywords:
      "outsourcing services, BPO solutions, customer experience, back office operations, healthcare BPO, business analytics",
  },
  "/industries": {
    title: "Industries We Serve with BPO Solutions | The Connections",
    description:
      "Domain-aware BPO solutions for financial services, retail, telecom, travel, education, automotive, real estate, pharmaceuticals and medical devices.",
    keywords:
      "industry BPO solutions, financial services BPO, retail customer support, telecom outsourcing, travel BPO, pharmaceutical support",
  },
  "/what-we-do": {
    title: "What We Do: Scalable BPO & Specialist Healthcare Support",
    description:
      "The Connections builds managed teams for customer experience, contact centres, back-office operations, analytics and specialist healthcare workflows.",
    keywords:
      "managed BPO teams, outsourced operations, customer experience operations, back office outsourcing, healthcare operations support",
  },
  "/company": {
    title: "About The Connections | BPO & Healthcare Operations Partner",
    description:
      "Meet The Connections, an India-based operations partner serving global businesses with scalable BPO capabilities and specialist healthcare support.",
    keywords:
      "The Connections BPO, outsourcing company India, Pune BPO, Bangalore BPO, Ahmedabad BPO, healthcare operations company",
  },
  "/why-us": {
    title: "Why Choose The Connections for BPO Services",
    description:
      "Choose The Connections for flexible teams, quality-led delivery, 24/7 operations and expertise across customer experience, back-office and healthcare workflows.",
    keywords:
      "BPO partner, outsourcing delivery team, 24/7 BPO services, quality outsourcing, scalable operations",
  },
  "/contact": {
    title: "Contact The Connections | Discuss Your BPO Requirements",
    description:
      "Contact The Connections to discuss customer experience, contact centre, back-office, analytics, acquisition or specialist healthcare operations support.",
    keywords: "contact BPO company, outsourcing consultation, BPO services India, healthcare operations support",
  },
};

const RouteSEO = () => {
  const { pathname } = useLocation();
  const page = pages[pathname];

  if (!page) return null;

  return (
    <SEOHead
      title={page.title}
      description={page.description}
      path={pathname}
      keywords={page.keywords}
      schema={page.schema}
    />
  );
};

export default RouteSEO;
