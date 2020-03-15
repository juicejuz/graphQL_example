const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');
/** */
const program = require('../../data/prog.obj');
const dcm = require('../../data/dcm.obj');
const xdcm = require('../../data/xdcm.obj');

module.exports = new GraphQLObjectType({
  name: 'Downlink',
  description: 'Present a Downlink',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    loc: { type: GraphQLNonNull(GraphQLString) },
    mcIp: { type: GraphQLNonNull(GraphQLString) },
    sourceIp: { type: GraphQLNonNull(GraphQLString) },
    mcPort: { type: GraphQLNonNull(GraphQLInt) },
    progId: { type: GraphQLNonNull(GraphQLInt) },
    dcmId: { type: GraphQLNonNull(GraphQLInt) },
    xdcmId: { type: GraphQLNonNull(GraphQLInt) },
    program: {
      type: require('../program/prog.type'),
      resolve: dl => {
        return program.find(prog => prog.id === dl.progId);
      }
    },
    dcm: {
      type: require('../dcm/dcm.type'),
      resolve: dl => {
        return dcm.find(dc => dc.id === dl.dcmId);
      }
    },
    xdcm: {
      type: require('../xdcm/xdcm.type'),
      resolve: dl => {
        return xdcm.find(xdc => xdc.id === dl.xdcmId);
      }
    }
  })
});
