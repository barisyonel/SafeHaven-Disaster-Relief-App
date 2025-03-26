import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

function Tips() {
  const tipsRef = useRef();

  const handleDownloadPDF = () => {
    const element = tipsRef.current;
    const options = {
      margin: 0.5,
      filename: 'disaster-tips.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div style={{ padding: '2rem' }} className="fade-in">
      {/* ✅ Bu kısım PDF'ye dönüşecek alan */}
      <div ref={tipsRef} style={{ background: '#fff', padding: '2rem', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center', color: '#1D3557' }}>Emergency Tips & Resources</h2>
        <p style={{ textAlign: 'center' }}>
          Stay prepared before, during, and after a disaster to minimize risks and protect your loved ones.
        </p>

        {/* Before Disaster */}
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#E63946' }}>Before a Disaster</h3>
          <img 
            src="/src/assets/preparation.jpg" 
            alt="Preparation" 
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} 
          />
          <ul>
            <li>Build an emergency supply kit with food, water, medicine, and first aid.</li>
            <li>Secure heavy furniture and electrical appliances.</li>
            <li>Plan evacuation routes and emergency meeting points.</li>
            <li>Stay informed through local news and alerts.</li>
          </ul>
        </section>

        {/* During Disaster */}
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ color: '#457B9D' }}>During a Disaster</h3>
          <img 
            src="/src/assets/during-disaster.jpg" 
            alt="During Disaster" 
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} 
          />
          <ul>
            <li>Stay calm and follow your emergency plan.</li>
            <li>Listen to official warnings and instructions.</li>
            <li>Use SMS or social media to contact family if networks are down.</li>
            <li>Take shelter immediately if necessary.</li>
          </ul>
        </section>
      </div>

      {/* ✅ PDF Butonu dışarıda olmalı */}
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h3 style={{ color: '#1D3557' }}>Download This Page as PDF</h3>
        <button 
          onClick={handleDownloadPDF} 
          style={{ padding: '1rem 2rem', background: '#E63946', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
        >
          📥 Download PDF
        </button>
      </div>
    </div>
  );
}

export default Tips;