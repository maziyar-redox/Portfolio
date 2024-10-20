export function HexColor(): string {
    const rainbowColors: string[] = [
        'FF0000', // Red
        'FF7F00', // Orange
        'FFFF00', // Yellow
        '00FF00', // Green
        '0000FF', // Blue
        '4B0082', // Indigo
        '9400D3'  // Violet
    ];
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
};