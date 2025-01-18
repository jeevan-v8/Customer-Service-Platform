// import { useState } from 'react';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import GoogleLogin from './pages/login';
// import Dashboard from './pages/dashboard';
// import GeneralQueriesPage from './pages/general';
// import PageNotFound from './components/pagenotfound';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import RefreshHandler from './components/refreshhandler';

// interface PrivateRouteProps {
//   element: JSX.Element;
//   isAuthenticated: boolean;
// }

// const GoogleAuthWrapper = () => {
//   return (
//     <GoogleOAuthProvider clientId="29957917896-3m6k13a2u4peln0k96cuvamont05v2sp.apps.googleusercontent.com">
//       <GoogleLogin />
//     </GoogleOAuthProvider>
//   );
// };

// const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) => {
//   return isAuthenticated ? element : <Navigate to="/login" />;
// };

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <BrowserRouter>
//       <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
//       <Routes>
//         <Route path="/login" element={<GoogleAuthWrapper />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//         <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
//         <Route path="/general" element={<PrivateRoute element={<GeneralQueriesPage />} isAuthenticated={isAuthenticated} />} />
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./components/pagenotfound";
import GoogleLogin from "./pages/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RefreshHandler from "./components/refreshhandler";
import { useState } from "react";
import ProductRelated from "./pages/product";
import IntercomInitializer from "./components/intercomMessenger";
import IntercomTestPage from "./pages/test";

interface PrivateRouteProps {
  element: JSX.Element;
  isAuthenticated: boolean;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="29957917896-7jrb8a1pkqhj1n6adi3ltgdgbkeu95r2.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  };

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

  return (
    <BrowserRouter>
    <IntercomInitializer />
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />} />
        <Route path="/product" element={<PrivateRoute element={<ProductRelated />} isAuthenticated={isAuthenticated} />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Navigate to="/test" />} />
        <Route path="/test" element={<IntercomTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;