import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import { Link } from 'react-router-dom';

import './ItemList.css';
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
            <div className="itemList">
                <img src="https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d3e4af46f110775c595bf13c58275948&auto=format&fit=crop&w=500&q=60" width="300px"/>
                { this.props.recipes.map(r => {
                    return (
                        <Link to={`/${r._id}`} key={r._id} >
                            <Item 
                                name={r.title} 
                                id={r._id}
                            />
                        </Link>
                    )
                })}
                <Link to="/new"><button className="add">Add Item</button></Link>
             </div>
        )
    }
}

function mapStateToProps(state) {
    return { recipes: state.recipes }
}

export default connect(mapStateToProps, {fetchRecipes})(ItemList);