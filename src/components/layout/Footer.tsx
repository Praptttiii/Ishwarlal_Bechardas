import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/logo.png';



const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="IB Logo" className="h-16 w-auto bg-primary-foreground rounded-full p-1" />
              <div>
                <h3 className="font-serif text-lg font-semibold">Patel Iswarlal Bechardas</h3>
                <p className="text-sm opacity-80">Since 1976</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A trusted name in wholesale spices and agricultural seeds distribution 
              from the heart of Unjha, Gujarat.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Products</Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gold-light" />
                <p className="text-sm opacity-80">
                  Gate no.1, APMC, A/34<br />
                  Old Main Line, Gunj Bazar<br />
                  Unjha, Gujarat - 384170<br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <a href="tel:+919428960482" className="text-sm opacity-80 hover:opacity-100">
                  +91 94289 60482
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-gold-light" />
                <a href="mailto:ankur9428960482@gmail.com" className="text-sm opacity-80 hover:opacity-100">
                  ankur9428960482@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours & GST */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Business Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-gold-light" />
                <div className="text-sm opacity-80">
                  <p>Monday - Saturday</p>
                  <p>9:00 AM - 7:00 PM</p>
                  <p className="mt-2">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <p className="text-xs opacity-60">Patel Iswarlal Bechardas: 24ABYPP8468J1ZL</p>
              <p className="text-xs opacity-60">Neeti Sales Corporation: 24AGEPP2982L1Z0</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} Patel Iswarlal Bechardas. All rights reserved.
            </p>
            <p className="text-sm opacity-60">
              Wholesale Distributors of Quality Spices & Seeds
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
