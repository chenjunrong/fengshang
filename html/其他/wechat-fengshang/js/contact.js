$(window).load(function(){
   baiduMap();//创建地图 			 		 
});


function baiduMap(){
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.0424391810,23.0119153490);
	map.centerAndZoom(point, 18);
	
	//创建小狐狸
	var pt = new BMap.Point(113.0424391810, 23.0119153490);
	var myIcon = new BMap.Icon("http://lbsyun.baidu.com/jsdemo/img/fox.gif", new BMap.Size(200,104));
	var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker2);              // 将标注添加到地图中
	
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
	map.addControl(top_right_navigation); 
}
