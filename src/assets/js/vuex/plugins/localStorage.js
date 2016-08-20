'use strict';

import localStorage from 'store';
import * as mutationtypes from '../mutations';

export default function localStoragePlugin (store, state) {
    // called when the store is initialized
    const storedStyles = localStorage.get('styles');

    if (storedStyles) {
        store.dispatch(mutationtypes.SETSTYLES, storedStyles);
    }

    store.subscribe((mutation, state) => {
        // called after every mutation.
        // The mutation comes in the format of { type, payload } for normal
        // dispatches, and will be the original mutation object for object-style
        // dispatches.

        localStorage.set('styles', state.styles);
    })
};