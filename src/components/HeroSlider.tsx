import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage1 from "@/assets/hero-healthcare-1.jpg";
import heroImage2 from "@/assets/hero-healthcare-2.jpg";
import heroImage3 from "@/assets/hero-healthcare-3.jpg";
import heroImage4 from "@/assets/hero-healthcare-4.jpg";
import heroicd from "@/assets/hero-icd-coding-1.png";
import herocpt from "@/assets/hero-cpt-coding-1.png";
import herohcc from "@/assets/hero-hcc-coding-1.png";
import herocredit from "@/assets/hero-credentialing-1.png";
import patient from "@/assets/hero-patient-appoint-booking.png";
import financial from "@/assets/industries/financial.jpg";
import dental from "@/assets/healthcare/dental-1.png";
import mental from "@/assets/healthcare/behaviour-mental-health-billing-services-1.png";
import contact from "@/assets/contact-center-hero.jpeg";
import optometry from "@/assets/optometry-hero.jpeg";
import eligibility from "@/assets/healthcare/eligibility.jpg";
import chargecapture from "@/assets/healthcare/charge-capture.png";
import chiropractic from "@/assets/healthcare/chiropractic-billing-service.png";
import assurance from "@/assets/healthcare/quality-assurance.avif";
import claimSubmission from "@/assets/healthcare/claim-submission-hero.jpg";

