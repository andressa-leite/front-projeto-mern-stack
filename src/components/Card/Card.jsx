import React from 'react'

function Card({props}) {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <img src={props.image} alt="Imagem"/>
      <i className="bi bi-hand-thumbs-up"></i>
      <spam>{props.likes}</spam>
      <i className="bi bi-chat"></i>
      <span>{props.comments}</span>
    </section>
  )
}

{/* <section>
      <h2>{news[0].title}</h2>
      <p>{news[0].text}</p>
      <img src={news[0].image} alt="Imagem"/>
      <i class="bi bi-hand-thumbs-up"></i>
      <spam>{news[0].likes}</spam>
      <i class="bi bi-chat"></i>
      <span>{news[0].comments}</span>
    </section> */}

export default Card