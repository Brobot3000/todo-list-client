import { useState } from "react";
import { Form } from "react-router-dom";

function Todo({ _id, task, description, deadline }) {
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
  const dueDate = new Date(deadline);

  return (
    <article className="card">
      <header>
        <h2 className="card-title">{task}</h2>
      </header>
      <p className="card-description">
        {descriptionCollapsed ? description.substring(0, 200) : description}
        &nbsp;
        {description.length > 200 ? (
          <button
            onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}
            className="show-more"
          >
            {descriptionCollapsed ? " meer weergeven" : " minder weergeven"}
          </button>
        ) : (
          ""
        )}
      </p>
      <footer className={Date.now() > dueDate ? "deadline-passed" : "deadline"}>
        deadline:&nbsp;
        {dueDate.toLocaleString("nl-NL", { timeZone: "CET" })}
      </footer>
      <Form method="delete" action="/" className="check-off">
        <input type="text" name="_id" value={_id} readOnly />
        <button>Gedaan</button>
      </Form>
    </article>
  );
}

export default Todo;
