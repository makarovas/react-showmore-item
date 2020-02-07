import React, { Component } from 'react';
import './theme.css';
export default class Theme extends Component {
 state = {
  theme: 'light'
 }
 toDark = () => this.setState({ theme: 'dark' })
 toLight = () => this.setState({ theme: 'light' })
 render() {
  const { theme } = this.state;
  return (
   <div className={theme}>
    {theme === 'dark'
     ? <button onClick={this.toLight}>dark</button>
     : <button onClick={this.toDark}>light</button>
    }
   </div>
  )
 }
}