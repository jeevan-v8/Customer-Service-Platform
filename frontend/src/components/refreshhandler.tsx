import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface RefreshHandlerProps {
    setIsAuthenticated: (value: boolean) => void;
}

function RefreshHandler({ setIsAuthenticated }: RefreshHandlerProps) {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const data = localStorage.getItem('user-info');
        const token = data ? JSON.parse(data)?.token : null;

        if (token) {
            setIsAuthenticated(true);
            if (location.pathname === '/' || location.pathname === '/login') {
                navigate('/dashboard', { replace: false });
            }
        }

    }, [location, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;