<template lang="jade">
router-view(keep-alive,:msg.sync="bottom",transition="fade"
  transition-mode="out-in")
div.navBar(v-show='bottom')
	span.col-xs-4(align="center",v-link="{ path: '/gps',activeClass: 'active',exact: true }")
		span.glyphicon.glyphicon-record
		div 周边
	span.col-xs-4(align="center",v-link="{ path: '/borrow',activeClass: 'active',exact: true }")
		span.glyphicon.glyphicon-sort
		div 车位信息
	span.col-xs-4(align="center",v-link="{ path: '/myself/simple',activeClass: 'active',exact: true }")
		span.glyphicon.glyphicon-user
		div 我的
</template>

<script>
export default {
  data () {
    return {
      bottom: true
    }
  }
}
</script>

<style lang="sass">
@import 'assets/top.scss'
.fade-transition
  transition: all .2s ease;
.fade-enter
	transform: translate(100%,0);
.fade-leave
	opacity: 0
html
	height: 100%;
body
	background-color: #F2F2F2;
	font-family: arial;
	height: 100%;
div.navBar
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 60px;
	background-color: #F2F2F2;
	border-top: 1px solid #DEDEDE;
	z-index: 1000;
span.col-xs-4
	color: #898989;
	text-decoration: none;
	cursor: pointer
span.glyphicon
	margin-top: 10px;
	font-size: 22px;
div.container-fluid
	padding: 0;
	height: 100%;
div.topNav
	width: 100%;
	position: absolute;
	top: 0;
	background-color: $bgc;
	height: $h;
	line-height: $h;
	color: #fff;
	font-size: $fsz;
div.row
	margin: 0;
	padding: 0
span.active
	color: $bgc;
</style>
