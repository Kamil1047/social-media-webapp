import { Container, Grid } from "@mui/material";
import classes from "./CardUI.module.css";

/******************* 
@Purpose : It will a used to display card data
@Parameter : {}
@Author : INIC
******************/

const CardUI = (props) => {
  return (
    <Container>
      <Grid container className={classes.main_grid}>
        {props.children}
      </Grid>
    </Container>
  );
};

export default CardUI;
