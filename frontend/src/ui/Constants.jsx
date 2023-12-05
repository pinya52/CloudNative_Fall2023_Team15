// Testing constants, which shold be removed after backend is implemented
export const userId = 1;
export const reservationId = 1;
export const fakeLocations = [
    {
        name: 'Parking Lot 2',
        remain: 34,
        capacity: 70,
        priority: true,
    },
    {
        name: 'Parking Lot 3',
        remain: 32,
        capacity: 40,
    },
    {
        name: 'Parking Lot 4',
        remain: 30,
        capacity: 100,
    },
    {
        name: 'Parking Lot 5',
        remain: 28,
        capacity: 280,
        priority: true,
    },
    {
        name: 'Parking Lot 6',
        remain: 22,
        capacity: 75,
    },
    {
        name: 'Parking Lot 7',
        remain: 20,
        capacity: 30,
    },
    {
        name: 'Parking Lot 8',
        remain: 3,
        capacity: 100,
        priority: true,
    },
]

// Testcase setup constants
export const API_PATTERNS = {
    MY_CAR: /my_car/,
    PARKING_LOTS: /parking_lots/,
    PROFILE: /profile/,
    RESERVATION: /reservation/,
    HISTORY: /history/,
    USER_STATUS: /user_status/,
};
export const getApiType = (url) => {
    for (const [key, value] of Object.entries(API_PATTERNS)) {
        if (value.test(url)) {
            return key;
        }
    }
    return undefined;
};

// Production constants, which may still need to be changed
export const BASE_URL = 'http://localhost:5000';