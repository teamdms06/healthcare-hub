import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/healthcare/denial-management.jpg";
import denialAnalysisImg from "@/assets/healthcare/denial-analysis.jpg";
import denialTypesImg from "@/assets/healthcare/denial-types.jpg";
import appealProcessImg from "@/assets/healthcare/appeal-process.jpg";
import rootCauseImg from "@/assets/healthcare/root-cause.jpg";
import revenueRecoveryImg from "@/assets/healthcare/revenue-recovery.jpg";
import claimCorrectionImg from "@/assets/healthcare/claim-correction.jpg";
import preventionStrategiesImg from "@/assets/healthcare/prevention-strategies.jpg";

const DenialManagement = () => {
  const services = [
    {
      title: "Denial Analysis & Categorization",
      description: "Comprehensive review and categorization of all denied claims to identify patterns and prioritize recovery efforts.",
      image: denialAnalysisImg
    },
    {
      title: "Appeals Preparation",
      description: "Expert preparation of appeal letters with supporting clinical documentation for maximum success rates.",
      image: appealProcessImg
    },
    {
      title: "Root Cause Identification",
      description: "Deep analysis to uncover systemic issues causing denials and implement corrective measures.",
      image: rootCauseImg
    },
    {
      title: "Revenue Recovery",
      description: "Aggressive pursuit of denied claims to recover maximum revenue with timely follow-up.",
      image: revenueRecoveryImg
    },
    {
      title: "Claim Correction & Resubmission",
      description: "Swift correction of billing errors and resubmission to minimize revenue loss.",
      image: claimCorrectionImg
    },
    {
      title: "Prevention Strategies",
      description: "Implementation of proactive measures to reduce future denial rates and improve first-pass acceptance.",
      image: preventionStrategiesImg
    }
  ];

  const denialTypes = [
    "Eligibility and Authorization Denials",
    "Coding and Billing Errors",
    "Medical Necessity Denials",
    "Timely Filing Issues",
    "Duplicate Claim Denials",
    "Coordination of Benefits Issues",
    "Missing Information Denials",
    "Pre-certification Requirements"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Denial Identification",
      description: "Immediate identification and logging of all denied claims from EOBs and ERAs."
    },
    {
      step: "02",
      title: "Root Cause Analysis",
      description: "Detailed analysis to determine the exact reason for each denial."
    },
    {
      step: "03",
      title: "Categorization",
      description: "Systematic categorization by denial type, payer, and recovery potential."
    },
    {
      step: "04",
      title: "Appeal Strategy",
      description: "Development of targeted appeal strategies based on denial category."
    },
    {
      step: "05",
      title: "Documentation",
      description: "Compilation of supporting documentation and clinical evidence."
    },
    {
      step: "06",
      title: "Resolution & Prevention",
      description: "Appeal submission, tracking, and implementation of preventive measures."
    }
  ];

  const faqs = [
    {
      question: "What is the typical success rate for denial appeals?",
      answer: "Our denial management team achieves an average appeal success rate of 85-90% through thorough documentation, proper coding verification, and timely submission. Success rates vary by denial type and payer."
    },
    {
      question: "How quickly do you work on denied claims?",
      answer: "We prioritize denied claims immediately upon receipt. Most denials are analyzed within 24-48 hours, and appeals are prepared and submitted well within payer-specific timely filing limits."
    },
    {
      question: "What types of denials do you handle?",
      answer: "We handle all types of denials including eligibility, authorization, medical necessity, coding errors, duplicate claims, timely filing, and coordination of benefits issues across all major payers."
    },
    {
      question: "How do you prevent future denials?",
      answer: "We conduct trend analysis to identify patterns, provide staff training on common errors, implement front-end edits, and work with your team to establish best practices for claim submission."
    },
    {
      question: "Do you provide denial management reports?",
      answer: "Yes, we provide comprehensive weekly and monthly reports detailing denial trends, recovery rates, appeal outcomes, and recommendations for process improvements."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Denial Management Services | Medical Billing Revenue Recovery</title>
        <meta name="description" content="Expert denial management services to recover lost revenue, appeal denied claims, and prevent future denials. Maximize your healthcare practice's reimbursements." />
        <meta name="keywords" content="denial management, medical billing denials, claim appeals, revenue recovery, healthcare billing, denied claims" />
        <link rel="canonical" href="https://yoursite.com/services/denial-management" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Denial Management Services",
            "description": "Comprehensive denial management services including appeal preparation, root cause analysis, and revenue recovery for healthcare providers.",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-[420 px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Revenue Recovery Experts
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Denial Management in Medical Billing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              Expert denial management services that identify root causes, appeal denied claims, 
              and recover lost revenue while preventing future denials. Turn your denied claims into recovered revenue.
            </p>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Denial Management Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expert team handles every aspect of denial management to maximize your revenue recovery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">{service.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Denial Types Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Types of Denials We Handle</h2>
              <p className="text-lg text-muted-foreground mb-8">
                No matter the reason for denial, our specialists have the expertise to analyze, appeal, and recover your revenue.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {denialTypes.map((type, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={denialTypesImg} 
                alt="Types of Denials We Handle" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg hidden lg:block">
                <div className="text-4xl font-bold">85%+</div>
                <div className="text-sm">Appeal Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Denial Management Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to maximize recovery and prevent future denials
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-secondary/50 rounded-xl p-6 h-full hover:bg-secondary/70 transition-colors">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 text-primary/30 h-8 w-8 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Feature */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Denial Management?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Experienced Specialists</h4>
                    <p className="text-primary-foreground/80">Our team has years of experience handling complex denials across all major payers and specialties.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Data-Driven Approach</h4>
                    <p className="text-primary-foreground/80">We use advanced analytics to identify denial patterns and implement targeted prevention strategies.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Transparent Reporting</h4>
                    <p className="text-primary-foreground/80">Regular detailed reports keep you informed on denial trends, recoveries, and process improvements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={preventionStrategiesImg} 
                alt="Denial Prevention Team" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">
                Common questions about our denial management services
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
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
          <h2 className="text-4xl font-bold text-primary mb-4">Recover Your Lost Revenue Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't let denied claims impact your bottom line. Our experts are ready to help you recover revenue and prevent future denials.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services/insurance-follow-up">View Insurance Follow-Up Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DenialManagement;
