import axios from 'axios';
import { MovieItemInterface } from './interfaces';
import { OMDB } from '@scribbr-assessment-full-stack/common';
type GetMovieResponseType = {
  error: Error;
  data: MovieItemInterface[];
};

export const getMoviesBySearchValue = (
  pageCount: number,
  searchValue: string
) => {
  const request = `${OMDB.URL}?apikey=${OMDB.API_KEY}&s=${searchValue}&p=${pageCount}`;

  return axios
    .get(request)
    .then((response): GetMovieResponseType => {
      return {
        error: null,
        data: response.data?.Search,
      };
    })
    .catch(function (error: Error): GetMovieResponseType {
      return {
        error: error,
        data: [],
      };
    });
};
