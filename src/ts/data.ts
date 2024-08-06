import data from '../data/etsy.json'
import ItemProps from '../types/ItemProps'

export const etsyData: Array<ItemProps> = data
  .filter((item): boolean => item.state === 'active')
  .map((item): ItemProps => {
    return {
      url: item.url!,
      title: item.title!,
      price: item.price!,
      currency_code: item.currency_code!,
      quantity: item.quantity!,
      MainImage: item.MainImage!,
      listing_id: item.listing_id!,
    }
  })

export default etsyData
