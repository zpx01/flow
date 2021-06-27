import React from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Input, Button, Box, Heading, Progress } from "@chakra-ui/react";
import { CheckList } from "./CheckList";

export const Tasks = () => {







  
  // let handleChange = (event) => setTask(event.target.value);
  // let [task, setTask] = React.useState("");
  // let [tasks, setTasks] = React.useState([]);
  // let count = 0
  // let progress = (count/tasks.length) * 100
  // let addTask = (e) => {
  //   setTask(task);
  //   setTasks([...tasks, task]);
  // };
  
  // let handleCheckbox = (e) => {
  //   let val = e.target.value
  //   if (val === true){
  //     count = count + 1
  //   }
  // }

  // return (
  //   <div>
  //     <Heading>Task List</Heading>
  //     <br />
  //     <Progress value={progress} />
  //     <br />
  //     <Input
  //       placeholder="Enter a task"
  //       variant="filled"
  //       value={task}
  //       onChange={handleChange}
  //     />
  //     <br />
  //     <br />
  //     <Button colorScheme="facebook" onClick={addTask}>
  //       Submit
  //     </Button>
  //     <br />
  //     <br />
  //     <div>
  //       {tasks.map((task) => (
  //         <div>
  //           <Checkbox value={true} default IsUnchecked onChange={handleCheckbox}>
  //             {task}
  //           </Checkbox>
  //           <br />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};
