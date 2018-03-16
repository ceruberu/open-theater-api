import {
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { internet, random } from 'faker';

import {
  ShowType,
  ShowInputType,
} from './showsTypes';

const showQueries = {
  shows: {
    type: new GraphQLList(ShowType),
    resolve: async () => {
      const shows = await new Promise(resolve =>
        setTimeout(() =>
          resolve(new Array(10).fill(undefined).map(() => ({
            id: random.uuid(),
            title: internet.email(),
          }))), 100),
      );
      return shows;
    },
  },
};

const showMutations = {
  createShow: {
    type: ShowType,
    args: {
      input: {
        type: new GraphQLNonNull(ShowInputType),
      },
    },
    resolve: async (rootValue, { input }) => {
      const result = await new Promise((resolve) => {
        setTimeout(() =>
          resolve(Object.assign(input, {
            id: random.uuid(),
          })), 100);
      });
      return result;
    },
  },
};

export {
  showQueries,
  showMutations,
};