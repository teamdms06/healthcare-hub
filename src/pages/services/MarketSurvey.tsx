import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

// --- Replace these with your HD images (suggested sizes: hero 2000x900, team 1200x800, chart 1600x900)
import heroImage from "@/assets/market-survey/marjet-survey-hero.jpg";
import surveyTeam from "@/assets/market-survey/market-analysis-team.jpeg";
import surveyChart from "@/assets/market-survey/market-survey-board.jpg";

const MarketSurvey = () => {
  const highlights = [
    "Customer feedback collection",
    "Market trend understanding",
    "Product satisfaction surveys",
    "Competition inputs",
    "Insight-based recommendations",
  ];

  const benefits = [
    {
      icon: Users,
      title: "Real Customer Feedback",
      description: "Direct, usable opinions from your target audience—not guesses.",
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Trends, segments and demand signals you can act on quickly.",
    },
    {
      icon: Target,
      title: "Product Satisfaction",
      description: "Measure satisfaction, friction points and product-market fit.",
    },
    {
      icon: TrendingUp,
      title: "Competition Analysis",
      description: "Understand where competitors win and where you can out-innovate.",
    },
    {
      icon: Lightbulb,
      title: "Actionable Insights",
      description: "Recommendations prioritised by impact and effort to accelerate ROI.",
    },
    {
      icon: CheckCircle,
      title: "Better Decisions",
      description: "Move from opinions to evidence when planning product & marketing.",
    },
  ];

  const methodology = [
    {
      title: "Design & Sampling",
      text: "We design concise surveys and select a representative sample of your target customers to ensure statistically meaningful results.",
      color: "bg-rose-50",
    },
    {
      title: "Fieldwork & Collection",
      text: "Our team collects responses across phone, chat, email and online panels with quality checks to avoid bias.",
      color: "bg-muted",
    },
    {
      title: "Analysis & Synthesis",
      text: "Quantitative and qualitative analysis to identify patterns, drivers, and actionable opportunities.",
      color: "bg-muted",
    },
    {
      title: "Recommendations & Roadmap",
      text: "Deliverable-ready insights and prioritized recommendations with practical next steps you can implement.",
      color: "bg-muted",
    },
  ];

  const sampleQuestions = [
    "What was the main reason you chose (product/service)?",
    "How satisfied are you with the product on a scale of 1–10?",
    "Which feature do you use most and why?",
    "Have you considered competitor X? Why or why not?",
    "What would make you recommend this product to a colleague?",
  ];

  const deliverables = [
    "Executive summary (PDF) — 1 page top-line insights",
    "Full survey dataset (CSV / Excel) with filters",
    "Dashboards with interactive charts for stakeholders",
    "Prioritised recommendations and 90-day action plan",
    "Stakeholder workshop to review findings and align on next steps",
  ];

  const industries = [
    "Healthcare & Medical",
    "Fintech & Payments",
    "E-commerce & Retail",
    "SaaS & Technology",
    "Education & EdTech",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative text-white py-24 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/65" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Market Intelligence
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Market Survey & Analysis
            </h1>

            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md mb-6">
              We connect with your customers, measure satisfaction, and produce
              evidence-based recommendations so you can prioritise product,
              pricing and growth decisions with confidence.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="outline_hero" size="lg" asChild>
                <Link to="#methodology">Our Methodology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {/* Intro card with side image */}
            <Card className="rounded-3xl shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-[1.6fr_minmax(0,1fr)]">
                  <div className="p-8 lg:p-10">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Clear Market Insights — Fast, Reliable, Practical
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Our market surveys are designed to surface real customer
                      needs, unmet expectations and market trends. We avoid long
                      questionnaires and focus on questions that drive decisions.
                    </p>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Whether you need to validate a product feature, benchmark
                      customer satisfaction, or measure competitor positioning —
                      we deliver clear evidence and a simple action roadmap.
                    </p>

                    <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                      {highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 bg-muted/40 p-3 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5 text-accent mt-1" />
                          <span className="text-sm text-muted-foreground">
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative bg-muted/30">
                    <img
                      src={surveyTeam}
                      alt="Survey team conducting market research"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md max-w-xs">
                      <p className="text-xs font-semibold text-primary mb-1">
                        Fieldwork & Quality Checks
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Calls and responses validated by our QA team to ensure
                        trusted results.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Methodology */}
            <div id="methodology">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Our Methodology
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                A pragmatic approach that balances speed, representativeness and
                depth. We use mixed methods — short surveys, targeted calls and
                thematic interviews — to create a complete picture.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {methodology.map((m, idx) => (
                  <div
                    key={idx}
                    className={`${m.color} rounded-2xl p-6 border border-gray-100 shadow-sm`}
                  >
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {m.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Questions & Deliverables */}
            <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Sample Questions We Ask
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {sampleQuestions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Deliverables You Receive
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {deliverables.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                </CardContent>
              </Card>
            </div>

            {/* Chart / Dashboard visual */}
            <div className="rounded-3xl overflow-hidden shadow-md border bg-white">
              <img
                src={surveyChart}
                alt="Survey analytics dashboard"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Why Market Surveys Matter
              </h2>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
                Stop guessing — measure. Convert feedback into prioritized
                improvement projects that move the needle on retention and
                growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, idx) => (
                  <Card
                    key={idx}
                    className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <b.icon className="h-8 w-8 text-accent mb-3" />
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {b.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {b.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div className="rounded-2xl bg-muted/40 p-6">
              <h3 className="text-xl font-bold text-primary mb-3">Industries we serve</h3>
              <div className="flex flex-wrap gap-3">
                {industries.map((ind, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 rounded-full bg-white/90 text-sm text-muted-foreground shadow-sm"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* In-page CTA */}
            <div className="rounded-3xl border bg-accent/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Ready to turn customer feedback into growth?
                </h2>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  Tell us what you want to learn and we’ll propose a tailored survey
                  and sampling plan with timelines and budgets.
                </p>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Make Decisions That Matter</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Work with a research team that delivers practical market intelligence
            so you can prioritise product and marketing investments with clarity.
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

export default MarketSurvey;
