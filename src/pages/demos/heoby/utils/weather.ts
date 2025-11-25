export function getWeatherIcon(condition: string): string {
    // Return a placeholder image or emoji for now
    // In a real app, this would map condition to an asset URL
    return `https://placehold.co/48x48?text=${condition[0]}`;
}
