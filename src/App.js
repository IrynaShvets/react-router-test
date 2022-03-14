import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import Navigation from './components/Navigation';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */),
);
const Cast = lazy(() =>
  import('./components/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('./components/Reviews' /* webpackChunkName: "Reviews" */),
);

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Container>
  );
}

export default App;
