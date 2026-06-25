"use strict";var C=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(c){throw (e=0, c)}};};var K=C(function(Y,S){
var I=require('@stdlib/math-base-special-floor/dist'),L=128;function E(v,e,c,n,M){var f,i,a,o,m,q,t,s,p,y,x,R,O,u,r,l;if(f=c.data,i=c.accessors[0],a=M,v<8){for(O=0,u=0,l=0;l<v;l++)r=i(f,a),r===r&&(O+=r,u+=1),a+=n;return e[0]+=O,e[1]+=u,e}if(v<=L){for(o=0,m=0,q=0,t=0,s=0,p=0,y=0,x=0,u=0,R=v%8,l=0;l<v-R;l+=8)r=i(f,a),r===r&&(o+=r,u+=1),a+=n,r=i(f,a),r===r&&(m+=r,u+=1),a+=n,r=i(f,a),r===r&&(q+=r,u+=1),a+=n,r=i(f,a),r===r&&(t+=r,u+=1),a+=n,r=i(f,a),r===r&&(s+=r,u+=1),a+=n,r=i(f,a),r===r&&(p+=r,u+=1),a+=n,r=i(f,a),r===r&&(y+=r,u+=1),a+=n,r=i(f,a),r===r&&(x+=r,u+=1),a+=n;for(O=o+m+(q+t)+(s+p+(y+x)),l;l<v;l++)r=i(f,a),r===r&&(O+=r,u+=1),a+=n;return e[0]+=O,e[1]+=u,e}return u=I(v/2),u-=u%8,E(u,e,c,n,a)+E(v-u,e,c,n,a+u*n)}S.exports=E
});var A=C(function(_,g){
var Z=K(),b=[0,0];function h(v,e,c,n,M){var f,i,a,o,m,q,t,s,p,y,x;if(f=c.data,i=c.accessors[0],v===1||n===0)return p=i(f,M),p===p&&v-e>0?0:NaN;if(b[0]=0,b[1]=0,Z(v,b,c,n,M),y=b[1],q=y-e,q<=0)return NaN;for(a=b[0]/y,o=M,m=0,t=0,x=0;x<v;x++)p=i(f,o),p===p&&(s=p-a,m+=s*s,t+=s),o+=n;return m/q-t/y*(t/q)}g.exports=h
});var P=C(function($,W){
var z=require('@stdlib/array-base-arraylike2object/dist'),D=A(),F=K(),w=[0,0];function G(v,e,c,n,M){var f,i,a,o,m,q,t,s,p,y;if(v<=0)return NaN;if(m=z(c),m.accessorProtocol)return D(v,e,m,n,M);if(v===1||n===0)return s=c[M],s===s&&v-e>0?0:NaN;if(w[0]=0,w[1]=0,F(v,w,m,n,M),p=w[1],o=p-e,o<=0)return NaN;for(f=w[0]/p,i=M,a=0,q=0,y=0;y<v;y++)s=c[i],s===s&&(t=s-f,a+=t*t,q+=t),i+=n;return a/o-q/p*(q/o)}W.exports=G
});var k=C(function(N,j){
var H=require('@stdlib/strided-base-stride2offset/dist'),J=P();function Q(v,e,c,n){return J(v,e,c,n,H(v,n))}j.exports=Q
});var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=k(),U=P();T(B,"ndarray",U);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
