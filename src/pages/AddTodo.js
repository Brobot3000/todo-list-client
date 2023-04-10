import { redirect } from "react-router-dom";
import TodoForm from "../components/TodoForm";

export async function AddTodoAction({ request }) {
  const formData = await request.formData();

  // zet alle data bij elkaar
  const submission = {
    task: formData.get("task"),
    description: formData.get("description"),
    deadline: formData.get("deadline"),
  };

  // verstuur data van formulier naar de database
  try {
    await fetch("http://localhost:3001/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submission),
    });

    return redirect("/");
  } catch (error) {
    console.error(error.message);
  }
}

function AddTodo() {
  return <TodoForm />;
}

export default AddTodo;
