import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#24DC9A",
        color: 'white',
        padding: '20px 0'
    }
})

const Footer = () => {
    const classes = useStyles()
    return ( 
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center">
                Thanks for come here ............
            </Typography>
        </footer>
     );
}
 
export default Footer;