!function(){"use strict";(self.webpackChunkaada=self.webpackChunkaada||[]).push([[377],{3377:function(e,n,a){a.r(n),a.d(n,{default:function(){return b}});var t="[A-Za-z$_][0-9A-Za-z$_]*",c=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],s=["true","false","null","undefined","NaN","Infinity"],r=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],i=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],o=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],l=["arguments","this","super","console","window","document","localStorage","module","global"],d=[].concat(o,r,i);function b(e){var n=function(e){var n=e.regex,a=t,b={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:function(e,n){var a,t=e[0].length+e.index,c=e.input[t];"<"!==c&&","!==c?(">"===c&&(function(e,n){var a=n.after,t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,a)}(e,{after:t})||n.ignoreMatch()),(a=e.input.substr(t).match(/^\s+extends\s+/))&&0===a.index&&n.ignoreMatch()):n.ignoreMatch()}},u={$pattern:t,keyword:c,literal:s,built_in:d,"variable.language":l},g="[0-9](_?[0-9])*",m="\\.(".concat(g,")"),E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",f={className:"number",variants:[{begin:"(\\b(".concat(E,")((").concat(m,")|\\.)?|(").concat(m,"))[eE][+-]?(").concat(g,")\\b")},{begin:"\\b(".concat(E,")\\b((").concat(m,")\\b|\\.)?|(").concat(m,")\\b")},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:u,contains:[]},A={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},p={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,y],subLanguage:"css"}},N={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,y]},_={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},v=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,A,p,N,f];y.contains=v.concat({begin:/\{/,end:/\}/,keywords:u,contains:["self"].concat(v)});var h,S=[].concat(_,y.contains),w=S.concat([{begin:/\(/,end:/\)/,keywords:u,contains:["self"].concat(S)}]),R={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:w},k={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,n.concat(a,"(",n.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},x={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[].concat(r,i)}},O={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},C={match:n.concat(/\b/,(h=[].concat(o,["super"]),n.concat("(?!",h.join("|"),")")),a,n.lookahead(/\(/)),className:"title.function",relevance:0},I={begin:n.concat(/\./,n.lookahead(n.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},T={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},M="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",Z={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(M)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:u,exports:{PARAMS_CONTAINS:w,CLASS_REFERENCE:x},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,A,p,N,_,f,x,{className:"attr",begin:a+n.lookahead(":"),relevance:0},Z,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[_,e.REGEXP_MODE,{className:"function",begin:M,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:u,contains:w}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:"<>",end:"</>"},{match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:b.begin,"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},O,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},C,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},k,T,{match:/\$[(.]/}]}}(e),a=["any","void","number","boolean","string","object","never","enum"],b={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},u={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:a},contains:[n.exports.CLASS_REFERENCE]},g={$pattern:t,keyword:c.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:s,built_in:d.concat(a),"variable.language":l},m={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},E=function(e,n,a){var t=e.contains.findIndex(function(e){return e.label===n});if(-1===t)throw new Error("can not find mode to replace");e.contains.splice(t,1,a)};return Object.assign(n.keywords,g),n.exports.PARAMS_CONTAINS.push(m),n.contains=n.contains.concat([m,b,u]),E(n,"shebang",e.SHEBANG()),E(n,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),n.contains.find(function(e){return"func.def"===e.label}).relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx"]}),n}}}])}();