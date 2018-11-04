import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// render 返回的是你想要渲染的内容
// render返回的事一个React元素
// html语言直接写在javascript中，不加任何引号，这就是JSX语言



// *****DEMO 1*****
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);


// *****DEMO 2*****
var names = ['A', 'B', 'C'];
ReactDOM.render(
    <div>
        {
            names.map(function(name) {
                return <div>Hello, {name}</div>
                }

            )
        }
    </div>,
    document.getElementById('example')
);

// *****DEMO 3*****
var arr = [
    <h1>Hello world!</h1>,
    <h2>React is awesome.</h2>
];

ReactDOM.render (
    <div>{arr}</div>,
    document.getElementById('example')
)

// *****DEMO 4*****
class HelloMessage extends React.Component{
    render(){
        return (

            <p>some text
                <h1>Hello {this.props.name} !</h1>
            </p>
        )
    }
}

ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example')
);


// *****DEMO 5*****
class NotesList extends React.Component{
    render(){
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <li>{child}</li>;
                    })
                }

            </ol>
        );
    }
}


ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
    </NotesList>,
    document.body
)


// *****DEMO 6***** PropTypes???
