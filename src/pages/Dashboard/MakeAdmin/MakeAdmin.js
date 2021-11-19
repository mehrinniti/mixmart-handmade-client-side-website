import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm()
    const MakeAdminHandle = data => {
        axios.put('http://localhost:5000/users/admin', data)
            .then(result => {
                if (result.data.modifiedCount) {
                    alert('Make Admin Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <h1>Make A Admin</h1>
            <div className="text-center">
                <form className="input-form-box" onSubmit={handleSubmit(MakeAdminHandle)}>
                    <input className="make-admin-input" type="email" placeholder="Enter your admin email" {...register('email')} required /><br />
                    <input className="common-button" type="submit" value='Make Admin' />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;