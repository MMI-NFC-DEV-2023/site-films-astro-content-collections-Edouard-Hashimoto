const formatter = new Intl.DateTimeFormat('fr-FR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
    timeZone: "Europe/Paris"
});


export function formatDate(date: Date): string {
    return formatter.format(date);
}