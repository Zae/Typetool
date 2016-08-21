import _ from "lodash";

export const activeFont = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].font`, _.get(state, 'styles[desktop][body].font', state.fonts.fonts[0]));
export const activeFontWeight = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].weight`, _.get(state, 'styles[desktop][body].weight', 100));
export const activeFontSize = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].size`, _.get(state, 'styles[desktop][body].size', 12));
export const activeLineHeight = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].lineHeight`, _.get(state, 'styles[desktop][body].lineHeight', 1));
export const activeAlignment = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].alignment`, _.get(state, 'styles[desktop][body].alignment', 'left'));
export const activeTextStyle = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].style`, _.get(state, 'styles[desktop][body].style', 'normal'));
export const activeTextDecoration = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].decoration`, _.get(state, 'styles[desktop][body].decoration', 'none'));
export const activeFontKerning = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].kerning`, _.get(state, 'styles[desktop][body].kerning', 'auto'));
export const activeTextColor = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].color`, _.get(state, 'styles[desktop][body].color', '#000000'));

export const css = state => {
    let css = '';

    for (let tag of state.tags.tags) {
        let styleName = tag === 'body' ? '' : tag;

        for (let size of state.screen.sizes) {
            css += `
                #tt-project.screen--${size} .styleSample ${styleName} {
                    font-family: ${ activeFont(state) };
                    font-size: ${ activeFontSize(state) }px;
                    font-weight: ${ activeFontWeight(state) };
                    line-height: ${ activeLineHeight(state) }em;
                    text-align: ${ activeAlignment(state) };
                    
                    font-style: ${ activeTextStyle(state) };
                    text-decoration: ${ activeTextDecoration(state) };
                    font-kerning: ${ activeFontKerning(state) };
                    
                    color: ${ activeTextColor(state) };
                }
            `;
        }
    }

    return css;
};