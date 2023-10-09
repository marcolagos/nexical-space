import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

// A function to generate SEO metadata based on the input properties.
export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    /**
     * Open Graph metadata is a set of tags/properties in the <head> section of HTML that other media platforms use to display
     * the linked webpage. Explanation of some of the properties:
     *  - og:title: title or headline
     *  - og:description: short description
     *  - og:image: image URL
     * `- og:url: URL of the page
     * - og:site_name: name of the website or brand
     * - og:type: type of content, such as "website," "article," "video," etc.
     * - og:locale: language and region of the content
     * - og:article: for articles, article:published_time, article:modified_time, and article:author
     * - og:video: for video content, og:video, og:video:secure_url, og:video:type, and og:video:width
     * - og:audio: for audio content, similar to video metadata
     */
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    /**
     * Similar to Open Graph, but specific to Twitter Card metadata.
     */
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  }
}
