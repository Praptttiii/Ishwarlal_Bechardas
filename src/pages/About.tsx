import Layout from '@/components/layout/Layout';
import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import AnkurImage from '@/assets/ankur.png';
import MokshitImage from '@/assets/mokshit.png';
import Iswarlal from '@/assets/Ishwarlal.png';
import Bechardas from '@/assets/Bechardas.png'
import Chandubhai from '@/assets/chandubhai.png'
const stats = [
  { value: '50+', label: 'Years of Experience' },
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
                  Today, the fifth generation continues this legacy, combining 
                  traditional market knowledge with modern business practices. We 
                  remain committed to the values that built our reputation—integrity, 
                  quality, and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-elegant h-[400px]">
              <iframe
                title="Patel Iswarlal Bechardas Location"
                src="https://www.google.com/maps?q=Gate%20no.1,%20APMC,%20A/34%20Old%20Main%20Line,%20Gunj%20Bazar,%20Unjha,%20Gujarat%20384170,%20India&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-gradient-to-b from-background to-beige overflow-hidden">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Five Generations of Leadership
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Legacy
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full" />
          </div>

          {/* Scrollable Row */}
          <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
            {[
              {
                name: 'Bechardas Patel',
                role: 'Founder (1976)',
                image: Bechardas,
                description: 'Established the foundation of trust and honesty in Unjha mandi.',
              },
              {
                name: 'Ishwarlal Patel',
                role: 'Second Generation',
                image: Iswarlal,
                description: 'Expanded trade relationships and strengthened farmer connections.',
              },
              {
                name: 'Chandubhai Patel',
                role: 'Third Generation',
                image: Chandubhai,
                description: 'Modernized operations while preserving traditional values.',
              },
              {
                name: 'Ankur Patel',
                role: 'Fourth Generation',
                image: AnkurImage,
                description: 'Introduced structured wholesale systems and buyer network growth.',
              },
              {
                name: 'Mokshit Patel',
                role: 'Fifth Generation',
                image: MokshitImage,
                description: 'Blending digital presence with 50 years of market expertise.',
              },
            ].map((member) => (
              <div
                key={member.name}
                className="min-w-[280px] md:min-w-[320px] bg-card rounded-xl overflow-hidden shadow-lg border border-border group transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl snap-center"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}

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
