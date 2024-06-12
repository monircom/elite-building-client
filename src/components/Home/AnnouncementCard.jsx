
import PropTypes from 'prop-types'

const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="card w-full  h-full bg-base-100 shadow-xl border-2 rounded-md hover:scale-[1.05] transition-all m-8 p-10">
      <div className='flex flex-col gap-2 w-full'>        
        <div className='font-semibold text-lg'>Title : {announcement?.title}</div>
        {/* <div className='font-light text-neutral-500'>{apartment?.apartment_no}</div> */}
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>Description :  {announcement?.description} %</div>
          
        </div>
      </div>
      </div>
   
  )
}

AnnouncementCard.propTypes = {
  announcement: PropTypes.object,
}

export default AnnouncementCard