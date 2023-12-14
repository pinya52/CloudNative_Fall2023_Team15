import { BASE_URL } from "./Constants";
import axios from "axios";

const my_car = {
    /**
     * @param {number} userId
     * 
     * @returns {Promise}
     *  data: {  
     *  * car_id: int,  
     *  * parking_spot_number: int,  
     *  * area_name: string,  
     *  * area_floor: int,  
     *  * parking_lot_name: string,  
     *  * start_time: datetime,  
     *  }
     */
    get: (userId) => axios.get(BASE_URL + '/mycar/' + userId, { crossdomain: true }),
}

const parking_lots = {
    /**
     * @returns {Promise}
     *  data: {  
     *  * parkinglot_id: int,  
     *  * name: string,  
     *  * current_capacity: int,  
     *  * maximum_capacity: int,  
     *  * priority: bool,
     *  }
     */
    get: () => axios.get(BASE_URL + '/parkinglots'),
}

const profile = {
    /**
     * @param {number} userId
     * 
     * @returns {Promise}
     *  data: {  
     *  * id: int,  
     *  * preference_lot_id: int,  
     *  * preference_lot_name: string,  
     *  * preference_area_id: int,  
     *  * preference_area_name: string,  
     *  * preference: int,  
     *  * role: string,  
     *  * priority: string,  
     *  * expired: datetime,  
     *  }
     */
    get: (userId) => axios.get(BASE_URL + '/profile/' + userId, { crossDomain: true }),

    /**
     * @param {number} userId
     * @param {number} preference
     * @param {string} role
     * @param {string} priority
     * 
     * @returns {Promise}
     *  data: {  
     *  * id: int,  
     *  * preference: int,  
     *  * role: string,  
     *  * priority: string,  
     *  * expired: datetime,  
     *  }
     */
    put: (userId, preference, role, priority) => axios.put(
            BASE_URL + '/profile/' + userId,
            {
                preference: preference,
                role: role,
                priority: priority,
            },
            { crossdomain: true }
        ),
    
    /**
     * @param {number} userId
     * @param {number} preference
     * @param {string} role
     * @param {string} priority
     * 
     * @returns {Promise}
     *  data: {  
     *  * id: int,  
     *  * preference: int,  
     *  * role: string,  
     *  * priority: string,  
     *  * expired: datetime,  
     *  }
     */
    post: (userId, preference, role, priority) => axios.post(
            BASE_URL + '/profile/' + userId,
            {
                user_id: userId,
                preference: preference,
                role: role,
                priority: priority,
            },
            { crossdomain: true }
        ),
}

const reservation = {
    /**
     * @param {number} carId
     * 
     * @returns {Promise}
     *  data: {  
     *  * car_id: int,  
     *  * parking_spot_number: int,  
     *  * area_name: string,  
     *  * area_floor: int,  
     *  * parking_lot_name: string,  
     *  * reservation_time: datetime,  
     *  * expired_time: datetime,  
     *  }
     */
    get: (carId) => axios.get(BASE_URL + '/reservation/' + carId, { crossdomain: true }),

    /**
     * @param {number} carId
     * @param {number} parkingSpotId
     * 
     * @returns {Promise}
     *  data: {  
     *  * reservation_id: int,  
     *  }
     */
    post: (carId, parkingSpotId) => axios.post(
            BASE_URL + '/reservation',
            {
                car_id: carId,
                parking_spot_id: parkingSpotId,
            },
            { crossdomain: true }
        ),
    
    /**
     * @param {number} carId
     * 
     * @returns {Promise}
     *  data: {  
     *  * message: string,  
     *  }
     */
    delete: (carId) => axios.delete(BASE_URL + '/reservation/' + carId, { crossdomain: true }),
}

const history = {
    /**
     * @param {number} spotId
     * 
     * @returns {Promise}
     *  data: {  
     *  * type: string,  
     *  * user_id: int,  
     *  * license: string,  
     *  * start_time: datetime,  
     *  * end_time: datetime,  
     *  }
     */
    get: (spotId) => axios.get(BASE_URL + '/history/' + spotId, { crossdomain: true }),
}

const user_status = {
    /**
     * @param {number} userId
     * 
     * @returns {Promise}
     *  data: {  
     *  * status: string,  
     *  }
     */
    get: (userId) => axios.get(BASE_URL + '/userstatus/' + userId, { crossdomain: true }),
}

const login = {
    /**
     * @param {string} account
     * @param {string} password
     * 
     * @returns {Promise}
     *  data: {  
     *  * user_id: int,  
     *  }
     */
    post: (account, password) => axios.post(
            BASE_URL + '/login',
            {
                account: account,
                password: password,
            },
            { crossdomain: true }
        ),
}

export const API = {
    my_car: my_car,
    parking_lots: parking_lots,
    profile: profile,
    reservation: reservation,
    history: history,
    user_status: user_status,
    login: login,
};
