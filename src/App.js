import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./componenets/Budget";
import Remaining from "./componenets/Remaining";
import ExoenseTotal from "./componenets/ExpenseTotal";
import ExpenseTotal from "./componenets/ExpenseTotal";
import ExpenseList from "./componenets/ExpenseList";
import AddExpenseForm from "./componenets/AddExpenseForm";
import { AppProvider } from "./context/AppContext";

const App = () =>{
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget/>
          </div>
          <div className="col-sm">
            <Remaining/>
          </div>
          <div className="col-sm">
            <ExpenseTotal/>
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList/>
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row">
          <div className="col-sm">
            <AddExpenseForm/>
          </div>
        </div>
      </div>
    </AppProvider>
    
  );
};

export default App;