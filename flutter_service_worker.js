'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3a455ce50c79d267ff7acaf97ef3da35",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "79a9b5c2da2abb7d6f076748921c44c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b53b83acb394e4acdf2f52e1f88fddc5",
".git/logs/refs/heads/main": "f512241898759b2d6fddf11ad502ede5",
".git/logs/refs/remotes/origin/main": "e2d522288f891102ad07a3ba0cb147d4",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0e/f0be08415aa3c66f1d9c80e6c5ddd370965ffe": "5115f8913d068a540c2d517ad7e5c63f",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/32/8b5f7c76c77446056e1a2314d686a0c9a810be": "fd142e8c9b856ad5e6f8a7f5159271ff",
".git/objects/34/a937333fe8d4fb099261c4f035cf6ffe23673e": "da7fc136c0857aebfd3859f89dae0bd7",
".git/objects/38/b5d58532f917c6a02f79d5a2551cf73f1927fd": "59c0dfadec62f440405ed1f42a94d2d1",
".git/objects/3a/8b9dc7c4b01770e9d6b7191e9b24a2c54d99d1": "357624487f5bf2603100d89767006d12",
".git/objects/3d/691aa28b26b07c5f3adf8b474d27c5babb57fc": "98bbcd0da89d5d7b8861ca37c21fa18a",
".git/objects/40/2d22317c9efa0cb447bc56e19b196ec93f823b": "77d4dc2161e223713012d314e42d969b",
".git/objects/41/8620e3b197e0b9a7c51cf26522c321eff8aa14": "28e262ab51acf2d32d879031c6ecafc7",
".git/objects/43/51321b7e6114ac87d2b2572665ec1ce0dd8dca": "60e293c3f55c4256b3abb0c5d3cf0e43",
".git/objects/4c/998f306987ff813b4114e12390a3dc0514ef54": "05fdf594e1a7a2540b68996b0ea4939a",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/35e04a7ca5ea81a2aff3af6b3f851ceb551a22": "30998f09b07c02b73ee8039c49678283",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/e2ca781208f7d9762dc14f7b2f27085332ef8d": "f1241910a4e0e9908e2bdfbf06263a21",
".git/objects/60/353650b15a8ee125627636f59657b256c6eca7": "7b271dba675df2c9c576991d73603cc3",
".git/objects/65/4c25c94b8aa40853d8ed1b1f0cc0c8c67979d5": "790f143ee16ef8321ae2ddb15d110e72",
".git/objects/66/951d7eaefb8f5ac6459401370219c7efd453ec": "69d1fd8107a934f95b760ff1cb8bc1a0",
".git/objects/66/f33b79f781a5512b636fd7ecc7bc2a9ad613c1": "eda0b2d4a6386055b66bcfc6cd2d4a08",
".git/objects/69/e1d18c5c8482e9ddffd9ee5e45bc5fb567db64": "c67b9a694a6a591671d751f45350adb7",
".git/objects/69/fa12e0d223b97e9df1701905ad6238fe9ca09a": "caee368101021181dc91de5ec12b7a10",
".git/objects/6a/6656c2ee9cd1c449fa17aeae397fb27dc445c6": "f85c552b0c45bb16606caca9987ece67",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/7dc0364abe1075bd0674f970c169c4f4588c65": "4245545974fe2649bbd08114882961d7",
".git/objects/77/5f54dd2f3e5dc0b13d7c3830294fde782ae648": "4bfa64fbf397a2beac7d3bf144cc4d7d",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7c/90e183c69b1f2dc93d1d696a08eb2f45f9a6a5": "0477bc3e6e31212695fdff72d8f168e3",
".git/objects/7f/5b8a597af2bfc581ae6575086917bb92dd9f4a": "78d7338a69e8a10360c3f211be3a0777",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d2a2b2a7ad88ae4b63586f1d8303e3bdd9a55b": "6b6c39747e559f9e82698bafc7e63e7d",
".git/objects/89/c7efc2ecb24d0235be630ca97d89ce5f0d8076": "9d8e691ca7e782525a29698c17e8f829",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/deab9233c37cd70d6b30449cf8e53b80539651": "20b4c636f13292245a79ef280bdad5d5",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a4/d30629dfb7547b8ea7947072fce6ef3cfa9ba1": "0e272699cf24433a717602e8ea4004e9",
".git/objects/a5/cbb7abb4f67d57782df28d800e8aa477c34d80": "1fc1846a9ba6f8b74e42b189fe341404",
".git/objects/a6/d0d526f625f235c77e9bc8b13ee10957891fbd": "41318ecd10092c47b54c60ed6263ee47",
".git/objects/aa/a95cc39eed77038cd64afce47f078490fea118": "2b22393d314a2fd4687a5f9f34dd819e",
".git/objects/ab/cda98237c0eb616d739bf4f55b5f32342cd555": "c27179840a5e32f54962e8431fe16d6f",
".git/objects/ad/5298fbd2bb91d34bc558719793392af54b0d0b": "a8d62dad288a3a87829540695123b6f8",
".git/objects/af/28520e60dfe4e0345c9b6ea474905d956e93b8": "d1f7f9eecbb2e179fffe1956bce5bd27",
".git/objects/b4/6c743daf6c463448fdcf7f7670106fe52aee24": "4380462cdcff879a41325cf0833d6419",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/3d720dd667b4c0b9749d288c0ccc40c9fff24a": "6463b050a15072bbc93f344ec6b490e0",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/ea94f0eae293010ed3386344a05bb27bfa6e27": "a728a1760ad65cce2ce52b3713704dbc",
".git/objects/ca/188b736f1266b717165e1e993d548963bd9a58": "d9c8fb50569391cb0a5f82153dad6079",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/b65c357296ce0b3aa8fe1f7c98960aeff70a69": "22999b056050d17d25b86b085716e71e",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/aec427c9c5ab148f241e77abec87bca79b4662": "248a7f3e94be05c0930504efab234864",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/cb8ea1c5a1e2d39b315a3fe104fe86d75da060": "6df390e7143646b3137a78b0d2448c08",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/5fb8705826b7c52cad0a90f379ca882e65237d": "33219ef94124888f4f429a80e85b14fa",
".git/objects/fd/ed8fb9decca38c0a8e3c0b179e281ccdad48d3": "78268e9f7d1513e7d12f1b6a1fa9e8bc",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/ff/6e762911de39a7159f2e04bbd033a83e0ffcd9": "bd68c73cdb0cd33831d5cec6b3e24b03",
".git/objects/ff/8cab15135f2bed3c29444d39eb94ef7a31d25e": "3aa1c21a94703b49e0fe9b70cdcde8e5",
".git/refs/heads/main": "9b435d24c50b22a0fdb6c6096d35591f",
".git/refs/remotes/origin/main": "9b435d24c50b22a0fdb6c6096d35591f",
"assets/AssetManifest.bin": "253ea636ba97841378ca80c5a1e123ba",
"assets/AssetManifest.bin.json": "8082a9cee8ec4bd3c7009e06bcb0429a",
"assets/AssetManifest.json": "77ff38271326fde1c2a3b5b20cc32b23",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/c1.jpg": "09959dae44942ef4e9bff07fddcfd04e",
"assets/assets/images/c2.jpg": "b013c48bfe826b98de0bd1e762322d52",
"assets/assets/images/image1.jpg": "dffa3f7ac0e467ebe6affa89a0f87186",
"assets/assets/images/image2.jpg": "46e5caa378cba3d454546f0b1e68b35d",
"assets/assets/images/image3.jpg": "68e9e478eeb2845b949b1d0215bf1099",
"assets/assets/images/IMG_5946.jpg": "a7c70ebecb9a05d71e1ee927239ea740",
"assets/assets/images/IMG_5953.jpg": "c697587f70eb5861cd06cbd4e09b13ae",
"assets/assets/images/IMG_5954.jpg": "e84610076548c5b45a25da965d221aad",
"assets/assets/images/IMG_5955.jpg": "dfd05378fe1bfea9287d9a7c457ccdf7",
"assets/assets/images/IMG_5957.jpg": "3ea15a1939cf5a64df23ca6a4fa9e0ea",
"assets/assets/images/m1.jpg": "d2a5b99370c70f8b0196439d27e18add",
"assets/assets/images/m2.jpg": "88666d0361c8d30fa2a8e0d011b2190c",
"assets/assets/jamrud.mp3": "5137bdfcb37d758c784c37bd6c330202",
"assets/assets/laskarpelangi.mp3": "c347210ccd82b74085d6245e6d9b7040",
"assets/assets/lotties/Confetti%2520Looping,%2520Confetti%2520Seamless.json": "64bad96f33a194b36040410fa16a6399",
"assets/assets/Reality_Club_-_Love_Epiphany_(mp3.pm).mp3": "e3e3ad6d9d6c9d59751c462ead55cfd4",
"assets/FontManifest.json": "13f2d5a1592b9371295a772e8dddea78",
"assets/fonts/MaterialIcons-Regular.otf": "aade535a9530fbbdeb71633995135ca1",
"assets/NOTICES": "f7985f2cf98fa2499ca2c0e0b812a1d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/glass_kit/assets/noise.png": "86f22ae1a498bb8f0c39264f9c7c796c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d872952a6cc3e5cdc544564d3963bb7e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ae35daadc8ca602fa62fdc0b7c00b3c",
"/": "2ae35daadc8ca602fa62fdc0b7c00b3c",
"main.dart.js": "60793949394091d4357385e791897ddb",
"manifest.json": "dd19dd915792fdb2a7f51e773317b259",
"README.md": "e95b097c1146bc2c7ac53cdaa99952e6",
"version.json": "39338b0f7801362b8c89553573a5daf6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
