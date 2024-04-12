QUnit.module('szamolas', function() {
    QUnit.test('Létezik-e?', function(assert) {
      assert.ok(szamolas);
    });

/* QUnit.test('szamolas', function() {
    QUnit.test('Függvény-e?', function(assert) {
      assert.ok(typeof(szamolas === "function"));
        }); */

QUnit.test('Pozitív egész számok', assert => {
  kapott = szamolas(3, 5);
  vart = 8;
  assert.equal(kapott, vart);
})

QUnit.test('Pozitív egész számok', assert => {
  kapott = szamolas(3, 5);
  vart = 8;
  assert.equal(kapott, vart);
})

QUnit.test('Vegyes előjelű', assert => {
    kapott = szamolas(3, 5);
    vart = 8;
    assert.equal(kapott, vart);
  })

QUnit.test('Tört számok', assert => {
      kapott = szamolas(3, 5);
      vart = 8;
      assert.equal(kapott, vart);
    })

QUnit.test('Speciális karakter az egyik paraméter?', assert => {
      assert.equal(szamolas("!", false), "Szám legyen mindkét paraméter! ");
    })
    
});
/* }); */