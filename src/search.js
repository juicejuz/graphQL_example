/** */
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} = require('graphql');

/** */
const TsAllType = require('./tsall/tsall.type');
const ProgType = require('./program/prog.type');
const ChanType = require('./channel/chan.type');
const RtEqxInType = require('./bfe/rteqxin.type');
/** */
const tsall = require('../data/tsall.obj');
const program = require('../data/prog.obj');
const channel = require('../data/chan.obj');
const rteqxin = require('../data/rteqxin.obj');
/** */

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      rteqxins: {
        type: new GraphQLList(RtEqxInType),
        description: 'List of BFE In',
        resolve: () => rteqxin
      },
      tsalls: {
        type: new GraphQLList(TsAllType),
        description: 'List of TSALL',
        resolve: () => tsall
      },
      tsall: {
        type: TsAllType,
        description: 'List of TSALL',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (rarent, args) => tsall.find(ts => ts.id === args.id)
      },
      program: {
        type: ProgType,
        description: 'A Program Programs',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => program.find(prog => prog.id === args.id)
      },
      programs: {
        type: new GraphQLList(ProgType),
        description: 'List of Programs',
        resolve: () => program
      },
      channel: {
        type: ChanType,
        description: 'A Channel',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => channel.find(chan => chan.id === args.id)
      },
      channels: {
        type: new GraphQLList(ChanType),
        description: 'List of Channels',
        resolve: () => channel
      }
    })
  })
});
