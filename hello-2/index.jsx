"use strict";

ReactDOM.render(
    (<div>
        <Hello to="World" from="Balloonicorn"/>
        <ToDoList list={['laundry', 'homework', 'resume update', 'dance']}/>
        <ToDoItemList list={[['laundry','true'], ['dishes', false], ['resume', 'true']]}/>
    </div>),
    document.getElementById("root")
);
