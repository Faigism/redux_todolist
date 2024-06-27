import DoneList from './components/DoneList'
import InputComponent from './components/InputComponent'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="todoList">
      <header>TO DO APP REDUX TOOLKIT</header>
      <InputComponent />
      <div className="todo">
        <TodoList />
        <DoneList />
      </div>
    </div>
  )
}
export default App
