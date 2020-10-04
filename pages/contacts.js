import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


export default function Contacts() {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap" rel="stylesheet"/>
    <title>|Контакты|</title>
    <meta name="keywords" content="ключевые слова" />
    <meta charSet="utf-8"/>
    
    <div className="ground">
    <Navbar />
      <div className="background2"></div>
    </div>
    
    <div className="contacts">
        <div className="loc1"></div>
            <div className="loc2"></div>
                <div className="line2"></div>
      
          <div className="phone_pic"></div>
              <div className="location_pic"></div>
                  <div className="facebook_pic"></div>
        <h1 className="phone">+371-23-277-067</h1>
        <p className="location">Deglava iela 69
         Active Kids</p>
    <p className="facebook">Yuliya Demchuk</p>
    </div>

    </>
  )
}