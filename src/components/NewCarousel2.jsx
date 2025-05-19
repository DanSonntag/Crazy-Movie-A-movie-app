import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import '../css/newCarousel.css';
import '../css/swiper.css';
// import required modules
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay, Navigation} from 'swiper/modules';
import { getPopularMovies, getPopularTvSeries } from '../services/api';
import HomeCard from './HomeCard';
import { Link } from 'react-router-dom';

function NewCarousel2() {
            
            const [searchQuery, setSearchQuery] = useState("")
            const [movies, setMovies] = useState([])
            const [error, setError] = useState(null)
            const [loading, setLoading] = useState(true)
        
            useEffect(() => {
                const loadTvSeries = async () => {
                    try {
                        const tvseries = await getPopularTvSeries()
                        setMovies(tvseries)
                        console.log(tvseries);
                
                    } catch (error) {
                        setError(error)
                        console.error("Error fetching popular movies:", error)
                    }
                    finally {
                        setLoading(false)
                    }
                }
                loadTvSeries()
            }, [])
            
  return (
    <Wrapper>
         <h2 className='headings'>
    <Link to="/tv-shows" style={{textDecoration: "none",
    color: "rgb(220, 20, 60)"}}>TV Shows</Link>
         </h2>
      <Swiper
        // effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          movies.map((item, index) => {
            return <SwiperSlide key={index}>
            <HomeCard  item={item}/>
        </SwiperSlide>
          })
        }
      </Swiper>
    </Wrapper>
  )
}

export default NewCarousel2

const Wrapper = styled.div`
 .swiper-wrapper {
  gap: 16px;
 }
`