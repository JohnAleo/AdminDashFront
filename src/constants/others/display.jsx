import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DisplayHome = ({ children }) => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [location]);

  return <div>{showSidebar && children}</div>;
};

export default DisplayHome;