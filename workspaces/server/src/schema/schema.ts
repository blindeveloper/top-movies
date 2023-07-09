const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = graphql;

let topMovies = [];

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

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    topMovies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return topMovies;
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
        const newMovie = {
          id: args.id,
          title: args.title,
          year: args.year,
          poster: args.poster,
          popularity: 1,
        };
        topMovies.unshift(newMovie);
        return newMovie;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
