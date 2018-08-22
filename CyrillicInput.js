(function() {
  "use strict";

  function CyrillicInput() {
    this.regexify = this.regexify.bind(this);

    this.cache = {};

    this.translit = {
      q: "(?:q|й|кв|к)",
      w: "(?:w|ц|у|в)",
      e: "(?:e|у|е)",
      r: "(?:r|к|р)",
      t: "(?:t|е|т)",
      y: "(?:y|н|и|й|ы)",
      u: "(?:u|г|у|ю)",
      i: "(?:i|ш|і|ай|и|й)",
      o: "(?:o|щ|о)",
      p: "(?:p|з|п)",
      "[": "(?:\\[|х)",
      "]": "(?:\\]|ї|ъ)",
      a: "(?:a|ф|а)",
      s: "(?:s|і|ы|с)",
      d: "(?:d|в|д)",
      f: "(?:f|а|ф)",
      g: "(?:g|п|ґ|г)",
      h: "(?:h|р|г|х)",
      j: "(?:j|о|дж|ж|й)",
      k: "(?:k|л|к)",
      l: "(?:l|д|л)",
      ";": "(?:;|ж)",
      "'": "(?:'|є)?",
      "`": "(?:`|')",
      z: "(?:z|я|з)",
      x: "(?:x|ч|кс|с|з|х)",
      c: "(?:c|с|к|ч)",
      v: "(?:v|м|в)",
      b: "(?:b|и|б)",
      n: "(?:n|т|н)",
      m: "(?:m|ь|м)",
      ",": "(?:,|б)",
      ".": "(?:\\.|ю)",
      й: "(?:й|q|y|j|i|a)?",
      ц: "(?:ц|w|c|ts|z)",
      у: "(?:у|e|u|yu|w|oo|ou)",
      к: "(?:к|r|k|c|x|q|ck)",
      е: "(?:е|є|t|e|ye|a|eu|ae)",
      н: "(?:н|y|n)",
      г: "(?:г|u|h|g|gh)",
      ш: "(?:ш|i|s|sh|ch)",
      щ: "(?:щ|o|s|sch|shch)",
      з: "(?:з|p|z|s|x|zz|es)",
      х: "(?:х|\\[|kh|h|gh|x)",
      ї: "(?:ї|\\]|ъ|yi|i)",
      ф: "(?:ф|a|f|v|ph)",
      і: "(?:і|s|ы|i|ey|ee|y|и|ea)",
      в: "(?:в|d|v|w|u)",
      а: "(?:а|f|a|ya|ia|а|i|u|o|ua)",
      п: "(?:п|g|p)",
      р: "(?:р|h|r|rr)",
      о: "(?:о|j|o|eot|ault|al|oe|au)",
      л: "(?:л|k|l|ll)",
      д: "(?:д|l|d|de)?",
      ж: "(?:ж|;|zh|g|j)",
      є: "(?:є|е|'|ye|e)",
      ґ: "(?:ґ|г|\\\\|g)",
      я: "(?:я|z|ya|ja|a|ia)",
      ч: "(?:ч|x|ch|c)",
      с: "(?:c|с|s|z|ss|sc|x|es)?",
      м: "(?:м|v|m|mm)",
      и: "(?:и|й|b|y|i|ey|ee|і)",
      т: "(?:т|n|t)",
      ь: "(?:ь|m|g)?",
      б: "(?:б|,|b)?",
      ю: "(?:ю|\\.|yu|u)",
      ъ: "(?:ъ|\\]|ї)?",
      ы: "(?:ы|s|і|y|i)",
      э: "(?:э|'|є|ye|e)",
      " ": "(?:-| |ь|ъ)?",
      "-": "(?:-| )?",
      "\\": "(?:\\\\)?",
      "/": "/?",
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9"
    };
  }

  /**
   * @param {string} input
   */
  CyrillicInput.prototype.regexify = function(input) {
    input = input.toLowerCase();

    /** @type {RegExp} */
    var matcher;

    if (input in this.cache) {
      matcher = this.cache[input];
    } else {
      var translit = this.translit;

      var re = input
        .split("")
        .map(function(/** @type {string} */ x) {
          return translit[x] || "";
        })
        .join("");

      matcher = new RegExp("^" + re, "i");
      this.cache[input] = matcher;
    }

    return matcher;
  };

  if (typeof exports !== "undefined") {
    exports.CyrillicInput = CyrillicInput;
  }

  if (typeof window !== "undefined") {
    /** @type {any} */
    var w = window;

    w.CyrillicInput = CyrillicInput;
  }
})();
