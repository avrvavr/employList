import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/pages/LoginPage/LoginPage';
import PostPage from './Components/pages/postsPage/PostPage';
import UserProfile from './Components/pages/userProfile/UserProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/employList" element={<LoginPage />} />

      <Route path="/post" element={<PostPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;