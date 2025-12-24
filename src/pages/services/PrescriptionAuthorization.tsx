import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Pill, 
  CheckCircle, 
  Clock, 
  Shield, 
  PhoneCall, 
  Target,
  ArrowRight,
  FileText,
  Users,
  Zap,
  RefreshCw,
  Search
} from "lucide-react";

import heroImage from "@/assets/healthcare/prescription-auth.jpg";
import pharmacyBenefitsImage from "@/assets/healthcare/pharmacy-benefits.jpg";
import stepTherapyImage from "@/assets/healthcare/step-therapy.jpg";
import formularyImage from "@/assets/healthcare/formulary-compliance.jpg";
import peerReviewImage from "@/assets/healthcare/peer-review.jpg";
import alternativeMedsImage from "@/assets/healthcare/alternative-meds.jpg";

const PrescriptionAuthorization = () => {
  const authServices = [
    {
      title: "Pharmacy Benefit Verification",
      description: "Comprehensive verification of pharmacy benefits and medication coverage before prescription processing.",
      image: pharmacyBenefitsImage,
      features: ["Coverage verification", "Copay determination", "Tier identification", "Network pharmacy check"]
    },
    {
      title: "Step Therapy Documentation",
      description: "Complete documentation support for step therapy requirements and exception requests.",
      image: stepTherapyImage,
      features: ["Therapy history compilation", "Clinical justification", "Exception requests", "Documentation preparation"]
    },
    {
      title: "Formulary Compliance",
      description: "Expert navigation of insurance formularies to find covered medication options.",
      image: formularyImage,
      features: ["Formulary research", "Tier optimization", "Generic alternatives", "Preferred drug identification"]
    },
    {
      title: "Peer-to-Peer Reviews",
      description: "Professional coordination of physician-to-physician reviews for complex medication approvals.",
      image: peerReviewImage,
      features: ["P2P scheduling", "Clinical preparation", "Documentation support", "Follow-up coordination"]
    },
    {
      title: "Alternative Medication Research",
      description: "Identification of therapeutically equivalent alternatives when preferred medications are unavailable.",
      image: alternativeMedsImage,
      features: ["Equivalent research", "Cost comparison", "Clinical review", "Provider consultation"]
    }
  ];

  const capabilities = [
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "Thorough preparation of all required clinical documentation for medication authorizations"
    },
    {
      icon: Search,
      title: "Formulary Navigation",
      description: "Expert navigation of complex insurance formularies to optimize medication coverage"
    },
    {
      icon: PhoneCall,
      title: "P2P Coordination",
      description: "Professional scheduling and preparation for peer-to-peer physician reviews"
    },
    {
      icon: Zap,
      title: "Expedited Processing",
      description: "Fast-track urgent medication authorizations for time-sensitive patient needs"
    },
    {
      icon: RefreshCw,
      title: "Appeal Management",
      description: "Comprehensive appeal support when initial authorization requests are denied"
    },
    {
      icon: Users,
      title: "Provider Collaboration",
      description: "Seamless coordination between prescribers, pharmacies, and insurance companies"
    }
  ];

  const processSteps = [
    { step: "01", title: "Prescription Review", description: "Analyze prescription requirements and payer-specific criteria" },
    { step: "02", title: "Benefit Verification", description: "Verify pharmacy benefits and medication coverage details" },
    { step: "03", title: "Documentation", description: "Compile clinical documentation and medical necessity letters" },
    { step: "04", title: "Submission", description: "Submit authorization request with complete supporting information" },
    { step: "05", title: "Follow-Up", description: "Track request status and respond to payer inquiries" },
    { step: "06", title: "Resolution", description: "Secure approval or initiate appeals process if needed" }
  ];

  const faqs = [
    {
      question: "How long does prescription authorization typically take?",
      answer: "Standard prescription authorizations typically take 24-72 hours, depending on the medication and insurance requirements. We expedite urgent requests and can often secure same-day approvals for emergency situations."
    },
    {
      question: "What happens if my medication authorization is denied?",
      answer: "If an authorization is denied, we immediately review the denial reason and initiate the appeals process. This may include preparing additional clinical documentation, coordinating peer-to-peer reviews, or researching covered alternatives."
    },
    {
      question: "Do you handle specialty medication authorizations?",
      answer: "Yes, we specialize in complex specialty medication authorizations including biologics, oncology medications, and high-cost specialty drugs that often require extensive documentation and clinical justification."
    },
    {
      question: "How do you coordinate with pharmacies?",
      answer: "We maintain direct communication with pharmacies throughout the authorization process, ensuring they receive approval notifications promptly and can dispense medications without delay once authorization is secured."
    },
    {
      question: "What information do you need to start an authorization?",
      answer: "We typically need the prescription details, patient insurance information, relevant diagnosis codes, and any available clinical documentation supporting the medication need. We guide providers through gathering any additional required information."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast processing of medication authorization requests with same-day submission"
    },
    {
      icon: Target,
      title: "95%+ Approval Rate",
      description: "High first-time approval rates through complete documentation and clinical justification"
    },
    {
      icon: PhoneCall,
      title: "P2P Expertise",
      description: "Expert coordination and preparation for peer-to-peer physician reviews"
    },
    {
      icon: Shield,
      title: "Patient-Focused",
      description: "Ensuring patients receive necessary medications without unnecessary delays"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Prescription Authorization Services | Medication Prior Auth | Agnos Health</title>
        <meta name="description" content="Expert prescription authorization services ensuring patients receive necessary medications. Fast turnaround, high approval rates, peer-to-peer support, and comprehensive appeal management." />
        <meta name="keywords" content="prescription authorization, medication prior auth, pharmacy benefits, step therapy, formulary compliance, P2P reviews, medication appeals" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Prescription Authorization Services",
            "description": "Comprehensive prescription authorization services to ensure patients receive necessary medications through efficient prior authorization and appeals management.",
            "provider": {
              "@type": "Organization",
              "name": "Agnos Health"
            },
            "serviceType": "Healthcare Revenue Cycle Management"
          })}
        </script>
      </Helmet>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Prescription Authorization Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Pill className="h-10 w-10 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Medication Authorization</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Prescription Authorization Services
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              Specialized prescription authorization services to ensure patients receive necessary medications 
              without delay through efficient prior authorization, formulary navigation, and appeals management.
            </p>

          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Our Prescription Authorization Services</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We streamline the medication authorization process, ensuring patients get the medications they need quickly
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer border-2">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Authorization Services Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Authorization Services</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                End-to-end prescription authorization support from initial submission to approval
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {authServices.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border-2 hover:border-primary/30">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Expert Medication Authorization Support</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our prescription authorization specialists work closely with prescribers, pharmacies, and insurance 
                  companies to navigate complex medication approval processes. We handle all documentation requirements, 
                  including medical necessity letters and clinical supporting information.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  When initial requests are denied, we coordinate comprehensive appeals including peer-to-peer physician 
                  reviews, ensuring patients receive the medications their providers prescribe. We also research formulary 
                  alternatives when necessary to find covered options that meet clinical needs.
                </p>
                
                <div className="space-y-4">
                  {["Medication prior authorization", "Pharmacy benefit verification", "Step therapy documentation", "Appeal and P2P support", "Alternative medication research", "Formulary compliance"].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-4 w-4 text-accent" />
                      </div>
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={pharmacyBenefitsImage} 
                  alt="Pharmacy Benefits" 
                  className="rounded-xl shadow-lg w-full aspect-square object-cover"
                />
                <img 
                  src={stepTherapyImage} 
                  alt="Step Therapy" 
                  className="rounded-xl shadow-lg w-full aspect-square object-cover mt-8"
                />
                <img 
                  src={peerReviewImage} 
                  alt="Peer Review" 
                  className="rounded-xl shadow-lg w-full aspect-square object-cover -mt-4"
                />
                <img 
                  src={alternativeMedsImage} 
                  alt="Alternative Medications" 
                  className="rounded-xl shadow-lg w-full aspect-square object-cover mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Authorization Process</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                A streamlined approach to securing medication approvals efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((item, index) => (
                <div key={index} className="relative bg-card rounded-xl p-6 border-2 border-border hover:border-accent/50 transition-all duration-300 group">
                  <div className="text-5xl font-bold text-accent/20 absolute top-4 right-4 group-hover:text-accent/30 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground text-sm relative z-10">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Capabilities</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Specialized expertise in navigating complex medication authorization requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <Card key={index} className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-2 hover:border-primary/30">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground text-sm">{capability.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our prescription authorization services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg border-2 border-border px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
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
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure Medication Access for Your Patients</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Fast, reliable prescription authorization services that put patients first and protect your revenue
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/denial-management">View Denial Management</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrescriptionAuthorization;
