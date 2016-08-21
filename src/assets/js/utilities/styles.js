'use strict';

import _ from 'lodash';

export const setActiveProperty = ({styles, screen, tags}, property, value) => {
    return _.merge({}, styles, {
        [screen.active]: {
            [tags.active]: {
                [property]: value
            }
        }
    });
};