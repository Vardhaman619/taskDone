if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-145bc384.js",revision:null},{url:"assets/index-d0d528f1.css",revision:null},{url:"index.html",revision:"a6b094465ef4ed2512c1edd9f22ea9e5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/manifest-icon-192.maskable.png",revision:"28ce2fe063fba89d93b3b5007cb5b08e"},{url:"icons/manifest-icon-512.maskable.png",revision:"6bb130621979fe84e810690d57035192"},{url:"manifest.webmanifest",revision:"ae575315e9260801757de31c2e36fc3a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
