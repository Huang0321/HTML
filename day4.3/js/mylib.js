/**
 * 通过ID获取元素
 * @param {String} id 元素的ID
 */
function $(id){
	return document.getElementById(id);
}

/**
 * 为元素绑定处理事件的回调函数
 * @param {HTLElement} elem
 * @param {String} evtName
 * @param {Function} callback
 */
function handleEvent(elem, evtName, callback){
	if (elem.addEventListener){
		elem.addEventListener(evtName, callback);
	}else{
		elem.attachEvent("on" + evtName, callback);
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

