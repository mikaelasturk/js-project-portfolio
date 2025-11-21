export const CardImg = (project) => {
  return (
    <>
      <img className="card-img" src={project.image} alt={project.alt}/>
    </>
  )
}