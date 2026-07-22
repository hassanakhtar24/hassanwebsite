import { Helmet } from "react-helmet-async";

function PageMeta({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default PageMeta;
