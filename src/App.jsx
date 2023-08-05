/*import logo from './logo.svg';*/
import './App.css';
import Todo from './components/Todo.jsx';
import Title from './components/Title.jsx';
import Modal from './components/Modal.jsx';

function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)

        }}/>
        <button>Add todo</button>
      </div>
      <div className = "todo__wrapper"></div>
      <Todo title="Finish frontend simplified"
      paragraph ="code along with me"/>
      <Todo title ="Finish interview section"
      paragraph ="finish every question in the next 6 weeks"/>
      <Todo title="Land a job"
      paragraph="apply to 100 jobs apply to more"/>
      <Modal title ="are you sure you want to delete"/>
      
    </div>
  );
}

export default App;
