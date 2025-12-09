import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Mail, Clock, Users, BarChart } from "lucide-react";

// 🖼️ Update these paths to match your actual images
import contactCentreHero from "@/assets/contact-center.jpg";
import contactCentreTeam from "@/assets/call-center-team.jpg";
import contactCentreDashboard from "@/assets/contact-center-1.webp";

const ContactCentre = () => {
  const highlights = [
    "Inbound and outbound calling",
    "Chat, email and WhatsApp support",
    "24×7 operations with defined SLAs",
    "Trained agents, team leaders and QA",
    "Daily, weekly and monthly performance reports"
  ];

  const services = [
    {
      icon: Phone,
      title: "Inbound & Outbound Calling",
      description:
        "We handle inquiries, follow-ups, renewals and outreach calls with professional, brand-aligned communication."
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Chat Support",
      description:
        "Real-time chat assistance on your website or apps to resolve queries quickly and reduce drop-offs."
    },
    {
      icon: Mail,
      title: "Email & WhatsApp Support",
      description:
        "Clear, well-structured responses across email and WhatsApp so every conversation is documented and traceable."
    },
    {
      icon: Clock,
      title: "24×7 Operations",
      description:
        "Around-the-clock coverage so your customers always find help – not voicemail or offline messages."
    },
    {
      icon: Users,
      title: "Trained & Managed Team",
      description:
        "Dedicated agents, team leads and QA specialists trained on your processes, scripts and compliance needs."
    },
    {
      icon: BarChart,
      title: "Reporting & Insights",
      description:
        "Dashboards and reports with SLAs, KPIs and trend analysis to improve decisions and customer experience."
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Process Mapping",
      text: "We understand your business, existing flows, FAQs, escalation paths and pain points before we start."
    },
    {
      title: "Playbooks & Training",
      text: "We create scripts, SOPs and a knowledge base, then train agents to speak in your brand voice."
    },
    {
      title: "Go-Live & Quality Monitoring",
      text: "We launch with close monitoring, QA checks, call barging and regular coaching to stabilize performance."
    },
    {
      title: "Continuous Improvement",
      text: "We review reports with you, refine scripts, optimize staffing and improve conversion and satisfaction."
    }
  ];

  const industries = [
    "Healthcare & medical practices – appointment handling, reminders, billing queries.",
    "Insurance & financial services – policy information, renewals, payment follow-ups.",
    "E-commerce & retail – order support, returns, delivery status and refunds.",
    "Technology & SaaS – onboarding assistance, usage queries and basic technical support.",
    "Professional services – enquiry handling, lead qualification and follow-ups."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO with background image */}
      <section className="relative text-primary-foreground py-20 min-h-[380px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactCentreHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Phone className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Operations &amp; Support
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Contact Center Operations &amp; Support
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed drop-shadow-md">
              A fully managed contact centre that handles calls, chats, emails and WhatsApp – 
              giving your customers fast, friendly support while your team focuses on core work.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {/* Intro with image */}
            <Card className="border rounded-3xl shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1.6fr_minmax(0,1fr)]">
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      A Contact Centre That Feels Like Your Own Team
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      For your customers, every interaction matters. Long wait times, 
                      dropped calls or delayed replies can quickly impact trust. We build a 
                      contact centre model that acts as an extension of your brand – not just an outsourced vendor.
                    </p>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Our teams manage inbound and outbound communication across phone, chat, 
                      email and WhatsApp, following your processes, tone and SLAs. You get 
                      consistency, coverage and visibility, without the overhead of building everything in-house.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Whether you are starting from scratch or scaling an existing operation, 
                      we help you design the right mix of people, process and technology for your contact centre.
                    </p>
                    <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                      {highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image side */}
                  <div className="relative bg-muted/40">
                    <img
                      src={contactCentreTeam}
                      alt="Contact centre team at work"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md max-w-xs">
                      <p className="text-xs font-semibold text-primary mb-1">
                        Dedicated Support Pods
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Small, focused teams aligned to your brand and processes, 
                        supported by team leads and QA.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SERVICES + dashboard image */}
            <div className="grid lg:grid-cols-[0.6fr_minmax(0,1fr)] gap-10 items-start">
              {/* Dashboard / analytics image */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-md border bg-white">
                  <img
                    src={contactCentreDashboard}
                    alt="Contact centre dashboards and analytics"
                    className="w-full h-[730px] object-cover"
                  />
                </div>
                <Card className="border-primary/40 bg-primary/5">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Live Metrics &amp; Transparent Reporting
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Track volumes, service levels, average handling time, 
                      CSAT trends and more. We make performance measurable and visible.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-primary mb-6 text-left">
                  Omnichannel Contact Centre Services
                </h2>
                <p className="text-muted-foreground text-left max-w-3xl mb-8 leading-relaxed">
                  We bring all your customer touchpoints into one managed operation. 
                  Voice, chat, email and messaging are handled by one team, with common 
                  training, QA and reporting – so your customers always experience a 
                  seamless, consistent service.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 hover:border-accent"
                    >
                      <CardContent className="p-6">
                        <service.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                        <h4 className="text-xl font-bold text-primary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Every engagement includes SLAs, escalation paths and a dedicated 
                  account manager to keep your operations aligned with business goals.
                </p>
              </div>
            </div>

            {/* PROCESS SECTION */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                How Our Contact Centre Engagement Works
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8 leading-relaxed">
                A structured rollout reduces risk and gives you confidence. 
                We keep you involved at every stage – from discovery to scale-up.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, idx) => (
                  <Card key={idx} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-1">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.text}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* INDUSTRIES / USE CASES with subtle visual block */}
            <div className="rounded-3xl border bg-muted/40 p-8 lg:p-10">
              <div className="grid lg:grid-cols-[1.6fr_minmax(0,1fr)] gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Who We Support
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Our model is flexible enough to support multiple industries while keeping 
                    process discipline and compliance at the core.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {industries.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <Card className="border-primary/40 bg-primary/5">
                    <CardContent className="p-5">
                      <p className="text-sm font-semibold text-primary mb-1">
                        Why Teams Choose to Outsource
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Reduce hiring and training effort, extend support hours, 
                        and gain structured reporting without managing an in-house 
                        contact centre. We plug into your tools and operate as an 
                        extension of your team.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-5">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Start with a pilot for a specific process or time window, 
                        see the impact, and then scale step-by-step as your comfort 
                        and volumes grow.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* IN-PAGE CTA */}
            <div className="rounded-3xl border bg-accent/5 p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  Ready to Level Up Your Customer Operations?
                </h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  Tell us about your current setup – call volumes, channels, hours 
                  and challenges. We’ll help you design a contact centre solution 
                  that improves response times, quality and customer satisfaction.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Discussion</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactCentre;
