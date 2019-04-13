"use strict";

/* class-start*/
class Hello extends React.Component {
    render() {
        return <p>Hi World!</p>
    }
}

/* class-end */

/* main-start */
ReactDOM.render(
    <Hello />,
    document.getElementById("root")
);
/* main-end */