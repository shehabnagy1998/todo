import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    };

    trackChange = (e)=> {
        this.setState({
            content: e.target.value
        })
    };

    submit = (e)=> {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content:''});
    };

    render() {
        return(
            <form onSubmit={this.submit}>
                <label htmlFor="content">Enter Todo</label>
                <input type="text" id="centent" onChange={this.trackChange} value={this.state.content}/>
            </form>
        );
    }
}

export default AddTodo