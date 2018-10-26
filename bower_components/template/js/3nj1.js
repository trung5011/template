// source --> https://vincity.com/wp-content/themes/vincity/assets/scripts/main.js?ver=0.1 
// Add Plugin Tabs
(function($){
    // Tabs Plugin
    $.fn.tabs_new = function(){
        var wrap = $(this);
        var head = wrap.find('[data-head]');
        var content = wrap.find('[data-content]');
        
        this.reset = (function(){ 
            head.not(head.first()).removeClass('is-active');
            content.not(content.first()).hide();
        }).call(this);

        this.headClick = head.click(function(event){
            event.preventDefault();
            
            if ( $(this).hasClass('is-active') ) {
                return false;
            }
            
            var content_target = $(this).attr('href');

            head.removeClass('is-active');
            content.hide();

            $(this).addClass('is-active');
            $(content_target).fadeIn();
        });

        return this;
    };
})(jQuery);

jQuery(document).ready(function ($) {
    /**
     * Format tel phone in tag a
     */
    $('a[href^="tel:"]').attr('href', function(_,v){
        return v.replace(/\(0\)|\s+/g,'');
    });

    /**
     * Button back to top in footer
     */
    $('#js-back-to-top').click(function(event){
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /**
     * Menu hamburger on mobile
     */
    if ( $(window).width() <= 768 ) { 
        $('#js-menu-hamburger').click(function(event){
            event.preventDefault();
            $('#js-menu-hamburger, #js-menu-mobile, #js-header-tools-mobile').stop().toggleClass('is-open');

            $('html').stop().toggleClass('ovfh');
        });
    }
});



/*Check validate form */
function hasNumber(myString) {
    return /\d/.test(myString);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhonenumber(number) {
    var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ ;
    return re.test(String(number));
};
// source --> https://vincity.com/wp-content/themes/vincity/assets/bower_components/typed.min.js?ver=0.1 
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.8
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */
(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
})(this, function () {
    return function (t) {
        function e(n) {
            if (s[n]) return s[n].exports;
            var i = s[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }

        var s = {};
        return e.m = t, e.c = s, e.p = "", e(0)
    }([function (t, e, s) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var i = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, s, n) {
                return s && t(e.prototype, s), n && t(e, n), e
            }
        }(), r = s(1), o = s(3), a = function () {
            function t(e, s) {
                n(this, t), r.initializer.load(this, s, e), this.begin()
            }

            return i(t, [{
                key: "toggle", value: function () {
                    this.pause.status ? this.start() : this.stop()
                }
            }, {
                key: "stop", value: function () {
                    this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                }
            }, {
                key: "start", value: function () {
                    this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                }
            }, {
                key: "destroy", value: function () {
                    this.reset(!1), this.options.onDestroy(this)
                }
            }, {
                key: "reset", value: function () {
                    var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                }
            }, {
                key: "begin", value: function () {
                    var t = this;
                    this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
                        t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                    }, this.startDelay)
                }
            }, {
                key: "typewrite", value: function (t, e) {
                    var s = this;
                    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                    var n = this.humanizer(this.typeSpeed), i = 1;
                    return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void(this.timeout = setTimeout(function () {
                        e = o.htmlParser.typeHtmlChars(t, e, s);
                        var n = 0, r = t.substr(e);
                        if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                            var a = 1;
                            r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
                        }
                        if ("`" === r.charAt(0)) {
                            for (; "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length));) ;
                            var u = t.substring(0, e), l = t.substring(u.length + 1, e + i), c = t.substring(e + i + 1);
                            t = u + l + c, i--
                        }
                        s.timeout = setTimeout(function () {
                            s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                        }, n)
                    }, n))
                }
            }, {
                key: "keepTyping", value: function (t, e, s) {
                    0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                    var n = t.substr(0, e);
                    this.replaceText(n), this.typewrite(t, e)
                }
            }, {
                key: "doneTyping", value: function (t, e) {
                    var s = this;
                    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
                        s.backspace(t, e)
                    }, this.backDelay))
                }
            }, {
                key: "backspace", value: function (t, e) {
                    var s = this;
                    if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var n = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function () {
                        e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                        var n = t.substr(0, e);
                        if (s.replaceText(n), s.smartBackspace) {
                            var i = s.strings[s.arrayPos + 1];
                            i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                        }
                        e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                    }, n)
                }
            }, {
                key: "complete", value: function () {
                    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                }
            }, {
                key: "setPauseStatus", value: function (t, e, s) {
                    this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
                }
            }, {
                key: "toggleBlinking", value: function (t) {
                    this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                }
            }, {
                key: "humanizer", value: function (t) {
                    return Math.round(Math.random() * t / 2) + t
                }
            }, {
                key: "shuffleStringsIfNeeded", value: function () {
                    this.shuffle && (this.sequence = this.sequence.sort(function () {
                        return Math.random() - .5
                    }))
                }
            }, {
                key: "initFadeOut", value: function () {
                    var t = this;
                    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
                        t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                    }, this.fadeOutDelay)
                }
            }, {
                key: "replaceText", value: function (t) {
                    this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                }
            }, {
                key: "bindFocusEvents", value: function () {
                    var t = this;
                    this.isInput && (this.el.addEventListener("focus", function (e) {
                        t.stop()
                    }), this.el.addEventListener("blur", function (e) {
                        t.el.value && 0 !== t.el.value.length || t.start()
                    }))
                }
            }, {
                key: "insertCursor", value: function () {
                    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                }
            }]), t
        }();
        e["default"] = a, t.exports = e["default"]
    }, function (t, e, s) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {"default": t}
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
            }
            return t
        }, o = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, s, n) {
                return s && t(e.prototype, s), n && t(e, n), e
            }
        }(), a = s(2), u = n(a), l = function () {
            function t() {
                i(this, t)
            }

            return o(t, [{
                key: "load", value: function (t, e, s) {
                    if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
                        return t.trim()
                    }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                        t.strings = [], t.stringsElement.style.display = "none";
                        var n = Array.prototype.slice.apply(t.stringsElement.children), i = n.length;
                        if (i) for (var o = 0; o < i; o += 1) {
                            var a = n[o];
                            t.strings.push(a.innerHTML.trim())
                        }
                    }
                    t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                        status: !1,
                        typewrite: !0,
                        curString: "",
                        curStrPos: 0
                    }, t.typingComplete = !1;
                    for (var o in t.strings) t.sequence[o] = o;
                    t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                }
            }, {
                key: "getCurrentElContent", value: function (t) {
                    var e = "";
                    return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                }
            }, {
                key: "appendAnimationCss", value: function (t) {
                    var e = "data-typed-js-css";
                    if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                        var s = document.createElement("style");
                        s.type = "text/css", s.setAttribute(e, !0);
                        var n = "";
                        t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
                    }
                }
            }]), t
        }();
        e["default"] = l;
        var c = new l;
        e.initializer = c
    }, function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var s = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 700,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onComplete: function (t) {
            },
            preStringTyped: function (t, e) {
            },
            onStringTyped: function (t, e) {
            },
            onLastStringBackspaced: function (t) {
            },
            onTypingPaused: function (t, e) {
            },
            onTypingResumed: function (t, e) {
            },
            onReset: function (t) {
            },
            onStop: function (t, e) {
            },
            onStart: function (t, e) {
            },
            onDestroy: function (t) {
            }
        };
        e["default"] = s, t.exports = e["default"]
    }, function (t, e) {
        "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var n = function () {
            function t(t, e) {
                for (var s = 0; s < e.length; s++) {
                    var n = e[s];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, s, n) {
                return s && t(e.prototype, s), n && t(e, n), e
            }
        }(), i = function () {
            function t() {
                s(this, t)
            }

            return n(t, [{
                key: "typeHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType) return e;
                    var n = t.substr(e).charAt(0);
                    if ("<" === n || "&" === n) {
                        var i = "";
                        for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length));) ;
                        e++
                    }
                    return e
                }
            }, {
                key: "backSpaceHtmlChars", value: function (t, e, s) {
                    if ("html" !== s.contentType) return e;
                    var n = t.substr(e).charAt(0);
                    if (">" === n || ";" === n) {
                        var i = "";
                        for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));) ;
                        e--
                    }
                    return e
                }
            }]), t
        }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r
    }])
});
//# sourceMappingURL=typed.min.js.map;
// source --> https://vincity.com/wp-content/themes/vincity/assets/bower_components/node_modules/clipboard/dist/clipboard.min.js?ver=4.9.8 
/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){var o,r,i;!function(a,c){r=[t,n(7)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(t){return t&&t.__esModule?t:{default:t}}(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return i(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return r(t,e,n);if(c.nodeList(t))return i(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function r(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var c=n(6),u=n(5);t.exports=o},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){r.off(t,o),e.apply(n,arguments)}var r=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var o,r,i;!function(a,c){r=[t,n(0),n(2),n(1)],o=c,void 0!==(i="function"==typeof o?o.apply(e,r):o)&&(t.exports=i)}(0,function(t,e,n,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=r(e),s=r(n),f=r(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){i(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===d(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,f.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(s.default);t.exports=p})},function(t,e){function n(t,e){for(;t&&t.nodeType!==o;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var o=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=n},function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function r(t,e,n,r,i){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,r,i)}))}function i(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}var a=n(4);t.exports=r},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}t.exports=n}])});