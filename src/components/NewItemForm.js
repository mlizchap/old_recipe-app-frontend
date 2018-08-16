import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { createRecipe } from '../actions';
import { connect } from 'react-redux';


class NewItemForm extends Component {
    constructor(props) {
        super(props);
    }
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input type="text" {...field.input} />
            </div>
        )
    }

    onSubmit(values)  {
        console.log(values);
        this.props.createRecipe(values);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                New Form
                <Field label="Title:" name="title" component={this.renderField} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'NewRecipeForm'
})(
    connect(null, {createRecipe})(NewItemForm)
);