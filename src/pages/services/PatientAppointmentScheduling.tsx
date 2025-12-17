import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  CalendarCheck,
  CheckCircle,
  Bell,
  Clock,
  Users,
  Smartphone,
  ArrowRightCircle
} from "lucide-react";

// IMPORT YOUR IMAGES HERE
import heroImage from "@/assets/healthcare/appointment.jpg";
import workflowImage from "@/assets/healthcare/patient-appointment-scheduling.webp";
import patientImage from "@/assets/healthcare/appointment-scheduling.webp";

const PatientAppointmentScheduling = () => {

  const featureList = [
    "Real-time EMR / EHR integration for automatic scheduling sync",
    "Appointment confirmations and automated reminders",
    "Handling cancellations & rescheduling with minimal friction",
    "No-show reduction strategies with proactive reminders",
    "Patient communication support via phone, SMS & email",
    "Multi-provider and multi-location scheduling support"
  ];

  const workflowSteps = [
    "Patient inquiry or scheduling request is received",
    "Our team verifies provider availability in real time",
    "Appointment is booked and synced with EMR systems",
    "Automated confirmation and reminder workflows are triggered",
    "Rescheduling or cancellations managed seamlessly",
    "Providers receive updated appointment logs instantly"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Optimized Provider Time",
      description: "Maximize daily appointment capacity with structured scheduling."
    },
    {
      icon: Bell,
      title: "Fewer No-Shows",
      description: "Automated reminders and follow-ups reduce missed appointments."
    },
    {
      icon: Smartphone,
      title: "Multi-Channel Support",
      description: "Phone, SMS, WhatsApp, email, and patient portal support."
    },
    {
      icon: Users,
      title: "Higher Patient Satisfaction",
      description: "Smooth scheduling improves patient experience and retention."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative text-white py-20 min-h-[420px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck className="h-12 w-12 text-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider">
                Patient Appointment Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Patient Appointment Scheduling
            </h1>

            <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
              Deliver seamless coordination between patients and providers through intelligent,
              real-time scheduling that reduces no-shows, increases efficiency, and enhances patient satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center max-w-6xl">
          
          <img
            src={patientImage}
            alt="Patient Engagement"
            className="rounded-xl shadow-lg object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Why Efficient Scheduling Matters</h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Nearly 20–30% of provider time is lost due to poor scheduling, last-minute cancellations,
              and no-show appointments. Our scheduling service ensures every slot is optimized, patients
              receive timely reminders, and providers maintain maximum productivity.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With multi-channel communication, automated coordination, and EMR-integrated systems,
              your practice stays efficient, predictable, and patient-friendly.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Complete Appointment Scheduling Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featureList.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-6 bg-card rounded-lg border-2 border-border hover:border-accent transition-all"
              >
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <Card className="border-2 border-accent">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Reduce No-Shows with Automated Communications
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                From SMS reminders to last-minute availability alerts, our automated workflows ensure
                patients stay informed and engaged. This significantly reduces no-shows, improves care
                continuity, and ensures your schedule stays full.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We support all major EMR platforms and patient communication channels to ensure a perfectly
                streamlined scheduling experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            How Our Scheduling Workflow Works
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <ul className="space-y-6">
                {workflowSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <ArrowRightCircle className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground leading-relaxed">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            <img
              src={workflowImage}
              alt="Appointment Workflow"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">

          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Key Benefits
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={i}
                  className="text-center hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-8">
                    <Icon className="h-16 w-16 text-accent mx-auto mb-6 group-hover:scale-110 transition-all" />
                    <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Enhance Your Appointment Scheduling Process
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Improve patient satisfaction, reduce no-shows, and streamline provider workflows with our
            professionally managed appointment scheduling services.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>

            <Button variant="outline_hero" size="lg" asChild>
              <Link to="/services/eligibility-verification">Explore Eligibility Services</Link>
            </Button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatientAppointmentScheduling;
