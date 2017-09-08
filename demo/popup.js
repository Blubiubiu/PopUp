;let PopUp = function (obj, options) {
	//安全模式
	if (this instanceof PopUp) {

		let _left,
			_top,
			elem;
	
		//计算未指明位置情况下弹出框默认位置
		if (options.left === undefined) {
			if (options.width === undefined) {
				_left = (window.screen.width - 100)/2 + 'px';
			}else {
				_left = (window.screen.width - options.width.substring(0,options.width.length - 2))/2 + 'px';
			}
		}
		if (options.top === undefined) {
			if (options.height === undefined) {
				_top = (window.screen.height - 100)/2 + 'px';
			}else {
				_top = (window.screen.width - options.height.substring(0,options.height.length - 2))/2 + 'px';
			}
		}

		const DEFAULT_OPTION = {
			width: '100px', //弹出框宽度
			height: '100px', //弹出框高度
			text: '请稍后...', //描述
			color: '#fff', //字体颜色
			SgColor : 'rgba(0, 0, 0, .5)', //弹出框背景颜色
			BgColor: 'rgba(0, 0, 0, .5)', //背景颜色
			fontSize: '14px',	//字体大小
			left: _left, //弹出框距离左侧位置
			top: _top,	//弹出框距离顶部位置
			borderRadius: '5px', //弹出框边角
			loadingClass: 'loader1', //loading动画样式
			marginTop: '10px', //loading动画margin-top
			textAlign: 'center', //文字对齐方式
			textMarginTop: '1px', //文字距离loading动画距离
			fadeInSpeed: '50',	//淡入时速度
			fadeOutSpeed: '50'	//淡出时速度
		};

		this.obj = obj || window;
		this.width = options.width || DEFAULT_OPTION.width;
		this.height = options.height || DEFAULT_OPTION.height;
		this.text = options.text || DEFAULT_OPTION.text;
		this.color = options.color || DEFAULT_OPTION.color;
		this.SgColor = options.SgColor || DEFAULT_OPTION.SgColor;
		this.BgColor = options.BgColor || DEFAULT_OPTION.BgColor;
		this.fontSize = options.fontSize || DEFAULT_OPTION.fontSize;
		this.left = options.left || DEFAULT_OPTION.left;
		this.top = options.top || DEFAULT_OPTION.top;
		this.borderRadius = options.borderRadius || DEFAULT_OPTION.borderRadius;
		this.loadingClass = options.loadingClass || DEFAULT_OPTION.loadingClass;
		this.marginTop = options.marginTop || DEFAULT_OPTION.marginTop;
		this.textAlign = options.textAlign || DEFAULT_OPTION.textAlign;
		this.textMarginTop = options.textMarginTop || DEFAULT_OPTION.textMarginTop;
		this.fadeInSpeed = options.fadeInSpeed || DEFAULT_OPTION.fadeInSpeed;
		this.fadeOutSpeed = options.fadeOutSpeed || DEFAULT_OPTION.fadeOutSpeed;

		
		//添加弹出框
		let _html = `<div class="popup-wrapper" style="background-color: ${this.BgColor};"><div class="popup-content" style=" top: ${this.top}; left: ${this.left}; width: ${this.width}; height: ${this.height}; border-radius: ${this.borderRadius}; background-color: ${this.SgColor}; font-size: ${this.fontSize}; color: ${this.color}; text-align: ${this.textAlign};"><div class=${this.loadingClass} style="margin-top: ${this.marginTop};"></div><p style="margin-top: ${this.textMarginTop};">${this.text}</p></div></div>`;

		let wrapper = document.getElementById(obj);
		
		wrapper.innerHTML = _html;

		elem = document.getElementById(this.obj).querySelector('.popup-wrapper');
		this.elem = elem;
		
	}else {
		return new PopUp(obj, options);
	}
};

PopUp.prototype = {
	constructor: PopUp,
	init: function() {
		return this;
	},
	show: function () {
		this.elem.style.display = 'block';
	},
	hide: function () {
		this.elem.style.display = 'none';
	},
	fadeIn: function() {
		let speed = this.fadeInSpeed;
		let that = this;
		this.elem.style.display = "block";
		setOpacity(that.elem, 0);

		let tempOpacity = 0;

		(function stepByStep(){
			setOpacity(that.elem, tempOpacity);
			tempOpacity += 0.05;
			if(tempOpacity <= 1) {
				setTimeout(stepByStep(), speed);
			}
		})();
	},
	fadeOut: function() {
		let speed = this.fadeOutSpeed;
		let that = this;
		setOpacity(that.elem, 1);

		let tempOpacity = 1;

		(function stepByStep(){
			setOpacity(that.elem, tempOpacity);
			tempOpacity -= 0.05;
			if(tempOpacity > 0) {
				setTimeout(stepByStep(), speed);
			}else {
				that.elem.style.display = "none";
			}
		})();
	}
}

//兼容opacity
function setOpacity(elem, opacity) {
    if(elem.style.filter) {   //IE
        elem.style.filter = 'alpha(opacity:' + opacity * 100 + ')';
    } else {
        elem.style.opacity = opacity;    
    }
}