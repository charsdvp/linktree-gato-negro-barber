import './App.css'

function App() {

  return (
    <div className="container">
      <div className="container-img"></div>
      <img src="/Gato-Negro.svg" alt="Lodo de la pagina web(Contiene la imagen de un gato)" width={200} id='GNB'/>
      <h1>Gato Negro Barber</h1>
      <ul className="container-links">
        <li>
          <a href="https://www.facebook.com/profile.php?id=61550583977011" target="_blank" rel="noopener noreferrer" className='link'>Facebook</a>
        </li>
        <li>
          <a href="https://www.instagram.com/gatonegrobarber014/" target="_blank" rel="noopener noreferrer" className='link'>Instagram</a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@gatonegrobarber?_t=8j92aOBttPa&_r=1" target="_blank" rel="noopener noreferrer" className='link'>TikTok</a>
        </li>
      </ul>
      <div className="footer">
        <small>&copy; Gato Negro Barber 💈🐈‍⬛</small>
      </div>
    </div>
  )
}

export default App
