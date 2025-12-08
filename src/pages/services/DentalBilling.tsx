import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smile, CheckCircle, Shield, TrendingUp, Clock, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/healthcare/dental.jpg";

const DentalBilling = () => {
    const locationKeywords = [
      "dental billing company in new york",
      "Dental Revenue Cycle Management in new york",
      "dental billing and coding in new jersey",
      "Dental Billing Services in New York",
      "dental medical billing specialist in the usa"
    ];

    const geoSections = [
      {
        title: "Dental Billing Company in New York",
        content: "Professional dental billing and coding services for New York dental practices."
      },
      {
        title: "Dental Revenue Cycle Management in New York",
        content: "Comprehensive dental revenue cycle management for New York-based clinics and specialists."
      },
      {
        title: "Dental Billing and Coding in New Jersey",
        content: "Expert dental billing and CDT coding for New Jersey dental offices."
      },
      {
        title: "Dental Billing Services in New York",
        content: "Full-service dental billing solutions for New York dentists, orthodontists, and oral surgeons."
      },
      {
        title: "Dental Medical Billing Specialist in the USA",
        content: "Nationwide dental medical billing specialists serving practices across the USA."
      }
    ];
  const features = [
    "CDT coding expertise",
    "Dental insurance verification",
    "Treatment plan pre-authorization",
    "Narrative report preparation",
    "Periodontal charting support",
    "Dental-specific claim submission"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Revenue",
      description: "Optimize reimbursement with accurate dental coding"
    },
    {
      icon: Clock,
      title: "Faster Payments",
      description: "Reduce payment cycles with clean claims"
    },
    {
      icon: Shield,
      title: "CDT Expertise",
      description: "Certified dental coders ensuring accuracy"
    },
    {
      icon: Target,
      title: "Lower Denials",
      description: "Minimize denials with proper documentation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dental Billing Services in New York, New Jersey, USA | Dental Revenue Cycle Management & CDT Coding</title>
        <meta name="description" content="Professional dental billing company in New York, dental revenue cycle management, CDT coding, and nationwide dental medical billing specialists." />
        <meta name="keywords" content={locationKeywords.join(", ")} />
        <link rel="canonical" href="https://your-domain.com/services/dental-billing" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Dental Billing Services",
          "description": "Professional dental billing company in New York, dental revenue cycle management, CDT coding, and nationwide dental medical billing specialists.",
          "areaServed": ["NY", "NJ", "USA"],
          "provider": {
            "@type": "Organization",
            "name": "The-Connections"
          }
        })}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4"> */}
      <section className="relative text-white py-20 min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">          
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Smile className="h-12 w-12 text-accent" />
                <span className="text-accent font-semibold uppercase tracking-wider">Specialty Billing</span>
              </div>
              {/* <h1 className="text-5xl md:text-6xl font-bold mb-6">Dental Billing Services</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed"> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Dental Billing Services</h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">              
                Specialized dental billing services with CDT coding expertise to maximize reimbursement 
                for dental practices of all sizes and specialties.
              </p>
            </div>
          </div>
        </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Complete Dental Billing Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent transition-colors">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>
            <Card className="border-2 border-accent mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Expert Dental Revenue Cycle Management</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our dental billing specialists understand the unique requirements of dental insurance billing, 
                  including CDT coding, narrative reports, and periodontal charting. We handle everything from 
                  treatment plan pre-authorization to final payment posting.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a general dentist, periodontist, orthodontist, or oral surgeon, we have the 
                  expertise to optimize your revenue cycle and reduce administrative burden.
                </p>
              </CardContent>
            </Card>
            {/* Geo-specific keyword sections */}
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

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Benefits</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8">
                      <Icon className="h-16 w-16 text-accent mx-auto mb-6 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Optimize Your Dental Practice Revenue</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Expert dental billing services designed specifically for dental practices
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/mental-health-billing">View Mental Health Billing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}

export default DentalBilling;
