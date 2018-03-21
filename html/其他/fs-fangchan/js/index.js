window.onload=function(){
	autoSize();

	var obj3 = document.getElementsByClassName("loupan-img");
    var k;
	for (k = 0; k < obj3.length; k++) {
		
        obj3[k].onmouseover=function(){
        	var child=this.childNodes;
            child[3].style.display="block";
            autoSize();
        }
        obj3[k].onmouseout=function(){
        	var child=this.childNodes;
        	child[3].style.display="none";

        }
	}
}

function autoSize(){
	
	var obj1 = document.getElementsByClassName("my-hot-loupan-description");
	var i;
	for (i = 0; i < obj1.length; i++) {
	    var marginH=obj1[i].offsetWidth/2*-1;
	    obj1[i].style.marginLeft=marginH+"px";
	}
	
	var obj2 = document.getElementsByClassName("loupan-cover-content");
    var j;
	for (j = 0; j < obj2.length; j++) {
	    var marginH=obj2[j].offsetHeight/2*-1;
	    obj2[j].style.marginTop=marginH+"px";
	}
}
