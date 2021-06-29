import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      padding: '70px 0'
    },
    card: {
      backgroundColor: '#24DC9A',
      color: "white"
    }
  })

const JobList = ({ jobs }) => {
    const classes = useStyles()
    return ( 
        <main className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            {
              jobs && jobs.map(job => (
                // eslint-disable-next-line @next/next/link-passhref
                <Link href={`jobs/${job.slug.current}`} key={job._id}>
                  <Grid item xs={12} md={3}>
                    <Card className={classes.card}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="140"
                          image= {job.mainImage.asset.url}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {job.title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Link>
              ))
            }
          </Grid>
        </Container>
      </main>
     );
}
 
export default JobList;