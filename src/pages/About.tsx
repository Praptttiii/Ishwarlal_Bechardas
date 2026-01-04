import Layout from '@/components/layout/Layout';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const stats = [
  { value: '47+', label: 'Years of Experience' },
  { value: '₹1.5-5 Cr', label: 'Annual Turnover' },
  { value: '100+', label: 'Regular Buyers' },
  { value: '20+', label: 'Product Varieties' },
];

const values = [
  {
    icon: Heart,
    title: 'Trust & Legacy',
    description: 'Built on generations of honest trade and family values that have earned us lasting relationships.',
  },
  {
    icon: Award,
    title: 'Quality Commitment',
    description: 'Every seed and spice is carefully inspected to meet our high standards before reaching you.',
  },
  {
    icon: Users,
    title: 'Long-term Partnerships',
    description: 'We believe in growing together with our buyers through reliable, fair business practices.',
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    description: 'Decades of experience in Unjha mandi give us deep insight into quality and pricing.',
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-gold-light font-medium mb-4 tracking-wide uppercase text-sm">
              Our Story
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About Patel Iswarlal Bechardas
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              A family legacy of quality, trust, and dedication to the spice trade 
              spanning nearly five decades.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold font-medium mb-4 tracking-wide uppercase text-sm">
                Established 1976
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Humble Beginnings to Trusted Name
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Patel Iswarlal Bechardas was founded in 1976 in Unjha, Gujarat—the 
                  heart of India's spice trade. What began as a small family enterprise 
                  has grown into a respected name in wholesale agricultural commodities.
                </p>
                <p>
                  Located in one of Asia's largest spice markets, we have built 
                  relationships with farmers, traders, and buyers across the country. 
                  Our founder's vision was simple: provide quality products with 
                  honest pricing and reliable service.
                </p>
                <p>
                  Today, the second generation continues this legacy, combining 
                  traditional market knowledge with modern business practices. We 
                  remain committed to the values that built our reputation—integrity, 
                  quality, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-elegant">
                <img
                  alt="Unjha Mandi - Spice Trading"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every aspect of our business and relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 rounded-lg bg-card border border-border shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Located in India's Spice Capital
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unjha, Gujarat is home to Asia's largest cumin and isabgol markets. 
              Our strategic location gives us direct access to the finest agricultural 
              products and competitive market rates, benefits we pass on to our valued 
              buyers.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