const slides = [
  {
    image: claimSubmission,
    title: "Payment Posting in Medical Billing",
    subtitle: "ENSURING ACCURATE PAYMENT POSTING WITH COMPLETE FINANCIAL TRANSPARENCY",
    points: [
      "EOB & ERA Reconciliation",
      "Real-Time Payment Posting",
      "Accurate Payment Allocation",
      "Clear Financial Visibility & Reporting"
    ],
    cta: "Learn More",
    link: "/services/payment-posting",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: claimSubmission,
    title: "Claim Submission & Rejection Management Services",
    subtitle: "STREAMLINING CLAIM SUBMISSION WITH FASTER APPROVALS & FEWER REJECTIONS.",
    points: [
      "Electronic Claim Submission",
      "Instant Rejection Resolution",
      "First-Pass Claim Focus",
      "Accelerated Reimbursements"
    ],
    cta: "Learn More",
    link: "/services/claim-submission",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: assurance,
    title: "Claim Audit & Compliance Services",
    subtitle: "ENSURING CLEAN, COMPLIANT, AND ERROR-FREE CLAIM SUBMISSIONS.",
    points: [
      "Pre-Submission Claim Audits",
      "Coding Accuracy & Documentation Validation",
      "Compliance Verification & Risk Checks",
      "95%+ Clean Claim Rate with Reduced Denials"
    ],
    cta: "Learn More",
    link: "/services/claim-audits",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: chiropractic,
    title: "Chiropractic Specialty Billing Services",
    subtitle: "SIMPLIFY CHIROPRACTIC BILLING WITH ACCURATE CODING & FASTER REIMBURSEMENTS.",
    points: [
      "Accurate CPT & Modifier Coding for Chiropractic Services",
      "Insurance Benefits Verification & Pre-Authorization",
      "Electronic Claim Submission & Denial Management",
      "CMS-Compliant Billing with Faster Payments"
    ],
    cta: "Learn More",
    link: "/services/chiropractic-billing",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: chargecapture,
    title: "Charge Capturing & Entry Services",
    subtitle: "ENSURING ACCURATE CHARGE ENTRY WITH CLEAN CPT CODING & MODIFIER COMPLIANCE.",
    points: [
      "Accurate CPT Code Assignment",
      "Revenue Leakage Prevention",
      "Modifier & Compliance Accuracy",
      "Pre-Submission QA Review"
    ],
    cta: "Learn More",
    link: "/services/charge-capturing",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: eligibility,
    title: "Eligibility Verification",
    subtitle: "ENSURING ACCURATE BILLING WITH REAL-TIME ELIGIBILITY & BENEFITS VERIFICATION.",
    points: [
      "Pre-Visit Insurance Verification",
      "Coverage, Copay & Deductible Validation",
      "Real-Time Payer Portal & EDI Checks",
      "Fewer Denials with Accurate Eligibility Data"
    ],
    cta: "Learn More",
    link: "/services/eligibility-verification",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: optometry,
    title: "Optometry & Ophthalmology Billing Services",
    subtitle: "MAXIMIZING EYE CARE REIMBURSEMENTS WITH ACCURATE CODING & SEAMLESS CLAIM MANAGEMENT.",
    points: [
      "Ophthalmic CPT / ICD-10 Certified Coding",
      "Refraction, Diagnostic Testing & Surgical Billing",
      "Coordination of Medical & Vision Insurance Benefits",
      "Faster Payments with Clean Claim Submission"
    ],
    cta: "Learn More",
    link: "/services/optometry-billing",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: mental,
    title: "Mental & Behavioral Health Billing Services",
    subtitle: "MAXIMIZING MENTAL HEALTH REIMBURSEMENTS WITH ACCURATE CODING AND SEAMLESS CLAIM MANAGEMENT.",
    points: [
      "CPT & ICD-10 Certified Coding",
      "Telehealth & Time-Based Session Billing",
      "Insurance Eligibility & Benefits Coordination",
      "Faster Payments & Clean Claim Accuracy"
    ],
    cta: "Learn More",
    link: "/services/mental-health-billing",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: dental,
    title: "Dental Specialty Billing Services",
    subtitle: "Maximizing dental reimbursements with accurate CDT coding and seamless claim management.",
    points: [
      "CDT & ICD-10 Certified Coding",
      "Specialty-Focused Billing (Orthodontics, Periodontics, Oral Surgery)",
      "End-to-End Claim Submission & Denial Management",
      "Faster Payments & Clean Claim Accuracy"
    ],
    cta: "Learn More",
    link: "/services/specialty-billing#dental",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: patient,
    title: "Patient Appointment Scheduling",
    subtitle: "Seamless coordination between patients and providers through efficient, real-time scheduling.",
    points: [
      "Reduce no-shows with automated reminders",
      "Real-time availability & scheduling",
      "Patient-first workflow optimization"
    ],
    cta: "Learn More",
    link: "/services/medical-billing#appointment-scheduling",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: herocredit,
    title: "Provider & Group Credentialing Services",
    subtitle: "Ensure faster approvals, clean enrollments, and seamless payer onboarding.",
    points: [
      "Individual Provider Credentialing",
      "Group Credentialing & Enrollment",
      "CAQH Setup & Attestation Support",
      "Automated Follow-Ups & Status Tracking"
    ],
    cta: "Learn More",
    link: "/services/credentialing",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)  
  },
  {
    image: heroicd,
    title: "Accurate ICD Coding for Error-Free Claims",
    subtitle: "Boost compliance and ensure precise clinical coding aligned with the latest ICD-10 CM standards.",
    points: [
      "Medical necessity alignment",
      "Improved claim acceptance rate",
      "Reduced denial and audit risks"
    ],
    cta: "Learn More",
    link: "/services/icd-coding",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)     
  },
  {
    image: herocpt,
    title: "Precise CPT Coding for Maximum Reimbursement",
    subtitle: "Correct procedural coding to streamline billing and avoid costly claim errors.",
    points: [
      "Updated AMA CPT & HCPCS standards",
      "Reduced rework and follow-ups",
      "Faster claim settlement"
    ],
    cta: "Learn More",
    link: "/services/cpt-coding",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)    
  },
  {
    image: herohcc,
    title: "Smart HCC Coding That Improves Risk Scores",
    subtitle: "Enhance value-based care revenue using accurate condition mapping and hierarchical risk coding.",
    points: [
      "Complete documentation assessment",
      "Advanced analytics & audit validations",
      "Better RAF score accuracy"
    ],
    cta: "Learn More",
    link: "/services/hcc-coding",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)      
  },
  /// BPO Slides Below ///
  {
    image: contact,
    title: "Customer Care That Never Stops",
    subtitle: "DELIVER ROUND-THE-CLOCK SUPPORT WITH A TEAM THAT HANDLES EVERY CHANNEL, EVERY SHIFT AND EVERY CUSTOMER—WITHOUT DOWNTIME.",
    points: [
      "Omnichannel Triage",
      "Escalation & Resolution",
      "After-Hours Support",
      "Knowledge & QA"
    ],
    cta: "Learn More",
    link: "/services/contact-centre",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)      
  },
  {
    image: contact,
    title: "Contact Centre Operations & Support",
    subtitle: "EFFORTLESS COMMUNICATION SUPPORT WITH 24×7 CUSTOMER HANDLING & MULTI-CHANNEL SERVICE.",
    points: [
      "Inbound & Outbound Call Handling",
      "Multi-Channel Chat & Messaging Support",
      "Email & WhatsApp Resolution Management",
      "24×7 Availability & Fast Response"
    ],
    cta: "Learn More",
    link: "/services/contact-centre",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)      
  },
  {
    image: financial,
    title: "Financial Services BPO Solutions",
    subtitle: "Secure and compliant outsourcing solutions for banks, insurance companies, and financial institutions.",
    points: [
      "Customer Support", "Claims Processing",
      "Fraud Detection", "Account Management"
    ],
    cta: "Learn More",
    link: "/industries",
    show: false, // ✅ visible  || ❌ hidden (still in array but not shown)      
  },
  {
    image: heroImage2,
    tagline: "THINGS WE VALUE",
    title: {
      parts: [
        { text: "Reduce ", color: "default" },
        { text: "Operating Cost", color: "accent" },
        { text: " or Increase your ", color: "default" },
        { text: "Revenue", color: "accent" }
      ]
    },
    subtitle: "",
    cta: "Learn More",
    link: "/industries",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)     
  },
  {
    image: heroImage4,
    tagline: "THINGS WE VALUE",
    title: {
      parts: [
        { text: "Re-imagine ", color: "accent" },
        { text: "your business with a partner ", color: "default" },
        { text: "Experiance ", color: "accent" }
      ]
    },
    subtitle: "",
    cta: "Learn more",
    link: "/industries",
    show: true, // ✅ visible  || ❌ hidden (still in array but not shown)  
  }
];

