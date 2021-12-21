import { Button, ButtonGroup, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setActiveCategory, reset ,getRemoteData} from '../store/category.js';

const Categories = props => {

    const fetchCategories = (e) => {
        e && e.preventDefault();
        props.get();
    }
    useEffect(() => {
        fetchCategories();
        // eslint-disable-next-line
    }, []);

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

const mapDispatchToProps = (dispatch) => ({
    setActiveCategory: (cat) => dispatch(setActiveCategory(cat)),
    reset: () => dispatch(reset()),
    get: () => dispatch(getRemoteData())
})
export default connect(mapStateToProps, mapDispatchToProps)(Categories);