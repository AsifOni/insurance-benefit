import { Navbar } from '../components/Navbar.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { getPages, getPage, getAllExperiences, getAllAudiences, getExperiments, getNavItems } from '../lib/api.js';
import BlockRenderer from '../components/BlockRenderer.jsx';
import { UserProfile } from '../components/Dynamic/UserProfile.jsx';

export const getStaticPaths = async () => {
  const pages = await getPages();

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

export const getStaticProps = async ({ params }) => {
  const slug = '/' + (params?.slug ?? ['']).join('/');
  const [page, allExperiences, allAudiences, experiments, navItems] = await Promise.all([
    getPage({
      slug,
    }),
    getAllExperiences(),
    getAllAudiences(),
    getExperiments(),
    getNavItems()
  ]);
  return {
    props: {
      page,
      ninetailed: {
        experiments,
        preview: {
          allExperiences,
          allAudiences,
        },
      },
      navItems
    },
    revalidate: 60,
  };
};

export default function ComposablePage({ page, navItems }) {
  if (!page) {
    return null;
  }

  return (
    <>
      <div data-sb-object-id={page?.id || '1'} className="w-full flex flex-col sm:flex-row flex-wrap flex-grow">
        <Navbar navItems={navItems} />

        <main role="main" className="w-full flex-grow">
            <BlockRenderer blocks={page?.sections || []} />
            <UserProfile />
        </main>
      </div>
      <Footer />
    </>
  );
}
