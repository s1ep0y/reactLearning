import React, { Component } from 'react';
import './App.css';
import Note from './singlenote/note'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.listenNote = this.listenNote.bind(this)
    this.addNote = this.addNote.bind(this)
  }

  

  listenNote(event){
    const target = event.target
    const title = target.title
    this.setState({
      title: title
    })
  }
  addNote(event){
    event.preventDefault();
    alert(JSON.stringify(this.state))
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
      {/* <h1>{this.state.pageTitle}</h1> */}
      {/* <button onClick={this.changeTitle}>Change title</button> */}
      <form onSubmit={this.addNote}>
        <label>
          Title:
          <input type="text" name="title" onChange={this.listenNote} value={this.title}/>
        </label>
        <label>
          Text:
          <textarea></textarea>
        </label>
        <button type="Sumbit"/>>
      </form>
        {/* {notesList.map((info)=> <Note title={info.title} text= {info.text} />)} */}
      </div>
    );
  }
}

export default App;
