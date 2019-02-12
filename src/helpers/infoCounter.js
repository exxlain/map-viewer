export const countInfo = (data) => {
  const entitySet = new Set()
  data.forEach((el) => {
    if (el.terrain) {
      entitySet.add('terrain')
      entitySet.add(el.terrain.def)
    }
    el.objects.forEach((item) => {
      if (item.def) {
        entitySet.add(item.def)
      }
      if (item.stuffDef) {
        entitySet.add(item.stuffDef)
      }
      if (item.artDesc) {
        entitySet.add(item.artDesc)
      }
    })
  })
  entitySet.delete('')
  return Array.from(entitySet)
}
