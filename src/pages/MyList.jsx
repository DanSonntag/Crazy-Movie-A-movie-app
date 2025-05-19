import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

function MyList() {
  // Latest
  const [savedData, setSavedData] = useState([])
  useEffect(() => {
    const saved = localStorage.getItem("savedMovies")
    if (saved) {
      setSavedData(JSON.parse(saved))
    }
  }, [])

  const deleteMovie = (id) => {
    // filter all movies other than the chosen
    const a = savedData.filter((item) => item.id !== id)
    console.log(a);
    const newData = localStorage.setItem("savedMovies", JSON.stringify(a))
    setSavedData(a)
  }

  if (savedData.length === 0) {
    return <>
      <H1 className='main-heading'>Your Saved Movies</H1>
    <Nothing className='boxie'>
    <h2 className='heading'>No Favorite Movies Yet</h2>
    <p className='text'>Start adding movies to your favorites, and they will appear here.</p>
    </Nothing>
    </>
  }
  return (
    <Wrapper>
      <h1 className='main-heading'>Your Saved Movies</h1>
      <div className="all-cards">
        {/* 1 */}
      <div className="first-saved box">
        <h2><span className="h2">Saved from Latest</span> <span>🔥</span></h2>
        <span className='count'>{savedData.length}</span>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        {
          savedData.map((item, index) => {
            // picture: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            // title: item.title,
            // date: item.release_date,
            // id: item.id
           return  <SwiperSlide key={index}>
           <div className="inner-box">
           <img src={`https://image.tmdb.org/t/p/w500/${item.picture}`} alt="picture" />
          
           <div className="movie-info">
             <h3>{item.title}</h3>
             <p>{item.date}</p>

             <button className="delete-btn" title='Wanna Delete It?' onClick={(id) => deleteMovie(item.id)}>🗑️</button>
           </div>

           </div>
         </SwiperSlide>
          })
        }
      </Swiper>
        </div>

         {/* 2 */}
      <div className="second-saved box">
      <h2><span className="h2">Saved from Movies</span> <span>🎞️</span></h2>

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>

         {/* 3 */}
      <div className="third-saved box">
      <h2><span className="h2">Saved from Tv-series</span> <span>📺</span></h2>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
      </div>
    </Wrapper>
  )
}

export default MyList

const H1 = styled.h1`
   color: crimson;
    padding-top: 32px;
    padding-left: 64px;
    z-index: 100;
`

const Nothing = styled.div`
    position: absolute;
    top: 160px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff000083;
    box-shadow: 5px 5px 5px black;
    padding: 16px;
    border-radius: 8px;
    animation: swipetoCenter 1s ease;

    .text {
      color: #ffffffa4;
      margin-top: 12px;
    }
    

    @keyframes swipetoCenter {
      from {
        transform: translateX(-120%);
        opacity: 0;
        filter: blur(8px);
      }
      to {
        transform: translateX(-50%);
        opacity: 1;
        filter: blur(0);
      }
    }
    @media (max-width: 912px) {
        width: 300px;
    }
`

const Wrapper = styled.div`
   width: 100%;
   height: calc(100vh - 74px);
   overflow: hidden;

   .main-heading {
    color: crimson;
    padding-top: 32px;
    padding-left: 64px;
    z-index: 100;
   }

   .all-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 96px;
    padding-top: 64px;

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 24px;
      background: transparent;
      position: relative;

      h2 {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      .h2 {
        color: transparent;
        background: linear-gradient(to right, 
          crimson,
          yellow,
          crimson);
        background-size: 200%;
        background-clip: text;
      }
      }
      .count {
        position: absolute;
        color: white;
        font-size: 24px;
        bottom: -16px;
        left: -52px;
        background: linear-gradient(45deg, black, crimson);
        border-radius: 50%;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
   }
   .inner-box {
    width: 100%;
    height: 100%;
    position: relative;

    .movie-info {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      background: rgb(0, 0, 0, .8);
      display: flex;
      align-items: start;
      justify-content: center;
      flex-direction: column;
      padding-left: 24px;
      padding-right: 16px;

      h3 {
        font-size: 16px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 160px;
      }
      p {
        font-size: 14px;
        color: yellow;
      }
      .delete-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(45deg, orangered, crimson);
        font-size: 18px;
        padding: 4px;
        transition: all .5s ease;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 8px white;
        }
      }
    }
   }


#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide {
  background: linear-gradient(45deg, transparent, black,  crimson);
  box-shadow: 0 0 16px 0 black;
}



@media (max-width: 912px) {
  overflow-y: scroll;
   .main-heading {
    padding-left: 24px;
    position: sticky;
    top: 0;
    background: #80808029;
   }
   .all-cards {
    flex-direction: column;
    background: transparent;
    gap: 32px;
   }

}

`