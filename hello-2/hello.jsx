"use strict";

class Hello extends React.Component {
    render() {
        return <p>Hi { this.props.to } from { this.props.from }</p>
    }
}

class ToDoItem extends React.Component {
    render() {
        if (this.props.important) {
            return <li> <b> {this.props.item}</b></li>
        } else {
            return <li> {this.props.item} </li>    
        }
    }
}

class ToDoList extends React.Component {
    render() {
        const itemList = this.props.list
        const listDivs = itemList.map((item) => {
           return <li> {item} </li>
        });
        return (
            <div> 
                <h3> To Do List: </h3>
                {listDivs} 
            </div>
    )};
}

class ToDoItemList extends React.Component {
    render() {
        const itemList = this.props.list
        console.log(itemList)
        const listDivs = itemList.map((item) => {
           return (
            <div>
                <ToDoItem item={item[0]} important={item[1]} />
            </div>
        )});
        return (
            <div> 
                <h3> ToDoItem List: </h3>
                {listDivs} 
            </div>
    )};
}

