import React from 'react';

class Overview extends React.Component {    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h4>{this.props.title}</h4>
                <div>{this.props.email}</div>
                <div>{this.props.phone}</div>
                <div>{this.props.linkedin}</div>
                <div>{this.props.github}</div>
            </div>
        );
    }
}

export default Overview;