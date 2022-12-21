import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">

    <div className={styles.container}>
      
      <main className={styles.main} >
        
      
        <h1 className={styles.title}>
          <img src="lol.png" width="400" length="400" alt="amerique image"/>
        </h1>
        
        <div className={styles.description}>
        <p className={styles.card}>
         <strong>Choose your continent and Find which teams have qualified for Qatar tournament ! </strong> 
        </p>
        </div>  

      <div className={styles.grid}>
        <a href="/Continent/Amerique" className={styles.card}>
            <h2>America</h2>
            <img src="amerique.png" width="400" length="400" alt="amerique image"/>
          </a>

          <a href="/Continent/Afrique" className={styles.card}>
            <h2>Africa</h2>
            <img src="afrique.png" width="400"  length="400"  alt="afrique image"/>
          </a>

          <a href="/Continent/Asie" className={styles.card}>
            <h2>Asia</h2>
            <img src="asiii2.png" width="400" length="400" alt="asia image"/>
          </a>

          <a href="/Continent/Europe" className={styles.card}>
            <h2>Europe</h2>
            <img src="europe12.png" width="400" length="400" alt="europe image"/>
          </a>

        </div>
      </main>
      
      <p className={styles.description}>
          Get to know more about us ! 
         
          <a href="/about" className={styles.card}>
          <code className={styles.code}>click here </code> </a>
          
        </p>
          
    </div>

    </div>
  )
}



   
  

   
