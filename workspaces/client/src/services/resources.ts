import axios from 'axios';
import { OMDB } from '@scribbr-assessment-full-stack/common';
type GetMovieResponseType = {
  error: Error;
  data: Object;
};

export const getMoviesBySearchValue = (
  pageCount: number,
  searchValue: string,
  setIsErrorState: (val: boolean) => void
) => {
  const request = `${OMDB.URL}?apikey=${OMDB.API_KEY}&s=${searchValue}&page=${pageCount}`;

  return axios
    .get(request)
    .then((response): GetMovieResponseType => {
      return {
        error: null,
        data: response,
      };
    })
    .catch(function (error: Error): GetMovieResponseType {
      setIsErrorState(true);
      return {
        error: error,
        data: [],
      };
    });
};
