import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, PhoneCall, CheckCircle, Target, Calendar } from "lucide-react";

// Update images
import heroImage from "@/assets/customer-acquasition/customer-acquation-hero.png";
import callingTeamImage from "@/assets/customer-acquasition/customer-acqusition-team.webp";
import workflowImage from "@/assets/customer-acquasition/customer-acquation-1.jpg";

const CustomerAcquisition = () => {
  const benefits = [
    { icon: Users, title: "Quality Leads", description: "Leads that are filtered, verified and genuinely interested." },
    { icon: PhoneCall, title: "Active Outreach", description: "Cold calling, warm calling and consistent follow-ups done for you." },
    { icon: Target, title: "Lead Qualification", description: "We identify real prospects based on need, fit and buying intent." },
    { icon: TrendingUp, title: "Better Sales Conversion", description: "Your sales team focuses only on high-quality conversations." },
    { icon: Calendar, title: "Appointment Setting", description: "Meetings booked directly with decision-makers." },
    { icon: CheckCircle, title: "Strong Sales Pipeline", description: "A predictable stream of opportunities month after month." }
  ];

  const processSteps = [
    {
      title: "1. Understand Your Ideal Customer",
      text: "We begin by analysing your target industry, decision-makers, purchase triggers and objections. This helps us build the right outreach strategy."
    },
    {
      title: "2. Build the Contact & Prospect List",
      text: "Using verified databases, research tools and filters, we generate a clean lead list aligned with your ICP (Ideal Customer Profile)."
    },
    {
      title: "3. Outreach & Qualification",
      text: "Our team handles calling, follow-ups, scripts, objection handling and qualification checks to ensure only relevant prospects are forwarded."
    },
    {
      title: "4. Appointment Setting",
      text: "We schedule meetings with high-intent prospects and sync them with your calendar, CRM or internal team."
    },
    {
      title: "5. Pipeline Reporting",
      text: "Daily/weekly reports include lead status, call outcomes, meeting status and conversion opportunities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION WITH IMAGE */}
      <section className="relative text-white py-24 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-5">
              <TrendingUp className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Sales Growth
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Customer Acquisition as a Service
            </h1>

            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              We help companies acquire customers through structured calling, 
              qualification, follow-ups and appointment setting so your sales team 
              only engages with high-quality prospects ready to talk.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">

            {/* INTRO WITH SIDE IMAGE */}
            <Card className="border rounded-3xl shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1.7fr_minmax(0,1fr)]">
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      A Dedicated Team to Build Your Sales Pipeline
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Most sales teams lose time talking to unqualified prospects. Our 
                      acquisition team filters the noise and connects you ONLY with prospects 
                      who match your buying criteria.
                    </p>

                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      We combine human calling expertise, CRM-driven workflow and structured 
                      follow-ups to ensure no opportunity slips through the cracks.
                    </p>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      With consistent outreach and qualification, your business sees more 
                      conversions, more meetings and a predictable pipeline every month.
                    </p>
                  </div>

                  <div className="relative bg-muted/40">
                    <img
                      src={callingTeamImage}
                      alt="Customer acquisition calling team"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PROCESS SECTION */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 text-center">
                How Our Customer Acquisition Process Works
              </h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                A structured, transparent process that ensures your pipeline grows 
                consistently without overwhelming your internal sales team.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, idx) => (
                  <Card key={idx} className="rounded-2xl border hover:shadow-lg transition-all">
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

              {/* PROCESS IMAGE */}
              <div className="rounded-3xl overflow-hidden mt-10 shadow-md border bg-white">
                <img
                  src={workflowImage}
                  alt="Customer acquisition workflow"
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>

            {/* BENEFITS */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-12 text-center">
                Key Highlights & Benefits
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

              {/* BENEFIT SUMMARY */}
              <Card className="bg-muted border-2 border-accent rounded-3xl mt-10">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Consistent outreach, structured qualification and strong follow-up 
                    rhythms lead to a reliable sales pipeline. Our Customer Acquisition 
                    service helps your sales team stay productive and your business grow 
                    month after month.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Grow Your Customer Base</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let our team handle the outreach, qualification and scheduling — while your 
            sales team focuses on closing deals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerAcquisition;
