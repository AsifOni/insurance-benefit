import { Navbar } from '../components/Navbar.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { getPages, getPage, getAllExperiences, getAllAudiences, getExperiments } from '../lib/api.js';
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
  const [page, allExperiences, allAudiences, experiments] = await Promise.all([
    getPage({
      slug,
    }),
    getAllExperiences(),
    getAllAudiences(),
    getExperiments(),
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
    },
    revalidate: 60,
  };
};

export default function ComposablePage({ page }) {
  if (!page) {
    return null;
  }

  return (
    <>
      <div data-sb-object-id={page?.id || '1'} className="w-full flex flex-col sm:flex-row flex-wrap flex-grow">
        <Navbar />

        <main role="main" className="w-full flex-grow">
          {/* <SearchBar /> */}

          <div className="md:container md:mx-auto mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <BlockRenderer blocks={page?.sections || []} />
            <UserProfile />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
