type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

// We can use Readonly Utility to avoid modifying the object
const todo: Readonly<Todo> = {
  title: "To Watch Typescript classes",
  description: "Learn more about typescript",
  completed: false,
};

console.log(todo);

// todo.completed = true;

console.log(todo);

// By using Partial Utility show that we can pass only some of the properties of the object
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {
    ...todo,
    ...fieldsToUpdate,
  };
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

// Pick
// TodoPreview will have the following properties from Todo, completed and description
type TodoPreview = Pick<Todo, "completed" | "title">;

const todoPreview: TodoPreview = {
  completed: false,
  title: "Complete Typescript Course",
};

// Omit
// By using the Omit Utility, we can remove the properties we don't need from another type

type TodoPreview2 = Omit<Todo, "description">;
