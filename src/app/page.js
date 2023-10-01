import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.header}>Risk of Rain 2: The Ultimate Boss Guide</h1>
          <p className={styles.desc}>Never break a sweat with a boss again</p>
        </div>
        <div className={styles.image}>
         <Image className={styles.bannerImage} src="/ror.jpg" width={1000} height={500}/>
        </div>
      <div className={styles.divider}></div>
      <p className={styles.risk}>Players control a survivor who is stranded on an alien planet. To survive, they navigate through various environments, killing monsters and looting chests to collect items that boost their offensive and defensive capabilities. Over time, the game's difficulty increases, spawning more powerful and dangerous creatures.</p>
      <section>
        <span className={styles.flex}>
          <span>All Bosses:</span>
        </span>
      </section>
      </div>
    </main>
  )
}
