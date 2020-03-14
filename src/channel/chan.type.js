const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

/** */
module.exports = new GraphQLObjectType({
  name: 'Channel',
  description: 'Presents a Channel',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    channel: { type: GraphQLNonNull(GraphQLInt) },
    tsid: { type: GraphQLNonNull(GraphQLInt) },
    tsidHex: { type: GraphQLNonNull(GraphQLString) },
    mod: { type: GraphQLNonNull(GraphQLString) },
    qam: { type: GraphQLNonNull(GraphQLInt) },
    pat: {
      type: new GraphQLObjectType({
        name: 'Pat',
        fields: () => ({
          out: { type: GraphQLNonNull(GraphQLInt) },
          outHex: { type: GraphQLNonNull(GraphQLString) },
          br: { type: GraphQLNonNull(GraphQLInt) }
        })
      })
    },
    pilotEpg: {
      type: new GraphQLObjectType({
        name: 'PilotEpg',
        fields: () => ({
          in: { type: GraphQLNonNull(GraphQLInt) },
          inHex: { type: GraphQLNonNull(GraphQLString) },
          out: { type: GraphQLNonNull(GraphQLInt) },
          outHex: { type: GraphQLNonNull(GraphQLString) },
          br: { type: GraphQLNonNull(GraphQLInt) }
        })
      })
    }
  })
});
