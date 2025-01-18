// src/pages/IntercomTestPage.tsx

import React, { useEffect } from "react";

const IntercomTestPage: React.FC = () => {
  useEffect(() => {
    // Make sure the window object has the Intercom function available
    const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");

    if (window.Intercom) {
      // Boot the Intercom widget
      window.Intercom("boot", {
        app_id: "m5sbb0sa", // Replace with your actual Intercom app ID
        name: userInfo.name || "Guest",  // Ensure the name is available or default to "Guest"
        email: userInfo.email || "guest@example.com", // Ensure the email is available or default to "guest@example.com"
      });
      console.log("Intercom has been initialized");
    } else {
      console.log("Intercom function is not available");
    }

    // Cleanup when the component unmounts (to prevent memory leaks)
    return () => {
      if (window.Intercom) {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return (
    <div>
      <h1>Intercom Test Page</h1>
      <p>This page will display the Intercom chat widget if it is working properly.</p>
    </div>
  );
};

export default IntercomTestPage;