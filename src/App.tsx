import { Suspense } from 'react';
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Technologies from './components/Technologies'
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
const technologiesPromise = async ()=> {
  const res = await fetch("../public/data/technologies.json");
  const data = await res.json();
  return data;
};
function App() {

  return (
      <>
      <ToastContainer position="top-right" />
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<p>Loading.....</p>}><Technologies technologiesPromise={technologiesPromise()}></Technologies></Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
