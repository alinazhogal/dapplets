export const workWithStorage = (
  action: 'getInstalled' | 'setInstalled' | 'deleteInstalled',
  id: string,
) => {
  const storage = window.localStorage.getItem('installed')
  if (storage) {
    const installedObj = JSON.parse(storage)
    switch (action) {
      case 'getInstalled':
        return id in installedObj
      case 'setInstalled':
        installedObj[id] = id
        window.localStorage.setItem('installed', JSON.stringify(installedObj))
        break
      case 'deleteInstalled':
        delete installedObj[id]
        window.localStorage.setItem('installed', JSON.stringify(installedObj))
        break
    }
  }
}
