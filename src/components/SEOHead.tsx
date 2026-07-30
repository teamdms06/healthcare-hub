import { Helmet } from "react-helmet-async";

const SITE_URL = "https://the-connections.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpeg`;

type SEOHeadProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const SEOHead = ({ title, description, path, keywords, schema }: SEOHeadProps) => {
  const canonical = `${SITE_URL}${path === "/" ? "/" : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="The Connections" />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:alt" content="The Connections BPO and healthcare operations services" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
