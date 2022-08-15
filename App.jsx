import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <h1>Restaurante Italiano</h1>
      <h5>Un poco sobre nosotros,en el año 1995 se creo este bonito restaurante llamado Taste Italy desde su inicio
        se ah llevado miles de paladares satisfechos aun sin incluir el tuyo,despues de el exito que tuvo en Sicilia nos 
        lanzamos a explorar el mundo del internet y te traemos aqui los mejores platillos que tiene nuestro restaurante 
        No esperes mas para probarlos</h5>

        <h2 center>MENU</h2>
      <div className="card">
      <center><img src="https://www.momondo.es/discover/wp-content/uploads/sites/242/2017/05/theme_food_italian-shutterstock-premier_281387153_universal_within-usage-period_48283.jpg" height="300" width="400" alt="" /></center>
      <h3>Espagueti</h3>

      <center><img src="http://1.bp.blogspot.com/-FLefjggONDA/UwKvZ1tImBI/AAAAAAAAAOI/hbnQLyHNiM0/s1600/pasta3.jpg" height="300" width="400" alt="" /></center>
      <h3>Porto bello</h3>

      <center><img src="https://static.comunicae.com.mx/photos/notas/126446/1571437950_TourOfItalyheadtoheadred_FY19_copia.jpg" height="300" width="400" alt="" /></center>
      <h3>Olive garden</h3>
      
      <center><img src="https://images.ctfassets.net/sd2voc54sjgs/5uhgmiChWggs4MUQkekUkE/94d3c3d1ddf4a1161b1c4685700ed04d/MX_Comida_t__pica_italiana_que_te_har___exclamar_-__la_vita____bella_-.jpg" height="300" width="400" alt="" /></center>
      <h3>Sorelli</h3>

      <center><img src="https://babycocina.com/wp-content/uploads/2020/07/Raviolis-de-espinaca-y-ricotta-receta-italiana.jpg" height="300" width="400" alt="" /></center>
      <h3>Raviolis</h3>
      
      <center><img src="https://cdn.elviajerofisgon.com/wp-content/uploads/2016/07/Portada-6.jpg" height="300" width="400" alt="" /></center>
      <h3>Viajero fisgon</h3>
      
      <center><img src="https://ogimg.infoglobo.com.br/in/23594927-c2a-c29/FT1086A/652/82154276_BAToque-de-Chef-Porchetta-Focaccia-e-Maionese-de-Alecrim-do-restaurante-Olivo.jpg" height="300" width="400" alt="" /></center>
      <h3>Gosta</h3>

      <a href="https://cdn-icons-png.flaticon.com/512/901/901141.png" target="_blank">
        </a>
        <section className='blogs' id='blogs'>
        <div class="heading">
          <span>Our blogs</span>
          <h3>Nuestros blogs</h3>
        </div>
        <div class="blogs-slider"></div>
        <div class="w"></div>
          <div class="slide">
             <div class="image">
             <img src="http://sevilla.abc.es/contenidopromocionado/wp-content/uploads/sites/2/2019/05/portada-wp-panzerocho.jpg" height="300" width="400" alt="" />
             <span>Pizza</span>
             </div>
             <div class="content">
              <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>14st agosto,2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin Eli.</a>
              </div>
              <a href="#" class="title">Pizza</a>
              <p>El mejor plato de la noche</p>
              <a href="#" class="btn">Leer mas</a>
             </div>            
      

          <div class="image">
             <img src="https://tse3.mm.bing.net/th?id=OIP.OUGOqqY1VSTkZb6C3ZJ0dAHaJ4&pid=Api&P=0" height="300" width="400" alt="" />
             <span>Plato tipico de italia</span>
             </div>
             <div class="content">
              <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>16st agosto,2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin Eli.</a>
              </div>
              <a href="#" class="title">Plato tipico de italia</a>
              <p>Irresistible sabor</p>
              <a href="#" class="btn">Leer mas</a>
             </div>

             <div class="image">
             <img src="https://www.topgastronomico.es/wp-content/uploads/2021/01/lasa-1024x682.jpg" height="300" width="400" alt="" />
             <span>Lasaña</span>
             </div>
             <div class="content">
              <div className="icon">
                <a href="#"><i className="fas fa-calendar"></i>17st agosto,2022</a>
                <a href="#"><i className="fas fa-user"></i>by admin Eli.</a>
              </div>
              <a href="#" class="title">Lasaña</a>
              <p>El plato que se llevo miles de paladares</p>
              <a href="#" class="btn">Leer mas</a>
             </div>
        </div>
       
       <section  id="order"  class="order"></section>
       <div class="heading">
        <span>Orden</span>
        <h3>Ordena ahora</h3>
       </div>
       <form action="">
        <div className="box-container">
          <div className="box"></div>
          <div className="inputbox">
            <span>Nombre Completo</span>
            <input type="text" placeholder="ingresa tu nombre" />
          </div>

          <div className="inputbox">
            <span>Numero celular</span>
            <input type="text" placeholder="Ingresa tu telefono " />
          </div>

          <div className="inputbox">
            <span>Correo electronico</span>
            <input type="text" placeholder="ingresa tu correo electronico" />
          </div>

          <div className="inputbox">
            <span>Direccion</span>
            <input type="text" placeholder="ingresa tu direccion" />
          </div>
        <div className="imputbox"></div>
        <span>Nuestra direccion </span>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60215.6742546363!2d-99.05221906874996!3d19.391671499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e33774bf2ebb%3A0x610748adb2060179!2sNUEVA%20ITALIA!5e0!3m2!1ses-419!2smx!4v1660518991606!5m2!1ses-419!2smx" llowfullscreen="" loading="lazy"></iframe>
        </div>
        <input type="submit" value="orden nueva" class="btn"/>


       </form>
       
      </section>
      </div>
      <p className="read-the-docs">
        Conoce mas ....
      </p>
      <title>icono</title>
      <link rel="icon" type="image/jpg" href="https://cdn-icons-png.flaticon.com/512/455/455604.png"></link>
      <h4> Telefono:55-24-53-77-32-67</h4> 
      <link rel="icon" type="image/svg+xml" href="https://cdn-icons-png.flaticon.com/512/197/197626.png" />
      <h4> Direccion:Calle Palacio Ritual mtz.12 lt.6</h4>
    <link rel="icon" type="image/svg+xml" href="https://cdn-icons-png.flaticon.com/512/197/197626.png" />
      <h4>Facebook:Taste Itali</h4>
      <h4>PROYECTO 4</h4>
    </div>    
  )
}

export default App
