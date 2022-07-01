import "./SASS/app.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Button, Card, Typography, List } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <Card className="counter" sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography className="counter-value"> {cash}</Typography>
        </CardContent>
        <CardActions className="buttons">
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => addCash(Number(prompt()))}
          >
            Deposit funds
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={() => getCash(Number(prompt()))}
          >
            Withdraw
          </Button>
        </CardActions>
      </Card>
      <Card className="customer-base" sx={{ minWidth: 350 }}>
        <CardContent>
          {customers.length > 0 ? (
            <List aria-label="client base">
              {customers.map((customer) => (
                <ListItem
                  button
                  divider
                  onClick={() => removeCustomer(customer)}
                >
                  <ListItemText className="customers" primary={customer.name} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography className="customers-empty-message">
              {" "}
              No clients yet!{" "}
            </Typography>
          )}
        </CardContent>
        <CardActions className="buttons">
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => addCustomer(prompt())}
          >
            Add customer
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
