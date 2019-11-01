import React from 'react'

function CitiesList(props) {
  const {cities} = props;
  return (
    <section>
      <h2>List of my visited cities</h2>
      {cities.length > 0 ? cities.map((city, index) => {
        return (
          <article key={index}>
            <h3>{city.name}</h3>
            <p>The population is: {city.population}</p>
            <p>The area is: {city.area}</p>
          </article>
        )
      }): <p>No visited cities</p>}
    </section>
  )
}

export default CitiesList;