import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "../components/ui/use-toast.ts";
import Layout from "../components/layout/Layout.tsx";
import { Input } from "../components/ui/input.tsx";
import { Textarea } from "../components/ui/textarea.tsx";
import { Button } from "../components/ui/button.tsx";
import { Label } from "../components/ui/label.tsx";
import axios from "axios";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      toast({
        title: "Inquiry Submitted",
        description: "Thank you! We will contact you shortly.",
      });

      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        product: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send inquiry.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-gold-light font-medium mb-4 tracking-wide uppercase text-sm">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Ready to discuss your bulk order requirements? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Business Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Address
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Patel Iswarlal Bechardas
                          <br />
                          Gate no.1, APMC, A/34
                          <br />
                          Old Main Line, Gunj Bazar
                          <br />
                          Unjha, Gujarat - 384170
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Phone / WhatsApp
                        </h3>
                        <a
                          href="tel:+919428960482"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          +91 94289 60482
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:ankur9428960482@gmail.com"
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          ankur9428960482@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Business Hours
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Monday - Saturday
                          <br />
                          9:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg space-y-3">
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Patel Iswarlal Bechardas <br />
                      GST: 24ABYPP8468J1ZL
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Neeti Sales Corporation <br />
                      GST: 24AGEPP2982L1Z0
                    </p>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card border border-border rounded-lg p-8 shadow-card">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                    Send an Inquiry
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interest</Label>
                      <Input
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g., Cumin Seeds, Mustard Seeds"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Please describe your requirements, quantity needed, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Our Location
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Gate no.1, APMC, A/34, Old Main Line, Gunj Bazar, Unjha, Gujarat
              384170.
              <br />
              Located in Asia's largest cumin and isabgol trading hub.
            </p>
          </div>
        </div>
        <div className="w-full h-96 border-t border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.6773445377847!2d72.39012827518445!3d23.80698408762986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c7c7e8e3f4b4f%3A0x8a5c4f3c2b1a0d9e!2sAPMC%20Market%20Yard%2C%20Unjha%2C%20Gujarat%20384170!5e0!3m2!1sen!2sin!4v1704326400000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title=" Bechardas Maadhavdas Patel Exports Office - Gate no.1, APMC, Unjha, Gujarat"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
