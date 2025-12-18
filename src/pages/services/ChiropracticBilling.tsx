import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Activity,
  CheckCircle,
  Shield,
  Clock,
  TrendingUp,
  FileCheck,
  AlertTriangle,
  Users
} from "lucide-react";

// IMAGES
import heroImage from "@/assets/healthcare/chiropractic-billing-service.png";
import workflowImage from "@/assets/healthcare/chiropractic-work.webp";
import clinicImage from "@/assets/healthcare/chiropractic.jpg";

const ChiropracticBilling = () => {
  const services = [
    "Accurate CPT & modifier coding for spinal manipulation (98940–98942)",
    "Insurance eligibility verification & benefit analysis",
    "Pre-authorization and visit limit tracking",
    "Electronic claim submission and payer follow-ups",
    "Denial management for medical necessity & frequency limits",
    "CMS-compliant documentation and coding validation",
    "Daily charge posting and reconciliation",
    "Appeals handling for underpaid or denied claims"
  ];

  const workflow = [
    "Patient eligibility and chiropractic benefits verification",
    "Review of treatment notes and medical necessity documentation",
    "Assignment of correct CPT, modifiers, and diagnosis codes",
    "Compliance validation with CMS and payer-specific rules",
    "Clean claim submission and clearinghouse checks",
    "Denial resolution, appeals, and payment posting"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Higher Reimbursements",
      description: "Accurate coding and documentation ensure you are paid for every eligible service."
    },
    {
      icon: Clock,
      title: "Faster Payments",
      description: "Clean claims reduce payer rejections and speed up reimbursement cycles."
    },
    {
      icon: Shield,
      title: "Compliance Assured",
      description: "Stay compliant with CMS chiropractic billing guidelines and payer rules."
    },
    {
      icon: Users,
      title: "More Time for Care",
      description: "Free your staff from billing headaches and focus on patient care."
    }
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

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="h-12 w-12 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider">
              Chiropractic Billing Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Chiropractic Specialty Billing Services
          </h1>

          <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
            Specialized chiropractic billing solutions designed to reduce denials,
            improve compliance, and maximize reimbursements—so you can focus on
            patient outcomes, not paperwork.
          </p>
        </div>
      </section>

      {/* WHY CHIROPRACTIC BILLING IS COMPLEX */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">

          <img
            src={clinicImage}
            alt="Chiropractic Clinic"
            className="rounded-xl shadow-lg object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Why Chiropractic Billing Requires Expertise
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Chiropractic billing is highly regulated, with strict medical necessity
              requirements, frequency caps, and documentation standards—especially
              under Medicare and CMS guidelines.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our billing specialists understand payer-specific chiropractic rules,
              ensuring your claims are compliant, defensible, and paid without delays.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Complete Chiropractic Billing Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent transition-all"
              >
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
                <p className="font-medium leading-relaxed">{service}</p>
              </div>
            ))}
          </div>

          <Card className="border-2 border-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Reduce Denials & Protect Your Revenue
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We proactively identify documentation gaps, frequency violations,
                and modifier issues before claims are submitted—helping you avoid
                costly denials and audits.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Chiropractic Billing Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-6">
              {workflow.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <AlertTriangle className="h-7 w-7 text-accent mt-1" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ul>

            <img
              src={workflowImage}
              alt="Chiropractic Billing Workflow"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Why Chiropractors Trust Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg hover:shadow-primary/20
                             hover:-translate-y-1 hover:border-primary/50
                             transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <Icon className="h-16 w-16 text-accent mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simplify Chiropractic Billing & Boost Reimbursements
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with experienced chiropractic billing professionals who
            understand your specialty inside and out.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Talk to a Billing Expert</Link>
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

export default ChiropracticBilling;
