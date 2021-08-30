import React from 'react';

function WithLogging(Component) {
  const wrapperComponent = Component.displayName || Component.name || "Component";

  const hoc = class extends React.Component {

    componentDidMount() {
      console.log(`Component ${wrapperComponent} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${wrapperComponent} is going to unmount`);
    }
    render() {
      return (
        <Component { ...this.props } />
      );
    }
  }
  hoc.displayName = `WithLogging(${wrapperComponent})`;
  return hoc;
}

export default WithLogging;