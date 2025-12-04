import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";

const locationKeywords = [
  "dermatology billing specialist in the USA",
  "Best dermatology billing specialist in the USA",
  "dermatology medical billing in new york",
  "dermatology payment solution"
];

const geoSections = [
  { title: "Dermatology Billing Specialist in the USA", content: "Expert dermatology billing and coding for US practices." },
  { title: "Best Dermatology Billing Specialist in the USA", content: "Top-rated dermatology billing and RCM for US clinics and specialists." },
  { title: "Dermatology Medical Billing in New York", content: "Comprehensive dermatology billing and coding for New York-based providers." },
  { title: "Dermatology Payment Solution", content: "Advanced payment solutions for dermatology practices and clinics." }
];

const DermatologyBilling = () => (
  <>
    <Helmet>
      <title>Dermatology Billing Services in USA, New York</title>
      <meta name="description" content="Expert dermatology billing specialist in the USA, best dermatology billing specialist, dermatology medical billing in New York, and payment solutions." />
      <meta name="keywords" content={locationKeywords.join(", ")} />
      <link rel="canonical" href="https://your-domain.com/services/dermatology-billing" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Dermatology Billing Services",
        "description": "Expert dermatology billing specialist in the USA, best dermatology billing specialist, dermatology medical billing in New York, and payment solutions.",
        "areaServed": ["USA", "NY"],
        "provider": { "@type": "Organization", "name": "The-Connections" }
      })}</script>
    </Helmet>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Dermatology Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized dermatology billing and coding for clinics and practices in the USA and New York.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Geo-Specific Dermatology Billing</h2>
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

export default DermatologyBilling;
