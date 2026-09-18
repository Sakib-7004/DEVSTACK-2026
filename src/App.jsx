import {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";
function App(){
  const [technologies, setTechnologies]=useState([]);
  const [selectedStack, setSelectedStack]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    fetch(`${import.meta.env.BASE_URL}technologies.json`)
    .then((response)=>response.json())
      .then((data)=>{
        setTechnologies(data);
        setLoading(false);
      })
      .catch(()=>{
        setLoading(false);
        toast.error("Could not load the technology data.");
      });
  }, []);
  const addToStack=(technology)=>{
    const alreadyAdded=selectedStack.some(
      (item)=>item.id===technology.id
    );
    if (alreadyAdded){
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setSelectedStack([...selectedStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };
  const removeFromStack=(id)=>{
    const removedTechnology=selectedStack.find((item)=>item.id===id);
    setSelectedStack(selectedStack.filter((item)=>item.id!==id));
    if (removedTechnology){
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }};
  const removeAll=()=>{
    if (selectedStack.length===0){
      toast.warning("Your stack is already empty.");
      return;
    }
    setSelectedStack([]);
    toast.info("All technologies were removed from your stack.");
  };
  return(
    <><Navbar/>
      <main>
        <Hero/>
        <section className="technologies-section" id="technologies">
          <div className="section-heading">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p></div>
            {loading ? (
              <div className="loading-box">
              <div className="spinner"></div>
              <p>Loading technologies...</p></div>
              ) : (
              <div className="technology-layout">
              <div className="technology-grid">
                {technologies.map((technology)=>(
                  <TechnologyCard key={technology.id} technology={technology} selectedStack={selectedStack} onAdd={addToStack}/>
                  ))}
                  </div>
                  <StackPanel selectedStack={selectedStack} onRemove={removeFromStack} onRemoveAll={removeAll}/></div>
                )}
                </section></main><Footer/><ToastContainer position="top-right" autoClose={1800}/></>
                );}
                export default App;
