import React, { useState } from 'react'

import project from '../../assets/portfolio/small/commercial/0.jpg';


export default function ProjectList( {category} ) {
const [projects] = useState([
    {
        name: 'project-1',
        category: 'front-end',
        description: ''
    }
])

const currentProjects = projects.filter((project) => project.category === category);


  return (
    <div>
    <div className="flex-row">
      {projects.map((image, i) => (
        <img
          src={require(`../../assets/portfolio/small/${category}/${i}.jpg`)}
          alt={image.name}
          className="img-thumbnail mx-1"
          key={image.name}
        />
      ))}
    </div>
  </div>
  )
}
