webpackJsonp([86],{2325:function(n,e){n.exports={content:["article",{},["h2","Install and Initialization"],["p","We need to install ",["code","create-react-app"]," first, you may need install ",["a",{title:null,href:"https://github.com/yarnpkg/yarn/"},"yarn"]," too."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> -g create-react-app yarn'},["code","$ npm install -g create-react-app yarn"]],["p","Create a new project named ",["code","choerodon-ui-demo"],"."],["pre",{lang:"bash",highlighted:"$ create-react-app choerodon-ui-demo"},["code","$ create-react-app choerodon-ui-demo"]],["p","The tool will create and initialize environment and dependencies automatically,\nplease try config your proxy setting or use another npm registry if any network errors happen during it."],["p","Then we go inside ",["code","choerodon-ui-demo"]," and start it."],["pre",{lang:"bash",highlighted:'$ <span class="token function">cd</span> choerodon-ui-demo\n$ yarn start'},["code","$ cd choerodon-ui-demo\n$ yarn start"]],["p","Open the browser at ",["a",{title:null,href:"http://localhost:3000/"},"http://localhost:3000/"],'. It renders a header saying "Welcome to React" on the page.'],["h2","Import choerodon-ui"],["p","Below is the default directory structure."],["pre",{lang:null,highlighted:'├── README<span class="token punctuation">.</span>md\n├── package<span class="token punctuation">.</span>json\n├── public\n│   ├── favicon<span class="token punctuation">.</span>ico\n│   └── index<span class="token punctuation">.</span>html\n├── src\n│   ├── App<span class="token punctuation">.</span>css\n│   ├── App<span class="token punctuation">.</span>js\n│   ├── App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js\n│   ├── index<span class="token punctuation">.</span>css\n│   ├── index<span class="token punctuation">.</span>js\n│   └── logo<span class="token punctuation">.</span>svg\n└── yarn<span class="token punctuation">.</span>lock'},["code","├── README.md\n├── package.json\n├── public\n│   ├── favicon.ico\n│   └── index.html\n├── src\n│   ├── App.css\n│   ├── App.js\n│   ├── App.test.js\n│   ├── index.css\n│   ├── index.js\n│   └── logo.svg\n└── yarn.lock"]],["p","Now we install ",["code","choerodon-ui"]," from yarn or npm."],["pre",{lang:"bash",highlighted:"$ yarn add choerodon-ui"},["code","$ yarn add choerodon-ui"]],["p","Modify ",["code","src/App.js"],", import Button component from ",["code","choerodon-ui"],"."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'choerodon-ui/lib/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./App.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>App<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>'},["code","import React, { Component } from 'react';\nimport Button from 'choerodon-ui/lib/button';\nimport './App.css';\n\nclass App extends Component {\n  render() {\n    return (\n      <div className=\"App\">\n        <Button type=\"primary\">Button</Button>\n      </div>\n    );\n  }\n}\n\nexport default App;"]],["p","Add ",["code","choerodon-ui/dist/choerodon-ui.css"]," at the top of ",["code","src/App.css"],"."],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">\'~choerodon-ui/dist/choerodon-ui.css\'</span><span class="token punctuation">;</span></span>\n\n<span class="token selector"><span class="token class">.App</span> </span><span class="token punctuation">{</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token number">...</span>'},["code","@import '~choerodon-ui/dist/choerodon-ui.css';\n\n.App {\n  text-align: center;\n}\n\n..."]],["p","Ok, you should now see a blue primary button displayed on the page. Next you can choose any components of ",["code","choerodon-ui"]," to develop your application. Visit other workflows of ",["code","create-react-app"]," at its ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md"},"User Guide "],"."],["h2","Advanced Guides"],["p","We are successfully running choerodon-ui components now but in the real world, there are still lots of problems about choerodon-ui-demo.\nFor instance, we actually import all styles of components in the project which may be a network performance issue."],["p","Now we need to customize the default webpack config. We can achieve that by using ",["a",{title:null,href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired"]," which is one of create-react-app's custom config solutions."],["p","Import react-app-rewired and modify the ",["code","scripts"]," field in package.json."],["pre",{lang:null,highlighted:'$ yarn add react<span class="token operator">-</span>app<span class="token operator">-</span>rewired <span class="token operator">-</span><span class="token operator">-</span>dev'},["code","$ yarn add react-app-rewired --dev"]],["pre",{lang:"diff",highlighted:'/* package.json */\n"scripts": {\n<span class="token deleted">-   "start": "react-scripts start",</span>\n<span class="token inserted">+   "start": "react-app-rewired start",</span>\n<span class="token deleted">-   "build": "react-scripts build",</span>\n<span class="token inserted">+   "build": "react-app-rewired build",</span>\n<span class="token deleted">-   "test": "react-scripts test --env=jsdom",</span>\n<span class="token inserted">+   "test": "react-app-rewired test --env=jsdom",</span>\n}'},["code",'/* package.json */\n"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test --env=jsdom",\n+   "test": "react-app-rewired test --env=jsdom",\n}']],["p","Then create a ",["code","config-overrides.js"]," at root directory of your project for further overriding."],["pre",{lang:"js",highlighted:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">override</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> env<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// do stuff with the webpack config...</span>\n  <span class="token keyword">return</span> config<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","module.exports = function override(config, env) {\n  // do stuff with the webpack config...\n  return config;\n};"]],["h3","Use babel-plugin-import"],["p",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," is a babel plugin for importing components on demand (",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"How does it work?"],"). We are now trying to install it and modify ",["code","config-overrides.js"],"."],["pre",{lang:"bash",highlighted:"$ yarn add babel-plugin-import --dev"},["code","$ yarn add babel-plugin-import --dev"]],["pre",{lang:"diff",highlighted:"<span class=\"token inserted\">+ const { injectBabelPlugin } = require('react-app-rewired');</span>\n\n  module.exports = function override(config, env) {\n<span class=\"token inserted\">+   config = injectBabelPlugin(['import', { libraryName: 'choerodon-ui', libraryDirectory: 'es', style: 'css' }], config);</span>\n    return config;\n  };"},["code","+ const { injectBabelPlugin } = require('react-app-rewired');\n\n  module.exports = function override(config, env) {\n+   config = injectBabelPlugin(['import', { libraryName: 'choerodon-ui', libraryDirectory: 'es', style: 'css' }], config);\n    return config;\n  };"]],["p","Remove the ",["code","@import '~choerodon-ui/dist/choerodon-ui.css';"]," statement added before because ",["code","babel-plugin-import"]," will import styles and import components like below:"],["pre",{lang:"diff",highlighted:"  // src/App.js\n  import React, { Component } from 'react';\n<span class=\"token deleted\">- import Button from 'choerodon-ui/lib/button';</span>\n<span class=\"token inserted\">+ import { Button } from 'choerodon-ui';</span>\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        &lt;div className=\"App\">\n          &lt;Button type=\"primary\">Button&lt;/Button>\n        &lt;/div>\n      );\n    }\n  }\n\n  export default App;"},["code","  // src/App.js\n  import React, { Component } from 'react';\n- import Button from 'choerodon-ui/lib/button';\n+ import { Button } from 'choerodon-ui';\n  import './App.css';\n\n  class App extends Component {\n    render() {\n      return (\n        <div className=\"App\">\n          <Button type=\"primary\">Button</Button>\n        </div>\n      );\n    }\n  }\n\n  export default App;"]],["p","Then reboot with ",["code","yarn start"]," and visit the demo page, you should not find any ",["a",{title:null,href:"https://zos.alipayobjects.com/rmsportal/vgcHJRVZFmPjAawwVoXK.png"},"warning messages"]," in the console, which prove that the ",["code","import on demand"]," config is working now. You will find more info about it in ",["a",{title:null,href:"/docs/react/getting-started#Import-on-Demand"},"this guide"],"."],["h3","Customize Theme"],["p","According to the ",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme documentation"],", to customize the theme, we need to modify ",["code","less"]," variables with tools such as ",["a",{title:null,href:"https://github.com/webpack/less-loader"},"less-loader"],". We can also use ",["a",{title:null,href:"http://npmjs.com/react-app-rewire-less"},"react-app-rewire-less"]," to achieve this. Import it and modify ",["code","config-overrides.js"]," like below."],["pre",{lang:"bash",highlighted:"$ yarn add react-app-rewire-less --dev"},["code","$ yarn add react-app-rewire-less --dev"]],["pre",{lang:"diff",highlighted:'  const { injectBabelPlugin } = require(\'react-app-rewired\');\n<span class="token inserted">+ const rewireLess = require(\'react-app-rewire-less\');</span>\n\n  module.exports = function override(config, env) {\n<span class="token deleted">-   config = injectBabelPlugin([\'import\', { libraryName: \'choerodon-ui\', style: \'css\' }], config);</span>\n<span class="token inserted">+   config = injectBabelPlugin([\'import\', { libraryName: \'choerodon-ui\', style: true }], config);  // change importing css to less</span>\n<span class="token inserted">+   config = rewireLess.withLoaderOptions({</span>\n<span class="token inserted">+     modifyVars: { "@primary-color": "#1DA57A" },</span>\n<span class="token inserted">+   })(config, env);</span>\n    return config;\n  };'},["code","  const { injectBabelPlugin } = require('react-app-rewired');\n+ const rewireLess = require('react-app-rewire-less');\n\n  module.exports = function override(config, env) {\n-   config = injectBabelPlugin(['import', { libraryName: 'choerodon-ui', style: 'css' }], config);\n+   config = injectBabelPlugin(['import', { libraryName: 'choerodon-ui', style: true }], config);  // change importing css to less\n+   config = rewireLess.withLoaderOptions({\n+     modifyVars: { \"@primary-color\": \"#1DA57A\" },\n+   })(config, env);\n    return config;\n  };"]],["p","We use ",["code","modifyVars"]," option of ",["a",{title:null,href:"https://github.com/webpack/less-loader#less-options"},"less-loader"]," here, you can see a green button rendered on the page after rebooting the start server."],["h2","eject"],["p","You can also could try ",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup"},"yarn run eject"],"  for a custom setup of create-react-app, although you should dig into it by yourself."]],meta:{order:4,title:"Use in create-react-app",filename:"docs/react/use-with-create-react-app.en-US.md"},description:["section",["p",["a",{title:null,href:"https://github.com/facebookincubator/create-react-app"},"create-react-app"]," is one of the best React application development tools. We are going to use ",["code","choerodon-ui"]," within it and modify the webpack config for some customized needs."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Install-and-Initialization",title:"Install and Initialization"},"Install and Initialization"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-choerodon-ui",title:"Import choerodon-ui"},"Import choerodon-ui"]],["li",["a",{className:"bisheng-toc-h2",href:"#Advanced-Guides",title:"Advanced Guides"},"Advanced Guides"]],["li",["a",{className:"bisheng-toc-h2",href:"#eject",title:"eject"},"eject"]]]}}});