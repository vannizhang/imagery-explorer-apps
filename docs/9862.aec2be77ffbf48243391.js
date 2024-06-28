"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[9862,9859],{69862:function(e,t,r){r.r(t),r.d(t,{default:function(){return ge}});var i,l=r(36663),s=r(66341),o=r(7753),n=r(6865),a=r(70375),u=r(67134),p=r(15842),c=r(86745),d=r(78668),m=r(76868),h=r(3466),y=r(81977),f=(r(39994),r(13802),r(34248)),g=r(40266),w=r(39835),v=r(91772),x=r(38481),b=r(89859),C=r(27668),S=r(43330),M=r(18241),T=r(12478),I=r(95874),_=r(4452),L=r(81590),P=r(88289),E=r(14790),R=r(82064);r(4157);let Z=i=class extends R.wq{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new i;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};(0,l._)([(0,y.Cb)({type:v.Z,json:{read:{source:"fullExtent"}}})],Z.prototype,"fullExtent",void 0),(0,l._)([(0,y.Cb)({type:String,json:{read:{source:"id"}}})],Z.prototype,"id",void 0),(0,l._)([(0,y.Cb)({type:L.Z,json:{read:{source:"tileInfo"}}})],Z.prototype,"tileInfo",void 0),Z=i=(0,l._)([(0,g.j)("esri.layer.support.TileMatrixSet")],Z);const A=Z;var O;let j=O=class extends R.wq{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new O;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,l._)([(0,y.Cb)({json:{read:{source:"id"}}})],j.prototype,"id",void 0),(0,l._)([(0,y.Cb)({json:{read:{source:"title"}}})],j.prototype,"title",void 0),(0,l._)([(0,y.Cb)({json:{read:{source:"abstract"}}})],j.prototype,"description",void 0),(0,l._)([(0,y.Cb)({json:{read:{source:"legendUrl"}}})],j.prototype,"legendUrl",void 0),(0,l._)([(0,y.Cb)({json:{read:{source:"isDefault"}}})],j.prototype,"isDefault",void 0),(0,l._)([(0,y.Cb)({json:{read:{source:"keywords"}}})],j.prototype,"keywords",void 0),j=O=(0,l._)([(0,g.j)("esri.layer.support.WMTSStyle")],j);const F=j;var U;let V=U=class extends R.wq{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?v.Z.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map((e=>v.Z.fromJSON(e))):t.tileMatrixSets?.map((e=>v.Z.fromJSON(e.fullExtent))).filter((e=>e))??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))||this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.at(0)?.id??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((e=>e.id===this.tileMatrixSetId)):null}clone(){const e=new U;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};(0,l._)([(0,y.Cb)()],V.prototype,"description",void 0),(0,l._)([(0,y.Cb)()],V.prototype,"fullExtent",void 0),(0,l._)([(0,f.r)("fullExtent",["fullExtent"])],V.prototype,"readFullExtent",null),(0,l._)([(0,y.Cb)({readOnly:!0})],V.prototype,"fullExtents",void 0),(0,l._)([(0,f.r)("fullExtents",["fullExtents","tileMatrixSets"])],V.prototype,"readFullExtents",null),(0,l._)([(0,y.Cb)()],V.prototype,"id",void 0),(0,l._)([(0,y.Cb)()],V.prototype,"imageFormat",null),(0,l._)([(0,y.Cb)({json:{read:{source:"formats"}}})],V.prototype,"imageFormats",void 0),(0,l._)([(0,y.Cb)()],V.prototype,"layer",void 0),(0,l._)([(0,y.Cb)()],V.prototype,"parent",void 0),(0,l._)([(0,y.Cb)()],V.prototype,"styleId",null),(0,l._)([(0,y.Cb)({type:n.Z.ofType(F),json:{read:{source:"styles"}}})],V.prototype,"styles",void 0),(0,l._)([(0,y.Cb)({json:{write:{ignoreOrigin:!0}}})],V.prototype,"title",void 0),(0,l._)([(0,y.Cb)()],V.prototype,"tileMatrixSetId",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],V.prototype,"tileMatrixSet",null),(0,l._)([(0,y.Cb)({type:n.Z.ofType(A),json:{read:{source:"tileMatrixSets"}}})],V.prototype,"tileMatrixSets",void 0),V=U=(0,l._)([(0,g.j)("esri.layers.support.WMTSSublayer")],V);const N=V;var W=r(69442),k=r(67666),D=r(36644),B=r(73616),q=r(94477),K=r(13054);const $=90.71428571428571;function J(e){const t=e.replaceAll(/ows:/gi,"");if(!G("Contents",(new DOMParser).parseFromString(t,"text/xml").documentElement))throw new a.Z("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function z(e){return e.nodeType===Node.ELEMENT_NODE}function G(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(z(i)&&i.nodeName===e)return i}return null}function H(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const l=t.childNodes[i];z(l)&&l.nodeName===e&&r.push(l)}return r}function Q(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const l=t.childNodes[i];z(l)&&l.nodeName===e&&r.push(l)}return r.map((e=>e.textContent)).filter(o.pC)}function Y(e,t){return e.split(">").forEach((e=>{t&&(t=G(e,t))})),t&&t.textContent}function X(e,t,r,i){let l;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=G(t,i),s=e?.textContent;if(s===r||r.split(":")&&r.split(":")[1]===s)return l=i,!0}return!1})),l}function ee(e,t,r,i,l){const s=Y("Abstract",t),o=Q("Format",t);return{id:e,fullExtent:ie(t),fullExtents:le(t),description:s,formats:o,styles:se(t,i),title:Y("Title",t),tileMatrixSets:oe(l,t,r)}}function te(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const l=H("ResourceURL",i),s=H("Dimension",i);let o,n,a,u;return s.length&&(o=Y("Identifier",s[0]),n=Q("Default",s[0])||Q("Value",s[0])),s.length>1&&(a=Y("Identifier",s[1]),u=Q("Default",s[1])||Q("Value",s[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:u}),l.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&n.length)if(t.includes("{"+o+"}"))t=t.replace("{"+o+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2))}if(a&&u.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),r}function re(e,t,r,i,l,s,o,n){const a=function(e,t,r){const i=te(e,t),l=i?.filter((e=>e.format===r));return(l?.length?l:i)??[]}(e,t,i);if(!(a?.length>0))return"";const{dimensionMap:u}=e,p=u.get(t).dimensions?.[0],c=u.get(t).dimensions2?.[0];return a[o%a.length].template.replaceAll(/\{Style\}/gi,l??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,s).replaceAll(/\{TileRow\}/gi,""+o).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,p).replaceAll(/\{dimensionValue2\}/gi,c)}function ie(e){const t=G("WGS84BoundingBox",e),r=t?Y("LowerCorner",t).split(" "):["-180","-90"],i=t?Y("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function le(e){const t=[];return(0,q.h)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const r=e.getAttribute("crs").toLowerCase(),i=ne(r),l=r.includes("epsg")&&(0,B.A)(i.wkid);let s,o,n,a;(0,q.h)(e,{LowerCorner:e=>{[s,o]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([s,o]=[o,s])},UpperCorner:e=>{[n,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),l&&([n,a]=[a,n])}}),t.push({xmin:s,ymin:o,xmax:n,ymax:a,spatialReference:i})}}),t}function se(e,t){return H("Style",e).map((e=>{const r=G("LegendURL",e),i=G("Keywords",e),l=i?Q("Keyword",i):[];let s=r&&r.getAttribute("xlink:href");return t&&(s=s&&s.replace(/^http:/i,"https:")),{abstract:Y("Abstract",e),id:Y("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:l,legendUrl:s,title:Y("Title",e)}}))}function oe(e,t,r){return H("TileMatrixSetLink",t).map((t=>function(e,t,r){const i=G("TileMatrixSet",t).textContent,l=Q("TileMatrix",t),s=r.find((e=>{const t=G("Identifier",e),r=t?.textContent;return!!(r===i||i.split(":")&&i.split(":")[1]===r)})),o=G("TileMatrixSetLimits",t),n=o&&H("TileMatrixLimits",o),a=new Map;if(n?.length)for(const e of n){const t=G("TileMatrix",e).textContent,r=+G("MinTileRow",e).textContent,i=+G("MaxTileRow",e).textContent,l=+G("MinTileCol",e).textContent,s=+G("MaxTileCol",e).textContent;a.set(t,{minCol:l,maxCol:s,minRow:r,maxRow:i})}const u=Y("SupportedCRS",s).toLowerCase(),p=function(e,t){return ae(G("TileMatrix",e),t)}(s,u),c=p.spatialReference,d=G("TileMatrix",s),m=[parseInt(Y("TileWidth",d),10),parseInt(Y("TileHeight",d),10)],h=[];l.length?l.forEach(((e,t)=>{const r=X("TileMatrix","Identifier",e,s);h.push(de(r,u,t,i,a))})):H("TileMatrix",s).forEach(((e,t)=>{h.push(de(e,u,t,i,a))}));const y=function(e,t,r,i,l){const s=G("BoundingBox",t);let o,n,a,u,p,c;if(s&&(o=Y("LowerCorner",s).split(" "),n=Y("UpperCorner",s).split(" ")),o&&o.length>1&&n&&n.length>1)a=parseFloat(o[0]),p=parseFloat(o[1]),u=parseFloat(n[0]),c=parseFloat(n[1]);else{const e=G("TileMatrix",t),s=parseInt(Y("MatrixWidth",e),10),o=parseInt(Y("MatrixHeight",e),10);a=r.x,c=r.y,u=a+s*i[0]*l.resolution,p=c-o*i[1]*l.resolution}return function(e,t,r){return"1.0.0"===e&&(0,B.A)(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}(e,r.spatialReference,r)?new v.Z(p,a,c,u,r.spatialReference):new v.Z(a,p,u,c,r.spatialReference)}(e,s,p,m,h[0]).toJSON(),f=new L.Z({dpi:96,spatialReference:c,size:m,origin:p,lods:h}).toJSON();return{id:i,fullExtent:y,tileInfo:f}}(e,t,r)))}function ne(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const r=function(e){return e.includes("crs84")||e.includes("crs:84")?ue.CRS84:e.includes("crs83")||e.includes("crs:83")?ue.CRS83:e.includes("crs27")||e.includes("crs:27")?ue.CRS27:null}(e);return null!=r&&(t=r),{wkid:t}}function ae(e,t){const r=ne(t),[i,l]=Y("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),s=t.includes("epsg")&&(0,B.A)(r.wkid);return new k.Z(s?{x:l,y:i,spatialReference:r}:{x:i,y:l,spatialReference:r})}var ue,pe,ce;function de(e,t,r,i,l){const s=ne(t),o=Y("Identifier",e);let n=parseFloat(Y("ScaleDenominator",e));const a=me(s.wkid,n,i);n*=96/$;const u=+Y("MatrixWidth",e),p=+Y("MatrixHeight",e),{maxCol:c=u-1,maxRow:d=p-1,minCol:m=0,minRow:h=0}=l.get(o)??{},{x:y,y:f}=ae(e,t);return new K.Z({cols:[m,c],level:r,levelValue:o,origin:[y,f],scale:n,resolution:a,rows:[h,d]})}function me(e,t,r){let i;return i=D.Z.hasOwnProperty(""+e)?D.Z.values[D.Z[e]]:"default028mm"===r?6370997*Math.PI/180:(0,W.e8)(e).metersPerDegree,7*t/25e3/i}(pe=ue||(ue={}))[pe.CRS84=4326]="CRS84",pe[pe.CRS83=4269]="CRS83",pe[pe.CRS27=4267]="CRS27";const he={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},ye=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let fe=ce=class extends((0,C.h)((0,T.Q)((0,I.M)((0,S.q)((0,M.I)((0,p.R)(x.Z))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,m.YP)((()=>this.activeLayer),((e,t)=>{t&&!this.sublayers?.includes(t)&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),m.Z_),(0,m.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.layer=this,e.parent=this}),m.Z_),(0,m.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=null,e.parent=null}),m.Z_),(0,m.YP)((()=>this.sublayers),((e,t)=>{if(t)for(const e of t)e.layer=null,e.parent=null;if(e)for(const t of e)t.layer=this,t.parent=this}),m.Z_)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(d.r9).then((()=>this._fetchService(e))).catch((e=>{throw(0,d.r9)(e),new a.Z("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new N);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,l=r?this._getLowerCasedUrlParams(r):null,s=i?.layerIdentifier;let o=null;const n=i?.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(o=n[0]):o=n);const a=l?.format,u=l?.style;return new N({id:s,imageFormat:a,styleId:u,tileMatrixSetId:o})}writeActiveLayer(e,t,r,i){const l=this.activeLayer;t.templateUrl=this.getUrlTemplate(l.id,l.tileMatrixSetId,l.imageFormat,l.styleId);const s=(0,c.hS)("tileMatrixSet.tileInfo",l);t.tileInfo=s?s.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:l.id,tileMatrixSet:l.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return function(e,t){return e.map((e=>{const r=new N;return r.read(e,t),r}))}(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(o.pC)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new P.Z(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,l=e.fullExtent,s=new E.B({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new b.default({fullExtent:l,urlTemplate:t,tileInfo:i,wmtsInfo:s})}async fetchTile(e,t,r,i={}){const{signal:l}=i,o=this.getTileUrl(e,t,r),{data:n}=await(0,s.Z)(o,{responseType:"image",signal:l});return n}async fetchImageBitmapTile(e,t,r,i={}){const{signal:l}=i;if(this.fetchTile!==ce.prototype.fetchTile){const s=await this.fetchTile(e,t,r,i);return(0,_.V)(s,e,t,r,l)}const o=this.getTileUrl(e,t,r),{data:n}=await(0,s.Z)(o,{responseType:"blob",signal:l});return(0,_.V)(n,e,t,r,l)}findSublayerById(e){return this.sublayers?.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),l=i?.tileInfo?.lods[e],s=l?l.levelValue||`${l.level}`:`${e}`;let o=this.resourceInfo?"":re({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return o||(o=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,s).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),o=this._appendCustomLayerParameters(o),o}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=function(e,t,r,i){const{dimensionMap:l}=e,s=te(e,t);let o="";if(s&&s.length>0){const e=l.get(t).dimensions?.[0],n=l.get(t).dimensions2?.[0];o=s[0].template,o.endsWith(".xxx")&&(o=o.slice(0,-4)),o=o.replaceAll(/\{Style\}/gi,i),o=o.replaceAll(/\{TileMatrixSet\}/gi,r),o=o.replaceAll(/\{TileMatrix\}/gi,"{level}"),o=o.replaceAll(/\{TileRow\}/gi,"{row}"),o=o.replaceAll(/\{TileCol\}/gi,"{col}"),o=o.replaceAll(/\{dimensionValue\}/gi,e),o=o.replaceAll(/\{dimensionValue2\}/gi,n)}return o}({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let l="";return he[r.toLowerCase()]&&(l=he[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+l}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),J(t.data)}catch{const r="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),J(t.data),this.serviceMode=r}catch(e){throw new a.Z("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:e})}}this.resourceInfo?t.data=function(e){return e.layers.forEach((e=>{e.tileMatrixSets?.forEach((e=>{const t=e.tileInfo;t&&96!==t.dpi&&(t.lods?.forEach((r=>{r.scale=96*r.scale/t.dpi,r.resolution=me(t.spatialReference?.wkid,r.scale*$/96,e.id)})),t.dpi=96)}))})),e}(t.data):t.data=function(e,t){e=e.replaceAll(/ows:/gi,"");const r=(new DOMParser).parseFromString(e,"text/xml").documentElement,i=new Map,l=new Map,s=G("Contents",r);if(!s)throw new a.Z("wmtslayer:wmts-capabilities-xml-is-not-valid");const o=G("OperationsMetadata",r),n=o?.querySelector("[name='GetTile']"),u=n?.getElementsByTagName("Get"),p=u&&Array.prototype.slice.call(u),c=t.url?.indexOf("https"),d=void 0!==c&&c>-1;let m,h,y=t.serviceMode,f=t?.url;if(p?.length&&p.some((e=>{const t=G("Constraint",e);return!t||X("AllowedValues","Value",y,t)?(f=e.attributes[0].nodeValue,!0):(!t||X("AllowedValues","Value","RESTful",t)||X("AllowedValues","Value","REST",t)?h=e.attributes[0].nodeValue:t&&!X("AllowedValues","Value","KVP",t)||(m=e.attributes[0].nodeValue),!1)})),!f)if(h)f=h,y="RESTful";else if(m)f=m,y="KVP";else{const e=G("ServiceMetadataURL",r);f=e?.getAttribute("xlink:href")}const g=f.indexOf("1.0.0/");-1===g&&"RESTful"===y?f+="/":g>-1&&(f=f.substring(0,g)),"KVP"===y&&(f+=g>-1?"":"?"),d&&(f=f.replace(/^http:/i,"https:"));const w=Y("ServiceIdentification>ServiceTypeVersion",r),v=Y("ServiceIdentification>AccessConstraints",r),x=v&&/^none$/i.test(v)?null:v,b=H("Layer",s),C=H("TileMatrixSet",s),S=b.map((e=>{const t=Y("Identifier",e);return i.set(t,e),ee(t,e,C,d,w)}));return{copyright:x,dimensionMap:l,layerMap:i,layers:S,serviceMode:y,tileUrl:f}}(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await(0,s.Z)(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){const t=this.findSublayerById(this.activeLayer.id),r=t?.tileMatrixSets?.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,u.d9)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,h.mN)(e),i={...r.query,...t},l=(0,h.B7)(i);return""===l?r.path:`${r.path}?${l}`}_getCapabilitiesUrl(e){this.url=(0,h.mN)(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const e=`/${this.version}/WMTSCapabilities.xml`,r=new RegExp(e,"i");t=t.replace(r,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,h.mN)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,u.d9)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||ye.has(t)||(e[t]=r[t])})))}return e}};(0,l._)([(0,y.Cb)()],fe.prototype,"dimensionMap",void 0),(0,l._)([(0,y.Cb)()],fe.prototype,"layerMap",void 0),(0,l._)([(0,y.Cb)({type:N,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],fe.prototype,"activeLayer",void 0),(0,l._)([(0,f.r)("service","activeLayer",["layers"])],fe.prototype,"readActiveLayerFromService",null),(0,l._)([(0,f.r)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],fe.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,l._)([(0,w.c)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:L.Z},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],fe.prototype,"writeActiveLayer",null),(0,l._)([(0,y.Cb)({type:String,value:"",json:{write:!0}})],fe.prototype,"copyright",void 0),(0,l._)([(0,y.Cb)({type:["show","hide"]})],fe.prototype,"listMode",void 0),(0,l._)([(0,y.Cb)({json:{read:!0,write:!0}})],fe.prototype,"blendMode",void 0),(0,l._)([(0,y.Cb)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],fe.prototype,"customParameters",void 0),(0,l._)([(0,f.r)(["portal-item","web-document"],"customParameters")],fe.prototype,"readCustomParameters",null),(0,l._)([(0,y.Cb)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],fe.prototype,"customLayerParameters",void 0),(0,l._)([(0,y.Cb)({type:v.Z,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],fe.prototype,"fullExtent",void 0),(0,l._)([(0,y.Cb)({readOnly:!0})],fe.prototype,"fullExtents",null),(0,l._)([(0,y.Cb)({type:["WebTiledLayer"]})],fe.prototype,"operationalLayerType",void 0),(0,l._)([(0,y.Cb)()],fe.prototype,"resourceInfo",void 0),(0,l._)([(0,y.Cb)()],fe.prototype,"serviceMode",void 0),(0,l._)([(0,f.r)(["portal-item","web-document"],"serviceMode",["templateUrl"])],fe.prototype,"readServiceMode",null),(0,l._)([(0,y.Cb)({type:n.Z.ofType(N)})],fe.prototype,"sublayers",void 0),(0,l._)([(0,f.r)("service","sublayers",["layers"])],fe.prototype,"readSublayersFromService",null),(0,l._)([(0,y.Cb)({readOnly:!0})],fe.prototype,"supportedSpatialReferences",null),(0,l._)([(0,y.Cb)({readOnly:!0})],fe.prototype,"tilemapCache",null),(0,l._)([(0,y.Cb)({json:{read:{source:"title"}}})],fe.prototype,"title",null),(0,l._)([(0,y.Cb)({json:{read:!1},readOnly:!0,value:"wmts"})],fe.prototype,"type",void 0),(0,l._)([(0,y.Cb)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],fe.prototype,"url",null),(0,l._)([(0,y.Cb)()],fe.prototype,"version",void 0),fe=ce=(0,l._)([(0,g.j)("esri.layers.WMTSLayer")],fe);const ge=fe},89859:function(e,t,r){r.r(t),r.d(t,{default:function(){return L}});var i,l=r(36663),s=(r(91957),r(66341)),o=r(70375),n=r(15842),a=r(21130),u=r(3466),p=r(81977),c=(r(39994),r(13802),r(4157),r(34248)),d=r(40266),m=r(39835),h=r(38481),y=r(27668),f=r(43330),g=r(18241),w=r(12478),v=r(95874),x=r(4452),b=r(13054),C=r(81590),S=r(14790),M=r(91772),T=r(14685),I=r(67666);let _=i=class extends((0,y.h)((0,w.Q)((0,v.M)((0,f.q)((0,g.I)((0,n.R)(h.Z))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new M.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,T.Z.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=T.Z.WebMercator,this.subDomains=null,this.tileInfo=new C.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new I.Z({x:-20037508.342787,y:20037508.342787,spatialReference:T.Z.WebMercator}),spatialReference:T.Z.WebMercator,lods:[new b.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new b.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new b.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new b.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new b.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new b.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new b.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new b.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new b.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new b.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new b.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new b.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new b.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new b.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new b.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new b.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new b.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new b.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new b.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new b.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new b.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new b.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new b.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new b.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new u.R9(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new o.Z("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||T.Z.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,i=new u.R9(t),l=i.scheme?i.scheme+"://":"//",s=l+i.authority+"/",o=i.authority;if(o?.includes("{subDomain}")){if(r&&r.length>0&&o.split(".").length>1)for(const t of r)e.push(l+o.replaceAll(/\{subDomain\}/gi,t)+"/")}else e.push(s);return e.map(u.xs)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new u.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,u.oC)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,u.Fv)(e)),t.templateUrl=e}fetchTile(e,t,r,i={}){const{signal:l}=i,o=this.getTileUrl(e,t,r),n={responseType:"image",signal:l,query:{...this.refreshParameters}};return(0,s.Z)(o,n).then((e=>e.data))}async fetchImageBitmapTile(e,t,r,l={}){const{signal:o}=l;if(this.fetchTile!==i.prototype.fetchTile){const i=await this.fetchTile(e,t,r,l);return(0,x.V)(i,e,t,r,o)}const n=this.getTileUrl(e,t,r),a={responseType:"blob",signal:o,query:{...this.refreshParameters}},{data:u}=await(0,s.Z)(n,a);return(0,x.V)(u,e,t,r,o)}getTileUrl(e,t,r){const{levelValues:i,tileServers:l,urlPath:s}=this;if(!i||!l||!s)return"";const o=i[e];return l[t%l.length]+(0,a.gx)(s,{level:o,z:o,col:r,x:r,row:t,y:t})}};(0,l._)([(0,p.Cb)({type:String,value:"",json:{write:!0}})],_.prototype,"copyright",void 0),(0,l._)([(0,p.Cb)({type:M.Z,json:{write:!0},nonNullable:!0})],_.prototype,"fullExtent",void 0),(0,l._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"legendEnabled",void 0),(0,l._)([(0,p.Cb)({type:["show","hide"]})],_.prototype,"listMode",void 0),(0,l._)([(0,p.Cb)({json:{read:!0,write:!0}})],_.prototype,"blendMode",void 0),(0,l._)([(0,p.Cb)()],_.prototype,"levelValues",null),(0,l._)([(0,p.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],_.prototype,"isReference",void 0),(0,l._)([(0,p.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],_.prototype,"operationalLayerType",void 0),(0,l._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1}})],_.prototype,"popupEnabled",void 0),(0,l._)([(0,p.Cb)({type:T.Z})],_.prototype,"spatialReference",void 0),(0,l._)([(0,c.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],_.prototype,"readSpatialReference",null),(0,l._)([(0,p.Cb)({type:[String],json:{write:!0}})],_.prototype,"subDomains",void 0),(0,l._)([(0,p.Cb)({type:C.Z,json:{write:!0}})],_.prototype,"tileInfo",void 0),(0,l._)([(0,p.Cb)({readOnly:!0})],_.prototype,"tileServers",null),(0,l._)([(0,p.Cb)({json:{read:!1}})],_.prototype,"type",void 0),(0,l._)([(0,p.Cb)()],_.prototype,"urlPath",null),(0,l._)([(0,p.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],_.prototype,"urlTemplate",void 0),(0,l._)([(0,c.r)("urlTemplate",["urlTemplate","templateUrl"])],_.prototype,"readUrlTemplate",null),(0,l._)([(0,m.c)("urlTemplate",{templateUrl:{type:String}})],_.prototype,"writeUrlTemplate",null),(0,l._)([(0,p.Cb)({type:S.B,json:{write:!0}})],_.prototype,"wmtsInfo",void 0),_=i=(0,l._)([(0,d.j)("esri.layers.WebTileLayer")],_);const L=_},73616:function(e,t,r){r.d(t,{A:function(){return l}});const i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function l(e){return null!=e&&i.some((([t,r])=>e>=t&&e<=r))}},94477:function(e,t,r){function i(e,t){if(e&&t)for(const r of e.children)if(r.localName in t){const e=t[r.localName];if("function"==typeof e){const t=e(r);t&&i(r,t)}else i(r,e)}}function*l(e,t){for(const r of e.children)if(r.localName in t){const e=t[r.localName];"function"==typeof e?yield e(r):yield*l(r,e)}}r.d(t,{H:function(){return l},h:function(){return i}})},14790:function(e,t,r){r.d(t,{B:function(){return u}});var i,l=r(36663),s=r(82064),o=r(67134),n=r(81977),a=(r(39994),r(13802),r(40266));let u=i=class extends s.wq{constructor(e){super(e)}clone(){return new i({customLayerParameters:(0,o.d9)(this.customLayerParameters),customParameters:(0,o.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,l._)([(0,n.Cb)({json:{type:Object,write:!0}})],u.prototype,"customLayerParameters",void 0),(0,l._)([(0,n.Cb)({json:{type:Object,write:!0}})],u.prototype,"customParameters",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"layerIdentifier",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"tileMatrixSet",void 0),(0,l._)([(0,n.Cb)({type:String,json:{write:!0}})],u.prototype,"url",void 0),u=i=(0,l._)([(0,a.j)("esri.layer.support.WMTSLayerInfo")],u)}}]);