export function menu(store) {
  store.on('@init', () => ({
    menu: {
      settings: false,
    },
  }))

  store.on('menu/toggle', ({ menu }, key) => {
    return { menu: { ...menu, [key]: !menu[key] } }
  })
}
