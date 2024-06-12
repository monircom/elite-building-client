import React, { useState } from 'react';
import AddAnnouncementForm from '../../../components/Form/AddAnnouncementForm';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import AnnouncementsDataRow from '../../../components/Dashboard/TableRows/AnnouncementsDataRow';

const Announcements = () => {
    //const [endDate, setEndDate] = useState(new Date())
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    
  const { mutateAsync } = useMutation({
    mutationFn: async announcementData => {
      const { data } = await axiosSecure.post(`/announcement`, announcementData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Announcement Added Successfully!')
      refetch();
      navigate('/dashboard/admin-announcement')
      setLoading(false)
    },
  })
    // Form Handler
    const handleSubmit = async e =>{
        e.preventDefault()
        setLoading(true)
        const form = e.target
        console.log(form);
        const title = form.title.value        
        const description = form.description.value        
        const email = user?.email;

        try{
            const announcementData ={
              title,description,email
            }

            console.table(announcementData);
            //   Post request to server
            await mutateAsync(announcementData)

        }
        catch(err){
            console.log(err)
            setLoading(false)
        }   
    }


  //   Fetch announcement Data
  const {
    data: announcements = [],    isLoading,    refetch,  } = useQuery({
    queryKey: ['my-announcements', user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/my-announcements/${user?.email}`)      
      return data
    },
  })
  console.log(announcements);    


  //  Handle Delete
  const handleDelete = async id => {
    console.log(id)
    try {
        axiosSecure.delete(`/announcement/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('Successfully Announcement deleted.')
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
            Announcements | Dashboard
            </Helmet>
            
            <div className='container mx-auto px-4 sm:px-8'>
            <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex flex-col justify-center items-center mt-5">
        <h1 className="text-3xl font-bold">Announcements </h1>        
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
                      Title
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

                  {announcements.map(announcement => (
                    
                    <AnnouncementsDataRow                   
                      key={announcement._id}
                      announcement={announcement}
                      handleDelete={handleDelete}                      
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <AddAnnouncementForm handleSubmit={handleSubmit} loading={loading}></AddAnnouncementForm>
      </div>
            
        </div>
    );
};

export default Announcements;