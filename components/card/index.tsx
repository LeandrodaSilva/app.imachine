import style from "./styles.module.scss"

interface CardProps {
  title?: string,
  children?: any
}

function Card(props: CardProps) {
  const {
    children,
    title
  } = props;

  return (
    <>
      <div className={style.card}>
        {
          title &&
          <div className={style.header}>
            <span>{title}</span>
          </div>
        }
        <div className={style.body}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Card
