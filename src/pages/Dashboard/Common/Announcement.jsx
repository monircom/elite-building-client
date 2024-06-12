import React from 'react';


import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import Heading from '../../../components/Shared/Heading';
import AnnouncementCard from '../../../components/Home/AnnouncementCard';
import Container from '../../../components/Shared/Container';
import useAxiosCommon from '../../../hooks/useAxiosCommon';


const Announcement = () => {
    const axiosCommon = useAxiosCommon() 
    const { data: announcements = [], isLoading } = useQuery({
      queryKey: ['announcements'],
      queryFn: async () => {      
        const { data } = await axiosCommon.get(`/announcements`)
        return data
      },
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <Container>
       
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex flex-col justify-center items-center mt-5">
        <h1 className="text-3xl font-bold">Announcements </h1>        
      </div>
      <div className='mb-20'>
      {announcements && announcements.length > 0 ? (
        <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8'>
          {announcements.map(announcement => (
            <AnnouncementCard key={announcement._id} announcement={announcement} />
            
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

export default Announcement;