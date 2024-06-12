import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFingerprint, BsFillHouseAddFill } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { RiCoupon2Line } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdHomeWork } from 'react-icons/md'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import useRole from '../../../hooks/useRole'
import toast from 'react-hot-toast'

const Sidebar = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading] = useRole()
  console.log(role, isLoading)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  function handleLogOut() {
    logOut()
      .then(() => {
        toast.error("User Logged out", {
          duration: 2000,
          position: "top-center",
        });
        setTimeout(function () {
          navigate("/");
        }, 2500);
        console.log("user Logged out successfully");
      })
      .catch((error) => console.error(error));
  }




  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          <Link to='/'>
            <div className='flex flex-row'>
              <img
                // className='hidden md:block'
                src='https://i.ibb.co/qkBGsdv/logo.png'
                alt='logo'
                width='70'
                height='100'
              />
              <button className='text-2xl font-extrabold'> Elite Building</button>
              </div>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
            <Link to='/'>
            <div className='flex flex-row'>
              <img
                // className='hidden md:block'
                src='https://i.ibb.co/qkBGsdv/logo.png'
                alt='logo'
                width='70'
                height='100'
              />
              <button className='text-2xl font-extrabold'> Elite Building</button>
              </div>
            </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>

              {/* Profile Menu */}
          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Profile</span>
          </NavLink>
          
              {/* Statistics */}
              {/* <NavLink
                to='statistics'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <BsGraphUp className='w-5 h-5' />
                <span className='mx-4 font-medium'>Statistics</span>
              </NavLink> */}

              {/* Announcement */}
              {role === 'User' && 
              <NavLink
                to='announcement'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <TfiAnnouncement className='w-5 h-5' />

                <span className='mx-4 font-medium'>Announcement</span>
              </NavLink>
              }
            
              {/* Announcement */}
              {role === 'Member' && 
              <NavLink
                to='announcement'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <TfiAnnouncement className='w-5 h-5' />

                <span className='mx-4 font-medium'>Announcement</span>
              </NavLink>
              }

              {/* Make payment */}
              {role === 'Member' && 
              <NavLink
                to='make-payment'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <TfiAnnouncement className='w-5 h-5' />

                <span className='mx-4 font-medium'>Make payment</span>
              </NavLink>
              }
  
              {/* Payment History */}
              {role === 'Member' && 
              <NavLink
                to='payment-history'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <TfiAnnouncement className='w-5 h-5' />

                <span className='mx-4 font-medium'>Payment History</span>
              </NavLink>
              }            

              {/* Manage Member */}
              {role === 'Admin' && 
              <NavLink
                to='member'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <RiCoupon2Line className='w-5 h-5' />
                <span className='mx-4 font-medium'>Manage Member</span>
              </NavLink>
              }              
             
              {/* Admin-announcement */}
              {role === 'Admin' && 
              <NavLink
                to='admin-announcement'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <RiCoupon2Line className='w-5 h-5' />
                <span className='mx-4 font-medium'>Announcement</span>
              </NavLink>
              }     
               {/* Agreement */}
               {role === 'Admin' && 
              <NavLink
                to='agreement'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <RiCoupon2Line className='w-5 h-5' />
                <span className='mx-4 font-medium'>Agreement</span>
              </NavLink>
              }

              {/* Coupon */}
              {role === 'Admin' && 
              <NavLink
                to='coupon'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <RiCoupon2Line className='w-5 h-5' />
                <span className='mx-4 font-medium'>Coupon</span>
              </NavLink>
              }        

            </nav>
          </div>
        </div>

        <div>
          <hr />

          
          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar