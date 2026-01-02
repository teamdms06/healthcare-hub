import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { Brain, CheckCircle, Shield, TrendingUp, Clock, Heart } from "lucide-react";
import {
  Brain,
  HeartPulse,
  Smile,
  ShieldCheck,
  Clock,
  LineChart,
  PhoneCall,
  FileText,
  MessageCircle,
  CalendarClock,
  UserSquare2
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/healthcare/mental-health.jpg";
import mentalhealth from "@/assets/healthcare/mental-health-billing-services.jpg";

const locationKeywords = [
  "mental health billing services in New York",
  "psychiatric billing services in Florida",
  "psychiatry health medical billing services in Pennsylvania",
  "top mental health billing services in Texas",
  "behavioral and mental health medical billing services in New York"
];

const coreFeatures = [
  {
    icon: FileText,
    title: "ICD-10 & CPT Coding for Behavioral Health",
    text: "Accurate diagnosis and procedure coding for psychotherapy, psychiatric evaluations, testing, group therapy, and more."
  },
  {
    icon: Clock,
    title: "Time & Session-Based Billing",
    text: "Support for 30 / 45 / 60-minute sessions, multi-unit encounters, prolonged services, and tele-mental health visits."
  },
  {
    icon: ShieldCheck,
    title: "Payer & HIPAA Compliance",
    text: "Adherence to payer-specific rules, mental health coverage policies, and HIPAA privacy and security requirements."
  },
  {
    icon: LineChart,
    title: "Denial Management & Analytics",
    text: "Root-cause analysis on denials, timely appeals, and dashboards that highlight trends in reimbursement and AR."
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Patient Appointment Scheduling",
    text: "Scheduling via phone, portal, or EHR with support for new and follow-up mental health visits, including urgent appointments."
  },
  {
    step: "02",
    title: "Patient Registration & Intake",
    text: "Collect demographic data, insurance information, mental health history, and consent forms and capture them in your PMS/EHR."
  },
  {
    step: "03",
    title: "Eligibility & Benefits Verification",
    text: "Verify behavioral health coverage, plan limitations, visit caps, copays, deductibles, and pre-authorization requirements."
  },
  {
    step: "04",
    title: "Authorizations & Pre-Certifications",
    text: "Obtain and track authorizations for ongoing therapy, intensive outpatient programs, and high-cost psychiatric services."
  },
  {
    step: "05",
    title: "Clinical Documentation & Coding",
    text: "Review session notes and treatment plans to apply the correct ICD-10 diagnosis codes and CPT/HCPCS codes with modifiers."
  },
  {
    step: "06",
    title: "Charge Capture & Entry",
    text: "Enter charges accurately by date of service, provider, location, and units, with correct linkage to diagnoses and benefits."
  },
  {
    step: "07",
    title: "Claim Scrubbing & Audit",
    text: "Audit claims for coding accuracy, documentation support, and payer-specific edits before sending them to clearinghouses."
  },
  {
    step: "08",
    title: "Electronic & Paper Claim Submission",
    text: "Submit clean electronic claims or CMS-1500 paper claims where required, reducing rejections and payment delays."
  },
  {
    step: "09",
    title: "Payment Posting & Reconciliation",
    text: "Post ERAs/EOBs, capture adjustments, and reconcile patient responsibility for copays, deductibles, and coinsurance."
  },
  {
    step: "10",
    title: "Patient Billing & Collections",
    text: "Generate clear patient statements, manage follow-up on balances, and handle sensitive conversations with empathy."
  },
  {
    step: "11",
    title: "Denials, Appeals & AR Follow-Up",
    text: "Work denials promptly, file appeals with supporting documentation, and follow up on aged claims across all aging buckets."
  },
  {
    step: "12",
    title: "Reporting, Analytics & Optimization",
    text: "Deliver monthly reports on reimbursement rates, clean claim rate, aging, write-offs, and opportunities to improve revenue."
  }
];

const specialties = [
  "Psychiatrists & Psychiatric Nurse Practitioners",
  "Psychologists & Neuropsychologists",
  "Licensed Therapists (LCSW, LPC, LMFT, etc.)",
  "Substance Abuse & Addiction Treatment Centers",
  "Behavioral Health Clinics & Group Practices",
  "Tele-mental Health & Online Therapy Platforms"
];

const faqs = [
  {
    q: "Do you support both in-network and out-of-network mental health providers?",
    a: "Yes. We work with in-network and out-of-network practices of all sizes, from solo therapists to multi-location behavioral health groups."
  },
  {
    q: "Can you handle telehealth and hybrid models?",
    a: "Absolutely. We bill office, telehealth, and hybrid services with the correct modifiers and place-of-service codes to meet payer requirements."
  },
  {
    q: "How quickly can we see improvement in collections?",
    a: "Most practices see improvement in their clean claim rate and cash flow within the first 30–60 days once eligibility, coding, and follow-up workflows are stabilized."
  },
  {
    q: "Do you use behavioral health–experienced coders?",
    a: "Yes. Our coding team has experience specific to mental and behavioral health, including psychotherapy, psychiatric, and substance use treatment services."
  }
];

const MentalHealthBilling = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mental & Behavioral Health Billing Services",
    description:
      "End-to-end mental and behavioral health billing services covering scheduling, eligibility checks, ICD-10/CPT coding, claims submission, denials, and reporting for psychiatrists, therapists, psychologists, and behavioral health clinics.",
    areaServed: ["US", "New York", "Florida", "Texas", "California"],
    provider: {
      "@type": "Organization",
      name: "The Connections",
      url: "https://your-domain.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Mental & Behavioral Health Billing Services | Psychiatry & Therapy Billing
        </title>

        <meta
          name="description"
          content="Comprehensive mental and behavioral health billing and coding services for psychiatrists, therapists, psychologists, and behavioral health clinics. We manage scheduling, eligibility, ICD-10/CPT coding, claim submission, denials, and reporting for practices in New York, Florida, Texas, California and across the USA."
        />

        <meta name="keywords" content={locationKeywords.join(", ")} />
        <link
          rel="canonical"
          href="https://your-domain.com/services/mental-health-billing"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
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
                  Specialty Billing
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Mental &amp; Behavioral Health Billing Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
                Tailored billing and coding support for psychiatrists, therapists,
                psychologists, and behavioral health clinics—so your team can focus on
                patient well-being while we manage the revenue cycle.
              </p>
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Billing Built for Mental &amp; Behavioral Health
            </h2>
            <p className="text-muted-foreground mb-10">
              Mental and behavioral health billing is different from standard medical
              billing. Time-based sessions, recurring visits, sensitive diagnoses, and
              telehealth requirements demand a specialized approach. Our team brings
              behavioral health expertise to every claim.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {coreFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <Card
                    key={i}
                    className="border-2 border-border hover:border-accent/70 transition-colors"
                  >
                    <CardContent className="p-6 flex gap-4">
                      <Icon className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1 text-primary">
                          {f.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {f.text}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-2 border-accent/70">
              <CardContent className="p-6 flex gap-4 items-start">
                <HeartPulse className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Compassionate Billing for Sensitive Services
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Behavioral health services often involve complex histories and
                    long-term treatment plans. We protect your patients&apos; privacy and
                    approach every interaction—whether with payers or patients—with
                    empathy and professionalism.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[1.6fr_1.1fr] gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                End-to-End Behavioral Health Revenue Cycle
              </h2>
              <p className="text-muted-foreground mb-8">
                We support your practice from the very first patient call through final
                payment posting and reporting. Below is how our mental and behavioral
                health billing workflow typically looks.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                {workflowSteps.map((step) => (
                  <Card key={step.step} className="border border-border bg-card">
                    <CardContent className="p-5">
                      <div className="text-accent font-bold text-xs mb-1">
                        STEP {step.step}
                      </div>
                      <h3 className="font-semibold text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Side image + mini-card */}
            <div className="space-y-4">
              <img
                src={mentalhealth}
                alt="Behavioral health billing team collaborating in office"
                className="w-full h-[1150px] rounded-2xl shadow-lg object-cover"
              />
              <Card className="border border-primary/50">
                <CardContent className="p-5 flex gap-3 items-start">
                  <CalendarClock className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Appointment to Payment, Fully Managed
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our team coordinates with your front desk, clinicians, and
                      management to ensure every visit is scheduled correctly, authorized
                      when required, coded accurately, and followed through to payment.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SPECIALTIES SERVED */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Mental &amp; Behavioral Health Specialties We Support
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {specialties.map((s, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <CheckIcon />
                  <p className="text-muted-foreground text-sm">{s}</p>
                </div>
              ))}
            </div>

            <Card className="border border-border">
              <CardContent className="p-6 flex gap-4 items-start">
                <UserSquare2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    Coordination Across Multiple Providers
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Many behavioral health patients see multiple providers. We ensure that
                    claims reflect only the services performed by your practice and avoid
                    duplicate billing issues that can lead to denials or audits.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Mental Health Billing – FAQs
            </h2>
            <div className="space-y-5">
              {faqs.map((item, i) => (
                <Card key={i} className="border border-border">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-accent" />
                      {item.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Simplify Your Behavioral Health Billing?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Share a few details about your practice and we&apos;ll review your current
              billing setup, identify quick wins, and propose a tailored mental health
              billing solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Talk to Our Billing Experts</Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="/services/credentialing">
                  Explore Provider Credentialing
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm">
              <PhoneCall className="h-4 w-4" />
              <span>For urgent requirements, call us at +91-788-789-8196.</span>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

// Simple checkmark icon (so we don't import more icons)
const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-accent mt-1 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879A1 1 0 003.293 9.293l4 4a1 1 0 001.414 0l8-8z"
      clipRule="evenodd"
    />
  </svg>
);

export default MentalHealthBilling;
