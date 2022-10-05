import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    
    <footer>
      <div>
        Desenvolvido por Leonardo Cavalcanti <br/>
        Direitos de imagem para <a  className="netflix-color" href="https://www.netflix.com/br/" target="_blank">Netflix <small>©</small></a> <br/>
        Dados consumidos do <a className="db-color" href="https://www.themoviedb.org/" target="_blank">The Movie DB <small>©</small></a>
      </div>
    </footer>
  )
}

export default Footer