import{$ as Me,Aa as ie,Ba as se,Ca as oe,D as ve,Ha as _e,J as Se,L as Te,M as Q,N as Ie,P as y,S as A,U as E,V as f,X as Re,_ as V,a as j,ab as Ne,ba as Oe,bb as Be,c as Fe,ca as Pe,cb as ke,d as J,fb as xe,g as H,ka as ee,la as Le,m as Ae,n as z,pa as G,r as N,ra as te,wa as v,x as Ce,xa as ne,z as be,za as re}from"./chunk-I2XZS25C.js";var Ye=null;function ae(){return Ye}function kn(e){Ye??=e}var Ue=class{};var Y=new A(""),Ze=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=y({token:t,factory:()=>f(Et),providedIn:"platform"});let e=t;return e})();var Et=(()=>{let t=class t extends Ze{constructor(){super(),this._doc=f(Y),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ae().getBaseHref(this._doc)}onPopState(n){let r=ae().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=ae().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,i){this._history.pushState(n,r,i)}replaceState(n,r,i){this._history.replaceState(n,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=y({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Ke(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function $e(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function O(e){return e&&e[0]!=="?"?"?"+e:e}var le=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=y({token:t,factory:()=>f(Ft),providedIn:"root"});let e=t;return e})(),wt=new A(""),Ft=(()=>{let t=class t extends le{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??f(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Ke(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+O(this._platformLocation.search),i=this._platformLocation.hash;return i&&n?`${r}${i}`:r}pushState(n,r,i,a){let o=this.prepareExternalUrl(i+O(a));this._platformLocation.pushState(n,r,o)}replaceState(n,r,i,a){let o=this.prepareExternalUrl(i+O(a));this._platformLocation.replaceState(n,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(r){return new(r||t)(E(Ze),E(wt,8))},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var At=(()=>{let t=class t{constructor(n){this._subject=new Le,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=vt($e(je(r))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+O(r))}normalize(n){return t.stripTrailingSlash(bt(this._basePath,je(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",i=null){this._locationStrategy.pushState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+O(r)),i)}replaceState(n,r="",i=null){this._locationStrategy.replaceState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+O(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(i=>i(n,r))}subscribe(n,r,i){return this._subject.subscribe({next:n,error:r,complete:i})}};t.normalizeQueryParams=O,t.joinWithSlash=Ke,t.stripTrailingSlash=$e,t.\u0275fac=function(r){return new(r||t)(E(le))},t.\u0275prov=y({token:t,factory:()=>Ct(),providedIn:"root"});let e=t;return e})();function Ct(){return new At(E(le))}function bt(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function je(e){return e.replace(/\/index.html$/,"")}function vt(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}function Xe(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[r,i]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(r.trim()===t)return decodeURIComponent(i)}return null}var ue=/\s+/,ze=[],xn=(()=>{let t=class t{constructor(n,r){this._ngEl=n,this._renderer=r,this.initialClasses=ze,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(ue):ze}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(ue):n}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let r of n)this._updateState(r,!0);else if(n!=null)for(let r of Object.keys(n))this._updateState(r,!!n[r]);this._applyStateDiff()}_updateState(n,r){let i=this.stateMap.get(n);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(n,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let r=n[0],i=n[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(n,r){n=n.trim(),n.length>0&&n.split(ue).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}};t.\u0275fac=function(r){return new(r||t)(v(ee),v(re))},t.\u0275dir=V({type:t,selectors:[["","ngClass",""]],inputs:{klass:[Re.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var ce=class{constructor(t,s,n,r){this.$implicit=t,this.ngForOf=s,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Un=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,r,i){this._viewContainer=n,this._template=r,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let r=this._viewContainer;n.forEachOperation((i,a,o)=>{if(i.previousIndex==null)r.createEmbeddedView(this._template,new ce(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(a===null?void 0:a);else if(a!==null){let c=r.get(a);r.move(c,o),Ve(c,i)}});for(let i=0,a=r.length;i<a;i++){let c=r.get(i).context;c.index=i,c.count=a,c.ngForOf=this._ngForOf}n.forEachIdentityChange(i=>{let a=r.get(i.currentIndex);Ve(a,i)})}static ngTemplateContextGuard(n,r){return!0}};t.\u0275fac=function(r){return new(r||t)(v(oe),v(ne),v(xe))},t.\u0275dir=V({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function Ve(e,t){e.context.$implicit=t.item}var $n=(()=>{let t=class t{constructor(n,r){this._viewContainer=n,this._context=new de,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Ge("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Ge("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}};t.\u0275fac=function(r){return new(r||t)(v(oe),v(ne))},t.\u0275dir=V({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),de=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ge(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${Ie(t)}'.`)}var St="browser",Tt="server";function jn(e){return e===St}function qe(e){return e===Tt}var W=class{};var k=class{},x=class{},C=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),i=r.toLowerCase(),a=s.slice(n+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let s=this.headers.get(t.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,s){return this.clone({name:t,value:s,op:"a"})}set(t,s){return this.clone({name:t,value:s,op:"s"})}delete(t,s){return this.clone({name:t,value:s,op:"d"})}maybeSetNormalizedName(t,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(s=>{this.headers.set(s,t.headers.get(s)),this.normalizedNames.set(s,t.normalizedNames.get(s))})}clone(t){let s=new e;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([t]),s}applyUpdate(t){let s=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,s);let r=(t.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let i=t.value;if(!i)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(o=>i.indexOf(o)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(t,s){let n=(Array.isArray(s)?s:[s]).map(i=>i.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>t(this.normalizedNames.get(s),this.headers.get(s)))}};var ge=class{encodeKey(t){return Je(t)}encodeValue(t){return Je(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Rt(e,t){let s=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(r=>{let i=r.indexOf("="),[a,o]=i==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,i)),t.decodeValue(r.slice(i+1))],c=s.get(a)||[];c.push(o),s.set(a,c)}),s}var Mt=/%(\d[a-f0-9])/gi,Ot={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Je(e){return encodeURIComponent(e).replace(Mt,(t,s)=>Ot[s]??t)}function Z(e){return`${e}`}var T=class e{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ge,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Rt(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(s=>{let n=t.fromObject[s],r=Array.isArray(n)?n.map(Z):[Z(n)];this.map.set(s,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let s=this.map.get(t);return s?s[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,s){return this.clone({param:t,value:s,op:"a"})}appendAll(t){let s=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(i=>{s.push({param:n,value:i,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(t,s){return this.clone({param:t,value:s,op:"s"})}delete(t,s){return this.clone({param:t,value:s,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let s=this.encoder.encodeKey(t);return this.map.get(t).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let s=new e({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(t),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let s=(t.op==="a"?this.map.get(t.param):void 0)||[];s.push(Z(t.value)),this.map.set(t.param,s);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(Z(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var De=class{constructor(){this.map=new Map}set(t,s){return this.map.set(t,s),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function Pt(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function He(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Qe(e){return typeof Blob<"u"&&e instanceof Blob}function et(e){return typeof FormData<"u"&&e instanceof FormData}function Lt(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var B=class e{constructor(t,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let i;if(Pt(this.method)||r?(this.body=n!==void 0?n:null,i=r):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new C,this.context??=new De,!this.params)this.params=new T,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let o=s.indexOf("?"),c=o===-1?"?":o<s.length-1?"&":"";this.urlWithParams=s+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||He(this.body)||Qe(this.body)||et(this.body)||Lt(this.body)?this.body:this.body instanceof T?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||et(this.body)?null:Qe(this.body)?this.body.type||null:He(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let s=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,i=t.transferCache??this.transferCache,a=t.body!==void 0?t.body:this.body,o=t.withCredentials??this.withCredentials,c=t.reportProgress??this.reportProgress,u=t.headers||this.headers,g=t.params||this.params,p=t.context??this.context;return t.setHeaders!==void 0&&(u=Object.keys(t.setHeaders).reduce((d,F)=>d.set(F,t.setHeaders[F]),u)),t.setParams&&(g=Object.keys(t.setParams).reduce((d,F)=>d.set(F,t.setParams[F]),g)),new e(s,n,a,{params:g,headers:u,context:p,reportProgress:c,responseType:r,withCredentials:o,transferCache:i})}},I=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(I||{}),U=class{constructor(t,s=$.Ok,n="OK"){this.headers=t.headers||new C,this.status=t.status!==void 0?t.status:s,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},X=class e extends U{constructor(t={}){super(t),this.type=I.ResponseHeader}clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},P=class e extends U{constructor(t={}){super(t),this.type=I.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},S=class extends U{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},$=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}($||{});function he(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var _t=(()=>{let t=class t{constructor(n){this.handler=n}request(n,r,i={}){let a;if(n instanceof B)a=n;else{let u;i.headers instanceof C?u=i.headers:u=new C(i.headers);let g;i.params&&(i.params instanceof T?g=i.params:g=new T({fromObject:i.params})),a=new B(n,r,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:g,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=z(a).pipe(be(u=>this.handler.handle(u)));if(n instanceof B||i.observe==="events")return o;let c=o.pipe(Ce(u=>u instanceof P));switch(i.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe(N(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return c.pipe(N(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return c.pipe(N(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return c.pipe(N(u=>u.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new T().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,i={}){return this.request("PATCH",n,he(i,r))}post(n,r,i={}){return this.request("POST",n,he(i,r))}put(n,r,i={}){return this.request("PUT",n,he(i,r))}};t.\u0275fac=function(r){return new(r||t)(E(k))},t.\u0275prov=y({token:t,factory:t.\u0275fac});let e=t;return e})(),Nt=/^\)\]\}',?\n/,Bt="X-Request-URL";function tt(e){if(e.url)return e.url;let t=Bt.toLocaleLowerCase();return e.headers.get(t)}var fe=(()=>{let t=class t{constructor(){this.fetchImpl=f(pe,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=f(se)}handle(n){return new H(r=>{let i=new AbortController;return this.doRequest(n,i.signal,r).then(me,a=>r.error(new S({error:a}))),()=>i.abort()})}doRequest(n,r,i){return J(this,null,function*(){let a=this.createRequestInit(n),o;try{let m=this.fetchImpl(n.urlWithParams,j({signal:r},a));kt(m),i.next({type:I.Sent}),o=yield m}catch(m){i.error(new S({error:m,status:m.status??0,statusText:m.statusText,url:n.urlWithParams,headers:m.headers}));return}let c=new C(o.headers),u=o.statusText,g=tt(o)??n.urlWithParams,p=o.status,d=null;if(n.reportProgress&&i.next(new X({headers:c,status:p,statusText:u,url:g})),o.body){let m=o.headers.get("content-length"),R=[],l=o.body.getReader(),h=0,w,b,D=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>J(this,null,function*(){for(;;){let{done:M,value:_}=yield l.read();if(M)break;if(R.push(_),h+=_.length,n.reportProgress){b=n.responseType==="text"?(b??"")+(w??=new TextDecoder).decode(_,{stream:!0}):void 0;let we=()=>i.next({type:I.DownloadProgress,total:m?+m:void 0,loaded:h,partialText:b});D?D.run(we):we()}}}));let L=this.concatChunks(R,h);try{let M=o.headers.get("Content-Type")??"";d=this.parseBody(n,L,M)}catch(M){i.error(new S({error:M,headers:new C(o.headers),status:o.status,statusText:o.statusText,url:tt(o)??n.urlWithParams}));return}}p===0&&(p=d?$.Ok:0),p>=200&&p<300?(i.next(new P({body:d,headers:c,status:p,statusText:u,url:g})),i.complete()):i.error(new S({error:d,headers:c,status:p,statusText:u,url:g}))})}parseBody(n,r,i){switch(n.responseType){case"json":let a=new TextDecoder().decode(r).replace(Nt,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(r);case"blob":return new Blob([r],{type:i});case"arraybuffer":return r.buffer}}createRequestInit(n){let r={},i=n.withCredentials?"include":void 0;if(n.headers.forEach((a,o)=>r[a]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){let a=n.detectContentTypeHeader();a!==null&&(r["Content-Type"]=a)}return{body:n.serializeBody(),method:n.method,headers:r,credentials:i}}concatChunks(n,r){let i=new Uint8Array(r),a=0;for(let o of n)i.set(o,a),a+=o.length;return i}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=y({token:t,factory:t.\u0275fac});let e=t;return e})(),pe=class{};function me(){}function kt(e){e.then(me,me)}function xt(e,t){return t(e)}function Ut(e,t,s){return(n,r)=>Pe(s,()=>t(n,i=>e(i,r)))}var ye=new A(""),lt=new A(""),ht=new A("");var nt=(()=>{let t=class t extends k{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=f(_e);let i=f(ht,{optional:!0});this.backend=i??n}handle(n){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(ye),...this.injector.get(lt,[])]));this.chain=i.reduceRight((a,o)=>Ut(a,o,this.injector),xt)}let r=this.pendingTasks.add();return this.chain(n,i=>this.backend.handle(i)).pipe(ve(()=>this.pendingTasks.remove(r)))}};t.\u0275fac=function(r){return new(r||t)(E(x),E(Oe))},t.\u0275prov=y({token:t,factory:t.\u0275fac});let e=t;return e})();var $t=/^\)\]\}',?\n/;function jt(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var rt=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new Q(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Ae(r.\u0275loadImpl()):z(null)).pipe(Se(()=>new H(a=>{let o=r.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((l,h)=>o.setRequestHeader(l,h.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let l=n.detectContentTypeHeader();l!==null&&o.setRequestHeader("Content-Type",l)}if(n.responseType){let l=n.responseType.toLowerCase();o.responseType=l!=="json"?l:"text"}let c=n.serializeBody(),u=null,g=()=>{if(u!==null)return u;let l=o.statusText||"OK",h=new C(o.getAllResponseHeaders()),w=jt(o)||n.url;return u=new X({headers:h,status:o.status,statusText:l,url:w}),u},p=()=>{let{headers:l,status:h,statusText:w,url:b}=g(),D=null;h!==$.NoContent&&(D=typeof o.response>"u"?o.responseText:o.response),h===0&&(h=D?$.Ok:0);let L=h>=200&&h<300;if(n.responseType==="json"&&typeof D=="string"){let M=D;D=D.replace($t,"");try{D=D!==""?JSON.parse(D):null}catch(_){D=M,L&&(L=!1,D={error:_,text:D})}}L?(a.next(new P({body:D,headers:l,status:h,statusText:w,url:b||void 0})),a.complete()):a.error(new S({error:D,headers:l,status:h,statusText:w,url:b||void 0}))},d=l=>{let{url:h}=g(),w=new S({error:l,status:o.status||0,statusText:o.statusText||"Unknown Error",url:h||void 0});a.error(w)},F=!1,m=l=>{F||(a.next(g()),F=!0);let h={type:I.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(h.total=l.total),n.responseType==="text"&&o.responseText&&(h.partialText=o.responseText),a.next(h)},R=l=>{let h={type:I.UploadProgress,loaded:l.loaded};l.lengthComputable&&(h.total=l.total),a.next(h)};return o.addEventListener("load",p),o.addEventListener("error",d),o.addEventListener("timeout",d),o.addEventListener("abort",d),n.reportProgress&&(o.addEventListener("progress",m),c!==null&&o.upload&&o.upload.addEventListener("progress",R)),o.send(c),a.next({type:I.Sent}),()=>{o.removeEventListener("error",d),o.removeEventListener("abort",d),o.removeEventListener("load",p),o.removeEventListener("timeout",d),n.reportProgress&&(o.removeEventListener("progress",m),c!==null&&o.upload&&o.upload.removeEventListener("progress",R)),o.readyState!==o.DONE&&o.abort()}})))}};t.\u0275fac=function(r){return new(r||t)(E(W))},t.\u0275prov=y({token:t,factory:t.\u0275fac});let e=t;return e})(),ft=new A(""),zt="XSRF-TOKEN",Vt=new A("",{providedIn:"root",factory:()=>zt}),Gt="X-XSRF-TOKEN",Wt=new A("",{providedIn:"root",factory:()=>Gt}),q=class{},Yt=(()=>{let t=class t{constructor(n,r,i){this.doc=n,this.platform=r,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Xe(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(r){return new(r||t)(E(Y),E(G),E(Vt))},t.\u0275prov=y({token:t,factory:t.\u0275fac});let e=t;return e})();function Zt(e,t){let s=e.url.toLowerCase();if(!f(ft)||e.method==="GET"||e.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return t(e);let n=f(q).getToken(),r=f(Wt);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}var Ee=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Ee||{});function gt(e,t){return{\u0275kind:e,\u0275providers:t}}function Qn(...e){let t=[_t,rt,nt,{provide:k,useExisting:nt},{provide:x,useExisting:rt},{provide:ye,useValue:Zt,multi:!0},{provide:ft,useValue:!0},{provide:q,useClass:Yt}];for(let s of e)t.push(...s.\u0275providers);return Me(t)}function er(e){return gt(Ee.Interceptors,e.map(t=>({provide:ye,useValue:t,multi:!0})))}function tr(){return gt(Ee.Fetch,[fe,{provide:x,useExisting:fe},{provide:ht,useExisting:fe}])}var it="b",st="h",ot="s",at="st",ut="u",ct="rt",K=new A(""),Kt=["GET","HEAD"];function Xt(e,t){let p=f(K),{isCacheActive:s}=p,n=Fe(p,["isCacheActive"]),{transferCache:r,method:i}=e;if(!s||i==="POST"&&!n.includePostRequests&&!r||i!=="POST"&&!Kt.includes(i)||r===!1||n.filter?.(e)===!1)return t(e);let a=f(te),o=Jt(e),c=a.get(o,null),u=n.includeHeaders;if(typeof r=="object"&&r.includeHeaders&&(u=r.includeHeaders),c){let{[it]:d,[ct]:F,[st]:m,[ot]:R,[at]:l,[ut]:h}=c,w=d;switch(F){case"arraybuffer":w=new TextEncoder().encode(d).buffer;break;case"blob":w=new Blob([d]);break}let b=new C(m);return z(new P({body:w,headers:b,status:R,statusText:l,url:h}))}let g=qe(f(G));return t(e).pipe(Te(d=>{d instanceof P&&g&&a.set(o,{[it]:d.body,[st]:qt(d.headers,u),[ot]:d.status,[at]:d.statusText,[ut]:d.url||"",[ct]:e.responseType})}))}function qt(e,t){if(!t)return{};let s={};for(let n of t){let r=e.getAll(n);r!==null&&(s[n]=r)}return s}function dt(e){return[...e.keys()].sort().map(t=>`${t}=${e.getAll(t)}`).join("&")}function Jt(e){let{params:t,method:s,responseType:n,url:r}=e,i=dt(t),a=e.serializeBody();a instanceof URLSearchParams?a=dt(a):typeof a!="string"&&(a="");let o=[s,n,r,a,i].join("|"),c=Ht(o);return c}function Ht(e){let t=0;for(let s of e)t=Math.imul(31,t)+s.charCodeAt(0)<<0;return t+=2147483648,t.toString()}function nr(e){return[{provide:K,useFactory:()=>(ie("NgHttpTransferCache"),j({isCacheActive:!0},e))},{provide:lt,useValue:Xt,multi:!0,deps:[te,K]},{provide:Ne,multi:!0,useFactory:()=>{let t=f(Be),s=f(K);return()=>{ke(t).then(()=>{s.isCacheActive=!1})}}}]}var sr={url:"https://ittolinvbyjdbackend.vercel.app",tokenName:"token_session",typeAdmin:1};var ar=(()=>{let t=class t{constructor(){this.isWaiting=!1}setIsWaiting(n){this.isWaiting=n}getIsWaiting(){return this.isWaiting}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{ae as a,kn as b,Ue as c,Y as d,le as e,At as f,Xe as g,xn as h,Un as i,$n as j,St as k,jn as l,qe as m,W as n,_t as o,Qn as p,er as q,tr as r,nr as s,sr as t,ar as u};
