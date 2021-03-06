import { logEvent } from '@firebase/analytics';
import { ENVIRONMENT } from './constants';
import {analytics} from './firebaseConfig';

export const ANALYTICS_logEvent = (eventName, obj) => {
    // Only log for production and not localhost.
    if (ENVIRONMENT === "DEVELOPMENT"
        || !window.location.origin.includes('localhost:3000')) {
        try {
            logEvent(
                analytics,
                eventName,
                obj,
            );
        } catch(err) {
            console.error(err);
        }
        // firebase.analytics().logEvent(eventName, obj);
    }
    else {
        console.log('Analytics event caught: ', eventName, obj);
    }
}