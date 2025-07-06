import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cabañasplayaguardiamo.cl"
  const routes = ["/", "/cabanas", "/contacto", "/galeria", "/programa", "/ubicacion"]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))
}
