import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import AdForm from "../components/Ads/AdForm"; 
import AdList from "../components/Ads/AdList"; 

const Adposting = () => {
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // For submitting a new ad
  const handleAdSubmit = (adData) => {
    setIsLoading(true);
    setAds([adData, ...ads]);
    setIsLoading(false);
  };


  const pageStyle = {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  };

  const noAdsStyle = {
    textAlign: "center",
    color: "#888",
    marginTop: "20px",
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={pageStyle}>
          <Header activeHeading={4} />
          <AdForm onAdSubmit={handleAdSubmit} />
          {ads.length > 0 ? (
            <AdList ads={ads} />
          ) : (
            <p style={noAdsStyle}>No ads found. Be the first to post what you're looking for!</p>
          )}
        </div>
      )}
    </>
  );
};

export default Adposting;
