import React, { Component } from 'react'

class ErrorBoundarie extends Component {
  state = {
    hasError: false
  }
  componentDidCatch(error, info) {
    this.setState(() => ({
      hasError: true,
    }));
    console.log("A error: ", info);
  }
  render() {
    if(this.state.hasError) {
      return <div
              style={{
                backgroundColor: '#000',
                color: '#fff',
                fontSize: 30,
                textAlign: 'center'
              }}>
              Something went wrong.
            </div>
    }
    return this.props.children
  }
}
export default ErrorBoundarie;