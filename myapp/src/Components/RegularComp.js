import React, { Component } from 'react';

class RegularComp extends Component {
    render() {
        console.log("Regular component Render");
        return (
            <div>
              I'm the RegularComp {this.props.name}
            </div>
        );
    }
}

export default RegularComp;