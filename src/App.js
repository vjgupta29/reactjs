import './App.css';
import Header from './myComponents/Header';
import { Todos } from './myComponents/Todos';
import { Footer } from './myComponents/Footer';
import React, { useState } from 'react';
import { AddTodos } from './myComponents/AddTodos';


function App() {

    const onDelete =(todo) =>{
        console.log("logging ondelete", todo)

        setTodos(todos.filter((e)=>{
            return e!==todo;
        }));
    }

    const onInject =(todo) => {
        console.log("logging onInject", todo)
     
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }));

    }

    const addTodo = (title, desc)=>{
        console.log("I am adding this todo", title, desc)
        
        let sno;
        if (todos[todos.length-1]!==undefined) {
            console.log("I am adding this todo if clause", title, desc, todos[todos.length-1])
            sno=todos[todos.length-1].sno + 1;
        } else {
            sno=1;
        }
        
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, myTodo]);
        console.log(myTodo)
    }


    const [todos, setTodos] = useState([
       {
            sno: 1,
            title: "GoToTheMarket",
            desc: "You need to go to the market"
        }

     /*  ,   {
            sno: 2,
            title: "Go to the mall",
            desc: "You need to go to the mall"
        },

        {
            sno: 3,
            title: "Go to the ghar",
            desc: "You need to go to the ghat"
        } */
    ]);
  return (
      <>
          <Header title="Neuron" searchbar={false}/>
          <AddTodos addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}   onInject={onInject}/>
          <Footer/>

       </>
  );
}

export default App;
