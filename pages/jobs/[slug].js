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
      padding: '70px 0'
    },
    card: {
      backgroundColor: '#24DC9A',
      color: "white",
      padding:'70px'
    },
    back: {
        color: 'red',
        textDecoration: 'underline'
    }
  })

const individualJob = ({ title,
    description }) => {
    const classes = useStyles()
    return (
        <>
            <main>
                <Container>
                <Card className={classes.card}>
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" >
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
export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug

    const query = `*[ _type == "post" && slug.current == $pageSlug][0]{
        title,
        mainImage,
        id,
        description
    }`

    const property = await SanityClient.fetch(query, { pageSlug })


    if (!property) {
        return {
            props: null,
            notFound: true,
        }
    } else {
        return {
            props: {
                title: property.title,
                mainImage: property.mainImage,
                id: property.id,
                description: property.description
            },
        }
    }
}

export default individualJob;