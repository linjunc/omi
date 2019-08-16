webpackJsonp([5],{53:function(n,e){n.exports="## Omis\n\nOmis (\u8bfb /\u02c8om\u026as/) \u662f\u51fd\u6570\u5f0f\u98ce\u683c\uff0c\u81ea\u5e26 store \u4e14 hyperscript \u53cb\u597d\u7684\u7ec4\u4ef6\u6846\u67b6\u3002\n\n* \u652f\u6301 Web Components\n* \u51fd\u6570\u5f0f\u98ce\u683c\u4f46\u975e\u51fd\u6570\u5f0f\u7f16\u7a0b \n* \u7ed3\u6784-\u6837\u5f0f-\u884c\u4e3a\u5206\u79bb\n* \u8d85\u8f7b\u91cf\u4ee3\u7801\u5c3a\u5bf8\u5927\u5c0f(6kb)\n* hyperscript \u89c6\u89c9\u4e0a\u66f4\u52a0\u53cb\u597d\n* \u6bcf\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u5e26\u6709\u4e00\u4e2a store\uff0c\u53bb\u4e2d\u5fc3\u5316\n* \u652f\u6301\u5168\u5c40 store \u5171\u4eab\u6570\u636e\uff0c\u5e76\u4e14\u6309\u9700\u5c40\u90e8\u66f4\u65b0\u7ec4\u4ef6\n* \u6bcf\u4e2a\u7ec4\u4ef6 store \u62e5\u6709 update \u65b9\u6cd5\uff0c\u6267\u884c\u8be5\u65b9\u6cd5\u81ea\u5b9a\u5c40\u90e8\u5237\u65b0\u7ec4\u4ef6\n\n[\u2192 Omis \u5728\u7ebf\u4f8b\u5b50](https://codepen.io/collection/XjLaRo/)\n\n## \u4e00\u5206\u949f\u5165\u95e8\n\n```jsx\nimport { render, h } from 'omi'\n\nconst Counter = (props, store) => {\n  return (\n    <div>\n      <button onClick={store.sub}>-</button>\n      <span>{store.count}</span>\n      <button onClick={store.add}>+</button>\n    </div>\n  )\n}\n\nCounter.store = _ => {\n  return {\n    count: 1,\n    add() {\n      this.count++\n      this.update()\n    },\n    sub() {\n      this.count--\n      this.update()\n    }\n  }\n}\n\nCounter.css = `\nspan{\n  color: red;\n}\n`\n\nrender(<Counter />, 'body')\n```\n\n\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 hyperscript\uff0c\u65e0\u9700\u4efb\u4f55\u7f16\u8bd1\u76f4\u63a5\u8fd0\u884c:\n\n```js\nconst Counter = (props, store) => {\n  return (\n    h('div', {}, [\n      h('button', { onClick: store.sub }, '-'),\n      h('span', {}, store.count),\n      h('button', { onClick: store.add }, '+')\n    ])\n  )\n}\n```\n\n## \u53c2\u6570\u8bf4\u660e\n\n```jsx\nconst Comp = (props, store, _, $) => {\n\n}\n\nComp.store = (_, $) => {\n\n}\n```\n\n* `_` \u4ee3\u8868 `component`\n* `$` \u4ee3\u8868 `globalStore`\n\n## Web Components\n\n```jsx\nimport { define } from 'omis'\n\nconst HelloMessage = (props, store) => {\n  return (\n    <div onClick={store.clickHandler} >\n      <div>Hello {props.msg}</div>\n      <div>{props.user.name}</div>\n      <div>{props.user.age}</div>\n    </div>\n  )\n}\n\nHelloMessage.css = `div{\n\tcolor: red;\n}`\n\nHelloMessage.store = _ => {\n  return {\n    clickHandler() {\n      _.props.onMyEvent && _.props.onMyEvent(123)\n    }\n  }\n}\n\nHelloMessage.propTypes = {\n  msg: String,\n  user: Object\n}\n\ndefine('hello-msg', HelloMessage)\n```\n\n\u7136\u540e\u8fd9\u4e2a\u6807\u7b7e\u5c31\u53ef\u4ee5\u4efb\u610f\u6846\u67b6\u4f7f\u7528\u4e86:\n\n```html\n<hello-msg msg=\"Omis\" user=\"{name:'dntzhang', age: 18}\"></hello-msg>\n\n<script>\n  var ele = document.querySelector('hello-msg')\n\n  ele.addEventListener('myEvent', function(evt){\n    console.log(evt)\n  })\n<\/script>\n```\n\n\u606d\u559c\u4f60\u5df2\u7ecf\u5165\u95e8\uff01\n"}});
//# sourceMappingURL=5.8273affd.chunk.js.map