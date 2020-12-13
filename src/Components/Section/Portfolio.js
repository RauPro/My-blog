import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import twerImg from "../../ide/img/tower.PNG"
import web from "../../ide/img/myweb.PNG"
import {Link} from "react-router-dom";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Portfolio() {
    const classes = useStyles();

    return (
        <div className="container pt-5">
            <div className="h1 pt-4 text-center">Projects</div>
            <div className="row p-3">
                <div className="col-sm-5 mb-4 text-center">
                    <Card className="a">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="MW"
                                height="140"
                                image={web}
                                title="My Web"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    My Blog
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Personal Website is an application which is
                                    developed in React. This Website was created to show my developer skills, projects, publications, post, and
                                    my interests
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to="/">
                                <Button size="small" color="primary">
                                    View Project
                                </Button>
                            </Link>

                                <Button size="small" color="primary">
                                    <a href="https://github.com/RauPro/My-blog/" style={{color: "#3f51b5"}} target="_blank">Code</a>
                                </Button>


                        </CardActions>
                    </Card>
                </div>
                <div className="col-sm-5 mb-4 text-center">
                    <Card className="a">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="TW"
                                height="140"
                                image={twerImg}
                                title="Tower Game"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Tower Game
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Tower Game is a game, the idea is to build a tower as a group as high as possible. The main objective of this game is to help and encourage students to have good communication in a workgroup. Tower Game Project which is developed in React and Node.js, also using Socket.io and Matter.js.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                <a href="https://twgame-raul.herokuapp.com/" style={{color: "#3f51b5"}} target="_blank">View Project</a>

                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>

        </div>

    );
}