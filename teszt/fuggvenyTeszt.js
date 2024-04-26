QUnit.module("utitteszt", function () {
    //alap kérdések, pl. létezik-E?
    QUnit.test("Létezik-E?", (assert) => {
      assert.ok(unit);
    });
})
QUnit.test("Függvény-E?", (assert) => {
    assert.ok(typeof unit === "function");
  });
  QUnit.test("Szám: 15", (assert) => {
    assert.equal(unit(15), "5");
  });