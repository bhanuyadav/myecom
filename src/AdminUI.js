import React, { useState } from "react";
// import axios from "../../../node_modules/axios";
//import axios from "../../../node_modules/axios";
//import "./NewProduct1.css";
import axios from 'axios';

function AdminUI({ addProduct }) {
  const [productData, setProductData] = useState({
    name: "",
    photo: "",
    price: "",
    category: "",
    description: "",
  });

  const onChange = (e) =>
    setProductData({ ...productData, [e.target.name]: e.target.value });

  const post = productData;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:8000/api/product/create/6049c84a96c63034208b0f85",
        { post },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Add Products</h1>

        <div className="NewPost">
          <div>
            <label>Product Name : </label>
            <br />
            <input type="text" name="name" onChange={onChange} />
          </div>
          <div>
            <label>Image-Path : </label>
            <br />
            <input type="text" name="photo" onChange={onChange} />
          </div>

          <div>
            <label>Price : </label>
            <br />
            <input type="text" name="price" onChange={onChange} />
          </div>

          <div>
            <label>Description </label>
            <br />
            <input type="text" name="description" onChange={onChange} />
          </div>

          <div>
            <label>Category : </label>
            <br />
            <input type="text" name="category" onChange={onChange} />
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdminUI;
