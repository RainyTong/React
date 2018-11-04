import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//render 返回的是你想要渲染的内容
//render返回的事一个React元素
// html语言直接写在javascript中，不加任何引号，这就是JSX语言

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

//使用类就允许我们使用其它特性，例如局部状态、生命周期钩子
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
                date: new Date()
            }
        );

    }
    render() {
        return (
            <div>
                <h1>Hello world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}



function App(){
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>

        </div>
    )
}



ReactDOM.render(
        <App />,
        document.getElementById('root')
);

