if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // alert(lat);
    // alert(lon);
    const map = document.querySelector("iframe");
    map.src += `bbox=${lon}%2C${lat}%2C${lon}%2C${lat}&layer=mapnik&marker=${lat}%2C${lon}`;
  });
} else {
  alert("Geolocation is not supported by this browser.");
}
