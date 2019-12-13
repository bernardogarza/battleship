!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);var n=(e,t)=>{const r=t,n=[];return{id:e,size:r,cells:[],cellsHits:n,isSink:()=>n.length===r}};var l=e=>{const t=[0,1,2,3,4,5,6,7,8,9],r=new Array(10);[0,1,2,3,4,5,6,7,8,9].forEach((e,n)=>{r[n]=[],t.forEach(t=>{r[n].push({coord:`${e}${t}`,empty:!0,hit:!1})})});const n=(e,t,n,l)=>{if(0===l){for(let l=n;l<n+e.size;l++)if(!r[t][l]||!r[t][l].empty)return!1}else for(let l=t;l<t+e.size;l++)if(!r[l]||!r[l][n].empty)return!1;return!0};let l=0;const i=()=>Math.floor(2*Math.random()),o=()=>Math.floor(10*Math.random());return{tableGrid:r,putShipAuto:()=>{for(l=0,e.forEach(e=>{e.cells=[]}),r.forEach(e=>{e.forEach(e=>{e.empty=!0})});l<e.length;){const t=o(),c=o(),a=i();if(n(e[l],t,c,a)){if(0===a)for(let n=c;n<c+e[l].size;n++)r[t][n].empty=!1,e[l].cells.push(r[t][n].coord);else for(let n=t;n<t+e[l].size;n++)r[n][c].empty=!1,e[l].cells.push(r[n][c].coord);l++}}},attack:(t,n)=>{const{coord:l}=r[t][n],i=e.filter(e=>e.cells.includes(l))[0];i?(i.cellsHits.push(l),r[t][n].hit=!0):r[t][n].hit=!0},gameOver:()=>{let t=0;return e.forEach(e=>{e.isSink()&&t++}),5===t},putShipManually:(t,l,i,o)=>{if(n(e[t],l,i,o)){if(0===o)for(let n=i;n<i+e[t].size;n++)r[l][n].empty=!1,e[t].cells.push(r[l][n].coord);else for(let n=l;n<l+e[t].size;n++)r[n][i].empty=!1,e[t].cells.push(r[n][i].coord);return!0}}}};var i=(()=>{const e=document.querySelector("#random"),t=document.querySelector("#put-ship"),r=document.querySelector("#ships-list"),n=document.querySelector("#ship-orientation"),l=document.querySelector("#select-row"),i=document.querySelector("#select-column"),o=document.querySelector("#table1"),c=document.querySelector("#table2"),a=document.querySelector("#start-game"),s=document.querySelector("#message-area"),d=document.querySelector("#reset-game"),u=document.querySelector("#select-area"),h=[];let p=0;const f=()=>{r.value="",n.value="",l.value="",i.value=""},m=(e,t,r)=>{r&&e.putShipAuto();for(let r=0;r<t.children.length;r++)for(let n=0;n<t.children[r].children.length;n++)!1===e.tableGrid[r][n].empty&&t.children[r].children[n].classList.add("ship")};return{enableStartButton:()=>{a.disabled=!0},putRandomShipsButtonAction:(t,n)=>{e.addEventListener("click",()=>{(()=>{for(let e=0;e<o.children.length;e++)for(let t=0;t<o.children[e].children.length;t++)o.children[e].children[t].classList.remove("ship"),c.children[e].children[t].classList.remove("ship")})(),m(t,o,!0),n.putShipAuto(),a.disabled=!1,(()=>{for(let e=0;e<r.options.length;e+=1)r.options[e].disabled=!0})()})},putShipButtonAction:c=>{let s=0;t.addEventListener("click",()=>{c.putShipManually(parseInt(r.value),parseInt(l.value),parseInt(i.value),parseInt(n.value))&&(m(c,o),r.options[r.options.selectedIndex].disabled=!0,f(),e.disabled=!0,s++,5===s&&(a.disabled=!1))})},addActionToCells:(e,t,r,n)=>{a.addEventListener("click",()=>{t.putShipAuto(),u.classList.add("hide"),o.style.pointerEvents="none",a.disabled=!0;for(let l=0;l<o.children.length;l++)for(let i=0;i<o.children[l].children.length;i++)o.children[l].children[i].addEventListener("click",(function t(r){!1===e.tableGrid[l][i].empty&&!1===e.tableGrid[l][i].hit?n.attack(e,o,l,i,"ship-hit"):n.attack(e,o,l,i,"miss-hit"),n.win(p,e.gameOver(),c,s),p++,r.target.removeEventListener("click",t)})),c.children[l].children[i].addEventListener("click",(function e(a){!1===t.tableGrid[l][i].empty&&!1===t.tableGrid[l][i].hit?r.attack(t,c,l,i,"ship-hit"):r.attack(t,c,l,i,"miss-hit"),r.win(p,t.gameOver(),c,s),t.gameOver()||(p++,n.randomAttack(o)),a.target.removeEventListener("click",e)}))})},pushPlayerTableArray:()=>{for(let e=0;e<10;e++)for(let t=0;t<10;t++)h.push(o.children[e].children[t])},reset:()=>{f(),d.addEventListener("click",()=>{location.reload()})}}})();var o=()=>{const e=[];return{attack:(t,r,n,l,i)=>{t.attack(n,l),r.children[n].children[l].classList.add(i),e.push(r.children[n].children[l])},win:(e,t,r,n)=>{!0===t&&(r.style.pointerEvents="none",n.innerHTML=e%2==0?"Player Win":"CPU Win")},randomAttack:t=>{let r,n;do{r=Math.floor(10*Math.random()),n=Math.floor(10*Math.random())}while(e.includes(t.children[r].children[n]));return t.children[r].children[n].click(),[r,n]}}};(()=>{const e=[n(0,5),n(1,4),n(2,3),n(3,2),n(4,2)],t=[n(0,5),n(1,4),n(2,3),n(3,2),n(4,2)];i.enableStartButton(),i.pushPlayerTableArray();const r=l(e),c=l(t),a=o(),s=o();i.putShipButtonAction(r),i.putRandomShipsButtonAction(r,c),i.addActionToCells(r,c,a,s),i.reset()})()}]);