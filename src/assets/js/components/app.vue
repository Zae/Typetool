<template src="../../html/app.html"></template>
<style>
</style>

<script>
	'use strict';

	import { activeScreenSize, screenSizes } from '../vuex/getters/screen';
	import { activeTag, tags } from '../vuex/getters/tags';
	import { fonts } from '../vuex/getters/fonts';
	import { activeFont, activeFontWeight, activeFontSize, activeLineHeight, activeAlignment, css } from '../vuex/getters/styles';

	import { setFont, setFontSize, setFontWeight, setLineHeight, setAlignment } from '../vuex/actions/styles';
	import { setTag } from '../vuex/actions/tags';
	import { setScreenSize } from '../vuex/actions/screen';

	export default {
		data() {
			return {}
		},
		vuex: {
			getters: {
				activeScreenSize, activeTag, fonts, tags, screenSizes,
				activeFont, activeFontWeight, activeFontSize, activeLineHeight, activeAlignment,
				css
			},
			actions: {
				setFont, setFontSize, setFontWeight, setLineHeight, setAlignment,
				setTag, setScreenSize
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
			containerClass() {
				return `container--${this.activeScreenSize}`
			},
			fontStylesClass() {
				return `screen--${this.activeScreenSize}`;
			}
		}
	}
</script>

