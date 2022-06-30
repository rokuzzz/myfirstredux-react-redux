import "./SASS/app.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Button, Card, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="App">
      <Card className="counter" sx={{ minWidth: 275 }}>
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
    </div>
  );
}

export default App;
