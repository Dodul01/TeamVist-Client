import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';

const reviews = [
  {
    username: "JohnDoe",
    review: "Exceptional service! The user-friendly interface made employee management a breeze. Highly recommended.",
    rating: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzAfPqK6ZipAN63rnTAZO-NrA0f2d_bI8NQ&usqp=CAU"
  },
  {
    username: "JaneSmith",
    review: "Our company efficiency skyrocketed after implementing this solution. A game-changer!",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzAfPqK6ZipAN63rnTAZO-NrA0f2d_bI8NQ&usqp=CAU"
  },
  {
    username: "AlexJohnson",
    review: "The support team is fantastic. They go above and beyond to ensure a smooth experience.",
    rating: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzAfPqK6ZipAN63rnTAZO-NrA0f2d_bI8NQ&usqp=CAU"
  },
  {
    username: "EmilyWilliams",
    review: "Innovative features and excellent customization options. Couldn't be happier with the results.",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzAfPqK6ZipAN63rnTAZO-NrA0f2d_bI8NQ&usqp=CAU"
  },
  {
    username: "SamuelBrown",
    review: "Great value for the money. It has simplified our HR processes and saved us valuable time.",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzAfPqK6ZipAN63rnTAZO-NrA0f2d_bI8NQ&usqp=CAU"
  }
];

const Testomunials = () => {
  return (
    <div className='m-5 my-10 flex lg:flex-row flex-col'>
      <div className='lg:flex-1 m-1'>
        <h3 className='text-2xl font-semibold mb-2'>Success Stories from Our Clients</h3>
        <p className='text-lg font-normal text-gray-500'>Dive into the firsthand experiences shared by our valued clients. Explore their journeys with our services, and learn how our solutions have made a positive impact on their businesses. Discover the power of partnership and the tangible benefits that await you when you choose our employee management services. Join the community of satisfied clients who have witnessed transformative success with us.</p>
      </div>

      {/* slider */}
      <div className='lg:flex-1 m-1'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper max-w-lg"
        >
          {reviews.map(review => {
            return <SwiperSlide>
              <div className='bg-slate-100 p-4 rounded-lg'>
                <div className='flex gap-1'>
                  <img className='h-[50px] w-[50px] rounded-full object-cover' src={review.image} alt="" />
                  <div>
                    <h2 className='text-2xl font-semibold mb-1'>{review.username}</h2>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <strong>( {review.rating} )</strong>
                    </div>
                  </div>
                </div>
                <p className='text-gray-500 text-lg'>{review.review}</p>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
      {/* slider */}

    </div>
  )
}

export default Testomunials
