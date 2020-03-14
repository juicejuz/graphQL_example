/** */
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');
/** */
const tsall = require('../../data/tsall.obj');

/** */
module.exports = new GraphQLObjectType({
  name: 'Program',
  description: 'Presents a Program',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    res: { type: GraphQLNonNull(GraphQLString) },
    tsall: {
      type: new GraphQLList(require('../tsall/tsall.type')),
      resolve: program => {
        return tsall.filter(ts => ts.progId === program.id);
      }
    }
  })
});
