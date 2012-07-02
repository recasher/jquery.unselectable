(function ($) {
	'use strict';
	
	var settings = {
		preSelectable: true,
		codeSelectable: true
	};
	
	var methods = {
		init: function(settings) {
			settings = $.extend(settings, options);
		},
		disableSelect: function() {
			this.each(function () {
				if(this.tagName == "pre" && settings.preSelectable)
					return this;
				if(this.tagName == "code" && settings.codeSelectable)
					return this;
				this.onselectstart = function () { return false };
				this.unselectable = "on";
				$(this).css("-moz-user-select", "none");
			});
		},
		enableSelect: function() {
			this.each(function () {
				this.onselectstart = function () { return true };
				this.unselectable =  "off";
				$(this).css("-moz-user-select", "auto");
			});
		}
	};
	
	$.fn.extend({
		unselectable: function (method) {
			if ( methods[method] ) {
				return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
				return methods.init.apply( this, arguments );
			}
		}
	});
	
	$(document).ready(function () {
		if (!!$("body").attr("ds")) {
			$("body *").unselectable("disableSelect");
		}
	});
})(jQuery);
