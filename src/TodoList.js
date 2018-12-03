import React, { Component } from 'react';
import List from './List';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    render() {
        return (
            <div>
                <h1>Todo App</h1>
                <form onSubmit={this._onSubmit}>
                    <input
                        value={this.state.term}
                        onChange={this._onChange}
                        placeholder="Enter Todo"
                    />
                    <button type="submit">add</button>
                </form>
                <div>
                    <List items={this.state.items} />
                </div>
            </div>
        );
    }
    _onChange = event => {
        this.setState({
            term: event.target.value
        });
    };

    _onSubmit = event => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    };
}

export default TodoList;
