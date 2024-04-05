import React, { useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const Academicservices = () => {
  const [activeTab, setActiveTab] = useState("tutoring"); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  const tabContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const tabButtonStyle = {
    backgroundColor: "White",
    color: "Black",
    border: "none",
    borderRadius: "10px",
    padding: "15px 30px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontSize: "1.2em",
  };

  const tabButtonActiveStyle = {
    backgroundColor: "light blue",
  };

  const tabContentStyle = {
    marginTop: "20px",
    textAlign: "center",
  };

  
  return (
    <div style={{ margin: "0 auto" }}>
      <Header activeHeading={5} />
      <div style={tabContainerStyle}>
        <button
          style={{ ...tabButtonStyle, ...(activeTab === "tutoring" && tabButtonActiveStyle) }}
          onClick={() => handleTabChange("tutoring")}
        >
          Tutoring
        </button>
        <button
          style={{ ...tabButtonStyle, ...(activeTab === "textbook" && tabButtonActiveStyle) }}
          onClick={() => handleTabChange("textbook")}
        >
          Textbook Exchanges
        </button>
        <button
          style={{ ...tabButtonStyle, ...(activeTab === "study" && tabButtonActiveStyle) }}
          onClick={() => handleTabChange("study")}
        >
          Study Groups
        </button>
      </div>
      <div style={tabContentStyle}>
        {activeTab === "tutoring" && <TutoringTab />}
        {activeTab === "textbook" && <TextbookTab />}
        {activeTab === "study" && <StudyGroupTab />}
      </div>
      <Footer />
    </div>
  );
};

// Tutoring Tab
const TutoringTab = () => {
  const tutoringListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const tutoringItemStyle = {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1.2em",
    cursor: "pointer", 
  };

  const [openDropdown, setOpenDropdown] = useState(null); 
  
  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/app/login", "_blank"); // Output for shedule meeeting buttonn
  };

  const toggleDropdown = (course) => {
    setOpenDropdown(openDropdown === course ? null : course);
  };

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Courses</h2>
      <div style={tutoringListStyle}>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 393")}
        >
          CPS 393
          {openDropdown === "CPS 393" && (
            <div>
              <button onClick={handleScheduleMeeting}>Schedule an Appointment</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 590")}
        >
          CPS 590
          {openDropdown === "CPS 590" && (
            <div>
              <button onClick={handleScheduleMeeting}>Schedule an Appointment</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 630")}
        >
          CPS 630
          {openDropdown === "CPS 630" && (
            <div>
              <button onClick={handleScheduleMeeting}>Schedule an Appointment</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 510")}
        >
          CPS 510
          {openDropdown === "CPS 510" && (
            <div>
              <button onClick={handleScheduleMeeting}>Schedule an Appointment</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 209")}
        >
          CPS 209
          {openDropdown === "CPS 209" && (
            <div>
              <button onClick={handleScheduleMeeting}>Schedule an Appointment</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



const textbookListStyle = {
  display: "flex",
  gap: "20px",
  marginTop: "20px",
};

const textbookStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "center",
  textAlign: "center", 
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  marginBottom: "20px",
};

const textbookImageStyle = {
  width: "300px", 
  height: "300px", 
  objectFit: "cover", 
  borderRadius: "8px", 
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const textbookTitleStyle = {
  fontSize: "18px",
  marginBottom: "10px",
  color: "#333",
};

const textbookDescriptionStyle = {
  fontSize: "14px",
  marginBottom: "20px",
  color: "#666",
};

const textbookLinkButtonStyle = {
  padding: "10px 15px",
  marginTop: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "14px",
  cursor: "pointer",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  transition: "all 0.3s ease",
};


//Textbook Tab
const TextbookTab = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank"); 
  };
  

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Textbook Exchanges</h2>
      <div className="textbook-list" style={textbookListStyle}>
        <div className="textbook" style={textbookStyle}>
          <img src="https://mit-press-us.imgix.net/covers/9780262048972.jpg?auto=format&w=298&dpr=2&q=80" alt="Foundations of Computer Vision" style={textbookImageStyle} />
          <h3 style={textbookTitleStyle}>Foundations of Computer Vision</h3>
          <p style={textbookDescriptionStyle}>A comprehensive guide to computer vision fundamentals.</p>
          <button style={textbookLinkButtonStyle} onClick={() => handleRedirect('https://mitpress.mit.edu/9780262048972/foundations-of-computer-vision/')}>Link to Textbook</button>
        </div>
        <div className="textbook" style={textbookStyle}>
          <img src="https://mit-press-us.imgix.net/covers/9780262048613.jpg?auto=format&w=298&dpr=2&q=80" alt="Fairness and Machine Learning" style={textbookImageStyle} />
          <h3 style={textbookTitleStyle}>Fairness and Machine Learning</h3>
          <p style={textbookDescriptionStyle}>Understanding fairness considerations in machine learning algorithms.</p>
          <button style={textbookLinkButtonStyle} onClick={() => handleRedirect('https://mitpress.mit.edu/9780262048613/fairness-and-machine-learning/')}>Link to Textbook</button>
        </div>
        <div className="textbook" style={textbookStyle}>
          <img src="https://mit-press-us.imgix.net/covers/9780262048644.jpg?auto=format&w=298&dpr=2&q=80" alt="Understanding Deep Learning" style={textbookImageStyle} />
          <h3 style={textbookTitleStyle}>Understanding Deep Learning</h3>
          <p style={textbookDescriptionStyle}>Dive deep into the concepts and applications of deep learning.</p>
          <button style={textbookLinkButtonStyle} onClick={() => handleRedirect('https://mitpress.mit.edu/9780262048644/understanding-deep-learning/')}>Link to Textbook</button>
        </div>
      </div>
    </div>
  );
};

//Studygroup tab
const StudyGroupTab = () => {
 
  const tutoringListStyle = {
    display: "flex",
    flexDirection: "column", 
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const tutoringItemStyle = {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1.2em",
    cursor: "pointer", 
    position: "relative", 
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const dropdownStyle = {
    top: "calc(100% + 10px)", 
    left: "50%",
    transform: "translateX(-50%)", 
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    zIndex: "999", 
  };

  const buttonStyle = {
    backgroundColor: "#7289da",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const [openDropdown, setOpenDropdown] = useState(null); 

  const handleRedirectToDiscord = () => {
    window.open("https://discord.com/", "_blank"); 
  };
  
  const toggleDropdown = (course) => {
    setOpenDropdown(openDropdown === course ? null : course);
  };

  return (
    <div>
      <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Study Groups</h2>
      <div style={tutoringListStyle}>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 393")}
        >
          <span>CPS 393</span>
          {openDropdown === "CPS 393" && (
            <div style={dropdownStyle}>
              <button style={buttonStyle} onClick={handleRedirectToDiscord}>Join Discord</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 590")}
        >
          <span>CPS 590</span>
          {openDropdown === "CPS 590" && (
            <div style={dropdownStyle}>
              <button style={buttonStyle} onClick={handleRedirectToDiscord}>Join Discord</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 630")}
        >
          <span>CPS 630</span>
          {openDropdown === "CPS 630" && (
            <div style={dropdownStyle}>
              <button style={buttonStyle} onClick={handleRedirectToDiscord}>Join Discord</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 510")}
        >
          <span>CPS 510</span>
          {openDropdown === "CPS 510" && (
            <div style={dropdownStyle}>
              <button style={buttonStyle} onClick={handleRedirectToDiscord}>Join Discord</button>
            </div>
          )}
        </div>
        <div
          style={tutoringItemStyle}
          onClick={() => toggleDropdown("CPS 209")}
        >
          <span>CPS 209</span>
          {openDropdown === "CPS 209" && (
            <div style={dropdownStyle}>
              <button style={buttonStyle} onClick={handleRedirectToDiscord}>Join Discord</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Academicservices;
