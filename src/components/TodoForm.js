import { Form } from "react-router-dom";

function TodoForm() {
  return (
    <section>
      <header>
        <h1 className="page-title">Voeg een todo toe</h1>
      </header>
      <Form method="post" action="/add" className="add-todo-form">
        <label htmlFor="task">Taak</label>
        <input id="task" type="text" name="task" required />

        <label htmlFor="description">Beschrijving</label>
        <textarea id="description" name="description" rows="10" required></textarea>

        <label htmlFor="deadline">Deadline</label>
        <input id="deadline" type="datetime-local" name="deadline" required />

        <button type="submit">Voeg toe</button>
      </Form>
    </section>
  );
}

export default TodoForm;
