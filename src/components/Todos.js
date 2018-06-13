import React, {Component} from 'react';
import { connect } from '@/react-redux';
import actions from '@/store/actions/todos';


let closeStyle = {
  display: 'inline-block',
  backgroundColor: '#ccc',
  width: '30px',
  height: '30px',
  textAlign: 'center',
  lineHeight: '30px',
};

class Todos extends Component {
  onDelTodo = (index) => {
    this.props.delTodo(index);
  };

  onAddTodo = (event) => {
    let reg = /^\s*$/g;
    if (event.keyCode === 13 && !reg.test(event.target.value)) {
      this.props.addTodo(event.target.value);
      event.target.value = '';
    }
  };

  render() {
    return (
      <div style={{border: '1px solid red'}}>
        <input type="text" onKeyDown={this.onAddTodo}/>
        <ul>
          {
            this.props.items.map((item) => (
              <li style={{margin: '10px'}} key={item.id}>
                <span onDoubleClick={() => this.props.toggleTodo(item.id)} style={{textDecoration: item.completed ? 'line-through': ''}}>{item.text}</span> <span style={closeStyle} onClick={() => this.onDelTodo(item.id)}>X</span>
              </li>
            ))
          }
        </ul>
        <button
          onClick={() => this.props.switchType('all')}
          style={{color:this.props.newType==='all'?'red':'black'}}
        >全部</button>
        <button
          onClick={() => this.props.switchType('completed')}
          style={{color:this.props.newType==='completed'?'red':'black'}}
        >已完成</button>
        <button
          onClick={() => this.props.switchType('uncompleted')}
          style={{color:this.props.newType==='uncompleted'?'red':'black'}}
        >未完成</button>
      </div>
    )
  }
}

// let mapDispatchToProps = actions;

// bindActionCreators函数
// let mapDispatchToProps = newActions;

// 这个函数等价于bindActionCreators函数
// let mapDispatchToProps = dispatch => ({
//   onAddTodo: (text) => dispatch(actions.addTodo(text)),
//   onDelTodo: (index) => dispatch(actions.delTodo(index))
// });

// let mapStateToProps = state => state.todos;
// let mapDispatchToProps = actions;

function filterState(state) {
  return {
    ...state.todos,
    items: state.todos.items.filter(item => {
      if (state.todos.newType === 'completed') {
        return item.completed;
      } else if (state.todos.newType === 'uncompleted') {
        return !item.completed;
      } else {
        return item;
      }
    })
  }
}
export default connect(
  filterState,
  actions
)(Todos);
