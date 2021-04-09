import {Typography, Container, Grid, CardContent, Card, CardMedia, Box} from '@material-ui/core';
import useStyles from './Components/styles';
import Navbar from './Components/Navbar';

const Home = () => {
    const classes = useStyles();
    return(
        <main>
        <Navbar/>
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h2" align="center" color="textPrimary" family="Roboto" gutterBottom>
        NYAY SABHA
        </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                  className={classes.cardMedia}
                  image={process.env.PUBLIC_URL + "/images/img2.jpg"}
                  title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Transparent
                    </Typography>
                    <Typography>
                      This is a media card.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                  className={classes.cardMedia}
                  image={process.env.PUBLIC_URL + "/images/img3.jpg"}
                  title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Secure
                    </Typography>
                    <Typography>
                      This is a media card.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                  className={classes.cardMedia}
                  image={process.env.PUBLIC_URL + "/images/img1.jpg"}
                  title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Swift
                    </Typography>
                    <Typography>
                      This is a media card.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>        

          <div className={classes.container}>
            <Container maxWidth="md">
              <Typography variant="h5" align="center" color="textPrimary" paragraph>
                <Box fontStyle="italic">"Justice Delayed is Justice Denied"</Box>
                The present COVID-19 pandemic has disrupted the functioning of courts to a large extent but we know that
                    Justice should not be delayed at any cost. This is the reason we have come up with this initiative focussed
                    on the smooth conduction of online court hearings through "Nyay-Sabha".
              </Typography>
            </Container>
            </div>

            <Container className={classes.cardGrid} maxWidth="md" height="100%">
            <Typography variant="h3" align="center" color="textPrimary" family="Roboto" gutterBottom>
                PREAMBLE
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                <Card className={classes.card} height="100%">
                  <CardMedia
                  className={classes.Preamble}
                  image={process.env.PUBLIC_URL + "/images/Preamble.webp"}
                  title="Preamble"
                  />
                </Card>
              </Grid>
            </Grid>
          </Container>

        </main>   
    );
}
export default Home;