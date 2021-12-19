import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

import { setActiveCategory, reset } from '../store/category.js';

const Categories = props => {
    return (
        <section>
            <Typography  color="primary" variant="h6">Browse Categories:</Typography>
            <ButtonGroup >
                {props.catReducer.categories.map(cat => {
                    return <Button color="primary" onClick={() => props.setActiveCategory(cat.name)} >{cat.displayName}</Button>
                })}
                <Button color='secondary'  onClick={() => props.reset()}>reset  category</Button>
            </ButtonGroup>
        </section>
    )
}

const mapStateToProps = state => ({
    catReducer: state.catReducer
});

const mapDispatchToProps = { setActiveCategory, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Categories);