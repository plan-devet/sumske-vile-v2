import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";


function currency(num, digits) {
  digits = digits === undefined ? 2 : digits;
  return num.toLocaleString('hr', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

const site = lume();
site.filter("currency", currency);

site.use(minifyHTML());
export default site;
