module.exports = [
  {
    id: 1,
    channel: 122,
    tsid: 10002,
    tsidHex: '0xd123',
    mod: 'DVB-C',
    qam: 256,
    pat: {
      out: 123,
      outHex: '0xa123',
      br: 128
    },
    pilotEpg: {
      in: 123,
      inHex: '0xa123',
      out: 456,
      outHex: '0xb456',
      br: 128
    }
  },
  {
    id: 2,
    channel: 138,
    tsid: 10005,
    tsidHex: '0xe456',
    mod: 'DVB-C',
    qam: 256,
    pat: {
      out: 456,
      outHex: '0xb456',
      br: 256
    },
    pilotEpg: {
      in: 456,
      inHex: '0xb456',
      out: 789,
      outHex: '0xb456',
      br: 256
    }
  },
  {
    id: 3,
    channel: 338,
    tsid: 10012,
    tsidHex: '0xf789',
    mod: 'DVB-C',
    qam: 256,
    pat: { out: 789, outHex: '0xc789', br: 512 },
    pilotEpg: { in: 789, inHex: '0xc789', out: 123, outHex: '0xb456', br: 512 }
  }
];
