import React ,{Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasherror : false
        }
    }
    componentDidCatch(error , info){
        this.setState({hasherror : true})
    }
    render(){
        if(this.hasherror){
            return <h1>Ooops! there is some problem</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;