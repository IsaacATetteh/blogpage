import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.header}>Risk of Rain 2: The Ultimate Map Guide</h1>
          <p className={styles.desc}>All the map info you will ever need!</p>
          <p className={styles.tag}><span className={styles.by}>By </span>Isaac published OCT 2, 2023</p>
        </div>
        <div className={styles.image}>
         <Image className={styles.bannerImage} src="/ror.jpg" width={1000} height={500}/>
        </div>
        <div className ={styles.rordesc}>
          <p className={styles.risk}>Players control a survivor who is stranded on an alien planet. To survive, they navigate through various environments, killing monsters and looting chests to collect items that boost their offensive and defensive capabilities. Over time, the game's difficulty increases, spawning more powerful and dangerous creatures.</p>
        </div>      
        <div className={styles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/aJWfwbG93Z8?si=XYIJXMuzROHYUROn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2>RELATED:</h2>
        
        <a href="https://www.pockettactics.com/risk-of-rain-2/characters" target="_blank" className={styles.related}>Risk of rain 2: How to unlock every character and abilities</a>
        <p className={styles.reminder}>Reminder: Stages are by defualt set in a random order and random loot. Details will be spit into 2 types: Static content 
          (things in the map that are always there regardless of the run) and Dynamic content (RNG based elements of a map that change based on the run)</p>
        
        <h3 className={styles.maptitle}>Distant Roots</h3>
        <div className={styles.image}>
         <Image className={styles.bannerImage} src="/distantroot.jpg" width={800} height={400}/>
        </div>
       
        <ul>
         <li>
          <h4>Newt Locations</h4>
          <div className={styles.newt}>
            <Image src="/drnewt1.jpg" width={320} height={360}/>
            <Image src="/drnewt2.jpg" width={320} height={360}/>
          </div>
         </li>
         <p>On a rock, under the bridge</p>
         <li>
           
         </li>
        </ul>
      </div>
    </main>
  )
}
