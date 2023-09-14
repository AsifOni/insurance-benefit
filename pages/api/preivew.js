import { getPage } from "../../lib/api";

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

  res.setPreviewData({});
  const redirectSlug = page?.slug === '/' ? page?.slug : `/${page?.slug}`;
  res.redirect(redirectSlug);
}
