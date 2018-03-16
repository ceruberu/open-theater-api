import {
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
} from 'graphql';

const ShowType = new GraphQLObjectType({
  name: 'ShowType',
  description: 'Show type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

const ShowInputType = new GraphQLInputObjectType({
  name: 'ShowInputType',
  description: 'Show payload definition',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});

export {
  ShowType,
  ShowInputType,
};