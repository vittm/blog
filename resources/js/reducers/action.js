let localId = 1;
function genUniqueId(obj){
	for(let k in obj){
		obj[k] = ++localId;
	}
	return obj;
} //unique
export const PopupActions= genUniqueId ({
    IS_SHOW_HIDDEN: 'IS_SHOW_HIDDEN'
});