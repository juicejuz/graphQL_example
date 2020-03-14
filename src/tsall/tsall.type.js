/** */
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

/** */
const program = require('../../data/prog.obj');
const channel = require('../../data/chan.obj');

/** */
module.exports = new GraphQLObjectType({
  name: 'TSALL',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    video: {
      type: new GraphQLObjectType({
        name: 'Video',
        fields: {
          outPid: { type: GraphQLNonNull(GraphQLInt) },
          outPidHex: { type: GraphQLNonNull(GraphQLString) },
          tag: { type: GraphQLNonNull(GraphQLInt) },
          outBr: { type: GraphQLNonNull(GraphQLInt) }
        }
      })
    },
    audio: {
      type: GraphQLList(
        new GraphQLObjectType({
          name: 'Audio',
          fields: {
            line: { type: GraphQLNonNull(GraphQLInt) },
            outPid: { type: GraphQLNonNull(GraphQLInt) }
          }
        })
      )
    },
    progId: { type: GraphQLNonNull(GraphQLInt) },
    chanId: { type: GraphQLNonNull(GraphQLInt) },
    program: {
      type: require('../program/prog.type'),
      resolve: tsall => {
        return program.find(prog => prog.id === tsall.progId);
      }
    },
    channel: {
      type: require('../channel/chan.type'),
      resolve: tsall => {
        return channel.find(chan => chan.id === tsall.chanId);
      }
    }
  })
});
