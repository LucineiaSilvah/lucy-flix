import './Banner.css'

const Banner = ()=>{
  return(
    <div>
      <section className='Banner'>
       <div className='Banner-conteudo'>
       <div className='Banner__despription'>
        <h2>Viva: A Vida é uma Festa</h2>
        <h3>Sinopse</h3>
        <p>
        O aspirante a músico Miguel, deve lidar com sua família que desaprova seu sonho, acaba entrando na Terra dos Mortos para encontrar seu trisavô, um cantor lendário
        </p>
       </div>
       <div className='Banner__video'>
       <iframe width="450" height="270" src="https://www.youtube.com/embed/iLmZZV-Nkuk" title="Viva  - A Vida é uma Festa | Trailer Dublado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        
       </div>
       </div>
      </section>
    </div>
  )
}

export default Banner