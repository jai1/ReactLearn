const rootElement = document.getElementById('root');

// const element = document.createElement('div');
// element.textContent = 'Hello World';
// element.className = 'container';
// rootElement.appendChild(element);

// const element = React.createElement(
//     'div',
//     {
//       className: 'container',
//       children: ['Hello World', 'Goodbye World']
//     },
//     // 'Hello World'
//   );
  
//   console.log(element);
// ReactDOM.createRoot(rootElement).render(element);
const element = <div className="container">Hello World</div>;
ReactDOM.createRoot(rootElement).render(element);

const listElement = React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'Home'),
    React.createElement('li', null, 'About'),
    React.createElement('li', null, 'Contact')
  );
ReactDOM.createRoot(rootElement).render(listElement);

const logo = {
    name: 'React Logo',
    title: 'React Logo',
    path: './react-logo.png',
  };
  
  const logoElement = <img src={logo.path} alt={logo.name} title={logo.title} />;

  ReactDOM.createRoot(rootElement).render(logoElement);

//   const testElement = 
//     <ul>
//       <li>
//         <a href="">a</a>
//       </li>
//       <li>
//         <a href="">b</a>
//       </li>
//       <li>
//         <a href="">c</a>
//       </li>
//     </ul>;
// Note: 1. The above is same as.
//       2. Short hand for <React.Fragment> is <>.

const testElement = (
        // <React.Fragment>
         <>
          <p>123</p>
          <ul>
          . ..
          </ul>
         </>
        //  </React.Fragment>
      );