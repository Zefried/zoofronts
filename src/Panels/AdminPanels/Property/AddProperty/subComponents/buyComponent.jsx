import React, { useState } from 'react';

const BuyNow = ({ formData, setFormData }) => {
    const [steps, setSteps] = useState(0);
    
    function nextStep() {
        if (steps < 1) setSteps(steps + 1);
    }

    function prevStep() {
        if (steps > 0) setSteps(steps - 1);
    }

    
    const StepOne = () => (
        <>
            <div className="mb-3">
                <label className="form-label">Bedrooms</label>
                <input type="number" className="form-control" name="bedroomsNo" value={formData.bedroomsNo} onChange={(e) => setFormData({ ...formData, bedroomsNo: e.target.value })} />
            </div>

            <div className="mb-3">
                <label className="form-label">Bathrooms</label>
                <input type="number" className="form-control" name="bathroomsNo" value={formData.bathroomsNo} onChange={(e) => setFormData({ ...formData, bathroomsNo: e.target.value })} />
            </div>

            <div className="mb-3">
                <label className="form-label">Floor</label>
                <input type="text" className="form-control" name="floor" value={formData.floor} onChange={(e) => setFormData({ ...formData, floor: e.target.value })} />
            </div>

            <div className="mb-3">
                <label className="form-label">Built-up Area (Sqft)</label>
                <input type="text" className="form-control" name="builtUpArea" value={formData.builtUpArea} onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })} />
            </div>
        </>
    );

    const StepTwo = () => (
        <>
            <div className="mb-3">
                <label className="form-label">Carpet Area</label>
                <input type="text" className="form-control" name="carpetArea" value={formData.carpetArea} onChange={(e) => setFormData({ ...formData, carpetArea: e.target.value })} />
            </div>

            <div className="mb-3">
                <label className="form-label">Furnishing</label>
                <select className="form-select" name="furnishing" value={formData.furnishing} onChange={(e) => setFormData({ ...formData, furnishing: e.target.value })}>
                    <option value="">Select</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Fully Furnished">Fully Furnished</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Expected Price</label>
                <input type="text" className="form-control" name="expectedPrice" value={formData.expectedPrice} onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })} />
            </div>

            <div className="mb-3">
                <label className="form-label">Overhead Map (Optional)</label>
                <input type="text" className="form-control" name="overheadMap" value={formData.overheadMap} onChange={(e) => setFormData({ ...formData, overheadMap: e.target.value })} />
            </div>
        </>
    );

    return (
        <>
            {formData.propertyType === 'buy' && (
                <div className="container mt-4">
                    <h4 className="text-center mb-4 fw-bold">Buy Property Fields</h4>
                    {steps === 0 && <StepOne />}
                    {steps === 1 && <StepTwo />}

                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn btn-secondary" onClick={prevStep} disabled={steps === 0}>Prev</button>
                        <button className="btn btn-primary" onClick={nextStep} disabled={steps === 1}>Next</button>
                    </div>
                </div>
            )}

            
            <div className="d-flex justify-content-center mt-4">
                {   
                    steps === 1 && (
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

export default BuyNow;
