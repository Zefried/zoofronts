import React, { useState } from 'react';

const CommercialComponent = ({ formData, setFormData }) => {
    const [step, setStep] = useState(0);

    const next = () => step < 1 && setStep(step + 1);
    const prev = () => step > 0 && setStep(step - 1);

    const StepOne = () => (
        <>
            <div className="mb-3">
                <label className="form-label">Property Type</label>
                <select
                    className="form-select"
                    name="commercialType"
                    value={formData.commercialType}
                    onChange={(e) => setFormData({ ...formData, commercialType: e.target.value })}
                >
                    <option value="">Select</option>
                    <option value="Warehouse">Warehouse</option>
                    <option value="Office">Office</option>
                    <option value="Coworking">Coworking</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Furnishing</label>
                <select
                    className="form-select"
                    name="furnishing"
                    value={formData.furnishing}
                    onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}
                >
                    <option value="">Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Fully Furnished">Fully Furnished</option>
                </select>
            </div>
        </>
    );

    const StepTwo = () => (
        <>
            <div className="mb-3">
                <label className="form-label">Available From</label>
                <input
                    type="date"
                    className="form-control col-lg-5"
                    name="availableFrom"
                    value={formData.availableFrom}
                    onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Monthly Rent</label>
                <input
                    type="text"
                    className="form-control col-lg-5"
                    name="monthlyRent"
                    value={formData.monthlyRent}
                    onChange={(e) => setFormData({ ...formData, monthlyRent: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Security Deposit</label>
                <input
                    type="text"
                    className="form-control col-lg-5"
                    name="securityDeposit"
                    value={formData.securityDeposit}
                    onChange={(e) => setFormData({ ...formData, securityDeposit: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Brokerage</label>
                <select
                    className="form-control col-lg-5"
                    name="brokerage"
                    value={formData.brokerage}
                    onChange={(e) => setFormData({ ...formData, brokerage: e.target.value })}
                >
                    <option value="">Select</option>
                    <option value="15 Days">15 Days</option>
                    <option value="30 Days">30 Days</option>
                </select>
            </div>
        </>
    );

    return (
        <>
            <div className="container mt-4">
                <h4 className="text-center mb-4 fw-bold">Commercial Property Fields</h4>
                {step === 0 && <StepOne />}
                {step === 1 && <StepTwo />}

                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-secondary" onClick={prev} disabled={step === 0}>Prev</button>
                    <button className="btn btn-primary" onClick={next} disabled={step === 1}>Next</button>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
                {   
                    step === 1 && (
                        <>
                         <button type="submit" className="btn btn-outline-primary btn-lg w-50 text-center">
                            Submit
                        </button>
                        </>
                    )
                }
               
            </div>
        </>
    );
};

export default CommercialComponent;
