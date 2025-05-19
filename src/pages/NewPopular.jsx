import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { getPopularMovies } from '../services/api'
import axios from 'axios'

function NewPopular() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                console.log(popularMovies);
                
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

    const handleSearch = async (e) => {
        e.preventDefault()

    }

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <form className="searchBox" onSubmit={handleSearch}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search from the latest movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="searchButton"
          type="submit"
          style={{ cursor: "pointer" }}
        >
          {/* SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <g clipPath="url(#clip0_2_17)">
              <g filter="url(#filter0_d_2_17)">
                <path
                  d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  shapeRendering="crispEdges"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_2_17"
                x="-0.418549"
                y="3.70435"
                width="29.7139"
                height="29.7139"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite
                  in2="hardAlpha"
                  operator="out"
                ></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_2_17"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_2_17"
                  result="shape"
                ></feBlend>
              </filter>
              <clipPath id="clip0_2_17">
                <rect
                  width="28.0702"
                  height="28.0702"
                  fill="white"
                  transform="translate(0.403503 0.526367)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </button>
      </form>
      <ul className="movie-lists">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <div className='redBox' style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            flexDirection: "column",
            gap: "6px",
            background: "#ff000083",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "5px 5px 5px black",
            animation: "swipetoCenter1 1s ease"
  }}>
          <h2 style={{ color: "black", fontSize: "20px"}}>No movies found matching your search.</h2>
          <p style={{color: "#ffffffa4", opacity: .5}}>You don't either contect to the internet or it is not avaliable</p>
          </div>
        )}

      </ul>
    </Wrapper>
  );
}

export default NewPopular

const Wrapper = styled.div`
   width: 100%;
   height: calc(100vh - 74px);
   background: #353535d3;
   overflow: hidden;

   @keyframes swipetoCenter1 {
    from {
      transform: translateX(-200px);
      opacity: 0;
      filter: blur(8px);
    }
    to {
      transform: translateX(0px);
      opacity: 1;
      filter: blur(0);
    }
   }

   .searchBox {
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;
    background: #454f5d;
    border-radius: 50px;
    position: relative;
    height: 42px;
    margin: 16px auto;
    animation: getBigger 2s ease;
    transform-origin: center;
  }
  
  .searchButton {
    color: white;
    position: absolute;
    right: 4px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--gradient-2, linear-gradient(90deg, #e50914 0%, #f5c518 100%));
    border: 0;
    display: inline-block;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  }
  /*hover effect*/
  button:hover {
    color: #fff;
    background-color: #1A1A1A;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-3px);
  }
  /*button pressing effect*/
  button:active {
    box-shadow: none;
    transform: translateY(0);
  }
  
  .searchInput {
    border: none;
    background: none;
    outline: none;
    font-size: 15px;
    padding: 24px 48px 24px 16px;
    width: 100%;
    color: white;
  }
  .searchInput::placeholder {
    color: transparent;
    background: linear-gradient(to right, #e50914, #f5c518 20%);
    background-size: 200%;
    background-clip: text;
  }
   .movie-lists {
    max-width: 100%;
    height: calc(100% - 74px);
    overflow-y: scroll;
    overflow-x: hidden;
    background: transparent;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 32px;
    gap: 12px;

    /* Custom scrollbar styles */
&::-webkit-scrollbar {
width: 10px; /* width of the entire scrollbar */
border-radius: 8px;
}

&::-webkit-scrollbar-track {
background: #f1f1f11f; /* color of the tracking area */
border-radius: 8px;
}

&::-webkit-scrollbar-thumb {
background: #777777c2; /* color of the scroll thumb */
border-radius: 8px;

}

&::-webkit-scrollbar-thumb:hover {
background: #555; /* color of the scroll thumb on hover */
}
   }

   @media (max-width: 912px) {
    .movie-lists {
        gap: 16px;
        padding: 0 0 16px 0;

        &::-webkit-scrollbar {
          display: none;
        }
    }
    .searchBox {
        width: 90%;
    }
    .redBox {
      width: 300px;
    }
    
   }
`