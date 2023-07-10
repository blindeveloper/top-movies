const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

interface MovieItemInterface {
  poster: string;
  title: string;
  year: string;
  id: string;
  popularity?: number;
}

let topMoviesList: Object = {};

const movieTypeFields = {
  id: { type: GraphQLID },
  title: { type: GraphQLString },
  year: { type: GraphQLString },
  poster: { type: GraphQLString },
  popularity: { type: GraphQLInt },
};

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => movieTypeFields,
});

const getTopMovieListAsArray = () => {
  let topMoviesArray: MovieItemInterface[] = [];
  for (const [key, value] of Object.entries(topMoviesList)) {
    topMoviesArray.push(value);
  }
  return topMoviesArray;
};

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    topMovies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return getTopMovieListAsArray();
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTopMovie: {
      type: MovieType,
      args: movieTypeFields,
      resolve(parent, args) {
        if (topMoviesList[args.id]) {
          topMoviesList[args.id].popularity += 1;
        } else {
          topMoviesList[args.id] = {
            id: args.id,
            title: args.title,
            year: args.year,
            poster: args.poster,
            popularity: 1,
          };
        }

        return topMoviesList[args.id];
      },
    },
    upVoteMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        if (topMoviesList[args.id]) {
          topMoviesList[args.id].popularity += 1;
        }

        return topMoviesList[args.id];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
