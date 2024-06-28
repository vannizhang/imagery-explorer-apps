"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[3062],{21586:function(e,t,i){function r(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?n(e.view.floors,t.floorInfo.floorField):null}function s(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?n(e,t.floorInfo.floorField):null}function n(e,t){if(!e?.length)return null;const i=e.filter((e=>""!==e)).map((e=>`'${e}'`));return i.push("''"),`${t} IN (${i.join(",")}) OR ${t} IS NULL`}i.d(t,{c:function(){return r},f:function(){return s}})},59468:function(e,t,i){function r(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function s(e,t){return"number"==typeof e?e:e?.stops?.length?function(e){let t=0,i=0;for(let r=0;r<e.length;r++){const s=e[r].size;"number"==typeof s&&(t+=s,i++)}return t/i}(e.stops):t}function n(e,t){if(!t)return e;const i=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:i,minSize:r}=t;return(s(i,e)+s(r,e))/2}));let r=0;const n=i.length;if(0===n)return e;for(let e=0;e<n;e++)r+=i[e];const o=Math.floor(r/n);return Math.max(o,e)}function o(e){const t=e?.renderer,i=e?.pointerType,s="touch"===i?9:6;if(!t)return s;const o="visualVariables"in t?n(s,t.visualVariables):s;if("simple"===t.type)return r(o,t.symbol);if("unique-value"===t.type){let e=o;return t.uniqueValueInfos?.forEach((t=>{e=r(e,t.symbol)})),e}if("class-breaks"===t.type){let e=o;return t.classBreakInfos.forEach((t=>{e=r(e,t.symbol)})),e}return"dot-density"===t.type||t.type,o}i.d(t,{k:function(){return o}})},24778:function(e,t,i){i.d(t,{b:function(){return m}});var r=i(70375),s=i(39994),n=i(13802),o=i(78668),a=i(14266),l=i(88013),u=i(64429),h=i(91907),c=i(18567),d=i(71449),p=i(80479);class f{constructor(e,t,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:r,pixelType:s,textureOnly:n}=e,o=(0,u.UK)(s);this.blockIndex=i,this.pixelType=s,this.size=t,this.textureOnly=n,n||(this.data=new o(r)),this._resetRange()}destroy(){this._texture?.dispose();for(const e in this._fbos){const t=this._fbos[e];t&&("0"===e&&t.detachColorTexture(),t.dispose()),this._fbos[e]=null}this._texture=null}get _textureDesc(){const e=new p.X;return e.wrapMode=h.e8.CLAMP_TO_EDGE,e.samplingMode=h.cw.NEAREST,e.dataType=this.pixelType,e.width=this.size,e.height=this.size,e}setData(e,t,i){const r=(0,l.jL)(e),s=this.data,n=r*this.texelSize+t;!s||n>=s.length||(s[n]=i,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r))}getData(e,t){if(null==this.data)return null;const i=(0,l.jL)(e)*this.texelSize+t;return!this.data||i>=this.data.length?null:this.data[i]}getTexture(e){return this._texture??this._initTexture(e)}getFBO(e,t=0){if(!this._fbos[t]){const i=0===t?this.getTexture(e):this._textureDesc;this._fbos[t]=new c.X(e,i)}return this._fbos[t]}get hasDirty(){const e=this.dirtyStart;return this.dirtyEnd>=e}updateTexture(e,t){try{const t=this.dirtyStart,i=this.dirtyEnd;if(!this.hasDirty)return;(0,s.Z)("esri-2d-update-debug"),this._resetRange();const o=this.data.buffer,a=this.getTexture(e),l=4,h=(t-t%this.size)/this.size,c=(i-i%this.size)/this.size,d=h,p=this.size,f=c,y=h*this.size*l,g=(p+f*this.size)*l-y,m=(0,u.UK)(this.pixelType),_=new m(o,y*m.BYTES_PER_ELEMENT,g),b=this.size,x=f-d+1;if(x>this.size)return void n.Z.getLogger("esri.views.2d.engine.webgl.AttributeStoreView").error(new r.Z("mapview-webgl","Out-of-bounds index when updating AttributeData"));a.updateData(0,0,d,b,x,_)}catch(e){}}update(e){const{data:t,start:i,end:r}=e;if(null!=t&&null!=this.data){const r=this.data,s=i*this.texelSize;for(let i=0;i<t.length;i++){const n=1<<i%this.texelSize;e.layout&n&&(r[s+i]=t[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}resize(e,t){const i=this.size;if(this.size=t,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const r=(0,u.UK)(this.pixelType);this.destroy(),this.data=new r(e.buffer)}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(e){const t=new d.x(e,this._textureDesc,this.data??void 0);if(null!=this._lastTexture&&this._fbos[0]){const i=this._lastTexture.descriptor.width,r=this._lastTexture.descriptor.height,s=this._lastTexture.descriptor.dataType,n=this._lastTexture.descriptor.pixelFormat,o=this.getFBO(e),a=(0,u.Yw)(s),l=new((0,u.UK)(s))(new ArrayBuffer(i*r*a*this.texelSize)),h=e.getBoundFramebufferObject(),{x:c,y:d,width:p,height:f}=e.getViewport();e.bindFramebuffer(o),o.readPixels(0,0,i,r,n,s,l),t.updateData(0,0,0,2*i,r/2,l),e.setViewport(c,d,p,f),e.bindFramebuffer(h)}return this.destroy(),this._texture=t,this._texture}}class y{constructor(){this.size=0,this._pendingAttributeUpdates=[],this._version=0,this._epoch=0,this._locked=!1}_initialize(e){if(!e)throw new Error("InternalError: initArgs must be defined");const t=e.blockDescriptors;if(this.size=e.blockSize,(0,s.Z)("esri-2d-update-debug"),null==this._data)this._data=t.map(((e,t)=>null!=e?new f(e,this.size,t):null));else for(let e=0;e<this._data.length;e++){const i=this._data[e],r=t[e];null!=r&&(null==i?this._data[e]=new f(r,this.size,e):i.resize(r,this.size))}}destroy(){for(const e of this._data??[])e?.destroy();this._defaultTexture?.dispose();for(const{resolver:e}of this._pendingAttributeUpdates)e.reject("AttributeStore destroyed");this._pendingAttributeUpdates=[]}isEmpty(){return null==this._data}getBlock(e){return null==this._data?null:this._data[e]}setLabelMinZoom(e,t){this.setData(e,0,1,t)}getLabelMinZoom(e){return this.getData(e,0,1,255)}getFilterFlags(e){return this.getData(e,0,0,0)}getVVSize(e){return this.getData(e,a.wi.VV,0,0)}getData(e,t,i,r){if(!this._data)return 0;const s=this._data[t];if(null==s)return 0;const n=s.getData(e,i);return null!=n?n:r}setData(e,t,i,r){this._data[t].setData(e,i,r)}lockTextureUploads(){this._locked=!0}unlockTextureUploads(){this._locked=!1,this.update()}async requestUpdate(e){const t=(0,o.hh)();t.promise=t.promise.catch((e=>{(0,s.Z)("esri-2d-update-debug")})),this._version=e.version,this._pendingAttributeUpdates.push({inner:e,resolver:t}),(0,s.Z)("esri-2d-update-debug")}get currentEpoch(){return this._epoch}update(){if(this._locked)return;const e=this._pendingAttributeUpdates;this._pendingAttributeUpdates=[];for(const{inner:t,resolver:i}of e){const{blockData:e,initArgs:r,sendUpdateEpoch:n,version:o}=t;(0,s.Z)("esri-2d-update-debug"),this._version=o,this._epoch=n,null!=r&&this._initialize(r);const a=this._data;for(let t=0;t<e.length;t++){const i=e[t],r=a[t];null!=r&&null!=i&&((0,s.Z)("esri-2d-update-debug"),r.update(i))}i.resolve()}}getUniforms(e){return{filterFlags:{texture:this._getTexture(e,a.wi.FilterFlags),unit:a.NY},animation:{texture:this._getTexture(e,a.wi.Animation),unit:a.zZ},gpgpu:{texture:this._getTexture(e,a.wi.GPGPU),unit:a.cz},visualVariableData:{texture:this._getTexture(e,a.wi.VV),unit:a.bm},dataDriven0:{texture:this._getTexture(e,a.wi.DD0),unit:a.j1},dataDriven1:{texture:this._getTexture(e,a.wi.DD1),unit:a.Ly},dataDriven2:{texture:this._getTexture(e,a.wi.DD2),unit:a.ce},size:this.size}}_getTexture(e,t){const i=this._data?.[t];return i?(i.updateTexture(e,this._version),i.getTexture(e)):this._getDefaultTexture(e)}_getDefaultTexture(e){if(null==this._defaultTexture){const t=new p.X;t.wrapMode=h.e8.CLAMP_TO_EDGE,t.samplingMode=h.cw.NEAREST,t.width=1,t.height=1,this._defaultTexture=new d.x(e,t,new Uint8Array(4))}return this._defaultTexture}}var g=i(70179);class m extends g.Z{constructor(e){super(e),this._statisticsByLevel=new Map,this.attributeView=new y}destroy(){this.children.forEach((e=>e.destroy())),this.removeAllChildren(),this.attributeView.destroy()}doRender(e){e.context.capabilities.enable("textureFloat"),super.doRender(e)}createRenderParams(e){const t=super.createRenderParams(e);return t.attributeView=this.attributeView,t.instanceStore=this._instanceStore,t.statisticsByLevel=this._statisticsByLevel,t}}},70179:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(39994),s=i(38716),n=i(10994),o=i(22598),a=i(27946);const l=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class u extends n.Z{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(l),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:s.jx.DEBUG|s.jx.MAP|s.jx.HIGHLIGHT|s.jx.LABEL,target:()=>this.getStencilTarget()})),(0,r.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:s.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const e of this.children)e.stencilRef=t++}}},16699:function(e,t,i){i.d(t,{o:function(){return s}});var r=i(77206);class s{constructor(e,t,i,r,s){this._instanceId=e,this.techniqueRef=t,this._meshWriterName=i,this._input=r,this.optionalAttributes=s}get instanceId(){return(0,r.G)(this._instanceId)}createMeshInfo(e){return{id:this._instanceId,meshWriterName:this._meshWriterName,options:e,optionalAttributes:this.optionalAttributes}}getInput(){return this._input}setInput(e){this._input=e}}},81110:function(e,t,i){i.d(t,{K:function(){return R}});var r=i(61681),s=i(24778),n=i(38716),o=i(16699),a=i(56144),l=i(77206);let u=0;function h(e,t,i){return new o.o((0,l.W)(u++),e,e.meshWriter.name,t,i)}const c={geometry:{visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null}};class d{constructor(){this.instances={fill:h(a.k2.fill,c,{zoomRange:!0}),marker:h(a.k2.marker,c,{zoomRange:!0}),line:h(a.k2.line,c,{zoomRange:!0}),text:h(a.k2.text,c,{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}),complexFill:h(a.k2.complexFill,c,{zoomRange:!0}),texturedLine:h(a.k2.texturedLine,c,{zoomRange:!0})},this._instancesById=Object.values(this.instances).reduce(((e,t)=>(e.set(t.instanceId,t),e)),new Map)}getInstance(e){return this._instancesById.get(e)}}var p=i(46332),f=i(38642),y=i(45867),g=i(17703),m=i(29927),_=i(51118),b=i(64429),x=i(78951),w=i(91907),v=i(29620);const S=Math.PI/180;class T extends _.s{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=(0,f.Ue)(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,r.M2)(this._program)}doRender(e){const{context:t}=e,i=this._getBounds();if(i.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const r=this._program;t.bindVAO(this._vao),t.useProgram(r),r.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(w.MX.LINES,8*i.length,w.g.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:(0,f.Ue)()}}_createShaderProgram(e){if(this._program)return;this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",I().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:i,size:r,resolution:s,pixelRatio:n,rotation:o,viewpoint:a}=t,l=S*o,{x:u,y:h}=a.targetGeometry,c=(0,m.or)(u,t.spatialReference);this._localOrigin.x=c,this._localOrigin.y=h;const d=n*r[0],f=n*r[1],_=s*d,b=s*f,x=(0,p.yR)(this._dvsMat3);(0,p.Jp)(x,x,i),(0,p.Iu)(x,x,(0,y.al)(d/2,f/2)),(0,p.bA)(x,x,(0,g.al)(r[0]/_,-f/b,1)),(0,p.U1)(x,x,-l)}_updateBufferData(e,t){const{x:i,y:r}=this._localOrigin,s=8*t.length,n=new Float32Array(s),o=new Uint32Array(8*t.length);let a=0,l=0;for(const e of t)e&&(n[2*a]=e[0]-i,n[2*a+1]=e[1]-r,n[2*a+2]=e[0]-i,n[2*a+3]=e[3]-r,n[2*a+4]=e[2]-i,n[2*a+5]=e[3]-r,n[2*a+6]=e[2]-i,n[2*a+7]=e[1]-r,o[l]=a+0,o[l+1]=a+3,o[l+2]=a+3,o[l+3]=a+2,o[l+4]=a+2,o[l+5]=a+1,o[l+6]=a+1,o[l+7]=a+0,a+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(n.buffer):this._vertexBuffer=x.f.createVertex(e,w.l1.DYNAMIC_DRAW,n.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=x.f.createIndex(e,w.l1.DYNAMIC_DRAW,o),!this._vao){const t=I();this._vao=new v.U(e,t.attributes,t.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}const I=()=>(0,b.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:w.g.FLOAT}]});class R extends s.b{constructor(e){super(e),this._instanceStore=new d,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=(0,r.SC)(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new T(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const t of this.children){if(!t.visible)continue;const i=t.getDisplayList(e.drawPhase,this._instanceStore,n.gl.STRICT_ORDER);i?.render(e)}}}},14945:function(e,t,i){i.d(t,{Z:function(){return u}});var r=i(36663),s=(i(13802),i(39994),i(4157),i(70375),i(40266)),n=i(38716),o=i(81110),a=i(41214);let l=class extends o.K{get hasHighlight(){return this.children.some((e=>e.hasData))}renderChildren(e){this.attributeView.update(),e.drawPhase===n.jx.HIGHLIGHT&&this.children.some((e=>e.hasData))&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),(0,a.P9)(e,!0,(e=>{this._renderChildren(e,n.Xq.All)})))}};l=(0,r._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const u=l},7608:function(e,t,i){i.d(t,{VF:function(){return K},Uf:function(){return W}});var r=i(36663),s=i(80085),n=i(74396),o=i(7753),a=i(6865),l=i(70375),u=i(23148),h=i(39994),c=i(86114),d=i(78668),p=i(76868),f=i(17321),y=i(81977),g=(i(13802),i(40266)),m=i(91772),_=i(68577),b=i(14845),x=i(21586),w=i(59468),v=i(66341),S=i(29927),T=i(84238),I=i(84684),R=i(53736),M=i(35925),E=i(93698);function F(e,t){const{dpi:i,gdbVersion:r,geometry:s,geometryPrecision:n,height:o,historicMoment:a,layerOption:l,mapExtent:u,maxAllowableOffset:h,returnFieldName:c,returnGeometry:d,returnUnformattedValues:p,returnZ:f,spatialReference:y,timeExtent:g,tolerance:m,width:_}=e.toJSON(),{dynamicLayers:b,layerDefs:x,layerIds:w}=A(e),v=null!=t?.geometry?t.geometry:null,S={historicMoment:a,geometryPrecision:n,maxAllowableOffset:h,returnFieldName:c,returnGeometry:d,returnUnformattedValues:p,returnZ:f,tolerance:m},T=v&&v.toJSON()||s;S.imageDisplay=`${_},${o},${i}`,r&&(S.gdbVersion=r),T&&(delete T.spatialReference,S.geometry=JSON.stringify(T),S.geometryType=(0,R.Ji)(T));const I=y??T?.spatialReference??u?.spatialReference;if(I&&(S.sr=(0,M.B9)(I)),S.time=g?[g.start,g.end].join(","):null,u){const{xmin:e,ymin:t,xmax:i,ymax:r}=u;S.mapExtent=`${e},${t},${i},${r}`}return x&&(S.layerDefs=x),b&&!x&&(S.dynamicLayers=b),S.layers="popup"===l?"visible":l,w&&!b&&(S.layers+=`:${w.join(",")}`),S}function A(e){const{mapExtent:t,floors:i,width:r,sublayers:s,layerIds:n,layerOption:o,gdbVersion:a}=e,l=s?.find((e=>null!=e.layer))?.layer?.serviceSublayers,u="popup"===o,h={},c=(0,_.yZ)({extent:t,width:r,spatialReference:t?.spatialReference}),d=[],p=e=>{const t=0===c,i=0===e.minScale||c<=e.minScale,r=0===e.maxScale||c>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(p);else{if(!1===n?.includes(e.id)||u&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(s?.forEach(p),s&&!d.length)h.layerIds=[];else{const e=(0,E.FN)(d,l,a),t=d.map((e=>{const t=(0,x.f)(i,e);return e.toExportImageJSON(t)}));if(e)h.dynamicLayers=JSON.stringify(t);else{if(s){let e=d.map((({id:e})=>e));n&&(e=e.filter((e=>n.includes(e)))),h.layerIds=e}else n?.length&&(h.layerIds=n);const e=function(e,t){const i=!!e?.length,r=t.filter((e=>null!=e.definitionExpression||i&&null!=e.floorInfo));return r.length?r.map((t=>{const i=(0,x.f)(e,t),r=(0,I._)(i,t.definitionExpression);return{id:t.id,definitionExpression:r??void 0}})):null}(i,d);if(null!=e&&e.length){const t={};for(const i of e)i.definitionExpression&&(t[i.id]=i.definitionExpression);Object.keys(t).length&&(h.layerDefs=JSON.stringify(t))}}}return h}var C,z=i(91957),P=i(37956),V=i(82064),D=i(7283),O=(i(4157),i(39835)),k=i(14685);let j=C=class extends V.wq{static from(e){return(0,D.TJ)(C,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}};(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],j.prototype,"dpi",void 0),(0,r._)([(0,y.Cb)()],j.prototype,"floors",void 0),(0,r._)([(0,y.Cb)({type:String,json:{write:!0}})],j.prototype,"gdbVersion",void 0),(0,r._)([(0,y.Cb)({types:z.qM,json:{read:R.im,write:!0}})],j.prototype,"geometry",void 0),(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],j.prototype,"geometryPrecision",void 0),(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],j.prototype,"height",void 0),(0,r._)([(0,y.Cb)({type:Date})],j.prototype,"historicMoment",void 0),(0,r._)([(0,O.c)("historicMoment")],j.prototype,"writeHistoricMoment",null),(0,r._)([(0,y.Cb)({type:[Number],json:{write:!0}})],j.prototype,"layerIds",void 0),(0,r._)([(0,y.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],j.prototype,"layerOption",void 0),(0,r._)([(0,y.Cb)({type:m.Z,json:{write:!0}})],j.prototype,"mapExtent",void 0),(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],j.prototype,"maxAllowableOffset",void 0),(0,r._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],j.prototype,"returnFieldName",void 0),(0,r._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],j.prototype,"returnGeometry",void 0),(0,r._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],j.prototype,"returnM",void 0),(0,r._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],j.prototype,"returnUnformattedValues",void 0),(0,r._)([(0,y.Cb)({type:Boolean,json:{write:!0}})],j.prototype,"returnZ",void 0),(0,r._)([(0,y.Cb)({type:k.Z,json:{write:!0}})],j.prototype,"spatialReference",void 0),(0,r._)([(0,y.Cb)()],j.prototype,"sublayers",void 0),(0,r._)([(0,y.Cb)({type:P.Z,json:{write:!0}})],j.prototype,"timeExtent",void 0),(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],j.prototype,"tolerance",void 0),(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],j.prototype,"width",void 0),j=C=(0,r._)([(0,g.j)("esri.rest.support.IdentifyParameters")],j);const L=j;var N=i(34248),U=i(59659);let B=class extends V.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return s.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:i,geometry:r}=e;i&&(t.attributes={...i}),null!=r&&(t.geometry=r.toJSON(),t.geometryType=U.P.toJSON(r.type))}};(0,r._)([(0,y.Cb)({type:String,json:{write:!0}})],B.prototype,"displayFieldName",void 0),(0,r._)([(0,y.Cb)({type:s.Z})],B.prototype,"feature",void 0),(0,r._)([(0,N.r)("feature",["attributes","geometry"])],B.prototype,"readFeature",null),(0,r._)([(0,O.c)("feature")],B.prototype,"writeFeature",null),(0,r._)([(0,y.Cb)({type:Number,json:{write:!0}})],B.prototype,"layerId",void 0),(0,r._)([(0,y.Cb)({type:String,json:{write:!0}})],B.prototype,"layerName",void 0),B=(0,r._)([(0,g.j)("esri.rest.support.IdentifyResult")],B);const Z=B;async function G(e,t,i){const r=(n=t,t=L.from(n)).geometry?[t.geometry]:[],s=(0,T.en)(e);var n;return s.path+="/identify",(0,S.aX)(r).then((e=>{const r=F(t,{geometry:e?.[0]}),n=(0,T.cv)({...s.query,f:"json",...r}),o=(0,T.lA)(n,i);return(0,v.Z)(s.path,o).then(H).then((e=>function(e,t){if(!t?.length)return e;const i=new Map;function r(e){i.set(e.id,e),e.sublayers&&e.sublayers.forEach(r)}t.forEach(r);for(const t of e.results)t.feature.sourceLayer=i.get(t.layerId);return e}(e,t.sublayers)))}))}function H(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>Z.fromJSON(e))),t}var q=i(30879),$=i(1759),J=i(59439);let Q=null;function W(e,t){return"tile"===t.type||"map-image"===t.type}let K=class extends n.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,d.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,p.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeaturesAtLocation(e,t){const{layerView:{layer:i,view:{scale:r}}}=this;if(!e)throw new l.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const s=function(e,t,i){const r=[];if(!e)return r;const s=e=>{const n=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&o)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=(0,J.V5)(e,{...i,defaultPopupTemplateEnabled:!1});null!=t&&r.unshift({sublayer:e,popupTemplate:t})}};return e.map(s),r}(i.sublayers,r,t);if(!s.length)return[];const n=await async function(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return!1}}(i,s);if(!((i.capabilities?.operations?.supportsIdentify??1)&&i.version>=10.5||n))throw new l.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return n?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return(0,u.kB)();let i=null;if(e instanceof s.Z?i=[e]:a.Z.isCollection(e)&&e.length>0?i=e.toArray():Array.isArray(e)&&e.length>0&&(i=e),i=i?.filter(o.pC),!i?.length)return(0,u.kB)();for(const e of i){const t=e.sourceLayer;null!=t&&"geometryType"in t&&"point"===t.geometryType&&(e.visible=!1)}return t.addMany(i),(0,u.kB)((()=>t.removeMany(i??[])))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:r,highlightGraphicUpdated:s}=this;if(r&&s)for(const n of e){const e=n.sourceLayer&&"renderer"in n.sourceLayer&&n.sourceLayer.renderer;n.sourceLayer&&"geometryType"in n.sourceLayer&&"point"===n.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(n).then((async o=>{o||=new $.Z;let a=null;const l="visualVariables"in e?e.visualVariables?.find((e=>"size"===e.type)):void 0;l&&(Q||(Q=(await Promise.resolve().then(i.bind(i,36496))).getSize),a=Q(l,n,{view:t.type,scale:t.scale,shape:"simple-marker"===o.type?o.style:null})),a||="width"in o&&"height"in o&&null!=o.width&&null!=o.height?Math.max(o.width,o.height):"size"in o?o.size:16,r.includes(n)&&(n.symbol=new $.Z({style:"square",size:a,xoffset:"xoffset"in o?o.xoffset:0,yoffset:"yoffset"in o?o.yoffset:0}),s(n,"symbol"),n.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:i},highlightGraphics:r,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!r?.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),o=new Map;for(const e of r)if(!this._featuresResolutions.has(e)||this._featuresResolutions.get(e)>n){const t=e.sourceLayer;(0,c.s1)(o,t,(()=>new Map)).set(e.getObjectId(),e)}const a=Array.from(o,(([e,t])=>{const r=e.createQuery();return r.objectIds=[...t.keys()],r.outFields=[e.objectIdField],r.returnGeometry=!0,r.maxAllowableOffset=n,r.outSpatialReference=i.spatialReference,e.queryFeatures(r)})),l=await Promise.all(a);if(!this.destroyed)for(const{features:e}of l)for(const t of e){const e=t.sourceLayer,i=o.get(e).get(t.getObjectId());i&&r.includes(i)&&(i.geometry=t.geometry,s(i,"geometry"),this._featuresResolutions.set(i,n))}}_getTargetResolution(e){const t=e*(0,f.c9)(this.layerView.view.spatialReference),i=t/16;return i<=10?0:e/t*i}async _fetchPopupFeaturesUsingIdentify(e,t,i){const r=await this._createIdentifyParameters(e,t,i);if(null==r)return[];const{results:s}=await G(this.layerView.layer.parsedUrl,r,i);return s.map((e=>e.feature))}async _createIdentifyParameters(e,t,i){const{floors:r,layer:s,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView;if(!t.length)return null;await Promise.all(t.map((({sublayer:e})=>e.load(i).catch((()=>{})))));const l=Math.min((0,h.Z)("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce(((e,t)=>t.renderer?(0,w.k)({renderer:t.renderer,pointerType:i?.pointerType}):e),2)),u=this.createFetchPopupFeaturesQueryGeometry(e,l),c=(0,_.dp)(a,o),d=Math.round(u.width/c),p=new m.Z({xmin:u.center.x-c*d,ymin:u.center.y-c*d,xmax:u.center.x+c*d,ymax:u.center.y+c*d,spatialReference:u.spatialReference});return new L({floors:r,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:d,layerOption:"popup",mapExtent:p,returnGeometry:!0,spatialReference:o,sublayers:s.sublayers,timeExtent:n,tolerance:l,width:d})}async _fetchPopupFeaturesUsingQueries(e,t,i){const{layerView:{floors:r,timeExtent:s}}=this,n=t.map((async({sublayer:t,popupTemplate:n})=>{if(await t.load(i).catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];const o=t.createQuery(),a=(0,w.k)({renderer:t.renderer,pointerType:i?.pointerType}),l=this.createFetchPopupFeaturesQueryGeometry(e,a),u=new Set,[h]=await Promise.all([(0,J.e7)(t,n),t.renderer?.collectRequiredFields(u,t.fieldsIndex)]);(0,d.k_)(i),(0,b.gd)(u,t.fieldsIndex,h);const c=Array.from(u).sort();if(o.geometry=l,o.outFields=c,o.timeExtent=s,r){const e=r.clone(),i=(0,x.f)(e,t);null!=i&&(o.where=o.where?`(${o.where}) AND (${i})`:i)}const p=this._getTargetResolution(l.width/a),f=await function(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,q.LC)():Promise.resolve()}(n);(0,d.k_)(i);const y="point"===t.geometryType||f&&f.arcadeUtils.hasGeometryOperations(n);y||(o.maxAllowableOffset=p);let{features:g}=await t.queryFeatures(o,i);const m=y?0:p;g=await async function(e,t,i){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e,i).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(t,g,i);for(const e of g)this._featuresResolutions.set(e,m);return g}));return(await Promise.allSettled(n)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(o.pC)}};(0,r._)([(0,y.Cb)({constructOnly:!0})],K.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],K.prototype,"layerView",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],K.prototype,"highlightGraphics",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],K.prototype,"highlightGraphicUpdated",void 0),(0,r._)([(0,y.Cb)({constructOnly:!0})],K.prototype,"updatingHandles",void 0),K=(0,r._)([(0,g.j)("esri.views.layers.support.MapService")],K)},59439:function(e,t,i){i.d(t,{V5:function(){return n},e7:function(){return s}});var r=i(14845);async function s(e,t=e.popupTemplate){if(null==t)return[];const i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:s}=t,{objectIdField:n,typeIdField:o,globalIdField:a,relationships:l}=e;if(i.includes("*"))return["*"];const u=s?(0,r.CH)(e):[],h=(0,r.Q0)(e.fieldsIndex,[...i,...u]);return o&&h.push(o),h&&n&&e.fieldsIndex?.has(n)&&!h.includes(n)&&h.push(n),h&&a&&e.fieldsIndex?.has(a)&&!h.includes(a)&&h.push(a),l&&l.forEach((t=>{const{keyField:i}=t;h&&i&&e.fieldsIndex?.has(i)&&!h.includes(i)&&h.push(i)})),h}function n(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}},99621:function(e,t,i){i.d(t,{K:function(){return n}});i(91957);var r=i(17321),s=(i(59468),i(91772));function n(e,t,i,n=new s.Z){let o=0;if("2d"===i.type)o=t*(i.resolution??0);else if("3d"===i.type){const s=i.overlayPixelSizeInMapUnits(e),n=i.basemapSpatialReference;o=null==n||n.equals(i.spatialReference)?t*s:(0,r.c9)(n)/(0,r.c9)(i.spatialReference)}const a=e.x-o,l=e.y-o,u=e.x+o,h=e.y+o,{spatialReference:c}=i;return n.xmin=Math.min(a,u),n.ymin=Math.min(l,h),n.xmax=Math.max(a,u),n.ymax=Math.max(l,h),n.spatialReference=c,n}new s.Z}}]);