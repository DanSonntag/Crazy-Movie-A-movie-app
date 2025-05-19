import React, { useEffect } from 'react';
import NetflixUnofficialApi from 'netflix-unofficial-api';
import styled from 'styled-components';

function Genre() {
  useEffect(() => {
  // Node.js script (not in React)
const NetflixUnofficialApi = require('netflix-unofficial-api');
const myApiToken = 'your-api-key';
const netflixData = new NetflixUnofficialApi(myApiToken);

netflixData.movie().then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});

  }, []);

  return (
    <div style={{width: "100%",  display: "flex", 
      alignItems: "center", 
      justifyContent: "center",}}>
      <InnerBox style={{
            marginTop: '64px', 
            padding: '16px',
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            flexDirection: "column",
            gap: "6px",
            background: "#ff000083",
            boxShadow: "5px 5px 5px black",
            padding: "16px",
            borderRadius: "8px",
            animation: "swipetoCenter1 1s ease",
            width: "500px"
            }}>
          <h2 style={{ color: "black", fontSize: "20px"}}>Not Available Yet</h2>
          <p style={{color: "#ffffffe6", opacity: .5}}>It is still under development. Will be ready soon!</p>
          </InnerBox>
    </div>
  );
}

export default Genre;

const InnerBox = styled.div`
  @media (max-width: 912px) {
    width: 300px !important;
  }
`