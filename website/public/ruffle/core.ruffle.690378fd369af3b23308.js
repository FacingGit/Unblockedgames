"use strict";(self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[]).push([[966],{762:(e,n,_)=>{function t(e,n,_){n&&e.getChannelData(0).set(n),_&&e.getChannelData(1).set(_)}function r(e){return e.currentTime-e.baseLatency}_.d(n,{K:()=>t,T:()=>r})},966:(e,n,_)=>{_.r(n),_.d(n,{Ruffle:()=>G,default:()=>H});var t=_(762);const r="undefined"!=typeof AudioContext?AudioContext:"undefined"!=typeof webkitAudioContext?webkitAudioContext:void 0;let b;const c=new Array(32).fill(void 0);function f(e){return c[e]}c.push(void 0,null,!0,!1);let o=c.length;function u(e){const n=f(e);return function(e){e<36||(c[e]=o,o=e)}(e),n}const i=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let a=null;function g(){return null!==a&&a.buffer===b.memory.buffer||(a=new Uint8Array(b.memory.buffer)),a}function w(e,n){return i.decode(g().subarray(e,e+n))}function d(e){o===c.length&&c.push(c.length+1);const n=o;return o=c[n],c[n]=e,n}let s=0;const l=new TextEncoder("utf-8"),m="function"==typeof l.encodeInto?function(e,n){return l.encodeInto(e,n)}:function(e,n){const _=l.encode(e);return n.set(_),{read:e.length,written:_.length}};function p(e,n,_){if(void 0===_){const _=l.encode(e),t=n(_.length);return g().subarray(t,t+_.length).set(_),s=_.length,t}let t=e.length,r=n(t);const b=g();let c=0;for(;c<t;c++){const n=e.charCodeAt(c);if(n>127)break;b[r+c]=n}if(c!==t){0!==c&&(e=e.slice(c)),r=_(r,t,t=c+3*e.length);const n=g().subarray(r+c,r+t);c+=m(e,n).written}return s=c,r}let y=null;function h(){return null!==y&&y.buffer===b.memory.buffer||(y=new Int32Array(b.memory.buffer)),y}function v(e){return null==e}let A=null;function x(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return`${e}`;if("string"==n)return`"${e}"`;if("symbol"==n){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==n){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const n=e.length;let _="[";n>0&&(_+=x(e[0]));for(let t=1;t<n;t++)_+=", "+x(e[t]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(e));let t;if(!(_.length>1))return toString.call(e);if(t=_[1],"Object"==t)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:t}function S(e,n,_,t){const r={a:e,b:n,cnt:1,dtor:_},c=(...e)=>{r.cnt++;const n=r.a;r.a=0;try{return t(n,r.b,...e)}finally{0==--r.cnt?b.__wbindgen_export_2.get(r.dtor)(n,r.b):r.a=n}};return c.original=r,c}function C(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2863e474bb5bc072(e,n,d(_))}function R(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2863e474bb5bc072(e,n,d(_))}function T(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2863e474bb5bc072(e,n,d(_))}function k(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2863e474bb5bc072(e,n,d(_))}function E(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2863e474bb5bc072(e,n,d(_))}function F(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3adcd0d2435f5e7b(e,n,_)}function P(e,n){b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd3509f61ef7a0baa(e,n)}function M(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2863e474bb5bc072(e,n,d(_))}function O(e,n,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h40f6ecbecfe0d2cc(e,n,d(_))}function L(e,n){try{return e.apply(this,n)}catch(e){b.__wbindgen_exn_store(d(e))}}let W=32;function D(e){if(1==W)throw new Error("out of js stack");return c[--W]=e,W}let I=null;let B=null;function V(e,n){return(null!==B&&B.buffer===b.memory.buffer||(B=new Float32Array(b.memory.buffer)),B).subarray(e/4,e/4+n)}function j(e,n){return g().subarray(e/1,e/1+n)}let U=null;function q(e,n){return(null!==U&&U.buffer===b.memory.buffer||(U=new Uint8ClampedArray(b.memory.buffer)),U).subarray(e/1,e/1+n)}class G{static __wrap(e){const n=Object.create(G.prototype);return n.ptr=e,n}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();b.__wbg_ruffle_free(e)}constructor(e,n,_){try{return u(b.ruffle_new(d(e),d(n),D(_)))}finally{c[W++]=void 0}}stream_from(e,n){try{const t=b.__wbindgen_add_to_stack_pointer(-16),r=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc),f=s;b.ruffle_stream_from(t,this.ptr,r,f,D(n));var _=h()[t/4+0];if(h()[t/4+1])throw u(_)}finally{b.__wbindgen_add_to_stack_pointer(16),c[W++]=void 0}}load_data(e,n){try{const t=b.__wbindgen_add_to_stack_pointer(-16);b.ruffle_load_data(t,this.ptr,d(e),D(n));var _=h()[t/4+0];if(h()[t/4+1])throw u(_)}finally{b.__wbindgen_add_to_stack_pointer(16),c[W++]=void 0}}play(){b.ruffle_play(this.ptr)}pause(){b.ruffle_pause(this.ptr)}is_playing(){return 0!==b.ruffle_is_playing(this.ptr)}prepare_context_menu(){return u(b.ruffle_prepare_context_menu(this.ptr))}run_context_menu_callback(e){b.ruffle_run_context_menu_callback(this.ptr,e)}set_fullscreen(e){b.ruffle_set_fullscreen(this.ptr,e)}clear_custom_menu_items(){b.ruffle_clear_custom_menu_items(this.ptr)}destroy(){b.ruffle_destroy(this.ptr)}call_exposed_callback(e,n){const _=p(e,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s,r=function(e,n){const _=n(4*e.length),t=(null!==I&&I.buffer===b.memory.buffer||(I=new Uint32Array(b.memory.buffer)),I);for(let n=0;n<e.length;n++)t[_/4+n]=d(e[n]);return s=e.length,_}(n,b.__wbindgen_malloc),c=s;return u(b.ruffle_call_exposed_callback(this.ptr,_,t,r,c))}set_trace_observer(e){b.ruffle_set_trace_observer(this.ptr,d(e))}audio_context(){return u(b.ruffle_audio_context(this.ptr))}static is_wasm_simd_used(){return 0!==b.ruffle_is_wasm_simd_used()}}const H=async function e(n){void 0===n&&(n=new URL(_(285),_.b));const c={wbg:{}};c.wbg.__wbindgen_object_drop_ref=function(e){u(e)},c.wbg.__wbindgen_cb_drop=function(e){const n=u(e).original;return 1==n.cnt--&&(n.a=0,!0)},c.wbg.__wbindgen_string_new=function(e,n){return d(w(e,n))},c.wbg.__wbindgen_object_clone_ref=function(e){return d(f(e))},c.wbg.__wbg_ruffle_new=function(e){return d(G.__wrap(e))},c.wbg.__wbindgen_is_function=function(e){return"function"==typeof f(e)},c.wbg.__wbindgen_json_parse=function(e,n){return d(JSON.parse(w(e,n)))},c.wbg.__wbindgen_json_serialize=function(e,n){const _=f(n),t=p(JSON.stringify(void 0===_?null:_),b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;h()[e/4+1]=r,h()[e/4+0]=t},c.wbg.__wbg_setMetadata_bbaeaee7f48274e6=function(e,n){f(e).setMetadata(u(n))},c.wbg.__wbg_onCallbackAvailable_3a48fae397926c96=function(e,n,_){f(e).onCallbackAvailable(w(n,_))},c.wbg.__wbg_onFSCommand_fb2f94653f71796e=function(){return L((function(e,n,_,t,r){return f(e).onFSCommand(w(n,_),w(t,r))}),arguments)},c.wbg.__wbindgen_number_get=function(e,n){const _=f(n),t="number"==typeof _?_:void 0;(null!==A&&A.buffer===b.memory.buffer||(A=new Float64Array(b.memory.buffer)),A)[e/8+1]=v(t)?0:t,h()[e/4+0]=!v(t)},c.wbg.__wbindgen_string_get=function(e,n){const _=f(n),t="string"==typeof _?_:void 0;var r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[e/4+1]=c,h()[e/4+0]=r},c.wbg.__wbindgen_boolean_get=function(e){const n=f(e);return"boolean"==typeof n?n?1:0:2},c.wbg.__wbindgen_number_new=function(e){return d(e)},c.wbg.__wbg_new_df6e6ab7a65c4c4d=function(e,n){return d(new Error(w(e,n)))},c.wbg.__wbg_panic_bbc809dd04a12c60=function(e,n){f(e).panic(f(n))},c.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91=function(e){f(e).displayUnsupportedMessage()},c.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a=function(e){f(e).displayRootMovieDownloadFailedMessage()},c.wbg.__wbg_displayMessage_c57c20204892da2b=function(e,n,_){f(e).displayMessage(w(n,_))},c.wbg.__wbg_setFullscreen_9819a8b20564e39b=function(){return L((function(e,n){f(e).setFullscreen(0!==n)}),arguments)},c.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2=function(e,n,_,r,b){(0,t.K)(f(e),0===n?void 0:V(n,_),0===r?void 0:V(r,b))},c.wbg.__wbg_getAudioOutputTimestamp_a67aa6687740cd15=function(e){return(0,t.T)(f(e))},c.wbg.__wbg_new_693216e109162396=function(){return d(new Error)},c.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,n){const _=p(f(n).stack,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_},c.wbg.__wbg_error_09919627ac0992f5=function(e,n){try{console.error(w(e,n))}finally{b.__wbindgen_free(e,n)}},c.wbg.__wbindgen_is_undefined=function(e){return void 0===f(e)},c.wbg.__wbg_getRandomValues_fb6b088efb6bead2=function(){return L((function(e,n){f(e).getRandomValues(f(n))}),arguments)},c.wbg.__wbg_randomFillSync_654a7797990fb8db=function(){return L((function(e,n,_){f(e).randomFillSync(j(n,_))}),arguments)},c.wbg.__wbg_process_70251ed1291754d5=function(e){return d(f(e).process)},c.wbg.__wbindgen_is_object=function(e){const n=f(e);return"object"==typeof n&&null!==n},c.wbg.__wbg_versions_b23f2588cdb2ddbb=function(e){return d(f(e).versions)},c.wbg.__wbg_node_61b8c9a82499895d=function(e){return d(f(e).node)},c.wbg.__wbindgen_is_string=function(e){return"string"==typeof f(e)},c.wbg.__wbg_static_accessor_NODE_MODULE_33b45247c55045b0=function(){return d(i)},c.wbg.__wbg_require_2a93bc09fee45aca=function(){return L((function(e,n,_){return d(f(e).require(w(n,_)))}),arguments)},c.wbg.__wbg_crypto_2f56257a38275dbd=function(e){return d(f(e).crypto)},c.wbg.__wbg_msCrypto_d07655bf62361f21=function(e){return d(f(e).msCrypto)},c.wbg.__wbg_instanceof_WebGl2RenderingContext_e29e70ae6c00bfdd=function(e){return f(e)instanceof WebGL2RenderingContext},c.wbg.__wbg_bindVertexArray_dfe63bf55a9f6e54=function(e,n){f(e).bindVertexArray(f(n))},c.wbg.__wbg_blitFramebuffer_c72c74d695ed2ece=function(e,n,_,t,r,b,c,o,u,i,a){f(e).blitFramebuffer(n,_,t,r,b,c,o,u,i>>>0,a>>>0)},c.wbg.__wbg_createVertexArray_d502151c473563b2=function(e){const n=f(e).createVertexArray();return v(n)?0:d(n)},c.wbg.__wbg_renderbufferStorageMultisample_90aa1df2657b1a0a=function(e,n,_,t,r,b){f(e).renderbufferStorageMultisample(n>>>0,_,t>>>0,r,b)},c.wbg.__wbg_texImage2D_ebd74c4d7f0e6728=function(){return L((function(e,n,_,t,r,b,c,o,u,i,a){f(e).texImage2D(n>>>0,_,t,r,b,c,o>>>0,u>>>0,0===i?void 0:j(i,a))}),arguments)},c.wbg.__wbg_bindFramebuffer_6ef149f7d398d19f=function(e,n,_){f(e).bindFramebuffer(n>>>0,f(_))},c.wbg.__wbg_bindRenderbuffer_1974e9f4fdd0b3af=function(e,n,_){f(e).bindRenderbuffer(n>>>0,f(_))},c.wbg.__wbg_bindTexture_dbddb0b0c3efa1b9=function(e,n,_){f(e).bindTexture(n>>>0,f(_))},c.wbg.__wbg_createFramebuffer_f656a97f24d2caf3=function(e){const n=f(e).createFramebuffer();return v(n)?0:d(n)},c.wbg.__wbg_createRenderbuffer_e66ea157342e02e9=function(e){const n=f(e).createRenderbuffer();return v(n)?0:d(n)},c.wbg.__wbg_createTexture_0df375980a9c46c9=function(e){const n=f(e).createTexture();return v(n)?0:d(n)},c.wbg.__wbg_deleteFramebuffer_609d82d380c88142=function(e,n){f(e).deleteFramebuffer(f(n))},c.wbg.__wbg_deleteRenderbuffer_d12ade31b823658c=function(e,n){f(e).deleteRenderbuffer(f(n))},c.wbg.__wbg_deleteTexture_8c7434cb1b20f64f=function(e,n){f(e).deleteTexture(f(n))},c.wbg.__wbg_framebufferRenderbuffer_d73f3cb3e5a605a2=function(e,n,_,t,r){f(e).framebufferRenderbuffer(n>>>0,_>>>0,t>>>0,f(r))},c.wbg.__wbg_framebufferTexture2D_e07b69d4972eccfd=function(e,n,_,t,r,b){f(e).framebufferTexture2D(n>>>0,_>>>0,t>>>0,f(r),b)},c.wbg.__wbg_getError_cc18cbef4864f62f=function(e){return f(e).getError()},c.wbg.__wbg_getParameter_00a3d89e6e005c2f=function(){return L((function(e,n){return d(f(e).getParameter(n>>>0))}),arguments)},c.wbg.__wbg_texParameteri_7414cf15f83e1d52=function(e,n,_,t){f(e).texParameteri(n>>>0,_>>>0,t)},c.wbg.__wbg_instanceof_Window_0e6c0f1096d66c3c=function(e){return f(e)instanceof Window},c.wbg.__wbg_document_99eddbbc11ec831e=function(e){const n=f(e).document;return v(n)?0:d(n)},c.wbg.__wbg_location_fa9019d2eb2195e8=function(e){return d(f(e).location)},c.wbg.__wbg_navigator_1f72d7edb7b4c387=function(e){return d(f(e).navigator)},c.wbg.__wbg_devicePixelRatio_cac0b66c0e1e056b=function(e){return f(e).devicePixelRatio},c.wbg.__wbg_localStorage_6e9ba4e9a3771427=function(){return L((function(e){const n=f(e).localStorage;return v(n)?0:d(n)}),arguments)},c.wbg.__wbg_cancelAnimationFrame_7a4ff0365b95acb4=function(){return L((function(e,n){f(e).cancelAnimationFrame(n)}),arguments)},c.wbg.__wbg_focus_086a81eb632614fb=function(){return L((function(e){f(e).focus()}),arguments)},c.wbg.__wbg_open_fd57bd436de42549=function(){return L((function(e,n,_,t,r){const b=f(e).open(w(n,_),w(t,r));return v(b)?0:d(b)}),arguments)},c.wbg.__wbg_requestAnimationFrame_8e3c7028c69ebaef=function(){return L((function(e,n){return f(e).requestAnimationFrame(f(n))}),arguments)},c.wbg.__wbg_fetch_ef7a6623d1fcd3b8=function(e,n){return d(f(e).fetch(f(n)))},c.wbg.__wbg_destination_f4f5ac55ff6e3785=function(e){return d(f(e).destination)},c.wbg.__wbg_sampleRate_310f869d3d9e8715=function(e){return f(e).sampleRate},c.wbg.__wbg_currentTime_510dde7d31c119e8=function(e){return f(e).currentTime},c.wbg.__wbg_new_14af17251d0bf480=function(){return L((function(){return d(new r)}),arguments)},c.wbg.__wbg_suspend_c2247addb78d3e2e=function(){return L((function(e){return d(f(e).suspend())}),arguments)},c.wbg.__wbg_createBuffer_19d3c1651316a6c2=function(){return L((function(e,n,_,t){return d(f(e).createBuffer(n>>>0,_>>>0,t))}),arguments)},c.wbg.__wbg_createBufferSource_414d1e25fd67f353=function(){return L((function(e){return d(f(e).createBufferSource())}),arguments)},c.wbg.__wbg_createChannelMerger_c8ea5e970b0215b7=function(){return L((function(e,n){return d(f(e).createChannelMerger(n>>>0))}),arguments)},c.wbg.__wbg_createChannelSplitter_1e34548bc282d3e6=function(){return L((function(e,n){return d(f(e).createChannelSplitter(n>>>0))}),arguments)},c.wbg.__wbg_createGain_ec81f7114545acfb=function(){return L((function(e){return d(f(e).createGain())}),arguments)},c.wbg.__wbg_createScriptProcessor_68a6f46b3c8337eb=function(){return L((function(e,n,_,t){return d(f(e).createScriptProcessor(n>>>0,_>>>0,t>>>0))}),arguments)},c.wbg.__wbg_decodeAudioData_080cb9872a95b009=function(){return L((function(e,n,_,t){return d(f(e).decodeAudioData(f(n),f(_),f(t)))}),arguments)},c.wbg.__wbg_resume_00606714ccb596ff=function(){return L((function(e){return d(f(e).resume())}),arguments)},c.wbg.__wbg_setvalue_adeb9030ea412869=function(e,n){f(e).value=n},c.wbg.__wbg_linearRampToValueAtTime_81378d2935036506=function(){return L((function(e,n,_){return d(f(e).linearRampToValueAtTime(n,_))}),arguments)},c.wbg.__wbg_setValueAtTime_9b2c1dde4f1815e3=function(){return L((function(e,n,_){return d(f(e).setValueAtTime(n,_))}),arguments)},c.wbg.__wbg_gain_30b6e9ac5fa0f7b0=function(e){return d(f(e).gain)},c.wbg.__wbg_baseURI_9c41e8e6d59451b1=function(){return L((function(e,n){const _=f(n).baseURI;var t=v(_)?0:p(_,b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;h()[e/4+1]=r,h()[e/4+0]=t}),arguments)},c.wbg.__wbg_appendChild_a86c0da8d152eae4=function(){return L((function(e,n){return d(f(e).appendChild(f(n)))}),arguments)},c.wbg.__wbg_instanceof_SvgsvgElement_5df15702d034305b=function(e){return f(e)instanceof SVGSVGElement},c.wbg.__wbg_createSVGMatrix_c15a6387f70543f1=function(e){return d(f(e).createSVGMatrix())},c.wbg.__wbg_setProperty_ae9adf5d00216c03=function(){return L((function(e,n,_,t,r){f(e).setProperty(w(n,_),w(t,r))}),arguments)},c.wbg.__wbg_protocol_8a7c3a0ad0534fb9=function(){return L((function(e,n){const _=p(f(n).protocol,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_}),arguments)},c.wbg.__wbg_assign_8412f2d177f8543c=function(){return L((function(e,n,_){f(e).assign(w(n,_))}),arguments)},c.wbg.__wbg_new_fcc3bfd6f1d02d9b=function(){return L((function(){return d(new Path2D)}),arguments)},c.wbg.__wbg_addPath_3f9b52fe12b3a8f4=function(e,n,_){f(e).addPath(f(n),f(_))},c.wbg.__wbg_closePath_e8740a8a4b33f4a2=function(e){f(e).closePath()},c.wbg.__wbg_lineTo_611f952172f57ea1=function(e,n,_){f(e).lineTo(n,_)},c.wbg.__wbg_moveTo_9b09fc77b253b4ff=function(e,n,_){f(e).moveTo(n,_)},c.wbg.__wbg_quadraticCurveTo_39645457683c039c=function(e,n,_,t,r){f(e).quadraticCurveTo(n,_,t,r)},c.wbg.__wbg_get_f2a42b72d9c3121e=function(){return L((function(e,n,_,t){const r=f(n)[w(_,t)];var c=v(r)?0:p(r,b.__wbindgen_malloc,b.__wbindgen_realloc),o=s;h()[e/4+1]=o,h()[e/4+0]=c}),arguments)},c.wbg.__wbg_set_fae17f247c4c8723=function(){return L((function(e,n,_,t,r){f(e)[w(n,_)]=w(t,r)}),arguments)},c.wbg.__wbg_delete_2a53f5694592407e=function(){return L((function(e,n,_){delete f(e)[w(n,_)]}),arguments)},c.wbg.__wbg_length_9132be38635fece5=function(e){return f(e).length},c.wbg.__wbg_outputBuffer_e9801f4e66879b0d=function(){return L((function(e){return d(f(e).outputBuffer)}),arguments)},c.wbg.__wbg_setTransform_6a58eea25fa31e41=function(e,n){f(e).setTransform(f(n))},c.wbg.__wbg_offsetX_5888d22032ed9bd8=function(e){return f(e).offsetX},c.wbg.__wbg_offsetY_ca0bdbbd593cafb7=function(e){return f(e).offsetY},c.wbg.__wbg_button_78dae8616402469e=function(e){return f(e).button},c.wbg.__wbg_bindVertexArrayOES_35d97084dfc5f6f4=function(e,n){f(e).bindVertexArrayOES(f(n))},c.wbg.__wbg_createVertexArrayOES_69c38b2b74e927fa=function(e){const n=f(e).createVertexArrayOES();return v(n)?0:d(n)},c.wbg.__wbg_deltaY_f78bae9413139a24=function(e){return f(e).deltaY},c.wbg.__wbg_deltaMode_08c2fcea70146506=function(e){return f(e).deltaMode},c.wbg.__wbg_connect_7fe7ce5856f531e9=function(){return L((function(e,n){return d(f(e).connect(f(n)))}),arguments)},c.wbg.__wbg_connect_3d91d2d170d6ecd4=function(){return L((function(e,n,_){return d(f(e).connect(f(n),_>>>0))}),arguments)},c.wbg.__wbg_connect_e916aa2972b69a20=function(){return L((function(e,n,_,t){return d(f(e).connect(f(n),_>>>0,t>>>0))}),arguments)},c.wbg.__wbg_disconnect_a00625849153bced=function(){return L((function(e){f(e).disconnect()}),arguments)},c.wbg.__wbg_instanceof_HtmlFormElement_e51c7005ee225f19=function(e){return f(e)instanceof HTMLFormElement},c.wbg.__wbg_submit_da9a1351634ab083=function(){return L((function(e){f(e).submit()}),arguments)},c.wbg.__wbg_instanceof_Response_ccfeb62399355bcd=function(e){return f(e)instanceof Response},c.wbg.__wbg_ok_1538f4695dab1792=function(e){return f(e).ok},c.wbg.__wbg_statusText_750d3bf8e134b8f8=function(e,n){const _=p(f(n).statusText,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_},c.wbg.__wbg_arrayBuffer_5a99283a3954c850=function(){return L((function(e){return d(f(e).arrayBuffer())}),arguments)},c.wbg.__wbg_seta_196fe1603bb42b7b=function(e,n){f(e).a=n},c.wbg.__wbg_setb_9e396f9a09007b28=function(e,n){f(e).b=n},c.wbg.__wbg_setc_d905ffddc47bcaa0=function(e,n){f(e).c=n},c.wbg.__wbg_setd_2e193a5175217ec7=function(e,n){f(e).d=n},c.wbg.__wbg_sete_272422a30b6b08e0=function(e,n){f(e).e=n},c.wbg.__wbg_setf_cd3225b07546cc66=function(e,n){f(e).f=n},c.wbg.__wbg_setbuffer_72cfecac4d22725d=function(e,n){f(e).buffer=f(n)},c.wbg.__wbg_setloop_b1a61b62498fa9e4=function(e,n){f(e).loop=0!==n},c.wbg.__wbg_setloopStart_f54e061b1de3b268=function(e,n){f(e).loopStart=n},c.wbg.__wbg_setloopEnd_d6430450275c920c=function(e,n){f(e).loopEnd=n},c.wbg.__wbg_setonended_f22c38d46d048b5e=function(e,n){f(e).onended=f(n)},c.wbg.__wbg_start_4f1790870dabedcf=function(){return L((function(e){f(e).start()}),arguments)},c.wbg.__wbg_start_19389908a04585e5=function(){return L((function(e,n,_){f(e).start(n,_)}),arguments)},c.wbg.__wbg_stop_f4ba0ccf4eeeda42=function(){return L((function(e,n){f(e).stop(n)}),arguments)},c.wbg.__wbg_now_20d2aadcf3cc17f7=function(e){return f(e).now()},c.wbg.__wbg_pointerId_8b2b0e9ad7c38495=function(e){return f(e).pointerId},c.wbg.__wbg_setonaudioprocess_691238df792e5983=function(e,n){f(e).onaudioprocess=f(n)},c.wbg.__wbg_currentTarget_327b27bfa936c61f=function(e){const n=f(e).currentTarget;return v(n)?0:d(n)},c.wbg.__wbg_preventDefault_747982fd5fe3b6d0=function(e){f(e).preventDefault()},c.wbg.__wbg_setsrc_6567add4fbef51e3=function(e,n,_){f(e).src=w(n,_)},c.wbg.__wbg_new_944851407ca613d7=function(){return L((function(){return d(new Image)}),arguments)},c.wbg.__wbg_key_a8ae33ddc6ff786b=function(e,n){const _=p(f(n).key,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_},c.wbg.__wbg_code_a637bfca56413948=function(e,n){const _=p(f(n).code,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_},c.wbg.__wbg_newwithstrandinit_fd99688f189f053e=function(){return L((function(e,n,_){return d(new Request(w(e,n),f(_)))}),arguments)},c.wbg.__wbg_body_2a1ff14b05042a51=function(e){const n=f(e).body;return v(n)?0:d(n)},c.wbg.__wbg_createElement_3c9b5f3aa42457a1=function(){return L((function(e,n,_){return d(f(e).createElement(w(n,_)))}),arguments)},c.wbg.__wbg_createElementNS_a0904ea4c02292f4=function(){return L((function(e,n,_,t,r){return d(f(e).createElementNS(0===n?void 0:w(n,_),w(t,r)))}),arguments)},c.wbg.__wbg_setid_ea9f00ecb5da9dde=function(e,n,_){f(e).id=w(n,_)},c.wbg.__wbg_clientWidth_11f72beceb108bff=function(e){return f(e).clientWidth},c.wbg.__wbg_clientHeight_205d93d6eadff351=function(e){return f(e).clientHeight},c.wbg.__wbg_querySelector_277db48579b05107=function(){return L((function(e,n,_){const t=f(e).querySelector(w(n,_));return v(t)?0:d(t)}),arguments)},c.wbg.__wbg_releasePointerCapture_9ccf528d12801791=function(){return L((function(e,n){f(e).releasePointerCapture(n)}),arguments)},c.wbg.__wbg_setAttribute_8d90e00d652037be=function(){return L((function(e,n,_,t,r){f(e).setAttribute(w(n,_),w(t,r))}),arguments)},c.wbg.__wbg_setAttributeNS_59dc39cb257152af=function(){return L((function(e,n,_,t,r,b,c){f(e).setAttributeNS(0===n?void 0:w(n,_),w(t,r),w(b,c))}),arguments)},c.wbg.__wbg_setPointerCapture_c6fe2a502d7c4f27=function(){return L((function(e,n){f(e).setPointerCapture(n)}),arguments)},c.wbg.__wbg_remove_0bfd44c3622f33b2=function(e){f(e).remove()},c.wbg.__wbg_instanceof_WebGlRenderingContext_b0885da52b151d86=function(e){return f(e)instanceof WebGLRenderingContext},c.wbg.__wbg_drawingBufferWidth_d531da9205a735a4=function(e){return f(e).drawingBufferWidth},c.wbg.__wbg_drawingBufferHeight_6a1b146e4b52493c=function(e){return f(e).drawingBufferHeight},c.wbg.__wbg_bufferData_c4192729016213be=function(e,n,_,t,r){f(e).bufferData(n>>>0,j(_,t),r>>>0)},c.wbg.__wbg_texImage2D_60614361e73b0339=function(){return L((function(e,n,_,t,r,b,c,o,u,i,a){f(e).texImage2D(n>>>0,_,t,r,b,c,o>>>0,u>>>0,0===i?void 0:j(i,a))}),arguments)},c.wbg.__wbg_uniform1fv_e75d6126004bb5f7=function(e,n,_,t){f(e).uniform1fv(f(n),V(_,t))},c.wbg.__wbg_uniform4fv_54aeb419c88f21df=function(e,n,_,t){f(e).uniform4fv(f(n),V(_,t))},c.wbg.__wbg_uniformMatrix3fv_81c8f94bf3a05d08=function(e,n,_,t,r){f(e).uniformMatrix3fv(f(n),0!==_,V(t,r))},c.wbg.__wbg_uniformMatrix4fv_caf5129a09f4f267=function(e,n,_,t,r){f(e).uniformMatrix4fv(f(n),0!==_,V(t,r))},c.wbg.__wbg_activeTexture_1ba5758f0a8358b6=function(e,n){f(e).activeTexture(n>>>0)},c.wbg.__wbg_attachShader_0867104b37cae2d6=function(e,n,_){f(e).attachShader(f(n),f(_))},c.wbg.__wbg_bindBuffer_28e62f648e99e251=function(e,n,_){f(e).bindBuffer(n>>>0,f(_))},c.wbg.__wbg_bindFramebuffer_b7a06305d2823b34=function(e,n,_){f(e).bindFramebuffer(n>>>0,f(_))},c.wbg.__wbg_bindRenderbuffer_0fe389ab46c4d00d=function(e,n,_){f(e).bindRenderbuffer(n>>>0,f(_))},c.wbg.__wbg_bindTexture_27a724e7303eec67=function(e,n,_){f(e).bindTexture(n>>>0,f(_))},c.wbg.__wbg_blendFunc_08a6e279418be6da=function(e,n,_){f(e).blendFunc(n>>>0,_>>>0)},c.wbg.__wbg_clear_786a8deca6672a9d=function(e,n){f(e).clear(n>>>0)},c.wbg.__wbg_clearColor_2c1d714dee770474=function(e,n,_,t,r){f(e).clearColor(n,_,t,r)},c.wbg.__wbg_colorMask_0cfe7588f073be4e=function(e,n,_,t,r){f(e).colorMask(0!==n,0!==_,0!==t,0!==r)},c.wbg.__wbg_compileShader_1b371763cfd802f7=function(e,n){f(e).compileShader(f(n))},c.wbg.__wbg_createBuffer_48c0376fc0746386=function(e){const n=f(e).createBuffer();return v(n)?0:d(n)},c.wbg.__wbg_createProgram_c2675d2cc83435a6=function(e){const n=f(e).createProgram();return v(n)?0:d(n)},c.wbg.__wbg_createShader_8d2a55e7777bbea7=function(e,n){const _=f(e).createShader(n>>>0);return v(_)?0:d(_)},c.wbg.__wbg_createTexture_23de5d8f7988e663=function(e){const n=f(e).createTexture();return v(n)?0:d(n)},c.wbg.__wbg_disable_ada50e27543b1ebd=function(e,n){f(e).disable(n>>>0)},c.wbg.__wbg_disableVertexAttribArray_e1c513cfd55355c9=function(e,n){f(e).disableVertexAttribArray(n>>>0)},c.wbg.__wbg_drawElements_efa6c15e2787a58c=function(e,n,_,t,r){f(e).drawElements(n>>>0,_,t>>>0,r)},c.wbg.__wbg_enable_981a414a11bbed87=function(e,n){f(e).enable(n>>>0)},c.wbg.__wbg_enableVertexAttribArray_1d5f3ff6e7da7095=function(e,n){f(e).enableVertexAttribArray(n>>>0)},c.wbg.__wbg_getAttribLocation_f875dcf14748b9d4=function(e,n,_,t){return f(e).getAttribLocation(f(n),w(_,t))},c.wbg.__wbg_getExtension_bea19db80bdbefef=function(){return L((function(e,n,_){const t=f(e).getExtension(w(n,_));return v(t)?0:d(t)}),arguments)},c.wbg.__wbg_getParameter_f511b92ebf87c44e=function(){return L((function(e,n){return d(f(e).getParameter(n>>>0))}),arguments)},c.wbg.__wbg_getProgramInfoLog_e70b0120bda14895=function(e,n,_){const t=f(n).getProgramInfoLog(f(_));var r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[e/4+1]=c,h()[e/4+0]=r},c.wbg.__wbg_getProgramParameter_e4fe54d806806081=function(e,n,_){return d(f(e).getProgramParameter(f(n),_>>>0))},c.wbg.__wbg_getShaderInfoLog_95d068aeccc5dbb3=function(e,n,_){const t=f(n).getShaderInfoLog(f(_));var r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[e/4+1]=c,h()[e/4+0]=r},c.wbg.__wbg_getUniformLocation_776a1f58e7904d81=function(e,n,_,t){const r=f(e).getUniformLocation(f(n),w(_,t));return v(r)?0:d(r)},c.wbg.__wbg_linkProgram_b98c8967f45a44fd=function(e,n){f(e).linkProgram(f(n))},c.wbg.__wbg_pixelStorei_707653d2f29a6c67=function(e,n,_){f(e).pixelStorei(n>>>0,_)},c.wbg.__wbg_shaderSource_daca520f63ef8fca=function(e,n,_,t){f(e).shaderSource(f(n),w(_,t))},c.wbg.__wbg_stencilFunc_5e3584d9ea466585=function(e,n,_,t){f(e).stencilFunc(n>>>0,_,t>>>0)},c.wbg.__wbg_stencilMask_9ea2bf2fb1616a9b=function(e,n){f(e).stencilMask(n>>>0)},c.wbg.__wbg_stencilOp_612a592601e921f5=function(e,n,_,t){f(e).stencilOp(n>>>0,_>>>0,t>>>0)},c.wbg.__wbg_texParameteri_1298d8804b59bbc0=function(e,n,_,t){f(e).texParameteri(n>>>0,_>>>0,t)},c.wbg.__wbg_uniform1f_bb331865fe6d123b=function(e,n,_){f(e).uniform1f(f(n),_)},c.wbg.__wbg_uniform1i_42b99e992f794a51=function(e,n,_){f(e).uniform1i(f(n),_)},c.wbg.__wbg_useProgram_022d72a653706891=function(e,n){f(e).useProgram(f(n))},c.wbg.__wbg_vertexAttribPointer_a75ea424ba9fa4e8=function(e,n,_,t,r,b,c){f(e).vertexAttribPointer(n>>>0,_,t>>>0,0!==r,b,c)},c.wbg.__wbg_viewport_6c864379ded67e8a=function(e,n,_,t,r){f(e).viewport(n,_,t,r)},c.wbg.__wbg_debug_fda1f49ea6af7a1d=function(e){console.debug(f(e))},c.wbg.__wbg_error_8ff19d586a987aef=function(e){console.error(f(e))},c.wbg.__wbg_info_c8f1b00be4ef10bc=function(e){console.info(f(e))},c.wbg.__wbg_log_e8ba7b992c7ad0eb=function(e){console.log(f(e))},c.wbg.__wbg_warn_0227db1aa6989248=function(e){console.warn(f(e))},c.wbg.__wbg_style_dd3ba68ea919f1b0=function(e){return d(f(e).style)},c.wbg.__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f=function(e){return f(e)instanceof CanvasRenderingContext2D},c.wbg.__wbg_setglobalAlpha_d6d2f5636a624c43=function(e,n){f(e).globalAlpha=n},c.wbg.__wbg_setglobalCompositeOperation_2752e9ced94fe641=function(){return L((function(e,n,_){f(e).globalCompositeOperation=w(n,_)}),arguments)},c.wbg.__wbg_setstrokeStyle_32540003cbfe210b=function(e,n){f(e).strokeStyle=f(n)},c.wbg.__wbg_setfillStyle_1d391c4891a6ec4d=function(e,n){f(e).fillStyle=f(n)},c.wbg.__wbg_setfilter_9710e4517560e4a6=function(e,n,_){f(e).filter=w(n,_)},c.wbg.__wbg_setimageSmoothingEnabled_3f82e28e8673fe7d=function(e,n){f(e).imageSmoothingEnabled=0!==n},c.wbg.__wbg_setlineWidth_6f1b76036ab98bfc=function(e,n){f(e).lineWidth=n},c.wbg.__wbg_setlineCap_8c6c8fa23d88cb4f=function(e,n,_){f(e).lineCap=w(n,_)},c.wbg.__wbg_setlineJoin_be4495c94d43d8b0=function(e,n,_){f(e).lineJoin=w(n,_)},c.wbg.__wbg_setmiterLimit_87c6ceb7bc2d2662=function(e,n){f(e).miterLimit=n},c.wbg.__wbg_drawImage_6419cd23eb8483da=function(){return L((function(e,n,_,t){f(e).drawImage(f(n),_,t)}),arguments)},c.wbg.__wbg_drawImage_5d4f6b1d51d3b118=function(){return L((function(e,n,_,t){f(e).drawImage(f(n),_,t)}),arguments)},c.wbg.__wbg_fill_d568e4c6dfc20014=function(e,n,_){f(e).fill(f(n),u(_))},c.wbg.__wbg_stroke_269216709f852773=function(e,n){f(e).stroke(f(n))},c.wbg.__wbg_createPattern_72e33eda42916f71=function(){return L((function(e,n,_,t){const r=f(e).createPattern(f(n),w(_,t));return v(r)?0:d(r)}),arguments)},c.wbg.__wbg_createPattern_7151c7f4606f1f65=function(){return L((function(e,n,_,t){const r=f(e).createPattern(f(n),w(_,t));return v(r)?0:d(r)}),arguments)},c.wbg.__wbg_getImageData_47b530423f896826=function(){return L((function(e,n,_,t,r){return d(f(e).getImageData(n,_,t,r))}),arguments)},c.wbg.__wbg_putImageData_fad983ad6d58ee62=function(){return L((function(e,n,_,t){f(e).putImageData(f(n),_,t)}),arguments)},c.wbg.__wbg_clearRect_5e0469d0d11a7aee=function(e,n,_,t,r){f(e).clearRect(n,_,t,r)},c.wbg.__wbg_fillRect_59b38b7e6f8d0717=function(e,n,_,t,r){f(e).fillRect(n,_,t,r)},c.wbg.__wbg_resetTransform_be6d3f0c0e150bac=function(){return L((function(e){f(e).resetTransform()}),arguments)},c.wbg.__wbg_setTransform_f06275e4cc6b9b71=function(){return L((function(e,n,_,t,r,b,c){f(e).setTransform(n,_,t,r,b,c)}),arguments)},c.wbg.__wbg_newwithbuffersourcesequenceandoptions_1c1614ce7cfbc5e4=function(){return L((function(e,n){return d(new Blob(f(e),f(n)))}),arguments)},c.wbg.__wbg_addEventListener_78d3aa7e06ee5b73=function(){return L((function(e,n,_,t){f(e).addEventListener(w(n,_),f(t))}),arguments)},c.wbg.__wbg_addEventListener_be0c061a1359c1dd=function(){return L((function(e,n,_,t,r){f(e).addEventListener(w(n,_),f(t),f(r))}),arguments)},c.wbg.__wbg_addEventListener_fbf7ce59794a417b=function(){return L((function(e,n,_,t,r){f(e).addEventListener(w(n,_),f(t),0!==r)}),arguments)},c.wbg.__wbg_removeEventListener_ab2f93784dae0528=function(){return L((function(e,n,_,t){f(e).removeEventListener(w(n,_),f(t))}),arguments)},c.wbg.__wbg_removeEventListener_3e7319b5d7c8be8f=function(){return L((function(e,n,_,t,r){f(e).removeEventListener(w(n,_),f(t),0!==r)}),arguments)},c.wbg.__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef=function(e){return f(e)instanceof HTMLCanvasElement},c.wbg.__wbg_width_20b7a9ebdd5f4232=function(e){return f(e).width},c.wbg.__wbg_setwidth_654d8adcd4979eed=function(e,n){f(e).width=n>>>0},c.wbg.__wbg_height_57f43816c2227a89=function(e){return f(e).height},c.wbg.__wbg_setheight_2b662384bfacb65c=function(e,n){f(e).height=n>>>0},c.wbg.__wbg_getContext_0c19ba5c037e057f=function(){return L((function(e,n,_){const t=f(e).getContext(w(n,_));return v(t)?0:d(t)}),arguments)},c.wbg.__wbg_getContext_d7d734e1c1199dd1=function(){return L((function(e,n,_,t){const r=f(e).getContext(w(n,_),f(t));return v(r)?0:d(r)}),arguments)},c.wbg.__wbg_width_79fc1a8f0844bcab=function(e){return f(e).width},c.wbg.__wbg_height_7ec049fbe2f66d14=function(e){return f(e).height},c.wbg.__wbg_data_454197b135a25142=function(e,n){const _=function(e,n){const _=n(1*e.length);return g().set(e,_/1),s=e.length,_}(f(n).data,b.__wbindgen_malloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_},c.wbg.__wbg_newwithu8clampedarray_decce474908c8867=function(){return L((function(e,n,_){return d(new ImageData(q(e,n),_>>>0))}),arguments)},c.wbg.__wbg_userAgent_e5954dbb033ddef9=function(){return L((function(e,n){const _=p(f(n).userAgent,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_}),arguments)},c.wbg.__wbg_get_590a2cd912f2ae46=function(e,n){return d(f(e)[n>>>0])},c.wbg.__wbg_new_94fb1279cf6afea5=function(){return d(new Array)},c.wbg.__wbg_newnoargs_e23b458e372830de=function(e,n){return d(new Function(w(e,n)))},c.wbg.__wbg_next_bf3d83fc18df496e=function(){return L((function(e){return d(f(e).next())}),arguments)},c.wbg.__wbg_done_040f966faa9a72b3=function(e){return f(e).done},c.wbg.__wbg_value_419afbd9b9574c4c=function(e){return d(f(e).value)},c.wbg.__wbg_get_a9cab131e3152c49=function(){return L((function(e,n){return d(Reflect.get(f(e),f(n)))}),arguments)},c.wbg.__wbg_call_ae78342adc33730a=function(){return L((function(e,n){return d(f(e).call(f(n)))}),arguments)},c.wbg.__wbg_new_36359baae5a47e27=function(){return d(new Object)},c.wbg.__wbg_isArray_6721f2e508996340=function(e){return Array.isArray(f(e))},c.wbg.__wbg_of_1dbd33a0abd074ce=function(e,n){return d(Array.of(f(e),f(n)))},c.wbg.__wbg_push_40c6a90f1805aa90=function(e,n){return f(e).push(f(n))},c.wbg.__wbg_instanceof_ArrayBuffer_b81b40c2ae0ab898=function(e){return f(e)instanceof ArrayBuffer},c.wbg.__wbg_new_e3b1f44ea72e4e03=function(e){return d(new ArrayBuffer(e>>>0))},c.wbg.__wbg_slice_86a0334a3c44d85f=function(e,n,_){return d(f(e).slice(n>>>0,_>>>0))},c.wbg.__wbg_values_b1b9e8c63dbe01c2=function(e){return d(f(e).values())},c.wbg.__wbg_apply_f2d0f65c219e5594=function(){return L((function(e,n,_){return d(f(e).apply(f(n),f(_)))}),arguments)},c.wbg.__wbg_call_3ed288a247f13ea5=function(){return L((function(e,n,_){return d(f(e).call(f(n),f(_)))}),arguments)},c.wbg.__wbg_getTime_bffb1c09df09618b=function(e){return f(e).getTime()},c.wbg.__wbg_getTimezoneOffset_9c9a2f880882a1d7=function(e){return f(e).getTimezoneOffset()},c.wbg.__wbg_new0_0ff7eb5c1486f3ec=function(){return d(new Date)},c.wbg.__wbg_instanceof_Object_ac36a5f4244e4963=function(e){return f(e)instanceof Object},c.wbg.__wbg_entries_aaf7a1fbe90f014a=function(e){return d(Object.entries(f(e)))},c.wbg.__wbg_fromEntries_753a5d6f3530e028=function(){return L((function(e){return d(Object.fromEntries(f(e)))}),arguments)},c.wbg.__wbg_is_40969b082b54c84d=function(e,n){return Object.is(f(e),f(n))},c.wbg.__wbg_new_37705eed627d5ed9=function(e,n){try{var _={a:e,b:n};const t=new Promise(((e,n)=>{const t=_.a;_.a=0;try{return function(e,n,_,t){b.wasm_bindgen__convert__closures__invoke2_mut__h1c5973e6efe7c784(e,n,d(_),d(t))}(t,_.b,e,n)}finally{_.a=t}}));return d(t)}finally{_.a=_.b=0}},c.wbg.__wbg_resolve_a9a87bdd64e9e62c=function(e){return d(Promise.resolve(f(e)))},c.wbg.__wbg_then_ce526c837d07b68f=function(e,n){return d(f(e).then(f(n)))},c.wbg.__wbg_then_842e65b843962f56=function(e,n,_){return d(f(e).then(f(n),f(_)))},c.wbg.__wbg_self_99737b4dcdf6f0d8=function(){return L((function(){return d(self.self)}),arguments)},c.wbg.__wbg_window_9b61fbbf3564c4fb=function(){return L((function(){return d(window.window)}),arguments)},c.wbg.__wbg_globalThis_8e275ef40caea3a3=function(){return L((function(){return d(globalThis.globalThis)}),arguments)},c.wbg.__wbg_global_5de1e0f82bddcd27=function(){return L((function(){return d(_.g.global)}),arguments)},c.wbg.__wbg_buffer_7af23f65f6c64548=function(e){return d(f(e).buffer)},c.wbg.__wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974=function(e,n,_){return d(new Uint8Array(f(e),n>>>0,_>>>0))},c.wbg.__wbg_new_cc9018bd6f283b6f=function(e){return d(new Uint8Array(f(e)))},c.wbg.__wbg_set_f25e869e4565d2a2=function(e,n,_){f(e).set(f(n),_>>>0)},c.wbg.__wbg_length_0acb1cf9bbaf8519=function(e){return f(e).length},c.wbg.__wbg_newwithlength_8f0657faca9f1422=function(e){return d(new Uint8Array(e>>>0))},c.wbg.__wbg_fill_86476dd77be83461=function(e,n,_,t){return d(f(e).fill(n,_>>>0,t>>>0))},c.wbg.__wbg_buffer_0e70c88190dd0999=function(e){return d(f(e).buffer)},c.wbg.__wbg_subarray_da527dbd24eafb6b=function(e,n,_){return d(f(e).subarray(n>>>0,_>>>0))},c.wbg.__wbg_byteLength_e07852258f592e80=function(e){return f(e).byteLength},c.wbg.__wbg_byteOffset_3e0482615c7f74fd=function(e){return f(e).byteOffset},c.wbg.__wbg_ownKeys_9a927fb2995888f1=function(){return L((function(e){return d(Reflect.ownKeys(f(e)))}),arguments)},c.wbg.__wbg_set_93b1c87ee2af852e=function(){return L((function(e,n,_){return Reflect.set(f(e),f(n),f(_))}),arguments)},c.wbg.__wbindgen_debug_string=function(e,n){const _=p(x(f(n)),b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[e/4+1]=t,h()[e/4+0]=_},c.wbg.__wbindgen_throw=function(e,n){throw new Error(w(e,n))},c.wbg.__wbindgen_memory=function(){return d(b.memory)},c.wbg.__wbindgen_closure_wrapper351=function(e,n,_){return d(S(e,n,10,C))},c.wbg.__wbindgen_closure_wrapper352=function(e,n,_){return d(S(e,n,10,R))},c.wbg.__wbindgen_closure_wrapper353=function(e,n,_){return d(S(e,n,10,T))},c.wbg.__wbindgen_closure_wrapper354=function(e,n,_){return d(S(e,n,10,k))},c.wbg.__wbindgen_closure_wrapper355=function(e,n,_){return d(S(e,n,10,E))},c.wbg.__wbindgen_closure_wrapper356=function(e,n,_){return d(S(e,n,10,F))},c.wbg.__wbindgen_closure_wrapper357=function(e,n,_){return d(S(e,n,10,P))},c.wbg.__wbindgen_closure_wrapper358=function(e,n,_){return d(S(e,n,10,M))},c.wbg.__wbindgen_closure_wrapper7098=function(e,n,_){return d(S(e,n,2867,O))},("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:o,module:i}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const _=await e.arrayBuffer();return await WebAssembly.instantiate(_,n)}{const _=await WebAssembly.instantiate(e,n);return _ instanceof WebAssembly.Instance?{instance:_,module:e}:_}}(await n,c);return b=o.exports,e.__wbindgen_wasm_module=i,b}},285:(e,n,_)=>{e.exports=_.p+"b2f5e37372ebd0a36c16.wasm"}}]);
//# sourceMappingURL=core.ruffle.690378fd369af3b23308.js.map