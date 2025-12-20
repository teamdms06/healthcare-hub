import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ClipboardCheck,
  TrendingUp,
  BarChart3,
  MessageCircle,
  CheckCircle2,
  FileText,
  LineChart,
  Users,
  Star,
  Phone,
  Globe2,
  CircleCheck
} from "lucide-react";
import { Helmet } from "react-helmet";

// Images (Update paths if required)
import heroImage from "@/assets/bpo/survey-services.jpg";
import analyticsImage from "@/assets/bpo/servey-flow.webp";
import discussionImage from "@/assets/bpo/feedback.jpg";

const SatisfactionSurvey = () => {

  const highlights = [
    {
      icon: ClipboardCheck,
      title: "Customer Satisfaction (CSAT) Surveys",
      description: "Measure real satisfaction levels with structured surveys"
    },
    {
      icon: MessageCircle,
      title: "Product & Service Feedback Calls",
      description: "Direct human-to-human conversations for detailed insights"
    },
    {
      icon: BarChart3,
      title: "Honest & Neutral Data Collection",
      description: "Feedback handled by unbiased third-party professionals"
    },
    {
      icon: FileText,
      title: "Issue Mapping & RCA",
      description: "Identify root causes, gaps, and improvement opportunities"
    },
    {
      icon: TrendingUp,
      title: "Actionable Monthly Insight Reports",
      description: "Clear analytical reports with trends and insights"
    },
    {
      icon: CheckCircle2,
      title: "Action Point Conversion",
      description: "Convert feedback into clear improvement strategies"
    }
  ];

  const services = [
    {
      title: "Survey Design & Strategy",
      description:
        "We help you define what to measure, how to measure it, and structure surveys that capture meaningful insights."
    },
    {
      title: "Multi-Channel Feedback Collection",
      description:
        "Phone calls, emails, SMS, digital surveys — reach customers on the channels they respond best to."
    },
    {
      title: "Professional Data Analysis & Reporting",
      description:
        "Visual dashboards, trend mapping, sentiment interpretation, and behavioral insights."
    },
    {
      title: "Continuous Improvement Support",
      description:
        "We not only collect feedback — we help you act on it with monthly strategy consultations."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Understand Objectives & Audience",
      description: "We align with your business goals and define the right survey direction"
    },
    {
      step: 2,
      title: "Design Customized Survey Framework",
      description: "Structured questions crafted for clarity, honesty, and relevance"
    },
    {
      step: 3,
      title: "Collect Responses via Multiple Channels",
      description: "Phone, email, SMS, and digital channels based on customer preference"
    },
    {
      step: 4,
      title: "Analyze Data with Trend Mapping",
      description: "Identify experience gaps, recurring concerns, and sentiment behavior"
    },
    {
      step: 5,
      title: "Create Structured Insight Reports",
      description: "Visual dashboards and performance analytics to understand outcomes"
    },
    {
      step: 6,
      title: "Recommend Improvement Actions",
      description: "Clear, actionable roadmap to elevate service quality and CX outcomes"
    }
  ];


  const industries = [
    "Healthcare",
    "Education",
    "Financial Services",
    "E-commerce",
    "Technology & SaaS",
    "Telecom & Internet Services"
  ];

  const faqs = [
    {
      q: "Do customers actually respond to surveys?",
      a: "Yes. With our optimized communication strategy and trust-first approach, we ensure high response engagement."
    },
    {
      q: "Is feedback really unbiased?",
      a: "Absolutely. Being a third-party survey partner ensures neutral & honest responses without pressure."
    },
    {
      q: "How frequently can surveys be done?",
      a: "Weekly, Monthly, Quarterly — we structure based on your operational and strategic needs."
    },
    {
      q: "Will we receive dashboards?",
      a: "Yes. You receive structured reports, data charts, trend graphs, and action recommendations."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Satisfaction & Feedback Survey Services | Customer Experience Insights</title>
        <meta
          name="description"
          content="Boost customer satisfaction with professional surveys and insight analysis. We collect real feedback, identify improvement areas, and help enhance service experience."
        />
      </Helmet>

      <Navbar />

      {/* HERO WITH IMAGE */}
      <section className="relative min-h-[520px] flex items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm mb-4">
              <Star className="h-4 w-4 text-accent" />
              Customer Experience Intelligence
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              Satisfaction & Feedback Survey Services
            </h1>

            <p className="text-xl text-white/90 max-w-3xl drop-shadow-md">
              Understand what your customers truly feel — and turn insights into growth
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <img
            src={discussionImage}
            alt="Customer discussion"
            className="rounded-xl shadow-lg object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Real Insights That Drive Real Improvement
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We engage your customers through structured conversations and smart survey
              frameworks to capture genuine experiences, expectations, and improvement areas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our goal is not just data collection — we help you create meaningful change
              through actionable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-3">Key Highlights</h2>
            <p className="text-lg text-muted-foreground">
              Insightful. Structured. Impact-Focused.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, index) => (
              <Card
                key={index}
                className="group hover:-translate-y-2 hover:shadow-xl hover:border-accent transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 transition-all" />
                  <h3 className="text-xl font-semibold mb-2">{h.title}</h3>
                  <p className="text-muted-foreground">{h.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + CONTENT BLOCK */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Data That Speaks Clearly
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our analytics team transforms raw responses into powerful intelligence
              through visual charts, scoring models, and sentiment analysis.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <CircleCheck className="text-accent" /> Trend Identification
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CircleCheck className="text-accent" /> Sentiment & Behaviour Analysis
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <CircleCheck className="text-accent" /> Improvement Planning
              </li>
            </ul>
          </div>

          <img
            src={analyticsImage}
            alt="Analytics"
            className="rounded-xl shadow-lg object-cover w-full"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Our Survey Services</h2>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-6xl">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Our Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured, insight-driven approach to collect meaningful customer feedback
          </p>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative">

          {/* Center Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-accent/40 via-accent/20 to-transparent rounded-full" />

          <div className="space-y-12">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >

                {/* Card */}
                <div className="w-full lg:w-1/2">
                  <div className="p-8 border rounded-2xl bg-card hover:shadow-xl hover:border-accent transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="h-10 w-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                        {item.step}
                      </span>
                      <h3 className="text-xl font-semibold text-primary">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="h-5 w-5 rounded-full bg-accent border-4 border-white shadow-lg" />
                  <div className="flex-1 w-1 bg-border" />
                </div>

                <div className="w-full lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-white/90">
              Let us help you gather meaningful feedback and turn insights into growth.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 hover:scale-105 transition-transform"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SatisfactionSurvey;
