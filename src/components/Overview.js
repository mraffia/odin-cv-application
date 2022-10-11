import React from 'react';

class Overview extends React.Component {    
    render() {
        const personal = this.props.personal;

        return (
            <div>
                <h1>{personal.name}</h1>
                <h4>{personal.title}</h4>
                <div>{personal.email}</div>
                <div>{personal.phone}</div>
                <div>{personal.linkedin}</div>
                <div>{personal.github}</div>
            </div>
        );
    }
}

export default Overview;