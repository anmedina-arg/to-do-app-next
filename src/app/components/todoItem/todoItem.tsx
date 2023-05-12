export const TodoItem = ({ task }: any) => {
   return (
     <>
       {
         task.map((task: any) => {
           const { id, name, completed } = task;
           return (
             <span key={id}>{name}</span>
           )
         })
       }
     </>
   );
};

export default TodoItem;