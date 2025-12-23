import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  ClipboardCheck, 
  CheckCircle, 
  Shield, 
  TrendingUp, 
  Award, 
  Target,
  FileSearch,
  BarChart3,
  Users,
  Clock,
  AlertTriangle,
  ThumbsUp,
  ArrowRight,
  Star
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import qualityReviewsHero from "@/assets/healthcare/quality-reviews.jpg";
import chartAuditsImg from "@/assets/healthcare/chart-audits.jpg";
import codingValidationImg from "@/assets/healthcare/coding-validation.jpg";
import documentationComplianceImg from "@/assets/healthcare/documentation-compliance.jpg";
import hedisMeasuresImg from "@/assets/healthcare/hedis-measures.jpg";
import performanceTrackingImg from "@/assets/healthcare/performance-tracking.jpg";
import riskAdjustmentImg from "@/assets/healthcare/risk-adjustment.jpg";

const locationKeywords = [
  "Quality Reviews USA",
  "Healthcare Audits Services",
  "HEDIS Quality Measures",
  "Medical Chart Audits",
  "Clinical Documentation Review",
  "Healthcare Compliance Audits",
  "Quality Improvement Services",
  "Medicare Stars Rating Optimization"
];

const coreFeatures = [
  {
    image: chartAuditsImg,
    title: "Comprehensive Chart Audits",
    description: "In-depth review of medical records for accuracy, completeness, and compliance with documentation standards."
  },
  {
    image: codingValidationImg,
    title: "Coding Accuracy Validation",
    description: "Expert validation of ICD-10, CPT, and HCPCS codes to ensure proper reimbursement and compliance."
  },
  {
    image: documentationComplianceImg,
    title: "Documentation Compliance",
    description: "Thorough review ensuring documentation meets regulatory requirements and payer guidelines."
  },
  {
    image: hedisMeasuresImg,
    title: "HEDIS Quality Measures",
    description: "Specialized audits for Healthcare Effectiveness Data and Information Set compliance."
  },
  {
    image: performanceTrackingImg,
    title: "Performance Tracking",
    description: "Continuous monitoring and reporting of quality metrics with actionable insights."
  },
  {
    image: riskAdjustmentImg,
    title: "Risk Adjustment Audits",
    description: "HCC coding validation and risk adjustment factor optimization for accurate patient profiles."
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "We evaluate your current quality metrics, documentation practices, and identify priority areas for review."
  },
  {
    step: "02",
    title: "Data Collection",
    description: "Systematic gathering of medical records, coding data, and quality measure documentation for analysis."
  },
  {
    step: "03",
    title: "Expert Review",
    description: "Certified auditors conduct comprehensive reviews using industry-standard methodologies and criteria."
  },
  {
    step: "04",
    title: "Gap Analysis",
    description: "Identification of documentation gaps, coding errors, and opportunities for quality improvement."
  },
  {
    step: "05",
    title: "Actionable Reporting",
    description: "Detailed reports with specific recommendations, priority rankings, and implementation guidance."
  },
  {
    step: "06",
    title: "Continuous Improvement",
    description: "Ongoing monitoring, re-audits, and support to ensure sustained quality performance."
  }
];

const auditTypes = [
  "Prospective Chart Reviews",
  "Retrospective Audits",
  "Concurrent Reviews",
  "Peer-to-Peer Reviews",
  "External Quality Audits",
  "Internal Compliance Audits",
  "RADV Audit Preparation",
  "OIG Audit Readiness",
  "Payer Audit Support",
  "Medicare/Medicaid Audits"
];

const benefits = [
  {
    icon: Target,
    title: "Quality Improvement",
    description: "Identify and address quality gaps systematically with data-driven insights"
  },
  {
    icon: TrendingUp,
    title: "Performance Metrics",
    description: "Track and improve key quality indicators for better patient outcomes"
  },
  {
    icon: Shield,
    title: "Compliance Assurance",
    description: "Ensure adherence to quality standards, regulations, and payer requirements"
  },
  {
    icon: Award,
    title: "Expert Analysis",
    description: "Detailed quality assessments from AAPC and AHIMA certified professionals"
  }
];

