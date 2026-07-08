import Hero from '../components/Hero';
import IdCard from '../components/IdCard';      
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div id="home"><Hero /></div>
      <IdCard />                                 
      <div id="tech"><TechStack /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
}
