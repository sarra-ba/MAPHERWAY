import React from 'react';


const handleButtonClick = (message) => {
  alert(message);
};

const MainContent = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0px',
        padding: '20px',
        width: '100vw', 
        height: '100vh', 
      }}
    >
      <div style={{ width: '70%', height: '100%' }}>
        <iframe
          src="https://overpass-turbo.eu/map.html?Q=%2F%2A%0AThis+Overpass+query+searches+for+multiple+types+of+amenities+%28hospitals%2C+coffee+shops%2C+police+stations%2C+etc.%29+within+a+10+km+radius+of+specific+latitude+and+longitude+coordinates.%0A%2A%2F%0A%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F+Set+latitude+and+longitude+with+a+10+km+radius%0A%28%0A++nwr%5B%22amenity%22%3D%22hospital%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22cafe%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22police%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22mall%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22pharmacy%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22shop%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22library%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22clinic%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22administration%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22fire_station%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22post_office%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A++nwr%5B%22amenity%22%3D%22bakery%22%5D%28around%3A10000%2C+36.891900250000006%2C+10.187709615252093%29%3B%0A%29%3B%0A%2F%2F+Print+results%0Aout+geom%3B%0A&fbclid=IwY2xjawGT9YxleHRuA2FlbQIxMAABHRkBC-mXZNKguendHT-naBhePv1RP5IxAnCOw57vxFkB8EP6obrTedVKlQ_aem_iS_3jsnZuRkYsZ4hOPnG8g"
          style={{ width: '100%', height: '100%', border: 'none' }} 
          title="Map Interface"
        />
      </div>
    </div>
  );
};

export default MainContent;
