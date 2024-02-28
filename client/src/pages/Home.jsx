import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import IsAuthenticated from '../functions/IsAuthenticated';
import GetUserDetails from '../functions/GetUserDetails';
import '../css/Home.css';
const Home = () => {
  const navigate = useNavigate();
  const { authenticated, loading } = IsAuthenticated();
  if (!authenticated) {
    navigate('/login');
  }
  const { userDetails } = GetUserDetails();

  return (
    <>
      <div className="home-home_page">
        {userDetails ? (
          <>
            <div className="home-container">{userDetails.username}</div>
          </>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </>
  );
};

export default Home;
