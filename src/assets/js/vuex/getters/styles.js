import _ from "lodash";

export const activeFont = state => getStyleProperty(state, state.screen.active, state.tags.active, 'font', state.fonts.fonts[0]);
export const activeFontWeight = state => getStyleProperty(state, state.screen.active, state.tags.active, 'weight', 100);
export const activeFontSize = state => getStyleProperty(state, state.screen.active, state.tags.active, 'size', 12);
export const activeLineHeight = state => getStyleProperty(state, state.screen.active, state.tags.active, 'lineHeight', 1);
export const activeAlignment = state => getStyleProperty(state, state.screen.active, state.tags.active, 'alignment', 'left');
export const activeTextStyle = state => getStyleProperty(state, state.screen.active, state.tags.active, 'style', 'normal');
export const activeTextDecoration = state => getStyleProperty(state, state.screen.active, state.tags.active, 'decoration', 'none');
export const activeFontKerning = state => getStyleProperty(state, state.screen.active, state.tags.active, 'kerning', 'auto');
export const activeTextColor = state => getStyleProperty(state, state.screen.active, state.tags.active, 'color', '#000000');

export const css = state => {
    let css = '';

    for (let tag of state.tags.tags) {
        let styleName = tag === 'body' ? '' : tag;

        for (let size of state.screen.sizes) {
            css += `
                #tt-project.screen--${size} .styleSample ${styleName} {
                    font-family: ${ getStyleProperty(state, size, tag, 'font', state.fonts[0]) };
                    font-size: ${ getStyleProperty(state, size, tag, 'size', 12) }px;
                    font-weight: ${ getStyleProperty(state, size, tag, 'weight', 100) };
                    line-height: ${ getStyleProperty(state, size, tag, 'lineHeight', 1) }em;
                    text-align: ${ getStyleProperty(state, size, tag, 'alignment', 'left') };
                    
                    font-style: ${ getStyleProperty(state, size, tag, 'style', 'normal') };
                    text-decoration: ${ getStyleProperty(state, size, tag, 'decoration', 'none') };
                    font-kerning: ${ getStyleProperty(state, size, tag, 'kerning', 'auto') };
                    
                    color: ${ getStyleProperty(state, size, tag, 'color', '#000000') };
                }
            `;
        }
    }

    return css;
};

const getStyleProperty = (state, screen, tag, property, _default) => _.get(state, `styles[${screen}][${tag}].${property}`, _.get(state, `styles[desktop][body].${property}`, _default));