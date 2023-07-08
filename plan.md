### I want to search for the movie and see it in the search list

1. Get connection to the OMDb API
2. Build <Search/> component for as connector to OMDb API
3. Trigger search event on input change
4. Add debounce to the search input for avoiding spamming of the API
5. Handle API response. [data + error state]
6. Show list of movies in result area if 200
7. Write tests for search results

### I want to add movie to the movie list

8. Add addToMovieList event on movie click
9. Add movie schema + addToMovieList listener
10. Send request addToMovieList with movie ID
11. Handle addToMovieList response. [data + error state]
12. Show new movie in the movie list if 200
13. Write tests for adding movie to the movie list

### I want to upvote movies and see total popularity of each movie in the list

14. Add heart icon for movie upvoting
15. Add upvote event on heart click
16. Add upvote listener
17. Send request upvote with movie ID
18. Handle upvote response. [data + error state]
19. Show upvoted movie in the list if 200
20. Send upvote movie request if on addToMovieList request, movie already exists in the list
21. Write tests upvoting logic

### I want to sort movies

21. Render list sorted by the number of upvotes
22. Trigger sorting functionality on each upvote event
23. Write tests for sorting logic

### Movie schema

`movie schema {
  id
  name
  year
  img
  popularity
}`

### queries

`getFavoriteMovies => [movie]`

### mutations

`addMovieToMovieList(movie) => movie`
`upvoteMovie(id) => movie`
