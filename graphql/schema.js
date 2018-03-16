import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import {
  showQueries,
  showMutations,
} from './shows/shows';


export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...showQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...showMutations,
    }),
  }),
});