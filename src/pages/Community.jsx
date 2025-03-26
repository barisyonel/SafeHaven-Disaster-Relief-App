import { useState } from 'react';

function Community() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setPosts([input, ...posts]); // En yeni yorum en üste
    setInput("");
  };

  return (
    <div style={{ padding: '2rem' }} className="fade-in">
      <h2 style={{ textAlign: 'center', color: '#1D3557' }}>Community Stories</h2>
      <p style={{ textAlign: 'center' }}>
        Share your disaster experiences or offer help to others in need.
      </p>

      {/* Post Form */}
      <form onSubmit={handleSubmit} className="slide-up" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your story or message here..."
          style={{ width: '60%', height: '120px', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
        ></textarea>
        <br />
        <button 
          type="submit" 
          style={{ marginTop: '1rem', padding: '0.7rem 2rem', background: '#1D3557', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
        >
          Share
        </button>
      </form>

      {/* Posted Messages */}
      <div style={{ marginTop: '3rem' }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No stories shared yet. Be the first to share!</p>
        ) : (
          posts.map((post, index) => (
            <div 
              key={index} 
              className="slide-up"
              style={{ background: '#f1f1f1', padding: '1.5rem', marginBottom: '1.5rem', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
            >
              {post}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Community;
