// OpenWeather API configuration
const API_KEY = '7fe9ea4ac59fef82e9cda5ba9abb3b49'; // Replace with your OpenWeather API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const errorMessage = document.getElementById('error-message');
const weatherContainer = document.getElementById('weather-container');

// Weather display elements
const cityNameEl = document.getElementById('city-name');
const countryEl = document.getElementById('country');
const tempEl = document.getElementById('temp');
const weatherIconEl = document.getElementById('weather-icon');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const feelsLikeEl = document.getElementById('feels-like');

// Event listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Main search handler
function handleSearch() {
    const city = cityInput.value.trim();
    if (city) {
        getWeatherData(city);
    }
}

// Async function to fetch weather data
async function getWeatherData(city) {
    showLoading();
    hideError();
    hideWeather();

    try {
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.cod === '404') {
            throw new Error('City not found');
        }
        
        displayWeather(data);
        
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }
}

// Display weather data
function displayWeather(data) {
    const { name, sys, main, weather, wind } = data;
    
    cityNameEl.textContent = name;
    countryEl.textContent = sys.country ? `, ${sys.country}` : '';
    tempEl.textContent = Math.round(main.temp);
    descriptionEl.textContent = weather[0].description;
    humidityEl.textContent = `${main.humidity}%`;
    windSpeedEl.textContent = `${wind.speed} m/s`;
    feelsLikeEl.textContent = `${Math.round(main.feels_like)}°C`;
    
    // Set weather icon
    const iconCode = weather[0].icon;
    weatherIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIconEl.alt = weather[0].description;
    
    showWeather();
}

// UI state management functions
function showLoading() {
    loadingEl.classList.remove('hidden');
}

function hideLoading() {
    loadingEl.classList.add('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    errorEl.classList.remove('hidden');
}

function hideError() {
    errorEl.classList.add('hidden');
}

function showWeather() {
    weatherContainer.classList.remove('hidden');
}

function hideWeather() {
    weatherContainer.classList.add('hidden');
}

// Initialize with a default city
getWeatherData('London');
