'use strict';

import localStorage from 'store';
import * as mutationtypes from '../mutations';

export default {
    onInit (state, store) {
        const storedState = localStorage.get('state');

        // if (storedState) {
        //     store.dispatch(mutationtypes.SETSTATE, storedState);
        // }
    },
    onMutation (mutation, state, store) {
        // called after every mutation.
        // The mutation comes in the format of { type, payload }

        // localStorage.set('state', state);
    }
};