import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveRecipe } from '../actions';
import { Link } from 'react-router-dom'

class ItemDetail extends Component {


    componentDidMount() {
        this.props.getActiveRecipe(this.props.match.params.id);
    }

    render() {
        if (!this.props.recipe) {
            return <div>Loading</div>
        }
        return (
            <div>
                <Link to="/"><div>back</div></Link>
                Details
                <h2>{this.props.recipe.title}</h2>
                {this.props.recipe.ingredients.map(i => {
                    return <p key={i._id}>{i.name}</p>
                })}
                <p>{this.props.recipe.description}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { recipe: state.activeRecipe }
}

export default connect(mapStateToProps, {getActiveRecipe})(ItemDetail);