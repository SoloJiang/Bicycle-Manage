<template lang="jade">
div.container-fluid
  div.row.topNav(align="center") 登录
    span.closeSign(@click="closeSign") 关闭
  div.row.rowSign
    div.spanBorder
      span.glyphicon.glyphicon-tree-deciduous
  div.row
    input.signIput(type="text" placeholder="校园卡号" v-model="user_id")
  div.row
    input.signIput(type="password" placeholder="密码" v-model="user_password")
  div.row
    button.subBut 登录
  div.row(style="margin-top:50px;text-align:center")
    span(style="color:#0D9879;cursor: pointer;" v-link="{ path : '/myself/register'}") 注册账号
    &nbsp;或者&nbsp;
    span(style="color:#0D9879;cursor: pointer;" v-link="{ path : '/myself/forget'}") 找回密码
</template>

<script>
import router from '../router';
export default {
  data () {
  	return {
      user_id: '',
      user_password: '',
  	}
  },
  methods: {
    closeSign () {
      router.go({ path: '/myself/simple'})
    }
  },
  props: ['msg'],
  route: {
    data: function () {
      this.msg = false;
      this.user_id = '';
      this.user_password = '';
      return {
      }
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
  cursor: pointer;
div.rowSign
  margin-top: 90px;
  margin-bottom: 30px;
div.spanBorder
  text-align: center;
  span
    font-size: 60px;
    color: #0D9879;
    border: 1px solid #c7c7c7;
    padding: 20px;
    border-radius: 50%;
input.signIput
  margin-left: 10%;
  width: 80%;
  background-color: #fff;
  height: 50px;
  font-size: 18px;
  margin-bottom: 20px;
  padding-left: 6px;
  border: none
button.subBut
  padding: 10px;
  background-color: #0D9879;
  color: #fff;
  font-size: 20px;
  width: 90%;
  margin-left: 5%;
  margin-top: 30px;
  border: none;
</style>