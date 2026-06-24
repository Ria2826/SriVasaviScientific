import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sri-vasavi-scientific.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://sri-vasavi-scientific.vercel.app/products",
      lastModified: new Date(),
    },
    {
      url: "https://sri-vasavi-scientific.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://sri-vasavi-scientific.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}