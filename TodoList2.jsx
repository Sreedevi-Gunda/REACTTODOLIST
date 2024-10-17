import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
export default function TodoList2(){
    let[tasks,setTasks] = useState([{task:"sample-task",id:uuidv4(),isDone:false}]);
    let[newTask,setNewTask]=useState("");

    // function addNewTask(){
    //   setTasks([...tasks,{task:newTask,id:uuidv4()}]);
    //   setNewTask("");
    // }

    // function addNewTask(){
    //     setTasks((prevTask)=>{
    //       return [...prevTask,{task:newTask,id:uuidv4()}]
    //     });
    //     setNewTask("");
    //    }

    let addNewTask = () =>{
      setTasks((prevTask)=>{
        return [...prevTask,{task:newTask,id:uuidv4(),isDone:false}]
      });
      setNewTask("");
     }



    function updateNewTaskValue(event){
        setNewTask(event.target.value);
    }

    // function deleteTask(id){
    //    setTasks(tasks.filter((tasks)=> tasks.id != id));
    // }

    let deleteTask = (id) => {
      setTasks((prevTask) => prevTask.filter((prevTask) => prevTask.id != id))
    };
       

    // let upperCaseAll = () => {
    //  let newArr = tasks.map((task) => {
    //   return{ //little change near return
    //     ...task,
    //   };
    //  })
    //  console.log(newArr);
    // };

    // let upperCaseAll = () =>{
    //   let newArr = tasks.map((task)=>{
    //     return ( //little change now parenthesis
    //       {...task}
    //   );
    
    //   })
    //   console.log(newArr);
    // }

//without arrow function
    // function upperCaseAll(){
    //   let newArr = tasks.map((task)=>{
    //     return(
    //       {...task}
    //     );
    //   })
    //   console.log(newArr);
    // }

//with task
//    let upperCaseAll = ()=>{
//     setTasks((prevTask)=>
//      prevTask.map((task)=>{
//          return{
//              ...task,task:task.task.toUpperCase(),
//          };
//     })
//  );
//  };
//with callback
//to avoid confusion wrote with todo
  //  let upperCaseAll = ()=>{
  //     setTasks((prevTask)=>
  //      prevTask.map((todo)=>{
  //          return{
  //              ...todo,task:todo.task.toUpperCase(),
  //          };
  //     })
  //  );
  //  };

  //without callback
  //  let upperCaseAll = () =>{
  //   setTasks(tasks.map((task)=>{
  //     return{
  //     ...task,task:task.task.toUpperCase(),
  //     }
  //   }))
  //  }

  //with general function
  function upperCaseAll(){
    setTasks(tasks.map((task)=>{
          return{
          ...task,task:task.task.toUpperCase(),
          }
        }))
  }

  // function upperCaseOne(id){
  //   setTasks(tasks.map((task)=>{
  //     if(task.id == id)
  //       {
  //         return{
  //         ...task,task:task.task.toUpperCase(),
  //         }
  //     }else{
  //         return task;
  //       }
      
  //   }))

 // adding prevTodos for uppercaseone and uppercaseall this not required it will work but react is async so sometimes without this may not work properly
  let upperCaseOne = (id)=>{
        setTasks((prevTask)=>
         prevTask.map((task)=>{
          if(task.id == id){
            return{
              ...task,task:task.task.toUpperCase(),
          };
          }else{
            return task;
          }
             
        })
     );
     };

  // function markAsDone(id){
  //     setTasks(tasks.map((task)=>{
  //       if(task.id == id)
  //         {
  //           return{
  //           ...task,isDone:true,
  //           }
  //       }else{
  //           return task;
  //         }
        
  //     }))
  //   }

    //using general function
    // function markAllAsDone(){
    //   setTasks(tasks.map((task)=>{
    //         return{
    //         ...task,isDone:true,
    //         }
    //       }))
    // }

    //using arrow function
    let markAsDone = (id)=>{
      setTasks((prevTask)=>
       prevTask.map((task)=>{
        if(task.id == id){
          return{
            ...task,isDone:true,
        };
        }else{
          return task;
        }
           
      })
   );
   };

   //using arrowfunction
   let markAllAsDone = ()=>{
        setTasks((prevTask)=>
         prevTask.map((todo)=>{
             return{
                 ...todo,isDone:true,
             };
        })
     );
     };

  




     

    return (
    <div>
        <h3>TodoList</h3>
        <input type="text" placeholder = "Add a task"  onChange = {updateNewTaskValue} value = {newTask} /> <br />
        <button onClick = {addNewTask}>AddTask</button>
        <br /><br /><br />
        <hr />
        <p>Tasks todo</p>
        <ul>
          {tasks.map((tasks)=>{
            return(
            <li key = {tasks.id}>
            <span style = {tasks.isDone ? {textDecorationLine:"line-through"}:{}}>{tasks.task}</span>
             &nbsp;&nbsp;&nbsp;
             <button onClick = {()=>deleteTask(tasks.id)}>delete</button> &nbsp;
             <button onClick = {()=>upperCaseOne(tasks.id)}>UpperCaseOne</button>
             <button onClick = {()=>markAsDone(tasks.id)}>MarkAsDone</button>
             </li>
            )
          })}
        </ul>
        <br /><br />
        <button onClick = {upperCaseAll}>UpperCaseAll</button>
        <button onClick = {markAllAsDone}>MarkAllAsDone</button>
    </div>
    );
  }