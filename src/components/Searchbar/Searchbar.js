import { useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { RiFileSearchFill } from 'react-icons/ri';
import { Form, Button, Input } from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error(
        'Sorry, there are no movies matching your search query. Please try again.',
        {
          style: {
            border: '1px solid red',
            color: 'red',
          },
        },
      );
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        name="query"
        value={query}
        onChange={handleChange}
        placeholder="Search movies"
      />

      <Button type="submit">
        <RiFileSearchFill style={{ color: '#000', width: 35, height: 35 }} />
        Search
      </Button>
    </Form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
