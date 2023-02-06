import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import * as fmt from "./fmt.js";

const site = lume();

site.filter("currency", fmt.currency);
site.filter("numeric", fmt.numeric);
site.filter("kat", fmt.kat);
site.filter("toID", fmt.toID);
site.filter("modal", fmt.modal);
site.filter("idToTip", fmt.idToTip);

site.copy("assets", ".");
site.use(minifyHTML());
export default site;
