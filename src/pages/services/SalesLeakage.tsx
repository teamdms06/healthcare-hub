import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Shield,
  TrendingUp,
  CheckCircle,
  PhoneCall,
  Database,
} from "lucide-react";

// 🔁 Update these image paths as per your project
import heroImage from "@/assets/sales-leakage/hero.jpg";
import teamImage from "@/assets/sales-leakage/team.png";
import dashboardImage from "@/assets/sales-leakage/sales-leakage.webp";

const SalesLeakage = () => {
  const bullets = [
    "Identify leakage points across your sales funnel.",
    "Track missed calls, dropped leads and unassigned enquiries.",
    "Monitor follow-ups so no prospect is forgotten.",
    "Keep CRM / sheets accurately updated in near real-time.",
    "Protect revenue and improve conversion rates every month.",
  ];

  const benefits = [
    {
      icon: AlertTriangle,
      title: "Gap Identification",
      description: "Find process gaps and blind spots before they turn into revenue loss.",
    },
    {
      icon: PhoneCall,
      title: "Track Missed Opportunities",
      description: "Monitor missed calls, unread messages and unattended leads across channels.",
    },
    {
      icon: CheckCircle,
      title: "Timely Follow-ups",
      description: "Set rules and reminders so every lead is contacted and re-contacted on time.",
    },
    {
      icon: Database,
      title: "Data Accuracy",
      description: "Ensure leads, stages and outcomes are correctly updated in your CRM or sheets.",
    },
    {
      icon: TrendingUp,
      title: "Better Conversions",
      description: "Convert more existing enquiries into revenue without increasing marketing spend.",
    },
    {
      icon: Shield,
      title: "Revenue Protection",
      description: "Safeguard your sales pipeline with structured monitoring and governance.",
    },
  ];

  const processSteps = [
    {
      title: "1. Map Your Sales Funnel",
      text: "We review how enquiries enter your system (calls, forms, WhatsApp, email, walk-ins) and how they move across stages.",
    },
    {
      title: "2. Identify Leakage Points",
      text: "We analyse where leads are getting dropped – missed calls, no follow-up, no owner, wrong tagging, or incomplete records.",
    },
    {
      title: "3. Implement Tracking & Alerts",
      text: "We define ownership, SLAs and alert mechanisms so missed calls, pending follow-ups and stagnant leads are highlighted in time.",
    },
    {
      title: "4. Strengthen Follow-up Discipline",
      text: "We guide your team on cadence, scripts and escalation rules, ensuring follow-ups are done consistently.",
    },
    {
      title: "5. Monitor & Report",
      text: "We share clear reports on leakage, recovery actions and impact on conversions so you always know where you stand.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO WITH IMAGE */}
      <section className="relative text-primary-foreground py-20 md:py-24 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Revenue Protection
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Sales Leakage Prevention &amp; Detection
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed drop-shadow-md">
              Small breaks in your sales process can quietly leak a large amount of revenue. 
              We help you detect those gaps early, fix follow-up discipline and bring visibility 
              to every opportunity in your pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {/* INTRO + SIDE IMAGE */}
            <Card className="border rounded-3xl shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1.7fr_minmax(0,1fr)]">
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Stop Losing Leads You Already Paid For
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Marketing and lead generation are expensive. Yet many organisations lose 
                      leads because they are not attended on time, not tagged correctly or never 
                      assigned to a specific owner.
                    </p>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Our Sales Leakage service focuses on what happens after the enquiry is received. 
                      We bring structure to follow-ups, tracking and reporting so your existing demand 
                      is fully utilised.
                    </p>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      The goal is simple: every valid enquiry is contacted, updated and moved to the 
                      next step – or closed with a clear reason – instead of silently dropping off.
                    </p>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative bg-muted/40">
                    <img
                      src={teamImage}
                      alt="Team reviewing sales leakage"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md max-w-xs">
                      <p className="text-xs font-semibold text-primary mb-1">
                        Real-Time Oversight
                      </p>
                      <p className="text-xs text-muted-foreground">
                        See exactly where leads are stuck, how many were recovered 
                        and what actions were taken.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PROCESS SECTION */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 text-center">
                How We Detect &amp; Prevent Sales Leakage
              </h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                We bring method to your sales process with clear ownership, alerts and reporting – 
                so you can see and fix leakage before it impacts revenue.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, idx) => (
                  <Card key={idx} className="rounded-2xl border hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* DASHBOARD IMAGE */}
              <div className="rounded-3xl overflow-hidden mt-10 shadow-md border bg-white">
                <img
                  src={dashboardImage}
                  alt="Sales leakage dashboards and reports"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* BENEFITS SECTION */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-10 text-center">
                Key Highlights &amp; Benefits
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 transition-all duration-300 hover:border-accent"
                  >
                    <CardContent className="p-6">
                      <benefit.icon className="h-10 w-10 text-accent mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                      <h4 className="text-xl font-bold text-primary mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted border-2 border-accent rounded-3xl mt-10">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    When your team has clear visibility, disciplined follow-up and accurate data, 
                    you recover lost revenue without increasing marketing budgets. Sales Leakage 
                    Prevention ensures your pipeline is protected and your growth is more predictable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Your Revenue Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            If you’re generating leads but not seeing matching revenue, it’s time to audit 
            your sales leakage. We can help you bring order, visibility and control back to the funnel.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesLeakage;
