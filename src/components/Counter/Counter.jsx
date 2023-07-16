import React from "react";
import Controls from "./Controls";
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
            <Controls 
            onIncrement={this.hendleIncrement}
            onDecrement={this.hendleDecrement}
            />
            </div>
        )
    }
}

export default Counter;

