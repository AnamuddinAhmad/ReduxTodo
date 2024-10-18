import './App.css';
import { AddTodo } from './components/AddTodo';
import { SimpleTodo } from './components/SimpleTodo';


function App() {

  return (
   <div className='min-h-screen text-center text-white bg-zinc-800'>
   <h1 className='font-bold text-8xl '>Redux Todo's</h1>
   <AddTodo/>
   <SimpleTodo/>
   </div>
  )
}

export default App