const faqs = [
  {
    q: "What types of quality audits do you perform?",
    a: "We perform comprehensive quality audits including chart reviews, coding accuracy validation, HEDIS measure compliance, documentation audits, risk adjustment reviews, and regulatory compliance assessments. Our audits cover prospective, concurrent, and retrospective reviews tailored to your organization's needs."
  },
  {
    q: "How do quality reviews improve our Medicare Stars rating?",
    a: "Our quality reviews identify gaps in HEDIS measures, care quality documentation, and patient outcomes tracking. By addressing these gaps systematically, we help improve performance across all Star Rating categories including preventive care, chronic disease management, and patient experience metrics."
  },
  {
    q: "What qualifications do your auditors have?",
    a: "Our audit team consists of AAPC and AHIMA certified professionals including CPC, CCS, CPMA, and CDEO credentials. Many have clinical backgrounds as nurses or medical professionals, ensuring comprehensive understanding of both clinical and coding requirements."
  },
  {
    q: "How quickly can you complete an audit?",
    a: "Standard turnaround time is 24-48 hours for routine audits. For urgent needs or large-volume projects, we offer expedited services. We work with you to establish timelines that meet your operational and regulatory deadlines."
  },
  {
    q: "Do you provide support during payer or government audits?",
    a: "Yes, we provide comprehensive audit support including pre-audit preparation, documentation organization, response drafting, and appeals assistance. Our team has extensive experience with RAC, ZPIC, MAC, and OIG audits."
  },
  {
    q: "How do you ensure audit accuracy and consistency?",
    a: "We employ a multi-tier review process with quality checkpoints, use standardized audit tools and criteria, conduct regular inter-rater reliability testing, and provide ongoing training to maintain 98%+ accuracy rates across all audit types."
  }
];

const CheckIcon = () => (
  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
);

const QualityReviews = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quality Reviews & Audits Services",
    "description": "Comprehensive healthcare quality review and audit services including chart audits, coding validation, HEDIS measures, and compliance assessments.",
    "provider": {
      "@type": "Organization",
      "name": "Apex Medical Billing Solutions"
    },
    "serviceType": "Healthcare Quality Assurance",
    "areaServed": "United States"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Quality Reviews & Audits | Healthcare Chart Audits | HEDIS Compliance</title>
        <meta name="description" content="Expert healthcare quality review services including chart audits, coding validation, HEDIS measures, and compliance assessments. Improve quality scores and ensure regulatory compliance." />
        <meta name="keywords" content={locationKeywords.join(", ")} />
        <link rel="canonical" href="https://www.apexmbs.com/services/quality-reviews" />
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white min-h-[420 px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={qualityReviewsHero} 
            alt="Professional insurance follow-up specialists managing accounts receivable" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">Quality Assurance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Quality Reviews & <span className="text-accent">Healthcare Audits</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive quality review services ensuring your healthcare organization meets the highest 
              standards of care, documentation accuracy, and regulatory compliance. Improve your quality 
              scores and protect your revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Quality Review Services</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our certified auditors deliver thorough quality assessments that identify improvement opportunities 
                and ensure compliance across all aspects of healthcare documentation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 border-2 hover:border-accent overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Our Quality Audit Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to quality improvement that delivers measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="text-6xl font-bold text-accent/20 mb-4">{step.step}</div>
                      <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < workflowSteps.length - 1 && index !== 2 && (
                    <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-8 w-8 text-accent z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Types of Audits We Perform</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  From routine internal reviews to complex regulatory audit preparation, our team has the 
                  expertise to handle all your quality assurance needs with precision and professionalism.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {auditTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <CheckIcon />
                      <span className="font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-accent/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="h-8 w-8 text-accent" />
                    <h3 className="text-2xl font-bold text-primary">Medicare Stars Optimization</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Specialized audits focused on improving your Medicare Star Ratings through comprehensive 
                    HEDIS measure analysis, care gap identification, and quality improvement initiatives.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>HEDIS measure compliance tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>Care gap identification and closure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>Member experience optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckIcon />
                      <span>Quality bonus payment maximization</span>
                    </li>
                  </ul>
                  <Button variant="default" asChild className="w-full">
                    <Link to="/contact">Learn About Stars Improvement</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Quality Review Services</h2>
              <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                Partner with certified experts who understand the complexities of healthcare quality measurement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center p-8 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-primary-foreground/80">{benefit.description}</p>
                  </div>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our quality review and audit services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
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
          <h2 className="text-4xl font-bold mb-6 text-primary">Ready to Improve Your Quality Performance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Partner with our certified quality experts to enhance outcomes, ensure compliance, and maximize your quality scores.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="default" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/insurance-follow-up">View Follow-Up Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityReviews;
