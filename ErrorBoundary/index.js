/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint react/prop-types: 0 */
import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // logComponentStackToMyService(info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      // alert('Something went wrong! Please try logging in again');
      // window.location.assign('logout');
      return (
        <h1>
          Something went wrong. <a href="/logout">Login</a>
        </h1>
      );
    }

    return this.props.children;
  }
}
