import{a as S}from"./chunk-NDJ6YX2J.js";import{e as P}from"./chunk-E474WPJZ.js";import{h as U,j as w,o as E,t as p}from"./chunk-5AJDWTEN.js";import{Ia as d,Ka as c,Ma as b,Na as h,Oa as v,P as g,Ra as k,Sa as I,Ta as x,V as l,Xa as C,Y as y,Za as _,d as a,va as u}from"./chunk-I2XZS25C.js";var R=(()=>{let e=class e{constructor(){this.apiUrl=`${p.url}/api/auth`,this.http=l(E),this._cookieService=l(S),this._router=l(P)}signIn(r,t,i){return a(this,null,function*(){try{let s=yield this.http.post(this.apiUrl+"/register",{username:r,password:t,type:i}).toPromise();if(s){let{message:n,ok:m}=s;if(m)return!0;console.log("Error al hacer el login:",n)}}catch(s){console.log("Error al realizar la solicitud:",s)}return!1})}logIn(r,t){return a(this,null,function*(){try{console.log(this.apiUrl+"/login"),console.log({username:r,password:t,keep:!1});let i=yield this.http.post(this.apiUrl+"/login",{username:r,password:t,keep:!1}).toPromise();if(i){let{message:s,token:n}=i;if(n)return this._cookieService.set(p.tokenName,n,void 0,"/"),!0;console.log("Error al hacer el login:",s)}}catch(i){console.log("Error al realizar la solicitud:",i)}return!1})}getUserInfo(){return a(this,null,function*(){if(this._cookieService.get(p.tokenName)){let t=yield this.http.get(this.apiUrl+"/getUserInfo").toPromise(),{type:i,username:s}=t,n={type:i,username:s};if(t)return n}return{}})}logOut(){return a(this,null,function*(){this._cookieService.deleteAll(),this._router.navigate([""])})}getUsers(){return a(this,null,function*(){try{let r=yield this.http.get(this.apiUrl+"/getUsers").toPromise();if(r){let{users:t}=r;return t}}catch{}return[]})}deleteUser(r,t,i){return a(this,null,function*(){try{if(yield this.http.delete(this.apiUrl+"/"+t._id,{body:{deleteAll:i}}).toPromise()){let n=r.findIndex(m=>m._id===t._id);return n!==-1&&r.splice(n,1),!0}}catch{}return!1})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var N=o=>[o];function j(o,e){o&1&&v(0,"button",4)}function T(o,e){if(o&1&&(b(0,"div",1)(1,"p",2),I(2),h(),d(3,j,1,0,"button",3),h()),o&2){let f=k();c("ngClass",_(3,N,f.alert.type)),u(2),x(f.alert.text),u(),c("ngIf",!f.alert.keep)}}var G=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y({type:e,selectors:[["app-alert"]],inputs:{alert:"alert"},standalone:!0,features:[C],decls:1,vars:1,consts:[["class","mt-2 mb-2 alert alert-dismissible fade show text-center","role","alert",3,"ngClass",4,"ngIf"],["role","alert",1,"mt-2","mb-2","alert","alert-dismissible","fade","show","text-center",3,"ngClass"],[1,"m-0","fw-bold"],["type","button","class","btn-close","data-bs-dismiss","alert","aria-label","Close",4,"ngIf"],["type","button","data-bs-dismiss","alert","aria-label","Close",1,"btn-close"]],template:function(t,i){t&1&&d(0,T,4,5,"div",0),t&2&&c("ngIf",i.alert)},dependencies:[w,U]});let o=e;return o})();export{R as a,G as b};
