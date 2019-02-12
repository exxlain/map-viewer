import { parseInfo } from '../helpers/parseInfo'

describe('parseInfo', () => {
  it('without terrain', () => {
    const info = { objects: [{ def: 'WoodFence', stuffDef: 'WoodLog', artDesc: '' }], x: 59, y: 0 }
    const correct = ['WoodFence', 'made of', 'WoodLog']
    const result = parseInfo(info)
    expect(result).toEqual(correct)
  })

  it('with terrain', () => {
    const info = {
      terrain: { def: 'WoodPlankFloor' }, objects: [], x: 87, y: 41,
    }
    const correct = ['terrain:', 'WoodPlankFloor']
    const result = parseInfo(info)
    expect(result).toEqual(correct)
  })

  it('with terrain and object', () => {
    const info = {
      terrain: { def: 'Bridge' }, objects: [{ def: 'Wall', stuffDef: 'WoodLog', artDesc: '' }], x: 43, y: 42,
    }
    const correct = ['terrain:', 'Bridge', 'Wall', 'made of', 'WoodLog']
    const result = parseInfo(info)
    expect(result).toEqual(correct)
  })

  it('with terrain and  2 object', () => {
    const info = {
      terrain: { def: 'Bridge' },
      objects: [
        { def: 'Wall', stuffDef: 'WoodLog', artDesc: '' },
        { def: 'PowerConduit', artDesc: '' }],
      x: 43,
      y: 42,
    }
    const correct = ['terrain:', 'Bridge', 'Wall', 'made of', 'WoodLog', 'PowerConduit']
    const result = parseInfo(info)
    expect(result).toEqual(correct)
  })
})
