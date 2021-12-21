import { Button, Card,Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { putRemoteData } from '../store/product';
function SimpleCart(props) {

    const useStyles = makeStyles({
        cart: {
            zIndex: 100,
            position: "fixed",
            right: "16px",
            top: "64px",
            width: "80px",
            backgroundColor: "#eee",
            opacity: "0.5"
        }
    });

    const classes = useStyles();

    return (
        <Grid item xs className={classes.cart}>
            {props.cartReducer.cart.map((item ,idx) => {
          
          return (

            <Card key={idx}>
                <p>{item[idx].name} {item[idx].price} : JD </p>
           
                <Button onClick={() => props.removeFromCart(item[idx])}>x</Button>
            </Card>
        )
            })}
        </Grid>
    )
}

const mapStateToProps = state => ({
    cartReducer: state.cartReducer,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (product) => dispatch(putRemoteData(product, false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);