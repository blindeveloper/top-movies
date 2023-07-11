## Plan

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
21. [DONE]Write tests for upvote to be on screen

### [TM-0004] I want to sort movies

21. [DONE] Render list sorted by the number of upvotes
22. [DONE] Trigger sorting functionality on each upvote event

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

### API documentation

http://localhost:3000/graphql

### ---------------------------------------------

# Scribbr's full-stack assessment - Scribbr's favorite movies

## Prompt

Build a mini application that allows Scribbr co-workers to add their favorite movies to an aggregated list. The app should enable users to upvote a movie that is already in the list, and the list should be sorted by the number of upvotes.

## How to approach the challenge

To complete this challenge, you should:

- Fork the provided repository
- Contribute to the project
- Commit your changes regularly so that we can follow your progress
- When you are done, invite us to your repository

## Design

We've created a minimal design for you to follow:

![Design](/design.png)

A Figma file containing the design is included in the repository. You can use the design as a reference, but you don't have to follow it exactly. Feel free to give it your own touch. We value a good user experience, so make sure the app is easy to use.

## Requirements

Your application should meet the following requirements:

- Build a search input to allow the user to enter any movie title. Use the [OMDb API](http://www.omdbapi.com/) to search for movies.
- Render these results below the search input on every keypress (typeahead).
- Allow the user to click on a movie to add it to the list.
- When the movie already exists in the list, upvote it.
- Render the list of movies added by everyone below the search input.
- Allow the user to click on the heart icon in the list to upvote it.
- Sort the list by the number of upvotes.
- You can use any storage method to save the list of movies and votes, such as a database or in-memory storage.

This assessment is not about building a perfect app. We are looking for candidates who can deliver production-ready features. While we appreciate a polished final product, we are more interested in how you approach the problem, structure code, and deliver solid features from front to back. Add comments to your code where you think it's necessary or when you should add more code to make it better.

## API documentation and key

You will need to use the [OMDb API](http://www.omdbapi.com/) to search for movies. The API key is `8fc6c84a`.

## Get started

We have provided a simple full-stack project that you can use as a boilerplate. We have also set up some basic configurations. You should be familiar with the following technologies. If you are not, please refer to the documentation.

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [Esbuild](https://esbuild.github.io/)
- [PostCSS](https://postcss.org/)
- [Jest](https://jestjs.io/)

The client and server code are located in the `workspaces/client` and `workspaces/server` folders, respectively.

To get started, run the following commands:

```sh
yarn install // Install dependencies
yarn dev // Start the project in development mode
yarn build // Build the project for production
yarn test // Run tests
yarn verify // Verify types and formatting
```

A development server will start at `http://localhost:3000/`. The serve and client will automatically rebuild when you make changes, but you will need to refresh the page to see the changes.
