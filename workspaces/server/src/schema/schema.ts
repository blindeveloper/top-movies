const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = graphql;

const topMovies = [
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

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    type: { type: GraphQLString },
    year: { type: GraphQLString },
    poster: { type: GraphQLString },
  }),
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

module.exports = new GraphQLSchema({
  query: RootQuery,
});
