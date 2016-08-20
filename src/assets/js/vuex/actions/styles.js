'use strict';

import * as mutationtypes from '../mutations';

export const setFont = ({dispatch, state}, font) => dispatch(mutationtypes.SETFONT, font);
export const setFontWeight = ({dispatch, state}, weight) => dispatch(mutationtypes.SETFONTWEIGHT, weight);
export const setFontSize = ({dispatch, state}, size) => dispatch(mutationtypes.SETFONTSIZE, size);
export const setLineHeight = ({dispatch, state}, lineheight) => dispatch(mutationtypes.SETLINEHEIGHT, lineheight);
export const setAlignment = ({dispatch, state}, alignment) => dispatch(mutationtypes.SETALIGNMENT, alignment);
