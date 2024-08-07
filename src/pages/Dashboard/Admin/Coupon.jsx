import React, { useState } from 'react';
import AddCouponForm from '../../../components/Form/AddCouponForm';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import CouponDataRow from '../../../components/Dashboard/TableRows/CouponsDataRow';

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
      refetch();
      navigate('/dashboard/coupon')
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


  //  Handle Delete
  const handleDelete = async id => {
    console.log(id)
    try {
        axiosSecure.delete(`/coupon/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('Successfully Coupon deleted.')
                        }
                    })
      
    } catch (err) {
      console.log(err)
    }
  } 


    if (isLoading) return <LoadingSpinner />

    return (
        <div>
            <Helmet>
                Coupons | Dashboard
            </Helmet>
            
            <div className='container mx-auto px-4 sm:px-8'>
            <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex flex-col justify-center items-center mt-5">
        <h1 className="text-3xl font-bold">Coupons </h1>        
      </div>
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
                      Description
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
                    {/* <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}

                  {coupons.map(coupon => (
                    
                    <CouponDataRow                    
                      key={coupon._id}
                      coupon={coupon}
                      handleDelete={handleDelete}                      
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddCouponForm endDate={endDate} setEndDate={setEndDate}   handleSubmit={handleSubmit} loading={loading}></AddCouponForm>
      </div>
            
        </div>
    );
};

export default Coupon;