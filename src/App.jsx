import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import ThemeClassComponent from './ThemeClassComponent';
import { ThemeFunctionalComponent } from './ThemeFunctionComponent';
import Todo from './toDo';
import Posts from './Posts';

function App() {
  return (
    <div>
      <Posts />
      <Todo />
      <ThemeClassComponent />
      <ThemeFunctionalComponent />
    </div>
  );
}

export default connect()(App);
