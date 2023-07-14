import React from "react";
// import 'Counter.css';


class Counter extends React.Component {
    state = {
        value: 0,
    };

    hendleIncrement= () => {
        this.setState(prevState => ({
                value: prevState.value + 1,
        }))
    }

    hendleDecrement = () => {
        this.setState(prevState => ({
                value: prevState.value - 1,
        }))
    }

    render() {
        return (
            <div className="counter">
                <span className="counter_value">{this.state.value}</span>

            <div className="counter_controls">
                <button type="button" onClick={this.hendleIncrement}> Збільшити на 1</button>
                <button type="button" onClick={this.hendleDecrement}> Зменшити на 1</button>
            </div>
            </div>
        )
    }
}

export default Counter;

