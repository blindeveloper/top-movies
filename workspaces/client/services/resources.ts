import axios from 'axios';

const OMDB = {
  API_KEY: '8fc6c84a',
  URL: 'http://www.omdbapi.com/',
};

export const getMoviesBySearchValue = (
  pageCount: number,
  searchValue: string
) => {
  const request = `${OMDB.URL}?apikey=${OMDB.API_KEY}&s=${searchValue}&p=${pageCount}`;

  return axios
    .get(request)
    .then((response) => {
      return {
        error: null,
        data: response.data?.Search,
      };
    })
    .catch(function (error) {
      return {
        error: error,
        data: null,
      };
    });
};
