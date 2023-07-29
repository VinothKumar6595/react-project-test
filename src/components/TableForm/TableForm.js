import { useRef } from "react";
import Button from "../UI/Button";
import classes from "./TableForm.module.css";
const TableForm = (props) => {
  const idRef = useRef();
  const priceRef = useRef();
  const dishRef = useRef();
  const tableRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const myId = idRef.current.value;
    const myPrice = priceRef.current.value;
    const myDish = dishRef.current.value;
    const myTable = tableRef.current.value;
    const myOrder = {
      id: myId,
      price: myPrice,
      dish: myDish,
      table: myTable,
    };
    const myOrderString = JSON.stringify(myOrder);
    localStorage.setItem(myOrder.id, myOrderString);
    console.log(localStorage.getItem(myOrder.id));
    props.onAddOrder(myOrderString);
    idRef.current.value = "";
    priceRef.current.value = "";
    dishRef.current.value = "";
    tableRef.current.value = "";
  };
  return (
    <form onSubmit={formSubmitHandler} className={classes.table}>
      <div>
        <label htmlFor="id">Unique Order ID</label>
        <input type="number" id="id" ref={idRef}></input>
      </div>
      <div>
        <label htmlFor="price">Choose Price</label>
        <input type="number" id="price" ref={priceRef}></input>
      </div>
      <div>
        <label htmlFor="dish">Choose dish</label>
        <input type="text" id="dish" ref={dishRef}></input>
      </div>
      <div>
        <label htmlFor="table">Choose a Table</label>
        <input list="table" name="table" ref={tableRef}></input>
        <datalist id="table">
          <option value={"Table 1"} />
          <option value={"Table 2"} />
          <option value={"Table 3"} />
        </datalist>
      </div>
      <div>
        <Button>Add to Bill</Button>
      </div>
    </form>
  );
};

export default TableForm;
