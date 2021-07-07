import React from 'react';
import './Numbers.css';

export default class Numbers extends React.Component {

    constructor () {
        super();
        this.state = {
            message: "",
        }
    }

    render() {
        return <div>
            <div className="lucky-numbers">
                {this.state.message}
            </div>
            <button className="reset" onClick={this.reset}>Reset</button>
            <button onClick={this.showNumbers}>Show me lucky numbers</button>
        </div>
    }

    showNumbers = () => {
        const luckyNumbers = [
            Math.floor(Math.random() * 49) + 1,
            Math.floor(Math.random() * 49) + 1,
            Math.floor(Math.random() * 49) + 1,
            Math.floor(Math.random() * 49) + 1,
            Math.floor(Math.random() * 49) + 1,
            Math.floor(Math.random() * 49) + 1,
        ]

        for (let i = 0; i < luckyNumbers.length; i++) {
            for (let j = 0; j < luckyNumbers.length; j++) {
                if (i === j) {
                    continue;
                }
                if (luckyNumbers[i] === luckyNumbers[j]) {
                    let randomNumber = Math.floor(Math.random() * 49) + 1;
                    console.log(randomNumber);
                    do {
                        randomNumber = Math.floor(Math.random() * 49) + 1;
                    } while (luckyNumbers.indexOf(randomNumber) !== -1)
                    luckyNumbers[j] = randomNumber;
                }
            }
        }

        luckyNumbers.push(Math.floor(Math.random() * 10) + 1);

        this.setState({ message: luckyNumbers.map((e) => <div>{e}</div>) })
    }

    reset = () => {
        this.setState({ message: "" })
    }
}