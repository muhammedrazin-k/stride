export type ActivityType = 'walking' | 'running';

export const calculateStrideLength = (heightCm: number, activity: ActivityType): number => {
    // Walking stride = height × 0.415
    // Running stride = height × 0.65
    const factor = activity === 'walking' ? 0.415 : 0.65;
    return heightCm * factor;
};

export const calculateSteps = (distanceKm: number, strideLengthCm: number): number => {
    if (strideLengthCm === 0) return 0;
    const distanceMeters = distanceKm * 1000;
    const strideLengthMeters = strideLengthCm / 100;
    return Math.round(distanceMeters / strideLengthMeters);
};
