import styles from './card.module.css'
import defaultimg from '../../assets/images/items/default.png'
export const Card = ({item}) => {
  console.log(`/src/assets/images/items/${item.src?`${item.src}`:`${defaultimg}`}`)
  return (
    <>
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={item.src?`/src/assets/images/items/${item.src}`:defaultimg} alt="" />
        <div className={styles.cardName}>{item.name}</div>
      </div>
      <div className={styles.cardSectionTwo}>
        <div className={styles.cardPrice}>PKR {item.price}</div>
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
    </div>
    </>
  )
}
