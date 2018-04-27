function $(id){
	return document.getElementById(id);
}

function handleEvent(elem, en, callback){
	if (elem.addEventListener){
		elem.addEventListener(en, callback);
	}else{
		elem.attachEvent("on" + en, callback);
	}
}
/**
 * 获取当前对象的属性
 * @param {HTMLElement} elem
 */
function getCurrentStyle(elem){
	if (elem.currentStyle){
		return current.Style;
	}else{
		return document.defaultView.getComputedStyle(elem);
	}
}

