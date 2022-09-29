// ==UserScript==
// @name                Eu não sou Robo
// @icon                https://i.gifer.com/2Hiq.gif
// @version             0.1
// @description         Efetuar Click sobre o formulario eu não sou robo universal
// @author              M.M
// @match               http://*/*
// @match               https://*/*
// @grant               none
// ==/UserScript==


var clickCheck = setInterval(function() {
            if (document.querySelectorAll("#checkbox").length > 0) {
                clearInterval(clickCheck);
                document.querySelector("#checkbox").click();
            }
        }, 100);
