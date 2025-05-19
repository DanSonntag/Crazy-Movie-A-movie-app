import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import like_image from '../images/like.svg'
import dislike_image from '../images/dislike.svg'

function AboutMovie() {
  const location = useLocation();
  const item = location.state; // Access the state passed from the Card component

  return (
    <Wrapper>
      <Link className='backToLatest' to="/new-and-popular">Back ↩️</Link>

      <div className='inner-box'>
        <div className="top-part">
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt={item.title}
          className="poster"
        />
        <div className='main-panel'>
        <p className='piece'><span>Title</span> {item.title}</p>
        <p className='piece'><span>Release date</span> {item.release_date}</p>
        <p className='piece'><span>Language</span> {item?.original_language}</p>
        <p className='piece'><span>Genre</span> {item.id}</p>
        <p className='piece'><span>Rated</span> {item.vote_average}</p>
        <p className='last-piece'>
          <button>
            <img className='reaction' src={like_image} alt="like" />
          </button>
          <button>
          <img className='reaction' src={dislike_image} alt="dislike" />
          </button>
        </p>
        </div>

        </div>

        <div className='summary-middle'>
          <p>{item.overview}</p>
        </div>

        <div className='video-bottom'>
          <p>Watch the trailer here:</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item.video}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </Wrapper>
  );
}

export default AboutMovie;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgb(54, 54, 54);
  overflow: hidden;
 
  .backToLatest {
    text-decoration: none;
    color: #000;
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
    background: linear-gradient(to right, #e50914, #f5c518);
    padding: 10px 20px;
    border-radius: 8px;
    color: #fff;
    transition: background 0.3s ease;
    &:hover {
      background: linear-gradient(to right, #f5c518, #e50914);
      box-shadow: 0 0 10px #e50914;
    }
  }

  .inner-box {
    background-color: black;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 800px;
    color: white;

    .top-part {
      display: flex;
      gap: 20px;

      .poster {
        width: 200px;
        height: auto;
        border-radius: 10px;
      }

      .main-panel {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .piece {
          margin-bottom: 10px;
          width: 120%;
          background: rgba(128, 128, 128, 0.4);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          border-radius: 8px;
          gap: 10px;
          color: #f5c518;
          font-size: 18px;
          margin-right: -20px;
          &:hover {
            background: rgba(128, 128, 128, 0.5);
            transition: background 0.3s ease;
            span {
              background: linear-gradient(to right, #e50914, #f5c518);
            }
          }

          span {
            font-weight: bold;
            background: linear-gradient(to right, rgb(229, 9, 20, .5), rgb(245, 197, 24, .5));
            height: 100%;
            width: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px 0 0 8px;
            color: #fff;
            margin-right: 5px;
            font-size: 14px;
            font-family: 'Arial', sans-serif;
            font-weight: 600;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          }
        }

        .last-piece {
          display: flex;
          gap: 10px;
          width: 100%;
          align-items: center;
          justify-content: start;
          padding-top: 4px;

          button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease;
            &:hover {
              transform: scale(1.1);
            }

            .reaction {
              width: 30px;
              height: auto;
            }
          }
        }
      }
    }

    .summary-middle {
      margin-top: 20px;
      background: rgb(34, 34, 34);
      padding: 10px 10px 10px 32px;
      border-radius: 10px;
      color: white;
      font-size: 18px;
      line-height: 1.5em;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      &::before {
        content: '"';
        position: absolute;
        top: 24px;
        left: 4px;
        border-radius: 10px;
        font-size: 64px;
        color: #f5ab18d6;
        font-family: Arial, Helvetica, sans-serif;
      }
      &::after {
        content: '"';
        position: absolute;
        bottom: -28px;
        right: 0px;
        border-radius: 10px;
        font-size: 160px;
        color: #f5ab18d6;
        opacity: 0.5;
        transform: rotate(15deg);
        font-family: Arial, Helvetica, sans-serif;
      }

      p {
        font-size: 16px;
        line-height: 1.5em;
      }
    }

    .video-bottom {
      margin-top: 20px;

      p {
        font-size: 16px;
        line-height: 1.5em;
      }
      iframe {
        width: 100%;
        height: 315px;
        border-radius: 10px;
        margin-top: 10px;
      }
    }
  }
  @media (max-width: 768px) {
    .inner-box {
      width: 100%;
      padding: 10px;

      .video-bottom {
        iframe {
          height: 250px;
        }
        }

      .top-part {
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .poster {
          width: 100%;
          max-width: 200px;
        }
        .main-panel {
          align-items: center;
          padding-top: 16px;
          .piece {
            width: 120%;
            margin-right: 0;
            height: 40px;
          }
          .last-piece {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 8px;
          }
        }
      }
    }
  }
`