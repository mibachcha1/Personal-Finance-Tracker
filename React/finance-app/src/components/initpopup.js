import React, { useState } from 'react'
import '../App.css'

const InitPopup = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        starting_balance: '',
        goal_balance: ''
    });

    // setFormData(formData1)

    const handleInputChange = (event) => {
        const value = event.target.value
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

            <button type="button" className="circular-button circular-button-1" data-bs-toggle="modal" data-bs-target="#updateUserModal">
                +
            </button>

            <div className="modal fade" id="updateUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-white bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Starting Information</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="starting_balance" className="form-label">
                                        Starting Balance
                                    </label>
                                    <input type="text" className="form-control bg-dark text-white" id="starting_balance" name="starting_balance" onChange={handleInputChange} value={formData.starting_balance} />
                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="goal_balance" className="form-label">
                                        Goal Balance
                                    </label>
                                    <input type="text" className="form-control bg-dark text-white" id="goal_balance" name="goal_balance" onChange={handleInputChange} value={formData.goal_balance} />
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

export default InitPopup;