import React, { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true; // Optional if you're using cookies
import { useAppContext } from "../context/AppContext";
const AddressForm = ({ userId }) => {
  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const {navigate , user} = useAppContext()



  const [allAddresses, setAllAddresses] = useState([]);

  const handleChange = (e) => {
     setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://newgroceryserver.onrender.com/api/address/add", {
        address
      });
    if(data.success){
      alert(data.message)
    }     
     
      // fetchAddresses();
    } catch (error) {
      alert("Error submitting address");
      console.log(error);
    }
  };

  // const fetchAddresses = async () => {
  //   try {
  //     const { data } = await axios.post("/api/address/get", { userId });
    

  //     if (data.success) {
  //       setAllAddresses(data.address);
  //     }
  //   } catch (error) {
  //     console.log("Fetch Error:", error.message);
  //   }
  // };

  useEffect(() => {
    console.log(user,"kkkknknknk");
    
    if (!user) {
     navigate('/addtocart')
     alert("login please")     

     
    }
  }, [userId]);

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Add Address</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {[
          "firstname",
          "lastname",
          "email",
          "street",
          "city",
          "state",
          "zipcode",
          "country",
          "phone"
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={address[field]}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        ))}
        <button
          type="submit"
          className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <h3 className="text-xl mt-6 font-semibold">Saved Addresses</h3>
      <ul className="mt-2 space-y-2">
        {allAddresses.map((addr) => (
          <li
            key={addr._id}
            className="p-3 border rounded bg-gray-50 shadow-sm"
          >
            <p>
              <strong>{addr.firstname} {addr.lastname}</strong> ({addr.email})
            </p>
            <p>{addr.street}, {addr.city}, {addr.state}, {addr.zipcode}</p>
            <p>{addr.country} - 📞 {addr.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressForm;
