(() => {
  let i18n = {
    "ar_SA.js": "ar_SA.0e3064768228a2e9cdb8.js",
    "da_DK.js": "da_DK.8e08912411ba9fa11fdd.js",
    "de_DE.js": "de_DE.2eba38e558b7ec7a9fab.js",
    "en_GB.js": "en_GB.1e9faa27f938153f1580.js",
    "en_US.js": "en_US.52f9ba4f52d32a7bd0bf.js",
    "es_ES.js": "es_ES.67746facd6bbf373471d.js",
    "es_MX.js": "es_MX.7f8e3501f757768be6b1.js",
    "fr_FR.js": "fr_FR.504d77dfb7780796e15f.js",
    "it_IT.js": "it_IT.0e1141dfdaef184bee43.js",
    "ja_JP.js": "ja_JP.7ab30db0935c35623534.js",
    "nl_NL.js": "nl_NL.ada26305d78a4451a4b8.js",
    "pl_PL.js": "pl_PL.421aa66d50d0907ece74.js",
    "pt_BR.js": "pt_BR.cc86e9d0029e12e9d91b.js",
    "pt_PT.js": "pt_PT.ac8b70a1e9deb1d3d68c.js",
    "ru_RU.js": "ru_RU.627e4ff6b42a74efe2fe.js",
    "sv_SE.js": "sv_SE.0198dcade1b652f0e2af.js",
    "tr_TR.js": "tr_TR.12c230ad473634839738.js",
    "vi_VN.js": "vi_VN.fa63ea536ec2cf5a5c62.js",
    "zh_CN.js": "zh_CN.b1a2299f012397713aa9.js"
  };
  let langEle = document.querySelector("[data-efc-locale]");
  let lang = langEle
    ? langEle.getAttribute("data-efc-locale") + ".js"
    : "en_US.js";
  let prod = true;
  let assetURL = prod
    ? "https://vimalesan.herokuapp.com/hsdk"
    : "https://mahesh-zt151.csez.zohocorpin.com:9090";
  window.staticDomain = {
    //hook
    js: assetURL + "/"
  };
  let css = prod ? "css/styles.d053a621390c0c81fd6a.css" : "css/styles.css";
  let js = prod
    ? [
        "i18n/" + i18n[lang],
        "js/runtime~efc.aa0e82d8e4630af31734.js",
        "js/vendor.69c28e4a823c45aa20d8.js",
        "js/react.vendor.65207b7758868d42da81.js",
        "js/styles.d053a621390c0c81fd6a.js",
        "js/efc.5fdd4119d00bed6d1506.js"
      ]
    : [
        "i18n/en_us.js",
        "js/vendor.js",
        "js/react.vendor.js",
        "js/styles.js",
        "js/efc.js"
      ];
  let loadAsset = (id, type, url) => {
    return new Promise((res, rej) => {
      el = document.createElement(type);
      el.id = id;
      el.onload = res;
      el.error = rej;
      if (type == "script") {
        el.src = assetURL + "/" + url;
        el.defer = "defer";

        document.body.appendChild(el);
      } else if (type == "link") {
        el.href = assetURL + "/" + url;
        el.rel = "stylesheet";
        document.head.appendChild(el);
      }
    });
  };
  ZOHODESK.onload = (cb, err) =>
    Promise.all([
      loadAsset("zd-css-1", "link", css),
      ...js.map((url, index) => loadAsset("zd-js-" + index, "script", url))
    ]).then(() => ZOHODESK.onBasicLoad(cb));
})();
