import React from 'react';
import { Route, Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export default function PublicRoute({ children }) {
    const { currentUser } = useAuth()

    return currentUser ? <Navigate to="/dashboard" /> : children;
}