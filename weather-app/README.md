# Weather App

A responsive weather application built with vanilla JavaScript using async functions and the OpenWeather API.

## Features

- Search weather by city name
- Display current temperature, weather description, humidity, wind speed, and feels-like temperature
- Responsive design that works on desktop and mobile
- Loading states and error handling
- Beautiful weather icons
- Async/await for API calls

## Setup Instructions

### 1. Get OpenWeather API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Generate a new API key (it may take a few hours to activate)

### 2. Configure the App

1. Open `script.js` in the weather-app folder
2. Replace `'YOUR_API_KEY_HERE'` with your actual OpenWeather API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

### 3. Run the App

Open `index.html` in your web browser to use the weather app.

## Usage

1. Enter a city name in the search input
2. Click the search button or press Enter
3. View the current weather information for that location
4. The app will automatically load weather for London on startup

## File Structure

```
weather-app/
├── index.html      # Main HTML structure
├── script.js       # JavaScript with async functions
├── style.css       # CSS styling
└── README.md       # This file
```

## API Integration

The app uses the OpenWeatherMap Current Weather Data API:
- Endpoint: `https://api.openweathermap.org/data/2.5/weather`
- Parameters: city name, API key, metric units
- Response includes: temperature, weather description, humidity, wind speed, etc.

## Error Handling

The app handles various error scenarios:
- Invalid city names
- Network connectivity issues
- API rate limits
- Invalid API keys

## Browser Support

Works in all modern browsers that support:
- ES6+ (async/await, fetch API)
- CSS Grid and Flexbox
- Modern JavaScript features

## License

This is a free to use weather application for educational purposes.
