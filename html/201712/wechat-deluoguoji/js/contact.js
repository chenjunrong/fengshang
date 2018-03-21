	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.1115732759,23.0242689281);
	map.centerAndZoom(point, 20);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	
	var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
	map.addControl(top_right_navigation); 