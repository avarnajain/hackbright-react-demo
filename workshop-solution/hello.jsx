"use strict";

class Hello extends React.Component {
    render() {
        return <p>Hi { this.props.to } from { this.props.from }</p>
    }
}

class TodoList extends React.Component {
    render() {
        return <div>
          <h1>Here is a todo list</h1>
          <TodoItem item="laundry" important={true} />
          <TodoItem item="take out trash" important={false} />
          <TodoItem item="do dishes" important={true} />
        </div>
    }
}

class TodoItem extends React.Component {
    render() {
        if (this.props.important){
            return <li><b>{this.props.item}</b></li>    
        } else {
            return <li>{this.props.item}</li>    
        }
    }
}