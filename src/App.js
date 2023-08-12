import { useState } from "react";
import "./App.css";
import TableForm from "./components/TableForm/TableForm";
import TableList from "./components/TableList/TableList";

function App() {
  const [enteredOrder, setEnteredOrder] = useState([]);

  const addingOrderHandler = (orders) => {
    setEnteredOrder((prevOrder) => {
      return [...prevOrder, orders];
    });
  };
  return (
    <div className="App">
      <TableForm onAddOrder={addingOrderHandler} />
      <TableList orders={enteredOrder} setOrders={setEnteredOrder} />
    </div>
  );
}

export default App;
