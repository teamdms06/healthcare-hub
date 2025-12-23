import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  BarChart3, 
  CheckCircle, 
  TrendingUp, 
  Target, 
  PieChart, 
  LineChart,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  Database
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage from "@/assets/healthcare/business-analytics-hero.jpg";
import revenueAnalyticsImg from "@/assets/healthcare/revenue-analytics.jpg";
import performanceTrackingImg from "@/assets/healthcare/performance-tracking.jpg";
import customReportingImg from "@/assets/healthcare/custom-reporting.jpg";
import payerAnalysisImg from "@/assets/healthcare/payer-analysis.jpg";
import strategicInsightsImg from "@/assets/healthcare/strategic-insights.jpg";

const BusinessAnalysis = () => {
  const analyticsServices = [
    {
      image: revenueAnalyticsImg,
      title: "Revenue Cycle Analytics",
      description: "Deep dive into your revenue cycle performance with comprehensive metrics tracking, bottleneck identification, and optimization recommendations.",
      features: ["Cash flow analysis", "Collection rate tracking", "Revenue leakage detection"]
    },
    {
      image: payerAnalysisImg,
      title: "Payer Performance Analysis",
      description: "Evaluate payer contracts, reimbursement rates, and payment patterns to maximize revenue from each insurance relationship.",
      features: ["Contract comparison", "Reimbursement benchmarking", "Payment trend analysis"]
    },
    {
      image: performanceTrackingImg,
      title: "KPI Dashboard Development",
      description: "Custom real-time dashboards that visualize your most critical performance indicators for instant decision-making.",
      features: ["Real-time metrics", "Custom visualizations", "Mobile-friendly access"]
    },
    {
      image: customReportingImg,
      title: "Custom Reporting Solutions",
      description: "Tailored reports designed for your specific operational and financial needs, delivered on your preferred schedule.",
      features: ["Automated scheduling", "Multiple formats", "Executive summaries"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Assessment",
      description: "We analyze your existing data sources, systems, and reporting needs to create a comprehensive analytics roadmap."
    },
    {
      step: "02",
      title: "Integration & Setup",
      description: "Our team integrates with your practice management and billing systems to establish data pipelines."
    },
    {
      step: "03",
      title: "Dashboard Development",
      description: "We build custom dashboards and reports tailored to your specific KPIs and business objectives."
    },
    {
      step: "04",
      title: "Training & Delivery",
      description: "We train your team on using the analytics tools and establish ongoing reporting schedules."
    },
    {
      step: "05",
      title: "Continuous Optimization",
      description: "Regular reviews and updates ensure your analytics evolve with your business needs."
    }
  ];

  const capabilities = [
    { icon: BarChart3, title: "Revenue Analytics", description: "Track revenue trends and identify growth opportunities" },
    { icon: PieChart, title: "Financial Modeling", description: "Forecast outcomes and plan strategically" },
    { icon: LineChart, title: "Trend Analysis", description: "Identify patterns and predict future performance" },
    { icon: Database, title: "Data Integration", description: "Connect all your systems for unified insights" },
    { icon: Users, title: "Provider Metrics", description: "Track individual and team productivity" },
    { icon: Shield, title: "Compliance Reporting", description: "Ensure regulatory compliance with automated reports" }
  ];

  const faqs = [
    {
      question: "What data sources can you integrate with?",
      answer: "We integrate with all major practice management systems, EHR platforms, clearinghouses, and billing software. Our team handles the technical integration to ensure seamless data flow into your analytics dashboards."
    },
    {
      question: "How long does it take to set up analytics?",
      answer: "Initial dashboard setup typically takes 2-4 weeks depending on the complexity of your data sources and reporting requirements. Basic reporting can be available within the first week."
    },
    {
      question: "Can reports be customized for different stakeholders?",
      answer: "Absolutely. We create role-based dashboards and reports tailored for executives, managers, billing staff, and providers. Each stakeholder sees the metrics most relevant to their responsibilities."
    },
    {
      question: "Do you provide training on using the analytics tools?",
      answer: "Yes, comprehensive training is included. We provide hands-on training sessions, user guides, and ongoing support to ensure your team can fully leverage the analytics capabilities."
    },
    {
      question: "How often are reports updated?",
      answer: "Report frequency is customizable based on your needs. We offer real-time dashboards, daily summaries, weekly reports, and monthly executive reviews."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Business Analysis & Reporting",
    "description": "Transform healthcare data into actionable insights with comprehensive business analysis and custom reporting solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Your Healthcare RCM Partner"
    },
    "serviceType": "Business Analytics"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Business Analysis & Reporting | Healthcare Analytics Services</title>
        <meta name="description" content="Transform your healthcare data into actionable insights. Our business analysis and reporting services help optimize revenue cycle performance and drive better financial outcomes." />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-[420px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/60" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BarChart3 className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Analytics & Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Business Analysis & Reporting
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-2xl">
              Transform your healthcare data into actionable insights with comprehensive business 
              analysis and custom reporting solutions that drive better financial outcomes.
            </p>

          </div>
        </div>
      </section>

      {/* Analytics Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-4">Comprehensive Analytics Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Data-driven insights to optimize every aspect of your healthcare revenue cycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {analyticsServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/30">
                <div className="md:flex">
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider">Capabilities</span>
              <h2 className="text-4xl font-bold text-primary mt-2 mb-6">Full-Spectrum Analytics</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our analytics platform provides comprehensive visibility into every aspect of your 
                healthcare operations, from patient acquisition to final payment collection.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <Icon className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary">{capability.title}</h4>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img 
                src={strategicInsightsImg} 
                alt="Strategic business insights meeting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/80">Practices Optimized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-4">How We Deliver Insights</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology for transforming your data into actionable business intelligence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-primary/20 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold uppercase tracking-wider">FAQ</span>
              <h2 className="text-4xl font-bold text-primary mt-2">Common Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Unlock the Power of Your Data</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform data into insights that drive better financial performance and operational excellence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/account-receivable">View AR Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessAnalysis;
