import { countInfo } from '../helpers/infoCounter'

describe('infoCounter', () => {
  it('success', () => {
    const data = [
      { objects: [{ def: 'WoodFence', stuffDef: 'WoodLog', artDesc: '' }], x: 59, y: 0 },
      { objects: [{ def: 'WoodFence', stuffDef: 'WoodLog', artDesc: '' }], x: 63, y: 0 },
      { objects: [{ def: 'PowerConduit', artDesc: '' }], x: 47, y: 40 },
      { objects: [{ def: 'WoodFence', stuffDef: 'WoodLog', artDesc: '' }], x: 59, y: 40 },
      { objects: [{ def: 'WoodFenceGate', stuffDef: 'WoodLog', artDesc: '' }], x: 77, y: 40 },
      { objects: [{ def: 'PowerConduit', artDesc: '' }, { def: 'WoodLog', artDesc: '' }], x: 106, y: 40 },
      { objects: [{ def: 'PowerConduit', artDesc: '' }, { def: 'WoodLog', artDesc: '' }], x: 107, y: 40 },
      {
        terrain: { def: 'WoodPlankFloor' }, objects: [], x: 87, y: 41,
      },
      {
        terrain: { def: 'Bridge' }, objects: [{ def: 'Wall', stuffDef: 'WoodLog', artDesc: '' }], x: 43, y: 42,
      },
    ]
    const correct = ['WoodFence',
      'WoodLog',
      'PowerConduit',
      'WoodFenceGate',
      'terrain',
      'WoodPlankFloor',
      'Bridge',
      'Wall']
    const result = countInfo(data)
    expect(result).toEqual(correct)
  })
})
