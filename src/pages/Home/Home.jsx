import { Helmet } from 'react-helmet-async'
//import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Home/Rooms'
import Carousel from '../../components/Carousel'
import About from '../About'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Building | Building Management System</title>
      </Helmet>
      {/* Categories section  */}
      {/* <Categories /> */}
      {/* Rooms section */}
      <Carousel></Carousel>
      <About></About>
    </div>
  )
}

export default Home
