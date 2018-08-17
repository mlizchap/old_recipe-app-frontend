import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createRecipe } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NewItemForm.css';


class NewItemForm extends Component {
    constructor(props) {
        super(props);

        this.state = {ingredientCount: ['x']};
        
        this.addField = this.addField.bind(this);
    }
    renderField(field) {
        return (
            <div>
                <input 
                    className="title"
                    type="text" 
                    {...field.input} 
                    autoComplete="off" 
                    placeholder={field.label}
                />
            </div>
        )
    }

    renderIngredients(field) {
        console.log(this)
        return (
            <div>
                <input 
                    className="ingredient"
                    type="text"  
                    {...field.input} 
                    autoComplete="off"
                    placeholder={field.label}
                />
            </div>
        )
    }

    renderDescription(field) {
        return (
            <div>
                <textarea type="text" {...field.input} autoComplete="off" placeholder={field.label}/>
            </div>
        )
    }

    onSubmit(values)  {
        console.log("XXX");
        this.props.createRecipe(values);
    }

    addField(e) {
        e.preventDefault();
        console.log(e);
        this.setState({ ingredientCount: [...this.state.ingredientCount, this.state.ingredientCount + 1]})
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                {/* <h2>Add New Recipe</h2> */}
                <Field 
                    label="Title" 
                    name="title" 
                    component={this.renderField} 
                />
                {this.state.ingredientCount.map((i, index) => {
                    return (
                        <Field 
                            key={index}
                            label={`Ingredient #${index+1}`}
                            name={`ingredients[${index}].name`}
                            component={this.renderIngredients} 
                        />
                    )
                })}
                <button onClick={(e) => this.addField(e)}>Add Ingredient</button>
                <Field 
                    label="Directions:" 
                    name="description" 
                    component={this.renderDescription} 
                />
                <button type="submit">Submit</button>
                <Link to="/"><button>Cancel</button></Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'NewRecipeForm'
})(
    connect(null, {createRecipe})(NewItemForm)
);