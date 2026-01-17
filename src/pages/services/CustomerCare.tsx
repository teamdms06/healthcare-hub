import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Headphones,
  Clock,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  PhoneIncoming,
  MessageSquare,
} from "lucide-react";

// Replace these with HD images in your assets folder
import heroImage from "@/assets/bpo/customer-care-hero.png";
import teamImage from "@/assets/bpo/customer-service-team.jpeg";
import dashboardImage from "@/assets/bpo/customer-service-board.jpg";

const CustomerCare = () => {
  const highlights = [
    "Real-time response across voice, chat, email and messaging",
    "Consistent support across all time zones and shifts",
    "Dedicated pods for peak, off-peak and after-hours support",
    "No backlog: tickets closed or actioned within SLA",
    "On-brand responses and escalation discipline"
  ];

  const benefits = [
    { icon: Clock, title: "24×7 Coverage", description: "Nights, weekends and holidays – fully covered with local language support." },
    { icon: Users, title: "Skilled Agents", description: "Experienced agents trained on your products, tone and SOPs." },
    { icon: TrendingUp, title: "Improved CSAT", description: "Faster responses and consistent handling increase customer satisfaction." },
    { icon: Shield, title: "Service Stability", description: "Protect your operations during sudden spikes and campaigns." }
  ];

  const services = [
    {
      title: "Omnichannel Triage",
      text: "All incoming conversations are routed to a unified queue (voice, chat, email, WhatsApp) with full context.",
      icon: MessageSquare
    },
    {
      title: "Escalation & Resolution",
      text: "Defined escalation paths, senior-agent intervention and follow-through until closure.",
      icon: PhoneIncoming
    },
    {
      title: "After-Hours Support",
      text: "Critical operations and urgent customer handling continues outside business hours.",
      icon: Clock
    },
    {
      title: "Knowledge & QA",
      text: "Continuous training, script updates and QA coaching to keep quality high.",
      icon: CheckCircle
    }
  ];

  const process = [
    { step: "Discover", detail: "We audit your current support flows, volumes and peak patterns." },
    { step: "Design", detail: "We design coverage windows, pods, SLAs and escalation rules." },
    { step: "Deploy", detail: "Agents are trained, playbooks shared, and monitoring tools configured." },
    { step: "Optimize", detail: "Weekly reviews, QA, and performance tuning drives continuous improvement." }
  ];

  const metrics = [
    { label: "Avg. First Response", value: "≤ 15 mins" },
    { label: "FCR (First Contact Resolution)", value: "70%+" },
    { label: "CSAT", value: "4.6 / 5" },
    { label: "SLA Compliance", value: "99%" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative text-primary-foreground py-24 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Headphones className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">24×7 Support</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Customer Care — Always Available</h1>
            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md mb-6">
              We become your extended support team that never shuts down — handling spikes, urgent issues and ongoing follow-ups with consistent quality.
            </p>

            {/* <div className="flex gap-3">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Start 24×7 Support</Link>
              </Button>
              <Button size="lg" variant="outline_hero" asChild>
                <Link to="#services">See Services</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* PRIMARY CONTENT */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* KEY HIGHLIGHTS — rounded card with left text + right image */}
            <div className="mx-auto max-w-6xl">
              <div className="rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                <div className="grid lg:grid-cols-[1fr_520px]">
                  {/* LEFT: copy */}
                  <div className="p-12 lg:p-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                      Stop Losing Leads You Already Paid For
                    </h2>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Marketing and lead generation are expensive. Yet many organisations lose leads because they are not attended on time, not tagged correctly or never assigned to a specific owner.
                    </p>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Our Sales Leakage service focuses on what happens after the enquiry is received. We bring structure to follow-ups, tracking and reporting so your existing demand is fully utilised.
                    </p>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      The goal is simple: every valid enquiry is contacted, updated and moved to the next step — or closed with a clear reason — instead of silently dropping off.
                    </p>

                    {/* Highlights list with red bullets */}
                    <ul className="mt-4 space-y-3 max-w-xl">
                      {[
                        "Identify leakage points across your sales funnel.",
                        "Track missed calls, dropped leads and unassigned enquiries.",
                        "Monitor follow-ups so no prospect is forgotten.",
                        "Keep CRM / sheets accurately updated in near real-time.",
                        "Protect revenue and improve conversion rates every month."
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT: image + overlay callout */}
                  <div className="relative bg-gray-50">
                    <img
                      src={teamImage}
                      alt="Team reviewing sales dashboard"
                      className="w-full h-full object-cover min-h-[360px]"
                    />

                    {/* overlay callout bottom-right */}
                    <div className="absolute -translate-y-1/4 right-6 bottom-6 w-[280px]">
                      <div className="rounded-2xl bg-white/95 border border-gray-100 p-4 shadow-md">
                        <p className="text-xs font-semibold text-slate-800 mb-1">Real-Time Oversight</p>
                        <p className="text-xs text-slate-600">
                          See exactly where leads are stuck, how many were recovered and what actions were taken.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Services grid */}
            <div id="services">
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">What We Deliver</h3>
              <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">Turnkey customer care: people, playbooks and monitoring — ready to plug into your operations.</p>

              <div className="grid md:grid-cols-2 gap-6">
                {services.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <Card key={idx} className="rounded-2xl hover:shadow-lg transition">
                      <CardContent className="p-6 flex items-start gap-4">
                        <Icon className="h-10 w-10 text-accent mt-1" />
                        <div>
                          <h4 className="text-lg font-semibold text-primary mb-1">{s.title}</h4>
                          <p className="text-sm text-muted-foreground">{s.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Process + Metrics */}
            <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">How We Operate</h3>
                <p className="text-muted-foreground mb-6">
                  We run a tight feedback loop — audit, design, deploy and improve. Everything is measured and reported so you can see impact.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {process.map((p, i) => (
                    <div key={i} className="rounded-2xl p-5 bg-rose-50 border border-rose-100 shadow-sm">
                      <h4 className="text-md font-semibold text-primary mb-1">{p.step}</h4>
                      <p className="text-sm text-muted-foreground">{p.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-primary mb-2">Operational Guarantees</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                    <li>SLA-backed response windows and escalations</li>
                    <li>Daily QA and weekly coaching for agents</li>
                    <li>Dedicated account manager and monthly business reviews</li>
                  </ul>
                </div>
              </div>

              <aside className="rounded-2xl border p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-primary mb-4">Live Metrics</h4>
                <div className="space-y-4">
                  {metrics.map((m, idx) => (
                    <div key={idx} className="flex justify-between">
                      <div className="text-sm text-muted-foreground">{m.label}</div>
                      <div className="text-lg font-semibold text-primary">{m.value}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-md overflow-hidden mt-6">
                  <img src={dashboardImage} alt="Customer care dashboard" className="w-full h-40 object-cover" />
                </div>
              </aside>
            </div>

            {/* Benefits grid */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">Business Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((b, idx) => (
                  <Card key={idx} className="rounded-2xl hover:shadow-lg transition">
                    <CardContent className="p-6 flex items-start gap-4">
                      <b.icon className="h-10 w-10 text-accent mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-1">{b.title}</h4>
                        <p className="text-sm text-muted-foreground">{b.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonial / Case snippet */}
            <div className="rounded-3xl bg-accent/5 p-8 text-center">
              <h4 className="text-xl font-semibold text-primary mb-3">Client Outcome</h4>
              <p className="text-muted-foreground mb-4">
                “After moving to 24×7 support, our average response time dropped from 2 hours to 12 minutes and CSAT rose by 18 points. The dedicated pods gave us predictable handling during marketing peaks.” — VP Operations, HealthTech
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start 24×7 Support Today</h2>
          <p className="mb-6 text-white/90">Protect revenue, improve satisfaction and scale your support without the hiring headache.</p>
          <Button size="lg" variant="hero" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerCare;
