import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { fetchTrendingMovies } from '../services/moviesApi';
import PageTitle from '../components/PageTitle';
import ButtonLoadMore from '../components/ButtonLoadMore';
import Loader from '../components/Loader';
import MoviesList from '../components/MoviesList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTrendingMovies(page);

        if (data.total_pages === page) {
          setShowButton(false);
        } else {
          setShowButton(true);
        }

        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies(movies => [...movies, ...data.results]);
        }
      } catch {
        toast.error('Error!');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const handelLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <PageTitle text="Trending Movies for the week" />

      <MoviesList movies={movies} />

      {isLoading ? (
        <Loader />
      ) : (
        showButton && <ButtonLoadMore onloadMore={handelLoadMore} />
      )}
    </div>
  );
}
