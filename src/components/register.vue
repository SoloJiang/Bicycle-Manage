<template lang="jade">
div.container-fluid
	div.row.topNav(align="center") 注册
	span.closeSign(@click="closeSign") 取消
	span.sub(@click="subInfo") 提交
	div.row(style="margin-top:100px")
	div.row
		input.resIput(type="text" placeholder="昵称" v-model="user_nickName" autofocus)
	div.row
		input.resIput(type="text" placeholder="校园卡号" v-model="user_id")
	div.row
		input.resIput(type="password" placeholder="密码" v-model="user_pw")
	div.row
		input.resIput(type="password" placeholder="重复密码" v-model="user_rpw")
	div.row
		input.resIput(type="text" placeholder="邮箱" v-model="user_mail")
</template>
 
<script>
import router from '../router';
export default {
	data () {
		return {
			user_nickName: '',
			user_id: '',
			user_pw: '',
			user_rpw: '',
			user_mail: ''
		}
	},
  props: ['msg'],
  methods: {
    closeSign () {
      router.go({ path: '/myself/sign'})
    },
    subInfo () {

    }
  },
  route: {
    data: function () {
      this.msg = false;
    }
  }
}
</script>

<style lang="sass">
span.closeSign
  position: absolute;
  color: #fff;
  left: 16px;
  line-height: 60px;
  font-size: 16px;
input.resIput
	margin-top: 10px;
	width: 100%;
	padding-left: 6px;
	height: 50px;
	border: none
span.sub
  position: absolute;
  right: 16px;
  line-height: 60px;
  color: #fff;
  font-size: 16px;
</style>