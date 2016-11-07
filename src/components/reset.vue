<template lang="jade">
div.container-fluid
	div.row.topNav(align="center") 重置密码
	span.closeSign(@click="closeSign") 取消
	div.row(style="margin-top:100px")
	div.row
		input.resIput(type="text" placeholder="校园卡号" v-model="user_id")
	div.row
		input.resIput(type="password" placeholder="邮箱" v-model="user_mail")
	div.row(align='center')
		button.subButton(@click='subInfo') 提交
</template>
 
<script>
import router from '../router';
export default {
	data () {
		return {
			user_id: '',
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
button.subButton
  padding: 10px;
  background-color: #0D9879;
  color: #fff;
  font-size: 20px;
  width: 90%;
  margin-top: 80px;
  border: none;
</style>