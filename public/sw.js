if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1bfc9850.83c8a880ef9ec0b85d65.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/1d52231217dc8eb87c728618ebcf2301c306695e.f32828fb1bf3b4116196.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/3ef630e34cd10ba68f9d468ac363ff81c534e1e9.501a7f06cd60bad67fe4.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/545f34e4.4c9ca92d6d2b64fb2a1c.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/6e045ecb51274ffd2f181ecbdb365ae555fd0dec.e5ebd9a9dc48937a5931.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/78e521c3.25d206ec1ebfd3e3872a.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/9af15ae60cb424c06b287cdea929f1dafbdc530d.63a1e8d3c60a27d174a9.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/d7eeaac4.feddd38880a84c293c35.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/de71a805.cc8a54f3d1a64552b79f.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/ed3bab9c67eae8917f5ab19e623a66938b8004e0.e9ab8d7cce4bc1084f7d.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/ed3bab9c67eae8917f5ab19e623a66938b8004e0_CSS.f6584926f1188e1b5b3e.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/main-cae84ff9997f45ea99a4.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/_app-c56d211ae433e28de667.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/_error-02d808554803cbe2fb76.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/contact-c2f98bcb28be76290f0d.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/disclaimer-279fefe0e3e61d3bf071.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/index-4391d28cabbc382bde63.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/privacy-de7e32957ccfd9300462.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/products-90679645a800058ef75d.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/quote-18537fd268c1f1d3b2c7.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/pages/terms-f490a366fd8c94d90eb6.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/polyfills-0144d5b481bf411d4a2c.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/066191d8cb2f305cfc54.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/34cc0c002e4cc7871c74.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/48b6288c23aea2c79822.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/6be178bd7b297972401f.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/88104b207ad214b8c89b.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/9649721d1bc4cd8dd69b.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/ada3a7ac6c1052b3b430.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/c5e586abd7c0755087e0.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/css/cf9e39c63245d8de7f96.css",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/q6ccqvQTxy4DdUuMgmnWI/_buildManifest.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/_next/static/q6ccqvQTxy4DdUuMgmnWI/_ssgManifest.js",revision:"q6ccqvQTxy4DdUuMgmnWI"},{url:"/android-touch-icons/icon-192x192.png",revision:"1ae4abbdd9187576d29b96023e375892"},{url:"/android-touch-icons/icon-256x256.png",revision:"25ad5590ddf4e3ec43eff9a08d64adee"},{url:"/android-touch-icons/icon-384x384.png",revision:"678d6c843a2853efbb3ad3954d3e0589"},{url:"/android-touch-icons/icon-512x512.png",revision:"93966cc979dd4d916caa7bdd6a9aa9dc"},{url:"/apple-touch-icons/apple-touch-icon-114x114.png",revision:"30e098c3f8e047320c0f697c69b366e9"},{url:"/apple-touch-icons/apple-touch-icon-120x120.png",revision:"195105aa631d503e70a27e9baa9ca277"},{url:"/apple-touch-icons/apple-touch-icon-144x144.png",revision:"847a44f23048561eb1b14e6a517f7886"},{url:"/apple-touch-icons/apple-touch-icon-152x152.png",revision:"b0549db09e6a33bee0d4661c50c1a22e"},{url:"/apple-touch-icons/apple-touch-icon-180x180.png",revision:"f5e77a7fe4fb43f985dce4a450b118ca"},{url:"/apple-touch-icons/apple-touch-icon-192x192.png",revision:"1ae4abbdd9187576d29b96023e375892"},{url:"/apple-touch-icons/apple-touch-icon-57x57.png",revision:"0f3bb52f2e9e9b3ef973a2d067d1d25b"},{url:"/apple-touch-icons/apple-touch-icon-76x76.png",revision:"90d5657ab36dc24f452ee3d2e2f89084"},{url:"/assets/VIP-Flush-1.svg",revision:"53a30b0d56439372b8ee7c1bd0ca44c7"},{url:"/assets/ada_blue.svg",revision:"72a05a9295239a0c02261415b9d8a202"},{url:"/assets/calendar.svg",revision:"5080c6e0266444edc607364a1d5e821e"},{url:"/assets/construction.svg",revision:"4fc891771525ca7a9719fe4728aa7a91"},{url:"/assets/event.svg",revision:"8fca32310ac7c2cc922cb2c8f481dd5c"},{url:"/assets/flushable.svg",revision:"d1376921549cee78af711c87abccaa2d"},{url:"/assets/relief.svg",revision:"de59bd2a3de45137536150a01f24fd15"},{url:"/assets/renovation.svg",revision:"58ae7c189a88276efe0dae038e4e3d1a"},{url:"/assets/section1Bg.svg",revision:"10c62b03dcef57fd7cb2c848d540c76d"},{url:"/assets/sink.svg",revision:"e15ca3adfe25aa07f954c8cabf13d0a4"},{url:"/assets/sps_blue.svg",revision:"3a2b1c7411679d79068dff9aa898cd8a"},{url:"/assets/sps_yellow.svg",revision:"ef198c40225d0bd1382e03eb66833acc"},{url:"/assets/testimony.svg",revision:"c78b4e2b059794eb884d519f28c6e0db"},{url:"/assets/testimony1.svg",revision:"c78b4e2b059794eb884d519f28c6e0db"},{url:"/assets/testimony2.svg",revision:"efc6c1cce0ef1a138d628e13217313db"},{url:"/assets/tick.svg",revision:"dca31e3410496bb0b9367ddb2f3bc35d"},{url:"/brand-logo-transparent.svg",revision:"6326b5f9fd4727e00ff5661f9d93009c"},{url:"/chrome/chrome-extensionmanagementpage-48-48.png",revision:"7fb0448c7863b38536c0dd0f07e002c2"},{url:"/chrome/chrome-favicon-16-16.png",revision:"a207bd0455dd1b09d00f419f519e82a0"},{url:"/chrome/chrome-installprocess-128-128.png",revision:"55e8c65d327ead53035dda1805ac279a"},{url:"/favicon-16x16.svg",revision:"0f3859624e6a44b0805f2057a5e87196"},{url:"/favicon-32x32.svg",revision:"0387c934bc98683d0f766bc3a14af9a9"},{url:"/favicon.svg",revision:"0387c934bc98683d0f766bc3a14af9a9"},{url:"/firefox/firefox-general-128-128.png",revision:"55e8c65d327ead53035dda1805ac279a"},{url:"/firefox/firefox-general-16-16.png",revision:"a207bd0455dd1b09d00f419f519e82a0"},{url:"/firefox/firefox-general-256-256.png",revision:"92b045c45f55701f752d402f325987bf"},{url:"/firefox/firefox-general-32-32.png",revision:"20cf09fdb264b51e662e1116a83cd67e"},{url:"/firefox/firefox-general-48-48.png",revision:"7fb0448c7863b38536c0dd0f07e002c2"},{url:"/firefox/firefox-general-64-64.png",revision:"4bd88c23a2f693c305658832b422332c"},{url:"/firefox/firefox-general-90-90.png",revision:"2a5cde5c92cfc5f9a415fda544bcd698"},{url:"/firefox/firefox-marketplace-128-128.png",revision:"55e8c65d327ead53035dda1805ac279a"},{url:"/firefox/firefox-marketplace-512-512.png",revision:"8bebca2bf2e41d8afeef25fa726fb22c"},{url:"/logo-black.svg",revision:"928e597f4b7f94e86637bd29f367c87f"},{url:"/manifest.json",revision:"17c0920d23ae7dcfefcb7bca41f8e69f"},{url:"/maskable_icons/maskable_icon_x128.png",revision:"446cd6eba5a47acefaa7b753159903f7"},{url:"/maskable_icons/maskable_icon_x192.png",revision:"320150e594ab7a211df0067a7546336e"},{url:"/maskable_icons/maskable_icon_x384.png",revision:"ebf3903e9fb9a8177e5ad2a733368c40"},{url:"/maskable_icons/maskable_icon_x48.png",revision:"e02dcbc06cacf69b3be546efedb9a6ae"},{url:"/maskable_icons/maskable_icon_x512.png",revision:"79eef311300ac0757c5561f4feb583fd"},{url:"/maskable_icons/maskable_icon_x72.png",revision:"c2c6b9abac93fbf9578ba7907a2b6ebd"},{url:"/maskable_icons/maskable_icon_x96.png",revision:"ce607a729bbb68ca03a2cb28b692e912"},{url:"/service-worker.js",revision:"4f7e38cb63da69dbeadc19611d5f5ffc"},{url:"/windows/windows-smallsquare-24-24.png",revision:"8838951d14083be12bbe9ead0d85ad2e"},{url:"/windows/windows-smallsquare-30-30.png",revision:"40b19ee9c2b0417504ece713524e5d13"},{url:"/windows/windows-smallsquare-42-42.png",revision:"855217a5987519b82c1064bf4ddf472f"},{url:"/windows/windows-smallsquare-54-54.png",revision:"a170ce6eba60f015deec5914be17fd48"},{url:"/windows/windows-splashscreen-1116-540.png",revision:"e25f6166d74a4896dd0c97bfe4dc8bce"},{url:"/windows/windows-splashscreen-620-300.png",revision:"661ccc1ec32ad8bdb966fd1910b9a3a1"},{url:"/windows/windows-splashscreen-868-420.png",revision:"871cb1e7f839a1fe7dee66c365049c7f"},{url:"/windows/windows-squarelogo-120-120.png",revision:"7ca76e6e98663711c0399fd25ac4c14e"},{url:"/windows/windows-squarelogo-150-150.png",revision:"6f792d2f34f7cd7a7a1c7bc6366e3673"},{url:"/windows/windows-squarelogo-210-210.png",revision:"2ec223cb23b6e0857afab0bd69583525"},{url:"/windows/windows-squarelogo-270-270.png",revision:"b225dd4c6978b8f551fcbd90b7243030"},{url:"/windows/windows-storelogo-50-50.png",revision:"43ffe3b5c874247b4bdb474ff768f6b3"},{url:"/windows/windows-storelogo-70-70.png",revision:"c6fe55afc03414277f1434f4696158d5"},{url:"/windows/windows-storelogo-90-90.png",revision:"2a5cde5c92cfc5f9a415fda544bcd698"},{url:"/windows/windowsphone-appicon-106-106.png",revision:"531666a62be48e6a90710b423b7d4b6a"},{url:"/windows/windowsphone-appicon-44-44.png",revision:"288851634e4cb58327bf6350822d9f64"},{url:"/windows/windowsphone-appicon-62-62.png",revision:"868e60db2ee61383b4e71e34c8b32cdf"},{url:"/windows/windowsphone-mediumtile-150-150.png",revision:"6f792d2f34f7cd7a7a1c7bc6366e3673"},{url:"/windows/windowsphone-mediumtile-210-210.png",revision:"2ec223cb23b6e0857afab0bd69583525"},{url:"/windows/windowsphone-mediumtile-360-360.png",revision:"4e827c9eafaf9526312143dd3e6a0ede"},{url:"/windows/windowsphone-smalltile-170-170.png",revision:"6c77e18c456c2b4786b968db3b336d6d"},{url:"/windows/windowsphone-smalltile-71-71.png",revision:"d98576525c81101da1cf78f374e2ba4c"},{url:"/windows/windowsphone-smalltile-99-99.png",revision:"cf2182d0752ce6f0e2f47650fbea5156"},{url:"/windows/windowsphone-storelogo-120-120.png",revision:"7ca76e6e98663711c0399fd25ac4c14e"},{url:"/windows/windowsphone-storelogo-50-50.png",revision:"43ffe3b5c874247b4bdb474ff768f6b3"},{url:"/windows/windowsphone-storelogo-70-70.png",revision:"c6fe55afc03414277f1434f4696158d5"},{url:"/windows10/LargeTile.scale-100.png",revision:"a8ad5589e5eaa5dc57d77433784ef747"},{url:"/windows10/LargeTile.scale-125.png",revision:"401f7a59e9dffc48262254f24f18f427"},{url:"/windows10/LargeTile.scale-150.png",revision:"1eafff72f032a16cb0c3590bff8d8c2a"},{url:"/windows10/LargeTile.scale-200.png",revision:"3b13879c757c19d3090b13618ec64231"},{url:"/windows10/LargeTile.scale-400.png",revision:"68fc54c6d0fc2a976b08a75291266f8e"},{url:"/windows10/SmallTile.scale-100.png",revision:"d98576525c81101da1cf78f374e2ba4c"},{url:"/windows10/SmallTile.scale-125.png",revision:"427fde080eb3d5072d6b6a1dfbbdec8f"},{url:"/windows10/SmallTile.scale-150.png",revision:"da8d3af3f9cb25dbfb7bc7340486d6e4"},{url:"/windows10/SmallTile.scale-200.png",revision:"91bce0f7edc32a487b1e729b3a149412"},{url:"/windows10/SmallTile.scale-400.png",revision:"0e31439bc2891d66964e4b05e309fb2d"},{url:"/windows10/SplashScreen.scale-100.png",revision:"661ccc1ec32ad8bdb966fd1910b9a3a1"},{url:"/windows10/SplashScreen.scale-125.png",revision:"fa057a17cdfe9de983fbc46e8391450e"},{url:"/windows10/SplashScreen.scale-150.png",revision:"243987e06138da9ad9dc652c8e9b2719"},{url:"/windows10/SplashScreen.scale-200.png",revision:"998763c2e9a3fc294a11d6b74369a765"},{url:"/windows10/SplashScreen.scale-400.png",revision:"3077189e1a56937f187e9a86de9b1fd1"},{url:"/windows10/Square150x150Logo.scale-100.png",revision:"6f792d2f34f7cd7a7a1c7bc6366e3673"},{url:"/windows10/Square150x150Logo.scale-125.png",revision:"1282500d6f61dfc516c9fc0476255ced"},{url:"/windows10/Square150x150Logo.scale-150.png",revision:"7e80d8f2a46bbe461875cdb95a61a88f"},{url:"/windows10/Square150x150Logo.scale-200.png",revision:"018e9fcb99eb90ad6aa71d545322d64d"},{url:"/windows10/Square150x150Logo.scale-400.png",revision:"c305d7347dfaea654966ce748c8b1c28"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"a207bd0455dd1b09d00f419f519e82a0"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"ae2c3bdc1bb9fd091a55ee8c55c5d130"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"8838951d14083be12bbe9ead0d85ad2e"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"92b045c45f55701f752d402f325987bf"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"40b19ee9c2b0417504ece713524e5d13"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"20cf09fdb264b51e662e1116a83cd67e"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"19967eba0796c1aef9dfb408ee8ed671"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"80d4811d7180e61670085dcd6eac82d3"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"288851634e4cb58327bf6350822d9f64"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"7fb0448c7863b38536c0dd0f07e002c2"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"385c9d76f1e6dd06f2a71f24bebe7fca"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"4bd88c23a2f693c305658832b422332c"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"342fa7e2f927b904a70c283e07bdb6e8"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"cab1a100ee70b8f6163d0a7184af76a1"},{url:"/windows10/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"ceede8db562b5b2f46fd58c02359dfb1"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"a207bd0455dd1b09d00f419f519e82a0"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"ae2c3bdc1bb9fd091a55ee8c55c5d130"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"8838951d14083be12bbe9ead0d85ad2e"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"92b045c45f55701f752d402f325987bf"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"40b19ee9c2b0417504ece713524e5d13"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"20cf09fdb264b51e662e1116a83cd67e"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"19967eba0796c1aef9dfb408ee8ed671"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"80d4811d7180e61670085dcd6eac82d3"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"288851634e4cb58327bf6350822d9f64"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"7fb0448c7863b38536c0dd0f07e002c2"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"385c9d76f1e6dd06f2a71f24bebe7fca"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"4bd88c23a2f693c305658832b422332c"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"342fa7e2f927b904a70c283e07bdb6e8"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"cab1a100ee70b8f6163d0a7184af76a1"},{url:"/windows10/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"ceede8db562b5b2f46fd58c02359dfb1"},{url:"/windows10/Square44x44Logo.scale-100.png",revision:"288851634e4cb58327bf6350822d9f64"},{url:"/windows10/Square44x44Logo.scale-125.png",revision:"27751b051c45460c581e56d041bcb75a"},{url:"/windows10/Square44x44Logo.scale-150.png",revision:"8ca10ff46ecdb8f135331cba2c30a032"},{url:"/windows10/Square44x44Logo.scale-200.png",revision:"bababd3808b284af269127be589c7c5f"},{url:"/windows10/Square44x44Logo.scale-400.png",revision:"f36b1cb65e83652f2d2a610641ed236a"},{url:"/windows10/Square44x44Logo.targetsize-16.png",revision:"a207bd0455dd1b09d00f419f519e82a0"},{url:"/windows10/Square44x44Logo.targetsize-20.png",revision:"ae2c3bdc1bb9fd091a55ee8c55c5d130"},{url:"/windows10/Square44x44Logo.targetsize-24.png",revision:"8838951d14083be12bbe9ead0d85ad2e"},{url:"/windows10/Square44x44Logo.targetsize-256.png",revision:"92b045c45f55701f752d402f325987bf"},{url:"/windows10/Square44x44Logo.targetsize-30.png",revision:"40b19ee9c2b0417504ece713524e5d13"},{url:"/windows10/Square44x44Logo.targetsize-32.png",revision:"20cf09fdb264b51e662e1116a83cd67e"},{url:"/windows10/Square44x44Logo.targetsize-36.png",revision:"19967eba0796c1aef9dfb408ee8ed671"},{url:"/windows10/Square44x44Logo.targetsize-40.png",revision:"80d4811d7180e61670085dcd6eac82d3"},{url:"/windows10/Square44x44Logo.targetsize-44.png",revision:"288851634e4cb58327bf6350822d9f64"},{url:"/windows10/Square44x44Logo.targetsize-48.png",revision:"7fb0448c7863b38536c0dd0f07e002c2"},{url:"/windows10/Square44x44Logo.targetsize-60.png",revision:"385c9d76f1e6dd06f2a71f24bebe7fca"},{url:"/windows10/Square44x44Logo.targetsize-64.png",revision:"4bd88c23a2f693c305658832b422332c"},{url:"/windows10/Square44x44Logo.targetsize-72.png",revision:"342fa7e2f927b904a70c283e07bdb6e8"},{url:"/windows10/Square44x44Logo.targetsize-80.png",revision:"cab1a100ee70b8f6163d0a7184af76a1"},{url:"/windows10/Square44x44Logo.targetsize-96.png",revision:"ceede8db562b5b2f46fd58c02359dfb1"},{url:"/windows10/StoreLogo.scale-100.png",revision:"43ffe3b5c874247b4bdb474ff768f6b3"},{url:"/windows10/StoreLogo.scale-125.png",revision:"5e0791c1b36aa4c0ecb38853e5e2b7a0"},{url:"/windows10/StoreLogo.scale-150.png",revision:"b00e09966154455b0bb5f254db192433"},{url:"/windows10/StoreLogo.scale-200.png",revision:"ea96ac0c5fbf3f311221e0fc742cc515"},{url:"/windows10/StoreLogo.scale-400.png",revision:"7fc5d917235a61eb20390dd45484c11c"},{url:"/windows10/Wide310x150Logo.scale-100.png",revision:"32fb2b773c469ddf9bd4b475582fd6b1"},{url:"/windows10/Wide310x150Logo.scale-125.png",revision:"7d2da2a34470d420a4e5c52fdce43519"},{url:"/windows10/Wide310x150Logo.scale-150.png",revision:"90ac5c8a08b5af341d68f3f164bb7454"},{url:"/windows10/Wide310x150Logo.scale-200.png",revision:"661ccc1ec32ad8bdb966fd1910b9a3a1"},{url:"/windows10/Wide310x150Logo.scale-400.png",revision:"998763c2e9a3fc294a11d6b74369a765"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
