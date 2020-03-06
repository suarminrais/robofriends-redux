import React, { Fragment, Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    })
  };

  render() {
    return this.state.hasError ? <h1>Opps this is not good.</h1> : (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

export default ErrorBoundry;