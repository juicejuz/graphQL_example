const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
/** */

module.exports = new GraphQLObjectType({
  name: 'DCM',
  description: 'Present a DCM',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    mgmtIp: { type: GraphQLNonNull(GraphQLString) },
    loc: { type: GraphQLNonNull(GraphQLString) },
    board: { type: GraphQLNonNull(GraphQLInt) },
    port: { type: GraphQLNonNull(GraphQLInt) },
    satPos: { type: GraphQLNonNull(GraphQLString) },
    tp: { type: GraphQLNonNull(GraphQLString) },
    freq: { type: GraphQLNonNull(GraphQLInt) },
    symbol: { type: GraphQLNonNull(GraphQLInt) },
    pol: { type: GraphQLNonNull(GraphQLString) },
    mcIp: { type: GraphQLNonNull(GraphQLString) },
    sourceIp: { type: GraphQLNonNull(GraphQLString) },
    mcPort: { type: GraphQLNonNull(GraphQLInt) }
  })
});
