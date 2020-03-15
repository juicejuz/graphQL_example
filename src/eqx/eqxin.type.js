const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

/** */
module.exports = new GraphQLObjectType({
  name: 'EqxIn',
  description: 'Present a EQX Input',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    frame: { type: GraphQLNonNull(GraphQLString) },
    slotHw: { type: GraphQLNonNull(GraphQLInt) },
    slotVista: { type: GraphQLNonNull(GraphQLInt) },
    inHw: { type: GraphQLNonNull(GraphQLInt) },
    inVista: { type: GraphQLNonNull(GraphQLInt) },
    mgmtIp: { type: GraphQLNonNull(GraphQLString) }
  })
});
