function App() {
  return (
    <div className="parentElement">
      <form action="" className="formulaire">
        <input
          placeholder="Write a Task"
          type="text"
          className="input "
          maxLength="20"
        />
        <button className="submit-btn">Add Task</button>
      </form>
      <div className="container">
        <div className="tasks-list ">
          <h1 className="table-title border-dashed">THE TASKS</h1>
          <div className="tasks-names ">
            <div draggable={true} className="task">
            <span className="task-name">              Learn React
</span>
<h1>⌛</h1>
            </div>
          </div>
        </div>

        <div className="task-end  ">
          <h1 className="table-title border-[solid]">END TASK</h1>
          <div className="tasks-names">
            <div draggable={true} className="task-complete">
<span className="task-name">              Learn My sql
</span>
<h1>✅</h1>

            </div>
          </div>
        </div>
      </div>
      <button className="clear-btn">DELETE ALL</button>
    </div>
  );
}

export default App;
