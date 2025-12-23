import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Target, 
  DollarSign,
  ArrowRight,
  FileSearch,
  BarChart3,
  Users
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import images
import heroImage from "@/assets/healthcare/insurance-followup.jpg";
import claimTrackingImage from "@/assets/healthcare/tracking.jpg";
import denialManagementImage from "@/assets/healthcare/denial-management.jpg";
import paymentPostingImage from "@/assets/healthcare/payment-posting.jpg";
import eligibilityImage from "@/assets/healthcare/eligibility.jpg";
import clearinghouseImage from "@/assets/healthcare/clearinghouse.jpg";
import multiPayerImage from "@/assets/healthcare/multi-payer.jpg";

const InsuranceFollowUp = () => {
  const coreServices = [
    {
      title: "Unpaid Claims Follow-Up",
      description: "Systematic tracking and follow-up on all unpaid claims to ensure timely reimbursement and reduce aging AR.",
      image: claimTrackingImage
    },
    {
      title: "Denial Management",
      description: "Expert analysis of denied claims with strategic appeals and resubmissions to recover lost revenue.",
      image: denialManagementImage
    },
    {
      title: "Payment Posting & Reconciliation",
      description: "Accurate posting of payments with detailed EOB/ERA analysis and reconciliation reporting.",
      image: paymentPostingImage
    },
    {
      title: "Insurance Eligibility Verification",
      description: "Real-time verification of patient insurance coverage to prevent claim denials upfront.",
      image: eligibilityImage
    },
    {
      title: "Clearinghouse Management",
      description: "Efficient management of EDI transactions and clearinghouse rejections for faster claim processing.",
      image: clearinghouseImage
    },
    {
      title: "Multi-Payer Coordination",
      description: "Expert handling of claims across all major payers with specialized knowledge of each payer's requirements.",
      image: multiPayerImage
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Claim Identification",
      description: "We identify and prioritize unpaid claims based on aging, amount, and payer for maximum revenue recovery."
    },
    {
      step: "02",
      title: "Payer Contact",
      description: "Our specialists contact insurance companies via phone, portal, or email to investigate claim status."
    },
    {
      step: "03",
      title: "Issue Resolution",
      description: "We address any issues discovered during follow-up, including missing information or coding errors."
    },
    {
      step: "04",
      title: "Appeal Submission",
      description: "For denied claims, we prepare and submit comprehensive appeals with supporting documentation."
    },
    {
      step: "05",
      title: "Payment Tracking",
      description: "We track payments through to posting and reconcile all remittances for accuracy."
    },
    {
      step: "06",
      title: "Reporting & Analysis",
      description: "Detailed reports on collection progress, denial trends, and recommendations for improvement."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Recovery",
      description: "Recover up to 30% more revenue from unpaid and delayed claims through persistent, professional follow-up."
    },
    {
      icon: Clock,
      title: "Reduced Days in AR",
      description: "Significantly reduce your average days in accounts receivable with proactive claim management."
    },
    {
      icon: TrendingUp,
      title: "Improved Collection Rates",
      description: "Increase overall collection rates with systematic follow-up and denial prevention strategies."
    },
    {
      icon: Target,
      title: "Dedicated Expert Team",
      description: "Certified billing specialists with deep knowledge of payer requirements and appeal processes."
    }
  ];

  const faqs = [
    {
      question: "How quickly do you follow up on unpaid claims?",
      answer: "We begin follow-up activities within 30 days of initial claim submission. For aging claims, we prioritize based on dollar amount and days outstanding, ensuring no claim falls through the cracks."
    },
    {
      question: "What information do you need to start insurance follow-up?",
      answer: "We need access to your practice management system, current AR aging reports, and any existing claim documentation. Our team can work with most major PM/EHR systems."
    },
    {
      question: "How do you handle denied claims?",
      answer: "We analyze the denial reason, gather necessary supporting documentation, prepare a detailed appeal letter, and submit through the appropriate channel. We track all appeals and escalate as needed."
    },
    {
      question: "Can you work with all insurance payers?",
      answer: "Yes, our team has experience with Medicare, Medicaid, commercial payers, and specialty insurance. We stay current on each payer's specific requirements and policies."
    },
    {
      question: "What reporting do you provide?",
      answer: "We provide weekly AR aging reports, monthly collection summaries, denial trend analysis, and payer-specific performance metrics. Custom reports are available upon request."
    },
    {
      question: "How do you ensure compliance during follow-up?",
      answer: "All our activities comply with HIPAA regulations and payer guidelines. We document all communication and maintain detailed audit trails for every claim interaction."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Insurance Follow-Up Services | Maximize Revenue Recovery | Expert AR Management</title>
        <meta name="description" content="Expert insurance follow-up services to maximize collections, reduce AR days, and recover revenue from unpaid and denied claims. Dedicated specialists for all payers." />
        <meta name="keywords" content="insurance follow-up, AR management, claims follow-up, denial management, revenue recovery, medical billing, accounts receivable" />
        <link rel="canonical" href="https://yoursite.com/services/insurance-follow-up" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Insurance Follow-Up Services",
            "description": "Expert insurance follow-up services to maximize collections and recover revenue from unpaid claims",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "serviceType": "Healthcare Revenue Cycle Management"
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative text-white min-h-[420 px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Professional insurance follow-up specialists managing accounts receivable" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <PhoneCall className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Revenue Recovery</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">Insurance Follow-Up Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Expert insurance follow-up services to maximize collections, reduce AR days, and recover 
              revenue from unpaid and denied claims through persistent, professional follow-up.
            </p>

          </div>
        </div>
      </section>

      {/* Core Services with Images */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Follow-Up Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our dedicated team handles every aspect of insurance follow-up to ensure maximum revenue recovery
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer border-2 hover:border-primary/30">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Follow-Up Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to maximize collections and minimize revenue leakage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer border-2 hover:border-accent">
                    <CardContent className="p-8">
                      <div className="text-6xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < processSteps.length - 1 && index % 3 !== 2 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-accent h-8 w-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Proactive AR Management</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our insurance follow-up specialists work diligently on your aging accounts receivable, 
                  contacting insurance companies to resolve unpaid claims, request missing information, 
                  and ensure timely payment processing.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We maintain detailed documentation of all follow-up activities, track claim status changes, 
                  and provide regular reports on collection progress and outstanding balances by payer.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Daily follow-up on claims 30+ days old",
                    "Prioritized aging bucket management",
                    "Detailed payer-specific analysis",
                    "Real-time status tracking and updates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="border-2 border-accent/30 bg-accent/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">What We Track</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <FileSearch className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary">Claim Status</h4>
                        <p className="text-muted-foreground">Real-time tracking of every claim through the payment cycle</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <BarChart3 className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary">Collection Metrics</h4>
                        <p className="text-muted-foreground">Key performance indicators and collection rate trends</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Users className="h-8 w-8 text-accent flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary">Payer Performance</h4>
                        <p className="text-muted-foreground">Detailed analysis of each payer's payment patterns</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Key Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Partner with experts who deliver measurable results for your revenue cycle
              </p>
            </div>
            
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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our insurance follow-up services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 hover:border-accent transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Maximize Your Revenue Recovery</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Let our experts handle insurance follow-up while you focus on patient care
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/business-analysis">View Analytics Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsuranceFollowUp;
