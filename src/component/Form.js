// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../action/index";

function mapDispatchToProps(dispatch) {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            id : 1
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault(); 
        const { title } = this.state;
        const { id }  = this.state;
        this.props.addArticle({ title, id });
        this.setState({ title: "" , id:this.state.id +1 }); 
    }


render() {

    const { title } = this.state;

    return (
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="title">Title</label><br/>
        <input
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={this.handleChange}
        required/>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
        SAVE
        </button>
        </form>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;