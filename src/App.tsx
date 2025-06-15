import './App.css'
import primerGif from './assets/PRIMERGIF.gif'
import segundoGif from './assets/SEGUNDOGIF.gif'
import Confetti from './Confetti'
import { useState } from 'react'

function App() {
  const [noClicks, setNoClicks] = useState(0)
  const [aceptado, setAceptado] = useState(false)
  const [mostrarMusica, setMostrarMusica] = useState(false)

  // El tamaño del botón Sí crece indefinidamente hasta que se presiona Sí
  const siScale = aceptado ? 1 : 1 + noClicks * 0.2

  if (aceptado) {
    return (
      <div className={`pastel-background fade-in${mostrarMusica ? ' darken-bg' : ''}`}>
        <div className="center-content">
          <h1 className="pregunta">¡Sabía que dirías que sí!</h1>
          <h2 className="mensaje-final">¡Eres mi melocotoncito!</h2>
          {!mostrarMusica && (
            <button className="btn-musica" onClick={() => setMostrarMusica(true)}>
              Reproducir música
            </button>
          )}
          {mostrarMusica && (
            <iframe
              className="spotify-player"
              src="https://open.spotify.com/embed/track/0sz1wmBpB9gKh9zFV9YMFe?utm_source=generator"
              width="300"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Crush - Cigarettes After Sex"
              style={{ marginBottom: '2rem', borderRadius: '12px' }}
            ></iframe>
          )}
          <img src={segundoGif} alt="Gif celebración" className="gif-central" />
        </div>
        <footer className="footer-jherry">© Jherry Visalot</footer>
        <Confetti />
      </div>
    )
  }

  return (
    <div className="pastel-background">
      <div className="center-content">
        <h1 className="pregunta">Me permitirias tu mi melocotoncito, ser tu novio?</h1>
        <div className="botones-respuesta">
          <button
            className="btn-si"
            style={{ transform: `scale(${siScale})` }}
            onClick={() => setAceptado(true)}
          >
            Sí
          </button>
          <button
            className="btn-no"
            onClick={() => setNoClicks(noClicks + 1)}
          >
            No
          </button>
        </div>
        <img src={primerGif} alt="Gif tierno" className="gif-central" />
      </div>
      <footer className="footer-jherry">© Jherry Visalot</footer>
    </div>
  )
}

export default App
