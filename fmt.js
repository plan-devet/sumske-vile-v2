export function currency(num, digits) {
  digits = digits === undefined ? 2 : digits;
  return num.toLocaleString('hr', { minimumFractionDigits: digits, maximumFractionDigits: digits });
}

export function kat(num) {
  return num ? num : "PR"
}

export function toID(code) {
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

export function modal(id) {
  return id.startsWith("PM") ? "modal-parking" : "modal-spremiste";
}

export function idToTip(id) {
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
