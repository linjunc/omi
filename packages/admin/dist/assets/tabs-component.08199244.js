import{W as e,h as l,t as n,s as a,b as t}from"./vendor.e2d9dc7f.js";import"./accessible-rounded.7a51c819.js";import"./add-ic-call-rounded.06fac03d.js";import"./admin-docs.f2f677f9.js";import"./index.8991df29.js";import"./container.be433bce.js";import"./___vite-browser-external_commonjs-proxy.1d14105e.js";var o=Object.defineProperty,s=Object.getOwnPropertyDescriptor;let d=class extends e{installed(){}render(){const e={breakInside:"avoid",padding:"0 0 0 0"};return l("code-demo-container",null,l("code-demo",{title:"基础选项卡",describe:"展示基础选项卡能力",code:"\n```jsx\n<o-tabs\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n          ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"卡片选项卡",describe:"通过设置 type 为 card 来使用卡片样式的选项卡",code:"\n```jsx\n<o-tabs\n  type=\"card\"\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n                    ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{type:"card",list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"可增加项",describe:"可通过 onAddIconClick 弹出命名框来添加 tab",code:"\n```jsx\n<o-tabs\n  addable\n  onAddIconClick={this.onAddIconClick}\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n                              ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{addable:!0,list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"可添加 card 选项卡",describe:"可通过 onAddIconClick 弹出命名框来添加 tab",code:"\n```jsx\n<o-tabs\n  addable\n  onAddIconClick={this.onAddIconClick}\n  type=\"card\"\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n                                        ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{addable:!0,type:"card",list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"卡片化选项卡",describe:"通过设置 type 为 border-card 来使用卡片样式的选项卡",code:"\n```jsx\n<o-tabs\n  type=\"border-card\"\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n             ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{type:"border-card",list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"位置",describe:"可以通过 position 设置标签的位置",code:"\n```jsx\n<o-tabs\n  position=\"right\"\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n             ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{position:"right",list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"位置",describe:"可以通过 position 设置标签的位置",code:"\n```jsx\n<o-tabs\n  position=\"left\"\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n                       ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{position:"left",list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"底部 tab",describe:"可以通过 position 设置标签的位置",code:"\n```jsx\n<o-tabs\n  type=\"border-card\"\n  position=\"bottom\"\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n          ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{type:"border-card",position:"bottom",list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"带 icon",describe:"通过在 list 的 item 里加入 icon 属性来设置 icon",code:"\n```jsx\n<o-tabs\n  list={[\n    { label: '用户管理', icon: 'accessible-rounded' },\n    { label: '系统设置', icon: 'ac-unit-outlined' },\n    { label: '权限管理中心', icon: 'accessible-rounded' }\n  ]}\n  activeIndex={0}>\n</o-tabs>\n```\n          ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{list:[{label:"用户管理",icon:"accessible-rounded"},{label:"系统设置",icon:"ac-unit-outlined"},{label:"权限管理中心",icon:"accessible-rounded"}],activeIndex:0}))),l("code-demo",{title:"可关闭",describe:"通过 closable 属性控制",code:"\n```jsx\n<o-tabs\n  closable\n  list={[{ label: '用户管理' }, { label: '系统设置' }, { label: '权限管理中心' }]}\n  activeIndex={0}>\n</o-tabs>\n```\n          ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{closable:!0,list:[{label:"用户管理"},{label:"系统设置"},{label:"权限管理中心"}],activeIndex:0}))),l("code-demo",{title:"可关闭且带有 icon",describe:"通过 closable 属性控制",code:"\n```jsx\n<o-tabs closable\n  list={[\n    { label: '用户管理', icon: 'accessible-rounded' },\n    { label: '系统设置', icon: 'ac-unit-outlined' },\n    { label: '权限管理中心', icon: 'accessible-rounded' }\n  ]}\n  activeIndex={0}>\n</o-tabs>\n```\n          ",style:e},l("div",{slot:"demo",class:n`px-5 py-5`},l("o-tabs",{closable:!0,list:[{label:"用户管理",icon:"accessible-rounded"},{label:"系统设置",icon:"ac-unit-outlined"},{label:"权限管理中心",icon:"accessible-rounded"}],activeIndex:0}))))}};d.css=[a.target,"o-button{ margin: 4px }"],d=((e,l,n,a)=>{for(var t,d=a>1?void 0:a?s(l,n):l,i=e.length-1;i>=0;i--)(t=e[i])&&(d=(a?t(l,n,d):t(d))||d);return a&&d&&o(l,n,d),d})([t("tabs-component")],d);export{d as default};
