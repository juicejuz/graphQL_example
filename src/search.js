/** */
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt
} = require('graphql');

/** */
const TsAllType = require('./tsall/tsall.type');
const ProgType = require('./program/prog.type');
const ChanType = require('./channel/chan.type');
const RtEqxInType = require('./bfe/rteqxin.type');
const DecType = require('./decoder/dec.type');
const DcmType = require('./dcm/dcm.type');
const XDcmType = require('./xdcm/xdcm.type');
const dlType = require('./dl/dl.type');
/** */
const tsall = require('../data/tsall.obj');
const program = require('../data/prog.obj');
const channel = require('../data/chan.obj');
const rteqxin = require('../data/rteqxin.obj');
const decoder = require('../data/dec.obj');
const dcm = require('../data/dcm.obj');
const xdcm = require('../data/xdcm.obj');
const dl = require('../data/dl.obj');
/** */

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
      downlinks: {
        type: new GraphQLList(dlType),
        description: 'List of Downlink',
        resolve: () => dl
      },
      downlink: {
        type: dlType,
        description: 'A Donwlink',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => dl.find(d => d.id === args.id)
      },
      xdcms: {
        type: new GraphQLList(XDcmType),
        description: 'List of XDCM',
        resolve: () => xdcm
      },
      xdcm: {
        type: DcmType,
        description: 'A XDCM',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => xdcm.find(dc => dc.id === args.id)
      },
      dcms: {
        type: new GraphQLList(DcmType),
        description: 'List of DCM',
        resolve: () => dcm
      },
      dcm: {
        type: DcmType,
        description: 'A DCM',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => dcm.find(dc => dc.id === args.id)
      },
      decoders: {
        type: new GraphQLList(DecType),
        description: 'List of Decoder',
        resolve: () => decoder
      },
      decoder: {
        type: DecType,
        description: 'A Decoder',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => decoder.find(dec => dec.id === args.id)
      },
      rteqxins: {
        type: new GraphQLList(RtEqxInType),
        description: 'List of BFE In',
        resolve: () => rteqxin
      },
      rteqxin: {
        type: RtEqxInType,
        description: 'A BFE',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => rteqxin.find(rt => rt.id === args.id)
      },
      tsalls: {
        type: new GraphQLList(TsAllType),
        description: 'List of TSALL',
        resolve: () => tsall
      },
      tsall: {
        type: TsAllType,
        description: 'A TSALL',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (rarent, args) => tsall.find(ts => ts.id === args.id)
      },
      program: {
        type: ProgType,
        description: 'A Program Programs',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => program.find(prog => prog.id === args.id)
      },
      programs: {
        type: new GraphQLList(ProgType),
        description: 'List of Programs',
        resolve: () => program
      },
      channel: {
        type: ChanType,
        description: 'A Channel',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (parent, args) => channel.find(chan => chan.id === args.id)
      },
      channels: {
        type: new GraphQLList(ChanType),
        description: 'List of Channels',
        resolve: () => channel
      }
    })
  })
});
