import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  FileSearch,
  CheckCircle,
  Shield,
  AlertTriangle,
  TrendingUp,
  ClipboardCheck,
  Clock
} from "lucide-react";

import heroImage from "@/assets/healthcare/claim-audits-hero.webp";
import auditProcess from "@/assets/healthcare/audits-work.jpg";
import complianceImage from "@/assets/healthcare/audit-complience.jpg";

const ClaimAudits = () => {

  const auditChecks = [
    "Coding accuracy validation (ICD-10, CPT, HCPCS)",
    "Documentation & medical necessity review",
    "Modifier accuracy & payer rule compliance",
    "Duplicate, unbundled, and missing charge detection",
    "Coverage & policy verification",
    "Pre-submission audit correction"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Compliance Protection",
      description:
        "Protect your practice from compliance risks, payer scrutiny, and costly penalties."
    },
    {
      icon: TrendingUp,
      title: "Higher Reimbursement",
      description:
        "Clean claims ensure faster approvals, reduced denials, and stronger cash flow."
    },
    {
      icon: ClipboardCheck,
      title: "Precision Validation",
      description:
        "Every claim undergoes structured QA verification for coding, documentation, and policy alignment."
    },
    {
      icon: Clock,
      title: "Faster Collections",
      description:
        "Minimize resubmissions and shorten A/R cycles with error-free submissions."
    }
  ];

  const process = [
    "Collect claims & encounter documentation",
    "Run automated + manual audit checks",
    "Identify coding and compliance risks",
    "Fix errors & validate accuracy",
    "Approve for submission",
    "Monitor payer response"
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
            <FileSearch className="h-12 w-12 text-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider">
              Claim Integrity Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Claim Audits & Quality Assurance
          </h1>

          <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
            We conduct comprehensive Claim Audits to ensure billing accuracy, regulatory 
            compliance, and error-free claim submissions—helping your practice 
            reduce denials, prevent revenue leakage, and maintain payer trust.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 max-w-7xl grid md:grid-cols-2 gap-10 items-center">

          <img
            src={complianceImage}
            alt="Compliance Review"
            className="rounded-xl shadow-lg object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Ensuring Claim Accuracy Before Submission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our audit specialists review every claim for accuracy and compliance before 
              it reaches the payer. We identify coding errors, missing documentation, 
              and inconsistencies that can trigger claim rejections or audits.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With medical billing audits aligned to payer policies, CMS regulations, 
              and industry best practices, we help maintain a 95%+ clean claim rate.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE CHECK */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            What Our Claim Audits Cover
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {auditChecks.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent transition-all"
              >
                <CheckCircle className="h-6 w-6 text-accent mt-1" />
                <p className="font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <Card className="border-2 border-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Prevent Denials Before They Happen
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our proactive auditing approach helps eliminate billing errors before claims 
                are submitted—reducing denial rates, improving first-pass acceptance, and 
                safeguarding your revenue cycle.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Our Audit Process
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-6">
              {process.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <AlertTriangle className="h-7 w-7 text-accent mt-1" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ul>

            <img
              src={auditProcess}
              alt="Audit Workflow"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Why Healthcare Providers Trust Our Claim Audits
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
            Ensure Every Claim Is Accurate Before Submission
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with us for thorough, reliable, and compliant medical claim auditing.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Talk to an Expert</Link>
            </Button>

            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/eligibility-verification">
                Explore Eligibility Verification
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaimAudits;
