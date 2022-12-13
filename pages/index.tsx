import Footer from 'components/Footer';
import Main from 'components/Main';
import { events } from 'data/events';
import { HeaderSectionModel, headerSections } from 'data/headerSections';
import { ReviewModel, userReviews } from 'data/reviews';
import Head from 'next/head';
import Header from '../components/Header';

type Props = {
  reviews: ReviewModel[];
  headerSections: HeaderSectionModel[];
};

export default function Home({ reviews, headerSections }: Props) {
  return (
    <>
      <Head>
        <title>Stripe property</title>
        <meta name='description' content='Stripe property group' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header headerSections={headerSections} />
      <Main events={events} reviews={reviews} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      reviews: userReviews,
      headerSections,
      events,
    },
  };
}
