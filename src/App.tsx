import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hero from "./components/Hero";


function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent preloader from showing again
    if (!sessionStorage.getItem("hasLoaded")) {
      setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 3000);
    } else {
      setLoading(false);
    }
  }, []);

  // if (loading) {
  //   return <Preloader />;
  // }

  return (
    <Router>
      <ScrollToHashElement />
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div>
                <Hero />

              </div>
            } />
            {/* <Route path="/Domain" element={<div><Domains /> <Footer /> </div>} />
            <Route path="/team" element={<div><OrganizersPage /> <Footer /> </div>} />
            <Route path="/guidelines" element={<div><Rules /> <Footer /> </div>} />
            <Route path="/results" element={<Results />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
