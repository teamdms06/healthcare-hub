import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";

const locationKeywords = [
  "Top Ophthalmology Medical Billing Services in New York",
  "Ophthalmology billing services in the USA",
  "Top Ophthalmology Medical Billing Services in Texas",
  "Best Ophthalmology Medical Billing Services in Pennsylvania",
  "Ophthalmology Medical Billing Service in California",
  "Ophthalmology medical billing services in Florida"
];

const geoSections = [
  { title: "Top Ophthalmology Medical Billing Services in New York", content: "Expert ophthalmology billing for New York eye care providers." },
  { title: "Ophthalmology billing services in the USA", content: "Nationwide ophthalmology billing and coding for eye clinics and specialists." },
  { title: "Top Ophthalmology Medical Billing Services in Texas", content: "Leading ophthalmology billing solutions for Texas-based practices." },
  { title: "Best Ophthalmology Medical Billing Services in Pennsylvania", content: "Comprehensive ophthalmology billing for Pennsylvania eye care professionals." },
  { title: "Ophthalmology Medical Billing Service in California", content: "California's top ophthalmology billing and coding specialists." },
  { title: "Ophthalmology medical billing services in Florida", content: "Ophthalmology billing and RCM for Florida clinics and eye surgeons." }
];

const OphthalmologyBilling = () => (
  <>
    <Helmet>
      <title>Ophthalmology Billing Services in New York, USA, Texas, Pennsylvania, California, Florida</title>
      <meta name="description" content="Expert ophthalmology billing services in New York, USA, Texas, Pennsylvania, California, and Florida. Eye care billing and coding specialists." />
      <meta name="keywords" content={locationKeywords.join(", ")} />
      <link rel="canonical" href="https://your-domain.com/services/ophthalmology-billing" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ophthalmology Billing Services",
        "description": "Expert ophthalmology billing services in New York, USA, Texas, Pennsylvania, California, and Florida.",
        "areaServed": ["NY", "USA", "TX", "PA", "CA", "FL"],
        "provider": { "@type": "Organization", "name": "The Connections" }
      })}</script>
    </Helmet>
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Ophthalmology Billing Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Specialized ophthalmology billing and coding for eye care practices, clinics, and surgeons in all major US regions.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Geo-Specific Ophthalmology Billing</h2>
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

export default OphthalmologyBilling;
