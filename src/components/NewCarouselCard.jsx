import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function NewCarouselCard({item, index}) {
    const navigate = useNavigate()

    const showInfo = () => {
        navigate('/movie-info', {
            state: {
                id: item.id,
                title: item.title,
                overview: item.overview,
                release_date: item.release_date,
                poster_path: item.poster_path,
                vote_average: item.vote_average,
                backdrop_path: item.backdrop_path
            }
        })
    }
  return (
    <Wrapper key={index} onClick={showInfo}>
    <div className="top">
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.poster_path} />
        <button className="like-button">
        <svg fill='white' color='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
        </button>
    </div>
    <div className="bottom">
        <p className="movie-name">{item.title}</p>
        <p className="date">{item.release_date.slice(0,4)}</p>
    </div>
</Wrapper>
  )
}

export default NewCarouselCard

const Wrapper = styled.li`
    width: 400px;
    height: 300px;
    border-radius: 6px;
    position: relative;

    &:hover {
        transform: scale(1.05);
        transition: all 0.3s ease;
        cursor: pointer;

        .top {
            img {
                filter: brightness(0.8);
                transition: all 0.3s ease;
            }

        .like-button {
            display: block;
        }
        }
    }

    .top {
        width: 100%;
        height: 100%;
        background: transparent;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 6px;
            transition: all 0.3s ease;
        }   
        .like-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.5);
            border: none;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
            display: none;

            svg {
                width: 20px;
                height: 20px;
            }

            &:hover {
                transform: scale(1.1);
                transition: all 0.3s ease;
                svg {
                fill: rgba(228, 17, 66, 0.8);
                }
            }
        }
    }
    .bottom {
        width: 100%;
        height: 20%;
        background: rgba(0, 0, 0, 0.8);
        border-radius: 0 0 6px 6px;
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding-left: 12px;
        gap: 4px;
        position: absolute;
        bottom: 0;

        .movie-name {
            font-size: 20px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.824);
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            text-align: left;
        }
        .date {
            font-size: 16px;
            font-weight: 400;
            color: rgb(255, 255, 255);
        }
    }
    @media (max-width: 768px) {
        width: 90%;
        height: 500px;
        margin: 0 auto;


        .top {
            img {
                width: 100%;
                height: 100%;
            }
        }
        .bottom {
            .movie-name {
                font-size: 28px;
            }
            .date {
                font-size: 20px;
            }
        }
        .like-button {
            scale: 1.4;
            top: 28px;
            right: 28px;
        }
    }
    
    `
