import styles from './styles.module.scss';


interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button className={styles.suscrbibeButton}>Subscribe now</button>
  )
}