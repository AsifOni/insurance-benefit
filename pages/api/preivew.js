import { COOKIE_NAME_PRERENDER_BYPASS } from "next/dist/server/api-utils";
import { getPage, mapEntry } from "../../lib/api";

export default async function handler(req, res) {
  if (req.query.secret !== process.env.NEXT_CONTENTFUL_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const slug = req.query.slug === '/' ? req.query.slug : `/${req.query.slug}`;
  const page = await getPage({ slug });
    
  // If the slug doesn't exist prevent preview mode from being enabled
  if (!page) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  const serializedPage = mapEntry({...page});

  res.setPreviewData({});

  const headers = res.getHeader('Set-Cookie');
  if (Array.isArray(headers)) {
    res.setHeader(
      'Set-Cookie',
      headers.map((cookie) => {
        if (cookie.includes(COOKIE_NAME_PRERENDER_BYPASS)) {
          return cookie.replace('SameSite=Lax', 'SameSite=None; Secure');
        }
        return cookie;
      }),
    );
  }

  const redirectSlug = serializedPage?.slug === '/' ? serializedPage?.slug : `/${serializedPage?.slug}`;
  res.redirect(redirectSlug);
}
