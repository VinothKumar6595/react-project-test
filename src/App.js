import { useState } from "react";
import "./App.css";
import TableForm from "./components/TableForm/TableForm";
import TableList from "./components/TableList/TableList";

function App() {
  const [enteredOrder, setEnteredOrder] = useState([]);
  const addingOrderHandler = (orders) => {
    const myOrder = JSON.parse(orders);
    setEnteredOrder((prevOrder) => {
      return [...prevOrder, myOrder];
    });
  };
  return (
    <div className="App">
      <TableForm onAddOrder={addingOrderHandler} />
      <TableList orders={enteredOrder} />
    </div>
  );
}

export default App;
