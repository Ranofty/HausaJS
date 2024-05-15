const { translateHausaToJS } = require('./translator');

function runHausaCode(hausaCode) {
  const jsCode = translateHausaToJS(hausaCode);
  eval(jsCode);
}

module.exports = { runHausaCode };
