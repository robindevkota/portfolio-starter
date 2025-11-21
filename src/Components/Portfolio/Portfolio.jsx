import React, { useState, useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { themeContext } from "../../Context";

// Import your images
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/grocery.png";
import HOC1 from "../../img/meme.png";
import MusicApp from "../../img/you.png";
import Linked from "../../img/linked.png";
import Gmail from "../../img/gmail.png";
import Chat from "../../img/chat.jpg";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      img: Gmail,
      url: "https://gmail1clone1.netlify.app/",
      title: "Gmail Clone",
    },
    {
      img: Linked,
      url: "https://linkedin-clone-4a5ec.web.app/",
      title: "LinkedIn Clone",
    },
    { img: Chat, url: "https://chat-46250.web.app/", title: "Chat App" },
    {
      img: Sidebar,
      url: "https://side1bar.netlify.app/",
      title: "Sidebar Demo",
    },
    {
      img: Ecommerce,
      url: "https://e-commercw.netlify.app/",
      title: "E-Commerce",
    },
    {
      img: MusicApp,
      url: "https://yt1clone.netlify.app/",
      title: "YouTube Clone",
    },
    { img: HOC, url: "https://tudo1list.netlify.app/", title: "Todo List" },
    { img: HOC1, url: "https://meme1-app.netlify.app/", title: "Meme App" },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <div
      className="portfolio"
      id="portfolio"
      style={{
        minHeight: "100vh",
        padding: "4rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Blur decorations like testimonial */}
      <div
        style={{
          position: "absolute",
          width: "22rem",
          height: "14rem",
          borderRadius: "50%",
          filter: "blur(72px)",
          background: "var(--purple)",
          top: "8rem",
          left: "-18%",
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "22rem",
          height: "14rem",
          borderRadius: "50%",
          filter: "blur(72px)",
          background: "skyblue",
          top: "8rem",
          right: "-10%",
          zIndex: 0,
        }}
      ></div>
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            color: darkMode ? "white" : "#333",
            fontSize: "2.5rem",
            fontWeight: "bold",
            display: "block",
          }}
        >
          Recent Projects
        </span>
        <span
          style={{
            color: darkMode ? "orange" : "var(--orange)",
            fontSize: "2.5rem",
            fontWeight: "bold",
            display: "block",
          }}
        >
          Portfolio
        </span>
        <span
          style={{
            color: darkMode ? "white" : "#333",
            fontSize: "2.5rem",
            fontWeight: "bold",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          Click the image for demo
        </span>
      </div>

      {/* Slider Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "2rem",
          zIndex: 1,
        }}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: "1rem",
            zIndex: 100,
            padding: "0.75rem",
            borderRadius: "50%",
            backgroundColor: darkMode ? "#333" : "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <ChevronLeft size={28} color={darkMode ? "white" : "#333"} />
        </button>

        {/* Slider Track */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {getVisibleProjects().map((project, idx) => {
            const position = project.position;
            const isCenter = position === 0;

            // Dynamic width and height for center vs side images
            const containerWidth = isCenter ? 450 : 320;
            const containerHeight = isCenter ? 400 : 320;
            const imgHeight = isCenter ? 350 : 280;

            return (
              <a
                key={idx}
                href={isCenter ? project.url : undefined}
                target={isCenter ? "_blank" : undefined}
                rel={isCenter ? "noopener noreferrer" : undefined}
                onClick={(e) => !isCenter && e.preventDefault()}
                style={{
                  position: "absolute",
                  width: `${containerWidth}px`,
                  height: `${containerHeight}px`,
                  transform: `translateX(${position * 440}px) scale(${
                    isCenter ? 1 : 0.75
                  })`,
                  opacity: isCenter ? 1 : 0.5,
                  zIndex: isCenter ? 10 : 1,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: isCenter ? "pointer" : "default",
                  pointerEvents: isCenter ? "auto" : "none",
                }}
              >
                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    backgroundColor: darkMode
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.26)",
                    border: darkMode
                      ? "7px solid rgba(255, 255, 255, 0.1)"
                      : "7px solid var(--orangeCard)",
                    boxShadow: isCenter
                      ? darkMode
                        ? "0px 19px 60px rgba(0, 0, 0, 0.3)"
                        : "var(--boxShadow)"
                      : "0 5px 15px rgba(0,0,0,0.1)",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: `${imgHeight}px`,
                      objectFit: "contain", // show full image
                      display: "block",
                      backgroundColor: darkMode
                        ? "rgba(255,255,255,0.05)"
                        : "#f0f0f0",
                    }}
                  />
                  <div
                    style={{
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "1rem",
            zIndex: 100,
            padding: "0.75rem",
            borderRadius: "50%",
            backgroundColor: darkMode ? "#333" : "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <ChevronRight size={28} color={darkMode ? "white" : "#333"} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          marginTop: "1rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              backgroundColor:
                idx === currentIndex
                  ? darkMode
                    ? "#ffa500"
                    : "#ff6b6b"
                  : darkMode
                  ? "#555"
                  : "#ddd",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
