import React from 'react';
import './App.css';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      n:1,
      rows: []
    };

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      value:e.target.value
    });
  }

  handleSubmit(e){

    if(this.state.value.length===0){
      return;
    }
    this.setState((prevState)=>({
      n:prevState.n+1,
      rows:[...prevState.rows,this.state.value],
      value:''
    }));
    e.preventDefault();
  }

  render(){
    const rows=this.state.rows;
    const listItems=rows.map((row) =>{
      return(<li key={this.state.n}>
        {row}
      </li>);
    });
    
    return(
      <div>
        <h3>TODO</h3>
        <ul>
          {listItems}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            What needs to be done?
          </label><br />
          <input 
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          /><br />
          <button >Add#{this.state.n}</button>
        </form>
      </div>
    );
  }
}

export default TodoApp;
