import { defineColor } from '../helpers/defineColor'

describe('defineColor', () => {
  it('with terrain', () => {
    const info = {
      terrain: { def: 'WoodPlankFloor' }, objects: [], x: 87, y: 41,
    }
    const correct = 'red'
    const result = defineColor(info)
    expect(result).toEqual(correct)
  })

  it('withWall', () => {
    const info = {
      terrain: { def: 'Bridge' }, objects: [{ def: 'Wall', stuffDef: 'WoodLog', artDesc: '' }], x: 43, y: 42,
    }
    const correct = 'white'
    const result = defineColor(info)
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
    const correct = 'green'
    const result = defineColor(info)
    expect(result).toEqual(correct)
  })
})
