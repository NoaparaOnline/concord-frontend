import { staticConstants } from "../Constants/staticConstants";


const initialState = {
    allnotification: [],
    newnotification: [],
    notificationcount: 0,
    thanaLoader: false,
    thanaList: []
};

export const staticReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case staticConstants.ALL_NOTIFICATIONS:
            return { ...state, allnotification: payload };

        case staticConstants.NEW_NOTIFICATIONS:
            return { ...state, newnotification: payload };

        case staticConstants.NOTIFICATION_COUNT:
            return { ...state, notificationcount: payload };
        
        case staticConstants.GET_THANA_REQUEST:
            return { ...state, thanaLoader: true };

        case staticConstants.GET_THANA_SUCCESS:
            return { ...state, thanaLoader: false, thanaList: payload };

        case staticConstants.GET_THANA_FAIL:
            return { ...state, thanaLoader: false };
    
        default:
            return state;
    }
};