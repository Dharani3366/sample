import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Expense() {
  const [budget, setBudget] = useState("");
  const [expenseTitle, setExpenseTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);
  const navigate = useNavigate();

  const handleBudgetChange = (e) => setBudget(e.target.value);
  const handleExpenseChange = (e) => setExpenseTitle(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);

  const addBudget = () => {
    if (budget) {
      setTotalBudget((prev) => prev + parseFloat(budget));
      setBudget("");
    }
  };

  const addExpense = () => {
    if (expenseTitle && amount) {
      setExpenses([...expenses, { title: expenseTitle, amount: parseFloat(amount) }]);
      setExpenseTitle("");
      setAmount("");
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const resetAll = () => {
    setBudget("");
    setExpenseTitle("");
    setAmount("");
    setExpenses([]);
    setTotalBudget(0);
  };

  const handleLogout = () => {
    navigate("/dashboard");
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const budgetLeft = totalBudget - totalExpenses;

  const styles = {
    container: {
      maxWidth: "1100px",
      margin: "40px auto",
      padding: "20px",
      background: "#fef9ff",
      borderRadius: "15px",
      boxShadow: "0 0 25px rgba(0, 0, 0, 0.15)",
      position: "relative",
      fontFamily: "Arial, sans-serif"
    },
    title: {
      textAlign: "center",
      color: "#6a0572",
      fontSize: "2.5rem",
      marginBottom: "30px"
    },
    mainContent: {
      display: "flex",
      gap: "30px",
      flexWrap: "wrap"
    },
    column: {
      flex: 1,
      minWidth: "300px"
    },
    box: {
      background: "#e0bbff",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "20px",
      boxShadow: "0 4px 15px rgba(106, 5, 114, 0.1)"
    },
    label: {
      display: "block",
      margin: "10px 0 5px",
      color: "#8e44ad"
    },
    input: {
      width: "90%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #d3a4f6",
      borderRadius: "8px",
      background: "#fff",
      color: "#2c2c2c",
      fontSize: "1rem"
    },
    button: {
      width: "95%",
      backgroundColor: "#9b59b6",
      color: "white",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
      marginBottom: "10px"
    },
    summary: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "20px"
    },
    summaryBox: {
      flex: 1,
      minWidth: "120px",
      backgroundColor: "#ffd6e0",
      color: "#6a0572",
      padding: "12px",
      borderRadius: "8px",
      textAlign: "center",
      fontWeight: "bold",
      boxShadow: "0 2px 10px rgba(106, 5, 114, 0.1)"
    },
    table: {
      width: "60%",
      borderCollapse: "collapse",
      color: "#3a3a3a"
    },
    thtd: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #d3a4f6"
    },
    actionButton: {
      backgroundColor: "#ab47bc",
      color: "white",
      border: "none",
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "0.9rem"
    },
    logoutButton: {
      position: "absolute",
      top: "20px",
      right: "20px",
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>

      <h1 style={styles.title}>Budget Tracker System</h1>
      <div style={styles.mainContent}>
        <div style={styles.column}>
          <div style={styles.box}>
            <h2>Add Budget</h2>
            <label style={styles.label} htmlFor="budget">Budget:</label>
            <input type="number" id="budget" value={budget} onChange={handleBudgetChange} style={styles.input} />
            <button type="button" style={styles.button} onClick={addBudget}>Add Budget</button>
          </div>

          <div style={styles.box}>
            <h2>Add Expense</h2>
            <label style={styles.label} htmlFor="expenseTitle">Expense Title:</label>
            <input type="text" id="expenseTitle" value={expenseTitle} onChange={handleExpenseChange} style={styles.input} />
            <label style={styles.label} htmlFor="amount">Amount:</label>
            <input type="number" id="amount" value={amount} onChange={handleAmountChange} style={styles.input} />
            <button type="button" style={styles.button} onClick={addExpense}>Add Expense</button>
            <button type="button" style={styles.button} onClick={resetAll}>Reset All</button>
          </div>
        </div>

        <div style={{ ...styles.column, ...styles.box }}>
          <div style={styles.summary}>
            <div style={styles.summaryBox}>Total Budget: {totalBudget}</div>
            <div style={styles.summaryBox}>Total Expenses: {totalExpenses}</div>
            <div style={styles.summaryBox}>Budget Left: {budgetLeft}</div>
          </div>

          <h2>Expense History:</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.thtd}>Expense Name</th>
                <th style={styles.thtd}>Amount</th>
                <th style={styles.thtd}>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td style={styles.thtd}>{expense.title}</td>
                  <td style={styles.thtd}>{expense.amount}</td>
                  <td style={styles.thtd}>
                    <button style={styles.actionButton} onClick={() => deleteExpense(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Expense;
