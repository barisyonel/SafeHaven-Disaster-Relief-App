// ✅ Gerekli paketleri çağırıyoruz
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5500;

// ✅ CORS izinlerini açıyoruz
app.use(cors());

// ✅ Ülke API'sini yöneten endpoint
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get('https://countriesnow.space/api/v0.1/countries');
    res.json(response.data);
  } catch (error) {
    console.error("Country API Error:", error);
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

// ✅ shelters.json'u okuyup gönderen endpoint
app.get('/api/shelters', (req, res) => {
  const filePath = path.join(__dirname, '../public/shelters.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Shelters JSON Error:", err);
      return res.status(500).json({ error: 'Shelters JSON okunamadı' });
    }
    res.json(JSON.parse(data));
  });
});

// ✅ Sunucuyu başlatıyoruz
app.listen(PORT, () => {
  console.log(`✅ API Çalışıyor: http://localhost:${PORT}`);
});
