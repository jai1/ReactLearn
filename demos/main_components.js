function HelloWorld() {
  return <div className="container">Hello Function Component</div>;
}

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App />;
root.render(element);


class HelloWorldClassComponent extends React.Component {
  render() {
    return <div className="container">Hello Class Component</div>;
  }
}

root.render(<HelloWorldClassComponent />);
