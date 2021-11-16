import { staticConstants } from "../Constants/staticConstants";


const initialState = {
    allnotification: [],
    newnotification: [],
    notificationcount: 0
};

export const staticReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case staticConstants.ALL_NOTIFICATIONS:
            return { ...state, allnotification: payload };
        case staticConstants.NEW_NOTIFICATIONS:
            return { ...state, newnotification: payload };
        case staticConstants.NOTIFICATION_COUNT:
            return { ...state, notificationcount: payload };

        default:
            return state;
    }
};