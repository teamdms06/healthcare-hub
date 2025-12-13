import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye, CheckCircle, Shield, TrendingUp, Clock, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Images (replace with your HD images)
import heroImage from "@/assets/healthcare/optometry.jpg";
import visionImage from "@/assets/healthcare/optometry/optometry-vision.jpg";
import medicalImage from "@/assets/healthcare/optometry/optometry-eye-care.jpg";
import workflowImage from "@/assets/healthcare/optometry/optometry-team.avif";
// import teamImage from "@/assets/healthcare/optometry/team.jpg";

const OptometryBilling = () => {

  const locationKeywords = [
    "Optometry Billing Services in US",
    "Optometry revenue cycle management in new york",
    "Best Optometry Medical Billing Services in Florida",
    "Optometry Medical Billing Services in Pennsylvania",
    "Optometry Medical Billing in Texas",
    "Best Optometry Medical Billing Services in California"
  ];

  const geoSections = [
    {
      title: "Optometry Billing Services in US",
      content: "Nationwide billing support for optometry practices, optical stores, and medical eye care specialists. We handle both vision and medical coding with precision."
    },
    {
      title: "Optometry Revenue Cycle Management in New York",
      content: "New York optometry practices benefit from accurate billing, fast follow-ups, and payer-specific expertise."
    },
    {
      title: "Best Optometry Medical Billing Services in Florida",
      content: "Streamlined billing processes for Florida-based optometrists, improving reimbursements for vision and medical claims."
    },
    {
      title: "Optometry Medical Billing Services in Pennsylvania",
      content: "End-to-end billing and insurance management for optometry clinics offering both routine exams and advanced procedures."
    },
    {
      title: "Optometry Medical Billing in Texas",
      content: "Texas practices get expert billing support, including medical eye care, eyewear billing, and contact lens coding."
    },
    {
      title: "Best Optometry Medical Billing Services in California",
      content: "California’s leading optometry billing specialists for high-volume clinics needing accurate coding and claim management."
    }
  ];

  const features = [
    "Vision and medical billing split",
    "Eyewear and optical billing",
    "Contact lens fitting codes",
    "Refractive surgery billing",
    "Vision insurance expertise",
    "Medical eye exam coding"
  ];

  const benefits = [
    { icon: Target, title: "Dual Billing Expertise", description: "Skilled handling of both vision & medical insurance" },
    { icon: TrendingUp, title: "Revenue Growth", description: "Higher reimbursement for eyewear and procedures" },
    { icon: Clock, title: "Faster Processing", description: "Quick claim submission & timely follow-ups" },
    { icon: Shield, title: "Insurance Compliance", description: "Stay compliant with changing payer policies" }
  ];

  const challenges = [
    "Incorrect VSP & Medicare claim routing",
    "Confusion on routine vs medical coding",
    "Unclear documentation for medical necessity",
    "Eyewear coding errors (frames, lenses, add-ons)",
    "High denial rates for refractions & follow-ups"
  ];

  return (
    <>
      <Helmet>
        <title>Optometry Billing Services | Vision & Medical Billing Experts</title>
        <meta name="description" content="Expert optometry billing and RCM services for vision plans, medical insurance, eyewear claims, and specialty eye procedures across the US." />
        <meta name="keywords" content={locationKeywords.join(", ")} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* HERO */}
        <section className="relative text-white py-24 min-h-[450px] flex items-center">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <Eye className="h-12 w-12 text-accent" />
                <span className="text-accent font-semibold uppercase tracking-wider">Optometry Billing</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Optometry Billing Services
              </h1>

              <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
                Accurate vision & medical billing for optometry practices, optical centers, and medical eye care specialists.
              </p>
            </div>
          </div>
        </section>

        {/* WHY OPTOMETRY BILLING IS DIFFERENT */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Vision Billing */}
              <div className="rounded-2xl overflow-hidden shadow border">
                <img src={visionImage} alt="Vision Insurance Billing" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Vision Insurance Billing</h3>
                  <p className="text-muted-foreground">
                    Routine eye exams, eyewear, lenses, contact lens fittings — each requires precise vision plan billing such as VSP, EyeMed, Spectera, Davis Vision, and more.
                  </p>
                </div>
              </div>

              {/* Medical Billing */}
              <div className="rounded-2xl overflow-hidden shadow border">
                <img src={medicalImage} alt="Medical Eye Care Billing" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Medical Eye Care Billing</h3>
                  <p className="text-muted-foreground">
                    Glaucoma, cataracts, dry eye, injury visits, foreign body removal — we code and bill accurately for medical insurance using correct modifiers and documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLETE RCM FEATURES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-primary mb-10 text-center">Complete Optometry Revenue Cycle</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-gray-50 rounded-xl border hover:border-accent transition">
                  <CheckCircle className="h-6 w-6 text-accent mt-1" />
                  <p className="font-medium">{feature}</p>
                </div>
              ))}
            </div>

            {/* Dual Billing Section */}
            <Card className="border-2 border-accent mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Dual Billing Expertise</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Optometry is one of the few specialties requiring *two separate billing pathways*: vision and medical. Incorrect routing results in denied claims and lost revenue.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We ensure every exam, test, procedure, eyewear product, or follow-up visit is billed under the correct payer—maximizing reimbursement and reducing administrative load.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* COMMON CHALLENGES */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-primary mb-10 text-center">Common Billing Challenges We Solve</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((c, i) => (
                <Card key={i} className="border p-6 hover:shadow-lg transition rounded-xl">
                  <p className="text-primary font-semibold mb-2">{c}</p>
                  <p className="text-muted-foreground text-sm">
                    Our team ensures accuracy, proper documentation, and clean claim submission.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* GEO TARGET SECTIONS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-primary mb-10 text-center">Serving Optometry Practices Nationwide</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {geoSections.map((section, idx) => (
                <Card key={idx} className="border-2 border-primary rounded-xl">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2">{section.title}</h4>
                    <p className="text-muted-foreground">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-primary mb-10 text-center">Key Benefits</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center border hover:shadow-lg hover:-translate-y-1 transition rounded-xl">
                    <CardContent className="p-8">
                      <Icon className="h-16 w-16 text-accent mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="rounded-3xl overflow-hidden shadow-lg border bg-white">
              <img src={workflowImage} alt="Optometry Billing Workflow" className="w-full h-72 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  From Exam Room to Payment Posting — We Handle Everything
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Eligibility checks, coding accuracy, documentation reviews, claim scrubbing, submission,
                  denial management, posting, reporting — our team manages the end-to-end workflow so your
                  providers stay focused on patient care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Optimize Your Optometry Practice Revenue</h2>
            <p className="text-lg mb-6 text-white/90">Accurate billing for routine vision exams and medical eye care services.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default OptometryBilling;
