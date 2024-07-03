import React from 'react'

const Transactions = ({ transactions, handleDeleteMain }) => {
  const handleDelete = (id) => {
    // event.preventDefault();
    handleDeleteMain(id)
  }

  return (
    <>
      <div className='container'>
        <h3 className="mt-5 font-weight-bolder" style={{ color: "#e0e1dd", fontWeight: "800" }}>Transactions</h3>
        <hr />
        <table class="table table-striped table-dark table-bordered">
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
                <td style={{ fontWeight: 'bolder' }}>${transaction.amount}</td>
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