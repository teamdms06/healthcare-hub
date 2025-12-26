import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Wrench, 
  ClipboardList, 
  Users, 
  CheckCircle, 
  FileText, 
  DollarSign, 
  Bell,
  ArrowRight,
  Clock,
  Target,
  Shield,
  Zap,
  RefreshCw,
  Headphones
} from "lucide-react";
import heroImage from "@/assets/bpo/amc-hero.jpg";
import ticketManagementImage from "@/assets/bpo/ticket-management.jpg";
import engineerAssignmentImage from "@/assets/bpo/engineer-assignment.jpg";
import serviceTrackingImage from "@/assets/bpo/service-tracking.jpg";
import paymentReconciliationImage from "@/assets/bpo/payment-reconciliation.jpg";
import customerUpdatesImage from "@/assets/bpo/customer-updates.jpg";

const AMCManagement = () => {
  const services = [
    {
      image: ticketManagementImage,
      title: "Ticket Management",
      description: "Complete ticket creation, logging, and prioritization for all service requests with real-time tracking.",
      features: ["Automated ticket creation", "Priority assignment", "SLA tracking"]
    },
    {
      image: engineerAssignmentImage,
      title: "Engineer Assignment",
      description: "Smart allocation of engineers and service teams based on expertise, location, and availability.",
      features: ["Skill-based matching", "Location optimization", "Workload balancing"]
    },
    {
      image: serviceTrackingImage,
      title: "Service Tracking",
      description: "End-to-end visibility of service status from initiation to completion with detailed progress updates.",
      features: ["Real-time status", "Milestone tracking", "Performance metrics"]
    },
    {
      image: paymentReconciliationImage,
      title: "Payment Reconciliation",
      description: "Complete invoice management, payment reminders, and final reconciliation for all AMC contracts.",
      features: ["Invoice generation", "Payment tracking", "Reconciliation reports"]
    }
  ];

  const benefits = [
    { icon: Clock, title: "Faster Resolution", description: "Reduce service turnaround time by up to 40% with streamlined workflows" },
    { icon: Target, title: "Zero Missed Tickets", description: "Every service request is logged, tracked, and resolved without falling through cracks" },
    { icon: Shield, title: "Complete Visibility", description: "Real-time dashboards and reports for full transparency across all AMC activities" },
    { icon: Zap, title: "Automated Workflows", description: "Reduce manual effort with automated ticket routing, reminders, and escalations" },
    { icon: RefreshCw, title: "Seamless Renewals", description: "Proactive contract renewal management to maintain continuous service coverage" },
    { icon: Headphones, title: "Customer Satisfaction", description: "Keep customers informed at every stage for enhanced service experience" }
  ];

  const processSteps = [
    { step: "01", title: "Ticket Creation", description: "Customer raises a service request through any channel - phone, email, or portal" },
    { step: "02", title: "Logging & Prioritization", description: "Request is logged with complete details and assigned appropriate priority level" },
    { step: "03", title: "Engineer Assignment", description: "Right engineer or service team is assigned based on expertise and availability" },
    { step: "04", title: "Service Execution", description: "On-site or remote service is performed with real-time status updates" },
    { step: "05", title: "Quality Check", description: "Service completion is verified and customer confirmation is obtained" },
    { step: "06", title: "Documentation", description: "Complete service report is generated with all details for records" },
    { step: "07", title: "Payment Processing", description: "Invoice is generated and payment is tracked till reconciliation" }
  ];

  const capabilities = [
    "Multi-channel ticket intake (phone, email, web, WhatsApp)",
    "Automated SLA monitoring and escalation",
    "Engineer mobile app for field updates",
    "Spare parts inventory tracking",
    "Customer portal for self-service",
    "Preventive maintenance scheduling",
    "Contract renewal automation",
    "Comprehensive MIS reporting"
  ];

  const faqs = [
    {
      question: "What types of AMC contracts can you manage?",
      answer: "We manage all types of AMC contracts including IT equipment, office machinery, HVAC systems, electrical systems, manufacturing equipment, and more. Our flexible system adapts to any service contract requirements."
    },
    {
      question: "How do you handle emergency service requests?",
      answer: "Emergency requests are automatically flagged with high priority. Our system triggers immediate alerts to available engineers and management, ensuring rapid response within defined SLA timelines."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we can integrate with your existing CRM, ERP, or other business systems through APIs. This ensures seamless data flow and eliminates duplicate entries across platforms."
    },
    {
      question: "How do customers track their service requests?",
      answer: "Customers receive real-time updates via SMS, email, or WhatsApp at every stage. They can also access a self-service portal to view ticket status, service history, and upcoming scheduled maintenance."
    },
    {
      question: "What reports do you provide?",
      answer: "We provide comprehensive MIS reports including ticket analysis, engineer performance, SLA compliance, customer satisfaction scores, payment status, and contract renewal summaries - all customizable to your needs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>AMC Management Services | End-to-End Contract Management | The Connections</title>
        <meta name="description" content="Complete AMC management from ticket generation to payment reconciliation. Streamline your annual maintenance contracts with our comprehensive end-to-end service management solutions." />
        <meta name="keywords" content="AMC management, annual maintenance contract, service ticket management, payment reconciliation, engineer assignment, service tracking" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AMC Management Services",
            "provider": {
              "@type": "Organization",
              "name": "The Connections"
            },
            "description": "Complete AMC management from ticket generation to payment reconciliation. Streamline your annual maintenance contracts with comprehensive service management.",
            "serviceType": "Annual Maintenance Contract Management"
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AMC Management Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent/20 rounded-xl backdrop-blur-sm">
                <Wrench className="h-8 w-8 text-accent" />
              </div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">End-to-End Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              AMC Management – <span className="text-accent">Complete Solution</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-4 leading-relaxed">
              From Ticket Generation to Payment Reconciliation
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Annual Maintenance Contracts need a smooth process. Most companies struggle with missed tickets, 
              slow follow-ups, pending approvals, and delayed payments. We manage your complete AMC cycle so 
              every service request is tracked, resolved, and closed with proper documentation.
            </p>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
              Transform Your AMC Operations
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive AMC management solution eliminates inefficiencies and ensures 
              every service commitment is met with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-accent/30">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
              Complete AMC Service Modules
            </h2>
            <p className="text-lg text-muted-foreground">
              Every aspect of your AMC operations covered with dedicated modules for seamless management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Updates Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={customerUpdatesImage} 
                  alt="Customer receiving service updates"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm">Customer Visibility</p>
                </div>
              </div>
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Customer Experience</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                  Your Customers Stay Updated. Your Team Stays Stress-Free.
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We ensure every activity is recorded, every update is shared, and every commitment is met. 
                  Your customers get a smooth service experience and your internal team gets complete visibility.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  When the AMC process is organised, your service delivery becomes stronger. Your customer 
                  trust grows. Your revenue stabilises.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Real-time updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">SMS & Email alerts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Customer portal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">Service history</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
              A Complete AMC Process That Works Without Gaps
            </h2>
            <p className="text-lg text-muted-foreground">
              From the moment a customer raises a ticket, our team takes over the entire workflow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />
              
              <div className="space-y-6">
                {processSteps.map((item, index) => (
                  <div key={index} className="relative flex gap-6 md:gap-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg relative z-10">
                      {item.step}
                    </div>
                    <Card className="flex-1 hover:shadow-lg transition-shadow">
                      <CardContent className="p-5">
                        <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold uppercase tracking-wider text-sm">Capabilities</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">
                  Everything You Need for AMC Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our platform comes equipped with all the features you need to manage AMC operations efficiently.
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-accent/10 transition-colors">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center bg-accent/10 border-accent/20">
                  <ClipboardList className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-muted-foreground text-sm">Tickets Managed</p>
                </Card>
                <Card className="p-6 text-center bg-accent/10 border-accent/20">
                  <Users className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground text-sm">Engineers Coordinated</p>
                </Card>
                <Card className="p-6 text-center bg-accent/10 border-accent/20">
                  <FileText className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-muted-foreground text-sm">SLA Compliance</p>
                </Card>
                <Card className="p-6 text-center bg-accent/10 border-accent/20">
                  <DollarSign className="h-10 w-10 text-accent mx-auto mb-3" />
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-muted-foreground text-sm">Payment Tracking</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl border px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Design */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Bell className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Ready to streamline your AMC operations?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Transform Your Service Delivery Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us handle your complete AMC cycle while you focus on growing your business. 
              Experience zero missed tickets, faster resolutions, and happier customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AMCManagement;
