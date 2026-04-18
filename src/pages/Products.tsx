import { Link } from 'react-router-dom';
import blackMustardImage from '../assets/Black_mustard_seed.png';
import brownMustardImage from '../assets/Brown_mustard_seed.png';
import redMustardImage from '../assets/red_mustard.png';
import whiteCuminImage from '../assets/white_cumin.png';
import organicCuminImage from '../assets/Organic_cumin.png';
import blackSesameImage from '../assets/Black_seame.png';
import hulledSesameImage from '../assets/hulled_seed.png';
import boldFennelImage from '../assets/Boldfennel_seed.png';
import lakhFennelImage from '../assets/lakhfennel_seed.png';
import psylliumSeedsImage from '../assets/Psyllium_seed.png';
import psylliumHuskImage from '../assets/Phyllium_husk.png';
import corianderImage from '../assets/coriander_seed.png';
import fenugreekImage from '../assets/fenugreek_seed.png';
import ajwainImage from '../assets/ajwain_seed.png';
import { Button } from '../components/ui/button';
import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';

const products = [
  {
    category: 'Fennel Seeds',
    items: [
      { name: 'Lucknowi Fennel', image: lakhFennelImage},
      { name: 'Bold Fennel Seeds', image: boldFennelImage },
    ],
  },
   {
    category: 'Cumin Seeds',
    items: [
      { name: 'White Cumin Seeds', image: whiteCuminImage },
      { name: 'Organic Cumin Seeds', image: organicCuminImage },
    ],
  },
  {
    category: 'Mustard Seeds',
    items: [
      { name: 'Black Mustard Seeds', image: blackMustardImage },
      { name: 'Brown Mustard Seeds', image: brownMustardImage },
      { name: 'Red Mustard Seeds', image: redMustardImage },
    ],
  },
  {
    category: 'Sesame Seeds',
    items: [
      { name: 'Black Sesame Seeds', image: blackSesameImage },
      { name: 'Hulled Sesame Seeds', image: hulledSesameImage },
    ],
  },
  {
    category: 'Psyllium (Isabgol)',
    items: [
      { name: 'Psyllium Seeds', image: psylliumSeedsImage },
      { name: 'Psyllium Husk', image: psylliumHuskImage },
    ],
  },
  {
    category: 'Masala & Spices',
    items: [
      { name: 'Coriander Seeds', image: corianderImage },
      { name: 'Fenugreek Seeds', image: fenugreekImage },
      { name: 'Ajwain (Carom Seeds)', image: ajwainImage },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      <Seo
        title="Products | Cumin, Fennel, Mustard, Sesame & Psyllium"
        description="Explore bulk agricultural products including cumin seeds, fennel seeds, mustard, sesame, psyllium, coriander, fenugreek, and ajwain."
        path="/products"
        image={whiteCuminImage}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <p className="text-gold-light font-medium mb-4 tracking-wide uppercase text-sm">
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Premium quality agricultural seeds and spices available in bulk quantities 
              for wholesale buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {products.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="mb-16 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {category.category}
                  </h2>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available in bulk quantities
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 bg-beige border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground">Note:</strong> We specialize in 
              wholesale and bulk supply only. Prices vary based on quality, quantity, 
              and market conditions. Please contact us for current rates and availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Get in touch for wholesale pricing, sample requests, and bulk order inquiries.
          </p>
          <Button asChild variant="hero" size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
