export function formatReadingTime(minutes) {
    let cups = Math.round(minutes / 5);
    if (cups > 5) {
        return `${new Array(Math.round(cups / Math.E))
            .fill('🥪')
            .join('')} ${minutes} mins read`;
    } else {
        return `${new Array(cups || 1).fill('🍵').join('')} ${
            minutes === 1 ? minutes + " min" : minutes + " mins"
        } to read (suggested)`;
    }
}