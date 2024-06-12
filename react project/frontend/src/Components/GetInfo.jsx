import React, { useState } from 'react';

const GetInfo = ({ closeModal }) => {

    const [typeOfBuilding, setTypeOfBuilding]= useState("Residential");

    const changeBuildingTypeHandler=()=>{
        setTypeOfBuilding("Commercial");
    }


    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl">General Information</h2>
                <button onClick={closeModal} className="text-2xl">&times;</button>
            </div>
            <div className="mt-4">
                <label htmlFor='dropdown' className="block text-lg mb-2">Where did you hear about us?</label>
                <select id='dropdown' className="w-full p-2 border rounded-lg mb-4">
                    <option value="" disabled>Please tell us</option>
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                    <option value="instagram">Instagram</option>
                </select>
            </div>
            <div>
                <button>Residential</button>
                <button onClick={changeBuildingTypeHandler}>Commercial</button>
            </div>
            {
                typeOfBuilding==="Residential"?
                <div>
                <div className="mt-4">
                <select id='dropdown2' className="w-full p-2 border rounded-lg mb-4">
                    <option value="" disabled>No. of floors above ground</option>
                    <option value="1 story">1 story</option>
                    <option value="2 story">2 story </option>
                    <option value="3 story">3 story</option>
                </select>
                </div>

                </div> :
                <div>
                    <input type="text" placeholder='company name'/>
                    <div className="mt-4">
                <select id='dropdown2' className="w-full p-2 border rounded-lg mb-4">
                    <option value="" disabled>No. of floors above ground</option>
                    <option value="1 story">1 story</option>
                    <option value="2 story">2 story </option>
                    <option value="3 story">3 story</option>
                </select>
                </div>
                </div>
            }
           

            <div className="flex justify-between mt-4">
                <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Back
                </button>
                <button onClick={closeModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Next
                </button>
            </div>

        </div>
    );
};

export default GetInfo;
