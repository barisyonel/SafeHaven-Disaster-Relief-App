
function Home() {
  return (
    
    <div style={{ padding: '2rem', textAlign: 'center' }} className="fade-in">
  <h2>Welcome to Safe Haven</h2>
  <p>Your guide to understanding natural disasters.</p>
  <img 
    src="/src/assets/disaster-hero.jpg" 
    alt="Disaster Awareness" 
    style={{ width: '80%', marginTop: '1rem', borderRadius: '8px' }} 
    className="slide-up"
  />
</div>

  );
}

export default Home;
