import { Component } from "react";
import './Counter.css'


class Counter extends Component{
    state = {
        counter: 0,
    }

    incrClick = () => {
        if (this.state.counter < 10) {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + 1,
                }
            })
        }
    }

    decrClick = () => {
        if(this.state.counter > -10) {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1,
                }
            })
        }
    }

   render() {
    return (
    <div className="Counter">
        <span className="Counter__value">{this.state.counter}</span>

        <div className="Counter__controls">
            <button type="button" onClick={this.incrClick}>Збільшети на 1</button>
            <button type="button" onClick={this.decrClick}>Змешити на 1</button>
        </div>
    </div>)
   }
}

export default Counter