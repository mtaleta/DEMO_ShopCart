import React from 'react';
import './a.css';

export default class Hello extends React.Component {
    state = {
        count: 1,
    };

    addCount = () => {
        this.setState({
            count: this.state.count += 1,
        });
    }

    render() {
        const fontColor = {
            color: 'red',
        };
        return (
          <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.addCount}>click me</button>
            <h1 style={{color: 'red'}}>Hello</h1>
            <h1 style={fontColor}>Hello2</h1>
            <h1 className="q">Hello3</h1>
            <h1 onClick={() => { alert('hi'); }}>Hello4</h1>
          </div>
        );
    }
}
