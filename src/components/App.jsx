
import React from "react";
import List from "./List.jsx";
import Form from "./Form.jsx";
const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Mes articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Ajoutez un nouvel article</h2>
      <Form />
    </div>
  </div>
);
export default App;