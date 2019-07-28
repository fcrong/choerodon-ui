webpackJsonp([70],{2263:function(n,a,s){n.exports={basic:s(3009),controlled:s(3010),dataset:s(3011)}},3009:function(n,a,s){n.exports={content:{"zh-CN":[["p","基本使用。"]],"en-US":[["p","Basic usage example."]]},meta:{order:0,title:{"zh-CN":"基本使用","en-US":"Basic usage"},filename:"components-pro/pagination/demo/basic.md",id:"components-pro-pagination-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Form<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> DataSet<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mobx-react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[pagination]\'</span><span class="token punctuation">,</span> page<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n@observer\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoCreate<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    fields<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'showSizeChanger\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'boolean\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'showSizeChanger\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'showTotal\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'boolean\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'showTotal\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'showPager\'</span><span class="token punctuation">,</span> type<span class="token punctuation">:</span> <span class="token string">\'boolean\'</span><span class="token punctuation">,</span> label<span class="token punctuation">:</span> <span class="token string">\'showPager\'</span><span class="token punctuation">,</span> defaultValue<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> ds<span class="token punctuation">,</span> ds<span class="token punctuation">:</span> <span class="token punctuation">{</span> current <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Form</span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>ds<span class="token punctuation">}</span></span> <span class="token attr-name">labelWidth</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showSizeChanger<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showTotal<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showPager<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Form</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span>\n          <span class="token attr-name">showSizeChanger</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'showSizeChanger\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">showTotal</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'showTotal\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">showPager</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>current<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'showPager\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">90</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}function p(n,a){console.log("[pagination]",n,a)}var e,o=s(0),c=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),u=s(488),l=s(11),i=(0,l.observer)(e=function(s){function e(){var s,t,p,o;n(this,e);for(var c=arguments.length,l=Array(c),i=0;i<c;i++)l[i]=arguments[i];return t=p=a(this,(s=e.__proto__||Object.getPrototypeOf(e)).call.apply(s,[this].concat(l))),p.ds=new u.DataSet({autoCreate:!0,fields:[{name:"showSizeChanger",type:"boolean",label:"showSizeChanger",defaultValue:!0},{name:"showTotal",type:"boolean",label:"showTotal",defaultValue:!0},{name:"showPager",type:"boolean",label:"showPager",defaultValue:!1}]}),o=t,a(p,o)}return t(e,s),c(e,[{key:"render",value:function(){var n=this.ds,a=this.ds.current;return o.createElement("div",null,o.createElement(u.Form,{columns:3,dataSet:n,labelWidth:150},o.createElement(u.Switch,{name:"showSizeChanger"}),o.createElement(u.Switch,{name:"showTotal"}),o.createElement(u.Switch,{name:"showPager"})),o.createElement(u.Pagination,{showSizeChanger:a.get("showSizeChanger"),showTotal:a.get("showTotal"),showPager:a.get("showPager"),total:90,onChange:p}))}}]),e}(o.Component))||e;return o.createElement(i,null)}}},3010:function(n,a,s){n.exports={content:{"zh-CN":[["p","受控输入框"]],"en-US":[["p","Controlled TextField"]]},meta:{order:1,title:{"zh-CN":"受控输入框","en-US":"Controlled TextField"},filename:"components-pro/pagination/demo/controlled.md",id:"components-pro-pagination-demo-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    page<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    pageSize<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  handleChange <span class="token operator">=</span> <span class="token punctuation">(</span>page<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'[page]\'</span><span class="token punctuation">,</span> page<span class="token punctuation">,</span> <span class="token string">\'[pageSize]\'</span><span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      page<span class="token punctuation">,</span>\n      pageSize<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> page<span class="token punctuation">,</span> pageSize <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span> <span class="token attr-name">page</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>page<span class="token punctuation">}</span></span> <span class="token attr-name">pageSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>pageSize<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),o=s(488),c=function(s){function c(){var s,t,p,e;n(this,c);for(var o=arguments.length,u=Array(o),l=0;l<o;l++)u[l]=arguments[l];return t=p=a(this,(s=c.__proto__||Object.getPrototypeOf(c)).call.apply(s,[this].concat(u))),p.state={page:2,pageSize:20},p.handleChange=function(n,a){console.log("[page]",n,"[pageSize]",a),p.setState({page:n,pageSize:a})},e=t,a(p,e)}return t(c,s),e(c,[{key:"render",value:function(){var n=this.state,a=n.page,s=n.pageSize;return p.createElement(o.Pagination,{total:50,page:a,pageSize:s,onChange:this.handleChange})}}]),c}(p.Component);return p.createElement(c,null)}}},3011:function(n,a,s){n.exports={content:{"zh-CN":[["p","绑定数据源。"]],"en-US":[["p","DataSet binding."]]},meta:{order:2,title:{"zh-CN":"数据源","en-US":"DataSet"},filename:"components-pro/pagination/demo/dataset.md",id:"components-pro-pagination-demo-dataset"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DataSet<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/pro\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataSet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    autoQuery<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'user\'</span><span class="token punctuation">,</span>\n    pageSize<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">dataSet</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>ds<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function a(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function t(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}var p=s(0),e=(s(7),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),o=s(488),c=function(s){function c(){var s,t,p,e;n(this,c);for(var u=arguments.length,l=Array(u),i=0;i<u;i++)l[i]=arguments[i];return t=p=a(this,(s=c.__proto__||Object.getPrototypeOf(c)).call.apply(s,[this].concat(l))),p.ds=new o.DataSet({autoQuery:!0,name:"user",pageSize:20}),e=t,a(p,e)}return t(c,s),e(c,[{key:"render",value:function(){return p.createElement(o.Pagination,{dataSet:this.ds})}}]),c}(p.Component);return p.createElement(c,null)}}}});