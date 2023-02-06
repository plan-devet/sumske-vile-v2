import { assertEquals } from "https://deno.land/std@0.176.0/testing/asserts.ts";
import * as fmt from "./fmt.js";

Deno.test("currency", () => {
  assertEquals(fmt.currency(1234.56), "1.234,56");
  assertEquals(fmt.currency(1234.56, 4), "1.234,5600");
  assertEquals(fmt.currency(1234.5678, 2), "1.234,57");
  assertEquals(fmt.currency(1234.5612, 2), "1.234,56");
});

Deno.test("numeric", () => {
  assertEquals(fmt.numeric(1234.56), "1.234,56");
  assertEquals(fmt.numeric([1234.56]), "1.234,56");
  assertEquals(fmt.numeric([1234.56, 7890.12]), "1.234,56 | 7.890,12");
});

Deno.test("toID", () => {
  assertEquals(fmt.toID("A 1-2"), "a-1-2");
});

Deno.test("kat", () => {
  assertEquals(fmt.kat(0), "PR");
  [1,2,3].forEach(num => {
    assertEquals(fmt.kat(num), num);
  });
});
