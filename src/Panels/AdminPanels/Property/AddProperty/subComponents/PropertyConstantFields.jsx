import React from 'react';
import BuyNow from './buyComponent';
import RentProperty from './rentComponent';
import PlotCompo from './plotCompo';
import CommercialComponent from './commercialComponent';

const PropertyConstantFields = ({ formData, setFormData, locations, handleFormSubmit}) => {
    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-lg rounded-4 p-4">
                    <h4 className="text-center mb-4 fw-bold">Add Property</h4>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Title / Short Description</label>
                            <input 
                                className="form-control" 
                                value={formData.title}
                                onChange={e => setFormData({ ...formData, title: e.target.value })} 
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Location</label>
                            <select
                                className="form-select"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            >
                                <option value="">Select Location</option>
                                {locations.map(loc => (
                                    <option key={loc} value={loc}>{loc}</option>
                                ))}
                            </select>
                        </div>

                        <div className="row mb-3">
                                <div className="col">
                                        <label className="form-label">Latitude</label>
                                        <input 
                                        className="form-control" 
                                        value={formData.latitude}
                                        onChange={e => setFormData({ ...formData, latitude: e.target.value })} />
                                </div> 

                                <div className="col">
                                    <label className="form-label">Longitude</label>
                                    <input className="form-control" value={formData.longitude}
                                     onChange={e => setFormData({ ...formData, longitude: e.target.value })} />
                                </div>  
                               
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image Uploads</label>
                            <input type="file" className="form-control" multiple
                                onChange={e => setFormData({ ...formData, images: [...e.target.files] })} />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">General Description</label>
                            <textarea 
                                className="form-control" 
                                rows="4"
                                value={formData.description}
                                onChange={e => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>
      
                        <div className="mb-3 col-lg-4">
                            <label className="form-label">Select Property Type</label>
                            <select className="form-select" 
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}>
                                <option value="buy">Buy</option>
                                <option value="rent">Rent</option>
                                <option value="plot">Plot</option>
                                <option value="commercial">Commercial</option>
                            </select>                             
                        </div>

                        {/* buy section starts here */}
                            {
                                formData.propertyType == 'buy' && (
                                    <BuyNow
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )
                            }

                        {/* buy section ends here */}


                        {/* rent section starts here */}
                            {
                                formData.propertyType == 'rent' && (
                                    <RentProperty
                                        formData={formData}
                                        setFormData={setFormData}
                                    />
                                )
                            }
                        {/* rent section ends here */}


                        {/* plot section starts here */}
                            {
                                formData.propertyType == 'plot' && (
                                    <>
                                      <PlotCompo
                                        formData={formData}
                                        setFormData={setFormData}
                                      />
                                    </>
                                )
                            }
                          
                        {/* plot section ends here */}

      
                        {/* commercial section ends here */}
                            {
                                formData.propertyType == 'commercial' && (
                                    <>
                                      <CommercialComponent
                                        formData={formData}
                                        setFormData={setFormData}
                                      />
                                    </>
                                )
                            }
                        {/* commercial section ends here */}
                      
                      
                    </form>
                </div>
            </div>
        </>
    );
};

export default PropertyConstantFields;
