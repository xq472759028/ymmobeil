//根据class名称获取元素,此案例中之所以要用class获取元素名称,是为了可以控制多个元素( text,text1 )的字符串度.
function getByClass(oParent, sClass) {
	if (oParent.getElementsByClassName) {
		return oParent.getElementsByClassName(sClass);
	} else { //IE 8 7 6
		var arr = [];
		var reg = new RegExp('\\b' + sClass + '\\b');
		var aEle = oParent.getElementsByTagName('*');
		for (var i = 0; i < aEle.length; i++) {
			if (reg.test(aEle[i].className)) {
				arr.push(aEle[i]);
			}
		}
		return arr;
	}
}
function testAuto() {
	var textName = getByClass(document, 'text');
	console.log(textName)
	for (var i = 0; i < textName.length; i++) {
		var nowLeng = textName[i].innerHTML.length;
		if (nowLeng > 30) {
			var nowWord = textName[i].innerHTML.substr(0, 30) + '······';
			textName[i].innerHTML = nowWord;
		}
	}
}