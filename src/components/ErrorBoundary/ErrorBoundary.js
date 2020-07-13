import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
        console.error('Error: ' + error + '. Error info: ' + errorInfo);
    }

    render() {
        return this.state.hasError ? 
            <h1>Something went wrong.</h1> :
            this.props.children
    }
}

export default ErrorBoundary;