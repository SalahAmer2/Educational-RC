var _0x22d7=['hide','.helpPopup\x20.closeBtn','body','unselectable','user-select','none','selectstart\x20dragstart','.pageContent,\x20.resourseContainer,\x20.helpContainer','height','.pageBg','css','.page_content','debounce','#container','width','scaleX','scaleY','floor','attr','style','-webkit-transform:scale(',');left:','px;top:','px;','getElementById','audioPlayer1','audioDragContainer','audioDragger','offsetWidth','.nextBtn','hasClass','disabled','#myCarousel','next','carousel','.backBtn','click','.reloadBtnScreen','.showAnsBtn','.helpBtn','pause','.helpPopup','show','.resourseBtn','.resoursePopup','.resoursePopup\x20.closeBtn','play'];(function(_0x4e7367,_0x2931ad){var _0xafbe7b=function(_0x5ccb75){while(--_0x5ccb75){_0x4e7367['push'](_0x4e7367['shift']());}};_0xafbe7b(++_0x2931ad);}(_0x22d7,0x65));var _0x4836=function(_0x1196c6,_0x44e6fa){_0x1196c6=_0x1196c6-0x0;var _0x18d0d0=_0x22d7[_0x1196c6];return _0x18d0d0;};$(_0x4836('0x0'))['css'](_0x4836('0x1'),0x3c0*0x4a/0x64+0xf+'px');$(_0x4836('0x2'))[_0x4836('0x3')](_0x4836('0x1'),0x3c0*0x4a/0x64+'px');$('.header,\x20.footer')['css'](_0x4836('0x1'),0x3c0*0xd/0x64+'px');var pageWidth,pageHeight;var basePage={'width':0x500,'height':0x3c0,'scale':0x1,'scaleX':0x1,'scaleY':0x1};$(function(){var _0x4aadf5=$(_0x4836('0x4'));_0x51b11c();_0x4b7426(_0x4aadf5,pageWidth,pageHeight);$(window)['resize'](_[_0x4836('0x5')](function(){_0x51b11c();_0x4b7426(_0x4aadf5,pageWidth,pageHeight);},0x96));function _0x51b11c(){pageHeight=$(_0x4836('0x6'))[_0x4836('0x1')]();pageWidth=$(_0x4836('0x6'))[_0x4836('0x7')]();}function _0x4b7426(_0x5591c0,_0x5cba25,_0x2637af){var _0x5b8ed3=0x1,_0x4f7372=0x1;_0x5b8ed3=_0x5cba25/basePage[_0x4836('0x7')];_0x4f7372=_0x2637af/basePage[_0x4836('0x1')];basePage[_0x4836('0x8')]=_0x5b8ed3;basePage[_0x4836('0x9')]=_0x4f7372;basePage['scale']=_0x5b8ed3>_0x4f7372?_0x4f7372:_0x5b8ed3;var _0x4fc649=Math['abs'](Math[_0x4836('0xa')]((basePage['width']*basePage['scale']-_0x5cba25)/0x2));var _0x125695=0x0;_0x5591c0[_0x4836('0xb')](_0x4836('0xc'),_0x4836('0xd')+basePage['scale']+_0x4836('0xe')+_0x4fc649+_0x4836('0xf')+_0x125695+_0x4836('0x10'));}});var courseDetails;var currPage=0x0;var music1=document[_0x4836('0x11')](_0x4836('0x12'));var audioDuration;var pButton=document['getElementById']('pButton');var playhead=document[_0x4836('0x11')]('audioDrag');var timeline=document['getElementById'](_0x4836('0x13'));var dragArea=document[_0x4836('0x11')](_0x4836('0x14'));var timelineWidth=timeline[_0x4836('0x15')]-playhead[_0x4836('0x15')];var onplayhead=!![];function fnNext(){if($(_0x4836('0x16'))[_0x4836('0x17')](_0x4836('0x18'))){return![];}$(_0x4836('0x19'))['carousel'](_0x4836('0x1a'));}function fnBack(){if($('.backBtn')[_0x4836('0x17')](_0x4836('0x18'))){return![];}$(_0x4836('0x19'))[_0x4836('0x1b')]('prev');}$(function(){$(_0x4836('0x1c'))['on'](_0x4836('0x1d'),fnBack);$(_0x4836('0x16'))['on'](_0x4836('0x1d'),fnNext);$('.reloadBtnAll')['on'](_0x4836('0x1d'),fnReloadAll);$(_0x4836('0x1e'))['on'](_0x4836('0x1d'),fnReloadScreen);$(_0x4836('0x1f'))['on'](_0x4836('0x1d'),showAns);$(_0x4836('0x20'))['on'](_0x4836('0x1d'),function(){if(lastAudio==0x1){$audio1[0x0][_0x4836('0x21')]();}if(lastAudio==0x2){$audio2[0x0][_0x4836('0x21')]();}$(_0x4836('0x22'))[_0x4836('0x23')]();});$(_0x4836('0x24'))['on'](_0x4836('0x1d'),function(){if(lastAudio==0x1){$audio1[0x0]['pause']();}if(lastAudio==0x2){$audio2[0x0][_0x4836('0x21')]();}$(_0x4836('0x25'))[_0x4836('0x23')]();});$(_0x4836('0x26'))['on'](_0x4836('0x1d'),function(){if(lastAudio==0x1&&!isMusic1Playing){$audio1[0x0][_0x4836('0x27')]();}if(lastAudio==0x2){$audio2[0x0]['play']();}$(_0x4836('0x25'))[_0x4836('0x28')]();});$(_0x4836('0x29'))['on']('click',function(){if(lastAudio==0x1&&!isMusic1Playing){$audio1[0x0][_0x4836('0x27')]();}if(lastAudio==0x2){$audio2[0x0][_0x4836('0x27')]();}$(_0x4836('0x22'))[_0x4836('0x28')]();});$(_0x4836('0x2a'))[_0x4836('0xb')](_0x4836('0x2b'),'on')['css'](_0x4836('0x2c'),_0x4836('0x2d'))['on'](_0x4836('0x2e'),![]);});