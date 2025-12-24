import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  FileCheck, 
  CheckCircle, 
  Clock, 
  Shield, 
  TrendingUp, 
  Target,
  ArrowRight,
  FileText,
  Users,
  Phone,
  Zap,
  RefreshCw
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import priorAuthHeroImage from "@/assets/healthcare/prior-auth-hero.jpg";
import procedureAuthImage from "@/assets/healthcare/procedure-auth.jpg";
import medicationAuthImage from "@/assets/healthcare/medication-auth.jpg";
import dmeAuthImage from "@/assets/healthcare/dme-auth.jpg";
import authTrackingImage from "@/assets/healthcare/auth-tracking.jpg";
import authAppealImage from "@/assets/healthcare/auth-appeal.jpg";

const PriorAuthorization = () => {
  const authServices = [
    {
      image: procedureAuthImage,
      title: "Medical Procedure Authorization",
      description: "Complete handling of surgical and diagnostic procedure pre-authorizations, ensuring all clinical documentation meets payer requirements for approval.",
      features: ["Surgical procedures", "Diagnostic imaging", "Outpatient services"]
    },
    {
      image: medicationAuthImage,
      title: "Medication Prior Authorization",
      description: "Expert management of prescription drug authorizations including specialty medications, biologics, and high-cost drug therapies.",
      features: ["Specialty medications", "Step therapy appeals", "Formulary exceptions"]
    },
    {
      image: dmeAuthImage,
      title: "DME Authorization",
      description: "Comprehensive authorization services for durable medical equipment including wheelchairs, CPAP machines, prosthetics, and other medical devices.",
      features: ["Equipment authorization", "Medical necessity documentation", "Rental vs purchase"]
    },
    {
      image: authTrackingImage,
      title: "Authorization Tracking",
      description: "Real-time monitoring and tracking of all authorization requests with proactive follow-up to ensure timely approvals and prevent care delays.",
      features: ["Status monitoring", "Expiration alerts", "Renewal management"]
    },
    {
      image: authAppealImage,
      title: "Appeal & Reconsideration",
      description: "Expert handling of denied authorizations including peer-to-peer reviews, formal appeals, and expedited reconsideration requests.",
      features: ["Denial overturn", "Peer-to-peer coordination", "Expedited appeals"]
    }
  ];

  const capabilities = [
    {
      icon: FileText,
      title: "Documentation Expertise",
      description: "Comprehensive clinical documentation support ensuring all medical necessity criteria are met"
    },
    {
      icon: Phone,
      title: "Payer Communication",
      description: "Direct coordination with insurance companies for faster resolution and approval"
    },
    {
      icon: Shield,
      title: "Compliance Assurance",
      description: "All authorizations handled in compliance with payer guidelines and regulatory requirements"
    },
    {
      icon: Users,
      title: "Care Coordination",
      description: "Seamless collaboration with providers, patients, and payers throughout the process"
    },
    {
      icon: RefreshCw,
      title: "Renewal Management",
      description: "Proactive tracking and renewal of expiring authorizations to ensure continuous coverage"
    },
    {
      icon: Zap,
      title: "Urgent Requests",
      description: "Expedited handling of urgent and emergent authorization requests for time-sensitive care"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Request Intake",
      description: "Receive authorization request with clinical documentation and patient information"
    },
    {
      step: "02",
      title: "Payer Verification",
      description: "Verify insurance coverage, authorization requirements, and medical necessity criteria"
    },
    {
      step: "03",
      title: "Submission & Follow-up",
      description: "Submit authorization with complete documentation and conduct proactive follow-up"
    },
    {
      step: "04",
      title: "Approval & Communication",
      description: "Communicate approval details to providers and patients, manage any required appeals"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you obtain prior authorizations?",
      answer: "Standard authorizations typically take 3-5 business days, though we handle urgent requests within 24-48 hours. We prioritize based on clinical urgency and maintain direct lines with major payers to expedite when needed. Our average turnaround is significantly faster than industry standards."
    },
    {
      question: "What is your authorization approval rate?",
      answer: "We achieve a 95%+ first-time authorization approval rate through thorough documentation preparation and understanding of payer-specific requirements. For initially denied authorizations, our appeal success rate exceeds 80% through our expert appeal process."
    },
    {
      question: "Do you handle peer-to-peer reviews?",
      answer: "Yes, we coordinate all peer-to-peer reviews between treating physicians and payer medical directors. We prepare providers with relevant clinical information and payer criteria, and schedule reviews at convenient times to maximize approval chances."
    },
    {
      question: "How do you track authorization status and expirations?",
      answer: "We use advanced tracking systems that monitor all authorization statuses in real-time and automatically alert us to upcoming expirations. This proactive approach ensures renewals are submitted before authorizations lapse, preventing care interruptions."
    },
    {
      question: "What types of procedures and medications do you handle?",
      answer: "We handle all types of prior authorizations including surgical procedures, diagnostic imaging, specialty medications, infusion therapies, DME, home health services, and specialist referrals. Our team is experienced with complex cases across all medical specialties."
    }
  ];

  const benefits = [
    { icon: Clock, title: "Faster Approvals", description: "Reduce authorization turnaround time by up to 60%" },
    { icon: Target, title: "95%+ Approval Rate", description: "First-time authorization approval through expert handling" },
    { icon: Shield, title: "Prevent Denials", description: "Proper pre-authorization protects revenue and patient care" },
    { icon: TrendingUp, title: "Revenue Protection", description: "Ensure reimbursement with compliant authorizations" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Prior Authorization Services | Healthcare Pre-Authorization Management</title>
        <meta name="description" content="Expert prior authorization services for medical procedures, medications, and DME. Achieve 95%+ approval rates with faster turnaround and expert appeal handling." />
        <meta name="keywords" content="prior authorization, pre-authorization, medical authorization, medication authorization, DME authorization, healthcare authorization services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Prior Authorization Services",
            "description": "Comprehensive prior authorization services ensuring timely approvals for medical procedures, medications, and equipment",
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
            src={priorAuthHeroImage} 
            alt="Prior Authorization Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/20 rounded-xl">
                <FileCheck className="h-8 w-8 text-accent" />
              </div>
              <span className="text-accent font-semibold uppercase tracking-wider">Authorization Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Prior Authorization <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              Comprehensive prior authorization management ensuring timely approvals for procedures, 
              medications, and services—preventing claim denials and delays in patient care.
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

      {/* Authorization Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider mb-4 block">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Complete Authorization Management
            </h2>
            <p className="text-lg text-muted-foreground">
              From initial request to final approval, we handle every aspect of the prior authorization 
              process to ensure timely care delivery and maximum reimbursement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authServices.map((service, index) => (
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
                Expert Authorization Management That Delivers Results
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our authorization specialists understand the complexities of payer requirements and 
                clinical documentation. We work proactively to ensure approvals are obtained quickly 
                and care is never delayed due to authorization issues.
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
                  src={procedureAuthImage} 
                  alt="Procedure Authorization" 
                  className="rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
                <img 
                  src={authTrackingImage} 
                  alt="Authorization Tracking" 
                  className="rounded-2xl shadow-lg w-full aspect-video object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src={medicationAuthImage} 
                  alt="Medication Authorization" 
                  className="rounded-2xl shadow-lg w-full aspect-video object-cover"
                />
                <img 
                  src={authAppealImage} 
                  alt="Authorization Appeals" 
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
              How We Handle Authorizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Our streamlined process ensures quick turnaround and high approval rates
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
              Full-Service Authorization Support
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Comprehensive capabilities to handle any authorization challenge
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
              <p className="text-muted-foreground">Common questions about our prior authorization services</p>
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
                <FileCheck className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Streamline Your Authorization Process
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ensure timely approvals and prevent claim denials with expert prior authorization services
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services/prescription-authorization">Prescription Authorization</Link>
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

export default PriorAuthorization;
