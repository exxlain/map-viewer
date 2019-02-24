const checkWall = def => (def === 'Wall' ? 'white' : 'green')

export const defineColor = (info) => {
  let color
  if (info.terrain) {
    color = 'red'
    if (info.objects.length) {
      info.objects.forEach((el) => {
        color = checkWall(el.def)
      })
    }
  } else if (info.objects.length) {
    info.objects.forEach((el) => {
      if (el.def) {
        color = checkWall(el.def)
      }
    })
  } else {
    color = 'black'
  }
  return color
}
