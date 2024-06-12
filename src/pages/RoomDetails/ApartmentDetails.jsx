import Container from '../../components/Shared/Container'
import { Helmet } from 'react-helmet-async'
//import RoomReservation from '../../components/RoomDetails/RoomReservation'
import Heading from '../../components/Shared/Heading'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import Button from '../../components/Shared/Button/Button'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import useAxiosSecure from '../../hooks/useAxiosSecure'


const ApartmentDetails = () => {
  const { id } = useParams()
  const axiosCommon = useAxiosCommon()
  const { user } = useAuth()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()

  const {
    data: apartment = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['apartment', id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/apartment/${id}`)
      return data
    },
  })

    // {
    //     "apartment_image": "https://i.ibb.co/fSMfT2P/5.jpg",
    //     "floor_no": "1st Floor",
    //     "block_name": "A",
    //     "apartment_no": "101",
    //     "rent": 1000
    // },

    const {
      _id,
      apartment_image,
      floor_no,
      block_name,
      apartment_no,   
      rent,         
    } = apartment || {}  
  
    const handleFormSubmission = async e => {
      
      e.preventDefault()
      
      //const form = e.target  
      const postId = _id   
      
      //const deadline = startDate
      const email = user?.email
      const name = user?.displayName
      //const Organizer_email = Organizer?.email
      const status = 'pending'
  
      const appliedData = {
        postId,
        apartment_image,      
        floor_no,      
        block_name,
        apartment_no,  
        rent,      
        email,
        name, 
        status,     
      }
  
      console.log(appliedData);
      //return;
      try {
        const { data } = await axiosSecure.post(`/applied`, appliedData)
        console.log(data)
        toast.success('Requested Successfully!')
        navigate('/dashboard')
      } catch (err) {
        toast.success(err.response.data)
        e.target.reset()
      }
    }




  if (isLoading) return <LoadingSpinner />
  console.log(apartment)
  return (
    <Container>
      <Helmet>
        <title>Apartment No - {apartment?.apartment_no}</title>
      </Helmet>
      {apartment && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div>
              <Heading title={apartment?.floor_no} subtitle={apartment?.block_name} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={apartment?.apartment_image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            {/* Apartment Info */}           
            <div className='md:col-span-3 order-first md:order-last mb-10'>
              {/* Agreement */}              
              <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {apartment?.rent}</div>
        <div className='font-light text-neutral-600'>Month</div>
      </div>
      <hr />
      <div className='flex justify-center'>{/* Calender */}</div>
      <hr />
      <div className='p-4'>
        <Button onClick={handleFormSubmission} label={'Agreement'} />
      </div>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        
      </div>
    </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  )
}

export default ApartmentDetails
