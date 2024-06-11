import React, { useState } from 'react';
import AddCouponForm from '../../../components/Form/AddCouponForm';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure, { axiosSecure } from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Coupon = () => {
    const [endDate, setEndDate] = useState(new Date())
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    //const { user } = useAuth()
    
  const { mutateAsync } = useMutation({
    mutationFn: async couponData => {
      const { data } = await axiosSecure.post(`/coupon`, couponData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Coupon Added Successfully!')
      Navigate('/dashboard/coupons')
      setLoading(false)
    },
  })


    // Form Handler
    const handleSubmit = async e =>{
        e.preventDefault()
        setLoading(true)
        const form = e.target
        console.log(form);
        const code = form.code.value
        const discount = form.discount.value
        const description = form.description.value
        const validUntil = endDate;

        try{
            const couponData ={
                code,discount,description,validUntil
            }

            console.log(couponData);
            //   Post request to server
            await mutateAsync(couponData)

        }
        catch(err){
            console.log(err)
        }
   
    }


    return (
        <div>
            <Helmet>
                Coupons | Dashboard
            </Helmet>
            <h1>Coupon</h1>
            <AddCouponForm endDate={endDate} setEndDate={setEndDate}   handleSubmit = {handleSubmit}></AddCouponForm>
        </div>
    );
};

export default Coupon;