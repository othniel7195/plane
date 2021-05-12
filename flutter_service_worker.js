'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "79c21d8ea86ba9e8af6efb5427cd731a",
"index.html": "75af388521e0ac30c29fb16d7d710d15",
"/": "75af388521e0ac30c29fb16d7d710d15",
"main.dart.js": "3249172d1f6c85aa03748705538ccd8f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d0242d136080e2f1c6faecce60dcf24e",
"assets/AssetManifest.json": "f5b473080bd4968eaa54c000ab65dfc8",
"assets/NOTICES": "914f1f870e01c90c35096c501a2019d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/LICENSE": "749cd50f8cfd2ac08af100e4366b472c",
"assets/assets/images/ui/game_over_selected.png": "8ea98d818b6f72bcb48ac28f704f778e",
"assets/assets/images/ui/game_start.png": "1566d45896e010871c048443ba19a938",
"assets/assets/images/ui/title.png": "b05edb8eef4164d36b1593a5b84bd877",
"assets/assets/images/ui/bkmusic_close.png": "b63e1b4448011b809a6a67f6182d904c",
"assets/assets/images/ui/game_continue_selected.png": "4b700109415ca218b2cc835b5b202742",
"assets/assets/images/ui/shoot_background.png": "b05edb8eef4164d36b1593a5b84bd877",
"assets/assets/images/ui/game_resume_nor.png": "db75a55c5e0aaf44dbd4b6a11f125858",
"assets/assets/images/ui/game_help.png": "6b0ae1a12d5e360d4629d26127ceaebb",
"assets/assets/images/ui/btn_finish_selected.png": "7435824c05b3d7c51822a5eed6ed6b4d",
"assets/assets/images/ui/bkmusic_play.png": "fb94220c9c62b751ccc2f2967df3ea3b",
"assets/assets/images/ui/game_again.png": "da649f69be1ef666aa1dd6216e8edbd5",
"assets/assets/images/ui/shoot_copyright.png": "6242fb6196258e3f0fd453b0c4d7d224",
"assets/assets/images/ui/game_help_selected.png": "914d2fbaaba247630a4d5d51486cde42",
"assets/assets/images/ui/background.png": "e042c4765db3faa1fe9490558ba46dfb",
"assets/assets/images/ui/game_Reagain.png": "0a68e81d263b47921d0edd70b9b29bb8",
"assets/assets/images/ui/game_pause_nor.png": "5d0c5fde30f162a6c38cb2d25748b3b6",
"assets/assets/images/ui/btn_finish.png": "bbedd03ee651a7326219aab60406631c",
"assets/assets/images/ui/121.png": "f4dde83a0b0d43e420e9ab90802aa4af",
"assets/assets/images/ui/game_loading4.png": "544c8d46fefbc12cc33a04cf540a41c1",
"assets/assets/images/ui/game_Reagain_selected.png": "8274840d8878317255a551b3c36b3145",
"assets/assets/images/ui/game_loading1.png": "fd98fa73faa048145b6df826697ce6fa",
"assets/assets/images/ui/gameover.png": "ce8532557798754c2ec23aed496e5eec",
"assets/assets/images/ui/game_start_selected.png": "d1d0673c2418a33c993e74f09c90a71b",
"assets/assets/images/ui/game_continue.png": "f64c32675e71c9e5a102d793b23282fe",
"assets/assets/images/ui/game_loading3.png": "9aa50c598c5c5aebbbf0c98cd1228aa4",
"assets/assets/images/ui/game_loading2.png": "91bb1719a421cd175078e367bee56067",
"assets/assets/images/ui/game_over.png": "05672d6f27f1c0414c42dfce3a3b8f26",
"assets/assets/images/ui/game_pause_pressed.png": "40813c1432f16721bc19d4bad4faf2b4",
"assets/assets/images/ui/game_resume_pressed.png": "38c4be64fc538cdf762f29821ad06864",
"assets/assets/images/bomb.png": "9588066b85e36fd35fb839781bad80fe",
"assets/assets/images/me_destroy_3.png": "ab17a0ddd38701ed77f51287a75ff85c",
"assets/assets/images/bomb_supply.png": "ea6a4534129fbd0476455bd910e8d747",
"assets/assets/images/me_destroy_2.png": "c1cc1a93e6c6d502c3a8165b65d5f7f1",
"assets/assets/images/bullet_supply.png": "4c2dccc7b8ba9614cadc8a02a76f5c2d",
"assets/assets/images/enemy3_hit.png": "28bd7371732de661320db7671e465d6a",
"assets/assets/images/life.png": "28a95889837b445bb032c9137ac517e6",
"assets/assets/images/enemy1_down4.png": "b6076bf96c62a0f5b3e6e1d9c6d94e3f",
"assets/assets/images/me_destroy_1.png": "193b33ccaca416d9e4130bd6de356424",
"assets/assets/images/enemy2_hit.png": "8b8971df8dcc8fe3e72fe5babdbc0e4f",
"assets/assets/images/enemy1_down1.png": "f8417f3f75d17a103c30dc7aa74a9325",
"assets/assets/images/me_destroy_4.png": "b8c5b86ce8107dbb8d7cd5e4c0c7a234",
"assets/assets/images/bullet2.png": "a1b88cbc93cb1fc2129f0542bf2bd7c7",
"assets/assets/images/enemy1_down3.png": "bb2223b63bc1b0ca0cd89064b4da6146",
"assets/assets/images/enemy1_down2.png": "d75662c61e56ddaa7138e283ad77c8f6",
"assets/assets/images/background.jpg": "f09c7a28237de3980bd571e2b0c78e39",
"assets/assets/images/bullet1.png": "a929b4427f0d828a99b67f3650f154c5",
"assets/assets/images/background.png": "c940f7a5e2c1a437d17771ca306f2853",
"assets/assets/images/enemy3_n2.png": "18fa6ba5777032b2e9ee3e44868d1608",
"assets/assets/images/again.png": "da649f69be1ef666aa1dd6216e8edbd5",
"assets/assets/images/enemy3_n1.png": "bf0db7c3760fe159d8b215b88f18c202",
"assets/assets/images/enemy2_down4.png": "de804669a9be432dcd40db2012b348e8",
"assets/assets/images/enemy2_down1.png": "bda5470621d294b22d6907e9ec73dcf1",
"assets/assets/images/enemy2_down2.png": "e4328fa5b0b7fe01ae2cb2b4d8b12d51",
"assets/assets/images/enemy2_down3.png": "f3b4de5e0794e86dae6ede7d84e4612a",
"assets/assets/images/me2.png": "9259e22d3d4f703f7b2f84f47ef7f938",
"assets/assets/images/enemy1.png": "3d0666a1bf5908813c5f7730b2136083",
"assets/assets/images/enemy3_down6.png": "0562b687f2da0392cf9571f4a2e0337d",
"assets/assets/images/me1.png": "997baf693017476c77c3284d13a90de1",
"assets/assets/images/enemy3_down4.png": "6dc1049f5369557a84d348db19a81603",
"assets/assets/images/enemy2.png": "539ba67a7195721c7d530ae92a3e3781",
"assets/assets/images/enemy3_down5.png": "180a38e99232aea61927687ca5072b1a",
"assets/assets/images/enemy3_down1.png": "e15a9a51de28ad3bc9adaf3a1e6daf33",
"assets/assets/images/enemy3_down2.png": "2ce096a5be631becea3d7564d63e3d02",
"assets/assets/images/enemy3_down3.png": "b254a559cdc95b95674900e56842714f",
"assets/assets/audio/game_over.mp3": "e5058fc79608b4b3048c4e1b718b0f0c",
"assets/assets/audio/enemy1_down.mp3": "828b53a05a25921d47d37eab7487328b",
"assets/assets/audio/game_music.mp3": "0de7311fa997d58a644a60fb2ca15fbb",
"assets/assets/audio/enemy2_out.mp3": "adb464dd40ddb78b87d3ac57d6267b9d",
"assets/assets/audio/enemy5_down.mp3": "2810c20e93b88f0584075f188a3978cd",
"assets/assets/audio/enemy4_down.mp3": "8c06bc93ab4e6a1bb54f48fbbc60d227",
"assets/assets/audio/game_achievement.mp3": "59eb2a6c0c97ffca4572f31b0529c91b",
"assets/assets/audio/enemy4_out.mp3": "1b6087f721c070ab7297fa47f2013117",
"assets/assets/audio/bullet.mp3": "089ca1c203e53b9fcd966f6fa68348b7",
"assets/assets/audio/enemy2_down.mp3": "21e3a4d6f7ddc75e7dace320d5bb9bb4",
"assets/assets/audio/enemy3_down.mp3": "3b4ed18976faa7661460392de69c52ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
