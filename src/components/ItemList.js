import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import { Link } from 'react-router-dom';


import Item from './Item';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchRecipes();
        
    }
    render() {
        if (!this.props.recipes) {
            return <div>Loading...</div>
        }
        return (
            <div>
            <Link to="/new"><button>Add Item</button></Link>
            { this.props.recipes.map(r => {
                return (
                    <Link to={`/${r._id}`} key={r.title} >
                        <Item 
                            name={r.title} 
                            id={r._id}
                        />
                    </Link>
                )
             })}
             </div>
        )
    }
}

function mapStateToProps(state) {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, {fetchRecipes})(ItemList);