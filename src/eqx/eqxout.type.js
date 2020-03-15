const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

/** */
module.exports = new GraphQLObjectType({
  name: 'Salvo',
  description: 'Present a EQX Output',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    frame: { type: GraphQLNonNull(GraphQLString) },
    slotHw: { type: GraphQLNonNull(GraphQLInt) },
    slotVista: { type: GraphQLNonNull(GraphQLInt) },
    outHw: { type: GraphQLNonNull(GraphQLInt) },
    outVista: { type: GraphQLNonNull(GraphQLInt) },
    mgmtIp: { type: GraphQLNonNull(GraphQLString) }
  })
});
