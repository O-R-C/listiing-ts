import getQuantityClass from './getQuantityClass'
import getFormattedDescription from './getFormattedDescription'
import ItemProps from '../../types/ItemProps'
import styles from './Item.module.css'

const Item = ({ url, title, price, currency_code, quantity, MainImage }: ItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles['item-image']}>
        <a href={url}>
          <img
            src={MainImage.url_570xN}
            alt={title}
          />
        </a>
      </div>
      <div className={styles['item-details']}>
        <p className={styles['item-title']}>{getFormattedDescription(title)}</p>
        <p className={`${styles['item-price']} ${styles[currency_code]}`}>{price}</p>
        <p className={`${styles['item-quantity']} ${styles[getQuantityClass(quantity)]}`}>{quantity}</p>
      </div>
    </div>
  )
}

export default Item
