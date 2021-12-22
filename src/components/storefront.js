import { connect } from 'react-redux';
import { Container, Typography, makeStyles } from '@material-ui/core';
import Categories from './categories';
import Products from './products';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: 'lightGray',
        padding: theme.spacing(5, 0),
    },
}));

const Store = (props) => {
    const classes = useStyles();
    let category = props.activeList.activeCategories.display_name;
    let description = props.activeList.activeCategories.description || 'Choose a category';
    return (
        <main>
            <div className={classes.heroContent}>
                <Container>
                    <Categories />
                    <br></br>
                    <Typography component="p" variant="h3" align="center" color="dark">
                        {category}
                    </Typography>
                    <Typography component="p" variant="h5" align="center" color="textSecondary">
                        {description}
                    </Typography>
                </Container>
            </div>
            <Products className="main" />
        </main>
    );
};

const mapStateToProps = (state) => ({
    activeList: state.categories,
});

export default connect(mapStateToProps)(Store);