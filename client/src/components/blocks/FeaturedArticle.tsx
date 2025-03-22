import type { FeaturedArticleProps } from "@/types";
import Link from "next/link";
import { StrapiImage } from "@/components/blocks/StrapiImage";
import ReactMarkdown from "react-markdown";

export function FeaturedArticle({
  headline,
  link,
  excerpt,
  image,
}: Readonly<FeaturedArticleProps>) {
  return (

    <article className="featured-article container container-article" >
      <div className="featured-article__info">
        <h3>{headline}</h3>
        {/* <ReactMarkdown className="copy">{excerpt}</ReactMarkdown> */}
        {/* El lint marca un error en la prop className encotre en la documentacion de Ract markdown npm que 
        una solucion es envolverlo en un div y darle la propiedad de className a este.  */}

        <div className="copy">
          <ReactMarkdown>{excerpt}</ReactMarkdown>
        </div>



        <Link
          href={link.href}
          className="btn btn--turquoise btn--medium"
        >
          {link.text}
        </Link>
      </div>
      <StrapiImage
        src={image.url}
        alt={image.alternativeText || "No alternative text provided"}
        height={200}
        width={300}
      />
    </article>
  );
}