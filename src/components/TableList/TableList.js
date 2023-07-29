import Button from "../UI/Button";

const TableList = (props) => {
  const orderDeleteHandler = () => {
    props.orders.filter((order) => {
      localStorage.removeItem(order.id);
    });
  };

  const table1 = props.orders.filter((order) => {
    return order.table === "Table 1";
  });
  const table2 = props.orders.filter((order) => {
    return order.table === "Table 2";
  });
  const table3 = props.orders.filter((order) => {
    return order.table === "Table 3";
  });

  return (
    <div>
      <ul>
        <h2>Table 1</h2>
        {table1.map((order) => (
          <li key={order.id}>
            {`${order.price} - ${order.table} - ${order.dish}`}
            <Button onClick={orderDeleteHandler}>Delete Order</Button>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Table 2</h2>
        {table2.map((order) => (
          <li key={order.id}>
            {`${order.price} - ${order.table} - ${order.dish}`}
            <Button onClick={orderDeleteHandler}>Delete Order</Button>
          </li>
        ))}
      </ul>
      <ul>
        <h2>Table 3</h2>
        {table3.map((order) => (
          <li key={order.id}>
            {`${order.price} - ${order.table} - ${order.dish}`}
            <Button onClick={orderDeleteHandler}>Delete Order</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
