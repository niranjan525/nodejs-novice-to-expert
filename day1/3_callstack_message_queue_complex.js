function bar() { console.log('bar'); }

function baz() { console.log('baz'); }


function foo2() {
      console.log('foo2');
      setTimeout(bar, 0);
      // Hard delay
      for (let i = 0 ;i < 999999999; i++) {
            for (let i = 0 ;i < 10; i++) {
            }
      }
      console.log('foo3');
}

function foo1() {
      console.log('foo1');
      foo2();
}

function foo() {
  console.log('foo');
  foo1();
  baz();
}

foo();