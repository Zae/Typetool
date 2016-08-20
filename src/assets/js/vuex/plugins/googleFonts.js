'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import _ from "lodash";
import * as mutationtypes from '../mutations';

Vue.use(VueResource);

export default function googleFontsPlugin (store, state) {
    // called when the store is initialized

    Vue.http.get('https://www.googleapis.com/webfonts/v1/webfonts', {
        params: {
            key: 'AIzaSyA290UdG3ALufKpLM6cvDhKTOU5mNs1lP8'
        }
    })
    .then(function (resp) {
        let fonts = _.map(resp.json().items, function(item) {
             return item.family;
        });

        store.dispatch(mutationtypes.ADDFONTS, fonts);
    });
};