import Head from 'next/head'
import SanityClient from '../client'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import JobList from '../components/JobList'



const Home = ({ jobs }) => {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name="viewport" content="JOb content, application" />
      </Head>
      <JobList jobs={jobs} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"] {
    title,slug,description[0],publishedAt,place,
    mainImage{
      asset->{
        _id,url
      },
      alt
    }
  }`
  const jobs = await SanityClient.fetch(query)

  if (!jobs.length) {
    return {
      props: {
        jobs: []
      }
    }
  } else {
    return {
      props: {
        jobs
      }
    }
  }
}

export default Home;


