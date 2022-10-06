'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a06f5185005ea1471415d0616f33356b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1be75071bcfa50d25356f147913f7fb4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9e8e52b2ca0a968ecc30b2c4a695879",
".git/logs/refs/heads/main": "246dcf7bfced412bc6c72ee35cd53537",
".git/logs/refs/remotes/origin/main": "58584b4ff661eb383bca19af801893e8",
".git/objects/09/8aa73a1f859b7d5fc1e017b45c6000752a6bb8": "484d29fd933f8cd9b79cbc4dda2f5192",
".git/objects/09/ecd6fcefde5fccb0cd60b8a854eb9a097559b5": "ce8001011c52d9ea97368275a60460ee",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/17/d60a8ef2981d8b79f359a01ac4e807cf24c19f": "b00d382402ab3ad8cf1e3d77548e818d",
".git/objects/1c/717f421d40120ee75342ed8c34110982a773ae": "71e0668b4d25e37c6307681de2bcecf2",
".git/objects/23/18bf6408e3a3ecaceca92796f93ccfd5566acc": "3b93c79a9d6dd2a57824c452484f6ef0",
".git/objects/23/6ee01838f1a85077af9b884b6a51cd7ee6f7a9": "657d4916cd423aea30249a9fe956c5c5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/cabbd9759c8708ff5820f81a50caf8891e2f0e": "b61da9419c431ef570c86415c05d59fd",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/40/69dfc728ee28880ca3d3f856db8fa7e1ce1f2e": "f406863cda2e21fe7e8ef8dac08414bd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/1b20f9da15f233c0f929b84ddf218fb2a1d423": "aaaaff370402d6b5461a61b1af95055b",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5f/3eb2f8a9b667af9157ab718ad7e29f9d299dd2": "7c2fbf28efaa9dec27d36c52281a4db3",
".git/objects/67/e63648d5e1c41da6fe7a37166a0d687ef0b89e": "9d58b4cdaa558a79253392cce86f7efb",
".git/objects/6b/d3f2e14240faa5ba8519d2a39a699cdb33bf32": "244abb60ccd768945c58501138473040",
".git/objects/73/ddf77a875ff213689fe0dfcb01a8598effdc3e": "4ecb55d63f69266720472ee9b9eaf872",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/a9ad593fca62d74962fbec6a43f7da1a591047": "c7443afa79fe5caff320c241cb69a0a2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/f5d87b4c794c128e97c8d43f3c4b53b51e0ba4": "17f06d1108e37b479dc1288ac573a714",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/42223418f64b5b29f76b949136ccf20bef744d": "00606304c58c990de4746d15f48fdc8e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/3077362d5aca1a6c1fe1c1edb79f31582995e9": "140d1e5da73df9d9bb98d593484fbdd8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/2f313f42f56916c00cfd657d61dec6de092d10": "97a2434efca12bf3d5d999b9d81398a9",
".git/objects/b3/af4cc9b8613fc3aa0e91f0ac4e33756b6443ee": "ef2fac4af21aa231053df7e2627c5bdc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/393d33ee66aa92d29c007591bf1810ffe5d9e0": "f3d47972a1dd5e275733fe1f54280248",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/dfcf2401864d6abc938c6f42ca91d503bf4b94": "c38e0915b607978ec1322364ab718985",
".git/objects/d1/1bcf0e819a95451b86a829716f9d4e5aba6c6c": "b3f82f08d23d8102377cdcda008f894b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e1ca63a340a5d7d405e0225bf448c613b6b7bc": "79c034ee57c136767ac823f4b95aa733",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/7b5ef783002ec3b9591bc6d801ad099d64c085": "5669d1e0d908d4b2db2b5ac08d45d6b3",
".git/objects/e4/964748e390a9bee809765f390cae94c2c91805": "9e0ab9ae31e36b3d9d0360e195e907b1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/6a1e640815833493dc9d5333807654fbeda0df": "da8240239e461599e1a2f286f355f9a3",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/6afe5d6fb4fae65472a36d1821287df03b20aa": "281444aefc95df53ff0384e3555ca8e1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/5aa56df89f8b675231816f55d6f6e037db4797": "b0f1244d71aa44d43054f07a5304e7dc",
".git/objects/fe/6d67148e660c432ecf22a63c0a2ed3a8811ddc": "b503c741e645f41ca6761f28348e42ed",
".git/refs/heads/main": "c5814a78e7027949a8b48717029b985e",
".git/refs/remotes/origin/main": "c5814a78e7027949a8b48717029b985e",
"assets/AssetManifest.json": "ca2cf5783fdc353f031d46c7ff71288a",
"assets/assets/1/Elek.png": "a48ab71f82344036c7cbf5571af1d07b",
"assets/assets/3/BJT/bjt.gif": "ba3c53184ee09a40a3d331a691596e0f",
"assets/assets/3/BJT/bjt.png": "747ab91bc3fdc47db1fe1cff461805e8",
"assets/assets/3/BJT/Elek.png": "5d1993487bb7472f8b58577099b73a30",
"assets/assets/3/BJT/Elek9.gif": "0475b1ec5ebc978784ad3b284cb8b537",
"assets/assets/3/BJT/Elek_hell.png": "cd6f1ba0e28d8f461b80dd358f5b8018",
"assets/assets/3/BJT/Loch.png": "05caf5cd5536926caca246e622fc752f",
"assets/assets/3/BJT/Loch9.gif": "bda15e3dc5cfa560f86a7cb75ffb8e58",
"assets/assets/3/BJT/Loch_Bedeckung.png": "1afec3ae0129028d1947f910e057ed2a",
"assets/assets/3/BJT/Loch_Bedeckung_neu.png": "1dfb487c1cb941537954cce9ee169d90",
"assets/assets/6/transistor.gif": "05a855c3046d0a72a08d86d9b59f2d1a",
"assets/assets/6/transistor.png": "5e96a0a2fcd62b625bd60aa3c83262db",
"assets/assets/6/transistor2.png": "2d6f524fb0ca40f4277cfda87eb7a425",
"assets/assets/6/Transistor_Uebertragungskennlinie.png": "0e7a93dcae5da9e15f4a6588d7464656",
"assets/assets/6/Uebertragungskennlinie_Verstaerker.png": "503dde524461b7652396a06ce1edd06a",
"assets/assets/home/ELO.gif": "1173187ca6a35bd28d0af90cd41737cb",
"assets/assets/home/Herunterladen.png": "8452b24d7a70b0172a71f93b85ccc23b",
"assets/assets/home/hsu-image.jpg": "763d4ae69f6475971030b54571b76969",
"assets/FontManifest.json": "38f05824d5f936fa888ac3a7743183ab",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "59d29f6c673f852a1eb4e51dd5ed8abc",
"assets/packages/catex/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/catex/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/catex/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/catex/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/catex/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/catex/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/catex/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/catex/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/catex/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/catex/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/catex/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/catex/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/catex/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/catex/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/catex/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/catex/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/catex/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/catex/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/catex/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/catex/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f058160f2f53b4546090a6ac659c0dd5",
"/": "f058160f2f53b4546090a6ac659c0dd5",
"main.dart.js": "b24f4b8f0a369c98236b7130692344dd",
"manifest.json": "cdfe77bdfa9eb00121bdb1970ebb32c2",
"README.md": "b69e50eb3d02aa532df0c9eeb5c10095",
"version.json": "bf43eb28f1cea5cb072fb1d0c23c0f4b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
