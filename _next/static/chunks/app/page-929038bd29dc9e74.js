(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1874:function(e,t,r){Promise.resolve().then(r.bind(r,1922))},1922:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7437),o=r(1444);r(3054);var i=r(1622);r(646);var s=r(903),u=r(526),a=r(9339);let c=()=>{let e=(0,i.T)(),t=()=>{window.open("/cms-using-puck-editor/view-page","_blank")};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.Puck,{config:a.v,data:a.Q,onPublish:t=>{e((0,u.a6)(t))},overrides:{headerActions:e=>{let{children:r}=e;return(0,n.jsxs)(n.Fragment,{children:[r,(0,n.jsx)("button",{type:"button",className:"px-3 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:t,children:"View Page"})]})}}})})};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){var t;function r(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,r);for(var e,t,n,o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=(e=(t=p(r)).call.apply(t,[this].concat(i)))&&("object"===l(e)||"function"==typeof e)?e:f(this),d(f(n),"state",{bootstrapped:!1}),d(f(n),"_unsubscribe",void 0),d(f(n),"handlePersistorState",function(){n.props.persistor.getState().bootstrapped&&(n.props.onBeforeLift?Promise.resolve(n.props.onBeforeLift()).finally(function(){return n.setState({bootstrapped:!0})}):n.setState({bootstrapped:!0}),n._unsubscribe&&n._unsubscribe())}),n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(r,e),t=[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return"function"==typeof this.props.children?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(r.prototype,t),r}(r(2265).PureComponent);d(h,"defaultProps",{children:null,loading:null});var y=r(7990);function m(){return(0,n.jsx)(o.zt,{store:y.h,children:(0,n.jsx)(h,{loading:null,persistor:y.D,children:(0,n.jsx)("div",{children:(0,n.jsx)(c,{})})})})}},526:function(e,t,r){"use strict";r.d(t,{a6:function(){return a}});var n=r(8314);let o={myHost:"",puckInitialData:{}},i=(0,n.oM)({name:"form",initialState:o,reducers:{reset:()=>o,setHost:(e,t)=>{e.myHost=t.payload},setPuckInitialData:(e,t)=>{e.puckInitialData=t.payload}}}),{setHost:s,reset:u,setPuckInitialData:a}=i.actions;t.ZP=i.reducer},7990:function(e,t,r){"use strict";r.d(t,{D:function(){return b},h:function(){return f}});var n=r(8314),o=r(526),i=r(6074),s=r(5574),u=r(1046);let a=(0,r(8507).LC)({reducerPath:"formApi",refetchOnFocus:!0,baseQuery:(0,i.ni)({baseUrl:"https://briisk-i-dev-api.azure-api.net/bl/Channel/Details/kotak-sampoornabima-dev.demoinsurance.com",prepareHeaders:e=>(e.set("Ocp-Apim-Subscription-Key","6aeeca623d274b61bd75b25cd28d2cb8"),e.set("My-Host","kotak-sampoornabima-dev.demoinsurance.com"),e)}),endpoints:e=>({getChannelSettings:e.query({query:()=>"/"})})}),{useGetChannelSettingsQuery:c}=a,l={key:"root",storage:u.Z},p=(0,s.OJ)(l,o.ZP),f=(0,n.xC)({reducer:{formReducer:p,[a.reducerPath]:a.reducer},devTools:!1,middleware:e=>e({serializableCheck:!1}).concat(a.middleware)});(0,i.sj)(f.dispatch);let b=(0,s.p5)(f)},646:function(){},3054:function(){}},function(e){e.O(0,[788,141,157,180,244,682,641,353,971,23,744],function(){return e(e.s=1874)}),_N_E=e.O()}]);