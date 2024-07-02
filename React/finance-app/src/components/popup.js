import React, {useState} from 'react'
import api from '../api';
import '../App.css'

const Popup = ({ onSubmit }) => {
    const [formData,setFormData] = useState({
        amount: '',
        category: '',
        description: '',
        is_income: false,
        date: ''
      });
    

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData({
      ...formData,
      [event.target.name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <div>

        <button type="button" className="circular-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            +
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Transaction</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 mt-3">
                                <label htmlFor="amount" className="form-label">
                                    Amount
                                </label>
                                <input type="text" className="form-control" id="amount" name="amount" onChange={handleInputChange} value={formData.amount}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">
                                    Category
                                </label>
                                <input type="text" className="form-control" id="category" name="category" onChange={handleInputChange} value={formData.category}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                    Description
                                </label>
                                <input type="text" className="form-control" id="description" name="description" onChange={handleInputChange} value={formData.description}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="is_income" className="form-label m-2 mr-0">
                                    Income?
                                </label>
                                <input type="checkbox" id="is_income" name="is_income" onChange={handleInputChange} value={formData.is_income}/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">
                                    Date
                                </label>
                                <input type="text" className="form-control" id="date" name="date" onChange={handleInputChange} value={formData.date}/>
                            </div>

                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popup;