import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ apartment }) => {
  return (
    <Link to={`/apartment/${apartment?._id}`} className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={apartment?.apartment_image}
            alt='Room'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>Apartment No : {apartment?.apartment_no}</div>
        {/* <div className='font-light text-neutral-500'>{apartment?.apartment_no}</div> */}
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>Rent : $ {apartment?.rent}</div>
          <div className='font-light'>Month</div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  apartment: PropTypes.object,
}

export default Card

  // "apartment_image": "https://i.ibb.co/fSMfT2P/5.jpg",
  //       "floor_no": 1,
  //       "block_name": "A",
  //       "apartment_no": "101",
  //       "rent": 1000
