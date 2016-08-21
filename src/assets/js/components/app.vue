<template src="../../html/app.html"></template>
<style>
</style>

<script>
	'use strict';

	import { activeScreenSize, screenSizes } from '../vuex/getters/screen';
	import { activeTag, tags } from '../vuex/getters/tags';
	import { fonts } from '../vuex/getters/fonts';
	import { activeFont, activeFontWeight, activeFontSize, activeLineHeight, activeAlignment, activeTextStyle, activeTextDecoration, activeFontKerning, css } from '../vuex/getters/styles';

	import { setFont, setFontSize, setFontWeight, setLineHeight, setAlignment, setTextStyle, setTextDecoration, setFontKerning, resetStyles } from '../vuex/actions/styles';
	import { setTag } from '../vuex/actions/tags';
	import { setScreenSize } from '../vuex/actions/screen';

	export default {
		data() {
			return {}
		},
		vuex: {
			getters: {
				activeScreenSize, activeTag, fonts, tags, screenSizes,
				activeFont, activeFontWeight, activeFontSize, activeLineHeight, activeAlignment, activeTextStyle, activeTextDecoration, activeFontKerning,
				css
			},
			actions: {
				setFont, setFontSize, setFontWeight, setLineHeight, setAlignment, setTextStyle, setTextDecoration, setFontKerning,
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
			containerClass() {
				return `container--${this.activeScreenSize}`
			},
			fontStylesClass() {
				return `screen--${this.activeScreenSize}`;
			}
		}
	}
</script>

