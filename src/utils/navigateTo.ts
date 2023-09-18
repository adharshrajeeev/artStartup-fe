// Utility function to check if a token is present in localStorage
export const isUserAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; // Return true if token is present, false otherwise
};

// Utility function to clear the token from localStorage
export const clearAuthToken = () => {
    localStorage.removeItem('token');
    window.location.href='/login';
};
