import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  DollarSign, 
  CheckCircle, 
  Clock, 
  Shield, 
  Target, 
  TrendingUp,
  FileCheck,
  CreditCard,
  BarChart3,
  RefreshCw,
  AlertCircle,
  ArrowRight,
  Zap,
  Users
} from "lucide-react";
import heroImage from "@/assets/healthcare/payment-posting.jpg";

const PaymentPosting = () => {
  const features = [
    {
      title: "Insurance Payment Posting",
      icon: CreditCard,
      desc: "Accurate posting of ERA/EOB payments from all major insurance carriers with proper adjustment codes."
    },
    {
      title: "Patient Payment Processing",
      icon: Users,
      desc: "Timely posting of patient payments including co-pays, deductibles, and self-pay balances."
    },
    {
      title: "EOB/ERA Reconciliation",
      icon: FileCheck,
      desc: "Complete reconciliation of Explanation of Benefits and Electronic Remittance Advice with claims."
    },
    {
      title: "Adjustment & Write-off Management",
      icon: Target,
      desc: "Proper categorization and posting of contractual adjustments, write-offs, and denials."
    },
    {
      title: "Denial Identification & Routing",
      icon: AlertCircle,
      desc: "Immediate identification of denied claims and routing to denial management team for follow-up."
    },
    {
      title: "Payment Variance Analysis",
      icon: BarChart3,
      desc: "Analysis of underpayments and overpayments to ensure accurate reimbursement from payers."
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24-Hour Turnaround",
      description: "Payments posted within 24 hours of receipt for real-time financial visibility."
    },
    {
      icon: CheckCircle,
      title: "99.5% Accuracy Rate",
      description: "Precise payment application with minimal errors and maximum data integrity."
    },
    {
      icon: RefreshCw,
      title: "Seamless Reconciliation",
      description: "Daily reconciliation ensures your accounts receivable reflects actual collections."
    },
    {
      icon: TrendingUp,
      title: "Improved Cash Flow",
      description: "Faster payment posting accelerates revenue recognition and cash flow management."
    }
  ];

  const process = [
    {
      step: "Payment Receipt",
      desc: "Receive ERAs, EOBs, and patient payments from multiple sources"
    },
    {
      step: "Data Extraction",
      desc: "Extract payment details, adjustment codes, and denial reasons"
    },
    {
      step: "Payment Application",
      desc: "Apply payments to correct patient accounts and claims"
    },
    {
      step: "Adjustment Posting",
      desc: "Post contractual adjustments, write-offs, and denials accurately"
    },
    {
      step: "Reconciliation",
      desc: "Reconcile posted payments with bank deposits and payer remittances"
    },
    {
      step: "Reporting & Analysis",
      desc: "Generate detailed reports for financial analysis and audit trails"
    }
  ];

  const paymentTypes = [
    "Electronic Remittance Advice (ERA)",
    "Paper EOB Processing",
    "Patient Co-pay & Deductible Payments",
    "Credit Card Payments",
    "Check Payments",
    "Online Portal Payments",
    "Payment Plan Installments",
    "Refund Processing"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative text-white py-20 min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Revenue Cycle
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Payment Posting in Medical Billing
            </h1>

            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Accurate and timely payment posting services that ensure proper credit application, 
              EOB reconciliation, and complete revenue cycle visibility for optimized cash flow.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Precision Payment Posting for Healthcare Providers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Payment posting is a critical component of the revenue cycle that directly impacts your practice's 
              financial health. Our expert team ensures every payment—whether from insurance carriers or patients—is 
              posted accurately and promptly, maintaining the integrity of your accounts receivable and providing 
              real-time visibility into your financial performance.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Accurate & Compliant</h3>
                  <p className="text-muted-foreground">
                    Every payment is posted with the correct adjustment codes, ensuring compliance 
                    with payer contracts and regulatory requirements.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-accent">
                <CardContent className="p-6">
                  <Zap className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Fast Turnaround</h3>
                  <p className="text-muted-foreground">
                    Same-day or next-day posting ensures your accounts receivable is always 
                    current and reflects actual collections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Comprehensive Payment Posting Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From ERA processing to patient payment posting, we handle all aspects of payment 
                management with precision and efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-2 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <Icon className="h-10 w-10 text-accent mb-4" />
                      <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT TYPES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  All Payment Types, One Expert Team
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether it's electronic remittances, paper EOBs, or patient payments through various 
                  channels, our team handles every payment type with the same level of accuracy and attention 
                  to detail.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {paymentTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-accent">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">Why Accurate Posting Matters</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Accurate AR Reporting:</strong> Real-time visibility 
                        into your accounts receivable for better financial decision-making.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Faster Denial Resolution:</strong> Quick identification 
                        of denials enables timely appeals and corrections.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Improved Collections:</strong> Prompt patient statement 
                        generation based on accurate balance information.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">
                        <strong className="text-foreground">Audit Readiness:</strong> Complete documentation and 
                        audit trails for compliance and reporting.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS WORKFLOW */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Payment Posting Workflow</h2>
              <p className="text-xl text-primary-foreground/80">
                A systematic approach to ensure accuracy and efficiency at every step
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{item.step}</h3>
                  </div>
                  <p className="text-primary-foreground/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Key Benefits</h2>
              <p className="text-lg text-muted-foreground">
                Partner with us for payment posting that drives financial performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="text-center border-2 hover:border-accent transition-colors">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8 text-center">
              Why Choose Our Payment Posting Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Certified Billing Specialists</h3>
                    <p className="text-muted-foreground">
                      Our team consists of AAPC and AHIMA certified professionals with extensive 
                      experience in payment posting.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Multi-Platform Expertise</h3>
                    <p className="text-muted-foreground">
                      Proficient in all major practice management systems including Epic, Cerner, 
                      eClinicalWorks, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">HIPAA Compliant</h3>
                    <p className="text-muted-foreground">
                      All payment posting activities are conducted in strict compliance with 
                      HIPAA regulations and data security standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Detailed Reporting</h3>
                    <p className="text-muted-foreground">
                      Comprehensive daily, weekly, and monthly reports provide insights into 
                      payment trends and collection performance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Scalable Solutions</h3>
                    <p className="text-muted-foreground">
                      Whether you're a small practice or large health system, our services 
                      scale to meet your volume requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-primary mb-1">Dedicated Account Manager</h3>
                    <p className="text-muted-foreground">
                      A dedicated point of contact ensures seamless communication and quick 
                      resolution of any issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Streamline Your Payment Posting Today</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Partner with us for accurate, timely, and efficient payment posting that optimizes 
            your revenue cycle and improves cash flow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20" asChild>
              <Link to="/services/account-receivable">AR Management</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentPosting;
