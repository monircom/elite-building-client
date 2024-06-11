import PropTypes from 'prop-types'
import { format } from 'date-fns'
import DeleteModal from '../../Modal/DeleteModal'
import { useState } from 'react'

const CouponDataRow = ({ coupon, handleDelete, refetch }) => {
    // for delete modal
  const [isOpen, setIsOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{coupon?.code}</p>      
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <p className='text-gray-900 whitespace-no-wrap'>{coupon?.discount}%</p>      
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{coupon?.description}</p>
      </td>
     
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
            
          {format(new Date(coupon?.validUntil), 'P')}
        </p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <button
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delete</span>
        </button>
       {/* Delete modal */}
       <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={coupon?._id}
        />
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </span>
        {/* Update Modal */}
      </td>
    </tr>
  )
}

CouponDataRow.propTypes = {
  coupon: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default CouponDataRow