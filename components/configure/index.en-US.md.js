webpackJsonp([172],{2098:function(t,e){t.exports={content:["section",["h2","Usage"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> configure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'choerodon-ui\'</span><span class="token punctuation">;</span>\n\n<span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prefixCls<span class="token punctuation">:</span> <span class="token string">\'ant\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { configure } from 'choerodon-ui';\n\nconfigure({ prefixCls: 'ant' });"]]],meta:{category:"Components",type:"Other",cols:1,title:"Configure",filename:"components/configure/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Usage",title:"Usage"},"Usage"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","prefixCls"],["td","set prefix class"],["td","string"],["td","c7n"]],["tr",["td","proPrefixCls"],["td","set prefix class for pro components"],["td","string"],["td","c7n-pro"]],["tr",["td","ripple"],["td","Whether to open the ripple effect"],["td","boolean"],["td","true"]],["tr",["td","lookupUrl"],["td","Lookup value url or hook which return url"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/code/${code}/","`"]],["tr",["td","lookupAxiosMethod"],["td","Lookup and lov fetch method"],["td","string ","|"," string"],["td","post"]],["tr",["td","lovDefineUrl"],["td","Lov configure url or hook which return url"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/sys/lov/lov_define?code=${code}","`"]],["tr",["td","lovDefineAxiosConfig"],["td","hook for Lov configure axios config"],["td","(code: string) => AxiosRequestConfig"],["td","-"]],["tr",["td","lovQueryUrl"],["td","Lov query url or hook which return url"],["td","string ","|"," ((code: string) => string)"],["td","code => ","`","/common/lov/dataset/${code}","`"]],["tr",["td","lovQueryAxiosConfig"],["td","hook for Lov query axios config"],["td","(code: string, lovConfig?: LovConfig) => AxiosRequestConfig"],["td","-"]],["tr",["td","axios"],["td","Replace the built-in axios instance"],["td","AxiosInstance"],["td"]],["tr",["td","dataKey"],["td","default DataSet's dataKey"],["td","string"],["td","rows"]],["tr",["td","totalKey"],["td","default DataSet's totalKey"],["td","string"],["td","total"]],["tr",["td","labelLayout"],["td","default Form's labelLayout"],["td","string"],["td","horizontal"]],["tr",["td","queryBar"],["td","default table's queryBar"],["td","string"],["td","normal"]],["tr",["td","tableBorder"],["td","default table's border"],["td","boolean"],["td","true"]],["tr",["td","tableHighLightRow"],["td","Default Table current line highlight"],["td","boolean"],["td","true"]],["tr",["td","tableRowHeight"],["td","Default Table row height"],["td","auto ","|"," number"],["td","30"]],["tr",["td","tableColumnResizable"],["td","Default Table column resizable"],["td","boolean"],["td","true"]],["tr",["td","modalSectionBorder"],["td","Default if Modal header and foot have a border line"],["td","boolean"],["td","true"]],["tr",["td","modalOkFirst"],["td","Default the ok button of Modal is ranked first"],["td","boolean"],["td","true"]],["tr",["td","buttonFuncType"],["td","Default Button function type"],["td","string"],["td","raised"]],["tr",["td","renderEmpty"],["td","set empty content of components."],["td","Function(componentName: string): ReactNode"],["td","-"]],["tr",["td","generatePageQuery"],["td","Hook for Paging Parameter Conversion"],["td","Function(pageParams: { page: number, pageSize: number }): object"],["td","-"]]]]]}}});