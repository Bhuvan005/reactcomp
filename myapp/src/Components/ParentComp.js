import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentComp extends Component {
    constructor(props){
        super(props)

        this.state={
            name:"Bhuvan"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({ 
                name:"Bhuvan"
        });
    },3000);
}
    render() {
        console.log("Parent comp render");
        return (
            <div>
             I'm the Parent  
             <RegularComp name={this.state.name}/>
             <PureComp name={this.state.name}/>
            </div>
        );
    }
}


export default ParentComp;