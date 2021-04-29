import { CssBaseline, makeStyles } from "@material-ui/core";
import Header from "../OLDcomponents/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/background.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <CssBaseline />
        </div>
    );
};

export default Welcome;
