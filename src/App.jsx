import { Route, Routes, useNavigate } from 'react-router-dom';
import '../src/css/index.css';
import { useEffect } from 'react';
import Layout from './layout/Layout';
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import NewPopular from './pages/NewPopular';
import MyList from './pages/MyList';
import AboutMovie from './pages/AboutMovie';
import Genre from './pages/Genre';

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/');
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout> <Home/> </Layout>} />
      <Route path="/tv-shows" element={<Layout> <TvShows /> </Layout>} />
      <Route path="/movies" element={<Layout> <Movies /> </Layout>} />
      <Route path="/new-and-popular" element={<Layout> <NewPopular /> </Layout>} />
      <Route path="/my-list" element={<Layout> <MyList /> </Layout>} />
      <Route path="/movie-info" element={<Layout> <AboutMovie /> </Layout>} />
      <Route path="/genre" element={<Layout> <Genre /> </Layout>} />
    </Routes>
  );
}

export default App;
