import _ from "lodash";

export const activeFont = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].font`, _.get(state,  'styles[desktop][body].font', state.fonts.fonts[0]));
export const activeFontWeight = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].weight`, _.get(state,  'styles[desktop][body].weight', 100));
export const activeFontSize = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].size`, _.get(state,  'styles[desktop][body].size', 12));
export const activeLineHeight = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].lineHeight`, _.get(state,  'styles[desktop][body].lineHeight', 1));
export const activeAlignment = state => _.get(state, `styles[${state.screen.active}][${state.tags.active}].alignment`, _.get(state,  'styles[desktop][body].alignment', 'left'));

export const css = state => {
    let css = '';

    for (let tag of state.tags.tags) {
        let styleName = tag === 'body' ? '' : tag;

        for (let size of state.screen.sizes) {
            css += `
                #tt-project.screen--${size} ${styleName} {
                    font-family: ${ _.get(state, `styles[${size}][${tag}].font`, 'inherit') };
                    font-size: ${ _.get(state, `styles[${size}][${tag}].size`, 'inherit') };
                    font-weight: ${ _.get(state, `styles[${size}][${tag}].weight`, 'inherit') };
                    line-height: ${ _.get(state, `styles[${size}][${tag}].lineHeight`, 'inherit') };
                    text-align: ${ _.get(state, `styles[${size}][${tag}].alignment`, 'inherit') };
                }
            `;
        }
    }

    return css;
};