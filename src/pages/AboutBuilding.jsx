import React from 'react';
import Container from '../components/Shared/Container';

const AboutBuilding = () => {
    return (
        <Container>
        <div className=' container px-6 py-10 mx-auto'>
        <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex flex-col justify-center items-center my-5">
        <h1 className="text-3xl font-bold">About the Building </h1>        
      </div>          

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
        Welcome to Elite Building, a perfect blend of luxury and comfort in the heart of the city. Our modern apartments feature spacious layouts, high-end finishes, and stunning views, designed for a sophisticated urban lifestyle.

         </p>   
         <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
         Enjoy premium amenities like a fully equipped fitness center, rooftop terrace, serene courtyard garden, and 24/7 concierge service. Conveniently located near top restaurants, shopping, and cultural landmarks, Elite Building offers unparalleled accessibility and secure parking.

            </p>    
         <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
         Experience exceptional living at Elite Building, where every detail is crafted for your comfort and convenience.
            </p>    
        


         

          
        
           
        </div>
        </Container>
    );
};

export default AboutBuilding;