import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CouponCard = ({ coupon }) => {
  return (


    <div className="card w-full  h-full bg-base-100 shadow-xl border-2 rounded-md hover:scale-[1.05] transition-all">
      <div className='flex flex-col gap-2 w-full'>        
        <div className='font-semibold text-lg'>Coupon Code : {coupon?.code}</div>
        {/* <div className='font-light text-neutral-500'>{apartment?.apartment_no}</div> */}
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>Discount :  {coupon?.discount} %</div>
          
        </div>
      </div>
      </div>
   
  )
}

CouponCard.propTypes = {
    coupon: PropTypes.object,
}

export default CouponCard