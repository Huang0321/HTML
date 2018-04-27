function $(id){
	return document.getElementById(id);
}

function handleEvent(elem, evtName, callback){
	if(elem.addEventListener){
		return elem.addEventListener(evtName, callback);
	}else{
		return elem.attachEvent("on" + evtName, callback);
	}
}
