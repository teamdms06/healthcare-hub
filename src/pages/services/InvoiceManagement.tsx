import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  FileText, 
  DollarSign, 
  Bell, 
  TrendingUp, 
  CheckCircle, 
  Calendar,
  ArrowRight,
  Clock,
  BarChart3,
  Send,
  Receipt,
  AlertCircle,
  PieChart,
  Zap
} from "lucide-react";

import invoiceHeroImg from "@/assets/bpo/invoice-hero.jpg";
import invoiceCreationImg from "@/assets/bpo/invoice-creation.jpg";
import paymentReminderImg from "@/assets/bpo/payment-reminder.jpg";
import paymentTrackingImg from "@/assets/bpo/payment-tracking.jpg";
import reconciliationImg from "@/assets/bpo/reconciliation.jpg";

const InvoiceManagement = () => {
  const services = [
    {
      icon: FileText,
      title: "Invoice Creation",
      description: "Professional invoice generation with accurate details, proper formatting, and timely delivery to your clients.",
      image: invoiceCreationImg
    },
    {
      icon: Bell,
      title: "Reminder Management",
      description: "Automated and manual payment reminders sent at optimal intervals to ensure timely collections.",
      image: paymentReminderImg
    },
    {
      icon: BarChart3,
      title: "Payment Tracking",
      description: "Real-time visibility into payment status, pending amounts, and collection progress across all accounts.",
      image: paymentTrackingImg
    },
    {
      icon: Receipt,
      title: "Reconciliation & Reporting",
      description: "Accurate payment reconciliation with detailed reports for complete financial clarity.",
      image: reconciliationImg
    }
  ];

  const processSteps = [
    { step: "01", title: "Invoice Generation", description: "Create accurate, professional invoices", icon: FileText },
    { step: "02", title: "Delivery & Confirmation", description: "Send invoices and confirm receipt", icon: Send },
    { step: "03", title: "Payment Monitoring", description: "Track payment status in real-time", icon: Clock },
    { step: "04", title: "Reminder Dispatch", description: "Send timely payment reminders", icon: Bell },
    { step: "05", title: "Follow-up Actions", description: "Proactive overdue account follow-ups", icon: AlertCircle },
    { step: "06", title: "Reconciliation", description: "Match payments and close accounts", icon: CheckCircle }
  ];

  const impactMetrics = [
    { value: "95%", label: "On-Time Collections", icon: TrendingUp },
    { value: "48hrs", label: "Faster Payment Cycles", icon: Zap },
    { value: "60%", label: "Reduced Overdue Accounts", icon: PieChart },
    { value: "100%", label: "Reconciliation Accuracy", icon: CheckCircle }
  ];

  const challenges = [
    "Delayed invoice creation causing payment delays",
    "Missed payment reminders leading to overdue accounts",
    "Poor visibility into payment status",
    "Manual reconciliation errors",
    "Inconsistent follow-up processes",
    "Cash flow disruptions"
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Invoice Management Services",
    "description": "End-to-end invoice management from creation to payment reconciliation for improved cash flow.",
    "provider": {
      "@type": "Organization",
      "name": "BPO Services"
    },
    "serviceType": "Financial Management"
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Invoice Management Services | End-to-End Financial Solutions</title>
        <meta name="description" content="Complete invoice management from creation to payment reconciliation. Improve cash flow with automated reminders, payment tracking, and accurate reconciliation." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative min-h-[420px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={invoiceHeroImg} 
            alt="Invoice Management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4" />
              Financial Management
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Invoice Management
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              From invoice creation to payment reconciliation — we manage your complete billing cycle for smooth cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement - Diagonal Split */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">The Challenge</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
                Revenue Lost to Poor Invoice Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Many businesses lose significant revenue due to delayed invoices, missed reminders, and poor follow-up processes. 
                These gaps in the billing cycle create cash flow problems that affect overall business health.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                    </div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <Card className="relative border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary p-8">
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">Our Solution</h3>
                    <p className="text-primary-foreground/80">Complete invoice lifecycle management</p>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      { icon: FileText, text: "Professional invoice creation & delivery" },
                      { icon: Bell, text: "Automated reminder systems" },
                      { icon: Clock, text: "Real-time payment tracking" },
                      { icon: TrendingUp, text: "Proactive follow-up processes" },
                      { icon: CheckCircle, text: "Accurate reconciliation & reporting" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-accent" />
                        </div>
                        <span className="text-foreground font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Alternating Image Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              Complete Invoice Lifecycle
            </h2>
            <p className="text-lg text-muted-foreground">
              We handle every aspect of your invoice management to ensure consistent cash flow and accurate financial records.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`grid lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="relative h-64 lg:h-auto lg:min-h-[320px]">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary/10" />
                  </div>
                  <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">{service.description}</p>
                    <Button variant="ghost" className="w-fit text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto" asChild>
                      <Link to="/contact" className="flex items-center gap-2 font-semibold">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Horizontal Steps */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              How We Manage Your Invoices
            </h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to ensure every invoice is tracked from creation to final payment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((item, index) => (
              <div key={index} className="relative group">
                <Card className="h-full border-2 border-transparent hover:border-accent/30 transition-all duration-300 bg-background">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-accent/20 mb-4">{item.step}</div>
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-accent/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Feature List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Dedicated Team", description: "Expert invoice managers assigned to your account" },
                  { title: "Real-Time Updates", description: "Instant visibility into payment status" },
                  { title: "Custom Workflows", description: "Processes tailored to your business needs" },
                  { title: "Compliance Ready", description: "All invoices meet regulatory standards" },
                  { title: "Multi-Channel Follow-ups", description: "Email, phone, and SMS reminders" },
                  { title: "Detailed Analytics", description: "Comprehensive reports and insights" }
                ].map((feature, index) => (
                  <Card key={index} className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-muted">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
                Your Finance Team's Best Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We understand that invoice management is critical to your business health. Our team ensures every invoice 
                is handled with precision, every payment is tracked diligently, and your cash flow remains healthy.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With our systematic approach, your finance team receives proper updates without confusion, and your 
                customers experience a professional billing process that reflects well on your brand.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Start Today <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Light Gradient */}
      <section className="py-20 bg-gradient-to-br from-muted/50 via-accent/5 to-muted/50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl bg-background overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                    Ready to Optimize Your Invoice Process?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Let us handle your invoicing while you focus on growing your business. 
                    Get started with a free consultation today.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default" size="lg" asChild>
                      <Link to="/contact" className="flex items-center gap-2">
                        Get Started <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/services/analytics">Explore Analytics</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Calendar className="h-16 w-16 text-accent mx-auto mb-4" />
                    <p className="text-xl font-semibold text-primary">Smooth Cash Flow</p>
                    <p className="text-muted-foreground">Every Month, Guaranteed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvoiceManagement;
