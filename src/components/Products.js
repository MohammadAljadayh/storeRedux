import { CardActions,Button,Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import { addToCart } from '../store/cart';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getRemoteData, putRemoteData } from '../store/product';

const Products = props => {

    const fetchProducts = (e) => {
        e && e.preventDefault();
        props.get();
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <section>
            <Grid container >
                {props.prodReducer.products.filter(product => product.category === props.catReducer.activeCategory).map(product => {
                    return (
                        <Grid item >
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="primary" variant="h5">{product.name}</Typography>
                                    <Typography color="secondary" variant="body1">${product.price}</Typography>
                                    <CardMedia
                                    component="img"
                                     height="140"
                                     image={product.image}
                                     alt="green iguana"
                                      />
                                </CardContent>
                                <CardActions>
                                    <Button color="primary" onClick={() => props.addToCart(product)}>Add to cart</Button>
                                    <Button color="primary">Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </section>
    )
}

const mapStateToProps = state => ({
    prodReducer: state.prodReducer,
    catReducer: state.catReducer
});
const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(putRemoteData(product, true)),
    get: () => dispatch(getRemoteData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);