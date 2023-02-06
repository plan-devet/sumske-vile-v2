import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";


function currency(num, digits) {
  digits = digits === undefined ? 2 : digits;
  return num.toLocaleString('hr', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

function kat(num) {
  return num ? num : "PR"
}

function toID(code) {
  return code.replace(" ", "-").toLowerCase()
}

export function numeric(a, digits) {
  if (!a) {
    return "-";
  }
  if (!Array.isArray(a)) {
    return currency(a, digits);
  }
  if (a.length == 1) {
    return currency(a[0], digits);
  }
  return a.map(e => currency(e, digits)).join(" | ");
}


const site = lume();
site.copy("assets", ".");
site.filter("currency", currency);
site.filter("numeric", numeric);
site.filter("kat", kat);
site.filter("toID", toID);

site.use(minifyHTML());
export default site;
