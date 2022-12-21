import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] =useState()
  return (

    <div className="py-10 min-h-screen max-w-full md:max-w-4xl md:mx-auto">
      <div className={styles.container}>
      <main className={styles.main} >
        
      
        <h1 className={styles.title}>
          <img src={darkMode?"lol2.jpg":"lol2.png"} width="500" length="500" alt="amerique image"/>
        </h1>
        
        <div className={styles.description}>
       
         <strong>Choose your continent and Find which teams have qualified for Qatar tournament ! </strong> 
    
        </div>  

      <div className={styles.grid}>

        <a className={styles.card} href="">
        
          <Link href="/Continent/Amerique">
          <div>
            <h2>America</h2>
            <img src="amerique.png" width="400" length="400" alt="amerique image"/>
          </div>

          </Link>
        </a>

        <a className={styles.card} href="" >
        <Link href="/Continent/Afrique" >
                    <div>
                <h2>Africa</h2>
                    <img src="afrique.png" width="400"  length="400"  alt="afrique image"/>

                    </div>
            
        </Link>
        </a>
        <a className={styles.card} href="">
             <Link href="/Continent/Asie">
            <div>
                          <h2>Asia</h2>
            <img src="asiii2.png" width="400" length="400" alt="asia image"/>
            </div>

          </Link>
          </a>
          <a className={styles.card} href="">
              <Link href="/Continent/Europe">
                <div>
                    <h2>Europe</h2>
                    <img src="europe12.png" width="400" length="400" alt="europe image"/>
                </div>
              </Link>
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



   
  

   
