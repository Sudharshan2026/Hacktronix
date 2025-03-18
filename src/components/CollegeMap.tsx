import React from "react";

const MapComponent = () => {  
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      margin: "0",
      padding: "0",
      background: "#121212",
      color: "white",
    },
    container: {
      maxWidth: "90%",
      margin: "20px auto",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.1)",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },
    details: {
      flex: 1,
      textAlign: "left",
      padding: "20px",
    },
    mapContainer: {
      flex: 1,
      padding: "20px",
    },
    iframe: {
      width: "100%",
      border: "none",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.details}>
          <h2 className="text-3xl font-bold text-white-800">Find Us Here</h2>
          <p className="mt-4 text-gray-300">
            Visit us at <strong>Sri Sairam Engineering College</strong>, the venue for <strong>Hacktronix 1.0</strong>.
          </p>
          <p className="mt-2 text-gray-300">
            Explore the location on the map to get directions.
          </p>
        </div>
        <div style={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.181780386284!2d80.05483217484118!3d12.960217087354076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f596c7fb72c9%3A0x8e7a30529f9ef227!2sSri%20Sairam%20Engineering%20College!5e0!3m2!1sen!2sin!4v1742156150816!5m2!1sen!2sin" 
            width="600" height="450" style={styles.iframe} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
