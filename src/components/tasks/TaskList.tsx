import {Task} from "src/interfaces/Task";
import {Card, CardContent, CardGroup} from "semantic-ui-react";

interface Props{
    tasks :Task[];
}
function TaskList({tasks}: Props) {
   console.log(tasks);
   return <CardGroup itemsPerRow={4}>
       {tasks.map((task) => (
           <Card key={task.id}>
               <Card.Content>
                      <Card.Header>
                          {task.title}
                      </Card.Header>
                   <Card.Meta>
                       { task.create_on}
                   </Card.Meta>
                   <Card.Content>
                       {task.description}
                   </Card.Content>
               </Card.Content>
           </Card>
       ))}
   </CardGroup>
}

export default TaskList;