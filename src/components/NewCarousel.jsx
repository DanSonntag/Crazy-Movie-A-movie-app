import { useEffect } from 'react'
import { useRef, useState } from 'react';
import styled from 'styled-components'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/newCarousel.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getPopularMovies } from '../services/api';
import HomeCard from './HomeCard';
import { Link, useNavigate } from 'react-router-dom';

function NewCarousel() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       const loadPopularMovies = async () => {
                  try {
                      const popularMovies = await getPopularMovies()
                      setMovies(popularMovies)
                      // console.log(popularMovies);
                      
                  } catch (error) {
                      setError(error)
                      console.error("Error fetching popular movies:", error)
                  }
                  finally {
                      setLoading(false)
                  }
              }
              loadPopularMovies()
    }, [])
  return (
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
        className="mySwiper"
      >
        { movies.length > 0 ? movies.map((item, index) => {
            return <SwiperSlide key={index} style={{background: `${movies.length <= 0 ? "red" : "transparent"}`}}>
              <img style={{width: "100%", height: "100%"}} src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}}`} alt={item.title} />
              <div className="info">
                <h2 className="info-text"><span>{item.title}</span> | {item.release_date.slice(0,4)}</h2>
                <p className='link'>Rate: {item.vote_average.toFixed(1)}</p>
              </div>
          </SwiperSlide>
          })
          :  <div className='redBox' style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            flexDirection: "column",
            gap: "6px",
            background: "#ff000083",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "5px 5px 5px black",
            animation: "swipetoCenter1 1s ease",
            zIndex: "100"
            }}>
          <h2 style={{ color: "black", fontSize: "20px"}}>No movies found matching your search.</h2>
          <p style={{color: "#ffffffa4", opacity: .5}}>You don't either contect to the internet or it is not avaliable</p>
          </div>
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
  )
}

export default NewCarousel
