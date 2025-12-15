import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, CheckCircle, Clock, DollarSign, FileCheck, Users, ArrowRightCircle } from "lucide-react";

import heroImage from "@/assets/healthcare/eligibility.jpg";
import workflowImage from "@/assets/healthcare/eligibility-workflow.webp";   // Add any workflow image
import whyImage from "@/assets/healthcare/insurance-check.webp";             // Add any relevant image

const EligibilityVerification = () => {

  const features = [
    "Real-time electronic eligibility checks (270/271)",
    "Verification of active coverage & plan validity",
    "Co-pay, deductible & out-of-pocket benefit analysis",
    "Coverage limitation identification (frequency, exclusions, waiting periods)",
    "Identification of pre-authorization & referral requirements",
    "Multi-payer verification including Medicare, Medicaid & Commercial plans",
    "End-to-end communication with front desk teams",
    "Documentation support for clean claim submissions"
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Reduced Claim Denials",
      description: "Prevent unnecessary rejections caused by inaccurate or outdated eligibility information."
    },
    {
      icon: Clock,
      title: "Faster Patient Intake",
      description: "Real-time verification ensures your staff receives accurate coverage details instantly."
    },
    {
      icon: FileCheck,
      title: "100% Verified Coverage Data",
      description: "We verify deductibles, co-insurance, exclusions and payer-specific rules."
    },
    {
      icon: Users,
      title: "Improved Patient Experience",
      description: "Patients receive clear financial expectations before their appointment."
    }
  ];

  const workflowSteps = [
    "Insurance details received from the provider or intake team",
    "Verification through payer portals / clearinghouses / phone calls",
    "Validation of active coverage, financial responsibilities & PA needs",
    "Documentation sent to the provider with consolidated coverage summary",
    "Flagging of potential denial risks before service is rendered"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative text-white py-20 min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Eligibility & Benefits Verification
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Eligibility & Insurance Verification Services
            </h1>

            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Accurate, real-time eligibility verification that prevents denials, accelerates reimbursements,
              and ensures that every service rendered is financially secure.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS SERVICE MATTERS */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center max-w-6xl">
          
          <img
            src={whyImage}
            alt="Eligibility Verification Importance"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Why Eligibility Verification Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              More than 25% of all medical claim denials occur due to eligibility or coverage issues.
              Our verification process ensures complete accuracy before the patient is seen—reducing
              denials, rework costs, and poor patient experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We validate every detail required for a clean claim submission, ensuring your practice
              is not at risk of unpaid services or compliance challenges.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Complete Verification Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent transition-all"
              >
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="font-medium leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          <Card className="border-2 border-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Prevent Denials with Real-Time Verification
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our specialists verify insurance eligibility before appointments—identifying active coverage,
                limitations, deductibles, exclusions, and authorization requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We support all major payers and provide a complete eligibility summary to your front desk team
                for accurate and transparent patient communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Verification Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            <div>
              <ul className="space-y-6">
                {workflowSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <ArrowRightCircle className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={workflowImage}
              alt="Eligibility Verification Workflow"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Key Benefits</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-8">
                    <Icon className="h-16 w-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-all" />
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Improve Your Eligibility Process</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Reduce denials. Improve cash flow. Deliver accurate patient estimates.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>

            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/charge-capturing">Explore Charge Capturing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EligibilityVerification;
