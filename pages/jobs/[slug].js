import Link from 'next/link'
import SanityClient from '../../client'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
      padding: '70px 0',
      margin: '100px 0'
    },
    card: {
      backgroundColor: '#24DC9A',
      color: "white",
      padding:'70px'
    },
    title: {
      color: 'red',
      fontWeight: '700'
    },
    back: {
        color: 'red',
        padding: '20px 0',
        fontSize: '25px',
        textDecoration: 'underline',
        cursor: 'pointer'
    }
  })

const individualJob = ({ title,
    description }) => {
    const classes = useStyles()
    return (
        <>
            <main className={classes.root}>
                <Container>
                <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" className={classes.title} >
                            {title}
                          </Typography>
                          <Typography gutterBottom variant="subtitle2" >
                          {description[0].children[0].text}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <Link href="/"><Typography align='center' className={classes.back}>GO BACK</Typography></Link>
                </Container>
            </main>

        </>
    );
}
export const getServerSideProps = async (jobContext) => {
    const jobSlug = jobContext.query.slug

    const query = `*[ _type == "post" && slug.current == $jobSlug][0]{
        title,
        mainImage,
        id,
        description
    }`

    const job = await SanityClient.fetch(query, { jobSlug })


    if (!job) {
        return {
            props: null,
            notFound: true,
        }
    } else {
        return {
            props: {
                title: job.title,
                mainImage: job.mainImage,
                id: job.id,
                description: job.description
            },
        }
    }
}

export default individualJob;