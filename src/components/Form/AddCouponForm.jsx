
// {
//     "_id": ObjectId("60d5f83f5311236168a109cf"),
//     "code": "SUMMER21",
//     "discount": 0.15,
//     "description": "15% off on June rent",
//     "validUntil": ISODate("2024-06-30T00:00:00Z")
//   }
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddCouponForm = ({endDate,setEndDate,handleSubmit}) => {
    //const [endDate, setEndDate] = useState(new Date())
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='code' className='block text-gray-600'>
                Code
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='code'
                id='code'
                type='text'
                placeholder='Code'
                required
              />
            </div>
            <div className='space-y-1'>
            <label htmlFor='code' className='block text-gray-600'>
                End Date
              </label>
              <label className="input-group">
               {/* Date Picker Input Field */}
              <DatePicker
                className='border p-2 rounded-md bg-white'
                selected={endDate}                
                onChange={date => setEndDate(date)}
              />
              </label>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='discount' className='block text-gray-600'>
              Discount
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='discount'
                id='discount'
                type='number'
                placeholder='Discount'
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
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Save & Continue
        </button>
      </form>
    </div>
  )
}

export default AddCouponForm