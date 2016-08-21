<template src="../../html/app.html"></template>
<style>
</style>

<script>
	'use strict';

	import { activeScreenSize, screenSizes } from '../vuex/getters/screen';
	import { activeTag, tags } from '../vuex/getters/tags';
	import { fonts } from '../vuex/getters/fonts';
	import { activeFont, activeFontWeight, activeFontSize, activeLineHeight, activeAlignment, activeTextStyle, activeTextDecoration, activeFontKerning, activeTextColor, css } from '../vuex/getters/styles';

	import { setFont, setFontSize, setFontWeight, setLineHeight, setAlignment, setTextStyle, setTextDecoration, setFontKerning, setTextColor, resetStyles } from '../vuex/actions/styles';
	import { setTag } from '../vuex/actions/tags';
	import { setScreenSize } from '../vuex/actions/screen';
	import { Compact } from 'vue-color';

	export default {
		data() {
			return {
				pickerColors: {
					hex: this.textColor,
					hsl: {
						h: 150,
						s: 0.5,
						l: 0.2,
						a: 1
					},
					hsv: {
						h: 150,
						s: 0.66,
						v: 0.30,
						a: 1
					},
					rgba: {
						r: 25,
						g: 77,
						b: 51,
						a: 1
					},
					a: 1
				}
			}
		},
		watch: {
			pickerColors({ hex }) {
				this.textColor = hex;
			}
		},
		vuex: {
			getters: {
				activeScreenSize, activeTag, fonts, tags, screenSizes,
				activeFont, activeFontWeight, activeFontSize, activeLineHeight, activeAlignment, activeTextStyle, activeTextDecoration, activeFontKerning, activeTextColor,
				css
			},
			actions: {
				setFont, setFontSize, setFontWeight, setLineHeight, setAlignment, setTextStyle, setTextDecoration, setFontKerning, setTextColor,
				setTag, setScreenSize,
				resetStyles
			}
		},
		methods: {
			setActiveScreen(screen) {
				this.setScreenSize(screen);
			},
			setActiveTag(tag) {
				this.setTag(tag);
			},
			content(tag) {
				return `<${tag}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<${tag}>`;
			},
			isActiveScreenSize(screenSize) {
				return screenSize === this.activeScreenSize;
			},
			isActiveTag(tag) {
				return tag === this.activeTag;
			},
			reset() {
				this.resetStyles();
			}
		},
		computed: {
			fontFamily: {
				get() {
					return this.activeFont;
				},
				set(font){
					return this.setFont(font);
				}
			},
			fontWeight: {
				get() {
					return this.activeFontWeight;
				},
				set(weight){
					return this.setFontWeight(weight);
				}
			},
			fontSize: {
				get() {
					return this.activeFontSize;
				},
				set(size){
					return this.setFontSize(size);
				}
			},
			lineHeight: {
				get() {
					return this.activeLineHeight;
				},
				set(lineheight){
					return this.setLineHeight(lineheight);
				}
			},
			alignment: {
				get() {
					return this.activeAlignment;
				},
				set(alignment){
					return this.setAlignment(alignment);
				}
			},
			textStyle: {
				get() {
					return this.activeTextStyle;
				},
				set(style){
					return this.setTextStyle(style);
				}
			},
			textDecoration: {
				get() {
					return this.activeTextDecoration;
				},
				set(decoration){
					return this.setTextDecoration(decoration);
				}
			},
			fontKerning: {
				get() {
					return this.activeFontKerning;
				},
				set(kerning){
					return this.setFontKerning(kerning);
				}
			},
			textColor: {
				get() {
					return this.activeTextColor;
				},
				set(color){
					return this.setTextColor(color);
				}
			},
			containerClass() {
				return `container--${this.activeScreenSize}`
			},
			fontStylesClass() {
				return `screen--${this.activeScreenSize}`;
			}
		},
		components: {
			'color-picker': Compact
		}
	}
</script>

