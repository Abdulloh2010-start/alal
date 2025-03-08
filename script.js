const Kenglik = document.querySelector('.Kenglik');
const Uzunlik = document.querySelector('.Uzunlik');
const Mamlakat = document.querySelector('.Mamlakat');
const Shahar = document.querySelector('.Shahar');
const IP = document.querySelector('.IP');
const Internet = document.querySelector('.Internet');
const mapContainer = document.getElementById('mapContainer');
const getLocation = document.getElementById("getLocation");

async function getUserLocation() {
    try {
        const response = await fetch('https://ipinfo.io/json?token=892eb47eb242c2');
        const data = await response.json();
        const [lat, lon] = data.loc.split(",");
        Kenglik.innerHTML = `Kenglik: ${lat}`;
        Uzunlik.innerHTML = `Uzunlik: ${lon}`;
        Mamlakat.innerHTML = `Mamlakat: ${data.country}`;
        Shahar.innerHTML = `Shahar: ${data.city}`;
        IP.innerHTML = `IP Manzil: ${data.ip}`;
        Internet.innerHTML = `Internet provayder: ${data.org}`;
        mapContainer.innerHTML = `
            <iframe src="https://www.google.com/maps?q=${lat},${lon}&z=15&output=embed"></iframe>
        `;
    } catch (error) {
        console.log("Xatolik yuz berdi:" + error);
    }
}

getLocation.addEventListener("click", getUserLocation);