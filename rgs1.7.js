document.getElementById('mountNode').innerHTML = `
	<div>
    Hello HTML
  </div>
`;

ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    'Hello React',
  ),
  document.getElementById('mountNode2'),
);

// 	currentTime: (new Date).toLocaleTimeString()
//  setInterval(fn, 1000);


