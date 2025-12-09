import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, TrendingUp, Users, ClipboardCheck, CheckCircle } from "lucide-react";

// 🖼️ Update these image paths as per your assets
import cxHero from "@/assets/client-strategies/client-strategy-hero.jpg";
import cxWorkshop from "@/assets/client-strategies/client-strategy.webp";
import cxJourney from "@/assets/client-strategies/client-strategy-1.jpg";

const ClientStrategies = () => {
  const whatWeDo = [
    "Review your existing customer service and communication system – calls, chats, emails, tickets and in-person touchpoints.",
    "Identify CX gaps that impact response time, customer satisfaction and brand perception.",
    "Design a process-driven CX plan that connects people, processes and technology for better performance.",
    "Build workflows that reduce repetition, confusion and delays for both customers and internal teams.",
    "Implement best practices, playbooks and escalation paths to standardize customer handling.",
    "Guide your team with the right tools, training, KPIs and quality checks to maintain consistency.",
    "Set up reporting and review rhythms so CX stays aligned with your business goals over time."
  ];

  const benefits = [
    { 
      icon: TrendingUp, 
      title: "Better Customer Experience", 
      description: "Faster responses, clearer communication and smoother journeys at every touchpoint." 
    },
    { 
      icon: Users, 
      title: "Stronger Brand Trust", 
      description: "Customers feel heard, supported and confident about choosing you again." 
    },
    { 
      icon: CheckCircle, 
      title: "Fewer Operational Errors", 
      description: "Defined workflows and ownership reduce missed follow-ups and escalations." 
    },
    { 
      icon: TrendingUp, 
      title: "Higher Revenue & Retention", 
      description: "Better experiences drive repeat business, referrals and higher lifetime value." 
    },
    { 
      icon: ClipboardCheck, 
      title: "Clear, Repeatable Processes", 
      description: "Playbooks and SOPs that your team can follow every day, across locations and shifts." 
    }
  ];

  const approachSteps = [
    {
      title: "Discover & Diagnose",
      text: "We study your current CX – from the first enquiry to post-sale support. This includes listening to calls, reviewing chats/emails, mapping journeys and understanding your internal constraints."
    },
    {
      title: "Design Customer Journeys",
      text: "We create or refine customer journey maps, define ideal experiences, and highlight critical moments where expectations must be met or exceeded."
    },
    {
      title: "Build CX Playbooks",
      text: "We document scripts, responses, handover rules, escalation paths and ownership so that every interaction is handled consistently and professionally."
    },
    {
      title: "Enable & Train Teams",
      text: "We help you align teams, train managers and front-line staff, set up KPIs and dashboards so the new CX system is practical, not theoretical."
    },
    {
      title: "Measure & Improve",
      text: "We track CSAT, NPS, response time, resolution rates and feedback to continuously refine your CX strategy as your business evolves."
    }
  ];

  const pillars = [
    {
      title: "People",
      text: "Right roles, training and coaching for front-line teams, supervisors and CX owners."
    },
    {
      title: "Process",
      text: "Clear steps, handovers and policies so customers aren’t bounced between departments."
    },
    {
      title: "Technology",
      text: "Practical tools for ticketing, communication and reporting that support your workflows."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* HERO with background image */}
      <section className="relative text-primary-foreground py-20 min-h-[380px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cxHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Strategy &amp; Consulting
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Client Strategies &amp; CX Consulting
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed drop-shadow-md">
              We help companies design and implement practical Customer Experience (CX) strategies 
              that improve every interaction – from the first enquiry to retention and renewal.
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
                      Turn CX from a Buzzword into a Daily Practice
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Many teams know CX is important but struggle to convert it into simple, 
                      repeatable actions. We bridge that gap. Our consulting model connects 
                      your existing people and tools with the right processes so that 
                      every customer interaction becomes more intentional and consistent.
                    </p>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Instead of complex frameworks that stay on slides, we focus on practical, 
                      on-ground changes your teams can start using within weeks – scripts, 
                      workflows, measurements and feedback loops.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The result: fewer surprises, fewer escalations, and a customer journey 
                      that feels smooth, predictable and aligned with your brand promise.
                    </p>
                  </div>

                  {/* Image side */}
                  <div className="relative bg-muted/40">
                    <img
                      src={cxWorkshop}
                      alt="CX workshop and strategy session"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-md max-w-xs">
                      <p className="text-xs font-semibold text-primary mb-1">
                        Workshops &amp; Working Sessions
                      </p>
                      <p className="text-xs text-muted-foreground">
                        We co-create CX journeys with your teams so the strategy is owned by them, 
                        not just handed over.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WHAT WE DO LIST */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6 text-center">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                We take a complete view of your customer interactions, identify breakdowns, and 
                design a CX system that your team can actually follow every day.
              </p>
              
              <Card className="border-2 border-accent rounded-3xl">
                <CardContent className="p-8 lg:p-10">
                  <ul className="space-y-4">
                    {whatWeDo.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CX APPROACH + JOURNEY IMAGE */}
            <div className="grid lg:grid-cols-[1.7fr_minmax(0,1fr)] gap-10 items-start">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-4">
                  Our CX Consulting Approach
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
                  We follow a structured, collaborative approach that keeps your business context 
                  at the centre – not a one-size-fits-all template.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {approachSteps.map((step, idx) => (
                    <Card key={idx} className=" light-pink h-full" >
                      <CardContent className="p-5">
                        <div className="flex items-start gap-3">
                          {/* <div className="mt-1 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                            {idx + 1}
                          </div> */}
                          <div>
                            <h4 className="text-lg font-semibold text-primary mb-1">
                              {step.title}
                            </h4>
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

              {/* Journey / framework image */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-md border bg-white">
                  <img
                    src={cxJourney}
                    alt="Customer journey and CX framework"
                    className="w-full h-[565px] object-cover"
                  />
                </div>
                <Card className="border-primary/40 bg-primary/5">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Visual CX Journeys
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      We convert complex customer interactions into simple, visual journeys that 
                      teams can understand and act on quickly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* PILLARS SECTION */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-4 text-center">
                Three Pillars of Effective CX
              </h3>
              <p className="text-muted-foreground mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                Sustainable CX is built when people, process and technology work together – not in isolation.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {pillars.map((pillar, idx) => (
                  <Card
                    key={idx}
                    className="text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.text}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* BENEFITS GRID */}
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6 text-center">
                How CX Consulting Helps You
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

              <Card className="bg-muted border-2 border-accent rounded-3xl">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    We help your business deliver consistent service to every customer – 
                    not just on your best day. By closing service gaps, reducing escalations 
                    and clarifying ownership, you protect revenue month on month and make 
                    your customer experience a true competitive advantage.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* IN-PAGE CTA */}
            <div className="rounded-3xl border bg-accent/5 p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  Ready to Transform Your CX?
                </h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  Share your current challenges – inconsistent service, slow responses, 
                  lack of visibility or high escalations. We’ll work with you to build a 
                  CX strategy that fits your stage, your team and your customers.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA STRIP */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Make CX Your Everyday Advantage
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Move from reactive problem-solving to a proactive, designed customer experience 
            that supports growth and long-term relationships.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Talk to Our CX Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientStrategies;
