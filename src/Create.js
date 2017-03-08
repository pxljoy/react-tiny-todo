import React from 'react';
import './Create.css'

class Create extends React.Component {

  constructor(){
    super()
    this.state = {new:false}
  }

  render() {
    return(
      <div>
        {this.renderAdd()}
      </div>
      )
  }

  renderAdd(){
    return (this.state.new) 
    ? <div className="Create"> <input maxLength="12" ref="input" type="text" onKeyDown={this.handleEscKey} onKeyPress={this.handleKeyPress} /> </div>
    : <div onClick={this.toggleNew.bind(this)} className="Add"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
  }

  toggleNew() {
    this.setState({new:!this.state.new})
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.onUpdate({task:this.refs.input.value,isDone:false})
      this.setState({new:false})
    }
  }
  handleEscKey = (event) => {
    if (event.keyCode === 27) {
      this.setState({new:false})
    }
  }
}

export default Create;
