import { useEffect, useState } from 'react'
import Card from './Card'
import Container from '../Shared/Container'
import Heading from '../Shared/Heading'
import LoadingSpinner from '../Shared/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import useAxiosCommon from '../../hooks/useAxiosCommon'

const Rooms = () => {
  
  const axiosCommon = useAxiosCommon() 
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ['apartments'],
    queryFn: async () => {      
      const { data } = await axiosCommon.get(`/apartments`)
      return data
    },
  })
  if (isLoading) return <LoadingSpinner />

  return (
    <Container>
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Featured Apartment </h1>        
      </div>
      {apartments && apartments.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
          {/* {apartments.map(apartment => (
            <Card key={apartment._id} apartment={apartment} />
          ))} */}
        {apartments?.length > 6
              ? apartments?.slice(0, 6)
                  .map((apartment) => <Card key={apartment._id} apartment={apartment} />)
              : apartments?.map((apartment) => (
                <Card key={apartment._id} apartment={apartment} />
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
    </Container>
  )
}

export default Rooms
