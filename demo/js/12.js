(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1808:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"default",function(){return VideoModal});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_HotspotModal__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1815),react_redux__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),reselect__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(22),reselect__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_8__),_VideoController__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1894),dxc_flex__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(28),dxc_flex__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(dxc_flex__WEBPACK_IMPORTED_MODULE_10__),constants__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(10),constants__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_11__),_effectorFileName="/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js",_dec,_class,_class2,_temp;!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},selector=Object(reselect__WEBPACK_IMPORTED_MODULE_8__.createSelector)(function(_){return _.sound.isPlay},function(_){return _.voice.isPlay},function(_){return _.hotspot.audioURL},function(_,e,a){return{sound:_,voice:e,audioURL:a}}),dispatchFn=function(_){return{temporaryPause:function(){_({type:"voice/temporaryPause"}),_({type:"sound/temporaryPause"}),_({type:"audioModal/temporaryPause"})},recovery:function(){_({type:"voice/recovery"}),_({type:"sound/recovery"}),_({type:"audioModal/recovery"})}}},VideoModal=(_dec=Object(react_redux__WEBPACK_IMPORTED_MODULE_7__.b)(selector,dispatchFn),_dec((_temp=_class2=function(_React$Component){function VideoModal(){var _,e;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,VideoModal);for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(VideoModal)).call.apply(_,[this].concat(t)))).renderVideo=function(){var _=e.props.data.subData,a=_.coverUrl,t=_.videoUrl;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_VideoController__WEBPACK_IMPORTED_MODULE_9__.a,{src:"".concat(constants__WEBPACK_IMPORTED_MODULE_11__.MEDIA_DOMAIN).concat(t),poster:"".concat(constants__WEBPACK_IMPORTED_MODULE_11__.MEDIA_DOMAIN).concat(a)})},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(VideoModal,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VideoModal,[{key:"componentDidMount",value:function(){(0,this.props.temporaryPause)()}},{key:"componentWillUnmount",value:function(){(0,this.props.recovery)()}},{key:"render",value:function(){var _=this.props.data,e=_.data,a=_.title,t=_.url,r=_.blank,l=_.linkTitle,o=_.subData;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_HotspotModal__WEBPACK_IMPORTED_MODULE_6__.a,{title:a,link:t,linkTitle:l,openInNewWindow:"1"==r,handleClose:this.props.handleClose},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(dxc_flex__WEBPACK_IMPORTED_MODULE_10___default.a,{horizontal:"center",vertical:"center",style:{height:"100%"}},o?this.renderVideo():react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"VideoModal",dangerouslySetInnerHTML:{__html:unescape(unescape(e))}})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),VideoModal}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),_class2.propTypes={},_class=_temp))||_class);!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&(_.register(selector,"selector","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js"),_.register(dispatchFn,"dispatchFn","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js"),_.register(VideoModal,"VideoModal","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoModal.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}.call(this,__webpack_require__(3)(module))},1814:function(_,e){_.exports='<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M2.804 7.84l-.167.167a3.793 3.793 0 0 0-.006 5.365 3.796 3.796 0 0 0 5.365-.006l2.37-2.37a3.793 3.793 0 0 0-.44-5.748L8.707 6.465a2.109 2.109 0 0 1 .469 3.339l-2.373 2.373a2.103 2.103 0 0 1-2.982.004A2.107 2.107 0 0 1 3.826 9.2l.17-.17-1.192-1.19zm10.391.32l.167-.167a3.793 3.793 0 0 0 .007-5.365 3.798 3.798 0 0 0-5.366.006l-2.369 2.37a3.792 3.792 0 0 0 .441 5.748l1.217-1.217a2.106 2.106 0 0 1-.469-3.338l2.373-2.374A2.104 2.104 0 1 1 12.173 6.8l-.168.169 1.19 1.19z"/></svg>'},1815:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(99),core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(100),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__),react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__),prop_types__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__),classnames_bind__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(21),classnames_bind__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_10__),_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1816),_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11__),is_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(32),is_js__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(is_js__WEBPACK_IMPORTED_MODULE_12__),react_svg_inline__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(249),react_svg_inline__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_svg_inline__WEBPACK_IMPORTED_MODULE_13__),svgs_link_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1814),svgs_link_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(svgs_link_svg__WEBPACK_IMPORTED_MODULE_14__),_utils_getClientType__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(132),_constants__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(18),_effectorFileName="/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js";!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},cx=classnames_bind__WEBPACK_IMPORTED_MODULE_10___default.a.bind(_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a),HotspotModal=function(_React$Component){function HotspotModal(_){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,HotspotModal),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(HotspotModal).call(this,_))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(HotspotModal,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(HotspotModal,[{key:"componentDidMount",value:function(){if(document&&document.body){var _,e=document.body.className;document.body.className=cx((_={},_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_,e,e),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_,"modal-open",!0),_))}}},{key:"componentWillUnmount",value:function(){document&&document.body&&(document.body.className=document.body.className.replace(/ ?modal-open/,""))}},{key:"renderLink",value:function(){var _=this.props,e=_.link,a=_.linkTitle,t=_.openInNewWindow;if(e){var r=t?"_blank":void 0;return is_js__WEBPACK_IMPORTED_MODULE_12___default.a.mobile()?react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:e,target:r,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.link},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg_inline__WEBPACK_IMPORTED_MODULE_13___default.a,{svg:svgs_link_svg__WEBPACK_IMPORTED_MODULE_14___default.a,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.linkIcon,width:"16px"})):react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:e,target:r,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.link},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_svg_inline__WEBPACK_IMPORTED_MODULE_13___default.a,{svg:svgs_link_svg__WEBPACK_IMPORTED_MODULE_14___default.a,className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.linkIcon,width:"16px"}),a||"更多内容")}}},{key:"renderCount",value:function(){var _=this.props,e=_.count,a=_.title;if(e)return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",{className:cx({count:e,onlyTitle:!a})},e)}},{key:"render",value:function(){var _=this.props,e=_.handleClose,a=_.children,t=_.className,r=_.title,l=_.count;return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:cx(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({modal:!0},t,t))},react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.header},this.renderLink(),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p",{className:cx({title:l,onlyTitle:!l}),style:{marginTop:_utils_getClientType__WEBPACK_IMPORTED_MODULE_15__.a===_constants__WEBPACK_IMPORTED_MODULE_16__.a.APP?28:0}},r),this.renderCount(),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a",{href:"javascript: void 0",className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.close,onClick:e})),react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{className:_HotspotModal_css__WEBPACK_IMPORTED_MODULE_11___default.a.body},a))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HotspotModal}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);HotspotModal.defaultProps={openInNewWindow:!1};var _default=HotspotModal;__webpack_exports__.a=_default,function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&(_.register(cx,"cx","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js"),_.register(HotspotModal,"HotspotModal","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js"),_.register(_default,"default","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/HotspotModal.js"))}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}).call(this,__webpack_require__(3)(module))},1816:function(_,e,a){_.exports={modal:"HotspotModal_modal_4jLYkI",header:"HotspotModal_header_1insoO",title:"HotspotModal_title_1htNRM",count:"HotspotModal_count_2YSBYn",onlyTitle:"HotspotModal_onlyTitle_aG8TNG",link:"HotspotModal_link_12FuU1",linkIcon:"HotspotModal_linkIcon_114mze",close:"HotspotModal_close_7afvjD",body:"HotspotModal_body_13A48g"}},1894:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",function(){return Simple});var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),pano_video_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1895),pano_video_ui__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(pano_video_ui__WEBPACK_IMPORTED_MODULE_6__),is_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(32),is_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(is_js__WEBPACK_IMPORTED_MODULE_7__),_effectorFileName="/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoController.js";!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).enterModule;_&&_(module)}();var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(_){return _},Simple=function(_React$PureComponent){function Simple(){var _,e;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,Simple);for(var a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(e=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,(_=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Simple)).call.apply(_,[this].concat(t)))).state={isPlay:!1,time:0,totalTime:0,volume:1,video:null,loading:!1,hideController:!1},e.onWaiting=function(){e.setState({loading:!0})},e.onPlaying=function(){e.setState({isPlay:!0,loading:!1})},e.onTimeUpdate=function(){var _=e.video.currentTime,a=e.video.duration;e.setState({time:_,totalTime:a})},e.onPause=function(){e.setState({isPlay:!1})},e.handlePlay=function(){e.video.play()},e.handlePause=function(){e.video.pause()},e.onChangeTime=function(_){e.video.currentTime=_},e.onChangeVolume=function(_){e.video.volume=_,e.setState({volume:_})},e.onClickVideo=function(){if(is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()){var _=e.state.hideController;e.setState({hideController:!_})}},e}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Simple,_React$PureComponent),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Simple,[{key:"render",value:function(){var _=this,e=this.props,a=e.src,t=e.poster,r=this.state,l=r.isPlay,o=r.time,n=r.totalTime,s=r.volume,i=r.video,E=r.loading,u=r.hideController;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(pano_video_ui__WEBPACK_IMPORTED_MODULE_6___default.a,{style:{display:"inline-block",width:"auto",height:"auto"},src:a,video:i,loading:E,isPlay:l,time:o,volume:s,totalTime:n,handlePlay:this.handlePlay,handlePause:this.handlePause,onChangeTime:this.onChangeTime,onChangeVolume:this.onChangeVolume,hideController:u},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video",{autoPlay:!is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile(),preload:"auto",style:{maxWidth:is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()?"100%":1e3,maxHeight:is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()?"100%":600,minWidth:320,width:"auto",height:"auto",verticalAlign:"top",display:"inline-block"},poster:is_js__WEBPACK_IMPORTED_MODULE_7___default.a.mobile()?t:null,onClick:this.onClickVideo,playsinline:"","x5-playsinline":"","webkit-playsinline":"",onTimeUpdate:this.onTimeUpdate,onPlaying:this.onPlaying,onPause:this.onPause,onWaiting:this.onWaiting,ref:function(e){_.video=e,_.setState({video:e})},src:a})))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Simple}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);!function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).default;_&&_.register(Simple,"Simple","/data/OP/jenkins/.jenkins/workspace/720yun_js/src/assets/javascripts/Panov2Page/components/Modals/VideoController.js")}(),function(){var _=("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal:__webpack_require__(1)).leaveModule;_&&_(module)}()}).call(this,__webpack_require__(3)(module))}}]);