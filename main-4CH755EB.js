import{a as p}from"./chunk-VVGBZAEW.js";import{a as M,b as h,d as q,g as x}from"./chunk-NBS3JSTV.js";import{a as P}from"./chunk-Y4UAUI7W.js";import{Ca as d,Ea as c,Ga as l,Ha as f,Ia as a,Qa as g,Ra as s,S as i,V as r,kb as u,qb as _,rb as C,sb as v,ub as O}from"./chunk-EGZLEYQ3.js";var y=[{path:"home",loadChildren:()=>import("./chunk-YL6WS6T6.js").then(t=>t.routes)},{path:"auth",loadChildren:()=>import("./chunk-Y3JZUKDD.js").then(t=>t.routes)},{path:"**",redirectTo:"auth"}];var k=(t,e)=>{let o=i(p).get(O.tokenName);if(o){let n=t.clone({headers:t.headers.set("Authorization",`Bearer ${o}`)});return e(n)}else return e(t)};var S={providers:[x(y),h(),_(v(),C([k]))]};function F(t,e){t&1&&(l(0,"div",1),a(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"div",8)(8,"div",9)(9,"div",10),f())}var w=(()=>{let e=class e{constructor(){this._waitingModalService=i(P)}getIsWaiting(){return this._waitingModalService.getIsWaiting()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["app-waiting-modal"]],standalone:!0,features:[s],decls:1,vars:1,consts:[["class","loader modal-backdrop",4,"ngIf"],[1,"loader","modal-backdrop"],["id","sq1",1,"square"],["id","sq2",1,"square"],["id","sq3",1,"square"],["id","sq4",1,"square"],["id","sq5",1,"square"],["id","sq6",1,"square"],["id","sq7",1,"square"],["id","sq8",1,"square"],["id","sq9",1,"square"]],template:function(n,m){n&1&&d(0,F,10,0,"div",0),n&2&&c("ngIf",m.getIsWaiting())},dependencies:[u],styles:["@keyframes _ngcontent-%COMP%_loader_5191{0%{opacity:0}to{opacity:1}}.modal-backdrop[_ngcontent-%COMP%]{opacity:.5!important}.square[_ngcontent-%COMP%]{background:#ddd;width:10px;height:10px;position:absolute;top:50%;left:50%;margin-top:-5px;margin-left:-5px}#sq1[_ngcontent-%COMP%]{margin-top:-25px;margin-left:-25px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out 0s infinite alternate}#sq2[_ngcontent-%COMP%]{margin-top:-25px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out 75ms infinite alternate}#sq3[_ngcontent-%COMP%]{margin-top:-25px;margin-left:15px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out .15s infinite}#sq4[_ngcontent-%COMP%]{margin-left:-25px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out 225ms infinite}#sq5[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out .3s infinite}#sq6[_ngcontent-%COMP%]{margin-left:15px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out 375ms infinite}#sq7[_ngcontent-%COMP%]{margin-top:15px;margin-left:-25px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out .45s infinite}#sq8[_ngcontent-%COMP%]{margin-top:15px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out 525ms infinite}#sq9[_ngcontent-%COMP%]{margin-top:15px;margin-left:15px;animation:_ngcontent-%COMP%_loader_5191 675ms ease-in-out .6s infinite}"]});let t=e;return t})();var I=(()=>{let e=class e{constructor(){this.title="ittolinvbyjd"}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=r({type:e,selectors:[["app-root"]],standalone:!0,features:[g([p]),s],decls:2,vars:0,template:function(n,m){n&1&&a(0,"router-outlet")(1,"app-waiting-modal")},dependencies:[q,w]});let t=e;return t})();M(I,S).catch(t=>console.error(t));
