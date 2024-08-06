export const getFormattedDescription = (description: string) => {
  return description.length < 50 ? description : description.substring(0, 50) + '...'
}

export default getFormattedDescription
