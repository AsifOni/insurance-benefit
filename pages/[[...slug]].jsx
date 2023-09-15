import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { Navbar } from '../components/Navbar.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { getPages, getPage, getAllExperiences, getAllAudiences, getExperiments, getNavItems, mapEntry } from '../lib/api.js';
import BlockRenderer from '../components/BlockRenderer.jsx';
import { UserProfile } from '../components/Dynamic/UserProfile.jsx';

export const getStaticPaths = async () => {
  const pages = await getPages({ preview: false });

  const paths = pages
    ?.filter((page) => {
      return page.fields.slug !== '/';
    })
    .map((page) => {
      return {
        params: { slug: page.fields.slug.split('/') },
      };
    });
  return {
    paths: [...paths, { params: { slug: [''] } }],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params, preview=false } = context;
  const slug = '/' + (params?.slug ?? ['']).join('/');
  const [page, allExperiences, allAudiences, experiments, navItems] = await Promise.all([
    getPage({
      preview,
      slug,
    }),
    getExperiments({ preview }),
    getNavItems(),
    getAllExperiences(),
    getAllAudiences(),
  ]);
  return {
    props: {
      page,
      preview: preview || false,
      ninetailed: {
        experiments,
        preview: {
          allExperiences,
          allAudiences,
        },
      },
      navItems,
    },
    revalidate: 60,
  };
};

export default function ComposablePage({ page, navItems }) {
  const livePage = useContentfulLiveUpdates(page);
  
  if (!livePage) {
    return null;
  }

  const newPage = {...livePage};
  const serializedPage = mapEntry(newPage);
  
  return (
    <>
      <div data-sb-object-id={serializedPage?.id || '1'} className="w-full flex flex-col sm:flex-row flex-wrap flex-grow">
        <Navbar navItems={navItems} />

        <main role="main" className="w-full flex-grow">
          <BlockRenderer blocks={serializedPage?.sections || []} />
          {/* <UserProfile /> */}
        </main>
      </div>
      <Footer />
    </>
  );
}
