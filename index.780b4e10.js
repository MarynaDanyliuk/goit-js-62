function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r),r.register("fExtF",(function(e,o){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o,t){if(!o.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return o.get(e)}})),r.register("iaRLo",(function(e,o){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){return o.get?o.get.call(e):o.value}})),r.register("7K24o",(function(e,o){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){if(o.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r.register("3LGG3",(function(e,o){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o,t){if(o.set)o.set.call(e,t);else{if(!o.writable)throw new TypeError("attempted to set read only private field");o.value=t}}}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,o){var t=a.default(e,o,"get");return s.default(e,t)};var a=c(r("fExtF")),s=c(r("iaRLo"));function c(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,o,t){g.default(e,o),o.set(e,t)};var d,g=(d=r("7K24o"))&&d.__esModule?d:{default:d};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e,o,t){var n=p.default(e,o,"set");return h.default(e,n,t),t};var p=m(r("fExtF")),h=m(r("3LGG3"));function m(e){return e&&e.__esModule?e:{default:e}}var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,o,t){o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t;return e},console.log("Hello, Mary!");let v;v=50,console.log(v);let b="";b="Вы сможете забрать товар завтра с 12:00 в нашем офисе",console.log(b);for(let e=10;e<20;e+=1)console.log(e);console.log("jsdjs");let P=0;for(let e=1;e<5;e+=1){const o=Math.round(4500*Math.random()+500);console.log(`ЗП работника номер ${e} - ${o}`),P+=o}console.log("totalSalary: ",P);for(let e=6;e<=13;e+=1)console.log(e),e%2==0&&console.log("четное: ",e);console.log(["a","b","c","d","e"]);const M=["Andriy","Mary","Misha","Masha"];console.table(M);const w=M.length-1;for(i=0;i<=w;i+=1)M[i]+="-1";console.table(M);function k(e,o,t){const n=e.concat(o),r=n.slice(0,t);return n.length<=t?n:n.length>t?r:n}console.log("Andriy Mary Misha Masha".split(" ").join("-").toLowerCase()),console.log(function(e){let o;return o=e.split(" ").join("-").toLowerCase(),o}("Andriy Mary Misha Masha")),console.log(k(["Mango","Poly"],["Ajax","Chelsea"],3)),console.log(k(["Earth","Jupiter"],["Neptune","Uranus","Venus"],0)),console.log(k(["Earth","Jupiter"],["Neptune","Uranus"],4));const S=["Mango","Ajax","Poly"];for(let e=0;e<S.length;e+=1)console.log(S[e]);function E(e,o){let t;for(let n of e){if(n===o)return t="true",t;t="false"}return t}console.log(function(e){const o=e.split(" ");let t=o[0];for(let e of o)e.length>t.length&&(t=e);return t}("The quick brown fox jumped over the lazy dog")),console.log(function(e,o){const t=[];let n;for(t[0]=e,i=e;i<=o-1;i+=1)n=t.push(e+=1);return t}(1,3)),console.log(function(e,o){let t=[];for(let n of e)n>o&&t.push(n);return t}([1,2,3,4,5],3)),console.log(function(e,o){let t=[];for(let n of e)o.includes(n)&&t.push(n);return t}([1,2,3],[2,1,17,19])),console.log(function(e,o){const t=[],n=[];let r;for(t[0]=e,i=e;i<=o-1;i+=1)r=t.push(e+=1);console.log(t);for(let e=0;e<=t.length;e+=1)t[e]%2==0&&n.push(t[e]);return n}(3,11)),console.log(E([1,2,3,4,5],3)),console.log(E(["orange"],"plum")),console.log(E(["Earth","Mars","Venus","Jupiter","Saturn"],"Uranus")),console.log(E(["Earth","Mars","Venus","Jupiter","Saturn"],"Jupiter"));function _(e){let o=0,t=[];for(const o in e)e.hasOwnProperty(o)&&t.push(o);return o=t.length,o}console.log(_({})),console.log(_({name:"Mango",age:2})),console.log(_({mail:"poly@mail.com",isOnline:!0,score:500})),console.log(function(e){let o=0;const t=Object.values(e);for(let e of t)o+=e;return o}({mango:100,poly:150,alfred:80}));const x=[{name:"Radar",price:1300,quantity:4},{name:"Scanner",price:2700,quantity:3},{name:"Droid",price:400,quantity:7},{name:"Grip",price:1200,quantity:9}];function O(e){let o;for(let t of x){if(e===t.name){o=t.price;break}e!==t.name&&(o=null)}return o}var C;console.log(O("Radar")),console.log(O("Engine")),console.log(function(e){let o=[];for(let t of x)"name"===e&&o.push(t.name),"price"===e&&o.push(t.price),"quantity"===e&&o.push(t.quantity);return o}("name")),console.log(function(e){let o;for(let t of x)e===t.name&&(o=t.price*t.quantity);return o}("Radar")),console.log((C={category:"Homemade",priority:"Low",text:"Take out the trash"},{category:"General",priority:"Normal",completed:!1,...C})),console.log(function(e,...o){const t=[];for(let n of o)e.includes(n)&&t.push(n);return t}([1,2,3,4,5],1,8,2,7));const A={potions:[{name:"Speed potion",price:460},{name:"Dragon breath",price:780},{name:"Stone skin",price:520}],getPotions(){return this.potions},addPotion(e){for(let o of this.potions)for(let t in o)if(e[t]===o[t])return`Error! Potion ${e.name} is already in your inventory!`;return this.potions.push(e)},removePotion(e){for(let o of this.potions)if(e===o.name){const e=this.potions.indexOf(o);return this.potions.splice(e,1),this.potions}return`Potion ${e} is not in inventory!`},updatePotionName(e,o){console.log(this.potions);for(let t of this.potions)if(console.log(t),t.name===e)return t.name=o,this.potions;return`Potion ${e} is not in inventory!`}};function B(e,o){console.log(`Pizza ${e} is being prepared, please wait...`),o(e)}console.log(A.getPotions()),console.log(A.addPotion({name:"Invisibility",price:620})),console.log(A.addPotion({name:"Speed potion",price:460})),console.log(A.addPotion({name:"Power potion",price:270})),console.log(A.addPotion({name:"Dragon breath",price:700})),console.log(A.addPotion({name:"Stone skin",price:240})),console.log(A.addPotion({name:"Dragon breath",price:700})),console.log(A.removePotion("Dragon breath")),console.log(A.removePotion("Speed potion")),console.log(A.updatePotionName("Dragon breath","Polymorth")),console.log(A.updatePotionName("Stone skin","Invulnerability potion")),B("Royal Grand"),B("Ultracheese");const j={pizzas:["Ultracheese","Smoked","Four meats"],order(e,o,t){if(this.pizzas.includes(e))return o(e);return t(`There is no pizza with a name ${e} in the assortment.`)}};function B(e){return`Your order is accepted. Cooking pizza ${e}.`}function D(e){return`Error! ${e}`}j.order("Smoked",B,D),j.order("Four meats",B,D),j.order("Big Mike",B,D),j.order("Vienna",B,D),console.log(j.order("Smoked",B,D)),console.log(j.order("Four meats",B,D)),console.log(j.order("Big Mike",B,D)),console.log(j.order("Vienna",B,D));const L=[{name:"Moore Hensley",email:"moorehensley@indexia.com",eyeColor:"blue",friends:["Sharron Pace"],isActive:!1,balance:2811,gender:"male"},{name:"Sharlene Bush",email:"sharlenebush@tubesys.com",eyeColor:"blue",friends:["Briana Decker","Sharron Pace"],isActive:!0,balance:3821,gender:"female"},{name:"Ross Vazquez",email:"rossvazquez@xinware.com",eyeColor:"green",friends:["Marilyn Mcintosh","Padilla Garrison","Naomi Buckner"],isActive:!1,balance:3793,gender:"male"},{name:"Elma Head",email:"elmahead@omatom.com",eyeColor:"green",friends:["Goldie Gentry","Aisha Tran"],isActive:!0,balance:2278,gender:"female"},{name:"Carey Barr",email:"careybarr@nurali.com",eyeColor:"blue",friends:["Jordan Sampson","Eddie Strong"],isActive:!0,balance:3951,gender:"male"},{name:"Blackburn Dotson",email:"blackburndotson@furnigeer.com",eyeColor:"brown",friends:["Jacklyn Lucas","Linda Chapman"],isActive:!1,balance:1498,gender:"male"},{name:"Sheree Anthony",email:"shereeanthony@kog.com",eyeColor:"brown",friends:["Goldie Gentry","Briana Decker"],isActive:!0,balance:2764,gender:"female"}];var R;console.log((R=L,[...R].sort(((e,o)=>e.friends.length-o.friends.length))));const z=[{title:"The Last Kingdom",author:"Bernard Cornwell",rating:8.38},{title:"Beside Still Waters",author:"Robert Sheckley",rating:8.51},{title:"The Dream of a Ridiculous Man",author:"Fyodor Dostoevsky",rating:7.75},{title:"Redder Than Blood",author:"Tanith Lee",rating:7.94},{title:"The Dreams in the Witch House",author:"Howard Lovecraft",rating:8.67}].filter((e=>e.rating>8)).sort(((e,o)=>e.author.localeCompare(o.author))).map((e=>e.author));console.log(z);var I;console.log((I=L,[...I].sort(((e,o)=>e.friends.length-o.friends.length)).map((e=>e.name))));console.log((e=>{const o=[...e].flatMap((e=>e.friends)).filter(((e,o,t)=>t.indexOf(e)===o));return o.sort(((e,o)=>e.localeCompare(o))),o})(L));var T;console.log((T="male",L.filter(((e,o,t)=>e.gender===T)).reduce(((e,o)=>e+o.balance),0)));const q={username:"Mango",balance:24e3,discount:.1,orders:["Burger","Pizza","Salad"],getBalance(){return this.balance},getDiscount(){return this.discount},setDiscount(e){this.discount=e},getOrders(){return this.orders},addOrder(e,o){this.balance-=e-e*this.discount,this.orders.push(o)}};q.setDiscount(.15),console.log(q.getDiscount()),q.addOrder(5e3,"Steak"),console.log(q.getBalance()),console.log(q.getOrders());const G=Object.create({name:"Stacey",surname:"Moore",age:54,heritage:"Irish"});G.name="Jason",G.age=27;const U=new class{getItems(){return this.items}addItem(e){return this.items.push(e)}removeItem(e){const o=this.items.indexOf(e);return this.items.splice(o,1)}constructor(e){this.items=e}}(["Nanitoids","Prolonger","Antigravitator"]);console.log(U.getItems()),U.addItem("Droid"),console.log(U.getItems()),U.removeItem("Prolonger"),console.log(U.getItems());class V{getValue(){return this.value}padEnd(e){return this.value=this.value+e}padStart(e){return this.value=e+this.value}padBoth(e){this.padEnd(e),this.padStart(e)}constructor(e){this.value=e}}console.dir(V);const N=new V(".");console.log(N.getValue()),N.padStart("^"),console.log(N.getValue()),N.padEnd("^"),console.log(N.getValue()),N.padBoth("="),console.log(N.getValue());var $=new WeakMap;class F{get price(){return e(l)(this,$)}set price(o){return e(f)(this,$,o),e(l)(this,$)>=F.MAX_PRICE?e(f)(this,$,49e3):e(f)(this,$,o)}constructor({price:o}){e(u)(this,$,{writable:!0,value:void 0}),e(f)(this,$,o)}}e(y)(F,"MAX_PRICE",5e4),console.log(F.MAX_PRICE);const J=new F({price:35e3});console.log(J.price),J.price=49e3,console.log(J.price),J.price=51e3,console.log(J.price);class H extends class{get email(){return this.email}set email(e){this.email=e}constructor(o){e(y)(this,"email",void 0),this.email=o}}{blacklist(e){this.blacklistedEmails.push(e)}isBlacklisted(e){return!!this.blacklistedEmails.includes(e)}constructor({email:e,accessLevel:o}){super(e),this.accessLevel=o,this.blacklistedEmails=[]}}e(y)(H,"AccessLevel",{BASIC:"basic",SUPERUSER:"superuser"});const K=new H({email:"mango@mail.com",accessLevel:H.AccessLevel.SUPERUSER});console.log(K.email),console.log(K.accessLevel),K.blacklist("poly@mail.com"),console.log(K.blacklistedEmails),console.log(K.isBlacklisted("mango@mail.com")),console.log(K.isBlacklisted("poly@mail.com"));
//# sourceMappingURL=index.780b4e10.js.map
