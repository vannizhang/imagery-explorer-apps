"use strict";(self.webpackChunkimagery_explorer_apps=self.webpackChunkimagery_explorer_apps||[]).push([[1057],{1057:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=s(36663),n=s(70375),i=s(23148),o=s(76868),a=s(81977),u=(s(39994),s(13802),s(4157),s(40266)),l=s(51211),c=s(15881),h=s(50198),d=s(15553);const p=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...e){super(...e),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&"connected"===this._streamConnectionStatus?"paused":this._streamConnectionStatus}_onSuspendedChange(e){e?this._doPause():this._isUserPaused||this._doResume()}};return(0,r._)([(0,a.Cb)()],t.prototype,"_isUserPaused",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,r._)([(0,a.Cb)({type:d.Z})],t.prototype,"filter",void 0),t=(0,r._)([(0,u.j)("esri.layers.mixins.StreamLayerView")],t),t};let _=class extends(p(c.default)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null}initialize(){this.addHandles([(0,o.YP)((()=>this.layer.customParameters),(e=>this._worker.streamMessenger.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._worker.streamMessenger.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>{this._worker.streamMessenger.sendMessageToClient(e),this._isUserPaused&&"type"in e&&"clear"===e.type&&this.incrementSourceRefreshVersion()})),(0,o.YP)((()=>this.layer.purgeOptions),(()=>this._update())),(0,o.YP)((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor"),this._doResume()}destroy(){this._doPause()}get connectionError(){return this.pipelineErrorString?new n.Z("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return(0,i.AL)(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&this._worker.streamMessenger.enableEvent(e,!0);const r=super.on(e,t),n=this;return(0,i.kB)((()=>{r.remove(),s&&(n._worker.closed||n.hasEventListener(e)||n._worker.streamMessenger.enableEvent(e,!1))}))}queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new n.Z("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return(0,h.Y)(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=l.Z.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t})),new l.Z({features:[]}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){null!=this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null)}_doResume(){this._refreshInterval=setInterval((()=>this.incrementSourceRefreshVersion()),this.layer.updateInterval)}_doDisconnect(){this._worker.streamMessenger.disconnect(),this._doPause()}_doConnect(){this._worker.streamMessenger.connect(),this.resume()}_doClear(){this._worker.streamMessenger.clear(),null==this._refreshInterval&&this.incrementSourceRefreshVersion()}_createClientOptions(){const e=super._createClientOptions(),t=this;return{...e,get container(){return t.featureContainer},setProperty:e=>{this.set(e.propertyName,e.value)}}}};(0,r._)([(0,a.Cb)()],_.prototype,"pipelineConnectionStatus",void 0),(0,r._)([(0,a.Cb)()],_.prototype,"pipelineErrorString",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],_.prototype,"connectionError",null),(0,r._)([(0,a.Cb)({readOnly:!0})],_.prototype,"_streamConnectionStatus",null),_=(0,r._)([(0,u.j)("esri.views.2d.layers.StreamLayerView2D")],_);const m=_}}]);