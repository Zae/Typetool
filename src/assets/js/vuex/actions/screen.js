'use strict';

import * as mutationtypes from '../mutations';

export const setScreenSize = ({dispatch, state}, screensize) => dispatch(mutationtypes.SETACTIVESCREENSIZE, screensize);
