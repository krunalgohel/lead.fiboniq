import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

const MapSection = () => {
  const position = [34.673279, 33.011389]

  return (
    <div className="h-[600px] w-full overflow-hidden shadow-lg pt-20">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={markerIcon}>
          <Popup>
            <strong>Our Office</strong><br /> Lemesos 3052, Cyprus
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapSection