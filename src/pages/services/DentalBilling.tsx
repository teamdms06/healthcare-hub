import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smile, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/healthcare/dental.jpg";
import dental from "@/assets/healthcare/dental-billing.jpg";
import dental1 from "@/assets/healthcare/dental-billing-1.jpg";

const DentalBilling = () => {
  const locationKeywords = [
    "dental billing company in new york",
    "Dental Revenue Cycle Management in new york",
    "dental billing and coding in new jersey",
    "Dental Billing Services in New York",
    "dental medical billing specialist in the usa"
  ];

  const managementItems = [
    "Insurance eligibility verification, benefits breakdown, and frequency limitations for dental and medical plans.",
    "Accurate CDT and CPT coding for restorative, surgical, periodontal, endodontic, and implant procedures.",
    "Pre-treatment estimates, prior authorizations, and medical necessity documentation for complex cases.",
    "Electronic claim submission with X-rays, photos, periodontal charting, and narrative attachments.",
    "ERA posting, EOB review, and reconciliation of patient and insurance balances.",
    "Denial analysis, appeals, and systematic follow-up on unpaid or underpaid claims."
  ];

  const specialties = [
    "Oral and maxillofacial surgery – extractions, bone grafts, pathology, trauma-related care.",
    "Periodontics – scaling and root planing, periodontal surgeries, grafting procedures.",
    "Endodontics – root canal therapy, retreatments, apicoectomies, emergency visits.",
    "Implant dentistry – implants, abutments, prosthetics, and related surgical procedures.",
    "Orthodontics – comprehensive and limited treatment plans, aligners, retention programs.",
    "Pediatric dentistry – preventive, restorative, and medically necessary pediatric dental care.",
    "TMJ and occlusal therapy – splints, bite appliances, and related treatments.",
    "Sleep apnea appliances – oral devices billed to medical when medically necessary."
  ];

  const workflowSteps = [
    "We integrate with your practice management / EHR system and review your current billing process.",
    "Our team verifies dental and medical benefits, documents plan limitations, and identifies when medical billing applies.",
    "Procedures are coded using CDT, CPT, and ICD-10 as appropriate, with complete narratives and clinical attachments.",
    "Claims are scrubbed, submitted electronically, and tracked until payment or final resolution.",
    "Payments are posted daily, patient responsibility is updated, and clear patient statements are generated.",
    "Denials are analyzed, appealed where appropriate, and used to strengthen future claim submissions."
  ];

  return (
    <>
      <Helmet>
        <title>
          Billing and Coding for Dental Specialty | Dental Billing Services in New York, New Jersey, USA
        </title>
        <meta
          name="description"
          content="Comprehensive billing and coding for dental specialties with CDT/CPT expertise, medical necessity documentation, denial management, and complete dental revenue cycle management for practices across New York, New Jersey, and the USA."
        />
        <meta name="keywords" content={locationKeywords.join(", ")} />
        <link
          rel="canonical"
          href="https://www.the-connections.com/services/dental-billing"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Billing and Coding for Dental Specialty",
            "description":
              "Comprehensive billing and coding for dental specialties, including CDT/CPT coding, medical necessity documentation, and full dental revenue cycle management.",
            "areaServed": ["NY", "NJ", "USA"],
            "provider": {
              "@type": "Organization",
              "name": "The-Connections"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* HERO */}
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
                <span className="text-accent font-semibold uppercase tracking-wider">
                  Dental Specialty Billing
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Billing and Coding for Dental Specialty
              </h1>
              <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
                Accurate dental billing and coding services for specialty dental practices –
                oral surgery, implants, perio, endo, orthodontics, pediatrics and more –
                so your team can focus on patient smiles while we manage the revenue cycle.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-14">
              {/* Intro card with side image */}
              <Card className="bg-card border rounded-3xl shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Dedicated Dental Specialty Billing Team
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Dental specialty billing is more complex than standard dental claims.
                        Every payer has its own rules for when a procedure should be billed to
                        dental insurance, when medical insurance is primary, and what level of
                        documentation is required to prove medical necessity.
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Our experienced billers and coders work only with dental practices.
                        We collaborate with your clinical team to capture complete clinical
                        notes, radiographs, periodontal charting and photos – so every claim
                        clearly tells the patient’s story and supports the treatment you provide.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        From trauma cases and surgical extractions to implants and sleep apnea
                        appliances, we help you bill correctly the first time, reduce denials,
                        and keep your cash flow predictable.
                      </p>
                    </div>

                    {/* Image column */}
                    <div className="relative bg-muted/40">
                      <img
                        src={dental}
                        alt="Dental billing team reviewing claims"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md max-w-xs">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                          Real-Time Visibility
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Get clear reports on collections, denials, and aging so you always
                          know where your revenue stands.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* End-to-End Management bullets */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  End-to-End Dental Billing Management
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  We manage your entire dental revenue cycle from verification to payment posting.
                  Our workflow is designed to prevent denials before they happen and recover
                  every legitimate dollar your practice has earned.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {managementItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-muted/60 rounded-xl px-4 py-3"
                    >
                      <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-sm md:text-base text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialties + visual stat card */}
              <div className="grid lg:grid-cols-[1.6fr_minmax(0,1fr)] gap-10 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Dental Specialties We Support
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Whether you are a single-provider specialty office or a multi-location group,
                    we tailor our billing services to the unique clinical workflows of each
                    specialty.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm md:text-base">
                    {specialties.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Small image + highlight */}
                <div className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-md border bg-white">
                    <img
                      src={dental1}
                      alt="Modern dental clinic"
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <Card className="border-primary/40 bg-primary/5">
                    <CardContent className="p-5">
                      <p className="text-sm font-semibold text-primary mb-1">
                        Designed for Growing Dental Practices
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Scale to new locations and providers without worrying about hiring
                        and training in-house billing staff. Our team adjusts to your growth
                        while keeping your AR under control.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Workflow section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  How Our Dental Billing Workflow Operates
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  Our process is transparent and collaborative. Your team stays in control of
                  clinical decisions while we handle the complexity of billing, coding and
                  payer communication.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {workflowSteps.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-4 bg-secondary/30 rounded-lg border-2 border-transparent hover:border-accent hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-up group cursor-pointer">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple text CTA in content area */}
              <div className="rounded-3xl border bg-muted/40 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    Ready to Simplify Your Dental Billing?
                  </h2>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    Share your current challenges with us – high AR, frequent denials, staffing
                    gaps, or complex medical-dental cases. We’ll review your billing workflow
                    and suggest a practical plan to stabilize cash flow and support your team.
                  </p>
                </div>
                <Button size="lg" asChild>
                  <Link to="/contact">Schedule a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Optimize Your Dental Practice Revenue
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Partner with a dedicated dental billing team that understands specialty procedures,
              payer rules, and medical necessity—so every approved claim turns into predictable
              revenue.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/services/mental-health-billing">
                  View Mental Health Billing
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DentalBilling;
