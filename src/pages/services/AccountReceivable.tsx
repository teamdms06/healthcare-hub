import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Wallet, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Target, 
  DollarSign,
  ArrowRight,
  FileText,
  Users,
  Shield,
  BarChart3,
  Phone,
  Zap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import arHeroImage from "@/assets/healthcare/ar-hero.jpg";
import agingAnalysisImage from "@/assets/healthcare/aging-analysis.jpg";
import collectionStrategyImage from "@/assets/healthcare/collection-strategy.jpg";
import paymentPlansImage from "@/assets/healthcare/payment-plans.jpg";
import insuranceArImage from "@/assets/healthcare/insurance-ar.jpg";
import badDebtPreventionImage from "@/assets/healthcare/bad-debt-prevention.jpg";

const AccountReceivable = () => {
  const arServices = [
    {
      image: agingAnalysisImage,
      title: "Aging Report Analysis",
      description: "Comprehensive analysis of AR aging buckets to identify trends, prioritize collections, and develop targeted recovery strategies for each aging category.",
      features: ["30/60/90/120+ day analysis", "Trend identification", "Priority scoring"]
    },
    {
      image: collectionStrategyImage,
      title: "Collection Strategy Optimization",
      description: "Data-driven collection strategies tailored to your practice, maximizing recovery rates while maintaining positive patient relationships.",
      features: ["Customized workflows", "Payer-specific tactics", "Performance tracking"]
    },
    {
      image: paymentPlansImage,
      title: "Patient Payment Plans",
      description: "Flexible payment plan management that helps patients afford care while ensuring steady revenue flow for your practice.",
      features: ["Flexible terms", "Automated reminders", "Online payment portal"]
    },
    {
      image: insuranceArImage,
      title: "Insurance AR Follow-up",
      description: "Persistent and systematic follow-up with insurance companies to resolve outstanding claims and maximize reimbursement.",
      features: ["Payer escalation", "Appeal management", "Status tracking"]
    },
    {
      image: badDebtPreventionImage,
      title: "Bad Debt Prevention",
      description: "Proactive identification and intervention strategies to prevent accounts from becoming uncollectible bad debt.",
      features: ["Early intervention", "Risk assessment", "Recovery programs"]
    }
  ];

  const capabilities = [
    {
      icon: BarChart3,
      title: "Comprehensive Reporting",
      description: "Detailed AR analytics and custom reports providing visibility into every aspect of your receivables"
    },
    {
      icon: Phone,
      title: "Multi-Channel Collections",
      description: "Strategic outreach through calls, emails, statements, and digital channels for maximum contact rates"
    },
    {
      icon: Shield,
      title: "Compliance Focused",
      description: "All collection activities adhere to HIPAA, FDCPA, and state-specific regulations"
    },
    {
      icon: Users,
      title: "Patient-Centric Approach",
      description: "Compassionate collection practices that preserve patient relationships and loyalty"
    },
    {
      icon: FileText,
      title: "Statement Management",
      description: "Professional patient statement generation and distribution with clear payment instructions"
    },
    {
      icon: Zap,
      title: "Rapid Resolution",
      description: "Quick identification and resolution of billing issues preventing timely payment"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "AR Assessment",
      description: "Complete analysis of your current AR status, aging distribution, and collection challenges"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom collection strategy based on your payer mix, patient demographics, and goals"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Systematic execution of collection workflows with dedicated AR specialists"
    },
    {
      step: "04",
      title: "Continuous Optimization",
      description: "Ongoing monitoring, reporting, and strategy refinement for sustained improvement"
    }
  ];

  const faqs = [
    {
      question: "What AR aging buckets do you focus on?",
      answer: "We work on all aging buckets from current to 120+ days. Our approach prioritizes high-value accounts and those approaching timely filing deadlines while ensuring systematic follow-up on all outstanding balances. We develop specific strategies for each aging category to maximize recovery rates."
    },
    {
      question: "How do you handle patient collections while maintaining good relationships?",
      answer: "We employ a patient-centric collection approach that emphasizes clear communication, flexible payment options, and compassionate outreach. Our team is trained to work with patients to find solutions that work for their financial situation while ensuring your practice receives payment for services rendered."
    },
    {
      question: "What reporting will we receive on AR performance?",
      answer: "You'll receive comprehensive monthly reports including AR aging summaries, collection rate metrics, payer performance analysis, and trend reports. We also provide real-time dashboards and can customize reporting to meet your specific needs."
    },
    {
      question: "How quickly can you improve our AR days?",
      answer: "Most practices see measurable improvement within 60-90 days of implementation. The timeline depends on your current AR status, payer mix, and specific challenges. We focus on quick wins in the first 30 days while building sustainable long-term improvements."
    },
    {
      question: "Do you work with both insurance and patient AR?",
      answer: "Yes, we provide comprehensive AR management covering both insurance and patient accounts. Our specialists are experienced in payer-specific follow-up, appeal processes, patient outreach, and payment plan management to maximize collections from all revenue sources."
    }
  ];

  const benefits = [
    { icon: DollarSign, title: "Increased Collections", description: "Improve collection rates by up to 30% with strategic AR management" },
    { icon: Clock, title: "Reduced AR Days", description: "Lower days in AR significantly with proactive follow-up and resolution" },
    { icon: TrendingUp, title: "Improved Cash Flow", description: "Accelerate revenue with faster collections and reduced aging balances" },
    { icon: Target, title: "Data-Driven Strategy", description: "Analytics-based approach ensures resources focus on highest-value opportunities" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Account Receivable Management Services | Healthcare AR Solutions</title>
        <meta name="description" content="Expert healthcare accounts receivable management services. Reduce AR days, improve collections, and optimize cash flow with our proven AR management strategies." />
        <meta name="keywords" content="account receivable management, healthcare AR, medical collections, AR aging, revenue cycle management" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Account Receivable Management",
            "description": "Comprehensive healthcare accounts receivable management services to optimize collections and improve cash flow",
            "provider": {
              "@type": "Organization",
              "name": "Mednarra"
            }
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-[420 px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={arHeroImage} 
            alt="Account Receivable Management Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/20 rounded-xl">
                <Wallet className="h-8 w-8 text-accent" />
              </div>
              <span className="text-accent font-semibold uppercase tracking-wider">Revenue Management</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Account Receivable <span className="text-accent">Management</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              Maximize collections, reduce aging balances, and accelerate cash flow with our comprehensive 
              AR management services designed specifically for healthcare providers.
            </p>

          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card border-2 border-border rounded-2xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AR Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Comprehensive AR Management Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From aging analysis to bad debt prevention, we provide end-to-end AR management 
              services that drive measurable improvements in your revenue cycle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arServices.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Expert AR Management That Delivers Results
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our dedicated AR specialists combine industry expertise with proven methodologies 
                to optimize your receivables. We focus on sustainable improvements that enhance 
                cash flow while maintaining positive patient relationships.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {capabilities.slice(0, 4).map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary mb-1">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={agingAnalysisImage} 
                  alt="Aging Analysis" 
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img 
                  src={paymentPlansImage} 
                  alt="Payment Plans" 
                  className="rounded-2xl shadow-lg w-full aspect-video object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={collectionStrategyImage} 
                  alt="Collection Strategy" 
                  className="rounded-2xl shadow-lg w-full aspect-video object-cover"
                />
                <img 
                  src={insuranceArImage} 
                  alt="Insurance AR" 
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How We Optimize Your AR
            </h2>
            <p className="text-lg text-muted-foreground">
              Our proven methodology delivers sustainable improvements in collection performance
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
              
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-8 items-start group">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl font-bold text-primary-foreground relative z-10 group-hover:bg-accent transition-colors">
                      {step.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-card border-2 border-border rounded-2xl p-8 hover:border-accent transition-colors">
                      <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Full-Spectrum AR Management
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Advanced capabilities designed to maximize your collection potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-primary-foreground/15 transition-colors border border-primary-foreground/20">
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{capability.title}</h3>
                  <p className="text-primary-foreground/80">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">FAQ</span>
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about our AR management services</p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border-2 border-border rounded-xl px-6 data-[state=open]:border-accent transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-accent py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wallet className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Ready to Optimize Your AR?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our experts help you reduce aging balances, improve collections, and accelerate cash flow
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services/insurance-follow-up">Insurance Follow-Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountReceivable;
