### [TM-0001] I want to search for the movie and see it in the search list

1. [DONE]Get connection to the OMDb API
2. [DONE]Build <Search/> component as connector to OMDb API
3. [DONE]Trigger search event on input change
4. [DONE]Add debounce to the search input for avoiding spamming of the API
5. [DONE]Handle API response. [data + error state]
6. [DONE]Show list of movies in result area if 200
7. [DONE]Write tests for search results

### [TM-0002] I want to add movie to the movie list

8. [DONE]Add movie schema
9. [DONE]Handle topMovies query
10. [DONE]Add addTopMovie event/mutation on movie click
11. [DONE]Send request addTopMovie with movie ID
12. [DONE]Handle addTopMovie response. [data + error state]
13. [DONE]Show new movie in the movie list if 200
14. [DONE]Write tests for adding movie to the movie list

### [TM-0003] I want to upvote movies and see total popularity of each movie in the list

14. [DONE]Add heart icon for movie upvoting
15. [DONE]Add upvote event on heart click
16. [DONE]Add upvote listener
17. [DONE]Send request upvote with movie ID
18. [DONE]Handle upvote response. [data + error state]
19. [DONE]Show upvoted movie in the list if 200
20. [DONE]Send upvote movie request if on addTopMovie request, movie already exists in the list
21. Write tests upvoting logic

### [TM-0004] I want to sort movies

21. [DONE] Render list sorted by the number of upvotes
22. [DONE] Trigger sorting functionality on each upvote event
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

`topMovies => [movie]`

### mutations

`addTopMovie(movie) => movie`
`upVoteMovie(id) => movie`
