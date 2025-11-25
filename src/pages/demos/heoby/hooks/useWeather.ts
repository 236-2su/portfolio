export function useWeather() {
    const now = new Date();
    const forecast = Array.from({ length: 24 }, (_, i) => {
        const time = new Date(now);
        time.setHours(now.getHours() + i);
        return {
            time,
            condition: i % 3 === 0 ? 'Sunny' : i % 3 === 1 ? 'Cloudy' : 'Rainy',
            temperature_c: 20 + Math.floor(Math.random() * 10),
        };
    });

    return {
        data: {
            weather_forecast: forecast,
        },
        isLoading: false,
        error: null,
    };
}
