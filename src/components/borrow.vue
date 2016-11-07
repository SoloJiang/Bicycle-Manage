<template lang="jade">
div.container-fluid
  div.topNav(align="center") 车位信息
  div.row.rowAll
  div.row.rowBg2
    span.distance #距离您365m
    div.goal 大学生活动中心
    div.stopNumber 目前剩余5个车位
  div.row.rowBg2
    span.distance #距离您200m
    div.goal 东门菜鸟驿站
    div.stopNumber 目前剩余0个车位
  div.row.rowBg2
    span.distance #距离您432m
    div.goal 南二食堂
    div.stopNumber 目前剩余2个车位
</template>

<script>
export default {
  data () {
  	return {
  	}
  },
  props: ['msg'],
  route: {
    data: function () {
      this.msg = true;
      return {}
    }
  }
}
</script>

<style lang="sass">
  div.goal
    font-size: 18px;
    color: #424240;
    margin: 10px;
  div.stopNumber
    font-size: 14px;
    color: #ABABAB;
    margin-left: 10px;
    margin-bottom: 18px;
  span.distance
    float: right;
    margin: 10px;
    color: #98AAA2;
  div.rowBg2
    background-color: #fff;
    border: 1px solid #E6E6E6;
    cursor: pointer
</style>