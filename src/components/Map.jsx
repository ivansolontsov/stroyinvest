import React from 'react'

const Map = () => {
  let maps = {
      maplink: 'https://yandex.com.ge/maps/194/saratov/house/ulitsa_imeni_v_m_azina_81a/YEwYfwZiSU0BQFtrfXh0dHVlYw==/?ll=45.912085%2C51.455967&z=17',
      title: 'Проложить Маршрут'
  }
  return (
    <div className='map wide-content'>
        <a href={maps.maplink} target="_blank" rel="noreferrer">{maps.title}</a>
    </div>
  )
}

export default Map