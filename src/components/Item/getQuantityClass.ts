export const getQuantityClass = (quantity: number) => {
  if (quantity <= 10) {
    return 'level-low'
  }

  if (quantity <= 20) {
    return 'level-medium'
  }

  return 'level-high'
}

export default getQuantityClass
