import React from 'react'

const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.img}/>
        <p>{props.title}</p>
        <p>Year:{props.year}</p>
        <p>Imdb:{props.imdb}</p>
    </div>
  )
}

export default Movie