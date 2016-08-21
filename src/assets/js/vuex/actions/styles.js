'use strict';

import * as mutationtypes from '../mutations';

export const setFont = ({dispatch, state}, font) => dispatch(mutationtypes.SETFONT, font);
export const setFontWeight = ({dispatch, state}, weight) => dispatch(mutationtypes.SETFONTWEIGHT, weight);
export const setFontSize = ({dispatch, state}, size) => dispatch(mutationtypes.SETFONTSIZE, size);
export const setLineHeight = ({dispatch, state}, lineheight) => dispatch(mutationtypes.SETLINEHEIGHT, lineheight);
export const setAlignment = ({dispatch, state}, alignment) => dispatch(mutationtypes.SETALIGNMENT, alignment);

export const setTextStyle = ({dispatch, state}, style) => dispatch(mutationtypes.SETTEXTSTYLE, style);
export const setTextDecoration = ({dispatch, state}, decoration) => dispatch(mutationtypes.SETTEXTDECORATION, decoration);
export const setFontKerning = ({dispatch, state}, kerning) => dispatch(mutationtypes.SETFONTKERNING, kerning);

export const resetStyles = ({dispatch, state}) => dispatch(mutationtypes.RESETSTYLES);
