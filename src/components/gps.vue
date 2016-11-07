<template lang="jade">
div.container-fluid
	div.row.topNav(align="center") 周边
	div.row#rowMap
		div#map
</template>

<script>
export default {
	props: ['msg'],
  route: {
    data: function () {
      this.msg = true;
    }
  },
	ready () {
		let mapDOM = document.getElementById('map');
		let rowMapDOM = document.getElementById('rowMap');
		//调整地图的大小
		rowMapDOM.style.height = (document.body.clientHeight - 60) + 'px';
		mapDOM.style.height = (document.body.clientHeight - 117) + 'px';

		let geolocation = new qq.maps.Geolocation("V5PBZ-6B63F-PICJE-NM7NS-AVLSV-UMFVM", "车位管理系统");
		geolocation.getLocation(function(position) {
			let center = new qq.maps.LatLng(position.lat, position.lng);
			let map = new qq.maps.Map(mapDOM,{
			center: center,
			zoom: 23,                       //设置缩放级别
      draggable: true,               //设置是否可以拖拽
      scrollwheel: true,             //设置是否可以滚动
      disableDoubleClickZoom: true    //设置是否可以双击放大
			});
			var marker = new qq.maps.Marker({
        position: center,
        map: map,
    	});
    	var cirle = new qq.maps.Circle({
			    center: new qq.maps.LatLng(position.lat, position.lng),
			    radius: 50,
			    map: map
			});
			//车桩所在位置标记
			var station = new qq.maps.LatLng(32.1169282750,118.9315900441);
			var markerObj = new qq.maps.Marker({
				position: station,
				map: map,
			});
			console.log(markerObj.style);
			var info = new qq.maps.InfoWindow({
        map: map
    	});
			qq.maps.event.addListener(markerObj, 'click', function() {
        info.open(); 
        info.setContent('<div style="text-align:center;white-space:nowrap;'+
        'margin:10px;">剩余5个车桩</div>');
        info.setPosition(station); 
    	});
		},function() {
			alert("定位失败！");
		});
  }
}
</script>

<style lang="sass">
div#map
	width: 100%;
div#rowMap
	margin-top: 60px;
	height: 100%;
</style>