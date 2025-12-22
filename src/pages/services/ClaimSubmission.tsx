import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Send, CheckCircle, Clock, TrendingUp, RefreshCw, Shield, FileCheck, Zap, Users, BarChart3, AlertCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/healthcare/claim-submission-hero.jpg";
import ediSubmissionImg from "@/assets/healthcare/edi-submission.jpg";
import multiPayerImg from "@/assets/healthcare/multi-payer.jpg";
import claimTrackingImg from "@/assets/healthcare/tracking.jpg";
import claimCorrectionImg from "@/assets/healthcare/claim-correction.jpg";
import clearinghouseImg from "@/assets/healthcare/clearinghouse.jpg";
import claimScrubbingImg from "@/assets/healthcare/claim-scrubbing.jpg";

const ClaimSubmission = () => {
  const features = [
    {
      title: "Electronic Claim Submission (EDI 837)",
      image: ediSubmissionImg,
      desc: "Secure & accurate electronic submission to Medicare, Medicaid & Commercial payers.",
      details: "Our HIPAA-compliant EDI 837 submission process ensures your claims are transmitted securely to all major payers. We support both professional (837P) and institutional (837I) claim formats with real-time acknowledgment tracking."
    },
    {
      title: "Multi-Payer Claim Filing",
      image: multiPayerImg,
      desc: "We handle thousands of claims across insurance networks—without errors.",
      details: "From Blue Cross Blue Shield to Aetna, Cigna, UnitedHealthcare, and regional payers—we manage submissions across 1000+ payer networks with customized rules for each carrier's unique requirements."
    },
    {
      title: "Real-Time Claim Status Tracking",
      image: claimTrackingImg,
      desc: "Monitor claim journey with proactive follow-ups to avoid delays.",
      details: "Our advanced tracking dashboard provides real-time visibility into every claim's status. Receive automated alerts for pending actions, approaching deadlines, and status changes to stay ahead of potential issues."
    },
    {
      title: "Rejection Management & Resubmission",
      image: claimCorrectionImg,
      desc: "Instant correction & resubmission to prevent revenue loss.",
      details: "Our denial management specialists analyze each rejection, identify root causes, make necessary corrections, and resubmit within 24-48 hours. We maintain detailed rejection analytics to prevent recurring issues."
    },
    {
      title: "Clearinghouse Integration",
      image: clearinghouseImg,
      desc: "Seamless integration with leading clearinghouses for faster approvals.",
      details: "We integrate with top clearinghouses including Availity, Change Healthcare, Trizetto, and Waystar. Our team manages all clearinghouse relationships and ensures optimal routing for maximum acceptance rates."
    },
    {
      title: "Claim Scrubbing Before Submission",
      image: claimScrubbingImg,
      desc: "We detect errors before payers do—ensuring clean & compliant claims.",
      details: "Our multi-layer claim scrubbing process includes CPT/ICD validation, modifier verification, medical necessity checks, and payer-specific rule application—catching 95% of potential rejections before submission."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Same-Day Submission",
      description: "Claims sent out within 24 hours of receiving documentation."
    },
    {
      icon: CheckCircle,
      title: "98% First-Pass Acceptance",
      description: "Fewer rejections mean faster payments and stronger RCM."
    },
    {
      icon: RefreshCw,
      title: "Immediate Re-Submission",
      description: "Rejections fixed and resubmitted quickly to avoid financial delays."
    },
    {
      icon: TrendingUp,
      title: "Revenue Acceleration",
      description: "Streamlined workflows ensure faster cash flow and reduced AR days."
    }
  ];

  const process = [
    {
      step: "Claim Data Collection & Validation",
      detail: "We gather all patient demographics, insurance details, and encounter information, validating data accuracy before processing."
    },
    {
      step: "Claim Scrubbing & Compliance Check",
      detail: "Multi-layer validation including CPT/ICD accuracy, modifier verification, and payer-specific rule compliance."
    },
    {
      step: "Electronic Submission to Payers",
      detail: "HIPAA-compliant EDI 837 transmission to clearinghouses and direct payer connections with real-time acknowledgments."
    },
    {
      step: "Real-Time Status Monitoring",
      detail: "Continuous tracking of claim status with automated alerts for pending actions and approaching deadlines."
    },
    {
      step: "Rejection Handling & Corrections",
      detail: "Immediate analysis of rejections, root cause identification, corrections, and resubmission within 24-48 hours."
    },
    {
      step: "Approved & Paid Claims Posting",
      detail: "Accurate payment posting, ERA reconciliation, and patient statement generation for remaining balances."
    }
  ];

  const stats = [
    { value: "98%", label: "First-Pass Acceptance Rate" },
    { value: "24hrs", label: "Average Submission Time" },
    { value: "30%", label: "Reduction in AR Days" },
    { value: "1000+", label: "Payer Networks Covered" }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "All data transmission and storage follows strict HIPAA security protocols with regular audits and certifications."
    },
    {
      icon: FileCheck,
      title: "Certified Billing Experts",
      description: "Our team includes AAPC and AHIMA certified professionals with 10+ years of experience in medical billing."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "AI-powered claim scrubbing and automated workflows reduce manual errors and accelerate processing times."
    },
    {
      icon: Users,
      title: "Dedicated Account Managers",
      description: "Every client gets a dedicated account manager who understands your practice and provides personalized support."
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "Real-time dashboards and weekly reports keep you informed about claim status, rejections, and revenue performance."
    },
    {
      icon: AlertCircle,
      title: "Proactive Issue Resolution",
      description: "We identify and address potential issues before they become problems, preventing revenue leakage."
    }
  ];

  const commonRejections = [
    {
      code: "CO-4",
      reason: "Procedure code inconsistent with modifier",
      solution: "We verify modifier-code combinations against payer-specific rules before submission."
    },
    {
      code: "CO-16",
      reason: "Claim lacks information needed for adjudication",
      solution: "Our scrubbing process catches missing data fields and flags for completion."
    },
    {
      code: "CO-29",
      reason: "Timely filing limit exceeded",
      solution: "Automated deadline tracking ensures claims are submitted well within filing limits."
    },
    {
      code: "PR-1",
      reason: "Deductible amount",
      solution: "Real-time eligibility checks identify patient responsibility before claim submission."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative text-white py-20 min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Claim submission hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Send className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Claim Processing
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Claim Submission & Rejection Management
            </h1>

            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              End-to-end claim submission with proactive rejection control—ensuring
              faster reimbursements, fewer denials, and a stronger revenue cycle.
            </p>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      {/* <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">{stat.value}</p>
                <p className="text-accent-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* INTRO SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Why Efficient Claim Submission Matters
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              In today's complex healthcare landscape, claim submission is more than just paperwork—it's the lifeline 
              of your revenue cycle. Every delayed or rejected claim costs your practice money and resources. 
              Our comprehensive claim submission services ensure that every claim is submitted accurately, 
              on time, and optimized for maximum reimbursement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over a decade of experience managing millions of claims across diverse specialties, 
              we've developed proven processes that minimize denials, accelerate payments, and maximize 
              your practice's financial health. Our team of certified billing experts works as an extension 
              of your practice, handling every aspect of claim submission from initial validation to final payment posting.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES WITH IMAGES */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              Complete Claim Submission Services
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              From initial submission to final payment, we handle every aspect of your claims with precision and care.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group">
                  <img src={f.image} alt={f.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{f.title}</h3>
                    <p className="text-muted-foreground mb-4">{f.desc}</p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{f.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED DESCRIPTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Efficient, Error-Free, Revenue-Driven Submission
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team manages the submission journey from start to finish. Claims are validated,
                  scrubbed, and electronically transmitted using industry-standard EDI protocols.
                  Rejections are corrected immediately to protect revenue and minimize payment delays.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We understand that every practice is unique. That's why we customize our claim submission 
                  workflows to match your specific needs, specialty requirements, and payer mix. Whether 
                  you're a solo practitioner or a multi-location health system, our scalable solutions 
                  adapt to your volume and complexity.
                </p>
                <ul className="space-y-3">
                  {["Same-day claim submission for received encounters", "Multi-layer claim scrubbing with 95%+ error detection", "Direct payer connections for faster processing", "Dedicated rejection management team", "Weekly performance reports and analytics"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Card className="border-2 border-accent p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Commitment to You</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">24-Hour Turnaround</h4>
                      <p className="text-sm text-muted-foreground">Claims submitted within 24 hours of receiving complete documentation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">100% Compliance</h4>
                      <p className="text-sm text-muted-foreground">HIPAA-compliant processes with regular security audits.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Measurable Results</h4>
                      <p className="text-sm text-muted-foreground">Track your ROI with transparent reporting and analytics.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              Our Submission Workflow
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              A systematic approach that ensures accuracy, compliance, and speed at every step.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {process.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-accent transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{item.step}</h3>
                      <p className="text-muted-foreground text-sm">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              Why Choose Our Claim Submission Services
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Partner with a team that combines expertise, technology, and dedication to maximize your revenue.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                    <Icon className="h-12 w-12 text-accent mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMMON REJECTIONS */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              How We Handle Common Rejections
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Our proactive approach prevents most rejections before they happen. Here's how we address common denial reasons.
            </p>

            <div className="space-y-6">
              {commonRejections.map((item, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive font-mono font-bold rounded-lg">
                        {item.code}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">{item.reason}</p>
                      <p className="text-sm text-muted-foreground flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span><strong className="text-accent">Our Solution:</strong> {item.solution}</span>
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-4 text-center">
              Key Benefits
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Experience measurable improvements in your revenue cycle performance.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, index) => {
                const Icon = b.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8">
                      <Icon className="h-16 w-16 text-accent mx-auto mb-6 transition-all duration-300 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-primary mb-3">{b.title}</h3>
                      <p className="text-muted-foreground">{b.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Accelerate Your Claims Processing
          </h2>

          <p className="text-xl mb-4 max-w-2xl mx-auto text-primary-foreground/90">
            Partner with us for fast, compliant, and revenue-driven claim submission.
          </p>

          <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-foreground/80">
            Schedule a free consultation to learn how we can help reduce your denials by up to 40%, 
            improve first-pass acceptance rates, and accelerate your revenue cycle.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/payment-posting">
                Explore Payment Posting
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClaimSubmission;
