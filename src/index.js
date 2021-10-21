import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';

function Home() {
  return ( 
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

var contents = [
  {id:1, title:'HTML', description:'HTML is ...'},
  {id:2, title:'JS', description:'JS is ...'},
  {id:3, title:'React', description:'React is ...'}
];

function Topic() {
  return (
    <div>
    <h3>Topic</h3>
    Topic is ...
  </div>
  );
}

function Topics() {
  var lis = [];
  for(var i=0; i<contents.length; i++) {
    lis.push(<li><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
    }
  return ( 
    <div>
      <h2>Topics</h2>
      <ul>
        {lis}
      </ul>
      <switch>
        <Route path="/Topics/1">HTML is ...</Route>
        <Route path="/Topics/2">JS is ...</Route>
        <Route path="/Topics/3">React is ...</Route>
      </switch>
    </div>
  );
}

function Contact() {
  return ( 
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
      </Switch>
    </div>
  );
}
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
