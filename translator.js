const translations = {
    "bari": "let",
    "tabbatar": "const",
    "aiki": "function",
    "idan": "if",
    "sauran": "else",
    "mayar": "return"
  };
  
  function translateHausaToJS(hausaCode) {
    let jsCode = hausaCode;
    for (const [hausa, js] of Object.entries(translations)) {
      const regex = new RegExp(`\\b${hausa}\\b`, 'g');
      jsCode = jsCode.replace(regex, js);
    }
    return jsCode;
  }
  
  module.exports = { translateHausaToJS };
  