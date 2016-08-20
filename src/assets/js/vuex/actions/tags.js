'use strict';

import * as mutationtypes from '../mutations';

export const setTag = ({dispatch, state}, tag) => dispatch(mutationtypes.SETACTIVETAG, tag);
