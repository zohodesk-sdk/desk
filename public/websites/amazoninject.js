function ZOHODESK(ZD) {
  ZD.setConfig({
    clientId: '1000.WDQ2CYUTZNBF18293V2OY49XK627S4',
    redirectUri:
      'https://www.amazon.in/redirect',
    container: document.querySelector('#pageContent'),
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
function load(url){

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = url;
script.defer = true;

script.onload = function() {
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
}
document.getElementsByTagName('head')[0].appendChild(script);
}
load("https://vimalesan.herokuapp.com/support/zohodesk-efc-sdk-v1.0.0.js");
