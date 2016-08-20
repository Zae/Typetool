import _ from 'lodash';

export const fonts = state => state.fonts.fonts;
export const activeFonts = state => {
    return _.flattenDeep(_.map(state.styles, function (tags) {
        return _.map(tags, function (tag) {
            return tag.font;
        });
    }));
};