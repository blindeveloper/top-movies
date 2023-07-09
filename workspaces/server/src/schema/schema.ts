const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = graphql;

let topMovies = [
  {
    id: 'tt9355200',
    title: 'Koko-di Koko-da',
    type: 'movie',
    year: '2019',
    poster: 'https://imgurl.jpg',
  },
  {
    id: 'tt93jj55200',
    title: 'John Week',
    type: 'movie',
    year: '2005',
    poster: 'https://imfnelgurl.jpg',
  },
];

const movieTypeFields = {
  id: { type: GraphQLID },
  title: { type: GraphQLString },
  type: { type: GraphQLString },
  year: { type: GraphQLString },
  poster: { type: GraphQLString },
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
          type: args.type,
          year: args.year,
          poster: args.poster,
        };
        topMovies.push(newMovie);
        return newMovie;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
