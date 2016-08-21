import _ from 'lodash';

export const fonts = state => state.fonts.fonts;
export const activeFonts = state => _.flattenDeep(_.map(state.styles, tags => _.map(tags, tag => tag.font)));