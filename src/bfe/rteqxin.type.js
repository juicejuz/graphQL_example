const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
/** */
const eqxIn = require('../../data/eqxin.obj');
const salvo = require('../../data/eqxout.obj');
const program = require('../../data/prog.obj');

/** */
module.exports = new GraphQLObjectType({
  name: 'RtEqxIn',
  description: 'Present a Router Eqx Output',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    confLoc: { type: GraphQLNonNull(GraphQLString) },
    eqxInId: { type: GraphQLNonNull(GraphQLInt) },
    salvoOut: { type: GraphQLNonNull(GraphQLInt) },
    progId: { type: GraphQLNonNull(GraphQLInt) },
    exqIn: {
      type: require('../eqx/eqxin.type'),
      resolve: rteqxin => {
        return eqxIn.find(ein => ein.id === rteqxin.eqxInId);
      }
    },
    salvo: {
      type: require('../eqx/eqxout.type'),
      resolve: rteqxin => {
        return salvo.find(sal => sal.id === rteqxin.salvoOut);
      }
    },
    program: {
      type: require('../program/prog.type'),
      resolve: rteqxin => {
        return program.find(prog => prog.id === rteqxin.progId);
      }
    }
  })
});
