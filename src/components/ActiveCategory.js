import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const ActiveCategory = props => {
    return (
        <section>
            <Typography color="primary" variant="h3" align="center" component="h2">{props.catReducer.activeCategory}</Typography>
        </section>
    )
}

const mapStateToProps = state => ({
    catReducer: state.catReducer
});

export default connect(mapStateToProps)(ActiveCategory);