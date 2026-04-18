import { Link } from "react-router-dom";
import { Eye, Target, Globe, Truck, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "We connect buyers with dependable sourcing options for spices, seeds, and agricultural commodities.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every order is handled with attention to grade, consistency, and product quality before dispatch.",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description:
      "We support smooth procurement, packing, and shipment planning for bulk and trade orders.",
  },
];

const VisionMission = () => {
  return (
    <Layout>
      <Seo
        title="Vision & Mission | Bechardas Maadhavdas Patel Exports"
        description="Discover our vision, mission, and service focus in global sourcing, quality assurance, and supply chain support for bulk trade."
        path="/vision-mission"
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-gold-light font-medium mb-4 tracking-wide uppercase text-sm">
              Our Direction
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Vision & Mission
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Our business is guided by long-term relationships, dependable
              sourcing, and a commitment to quality in every order.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted trade partner for buyers seeking reliable
                sourcing of quality spices, seeds, and agricultural products
                from India.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We aim to grow through transparency, consistent service, and
                partnerships built on trust across domestic and international
                markets.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To simplify bulk trade with honest pricing, dependable product
                sourcing, and quality-focused supply support for every buyer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We work to ensure smooth coordination from inquiry to dispatch,
                helping customers buy with confidence and build long-term
                business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Our Focus
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Supports Our Vision
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our vision and mission are backed by practical trade services that
              help buyers source, manage, and receive products efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let&apos;s Build a Reliable Trade Partnership
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact us to discuss sourcing needs, product availability, and bulk
            order planning.
          </p>
          <Button
            asChild
            variant="heroOutline"
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMission;
