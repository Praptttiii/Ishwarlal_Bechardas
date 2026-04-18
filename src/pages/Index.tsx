import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Truck,
  Award,
  Clock,
  Globe,
  TrendingUp,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-spices.jpg";
import cuminImage from "@/assets/cumin-seeds.jpg";
import fennelImage from "@/assets/Fennel_Seeds.png";
import psylliumImage from "@/assets/psyllium-seeds.jpg";
import sesameImage from "@/assets/sesame-seeds.jpg";

const productCategories = [
  {
    name: 'Feneel Seeds',
    description: 'Cumin, coriander, and aromatic spice seeds',
    image: fennelImage,
  },
   {
    name: 'Sesame Seeds',
    description: 'Black, and white seame seeds varieties',
    image: sesameImage,
  },
   {
    name: 'Cumin Seeds',
    description: 'Fennel, psyllium, and specialty seeds',
    image: cuminImage,
  },
  {
    name: 'Psyllium Husk',
    description: 'Sesame, sunflower, and other oil seeds',
    image: psylliumImage,
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Trusted Since 1976',
    description: 'Nearly five decades of reliable service in the spice trade.',
  },
  {
    icon: Truck,
    title: 'Bulk Supply Capability',
    description: 'Large-scale orders handled with efficiency and care.',
  },
  {
    icon: Award,
    title: 'Consistent Quality',
    description: 'Rigorous quality checks ensure premium grade products.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Dependable logistics for on-time shipments nationwide.',
  },
];

const exportServices = [
  {
    icon: Globe,
    title: "Global Sourcing",
    description:
      "We source quality spices, seeds, and agricultural commodities through reliable supplier and mandi networks.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Each order is reviewed for grade, cleanliness, packing, and consistency before dispatch.",
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description:
      "From procurement to shipment planning, we support smooth bulk movement for domestic and export orders.",
  },
  {
    icon: TrendingUp,
    title: "Market Expansion Support",
    description:
      "We help buyers identify the right products and sourcing approach for long-term business growth.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground">
           <p className="text-gold-light font-medium mb-4 tracking-wide uppercase text-sm animate-fade-in mt-3 md:mt-0">
            </p>
             <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Ms Iswarlal Bechardad Patel, Unjha
            </h1>
            <h2
              className="font-serif text-3xl md:text-4xl mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Trusted Global Sourcing Partner for Spices, Seeds, and Bulk Trade
            </h2>
            <p
              className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Based in Unjha, Gujarat, we combine decades of market knowledge
              with dependable sourcing, quality checks, and supply chain support
              for wholesale buyers.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                asChild
                variant="heroOutline"
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link to="/products">
                  View Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
                About Company
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Legacy of Trust and Excellence in Agricultural Trade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We have built our reputation through consistent quality,
                  honest trading practices, and strong relationships with
                  farmers, suppliers, and buyers.
                </p>
                <p>
                  Our team supports bulk buyers with product sourcing,
                  documentation coordination, and timely delivery so trade stays
                  smooth from inquiry to dispatch.
                </p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-serif font-bold text-primary mb-2">
                    50+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years of market experience
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary mb-2">
                    Bulk
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Supply for wholesale and trade buyers
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary mb-2">
                    Quality
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Checked sourcing and packing standards
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-primary mb-2">
                    Unjha
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Direct access to a leading spice market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premium quality spices and seeds sourced directly from trusted 
              farmers and suppliers across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Link
                key={category.name}
                to="/products"
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="default" size="lg">
              <Link to="/products">
                Explore All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Export-Focused Support for Growing Businesses
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We do more than sell products. We help buyers source the right
              commodities and move them efficiently with dependable trade
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {exportServices.map((service, index) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four pillars of trust that have defined our business for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-lg bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="h-8 w-8" />
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

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Discuss Your Sourcing Requirement?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us for product availability, wholesale pricing, and support
            with sourcing and shipment planning.
          </p>
          <Button asChild variant="heroOutline" size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
