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
         (things in the map that are always there regardless of the run) and Dynamic content (RNG based elements of a map that change based on the run)
      </p>
      <h3 className={styles.maptitle}>Distant Roots</h3>
      <div className={styles.image}>
         <Image className={styles.root} src="/distantroot.jpg" width={800} height={400}/>
         <p className={styles.mapdesc}>Vertical mobility is very useful, as the alternative version can be very annoying to traverse. This is the ONLY map in the game that does not have a guarenteed newt altar spawn. Lore: The logbook Entry for Distant Roost is a log ritten by Captain describing the agressiveness of the monsters and their strange and irregular natural phenomenon. The flying monsters that can be seen in the distance are Birdsharks and are an evolved form of a failed attempt to model grass. They have 1hp and can be killed with hit-scan attaks (such as Railgunner's sniper)</p>
      </div>
      <ul>
         <li>
            <h4>Newt Locations</h4>
            <div className={styles.newt}>
               <div className={styles.imageContainer}>
                  <Image src="/drnewt1.jpg" width={320} height={360}/>
                  <p>On a rock, under the bridge</p>
               </div>
               <div className={styles.imageContainer}>
                  <Image src="/drnewt2.jpg" width={320} height={360}/>
                  <p>through the gate behind this rock</p>
               </div>
               <div className={styles.imageContainer}>
                  <Image src="/drnewt3.jpg" width={320} height={360}/>
                  <p>Back of the map behind the rock</p>
               </div>
            </div>
         </li>
      </ul>
      <h5 className={styles.list_header}>Monsters</h5>
      <br/>
      <div className={styles.divider}></div>
      <div className={styles.imageAndList}>
         <ul className={styles.monsters}>
            <li className={styles.monsterWithImage}>
               <img src="/beetle.jpg" alt="Beetle" className={styles.monsterImage} />
               Beetle
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/beetlequeen.jpg" alt="Beetle Queen" className={styles.monsterImage} />
               Beetle Queen
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/beetleguard.jpg" alt="Beetle Guard" className={styles.monsterImage} />
               Beetle Guard
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/greaterwisp.jpg" alt="Greater Wisp" className={styles.monsterImage} />
               Greater Wisp
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/lemurian.jpg" alt="Lemurian" className={styles.monsterImage} />
               Lemurian
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/lesserwisp.jpg" alt="Lesser Wisp" className={styles.monsterImage} />
               Lesser Wisp
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/stonegolem.jpg" alt="Stone Golem" className={styles.monsterImage} />
               Stone Golem
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/stonetitan.jpg" alt="Stone Titan" className={styles.monsterImage} />
               Stone Titan
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/wanderingvagrant.jpg" alt="Wandering Vagrant" className={styles.monsterImage} />
               Wandering Vagrant
            </li>
         </ul>
         <div className={styles.imageContainer}>
            <img src="/fight2.jpg" alt="Fight Image" className={styles.fightImage} />
         </div>
      </div>
      <h3 className={styles.maptitle}>Titanic Plains</h3>
      <div className={styles.image}>
         <Image className={styles.root} src="/titanicplains.jpg" width={800} height={400}/>
         <p className={styles.mapdesc}>The Stone arches found in the ground posses magic abilities that can create stones out of thein air. There sometimes features a ship that crashed while trying to rescue cargo while using Hardlight Afterburners for propulsion, making it very questionable how surviors use them. Unlocking gesture of the drowned is only achieveable on this map. In order to do so loop once and wait for the krab creatures to spawn and chase them off the map.</p>
      </div>
      <ul>
         <li>
            <h4>Newt Locations</h4>
            <div className={styles.newt}>
               <div className={styles.imageContainer}>
                  <Image src="/tpnewt1.jpg" width={320} height={360}/>
                  <p>Behind the one of the arches</p>
               </div>
               <div className={styles.imageContainer}>
                  <Image src="/tpnewt2.jpg" width={320} height={360}/>
                  <p>On this mountaink</p>
               </div>
               <div className={styles.imageContainer}>
                  <Image src="/tpnewt3.jpg" width={320} height={360}/>
                  <p>On top of one of the arches</p>
               </div>
            </div>
         </li>
      </ul>
      <h5 className={styles.list_header}>Monsters</h5>
      <br/>
      <div className={styles.divider}></div>
      <div className={styles.imageAndList}>
         <ul className={styles.monsters}>
            <li className={styles.monsterWithImage}>
               <img src="/beetle.jpg" alt="Beetle" className={styles.monsterImage} />
               Beetle
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/beetlequeen.jpg" alt="Beetle Queen" className={styles.monsterImage} />
               Beetle Queen
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/beetleguard.jpg" alt="Beetle Guard" className={styles.monsterImage} />
               Beetle Guard
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/greaterwisp.jpg" alt="Greater Wisp" className={styles.monsterImage} />
               Greater Wisp
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/lemurian.jpg" alt="Lemurian" className={styles.monsterImage} />
               Lemurian
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/lesserwisp.jpg" alt="Lesser Wisp" className={styles.monsterImage} />
               Lesser Wisp
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/stonegolem.jpg" alt="Stone Golem" className={styles.monsterImage} />
               Stone Golem
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/stonetitan.jpg" alt="Stone Titan" className={styles.monsterImage} />
               Stone Titan
            </li>
            <li className={styles.monsterWithImage}>
               <img src="/wanderingvagrant.jpg" alt="Wandering Vagrant" className={styles.monsterImage} />
               Wandering Vagrant
            </li>
         </ul>
         <div className={styles.imageContainer}>
            <img src="/fight.jpg" alt="Fight Image" className={styles.fightImage} />
         </div>
      </div>


      <h3 className={styles.maptitle}>Abandoned Aqueduct</h3>
      <div className={styles.image}>
         <Image className={styles.root} src="/aqueduct.jpg" width={800} height={400}/>
         <p className={styles.mapdesc}>The Abandoned Aqueduct is an arid, sprawling desert located on Petrichor V and is a Stage 2 Environment encountered in Risk of Rain 2. Massive skeletons and pools of tar are littered around, and a towering aqueduct pouring down tar dominates the area.
</p>
      </div>
      <ul>
         <li>
            <h4>Newt Locations</h4>
            <div className={styles.newt}>
               <div className={styles.imageContainer}>
                  <Image src="/aanewt1.jpg" width={320} height={360}/>
                  <p>On this small cliff</p>
               </div>
               <div className={styles.imageContainer}>
                  <Image src="/aanewt2.jpg" width={320} height={360}/>
                  <p>On top of this wall</p>
               </div>
               <div className={styles.imageContainer}>
                  <Image src="/aanewt3.jpg" width={320} height={360}/>
                  <p>On top of the map on this skeleton</p>
               </div>
            </div>
         </li>
      </ul>
      <p className={styles.mapdesc}>How to Open the Hidden Chamber. Scattered throughout the Abandoned Aqueduct stage are two buttons must be pressed simultaneously to pop open the hidden chamber door. Due to the random nature of Risk of Rain 2, finding the buttons may be tricky, but they are often located behind large rocks.</p>
   </div>
</main>
)
}