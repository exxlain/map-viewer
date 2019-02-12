export const parseInfo = (info) => {
  let infoArray = []
  if (info.terrain) {
    infoArray = ['terrain:', info.terrain.def]
  }
  if (info.objects.length) {
    info.objects.forEach((el) => {
      infoArray = [...infoArray, el.def]
      if (el.stuffDef) {
        infoArray = [...infoArray, 'made of', el.stuffDef]
      }
    })
  }
  return infoArray
}
