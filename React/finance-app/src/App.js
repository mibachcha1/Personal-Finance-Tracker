import React, { useState, useEffect } from "react";
import api from './api'
import Popup from "./components/popup";
import Nav from "./components/nav";
import Transactions from "./components/transactions";
import SummarizedView from "./components/summarizedView";
import InitPopup from "./components/initpopup";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [startingBalance, setStartingBalance] = useState(0.0)
  const [goalBalance, setGoalBalance] = useState(0.0)
  const [expenses, setTotalExpenses] = useState(0.0)
  const [income, setTotalIncome] = useState(0.0)
  const [numPayChecks, setNumPayChecks] = useState(0)

  const fetchTransactions = async () => {
    const response = await (api.get('/transactions/'))
    console.log(response);
    setTransactions(response.data)
  };

  const fetchUserData = async () => {
    const response = await (api.get('/users/1'))
    const goal = response.data.goal_balance;
    const starting = response.data.starting_balance;

    setGoalBalance(goal)
    setStartingBalance(starting)
  }

  useEffect(() => {
    fetchTransactions();
    fetchUserData();
  }, []);

  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    description: '',
    is_income: false,
    date: ''
  });

  useEffect(() => {

    const calculateTotalExpenses = () => {
      if (transactions.length > 0) {
        const expenses = transactions.filter(transaction => !transaction.is_income);
        const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
        setTotalExpenses(total);
      } else {
        setTotalExpenses(0); // Reset total expenses if transactions list is empty
      }
    };

    const calculateTotalIncome = () => {
      if (transactions.length > 0) {
        const income = transactions.filter(transaction => transaction.is_income);
        const total = income.reduce((acc, curr) => acc + curr.amount, 0);
        setTotalIncome(total);
      } else {
        setTotalIncome(0); // Reset total expenses if transactions list is empty
      }
    };

    const calculateNumPayChecks = () => {
      if (transactions.length > 0) {
        const checks = transactions.filter(transaction => transaction.category === "Paycheck");
        const total = checks.length
        setNumPayChecks(total)
      } else {
        setNumPayChecks(0); // Reset total expenses if transactions list is empty
      }


    };

    calculateTotalExpenses(); // Initial calculation
    calculateTotalIncome(); // Initial calculation
    calculateNumPayChecks();

  }, [transactions]); // Depend on 'transactions' to re-run whenever it changes



  const handleSubmit = async (formData) => {
    await api.post('/transactions/', formData)
    setFormData(
      {
        amount: '',
        category: '',
        description: '',
        is_income: false,
        date: ''
      }
    )
    fetchTransactions()
  }

  const handleInitSubmit = async (formData) => {
    console.log(formData);
    await api.put('/users/1', formData);
    fetchUserData()
  }

  const handleDeleteMain = async (id) => {
    await api.delete('/transactions/' + id)
    fetchTransactions()
  }

  return (
    <>
      <Nav />
      <SummarizedView goal={goalBalance} starting={startingBalance} debt={expenses} income={income} checks={numPayChecks} />
      <Popup onSubmit={handleSubmit} data={formData} />
      <InitPopup onSubmit={handleInitSubmit} />
      <Transactions transactions={transactions} handleDeleteMain={handleDeleteMain} />
    </>
  )
}

export default App;
