import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, DollarSign, Users, Database, Video, BarChart, ArrowRight } from "lucide-react";

import medicalCodingImg from "@/assets/menu/medical-coding.jpg";
import medicalBillingImg from "@/assets/menu/medical-billing.jpg";
import consultingImg from "@/assets/menu/consulting.jpg";
import managementImg from "@/assets/menu/management.jpg";
import analyticsImg from "@/assets/menu/analytics.jpg";
import heroHealthcare from "@/assets/hero-healthcare-2.jpg";

const services = [
   {
    icon: FileText,
    title: "Medical Coding & Compliance",
    description: "ICD-10, CPT, and HCPCS coding with 99.8% accuracy. Expert CDI and compliance monitoring.",
    link: "/services/medical-coding",
    image: medicalCodingImg
  },
  {
    icon: DollarSign,
    title: "Medical Billing & RCM",
    description: "End-to-end billing, denial management, and AR follow-up for maximum revenue optimization.",
    link: "/services/medical-billing",
    image: medicalBillingImg
  },
  {
    icon: Users,
    title: "Patient Support Services",
    description: "24/7 multi-channel support, appointment scheduling, and insurance verification assistance.",
    link: "/services/patient-support",
    image: consultingImg
  },
  {
    icon: Database,
    title: "Healthcare Data Management",
    description: "Secure EHR/EMR data entry, clinical abstraction, and HIPAA-compliant data handling.",
    link: "/services/data-management",
    image: managementImg
  },
  {
    icon: Video,
    title: "Telehealth & Virtual Assistance",
    description: "Remote patient engagement, virtual front-desk, and real-time telemedicine support.",
    link: "/services/telehealth",
    image: heroHealthcare
  },
  {
    icon: BarChart,
    title: "Healthcare Analytics",
    description: "Claims analytics, patient satisfaction reporting, and predictive operational insights.",
    link: "/services/analytics",
    image: analyticsImg
  }
];

const HealthcareServices = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wider">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Optimize your healthcare operations with our specialized services designed to improve efficiency, reduce costs, and enhance patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                // className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
                className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 min-h-[280px] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* <CardContent className="p-6"> */}

                  {/* <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}> */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 group-hover:from-black/95 group-hover:via-black/75 transition-all duration-300" />
                
                <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="text-white/90 mb-4 group-hover:scale-110 group-hover:text-accent transition-all duration-300">                  
                    <Icon className="h-12 w-12" />
                  </div>
                  {/* <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors"> */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {/* <p className="text-muted-foreground mb-4 leading-relaxed"> */}
                  <p className="text-white/80 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  {/* <Button variant="link" className="p-0 h-auto font-semibold group-hover:text-accent" asChild> */}
                   <Button variant="link" className="p-0 h-auto font-semibold text-white/90 hover:text-accent justify-start" asChild>
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/healthcare-services">View All Healthcare Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HealthcareServices;
