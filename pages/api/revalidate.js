export default async function handler(req, res) {
  const requestHeaders = new Headers(req.headers);
  const secret = requestHeaders.get('x-vercel-reval-key');

  if (secret !== process.env.NEXT_CONTENTFUL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid secret' });
  }

  try {    
    await res.revalidate('/');
    return res.json({
      revalidated: true,
      now: Date.now(),
    });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
