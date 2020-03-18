import React, { Component } from 'react';

export default class TaskEditor extends Component {


    state = {
        text: '',
        id: '',
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        this.props.onAddTask({ ...this.state })
    }

    onDelete = e => {
        this.props.onDeleteTask({ ...this.state })
        console.log('delete!')
    }

    render() {
        const { text, id } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name="text"
                            value={text}
                            id={id}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">submit</button>
                    <button onClick={this.onDelete} type="submit">delete</button>

                </form>
            </>
        )
    }
}