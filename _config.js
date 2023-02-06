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

function numeric(a, digits) {
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

function modal(id) {
  return id.startsWith("PM") ? "modal-parking" : "modal-spremiste";
}

function idToTip(id) {
  if (id.startsWith("PGM")) {
    return "parkirno garažno mjesto"
  }
  if (id.startsWith("GM")) {
    return "garažno mjesto"
  }
  if (id.startsWith("PM")) {
    return "parkirno mjesto"
  }
  if (id.startsWith("SP")) {
    return "spremište"
  }
  return "?"
}

const site = lume();
site.copy("assets", ".");
site.filter("currency", currency);
site.filter("numeric", numeric);
site.filter("kat", kat);
site.filter("toID", toID);
site.filter("modal", modal);
site.filter("idToTip", idToTip);

site.use(minifyHTML());
export default site;
