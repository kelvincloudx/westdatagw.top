import type { APIRoute } from 'astro';
import { ARTICLES } from '../data/articles';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://westdatagw.top';

  const staticPages = [
    '',
    'plans/',
    'start/',
    'clients/',
    'learn/',
    'faq/'
  ];

  const articlePages = ARTICLES.map(a => a.url.replace(/^\//, ''));

  const allPaths = [...staticPages, ...articlePages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(path => `  <url>
    <loc>${siteUrl}/${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${path === '' ? '1.0' : path.endsWith('/') && !path.includes('learn/') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
