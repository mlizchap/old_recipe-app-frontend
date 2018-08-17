import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveRecipe, deleteRecipe } from '../actions';
import { Link } from 'react-router-dom';


import './ItemDetail.css';

class ItemDetail extends Component {


    componentDidMount() {
        this.props.getActiveRecipe(this.props.match.params.id);
    }

    render() {
        if (!this.props.recipe) {
            return <div>Loading</div>
        }
        

        return (
            <div className="itemDetail">
                <div className="backBtnDiv">
                    <Link to="/"><button className="backBtn">back</button></Link>
                </div>
                {console.log(this.props.recipe._id)}
                <h2 className="detailTitle">{this.props.recipe.title}</h2>
                <h3>Ingredients</h3>
                {this.props.recipe.ingredients.map(i => {
                    return <p className="ingred" key={i._id}>{i.name}</p>
                })}
                <h3 className="dir">Directions</h3>
                <p className="description">{this.props.recipe.description}</p>
                <button className="delete" onClick={() => this.props.deleteRecipe(this.props.recipe._id, ()=> this.props.history.push('/'))}>delete</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { recipe: state.activeRecipe }
}

export default connect(mapStateToProps, {getActiveRecipe, deleteRecipe})(ItemDetail);