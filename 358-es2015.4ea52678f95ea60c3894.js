(self.webpackChunkgudad=self.webpackChunkgudad||[]).push([[358],{1075:function(e){var n={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var i=e[n];"object"==typeof i&&!Object.isFrozen(i)&&t(i)}),e}n.exports=t,n.exports.default=t;var i=n.exports;class o{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach(function(e){for(const n in e)t[n]=e[n]}),t}const a=e=>!!e.kind;class c{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!a(e))return;let n=e.kind;n=e.sublanguage?`language-${n}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((e,n)=>`${e}${"_".repeat(n+1)}`)].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){!a(e)||(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&(!e.children||(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{l._collapse(e)})))}}class u extends l{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}function d(e){return p("(?=",e,")")}function h(e){return p("(?:",e,")*")}function f(e){return p("(?:",e,")?")}function p(...e){return e.map(e=>g(e)).join("")}function b(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map(e=>g(e)).join("|")+")"}function m(e){return new RegExp(e.toString()+"|").exec("").length-1}const w=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(e,{joinWith:n}){let t=0;return e.map(e=>{t+=1;const n=t;let i=g(e),o="";for(;i.length>0;){const e=w.exec(i);if(!e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o}).map(e=>`(${e})`).join(n)}const x="[a-zA-Z]\\w*",y="[a-zA-Z_]\\w*",_="\\b\\d+(\\.\\d+)?",k="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",O={begin:"\\\\[\\s\\S]",relevance:0},N={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[O]},S={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[O]},M=function(e,n,t={}){const i=s({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=b("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:p(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},R=M("//","$"),A=M("/\\*","\\*/"),j=M("#","$");var I=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:y,NUMBER_RE:_,C_NUMBER_RE:k,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=p(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:O,APOS_STRING_MODE:N,QUOTE_STRING_MODE:S,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:M,C_LINE_COMMENT_MODE:R,C_BLOCK_COMMENT_MODE:A,HASH_COMMENT_MODE:j,NUMBER_MODE:{scope:"number",begin:_,relevance:0},C_NUMBER_MODE:{scope:"number",begin:k,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:v,relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]}]},TITLE_MODE:{scope:"title",begin:x,relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:y,relevance:0},METHOD_GUARD:{begin:"\\.\\s*"+y,relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function T(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function L(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function B(e,n){!n||!e.beginKeywords||(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function H(e,n){!Array.isArray(e.illegal)||(e.illegal=b(...e.illegal))}function C(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function D(e,n){void 0===e.relevance&&(e.relevance=1)}const P=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(n=>{delete e[n]}),e.keywords=t.keywords,e.begin=p(t.beforeMatch,d(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},$=["of","and","for","in","not","or","if","then","parent","list","value"];function U(e,n,t="keyword"){const i=Object.create(null);return"string"==typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach(function(t){Object.assign(i,U(e[t],n,t))}),i;function o(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach(function(n){const t=n.split("|");i[t[0]]=[e,z(t[0],t[1])]})}}function z(e,n){return n?Number(n):function(e){return $.includes(e.toLowerCase())}(e)?0:1}const K={},W=e=>{console.error(e)},X=(e,...n)=>{console.log(`WARN: ${e}`,...n)},G=(e,n)=>{K[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),K[`${e}/${n}`]=!0)},F=new Error;function Z(e,n,{key:t}){let i=0;const o=e[t],r={},s={};for(let a=1;a<=n.length;a++)s[a+i]=o[a],r[a+i]=!0,i+=m(n[a-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function J(e){(function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw W("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),F;if("object"!=typeof e.beginScope||null===e.beginScope)throw W("beginScope must be object"),F;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw W("skip, excludeEnd, returnEnd not compatible with endScope: {}"),F;if("object"!=typeof e.endScope||null===e.endScope)throw W("endScope must be object"),F;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}}(e)}function V(e){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=m(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(E(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition()&&(!t||t.index!==this.lastIndex)){const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(o,r){const a=o;if(o.isCompiled)return a;[L,C,J,P].forEach(e=>e(o,r)),e.compilerExtensions.forEach(e=>e(o,r)),o.__beforeBegin=null,[B,H,D].forEach(e=>e(o,r)),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=U(o.keywords,e.case_insensitive)),a.keywordPatternRe=n(c,!0),r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=n(a.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(a.endRe=n(a.end)),a.terminatorEnd=g(a.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(a.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return s(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:q(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?o:e)})),o.contains.forEach(function(e){t(e,a)}),o.starts&&t(o.starts,r),a.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(a),a}(e)}function q(e){return!!e&&(e.endsWithParent||q(e.starts))}class Y extends Error{constructor(e,n){super(e),this.name="HTMLInjectionError",this.html=n}}const Q=r,ee=s,ne=Symbol("nomatch");var te=function(e){const n=Object.create(null),t=Object.create(null),r=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function g(e){return l.noHighlightRe.test(e)}function m(e,n,t){let i="",o="";"object"==typeof n?(i=e,t=n.ignoreIllegals,o=n.language):(G("10.7.0","highlight(lang, code, ...args) has been deprecated."),G("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,i=n),void 0===t&&(t=!0);const r={code:i,language:o};N("before:highlight",r);const s=r.result?r.result:w(r.language,r.code,t);return s.code=r.code,N("after:highlight",s),s}function w(e,t,i,r){const c=Object.create(null);function u(e,n){return e.keywords[n]}function g(){if(!N.keywords)return void M.addText(R);let e=0;N.keywordPatternRe.lastIndex=0;let n=N.keywordPatternRe.exec(R),t="";for(;n;){t+=R.substring(e,n.index);const i=_.case_insensitive?n[0].toLowerCase():n[0],o=u(N,i);if(o){const[e,r]=o;M.addText(t),t="",c[i]=(c[i]||0)+1,c[i]<=7&&(A+=r),e.startsWith("_")?t+=n[0]:M.addKeyword(n[0],_.classNameAliases[e]||e)}else t+=n[0];e=N.keywordPatternRe.lastIndex,n=N.keywordPatternRe.exec(R)}t+=R.substr(e),M.addText(t)}function d(){null!=N.subLanguage?function(){if(""===R)return;let e=null;if("string"==typeof N.subLanguage){if(!n[N.subLanguage])return void M.addText(R);e=w(N.subLanguage,R,!0,S[N.subLanguage]),S[N.subLanguage]=e._top}else e=E(R,N.subLanguage.length?N.subLanguage:null);N.relevance>0&&(A+=e.relevance),M.addSublanguage(e._emitter,e.language)}():g(),R=""}function h(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const i=_.classNameAliases[e[t]]||e[t],o=n[t];i?M.addKeyword(o,i):(R=o,g(),R=""),t++}}function f(e,n){return e.scope&&"string"==typeof e.scope&&M.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(M.addKeyword(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(h(e.beginScope,n),R="")),N=Object.create(e,{parent:{value:N}}),N}function p(e,n,t){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){const t=new o(e);e["on:end"](n,t),t.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,n,t)}function b(e){return 0===N.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function m(e){const n=e[0],i=t.substr(e.index),o=p(N,e,i);if(!o)return ne;const r=N;N.endScope&&N.endScope._wrap?(d(),M.addKeyword(n,N.endScope._wrap)):N.endScope&&N.endScope._multi?(d(),h(N.endScope,e)):r.skip?R+=n:(r.returnEnd||r.excludeEnd||(R+=n),d(),r.excludeEnd&&(R=n));do{N.scope&&M.closeNode(),!N.skip&&!N.subLanguage&&(A+=N.relevance),N=N.parent}while(N!==o.parent);return o.starts&&f(o.starts,e),r.returnEnd?0:n.length}let x={};function y(n,r){const a=r&&r[0];if(R+=n,null==a)return d(),0;if("begin"===x.type&&"end"===r.type&&x.index===r.index&&""===a){if(R+=t.slice(r.index,r.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=x.rule,n}return 1}if(x=r,"begin"===r.type)return function(e){const n=e[0],t=e.rule,i=new o(t),r=[t.__beforeBegin,t["on:begin"]];for(const o of r)if(o&&(o(e,i),i.isMatchIgnored))return b(n);return t.skip?R+=n:(t.excludeBegin&&(R+=n),d(),!t.returnBegin&&!t.excludeBegin&&(R=n)),f(t,e),t.returnBegin?0:n.length}(r);if("illegal"===r.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(N.scope||"<unnamed>")+'"');throw e.mode=N,e}if("end"===r.type){const e=m(r);if(e!==ne)return e}if("illegal"===r.type&&""===a)return 1;if(I>1e5&&I>3*r.index)throw new Error("potential infinite loop, way more iterations than matches");return R+=a,a.length}const _=k(e);if(!_)throw W(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=V(_);let O="",N=r||v;const S={},M=new l.__emitter(l);!function(){const e=[];for(let n=N;n!==_;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(e=>M.openNode(e))}();let R="",A=0,j=0,I=0,T=!1;try{for(N.matcher.considerAll();;){I++,T?T=!1:N.matcher.considerAll(),N.matcher.lastIndex=j;const e=N.matcher.exec(t);if(!e)break;const n=y(t.substring(j,e.index),e);j=e.index+n}return y(t.substr(j)),M.closeAllNodes(),M.finalize(),O=M.toHTML(),{language:e,value:O,relevance:A,illegal:!1,_emitter:M,_top:N}}catch(L){if(L.message&&L.message.includes("Illegal"))return{language:e,value:Q(t),illegal:!0,relevance:0,_illegalBy:{message:L.message,index:j,context:t.slice(j-100,j+100),mode:L.mode,resultSoFar:O},_emitter:M};if(s)return{language:e,value:Q(t),illegal:!1,relevance:0,errorRaised:L,_emitter:M,_top:N};throw L}}function E(e,t){t=t||l.languages||Object.keys(n);const i=function(e){const n={value:Q(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return n._emitter.addText(e),n}(e),o=t.filter(k).filter(O).map(n=>w(n,e,!1));o.unshift(i);const r=o.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(k(e.language).supersetOf===n.language)return 1;if(k(n.language).supersetOf===e.language)return-1}return 0}),[s,a]=r,u=s;return u.secondBest=a,u}function x(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=l.languageDetectRe.exec(n);if(t){const n=k(t[1]);return n||(X(a.replace("{}",t[1])),X("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>g(e)||k(e))}(e);if(g(i))return;if(N("before:highlightElement",{el:e,language:i}),e.children.length>0&&(l.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),l.throwUnescapedHTML))throw new Y("One of your code blocks includes unescaped HTML.",e.innerHTML);n=e;const o=n.textContent,r=i?m(o,{language:i,ignoreIllegals:!0}):E(o);e.innerHTML=r.value,function(e,n,i){const o=n&&t[n]||i;e.classList.add("hljs"),e.classList.add(`language-${o}`)}(e,i,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),N("after:highlightElement",{el:e,result:r,text:o})}let y=!1;function _(){"loading"!==document.readyState?document.querySelectorAll(l.cssSelector).forEach(x):y=!0}function k(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function v(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e.toLowerCase()]=n})}function O(e){const n=k(e);return n&&!n.disableAutodetect}function N(e,n){const t=e;r.forEach(function(e){e[t]&&e[t](n)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){y&&_()},!1),Object.assign(e,{highlight:m,highlightAuto:E,highlightAll:_,highlightElement:x,highlightBlock:function(e){return G("10.7.0","highlightBlock will be removed entirely in v12.0"),G("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){l=ee(l,e)},initHighlighting:()=>{_(),G("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){_(),G("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let o=null;try{o=i(e)}catch(r){if(W("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw r;W(r),o=c}o.name||(o.name=t),n[t]=o,o.rawDefinition=i.bind(null,e),o.aliases&&v(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:k,registerAliases:v,autoDetection:O,inherit:ee,addPlugin:function(e){(function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),r.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.4.0",e.regex={concat:p,lookahead:d,either:b,optional:f,anyNumberOfTimes:h};for(const o in I)"object"==typeof I[o]&&i(I[o]);return Object.assign(e,I),e}({});e.exports=te,te.HighlightJS=te,te.default=te},9358:function(e,n,t){"use strict";t.r(n),t.d(n,{HighlightJS:function(){return i}});var i=t(1075);n.default=i}}]);