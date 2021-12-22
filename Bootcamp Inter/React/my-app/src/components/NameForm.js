import React from "react";


class NameForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ value: event.target.value})
  }
  handleSubmit(event){
    alert('O nome enviado foi: ' + this.state.value)
    event.preventDefault();
  }


render(){
  return (
    <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
      <label>
        Nome:
        <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Enviar" />
    </form>

  );
}
}


export default NameForm
