import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Smartphone,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

// Replace these with your HD images (suggested sizes: hero 2000x900, team 1200x800, dashboard 1600x900)
import heroImage from "@/assets/omnichannel/omni-channel-communication-hero.jpeg";
import teamImage from "@/assets/omnichannel/omichannel-communication-team.webp";
import dashboardImage from "@/assets/omnichannel/omni-channel-board.jpg";

const OmnichannelCommunication = () => {
  const benefits = [
    "All customer interactions managed in one place",
    "Faster replies and improved customer satisfaction",
    "No duplication or missed follow-ups across channels",
    "Consistent brand tone across voice, chat and messaging",
    "Full visibility via reports and dashboards",
  ];

  const channels = [
    { icon: Phone, name: "Phone Calls" },
    { icon: MessageCircle, name: "WhatsApp" },
    { icon: Mail, name: "Email" },
    { icon: MessageSquare, name: "Live Chat" },
    { icon: Smartphone, name: "Social Media" },
    { icon: CheckCircle, name: "Ticketing" },
  ];

  const process = [
    {
      title: "Collect",
      text: "Route and capture conversations from all channels into a single queue with context.",
      color: "bg-rose-50",
    },
    {
      title: "Triage",
      text: "Classify, prioritise and assign to the right team or SLA bucket automatically.",
      color: "bg-muted",
    },
    {
      title: "Respond",
      text: "Agents respond with templates, macros and full context to resolve faster on first contact.",
      color: "bg-muted",
    },
    {
      title: "Report",
      text: "Real-time dashboards and daily summaries give you clarity on volumes, SLAs and CSAT.",
      color: "bg-muted",
    },
  ];

  const metrics = [
    { label: "First Response Time", value: "≤ 30 mins" },
    { label: "First Contact Resolution", value: "75%+" },
    { label: "CSAT", value: "4.5 / 5" },
    { label: "SLA Compliance", value: "98%" },
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
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Unified Communication
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Omnichannel Communication — One Team, Every Channel
            </h1>

            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md mb-6">
              Manage phone, chat, email, WhatsApp and social conversations through a single,
              polished workflow. Reduce response time, avoid rework and provide consistent,
              brand-aligned answers across every channel.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Get a Demo</Link>
              </Button>
              <Button size="lg" variant="outline_hero" asChild>
                <Link to="#how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.6fr_minmax(0,1fr)] gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">One Team. All Channels.</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Customers choose whichever channel is easiest. You need a single operating view that
                prevents conversations from slipping through the cracks. Our omnichannel offering
                centralises conversations, provides agent context, and enforces SLAs so every customer
                receives consistent, timely support.
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex gap-3 items-start bg-muted/40 p-3 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md border bg-white">
              <img src={teamImage} alt="Support team working across channels" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CHANNEL GRID */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-primary mb-6 text-center">Channels We Operate</h3>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            We staff and operate across every major customer channel — and route them through a unified agent desktop.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {channels.map((c, idx) => {
              const Icon = c.icon;
              return (
                <Card key={idx} className="p-4 text-center border rounded-2xl hover:shadow-lg transition">
                  <CardContent className="p-4 flex flex-col items-center">
                    <Icon className="h-10 w-10 text-accent mb-3" />
                    <div className="text-sm font-semibold text-primary">{c.name}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS + METRICS */}
      <section id="how-it-works" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-10">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4">How It Works</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our implementation focuses on speed and minimal disruption: integrate your channels,
                define SLAs and handoffs, train agents on unified scripts, and launch with real-time monitoring.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {process.map((p, i) => (
                  <div key={i} className={`${p.color} rounded-2xl p-5 border border-gray-100 shadow-sm`}>
                    <h4 className="text-lg font-semibold text-primary mb-1">{p.title}</h4>
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-primary mb-3">Sample Automations</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Auto-assign high-value leads to senior agents</li>
                  <li>Escalate SLA breaches to on-duty supervisors</li>
                  <li>Auto-replies for after-hours with callback scheduling</li>
                </ul>
              </div>
            </div>

            <aside className="rounded-3xl border p-6 bg-white shadow-sm">
              <h4 className="text-xl font-semibold text-primary mb-4">Live Metrics</h4>
              <div className="space-y-4">
                {metrics.map((m, idx) => (
                  <div key={idx} className="flex justify-between">
                    <div className="text-sm text-muted-foreground">{m.label}</div>
                    <div className="text-lg font-semibold text-primary">{m.value}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-md overflow-hidden mt-6">
                <img src={dashboardImage} alt="Omnichannel dashboard" className="w-full h-40 object-cover" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / CASE SNIPPET */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-4">A short client outcome</h3>
            <p className="text-muted-foreground mb-6">
              “We unified our support channels and cut average response time by 70%. CSAT improved and our team could finally track every lead end-to-end.” — Head of Operations, Healthcare Provider
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Book a Case Review</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OmnichannelCommunication;
