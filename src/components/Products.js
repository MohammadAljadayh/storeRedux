import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';

import { connect } from 'react-redux';

const Products = props => {

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

export default connect(mapStateToProps)(Products);