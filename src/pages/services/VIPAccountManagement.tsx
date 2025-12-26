import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Crown, Users, Bell, MessageSquare, TrendingUp, Shield, 
  ArrowRight, Star, Sparkles, Heart, Award, Gem, Phone,
  CheckCircle, Clock, Target, Zap
} from "lucide-react";
import Tilt3DCard from "@/components/Tilt3DCard";

// Import images
import vipHeroImg from "@/assets/bpo/vip-hero.jpg";
import dedicatedManagerImg from "@/assets/bpo/dedicated-manager.jpg";
import priorityServiceImg from "@/assets/bpo/priority-service.jpg";
import realTimeUpdatesImg from "@/assets/bpo/real-time-updates.jpg";
import retentionStrategyImg from "@/assets/bpo/retention-strategy.jpg";
import revenueProtectionImg from "@/assets/bpo/revenue-protection.jpg";

const VIPAccountManagement = () => {
  const premiumFeatures = [
    {
      icon: Users,
      title: "Dedicated Account Managers",
      description: "Personal managers assigned exclusively to your VIP clients for seamless service delivery",
      image: dedicatedManagerImg
    },
    {
      icon: Crown,
      title: "Priority Handling",
      description: "Fast-track resolution for urgent matters with guaranteed response times",
      image: priorityServiceImg
    },
    {
      icon: Bell,
      title: "Proactive Updates",
      description: "Regular check-ins and real-time status notifications keeping clients informed",
      image: realTimeUpdatesImg
    },
    {
      icon: Heart,
      title: "Retention Excellence",
      description: "Strategic engagement programs designed to maximize client loyalty",
      image: retentionStrategyImg
    }
  ];

  const metrics = [
    { value: "99.5%", label: "Client Retention", icon: Heart },
    { value: "<2hr", label: "Response Time", icon: Clock },
    { value: "24/7", label: "Availability", icon: Phone },
    { value: "100%", label: "SLA Compliance", icon: Target }
  ];

  const serviceElements = [
    "Personalized communication protocols",
    "Priority escalation pathways",
    "Custom reporting dashboards",
    "Strategic account reviews",
    "Proactive issue prevention",
    "Executive relationship management"
  ];

  const whyVIPMatters = [
    {
      icon: Gem,
      title: "Revenue Protection",
      description: "VIP clients often represent 80% of revenue. Dedicated management protects this critical revenue stream."
    },
    {
      icon: Award,
      title: "Competitive Edge",
      description: "Premium service differentiates your brand and creates lasting partnerships that competitors can't replicate."
    },
    {
      icon: Sparkles,
      title: "Growth Catalyst",
      description: "Satisfied VIP clients become advocates, driving referrals and expanding your high-value client base."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>VIP Account Management Services | Premium Client Care | The Connections</title>
        <meta name="description" content="Dedicated VIP account management with personal managers, priority handling, and proactive updates. Protect your high-value relationships with premium service." />
        <meta name="keywords" content="VIP account management, key account management, premium client services, dedicated account managers, client retention" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "VIP Account Management",
            "provider": {
              "@type": "Organization",
              "name": "The Connections"
            },
            "description": "Premium VIP account management services with dedicated managers and priority handling",
            "serviceType": "Account Management"
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero Section - Asymmetric Split Design */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12 origin-top-right" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-4 py-20 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Premium Client Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">VIP Account</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Elevate your most valuable client relationships with dedicated account managers, 
                priority handling, and personalized service that sets you apart.
              </p>

            </div>
            
            {/* Right - Stacked Cards */}
            <div className="relative hidden lg:block">
              <div className="relative h-[600px]">
                {/* Main Image Card */}
                <Tilt3DCard className="absolute top-0 right-0 w-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={vipHeroImg} 
                    alt="VIP Account Management" 
                    className="w-full h-[350px] object-cover"
                  />
                </Tilt3DCard>
                
                {/* Floating Feature Card */}
                <div className="absolute bottom-20 left-0 bg-background/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-border/50 w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Premium Support</div>
                      <div className="text-sm text-muted-foreground">Always Available</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {["24/7 Priority Access", "Dedicated Team", "Custom SLAs"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Crown Badge */}
                <div className="absolute top-[300px] right-[380px] bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl shadow-lg">
                  <Crown className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              Premium Service Framework
            </h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive approach to managing your most valuable client relationships
            </p>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Large Feature Card */}
            <Tilt3DCard className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden group">
              <div className="relative h-full min-h-[500px]">
                <img 
                  src={dedicatedManagerImg} 
                  alt="Dedicated Account Managers" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/90 flex items-center justify-center mb-4">
                    <Users className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Dedicated Account Managers</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Personal managers assigned exclusively to your VIP clients, ensuring seamless 
                    service delivery and building lasting relationships that drive loyalty.
                  </p>
                </div>
              </div>
            </Tilt3DCard>
            
            {/* Regular Feature Cards */}
            {premiumFeatures.slice(1).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Tilt3DCard key={index} className="rounded-3xl overflow-hidden group">
                  <div className="relative h-[250px]">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-white/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </Tilt3DCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why VIP Matters - Magazine Layout */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column - Sticky Content */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why It Matters</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground leading-tight">
                The VIP Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                High-value clients deserve exceptional service. Our VIP account management 
                transforms client relationships into strategic partnerships.
              </p>
              
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={revenueProtectionImg} 
                  alt="Revenue Protection" 
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20 flex items-end p-6">
                  <div className="text-primary-foreground">
                    <div className="text-4xl font-bold mb-1">80%</div>
                    <div className="text-sm opacity-90">of revenue from VIP clients</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Cards */}
            <div className="lg:col-span-7 space-y-8">
              {whyVIPMatters.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-24 bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center p-6 md:p-8">
                          <Icon className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <div className="flex-1 p-6 md:p-8">
                          <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              
              {/* Service Elements List */}
              <Card className="border-0 shadow-lg bg-muted/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Service Elements</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceElements.map((element, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{element}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
              How We Deliver Excellence
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Onboarding", desc: "Client profiling & preference mapping", icon: Users },
                { step: "02", title: "Assignment", desc: "Dedicated manager allocation", icon: Crown },
                { step: "03", title: "Setup", desc: "Custom protocols & SLAs", icon: Target },
                { step: "04", title: "Engage", desc: "Proactive communication", icon: MessageSquare },
                { step: "05", title: "Optimize", desc: "Continuous improvement", icon: TrendingUp }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative text-center group">
                    {/* Step Circle */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-[120px] h-[120px] rounded-full bg-background border-2 border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                        <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                        {item.step}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground leading-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our VIP account management services have helped businesses across industries 
                protect and grow their most valuable client relationships.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Data Security", desc: "Enterprise-grade protection" },
                  { icon: Zap, title: "Fast Response", desc: "Priority escalation paths" },
                  { icon: Heart, title: "Client Focus", desc: "Relationship-first approach" },
                  { icon: Award, title: "Excellence", desc: "Industry best practices" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-5 rounded-2xl bg-muted/50 hover:bg-muted transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={retentionStrategyImg} 
                alt="Client Retention Strategy" 
                className="rounded-3xl shadow-2xl w-full"
              />
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-xl border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">45%</div>
                    <div className="text-sm text-muted-foreground">Increased Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Card */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                    <Crown className="w-4 h-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">Premium Service</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                    Ready to Elevate Your VIP Client Experience?
                  </h2>
                  <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                    Partner with us to deliver exceptional service that keeps your most valuable 
                    clients loyal and engaged.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" variant="secondary" className="group">
                      <Link to="/contact">
                        Get Started Today
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                      <Link to="/services/customer-care">Explore Services</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="hidden lg:flex justify-end">
                  <div className="grid grid-cols-2 gap-4">
                    {metrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                          <Icon className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                          <div className="text-2xl font-bold text-primary-foreground">{metric.value}</div>
                          <div className="text-sm text-primary-foreground/70">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VIPAccountManagement;
