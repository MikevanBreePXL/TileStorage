if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>n(e,o),c={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>c[e]||d(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DduHLFuC.js",revision:null},{url:"assets/index-k2aAwbur.css",revision:null},{url:"index.html",revision:"d36009191309fec02f9439a49855d91a"},{url:"registerSW.js",revision:"d4d6f2767bd4aae498c730a422bf9ec4"},{url:"apple-touch-icon.png",revision:"eb44ed0bdb64af42a512bf3d8311e9d1"},{url:"favicon.ico",revision:"759df46c0c7b0f7f852ce3df80c372a3"},{url:"manifest.webmanifest",revision:"3b9386240b7a9ce802fbb93f9316fb62"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
