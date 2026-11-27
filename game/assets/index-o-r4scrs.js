(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const gc="180",gd=0,el=1,_d=2,_c=1,vd=2,Wn=3,Kn=0,Ft=1,Cn=2,ui=0,di=1,hs=2,tl=3,nl=4,xd=5,Ri=100,yd=101,Md=102,Ad=103,Sd=104,Ed=200,bd=201,wd=202,Td=203,_a=204,va=205,Rd=206,Cd=207,Vd=208,Id=209,Pd=210,Ld=211,Dd=212,Nd=213,Ud=214,xa=0,ya=1,Ma=2,ps=3,Aa=4,Sa=5,Ea=6,ba=7,vc=0,qd=1,Fd=2,fi=0,Bd=1,Od=2,zd=3,ru=4,kd=5,Hd=6,Gd=7,il="attached",Wd="detached",ou=300,ms=301,gs=302,wa=303,Ta=304,go=306,_s=1e3,ai=1001,oo=1002,Bt=1003,au=1004,Ys=1005,$t=1006,$r=1007,Xn=1008,In=1009,cu=1010,lu=1011,Qs=1012,xc=1013,Ii=1014,vn=1015,ar=1016,yc=1017,Mc=1018,$s=1020,hu=35902,uu=35899,du=1021,fu=1022,ln=1023,er=1026,tr=1027,Ac=1028,Sc=1029,pu=1030,Ec=1031,bc=1033,eo=33776,to=33777,no=33778,io=33779,Ra=35840,Ca=35841,Va=35842,Ia=35843,Pa=36196,La=37492,Da=37496,Na=37808,Ua=37809,qa=37810,Fa=37811,Ba=37812,Oa=37813,za=37814,ka=37815,Ha=37816,Ga=37817,Wa=37818,Xa=37819,Ya=37820,ja=37821,Ka=36492,Ja=36494,Za=36495,Qa=36283,$a=36284,ec=36285,tc=36286,mu=2200,Xd=2201,Yd=2202,nr=2300,ir=2301,yo=2302,os=2400,as=2401,ao=2402,wc=2500,jd=2501,Kd=0,gu=1,nc=2,Jd=3200,Zd=3201,Tc=0,Qd=1,oi="",Et="srgb",zt="srgb-linear",co="linear",lt="srgb",qi=7680,sl=519,$d=512,ef=513,tf=514,_u=515,nf=516,sf=517,rf=518,of=519,ic=35044,rl="300 es",Vn=2e3,lo=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const Ks=Math.PI/180,vs=180/Math.PI;function yn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[r&255]+It[r>>8&255]+It[r>>16&255]+It[r>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function Rc(r,e){return(r%e+e)%e}function af(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function cf(r,e,t){return r!==e?(t-r)/(e-r):0}function Js(r,e,t){return(1-t)*r+t*e}function lf(r,e,t,n){return Js(r,e,1-Math.exp(-t*n))}function hf(r,e=1){return e-Math.abs(Rc(r,e*2)-e)}function uf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function df(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ff(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pf(r,e){return r+Math.random()*(e-r)}function mf(r){return r*(.5-Math.random())}function gf(r){r!==void 0&&(ol=r);let e=ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _f(r){return r*Ks}function vf(r){return r*vs}function xf(r){return(r&r-1)===0&&r!==0}function yf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Mf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Af(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*m,a*l);break;case"YXY":r.set(c*m,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ci={DEG2RAD:Ks,RAD2DEG:vs,generateUUID:yn,clamp:Je,euclideanModulo:Rc,mapLinear:af,inverseLerp:cf,lerp:Js,damp:lf,pingpong:hf,smoothstep:uf,smootherstep:df,randInt:ff,randFloat:pf,randFloatSpread:mf,seededRandom:gf,degToRad:_f,radToDeg:vf,isPowerOfTwo:xf,ceilPowerOfTwo:yf,floorPowerOfTwo:Mf,setQuaternionFromProperEuler:Af,normalize:at,denormalize:_n};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let hn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let f=1-a;const p=c*d+l*m+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),M=Math.atan2(A,p*v);f=Math.sin(f*M)/A,a=Math.sin(a*M)/A}const x=a*v;if(c=c*f+d*x,l=l*f+m*x,h=h*f+g*x,u=u*f+_*x,f===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-a*m,e[t+2]=l*g+h*m+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Mo.copy(this).projectOnVector(e),this.sub(Mo)}reflect(e){return this.sub(Mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new q,al=new hn;class Xe{constructor(e,t,n,i,s,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=i[0],f=i[3],p=i[6],v=i[1],y=i[4],x=i[7],A=i[2],M=i[5],w=i[8];return s[0]=o*_+a*v+c*A,s[3]=o*f+a*y+c*M,s[6]=o*p+a*x+c*w,s[1]=l*_+h*v+u*A,s[4]=l*f+h*y+u*M,s[7]=l*p+h*x+u*w,s[2]=d*_+m*v+g*A,s[5]=d*f+m*y+g*M,s[8]=d*p+m*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,m=l*s-o*c,g=t*u+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Xe;function vu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sf(){const r=sr("canvas");return r.style.display="block",r}const cl={};function rr(r){r in cl||(cl[r]=!0,console.warn(r))}function Ef(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ll=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const r={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?co:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[zt]:{primaries:e,whitePoint:n,transfer:co,toXYZ:ll,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:ll,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),r}const et=bf();function jn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function us(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fi;class wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=sr("canvas")),Fi.width=e.width,Fi.height=e.height;const i=Fi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(jn(t[n]/255)*255):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class Cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(So(i[o].image)):s.push(So(i[o]))}else s=So(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function So(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?wf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rf=0;const Eo=new q;class bt extends Di{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=ai,i=ai,s=$t,o=Xn,a=ln,c=In,l=bt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=yn(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _s:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _s:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=ou;bt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,i=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(m+1)/2,A=(p+1)/2,M=(h+d)/4,w=(u+_)/4,V=(g+f)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=M/n,s=w/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=M/i,s=V/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=V/s),this.set(n,i,s,t),this}let v=Math.sqrt((f-g)*(f-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cf extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new bt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Cc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xu extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),mr.subVectors(this.max,Vs),Bi.subVectors(e.a,Vs),Oi.subVectors(e.b,Vs),zi.subVectors(e.c,Vs),Jn.subVectors(Oi,Bi),Zn.subVectors(zi,Oi),gi.subVectors(Bi,zi);let t=[0,-Jn.z,Jn.y,0,-Zn.z,Zn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Zn.z,0,-Zn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Zn.y,Zn.x,0,-gi.y,gi.x,0];return!bo(t,Bi,Oi,zi,mr)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,Bi,Oi,zi,mr))?!1:(gr.crossVectors(Jn,Zn),t=[gr.x,gr.y,gr.z],bo(t,Bi,Oi,zi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new q,new q,new q,new q,new q,new q,new q,new q],dn=new q,pr=new Xt,Bi=new q,Oi=new q,zi=new q,Jn=new q,Zn=new q,gi=new q,Vs=new q,mr=new q,gr=new q,_i=new q;function bo(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_i.fromArray(r,s);const a=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const If=new Xt,Is=new q,wo=new q;let Pn=class{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):If.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(wo)),this.expandByPoint(Is.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};const Nn=new q,To=new q,_r=new q,Qn=new q,Ro=new q,vr=new q,Co=new q;let cr=class{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){To.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(To);const s=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=Qn.dot(this.direction),c=-Qn.dot(_r),l=Qn.lengthSq(),h=Math.abs(1-o*o);let u,d,m,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(To).addScaledVector(_r,d),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),i=Nn.dot(Nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,i,s){Ro.subVectors(t,e),vr.subVectors(n,e),Co.crossVectors(Ro,vr);let o=this.direction.dot(Co),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const c=a*this.direction.dot(vr.crossVectors(Qn,vr));if(c<0)return null;const l=a*this.direction.dot(Ro.cross(Qn));if(l<0||c+l>o)return null;const h=-a*Qn.dot(Co);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ge{constructor(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,f){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,f)}set(e,t,n,i,s,o,a,c,l,h,u,d,m,g,_,f){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=g,p[11]=_,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ki.setFromMatrixColumn(e,0).length(),s=1/ki.setFromMatrixColumn(e,1).length(),o=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Lf)}lookAt(e,t,n){const i=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),$n.crossVectors(n,Jt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),$n.crossVectors(n,Jt)),$n.normalize(),xr.crossVectors(Jt,$n),i[0]=$n.x,i[4]=xr.x,i[8]=Jt.x,i[1]=$n.y,i[5]=xr.y,i[9]=Jt.y,i[2]=$n.z,i[6]=xr.z,i[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],f=n[10],p=n[14],v=n[3],y=n[7],x=n[11],A=n[15],M=i[0],w=i[4],V=i[8],E=i[12],S=i[1],C=i[5],U=i[9],P=i[13],D=i[2],F=i[6],N=i[10],$=i[14],z=i[3],J=i[7],re=i[11],fe=i[15];return s[0]=o*M+a*S+c*D+l*z,s[4]=o*w+a*C+c*F+l*J,s[8]=o*V+a*U+c*N+l*re,s[12]=o*E+a*P+c*$+l*fe,s[1]=h*M+u*S+d*D+m*z,s[5]=h*w+u*C+d*F+m*J,s[9]=h*V+u*U+d*N+m*re,s[13]=h*E+u*P+d*$+m*fe,s[2]=g*M+_*S+f*D+p*z,s[6]=g*w+_*C+f*F+p*J,s[10]=g*V+_*U+f*N+p*re,s[14]=g*E+_*P+f*$+p*fe,s[3]=v*M+y*S+x*D+A*z,s[7]=v*w+y*C+x*F+A*J,s[11]=v*V+y*U+x*N+A*re,s[15]=v*E+y*P+x*$+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],f=e[11],p=e[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*m-n*c*m)+_*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*h-s*c*h)+f*(+t*l*u-t*a*m-s*o*u+n*o*m+s*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],f=e[14],p=e[15],v=u*f*l-_*d*l+_*c*m-a*f*m-u*c*p+a*d*p,y=g*d*l-h*f*l-g*c*m+o*f*m+h*c*p-o*d*p,x=h*_*l-g*u*l+g*a*m-o*_*m-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*d+o*_*d+h*a*f-o*u*f,M=t*v+n*y+i*x+s*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(_*d*s-u*f*s-_*i*m+n*f*m+u*i*p-n*d*p)*w,e[2]=(a*f*s-_*c*s+_*i*l-n*f*l-a*i*p+n*c*p)*w,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*m-n*c*m)*w,e[4]=y*w,e[5]=(h*f*s-g*d*s+g*i*m-t*f*m-h*i*p+t*d*p)*w,e[6]=(g*c*s-o*f*s-g*i*l+t*f*l+o*i*p-t*c*p)*w,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*m+t*c*m)*w,e[8]=x*w,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*p-t*u*p)*w,e[10]=(o*_*s-g*a*s+g*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*m-t*a*m)*w,e[12]=A*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*f+t*u*f)*w,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*f-t*a*f)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,m=s*h,g=s*u,_=o*h,f=o*u,p=a*u,v=c*l,y=c*h,x=c*u,A=n.x,M=n.y,w=n.z;return i[0]=(1-(_+p))*A,i[1]=(m+x)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(m-x)*M,i[5]=(1-(d+p))*M,i[6]=(f+v)*M,i[7]=0,i[8]=(g+y)*w,i[9]=(f-v)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ki.set(i[0],i[1],i[2]).length();const o=ki.set(i[4],i[5],i[6]).length(),a=ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const l=1/s,h=1/o,u=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Vn,c=!1){const l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i);let g,_;if(c)g=s/(o-s),_=o*s/(o-s);else if(a===Vn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===lo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Vn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),m=-(n+i)/(n-i);let g,_;if(c)g=1/(o-s),_=o/(o-s);else if(a===Vn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===lo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new q,fn=new Ge,Pf=new q(0,0,0),Lf=new q(1,1,1),$n=new q,xr=new q,Jt=new q,ul=new Ge,dl=new hn;class tn{constructor(e=0,t=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const fl=new q,Hi=new hn,Un=new Ge,yr=new q,Ps=new q,Nf=new q,Uf=new hn,pl=new q(1,0,0),ml=new q(0,1,0),gl=new q(0,0,1),_l={type:"added"},qf={type:"removed"},Gi={type:"childadded",child:null},Vo={type:"childremoved",child:null};class ft extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new q,t=new tn,n=new hn,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new Xe}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ps,yr,this.up):Un.lookAt(yr,Ps,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Hi.setFromRotationMatrix(Un),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Nf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ft.DEFAULT_UP=new q(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new q,qn=new q,Io=new q,Fn=new q,Wi=new q,Xi=new q,vl=new q,Po=new q,Lo=new q,Do=new q,No=new ot,Uo=new ot,qo=new ot;class cn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),pn.subVectors(e,t),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){pn.subVectors(i,t),qn.subVectors(n,t),Io.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(qn),c=pn.dot(Io),l=qn.dot(qn),h=qn.dot(Io),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return No.setScalar(0),Uo.setScalar(0),qo.setScalar(0),No.fromBufferAttribute(e,t),Uo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(No,s.x),o.addScaledVector(Uo,s.y),o.addScaledVector(qo,s.z),o}static isFrontFacing(e,t,n,i){return pn.subVectors(n,t),qn.subVectors(e,t),pn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),pn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Wi.subVectors(i,n),Xi.subVectors(s,n),Po.subVectors(e,n);const c=Wi.dot(Po),l=Xi.dot(Po);if(c<=0&&l<=0)return t.copy(n);Lo.subVectors(e,i);const h=Wi.dot(Lo),u=Xi.dot(Lo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Wi,o);Do.subVectors(e,s);const m=Wi.dot(Do),g=Xi.dot(Do);if(g>=0&&m<=g)return t.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Xi,a);const f=h*g-m*u;if(f<=0&&u-h>=0&&m-g>=0)return vl.subVectors(s,i),a=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(vl,a);const p=1/(f+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Fo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Rc(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fo(o,s,e+1/3),this.g=Fo(o,s,e),this.b=Fo(o,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return et.workingToColorSpace(Pt.copy(this),e),Math.round(Je(Pt.r*255,0,255))*65536+Math.round(Je(Pt.g*255,0,255))*256+Math.round(Je(Pt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Et){et.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Mr);const n=Js(ei.h,Mr.h,t),i=Js(ei.s,Mr.s,t),s=Js(ei.l,Mr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Oe;Oe.NAMES=yu;let Ff=0,un=class extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=di,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_a,this.blendDst=va,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_a&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class li extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new q,Ar=new He;let Bf=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ic,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ic&&(e.usage=this.usage),e}}class Mu extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Au extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Of=0;const on=new Ge,Bo=new ft,Yi=new q,Zt=new Xt,Ls=new Xt,Rt=new q;class Yt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vu(e)?Au:Mu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(Zt.min,Ls.min),Zt.expandByPoint(Rt),Rt.addVectors(Zt.max,Ls.max),Zt.expandByPoint(Rt)):(Zt.expandByPoint(Ls.min),Zt.expandByPoint(Ls.max))}Zt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Rt.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(e,l),Rt.add(Yi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let V=0;V<n.count;V++)a[V]=new q,c[V]=new q;const l=new q,h=new q,u=new q,d=new He,m=new He,g=new He,_=new q,f=new q;function p(V,E,S){l.fromBufferAttribute(n,V),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,V),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),h.sub(l),u.sub(l),m.sub(d),g.sub(d);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(C),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),a[V].add(_),a[E].add(_),a[S].add(_),c[V].add(f),c[E].add(f),c[S].add(f))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let V=0,E=v.length;V<E;++V){const S=v[V],C=S.start,U=S.count;for(let P=C,D=C+U;P<D;P+=3)p(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const y=new q,x=new q,A=new q,M=new q;function w(V){A.fromBufferAttribute(i,V),M.copy(A);const E=a[V];y.copy(E),y.sub(A.multiplyScalar(A.dot(E))).normalize(),x.crossVectors(M,E);const C=x.dot(c[V])<0?-1:1;o.setXYZW(V,y.x,y.y,y.z,C)}for(let V=0,E=v.length;V<E;++V){const S=v[V],C=S.start,U=S.count;for(let P=C,D=C+U;P<D;P+=3)w(e.getX(P+0)),w(e.getX(P+1)),w(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,o=new q,a=new q,c=new q,l=new q,h=new q,u=new q;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,f),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,f=c.length;_<f;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[m++]}return new Ot(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new Ge,vi=new cr,Sr=new Pn,yl=new q,Er=new q,br=new q,wr=new q,Oo=new q,Tr=new q,Ml=new q,Rr=new q;class mt extends ft{constructor(e=new Yt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Tr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Oo.fromBufferAttribute(u,e),o?Tr.addScaledVector(Oo,h):Tr.addScaledVector(Oo.sub(t),h))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(s),vi.copy(e.ray).recast(e.near),!(Sr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Sr,yl)===null||vi.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(xl.copy(s).invert(),vi.copy(e.ray).applyMatrix4(xl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),y=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let x=v,A=y;x<A;x+=3){const M=a.getX(x),w=a.getX(x+1),V=a.getX(x+2);i=Cr(this,p,e,n,l,h,u,M,w,V),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=a.getX(f),y=a.getX(f+1),x=a.getX(f+2);i=Cr(this,o,e,n,l,h,u,v,y,x),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const f=d[g],p=o[f.materialIndex],v=Math.max(f.start,m.start),y=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let x=v,A=y;x<A;x+=3){const M=x,w=x+1,V=x+2;i=Cr(this,p,e,n,l,h,u,M,w,V),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=f.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let f=g,p=_;f<p;f+=3){const v=f,y=f+1,x=f+2;i=Cr(this,o,e,n,l,h,u,v,y,x),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}}}}function zf(r,e,t,n,i,s,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Kn,a),c===null)return null;Rr.copy(a),Rr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Rr);return l<t.near||l>t.far?null:{distance:l,point:Rr.clone(),object:r}}function Cr(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,Er),r.getVertexPosition(c,br),r.getVertexPosition(l,wr);const h=zf(r,e,t,n,Er,br,wr,Ml);if(h){const u=new q;cn.getBarycoord(Ml,Er,br,wr,u),i&&(h.uv=cn.getInterpolatedAttribute(i,a,c,l,u,new He)),s&&(h.uv1=cn.getInterpolatedAttribute(s,a,c,l,u,new He)),o&&(h.normal=cn.getInterpolatedAttribute(o,a,c,l,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new q,materialIndex:0};cn.getNormal(Er,br,wr,d.normal),h.face=d,h.barycoord=u}return h}class Ss extends Yt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function g(_,f,p,v,y,x,A,M,w,V,E){const S=x/w,C=A/V,U=x/2,P=A/2,D=M/2,F=w+1,N=V+1;let $=0,z=0;const J=new q;for(let re=0;re<N;re++){const fe=re*C-P;for(let oe=0;oe<F;oe++){const W=oe*S-U;J[_]=W*v,J[f]=fe*y,J[p]=D,l.push(J.x,J.y,J.z),J[_]=0,J[f]=0,J[p]=M>0?1:-1,h.push(J.x,J.y,J.z),u.push(oe/w),u.push(1-re/V),$+=1}}for(let re=0;re<V;re++)for(let fe=0;fe<w;fe++){const oe=d+fe+F*re,W=d+fe+F*(re+1),ue=d+(fe+1)+F*(re+1),te=d+(fe+1)+F*re;c.push(oe,W,te),c.push(W,ue,te),z+=6}a.addGroup(m,z,E),m+=z,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const n=xs(r[t]);for(const i in n)e[i]=n[i]}return e}function kf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Su(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Hf={clone:xs,merge:Nt};var Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eu extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new q,Al=new He,Sl=new He;class qt extends Eu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Al,Sl),t.subVectors(Sl,Al)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ki=1;class Xf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(ji,Ki,e,t);i.layers=this.layers,this.add(i);const s=new qt(ji,Ki,e,t);s.layers=this.layers,this.add(s);const o=new qt(ji,Ki,e,t);o.layers=this.layers,this.add(o);const a=new qt(ji,Ki,e,t);a.layers=this.layers,this.add(a);const c=new qt(ji,Ki,e,t);c.layers=this.layers,this.add(c);const l=new qt(ji,Ki,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bu extends bt{constructor(e=[],t=ms,n,i,s,o,a,c,l,h){super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yf extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bu(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ss(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ui});s.uniforms.tEquirect.value=t;const o=new mt(i,s),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=$t),new Xf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class en extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jf={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const f=t.getJointPose(_,n),p=this._getHandJoint(l,_);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jf)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class wu extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ic,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new q;class or{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ic extends un{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ji;const Ds=new q,Zi=new q,Qi=new q,$i=new He,Ns=new He,Ru=new Ge,Vr=new q,Us=new q,Ir=new q,El=new He,ko=new He,bl=new He;class Cu extends ft{constructor(e=new Ic){if(super(),this.isSprite=!0,this.type="Sprite",Ji===void 0){Ji=new Yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tu(t,5);Ji.setIndex([0,1,2,0,2,3]),Ji.setAttribute("position",new or(n,3,0,!1)),Ji.setAttribute("uv",new or(n,2,3,!1))}this.geometry=Ji,this.material=e,this.center=new He(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Qi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Pr(Vr.set(-.5,-.5,0),Qi,o,Zi,i,s),Pr(Us.set(.5,-.5,0),Qi,o,Zi,i,s),Pr(Ir.set(.5,.5,0),Qi,o,Zi,i,s),El.set(0,0),ko.set(1,0),bl.set(1,1);let a=e.ray.intersectTriangle(Vr,Us,Ir,!1,Ds);if(a===null&&(Pr(Us.set(-.5,.5,0),Qi,o,Zi,i,s),ko.set(0,1),a=e.ray.intersectTriangle(Vr,Ir,Us,!1,Ds),a===null))return;const c=e.ray.origin.distanceTo(Ds);c<e.near||c>e.far||t.push({distance:c,point:Ds.clone(),uv:cn.getInterpolation(Ds,Vr,Us,Ir,El,ko,bl,new He),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pr(r,e,t,n,i,s){$i.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Ns.x=s*$i.x-i*$i.y,Ns.y=i*$i.x+s*$i.y):Ns.copy($i),r.copy(e),r.x+=Ns.x,r.y+=Ns.y,r.applyMatrix4(Ru)}const wl=new q,Tl=new ot,Rl=new ot,Kf=new q,Cl=new Ge,Lr=new q,Ho=new Pn,Vl=new Ge,Go=new cr;class Jf extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=il,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),e.ray.intersectsSphere(Ho)!==!1&&(Vl.copy(i).invert(),Go.copy(e.ray).applyMatrix4(Vl),!(this.boundingBox!==null&&Go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ot,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===il?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Tl.fromBufferAttribute(i.attributes.skinIndex,e),Rl.fromBufferAttribute(i.attributes.skinWeight,e),wl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Rl.getComponent(s);if(o!==0){const a=Tl.getComponent(s);Cl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Kf.copy(wl).applyMatrix4(Cl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vu extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Iu extends bt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Bt,h=Bt,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Il=new Ge,Zf=new Ge;class Pc{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Zf;Il.multiplyMatrices(a,t[s]),Il.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Iu(t,e,e,ln,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vu),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class sc extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const es=new Ge,Pl=new Ge,Dr=[],Ll=new Xt,Qf=new Ge,qs=new mt,Fs=new Pn;class Pu extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Ll.copy(e.boundingBox).applyMatrix4(es),this.boundingBox.union(Ll)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,es),Fs.copy(e.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,es),Pl.multiplyMatrices(n,es),qs.matrixWorld=Pl,qs.raycast(e,Dr);for(let o=0,a=Dr.length;o<a;o++){const c=Dr[o];c.instanceId=s,c.object=this,t.push(c)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Iu(new Float32Array(i*this.count),i,this.count,Ac,vn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wo=new q,$f=new q,ep=new Xe;let ri=class{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wo.subVectors(n,t).cross($f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const xi=new Pn,tp=new He(.5,.5),Nr=new q;class Lc{constructor(e=new ri,t=new ri,n=new ri,i=new ri,s=new ri,o=new ri){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],m=s[7],g=s[8],_=s[9],f=s[10],p=s[11],v=s[12],y=s[13],x=s[14],A=s[15];if(i[0].setComponents(l-o,m-h,p-g,A-v).normalize(),i[1].setComponents(l+o,m+h,p+g,A+v).normalize(),i[2].setComponents(l+a,m+u,p+_,A+y).normalize(),i[3].setComponents(l-a,m-u,p-_,A-y).normalize(),n)i[4].setComponents(c,d,f,x).normalize(),i[5].setComponents(l-c,m-d,p-f,A-x).normalize();else if(i[4].setComponents(l-c,m-d,p-f,A-x).normalize(),t===Vn)i[5].setComponents(l+c,m+d,p+f,A+x).normalize();else if(t===lo)i[5].setComponents(c,d,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){xi.center.set(0,0,0);const t=tp.distanceTo(e.center);return xi.radius=.7071067811865476+t,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Nr.x=i.normal.x>0?e.max.x:e.min.x,Nr.y=i.normal.y>0?e.max.y:e.min.y,Nr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lu extends un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ho=new q,uo=new q,Dl=new Ge,Bs=new cr,Ur=new Pn,Xo=new q,Nl=new q;class Dc extends ft{constructor(e=new Yt,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ho.fromBufferAttribute(t,i-1),uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ho.distanceTo(uo);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Ur.radius+=s,e.ray.intersectsSphere(Ur)===!1)return;Dl.copy(i).invert(),Bs.copy(e.ray).applyMatrix4(Dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){const p=h.getX(_),v=h.getX(_+1),y=qr(this,e,Bs,c,p,v,_);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),f=h.getX(m),p=qr(this,e,Bs,c,_,f,g-1);p&&t.push(p)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=m,f=g-1;_<f;_+=l){const p=qr(this,e,Bs,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=qr(this,e,Bs,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function qr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(ho.fromBufferAttribute(a,i),uo.fromBufferAttribute(a,s),t.distanceSqToSegment(ho,uo,Xo,Nl)>n)return;Xo.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Xo);if(!(l<e.near||l>e.far))return{distance:l,point:Nl.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Ul=new q,ql=new q;class np extends Dc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ul.fromBufferAttribute(t,i),ql.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ul.distanceTo(ql);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ip extends Dc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Du extends un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fl=new Ge,rc=new cr,Fr=new Pn,Br=new q;class sp extends ft{constructor(e=new Yt,t=new Du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(i),Fr.radius+=s,e.ray.intersectsSphere(Fr)===!1)return;Fl.copy(i).invert(),rc.copy(e.ray).applyMatrix4(Fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const f=l.getX(g);Br.fromBufferAttribute(u,f),Bl(Br,f,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Br.fromBufferAttribute(u,g),Bl(Br,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bl(r,e,t,n,i,s,o){const a=rc.distanceSqToPoint(r);if(a<t){const c=new q;rc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Nc extends bt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nu extends bt{constructor(e,t,n=Ii,i,s,o,a=Bt,c=Bt,l,h=er,u=1){if(h!==er&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uu extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,m=[],g=[],_=[],f=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<l;y++){const x=y*u-s;g.push(x,-v,0),_.push(0,0,1),f.push(y/a),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),A=v+1+l*(p+1),M=v+1+l*p;m.push(y,x,M),m.push(x,A,M)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uc extends Yt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,m=new q,g=new He;for(let _=0;_<=i;_++){for(let f=0;f<=n;f++){const p=s+f/n*o;m.x=u*Math.cos(p),m.y=u*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const f=_*(n+1);for(let p=0;p<n;p++){const v=p+f,y=v,x=v+n+1,A=v+n+2,M=v+1;a.push(y,x,M),a.push(x,A,M)}}this.setIndex(a),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qc extends Yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new q,d=new q,m=[],g=[],_=[],f=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const M=A/t;u.x=-e*Math.cos(i+M*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+M*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),f.push(M+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],A=h[p+1][v],M=h[p+1][v+1];(p!==0||o>0)&&m.push(y,x,M),(p!==n-1||c<Math.PI)&&m.push(x,A,M)}this.setIndex(m),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Li extends un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends Li{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rp extends un{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class op extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ap extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Or(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function lp(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ol(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function qu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class lr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hp extends lr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:os,endingEnd:os}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case as:s=e,a=2*t-n;break;case ao:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case as:o=e,c=2*n-t;break;case ao:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),_=g*g,f=_*g,p=-d*f+2*d*_-d*g,v=(1+d)*f+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-m)*f+(1.5+m)*_+.5*g,x=m*f-m*_;for(let A=0;A!==a;++A)s[A]=p*o[h+A]+v*o[l+A]+y*o[c+A]+x*o[u+A];return s}}class Fu extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class up extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Or(t,this.TimeBufferType),this.values=Or(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Or(e.times,Array),values:Or(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new up(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case yo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&cp(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ir;class Es extends Mn{constructor(e,t,n){super(e,t,n)}}Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=nr;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class Bu extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}Bu.prototype.ValueTypeName="color";class ys extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}ys.prototype.ValueTypeName="number";class dp extends lr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)hn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Ms extends Mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dp(this.times,this.values,this.getValueSize(),e)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends Mn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=nr;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Mn{constructor(e,t,n,i){super(e,t,n,i)}}As.prototype.ValueTypeName="vector";class oc{constructor(e="",t=-1,n=[],i=wc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pp(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Mn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=lp(c);c=Ol(c,1,h),l=Ol(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ys(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,m,g,_){if(m.length!==0){const f=[],p=[];qu(m,f,p,g),f.length!==0&&_.push(new u(d,f,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const f=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];f.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new ys(".morphTargetInfluence["+_+"]",f,p))}c=m.length*o}else{const m=".bones["+t[u].name+"]";n(As,m+".position",d,"pos",i),n(Ms,m+".quaternion",d,"rot",i),n(As,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function fp(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ys;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return Bu;case"quaternion":return Ms;case"bool":case"boolean":return Es;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function pp(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fp(r.type);if(r.times===void 0){const t=[],n=[];qu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Yn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mp{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const gp=new mp;class ws{constructor(e){this.manager=e!==void 0?e:gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class _p extends Error{constructor(e,t){super(e),this.response=t}}class Ou extends ws{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Yn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let _=0;const f=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let M=0,w=h.length;M<w;M++){const V=h[M];V.onProgress&&V.onProgress(A)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(f)}else throw new _p(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Yn.add(`file:${e}`,l);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ts=new WeakMap;class vp extends ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=ts.get(o);u===void 0&&(u=[],ts.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=sr("img");function c(){h(),t&&t(this);const u=ts.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}ts.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Yn.remove(`image:${e}`);const d=ts.get(this)||[];for(let m=0;m<d.length;m++){const g=d[m];g.onError&&g.onError(u)}ts.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yn.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class xp extends ws{constructor(e){super(e)}load(e,t,n,i){const s=new bt,o=new vp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fc extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Yo=new Ge,zl=new q,kl=new q;class Bc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),kl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kl),t.updateMatrixWorld(),Yo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yp extends Bc{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mp extends Fc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Hl=new Ge,Os=new q,jo=new q;class Ap extends Bc{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),jo.copy(n.position),jo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl,n.coordinateSystem,n.reversedDepth)}}class Oc extends Fc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zc extends Eu{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Sp extends Bc{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ac extends Fc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new Sp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ko=new WeakMap;class Ep extends ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yn.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(Ko.has(o)===!0)i&&i(Ko.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Yn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ko.set(c,l),Yn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Yn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class bp extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wp{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){hn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;hn.multiplyQuaternionsFlat(e,o,e,t,e,n),hn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const kc="\\[\\]\\.:\\/",Tp=new RegExp("["+kc+"]","g"),Hc="[^"+kc+"]",Rp="[^"+kc.replace("\\.","")+"]",Cp=/((?:WC+[\/:])*)/.source.replace("WC",Hc),Vp=/(WCOD+)?/.source.replace("WCOD",Rp),Ip=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),Pp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Lp=new RegExp("^"+Cp+Vp+Ip+Pp+"$"),Dp=["material","materials","bones","map"];class Np{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tp,"")}static parseTrackName(e){const t=Lp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Dp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Np;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Up{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:os,endingEnd:os};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case jd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case wc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Yd;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===mu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=as,i.endingEnd=as):(e?i.endingStart=this.zeroSlopeAtStart?as:os:i.endingStart=ao,t?i.endingEnd=this.zeroSlopeAtEnd?as:os:i.endingEnd=ao)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const qp=new Float32Array(1);class zu extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],m=d.name;let g=h[m];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,m));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new wp(st.create(n,m,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,m),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Fu(new Float32Array(2),new Float32Array(2),1,qp),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?oc.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=wc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Up(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?oc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Gl=new Ge;class ku{constructor(e,t,n=0,i=1/0){this.ray=new cr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gl),this}intersectObject(e,t=!0,n=[]){return cc(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)cc(e[i],this,n,t);return n.sort(Wl),n}}function Wl(r,e){return r.distance-e.distance}function cc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)cc(s[o],e,t,!0)}}function Xl(r,e,t,n){const i=Fp(n);switch(t){case du:return r*e;case Ac:return r*e/i.components*i.byteLength;case Sc:return r*e/i.components*i.byteLength;case pu:return r*e*2/i.components*i.byteLength;case Ec:return r*e*2/i.components*i.byteLength;case fu:return r*e*3/i.components*i.byteLength;case ln:return r*e*4/i.components*i.byteLength;case bc:return r*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Ia:return Math.max(r,16)*Math.max(e,8)/4;case Ra:case Va:return Math.max(r,8)*Math.max(e,8)/2;case Pa:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Da:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ka:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ja:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Ja:case Za:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Qa:case $a:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ec:case tc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fp(r){switch(r){case In:case cu:return{byteLength:1,components:1};case Qs:case lu:case ar:return{byteLength:2,components:1};case yc:case Mc:return{byteLength:2,components:4};case Ii:case xc:case vn:return{byteLength:4,components:1};case hu:case uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function Hu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Bp(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=r.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=r.SHORT;else if(l instanceof Uint32Array)m=r.UNSIGNED_INT;else if(l instanceof Int32Array)m=r.INT;else if(l instanceof Int8Array)m=r.BYTE;else if(l instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){const g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$p=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Fm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Eg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Dg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,s_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,o_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,__=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Op,alphahash_pars_fragment:zp,alphamap_fragment:kp,alphamap_pars_fragment:Hp,alphatest_fragment:Gp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:Yp,batching_pars_vertex:jp,batching_vertex:Kp,begin_vertex:Jp,beginnormal_vertex:Zp,bsdfs:Qp,iridescence_fragment:$p,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:cm,common:lm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:_m,envmap_fragment:vm,envmap_common_pars_fragment:xm,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Pm,envmap_vertex:Am,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:bm,fog_pars_fragment:wm,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Im,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Um,lights_physical_fragment:qm,lights_physical_pars_fragment:Fm,lights_fragment_begin:Bm,lights_fragment_maps:Om,lights_fragment_end:zm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Gm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:Ym,map_particle_fragment:jm,map_particle_pars_fragment:Km,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Zm,morphinstance_vertex:Qm,morphcolor_vertex:$m,morphnormal_vertex:eg,morphtarget_pars_vertex:tg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:ag,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:dg,opaque_fragment:fg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:_g,dithering_pars_fragment:vg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Sg,shadowmask_pars_fragment:Eg,skinbase_vertex:bg,skinning_pars_vertex:wg,skinning_vertex:Tg,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Vg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ng,uv_pars_vertex:Ug,uv_vertex:qg,worldpos_vertex:Fg,background_vert:Bg,background_frag:Og,backgroundCube_vert:zg,backgroundCube_frag:kg,cube_vert:Hg,cube_frag:Gg,depth_vert:Wg,depth_frag:Xg,distanceRGBA_vert:Yg,distanceRGBA_frag:jg,equirect_vert:Kg,equirect_frag:Jg,linedashed_vert:Zg,linedashed_frag:Qg,meshbasic_vert:$g,meshbasic_frag:e_,meshlambert_vert:t_,meshlambert_frag:n_,meshmatcap_vert:i_,meshmatcap_frag:s_,meshnormal_vert:r_,meshnormal_frag:o_,meshphong_vert:a_,meshphong_frag:c_,meshphysical_vert:l_,meshphysical_frag:h_,meshtoon_vert:u_,meshtoon_frag:d_,points_vert:f_,points_frag:p_,shadow_vert:m_,shadow_frag:g_,sprite_vert:__,sprite_frag:v_},ye={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Tn={basic:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Nt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Nt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Nt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Nt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Nt([ye.points,ye.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Nt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Nt([ye.common,ye.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Nt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Nt([ye.sprite,ye.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Nt([ye.common,ye.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Nt([ye.lights,ye.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Tn.physical={uniforms:Nt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const zr={r:0,b:0,g:0},yi=new tn,x_=new Ge;function y_(r,e,t,n,i,s,o){const a=new Oe(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const A=g(y);A===null?p(a,c):A&&A.isColor&&(p(A,1),x=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function f(y,x){const A=g(x);A&&(A.isCubeTexture||A.mapping===go)?(h===void 0&&(h=new mt(new Ss(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:xs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),yi.copy(x.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(yi)),h.material.toneMapped=et.getTransfer(A.colorSpace)!==lt,(u!==A||d!==A.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,m=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new mt(new _o(2,2),new pi({name:"BackgroundMaterial",uniforms:xs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=et.getTransfer(A.colorSpace)!==lt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||m!==r.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,m=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(zr,Su(r)),n.buffers.color.setClear(zr.r,zr.g,zr.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:f,dispose:v}}function M_(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,C,U,P,D){let F=!1;const N=u(P,U,C);s!==N&&(s=N,l(s.object)),F=m(S,P,U,D),F&&g(S,P,U,D),D!==null&&e.update(D,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(S,C,U,P),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,C,U){const P=U.wireframe===!0;let D=n[S.id];D===void 0&&(D={},n[S.id]=D);let F=D[C.id];F===void 0&&(F={},D[C.id]=F);let N=F[P];return N===void 0&&(N=d(c()),F[P]=N),N}function d(S){const C=[],U=[],P=[];for(let D=0;D<t;D++)C[D]=0,U[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:P,object:S,attributes:{},index:null}}function m(S,C,U,P){const D=s.attributes,F=C.attributes;let N=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){const re=D[z];let fe=F[z];if(fe===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;N++}return s.attributesNum!==N||s.index!==P}function g(S,C,U,P){const D={},F=C.attributes;let N=0;const $=U.getAttributes();for(const z in $)if($[z].location>=0){let re=F[z];re===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),D[z]=fe,N++}s.attributes=D,s.attributesNum=N,s.index=P}function _(){const S=s.newAttributes;for(let C=0,U=S.length;C<U;C++)S[C]=0}function f(S){p(S,0)}function p(S,C){const U=s.newAttributes,P=s.enabledAttributes,D=s.attributeDivisors;U[S]=1,P[S]===0&&(r.enableVertexAttribArray(S),P[S]=1),D[S]!==C&&(r.vertexAttribDivisor(S,C),D[S]=C)}function v(){const S=s.newAttributes,C=s.enabledAttributes;for(let U=0,P=C.length;U<P;U++)C[U]!==S[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function y(S,C,U,P,D,F,N){N===!0?r.vertexAttribIPointer(S,C,U,D,F):r.vertexAttribPointer(S,C,U,P,D,F)}function x(S,C,U,P){_();const D=P.attributes,F=U.getAttributes(),N=C.defaultAttributeValues;for(const $ in F){const z=F[$];if(z.location>=0){let J=D[$];if(J===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const re=J.normalized,fe=J.itemSize,oe=e.get(J);if(oe===void 0)continue;const W=oe.buffer,ue=oe.type,te=oe.bytesPerElement,G=ue===r.INT||ue===r.UNSIGNED_INT||J.gpuType===xc;if(J.isInterleavedBufferAttribute){const k=J.data,ie=k.stride,me=J.offset;if(k.isInstancedInterleavedBuffer){for(let ce=0;ce<z.locationSize;ce++)p(z.location+ce,k.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ce=0;ce<z.locationSize;ce++)f(z.location+ce);r.bindBuffer(r.ARRAY_BUFFER,W);for(let ce=0;ce<z.locationSize;ce++)y(z.location+ce,fe/z.locationSize,ue,re,ie*te,(me+fe/z.locationSize*ce)*te,G)}else{if(J.isInstancedBufferAttribute){for(let k=0;k<z.locationSize;k++)p(z.location+k,J.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let k=0;k<z.locationSize;k++)f(z.location+k);r.bindBuffer(r.ARRAY_BUFFER,W);for(let k=0;k<z.locationSize;k++)y(z.location+k,fe/z.locationSize,ue,re,fe*te,fe/z.locationSize*k*te,G)}}else if(N!==void 0){const re=N[$];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}v()}function A(){V();for(const S in n){const C=n[S];for(const U in C){const P=C[U];for(const D in P)h(P[D].object),delete P[D];delete C[U]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const U in C){const P=C[U];for(const D in P)h(P[D].object),delete P[D];delete C[U]}delete n[S.id]}function w(S){for(const C in n){const U=n[C];if(U[S.id]===void 0)continue;const P=U[S.id];for(const D in P)h(P[D].object),delete P[D];delete U[S.id]}}function V(){E(),o=!0,s!==i&&(s=i,l(s.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:V,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:f,disableUnusedAttributes:v}}function A_(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}function c(l,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function S_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==ln&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const V=w===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==In&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vn&&!V)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,M=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:M}}function E_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ri,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||i;return i=d,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const g=u.clippingPlanes,_=u.clipIntersection,f=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,d,y,m);for(let A=0;A!==y;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){const _=u!==null?u.length:0;let f=null;if(_!==0){if(f=c.value,g!==!0||f===null){const p=m+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<p)&&(f=new Float32Array(p));for(let y=0,x=m;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(f,x),f[x+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,f}}function b_(r){let e=new WeakMap;function t(o,a){return a===wa?o.mapping=ms:a===Ta&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wa||a===Ta)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Yf(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const cs=4,Yl=[.125,.215,.35,.446,.526,.582],Ci=20,Jo=new zc,jl=new Oe;let Zo=null,Qo=0,$o=0,ea=!1;const Ti=(1+Math.sqrt(5))/2,ns=1/Ti,Kl=[new q(-Ti,ns,0),new q(Ti,ns,0),new q(-ns,0,Ti),new q(ns,0,Ti),new q(0,Ti,-ns),new q(0,Ti,ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],w_=new q;class lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=w_}=s;Zo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,Qo,$o),this._renderer.xr.enabled=ea,e.scissorTest=!1,kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),ea=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ar,format:ln,colorSpace:zt,depthBuffer:!1},i=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=T_(s)),this._blurMaterial=R_(s,e,t)}return i}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,i,s){const c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(jl),u.toneMapping=fi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new li({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),f=new mt(new Ss,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(jl),p=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));const A=this._cubeSize;kr(i,x*A,y>2?A:0,A,A),u.setRenderTarget(i),p&&u.render(f,c),u.render(e,c)}f.geometry.dispose(),f.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new mt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;kr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kl[(i-s-1)%Kl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new mt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ci-1),_=s/g,f=isFinite(s)?1+Math.floor(h*_):Ci;f>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ci}`);const p=[];let v=0;for(let w=0;w<Ci;++w){const V=w/_,E=Math.exp(-V*V/2);p.push(E),w===0?v+=E:w<f&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-cs?i-y+cs:0),M=4*(this._cubeSize-x);kr(t,A,M,3*x,2*x),c.setRenderTarget(t),c.render(u,Jo)}}function T_(r){const e=[],t=[],n=[];let i=r;const s=r-cs+1+Yl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-cs?c=Yl[o-r+cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,f=2,p=1,v=new Float32Array(_*g*m),y=new Float32Array(f*g*m),x=new Float32Array(p*g*m);for(let M=0;M<m;M++){const w=M%3*2/3-1,V=M>2?0:-1,E=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];v.set(E,_*g*M),y.set(d,f*g*M);const S=[M,M,M,M,M,M];x.set(S,p*g*M)}const A=new Yt;A.setAttribute("position",new Ot(v,_)),A.setAttribute("uv",new Ot(y,f)),A.setAttribute("faceIndex",new Ot(x,p)),e.push(A),i>cs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(r,e,t){const n=new Pi(r,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function kr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function R_(r,e,t){const n=new Float32Array(Ci),i=new q(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Zl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ql(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===wa||c===Ta,h=c===ms||c===gs;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new lc(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new lc(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function V_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I_(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],r.ARRAY_BUFFER)}function l(u){const d=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let y=0,x=v.length;y<x;y+=3){const A=v[y+0],M=v[y+1],w=v[y+2];d.push(A,M,M,w,w,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const A=y+0,M=y+1,w=y+2;d.push(A,M,M,w,w,A)}}else return;const f=new(vu(d)?Au:Mu)(d,1);f.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function P_(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,m){r.drawElements(n,m,s,d*o),t.update(m,n,1)}function l(d,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,d*o,g),t.update(m,n,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,g);let f=0;for(let p=0;p<g;p++)f+=m[p];t.update(f,n,1)}function u(d,m,g,_){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/o,m[p],_[p]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=m[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function L_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function D_(r,e,t){const n=new WeakMap,i=new ot;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*A*4*u),w=new xu(M,x,A,u);w.type=vn,w.needsUpdate=!0;const V=y*4;for(let S=0;S<u;S++){const C=f[S],U=p[S],P=v[S],D=x*A*4*S;for(let F=0;F<C.count;F++){const N=F*V;m===!0&&(i.fromBufferAttribute(C,F),M[D+N+0]=i.x,M[D+N+1]=i.y,M[D+N+2]=i.z,M[D+N+3]=0),g===!0&&(i.fromBufferAttribute(U,F),M[D+N+4]=i.x,M[D+N+5]=i.y,M[D+N+6]=i.z,M[D+N+7]=0),_===!0&&(i.fromBufferAttribute(P,F),M[D+N+8]=i.x,M[D+N+9]=i.y,M[D+N+10]=i.z,M[D+N+11]=P.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new He(x,A)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function N_(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Gu=new bt,$l=new Nu(1,1),Wu=new xu,Xu=new Vf,Yu=new bu,eh=[],th=[],nh=new Float32Array(16),ih=new Float32Array(9),sh=new Float32Array(4);function Ts(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=eh[i];if(s===void 0&&(s=new Float32Array(i),eh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function wt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function vo(r,e){let t=th[e];t===void 0&&(t=new Int32Array(e),th[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function U_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function q_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2fv(this.addr,e),Tt(t,e)}}function F_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;r.uniform3fv(this.addr,e),Tt(t,e)}}function B_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4fv(this.addr,e),Tt(t,e)}}function O_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;sh.set(n),r.uniformMatrix2fv(this.addr,!1,sh),Tt(t,n)}}function z_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;ih.set(n),r.uniformMatrix3fv(this.addr,!1,ih),Tt(t,n)}}function k_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;nh.set(n),r.uniformMatrix4fv(this.addr,!1,nh),Tt(t,n)}}function H_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function G_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2iv(this.addr,e),Tt(t,e)}}function W_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3iv(this.addr,e),Tt(t,e)}}function X_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4iv(this.addr,e),Tt(t,e)}}function Y_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function j_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;r.uniform2uiv(this.addr,e),Tt(t,e)}}function K_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;r.uniform3uiv(this.addr,e),Tt(t,e)}}function J_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;r.uniform4uiv(this.addr,e),Tt(t,e)}}function Z_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?($l.compareFunction=_u,s=$l):s=Gu,t.setTexture2D(e||s,i)}function Q_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Xu,i)}function $_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yu,i)}function e0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Wu,i)}function t0(r){switch(r){case 5126:return U_;case 35664:return q_;case 35665:return F_;case 35666:return B_;case 35674:return O_;case 35675:return z_;case 35676:return k_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return Y_;case 36294:return j_;case 36295:return K_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return e0}}function n0(r,e){r.uniform1fv(this.addr,e)}function i0(r,e){const t=Ts(e,this.size,2);r.uniform2fv(this.addr,t)}function s0(r,e){const t=Ts(e,this.size,3);r.uniform3fv(this.addr,t)}function r0(r,e){const t=Ts(e,this.size,4);r.uniform4fv(this.addr,t)}function o0(r,e){const t=Ts(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function a0(r,e){const t=Ts(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function c0(r,e){const t=Ts(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function l0(r,e){r.uniform1iv(this.addr,e)}function h0(r,e){r.uniform2iv(this.addr,e)}function u0(r,e){r.uniform3iv(this.addr,e)}function d0(r,e){r.uniform4iv(this.addr,e)}function f0(r,e){r.uniform1uiv(this.addr,e)}function p0(r,e){r.uniform2uiv(this.addr,e)}function m0(r,e){r.uniform3uiv(this.addr,e)}function g0(r,e){r.uniform4uiv(this.addr,e)}function _0(r,e,t){const n=this.cache,i=e.length,s=vo(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gu,s[o])}function v0(r,e,t){const n=this.cache,i=e.length,s=vo(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Xu,s[o])}function x0(r,e,t){const n=this.cache,i=e.length,s=vo(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yu,s[o])}function y0(r,e,t){const n=this.cache,i=e.length,s=vo(t,i);wt(n,s)||(r.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Wu,s[o])}function M0(r){switch(r){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}class A0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t0(t.type)}}class S0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M0(t.type)}}class E0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function rh(r,e){r.seq.push(e),r.map[e.id]=e}function b0(r,e,t){const n=r.name,i=n.length;for(ta.lastIndex=0;;){const s=ta.exec(n),o=ta.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){rh(t,l===void 0?new A0(a,r,e):new S0(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new E0(a),rh(t,u)),t=u}}}class so{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);b0(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function oh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const w0=37297;let T0=0;function R0(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ah=new Xe;function C0(r){et._getMatrix(ah,et.workingColorSpace,r);const e=`mat3( ${ah.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case co:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ch(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+R0(r.getShaderSource(e),a)}else return s}function V0(r,e){const t=C0(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function I0(r,e){let t;switch(e){case Bd:t="Linear";break;case Od:t="Reinhard";break;case zd:t="Cineon";break;case ru:t="ACESFilmic";break;case Hd:t="AgX";break;case Gd:t="Neutral";break;case kd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new q;function P0(){et.getLuminanceCoefficients(Hr);const r=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function D0(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N0(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function js(r){return r!==""}function lh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(r){return r.replace(U0,F0)}const q0=new Map;function F0(r,e){let t=Ye[e];if(t===void 0){const n=q0.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}const B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(r){return r.replace(B0,O0)}function O0(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z0(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function k0(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H0(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vc:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Fd:e="ENVMAP_BLENDING_ADD";break}return e}function W0(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X0(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=z0(t),l=k0(t),h=H0(t),u=G0(t),d=W0(t),m=L0(t),g=D0(s),_=i.createProgram();let f,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(f=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[dh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==fi?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,V0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),o=hc(o),o=lh(o,t),o=hh(o,t),a=hc(a),a=lh(a,t),a=hh(a,t),o=uh(o),a=uh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+f+o,x=v+p+a,A=oh(i,i.VERTEX_SHADER,y),M=oh(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,M),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(C){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(_)||"",P=i.getShaderInfoLog(A)||"",D=i.getShaderInfoLog(M)||"",F=U.trim(),N=P.trim(),$=D.trim();let z=!0,J=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,M);else{const re=ch(i,A,"vertex"),fe=ch(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+re+`
`+fe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||$==="")&&(J=!1);J&&(C.diagnostics={runnable:z,programLog:F,vertexShader:{log:N,prefix:f},fragmentShader:{log:$,prefix:p}})}i.deleteShader(A),i.deleteShader(M),V=new so(i,_),E=N0(i,_)}let V;this.getUniforms=function(){return V===void 0&&w(this),V};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,w0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=T0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}let Y0=0;class j0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new K0(e),t.set(e,n)),n}}class K0{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}}function J0(r,e,t,n,i,s,o){const a=new Vc,c=new j0,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function f(E,S,C,U,P){const D=U.fog,F=P.geometry,N=E.isMeshStandardMaterial?U.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||N),z=$&&$.mapping===go?$.image.height:null,J=g[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=re!==void 0?re.length:0;let oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let W,ue,te,G;if(J){const $e=Tn[J];W=$e.vertexShader,ue=$e.fragmentShader}else W=E.vertexShader,ue=E.fragmentShader,c.update(E),te=c.getVertexShaderID(E),G=c.getFragmentShaderID(E);const k=r.getRenderTarget(),ie=r.state.buffers.depth.getReversed(),me=P.isInstancedMesh===!0,ce=P.isBatchedMesh===!0,be=!!E.map,je=!!E.matcap,L=!!$,Ke=!!E.aoMap,Ue=!!E.lightMap,Pe=!!E.bumpMap,we=!!E.normalMap,tt=!!E.displacementMap,Re=!!E.emissiveMap,ke=!!E.metalnessMap,xt=!!E.roughnessMap,pt=E.anisotropy>0,I=E.clearcoat>0,T=E.dispersion>0,j=E.iridescence>0,B=E.sheen>0,Y=E.transmission>0,K=pt&&!!E.anisotropyMap,ve=I&&!!E.clearcoatMap,se=I&&!!E.clearcoatNormalMap,Me=I&&!!E.clearcoatRoughnessMap,ge=j&&!!E.iridescenceMap,ne=j&&!!E.iridescenceThicknessMap,pe=B&&!!E.sheenColorMap,De=B&&!!E.sheenRoughnessMap,Le=!!E.specularMap,_e=!!E.specularColorMap,We=!!E.specularIntensityMap,O=Y&&!!E.transmissionMap,le=Y&&!!E.thicknessMap,de=!!E.gradientMap,Ee=!!E.alphaMap,ae=E.alphaTest>0,ee=!!E.alphaHash,xe=!!E.extensions;let Ne=fi;E.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const nt={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:ue,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:G,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ce,batchingColor:ce&&P._colorsTexture!==null,instancing:me,instancingColor:me&&P.instanceColor!==null,instancingMorph:me&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?r.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:zt,alphaToCoverage:!!E.alphaToCoverage,map:be,matcap:je,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:z,aoMap:Ke,lightMap:Ue,bumpMap:Pe,normalMap:we,displacementMap:d&&tt,emissiveMap:Re,normalMapObjectSpace:we&&E.normalMapType===Qd,normalMapTangentSpace:we&&E.normalMapType===Tc,metalnessMap:ke,roughnessMap:xt,anisotropy:pt,anisotropyMap:K,clearcoat:I,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:T,iridescence:j,iridescenceMap:ge,iridescenceThicknessMap:ne,sheen:B,sheenColorMap:pe,sheenRoughnessMap:De,specularMap:Le,specularColorMap:_e,specularIntensityMap:We,transmission:Y,transmissionMap:O,thicknessMap:le,gradientMap:de,opaque:E.transparent===!1&&E.blending===di&&E.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ae,alphaHash:ee,combine:E.combine,mapUv:be&&_(E.map.channel),aoMapUv:Ke&&_(E.aoMap.channel),lightMapUv:Ue&&_(E.lightMap.channel),bumpMapUv:Pe&&_(E.bumpMap.channel),normalMapUv:we&&_(E.normalMap.channel),displacementMapUv:tt&&_(E.displacementMap.channel),emissiveMapUv:Re&&_(E.emissiveMap.channel),metalnessMapUv:ke&&_(E.metalnessMap.channel),roughnessMapUv:xt&&_(E.roughnessMap.channel),anisotropyMapUv:K&&_(E.anisotropyMap.channel),clearcoatMapUv:ve&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(E.sheenRoughnessMap.channel),specularMapUv:Le&&_(E.specularMap.channel),specularColorMapUv:_e&&_(E.specularColorMap.channel),specularIntensityMapUv:We&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:le&&_(E.thicknessMap.channel),alphaMapUv:Ee&&_(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(we||pt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!F.attributes.uv&&(be||Ee),fog:!!D,useFog:E.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:P.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:be&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:Re&&E.emissiveMap.isVideoTexture===!0&&et.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Cn,flipSided:E.side===Ft,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(v(S,E),y(S,E),S.push(r.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function v(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const S=g[E.type];let C;if(S){const U=Tn[S];C=Hf.clone(U.uniforms)}else C=E.uniforms;return C}function A(E,S){let C;for(let U=0,P=h.length;U<P;U++){const D=h[U];if(D.cacheKey===S){C=D,++C.usedTimes;break}}return C===void 0&&(C=new X0(r,S,E,s),h.push(C)),C}function M(E){if(--E.usedTimes===0){const S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function V(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:V}}function Z0(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function fh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ph(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,m,g,_,f){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:f},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=f),e++,p}function a(u,d,m,g,_,f){const p=o(u,d,m,g,_,f);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):t.push(p)}function c(u,d,m,g,_,f){const p=o(u,d,m,g,_,f);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Q0),n.length>1&&n.sort(d||fh),i.length>1&&i.sort(d||fh)}function h(){for(let u=e,d=r.length;u<d;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function $0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ph,r.set(n,[o])):i>=s.length?(o=new ph,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ev(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Oe};break;case"SpotLight":t={position:new q,direction:new q,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function tv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nv=0;function iv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sv(r){const e=new ev,t=tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const i=new q,s=new Ge,o=new Ge;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,f=0,p=0,v=0,y=0,x=0,A=0,M=0,w=0;l.sort(iv);for(let E=0,S=l.length;E<S;E++){const C=l[E],U=C.color,P=C.intensity,D=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*P,u+=U.g*P,d+=U.b*P;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],P);w++}else if(C.isDirectionalLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const $=C.shadow,z=t.get(C);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=C.shadow.matrix,v++}n.directional[m]=N,m++}else if(C.isSpotLight){const N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(U).multiplyScalar(P),N.distance=D,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[_]=N;const $=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,$.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[_]=$.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=F,x++}_++}else if(C.isRectAreaLight){const N=e.get(C);N.color.copy(U).multiplyScalar(P),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[f]=N,f++}else if(C.isPointLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){const $=C.shadow,z=t.get(C);z.shadowIntensity=$.intensity,z.shadowBias=$.bias,z.shadowNormalBias=$.normalBias,z.shadowRadius=$.radius,z.shadowMapSize=$.mapSize,z.shadowCameraNear=$.camera.near,z.shadowCameraFar=$.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=N,g++}else if(C.isHemisphereLight){const N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(P),N.groundColor.copy(C.groundColor).multiplyScalar(P),n.hemi[p]=N,p++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const V=n.hash;(V.directionalLength!==m||V.pointLength!==g||V.spotLength!==_||V.rectAreaLength!==f||V.hemiLength!==p||V.numDirectionalShadows!==v||V.numPointShadows!==y||V.numSpotShadows!==x||V.numSpotMaps!==A||V.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,V.directionalLength=m,V.pointLength=g,V.spotLength=_,V.rectAreaLength=f,V.hemiLength=p,V.numDirectionalShadows=v,V.numPointShadows=y,V.numSpotShadows=x,V.numSpotMaps=A,V.numLightProbes=w,n.version=nv++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0;const f=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),u++}else if(y.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(f),_++}}}return{setup:a,setupView:c,state:n}}function mh(r){const e=new sv(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function rv(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new mh(r),e.set(i,[a])):s>=o.length?(a=new mh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(r,e,t){let n=new Lc;const i=new He,s=new He,o=new ot,a=new op({depthPacking:Zd}),c=new ap,l={},h=t.maxTextureSize,u={[Kn]:Ft,[Ft]:Kn,[Cn]:Cn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:ov,fragmentShader:av}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let p=this.type;this.render=function(M,w,V){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;const E=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const P=p!==Wn&&this.type===Wn,D=p===Wn&&this.type!==Wn;for(let F=0,N=M.length;F<N;F++){const $=M[F],z=$.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const J=z.getFrameExtents();if(i.multiply(J),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/J.x),i.x=s.x*J.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/J.y),i.y=s.y*J.y,z.mapSize.y=s.y)),z.map===null||P===!0||D===!0){const fe=this.type!==Wn?{minFilter:Bt,magFilter:Bt}:{};z.map!==null&&z.map.dispose(),z.map=new Pi(i.x,i.y,fe),z.map.texture.name=$.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let fe=0;fe<re;fe++){const oe=z.getViewport(fe);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),U.viewport(o),z.updateMatrices($,fe),n=z.getFrustum(),x(w,V,z.camera,$,this.type)}z.isPointLightShadow!==!0&&this.type===Wn&&v(z,V),z.needsUpdate=!1}p=this.type,f.needsUpdate=!1,r.setRenderTarget(E,S,C)};function v(M,w){const V=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Pi(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(w,null,V,d,_,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(w,null,V,m,_,null)}function y(M,w,V,E){let S=null;const C=V.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)S=C;else if(S=V.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=S.uuid,P=w.uuid;let D=l[U];D===void 0&&(D={},l[U]=D);let F=D[P];F===void 0&&(F=S.clone(),D[P]=F,w.addEventListener("dispose",A)),S=F}if(S.visible=w.visible,S.wireframe=w.wireframe,E===Wn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,V.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=r.properties.get(S);U.light=V}return S}function x(M,w,V,E,S){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Wn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld);const P=e.update(M),D=M.material;if(Array.isArray(D)){const F=P.groups;for(let N=0,$=F.length;N<$;N++){const z=F[N],J=D[z.materialIndex];if(J&&J.visible){const re=y(M,J,E,S);M.onBeforeShadow(r,M,w,V,P,re,z),r.renderBufferDirect(V,null,P,re,M,z),M.onAfterShadow(r,M,w,V,P,re,z)}}}else if(D.visible){const F=y(M,D,E,S);M.onBeforeShadow(r,M,w,V,P,F,null),r.renderBufferDirect(V,null,P,F,M,null),M.onAfterShadow(r,M,w,V,P,F,null)}}const U=M.children;for(let P=0,D=U.length;P<D;P++)x(U[P],w,V,E,S)}function A(M){M.target.removeEventListener("dispose",A);for(const V in l){const E=l[V],S=M.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const lv={[xa]:ya,[Ma]:Ea,[Aa]:ba,[ps]:Sa,[ya]:xa,[Ea]:Ma,[ba]:Aa,[Sa]:ps};function hv(r,e){function t(){let O=!1;const le=new ot;let de=null;const Ee=new ot(0,0,0,0);return{setMask:function(ae){de!==ae&&!O&&(r.colorMask(ae,ae,ae,ae),de=ae)},setLocked:function(ae){O=ae},setClear:function(ae,ee,xe,Ne,nt){nt===!0&&(ae*=Ne,ee*=Ne,xe*=Ne),le.set(ae,ee,xe,Ne),Ee.equals(le)===!1&&(r.clearColor(ae,ee,xe,Ne),Ee.copy(le))},reset:function(){O=!1,de=null,Ee.set(-1,0,0,0)}}}function n(){let O=!1,le=!1,de=null,Ee=null,ae=null;return{setReversed:function(ee){if(le!==ee){const xe=e.get("EXT_clip_control");ee?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const Ne=ae;ae=null,this.setClear(Ne)}},getReversed:function(){return le},setTest:function(ee){ee?k(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(ee){de!==ee&&!O&&(r.depthMask(ee),de=ee)},setFunc:function(ee){if(le&&(ee=lv[ee]),Ee!==ee){switch(ee){case xa:r.depthFunc(r.NEVER);break;case ya:r.depthFunc(r.ALWAYS);break;case Ma:r.depthFunc(r.LESS);break;case ps:r.depthFunc(r.LEQUAL);break;case Aa:r.depthFunc(r.EQUAL);break;case Sa:r.depthFunc(r.GEQUAL);break;case Ea:r.depthFunc(r.GREATER);break;case ba:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ee=ee}},setLocked:function(ee){O=ee},setClear:function(ee){ae!==ee&&(le&&(ee=1-ee),r.clearDepth(ee),ae=ee)},reset:function(){O=!1,de=null,Ee=null,ae=null,le=!1}}}function i(){let O=!1,le=null,de=null,Ee=null,ae=null,ee=null,xe=null,Ne=null,nt=null;return{setTest:function($e){O||($e?k(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function($e){le!==$e&&!O&&(r.stencilMask($e),le=$e)},setFunc:function($e,kt,Ht){(de!==$e||Ee!==kt||ae!==Ht)&&(r.stencilFunc($e,kt,Ht),de=$e,Ee=kt,ae=Ht)},setOp:function($e,kt,Ht){(ee!==$e||xe!==kt||Ne!==Ht)&&(r.stencilOp($e,kt,Ht),ee=$e,xe=kt,Ne=Ht)},setLocked:function($e){O=$e},setClear:function($e){nt!==$e&&(r.clearStencil($e),nt=$e)},reset:function(){O=!1,le=null,de=null,Ee=null,ae=null,ee=null,xe=null,Ne=null,nt=null}}}const s=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,m=[],g=null,_=!1,f=null,p=null,v=null,y=null,x=null,A=null,M=null,w=new Oe(0,0,0),V=0,E=!1,S=null,C=null,U=null,P=null,D=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,$=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=$>=1):z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=$>=2);let J=null,re={};const fe=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),W=new ot().fromArray(fe),ue=new ot().fromArray(oe);function te(O,le,de,Ee){const ae=new Uint8Array(4),ee=r.createTexture();r.bindTexture(O,ee),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xe=0;xe<de;xe++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,Ee,0,r.RGBA,r.UNSIGNED_BYTE,ae):r.texImage2D(le+xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ae);return ee}const G={};G[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),G[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),G[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(r.DEPTH_TEST),o.setFunc(ps),Pe(!1),we(el),k(r.CULL_FACE),Ke(ui);function k(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function ie(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function me(O,le){return u[O]!==le?(r.bindFramebuffer(O,le),u[O]=le,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=le),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=le),!0):!1}function ce(O,le){let de=m,Ee=!1;if(O){de=d.get(le),de===void 0&&(de=[],d.set(le,de));const ae=O.textures;if(de.length!==ae.length||de[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,xe=ae.length;ee<xe;ee++)de[ee]=r.COLOR_ATTACHMENT0+ee;de.length=ae.length,Ee=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Ee=!0);Ee&&r.drawBuffers(de)}function be(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const je={[Ri]:r.FUNC_ADD,[yd]:r.FUNC_SUBTRACT,[Md]:r.FUNC_REVERSE_SUBTRACT};je[Ad]=r.MIN,je[Sd]=r.MAX;const L={[Ed]:r.ZERO,[bd]:r.ONE,[wd]:r.SRC_COLOR,[_a]:r.SRC_ALPHA,[Pd]:r.SRC_ALPHA_SATURATE,[Vd]:r.DST_COLOR,[Rd]:r.DST_ALPHA,[Td]:r.ONE_MINUS_SRC_COLOR,[va]:r.ONE_MINUS_SRC_ALPHA,[Id]:r.ONE_MINUS_DST_COLOR,[Cd]:r.ONE_MINUS_DST_ALPHA,[Ld]:r.CONSTANT_COLOR,[Dd]:r.ONE_MINUS_CONSTANT_COLOR,[Nd]:r.CONSTANT_ALPHA,[Ud]:r.ONE_MINUS_CONSTANT_ALPHA};function Ke(O,le,de,Ee,ae,ee,xe,Ne,nt,$e){if(O===ui){_===!0&&(ie(r.BLEND),_=!1);return}if(_===!1&&(k(r.BLEND),_=!0),O!==xd){if(O!==f||$e!==E){if((p!==Ri||x!==Ri)&&(r.blendEquation(r.FUNC_ADD),p=Ri,x=Ri),$e)switch(O){case di:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hs:r.blendFunc(r.ONE,r.ONE);break;case tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case di:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,A=null,M=null,w.set(0,0,0),V=0,f=O,E=$e}return}ae=ae||le,ee=ee||de,xe=xe||Ee,(le!==p||ae!==x)&&(r.blendEquationSeparate(je[le],je[ae]),p=le,x=ae),(de!==v||Ee!==y||ee!==A||xe!==M)&&(r.blendFuncSeparate(L[de],L[Ee],L[ee],L[xe]),v=de,y=Ee,A=ee,M=xe),(Ne.equals(w)===!1||nt!==V)&&(r.blendColor(Ne.r,Ne.g,Ne.b,nt),w.copy(Ne),V=nt),f=O,E=!1}function Ue(O,le){O.side===Cn?ie(r.CULL_FACE):k(r.CULL_FACE);let de=O.side===Ft;le&&(de=!de),Pe(de),O.blending===di&&O.transparent===!1?Ke(ui):Ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Ee=O.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?k(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){S!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),S=O)}function we(O){O!==gd?(k(r.CULL_FACE),O!==C&&(O===el?r.cullFace(r.BACK):O===_d?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),C=O}function tt(O){O!==U&&(N&&r.lineWidth(O),U=O)}function Re(O,le,de){O?(k(r.POLYGON_OFFSET_FILL),(P!==le||D!==de)&&(r.polygonOffset(le,de),P=le,D=de)):ie(r.POLYGON_OFFSET_FILL)}function ke(O){O?k(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function xt(O){O===void 0&&(O=r.TEXTURE0+F-1),J!==O&&(r.activeTexture(O),J=O)}function pt(O,le,de){de===void 0&&(J===null?de=r.TEXTURE0+F-1:de=J);let Ee=re[de];Ee===void 0&&(Ee={type:void 0,texture:void 0},re[de]=Ee),(Ee.type!==O||Ee.texture!==le)&&(J!==de&&(r.activeTexture(de),J=de),r.bindTexture(O,le||G[O]),Ee.type=O,Ee.texture=le)}function I(){const O=re[J];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(O){W.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),W.copy(O))}function De(O){ue.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),ue.copy(O))}function Le(O,le){let de=l.get(le);de===void 0&&(de=new WeakMap,l.set(le,de));let Ee=de.get(O);Ee===void 0&&(Ee=r.getUniformBlockIndex(le,O.name),de.set(O,Ee))}function _e(O,le){const Ee=l.get(le).get(O);c.get(le)!==Ee&&(r.uniformBlockBinding(le,Ee,O.__bindingPointIndex),c.set(le,Ee))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},J=null,re={},u={},d=new WeakMap,m=[],g=null,_=!1,f=null,p=null,v=null,y=null,x=null,A=null,M=null,w=new Oe(0,0,0),V=0,E=!1,S=null,C=null,U=null,P=null,D=null,W.set(0,0,r.canvas.width,r.canvas.height),ue.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:ie,bindFramebuffer:me,drawBuffers:ce,useProgram:be,setBlending:Ke,setMaterial:Ue,setFlipSided:Pe,setCullFace:we,setLineWidth:tt,setPolygonOffset:Re,setScissorTest:ke,activeTexture:xt,bindTexture:pt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:ge,texImage3D:ne,updateUBOMapping:Le,uniformBlockBinding:_e,texStorage2D:se,texStorage3D:Me,texSubImage2D:B,texSubImage3D:Y,compressedTexSubImage2D:K,compressedTexSubImage3D:ve,scissor:pe,viewport:De,reset:We}}function uv(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):sr("canvas")}function _(I,T,j){let B=1;const Y=pt(I);if((Y.width>j||Y.height>j)&&(B=j/Math.max(Y.width,Y.height)),B<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(B*Y.width),ve=Math.floor(B*Y.height);u===void 0&&(u=g(K,ve));const se=T?g(K,ve):u;return se.width=K,se.height=ve,se.getContext("2d").drawImage(I,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+K+"x"+ve+")."),se}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),I;return I}function f(I){return I.generateMipmaps}function p(I){r.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,T,j,B,Y=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=T;if(T===r.RED&&(j===r.FLOAT&&(K=r.R32F),j===r.HALF_FLOAT&&(K=r.R16F),j===r.UNSIGNED_BYTE&&(K=r.R8)),T===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(K=r.R8UI),j===r.UNSIGNED_SHORT&&(K=r.R16UI),j===r.UNSIGNED_INT&&(K=r.R32UI),j===r.BYTE&&(K=r.R8I),j===r.SHORT&&(K=r.R16I),j===r.INT&&(K=r.R32I)),T===r.RG&&(j===r.FLOAT&&(K=r.RG32F),j===r.HALF_FLOAT&&(K=r.RG16F),j===r.UNSIGNED_BYTE&&(K=r.RG8)),T===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(K=r.RG8UI),j===r.UNSIGNED_SHORT&&(K=r.RG16UI),j===r.UNSIGNED_INT&&(K=r.RG32UI),j===r.BYTE&&(K=r.RG8I),j===r.SHORT&&(K=r.RG16I),j===r.INT&&(K=r.RG32I)),T===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(K=r.RGB8UI),j===r.UNSIGNED_SHORT&&(K=r.RGB16UI),j===r.UNSIGNED_INT&&(K=r.RGB32UI),j===r.BYTE&&(K=r.RGB8I),j===r.SHORT&&(K=r.RGB16I),j===r.INT&&(K=r.RGB32I)),T===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),j===r.UNSIGNED_INT&&(K=r.RGBA32UI),j===r.BYTE&&(K=r.RGBA8I),j===r.SHORT&&(K=r.RGBA16I),j===r.INT&&(K=r.RGBA32I)),T===r.RGB&&(j===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),T===r.RGBA){const ve=Y?co:et.getTransfer(B);j===r.FLOAT&&(K=r.RGBA32F),j===r.HALF_FLOAT&&(K=r.RGBA16F),j===r.UNSIGNED_BYTE&&(K=ve===lt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(I,T){let j;return I?T===null||T===Ii||T===$s?j=r.DEPTH24_STENCIL8:T===vn?j=r.DEPTH32F_STENCIL8:T===Qs&&(j=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ii||T===$s?j=r.DEPTH_COMPONENT24:T===vn?j=r.DEPTH_COMPONENT32F:T===Qs&&(j=r.DEPTH_COMPONENT16),j}function A(I,T){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==Bt&&I.minFilter!==$t?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function M(I){const T=I.target;T.removeEventListener("dispose",M),V(T),T.isVideoTexture&&h.delete(T)}function w(I){const T=I.target;T.removeEventListener("dispose",w),S(T)}function V(I){const T=n.get(I);if(T.__webglInit===void 0)return;const j=I.source,B=d.get(j);if(B){const Y=B[T.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(I),Object.keys(B).length===0&&d.delete(j)}n.remove(I)}function E(I){const T=n.get(I);r.deleteTexture(T.__webglTexture);const j=I.source,B=d.get(j);delete B[T.__cacheKey],o.memory.textures--}function S(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(T.__webglFramebuffer[B]))for(let Y=0;Y<T.__webglFramebuffer[B].length;Y++)r.deleteFramebuffer(T.__webglFramebuffer[B][Y]);else r.deleteFramebuffer(T.__webglFramebuffer[B]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[B])}else{if(Array.isArray(T.__webglFramebuffer))for(let B=0;B<T.__webglFramebuffer.length;B++)r.deleteFramebuffer(T.__webglFramebuffer[B]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let B=0;B<T.__webglColorRenderbuffer.length;B++)T.__webglColorRenderbuffer[B]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[B]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let B=0,Y=j.length;B<Y;B++){const K=n.get(j[B]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(j[B])}n.remove(I)}let C=0;function U(){C=0}function P(){const I=C;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),C+=1,I}function D(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function F(I,T){const j=n.get(I);if(I.isVideoTexture&&ke(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const B=I.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(j,I,T);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+T)}function N(I,T){const j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){G(j,I,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+T)}function $(I,T){const j=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){G(j,I,T);return}t.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+T)}function z(I,T){const j=n.get(I);if(I.version>0&&j.__version!==I.version){k(j,I,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+T)}const J={[_s]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[oo]:r.MIRRORED_REPEAT},re={[Bt]:r.NEAREST,[au]:r.NEAREST_MIPMAP_NEAREST,[Ys]:r.NEAREST_MIPMAP_LINEAR,[$t]:r.LINEAR,[$r]:r.LINEAR_MIPMAP_NEAREST,[Xn]:r.LINEAR_MIPMAP_LINEAR},fe={[$d]:r.NEVER,[of]:r.ALWAYS,[ef]:r.LESS,[_u]:r.LEQUAL,[tf]:r.EQUAL,[rf]:r.GEQUAL,[nf]:r.GREATER,[sf]:r.NOTEQUAL};function oe(I,T){if(T.type===vn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$t||T.magFilter===$r||T.magFilter===Ys||T.magFilter===Xn||T.minFilter===$t||T.minFilter===$r||T.minFilter===Ys||T.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,J[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,J[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,J[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,re[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,re[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bt||T.minFilter!==Ys&&T.minFilter!==Xn||T.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function W(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",M));const B=T.source;let Y=d.get(B);Y===void 0&&(Y={},d.set(B,Y));const K=D(T);if(K!==I.__cacheKey){Y[K]===void 0&&(Y[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Y[K].usedTimes++;const ve=Y[I.__cacheKey];ve!==void 0&&(Y[I.__cacheKey].usedTimes--,ve.usedTimes===0&&E(T)),I.__cacheKey=K,I.__webglTexture=Y[K].texture}return j}function ue(I,T,j){return Math.floor(Math.floor(I/j)/T)}function te(I,T,j,B){const K=I.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,j,B,T.data);else{K.sort((ne,pe)=>ne.start-pe.start);let ve=0;for(let ne=1;ne<K.length;ne++){const pe=K[ve],De=K[ne],Le=pe.start+pe.count,_e=ue(De.start,T.width,4),We=ue(pe.start,T.width,4);De.start<=Le+1&&_e===We&&ue(De.start+De.count-1,T.width,4)===_e?pe.count=Math.max(pe.count,De.start+De.count-pe.start):(++ve,K[ve]=De)}K.length=ve+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Me=r.getParameter(r.UNPACK_SKIP_PIXELS),ge=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ne=0,pe=K.length;ne<pe;ne++){const De=K[ne],Le=Math.floor(De.start/4),_e=Math.ceil(De.count/4),We=Le%T.width,O=Math.floor(Le/T.width),le=_e,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,We,O,le,de,j,B,T.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),r.pixelStorei(r.UNPACK_SKIP_ROWS,ge)}}function G(I,T,j){let B=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(B=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(B=r.TEXTURE_3D);const Y=W(I,T),K=T.source;t.bindTexture(B,I.__webglTexture,r.TEXTURE0+j);const ve=n.get(K);if(K.version!==ve.__version||Y===!0){t.activeTexture(r.TEXTURE0+j);const se=et.getPrimaries(et.workingColorSpace),Me=T.colorSpace===oi?null:et.getPrimaries(T.colorSpace),ge=T.colorSpace===oi||se===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let ne=_(T.image,!1,i.maxTextureSize);ne=xt(T,ne);const pe=s.convert(T.format,T.colorSpace),De=s.convert(T.type);let Le=y(T.internalFormat,pe,De,T.colorSpace,T.isVideoTexture);oe(B,T);let _e;const We=T.mipmaps,O=T.isVideoTexture!==!0,le=ve.__version===void 0||Y===!0,de=K.dataReady,Ee=A(T,ne);if(T.isDepthTexture)Le=x(T.format===tr,T.type),le&&(O?t.texStorage2D(r.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,pe,De,null));else if(T.isDataTexture)if(We.length>0){O&&le&&t.texStorage2D(r.TEXTURE_2D,Ee,Le,We[0].width,We[0].height);for(let ae=0,ee=We.length;ae<ee;ae++)_e=We[ae],O?de&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,_e.width,_e.height,pe,De,_e.data):t.texImage2D(r.TEXTURE_2D,ae,Le,_e.width,_e.height,0,pe,De,_e.data);T.generateMipmaps=!1}else O?(le&&t.texStorage2D(r.TEXTURE_2D,Ee,Le,ne.width,ne.height),de&&te(T,ne,pe,De)):t.texImage2D(r.TEXTURE_2D,0,Le,ne.width,ne.height,0,pe,De,ne.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Le,We[0].width,We[0].height,ne.depth);for(let ae=0,ee=We.length;ae<ee;ae++)if(_e=We[ae],T.format!==ln)if(pe!==null)if(O){if(de)if(T.layerUpdates.size>0){const xe=Xl(_e.width,_e.height,T.format,T.type);for(const Ne of T.layerUpdates){const nt=_e.data.subarray(Ne*xe/_e.data.BYTES_PER_ELEMENT,(Ne+1)*xe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,Ne,_e.width,_e.height,1,pe,nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,ne.depth,pe,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Le,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,ne.depth,pe,De,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Le,_e.width,_e.height,ne.depth,0,pe,De,_e.data)}else{O&&le&&t.texStorage2D(r.TEXTURE_2D,Ee,Le,We[0].width,We[0].height);for(let ae=0,ee=We.length;ae<ee;ae++)_e=We[ae],T.format!==ln?pe!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,_e.width,_e.height,pe,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,_e.width,_e.height,pe,De,_e.data):t.texImage2D(r.TEXTURE_2D,ae,Le,_e.width,_e.height,0,pe,De,_e.data)}else if(T.isDataArrayTexture)if(O){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,Le,ne.width,ne.height,ne.depth),de)if(T.layerUpdates.size>0){const ae=Xl(ne.width,ne.height,T.format,T.type);for(const ee of T.layerUpdates){const xe=ne.data.subarray(ee*ae/ne.data.BYTES_PER_ELEMENT,(ee+1)*ae/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,ne.width,ne.height,1,pe,De,xe)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,De,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,pe,De,ne.data);else if(T.isData3DTexture)O?(le&&t.texStorage3D(r.TEXTURE_3D,Ee,Le,ne.width,ne.height,ne.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,De,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,pe,De,ne.data);else if(T.isFramebufferTexture){if(le)if(O)t.texStorage2D(r.TEXTURE_2D,Ee,Le,ne.width,ne.height);else{let ae=ne.width,ee=ne.height;for(let xe=0;xe<Ee;xe++)t.texImage2D(r.TEXTURE_2D,xe,Le,ae,ee,0,pe,De,null),ae>>=1,ee>>=1}}else if(We.length>0){if(O&&le){const ae=pt(We[0]);t.texStorage2D(r.TEXTURE_2D,Ee,Le,ae.width,ae.height)}for(let ae=0,ee=We.length;ae<ee;ae++)_e=We[ae],O?de&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,pe,De,_e):t.texImage2D(r.TEXTURE_2D,ae,Le,pe,De,_e);T.generateMipmaps=!1}else if(O){if(le){const ae=pt(ne);t.texStorage2D(r.TEXTURE_2D,Ee,Le,ae.width,ae.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,De,ne)}else t.texImage2D(r.TEXTURE_2D,0,Le,pe,De,ne);f(T)&&p(B),ve.__version=K.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function k(I,T,j){if(T.image.length!==6)return;const B=W(I,T),Y=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+j);const K=n.get(Y);if(Y.version!==K.__version||B===!0){t.activeTexture(r.TEXTURE0+j);const ve=et.getPrimaries(et.workingColorSpace),se=T.colorSpace===oi?null:et.getPrimaries(T.colorSpace),Me=T.colorSpace===oi||ve===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!ge&&!ne?pe[ee]=_(T.image[ee],!0,i.maxCubemapSize):pe[ee]=ne?T.image[ee].image:T.image[ee],pe[ee]=xt(T,pe[ee]);const De=pe[0],Le=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),We=y(T.internalFormat,Le,_e,T.colorSpace),O=T.isVideoTexture!==!0,le=K.__version===void 0||B===!0,de=Y.dataReady;let Ee=A(T,De);oe(r.TEXTURE_CUBE_MAP,T);let ae;if(ge){O&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,We,De.width,De.height);for(let ee=0;ee<6;ee++){ae=pe[ee].mipmaps;for(let xe=0;xe<ae.length;xe++){const Ne=ae[xe];T.format!==ln?Le!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Ne.width,Ne.height,Le,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,We,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,Ne.width,Ne.height,Le,_e,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,We,Ne.width,Ne.height,0,Le,_e,Ne.data)}}}else{if(ae=T.mipmaps,O&&le){ae.length>0&&Ee++;const ee=pt(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ee,We,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ne){O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,Le,_e,pe[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,pe[ee].width,pe[ee].height,0,Le,_e,pe[ee].data);for(let xe=0;xe<ae.length;xe++){const nt=ae[xe].image[ee].image;O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,nt.width,nt.height,Le,_e,nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,We,nt.width,nt.height,0,Le,_e,nt.data)}}else{O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,_e,pe[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,We,Le,_e,pe[ee]);for(let xe=0;xe<ae.length;xe++){const Ne=ae[xe];O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,Le,_e,Ne.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,We,Le,_e,Ne.image[ee])}}}f(T)&&p(r.TEXTURE_CUBE_MAP),K.__version=Y.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ie(I,T,j,B,Y,K){const ve=s.convert(j.format,j.colorSpace),se=s.convert(j.type),Me=y(j.internalFormat,ve,se,j.colorSpace),ge=n.get(T),ne=n.get(j);if(ne.__renderTarget=T,!ge.__hasExternalTextures){const pe=Math.max(1,T.width>>K),De=Math.max(1,T.height>>K);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,K,Me,pe,De,T.depth,0,ve,se,null):t.texImage2D(Y,K,Me,pe,De,0,ve,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Re(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,B,Y,ne.__webglTexture,0,tt(T)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,B,Y,ne.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(I,T,j){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){const B=T.depthTexture,Y=B&&B.isDepthTexture?B.type:null,K=x(T.stencilBuffer,Y),ve=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=tt(T);Re(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,K,T.width,T.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,K,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,K,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,I)}else{const B=T.textures;for(let Y=0;Y<B.length;Y++){const K=B[Y],ve=s.convert(K.format,K.colorSpace),se=s.convert(K.type),Me=y(K.internalFormat,ve,se,K.colorSpace),ge=tt(T);j&&Re(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Me,T.width,T.height):Re(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ge,Me,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Me,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(T.depthTexture);B.__renderTarget=T,(!B.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const Y=B.__webglTexture,K=tt(T);if(T.depthTexture.format===er)Re(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Y,0);else if(T.depthTexture.format===tr)Re(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function be(I){const T=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const B=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),B){const Y=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,B.removeEventListener("dispose",Y)};B.addEventListener("dispose",Y),T.__depthDisposeCallback=Y}T.__boundDepthTexture=B}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");const B=I.texture.mipmaps;B&&B.length>0?ce(T.__webglFramebuffer[0],I):ce(T.__webglFramebuffer,I)}else if(j){T.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[B]),T.__webglDepthbuffer[B]===void 0)T.__webglDepthbuffer[B]=r.createRenderbuffer(),me(T.__webglDepthbuffer[B],I,!1);else{const Y=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer[B];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,K)}}else{const B=I.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),me(T.__webglDepthbuffer,I,!1);else{const Y=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Y,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function je(I,T,j){const B=n.get(I);T!==void 0&&ie(B.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&be(I)}function L(I){const T=I.texture,j=n.get(I),B=n.get(T);I.addEventListener("dispose",w);const Y=I.textures,K=I.isWebGLCubeRenderTarget===!0,ve=Y.length>1;if(ve||(B.__webglTexture===void 0&&(B.__webglTexture=r.createTexture()),B.__version=T.version,o.memory.textures++),K){j.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[se]=[];for(let Me=0;Me<T.mipmaps.length;Me++)j.__webglFramebuffer[se][Me]=r.createFramebuffer()}else j.__webglFramebuffer[se]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)j.__webglFramebuffer[se]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(ve)for(let se=0,Me=Y.length;se<Me;se++){const ge=n.get(Y[se]);ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&Re(I)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let se=0;se<Y.length;se++){const Me=Y[se];j.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[se]);const ge=s.convert(Me.format,Me.colorSpace),ne=s.convert(Me.type),pe=y(Me.internalFormat,ge,ne,Me.colorSpace,I.isXRRenderTarget===!0),De=tt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,j.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),me(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture),oe(r.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)ie(j.__webglFramebuffer[se][Me],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else ie(j.__webglFramebuffer[se],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);f(T)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Me=Y.length;se<Me;se++){const ge=Y[se],ne=n.get(ge);let pe=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),oe(pe,ge),ie(j.__webglFramebuffer,I,ge,r.COLOR_ATTACHMENT0+se,pe,0),f(ge)&&p(pe)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(se=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,B.__webglTexture),oe(se,T),T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)ie(j.__webglFramebuffer[Me],I,T,r.COLOR_ATTACHMENT0,se,Me);else ie(j.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,se,0);f(T)&&p(se),t.unbindTexture()}I.depthBuffer&&be(I)}function Ke(I){const T=I.textures;for(let j=0,B=T.length;j<B;j++){const Y=T[j];if(f(Y)){const K=v(I),ve=n.get(Y).__webglTexture;t.bindTexture(K,ve),p(K),t.unbindTexture()}}}const Ue=[],Pe=[];function we(I){if(I.samples>0){if(Re(I)===!1){const T=I.textures,j=I.width,B=I.height;let Y=r.COLOR_BUFFER_BIT;const K=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(I),se=T.length>1;if(se)for(let ge=0;ge<T.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Me=I.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);const ne=n.get(T[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,j,B,0,0,j,B,Y,r.NEAREST),c===!0&&(Ue.length=0,Pe.length=0,Ue.push(r.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ue.push(K),Pe.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let ge=0;ge<T.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,ve.__webglColorRenderbuffer[ge]);const ne=n.get(T[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function tt(I){return Math.min(i.maxSamples,I.samples)}function Re(I){const T=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function xt(I,T){const j=I.colorSpace,B=I.format,Y=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==zt&&j!==oi&&(et.getTransfer(j)===lt?(B!==ln||Y!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function pt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=$,this.setTextureCube=z,this.rebindTextures=je,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Re}function dv(r,e){function t(n,i=oi){let s;const o=et.getTransfer(i);if(n===In)return r.UNSIGNED_BYTE;if(n===yc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Mc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===uu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===cu)return r.BYTE;if(n===lu)return r.SHORT;if(n===Qs)return r.UNSIGNED_SHORT;if(n===xc)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===vn)return r.FLOAT;if(n===ar)return r.HALF_FLOAT;if(n===du)return r.ALPHA;if(n===fu)return r.RGB;if(n===ln)return r.RGBA;if(n===er)return r.DEPTH_COMPONENT;if(n===tr)return r.DEPTH_STENCIL;if(n===Ac)return r.RED;if(n===Sc)return r.RED_INTEGER;if(n===pu)return r.RG;if(n===Ec)return r.RG_INTEGER;if(n===bc)return r.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ra||n===Ca||n===Va||n===Ia)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ca)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Da)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pa||n===La)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Da)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Ua||n===qa||n===Fa||n===Ba||n===Oa||n===za||n===ka||n===Ha||n===Ga||n===Wa||n===Xa||n===Ya||n===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Na)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ya)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ka||n===Ja||n===Za)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ka)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ja)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===$a||n===ec||n===tc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Uu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pi({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new _o(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gv extends Di{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null;const _=typeof XRWebGLBinding<"u",f=new mv,p={},v=t.getContextAttributes();let y=null,x=null;const A=[],M=[],w=new He;let V=null;const E=new qt;E.viewport=new ot;const S=new qt;S.viewport=new ot;const C=[E,S],U=new bp;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let k=A[G];return k===void 0&&(k=new zo,A[G]=k),k.getTargetRaySpace()},this.getControllerGrip=function(G){let k=A[G];return k===void 0&&(k=new zo,A[G]=k),k.getGripSpace()},this.getHand=function(G){let k=A[G];return k===void 0&&(k=new zo,A[G]=k),k.getHandSpace()};function F(G){const k=M.indexOf(G.inputSource);if(k===-1)return;const ie=A[k];ie!==void 0&&(ie.update(G.inputSource,G.frame,l||o),ie.dispatchEvent({type:G.type,data:G.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",$);for(let G=0;G<A.length;G++){const k=M[G];k!==null&&(M[G]=null,A[G].disconnect(k))}P=null,D=null,f.reset();for(const G in p)delete p[G];e.setRenderTarget(y),m=null,d=null,u=null,i=null,x=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",$),v.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,me=null,ce=null;v.depth&&(ce=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=v.stencil?tr:er,me=v.stencil?$s:Ii);const be={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Pi(d.textureWidth,d.textureHeight,{format:ln,type:In,depthTexture:new Nu(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Pi(m.framebufferWidth,m.framebufferHeight,{format:ln,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function $(G){for(let k=0;k<G.removed.length;k++){const ie=G.removed[k],me=M.indexOf(ie);me>=0&&(M[me]=null,A[me].disconnect(ie))}for(let k=0;k<G.added.length;k++){const ie=G.added[k];let me=M.indexOf(ie);if(me===-1){for(let be=0;be<A.length;be++)if(be>=M.length){M.push(ie),me=be;break}else if(M[be]===null){M[be]=ie,me=be;break}if(me===-1)break}const ce=A[me];ce&&ce.connect(ie)}}const z=new q,J=new q;function re(G,k,ie){z.setFromMatrixPosition(k.matrixWorld),J.setFromMatrixPosition(ie.matrixWorld);const me=z.distanceTo(J),ce=k.projectionMatrix.elements,be=ie.projectionMatrix.elements,je=ce[14]/(ce[10]-1),L=ce[14]/(ce[10]+1),Ke=(ce[9]+1)/ce[5],Ue=(ce[9]-1)/ce[5],Pe=(ce[8]-1)/ce[0],we=(be[8]+1)/be[0],tt=je*Pe,Re=je*we,ke=me/(-Pe+we),xt=ke*-Pe;if(k.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(xt),G.translateZ(ke),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ce[10]===-1)G.projectionMatrix.copy(k.projectionMatrix),G.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const pt=je+ke,I=L+ke,T=tt-xt,j=Re+(me-xt),B=Ke*L/I*pt,Y=Ue*L/I*pt;G.projectionMatrix.makePerspective(T,j,B,Y,pt,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function fe(G,k){k===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(k.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let k=G.near,ie=G.far;f.texture!==null&&(f.depthNear>0&&(k=f.depthNear),f.depthFar>0&&(ie=f.depthFar)),U.near=S.near=E.near=k,U.far=S.far=E.far=ie,(P!==U.near||D!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,D=U.far),U.layers.mask=G.layers.mask|6,E.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const me=G.parent,ce=U.cameras;fe(U,me);for(let be=0;be<ce.length;be++)fe(ce[be],me);ce.length===2?re(U,E,S):U.projectionMatrix.copy(E.projectionMatrix),oe(G,U,me)};function oe(G,k,ie){ie===null?G.matrix.copy(k.matrixWorld):(G.matrix.copy(ie.matrixWorld),G.matrix.invert(),G.matrix.multiply(k.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(k.projectionMatrix),G.projectionMatrixInverse.copy(k.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=vs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(U)},this.getCameraTexture=function(G){return p[G]};let W=null;function ue(G,k){if(h=k.getViewerPose(l||o),g=k,h!==null){const ie=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let me=!1;ie.length!==U.cameras.length&&(U.cameras.length=0,me=!0);for(let L=0;L<ie.length;L++){const Ke=ie[L];let Ue=null;if(m!==null)Ue=m.getViewport(Ke);else{const we=u.getViewSubImage(d,Ke);Ue=we.viewport,L===0&&(e.setRenderTargetTextures(x,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(x))}let Pe=C[L];Pe===void 0&&(Pe=new qt,Pe.layers.enable(L),Pe.viewport=new ot,C[L]=Pe),Pe.matrix.fromArray(Ke.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ke.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),L===0&&(U.matrix.copy(Pe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),me===!0&&U.cameras.push(Pe)}const ce=i.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const L=u.getDepthInformation(ie[0]);L&&L.isValid&&L.texture&&f.init(L,i.renderState)}if(ce&&ce.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<ie.length;L++){const Ke=ie[L].camera;if(Ke){let Ue=p[Ke];Ue||(Ue=new Uu,p[Ke]=Ue);const Pe=u.getCameraImage(Ke);Ue.sourceTexture=Pe}}}}for(let ie=0;ie<A.length;ie++){const me=M[ie],ce=A[ie];me!==null&&ce!==void 0&&ce.update(me,k,l||o)}W&&W(G,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}const te=new Hu;te.setAnimationLoop(ue),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}}const Mi=new tn,_v=new Ge;function vv(r,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Su(r)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function i(f,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,x)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),_(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?c(f,p,v,y):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Ft&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Ft&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(f.envMap.value=y,Mi.copy(x),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),f.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Mi)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,v,y){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*v,f.scale.value=y*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,v){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function _(f,p){const v=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xv(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",f));const A=y.program;n.updateUBOMapping(v,A);const M=e.render.frame;s[v.id]!==M&&(d(v),s[v.id]=M)}function h(v){const y=u();v.__bindingPointIndex=y;const x=r.createBuffer(),A=v.__size,M=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,w=x.length;M<w;M++){const V=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,S=V.length;E<S;E++){const C=V[E];if(m(C,M,E,A)===!0){const U=C.__offset,P=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let F=0;F<P.length;F++){const N=P[F],$=_(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,U+D,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,y,x,A){const M=v.value,w=y+"_"+x;if(A[w]===void 0)return typeof M=="number"||typeof M=="boolean"?A[w]=M:A[w]=M.clone(),!0;{const V=A[w];if(typeof M=="number"||typeof M=="boolean"){if(V!==M)return A[w]=M,!0}else if(V.equals(M)===!1)return V.copy(M),!0}return!1}function g(v){const y=v.uniforms;let x=0;const A=16;for(let w=0,V=y.length;w<V;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,C=E.length;S<C;S++){const U=E[S],P=Array.isArray(U.value)?U.value:[U.value];for(let D=0,F=P.length;D<F;D++){const N=P[D],$=_(N),z=x%A,J=z%$.boundary,re=z+J;x+=J,re!==0&&A-re<$.storage&&(x+=A-re),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}const M=x%A;return M>0&&(x+=A-M),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function f(v){const y=v.target;y.removeEventListener("dispose",f);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:c,update:l,dispose:p}}class yv{constructor(e={}){const{canvas:t=Sf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let A=!1;this._outputColorSpace=Et;let M=0,w=0,V=null,E=-1,S=null;const C=new ot,U=new ot;let P=null;const D=new Oe(0);let F=0,N=t.width,$=t.height,z=1,J=null,re=null;const fe=new ot(0,0,N,$),oe=new ot(0,0,N,$);let W=!1;const ue=new Lc;let te=!1,G=!1;const k=new Ge,ie=new q,me=new ot,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function je(){return V===null?z:1}let L=n;function Ke(R,H){return t.getContext(R,H)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const H="webgl2";if(L=Ke(H,R),L===null)throw Ke(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,Pe,we,tt,Re,ke,xt,pt,I,T,j,B,Y,K,ve,se,Me,ge,ne,pe,De,Le,_e,We;function O(){Ue=new V_(L),Ue.init(),Le=new dv(L,Ue),Pe=new S_(L,Ue,e,Le),we=new hv(L,Ue),Pe.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),tt=new L_(L),Re=new Z0,ke=new uv(L,Ue,we,Re,Pe,Le,tt),xt=new b_(x),pt=new C_(x),I=new Bp(L),_e=new M_(L,I),T=new I_(L,I,tt,_e),j=new N_(L,T,I,tt),ne=new D_(L,Pe,ke),se=new E_(Re),B=new J0(x,xt,pt,Ue,Pe,_e,se),Y=new vv(x,Re),K=new $0,ve=new rv(Ue),ge=new y_(x,xt,pt,we,j,m,c),Me=new cv(x,j,Pe),We=new xv(L,tt,Pe,we),pe=new A_(L,Ue,tt),De=new P_(L,Ue,tt),tt.programs=B.programs,x.capabilities=Pe,x.extensions=Ue,x.properties=Re,x.renderLists=K,x.shadowMap=Me,x.state=we,x.info=tt}O();const le=new gv(x,L);this.xr=le,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(N,$,!1))},this.getSize=function(R){return R.set(N,$)},this.setSize=function(R,H,Z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,$=H,t.width=Math.floor(R*z),t.height=Math.floor(H*z),Z===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(N*z,$*z).floor()},this.setDrawingBufferSize=function(R,H,Z){N=R,$=H,z=Z,t.width=Math.floor(R*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(C)},this.getViewport=function(R){return R.copy(fe)},this.setViewport=function(R,H,Z,Q){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,H,Z,Q),we.viewport(C.copy(fe).multiplyScalar(z).round())},this.getScissor=function(R){return R.copy(oe)},this.setScissor=function(R,H,Z,Q){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,H,Z,Q),we.scissor(U.copy(oe).multiplyScalar(z).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(R){we.setScissorTest(W=R)},this.setOpaqueSort=function(R){J=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,Z=!0){let Q=0;if(R){let X=!1;if(V!==null){const he=V.texture.format;X=he===bc||he===Ec||he===Sc}if(X){const he=V.texture.type,Se=he===In||he===Ii||he===Qs||he===$s||he===yc||he===Mc,Ve=ge.getClearColor(),Ce=ge.getClearAlpha(),Be=Ve.r,ze=Ve.g,qe=Ve.b;Se?(g[0]=Be,g[1]=ze,g[2]=qe,g[3]=Ce,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=Be,_[1]=ze,_[2]=qe,_[3]=Ce,L.clearBufferiv(L.COLOR,0,_))}else Q|=L.COLOR_BUFFER_BIT}H&&(Q|=L.DEPTH_BUFFER_BIT),Z&&(Q|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ge.dispose(),K.dispose(),ve.dispose(),Re.dispose(),xt.dispose(),pt.dispose(),j.dispose(),_e.dispose(),We.dispose(),B.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ht),le.removeEventListener("sessionend",ur),An.stop()};function de(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=tt.autoReset,H=Me.enabled,Z=Me.autoUpdate,Q=Me.needsUpdate,X=Me.type;O(),tt.autoReset=R,Me.enabled=H,Me.autoUpdate=Z,Me.needsUpdate=Q,Me.type=X}function ae(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ee(R){const H=R.target;H.removeEventListener("dispose",ee),xe(H)}function xe(R){Ne(R),Re.remove(R)}function Ne(R){const H=Re.get(R).programs;H!==void 0&&(H.forEach(function(Z){B.releaseProgram(Z)}),R.isShaderMaterial&&B.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,Z,Q,X,he){H===null&&(H=ce);const Se=X.isMesh&&X.matrixWorld.determinant()<0,Ve=hd(R,H,Z,Q,X);we.setMaterial(Q,Se);let Ce=Z.index,Be=1;if(Q.wireframe===!0){if(Ce=T.getWireframeAttribute(Z),Ce===void 0)return;Be=2}const ze=Z.drawRange,qe=Z.attributes.position;let Qe=ze.start*Be,ct=(ze.start+ze.count)*Be;he!==null&&(Qe=Math.max(Qe,he.start*Be),ct=Math.min(ct,(he.start+he.count)*Be)),Ce!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ce.count)):qe!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,qe.count));const vt=ct-Qe;if(vt<0||vt===1/0)return;_e.setup(X,Q,Ve,Z,Ce);let ut,ht=pe;if(Ce!==null&&(ut=I.get(Ce),ht=De,ht.setIndex(ut)),X.isMesh)Q.wireframe===!0?(we.setLineWidth(Q.wireframeLinewidth*je()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(X.isLine){let Fe=Q.linewidth;Fe===void 0&&(Fe=1),we.setLineWidth(Fe*je()),X.isLineSegments?ht.setMode(L.LINES):X.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else X.isPoints?ht.setMode(L.POINTS):X.isSprite&&ht.setMode(L.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))ht.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Fe=X._multiDrawStarts,gt=X._multiDrawCounts,it=X._multiDrawCount,jt=Ce?I.get(Ce).bytesPerElement:1,Ui=Re.get(Q).currentProgram.getUniforms();for(let Kt=0;Kt<it;Kt++)Ui.setValue(L,"_gl_DrawID",Kt),ht.render(Fe[Kt]/jt,gt[Kt])}else if(X.isInstancedMesh)ht.renderInstances(Qe,vt,X.count);else if(Z.isInstancedBufferGeometry){const Fe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,gt=Math.min(Z.instanceCount,Fe);ht.renderInstances(Qe,vt,gt)}else ht.render(Qe,vt)};function nt(R,H,Z){R.transparent===!0&&R.side===Cn&&R.forceSinglePass===!1?(R.side=Ft,R.needsUpdate=!0,fr(R,H,Z),R.side=Kn,R.needsUpdate=!0,fr(R,H,Z),R.side=Cn):fr(R,H,Z)}this.compile=function(R,H,Z=null){Z===null&&(Z=R),p=ve.get(Z),p.init(H),y.push(p),Z.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),R!==Z&&R.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Q=new Set;return R.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const he=X.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Ve=he[Se];nt(Ve,Z,X),Q.add(Ve)}else nt(he,Z,X),Q.add(he)}),p=y.pop(),Q},this.compileAsync=function(R,H,Z=null){const Q=this.compile(R,H,Z);return new Promise(X=>{function he(){if(Q.forEach(function(Se){Re.get(Se).currentProgram.isReady()&&Q.delete(Se)}),Q.size===0){X(R);return}setTimeout(he,10)}Ue.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $e=null;function kt(R){$e&&$e(R)}function Ht(){An.stop()}function ur(){An.start()}const An=new Hu;An.setAnimationLoop(kt),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(R){$e=R,le.setAnimationLoop(R),R===null?An.stop():An.start()},le.addEventListener("sessionstart",Ht),le.addEventListener("sessionend",ur),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(H),H=le.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,H,V),p=ve.get(R,y.length),p.init(H),y.push(p),k.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ue.setFromProjectionMatrix(k,Vn,H.reversedDepth),G=this.localClippingEnabled,te=se.init(this.clippingPlanes,G),f=K.get(R,v.length),f.init(),v.push(f),le.enabled===!0&&le.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Ni(he,H,-1/0,x.sortObjects)}Ni(R,H,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(J,re),be=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,be&&ge.addToRenderList(f,R),this.info.render.frame++,te===!0&&se.beginShadows();const Z=p.state.shadowsArray;Me.render(Z,R,H),te===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=f.opaque,X=f.transmissive;if(p.setupLights(),H.isArrayCamera){const he=H.cameras;if(X.length>0)for(let Se=0,Ve=he.length;Se<Ve;Se++){const Ce=he[Se];Jc(Q,X,R,Ce)}be&&ge.render(R);for(let Se=0,Ve=he.length;Se<Ve;Se++){const Ce=he[Se];Kc(f,R,Ce,Ce.viewport)}}else X.length>0&&Jc(Q,X,R,H),be&&ge.render(R),Kc(f,R,H);V!==null&&w===0&&(ke.updateMultisampleRenderTarget(V),ke.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(x,R,H),_e.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],te===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?f=v[v.length-1]:f=null};function Ni(R,H,Z,Q){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){Q&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(k);const Se=j.update(R),Ve=R.material;Ve.visible&&f.push(R,Se,Ve,Z,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){const Se=j.update(R),Ve=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),me.copy(Se.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(k)),Array.isArray(Ve)){const Ce=Se.groups;for(let Be=0,ze=Ce.length;Be<ze;Be++){const qe=Ce[Be],Qe=Ve[qe.materialIndex];Qe&&Qe.visible&&f.push(R,Se,Qe,Z,me.z,qe)}}else Ve.visible&&f.push(R,Se,Ve,Z,me.z,null)}}const he=R.children;for(let Se=0,Ve=he.length;Se<Ve;Se++)Ni(he[Se],H,Z,Q)}function Kc(R,H,Z,Q){const X=R.opaque,he=R.transmissive,Se=R.transparent;p.setupLightsView(Z),te===!0&&se.setGlobalState(x.clippingPlanes,Z),Q&&we.viewport(C.copy(Q)),X.length>0&&dr(X,H,Z),he.length>0&&dr(he,H,Z),Se.length>0&&dr(Se,H,Z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Jc(R,H,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Pi(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?ar:In,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const he=p.state.transmissionRenderTarget[Q.id],Se=Q.viewport||C;he.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const Ve=x.getRenderTarget(),Ce=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(he),x.getClearColor(D),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),be&&ge.render(Z);const ze=x.toneMapping;x.toneMapping=fi;const qe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),te===!0&&se.setGlobalState(x.clippingPlanes,Q),dr(R,Z,Q),ke.updateMultisampleRenderTarget(he),ke.updateRenderTargetMipmap(he),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,vt=H.length;ct<vt;ct++){const ut=H[ct],ht=ut.object,Fe=ut.geometry,gt=ut.material,it=ut.group;if(gt.side===Cn&&ht.layers.test(Q.layers)){const jt=gt.side;gt.side=Ft,gt.needsUpdate=!0,Zc(ht,Z,Q,Fe,gt,it),gt.side=jt,gt.needsUpdate=!0,Qe=!0}}Qe===!0&&(ke.updateMultisampleRenderTarget(he),ke.updateRenderTargetMipmap(he))}x.setRenderTarget(Ve,Ce,Be),x.setClearColor(D,F),qe!==void 0&&(Q.viewport=qe),x.toneMapping=ze}function dr(R,H,Z){const Q=H.isScene===!0?H.overrideMaterial:null;for(let X=0,he=R.length;X<he;X++){const Se=R[X],Ve=Se.object,Ce=Se.geometry,Be=Se.group;let ze=Se.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Ve.layers.test(Z.layers)&&Zc(Ve,H,Z,Ce,ze,Be)}}function Zc(R,H,Z,Q,X,he){R.onBeforeRender(x,H,Z,Q,X,he),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(x,H,Z,Q,R,he),X.transparent===!0&&X.side===Cn&&X.forceSinglePass===!1?(X.side=Ft,X.needsUpdate=!0,x.renderBufferDirect(Z,H,Q,X,R,he),X.side=Kn,X.needsUpdate=!0,x.renderBufferDirect(Z,H,Q,X,R,he),X.side=Cn):x.renderBufferDirect(Z,H,Q,X,R,he),R.onAfterRender(x,H,Z,Q,X,he)}function fr(R,H,Z){H.isScene!==!0&&(H=ce);const Q=Re.get(R),X=p.state.lights,he=p.state.shadowsArray,Se=X.state.version,Ve=B.getParameters(R,X.state,he,H,Z),Ce=B.getProgramCacheKey(Ve);let Be=Q.programs;Q.environment=R.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(R.isMeshStandardMaterial?pt:xt).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",ee),Be=new Map,Q.programs=Be);let ze=Be.get(Ce);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===Se)return $c(R,Ve),ze}else Ve.uniforms=B.getUniforms(R),R.onBeforeCompile(Ve,x),ze=B.acquireProgram(Ve,Ce),Be.set(Ce,ze),Q.uniforms=Ve.uniforms;const qe=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(qe.clippingPlanes=se.uniform),$c(R,Ve),Q.needsLights=dd(R),Q.lightsStateVersion=Se,Q.needsLights&&(qe.ambientLightColor.value=X.state.ambient,qe.lightProbe.value=X.state.probe,qe.directionalLights.value=X.state.directional,qe.directionalLightShadows.value=X.state.directionalShadow,qe.spotLights.value=X.state.spot,qe.spotLightShadows.value=X.state.spotShadow,qe.rectAreaLights.value=X.state.rectArea,qe.ltc_1.value=X.state.rectAreaLTC1,qe.ltc_2.value=X.state.rectAreaLTC2,qe.pointLights.value=X.state.point,qe.pointLightShadows.value=X.state.pointShadow,qe.hemisphereLights.value=X.state.hemi,qe.directionalShadowMap.value=X.state.directionalShadowMap,qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,qe.spotShadowMap.value=X.state.spotShadowMap,qe.spotLightMatrix.value=X.state.spotLightMatrix,qe.spotLightMap.value=X.state.spotLightMap,qe.pointShadowMap.value=X.state.pointShadowMap,qe.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function Qc(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=so.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function $c(R,H){const Z=Re.get(R);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function hd(R,H,Z,Q,X){H.isScene!==!0&&(H=ce),ke.resetTextureUnits();const he=H.fog,Se=Q.isMeshStandardMaterial?H.environment:null,Ve=V===null?x.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:zt,Ce=(Q.isMeshStandardMaterial?pt:xt).get(Q.envMap||Se),Be=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ze=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),qe=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,ct=!!Z.morphAttributes.color;let vt=fi;Q.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(vt=x.toneMapping);const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=ut!==void 0?ut.length:0,Fe=Re.get(Q),gt=p.state.lights;if(te===!0&&(G===!0||R!==S)){const Lt=R===S&&Q.id===E;se.setState(Q,R,Lt)}let it=!1;Q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==gt.state.version||Fe.outputColorSpace!==Ve||X.isBatchedMesh&&Fe.batching===!1||!X.isBatchedMesh&&Fe.batching===!0||X.isBatchedMesh&&Fe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Fe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Fe.instancing===!1||!X.isInstancedMesh&&Fe.instancing===!0||X.isSkinnedMesh&&Fe.skinning===!1||!X.isSkinnedMesh&&Fe.skinning===!0||X.isInstancedMesh&&Fe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Fe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Fe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Fe.instancingMorph===!1&&X.morphTexture!==null||Fe.envMap!==Ce||Q.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==se.numPlanes||Fe.numIntersection!==se.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==ze||Fe.morphTargets!==qe||Fe.morphNormals!==Qe||Fe.morphColors!==ct||Fe.toneMapping!==vt||Fe.morphTargetsCount!==ht)&&(it=!0):(it=!0,Fe.__version=Q.version);let jt=Fe.currentProgram;it===!0&&(jt=fr(Q,H,X));let Ui=!1,Kt=!1,Cs=!1;const _t=jt.getUniforms(),sn=Fe.uniforms;if(we.useProgram(jt.program)&&(Ui=!0,Kt=!0,Cs=!0),Q.id!==E&&(E=Q.id,Kt=!0),Ui||S!==R){we.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",R.projectionMatrix),_t.setValue(L,"viewMatrix",R.matrixWorldInverse);const Gt=_t.map.cameraPosition;Gt!==void 0&&Gt.setValue(L,ie.setFromMatrixPosition(R.matrixWorld)),Pe.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&_t.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Kt=!0,Cs=!0)}if(X.isSkinnedMesh){_t.setOptional(L,X,"bindMatrix"),_t.setOptional(L,X,"bindMatrixInverse");const Lt=X.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),_t.setValue(L,"boneTexture",Lt.boneTexture,ke))}X.isBatchedMesh&&(_t.setOptional(L,X,"batchingTexture"),_t.setValue(L,"batchingTexture",X._matricesTexture,ke),_t.setOptional(L,X,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",X._indirectTexture,ke),_t.setOptional(L,X,"batchingColorTexture"),X._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",X._colorsTexture,ke));const rn=Z.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&ne.update(X,Z,jt),(Kt||Fe.receiveShadow!==X.receiveShadow)&&(Fe.receiveShadow=X.receiveShadow,_t.setValue(L,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(sn.envMap.value=Ce,sn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(sn.envMapIntensity.value=H.environmentIntensity),Kt&&(_t.setValue(L,"toneMappingExposure",x.toneMappingExposure),Fe.needsLights&&ud(sn,Cs),he&&Q.fog===!0&&Y.refreshFogUniforms(sn,he),Y.refreshMaterialUniforms(sn,Q,z,$,p.state.transmissionRenderTarget[R.id]),so.upload(L,Qc(Fe),sn,ke)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(so.upload(L,Qc(Fe),sn,ke),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&_t.setValue(L,"center",X.center),_t.setValue(L,"modelViewMatrix",X.modelViewMatrix),_t.setValue(L,"normalMatrix",X.normalMatrix),_t.setValue(L,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Lt=Q.uniformsGroups;for(let Gt=0,xo=Lt.length;Gt<xo;Gt++){const mi=Lt[Gt];We.update(mi,jt),We.bind(mi,jt)}}return jt}function ud(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function dd(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,H,Z){const Q=Re.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),Re.get(R.texture).__webglTexture=H,Re.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:Z,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){const Z=Re.get(R);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const fd=L.createFramebuffer();this.setRenderTarget=function(R,H=0,Z=0){V=R,M=H,w=Z;let Q=!0,X=null,he=!1,Se=!1;if(R){const Ce=Re.get(R);if(Ce.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),Q=!1;else if(Ce.__webglFramebuffer===void 0)ke.setupRenderTarget(R);else if(Ce.__hasExternalTextures)ke.rebindTextures(R,Re.get(R.texture).__webglTexture,Re.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const qe=R.depthTexture;if(Ce.__boundDepthTexture!==qe){if(qe!==null&&Re.has(qe)&&(R.width!==qe.image.width||R.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const ze=Re.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?X=ze[H][Z]:X=ze[H],he=!0):R.samples>0&&ke.useMultisampledRTT(R)===!1?X=Re.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[Z]:X=ze,C.copy(R.viewport),U.copy(R.scissor),P=R.scissorTest}else C.copy(fe).multiplyScalar(z).floor(),U.copy(oe).multiplyScalar(z).floor(),P=W;if(Z!==0&&(X=fd),we.bindFramebuffer(L.FRAMEBUFFER,X)&&Q&&we.drawBuffers(R,X),we.viewport(C),we.scissor(U),we.setScissorTest(P),he){const Ce=Re.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Z)}else if(Se){const Ce=H;for(let Be=0;Be<R.textures.length;Be++){const ze=Re.get(R.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,ze.__webglTexture,Z,Ce)}}else if(R!==null&&Z!==0){const Ce=Re.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ce.__webglTexture,Z)}E=-1},this.readRenderTargetPixels=function(R,H,Z,Q,X,he,Se,Ve=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce){we.bindFramebuffer(L.FRAMEBUFFER,Ce);try{const Be=R.textures[Ve],ze=Be.format,qe=Be.type;if(!Pe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Q&&Z>=0&&Z<=R.height-X&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ve),L.readPixels(H,Z,Q,X,Le.convert(ze),Le.convert(qe),he))}finally{const Be=V!==null?Re.get(V).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,H,Z,Q,X,he,Se,Ve=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Re.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Se!==void 0&&(Ce=Ce[Se]),Ce)if(H>=0&&H<=R.width-Q&&Z>=0&&Z<=R.height-X){we.bindFramebuffer(L.FRAMEBUFFER,Ce);const Be=R.textures[Ve],ze=Be.format,qe=Be.type;if(!Pe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ve),L.readPixels(H,Z,Q,X,Le.convert(ze),Le.convert(qe),0);const ct=V!==null?Re.get(V).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,ct);const vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ef(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Qe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Qe),L.deleteSync(vt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,Z=0){const Q=Math.pow(2,-Z),X=Math.floor(R.image.width*Q),he=Math.floor(R.image.height*Q),Se=H!==null?H.x:0,Ve=H!==null?H.y:0;ke.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Se,Ve,X,he),we.unbindTexture()};const pd=L.createFramebuffer(),md=L.createFramebuffer();this.copyTextureToTexture=function(R,H,Z=null,Q=null,X=0,he=null){he===null&&(X!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=X,X=0):he=0);let Se,Ve,Ce,Be,ze,qe,Qe,ct,vt;const ut=R.isCompressedTexture?R.mipmaps[he]:R.image;if(Z!==null)Se=Z.max.x-Z.min.x,Ve=Z.max.y-Z.min.y,Ce=Z.isBox3?Z.max.z-Z.min.z:1,Be=Z.min.x,ze=Z.min.y,qe=Z.isBox3?Z.min.z:0;else{const rn=Math.pow(2,-X);Se=Math.floor(ut.width*rn),Ve=Math.floor(ut.height*rn),R.isDataArrayTexture?Ce=ut.depth:R.isData3DTexture?Ce=Math.floor(ut.depth*rn):Ce=1,Be=0,ze=0,qe=0}Q!==null?(Qe=Q.x,ct=Q.y,vt=Q.z):(Qe=0,ct=0,vt=0);const ht=Le.convert(H.format),Fe=Le.convert(H.type);let gt;H.isData3DTexture?(ke.setTexture3D(H,0),gt=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ke.setTexture2DArray(H,0),gt=L.TEXTURE_2D_ARRAY):(ke.setTexture2D(H,0),gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);const it=L.getParameter(L.UNPACK_ROW_LENGTH),jt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ui=L.getParameter(L.UNPACK_SKIP_PIXELS),Kt=L.getParameter(L.UNPACK_SKIP_ROWS),Cs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Be),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,qe);const _t=R.isDataArrayTexture||R.isData3DTexture,sn=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){const rn=Re.get(R),Lt=Re.get(H),Gt=Re.get(rn.__renderTarget),xo=Re.get(Lt.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,Gt.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,xo.__webglFramebuffer);for(let mi=0;mi<Ce;mi++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(R).__webglTexture,X,qe+mi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(H).__webglTexture,he,vt+mi)),L.blitFramebuffer(Be,ze,Se,Ve,Qe,ct,Se,Ve,L.DEPTH_BUFFER_BIT,L.NEAREST);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(X!==0||R.isRenderTargetTexture||Re.has(R)){const rn=Re.get(R),Lt=Re.get(H);we.bindFramebuffer(L.READ_FRAMEBUFFER,pd),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,md);for(let Gt=0;Gt<Ce;Gt++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,X,qe+Gt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,X),sn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Lt.__webglTexture,he,vt+Gt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Lt.__webglTexture,he),X!==0?L.blitFramebuffer(Be,ze,Se,Ve,Qe,ct,Se,Ve,L.COLOR_BUFFER_BIT,L.NEAREST):sn?L.copyTexSubImage3D(gt,he,Qe,ct,vt+Gt,Be,ze,Se,Ve):L.copyTexSubImage2D(gt,he,Qe,ct,Be,ze,Se,Ve);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else sn?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(gt,he,Qe,ct,vt,Se,Ve,Ce,ht,Fe,ut.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(gt,he,Qe,ct,vt,Se,Ve,Ce,ht,ut.data):L.texSubImage3D(gt,he,Qe,ct,vt,Se,Ve,Ce,ht,Fe,ut):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Qe,ct,Se,Ve,ht,Fe,ut.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Qe,ct,ut.width,ut.height,ht,ut.data):L.texSubImage2D(L.TEXTURE_2D,he,Qe,ct,Se,Ve,ht,Fe,ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,jt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ui),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Cs),he===0&&H.generateMipmaps&&L.generateMipmap(gt),we.unbindTexture()},this.initRenderTarget=function(R){Re.get(R).__webglFramebuffer===void 0&&ke.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ke.setTextureCube(R,0):R.isData3DTexture?ke.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ke.setTexture2DArray(R,0):ke.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){M=0,w=0,V=null,we.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class xn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new b);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new b);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new xn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],d=n[6],m=n[7],g=n[8],_=i[0],f=i[1],p=i[2],v=i[3],y=i[4],x=i[5],A=i[6],M=i[7],w=i[8];return s[0]=o*_+a*v+c*A,s[1]=o*f+a*y+c*M,s[2]=o*p+a*x+c*w,s[3]=l*_+h*v+u*A,s[4]=l*f+h*y+u*M,s[5]=l*p+h*x+u*w,s[6]=d*_+m*v+g*A,s[7]=d*f+m*y+g*M,s[8]=d*p+m*x+g*w,t}scale(e,t){t===void 0&&(t=new xn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new b);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=e.x,s[7]=e.y,s[11]=e.z;let c=3;const l=c;let h;const u=4;let d;do{if(o=l-c,s[o+i*o]===0){for(a=o+1;a<l;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<l;a++){const m=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*m;while(--h)}}while(--c);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new xn);const t=3,n=6,i=Mv;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const c=a;let l;const h=n;let u;do{if(s=c-a,i[s+n*s]===0){for(o=s+1;o<c;o++)if(i[s+n*o]!==0){l=h;do u=h-l,i[u+n*s]+=i[u+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<c;o++){const d=i[s+n*o]/i[s+n*s];l=h;do u=h-l,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--l)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];l=n;do u=n-l,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--l)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];l=n;do u=n-l,i[u+n*s]=i[u+n*s]*d;while(--l)}while(s--);s=2;do{o=2;do{if(u=i[t+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,u)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,c=i+i,l=t*o,h=t*a,u=t*c,d=n*a,m=n*c,g=i*c,_=s*o,f=s*a,p=s*c,v=this.elements;return v[0]=1-(d+g),v[1]=h-p,v[2]=u+f,v[3]=h+p,v[4]=1-(l+g),v[5]=m-_,v[6]=u-f,v[7]=m+_,v[8]=1-(l+d),this}transpose(e){e===void 0&&(e=new xn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Mv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new b);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,c=this.z;return t.x=a*s-c*i,t.y=c*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new b(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new b(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new xn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new b);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new b);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new b),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new b),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new b),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Av,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=Sv;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(gh),gh.almostEquals(e,t)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Av=new b,Sv=new b,gh=new b;class nn{constructor(e){e===void 0&&(e={}),this.lowerBound=new b,this.upperBound=new b,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let c=1;c<e.length;c++){let l=e[c];a&&(a.vmult(l,_h),l=_h),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new nn().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,c=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&c}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,c){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(e,t){const n=vh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,h,u);for(let d=0;d!==8;d++){const m=n[d];e.pointToLocal(m,m)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=vh,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,c,l,h,u);for(let d=0;d!==8;d++){const m=n[d];e.pointToWorld(m,m)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,d));return!(g<0||m>g)}}const _h=new b,vh=[new b,new b,new b,new b,new b,new b,new b,new b];class xh{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ju{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class At{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new b),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Ev,i=bv;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new At);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,c=e.y,l=e.z,h=e.w;return t.x=n*h+o*a+i*l-s*c,t.y=i*h+o*c+s*a-n*l,t.z=s*h+o*l+n*c-i*a,t.w=o*h-n*a-i*c-s*l,t}inverse(e){e===void 0&&(e=new At);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new At),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new b);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*s-c*i,u=l*i+c*n-o*s,d=l*s+o*i-a*n,m=-o*n-a*i-c*s;return t.x=h*l+m*-o+u*-c-d*-a,t.y=u*l+m*-a+d*-o-h*-c,t.z=d*l+m*-c+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,c=this.z,l=this.w;switch(t){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,m=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*d-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*a*c,1-2*u-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),c=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+s*l*h,this.y=s*l*a+c*o*h,this.z=s*o*h-c*l*a,this.w=s*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-s*l*h,this.y=s*l*a-c*o*h,this.z=s*o*h+c*l*a,this.w=s*o*a+c*l*h),this}clone(){return new At(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new At);const i=this.x,s=this.y,o=this.z,a=this.w;let c=e.x,l=e.y,h=e.z,u=e.w,d,m,g,_,f;return m=i*c+s*l+o*h+a*u,m<0&&(m=-m,c=-c,l=-l,h=-h,u=-u),1-m>1e-6?(d=Math.acos(m),g=Math.sin(d),_=Math.sin((1-t)*d)/g,f=Math.sin(t*d)/g):(_=1-t,f=t),n.x=_*i+f*c,n.y=_*s+f*l,n.z=_*o+f*h,n.w=_*a+f*u,n}integrate(e,t,n,i){i===void 0&&(i=new At);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+o*h-a*l),i.y+=d*(o*u+a*c-s*h),i.z+=d*(a*u+s*l-o*c),i.w+=d*(-s*c-o*l-a*h),i}}const Ev=new b,bv=new b,wv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Te{constructor(e){e===void 0&&(e={}),this.id=Te.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Te.idCounter=0;Te.types=wv;class rt{constructor(e){e===void 0&&(e={}),this.position=new b,this.quaternion=new At,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return rt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return rt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new b),n.vsub(e,i),t.conjugate(yh),yh.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new b),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new b),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new b),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const yh=new At;class ds extends Te{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:Te.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;t[o[c]].vsub(t[o[l]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new b;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];ds.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new b,o=new b;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,c,l){const h=new b;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const _=h.dot(o);_>d&&(d=_,u=g)}const m=[];for(let g=0;g<n.faces[u].length;g++){const _=n.vertices[n.faces[u][g]],f=new b;f.copy(_),s.vmult(f,f),i.vadd(f,f),m.push(f)}u>=0&&this.clipFaceAgainstHull(o,e,t,m,a,c,l)}findSeparatingAxis(e,t,n,i,s,o,a,c){const l=new b,h=new b,u=new b,d=new b,m=new b,g=new b;let _=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let p=0;p!==f.uniqueAxes.length;p++){n.vmult(f.uniqueAxes[p],l);const v=f.testSepAxis(l,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(l))}else{const p=a?a.length:f.faces.length;for(let v=0;v<p;v++){const y=a?a[v]:v;l.copy(f.faceNormals[y]),n.vmult(l,l);const x=f.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(l))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],h);const v=f.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const p=c?c.length:e.faces.length;for(let v=0;v<p;v++){const y=c?c[v]:v;h.copy(e.faceNormals[y]),s.vmult(h,h);const x=f.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,o.copy(h))}}for(let p=0;p!==f.uniqueEdges.length;p++){n.vmult(f.uniqueEdges[p],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],m),d.cross(m,g),!g.almostZero()){g.normalize();const y=f.testSepAxis(g,e,t,n,i,s);if(y===!1)return!1;y<_&&(_=y,o.copy(g))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;ds.project(a,e,n,i,na),ds.project(t,e,s,o,ia);const c=na[0],l=na[1],h=ia[0],u=ia[1];if(c<u||h<l)return!1;const d=c-u,m=h-l;return d<m?d:m}calculateLocalInertia(e,t){const n=new b,i=new b;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const c=new b,l=new b,h=new b,u=new b,d=new b,m=new b,g=new b,_=new b,f=this,p=[],v=i,y=p;let x=-1,A=Number.MAX_VALUE;for(let S=0;S<f.faces.length;S++){c.copy(f.faceNormals[S]),n.vmult(c,c);const C=c.dot(e);C<A&&(A=C,x=S)}if(x<0)return;const M=f.faces[x];M.connectedFaces=[];for(let S=0;S<f.faces.length;S++)for(let C=0;C<f.faces[S].length;C++)M.indexOf(f.faces[S][C])!==-1&&S!==x&&M.connectedFaces.indexOf(S)===-1&&M.connectedFaces.push(S);const w=M.length;for(let S=0;S<w;S++){const C=f.vertices[M[S]],U=f.vertices[M[(S+1)%w]];C.vsub(U,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[x]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),m.copy(C),n.vmult(m,m),t.vadd(m,m);const P=M.connectedFaces[S];g.copy(this.faceNormals[P]);const D=this.getPlaneConstantOfFace(P);_.copy(g),n.vmult(_,_);const F=D-_.dot(t);for(this.clipFaceAgainstPlane(v,y,_,F);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const V=this.getPlaneConstantOfFace(x);_.copy(g),n.vmult(_,_);const E=V-_.dot(t);for(let S=0;S<v.length;S++){let C=_.dot(v[S])+E;if(C<=s&&(console.log(`clamped: depth=${C} to minDist=${s}`),C=s),C<=o){const U=v[S];if(C<=1e-6){const P={point:U,normal:_,depth:C};a.push(P)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let c=e[e.length-1],l=e[0];s=n.dot(c)+i;for(let h=0;h<a;h++){if(l=e[h],o=n.dot(l)+i,s<0)if(o<0){const u=new b;u.copy(l),t.push(u)}else{const u=new b;c.lerp(l,s/(s-o),u),t.push(u)}else if(o<0){const u=new b;c.lerp(l,s/(s-o),u),t.push(u),t.push(l)}c=l,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,c,l,h,u,d=new b;for(let m=0;m<s.length;m++){d.copy(s[m]),t.vmult(d,d),e.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,c),i.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new b);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new b;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=t[n[o][0]],l=new b;e.vsub(c,l);const h=a.dot(l),u=new b;s.vsub(c,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,a=Tv;let c=0,l=0;const h=Rv,u=e.vertices;h.setZero(),rt.vectorToLocalFrame(n,i,t,a),rt.pointToLocalFrame(n,i,h,h);const d=h.dot(a);l=c=u[0].dot(a);for(let m=1;m<o;m++){const g=u[m].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=d,c-=d,l>c){const m=l;l=c,c=m}s[0]=c,s[1]=l}}const na=[],ia=[];new b;const Tv=new b,Rv=new b;class Rs extends Te{constructor(e){super({type:Te.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=b,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new ds({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new b),Rs.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ni.set(s[o][0],s[o][1],s[o][2]),t.vmult(ni,ni),e.vadd(ni,ni),n(ni.x,ni.y,ni.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Sn[0].set(s.x,s.y,s.z),Sn[1].set(-s.x,s.y,s.z),Sn[2].set(-s.x,-s.y,s.z),Sn[3].set(-s.x,-s.y,-s.z),Sn[4].set(s.x,-s.y,-s.z),Sn[5].set(s.x,s.y,-s.z),Sn[6].set(-s.x,s.y,-s.z),Sn[7].set(s.x,-s.y,s.z);const o=Sn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=Sn[a];t.vmult(c,c),e.vadd(c,c);const l=c.x,h=c.y,u=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),u>i.z&&(i.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const ni=new b,Sn=[new b,new b,new b,new b,new b,new b,new b,new b],Wc={DYNAMIC:1,STATIC:2,KINEMATIC:4},Xc={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ae extends ju{constructor(e){e===void 0&&(e={}),super(),this.id=Ae.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?Ae.STATIC:Ae.DYNAMIC,typeof e.type==typeof Ae.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=Ae.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new At,this.initQuaternion=new At,this.previousQuaternion=new At,this.interpolatedQuaternion=new At,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new xn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new xn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new nn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=Ae.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ae.SLEEPING&&this.dispatchEvent(Ae.wakeupEvent)}sleep(){this.sleepState=Ae.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===Ae.AWAKE&&n<i?(this.sleepState=Ae.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ae.sleepyEvent)):t===Ae.SLEEPY&&n>i?this.wakeUp():t===Ae.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ae.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ae.SLEEPING||this.type===Ae.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new b),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new b),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new b,s=new At;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Cv,o=Vv,a=this.quaternion,c=this.aabb,l=Iv;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Pv,i=Lv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new b),this.type!==Ae.DYNAMIC)return;this.sleepState===Ae.SLEEPING&&this.wakeUp();const n=Dv;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new b),this.type!==Ae.DYNAMIC)return;const n=Nv,i=Uv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===Ae.DYNAMIC&&(this.sleepState===Ae.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new b),this.type!==Ae.DYNAMIC)return;this.sleepState===Ae.SLEEPING&&this.wakeUp();const n=t,i=qv;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Fv;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new b),this.type!==Ae.DYNAMIC)return;const n=Bv,i=Ov;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=zv;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rs.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new b;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ae.DYNAMIC||this.type===Ae.KINEMATIC)||this.sleepState===Ae.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,m=h*e;i.x+=a.x*m*d.x,i.y+=a.y*m*d.y,i.z+=a.z*m*d.z;const g=u.elements,_=this.angularFactor,f=c.x*_.x,p=c.y*_.y,v=c.z*_.z;s.x+=e*(g[0]*f+g[1]*p+g[2]*v),s.y+=e*(g[3]*f+g[4]*p+g[5]*v),s.z+=e*(g[6]*f+g[7]*p+g[8]*v),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ae.idCounter=0;Ae.COLLIDE_EVENT_NAME="collide";Ae.DYNAMIC=Wc.DYNAMIC;Ae.STATIC=Wc.STATIC;Ae.KINEMATIC=Wc.KINEMATIC;Ae.AWAKE=Xc.AWAKE;Ae.SLEEPY=Xc.SLEEPY;Ae.SLEEPING=Xc.SLEEPING;Ae.wakeupEvent={type:"wakeup"};Ae.sleepyEvent={type:"sleepy"};Ae.sleepEvent={type:"sleep"};const Cv=new b,Vv=new At,Iv=new nn,Pv=new xn,Lv=new xn;new xn;const Dv=new b,Nv=new b,Uv=new b,qv=new b,Fv=new b,Bv=new b,Ov=new b,zv=new b;class kv{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&Ae.STATIC)!==0||e.sleepState===Ae.SLEEPING)&&((t.type&Ae.STATIC)!==0||t.sleepState===Ae.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Hv;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Gv,i=Wv,s=Xv,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=s[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];e.push(i[l]),t.push(s[l]),delete n[c]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new b;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Hv=new b;new b;new At;new b;const Gv={keys:[]},Wv=[],Xv=[];new b;new b;new b;class Yv extends kv{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let c=0;c!==s;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class fo{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let Ku,Ju,Zu,Qu,$u,ed,td;const Yc={CLOSEST:1,ANY:2,ALL:4};Ku=Te.types.SPHERE;Ju=Te.types.PLANE;Zu=Te.types.BOX;Qu=Te.types.CYLINDER;$u=Te.types.CONVEXPOLYHEDRON;ed=Te.types.HEIGHTFIELD;td=Te.types.TRIMESH;class Mt{get[Ku](){return this._intersectSphere}get[Ju](){return this._intersectPlane}get[Zu](){return this._intersectBox}get[Qu](){return this._intersectConvex}get[$u](){return this._intersectConvex}get[ed](){return this._intersectHeightfield}get[td](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new b),t===void 0&&(t=new b),this.from=e.clone(),this.to=t.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Mt.ANY,this.result=new fo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Mt.ANY,this.result=t.result||new fo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Mh),sa.length=0,e.broadphase.aabbQuery(e,Mh,sa),this.intersectBodies(sa),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=jv,s=Kv;for(let o=0,a=e.shapes.length;o<a;o++){const c=e.shapes[o];if(!(n&&!c.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(c,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(lx(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,c=this.direction,l=new b(0,0,1);t.vmult(l,l);const h=new b;o.vsub(n,h);const u=h.dot(l);a.vsub(n,h);const d=h.dot(l);if(u*d>0||o.distanceTo(a)<u)return;const m=l.dot(c);if(Math.abs(m)<this.precision)return;const g=new b,_=new b,f=new b;o.vsub(n,g);const p=-l.dot(g)/m;c.scale(p,_),o.vadd(_,f),this.reportIntersection(l,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Jv;o.from.copy(this.from),o.to.copy(this.to),rt.pointToLocalFrame(n,t,o.from,o.from),rt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=Zv;let c,l,h,u;c=l=0,h=u=e.data.length-1;const d=new nn;o.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let m=c;m<h;m++)for(let g=l;g<u;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,d),!!d.overlapsRay(o)){if(e.getConvexTrianglePillar(m,g,!1),rt.pointToWorldFrame(n,t,e.pillarOffset,Gr),this._intersectConvex(e.pillarConvex,t,Gr,i,s,Ah),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),rt.pointToWorldFrame(n,t,e.pillarOffset,Gr),this._intersectConvex(e.pillarConvex,t,Gr,i,s,Ah)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,c=e.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,d=h**2-4*l*u,m=Qv,g=$v;if(!(d<0))if(d===0)o.lerp(a,d,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const _=(-h-Math.sqrt(d))/(2*l),f=(-h+Math.sqrt(d))/(2*l);if(_>=0&&_<=1&&(o.lerp(a,_,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(a,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=ex,c=Sh,l=o&&o.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,m=this.direction,g=this.from,_=this.to,f=g.distanceTo(_),p=l?l.length:h.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const x=l?l[y]:y,A=h[x],M=d[x],w=t,V=n;c.copy(u[A[0]]),w.vmult(c,c),c.vadd(V,c),c.vsub(g,c),w.vmult(M,a);const E=m.dot(a);if(Math.abs(E)<this.precision)continue;const S=a.dot(c)/E;if(!(S<0)){m.scale(S,Wt),Wt.vadd(g,Wt),mn.copy(u[A[0]]),w.vmult(mn,mn),V.vadd(mn,mn);for(let C=1;!v.shouldStop&&C<A.length-1;C++){En.copy(u[A[C]]),bn.copy(u[A[C+1]]),w.vmult(En,En),w.vmult(bn,bn),V.vadd(En,En),V.vadd(bn,bn);const U=Wt.distanceTo(g);!(Mt.pointInTriangle(Wt,mn,En,bn)||Mt.pointInTriangle(Wt,En,mn,bn))||U>f||this.reportIntersection(a,Wt,s,i,x)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=tx,c=ax,l=cx,h=Sh,u=nx,d=ix,m=sx,g=ox,_=rx,f=e.indices;e.vertices;const p=this.from,v=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(t),rt.vectorToLocalFrame(n,t,y,u),rt.pointToLocalFrame(n,t,p,d),rt.pointToLocalFrame(n,t,v,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,m.vsub(d,u),u.normalize();const x=d.distanceSquared(m);e.tree.rayQuery(this,l,c);for(let A=0,M=c.length;!this.result.shouldStop&&A!==M;A++){const w=c[A];e.getNormal(w,a),e.getVertex(f[w*3],mn),mn.vsub(d,h);const V=u.dot(a),E=a.dot(h)/V;if(E<0)continue;u.scale(E,Wt),Wt.vadd(d,Wt),e.getVertex(f[w*3+1],En),e.getVertex(f[w*3+2],bn);const S=Wt.distanceSquared(d);!(Mt.pointInTriangle(Wt,En,mn,bn)||Mt.pointInTriangle(Wt,mn,En,bn))||S>x||(rt.vectorToWorldFrame(t,a,_),rt.pointToWorldFrame(n,t,Wt,g),this.reportIntersection(_,g,s,i,w))}c.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,c=o.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Mt.ALL:this.hasHit=!0,l.set(o,a,e,t,n,i,c),l.hasHit=!0,this.callback(l);break;case Mt.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c));break;case Mt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,e,t,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Vi),n.vsub(t,zs),e.vsub(t,ra);const s=Vi.dot(Vi),o=Vi.dot(zs),a=Vi.dot(ra),c=zs.dot(zs),l=zs.dot(ra);let h,u;return(h=c*a-o*l)>=0&&(u=s*l-o*a)>=0&&h+u<s*c-o*o}}Mt.CLOSEST=Yc.CLOSEST;Mt.ANY=Yc.ANY;Mt.ALL=Yc.ALL;const Mh=new nn,sa=[],zs=new b,ra=new b,jv=new b,Kv=new At,Wt=new b,mn=new b,En=new b,bn=new b;new b;new fo;const Ah={faceList:[0]},Gr=new b,Jv=new Mt,Zv=[],Qv=new b,$v=new b,ex=new b;new b;new b;const Sh=new b,tx=new b,nx=new b,ix=new b,sx=new b,rx=new b,ox=new b;new nn;const ax=[],cx=new rt,Vi=new b,Wr=new b;function lx(r,e,t){t.vsub(r,Vi);const n=Vi.dot(e);return e.scale(n,Wr),Wr.vadd(r,Wr),t.distanceTo(Wr)}class hx{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Eh{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class hr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=hr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Eh,this.jacobianElementB=new Eh,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,c)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,c)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,bh),a.scale(h,wh),n.invInertiaWorldSolve.vmult(o,Th),i.invInertiaWorldSolve.vmult(c,Rh),e.multiplyVectors(bh,Th)+t.multiplyVectors(wh,Rh)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=s+o;return a.vmult(e.rotational,Xr),l+=Xr.dot(e.rotational),c.vmult(t.rotational,Xr),l+=Xr.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=ux;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}hr.idCounter=0;const bh=new b,wh=new b,Th=new b,Rh=new b,Xr=new b,ux=new b;class dx extends hr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,c=fx,l=px,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=mx,_=this.jacobianElementA,f=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(_.spatial),c.negate(_.rotational),f.spatial.copy(p),f.rotational.copy(l),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const v=p.dot(g),y=this.restitution+1,x=y*d.dot(p)-y*h.dot(p)+m.dot(l)-u.dot(c),A=this.computeGiMf();return-v*t-x*n-e*A}getImpactVelocityAlongNormal(){const e=gx,t=_x,n=vx,i=xx,s=yx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const fx=new b,px=new b,mx=new b,gx=new b,_x=new b,vx=new b,xx=new b,yx=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Ch extends hr{constructor(e,t,n){super(e,t,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Mx,o=Ax,a=this.t;n.cross(a,s),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),s.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const Mx=new b,Ax=new b;class gn{constructor(e,t,n){n=hx.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=gn.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}gn.idCounter=0;class Rn{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Rn.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Rn.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Mt;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Sx extends Te{constructor(e){if(super({type:Te.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new b);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=e[c]-s,i[c]=e[c]+s}}}new b;new b;new b;new b;new b;new b;new b;new b;new b;class Ex extends Te{constructor(){super({type:Te.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new b),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){On.set(0,0,1),t.vmult(On,On);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),On.x===1?i.x=e.x:On.x===-1&&(n.x=e.x),On.y===1?i.y=e.y:On.y===-1&&(n.y=e.y),On.z===1?i.z=e.z:On.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const On=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new nn;new b;new nn;new b;new b;new b;new b;new b;new b;new b;new nn;new b;new rt;new nn;class bx{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class wx extends bx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=t.bodies,l=c.length,h=e;let u,d,m,g,_,f;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const p=Rx,v=Cx,y=Tx;p.length=a,v.length=a,y.length=a;for(let x=0;x!==a;x++){const A=o[x];y[x]=0,v[x]=A.computeB(h),p[x]=1/A.computeC()}if(a!==0){for(let M=0;M!==l;M++){const w=c[M],V=w.vlambda,E=w.wlambda;V.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let M=0;M!==a;M++){const w=o[M];u=v[M],d=p[M],f=y[M],_=w.computeGWlambda(),m=d*(u-_-w.eps*f),f+m<w.minForce?m=w.minForce-f:f+m>w.maxForce&&(m=w.maxForce-f),y[M]+=m,g+=m>0?m:-m,w.addToWlambda(m)}if(g*g<s)break}for(let M=0;M!==l;M++){const w=c[M],V=w.velocity,E=w.angularVelocity;w.vlambda.vmul(w.linearFactor,w.vlambda),V.vadd(w.vlambda,V),w.wlambda.vmul(w.angularFactor,w.wlambda),E.vadd(w.wlambda,E)}let x=o.length;const A=1/h;for(;x--;)o[x].multiplier=y[x]*A}return n}}const Tx=[],Rx=[],Cx=[];class Vx{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Ix extends Vx{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const dt={sphereSphere:Te.types.SPHERE,spherePlane:Te.types.SPHERE|Te.types.PLANE,boxBox:Te.types.BOX|Te.types.BOX,sphereBox:Te.types.SPHERE|Te.types.BOX,planeBox:Te.types.PLANE|Te.types.BOX,convexConvex:Te.types.CONVEXPOLYHEDRON,sphereConvex:Te.types.SPHERE|Te.types.CONVEXPOLYHEDRON,planeConvex:Te.types.PLANE|Te.types.CONVEXPOLYHEDRON,boxConvex:Te.types.BOX|Te.types.CONVEXPOLYHEDRON,sphereHeightfield:Te.types.SPHERE|Te.types.HEIGHTFIELD,boxHeightfield:Te.types.BOX|Te.types.HEIGHTFIELD,convexHeightfield:Te.types.CONVEXPOLYHEDRON|Te.types.HEIGHTFIELD,sphereParticle:Te.types.PARTICLE|Te.types.SPHERE,planeParticle:Te.types.PLANE|Te.types.PARTICLE,boxParticle:Te.types.BOX|Te.types.PARTICLE,convexParticle:Te.types.PARTICLE|Te.types.CONVEXPOLYHEDRON,cylinderCylinder:Te.types.CYLINDER,sphereCylinder:Te.types.SPHERE|Te.types.CYLINDER,planeCylinder:Te.types.PLANE|Te.types.CYLINDER,boxCylinder:Te.types.BOX|Te.types.CYLINDER,convexCylinder:Te.types.CONVEXPOLYHEDRON|Te.types.CYLINDER,heightfieldCylinder:Te.types.HEIGHTFIELD|Te.types.CYLINDER,particleCylinder:Te.types.PARTICLE|Te.types.CYLINDER,sphereTrimesh:Te.types.SPHERE|Te.types.TRIMESH,planeTrimesh:Te.types.PLANE|Te.types.TRIMESH};class Px{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Ix,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new dx(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){const d=l*(a.frictionGravity||a.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new Ch(n,i,d*m),f=g.length?g.pop():new Ch(n,i,d*m);return _.bi=f.bi=n,_.bj=f.bj=i,_.minForce=f.minForce=-d*m,_.maxForce=f.maxForce=d*m,_.ri.copy(e.ri),_.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(_.t,f.t),_.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),f.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),_.enabled=f.enabled=e.enabled,t.push(_,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Ai.setZero(),is.setZero(),ss.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Ai.vadd(t.ni,Ai),is.vadd(t.ri,is),ss.vadd(t.rj,ss)):(Ai.vsub(t.ni,Ai),is.vadd(t.rj,is),ss.vadd(t.ri,ss));const o=1/e;is.scale(o,n.ri),ss.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Ai.normalize(),Ai.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=Nx,l=Ux,h=Lx,u=Dx;for(let d=0,m=e.length;d!==m;d++){const g=e[d],_=t[d];let f=null;g.material&&_.material&&(f=n.getContactMaterial(g.material,_.material)||null);const p=g.type&Ae.KINEMATIC&&_.type&Ae.STATIC||g.type&Ae.STATIC&&_.type&Ae.KINEMATIC||g.type&Ae.KINEMATIC&&_.type&Ae.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],c),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const y=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],l),_.quaternion.vmult(_.shapeOffsets[x],u),u.vadd(_.position,u);const A=_.shapes[x];if(!(y.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+A.boundingSphereRadius)continue;let M=null;y.material&&A.material&&(M=n.getContactMaterial(y.material,A.material)||null),this.currentContactMaterial=M||f||n.defaultContactMaterial;const w=y.type|A.type,V=this[w];if(V){let E=!1;y.type<A.type?E=V.call(this,y,A,h,u,c,l,g,_,y,A,p):E=V.call(this,A,y,u,h,l,c,_,g,y,A,p),E&&p&&(n.shapeOverlapKeeper.set(y.id,A.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,n,i,s,o,a,c,l,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,c,e,t,l,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,c,l,h,u){const d=this.createContactEquation(a,c,e,t,l,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,Yr),d.ni.scale(d.ni.dot(Yr),Vh),Yr.vsub(Vh,d.rj),-Yr.dot(d.ni)<=e.radius){if(u)return!0;const m=d.ri,g=d.rj;m.vadd(n,m),m.vsub(a.position,m),g.vadd(i,g),g.vsub(c.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,c,e,t,u)}sphereBox(e,t,n,i,s,o,a,c,l,h,u){const d=this.v3pool,m=cy;n.vsub(i,jr),t.getSideNormals(m,o);const g=e.radius;let _=!1;const f=hy,p=uy,v=dy;let y=null,x=0,A=0,M=0,w=null;for(let N=0,$=m.length;N!==$&&_===!1;N++){const z=ry;z.copy(m[N]);const J=z.length();z.normalize();const re=jr.dot(z);if(re<J+g&&re>0){const fe=oy,oe=ay;fe.copy(m[(N+1)%3]),oe.copy(m[(N+2)%3]);const W=fe.length(),ue=oe.length();fe.normalize(),oe.normalize();const te=jr.dot(fe),G=jr.dot(oe);if(te<W&&te>-W&&G<ue&&G>-ue){const k=Math.abs(re-J-g);if((w===null||k<w)&&(w=k,A=te,M=G,y=J,f.copy(z),p.copy(fe),v.copy(oe),x++,u))return!0}}}if(x){_=!0;const N=this.createContactEquation(a,c,e,t,l,h);f.scale(-g,N.ri),N.ni.copy(f),N.ni.negate(N.ni),f.scale(y,f),p.scale(A,p),f.vadd(p,f),v.scale(M,v),f.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let V=d.get();const E=ly;for(let N=0;N!==2&&!_;N++)for(let $=0;$!==2&&!_;$++)for(let z=0;z!==2&&!_;z++)if(V.set(0,0,0),N?V.vadd(m[0],V):V.vsub(m[0],V),$?V.vadd(m[1],V):V.vsub(m[1],V),z?V.vadd(m[2],V):V.vsub(m[2],V),i.vadd(V,E),E.vsub(n,E),E.lengthSquared()<g*g){if(u)return!0;_=!0;const J=this.createContactEquation(a,c,e,t,l,h);J.ri.copy(E),J.ri.normalize(),J.ni.copy(J.ri),J.ri.scale(g,J.ri),J.rj.copy(V),J.ri.vadd(n,J.ri),J.ri.vsub(a.position,J.ri),J.rj.vadd(i,J.rj),J.rj.vsub(c.position,J.rj),this.result.push(J),this.createFrictionEquationsFromContact(J,this.frictionResult)}d.release(V),V=null;const S=d.get(),C=d.get(),U=d.get(),P=d.get(),D=d.get(),F=m.length;for(let N=0;N!==F&&!_;N++)for(let $=0;$!==F&&!_;$++)if(N%3!==$%3){m[$].cross(m[N],S),S.normalize(),m[N].vadd(m[$],C),U.copy(n),U.vsub(C,U),U.vsub(i,U);const z=U.dot(S);S.scale(z,P);let J=0;for(;J===N%3||J===$%3;)J++;D.copy(n),D.vsub(P,D),D.vsub(C,D),D.vsub(i,D);const re=Math.abs(z),fe=D.length();if(re<m[J].length()&&fe<g){if(u)return!0;_=!0;const oe=this.createContactEquation(a,c,e,t,l,h);C.vadd(P,oe.rj),oe.rj.copy(oe.rj),D.negate(oe.ni),oe.ni.normalize(),oe.ri.copy(oe.rj),oe.ri.vadd(i,oe.ri),oe.ri.vsub(n,oe.ri),oe.ri.normalize(),oe.ri.scale(g,oe.ri),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),oe.rj.vadd(i,oe.rj),oe.rj.vsub(c.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult)}}d.release(S,C,U,P,D)}planeBox(e,t,n,i,s,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,c,e,t,u)}convexConvex(e,t,n,i,s,o,a,c,l,h,u,d,m){const g=Ty;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,g,d,m)){const _=[],f=Ry;e.clipAgainstHull(n,s,t,i,o,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(u)return!0;const y=this.createContactEquation(a,c,e,t,l,h),x=y.ri,A=y.rj;g.negate(y.ni),_[v].normal.negate(f),f.scale(_[v].depth,f),_[v].point.vadd(f,x),A.copy(_[v].point),x.vsub(n,x),A.vsub(i,A),x.vadd(n,x),x.vsub(a.position,x),A.vadd(i,A),A.vsub(c.position,A),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,o,a,c,l,h,u){const d=this.v3pool;n.vsub(i,fy);const m=t.faceNormals,g=t.faces,_=t.vertices,f=e.radius;let p=!1;for(let v=0;v!==_.length;v++){const y=_[v],x=_y;o.vmult(y,x),i.vadd(x,x);const A=gy;if(x.vsub(n,A),A.lengthSquared()<f*f){if(u)return!0;p=!0;const M=this.createContactEquation(a,c,e,t,l,h);M.ri.copy(A),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(f,M.ri),x.vsub(i,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(c.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&p===!1;v++){const x=m[v],A=g[v],M=vy;o.vmult(x,M);const w=xy;o.vmult(_[A[0]],w),w.vadd(i,w);const V=yy;M.scale(-f,V),n.vadd(V,V);const E=My;V.vsub(w,E);const S=E.dot(M),C=Ay;if(n.vsub(w,C),S<0&&C.dot(M)>0){const U=[];for(let P=0,D=A.length;P!==D;P++){const F=d.get();o.vmult(_[A[P]],F),i.vadd(F,F),U.push(F)}if(sy(U,M,n)){if(u)return!0;p=!0;const P=this.createContactEquation(a,c,e,t,l,h);M.scale(-f,P.ri),M.negate(P.ni);const D=d.get();M.scale(-S,D);const F=d.get();M.scale(-f,F),n.vsub(i,P.rj),P.rj.vadd(F,P.rj),P.rj.vadd(D,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(c.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),d.release(D),d.release(F),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let N=0,$=U.length;N!==$;N++)d.release(U[N]);return}else for(let P=0;P!==A.length;P++){const D=d.get(),F=d.get();o.vmult(_[A[(P+1)%A.length]],D),o.vmult(_[A[(P+2)%A.length]],F),i.vadd(D,D),i.vadd(F,F);const N=py;F.vsub(D,N);const $=my;N.unit($);const z=d.get(),J=d.get();n.vsub(D,J);const re=J.dot($);$.scale(re,z),z.vadd(D,z);const fe=d.get();if(z.vsub(n,fe),re>0&&re*re<N.lengthSquared()&&fe.lengthSquared()<f*f){if(u)return!0;const oe=this.createContactEquation(a,c,e,t,l,h);z.vsub(i,oe.rj),z.vsub(n,oe.ni),oe.ni.normalize(),oe.ni.scale(f,oe.ri),oe.rj.vadd(i,oe.rj),oe.rj.vsub(c.position,oe.rj),oe.ri.vadd(n,oe.ri),oe.ri.vsub(a.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(let W=0,ue=U.length;W!==ue;W++)d.release(U[W]);d.release(D),d.release(F),d.release(z),d.release(fe),d.release(J);return}d.release(D),d.release(F),d.release(z),d.release(fe),d.release(J)}for(let P=0,D=U.length;P!==D;P++)d.release(U[P])}}}planeConvex(e,t,n,i,s,o,a,c,l,h,u){const d=Sy,m=Ey;m.set(0,0,1),s.vmult(m,m);let g=0;const _=by;for(let f=0;f!==t.vertices.length;f++)if(d.copy(t.vertices[f]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,_),m.dot(_)<=0){if(u)return!0;const v=this.createContactEquation(a,c,e,t,l,h),y=wy;m.scale(m.dot(_),y),d.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(m),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(c.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,c,e,t,u)}sphereHeightfield(e,t,n,i,s,o,a,c,l,h,u){const d=t.data,m=e.radius,g=t.elementSize,_=Oy,f=By;rt.pointToLocalFrame(i,o,n,f);let p=Math.floor((f.x-m)/g)-1,v=Math.ceil((f.x+m)/g)+1,y=Math.floor((f.y-m)/g)-1,x=Math.ceil((f.y+m)/g)+1;if(v<0||x<0||p>d.length||y>d[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),p>=d.length&&(p=d.length-1),v>=d.length&&(v=d.length-1),x>=d[0].length&&(x=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const A=[];t.getRectMinMax(p,y,v,x,A);const M=A[0],w=A[1];if(f.z-m>w||f.z+m<M)return;const V=this.result;for(let E=p;E<v;E++)for(let S=y;S<x;S++){const C=V.length;let U=!1;if(t.getConvexTrianglePillar(E,S,!1),rt.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,_,s,o,a,c,e,t,u)),u&&U||(t.getConvexTrianglePillar(E,S,!0),rt.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(U=this.sphereConvex(e,t.pillarConvex,n,_,s,o,a,c,e,t,u)),u&&U))return!0;if(V.length-C>2)return}}boxHeightfield(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,c,e,t,u)}convexHeightfield(e,t,n,i,s,o,a,c,l,h,u){const d=t.data,m=t.elementSize,g=e.boundingSphereRadius,_=qy,f=Fy,p=Uy;rt.pointToLocalFrame(i,o,n,p);let v=Math.floor((p.x-g)/m)-1,y=Math.ceil((p.x+g)/m)+1,x=Math.floor((p.y-g)/m)-1,A=Math.ceil((p.y+g)/m)+1;if(y<0||A<0||v>d.length||x>d[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),A<0&&(A=0),v>=d.length&&(v=d.length-1),y>=d.length&&(y=d.length-1),A>=d[0].length&&(A=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const M=[];t.getRectMinMax(v,x,y,A,M);const w=M[0],V=M[1];if(!(p.z-g>V||p.z+g<w))for(let E=v;E<y;E++)for(let S=x;S<A;S++){let C=!1;if(t.getConvexTrianglePillar(E,S,!1),rt.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(C=this.convexConvex(e,t.pillarConvex,n,_,s,o,a,c,null,null,u,f,null)),u&&C||(t.getConvexTrianglePillar(E,S,!0),rt.pointToWorldFrame(i,o,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(C=this.convexConvex(e,t.pillarConvex,n,_,s,o,a,c,null,null,u,f,null)),u&&C))return!0}}sphereParticle(e,t,n,i,s,o,a,c,l,h,u){const d=Py;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const g=this.createContactEquation(c,a,t,e,l,h);d.normalize(),g.rj.copy(d),g.rj.scale(e.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,c,l,h,u){const d=Cy;d.set(0,0,1),a.quaternion.vmult(d,d);const m=Vy;if(i.vsub(a.position,m),d.dot(m)<=0){if(u)return!0;const _=this.createContactEquation(c,a,t,e,l,h);_.ni.copy(d),_.ni.negate(_.ni),_.ri.set(0,0,0);const f=Iy;d.scale(d.dot(i),f),i.vsub(f,f),_.rj.copy(f),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,c,e,t,u)}convexParticle(e,t,n,i,s,o,a,c,l,h,u){let d=-1;const m=Dy,g=Ny;let _=null;const f=Ly;if(f.copy(i),f.vsub(n,f),s.conjugate(Ih),Ih.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,v=e.faces.length;p!==v;p++){const y=[e.worldVertices[e.faces[p][0]]],x=e.worldFaceNormals[p];i.vsub(y[0],Ph);const A=-x.dot(Ph);if(_===null||Math.abs(A)<Math.abs(_)){if(u)return!0;_=A,d=p,m.copy(x)}}if(d!==-1){const p=this.createContactEquation(c,a,t,e,l,h);m.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),m.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(c.position,v),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,c,l,h,u){return this.convexHeightfield(t,e,i,n,o,s,c,a,l,h,u)}particleCylinder(e,t,n,i,s,o,a,c,l,h,u){return this.convexParticle(t,e,i,n,o,s,c,a,l,h,u)}sphereTrimesh(e,t,n,i,s,o,a,c,l,h,u){const d=Gx,m=Wx,g=Xx,_=Yx,f=jx,p=Kx,v=$x,y=Hx,x=zx,A=ey;rt.pointToLocalFrame(i,o,n,f);const M=e.radius;v.lowerBound.set(f.x-M,f.y-M,f.z-M),v.upperBound.set(f.x+M,f.y+M,f.z+M),t.getTrianglesInAABB(v,A);const w=kx,V=e.radius*e.radius;for(let P=0;P<A.length;P++)for(let D=0;D<3;D++)if(t.getVertex(t.indices[A[P]*3+D],w),w.vsub(f,x),x.lengthSquared()<=V){if(y.copy(w),rt.pointToWorldFrame(i,o,y,w),w.vsub(n,x),u)return!0;let F=this.createContactEquation(a,c,e,t,l,h);F.ni.copy(x),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(w),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let P=0;P<A.length;P++)for(let D=0;D<3;D++){t.getVertex(t.indices[A[P]*3+D],d),t.getVertex(t.indices[A[P]*3+(D+1)%3],m),m.vsub(d,g),f.vsub(m,p);const F=p.dot(g);f.vsub(d,p);let N=p.dot(g);if(N>0&&F<0&&(f.vsub(d,p),_.copy(g),_.normalize(),N=p.dot(_),_.scale(N,p),p.vadd(d,p),p.distanceTo(f)<e.radius)){if(u)return!0;const z=this.createContactEquation(a,c,e,t,l,h);p.vsub(f,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),rt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,z.rj),rt.vectorToWorldFrame(o,z.ni,z.ni),rt.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const E=Jx,S=Zx,C=Qx,U=Ox;for(let P=0,D=A.length;P!==D;P++){t.getTriangleVertices(A[P],E,S,C),t.getNormal(A[P],U),f.vsub(E,p);let F=p.dot(U);if(U.scale(F,p),f.vsub(p,p),F=p.distanceTo(f),Mt.pointInTriangle(p,E,S,C)&&F<e.radius){if(u)return!0;let N=this.createContactEquation(a,c,e,t,l,h);p.vsub(f,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),rt.pointToWorldFrame(i,o,p,p),p.vsub(c.position,N.rj),rt.vectorToWorldFrame(o,N.ni,N.ni),rt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}A.length=0}planeTrimesh(e,t,n,i,s,o,a,c,l,h,u){const d=new b,m=qx;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const _=new b;_.copy(d),rt.pointToWorldFrame(i,o,_,d);const f=Fx;if(d.vsub(n,f),m.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(a,c,e,t,l,h);v.ni.copy(m);const y=Bx;m.scale(f.dot(m),y),d.vsub(y,y),v.ri.copy(y),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(c.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Ai=new b,is=new b,ss=new b,Lx=new b,Dx=new b,Nx=new At,Ux=new At,qx=new b,Fx=new b,Bx=new b,Ox=new b,zx=new b;new b;const kx=new b,Hx=new b,Gx=new b,Wx=new b,Xx=new b,Yx=new b,jx=new b,Kx=new b,Jx=new b,Zx=new b,Qx=new b,$x=new nn,ey=[],Yr=new b,Vh=new b,ty=new b,ny=new b,iy=new b;function sy(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=ty;r[(s+1)%i].vsub(o,a);const c=ny;a.cross(e,c);const l=iy;t.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const jr=new b,ry=new b,oy=new b,ay=new b,cy=[new b,new b,new b,new b,new b,new b],ly=new b,hy=new b,uy=new b,dy=new b,fy=new b,py=new b,my=new b,gy=new b,_y=new b,vy=new b,xy=new b,yy=new b,My=new b,Ay=new b;new b;new b;const Sy=new b,Ey=new b,by=new b,wy=new b,Ty=new b,Ry=new b,Cy=new b,Vy=new b,Iy=new b,Py=new b,Ih=new At,Ly=new b;new b;const Dy=new b,Ph=new b,Ny=new b,Uy=new b,qy=new b,Fy=[0],By=new b,Oy=new b;class Lh{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let c=0;c<s;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||Dh(e,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||Dh(t,h)}}}function Dh(r,e){r.push((e&4294901760)>>16,e&65535)}const oa=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class zy{constructor(){this.data={keys:[]}}get(e,t){const n=oa(e,t);return this.data[n]}set(e,t,n){const i=oa(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=oa(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class ky extends ju{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Yv,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new wx,this.constraints=[],this.narrowphase=new Px(this),this.collisionMatrix=new xh,this.collisionMatrixPrevious=new xh,this.bodyOverlapKeeper=new Lh,this.shapeOverlapKeeper=new Lh,this.contactmaterials=[],this.contactMaterialTable=new zy,this.defaultMaterial=new Rn("default"),this.defaultContactMaterial=new gn(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof fo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Mt.ALL,n.from=e,n.to=t,n.callback=i,aa.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Mt.ANY,n.from=e,n.to=t,n.result=i,aa.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Mt.CLOSEST,n.from=e,n.to=t,n.result=i,aa.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Ae&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=St.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=St.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(St.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Yy,i=jy,s=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=Ae.DYNAMIC;let d=-1/0;const m=this.constraints,g=Xy;c.length();const _=c.x,f=c.y,p=c.z;let v=0;for(l&&(d=St.now()),v=0;v!==s;v++){const P=o[v];if(P.type===u){const D=P.force,F=P.mass;D.x+=F*_,D.y+=F*f,D.z+=F*p}}for(let P=0,D=this.subsystems.length;P!==D;P++)this.subsystems[P].update();l&&(d=St.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=St.now()-d);let y=m.length;for(v=0;v!==y;v++){const P=m[v];if(!P.collideConnected)for(let D=n.length-1;D>=0;D-=1)(P.bodyA===n[D]&&P.bodyB===i[D]||P.bodyB===n[D]&&P.bodyA===i[D])&&(n.splice(D,1),i.splice(D,1))}this.collisionMatrixTick(),l&&(d=St.now());const x=Wy,A=t.length;for(v=0;v!==A;v++)x.push(t[v]);t.length=0;const M=this.frictionEquations.length;for(v=0;v!==M;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,x,this.frictionEquations,g),l&&(h.narrowphase=St.now()-d),l&&(d=St.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const w=t.length;for(let P=0;P!==w;P++){const D=t[P],F=D.bi,N=D.bj,$=D.si,z=D.sj;let J;if(F.material&&N.material?J=this.getContactMaterial(F.material,N.material)||this.defaultContactMaterial:J=this.defaultContactMaterial,J.friction,F.material&&N.material&&(F.material.friction>=0&&N.material.friction>=0&&F.material.friction*N.material.friction,F.material.restitution>=0&&N.material.restitution>=0&&(D.restitution=F.material.restitution*N.material.restitution)),a.addEquation(D),F.allowSleep&&F.type===Ae.DYNAMIC&&F.sleepState===Ae.SLEEPING&&N.sleepState===Ae.AWAKE&&N.type!==Ae.STATIC){const re=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),fe=N.sleepSpeedLimit**2;re>=fe*2&&(F.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Ae.DYNAMIC&&N.sleepState===Ae.SLEEPING&&F.sleepState===Ae.AWAKE&&F.type!==Ae.STATIC){const re=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),fe=F.sleepSpeedLimit**2;re>=fe*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,N,!0),this.collisionMatrixPrevious.get(F,N)||(ks.body=N,ks.contact=D,F.dispatchEvent(ks),ks.body=F,N.dispatchEvent(ks)),this.bodyOverlapKeeper.set(F.id,N.id),this.shapeOverlapKeeper.set($.id,z.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=St.now()-d,d=St.now()),v=0;v!==s;v++){const P=o[v];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(y=m.length,v=0;v!==y;v++){const P=m[v];P.update();for(let D=0,F=P.equations.length;D!==F;D++){const N=P.equations[D];a.addEquation(N)}}a.solve(e,this),l&&(h.solve=St.now()-d),a.removeAllEquations();const V=Math.pow;for(v=0;v!==s;v++){const P=o[v];if(P.type&u){const D=V(1-P.linearDamping,e),F=P.velocity;F.scale(D,F);const N=P.angularVelocity;if(N){const $=V(1-P.angularDamping,e);N.scale($,N)}}}this.dispatchEvent(Gy),l&&(d=St.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,C=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,S,C);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=St.now()-d),this.stepnumber+=1,this.dispatchEvent(Hy);let U=!0;if(this.allowSleep)for(U=!1,v=0;v!==s;v++){const P=o[v];P.sleepTick(this.time),P.sleepState!==Ae.SLEEPING&&(U=!0)}this.hasActiveBodies=U}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(zn,kn),e){for(let s=0,o=zn.length;s<o;s+=2)Hs.bodyA=this.getBodyById(zn[s]),Hs.bodyB=this.getBodyById(zn[s+1]),this.dispatchEvent(Hs);Hs.bodyA=Hs.bodyB=null}if(t){for(let s=0,o=kn.length;s<o;s+=2)Gs.bodyA=this.getBodyById(kn[s]),Gs.bodyB=this.getBodyById(kn[s+1]),this.dispatchEvent(Gs);Gs.bodyA=Gs.bodyB=null}zn.length=kn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(zn,kn),n){for(let s=0,o=zn.length;s<o;s+=2){const a=this.getShapeById(zn[s]),c=this.getShapeById(zn[s+1]);Hn.shapeA=a,Hn.shapeB=c,a&&(Hn.bodyA=a.body),c&&(Hn.bodyB=c.body),this.dispatchEvent(Hn)}Hn.bodyA=Hn.bodyB=Hn.shapeA=Hn.shapeB=null}if(i){for(let s=0,o=kn.length;s<o;s+=2){const a=this.getShapeById(kn[s]),c=this.getShapeById(kn[s+1]);Gn.shapeA=a,Gn.shapeB=c,a&&(Gn.bodyA=a.body),c&&(Gn.bodyB=c.body),this.dispatchEvent(Gn)}Gn.bodyA=Gn.bodyB=Gn.shapeA=Gn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new nn;const aa=new Mt,St=globalThis.performance||{};if(!St.now){let r=Date.now();St.timing&&St.timing.navigationStart&&(r=St.timing.navigationStart),St.now=()=>Date.now()-r}new b;const Hy={type:"postStep"},Gy={type:"preStep"},ks={type:Ae.COLLIDE_EVENT_NAME,body:null,contact:null},Wy=[],Xy=[],Yy=[],jy=[],zn=[],kn=[],Hs={type:"beginContact",bodyA:null,bodyB:null},Gs={type:"endContact",bodyA:null,bodyB:null},Hn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Gn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};class Ky extends wu{constructor(){super();const e=new Ss;e.deleteAttribute("uv");const t=new Li({side:Ft}),n=new Li,i=new Oc(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new mt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Pu(e,n,6),a=new ft;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new mt(e,rs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new mt(e,rs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new mt(e,rs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new mt(e,rs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new mt(e,rs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const m=new mt(e,rs(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function rs(r){return new rp({color:0,emissive:16777215,emissiveIntensity:r})}function Nh(r,e){if(e===Kd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===nc||e===gu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===nc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Jy extends ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Zs.extractUrlBase(e);o=Zs.resolveURL(l,this.path)}else o=Zs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ou(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===nd){try{o[Ze.KHR_BINARY_GLTF]=new gM(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new CM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new $y;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new _M(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new vM;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new xM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Zy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qy{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Oe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ac(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Oc(h),l.distance=u;break;case"spot":l=new Mp(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),wn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class $y{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Et))}return Promise.all(i)}}class eM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class tM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(s)}}class nM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class iM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class sM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class rM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class oM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],zt),Promise.all(s)}}class aM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class cM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(s)}}class lM{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class hM{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class uM{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class dM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class fM{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class pM{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(m),h,u,d,i.mode,i.filter),m})})}else return null}}class mM{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,m=[];for(const g of u){const _=new Ge,f=new q,p=new hn,v=new q(1,1,1),y=new Pu(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&f.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(f,p,v));for(const x in c)if(x==="_COLOR_0"){const A=c[x];y.instanceColor=new sc(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ft.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const nd="glTF",Ws=12,Uh={JSON:1313821514,BIN:5130562};class gM{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==nd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ws,s=new DataView(e,Ws);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Uh.JSON){const l=new Uint8Array(e,Ws+o,a);this.content=n.decode(l)}else if(c===Uh.BIN){const l=Ws+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _M{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=uc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=uc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],m=fs[d.componentType];l[u]=m.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(m){for(const g in m.attributes){const _=m.attributes[g],f=c[g];f!==void 0&&(_.normalized=f)}u(m)},a,l,zt,d)})})}}class vM{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class xM{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class id extends lr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,m=d*u,g=e*l,_=g-l,f=-2*m+3*d,p=m-d,v=1-f,y=p-d+u;for(let x=0;x!==a;x++){const A=o[_+x+a],M=o[_+x+c]*h,w=o[g+x+a],V=o[g+x]*h;s[x]=v*A+y*M+f*w+p*V}return s}}const yM=new hn;class MM extends id{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return yM.fromArray(s).normalize().toArray(s),s}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qh={9728:Bt,9729:$t,9984:au,9985:$r,9986:Ys,9987:Xn},Fh={33071:ai,33648:oo,10497:_s},ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AM={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},la={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Li({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),r.DefaultMaterial}function Si(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function EM(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function bM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wM(r){let e;const t=r.extensions&&r.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ha(t.attributes):e=r.indices+":"+ha(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ha(r.targets[n]);return e}function ha(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function dc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const RM=new Ge;class CM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new xp(this.options.manager):this.textureLoader=new Ep(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ou(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Si(s,a,i),wn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Zs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=ca[i.type],a=fs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ot(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=ca[i.type],l=fs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,f;if(m&&m!==u){const p=Math.floor(d/m),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(v);y||(_=new l(a,p*m,i.count*m/h),y=new Tu(_,m/h),t.cache.add(v,y)),f=new or(y,c,d%m/h,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),f=new Ot(_,c,g);if(i.sparse!==void 0){const p=ca.SCALAR,v=fs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new v(o[1],y,i.sparse.count*p),M=new l(o[2],x,i.sparse.count*c);a!==null&&(f=new Ot(f.array.slice(),f.itemSize,f.normalized)),f.normalized=!1;for(let w=0,V=A.length;w<V;w++){const E=A[w];if(f.setX(E,M[w*c]),c>=2&&f.setY(E,M[w*c+1]),c>=3&&f.setZ(E,M[w*c+2]),c>=4&&f.setW(E,M[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}f.normalized=g}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=qh[d.magFilter]||$t,h.minFilter=qh[d.minFilter]||Xn,h.wrapS=Fh[d.wrapS]||_s,h.wrapT=Fh[d.wrapT]||_s,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==$t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const f=new bt(_);f.needsUpdate=!0,d(f)}),t.load(Zs.resolveURL(u,s.path),g,void 0,m)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),wn(u,o),u.userData.mimeType=o.mimeType||TM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Du,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Lu,un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Li}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=i[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Et)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Cn);const h=s.alphaMode||la.OPAQUE;if(h===la.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===la.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==li&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new He(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==li&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==li){const u=s.emissiveFactor;a.emissive=new Oe().setRGB(u[0],u[1],u[2],zt)}return s.emissiveTexture!==void 0&&o!==li&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Et)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),wn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Si(i,u,s),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Bh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=wM(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Bh(new Yt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?SM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,g=h.length;m<g;m++){const _=h[m],f=o[m];let p;const v=l[m];if(f.mode===an.TRIANGLES||f.mode===an.TRIANGLE_STRIP||f.mode===an.TRIANGLE_FAN||f.mode===void 0)p=s.isSkinnedMesh===!0?new Jf(_,v):new mt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),f.mode===an.TRIANGLE_STRIP?p.geometry=Nh(p.geometry,gu):f.mode===an.TRIANGLE_FAN&&(p.geometry=Nh(p.geometry,nc));else if(f.mode===an.LINES)p=new np(_,v);else if(f.mode===an.LINE_STRIP)p=new Dc(_,v);else if(f.mode===an.LINE_LOOP)p=new ip(_,v);else if(f.mode===an.POINTS)p=new sp(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(p.geometry.morphAttributes).length>0&&bM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),wn(p,s),f.extensions&&Si(i,p,f),t.assignFinalMaterial(p),u.push(p)}for(let m=0,g=u.length;m<g;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return s.extensions&&Si(i,u[0],s),u[0];const d=new en;s.extensions&&Si(i,d,s),t.associations.set(d,{meshes:e});for(let m=0,g=u.length;m<g;m++)d.add(u[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(ci.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new zc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ge;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Pc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const m=i.channels[u],g=i.samplers[m.sampler],_=m.target,f=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",f)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],m=u[1],g=u[2],_=u[3],f=u[4],p=[];for(let y=0,x=d.length;y<x;y++){const A=d[y],M=m[y],w=g[y],V=_[y],E=f[y];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=n._createAnimationTracks(A,M,w,V,E);if(S)for(let C=0;C<S.length;C++)p.push(S[C])}const v=new oc(s,void 0,p);return wn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,RM)});for(let m=0,g=u.length;m<g;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Vu:l.length>1?h=new en:l.length===1?h=l[0]:h=new ft,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),wn(h,s),s.extensions&&Si(n,h,s),s.matrix!==void 0){const u=new Ge;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new en;n.name&&(s.name=i.createUniqueName(n.name)),wn(s,n),n.extensions&&Si(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,m]of i.associations)(d instanceof un||d instanceof bt)&&u.set(d,m);return h.traverse(d=>{const m=i.associations.get(d);m!=null&&u.set(d,m)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];ii[s.path]===ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ii[s.path]){case ii.weights:l=ys;break;case ii.rotation:l=Ms;break;case ii.translation:case ii.scale:l=As;break;default:switch(n.itemSize){case 1:l=ys;break;case 2:case 3:default:l=As;break}break}const h=i.interpolation!==void 0?AM[i.interpolation]:ir,u=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+ii[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=dc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ms?MM:id;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VM(r,e,t){const n=e.attributes,i=new Xt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),a.normalized){const h=dc(fs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new q,c=new q;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=dc(fs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Pn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Bh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=uc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return et.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),wn(r,e),VM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?EM(r,e.targets,t):r})}const IM=""+new URL("JamJar_Orange-C08-2BMI.glb",import.meta.url).href,PM=""+new URL("JamJar_Blue-C_1v9num.glb",import.meta.url).href,LM=""+new URL("JamJar_Yellow-CFfKqnS6.glb",import.meta.url).href,DM=""+new URL("JamJar_Pink-BdCcRLXS.glb",import.meta.url).href,NM=""+new URL("JamJar_Red-xrL4X8_V.glb",import.meta.url).href,UM=""+new URL("JamJar_Red_2y-edYdl7Qm.glb",import.meta.url).href,qM=""+new URL("Box_Square-V43WEPjd.glb",import.meta.url).href,FM=""+new URL("CannonBall-CLLwj4Je.glb",import.meta.url).href,BM=""+new URL("ban-lam-kim-CTW0WbHv.glb",import.meta.url).href,OM=""+new URL("lam-kim-DKvp5aHV.glb",import.meta.url).href,zM=""+new URL("vinh-nang-BWKtc0lr.glb",import.meta.url).href,kM=""+new URL("JamJar_Apricot_3DParticle_1x1-D2OcFBgY.glb",import.meta.url).href,HM=""+new URL("JamJar_Blueberry_3DParticle_1x1-DOV_xm11.glb",import.meta.url).href,GM=""+new URL("JamJar_Honey_3DParticle_1x1-KSCs3Cxd.glb",import.meta.url).href,WM=""+new URL("JamJar_Grapes_3DParticle_1x1-BFOVJxQa.glb",import.meta.url).href,XM=""+new URL("JamJar_Strawberry_3DParticle_1x1-Cqnf90Xx.glb",import.meta.url).href,YM=""+new URL("JamJar_Strawberry_3DParticle_1x2-2nqSoOmw.glb",import.meta.url).href,jM=""+new URL("Box_3DParticle_1x1-DOQ3Rja5.glb",import.meta.url).href,Oh=[["jar0",IM],["jar1",PM],["jar2",LM],["jar3",DM],["jar4",NM],["jar4-tall",UM],["crate",qM],["ball",FM],["table",BM],["cannon",OM],["beach",zM],["jar0-damaged",kM],["jar1-damaged",HM],["jar2-damaged",GM],["jar3-damaged",WM],["jar4-damaged",XM],["jar4-tall-damaged",YM],["crate-damaged",jM]],po=new Map,sd=new WeakSet;async function KM(){const r=new Jy;(await Promise.allSettled(Oh.map(async([t,n])=>{const{scene:i,animations:s}=await r.loadAsync(n),o=new Xt().setFromObject(i);if(o.isEmpty())throw new Error("Model has no rendered bounds");i.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0,sd.add(a.geometry))}),po.set(t,{scene:i,bounds:o,animations:s})}))).forEach((t,n)=>{t.status==="rejected"&&console.warn(`Unable to load model ${Oh[n][0]}`,t.reason)})}function jc(r){const e=po.get(r);if(!e)throw new Error(`Missing arena GLB: ${r}`);return{model:e.scene.clone(!0),animations:e.animations}}function rd(r,e,t,n,i=r){const s=po.get(r),o=po.get(i);if(!s||!o)return null;const a=o.bounds.getSize(new q),c=o.bounds.getCenter(new q),l=new en;l.scale.set(e/a.x,t/a.y,n/a.z);const h=s.scene.clone(!0);return h.position.sub(c),l.add(h),l}function JM(){const r=new en;r.position.z=1.32,r.visible=!1;const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,"#ffffed"),n.addColorStop(.24,"#ffffae"),n.addColorStop(.48,"#fff332ef"),n.addColorStop(.69,"#ffac1d92"),n.addColorStop(1,"#ff951000"),t.fillStyle=n,t.fillRect(0,0,128,128);const i=new Nc(e);i.colorSpace=Et;const s=new Ic({map:i,blending:hs,transparent:!0,depthWrite:!1,toneMapped:!1}),o=[[0,.04,.44,1.12],[-.31,.08,.19,.71],[.32,.05,.21,.76],[.04,.22,.72,.76]],a=o.map(()=>new Cu(s));r.add(...a);const c=new Oc(16761411,0,3);return r.add(c),{flash:r,draw(l){if(r.visible=l>0&&l<.19,!r.visible)return;const h=l/.19,u=.42+.92*Math.sqrt(h);s.opacity=Math.min(1,h*22)*(1-h*h),c.intensity=9*s.opacity,a.forEach((d,m)=>{const[g,_,f,p]=o[m];d.position.set(g*u,_*u,f*u),d.scale.setScalar(p*u)})}}}const hi=.7,fc=.8,mo=.17,ZM=new Li({color:"#203541",roughness:.42});function QM(r,e){const t=new mt(r,e);return t.castShadow=!0,t.receiveShadow=!0,t}function $M(){const r=2*mo;return rd("ball",r,r,r)??QM(new qc(mo,20,16),ZM)}function eA(r,e,t){const{model:n}=jc("table"),i=n.getObjectByName("TableDeck"),s=n.getObjectByName("TableSurface"),o=n.getObjectByName("TableDetails"),a=n.getObjectByName("TableTop"),c=n.getObjectByName(st.sanitizeNodeName("Vành đỡ mặt bàn")),l=n.getObjectByName(st.sanitizeNodeName("Cổ trụ"));if(!i||!s||!o||!a||!c||!l)throw new Error("Incomplete Bàn Lam Kim rig");const h=new Xt().setFromObject(s),u=new Xt().setFromObject(i),d=h.getSize(new q),m=t/h.max.y,g=m*(h.max.y-u.min.y),_=r/(d.x*m),f=e/(d.z*m);i.scale.set(_,1,f);for(const E of o.children)E.position.x*=_,E.position.z*=f;n.scale.multiplyScalar(m);const p=g/2-t;n.position.y=p;const v=a.position.y,y=c.position.y,x=l.position.y,A=l.scale.y;l.geometry.computeBoundingBox();const{min:M,max:w}=l.geometry.boundingBox,V=new en;return V.add(n),{view:V,thickness:g,setLift(E){const S=E/m,C=S/(w.y-M.y);n.position.y=p-E,a.position.y=v+S,c.position.y=y+S,l.scale.y=A+C,l.position.y=x-C*M.y}}}function tA(){const{model:r,animations:e}=jc("cannon"),t=r.getObjectByName("TurretYaw"),n=r.getObjectByName("BarrelPitch"),i=r.getObjectByName("BarrelRecoil"),s=e.find(m=>m.name==="Khai hỏa");if(!t||!n||!i||!s)throw new Error("Incomplete Lam Kim rig");const o=n.getWorldPosition(new q),a=new Xt().setFromObject(i).max.z-o.z,c=JM();i.add(c.flash);const l=.83/o.y;r.scale.multiplyScalar(l);const h=new en;h.position.copy(n.position),t.add(h),h.add(n),n.position.set(0,0,0);const u=new zu(r),d=u.clipAction(s).setLoop(mu,1);return{group:r,pivot:h,muzzleDistance:a*l+mo+.03,aim(m){t.rotation.y=Math.atan2(m.x,m.z),h.rotation.x=-Math.atan2(m.y,Math.hypot(m.x,m.z))},fire(){d.stop().reset().play(),u.update(0)},reset(){d.stop(),c.draw(0)},update(m){u.update(m),c.draw(d.isRunning()?d.time:0)}}}function nA(r,e,t,{width:n,depth:i,top:s,x:o,z:a,travelX:c=0}){const l=n/2+c+.08,h=i/2+.08,u=new q;let d=Math.tan(t);for(const m of[o-l,o+l])for(const g of[.12,s+.08])for(const _ of[a-h,a+h]){u.set(m,g,_).applyMatrix4(r.matrixWorldInverse);const f=-u.z;d=Math.max(d,Math.abs(u.x)/(f*e*.85),Math.abs(u.y)/(f*.67))}return Math.atan(d)}function zh(r,e,{framingPoints:t,topLimit:n}){const i=new q;let s=0;for(const o of t){i.copy(o).applyMatrix4(r.matrixWorldInverse);const a=-i.z;s=Math.max(s,Math.abs(i.x)/(a*e*.96),i.y/(a*n))}return s}function iA(r,e,t,n){const{anchor:i}=n,s=r.position.clone(),o=r.quaternion.clone(),a=i.clone().applyMatrix4(r.matrixWorldInverse);t=Math.max(t,Math.atan(zh(r,e,n)));const c=-a.z*Math.tan(t);for(let l=4.9;l>0;l-=.25){r.position.set(s.x,s.y+.17*l,s.z+l);const h=r.position.z-i.z,u=i.y-r.position.y,d=Math.hypot(h,u),m=Math.asin(a.y/d),g=Math.atan2(u,h)-m;r.lookAt(i.x,r.position.y+Math.tan(g),r.position.z-1),r.updateMatrixWorld();const _=c/(d*Math.cos(m));if(zh(r,e,n)<=_)return Math.atan(_)}return r.position.copy(s),r.quaternion.copy(o),r.updateMatrixWorld(),t}function sA(r,e,t,n){r.aspect=e;const i=Math.max(0,(n?.top??0)-3.2),s=n?.x??0,o=n?.z??0;let a;if(t){const c=e<.9,l=(c?6.12:6.8)+i*.38,h=o+(n?.depth??0)/2;r.position.set(0,c?2.27:2.22,Math.max(l,h+4.4)),r.lookAt(s*.45,1.58+i*.32,o),a=Math.max(ci.degToRad(c?22:29),Math.atan(.48/e))}else{const c=e<.95;r.position.set(c?4.4:5.65,5.9,12),r.lookAt(s+(c?0:-.37),1.5+i*.42,o+1.18),a=ci.degToRad(e<.62?27.5:20)}r.updateMatrixWorld(),n&&(a=nA(r,e,a,n)),t&&n&&(a=iA(r,e,a,n)),r.fov=ci.radToDeg(a*2),r.updateProjectionMatrix()}function rA(r){const e=r.getObjectByName("SkyDome");if(!e?.material?.map)return()=>{};const t={value:0},n=matchMedia("(prefers-reduced-motion: reduce)");return e.material=e.material.clone(),e.material.onBeforeCompile=i=>{i.uniforms.cloudOffset=t,i.fragmentShader=`uniform float cloudOffset;
${i.fragmentShader}`.replace("#include <map_fragment>",`
      vec2 cloudUv = vMapUv;
      float aboveHorizon = 1.0 - smoothstep(0.47, 0.494, cloudUv.y);
      float awayFromSun = smoothstep(0.055, 0.135, abs(cloudUv.x - 0.091));
      float islandBand = 1.0 - smoothstep(0.07, 0.11, min(abs(cloudUv.x - 0.15), abs(cloudUv.x - 0.80)));
      float awayFromIslands = 1.0 - islandBand * smoothstep(0.445, 0.462, cloudUv.y);
      float awayFromSeam = smoothstep(0.0, 0.055, min(cloudUv.x, 1.0 - cloudUv.x));
      cloudUv.x += cloudOffset * aboveHorizon * awayFromSun * awayFromIslands * awayFromSeam;
      ${Ye.map_fragment.replace("vMapUv","cloudUv")}
    `)},i=>{t.value=n.matches?0:.022*Math.sin(i*Math.PI/12)}}function oA(r){const e=new wu;e.background=new Oe("#78c8f9");const t=new qt(39,1,.1,125),n=new yv({antialias:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),n.shadowMap.enabled=!0,n.shadowMap.type=_c,n.toneMapping=ru,n.toneMappingExposure=.97,r.append(n.domElement);const i=new Ky,s=new lc(n);e.environment=s.fromScene(i,.04).texture,e.environmentIntensity=.75,i.dispose(),s.dispose();const o=new ac("#ffddb0",2.55);o.position.set(-3,9,3.2),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-8.5,right:8.5,top:8.5,bottom:-8.5,far:32}),o.shadow.camera.updateProjectionMatrix(),o.shadow.normalBias=.017,e.add(o);const a=new ac("#8dc5ff",2.15);a.position.set(4,2.3,-4),e.add(a);const{model:c,animations:l}=jc("beach");c.traverse(d=>{d.isMesh&&(d.castShadow=/Palm|Coastal|Stone|Shell|SeaStar/.test(d.name),d.receiveShadow=!d.material.isMeshBasicMaterial,d.material.isMeshBasicMaterial&&(d.material.toneMapped=!1))}),e.add(c);const h=new zu(c);for(const d of l)h.clipAction(d).play();const u=rA(c);return{scene:e,camera:t,renderer:n,scenery:h,updateClouds:u}}function pc(r){r.removeFromParent(),r.traverse(e=>{const{geometry:t}=e;t&&!sd.has(t)&&t.dispose()})}const Vt={single:{label:"Một vật",pieces:[[0,0,0]]},row:{label:"Hàng domino",pieces:[[0,0,1.5],[0,0,.5],[0,0,-.5],[0,0,-1.5]]},tower:{label:"Tháp 4–3–2",depth:.8,pieces:[[-1.5,0,0],[-.5,0,0],[.5,0,0],[1.5,0,0],[-1,1,0],[0,1,0],[1,1,0],[-.5,2,0],[.5,2,0]]},cascade:{label:"Cột chịu lực",description:"Hũ cam đỡ cột giữa. Hai cụm bên cạnh có điểm tựa riêng.",aim:2,depth:.8,margin:.34,pieces:[[-1.5,0,0,6],[-.5,0,0,6],[.5,0,0,0],[1.5,0,0,6],[-1.5,1,-.12,1],[.5,1,-.27,2],[1.5,1,-.22,1],[.6,2,-.2,5]]},pyramid:{label:"Kim tự tháp xen kẽ",description:"Các hàng hũ và thùng xen nhau. Mỗi vật phía trên chia tải lên hai vật ở hàng dưới.",aim:7,pieces:[[-2,0,0,6],[-1,0,0,0],[0,0,0,6],[1,0,0,2],[2,0,0,6],[-1.5,1,0,1],[-.5,1,0,6],[.5,1,0,6],[1.5,1,0,3],[-1,2,0,6],[0,2,0,4],[1,2,0,6],[-.5,3,0,2],[.5,3,0,1],[0,4,0,5]]},bridge:{label:"Hai trụ chung cầu",description:"Thùng bắc ngang đặt trên cả hai trụ. Hũ trên cùng dùng chung điểm tựa đó.",aim:1,pieces:[[-1.79,0,0,1],[-.76,0,0,6],[.76,0,0,6],[1.79,0,0,0],[-.76,1,0,6],[.76,1,0,6],[0,2,0,6],[0,3,0,5]]},fortress:{label:"Pháo đài rỗng",description:"Bốn cạnh bao quanh khoảng trống. Các thùng góc đỡ nhiều hướng khác nhau.",aim:8,pieces:[[-1.2,0,1.05,6],[0,0,1.05,0],[1.2,0,1.05,6],[-1.2,0,0,2],[1.2,0,0,1],[-1.2,0,-1.05,6],[0,0,-1.05,4],[1.2,0,-1.05,6],[-1.2,1,.525,6],[1.2,1,.525,6],[-.6,1,-1.05,1],[.6,1,-1.05,3],[-1.2,2,.5,2],[1.2,2,.5,4],[0,2,-1.05,6]]}},Ut=[{name:"Sân phơi gốm",shots:2,stages:[{layout:Vt.single,cameraLayout:Vt.tower}]},{name:Vt.row.label,shots:5,stages:[{layout:{...Vt.row,pieces:Vt.row.pieces.map(([r,e,t])=>[t,e,-r])},assetIndex:1,cameraLayout:Vt.tower}]},{name:Vt.tower.label,shots:7,stages:[{layout:Vt.tower,assetIndex:4}]},{name:Vt.cascade.label,shots:7,stages:[{layout:Vt.cascade}]},{name:Vt.pyramid.label,shots:10,stages:[{layout:Vt.pyramid}]},{name:Vt.bridge.label,shots:8,stages:[{layout:Vt.bridge,motion:"slide"}]},{name:Vt.fortress.label,shots:28,stages:[{layout:Vt.fortress,motion:"lift"},{layout:Vt.cascade,motion:"slide"}]}],si=r=>document.getElementById(r),kh=r=>String(r+1).padStart(2,"0");function aA(r){const e=r.layout.pieces,t=document.createElement("canvas");t.width=400,t.height=228;const n=t.getContext("2d");n.scale(2,2);const i=e.map(([u,,d])=>u+d*.27),s=Math.max(...e.map(([,,u])=>u)),o=Math.min(...i),a=Math.max(...i),c=Math.min(28,144/(a-o+1),76/(1.45+Math.max(...e.map(([,u])=>u)))),l=["#f7a14d","#6eb7fc","#ffe477","#e6a0e8","#fc8983","#fc8983","#cd935f"],h=(a-o+1.45)*c;n.fillStyle="#69998c",n.fillRect(98,88,5,14),n.fillRect(89,101,23,3),n.fillStyle="#a1c9b5",n.fillRect(100-h/2,84,h,4);for(const[u,d,m,g]of[...e].sort((_,f)=>_[2]-f[2]||_[1]-f[1])){const _=g??r.assetIndex??0,f=100+(u+m*.27-(o+a)/2)*c,p=84-d*c-(s-m)*c*.09,v=c*(_===5?1.38:.96);n.fillStyle=l[_],n.beginPath(),n.roundRect(f-c*.45,p-v,c*.9,v,_===6?1:c*.19),n.fill(),n.fillStyle=_===6?"#956342":"#ffdf8d",n.fillRect(f-c*.45,p-v,c*.9,c*.18)}si("diagram").replaceChildren(t)}function cA(r){const e=[...document.querySelectorAll("[data-panel]")];for(const n of e)n.onclick=()=>{for(const i of e){const s=n===i;i.setAttribute("aria-pressed",String(s)),si(i.dataset.panel).hidden=!s}};si("level-count").textContent=String(Ut.length).padStart(2,"0");const t=Ut.map((n,i)=>{const s=document.createElement("button"),o=document.createElement("small");o.textContent="MÀN "+kh(i);const a=document.createElement("strong");a.textContent=n.name;const c=document.createElement("span");return c.className="entry-detail",c.textContent=n.shots+" viên · "+n.stages.length+" chặng",s.append(o,a,c),s.onclick=()=>r(i),s});return si("level-list").append(...t),{showStage(n,i){const s=Ut[n],o=s.stages[i];si("level-summary").textContent=o.layout.pieces.length+" mục tiêu · "+s.shots+" viên đạn cho cả màn",aA(o),t.forEach((a,c)=>a.setAttribute("aria-current",String(c===n))),si("advance").disabled=n===Ut.length-1},record(n,i,s,o,a){const c=document.createElement("li"),l=document.createElement("strong");l.textContent=kh(n)+" · "+Ut[n].name;const h=document.createElement("span");h.className="entry-detail",h.textContent=(i?"Thắng":"Hết đạn")+" · "+a+" điểm · Đã bắn "+s+" viên · Còn "+o+" mục tiêu",c.append(l,h),si("history-empty").hidden=!0,si("attempts").prepend(c)}}}const Xs=r=>r.toLocaleString("vi-VN");function lA(r){return r>=7?"Incredible!":r>=5?"Awesome!":r===4?"Well done!":r===3?"Good!":""}function Hh(){const r=new Map;let e=0,t=0;return{get points(){return e},get best(){return t},hitTarget(n){if(!n)return null;const i=r.get(n),s=(i?.count??0)+1;t=Math.max(t,s);const o=100+50*Math.min(5,Math.max(0,s-2)),a=(i?.chainPoints??0)+o;return r.set(n,{count:s,chainPoints:a}),e+=o,{count:s,chainPoints:a,title:lA(s)}}}}function hA(r,e,t){return r?e<=Math.ceil(t/2)?3:e<=Math.ceil(t*.75)&&e<t?2:1:0}function uA(){const r=document.querySelector(".workspace"),e=document.getElementById("split"),t=document.getElementById("height-grip"),n=document.querySelector(".game"),i=matchMedia("(max-width:720px)"),s="smashfest.workspace.v1";let o={};try{o=JSON.parse(localStorage.getItem(s))||{}}catch{}let a=Number.isFinite(o.share)?o.share:55;const c={desktop:o.desktop,mobile:o.mobile},l=(_,f,p)=>Math.min(p,Math.max(f,_)),h=()=>i.matches?"mobile":"desktop";function u(){const _=Math.max(1,r.clientWidth-e.offsetWidth),f=i.matches?30:Math.ceil(285/_*100),p=i.matches?70:Math.floor((1-280/_)*100),v=l(a,f,p);r.style.setProperty("--editor-size",_*v/100+"px"),e.setAttribute("aria-valuemin",f),e.setAttribute("aria-valuemax",p),e.setAttribute("aria-valuenow",Math.round(v));const y=c[h()];Number.isFinite(y)?r.style.setProperty("--play-height",l(y,330,1400)+"px"):r.style.removeProperty("--play-height"),t.setAttribute("aria-valuenow",Math.round(n.getBoundingClientRect().height))}function d(){try{localStorage.setItem(s,JSON.stringify({share:a,...c}))}catch{}}function m(_,f){const p=w=>f?w.clientX:w.clientY,v=()=>f?Number(_.getAttribute("aria-valuenow")):n.getBoundingClientRect().height;function y(w){f?a=l(w,Number(e.getAttribute("aria-valuemin")),Number(e.getAttribute("aria-valuemax"))):c[h()]=l(w,330,1400),u()}let x;_.onpointerdown=w=>{w.button!==0||!w.isPrimary||(w.preventDefault(),_.focus({preventScroll:!0}),x={id:w.pointerId,at:p(w),value:v(),scale:f?100/(r.clientWidth-e.offsetWidth):1},_.setPointerCapture(w.pointerId))};const A=w=>{x?.id===w.pointerId&&y(x.value+(p(w)-x.at)*x.scale)},M=w=>{!x||w.pointerId!==void 0&&w.pointerId!==x.id||(x=null,d())};window.addEventListener("pointermove",A),window.addEventListener("pointerup",M),window.addEventListener("pointercancel",M),window.addEventListener("blur",M),_.onkeydown=w=>{const V=f?["ArrowLeft","ArrowRight"]:["ArrowUp","ArrowDown"];V.includes(w.key)&&(w.preventDefault(),y(v()+(w.key===V[0]?-1:1)*(f?2:20)),d())},_.ondblclick=()=>{f?a=55:delete c[h()],u(),d()}}m(e,!0),m(t,!1),window.addEventListener("resize",u);let g;new ResizeObserver(([_])=>{g!==_.contentRect.width&&(g=_.contentRect.width,u())}).observe(r),u()}class dA extends Yt{constructor(e=new mt,t=new q,n=new tn,i=new q(1,1,1)){super();const s=[],o=[],a=[],c=new q,l=new Xe().getNormalMatrix(e.matrixWorld),h=new Ge;h.makeRotationFromEuler(n),h.setPosition(t);const u=new Ge;u.copy(h).invert(),d(),this.setAttribute("position",new Ct(s,3)),this.setAttribute("uv",new Ct(a,2)),o.length>0&&this.setAttribute("normal",new Ct(o,3));function d(){let f=[];const p=new q,v=new q,y=e.geometry,x=y.attributes.position,A=y.attributes.normal;if(y.index!==null){const M=y.index;for(let w=0;w<M.count;w++)p.fromBufferAttribute(x,M.getX(w)),A?(v.fromBufferAttribute(A,M.getX(w)),m(f,p,v)):m(f,p)}else{if(x===void 0)return;for(let M=0;M<x.count;M++)p.fromBufferAttribute(x,M),A?(v.fromBufferAttribute(A,M),m(f,p,v)):m(f,p)}f=g(f,c.set(1,0,0)),f=g(f,c.set(-1,0,0)),f=g(f,c.set(0,1,0)),f=g(f,c.set(0,-1,0)),f=g(f,c.set(0,0,1)),f=g(f,c.set(0,0,-1));for(let M=0;M<f.length;M++){const w=f[M];a.push(.5+w.position.x/i.x,.5+w.position.y/i.y),w.position.applyMatrix4(h),s.push(w.position.x,w.position.y,w.position.z),w.normal!==null&&o.push(w.normal.x,w.normal.y,w.normal.z)}}function m(f,p,v=null){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(u),v?(v.applyNormalMatrix(l),f.push(new ua(p.clone(),v.clone()))):f.push(new ua(p.clone()))}function g(f,p){const v=[],y=.5*Math.abs(i.dot(p));for(let x=0;x<f.length;x+=3){let A=0,M,w,V,E;const S=f[x+0].position.dot(p)-y,C=f[x+1].position.dot(p)-y,U=f[x+2].position.dot(p)-y,P=S>0,D=C>0,F=U>0;switch(A=(P?1:0)+(D?1:0)+(F?1:0),A){case 0:{v.push(f[x]),v.push(f[x+1]),v.push(f[x+2]);break}case 1:{if(P&&(M=f[x+1],w=f[x+2],V=_(f[x],M,p,y),E=_(f[x],w,p,y)),D){M=f[x],w=f[x+2],V=_(f[x+1],M,p,y),E=_(f[x+1],w,p,y),v.push(V),v.push(w.clone()),v.push(M.clone()),v.push(w.clone()),v.push(V.clone()),v.push(E);break}F&&(M=f[x],w=f[x+1],V=_(f[x+2],M,p,y),E=_(f[x+2],w,p,y)),v.push(M.clone()),v.push(w.clone()),v.push(V),v.push(E),v.push(V.clone()),v.push(w.clone());break}case 2:{P||(M=f[x].clone(),w=_(M,f[x+1],p,y),V=_(M,f[x+2],p,y),v.push(M),v.push(w),v.push(V)),D||(M=f[x+1].clone(),w=_(M,f[x+2],p,y),V=_(M,f[x],p,y),v.push(M),v.push(w),v.push(V)),F||(M=f[x+2].clone(),w=_(M,f[x],p,y),V=_(M,f[x+1],p,y),v.push(M),v.push(w),v.push(V));break}}}return v}function _(f,p,v,y){const x=f.position.dot(v)-y,A=p.position.dot(v)-y,M=x/(x-A),w=new q(f.position.x+M*(p.position.x-f.position.x),f.position.y+M*(p.position.y-f.position.y),f.position.z+M*(p.position.z-f.position.z));let V=null;return f.normal!==null&&p.normal!==null&&(V=new q(f.normal.x+M*(p.normal.x-f.normal.x),f.normal.y+M*(p.normal.y-f.normal.y),f.normal.z+M*(p.normal.z-f.normal.z))),new ua(w,V)}}}class ua{constructor(e,t=null){this.position=e,this.normal=t}clone(){const e=this.position.clone(),t=this.normal!==null?this.normal.clone():null;return new this.constructor(e,t)}}const fA="impact-chip",pA=new q(0,0,1),da=new Map;function mA(r){if(da.has(r))return da.get(r);const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=new Path2D("M 47 47 L 61 38 L 69 46 L 85 42 L 88 56 L 80 63 L 74 77 L 59 74 L 47 82 L 41 67 L 49 60 Z"),i=new Path2D("M 52 54 L 36 38 L 29 30 L 22 31 M 73 50 L 89 35 L 95 25 M 65 67 L 67 86 L 77 96 L 76 106 M 51 69 L 31 75 L 23 90");t.lineJoin="round",t.lineCap="round",t.strokeStyle=r?"#61321e":"#453239",t.lineWidth=4,t.stroke(i);const s=t.createLinearGradient(0,36,0,86);s.addColorStop(0,r?"#a05d35":"#a6958e"),s.addColorStop(.42,r?"#e9ae66":"#f9e6d4"),s.addColorStop(1,r?"#cb8a47":"#d3b8a9"),t.fillStyle=s,t.stroke(n),t.fill(n),t.strokeStyle=r?"#f8ce93":"#fff7e8",t.lineWidth=3,t.stroke(new Path2D("M 44 68 L 49 77 L 59 71 L 73 74 L 79 63"));const o=new Nc(e);o.colorSpace=Et;const a=new Li({map:o,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,roughness:.88});return da.set(r,a),a}function gA(r,{point:e,normal:t},n){const i=new q().fromArray(t).normalize(),s=new q().fromArray(e).addScaledVector(i,.32);r.updateMatrixWorld(!0);const a=new ku(s,i.clone().negate(),0,.7).intersectObject(r,!0)[0];if(!a?.face)return;const c=a.face.normal.clone().applyNormalMatrix(new Xe().getNormalMatrix(a.object.matrixWorld)),l=new hn().setFromUnitVectors(pA,c),h=new dA(a.object,a.point,new tn().setFromQuaternion(l),new q(.34,.33,.11)),u=new mt(h,mA(n));u.name=fA,u.renderOrder=1,r.add(u)}class Gh{constructor(e){this.view=e,this.fadeMaterials=null}fade(e){if(!this.fadeMaterials){this.fadeMaterials=new Map;const t=n=>{let i=this.fadeMaterials.get(n);return i||(i=n.clone(),i.transparent=!0,i.depthWrite=!1,this.fadeMaterials.set(n,i)),i};this.view.traverse(n=>{n.isMesh&&(n.material=Array.isArray(n.material)?n.material.map(t):t(n.material),n.castShadow=!1)})}for(const[t,n]of this.fadeMaterials)n.opacity=t.opacity*e}dispose(){if(this.fadeMaterials)for(const e of this.fadeMaterials.values())e.dispose()}}const Wh=26,mc=9.81,_A=.26,vA=.2,xA=.24,ro=2,Qt={mass:.05,bounce:.02,damping:.3,gravityScale:1.5,inheritance:.5,friction:.6,hold:.4,fade:.4,scatterFraction:.008},fa=new b,Xh=new b;function Yh(r,e,t){return r.invMass?(e.cross(t,fa),r.invInertiaWorld.vmult(fa,Xh),fa.dot(Xh)):0}function pa(r,e){const t=r.getImpactVelocityAlongNormal();if(t<e)return null;const{bi:n,bj:i,ri:s,rj:o,ni:a}=r,c=n.invMass+i.invMass+Yh(n,s,a)+Yh(i,o,a);return c>0?{speed:t,energy:.5*t*t/c}:null}function yA(r){r.broadphase.useBoundingBoxes=!0,r.narrowphase.enableFrictionReduction=!0,r.solver.iterations=24;const e=new Rn("target"),t=new Rn("ground"),n=new Rn("deck"),i=new Rn("ball"),s=new Rn("airborne-fragment"),o=new Rn("ground-fragment");for(const[a,c,l]of[[e,.36,0],[n,.78,0],[i,.2,.02]])r.addContactMaterial(new gn(a,e,{friction:c,restitution:l}));return r.addContactMaterial(new gn(t,e,{friction:.72,restitution:0,contactEquationStiffness:8e5,contactEquationRelaxation:7})),r.addContactMaterial(new gn(t,o,{friction:Qt.friction,restitution:Qt.bounce})),r.addContactMaterial(new gn(t,i,{friction:.45,restitution:.24})),r.addContactMaterial(new gn(n,i,{friction:.28,restitution:.16})),r.addContactMaterial(new gn(e,s,{friction:.14,restitution:0})),r.addContactMaterial(new gn(n,s,{friction:.43,restitution:.02})),{target:e,floor:t,deck:n,ball:i,airborne:s,fragment:o}}function MA(r,e){let t=0,n=0,i=0;function s(h,u,d){t+=d,n+=d*u,i+=d*(h*h+u/2)}const o=4;for(let h=1;h<e.length;h++){const u=e[h-1],d=e[h],m=d.y-u.y,g=d.radius-u.radius,_=Math.hypot(m,g)/o;for(let f=0;f<o;f++){const p=(f+.5)/o,v=u.radius+g*p;s(u.y+m*p,v*v,v*_)}}for(const h of[e[0],e.at(-1)]){const u=h.radius*h.radius/2;s(h.y,u,u)}if(t<=0)return;const a=r.mass/t,c=n*a,l=i*a;r.inertia.set(l,c,l),r.invInertia.set(1/l,1/c,1/l),r.updateInertiaWorld(!0)}function AA(r,e,t){if(!t)return new Rs(new b(r/2,e/2,r/2));const n=8,i=t.flatMap(({y:l,radius:h})=>Array.from({length:n},(u,d)=>{const m=d*2*Math.PI/n;return new b(h*Math.cos(m),l,h*Math.sin(m))})),s=Array.from({length:n},(l,h)=>h),o=[s,s.map(l=>3*n-1-l)];for(let l=0;l<2;l++){const h=l*n;for(let u=0;u<n;u++){const d=h+u,m=h+(u+1)%n;o.push([d,d+n,m+n,m])}}const a=new ds({vertices:i,faces:o}),c=l=>l.filter((h,u)=>!l.slice(0,u).some(d=>Math.abs(h.dot(d))>1-1e-8));return a.uniqueEdges=c(a.uniqueEdges),a.uniqueAxes=c(a.faceNormals),a}const SA=[["jar0",16222770],["jar1",6535167],["jar2",16766542],["jar3",16679604],["jar4",16205386],["jar4-tall",16205386],["crate",14259280]],EA=16,bA=64,wA=2.2,Kr={settle:.25,coast:.9,maxAge:3.2,hold:.26,fade:.36};function Jr(r,{bi:e,ri:t,rj:n,ni:i}){const s=e===r;return{point:r.position.vadd(s?t:n),normal:s?i.clone():i.negate()}}function Zr(r,e=!1){const{modelKey:t,height:n}=r,i=e?`${t}-damaged`:t,s=rd(i,hi,n,hi,t);if(!s)throw new Error(`Missing target GLB: ${i}`);return s}function TA(r,e){const t=e/2,n={y:-t,radius:0},i={y:t,radius:0},s={y:0,radius:0},o=e*.035,a=new q;return r.updateMatrixWorld(!0),r.traverse(c=>{if(!c.isMesh)return;const l=c.geometry.attributes.position;for(let h=0;h<l.count;h++){a.fromBufferAttribute(l,h).applyMatrix4(c.matrixWorld);const u=Math.hypot(a.x,a.z);a.y<=n.y+o?n.radius=Math.max(n.radius,u):a.y>=i.y-o?i.radius=Math.max(i.radius,u):u>s.radius&&Object.assign(s,{y:a.y,radius:u})}}),[n,s,i]}function RA(r){const e=[];return r.updateMatrixWorld(!0),r.traverse(t=>{if(!t.isMesh)return;const n=t.clone(!1);t.matrixWorld.decompose(n.position,n.quaternion,n.scale);const i=new Xt().setFromObject(n),s=i.getCenter(new q);n.position.sub(s);const o=new en;o.add(n),e.push({view:o,offset:s,size:i.getSize(new q)})}),e}function CA({scene:r,world:e,floor:t,surfaces:n,feedback:i,deckTop:s,step:o,onScored:a}){const c=new Map,l=new Map,h=new Set,u=new Set,d=new Set,m=new Map;let g=new Map,_=[],f=[],p,v,y=0,x=-1/0,A=!1,M=0;function w(W){if(!c.has(W)){const[ue,te]=SA[W],G={modelKey:ue,color:te,height:W===5?1.18:fc,wood:W===6};G.wood||(G.jarProfile=TA(Zr(G),G.height)),G.parts=RA(Zr(G,!0)),c.set(W,G)}return c.get(W)}function V(W,ue,te,G,k={}){i.emit(W,te,y,{strength:G,color:ue.asset.color,wood:ue.asset.wood,...k})}function E(W){e.addBody(W.body),l.set(W.body,W),W.view.position.copy(W.body.position),W.view.quaternion.copy(W.body.quaternion),r.add(W.view)}function S(W,ue=!0){g.delete(W.body);for(const[te,G]of g){if(!G.delete(W.body))continue;const k=l.get(te);ue&&k&&W.shotId&&!k.shotId&&(k.shotId=W.shotId),ue&&te.sleepState===Ae.SLEEPING&&te.wakeUp(),G.size||g.delete(te)}l.delete(W.body),h.delete(W.body),e.removeBody(W.body),W.visual.dispose(),pc(W.view)}function C(W,ue,te){W.landedAt=y,W.part===void 0&&U(W),!u.has(W.id)&&(u.add(W.id),x=y,V("ground",W,{x:ue.x,y:.025,z:ue.z},Math.min(1,.32+te*.12)))}function U(W){!W.shotId||W.scored||(W.scored=!0,a?.(W.shotId))}function P(W){W.updateAABB(),W.position.y+=Math.max(0,.008-W.aabb.lowerBound.y),W.aabbNeedsUpdate=!0}function D(W,ue){const{body:te}=W;W.groundShard=!0,te.material=n.fragment,te.collisionFilterMask=ro,h.add(te),C(W,ue,Math.max(0,-te.velocity.y))}function F(W,ue,te){const{body:G}=W,k=Math.max(0,te?.speed??0,-G.velocity.y);W.ground={speed:k,energy:te?.energy??.5*G.mass*k*k,x:G.velocity.x,z:G.velocity.z,point:ue}}function N(W,ue=null){const te=W.body,{asset:G}=W,k=ue?Math.min(.9,Math.sqrt(2*ue.energy*Qt.scatterFraction/(G.parts.length*Qt.mass))):.24;return G.parts.map(({view:ie,offset:me,size:ce},be)=>{const je=te.pointToWorldFrame(new b(me.x,me.y,me.z)),L=te.getVelocityAtWorldPoint(je,new b),Ke=te.angularVelocity.clone(),Ue=je.vsub(te.position);Ue.y=0,Ue.lengthSquared()<.001&&Ue.set(Math.cos(be*2.4),0,Math.sin(be*2.4)),Ue.normalize(),ue?(L.set(ue.x*Qt.inheritance+Ue.x*k,Math.max(0,ue.speed-2)*Qt.bounce,ue.z*Qt.inheritance+Ue.z*k),Ke.scale(Qt.inheritance,Ke),Ke.x+=Ue.z*k*4,Ke.z-=Ue.x*k*4):(L.scale(.72,L),Ke.scale(.72,Ke),L.addScaledVector(k,Ue,L));const Pe=new Ae({mass:Qt.mass,position:je,quaternion:te.quaternion.clone(),velocity:L,angularVelocity:Ke,shape:new Rs(new b(Math.max(.025,ce.x*(ue?.46:.27)),Math.max(.025,ce.y*(ue?.46:.29)),Math.max(.025,ce.z*(ue?.46:.27)))),material:ue?n.fragment:n.airborne,collisionFilterGroup:4,collisionFilterMask:ue?ro:1|ro,linearDamping:ue?Qt.damping:.1,angularDamping:ue?Qt.damping:.15}),we=ie.clone(!0),tt={id:W.id,shotId:W.shotId,asset:G,body:Pe,view:we,visual:new Gh(we),part:be,landedAt:ue?y:null,groundShard:!!ue,bornAt:y,restSince:null,coastSince:null,tableContactAt:-1/0};return ue?(P(Pe),h.add(Pe)):Pe.addEventListener("collide",({body:Re,contact:ke})=>{Re!==t||tt.landedAt!==null||D(tt,Jr(Pe,ke).point)}),Pe.previousPosition.copy(Pe.position),Pe.previousQuaternion.copy(Pe.quaternion),E(tt),tt})}function $({assetIndex:W,position:ue}){const te=w(W),{height:G,jarProfile:k}=te,ie=new Ae({mass:te.wood?1.65:.85,shape:AA(hi,G,k),material:n.target,position:ue,linearDamping:.08,angularDamping:.12,sleepSpeedLimit:.12,sleepTimeLimit:.65});k&&MA(ie,k);const me=new en;me.add(Zr(te));const ce={id:M++,asset:te,body:ie,view:me,visual:new Gh(me),landedAt:null,chipped:!1,ground:null,hit:null,neighbor:null,startY:ue.y,scored:!1};return ie.addEventListener("collide",({body:be,contact:je})=>{if(!(A||ce.landedAt!==null))if(be===t)F(ce,Jr(ie,je).point,pa(je,.01));else if(be.isShot&&(!be.hitBody||be.hitBody===ie)){const L=pa(je,.25);L&&L.energy>(ce.hit?.energy??0)&&(be.hitBody=ie,ce.shotId=be.shotId,be.contactAt??=y,ce.hit={...L,...Jr(ie,je)})}else{const L=l.get(be);if(!L)return;const Ke=pa(je,.65);Ke&&Ke.energy>(ce.neighbor?.energy??0)&&(ce.neighbor={neighbor:L,...Ke,...Jr(ie,je)})}}),E(ce),_.push(ce),f.push(ce),ce}function z(W){const ue=g;g=new Map;for(const{enabled:te,bi:G,bj:k,ni:ie}of e.contacts){if(!te||Math.abs(ie.y)<.45)continue;const[me,ce]=ie.y>0?[G,k]:[k,G],be=l.get(ce),je=l.get(me);if(!(!be||be.landedAt!==null)&&!(me!==p&&(!je||je.part!==void 0||je.landedAt!==null))){if(be.part!==void 0){be.tableContactAt=y;continue}g.has(ce)||g.set(ce,new Set),g.get(ce).add(me)}}for(const[te,G]of ue){const k=g.get(te)??new Set;for(const me of G)W.has(te)&&(me===p||W.has(me))&&k.add(me);k.size&&g.set(te,k);const ie=l.get(te);if(ie&&!ie.shotId)for(const me of G){const ce=l.get(me);if(!k.has(me)&&ce?.shotId){ie.shotId=ce.shotId;break}}te.sleepState===Ae.SLEEPING&&[...G].some(me=>!k.has(me))&&te.wakeUp()}}function J(W,{point:ue,normal:te}){const G=Zr(W.asset);gA(G,{point:W.body.pointToLocalFrame(ue).toArray(),normal:W.body.vectorToLocalFrame(te).toArray()},W.asset.wood),pc(W.view.children[0]),W.view.add(G),W.chipped=!0}function re(W){if(W.ground){const te=W.ground;W.ground=null,C(W,te.point,te.speed);const G=wA*(W.chipped?.75:1);return te.speed<G?null:(V("fracture",W,{x:te.point.x,y:.065,z:te.point.z},Math.min(.72,.32+te.speed*.075),{grounded:!0}),N(W,te))}const ue=[...g.values()].some(te=>te.has(W.body));if(W.hit){const te=W.hit;U(W),W.hit=null,x=y;const G=W.asset.parts.length>1&&te.energy>=Wh&&(ue||W.chipped||te.energy>=bA);if(V(G?"fracture":"hit",W,te.point,Math.min(1,.28+.66*Math.sqrt(te.energy/Wh)),{normal:te.normal}),G)return N(W);!W.chipped&&te.energy>=EA&&J(W,te)}if(W.neighbor){const te=W.neighbor,{neighbor:G,energy:k,point:ie,normal:me}=te;W.neighbor=null;const ce=W.id<G.id?`${W.id}:${G.id}`:`${G.id}:${W.id}`;k>=.28&&y-(m.get(ce)??-1/0)>=.12&&(m.set(ce,y),x=y,V("neighbor",W,ie,Math.min(.62,.22+Math.sqrt(k)*.23),{normal:me})),!W.chipped&&!ue&&k>=(W.asset.wood?9:5)&&J(W,te)}return null}function fe(W){const{body:ue}=W;if(W.landedAt===null){const ie=ue.position.y>=s+p.position.y-v-.06,me=y-W.tableContactAt<=.08,ce=(me?ue.velocity.vsub(p.velocity):ue.velocity).lengthSquared(),be=ie&&ce<=.16**2&&ue.angularVelocity.lengthSquared()<=.55**2,je=me&&ce<=.65**2;W.restSince=be?W.restSince??y:null,W.coastSince=je?W.coastSince??y:null,(W.restSince!==null&&y-W.restSince>=Kr.settle||W.coastSince!==null&&y-W.coastSince>=Kr.coast||y-W.bornAt>=Kr.maxAge)&&(W.landedAt=y);return}if(!W.groundShard||y-W.landedAt<=.025||d.has(W.id))return;const{velocity:te,position:G}=ue,k=Math.hypot(te.x,te.z);k>.27&&(d.add(W.id),V("skitter",W,{x:G.x,y:.03,z:G.z},Math.min(.53,k*.55),{normal:{x:te.x/k,y:0,z:te.z/k}}))}function oe(W,ue=!1){y=W,A=ue;const te=new Set(e.bodies.filter(k=>k.sleepState===Ae.SLEEPING));for(const k of h)k.force.y-=k.mass*mc*(Qt.gravityScale-1);e.step(o);for(const k of f){const ie=k.neighbor;!k.shotId&&ie?.neighbor.shotId&&ie.energy>=.28&&(k.shotId=ie.neighbor.shotId),ie?.energy>=1&&k.shotId&&U(k)}if(z(te),A)return;const G=[];_=_.filter(k=>{const{body:ie}=k;if(k.part===void 0&&k.shotId&&!k.scored){const be=k.startY+p.position.y-v-ie.position.y,je=ie.quaternion.x**2+ie.quaternion.z**2;(be>k.asset.height*.28||je>.12)&&U(k)}if(k.landedAt===null&&ie.position.y<0){const be={x:ie.position.x,y:0,z:ie.position.z};k.part!==void 0?D(k,be):k.ground||F(k,be),P(ie),ie.velocity.y=Math.max(0,ie.velocity.y)}if(k.part!==void 0)fe(k);else if(k.landedAt===null&&(k.hit||k.ground||k.neighbor)){const be=re(k);if(be)return G.push(...be),S(k),!1}if(k.landedAt===null)return!0;const me=k.groundShard?Qt:k.part===void 0?{hold:vA,fade:xA}:Kr,ce=(y-k.landedAt-me.hold)/me.fade;return ce>=1?(S(k),!1):(ce>0&&k.visual.fade(1-ce),!0)}),_.push(...G),f=_.filter(k=>k.part===void 0)}return{get items(){return _},get targets(){return f},get lastImpact(){return x},reset(W){g.clear(),_.forEach(ue=>S(ue,!1)),_=[],f=[],p=W,v=p.position.y,M=0,x=-1/0,u.clear(),d.clear(),m.clear(),i.clear()},add:$,step:oe}}const VA=""+new URL("ceramic-break-DLT9EKzR.mp3",import.meta.url).href,IA="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYxLjcuMTAzAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABYaW5nAAAADwAAAAkAAAfVAIGBgYGBgYGBgYGBnJycnJycnJycnJywsLCwsLCwsLCwsL29vb29vb29vb29ysrKysrKysrKysrY2NjY2NjY2NjY2OXl5eXl5eXl5eXl8vLy8vLy8vLy8vL//////////////wAAAABMYXZjNjEuMTkAAAAAAAAAAAAAAAAkBEwAAAAAAAAH1XwSgCYAAAAAAP/70MQAAAfAQ2tUMYAjy7MsvzWgCDUAACRCs/czkRC064d347vogAhaIgAAAg6oEAxl3lz/D8EDnwQ/pygYxACEEJcP/8uD4P4PvUcxACDv//wQeEdmAAFyAAdViJIjcp1n8IwQeCOWDROM4PSwFAI6PTbMCSAI40SkxgAWBiFJBQObjVhtkqkrUT1bYfAodfyl6OhkQSriWGal04wGegkQBRipV1MOTlVuZEFgJb2BIhGVsPw6HOwY9UjpbMBRGHbUNT0dqVdUMBQHQV+RF3aSUymdgmZjF6I1ph6Lct535ZEX9lvZTLae3K61uzXpblizL5bSVJ2tl+VarZrYymzLfk9W3Wu378vpsOXKbWNevhjfpcZmm3W5l/1pm7J7NuesWuaq1M6lqG4/GKOmp9U++7z7apbX9msaa/9ym1lWxrf////UTdqBAAAAbX7aBoJh0MAUUC2T4pUrdcJiMEpyluQEInfEYsApyslHKHOIcRYgxNg26BpNAGhvBAoAw4QDRyALKRmS4bOYuipJ0UX0kn6RkaK9SSTUqKKjI2pJJPUpJAyUaooo9aKLVJJIoooooo/9T1JdJIyRyCvBX/CCn/+QUCivBQY7/CmzLdgAQAK/4AAmwbcGK0FhxkArXk5kjR0BHx1Qf9mqJpNjV2QwNu03I2qELuB/a4oBXj0kDRaeq+u5n/6FBD/5UUYwJGIUtJUneZQAAAD/oAACvHdqb+MTZqom3BBGnoYSSnQ1gYBxiPy+clcHU9EOAYuIGVm5shyKAZjVWAgkAgH40PMvVv/zmHiXg086exEVO6zqAGABwAAwUNUdeJL0DAsGSRtMBBdL5X+TFDMW9XZg0gHBkX3+YKojeNVqAAmpAlABwAAAAGDalrXlMk0RGRHSUg7V11TOrM9LZF/x0zq1BQOVJyCIaKpcmzIAETIGwAAwfRyDvopnUaWb6Kxxinl85biv7iQzgVENMewQufi2ZqpMQU1FMy4xMDCqqqqqqqqqqlAM7xjADAAABl9anrKeRNfBEZFY7owQ5H3BfArcYdQDc8X8A4AAMv0bWTpMvIcaOr4r5hfcFEweFjjVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVX/+1DE/oAQuP9J/boAKR+R6H2lioRVVVVVVVVVVVVVVVVAAM1d0A4AAAAAYP9cjfhdidDDTj+PNZ7wGh6FoErQEBgvOdAGjQfYx7D36rFtVZVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVAAAJCJAOAAAAAGC13AmBpa+Jr86mntXO2cAAAdABBVtbyoKAbTv8iUWsukxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqdwA3//swxPUASSBzN+ns5eCxiCj83OCcBAfTLscscv1jsBPwh/8GQTQcaQDUJg/XyAaq7vf1LgDnM/x6o8gqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqBGAAAJIMoAgoBIuCQX8nwgr/F1MQU1FMy4xMDBVVVVV//sQxP2AxdxDO+aDIGCaiCd40eCMVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE84BDyEFNyDznIHCIKb0HlORVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTuAsOgPUvmvKjoSQepeNAsHVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxOuAwxRDO+aBYOBIB+e5MChcVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE6wDCmD8wjLRE4FQH5VD1DOxVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTgA8J0DRsHmMAoAAA/wAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV",PA=""+new URL("ground-DEmVVmg-.mp3",import.meta.url).href,LA="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYxLjcuMTAzAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABYaW5nAAAADwAAAA0AAA7bADY2NjY2NjZOTk5OTk5OTmtra2tra2trgICAgICAgI6Ojo6Ojo6On5+fn5+fn5+0tLS0tLS0wsLCwsLCwsLQ0NDQ0NDQ0N7e3t7e3t7s7Ozs7Ozs7Pj4+Pj4+Pj4/////////wAAAABMYXZjNjEuMTkAAAAAAAAAAAAAAAAkBJIAAAAAAAAO26AqPNwAAAAAAP/7sMQAAATQBT+jAAAhgw3nPPSNxQA23vv9+PgAHIAN63reUcGCBNYHIFxxwo7KHPyn/+sH/wfOQfPhkDSGaYVUe1kTYAbjZOEIgXI8C9g/SbC3lzIgI8aD9LqlfYLohtAlAHAGXSS44YYxDDA1wgkhb8A0EALWoA5I92f2VWQSfSpAbW/u+l/AUhxzWOSrEjm5KP9ujmv/t/v//tUDd5V3dVsttSgAcCxBWlYAmBGSwAqBaxNiVF3HwUywbrBU4wFJAz01LzWGm7Lx0qb452OzWlBbuBnIRp1ZNZm9muqpmaWmn7z8f72ff4bz21tz/78qmus22Z/U+s7ld+3/3P2oqwDAx64b02B+zVCg0Q0UzICIpEcxaHAYBTqIQInO8LSHQCmEHEICbNCQaez8CkUfiJWOAAgAaMK00GzwNg4BqgBJQE9BawgoLLG+NMOeKIK0DCAJhSWdGYD5wxmOiFpQWaEcBvhskJ1OD0VC2aDaFgAkQgY7xihs7nDN0DguMXOPROEGJAPuAM8UkMgkWLa03kTLicvMFzBLjlk+Sw6hkGUjR2pVIIIoIuTxIkHD4xxC4BShDyutFG7tob219QnNAzM0mJy6Bh2akutNe3//Y0W6aaaCDGB5MvsIxKpsKAgAAAAAOgNJgmS3dgBlBMiIUBEOgQEEIiOEiIoCREJqCpi4yZuImSo4UPADppgmFipmp2KDJlACkCPAJnoaVnAiOjCAMwoTFglNZTBeRyDAbmKAqkNDNQsCo9pYqON+qZ03YJixLkOAjDQgtCGALiJ8v6tWhdRKR3WCCICAwUonEZXA76zs9qmv3qzd3ZpJEnwr//uAxOqADaknOfTzACtMsui/NTRAiGWnsnbnGIAmX9qayr3GsxHtaLzEK3SUtEuendVv/+vd3KbuGf6pL3fnO2BGAJ8QJaeB9V0QmhYJORC9KKL61NPV7tSzMxiQ4VJPjQy+/DcXpLWFjUaoozef+YdiJwRr/5e5KscPpqXPKA43nnPY35/7Xa9NTg4D3////ZCNCoAGAABBJzq0mPSYwigyqyQ44AlIwJIluCn4BTlSFajOWAw00iVZWRKzjUWSJ6GDPlL1sZVscqU2YRhKVw1U8hyW/+P/+epXHVWVtjGpQWaVQ4siOhY+IRKWDTYpQpikYExUMjQmKip4ImSImmqSkJKRGkKTSriFhE1aGCKbSpQNDJKUDU1ibVc9S1Fuf//xZIiYqSw2TKyLYxxq5xSRNkrlkWLblmVll0V1CHZFATNE5ZZNzCBOARywARhDQtB3SGyOMZM6hAuKksLWVJwEHA+yy4RNXO2Hilf/+5DE9gAiDZdVub2QArA0bT+ykARsyNFE1WHEqZmGFMYWs5N+Vb+HGz81y4uAlSvWh//TUv1QzONt7Q6WsPpalkpUSoq8UKlSVosqeBURN4xjkFYlfS5gUUIBJSuut3IeF312M3WIqFSpOZYItlL1LVVYeGgoiqcQmCX3h2mCzq7P9zVzCnRmdZ/w/iztX3+7ZPSQPXRHL9ywWu41YOT522SOsyiz/2Zf1yImpFf11yLyXm3qvrKCM8yYNZcYWKZ0WNTraOsBZVUTR0BNtu7XcAEsHhETmVLkQCsFZAuRY6cxWAUpX+ZIetGy0onDMsJ2olC8sddyFa49VtahGMKDQj5Kbw4Sh0WqQFRRSkoNjM3bQnLChKfen2WScN+Q+GiF153OOQkuo5rmI7qkKQ4IzYzwpCIvO28YTSqmBEiy7/3cDBAVUJOkSDLqdLSaGrtrsuQ+gZBC5TEmWwnkCWslAheEQOMgrUZAMqYQjOYlB5uwVScgtJIFyQycgJHOI6JVzsOeVsqGr0vRvtc2r9jMj6MjIzx2WbeLhebeNST4gKL/+3DE3YAONSVf56RuYcKn6nWDDiQ0hYMCI1lu2+4BT0kEvn1QAnKEFEIQEMGAexcrLXrLKsChlW0gBkET0pKCmJbJNcXyw44EgThFZBg+hRx0EUNGJxJpEEJu9RM3SzbtcdS8vd1czzzRqECeoPx0VLpPVQ9d+8/DNEPre0d1x3y1yjf+8ZQr9EgaHZQAkPO7ffgg3J0FVh0qUOim6i6vl5P2oEnHENh2W1TnhaORJI7HqpCKEAJBOIgwOOGJSDUJMLejb3l6NEKbRHNnupoxJOirTdKWZsx7WKz02irRZT77SdIVr1Ptap7TPj5zQPkcWxMj8y/20mF71QtakAUjLtv8DHETxgavhpKwqT7U1nI8MqjDK2GNu5dDXge1TVVznt3hrTD9TAuZzXWN6Htdgho1OdWsL6I///tQxP4ADf05T60wbumfIup9gYo8NLHbnxG3Lk6kah7VFUhUEMEBDOjR3X3F7D6l5SZeWS04elp0yuKbVMKHCYcq1FQ2FdLlFE5HURRoEbNI4CRl2IKOo1j2Lqez+KwJ9SL0Ul44DLUDe8aVplfoQXtKKNuXOa7bJWxvjRfAnpi81d4zbOLUzJJBjTR6fNravrFY0Wfe6Q4UG00efQK1KoIQmnNe5wOsIhIuU66XlQkIMrcaEsxK59WeT8palJ5NUithBnMQERzQU4wNEfNQy//7YMTvgA6ZRVHsGQ7pw6DqfYYhXQWXCEqckAWgajkcYo5tc0akZSMrP3NoWu1//+5VI5bllW/82/rarKMkYOe6OoU7aMENoyX7gFxCzA8RD5WgvMsRTzbL3MZhmax4ox64R2BEPUgqXu9u0EjrD/Ht3nMxlGIJxrAL4uk1zjN7lIOoZt94fKcHY/y+nS6fu/0OdzvugRtizQzEQEbd3/4ACOJJW+mYikpSWcQJMrWHdRX8fbA6IB2AoHSOU1n5UmappmnvQp1FRB5SUaEJsMYm3GowJWWNc6JcY1DM5VnJ0Mq2oI84p37wtvUIokssiE1OrTcaYQEyKJiEMgEkXLvgDxETIf/7cMT0gBjFo02sMfHhgaZp/YGKPC3YOwZCY05Ac0puDV2dPy0F+WQCAsTDChAcUjqNmb6KVCNo0GIwxZMEVwx1kw8lQQVlSUUiEDdzXroxFxJl328PdTZ5Kclx1vVd/qQ/fToKh5YyAhJan/wIUSsCiXsxIZiDURg/CmJ4TUznw+y40YzrSDtHEaB1kHg3Wcq23C6A/ksXh5Scuybfz+8/1+VWvjf7P/6zNqU5KPyNR0uriKRo+Kg4o9ClJAbOnJI2jzFomnPC0VyZGonFmWhaWGrw/yWm/f9NBHhkMBAUVP/QCqVcok6Mq/bAiTIr5QdsdFWWGhUPw/OUlSai4PMaGZ6myUGl98d9x9tWPBbtX7ZMq3KmShM1qZRh6VLrSyzK9FOy1DtREXyDVhJgkoqVfayxJy0NBgL/+1DE8wAKjGFLrDzJKYEa6X2EjbRLHt/8BD5MpDE3gc5q8bR7bCuNKhQ2YKACPRE4JqlZAUgXyRV0bDCVYHajog4OOwkBB1xSEa/Kdc3XogGLEg6rJSPkhnIcr1uTV8AMA4GjgfbN2MU2pKlHmIoSAibm1uwBYwNCMsRdZZFP1XDA2HpXLDR3GWug61C6oWHGEhU21N7XsVYWMNo8xVpaCViRlL3uoIDfBCdpMcHt98ievnX0gREidAxGgAIrE4AACAAA9cAtAcgoZDxAiBJB//tQxPYAC4DFSewkbSnWpCk9h5it4gQCF90U/z/6LxDQYGSNSWuACHBHQB2T0RgQEYxzl1FGap6QlMeqRUDhZdwqRCNjvOTh6wKDhSkIE94WxmzN/mcZlJ8SSgKscDGbMf89p0KQVV2z+1Qok6HSp0rrO8Gg6kWWaBQCNKW1AAyIAkCZzD2pIAFS2Fyo5LFblQlDd9QZPQjtGHRs7Zqy5bHA1suKUICOggaBwR2SFkGZ1YUgCnRUGAKEg1qgcUHillGo5eHYjEELmACivZDoBv/7UMTqgAtM2UfsGHGhbZnpfYSNZBMXflhLmPW0K0pipOwGk0k0eMeOUZmUGNOSlrmdBTLzTrn+SLVLVMbhI9JEqkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq4RsgAAqRKKTQ9e1ascBBAKyM3hUWTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+1DE7QANnN9J7KBvKV8a6Lz0jZyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tAxOgASZh/OewwayDmDuY9hhlUqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE4IPCmCUdDAzDKAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==",DA="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYxLjcuMTAzAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABYaW5nAAAADwAAAA8AAAtKAFBQUFBQUGxsbGxsbGx8fHx8fHyKioqKioqKmJiYmJiYmKampqamprGxsbGxsbG9vb29vb29yMjIyMjI0dHR0dHR0dvb29vb29vk5OTk5OTt7e3t7e3t9vb29vb29v///////wAAAABMYXZjNjEuMTkAAAAAAAAAAAAAAAAkAl8AAAAAAAALSgDn5/cAAAAAAP/7wMQAAAZoEWW0MAAjhLMtPzTwSAAAAQp/tNNuLNAAAABBCQEAxLghLh8uf4fug4c/lwffhj/BAEHSjv9PD//ghKO//9GTh8gBhWFIwBkZDTm5Wre3O54wyRaI4EOCKPHOMEEDsgkGHhCGxmB4BKiTlK0wgArFIdUoi/myQE5iiQwWJXG+HULaXgGuIaa0YnCgVBZmMiH50krgqcrVUskIVDMaRzOJ0oUTE3j2SygQCubZaxYrcinCHCVq5OZItj9WuVVuCzp1unP3UZ4nJXqkRqnRB8nWq2ZfhUeUwkXr26EqxzkaJYsZZf6lzJDpEgaxuaWkK0LUrrGIWaTyOEKLauMYi3fv7x9bnj6u3u8bxiWDthYfB+IMG1tzP54+qZ1iWtJYn/+pQooBSHZVZGlvu23SnSNLbNNBzV1oRO82JzG4u+yTPCDItIiWHmEjG0sVWdPqQamiiamJgbGaGminddy62kbmh8yspklpLrRZkHRXVSo1oJaSKq2cyNqRrWLCwcLSyRVZ0A5kDko8eMerFxmMq30FNablmHOURIpeAZb5Pnd95tyR04IwCay1YqW6eEJVWIhWUtNU2aSz0EJCF4ZYHDSCVyT6yuSlAEQ2pUKAiqUqiRrhQFByb/+rcEJBCmb9WOULD+iYVGAy7/h2ryeGiWR1grVWd5KLYdls9qTVApYZOb/YACNZ1SSm+hNA5WIgZMhdAICzkvasWcsROq7vb8RncXyBosWq1KihRLLSVkiKcf/1xygfBZ62++f2NYf13Fyk9T/rPqMvgc0ru6K/ehs7zzmXArtK26BIISQnhAAETTvhILkAIAjCCEeFXRTKQkxpJKJpfQZUGHg3QUBZx8rxEKEMVGrzWFBlKMGc/Ein9Z/lRaf/0uspk8U1t1+r/1H+agDeBYV8IAQ5HoKGSNi00aKL6c9s4QHfOygRSFZSvtctHMUaCqE+mfk5W6lBYs0oCIUh//twxNiADrzLbf2GgCGJFyw1lI2cvoo9HfUk1IhPJP/5gvAYd7PuKBBRlEOOXxgAgoykHFG2rNWqPNZEhspRF2AsVlNZm9HU0hUs9F9mWpxYubkTxICkde9CYfkXmk/UUr//eI/0/loJX+Ou5P+wAELjXEWKgBShagjymCj6zNej+r0gRhwGRcPDzRC9hI/bK2FYm9w8TjQyS+xAMNz25UcO//q5R//W8kG7MjHNJfUACUoxa2VoWJUOiGAPPHFXq2RB44o0UMyjAMyuPlwjw+08P8EEGYjXaL4/gXHYmSrdnz8ShD5EaNoDB1//zFG/0fMrAUKJLUAvhABKY1zGfMtQwS9QtaQwBlQKgWAaUxFAwMyQbFPlqMvlvTw6WKWEAcLvvYDBbR9DCXnLxMI4Rf/ykYf/3/8crP/7QMT+AAtszUtN4QHpKBjn6bS1rQzgTISAZo/QACUSV6BFljOR4SNqZE0yVY0cFoggaE4omaNtSpQIFWrT2lHYStE7AXKr6HrX0WiX9jPDQ1//j8l/8tVBSDVQQkTt+AAJVFDkEKXTRm3LXJ/KSd2HVyNdchoZIu9GKRKJHJsZPYWmHv3t6glF6tnMW84/lQmFz/nHev5UkmtMApPg5wC4M4AFCIilBkIkD8MlDyFF5URyNycN//swxPuACJyXP00lTuD/kuh1hKncHUEDAsEd3JU9Jq6eIjYnfnCSMPqd7B5JELySNiboAAAHcbQhID6C5N4LlXiuDATpUHlKYSDcGPc61ZREOpESa1BVa1lKCJFP1PCFuq+KFEctYail4KjRYJeJpaGrX10Yvoq1eLJHJ4paCNnFUikHhWllsjqLYUtKhcyrtDL8qb0G4noNL5tT//swxPyACCyZRawk7SEmkuh1lh2sacAAAEERMojmxN2UPVQzrXFWrlVw5UvfZyJPjoBQQSOciYiUYlcEnNoBp0MBCuwkFdod2RX3oA4MMqaFqXoarnQ1dBPBXqwqKrTY5Ow9GorQMaZwfWhIwM8tZhREA1s/2PrA1RG44ko0AACgY2CgJEYSqrNFwNKRYeh+42vd9/TShAnXRM4f//swxPqACLjHQaww6aEKkyh9hh106PrBeq2U4EMzOLFvHI8P7ffW60C8qALDVCy1hz91Gg1p5ciE5wGise6VFxDtSaaeevi6WFBB+9/+LfAaL6utRAAAAcUJhLKposRtsmyUaYMmVA4NmymEvEWullmsrY/thqaJux8ic/6hUm20p6A4xcIyNrsvW5xRzwcE0zHbchh4jZIv7rJM//sgxPmAR/h5Reww7SDYDuc08x3cVwlIPztNHtt21skQAAAQTAAw0wMw2dW0BN0AZXhM5iahhJun9sd9v6GLO5sSBuyyCMAgQ34Y95LtNmw9Vo2/pRAgG1of3iSCb6lMQU1FMy4xMDBVVVVVVVUSASJyUAABChEoWPGZFWcWNLuNdP/7IMT1AEbYdTmnmPJg0I5m9YSdpeTAKrjGI5TxRdRhIJKSYSiJxEDGagxhEsJgGMUDBoGFixDU8lpzSkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqp5EYAAgoou3kvo5ybhJ5osA0ba75aQEoNhk/H/+yDE9gBGeGkxrBhO4M6Lpf2DIdzmBgCRpih+HAwSy6TVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVXgAAAAE9EZHmXgXQhEFEpMQU1FMy4xMDCqqqqq//sQxPiARiBnH4yk7OC2i6W1hhlUqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE8oBFkFMfTBknAJCJ5HGEGHSqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EMTzgETAXSuoGGOgdwVlNYAYhKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQxPOAQ7w9JYwBBGByAWPtjAgEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDE6gDCoC0dDATFIEqBZBD0hASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EMTdgcFsCxsHvCAgDQEjVBEABqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",NA="data:audio/mpeg;base64,SUQzBAAAAAAAIlRTU0UAAAAOAAADTGF2ZjYxLjcuMTAzAAAAAAAAAAAAAAD/+0DAAAAAAAAAAAAAAAAAAAAAAABYaW5nAAAADwAAAA0AAAilAGlpaWlpaWl7e3t7e3t7e4eHh4eHh4eHk5OTk5OTk5+fn5+fn5+fq6urq6urq6u3t7e3t7e3w8PDw8PDw8PPz8/Pz8/Pz9vb29vb29vn5+fn5+fn5/Pz8/Pz8/Pz/////////wAAAABMYXZjNjEuMTkAAAAAAAAAAAAAAAAkBDUAAAAAAAAIpftjQMAAAAAAAP/7wMQAAAekH0+1gAAi0iCpfz0wgAAAAAYA5K7woPDyGBgEYgFxGCXs/wpKSkpAwJAwXfDHLh/gg5QYuicP/Lg/iAEAQOJwxBD/n//lAQDHLg+AAIGAWZcw4RVYIhgOBAAAYPYnRgOBxmPqhWaUTaQEBpMHoHdFIwCAAjGvAkMDMCYDAKUgQA2HAGGAWAyTAUAYItDUDNEMcAeYT+OAGxkJhEMEJwTALoaQgMXCTGOMBcQ4RCVxZIERGqLsMiKSFrKI5JgXxKJAit8mETIqEFI4pHTUUkZG34ucrMakOJ4mTExZLS/jKlwh5PkQJowNjPRMWSpP/1pGbhtY1gKqlRL///b///9aAAVF33/AAAAQITDSaPeeUzqKjX0SM5kAw2DFrJou0yF3XP/bfS6kCkQWydSaC7V0eQn3XrwbJAg3j7AAAvKREuECIVpjI0MybUPKNCY4Hk8DSBgjgB9kFSr4J4U1a6m5E224V8lMQU1FMy4xMDBVVVVVVVVVVVVVVRAL//7QAAAAgUhMEEBpwHJtpFF2hBJwIgOSj67FLXZCAz3yYsAAQ1VjeSJD2IMW62JVrMHlxUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVMBiqAAAAAAAAAAAAAALoCJ1GwFLGF4gJHiPEkPDTCCJ3sAAAAAAawITDTgaQyiY0WudZN1oTWWW8TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTBe2wAAAAAAFQB2T1SeQAzw0lT4kKVGB5tBRBOQHtzGxyIF6baEKSpMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRApAAAAAAAAJsIdhCYgkQoxdqWiCWABYLozjR4B0rKFPUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//swxOoAx1xXM73DACioBmb5t6SdVVVVVVVVVQAqlwAAAAAACgbJqiSwKl8weJTqh5UAFVgEYFymCHdpTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVSIJeAAAAAAAKSQCpMXADg2W2kLqAhmABgSoNS05Qa0LUZBMQU1FMy4xMDBVVVVV//sQxPEBw+wnT8zhgmhZg6o6sAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUDeZAAAAAAABWNYVAkIMNteXIAh1ICslABQ/QRDD0C6kxBTUUzLjEwMKqqqqr/+xDE8oADyBdL2ZAAAGsDabuwAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgVgAAAVukpUkyDVgYrtBSJBaO4UiDmS+wGVTEFNRTMuMTAwVVVVVf/7EMTqAcLMFUnH4SCoRoKouQw8DVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVgAAAAAAAArZVFAJHg8XAWg1AA2bVLhGOgCrxVMQU1FMy4xMDBVVVVV//sQxOaBwmwRN8xjACA2gif4/DwEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQhwAAAAAAAABdTDkN8LY5HAB3ZcAAGFPkxBTUUzLjEwMKqqqqr/+xDE5gHCxBU5yGHgaCeBaLi3vAWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrAAABnFqB0miQo6E/VTEFNRTMuMTAwVVVVVf/7EMTnAcKAEznMYCCoOAInOQwwDVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxOYBwkwRPce94Cg0Aie4+BhFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE4wHBhAsyjD3gKDUB5ZGcYAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7EMTkgcI0ETPMPGIgKoGlEZxgBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sQxOIBwfQNL8hh4CAhAaPhgzAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+xDE3IPBlAsYp7BAOAAAP8AAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",UA=Object.assign({"./sfx/ceramic-break.mp3":VA,"./sfx/ceramic-hit.mp3":IA,"./sfx/ground.mp3":PA,"./sfx/skitter.mp3":LA,"./sfx/wood-break.mp3":DA,"./sfx/wood-hit.mp3":NA}),jh={muzzle:{duration:.14,pitch:165,fall:.38,filter:1050,tone:.12,noise:.13},hit:{duration:.1,pitch:720,fall:.56,filter:2700,tone:.09,noise:.14,level:.6},fracture:{duration:.18,pitch:980,fall:.33,filter:2300,tone:.07,noise:.2,level:.69},neighbor:{duration:.075,pitch:510,fall:.63,filter:1800,tone:.055,noise:.08,level:.36},ground:{duration:.15,pitch:113,fall:.5,filter:450,tone:.09,noise:.13,level:.5},skitter:{duration:.08,pitch:285,fall:.56,filter:1100,tone:.018,noise:.05,level:.34},win:{duration:.31,pitch:520,fall:850/520,tone:.16,wave:"sine"},lose:{duration:.27,pitch:270,fall:112/270,tone:.15,wave:"sine"}},qA=7,Kh=.86;function FA(r,e){return r==="hit"||r==="neighbor"?e?"wood-hit":"ceramic-hit":r==="fracture"?e?"wood-break":"ceramic-break":r}function BA(){const r=Object.entries(UA).map(([f,p])=>[f.split("/").at(-1).replace(".mp3",""),fetch(p).then(v=>v.ok?v.arrayBuffer():null).catch(()=>null)]),e=new Map,t=new Set;let n,i,s,o,a=0,c=!1;function l(){if(!(c||!window.AudioContext)){if(!n){n=new AudioContext,s=n.createGain(),s.gain.value=Kh;const f=n.createDynamicsCompressor();f.threshold.value=-16,f.knee.value=10,f.ratio.value=6,f.attack.value=.004,f.release.value=.14,s.connect(f).connect(n.destination),i=n.createBuffer(1,Math.ceil(n.sampleRate*.2),n.sampleRate);const p=i.getChannelData(0);for(let v=0;v<p.length;v++)p[v]=Math.random()*2-1;for(const[v,y]of r)y.then(x=>x&&n.decodeAudioData(x)).then(x=>{x&&e.set(v,x)}).catch(()=>{})}n.state!=="running"&&!o&&(o=n.resume().catch(()=>{}).finally(()=>{o=null}))}}function h(f,p){if(!n.createStereoPanner){f.connect(s);return}const v=n.createStereoPanner();v.pan.value=Math.max(-.55,Math.min(.55,p*.24)),f.connect(v).connect(s)}function u(f,p){t.add(f),f[0].onended=()=>{t.delete(f)};for(const v of f)v.start(p)}function d(f,p,v,y){const x=n.createBufferSource();x.buffer=v,x.playbackRate.value=(p.grounded?.91:1)*(.96+Math.random()*.08);const A=n.createGain();A.gain.value=jh[f].level*p.strength*(p.grounded?.82:1),x.connect(A),h(A,p.x),u([x],y)}function m(f,{strength:p,wood:v,grounded:y,x},A){const M=jh[f],w=A+M.duration,V=!v&&["hit","neighbor","fracture"].includes(f),E=y&&f==="fracture"?.65:1,S=M.pitch*(v?.56:1)*E,C=n.createOscillator(),U=n.createGain();if(C.type=M.wave??(V?"sine":"triangle"),C.frequency.setValueAtTime(S,A),C.frequency.exponentialRampToValueAtTime(S*M.fall,w),U.gain.setValueAtTime(1e-4,A),U.gain.exponentialRampToValueAtTime(Math.max(2e-4,M.tone*p*E),A+.005),U.gain.exponentialRampToValueAtTime(1e-4,w),C.connect(U),h(U,x),!M.noise){u([C],A),C.stop(w);return}const P=n.createBufferSource();P.buffer=i;const D=n.createBiquadFilter();D.type=V?"bandpass":"lowpass",D.frequency.value=M.filter*E;const F=n.createGain();F.gain.setValueAtTime(Math.max(2e-4,M.noise*p*E),A),F.gain.exponentialRampToValueAtTime(1e-4,w),P.connect(D).connect(F),h(F,x),u([C,P],A),C.stop(w),P.stop(w)}function g(f,p){if(c||n?.state!=="running"||t.size>=qA)return;const v=e.get(FA(f,p.wood)),y=n.currentTime;v?d(f,p,v,y):m(f,p,y)}function _(){a++;for(const f of t)for(const p of f)p.stop();t.clear()}return{unlock:l,clear:_,playCombo(f){if(c||n?.state!=="running")return;const p=[523,659,784,988,1175],v=Math.min(p.length,f-1);for(let y=0;y<v;y++){const x=n.currentTime+y*.065,A=n.createOscillator(),M=n.createGain();A.frequency.value=p[y],M.gain.setValueAtTime(1e-4,x),M.gain.exponentialRampToValueAtTime(.1,x+.009),M.gain.exponentialRampToValueAtTime(1e-4,x+.22),A.connect(M).connect(s),u([A],x),A.stop(x+.23)}},get muted(){return c},toggle(){c=!c,c?_():l(),s&&s.gain.setTargetAtTime(c?0:Kh,n.currentTime,.015)},play(f,p){if(c||!n)return;if(n.state==="running"){g(f,p);return}const v=performance.now(),y=a;o?.then(()=>{a===y&&performance.now()-v<180&&g(f,p)})}}}const Qr={muzzle:{duration:.17,color:16760408,size:.72,count:6,spread:.46},hit:{duration:.24,color:16767875,size:.66,count:8,spread:.6},fracture:{duration:.42,color:16759135,size:.82,count:10,spread:1.16},neighbor:{duration:.19,color:16767648,size:.44,count:5,spread:.4},ground:{duration:.5,color:15122842,size:.84,count:8,spread:1.22},skitter:{duration:.24,color:14730660,size:.32,count:4,spread:.37}},Jh=10,ma=18,OA=10,od=3,ad=.016,cd=.019,ld=.29,zA=ad+(od-1)*cd+ld,ga=64;function Ei(r){const e=document.createElement("canvas");e.width=e.height=ga;const t=e.getContext("2d");return t.translate(ga/2,ga/2),r(t),new Nc(e)}function Zh(r){return!r.grounded&&(r.kind==="hit"||r.kind==="fracture")}function kA(){return{flash:Ei(r=>{const e=r.createRadialGradient(0,0,1,0,0,31);e.addColorStop(0,"#fff"),e.addColorStop(.23,"#ffffffe3"),e.addColorStop(.52,"#ffffff65"),e.addColorStop(1,"#ffffff00"),r.fillStyle=e,r.fillRect(-32,-32,64,64),r.fillStyle="#fff",r.beginPath();for(let t=0;t<8;t++){const n=t*Math.PI/4,i=t%2?5:26,s=Math.cos(n)*i,o=Math.sin(n)*i;t===0?r.moveTo(s,o):r.lineTo(s,o)}r.closePath(),r.fill()}),ring:Ei(r=>{r.lineWidth=3,r.strokeStyle="#ffffffe0";for(let e=0;e<3;e++){const t=e*Math.PI*2/3;r.beginPath(),r.arc(0,0,25,t,t+1.55),r.stroke()}}),chip:Ei(r=>{r.fillStyle="#fff",r.beginPath(),r.moveTo(-23,13),r.lineTo(4,-21),r.lineTo(22,-5),r.lineTo(14,21),r.closePath(),r.fill(),r.fillStyle="#ffffff73",r.fillRect(-27,-4,49,8)}),dust:Ei(r=>{const e=r.createRadialGradient(-3,-4,3,0,0,31);e.addColorStop(0,"#fffffff2"),e.addColorStop(.55,"#ffffffbf"),e.addColorStop(1,"#ffffff00"),r.fillStyle=e,r.fillRect(-32,-32,64,64)}),smoke:Ei(r=>{for(const[e,t,n]of[[-9,4,19],[7,-9,18],[11,8,16],[0,1,24]]){const i=r.createRadialGradient(e,t,0,e,t,n);i.addColorStop(0,"#ffffffe8"),i.addColorStop(.36,"#ffffffc2"),i.addColorStop(.72,"#ffffff37"),i.addColorStop(1,"#ffffff00"),r.fillStyle=i,r.fillRect(e-n,t-n,n*2,n*2)}}),flame:Ei(r=>{for(const[e,t,n]of[[0,0,30],[-14,6,15],[12,10,17],[3,-13,16]]){const i=r.createRadialGradient(e,t,0,e,t,n);i.addColorStop(0,"#fff5b9"),i.addColorStop(.27,"#ffbc42d9"),i.addColorStop(.62,"#fa5d1974"),i.addColorStop(1,"#f7350b00"),r.fillStyle=i,r.fillRect(e-n,t-n,n*2,n*2)}}),ember:Ei(r=>{const e=r.createLinearGradient(0,30,0,-20);e.addColorStop(0,"#f9370d00"),e.addColorStop(.55,"#ff790b99"),e.addColorStop(.86,"#ffd258"),e.addColorStop(1,"#fff7c3"),r.fillStyle=e,r.beginPath(),r.moveTo(0,31),r.lineTo(-13,-15),r.lineTo(-6,-29),r.lineTo(7,-29),r.lineTo(13,-15),r.closePath(),r.fill()})}}function HA(r){const e=kA(),t=new Oe,n=new q,i=Array.from({length:Jh*ma},()=>{const _=new Ic({map:e.flash,transparent:!0,depthWrite:!1,toneMapped:!1}),f=new Cu(_);f.visible=!1;const p=new q;return f.userData.velocity=p,f.onBeforeRender=(v,y,x)=>{f.userData.isEmber&&(n.copy(p).transformDirection(x.matrixWorldInverse),_.rotation=Math.atan2(-n.x,n.y))},r.add(f),f});let s=[],o=0;const a=BA();function c(_){return s=s.filter(f=>{const p=Qr[f.kind].duration;return _-f.time<(Zh(f)?Math.max(p,zA):p)}),s}function l(_,f,p,v){const y=(v-ad-p*cd)/ld;if(_.visible=y>=0&&y<1,!_.visible)return;const x=_.material;x.map=e.smoke,x.color.setHex(15921389),x.depthTest=!0,x.opacity=(.16+.26*f.strength)*Math.min(1,.26+y*8)*(1-y)**1.35;const A=p*2.39996+f.seed*.81;x.rotation=A+y*.28;const[M,w,V]=f.normal,E=.15+y*.3,S=.065+y*.18;_.position.set(f.x+M*E+Math.cos(A)*S,f.y+w*E+.04+y*.24,f.z+V*E+Math.sin(A)*S);const C=(.19+y*.35)*(.83+f.strength*.17);_.scale.set(C,C*.85,1)}function h(_,f,p,v){const y=_.material,x=.72+f.strength*.28,[A,M,w]=f.normal,V=f.seed*1.39+p*2.39996;if(y.blending=hs,p<3){const J=p===0,re=p===2,oe=v/(J?.074:.105);if(_.visible=oe<1,!_.visible)return;const W=J?.025:re?.2+v*2.7:.075+v*.8,ue=(J?.56:re?.34:.68)*x*(1+oe*.32);y.map=J?e.flash:e.flame,y.color.setHex(J?16774605:re?16763504:16758355),y.depthTest=!1,y.rotation=V,y.opacity=(J?1:re?.78:.83)*x*(1-oe)**1.18,_.position.set(f.x+A*W,f.y+M*W,f.z+w*W),_.scale.setScalar(ue);return}const E=v/.155;if(_.visible=E<1,!_.visible)return;const S=Math.hypot(A,w),C=S>.001?w/S:1,U=S>.001?-A/S:0,P=x*(3.2+.95*Math.cos(V*1.67)),D=1.62*Math.cos(V),F=1.62*Math.sin(V),N=A*P+C*D+M*U*F,$=M*P+(w*C-A*U)*F,z=w*P+U*D-M*C*F;_.position.set(f.x+A*.07+N*v,f.y+M*.07+$*v-.9*v**2,f.z+w*.07+z*v),y.map=e.ember,y.color.setHex(16769170),y.opacity=x*.94*(1-E)**1.28,y.depthTest=!0,_.userData.isEmber=!0,_.userData.velocity.set(N,$-1.8*v,z),_.scale.set(.047*x,.17*x*(1-E*.56),1)}function u(_,f,p,v,y,x){const A=_.material,[M,w,V]=f.normal,E=y*p.duration,S=.54+.46*f.strength,C=v*2.39996+f.seed*1.13;if(A.color.setHex(16777215),v<2){const te=v===0,G=1-E/(te?.085:.18);if(_.visible=G>0,!_.visible)return;A.map=te?e.flash:e.flame,A.blending=hs,A.depthTest=!1,A.color.setHex(te?16772015:16777215),A.rotation=C,A.opacity=S*(te?G**1.75:.8*G**1.25);const k=te?.12:.16+E*.44;_.position.set(f.x+M*k,f.y+w*k+E*.31,f.z+V*k),_.scale.setScalar(p.size*S*(te?.93+E*1.5:.52+E*5.8));return}const U=v<x+2,P=S*(1.58+.95*Math.sin(C*1.61)**2),D=Math.hypot(M,V),F=D>.001?V/D:1,N=D>.001?-M/D:0,$=Math.cos(C)*P,z=Math.sin(C)*P,J=P*(U?.94:.45),re=M*J+F*$+w*N*z,fe=w*J+(V*F-M*N)*z+.47,oe=V*J+N*$-w*F*z,W=E*(1-y*.25);_.position.set(f.x+M*.13+re*W,f.y+w*.13+fe*W-1.9*E**2,f.z+V*.13+oe*W);const ue=(1-y)**(U?1.25:1.7);A.map=U?e.ember:e.chip,A.blending=U?hs:di,A.depthTest=!0,A.opacity=S*ue,U?(_.userData.isEmber=!0,_.userData.velocity.set(re,fe-3.8*E,oe),_.scale.set(.054*S,(.14+P*.048)*S*(1-y*.65),1)):(A.color.setHex(f.color??p.color).lerp(t.setHex(16767385),.32),A.rotation=C+y*5.2,_.scale.set(.11*S,.14*S,1))}function d(_,f,p,v,y){const x=_.material,A=v===0,M=v===1&&f.kind!=="muzzle",w=A?"flash":M?"ring":"chip",[V,E,S]=f.normal,C=v*2.4+f.seed*.97,U=p.spread*y*(.76+.24*Math.cos(C*2.12)),P=A||M?.1:.08+U*.47,D=A||M||f.kind==="muzzle"?p.color:f.color??p.color;x.map=e[w],x.color.setHex(D),!A&&!M&&x.color.lerp(t.setHex(16777215),.28),x.depthTest=!A&&!M,x.opacity=f.strength*(1-y)**(A?1.4:1.7),x.rotation=C+(A||M?y*.4:y*4.5),_.position.set(f.x+V*P+(A||M?0:Math.cos(C)*U*.62),f.y+E*P+(A||M?0:Math.sin(C)*U*.56+y*(.48-y*.7)),f.z+S*P+(A||M?0:Math.sin(C*1.61)*U*.57));const F=p.size*(.7+f.strength*.3);if(A)_.scale.setScalar(F*(.66+y*.64));else if(M)_.scale.setScalar(F*(.65+y*1.48));else{const N=(.105+.066*Math.cos(C*1.5))*(1+f.strength*.45);_.scale.set(N,N*1.66,1)}}function m(_,f,p,v,y){const x=_.material,M=f.kind==="fracture"&&v>=4,w=v*2.4+f.seed*1.23,V=p.spread*(.06+y*(v===0?.48:.9)),E=M?Math.max(.023,y*(.74-y*.9)):.035+y*.12,[S,,C]=f.normal;x.map=M?e.chip:e.dust,x.color.setHex(M?f.color??p.color:Qr.ground.color),M&&x.color.lerp(t.setHex(16777215),.22),x.opacity=(M?.92:.67)*f.strength*(1-y)**1.55,x.depthTest=!0,x.rotation=M?w+y*5:0,_.position.set(f.x+Math.cos(w)*V*(v===0?.25:1)+S*y*.33,f.y+E,f.z+Math.sin(w)*V*(v===0?.25:1)+C*y*.33);const U=M?.12+.04*Math.cos(w*2):p.size*(v===0?.7+y*.87:.4+y*.66);_.scale.set(U,U*(M?1.45:.57),1)}function g(_,f){for(let p=0;p<i.length;p++){const v=i[p],y=p%ma,x=_[Math.floor(p/ma)],A=x&&Qr[x.kind],M=A?f-x.time:1/0,w=M/(A?.duration??1),V=!!x?.cannon&&x.kind==="muzzle",E=!!x&&Zh(x),S=E?Math.round(4+(x.kind==="fracture"?5:3)*x.strength):0,C=2+S+(x?.kind==="fracture"?4:2),U=E&&y>=C&&y<C+od,P=V?OA:E?C:A?.count;v.visible=U||w>=0&&w<1&&y<P,v.visible&&(v.userData.isEmber=!1,v.material.blending=di,V?h(v,x,y,M):U?l(v,x,y-C,M):E?u(v,x,A,y,w,S):x.grounded||x.kind==="ground"||x.kind==="skitter"?m(v,x,A,y,w):d(v,x,A,y,w))}}return{unlock:a.unlock,get muted(){return a.muted},toggle:a.toggle,playCombo:a.playCombo,playResult(_){a.play(_?"win":"lose",{x:0,strength:1})},emit(_,{x:f,y:p,z:v},y,{strength:x=1,normal:A,color:M,wood:w=!1,grounded:V=!1,cannon:E=!1}={}){if(!Qr[_])return;const S=A?Math.hypot(A.x,A.y,A.z):0,C={kind:_,x:f,y:p,z:v,time:y,wood:w,grounded:V,cannon:E,seed:o++,strength:Math.max(.12,Math.min(1,x)),normal:S?[A.x/S,A.y/S,A.z/S]:[0,0,0],color:M==null?null:t.set(M).getHex()};s=[...c(y).slice(1-Jh),C],a.play(_,C)},sample:c,draw:g,clear(){s=[],o=0,a.clear(),g(s,0)}}}const GA=""+new URL("cannon-BB9JqZ6t.ogg",import.meta.url).href,WA=r=>document.getElementById(r),Ie=Object.fromEntries(["arena","sound","reset","view-mode","level-number","level-name","shots","targets","stage","start","advance","result-kicker","last-shot","score","round-points","combo","stars","hint","levels","shot-speed","result","result-title","result-detail","retry","next","error"].map(r=>[r,WA(r)])),bi=1/120,wi=1.34,ls=.706,Qh=.803,$h=.88,eu=1.5,tu=.75,XA=1.55,YA=.34,nu="Chạm hoặc nhấp vào mục tiêu để bắn",iu="Hết đạn · Đang chờ vật thể dừng lại";function su(r){const e=r.pieces.filter(([,l])=>l===0),t=e.map(([l])=>l*ls),n=e.map(([,,l])=>l*ls),[i,s]=[Math.min(...t),Math.max(...t)],[o,a]=[Math.min(...n),Math.max(...n)],c=hi+(r.margin??.22);return{width:Math.max(2.35,s-i+c),depth:r.depth??Math.max(.96,a-o+c),x:(i+s)/2,z:(o+a)/2}}async function jA(){Ie.hint.textContent="Đang tải mô hình 3D…",await KM();const{scene:r,camera:e,renderer:t,scenery:n,updateClouds:i}=oA(Ie.arena),s=t.domElement;s.tabIndex=0,s.setAttribute("aria-label","Dùng phím mũi tên để ngắm và phím cách để bắn");const o=new ky({gravity:new b(0,-mc,0),allowSleep:!0}),a=yA(o),c=new Ae({shape:new Ex,mass:0,material:a.floor,collisionFilterGroup:ro});c.quaternion.setFromEuler(-Math.PI/2,0,0),o.addBody(c);const l=HA(r);let h=Hh(),u,d=-1/0;const m=CA({scene:r,world:o,floor:c,surfaces:a,feedback:l,deckTop:wi,step:bi,onScored(B){const Y=h.hitTarget(B);Y&&(Ie.score.textContent=Xs(h.points),Y.title&&(!u||Y.count>=u.count)&&(u=Y))}}),g=tA();g.group.position.set(0,0,4.4),r.add(g.group);const _=g.pivot.getWorldPosition(new q),f=_.clone(),p=new Audio(GA);p.preload="auto",p.volume=.55;const v=new mt(new Uc(.15,.182,36),new li({color:"#ffe49e",depthTest:!1,transparent:!0,opacity:.93}));v.renderOrder=10,v.visible=!1,r.add(v);const y=new He,x=new q(0,1.65,0),A=new q,M=new q,w=new ku,V=new ri(new q(0,0,1),0);let E=!1,S=!0,C=0,U=0,P=0,D=0,F=0,N=-1/0,$=0,z="playing",J,re,fe=[];const oe=cA(ie);function W(B){Ie.hint.textContent!==B&&(Ie.hint.textContent=B)}function ue(){const B=Ut[C];Ie["level-number"].textContent=String(C+1).padStart(2,"0"),Ie["level-name"].textContent=B.name,Ie.shots.textContent=P,Ie.score.textContent=Xs(h.points),Ie.targets.textContent=m.targets.length,Ie.stage.textContent=`${U+1}/${B.stages.length}`,Ie.levels.value=String(C)}function te(B,Y){return o.addBody(Y),r.add(B),B.position.copy(Y.position),B.quaternion.copy(Y.quaternion),{view:B,body:Y}}function G({view:B,body:Y,visual:K}){o.removeBody(Y),K?.dispose(),pc(B)}function k(){Ie.result.hidden=!0,Ie.combo.hidden=!0,u=null,d=-1/0,J&&G(J),fe.forEach(G),fe=[];const B=Ut[C].stages[U],{layout:Y,cameraLayout:K}=B,ve=su(Y),{width:se,depth:Me,x:ge,z:ne}=ve,{view:pe,thickness:De,setLift:Le}=eA(se,Me,wi),_e=new Ae({type:B.motion?Ae.KINEMATIC:Ae.STATIC,allowSleep:!1,sleepSpeedLimit:.02,position:new b(ge,wi-De/2,ne),shape:new Rs(new b(se/2,De/2,Me/2)),material:a.deck});J={...te(pe,_e),baseX:ge,baseY:_e.position.y,thickness:De,setLift:Le,motion:B.motion},m.reset(_e);for(const[xe,Ne,nt,$e]of Y.pieces){const kt=$e??B.assetIndex??0,Ht=kt===5?1.18:fc;m.add({assetIndex:kt,position:new b(xe*ls,wi+Ne*Qh+Ht/2+.005,nt*ls)})}for(let xe=0;xe<3/bi&&!m.targets.every(Ne=>Ne.body.sleepState===Ae.SLEEPING);xe++)m.step(D,!0);const We=m.targets[Y.aim??0];x.copy(We.body.position),x.y+=.14;const O=B.motion==="slide"?$h/eu*2:0,le=B.motion==="lift"?tu:0,de=[];function Ee(xe,Ne,nt,$e,kt){for(const Ht of[-1,1])for(const ur of[-1,1]){const An=xe+Ht*$e,Ni=nt+ur*kt;de.push(new q(An,Ne,Ni)),(O||le)&&de.push(new q(An+O,Ne+le,Ni))}}Ee(ge,wi,ne,se/2+.035,Me/2+.035);for(const xe of m.targets){const{position:Ne}=xe.body;Ee(Ne.x,Ne.y+xe.asset.height/2+.06,Ne.z,hi/2,hi/2)}const ae=Math.max(...de.map(xe=>xe.y)),ee=K?su(K):ve;if(K){Ee(ee.x,wi,ee.z,ee.width/2+.035,ee.depth/2+.035);for(const[xe,Ne,nt]of K.pieces)Ee(xe*ls,wi+Ne*Qh+fc+.06,nt*ls,hi/2,hi/2)}re={width:Math.max(se,ee.width),depth:Me,top:Math.max(...de.map(xe=>xe.y)),aimTop:ae,x:ge,z:ne,travelX:O,anchor:f,framingPoints:de},ue(),oe.showStage(C,U),Ie["last-shot"].hidden=P>0,Re(e.aspect),we(),g.reset(),p.pause(),g.aim(M.subVectors(x,_)),r.updateMatrixWorld(),F=D,$=D,z="playing",W(P?nu:iu)}function ie(B){C=B,U=0,P=Ut[B].shots,h=Hh(),N=-1/0,k(),z="intro",W("Nhấn Bắt đầu chơi để vào màn."),be("intro")}function me(){E||tt(),w.setFromCamera(y,e);const B=m.targets.filter(K=>K.landedAt===null).map(K=>K.view),Y=w.intersectObjects(B,!0)[0];V.constant=-J.body.position.z,Y?A.copy(Y.point):w.ray.intersectPlane(V,A)||A.copy(x),A.x=ci.clamp(A.x,-4.4,4.4),A.y=ci.clamp(A.y,.12,re.aimTop+.3),A.z=Math.min(A.z,re.z+re.depth/2),g.aim(M.subVectors(A,_)),v.position.copy(A),v.quaternion.copy(e.quaternion)}function ce(){if(z!=="playing"||P<=0||D-N<YA||!m.targets.some(ne=>ne.landedAt===null))return;l.unlock(),me();const B=Number(Ie["shot-speed"].value),Y=A.clone().sub(_),K=Math.max(.08,(Y.length()-g.muzzleDistance)/B);Y.y+=mc*K**2/2;const ve=Y.clone().normalize(),se=_.clone().addScaledVector(ve,g.muzzleDistance),Me=Y.addScaledVector(ve,-g.muzzleDistance).multiplyScalar(1/K);g.aim(ve),g.fire(),l.muted||(p.currentTime=0,p.play().catch(()=>{}));const ge=new Ae({mass:_A,material:a.ball,position:new b(se.x,se.y,se.z),velocity:new b(Me.x,Me.y,Me.z),shape:new Sx(mo),linearDamping:.12,angularDamping:.22});ge.isShot=!0,ge.shotId=Ut[C].shots-P+1,ge.addEventListener("collide",({body:ne,contact:pe})=>{if(ne!==c&&ne!==J.body||ge.contactAt!==void 0)return;ge.contactAt=D;const De=ge.position.vadd(pe.bi===ge?pe.ri:pe.rj);ne===c&&(De.y=.025),l.emit(ne===c?"ground":"neighbor",De,D,{strength:.42,wood:!0})}),fe.push({...te($M(),ge),start:D}),P--,N=D,ue(),P===0&&(Ie["last-shot"].hidden=!1,W(iu))}function be(B){const Y=Ut[C],K=B==="intro",ve=B==="won",se=B==="cleared",Me=C===Ut.length-1;Ie.result.dataset.mode=B,Ie["last-shot"].hidden=!0,Ie.combo.hidden=!0;const ge=Y.shots-P,ne=hA(ve,ge,Y.shots);Ie.stars.hidden=K||se,Ie.stars.setAttribute("aria-label",`${ne} trên 3 sao`),[...Ie.stars.children].forEach((pe,De)=>pe.classList.toggle("earned",De<ne)),Ie["result-kicker"].textContent=`VỊNH NẮNG  ·  MÀN ${String(C+1).padStart(2,"0")}`,Ie["result-title"].textContent=K?Y.name:se?"Sạch bàn rồi!":ve?Me?"Chinh phục Vịnh Nắng!":"Thắng màn!":"Hết đạn rồi!",Ie["round-points"].hidden=K,Ie["round-points"].textContent=Xs(h.points)+" điểm",Ie["result-detail"].textContent=K?`Bạn có ${Y.shots} viên đạn. Chạm vào mục tiêu để bắn đổ tất cả${Y.stages.length>1?" qua "+Y.stages.length+" chặng":""}.`:se?`Đã dọn chặng ${U+1}. Còn ${P} viên cho chặng tiếp theo.`:ve?`${ge} phát bắn · Chuỗi tốt nhất: ${h.best} vật`:`Còn ${m.targets.length} mục tiêu trên bàn. ${m.targets.length===1?"Lượt tới, thử ngắm vào thân vật nhé.":"Thử nhắm vào điểm tựa ở hàng dưới nhé."}`,Ie.start.hidden=!K,Ie.retry.hidden=K||se,Ie.next.hidden=!se&&(!ve||Me),Ie.next.textContent=se?"Chặng tiếp theo →":"Màn tiếp theo →",Ie.retry.classList.toggle("primary",ve&&Me),Ie.result.hidden=!1,s.tabIndex=-1,K||Ie["result-title"].focus({preventScroll:!0})}function je(){z="playing",Ie.result.hidden=!0,s.tabIndex=0,s.focus({preventScroll:!0}),W(nu)}function L(B){z=B?"won":"lost",oe.record(C,B,Ut[C].shots-P,m.targets.length,Xs(h.points)),W(B?"Đã hoàn thành màn":"Chơi lại để thử cách ngắm khác"),l.playResult(B),be(z)}function Ke(){const B=D-F;if(J.motion==="slide"&&(J.body.velocity.x=$h*Math.sin(B*eu)),J.motion==="lift"){const Y=J.baseY+tu*.5*(1-Math.cos(B*XA));J.body.velocity.y=(Y-J.body.position.y)/bi}}function Ue(){if(z!=="playing")return;const{items:B,targets:Y,lastImpact:K}=m;if(Y.length===0){if(B.length){W("Đang dọn mảnh vỡ…");return}U+1===Ut[C].stages.length?L(!0):P===0?(U++,k(),L(!1)):(z="cleared",be(z),W("Đã dọn sạch bàn · Sang chặng tiếp theo"));return}const ve=J.body.position.y+J.thickness/2;if(P>0||Y.some(ne=>ne.landedAt!==null||ne.body.position.y<ve-.1))return;const se=J.body.velocity;Y.some(({body:ne})=>Math.abs(ne.velocity.y-se.y)>.38||Math.abs(ne.velocity.x-se.x)>.75||ne.angularVelocity.lengthSquared()>.8)&&($=D);const Me=D-Math.max(K,$),ge=D-N;(ge>=1.3&&Me>=.48&&B.length===Y.length||ge>=6)&&L(!1)}function Pe(){if(z!=="playing")return;D+=bi,g.update(bi),Ke();const B=m.targets.length;m.step(D),u&&D-d>=.18?(Ie.combo.firstElementChild.textContent=u.title,Ie.combo.lastElementChild.textContent=`${u.count} vật · ${Xs(u.chainPoints)} điểm`,Ie.combo.hidden=!1,l.playCombo(u.count),Ie.combo.animate([{transform:"scale(.82)"},{transform:"scale(1.06)"},{transform:"scale(1)"}],{duration:matchMedia("(prefers-reduced-motion: reduce)").matches?0:220}),d=D,u=null):!Ie.combo.hidden&&D-d>1.15&&(Ie.combo.hidden=!0),m.targets.length!==B&&ue(),fe=fe.filter(Y=>{const{body:K}=Y;return D-Y.start<1.75&&K.position.lengthSquared()<100&&D-(K.contactAt??D)<.72?!0:(G(Y),!1)}),Ue()}function we(){E=!1,tt()}function tt(){const B=x.clone();B.x+=J.body.position.x-J.baseX,B.y+=J.body.position.y-J.baseY,B.project(e),y.set(B.x,B.y)}function Re(B){g.group.position.z=S?4.56:4.4,g.pivot.getWorldPosition(_),re&&(re.topLimit=.71),sA(e,B,S,re)}function ke(){S=!S,Re(e.aspect),we(),Ie["view-mode"].setAttribute("aria-pressed",String(S)),Ie["view-mode"].textContent=S?"Góc thứ nhất":"Góc toàn cảnh"}function xt(){const B=Math.max(1,Ie.arena.clientWidth),Y=Math.max(1,Ie.arena.clientHeight);Re(B/Y),t.setSize(B,Y,!1),re&&we()}function pt(B){const Y=s.getBoundingClientRect();y.set((B.clientX-Y.left)/Y.width*2-1,1-(B.clientY-Y.top)/Y.height*2),E=!0}s.addEventListener("pointermove",pt),s.addEventListener("pointerleave",()=>{E=!1}),s.addEventListener("pointerdown",B=>{!B.isPrimary||B.button!==0||(B.preventDefault(),s.focus({preventScroll:!0}),pt(B),ce(),B.pointerType!=="mouse"&&(E=!1))}),s.addEventListener("keydown",B=>{const Y={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]};if(B.key===" ")B.preventDefault(),ce();else if(Y[B.key]){B.preventDefault(),E||tt();const[K,ve]=Y[B.key];y.x=ci.clamp(y.x+K*.04,-.9,.9),y.y=ci.clamp(y.y+ve*.04,-.8,.8),E=!0}}),window.addEventListener("keydown",B=>{if(B.ctrlKey||B.metaKey||B.altKey)return;const Y=B.key.toLowerCase();B.target.closest("select,input,textarea")||(Y==="r"&&!B.repeat&&ie(C),Y==="v"&&!B.repeat&&ke())}),Ie["view-mode"].addEventListener("click",ke),Ie["view-mode"].disabled=!1,Ie.reset.addEventListener("click",()=>ie(C)),Ie.start.addEventListener("click",je),Ie.retry.addEventListener("click",()=>{ie(C),je()}),Ie.advance.addEventListener("click",()=>ie(C+1)),Ie.next.addEventListener("click",()=>{z==="cleared"?(U++,k(),s.tabIndex=0,s.focus({preventScroll:!0})):C+1<Ut.length&&ie(C+1)}),Ie.sound.addEventListener("click",()=>{l.toggle(),p.muted=l.muted,Ie.sound.setAttribute("aria-pressed",String(!l.muted)),Ie.sound.textContent=l.muted?"Đang tắt":"Đang bật"}),Ie.levels.append(...Ut.map((B,Y)=>new Option(`${Y+1}. ${B.name}`,Y))),Ie.levels.addEventListener("change",()=>ie(Number(Ie.levels.value))),xt(),new ResizeObserver(xt).observe(Ie.arena),ie(0);const I=performance.now();let T=I,j=0;t.setAnimationLoop(B=>{const Y=Math.max(0,(B-T)/1e3);for(j+=Math.min(.075,Y),T=B;j>=bi;)Pe(),j-=bi;for(const{view:K,body:ve}of[J,...m.items,...fe])K.position.copy(ve.position),K.quaternion.copy(ve.quaternion);J.motion==="lift"&&J.setLift(J.body.position.y-J.baseY),r.updateMatrixWorld(),v.visible=E&&z==="playing"&&P>0,v.visible&&D-N>.16&&me(),l.draw(l.sample(D),D),n.update(Y),i((B-I)/1e3),t.render(r,e)})}uA();jA().catch(r=>{Ie.error.hidden=!1,console.error(r)});
