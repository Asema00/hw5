import {Component} from "react";

class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            count:0
        };
    }

    shouldComponentUpdate(nextProps,nextState){
        if (nextState.count<0|| nextState.count>5){
            return false
        }
        else return true
    }
    increment = () =>{
        this.setState(prevState=>({count:prevState.count +1}))
    }
    decrement = () =>{
        this.setState(prevState=>({count:prevState.count -1}))
    }
    render(){
        const {count}=this.state
        return(
            <div>
                <h2>
                    {count}
                </h2>
                <button onClick={this.decrement}>decrement</button>
                <button onClick={this.increment}>increment</button>
            </div>
        )
    }
}
export default CounterComponent