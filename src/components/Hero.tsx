import { useEffect } from "react";

const Redirect: React.FC = () => {
  useEffect(() => {
    window.location.href = "https://hacktronix.netlify.app";
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white text-2xl">
      Redirecting to HackTronix 1.0...
    </div>
  );
};

export default Redirect;