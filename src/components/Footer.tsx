import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="bg-accent text-accent-foreground p-2 rounded-lg font-bold text-xl">
                TC
              </div> */}
              <span className="font-bold text-lg">The Connections</span>
            </div>
            <p className="text-accent-foreground/80 mb-4">
              Quality & Value Delivered, Together. Your BPO partner for customer experience, back-office operations, analytics, and specialist healthcare support.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/theconnectionsbpo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/theconnectionsbpo/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/theconnectionsbpo/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bpo-services" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  BPO Services
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* BPO Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">BPO Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/customer-care" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Customer Care 24x7
                </Link>
              </li>
              <li>
                <Link to="/services/omnichannel-communication" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Omnichannel Communication
                </Link>
              </li>
              <li>
                <Link to="/services/client-strategies" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Client Strategy & Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/database-analytics" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Database Analytics
                </Link>
              </li>
              <li>
                <Link to="/services/contact-centre" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Contact Centre Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Healthcare Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Healthcare Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/medical-coding" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Medical Coding
                </Link>
              </li>
              <li>
                <Link to="/services/medical-billing" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Medical Billing
                </Link>
              </li>
              <li>
                <Link to="/services/credentialing" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Credentialing
                </Link>
              </li>
              <li>
                <Link to="/services/patient-support" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Patient Support
                </Link>
              </li>
              <li>
                <Link to="/services/telehealth" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  Telehealth Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-primary" />
                <span className="text-accent-foreground/80">
                  Pune, Bangalore & Ahmedabad, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+917887898196" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  +91 788-789-8196
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@The Connections.com" className="text-accent-foreground/80 hover:text-primary transition-colors">
                  info@the-connections.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-accent-foreground/60">
            <p>&copy; {new Date().getFullYear()} The Connections. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