const HeroSlider = () => {

  const visibleSlides = slides.filter((slide) => slide.show);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (visibleSlides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visibleSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [visibleSlides.length]);

  const nextSlide = () => {
    if (!visibleSlides.length) return;
    setCurrentSlide((prev) => (prev + 1) % visibleSlides.length);
  };

  const prevSlide = () => {
    if (!visibleSlides.length) return;
    setCurrentSlide((prev) => (prev - 1 + visibleSlides.length) % visibleSlides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      {visibleSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Unified Overlay Layout for all slides */}
          <>
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 h-full flex items-center">
              <div className="max-w-3xl text-primary-foreground animate-fade-in">
                {/* Optional Tagline (4th slide) */}
                {('tagline' in slide) && (slide as any).tagline && (
                  <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm md:text-base">
                    {(slide as any).tagline}
                  </p>
                )}
                {/* Subtitle line (existing slides use this) */}
                {slide.subtitle && (
                  <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm md:text-base">
                    {slide.subtitle}
                  </p>
                )}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {typeof slide.title === 'object' && 'parts' in (slide as any).title ? (
                    (slide as any).title.parts.map((part: any, idx: number) => (
                      <span key={idx} className={part.color === 'accent' ? 'text-accent' : 'text-primary-foreground'}>
                        {part.text}
                      </span>
                    ))
                  ) : (
                    String(slide.title)
                  )}
                </h1>

                {/* Key Points */}
                {slide.points && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {slide.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <span className="text-lg font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <Link to={slide.link}>{slide.cta}</Link>
                  </Button>
                  <Button variant="outline_hero" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-accent text-primary-foreground p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-accent text-primary-foreground p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {visibleSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${index === currentSlide ? "bg-accent w-12" : "bg-primary-foreground/40 w-3 hover:bg-primary-foreground/60"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
