console.log("JavaScript file is linked correctly.");

// Fetch weather data
const getWeather = async () => {
    const latitude = 49.26577136756231;
    const longitude = -123.14872769817461;

    try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weather = response.data.current_weather;
        $(".temp").text(`Vancouver temp. = ${weather.temperature}°C`);
        $(".wind").text(`Vancouver wind = ${weather.windspeed}°C`);
        console.log(`Temperature: ${weather.temperature}°C`);
        console.log(`Wind Speed: ${weather.windspeed} km/h`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        }
};

getWeather();





