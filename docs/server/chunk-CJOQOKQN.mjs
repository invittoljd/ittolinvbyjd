import './polyfills.server.mjs';
import{a as b,b as E}from"./chunk-OOWV4ULP.mjs";import"./chunk-TDF4YGI3.mjs";import{h as k,k as x}from"./chunk-XTVPW3WQ.mjs";import{a as _}from"./chunk-CUU7UV43.mjs";import{a as w}from"./chunk-52WGTD75.mjs";import{a as F}from"./chunk-FV4Z2F4W.mjs";import{k as y,l as C}from"./chunk-XZMPWWLY.mjs";import{Ja as h,La as r,Na as i,Oa as n,Pa as s,R as m,Ra as S,Ta as l,V as u,Ya as v,Za as d,va as a}from"./chunk-OEQEIWQ2.mjs";import{h as g}from"./chunk-VVCT4QZE.mjs";var T=()=>["/","home"],P=()=>["/","home","requests"],D=()=>["/","home","itineraries"],N=()=>["/","auth","sign-in"],B=()=>["/","home","import"],j=()=>["/","home","export"];function U(e,t){e&1&&(i(0,"li",9)(1,"a",11),l(2,"Usuarios"),n()()),e&2&&(a(),r("routerLink",d(1,N)))}function W(e,t){e&1&&(i(0,"li",9)(1,"a",11),l(2,"Importar"),n()()),e&2&&(a(),r("routerLink",d(1,B)))}function q(e,t){e&1&&(i(0,"li",9)(1,"a",11),l(2,"Export"),n()()),e&2&&(a(),r("routerLink",d(1,j)))}var A=(()=>{let t=class t{constructor(){this._sessionService=m(_),this._authService=m(b)}isAdmin(){return this._sessionService.isAdmin()}logOut(){return g(this,null,function*(){yield this._authService.logOut()})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-nav-bar"]],standalone:!0,features:[v],decls:24,vars:9,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary","rounded"],[1,"container-fluid"],[1,"navbar-brand","d-flex","align-items-center"],[1,"mx-3"],["src","assets/logo/logo.svg","alt","Logo de la aplicaci\xF3n","title","Logo de la aplicaci\xF3n",1,"icon"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item","ms-2","rounded","text-center","p-1"],["aria-current","page",1,"nav-link",3,"routerLink"],[1,"nav-link",3,"routerLink"],["class","nav-item ms-2 rounded text-center p-1",4,"ngIf"],[1,"btn","btn-outline-danger",3,"click"]],template:function(o,c){o&1&&(i(0,"nav",0)(1,"div",1)(2,"div",2)(3,"span",3),l(4,"JD"),n(),s(5,"img",4),n(),i(6,"button",5),s(7,"span",6),n(),i(8,"div",7)(9,"ul",8)(10,"li",9)(11,"a",10),l(12,"Inventario"),n()(),i(13,"li",9)(14,"a",11),l(15,"Solicitudes"),n()(),i(16,"li",9)(17,"a",11),l(18,"Itinerarios"),n()(),h(19,U,3,2,"li",12)(20,W,3,2,"li",12)(21,q,3,2,"li",12),n()(),i(22,"button",13),S("click",function(){return c.logOut()}),l(23," Cerrar Sesi\xF3n "),n()()()),o&2&&(a(11),r("routerLink",d(6,T)),a(3),r("routerLink",d(7,P)),a(3),r("routerLink",d(8,D)),a(2),r("ngIf",c.isAdmin()),a(),r("ngIf",c.isAdmin()),a(),r("ngIf",c.isAdmin()))},dependencies:[x,C],styles:[".icon[_ngcontent-%COMP%]{width:2.5rem}"]});let e=t;return e})();function z(e,t){if(e&1&&s(0,"app-alert",6),e&2){let O=t.$implicit;r("alert",O)}}var I=(()=>{let t=class t{refreshPage(){window.location.reload()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-alerts"]],inputs:{alerts:"alerts"},standalone:!0,features:[v],decls:7,vars:1,consts:[[1,"div-container","p-4","rounded"],[1,"col-12","d-flex","align-items-center","justify-content-between"],[1,"m-0","title"],["title","Actualizar",1,"btn",3,"click"],["src","assets/icons/refresh.svg","alt","",1,"icon"],[3,"alert",4,"ngFor","ngForOf"],[3,"alert"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"div",1)(2,"p",2),l(3,"Alertas"),n(),i(4,"button",3),S("click",function(){return c.refreshPage()}),s(5,"img",4),n()(),h(6,z,1,1,"app-alert",5),n()),o&2&&(a(6),r("ngForOf",c.alerts))},dependencies:[E,y],styles:[".div-container[_ngcontent-%COMP%]{background-color:var(--background-color-2);color:var(--color-1)}.title[_ngcontent-%COMP%]{font-size:1.5rem;letter-spacing:.2rem}.icon[_ngcontent-%COMP%]{width:2rem}.btn[_ngcontent-%COMP%]{background-color:var(--background-color-1)}.btn[_ngcontent-%COMP%]:hover{border:dotted}"]});let e=t;return e})();var f=(()=>{let t=class t{constructor(){this._authService=m(b),this._sessionService=m(_),this._alertService=m(w),this._waitingModalService=m(F)}ngOnInit(){return g(this,null,function*(){this._waitingModalService.setIsWaiting(!0),this.alerts=yield this._alertService.getAlerts();let p=yield this._authService.getUserInfo();this._sessionService.setUser(p),this._waitingModalService.setIsWaiting(!1)})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-home"]],standalone:!0,features:[v],decls:7,vars:1,consts:[[1,"container-fluid"],[1,"row","my-3"],[3,"alerts"],[1,"row"],[1,"container","mb-5"]],template:function(o,c){o&1&&(i(0,"header",0)(1,"div",1),s(2,"app-alerts",2),n(),i(3,"div",3),s(4,"app-nav-bar"),n()(),i(5,"main",4),s(6,"router-outlet"),n()),o&2&&(a(2),r("alerts",c.alerts))},dependencies:[k,I,A]});let e=t;return e})();var de=[{path:"requests",component:f,loadChildren:()=>import("./chunk-O2ZRZRJD.mjs").then(e=>e.routes)},{path:"itineraries",component:f,loadChildren:()=>import("./chunk-XTNF4E3A.mjs").then(e=>e.routes)},{path:"import",component:f,loadChildren:()=>import("./chunk-MOCDM4IQ.mjs").then(e=>e.routes)},{path:"",component:f,loadChildren:()=>import("./chunk-JVQOPCCD.mjs").then(e=>e.routes)},{path:"**",redirectTo:""}];export{de as routes};
