'use client';

import { useEffect, useRef } from 'react';

export default function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load Leaflet library
    const loadMap = async () => {
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(link);

      // Add style to keep map below navbar
      const style = document.createElement('style');
      style.textContent = `
        .leaflet-container {
          z-index: 0 !important;
        }
        .leaflet-control {
          z-index: 10 !important;
        }
        .leaflet-popup {
          z-index: 20 !important;
        }
      `;
      document.head.appendChild(style);

      // Load JS and initialize map
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = () => {
        // Check if window.L (Leaflet) is available
        const L = (window as any).L;
        if (!L || !mapContainer.current) return;

        // Glasgow coordinates: 55.8642, -4.2518
        const map = L.map(mapContainer.current).setView([55.8642, -4.2518], 13);

        // Add OpenStreetMap tiles (free alternative to Google Maps)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Add marker for the business location
        // 16 Duncansby Road, Glasgow G33 4QX - approximate coordinates
        const marker = L.marker([55.85821, -4.14222], {
          icon: L.icon({
            iconUrl: '/logo2.png',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
            className: 'rounded-full'
          }),
        });

        marker
          .addTo(map)
          .bindPopup(
            '<div style="text-align: center;"><strong>SM Heating & Plumbing</strong><br/>16 Duncansby Road<br/>Glasgow G33 4QX<br/><a href="tel:+441234567890">Call: +44 (0) 123 456 7890</a></div>'
          )
          .openPopup();
      };

      document.head.appendChild(script);
    };

    loadMap();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-[500px] rounded-lg shadow-lg border-2 border-gray-200 relative z-0"
    />
  );
}
