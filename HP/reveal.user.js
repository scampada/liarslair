// ==UserScript==
// @name        Reveal
// @namespace   reveal spoilers
// @description blah blah
// @include     http://www.harrypotter.com.ua/*
// @include     http://harrypotter.com.ua/*
// @version     1
// @grant       none
// ==/UserScript==

function lever(direction) {
    var f1 = document.getElementsByTagName('div');
    var f2 = document.getElementsByTagName('span');
    var f3 = document.getElementsByClassName('morelink');
    
    for (var i=0; i<f1.length; i++) {
        if (
            f1[i].id &&
            f1[i].id.length==32
            ) {
                if (
                    direction=="reveal" &&
                    f1[i].style.display=="none"
                    )
                        f1[i].style.display = "";
                else if (
                    direction=="hide" &&
                    f1[i].style.display==""
                    )
                        f1[i].style.display = "none";
                
            }
    }

    for (i=0; i<f2.length; i++) {
        if (
            f2[i].id &&
            /^moretext/.test(f2[i].id)
            ) {
                if (
                    direction=="reveal" &&
                    f2[i].style.display=="none"
                    )
                        f2[i].style.display = "inline";
                else if (
                    direction=="hide" &&
                    f2[i].style.display=="inline"
                    )
                        f2[i].style.display = "none";
        }
    }
    
    for (i=0; i<f3.length; i++) {
        if (
            direction=="reveal" &&
            f3[i].style.display==""
            )
                f3[i].style.display = "none";
        else if (
            direction=="hide" &&
            f3[i].style.display=="none"
            )
                f3[i].style.display = "";
    }
}

var floatdiv = document.createElement('div');
floatdiv.id = "fldiv";
floatdiv.style.position="fixed";
floatdiv.style.bottom="0";
floatdiv.style.left="0px";
document.body.appendChild(floatdiv);

var reveal = document.createElement('button');
reveal.id = 'rvl';
reveal.style.border="0px";
reveal.style.padding="0px";
reveal.innerHTML = '+'; 
reveal.onclick = function() {
    lever("reveal");
};
document.getElementById("fldiv").appendChild(reveal);

var hide = document.createElement('button'); 
hide.id = 'hid';
hide.style.border="0px";
hide.style.borderLeft="solid 1px #111";
hide.style.padding="0px";
hide.innerHTML = '-';
hide.onclick = function() {
    lever("hide");
};
document.getElementById("fldiv").appendChild(hide);
