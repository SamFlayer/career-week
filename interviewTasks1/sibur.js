import React, { useEffect, useState } from "react";

class HelloClassComponent extends React.Component {
  state = { hasError: false };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.name.toLowerCase() !== this.props.name.toLowerCase();
  }

  componentDidMount() {
    console.log("Did mount");
  }

  componentWillUnmount() {
    console.log("Will unmount");
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <span>Error</span>;
    }
    return <div>Hello, {this.props.children}</div>;
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
}

// TODO Refactor HelloClassComponent
const HelloFunctionalComponent = () => {
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {
    console.log("Did mount");
    
    return () => console.log("Will unmount");
  }, [])

  return (
    <>
      {/* {hasError ? <span>Error</span> : <div>Hello, {children}</div>} */}
    </>
  )
};
const memoFunc = React.memo(HelloFunctionalComponent, () => {})

export default function App() {
  return (
    <div className="App">
      <HelloClassComponent>
        <strong>Class component</strong>
      </HelloClassComponent>

      <HelloFunctionalComponent>
        <strong>Functional component</strong>
      </HelloFunctionalComponent>
    </div>
  );
}
