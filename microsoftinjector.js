function ZOHODESK(ZD) {
  ZD.setConfig({
    clientId: '1000.XVHY7T78AEUO37177KQF3T9GNKZQIH',
    redirectUri: 'https://www.microsoft.com/redirect',
    container: document.querySelector('#primaryArea'),
    organizationName: 'zsupport',
    style: `
          desk{
            background:#fff;
            height:700px;
          }
          #react
          {
          },

          `
  });
}
(() => {
  let i18n = {
    'ar_SA.js': 'ar_SA.aa73061487c761a81bc9.js',
    'da_DK.js': 'da_DK.d6f130c6bc4343d3aa10.js',
    'de_DE.js': 'de_DE.af41a3e9980a506132cc.js',
    'en_GB.js': 'en_GB.b6df20a2e7059b3993dd.js',
    'en_US.js': 'en_US.aa8559f9fc90abb5f19f.js',
    'es_ES.js': 'es_ES.dbf166aafb501b6cd257.js',
    'es_MX.js': 'es_MX.069195da81273f661403.js',
    'fr_FR.js': 'fr_FR.839f3d044486b4d73847.js',
    'it_IT.js': 'it_IT.4c80b6947cbb37cc3743.js',
    'ja_JP.js': 'ja_JP.0d8e1cfe3b91b75880d3.js',
    'nl_NL.js': 'nl_NL.64665de682ce8a37ceb4.js',
    'pl_PL.js': 'pl_PL.33d3b3db1d5bac209987.js',
    'pt_BR.js': 'pt_BR.cfe3caca72a5329f2d4d.js',
    'pt_PT.js': 'pt_PT.fc77c4f09498eba751c9.js',
    'ru_RU.js': 'ru_RU.4c7ba997a55f25ca2f75.js',
    'sv_SE.js': 'sv_SE.8a258334863203123566.js',
    'tr_TR.js': 'tr_TR.350e63c15f44f7016a74.js',
    'vi_VN.js': 'vi_VN.46742733cf989b39f9dd.js',
    'zh_CN.js': 'zh_CN.19cf7f16ddb9793bef93.js'
  };
  let langEle = document.querySelector('[data-efc-locale]');
  let lang = langEle
    ? langEle.getAttribute('data-efc-locale') + '.js'
    : 'en_US.js';
  let prod = true;
  let assetURL = prod
    ? 'https://vimalesan.herokuapp.com/support'
    : 'https://mahesh-zt151.csez.zohocorpin.com:9090';
  window.staticDomain = {
    //hook
    js: assetURL + '/'
  };
  let css = prod ? 'css/efc.a9d6c958a32b22cce345.css' : 'css/efc.css';
  let js = prod
    ? [
        'i18n/' + i18n[lang],
        'js/runtime~efc.3c47821cbfd9a8f9fb6c.js',
        'js/vendor.62108ab894378cf81615.js',
        'js/react.vendor.ce8706efde3809773bdf.js',
        'js/efc.a9d6c958a32b22cce345.js'
      ]
    : ['i18n/en_us.js', 'js/vendor.js', 'js/react.vendor.js', 'js/efc.js'];
  let loadAsset = (id, type, url) => {
    return new Promise((res, rej) => {
      el = document.createElement(type);
      el.id = id;
      el.onload = res;
      el.error = rej;
      if (type == 'script') {
        el.src = assetURL + '/' + url;
        el.defer = 'defer';

        document.body.appendChild(el);
      } else if (type == 'link') {
        el.href = assetURL + '/' + url;
        el.rel = 'stylesheet';
        document.head.appendChild(el);
      }
    });
  };
  ZOHODESK.onload = (cb, err) =>
    Promise.all([
      loadAsset('zd-css-1', 'link', css),
      ...js.map((url, index) => loadAsset('zd-js-' + index, 'script', url))
    ]).then(() => ZOHODESK.onBasicLoad(cb));
})();
devURLParam = '';
ZOHODESK.onload(() => {
  try {
    let deptId = ZOHODESK.get(
      'departmentMapper.' + ZOHODESK.get('routing.paramMap.deptName')
    );

    ZOHODESK.renderContainer('HQDashboard', {}, document.getElementById('hq'));
  } catch (e) {
    console.log('error in ur html file....', e);
  }
});
