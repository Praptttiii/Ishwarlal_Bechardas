import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, Award, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import heroImage from "@/assets/hero-spices.jpg";
import cuminImage from "@/assets/cumin-seeds.jpg";
import fennelImage from "@/assets/Fennel_Seeds.png";
import psylliumImage from "@/assets/psyllium-seeds.jpg";
import sesameImage from "@/assets/sesame-seeds.jpg";

const productCategories = [
  {
    name: "Feneel Seeds",
    description: "Cumin, coriander, and aromatic spice seeds",
    image: fennelImage,
  },
  {
    name: "Sesame Seeds",
    description: "Black, and white seame seeds varieties",
    image: sesameImage,
  },
  {
    name: "Cumin Seeds",
    description: "Fennel, psyllium, and specialty seeds",
    image: cuminImage,
  },
  {
    name: "Psyllium Husk",
    description: "Sesame, sunflower, and other oil seeds",
    image: psylliumImage,
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Trusted Since 1976",
    description: "Nearly five decades of reliable service in the spice trade.",
  },
  {
    icon: Truck,
    title: "Bulk Supply Capability",
    description: "Large-scale orders handled with efficiency and care.",
  },
  {
    icon: Award,
    title: "Consistent Quality",
    description: "Rigorous quality checks ensure premium grade products.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Dependable logistics for on-time shipments nationwide.",
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
            <p className="text-gold-light font-medium mb-4 tracking-wide uppercase text-sm animate-fade-in mt-3 md:mt-0"></p>
            <h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Bechardas Madhavdas Patel Export
            </h1>
            <h2
              className="font-serif text-3xl md:text-4xl mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Leading Supplier of Quality Spices & Seeds from Unjha, Gujarat
            </h2>
            <p
              className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            ></p>
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
              <Button
                asChild
                variant="heroOutline"
                size="lg"
                className="bg-white text-black hover:bg-gray-100"
              >
                <Link to="/products">
                  View Products <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Four pillars of trust that have defined our business for
              generations.
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
            Ready to Place a Bulk Order?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us today for competitive wholesale prices and reliable
            delivery across India.
          </p>
          <Button
            asChild
            variant="heroOutline"
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
