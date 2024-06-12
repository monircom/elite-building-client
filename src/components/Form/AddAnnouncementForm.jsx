
// {
//     "_id": ObjectId("60d5f83f5311236168a109cf"),
//     "code": "SUMMER21",
//     "discount": 0.15,
//     "description": "15% off on June rent",
//     "validUntil": ISODate("2024-06-30T00:00:00Z")
//   }
import { useState } from 'react'
import { TbFidgetSpinner } from 'react-icons/tb'

const AddCouponForm = ({handleSubmit,loading}) => {
    //const [endDate, setEndDate] = useState(new Date())
  return (
    <div className='w-full  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
            
          </div>

        </div>

        <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            <TbFidgetSpinner className='animate-spin m-auto' />
          ) : (
            'Add Announcement'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddCouponForm