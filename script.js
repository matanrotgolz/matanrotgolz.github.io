let pythonbar = document.getElementById('python');
let pythonPre = document.getElementById('python-pre');
let CPlusBar = document.getElementById('C++');
let cPlusPre = document.getElementById('Cplus-pre')
let cBar = document.getElementById('C');
let Cpre = document.getElementById('C-pre');
let htmlBar = document.getElementById('HTML');
let htmlPre = document.getElementById('HTML-pre');
let vhdlBar = document.getElementById('vhdl');
let vhdlPre = document.getElementById('vhdl-pre');
let cssBar = document.getElementById('css');
let cssPre = document.getElementById('css-pre')

const arrayBar = [pythonbar,CPlusBar,cBar,htmlBar,vhdlBar,cssBar];
const arrayPre = [pythonPre,cPlusPre,Cpre,htmlPre,vhdlPre,cssPre];
let i = 0;
let x = 0;
let y = 0;
function move(event) {
  if (i == 0) {
    i = 1; 
    x = 1;
    y = 1;
    let elem11 = cssPre;
    let elem10 = cssBar;
    let elem9 = vhdlPre;
    let elem8 = vhdlBar;
    let elem7 = htmlPre;
    let elem6 = htmlBar;
    let elem5 = Cpre;
    let elem4 = cBar;
    let elem3 = cPlusPre;
    let elem2 = CPlusBar;
    let elem1 = pythonPre;
    let elem = pythonbar;
    let width3 = 1;
    let width2 = 1;
    let width1 = 1;
    let id = setInterval(frame, 10);
    let id2 = setInterval(frame2, 10);
    let id3 = setInterval(frame3, 10);
    function frame() {
      if (width1 >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width1++;
        elem11.innerHTML = width1 + "%";
        elem10.style.width = width1 + "%";
        elem7.innerHTML =  width1 + "%";
        elem6.style.width = width1 + "%";
        elem1.innerHTML = width1 + "%";
        elem.style.width = width1 + "%";
      }
    }
    function frame2() {
        if (width2 >= 50) {
          clearInterval(id2);
          x = 0;
        } else {
          width2++;
          elem5.innerHTML = width2+"%";
          elem4.style.width = width2 + "%";
          elem3.innerHTML = width2 + "%";
          elem2.style.width = width2 + "%";
        }
      }
      function frame3() {
        if (width3 >= 80) {
          clearInterval(id3);
          y = 0;
        } else {
          width3++;
          elem9.innerHTML = width3+"%";
          elem8.style.width = width3 + "%";
        }
      }
  }
  prog.removeEventListener('mouseover',move);
}

let prog = document.getElementById('prograssbar-container');
prog.addEventListener('mouseover',move)