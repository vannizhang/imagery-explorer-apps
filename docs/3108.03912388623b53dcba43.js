"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[3108,8611],{50516:function(e,t,r){r.d(t,{D:function(){return n}});var o=r(71760);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,o.l)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},71760:function(e,t,r){function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:function(){return o}})},73108:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var o=r(36663),n=r(80020),i=r(66341),s=r(70375),a=r(67134),l=r(13802),p=r(15842),u=r(86745),d=r(78668),c=r(3466),y=r(81977),h=(r(39994),r(34248)),f=r(40266),m=r(39835),v=r(38481),b=r(91223),w=r(87232),g=r(63989),_=r(43330),S=r(18241),C=r(95874),x=r(93902),I=r(7283),T=r(79438),j=r(82064);r(4157);let R=class extends j.wq{constructor(e){super(e),this.field=null,this.type=null}clone(){return null}};(0,o._)([(0,y.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],R.prototype,"field",void 0),(0,o._)([(0,y.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],R.prototype,"type",void 0),R=(0,o._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudFilter")],R);const Z=R;var P;let V=P=class extends Z{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new P({field:this.field,requiredClearBits:(0,a.d9)(this.requiredClearBits),requiredSetBits:(0,a.d9)(this.requiredSetBits)})}};(0,o._)([(0,y.Cb)({type:[I.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],V.prototype,"requiredClearBits",void 0),(0,o._)([(0,y.Cb)({type:[I.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],V.prototype,"requiredSetBits",void 0),(0,o._)([(0,T.J)({pointCloudBitfieldFilter:"bitfield"})],V.prototype,"type",void 0),V=P=(0,o._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],V);const N=V;var O;let F=O=class extends Z{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new O({field:this.field,includedReturns:(0,a.d9)(this.includedReturns)})}};(0,o._)([(0,y.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],F.prototype,"includedReturns",void 0),(0,o._)([(0,T.J)({pointCloudReturnFilter:"return"})],F.prototype,"type",void 0),F=O=(0,o._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],F);const q=F;var A;let E=A=class extends Z{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new A({field:this.field,mode:this.mode,values:(0,a.d9)(this.values)})}};(0,o._)([(0,y.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"mode",void 0),(0,o._)([(0,T.J)({pointCloudValueFilter:"value"})],E.prototype,"type",void 0),(0,o._)([(0,y.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],E.prototype,"values",void 0),E=A=(0,o._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],E);const K={key:"type",base:Z,typeMap:{value:E,bitfield:N,return:q}};var z,k=r(51599),B=r(12512),U=r(89076),L=r(18228),D=r(99723),M=r(46999);let $=z=class extends M.Z{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new z({...this.cloneProperties(),field:(0,a.d9)(this.field)})}};(0,o._)([(0,T.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],$.prototype,"type",void 0),(0,o._)([(0,y.Cb)({type:String,json:{write:!0}})],$.prototype,"field",void 0),$=z=(0,o._)([(0,f.j)("esri.renderers.PointCloudRGBRenderer")],$);const J=$;var W=r(5947),G=r(60948);const H={key:"type",base:M.Z,typeMap:{"point-cloud-class-breaks":D.Z,"point-cloud-rgb":J,"point-cloud-stretch":W.Z,"point-cloud-unique-value":G.Z},errorContext:"renderer"};var X=r(83772),Y=r(10171);const Q=(0,U.v)();let ee=class extends((0,x.Vt)((0,w.Y)((0,_.q)((0,S.I)((0,C.M)((0,p.R)((0,g.N)((0,b.V)(v.Z))))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t?.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map((e=>{const t=new B.Z;return"FieldTypeInteger"===e.type&&((e=(0,a.d9)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new B.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,o){(0,u.RB)("layerDefinition.drawingInfo.renderer",e.write({},o),t)}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.r9).then((()=>this._fetchService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=(0,Y.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!r)return;const o=new L.Z({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos?.find((e=>e.fieldName===t.name));if(!r)return;const o=new L.Z({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new s.Z("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.attributeStorageInfo)if(e.name===r.name){const r=(0,c.v_)(this.parsedUrl.path,`./statistics/${e.key}`);return(0,i.Z)(r,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(x.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(x.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,X.LR)(l.Z.getLogger(this),(0,X.Uy)("Point cloud layers","absolute-height",e)),(0,X.LR)(l.Z.getLogger(this),(0,X.kf)("Point cloud layers",e))}};(0,o._)([(0,y.Cb)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,o._)([(0,y.Cb)(k.C_)],ee.prototype,"popupEnabled",void 0),(0,o._)([(0,y.Cb)({type:n.Z,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,o._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,o._)([(0,y.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,o._)([(0,y.Cb)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,o._)([(0,y.Cb)({types:[K],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,o._)([(0,y.Cb)({type:[B.Z]})],ee.prototype,"fields",void 0),(0,o._)([(0,y.Cb)(Q.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,o._)([(0,h.r)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,o._)([(0,y.Cb)(Q.outFields)],ee.prototype,"outFields",void 0),(0,o._)([(0,y.Cb)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,o._)([(0,y.Cb)(k.PV)],ee.prototype,"elevationInfo",null),(0,o._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,o._)([(0,y.Cb)(k.rn)],ee.prototype,"legendEnabled",void 0),(0,o._)([(0,y.Cb)({types:H,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:H},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,o._)([(0,m.c)("renderer")],ee.prototype,"writeRenderer",null),(0,o._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,o._)([(0,f.j)("esri.layers.PointCloudLayer")],ee);const te=ee},93902:function(e,t,r){r.d(t,{xp:function(){return F},Vt:function(){return R}});var o=r(36663),n=r(66341),i=r(70375),s=r(13802),a=r(78668),l=r(3466),p=r(81977),u=(r(39994),r(4157),r(34248)),d=r(40266),c=r(39835),y=r(50516),h=r(91772),f=r(64307),m=r(14685),v=r(20692),b=r(51599),w=r(40909);let g=null;function _(){return g}var S=r(93968),C=r(53110),x=r(84513),I=r(83415),T=r(76990),j=r(60629);const R=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,a.Ds)((async(e,t,r)=>{switch(e){case F.SAVE:return this._save(t);case F.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return m.Z.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new m.Z(o):null}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return h.Z.fromJSON(o,r)}const o=t.store,n=this._readSpatialReference(t);return null==n||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<Z))?null:new h.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:n})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return(0,v.a7)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,v.Qc)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,v.ld)(o)}set url(e){const t=(0,v.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:s.Z.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,v.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.mN)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.T)(this.parsedUrl.path,this.rootNode,e,this.customParameters,this.apiKey,s.Z.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,r=e.rootPage?.nodes?.[t];if(null==r?.obb?.center||null==r.obb.halfSize)throw new i.Z("sceneservice:invalid-node-page","Invalid node page.");if(r.obb.center[0]<Z||null==this.fullExtent||this.fullExtent.hasZ)return;const o=r.obb.halfSize,n=r.obb.center[2],s=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=n-s,this.fullExtent.zmax=n+s}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<Z)return;const r=t[2],o=t[3],{fullExtent:n}=this;n&&(n.zmin=r-o,n.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new i.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,n.Z)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await(0,n.Z)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let r=!1;if(t.data.layerType&&"Voxel"===t.data.layerType&&(r=!0),r)return this._fetchVoxelServiceLayer();const o=t.data;this.read(o,this._getServiceContext()),this.validateLayer(o)}async _fetchVoxelServiceLayer(e){const t=(await(0,n.Z)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const t of o)e.typeKeywords.push(t);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===P.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const r={...O,...t};let o=C.default.from(e);if(!o)throw new i.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,T.w)(o),o.id&&(o=o.clone(),o.id=null);const n=o.portal||S.Z.getDefault();await this._ensureLoadBeforeSave(),o.type=N,o.portal=n;const s=(0,x.Y)(o,"portal-item",!0),a={layers:[this.write({},s)]};return await Promise.all(s.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(a,s,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,P.newItem),await n.signIn(),await(n.user?.addItem({item:o,folder:r?.folder,data:a})),await(0,I.H)(this.resourceReferences,s),this.portalItem=o,(0,y.D)(s),s.portalItem=o,o}async _save(e){const t={...O,...e};if(!this.portalItem)throw new i.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,T.w)(this.portalItem),this.portalItem.type!==N)throw new i.Z("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${N}"`);await this._ensureLoadBeforeSave();const r=(0,x.Y)(this.portalItem,"portal-item",!0),o={layers:[this.write({},r)]};return await Promise.all(r.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,P.existingItem),await(0,I.b)(this.portalItem,o,this.resourceReferences,r),(0,y.D)(r),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const o=r?.validationOptions;(0,j.z)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:o?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const n=o?.enabled,a=_();if(n&&a){const t=(await a()).validate(e,r.portalItemLayerType);if(!t.length)return;const n=`Layer item did not validate:\n${t.join("\n")}`;if(s.Z.getLogger(this).error(`_validateAgainstJSONSchema(): ${n}`),"throw"===o.failPolicy){const e=t.map((e=>new i.Z("sceneservice:schema-validation",e)));throw new i.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,o._)([(0,p.Cb)(b.id)],t.prototype,"id",void 0),(0,o._)([(0,p.Cb)({type:m.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,p.Cb)({type:h.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,p.Cb)({readOnly:!0,type:f.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,p.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,p.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,p.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,p.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,p.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,p.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,p.Cb)(b.HQ)],t.prototype,"url",null),(0,o._)([(0,c.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,p.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,p.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,p.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,d.j)("esri.layers.mixins.SceneService")],t),t},Z=-1e38;var P,V;(V=P||(P={}))[V.existingItem=0]="existingItem",V[V.newItem=1]="newItem";const N="Scene Service",O={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var F;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(F||(F={}))},40909:function(e,t,r){r.d(t,{T:function(){return i}});var o=r(66341),n=r(70375);async function i(e,t,r,i,s,a,l){let p=null;if(null!=r){const t=`${e}/nodepages/`,n=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.Z)(n,{query:{f:"json",...i,token:s},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(e){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,e),p=e}}if(!t)return null;const u=t?.split("/").pop(),d=`${e}/nodes/`,c=d+u;try{return{type:"node",rootNode:(await(0,o.Z)(c,{query:{f:"json",...i,token:s},responseType:"json",signal:l})).data,urlPrefix:d}}catch(e){throw new n.Z("sceneservice:root-node-missing","Root node missing.",{pageError:p,nodeError:e,url:c})}}},68611:function(e,t,r){r.d(t,{FO:function(){return c},W7:function(){return y},addOrUpdateResources:function(){return a},fetchResources:function(){return s},removeAllResources:function(){return p},removeResource:function(){return l}});var o=r(66341),n=r(70375),i=r(3466);async function s(e,t={},r){await e.load(r);const o=(0,i.v_)(e.itemUrl,"resources"),{start:n=1,num:s=10,sortOrder:a="asc",sortField:l="resource"}=t,p={query:{start:n,num:s,sortOrder:a,sortField:l,token:e.apiKey},signal:r?.signal},u=await e.portal.request(o,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)})))}}async function a(e,t,r,o){const s=new Map;for(const{resource:e,content:o,compress:i,access:a}of t){if(!e.hasPath())throw new n.Z(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[t,l]=u(e.path),p=`${t}/${i??""}/${a??""}`;s.has(p)||s.set(p,{prefix:t,compress:i,access:a,files:[]}),s.get(p).files.push({fileName:l,content:o})}await e.load(o);const a=(0,i.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:t,compress:r,access:n,files:i}of s.values()){const s=25;for(let l=0;l<i.length;l+=s){const p=i.slice(l,l+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),n&&u.append("access",n);let d=0;for(const{fileName:e,content:t}of p)u.append("file"+ ++d,t,e);u.append("f","json"),await e.portal.request(a,{method:"post",body:u,signal:o?.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new n.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,i.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function p(e,t){await e.load(t);const r=(0,i.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=function(e){const t=(0,i.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,n]=u(t);return[o,n,r]}async function c(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function y(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath((0,i.v_)(r,t+o))}},99723:function(e,t,r){r.d(t,{Z:function(){return b}});var o,n=r(36663),i=r(67134),s=r(81977),a=(r(39994),r(13802),r(79438)),l=r(40266),p=r(46999),u=r(24794),d=r(30936),c=r(82064),y=r(7283);let h=o=class extends c.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,n._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{type:[y.z8],write:!0}})],h.prototype,"color",void 0),h=o=(0,n._)([(0,l.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const f=h;var m;let v=m=class extends p.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new m({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.d9)(this.colorClassBreakInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],v.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:u.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,n._)([(0,s.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorClassBreakInfos",void 0),v=m=(0,n._)([(0,l.j)("esri.renderers.PointCloudClassBreaksRenderer")],v);const b=v},46999:function(e,t,r){r.d(t,{Z:function(){return x}});var o,n=r(36663),i=r(25709),s=r(82064),a=r(67134),l=r(81977),p=(r(39994),r(13802),r(40266));r(4157);let u=o=class extends s.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=o=(0,n._)([(0,p.j)("esri.renderers.support.pointCloud.ColorModulation")],u);const d=u,c=new i.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.wq{};(0,n._)([(0,l.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,n._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const h=y;var f,m=r(79438);let v=f=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new f({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,n._)([(0,m.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],v.prototype,"type",void 0),(0,n._)([(0,l.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"size",void 0),(0,n._)([(0,l.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"useRealWorldSymbolSizes",void 0),v=f=(0,n._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],v);const b=v;var w;let g=w=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,n._)([(0,m.J)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),(0,n._)([(0,l.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=(0,n._)([(0,p.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const _={key:"type",base:h,typeMap:{"fixed-size":b,splat:g}},S=(0,i.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let C=class extends s.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return null}cloneProperties(){return{pointSizeAlgorithm:(0,a.d9)(this.pointSizeAlgorithm),colorModulation:(0,a.d9)(this.colorModulation),pointsPerInch:(0,a.d9)(this.pointsPerInch)}}};(0,n._)([(0,l.Cb)({type:S.apiValues,readOnly:!0,nonNullable:!0,json:{type:S.jsonValues,read:!1,write:S.write}})],C.prototype,"type",void 0),(0,n._)([(0,l.Cb)({types:_,json:{write:!0}})],C.prototype,"pointSizeAlgorithm",void 0),(0,n._)([(0,l.Cb)({type:d,json:{write:!0}})],C.prototype,"colorModulation",void 0),(0,n._)([(0,l.Cb)({json:{write:!0},nonNullable:!0,type:Number})],C.prototype,"pointsPerInch",void 0),C=(0,n._)([(0,p.j)("esri.renderers.PointCloudRenderer")],C),(C||(C={})).fieldTransformTypeKebabDict=new i.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const x=C},5947:function(e,t,r){r.d(t,{Z:function(){return y}});var o,n=r(36663),i=r(67134),s=r(81977),a=(r(39994),r(13802),r(79438)),l=r(40266),p=r(46999),u=r(24794),d=r(68844);let c=o=class extends p.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new o({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),stops:(0,i.d9)(this.stops),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:u.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,n._)([(0,s.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[d.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=o=(0,n._)([(0,l.j)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},60948:function(e,t,r){r.d(t,{Z:function(){return b}});var o,n=r(36663),i=r(67134),s=r(81977),a=(r(39994),r(13802),r(79438)),l=r(40266),p=r(46999),u=r(24794),d=r(30936),c=r(82064),y=r(7283);let h=o=class extends c.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:(0,i.d9)(this.values),color:(0,i.d9)(this.color)})}};(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,n._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,n._)([(0,s.Cb)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,n._)([(0,s.Cb)({type:d.Z,json:{type:[y.z8],write:!0}})],h.prototype,"color",void 0),h=o=(0,n._)([(0,l.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const f=h;var m;let v=m=class extends p.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new m({...this.cloneProperties(),field:(0,i.d9)(this.field),fieldTransformType:(0,i.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,i.d9)(this.colorUniqueValueInfos),legendOptions:(0,i.d9)(this.legendOptions)})}};(0,n._)([(0,a.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],v.prototype,"type",void 0),(0,n._)([(0,s.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,n._)([(0,s.Cb)({type:p.Z.fieldTransformTypeKebabDict.apiValues,json:{type:p.Z.fieldTransformTypeKebabDict.jsonValues,read:p.Z.fieldTransformTypeKebabDict.read,write:p.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,n._)([(0,s.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorUniqueValueInfos",void 0),(0,n._)([(0,s.Cb)({type:u.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),v=m=(0,n._)([(0,l.j)("esri.renderers.PointCloudUniqueValueRenderer")],v);const b=v},83772:function(e,t,r){r.d(t,{LR:function(){return l},Uy:function(){return i},VW:function(){return n},Wb:function(){return s},kf:function(){return a}});r(17321),r(91478);function o(e){return e?p:u}function n(e,t){return function(e,t){return t?.mode?t.mode:o(e).mode}(null!=e&&e.hasZ,t)}function i(e,t,r){return r&&r.mode!==t?`${e} only support ${t} elevation mode`:null}function s(e,t,r){return r?.mode===t?`${e} do not support ${t} elevation mode`:null}function a(e,t){return null!=t?.featureExpressionInfo&&"0"!==t.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function l(e,t){t&&e.warn(".elevationInfo=",t)}const p={mode:"absolute-height",offset:0},u={mode:"on-the-ground",offset:null}},83415:function(e,t,r){r.d(t,{H:function(){return a},b:function(){return l}});var o=r(70375),n=r(78668),i=r(12173),s=r(68611);async function a(e,t,r){const o=await p(e,t,r);await u(o,t,r)}async function l(e,t,r,o,n){const i=await p(r,o,n);await e.update({data:t}),await u(i,o,n)}async function p(e,t,a){if(!t?.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const p=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,d=[];p.forEach((t=>{l.delete(t),e.paths.push(t)}));const c=[],y=[],h=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),p.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:n}=r,a=(0,s.W7)(t,(0,i.DO)());e.paths.push(a.path),c.push({resource:a,content:await(0,s.FO)(o),compress:r.compress}),n&&h.push((()=>n(a)))}else{e.paths.push(r.resource.path),y.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const t=r.finish;t&&h.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{c.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const e=r.finish;e&&h.push((()=>e(r.resource)))}if(c.length||y.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,68611));await e(t.portalItem,c,"add",a),await e(t.portalItem,y,"update",a)}if(h.forEach((e=>e())),0===d.length)return l;const f=await(0,n.UO)(d);if((0,n.k_)(a),f.length>0)throw new o.Z("save:resources","Failed to save one or more resources",{errors:f});return l}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const n of e){const e=t.portalItem.resourceFromPath(n);o.push(e.portalItem.removeResource(e,r))}await(0,n.as)(o)}},76990:function(e,t,r){r.d(t,{w:function(){return s}});var o=r(51366),n=r(70375),i=r(99522);function s(e){if(o.default.apiKey&&(0,i.r)(e.portal.url))throw new n.Z("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${e.portal.url} when using an api key`)}}}]);