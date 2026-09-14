function TechnologyCard({technology, selectedStack, onAdd}){
  const isAdded=selectedStack.some((item)=>item.id===technology.id);
  return(
  <article className="technology-card">
    <div className="card-top">
      <img className="technology-icon" src={technology.icon} alt={`${technology.name} icon`}/>{technology.badge && <span className="badge">{technology.badge}</span>}</div>
      <h3>{technology.name}</h3>
      <p className="technology-description">{technology.description}</p>
      <div className="technology-info">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating">★ {technology.rating}</span></div>
        <button className={isAdded ? "add-button added" : "add-button"} onClick={()=>onAdd(technology)} disabled={isAdded}>{isAdded ? "✓ Added to Stack" : "Add to Stack"}</button></article>
        );}
        export default TechnologyCard;