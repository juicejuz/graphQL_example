const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
/** */
const program = require('../../data/prog.obj');

/** */
module.exports = new GraphQLObjectType({
  name: 'Decoder',
  description: 'Present a Decoder',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    location: { type: GraphQLNonNull(GraphQLString) },
    mgmtIp: { type: GraphQLNonNull(GraphQLString) },
    progId: { type: GraphQLNonNull(GraphQLInt) },
    program: {
      type: require('../program/prog.type'),
      resolve: decoder => {
        return program.find(prog => prog.id === decoder.progId);
      }
    }
  })
});
