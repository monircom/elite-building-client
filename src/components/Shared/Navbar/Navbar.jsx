import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import toast from 'react-hot-toast'

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

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
    <div className='fixed w-full bg-white z-10 shadow-sm mb-5'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            
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
            
            {/* Dropdown Menu */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>
                {/* Become A Host btn */}
                <div className='hidden md:block'>

                  <Link
                      to='/'
                      className=' px-4 py-3 hover:bg-neutral-100 transition font-semibold rounded-full'
                    >
                      Home
                    </Link>
                    <Link
                      to='/apartments'
                      className=' px-4 py-3 hover:bg-neutral-100 transition font-semibold rounded-full'
                    >
                      Apartments
                    </Link>
                
                  {/* {!user && (
                    <button
                      disabled={!user}
                      className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                    >
                      Apartments
                    </button>
                  )} */}
                </div>
                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className=''>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : avatarImg}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>
                    <Link
                      to='/apartments'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Apartments
                    </Link>

                    {user ? (
                      <>
                       <Link
                          to='/dashboard'
                          className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Dashboard
                        </Link>
                        <div
                          onClick={handleLogOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
