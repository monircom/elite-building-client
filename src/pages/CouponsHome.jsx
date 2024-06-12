import React from 'react';
import Container from '../components/Shared/Container';
import useAxiosCommon from '../hooks/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
import Heading from '../components/Shared/Heading';
import CouponCard from '../components/Home/CouponCard';

const CouponsHome = () => {
    const axiosCommon = useAxiosCommon() 
    const { data: coupons = [], isLoading } = useQuery({
      queryKey: ['coupons'],
      queryFn: async () => {      
        const { data } = await axiosCommon.get(`/coupons`)
        return data
      },
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <Container>
       
           <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex flex-col justify-center items-center mt-5">
        <h1 className="text-3xl font-bold">Coupons </h1>        
      </div>
      <div className='mb-10'>
      {coupons && coupons.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {coupons.map(coupon => (
            
            <CouponCard key={coupon._id} coupon={coupon} />
          ))}          
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
          <Heading
            center={true}
            title='No Apartment Available'
            //subtitle='Please Select Other Categories.'
          />
        </div>
      )}
      </div>
        
        </Container>
    );
};

export default CouponsHome;