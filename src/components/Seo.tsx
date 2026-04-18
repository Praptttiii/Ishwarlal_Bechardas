import { Helmet } from "react-helmet-async";
import logoImage from "@/assets/logo.png";

const SITE_URL = "https://patelibseeds.com";
const BUSINESS_NAME = "Bechardas Maadhavdas Patel Exports";
const DEFAULT_DESCRIPTION =
  "Wholesale exporter and bulk supplier of cumin, fennel, mustard, sesame, psyllium, and other agricultural products from Unjha, Gujarat.";
const DEFAULT_KEYWORDS =
  "Bechardas Maadhavdas Patel Exports, wholesale spices India, cumin seeds exporter, fennel seeds supplier, sesame seeds exporter, mustard seeds bulk supplier, psyllium exporter, Unjha Gujarat exporter";

type SeoProps = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>[];
};

const buildUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, SITE_URL).toString();
};

const Seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = DEFAULT_KEYWORDS,
  image = logoImage,
  noindex = false,
  structuredData = [],
}: SeoProps) => {
  const canonicalUrl = buildUrl(path);
  const imageUrl = new URL(image, SITE_URL).toString();
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: imageUrl,
    image: imageUrl,
    telephone: "+91 94289 60482",
    email: "ankur9428960482@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gate no.1, APMC, A/34, Old Main Line, Gunj Bazar",
      addressLocality: "Unjha",
      addressRegion: "Gujarat",
      postalCode: "384170",
      addressCountry: "IN",
    },
    areaServed: ["India", "International"],
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonicalUrl,
  };

  const allStructuredData = [organizationSchema, pageSchema, ...structuredData];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta name="author" content={BUSINESS_NAME} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {allStructuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;
