const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
/** */

module.exports = new GraphQLObjectType({
  name: 'xDCM',
  description: 'Present a Cross DCM',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    mgmtIp: { type: GraphQLNonNull(GraphQLString) },
    loc: { type: GraphQLNonNull(GraphQLString) }
  })
});
