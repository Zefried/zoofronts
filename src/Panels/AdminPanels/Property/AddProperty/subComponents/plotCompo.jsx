import React from 'react';

const PlotCompo = ({ formData, setFormData }) => {
    return (
        <>
        <h4 className="text-center mb-4 fw-bold">Buy Plot Fields</h4>

        <div className="container mt-4">
            <div className="mb-3">
                <label className="form-label">Plot Type</label>
                <select
                    className="form-select col-lg-5"
                    name="plotType"
                    value={formData.plotType}
                    onChange={(e) => setFormData({ ...formData, plotType: e.target.value })}
                >
                    <option value="">Select</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                    className="form-control col-lg-5"
                    rows="4"
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>
        </div>

            
        <div className="d-flex justify-content-center mt-4">
            
            <button type="submit" className="btn btn-outline-primary btn-lg w-50 text-center">
                Submit
            </button>
                                
        </div>
           
        </>
    );
};

export default PlotCompo;
