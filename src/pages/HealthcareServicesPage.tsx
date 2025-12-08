import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity, FileText, Stethoscope, Brain, Eye, Smile, 
  ClipboardCheck, DollarSign, FileCheck, Shield, UserCheck,
  Pill, Calendar, Phone, HelpCircle, BarChart
} from "lucide-react";

// Import healthcare images
import medicalBillingImg from "@/assets/healthcare/medical-billing.jpg";
import medicalCodingImg from "@/assets/healthcare/medical-coding.jpg";
import chiropracticImg from "@/assets/healthcare/chiropractic.jpg";
import dentalImg from "@/assets/healthcare/dental.jpg";
import mentalHealthImg from "@/assets/healthcare/mental-health.jpg";
import optometryImg from "@/assets/healthcare/optometry.jpg";
import cptCodingImg from "@/assets/healthcare/cpt-coding.jpg";
import icdCodingImg from "@/assets/healthcare/icd-coding.jpg";
import hccCodingImg from "@/assets/healthcare/hcc-coding.jpg";
import eligibilityImg from "@/assets/healthcare/eligibility.jpg";
import priorAuthImg from "@/assets/healthcare/prior-auth.jpg";
import insuranceFollowupImg from "@/assets/healthcare/insurance-followup.jpg";
import denialManagementImg from "@/assets/healthcare/denial-management.jpg";
import paymentPostingImg from "@/assets/healthcare/payment-posting.jpg";
import credentialingImg from "@/assets/healthcare/credentialing.jpg";
import prescriptionAuthImg from "@/assets/healthcare/prescription-auth.jpg";
import appointmentImg from "@/assets/healthcare/appointment.jpg";
import patientSupportImg from "@/assets/healthcare/patient-support.jpg";
import healthcarePartnershipImg from "@/assets/healthcare/healthcare-partnership.jpg";
import healthcareServicesHeroImg from "@/assets/heroes/healthcare-services-hero.jpg";

const healthcareServices = [
  {
    icon: DollarSign,
    title: "Medical Billing",
    description: "Comprehensive medical billing services ensuring accurate claim submission and maximum reimbursement.",
    link: "/services/medical-billing",
    image : medicalBillingImg
  },
  {
    icon: FileText,
    title: "Medical Coding",
    description: "Expert medical coding services with certified coders ensuring compliance and accuracy.",
    link: "/services/medical-coding",
    image : medicalCodingImg
  },
  {
    icon: Activity,
    title: "Chiropractic Billing",
    description: "Specialized billing services for chiropractic practices with industry expertise.",
    link: "/services/chiropractic-billing",
    image : chiropracticImg
  },
  {
    icon: Smile,
    title: "Dental Billing",
    description: "Complete dental billing solutions optimized for dental practice workflows.",
    link: "/services/dental-billing",
    image : dentalImg
  },
  {
    icon: Brain,
    title: "Mental Health Billing",
    description: "Specialized billing services for mental health providers and behavioral health practices.",
    link: "/services/mental-health-billing",
    image : mentalHealthImg
  },
  {
    icon: Eye,
    title: "Optometry Billing",
    description: "Expert billing services tailored for optometry and vision care practices.",
    link: "/services/optometry-billing",
    image : optometryImg
  },
  {
    icon: FileCheck,
    title: "CPT Coding",
    description: "Accurate CPT coding services ensuring proper procedure documentation and billing.",
    link: "/services/cpt-coding",
    image : cptCodingImg
  },
  {
    icon: ClipboardCheck,
    title: "ICD Coding",
    description: "Precise ICD coding services for accurate diagnosis documentation and compliance.",
    link: "/services/icd-coding",
    image : icdCodingImg
  },
  {
    icon: BarChart,
    title: "HCC Coding",
    description: "Risk adjustment and HCC coding services to optimize reimbursement.",
    link: "/services/hcc-coding",
    image : hccCodingImg
  },
  {
    icon: UserCheck,
    title: "Eligibility Verification",
    description: "Real-time insurance eligibility verification to reduce claim denials.",
    link: "/services/eligibility-verification",
    image : eligibilityImg
  },
  {
    icon: Shield,
    title: "Prior Authorization",
    description: "Streamlined prior authorization services to expedite patient care.",
    link: "/services/prior-authorization",
    image : priorAuthImg
  },
  {
    icon: Phone,
    title: "Insurance Follow-up",
    description: "Proactive insurance follow-up to ensure timely claim resolution.",
    link: "/services/insurance-follow-up",
    image : insuranceFollowupImg
  },
  {
    icon: HelpCircle,
    title: "Denial Management",
    description: "Expert denial management services to recover lost revenue.",
    link: "/services/denial-management",
    image : denialManagementImg
  },
  {
    icon: DollarSign,
    title: "Payment Posting",
    description: "Accurate payment posting services for streamlined financial operations.",
    link: "/services/payment-posting",
    image : paymentPostingImg
  },
  {
    icon: Stethoscope,
    title: "Provider Credentialing",
    description: "Complete credentialing services for individual and group practices.",
    link: "/services/individual-credentialing",
    image : credentialingImg
  },
  {
    icon: Pill,
    title: "Prescription Authorization",
    description: "Efficient prescription authorization services for faster patient care.",
    link: "/services/prescription-authorization",
    image : prescriptionAuthImg
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling",
    description: "Professional appointment scheduling to optimize practice efficiency.",
    link: "/services/appointment-scheduling",
    image : appointmentImg
  },
  {
    icon: Phone,
    title: "Patient Support",
    description: "Compassionate patient support services to enhance patient satisfaction.",
    link: "/services/patient-support",
    image : patientSupportImg
  }
];

const HealthcareServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4"> */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${healthcareServicesHeroImg})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        
        <div className="container mx-auto px-4 relative z-10">        
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* <h1 className="text-5xl md:text-6xl font-bold mb-6">Healthcare Services</h1>
            <p className="text-xl text-primary-foreground/90 mb-8"> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Healthcare Services</h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">            
              Comprehensive healthcare revenue cycle management and practice support services to optimize your 
              healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  // className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent animate-fade-in"
                  className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 min-h-[320px] animate-fade-in"                  
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* <CardContent className="p-8">
                    <div className={`${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}> */}
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 group-hover:from-black/98 group-hover:via-black/75 transition-all duration-300" />
                  
                  <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="text-white/90 mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-300">                    
                      <Icon className="h-14 w-14" />
                    </div>
                    {/* <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors"> */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    {/* <p className="text-muted-foreground mb-6 leading-relaxed"> */}
                    {/* <p className="text-white/80 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground" asChild> 
                    <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent" asChild>
                      <Link to={service.link}>
                        Learn More
                      </Link> */}
                    <p className="text-white/80 mb-6 leading-relaxed text-sm">{service.description}</p>
                    <Button
                      variant="outline"
                      className="w-full bg-white/10 border-white/30 text-white hover:bg-accent hover:text-accent-foreground hover:border-accent"
                      asChild
                    >
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 contact-page to-accent/90 text-accent-foreground">
        <div className="container mx-auto px-4"> */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${healthcarePartnershipImg})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r" />
        
        <div className="container mx-auto px-4 relative z-10">        
          <div className="max-w-3xl mx-auto text-center">
            {/* <h2 className="text-4xl font-bold mb-6">Partner With Healthcare Experts</h2>
            <p className="text-xl mb-8 text-accent-foreground/90"> */}
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">Partner With Healthcare Experts</h2>
            <p className="text-xl mb-8 text-white/90">            
              Let's discuss how our healthcare services can improve your revenue cycle and patient care.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareServicesPage;
