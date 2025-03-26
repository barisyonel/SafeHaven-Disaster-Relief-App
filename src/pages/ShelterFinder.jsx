import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Marker ikonunu düzeltiyoruz
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ShelterFinder() {
  const shelters = [
    // Türkiye
    { id: 1, name: "Istanbul Shelter", position: [41.0082, 28.9784] },
    { id: 2, name: "Ankara Safe Point", position: [39.9334, 32.8597] },
    { id: 3, name: "Izmir Refugee Center", position: [38.4192, 27.1287] },
    { id: 4, name: "Antalya Coastal Shelter", position: [36.8969, 30.7133] },
    { id: 5, name: "Trabzon Mountain Safe Zone", position: [41.0015, 39.7178] },

    // Ukrayna
    { id: 6, name: "Kiev Central Shelter", position: [50.4501, 30.5234] },
    { id: 7, name: "Lviv Safe Zone", position: [49.8397, 24.0297] },
    { id: 8, name: "Odessa Port Refuge", position: [46.4825, 30.7233] },
    { id: 9, name: "Dnipro Emergency Center", position: [48.4647, 35.0462] },
    { id: 10, name: "Kharkiv Public Shelter", position: [49.9935, 36.2304] },

    // Avrupa Başkentleri
    { id: 11, name: "Berlin Shelter", position: [52.5200, 13.4050] },
    { id: 12, name: "Paris Shelter", position: [48.8566, 2.3522] },
    { id: 13, name: "London Shelter", position: [51.5074, -0.1278] },
    { id: 14, name: "Rome Shelter", position: [41.9028, 12.4964] },
    { id: 15, name: "Madrid Shelter", position: [40.4168, -3.7038] },
    { id: 16, name: "Amsterdam Shelter", position: [52.3676, 4.9041] },
    { id: 17, name: "Vienna Shelter", position: [48.2082, 16.3738] },
    { id: 18, name: "Brussels Shelter", position: [50.8503, 4.3517] },
    { id: 19, name: "Athens Shelter", position: [37.9838, 23.7275] },
    { id: 20, name: "Oslo Shelter", position: [59.9139, 10.7522] },
    { id: 21, name: "Stockholm Shelter", position: [59.3293, 18.0686] },
    { id: 22, name: "Copenhagen Shelter", position: [55.6761, 12.5683] },
    { id: 23, name: "Lisbon Shelter", position: [38.7223, -9.1393] },
    { id: 24, name: "Warsaw Shelter", position: [52.2297, 21.0122] },
    { id: 25, name: "Prague Shelter", position: [50.0755, 14.4378] },
    { id: 26, name: "Budapest Shelter", position: [47.4979, 19.0402] },
    { id: 27, name: "Helsinki Shelter", position: [60.1699, 24.9384] },
    { id: 28, name: "Bern Shelter", position: [46.9481, 7.4474] },
    { id: 29, name: "Sofia Shelter", position: [42.6977, 23.3219] },
    { id: 30, name: "Belgrade Shelter", position: [44.7866, 20.4489] },
    { id: 31, name: "Zagreb Shelter", position: [45.8150, 15.9819] },
    { id: 32, name: "Ljubljana Shelter", position: [46.0569, 14.5058] },
    { id: 33, name: "Sarajevo Shelter", position: [43.8563, 18.4131] },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#1D3557' }}>Find Nearest Shelters</h2>
      <MapContainer
        center={[48, 30]} // Avrupa & Türkiye & Ukrayna ortası
        zoom={5}
        style={{ height: "600px", width: "100%", marginTop: "2rem" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shelters.map((shelter) => (
          <Marker key={shelter.id} position={shelter.position}>
            <Popup>{shelter.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default ShelterFinder;
