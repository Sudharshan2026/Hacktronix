import { useEffect, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CollegeMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  if (!mapLoaded) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-gray-800">
        <div className="text-green-500">Loading map...</div>
      </div>
    );
  }

  const position: [number, number] = [12.96043665338172, 80.05727834978828];

  // Fix Leaflet marker icon issue
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  return (
    <div className="py-16 bg-gray-950 flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 py-10 px-6">
      {/* Left Section: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left p-6">
        <h2 className="text-3xl font-bold text-white-800">Find Us Here</h2>
        <p className="mt-4 text-gray-300">
          Visit us at <strong>Sri Sairam Engineering College</strong>, the venue for <strong>Hacktronix 1.0</strong>.
        </p>
        <p className="mt-2 text-gray-300">
          Explore the location on the map to get directions.
        </p>
      </div>

      {/* Right Section: Map */}
      <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <div className="text-gray-900">
                <strong>Sri Sairam Engineering College</strong><br />
                Venue for Hacktronix 1.0
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default CollegeMap;
