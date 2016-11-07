<template lang="jade">
div.container-fluid
	router-view(:msg.sync="msg")
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
      this.msg = 2;
      console.log(this.msg);
      return {}
    }
  }
}
</script>

<style lang="sass">

</style>