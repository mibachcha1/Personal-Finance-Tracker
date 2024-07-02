import React from 'react'
import api from '../api'

const Transactions = ({transactions, handleDeleteMain}) => {
  const handleDelete = (id) => {
    // event.preventDefault();
    handleDeleteMain(id)
  }

  return (
    <>
        <div className='container'>
        <h3 className="mt-5 font-weight-bolder" style={{ color: "black", fontWeight:"800" }}>Transactions</h3>
          <hr/>
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Income?</th>
                <th>Amount</th>
                <th>Options</th>
              </tr>
            </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.is_income ? 'Yes' : 'No'}</td>
                    <td style={{fontWeight:'bolder'}}>${transaction.amount}</td>
                    <td>
                      <button onClick={() => handleDelete(transaction.id)} className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
    </>
  )
}

export default Transactions