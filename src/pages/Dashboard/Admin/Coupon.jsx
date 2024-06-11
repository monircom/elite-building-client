import React, { useState } from 'react';
import AddCouponForm from '../../../components/Form/AddCouponForm';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';
import useAxiosSecure, { axiosSecure } from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const Coupon = () => {
    const [endDate, setEndDate] = useState(new Date())
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    
  const { mutateAsync } = useMutation({
    mutationFn: async couponData => {
      const { data } = await axiosSecure.post(`/coupon`, couponData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Coupon Added Successfully!')
      navigate('/dashboard/coupon')
      setLoading(false)
    },
  })


  //   Fetch Coupon Data
  const {
    data: coupons = [],    isLoading,    refetch,  } = useQuery({
    queryKey: ['my-coupons', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-coupons/${user?.email}`)      
      return data
    },
  })

  console.log(coupons);

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
        const email = user?.email;

        try{
            const couponData ={
                code,discount,description,validUntil,email
            }

            console.table(couponData);
            //   Post request to server
            await mutateAsync(couponData)

        }
        catch(err){
            console.log(err)
            setLoading(false)
        }
   
    }


    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <Helmet>
                Coupons | Dashboard
            </Helmet>
            <h1>Coupon</h1>
            <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Code
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Discount
                    </th>
                    
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                    End Date
                    </th>                    
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {coupons.map(coupon => (
                    <p key={coupon._id}>{coupon.code}</p>
                    // <RoomDataRow
                    //   key={room._id}
                    //   room={room}
                    //   handleDelete={handleDelete}
                    //   refetch={refetch}
                    // />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
            <AddCouponForm endDate={endDate} setEndDate={setEndDate}   handleSubmit={handleSubmit} loading={loading}></AddCouponForm>
        </div>
    );
};

export default Coupon;