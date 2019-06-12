import React from 'react'


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,

        };
    }

    onIncremetClick = e => {
        this.setState({
            counter: this.state.counter + 1
        });
    };


    render() {

        let hearts = [];


        for (let i = 0; i < this.state.counter; i++) {
            hearts.push(<span>&#10084;</span>)
        }

        return (
            <div className="divic">
                <p>{this.state.counter}</p>
                {this.state.counter < 10 ? <input type="button" value="Increment" onClick={this.onIncremetClick} /> : null}
                <br />
                {hearts}
            </div>
        );
    }

}


export {
    Counter
} 