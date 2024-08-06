import Item from '../Item/Item'
import ListingProps from '../../types/ListingProps'
import styles from './Listing.module.css'

const Listing = ({ items = [] }: ListingProps) => {
  return (
    <div className={styles['item-list']}>
      {items.map((item) => (
        <Item
          key={item.listing_id}
          {...item}
        />
      ))}
    </div>
  )
}

export default Listing
