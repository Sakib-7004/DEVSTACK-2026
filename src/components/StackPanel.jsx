function StackPanel({selectedStack, onRemove, onRemoveAll}){
  const count=selectedStack.length;
  return(
    <aside className="stack-panel">
      <h2>Your Stack</h2>
      <p className="stack-count">{count===0 ? "No technologies selected yet." : `${count} Technology Selected`}</p>
      {count===0 ? (<div className="empty-stack"><p>Your stack is empty.</p></div>) : ( <>
      <div className="stack-items">{selectedStack.map((technology)=>(
        <div className="stack-item" key={technology.id}>
          <img src={technology.icon} alt=""/><div>
            <strong>{technology.name}</strong><small>{technology.category}</small></div>
            <button className="remove-item" onClick={()=>onRemove(technology.id)} aria-label={`Remove ${technology.name}`}> × </button></div>
          ))}
          </div><button className="remove-all-button" onClick={onRemoveAll}>Remove All</button></>
        )}
        </aside>
        );}
        export default StackPanel;