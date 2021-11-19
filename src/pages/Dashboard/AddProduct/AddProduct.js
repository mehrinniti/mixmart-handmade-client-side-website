import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://sheltered-spire-26258.herokuapp.com/allProducts', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    };
    return (
        <div className="product-form">
            <h2>Add Product Here</h2>
            <form className="input-form-box" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <br />
                <textarea {...register("description")} placeholder="description" />
                <br />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img url" />
                <input style={{ backgroundColor: "#e2aaa1", color: "white", borderRadius: "5px", marginRight: "5px", border: 0, padding: "4px 0" }} type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;