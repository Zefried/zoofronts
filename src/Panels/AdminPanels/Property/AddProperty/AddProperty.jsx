import React, { useState } from 'react';
import PropertyConstantFields from './subComponents/PropertyConstantFields';

const AddProperty = () => {
    
    const [formData, setFormData] = useState({
        // static fields
        propertyType: 'buy',
        title: '',
        location: '',
        latitude: '',
        longitude: '',
        description: '',
        images: [],

        // shared fields
        bedroomsNo: '',
        bathroomsNo: '',
        floor: '',
        builtUpArea: '',
        carpetArea: '',
        furnishing: '',

        // buy specific
        expectedPrice: '',

        // rent specific
        preferredTenant: '',
        availableFrom: '',
        monthlyRent: '',
        securityDeposit: '',
        brokerage: '',

        // optional
        overheadMap: '',

        // plot & commercial
        plotType:'',
        commercialType:'',


    });

    const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston']; // Example locations

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to the backend)
        console.log('Form Submitted:', formData);
    };


    console.log(formData, 'abc');
    
    return (
        <>
            <PropertyConstantFields 
                formData={formData} 
                setFormData={setFormData} 
                locations={locations}
                handleFormSubmit={handleFormSubmit} 
            />
        </>
    );
};

export default AddProperty;
