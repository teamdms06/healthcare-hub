import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";

const locationKeywords = [
  "Gastroenterology Billing Services in the USA",
  "gastroenterology billing and coding services",
  "Top gastroenterology billing solutions in the usa",
  "gastroenterology medical billing companies",
  "gastroenterology billing services",
  "gastroenterology billing & coding services",
  "gastroenterology billing companies",
  "gastroenterology medical billing services in usa",
  "best gastroenterology billing in new york"
];

const geoSections = [
  { title: "Gastroenterology Billing Services in the USA", content: "Expert gastroenterology billing and coding for US practices." },
  { title: "Gastroenterology Billing and Coding Services", content: "Comprehensive GI billing and coding for all specialties." },
  { title: "Top Gastroenterology Billing Solutions in the USA", content: "Leading gastroenterology billing solutions for US clinics and specialists." },
  { title: "Gastroenterology Medical Billing Companies", content: "Top GI medical billing companies serving practices nationwide." },
  { title: "Gastroenterology Billing Services", content: "Full-service gastroenterology billing for clinics and hospitals." },
  { title: "Gastroenterology Billing & Coding Services", content: "GI billing and coding expertise for maximum reimbursement." },
  { title: "Gastroenterology Billing Companies", content: "Nationwide gastroenterology billing companies for all practice sizes." },
  { title: "Gastroenterology Medical Billing Services in USA", content: "GI medical billing services for US-based providers." },
  { title: "Best Gastroenterology Billing in New York", content: "New York's best gastroenterology billing and coding specialists." }
];

const GastroenterologyBilling = () => (
  <>
    <Helmet>
      <title>Gastroenterology Billing Services in USA, New York</title>
      <meta name="description" content="Expert gastroenterology billing services in the USA, best GI billing in New York, GI billing and coding companies." />
      <meta name="keywords" content={locationKeywords.join(", ")} />
      <link rel="canonical" href="https://your-domain.com/services/gastroenterology-billing" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gastroenterology Billing Services",
        "description": "Expert gastroenterology billing services in the USA, best GI billing in New York, GI billing and coding companies.",
        "areaServed": ["USA", "NY"],
        "provider": { "@type": "Organization", "name": "The-Connections" }
      })}</script>
    </Helmet>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gastroenterology Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized gastroenterology billing and coding for clinics and practices in the USA and New York.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Geo-Specific Gastroenterology Billing</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {geoSections.map((section, idx) => (
                <Card key={idx} className="border-2 border-primary">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">{section.title}</h4>
                    <p className="text-muted-foreground">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default GastroenterologyBilling;
