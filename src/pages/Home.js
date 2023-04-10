import Todo from "../components/Todo";
import { redirect, useLoaderData } from "react-router-dom";

// loader
export async function loadHomeData() {
  return await fetch("http://localhost:3001");
}

// action
// request is een object dat mee wordt gestuurd door de Form component
// waarbij alle ingevulde form data zit
export async function deleteTodoDocument({ request }) {
  const formData = await request.formData();
  const _id = formData.get("_id");

  try {
    await fetch(`http://localhost:3001/${_id}`, { method: "DELETE" });
    return redirect("/");
  } catch (error) {
    console.error(error.message);
  }
}

function Home() {
  const todoList = useLoaderData();

  return (
    <section>
      <header>
        <h1 className="page-title">Mijn todo lijst</h1>
      </header>
      {todoList.map((todo) => (
        <Todo key={todo._id} {...todo} />
      ))}
    </section>
  );
}

export default Home;
