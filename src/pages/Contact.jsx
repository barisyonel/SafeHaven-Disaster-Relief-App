function Contact() {
	return (
	  <div style={{ padding: '2rem' }} className="fade-in">
		<h2 style={{ textAlign: 'center', color: '#1D3557' }}>Contact Us</h2>
		<p style={{ textAlign: 'center' }}>
		  Reach out for support or share important information. We're here to help!
		</p>
  
		{/* Emergency Contacts */}
		<section className="slide-up" style={{ marginTop: '2rem' }}>
		  <h3 style={{ color: '#E63946' }}>Emergency Numbers</h3>
		  <ul style={{
			lineHeight: '2',
			background: '#f8f8f8',
			padding: '1.5rem',
			borderRadius: '8px',
			boxShadow: '0 0 10px rgba(0,0,0,0.1)'
		  }}>
			<li><strong>Emergency Hotline:</strong> 103</li>
			<li><strong>Fire Department:</strong> 101</li>
			<li><strong>Police:</strong> 102</li>
			<li><strong>Pharmacy Help:</strong> 1567</li>
		  </ul>
		</section>
  
		{/* ✅ Contact Form - Formspree Entegre */}
		<section className="slide-up" style={{ marginTop: '3rem' }}>
		  <h3 style={{ color: '#457B9D' }}>Send Us a Message</h3>
		  <form
			action="https://formspree.io/f/xwplqvrr"
			method="POST"
			style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', gap: '1rem' }}
		  >
			<input
			  type="text"
			  name="name"
			  placeholder="Your Name"
			  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
			  required
			/>
			<input
			  type="email"
			  name="email"
			  placeholder="Your Email"
			  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
			  required
			/>
			<textarea
			  name="message"
			  placeholder="Your Message"
			  rows="5"
			  style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}
			  required
			></textarea>
			<button
			  type="submit"
			  style={{ padding: '1rem', background: '#1D3557', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
			>
			  Send
			</button>
		  </form>
		</section>
	  </div>
	);
  }
  
  export default Contact;
  