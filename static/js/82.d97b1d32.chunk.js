(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{730:function(e,t,n){!function(e){"use strict";var t,n=["package","message","import","syntax","required","optional","repeated","reserved","default","extensions","packed","bool","bytes","double","enum","float","string","int32","int64","uint32","uint64","sint32","sint64","fixed32","fixed64","sfixed32","sfixed64","option","service","rpc","returns"],r=(t=n,new RegExp("^(("+t.join(")|(")+"))\\b","i"));e.registerHelper("hintWords","protobuf",n);var i=new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");function o(e){if(e.eatSpace())return null;if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(/^[0-9\.+-]/,!1)){if(e.match(/^[+-]?0x[0-9a-fA-F]+/))return"number";if(e.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))return"number";if(e.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))return"number"}return e.match(/^"([^"]|(""))*"/)?"string":e.match(/^'([^']|(''))*'/)?"string":e.match(r)?"keyword":e.match(i)?"variable":(e.next(),null)}e.defineMode("protobuf",function(){return{token:o}}),e.defineMIME("text/x-protobuf","protobuf")}(n(33))}}]);
//# sourceMappingURL=82.d97b1d32.chunk.js.map