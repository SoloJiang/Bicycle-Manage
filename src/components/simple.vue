<template lang="jade">
div.container-fluid
	div.row.topNav(align="center") 我的
	div.row.rowAll.rowBg(v-link="{ path: '/myself/sign' }")
		img(src="../assets/normal.jpg", alt="")
		span.word 登录/注册
		span.right &gt;
	div.row.rowBg(v-link="{ path: '/gps' }")
		span.word(style="margin: 20px;display:inline-block") 我的状态
		span.rightTwo &gt;
	div.row.rowBg(v-link="{ path: '/gps' }")
		span.word(style="margin: 20px;display:inline-block") 我的停车记录
		span.rightTwo &gt;
	div.row.rowBg(v-link="{ path: '/gps' }")
		span.word(style="margin: 20px;display:inline-block")
			设置
		span.rightTwo &gt;
</template>
 
<script>
export default {
  props: ['msg'],
  route: {
    data: function () {
      this.msg = true;
    }
  }
}
</script>

<style lang="sass">
.rightCommon
	float: right;
	font-size: 24px;
	color: #C7C7C7;
	margin-right: 20px;
div.rowAll
	margin-top: 60px;
div.rowAll img
	width: 60px;
	height: 60px;
	border-radius: 50%;
	margin: 14px;
div.rowBg
	background-color: #fff;
	margin-bottom: 16px;
	border: 1px solid #E6E6E6;
	cursor: pointer
span.word
	font-size: 18px;
	color: #000;
	vertical-align: middle
span.right
	@extend .rightCommon;
	line-height: 90px;	
span.rightTwo
	@extend .rightCommon;
	line-height: 64px;
</style>