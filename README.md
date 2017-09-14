# PopUp #

### A simple pop-up box plugin, but if u want to give some help, don't be stingy, just show me the code!!! ###

##### How to use: #####
=======

\<html>: 
 
	<div id="MyDiv"></div>

\<js>:

	let popup = new PopUp('MyDiv',{
		width: '', //弹出框宽度(px)
		height: '', //弹出框高度(px)
		text: '', //描述(string)
		color: '', //字体颜色
		SgColor : '', //弹出框背景颜色
		BgColor: '', //背景颜色
		fontSize: '',	//字体大小(px)
		left: '', //弹出框距离左侧位置(px)
		top: '',	//弹出框距离顶部位置(px)
		borderRadius: '', //弹出框边角(px)
		loadingClass: '', //loading动画样式(loader0~loader7)
		marginTop: '', //loading动画margin-top(px)
		textAlign: '', //文字对齐方式(left, center, right)
		textMarginTop: '', //文字距离loading动画距离(px)
		fadeInSpeed: '',	//淡入时速度(number)
		fadeOutSpeed: ''	//淡出时速度(number)
	});

	document.getElementById('MyDiv').onclick = function () {
        	popup.fadeIn();
	}
    

#### All parameters are not required, we have a default parameters. ####
    
###  Thanks!!!  ###
