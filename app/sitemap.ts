import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://xn--cabaasplayaguardiamo-66b.cl"
  const routes = ["/", "/cabanas", "/contacto", "/galeria", "/programa", "/ubicacion"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
