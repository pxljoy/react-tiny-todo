import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    constructor() {
    super()
    this.state = ({isEditing:true})
  }


  render(){
    return(
        <div className="Todo">
          <div onDoubleClick={this.edit.bind(this)}>
            <TodoTitle updateOnKey={this.updateOnKey.bind(this)} isEditing={this.state.isEditing} isDone={this.props.isDone} name={this.props.name} />
          </div>
          <TodoRemove onClick={this.remove.bind(this)}/>
          <TodoDone isDone={this.check.bind(this)}/>
        </div>
      )
    }

    remove = () => this.props.onRemove(this.props.name)

    check = () => this.props.setDone(this.props.name, !this.props.isDone)


    edit = () => this.setState({isEditing: false})

    updateOnKey = event => {
      if(event.key === 'Enter'){
          this.setState({isEditing: true})
          this.props.onEdit(this.props.name, event.target.value)
        }
    }

}


class TodoTitle extends React.Component {
  render(){
    return (
      this.props.isEditing
      ? <h3 style={this.props.isDone?{textDecoration:'line-through',color:'#FA7E8E'}:{textDecoration:'none'}} /*onClick={this.check.bind(this)}*/ ref="h3">{this.props.name}</h3>
      : <input onKeyPress={this.props.updateOnKey} type="text" placeholder={this.props.name} />
    )
  }

    // <h3
    //   style={this.props.isDone?{textDecoration:'line-through',color:'#FA7E8E'}:{textDecoration:'none'}} 
    //   /*onClick={this.check.bind(this)}*/ 
    //   ref="h3">
    //   {this.props.name}
    // </h3>
}

class TodoDone extends React.Component {
  render(){
    return <i 
      onClick={this.props.isDone} 
      className="TodoIcon fa fa-check" 
      aria-hidden="true">
    </i>
  }

  done = () => this.setState({isDone: !this.state.isDone})

}

class TodoRemove extends React.Component {
  render(){
    return <i 
      onClick={this.props.onClick} 
      className="TodoIcon fa fa-times" 
      aria-hidden="true">
    </i>
  }
}



export default Todo;