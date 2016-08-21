'use strict';

import Vue from 'vue';
import Vuex from 'vuex';

import * as mutationtypes from './mutations';
import localStoragePlugin from './plugins/localStorage';

import _ from 'lodash';
import { setActiveProperty } from '../utilities/styles';

// Make vue aware of vuex
Vue.use(Vuex);

// We create an object to hold the initial state when
// the app starts up
const state = {
    screen: {
        sizes: ['desktop', 'tablet', 'mobile'],
        active: 'desktop'
    },
    tags: {
        tags: ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'blockquote'],
        active: 'body'
    },
    fonts: {
        fonts: ['Arial', 'Helvetica', 'Courier', 'Palatino Linotype', 'Verdana'],
    },
    styles: {}
};

// Create an object storing various mutations. We will write the mutation
const mutations = {
    [mutationtypes.SETSTYLES](state, newStyles) {
        state.styles = _.merge({}, state.styles, newStyles);
    },
    [mutationtypes.RESETSTYLES](state) {
        state.styles = {};
    },
    [mutationtypes.SETFONT](state, font) {
        state.styles = setActiveProperty(state, 'font', font);
    },
    [mutationtypes.SETFONTWEIGHT](state, weight) {
        state.styles = setActiveProperty(state,  'weight', weight);
    },
    [mutationtypes.SETFONTSIZE](state, size) {
        state.styles = setActiveProperty(state, 'size', size);
    },
    [mutationtypes.SETLINEHEIGHT](state, lineHeight) {
        state.styles = setActiveProperty(state, 'lineHeight', lineHeight);
    },
    [mutationtypes.SETALIGNMENT](state, alignment) {
        state.styles = setActiveProperty(state, 'alignment', alignment);
    },
    [mutationtypes.SETTEXTSTYLE](state, style) {
        state.styles = setActiveProperty(state, 'style', style);
    },
    [mutationtypes.SETTEXTDECORATION](state, decoration) {
        state.styles = setActiveProperty(state, 'decoration', decoration);
    },
    [mutationtypes.SETFONTKERNING](state, kerning) {
        state.styles = setActiveProperty(state, 'kerning', kerning);
    },
    [mutationtypes.SETTEXTCOLOR](state, color) {
        state.styles = setActiveProperty(state, 'color', color);
    },
    [mutationtypes.SETACTIVETAG](state, tag) {
        state.tags.active = tag;
    },
    [mutationtypes.SETACTIVESCREENSIZE](state, screen) {
        state.screen.active = screen;
    },
};

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
    state,
    mutations,
    plugins: [localStoragePlugin]
});