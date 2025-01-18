// src/components/IntercomInitializer.tsx
import React, { useEffect } from "react";

declare global {
  interface Window {
    Intercom: any;
    intercomSettings?: any;
  }
}

const IntercomInitializer: React.FC = () => {
  useEffect(() => {
    
    const initIntercom = () => {
      if (!window.Intercom) return;

      try {
        // First, remove any existing instance
        window.Intercom('shutdown');
        const userInfo = JSON.parse(localStorage.getItem("user-info") || "{}");
        // Set up a test user - this is important for the launcher to show
        const testUser = {
        //   user_id: '12345',           // Unique identifier
          email: userInfo.email,  // Valid email format
          name: userInfo.name,
          created_at: Math.floor(Date.now() / 1000)  // Unix timestamp
        };

        // Boot with minimal settings
        window.Intercom('boot', {
          app_id: "qsuo7ujn",
          ...testUser,
          hide_default_launcher: false
        });

        console.log("Intercom booted with test user");
      } catch (error) {
        console.error("Intercom boot failed:", error);
      }
    };

    // Wait for Intercom script to load
    const timeoutId = setTimeout(initIntercom, 1500);

    return () => {
      clearTimeout(timeoutId);
      if (window.Intercom) {
        window.Intercom('shutdown');
      }
    };
  }, []);

  return null;
};

export default IntercomInitializer;