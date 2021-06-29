import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'
import SanityClient from '../client'

const Home = ({ jobs }) => {
  console.log(jobs)
  return (
    <>

      {jobs && jobs.map(job => (

        <Link href={`jobs/${job.slug.current}`} key={job._id}>
          <Card>
            <CardActionArea>
              {/* <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="140"
    image={job.mainImage.asset?._ref}
  /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  this is description
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      ))}

    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "post"]'
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


