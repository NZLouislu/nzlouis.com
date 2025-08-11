import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/tech-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#FFFFFF",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <nav style={{ position: "absolute", top: "20px", width: "100%", display: "flex", justifyContent: "center" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "20px", padding: 0 }}>
          <li><a href="#home" style={{ color: "#D1D5DB", textDecoration: "none" }}>Home</a></li>
          <li><a href="#about" style={{ color: "#D1D5DB", textDecoration: "none" }}>About</a></li>
          <li><a href="#portfolio" style={{ color: "#D1D5DB", textDecoration: "none" }}>Portfolio</a></li>
          <li><a href="#skills" style={{ color: "#D1D5DB", textDecoration: "none" }}>Skills</a></li>
          <li><a href="#contact" style={{ color: "#D1D5DB", textDecoration: "none" }}>Contact</a></li>
          <li><a href="#blog" style={{ color: "#D1D5DB", textDecoration: "none" }}>Blog</a></li>
        </ul>
      </nav>
      <div style={{ textAlign: "center", padding: "20px", background: "rgba(255, 255, 255, 0.1)", borderRadius: "10px" }}>
        <h1 style={{ color: "#60A5FA", fontSize: "3rem", margin: "0" }}>Hi, I'm Louis Lu</h1>
        <h2 style={{ color: "#FFFFFF", fontSize: "1.5rem", margin: "10px 0" }}>Full Stack Software Engineer</h2>
        <p style={{ color: "#D1D5DB", maxWidth: "600px", margin: "10px auto" }}>
          Specializing in AI/ML and scalable systems with proven expertise in React and Node.js.
        </p>
        <button
          style={{
            backgroundColor: "#10B981",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          View Resume
        </button>
        <button
          style={{
            backgroundColor: "#60A5FA",
            color: "#FFFFFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          See Projects
        </button>
      </div>
    </div>
  );
};

export default Home;