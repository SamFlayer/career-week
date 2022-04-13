var x = {a: 1, b: 2};

function fn1(x) {
    x.a = 5;
}
function fn2() {
    x.a = 5;
}
function fn3(x) {
    x = 5;
}
function fn4() {
    x = 5;
}


fn1(x);
console.log(x); // {a: 5}

fn2(x);
console.log(x); // {a: 1, b: 2}

fn3(x);
console.log(x); // {a: 1, b: 2}

fn4(x);
console.log(x); // 5



/////////////////////////////////////
function fn() {
  console.log('hello'); // 

  setTimeout(function() {
    console.log('setTimeout1'); //
  }, 0);

  new Promise(function(resolve) {
    console.log('promise');
    resolve();
  }).then(function() {
    console.log('then1'); //
  }).then(function() {
    console.log('then2'); //
  });

  console.log('bye'); //
}

fn();
// hello -> promise -> bye -> then1 -> then2 -> setTimeout1


/////////////////////////////////////
setTimeout(() => console.log('setTimeout'), 0);
function myAsync(start = 0) {
  console.log(start);
  return Promise.resolve(start + 1).then(myAsync);
}
myAsync();
// 0 -> 1 -> 2 -> .... (setTimeout никогда не выведется)


/////////////////////////////////////
const $node = $('.js-node');

function $ (selector) {
    const nodeList = document.querySelectorAll(selector) //document.querySelectorAll
    return {
        addClass: function (className) {
            nodeList.forEach(node => node.classList.add(className))
            return this;
        },
        toggleClass: function(className){}
    }
}

$node
    .addClass('node')
    .toggleClass('item')
    .removeClass('node')
    .css({
        color: 'red',
        paddingTop: '10px'
    })
    .html('<li>hello</li>');