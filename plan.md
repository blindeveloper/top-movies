### [TM-0001] I want to search for the movie and see it in the search list

1. [DONE]Get connection to the OMDb API
2. [DONE]Build <Search/> component as connector to OMDb API
3. [DONE]Trigger search event on input change
4. Add debounce to the search input for avoiding spamming of the API
5. Handle API response. [data + error state]
6. Show list of movies in result area if 200
7. Write tests for search results

### [TM-0002] I want to add movie to the movie list

8. Add addToMovieList event on movie click
9. Add movie schema + addToMovieList listener
10. Send request addToMovieList with movie ID
11. Handle addToMovieList response. [data + error state]
12. Show new movie in the movie list if 200
13. Write tests for adding movie to the movie list

### [TM-0003] I want to upvote movies and see total popularity of each movie in the list

14. Add heart icon for movie upvoting
15. Add upvote event on heart click
16. Add upvote listener
17. Send request upvote with movie ID
18. Handle upvote response. [data + error state]
19. Show upvoted movie in the list if 200
20. Send upvote movie request if on addToMovieList request, movie already exists in the list
21. Write tests upvoting logic

### [TM-0004] I want to sort movies

21. Render list sorted by the number of upvotes
22. Trigger sorting functionality on each upvote event
23. Write tests for sorting logic

### Movie schema

`movie schema {
  id
  title
  year
  poster
  popularity
}`

### queries

`getFavoriteMovies => [movie]`

### mutations

`addMovieToMovieList(movie) => movie`
`upvoteMovie(id) => movie`
