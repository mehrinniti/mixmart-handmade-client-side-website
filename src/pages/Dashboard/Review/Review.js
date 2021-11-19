import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.email = user.email;
        axios.post('https://sheltered-spire-26258.herokuapp.com/review', data)
            .then(result => {
                if (result.data.insertedId) {
                    alert('Review Submitted Successfully');
                    reset();
                }
            });
    };
    return (
        <div>
            <h1 className="head-title">Give A Review</h1>
            <div className="add-service-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter your name" defaultValue={user?.displayName} {...register("name")} />
                    <input placeholder="Enter your rating out of 5" {...register("rating")} />
                    <textarea placeholder="Write your massage in 50 words" {...register("description")} cols="10" rows="5"></textarea>
                    <input type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default Review;