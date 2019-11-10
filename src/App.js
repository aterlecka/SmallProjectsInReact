import React from 'react';
import './App.css';

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

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        const {timeZone, city = 'Another city'} = this.props;
        return (
            <div>
                <h1>{`Time in ${city}`}</h1>
                <h2>It is {this.state.date.toLocaleTimeString('en-GB', {timeZone})}</h2>
            </div>
        );
    }
}
export default Clock;
