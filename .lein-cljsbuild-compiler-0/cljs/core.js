goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3177 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__3242 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3179 = this$;

if(cljs.core.truth_(and__3546__auto____3179))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3179;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3180 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3243 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3182 = this$;

if(cljs.core.truth_(and__3546__auto____3182))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3182;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3183 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3244 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3185 = this$;

if(cljs.core.truth_(and__3546__auto____3185))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3185;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3186 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3245 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3188 = this$;

if(cljs.core.truth_(and__3546__auto____3188))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3188;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3189 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3246 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3191 = this$;

if(cljs.core.truth_(and__3546__auto____3191))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3191;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3192 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3247 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3194 = this$;

if(cljs.core.truth_(and__3546__auto____3194))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3194;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3195 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3248 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3197 = this$;

if(cljs.core.truth_(and__3546__auto____3197))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3197;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3198 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3249 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3200 = this$;

if(cljs.core.truth_(and__3546__auto____3200))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3200;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3201 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{var or__3548__auto____3202 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3250 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3203 = this$;

if(cljs.core.truth_(and__3546__auto____3203))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3203;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3204 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var or__3548__auto____3205 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3251 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3206 = this$;

if(cljs.core.truth_(and__3546__auto____3206))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3206;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3207 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{var or__3548__auto____3208 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3252 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3209 = this$;

if(cljs.core.truth_(and__3546__auto____3209))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3209;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3210 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{var or__3548__auto____3211 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3253 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3212 = this$;

if(cljs.core.truth_(and__3546__auto____3212))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3212;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3213 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{var or__3548__auto____3214 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3254 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3215 = this$;

if(cljs.core.truth_(and__3546__auto____3215))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3215;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3216 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{var or__3548__auto____3217 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3255 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3218 = this$;

if(cljs.core.truth_(and__3546__auto____3218))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3218;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3219 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{var or__3548__auto____3220 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3256 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3221 = this$;

if(cljs.core.truth_(and__3546__auto____3221))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3221;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3222 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3222))
{return or__3548__auto____3222;
} else
{var or__3548__auto____3223 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3257 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3224 = this$;

if(cljs.core.truth_(and__3546__auto____3224))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3224;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3225 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3225))
{return or__3548__auto____3225;
} else
{var or__3548__auto____3226 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3226))
{return or__3548__auto____3226;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3258 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3227 = this$;

if(cljs.core.truth_(and__3546__auto____3227))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3227;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3228 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
} else
{var or__3548__auto____3229 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3259 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3230 = this$;

if(cljs.core.truth_(and__3546__auto____3230))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3230;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3231 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{var or__3548__auto____3232 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3232))
{return or__3548__auto____3232;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3260 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3233 = this$;

if(cljs.core.truth_(and__3546__auto____3233))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3233;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3234 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3234))
{return or__3548__auto____3234;
} else
{var or__3548__auto____3235 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3235))
{return or__3548__auto____3235;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3261 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3236 = this$;

if(cljs.core.truth_(and__3546__auto____3236))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3236;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3237 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3237))
{return or__3548__auto____3237;
} else
{var or__3548__auto____3238 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3238))
{return or__3548__auto____3238;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3262 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3239 = this$;

if(cljs.core.truth_(and__3546__auto____3239))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3239;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3240 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3240))
{return or__3548__auto____3240;
} else
{var or__3548__auto____3241 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3241))
{return or__3548__auto____3241;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__3242.call(this,this$);
case  2 :
return _invoke__3243.call(this,this$,a);
case  3 :
return _invoke__3244.call(this,this$,a,b);
case  4 :
return _invoke__3245.call(this,this$,a,b,c);
case  5 :
return _invoke__3246.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3247.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3248.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3249.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3250.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3251.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3252.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3253.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3254.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3255.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3256.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3257.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3258.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3259.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3260.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3261.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3262.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3264 = coll;

if(cljs.core.truth_(and__3546__auto____3264))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3264;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3265 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3265))
{return or__3548__auto____3265;
} else
{var or__3548__auto____3266 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3266))
{return or__3548__auto____3266;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3267 = coll;

if(cljs.core.truth_(and__3546__auto____3267))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3267;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3268 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3268))
{return or__3548__auto____3268;
} else
{var or__3548__auto____3269 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3269))
{return or__3548__auto____3269;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3270 = coll;

if(cljs.core.truth_(and__3546__auto____3270))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3270;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3271 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3271))
{return or__3548__auto____3271;
} else
{var or__3548__auto____3272 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3272))
{return or__3548__auto____3272;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3279 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3273 = coll;

if(cljs.core.truth_(and__3546__auto____3273))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3273;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3274 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3274))
{return or__3548__auto____3274;
} else
{var or__3548__auto____3275 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3275))
{return or__3548__auto____3275;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3280 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3276 = coll;

if(cljs.core.truth_(and__3546__auto____3276))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3276;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3277 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3277))
{return or__3548__auto____3277;
} else
{var or__3548__auto____3278 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3278))
{return or__3548__auto____3278;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3279.call(this,coll,n);
case  3 :
return _nth__3280.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3282 = coll;

if(cljs.core.truth_(and__3546__auto____3282))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3282;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3283 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3283))
{return or__3548__auto____3283;
} else
{var or__3548__auto____3284 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3284))
{return or__3548__auto____3284;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3285 = coll;

if(cljs.core.truth_(and__3546__auto____3285))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3285;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3286 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3286))
{return or__3548__auto____3286;
} else
{var or__3548__auto____3287 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3287))
{return or__3548__auto____3287;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3294 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3288 = o;

if(cljs.core.truth_(and__3546__auto____3288))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3288;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3289 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3289))
{return or__3548__auto____3289;
} else
{var or__3548__auto____3290 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3290))
{return or__3548__auto____3290;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3295 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3291 = o;

if(cljs.core.truth_(and__3546__auto____3291))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3291;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3292 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3292))
{return or__3548__auto____3292;
} else
{var or__3548__auto____3293 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3293))
{return or__3548__auto____3293;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3294.call(this,o,k);
case  3 :
return _lookup__3295.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3297 = coll;

if(cljs.core.truth_(and__3546__auto____3297))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3297;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3298 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3298))
{return or__3548__auto____3298;
} else
{var or__3548__auto____3299 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3299))
{return or__3548__auto____3299;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3300 = coll;

if(cljs.core.truth_(and__3546__auto____3300))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3300;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3301 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3301))
{return or__3548__auto____3301;
} else
{var or__3548__auto____3302 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3302))
{return or__3548__auto____3302;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3303 = coll;

if(cljs.core.truth_(and__3546__auto____3303))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3303;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3304 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3304))
{return or__3548__auto____3304;
} else
{var or__3548__auto____3305 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3305))
{return or__3548__auto____3305;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3306 = coll;

if(cljs.core.truth_(and__3546__auto____3306))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3306;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3307 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3307))
{return or__3548__auto____3307;
} else
{var or__3548__auto____3308 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3308))
{return or__3548__auto____3308;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3309 = coll;

if(cljs.core.truth_(and__3546__auto____3309))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3309;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3310 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3310))
{return or__3548__auto____3310;
} else
{var or__3548__auto____3311 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3311))
{return or__3548__auto____3311;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3312 = coll;

if(cljs.core.truth_(and__3546__auto____3312))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3312;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3313 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3313))
{return or__3548__auto____3313;
} else
{var or__3548__auto____3314 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3314))
{return or__3548__auto____3314;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3315 = coll;

if(cljs.core.truth_(and__3546__auto____3315))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3315;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3316 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3316))
{return or__3548__auto____3316;
} else
{var or__3548__auto____3317 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3317))
{return or__3548__auto____3317;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3318 = o;

if(cljs.core.truth_(and__3546__auto____3318))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3318;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3319 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3319))
{return or__3548__auto____3319;
} else
{var or__3548__auto____3320 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3320))
{return or__3548__auto____3320;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3321 = o;

if(cljs.core.truth_(and__3546__auto____3321))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3321;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3322 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3322))
{return or__3548__auto____3322;
} else
{var or__3548__auto____3323 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3323))
{return or__3548__auto____3323;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3324 = o;

if(cljs.core.truth_(and__3546__auto____3324))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3324;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3325 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3325))
{return or__3548__auto____3325;
} else
{var or__3548__auto____3326 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3326))
{return or__3548__auto____3326;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3327 = o;

if(cljs.core.truth_(and__3546__auto____3327))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3327;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3328 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3328))
{return or__3548__auto____3328;
} else
{var or__3548__auto____3329 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3329))
{return or__3548__auto____3329;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3336 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3330 = coll;

if(cljs.core.truth_(and__3546__auto____3330))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3330;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3331 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3331))
{return or__3548__auto____3331;
} else
{var or__3548__auto____3332 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3332))
{return or__3548__auto____3332;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3337 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3333 = coll;

if(cljs.core.truth_(and__3546__auto____3333))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3333;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3334 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3334))
{return or__3548__auto____3334;
} else
{var or__3548__auto____3335 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3335))
{return or__3548__auto____3335;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3336.call(this,coll,f);
case  3 :
return _reduce__3337.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3339 = o;

if(cljs.core.truth_(and__3546__auto____3339))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3339;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3340 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3340))
{return or__3548__auto____3340;
} else
{var or__3548__auto____3341 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3341))
{return or__3548__auto____3341;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3342 = o;

if(cljs.core.truth_(and__3546__auto____3342))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3342;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3343 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3343))
{return or__3548__auto____3343;
} else
{var or__3548__auto____3344 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3344))
{return or__3548__auto____3344;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3345 = o;

if(cljs.core.truth_(and__3546__auto____3345))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3345;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3346 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3346))
{return or__3548__auto____3346;
} else
{var or__3548__auto____3347 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3347))
{return or__3548__auto____3347;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3348 = o;

if(cljs.core.truth_(and__3546__auto____3348))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3348;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3349 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3349))
{return or__3548__auto____3349;
} else
{var or__3548__auto____3350 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3350))
{return or__3548__auto____3350;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3351 = d;

if(cljs.core.truth_(and__3546__auto____3351))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3351;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3352 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3352))
{return or__3548__auto____3352;
} else
{var or__3548__auto____3353 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3353))
{return or__3548__auto____3353;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3354 = this$;

if(cljs.core.truth_(and__3546__auto____3354))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3354;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3355 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3355))
{return or__3548__auto____3355;
} else
{var or__3548__auto____3356 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3356))
{return or__3548__auto____3356;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3357 = this$;

if(cljs.core.truth_(and__3546__auto____3357))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3357;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3358 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3358))
{return or__3548__auto____3358;
} else
{var or__3548__auto____3359 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3359))
{return or__3548__auto____3359;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3360 = this$;

if(cljs.core.truth_(and__3546__auto____3360))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3360;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3361 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3361))
{return or__3548__auto____3361;
} else
{var or__3548__auto____3362 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3362))
{return or__3548__auto____3362;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3363 = null;
var G__3363__3364 = (function (o,k){
return null;
});
var G__3363__3365 = (function (o,k,not_found){
return not_found;
});
G__3363 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3363__3364.call(this,o,k);
case  3 :
return G__3363__3365.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3363;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3367 = null;
var G__3367__3368 = (function (_,f){
return f.call(null);
});
var G__3367__3369 = (function (_,f,start){
return start;
});
G__3367 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3367__3368.call(this,_,f);
case  3 :
return G__3367__3369.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3367;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3371 = null;
var G__3371__3372 = (function (_,n){
return null;
});
var G__3371__3373 = (function (_,n,not_found){
return not_found;
});
G__3371 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3371__3372.call(this,_,n);
case  3 :
return G__3371__3373.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3371;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3381 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3375 = cljs.core._nth.call(null,cicoll,0);
var n__3376 = 1;

while(true){
if(cljs.core.truth_((n__3376 < cljs.core._count.call(null,cicoll))))
{{
var G__3385 = f.call(null,val__3375,cljs.core._nth.call(null,cicoll,n__3376));
var G__3386 = (n__3376 + 1);
val__3375 = G__3385;
n__3376 = G__3386;
continue;
}
} else
{return val__3375;
}
break;
}
}
});
var ci_reduce__3382 = (function (cicoll,f,val){
var val__3377 = val;
var n__3378 = 0;

while(true){
if(cljs.core.truth_((n__3378 < cljs.core._count.call(null,cicoll))))
{{
var G__3387 = f.call(null,val__3377,cljs.core._nth.call(null,cicoll,n__3378));
var G__3388 = (n__3378 + 1);
val__3377 = G__3387;
n__3378 = G__3388;
continue;
}
} else
{return val__3377;
}
break;
}
});
var ci_reduce__3383 = (function (cicoll,f,val,idx){
var val__3379 = val;
var n__3380 = idx;

while(true){
if(cljs.core.truth_((n__3380 < cljs.core._count.call(null,cicoll))))
{{
var G__3389 = f.call(null,val__3379,cljs.core._nth.call(null,cicoll,n__3380));
var G__3390 = (n__3380 + 1);
val__3379 = G__3389;
n__3380 = G__3390;
continue;
}
} else
{return val__3379;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3381.call(this,cicoll,f);
case  3 :
return ci_reduce__3382.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3383.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3391 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3404 = null;
var G__3404__3405 = (function (_,f){
var this__3392 = this;
return cljs.core.ci_reduce.call(null,this__3392.a,f,(this__3392.a[this__3392.i]),(this__3392.i + 1));
});
var G__3404__3406 = (function (_,f,start){
var this__3393 = this;
return cljs.core.ci_reduce.call(null,this__3393.a,f,start,this__3393.i);
});
G__3404 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3404__3405.call(this,_,f);
case  3 :
return G__3404__3406.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3404;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3394 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3395 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3408 = null;
var G__3408__3409 = (function (coll,n){
var this__3396 = this;
var i__3397 = (n + this__3396.i);

if(cljs.core.truth_((i__3397 < this__3396.a.length)))
{return (this__3396.a[i__3397]);
} else
{return null;
}
});
var G__3408__3410 = (function (coll,n,not_found){
var this__3398 = this;
var i__3399 = (n + this__3398.i);

if(cljs.core.truth_((i__3399 < this__3398.a.length)))
{return (this__3398.a[i__3399]);
} else
{return not_found;
}
});
G__3408 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3408__3409.call(this,coll,n);
case  3 :
return G__3408__3410.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3408;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3400 = this;
return (this__3400.a.length - this__3400.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3401 = this;
return (this__3401.a[this__3401.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3402 = this;
if(cljs.core.truth_(((this__3402.i + 1) < this__3402.a.length)))
{return (new cljs.core.IndexedSeq(this__3402.a,(this__3402.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3403 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3412 = null;
var G__3412__3413 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3412__3414 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3412 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3412__3413.call(this,array,f);
case  3 :
return G__3412__3414.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3412;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3416 = null;
var G__3416__3417 = (function (array,k){
return (array[k]);
});
var G__3416__3418 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3416 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3416__3417.call(this,array,k);
case  3 :
return G__3416__3418.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3416;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3420 = null;
var G__3420__3421 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3420__3422 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3420 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3420__3421.call(this,array,n);
case  3 :
return G__3420__3422.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3420;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3424 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3424))
{var s__3425 = temp__3698__auto____3424;

return cljs.core._first.call(null,s__3425);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3426 = cljs.core.next.call(null,s);
s = G__3426;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3427 = cljs.core.seq.call(null,x);
var n__3428 = 0;

while(true){
if(cljs.core.truth_(s__3427))
{{
var G__3429 = cljs.core.next.call(null,s__3427);
var G__3430 = (n__3428 + 1);
s__3427 = G__3429;
n__3428 = G__3430;
continue;
}
} else
{return n__3428;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3431 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3432 = (function() { 
var G__3434__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3435 = conj.call(null,coll,x);
var G__3436 = cljs.core.first.call(null,xs);
var G__3437 = cljs.core.next.call(null,xs);
coll = G__3435;
x = G__3436;
xs = G__3437;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3434 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3434__delegate.call(this, coll, x, xs);
};
G__3434.cljs$lang$maxFixedArity = 2;
G__3434.cljs$lang$applyTo = (function (arglist__3438){
var coll = cljs.core.first(arglist__3438);
var x = cljs.core.first(cljs.core.next(arglist__3438));
var xs = cljs.core.rest(cljs.core.next(arglist__3438));
return G__3434__delegate.call(this, coll, x, xs);
});
return G__3434;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3431.call(this,coll,x);
default:
return conj__3432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3432.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3439 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3440 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3439.call(this,coll,n);
case  3 :
return nth__3440.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3442 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3443 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3442.call(this,o,k);
case  3 :
return get__3443.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3446 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3447 = (function() { 
var G__3449__delegate = function (coll,k,v,kvs){
while(true){
var ret__3445 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3450 = ret__3445;
var G__3451 = cljs.core.first.call(null,kvs);
var G__3452 = cljs.core.second.call(null,kvs);
var G__3453 = cljs.core.nnext.call(null,kvs);
coll = G__3450;
k = G__3451;
v = G__3452;
kvs = G__3453;
continue;
}
} else
{return ret__3445;
}
break;
}
};
var G__3449 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3449__delegate.call(this, coll, k, v, kvs);
};
G__3449.cljs$lang$maxFixedArity = 3;
G__3449.cljs$lang$applyTo = (function (arglist__3454){
var coll = cljs.core.first(arglist__3454);
var k = cljs.core.first(cljs.core.next(arglist__3454));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3454)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3454)));
return G__3449__delegate.call(this, coll, k, v, kvs);
});
return G__3449;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3446.call(this,coll,k,v);
default:
return assoc__3447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3447.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3456 = (function (coll){
return coll;
});
var dissoc__3457 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3458 = (function() { 
var G__3460__delegate = function (coll,k,ks){
while(true){
var ret__3455 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3461 = ret__3455;
var G__3462 = cljs.core.first.call(null,ks);
var G__3463 = cljs.core.next.call(null,ks);
coll = G__3461;
k = G__3462;
ks = G__3463;
continue;
}
} else
{return ret__3455;
}
break;
}
};
var G__3460 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3460__delegate.call(this, coll, k, ks);
};
G__3460.cljs$lang$maxFixedArity = 2;
G__3460.cljs$lang$applyTo = (function (arglist__3464){
var coll = cljs.core.first(arglist__3464);
var k = cljs.core.first(cljs.core.next(arglist__3464));
var ks = cljs.core.rest(cljs.core.next(arglist__3464));
return G__3460__delegate.call(this, coll, k, ks);
});
return G__3460;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3456.call(this,coll);
case  2 :
return dissoc__3457.call(this,coll,k);
default:
return dissoc__3458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3458.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__451__auto____3465 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3466 = x__451__auto____3465;

if(cljs.core.truth_(and__3546__auto____3466))
{var and__3546__auto____3467 = x__451__auto____3465.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3467))
{return cljs.core.not.call(null,x__451__auto____3465.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3467;
}
} else
{return and__3546__auto____3466;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____3465);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3469 = (function (coll){
return coll;
});
var disj__3470 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3471 = (function() { 
var G__3473__delegate = function (coll,k,ks){
while(true){
var ret__3468 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3474 = ret__3468;
var G__3475 = cljs.core.first.call(null,ks);
var G__3476 = cljs.core.next.call(null,ks);
coll = G__3474;
k = G__3475;
ks = G__3476;
continue;
}
} else
{return ret__3468;
}
break;
}
};
var G__3473 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3473__delegate.call(this, coll, k, ks);
};
G__3473.cljs$lang$maxFixedArity = 2;
G__3473.cljs$lang$applyTo = (function (arglist__3477){
var coll = cljs.core.first(arglist__3477);
var k = cljs.core.first(cljs.core.next(arglist__3477));
var ks = cljs.core.rest(cljs.core.next(arglist__3477));
return G__3473__delegate.call(this, coll, k, ks);
});
return G__3473;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3469.call(this,coll);
case  2 :
return disj__3470.call(this,coll,k);
default:
return disj__3471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3471.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____3478 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3479 = x__451__auto____3478;

if(cljs.core.truth_(and__3546__auto____3479))
{var and__3546__auto____3480 = x__451__auto____3478.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3480))
{return cljs.core.not.call(null,x__451__auto____3478.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3480;
}
} else
{return and__3546__auto____3479;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____3478);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____3481 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3482 = x__451__auto____3481;

if(cljs.core.truth_(and__3546__auto____3482))
{var and__3546__auto____3483 = x__451__auto____3481.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3483))
{return cljs.core.not.call(null,x__451__auto____3481.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3483;
}
} else
{return and__3546__auto____3482;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____3481);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____3484 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3485 = x__451__auto____3484;

if(cljs.core.truth_(and__3546__auto____3485))
{var and__3546__auto____3486 = x__451__auto____3484.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3486))
{return cljs.core.not.call(null,x__451__auto____3484.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3486;
}
} else
{return and__3546__auto____3485;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____3484);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____3487 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3488 = x__451__auto____3487;

if(cljs.core.truth_(and__3546__auto____3488))
{var and__3546__auto____3489 = x__451__auto____3487.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3489))
{return cljs.core.not.call(null,x__451__auto____3487.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3489;
}
} else
{return and__3546__auto____3488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____3487);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____3490 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3491 = x__451__auto____3490;

if(cljs.core.truth_(and__3546__auto____3491))
{var and__3546__auto____3492 = x__451__auto____3490.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3492))
{return cljs.core.not.call(null,x__451__auto____3490.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3492;
}
} else
{return and__3546__auto____3491;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____3490);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____3493 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3494 = x__451__auto____3493;

if(cljs.core.truth_(and__3546__auto____3494))
{var and__3546__auto____3495 = x__451__auto____3493.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3495))
{return cljs.core.not.call(null,x__451__auto____3493.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3495;
}
} else
{return and__3546__auto____3494;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____3493);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____3496 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3497 = x__451__auto____3496;

if(cljs.core.truth_(and__3546__auto____3497))
{var and__3546__auto____3498 = x__451__auto____3496.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3498))
{return cljs.core.not.call(null,x__451__auto____3496.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3498;
}
} else
{return and__3546__auto____3497;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____3496);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3499 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3499.push(key);
}));
return keys__3499;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__451__auto____3500 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3501 = x__451__auto____3500;

if(cljs.core.truth_(and__3546__auto____3501))
{var and__3546__auto____3502 = x__451__auto____3500.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3502))
{return cljs.core.not.call(null,x__451__auto____3500.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3502;
}
} else
{return and__3546__auto____3501;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____3500);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3503 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3503))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3504 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3504))
{return or__3548__auto____3504;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3503;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3505 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3505))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3505;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3506 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3506))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3506;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3507 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3507))
{return (n == n.toFixed());
} else
{return and__3546__auto____3507;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3508 = coll;

if(cljs.core.truth_(and__3546__auto____3508))
{var and__3546__auto____3509 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3509))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3509;
}
} else
{return and__3546__auto____3508;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3514 = (function (x){
return true;
});
var distinct_QMARK___3515 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3516 = (function() { 
var G__3518__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3510 = cljs.core.set([y,x]);
var xs__3511 = more;

while(true){
var x__3512 = cljs.core.first.call(null,xs__3511);
var etc__3513 = cljs.core.next.call(null,xs__3511);

if(cljs.core.truth_(xs__3511))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3510,x__3512)))
{return false;
} else
{{
var G__3519 = cljs.core.conj.call(null,s__3510,x__3512);
var G__3520 = etc__3513;
s__3510 = G__3519;
xs__3511 = G__3520;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3518 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3518__delegate.call(this, x, y, more);
};
G__3518.cljs$lang$maxFixedArity = 2;
G__3518.cljs$lang$applyTo = (function (arglist__3521){
var x = cljs.core.first(arglist__3521);
var y = cljs.core.first(cljs.core.next(arglist__3521));
var more = cljs.core.rest(cljs.core.next(arglist__3521));
return G__3518__delegate.call(this, x, y, more);
});
return G__3518;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3514.call(this,x);
case  2 :
return distinct_QMARK___3515.call(this,x,y);
default:
return distinct_QMARK___3516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3516.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3522 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3522)))
{return r__3522;
} else
{if(cljs.core.truth_(r__3522))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3524 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3525 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3523 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3523,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3523);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3524.call(this,comp);
case  2 :
return sort__3525.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3527 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3528 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3527.call(this,keyfn,comp);
case  3 :
return sort_by__3528.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3530 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3531 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3530.call(this,f,val);
case  3 :
return reduce__3531.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3537 = (function (f,coll){
var temp__3695__auto____3533 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3533))
{var s__3534 = temp__3695__auto____3533;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3534),cljs.core.next.call(null,s__3534));
} else
{return f.call(null);
}
});
var seq_reduce__3538 = (function (f,val,coll){
var val__3535 = val;
var coll__3536 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3536))
{{
var G__3540 = f.call(null,val__3535,cljs.core.first.call(null,coll__3536));
var G__3541 = cljs.core.next.call(null,coll__3536);
val__3535 = G__3540;
coll__3536 = G__3541;
continue;
}
} else
{return val__3535;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3537.call(this,f,val);
case  3 :
return seq_reduce__3538.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3542 = null;
var G__3542__3543 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3542__3544 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3542 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3542__3543.call(this,coll,f);
case  3 :
return G__3542__3544.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3542;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3546 = (function (){
return 0;
});
var _PLUS___3547 = (function (x){
return x;
});
var _PLUS___3548 = (function (x,y){
return (x + y);
});
var _PLUS___3549 = (function() { 
var G__3551__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3551 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3551__delegate.call(this, x, y, more);
};
G__3551.cljs$lang$maxFixedArity = 2;
G__3551.cljs$lang$applyTo = (function (arglist__3552){
var x = cljs.core.first(arglist__3552);
var y = cljs.core.first(cljs.core.next(arglist__3552));
var more = cljs.core.rest(cljs.core.next(arglist__3552));
return G__3551__delegate.call(this, x, y, more);
});
return G__3551;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3546.call(this);
case  1 :
return _PLUS___3547.call(this,x);
case  2 :
return _PLUS___3548.call(this,x,y);
default:
return _PLUS___3549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3549.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3553 = (function (x){
return (- x);
});
var ___3554 = (function (x,y){
return (x - y);
});
var ___3555 = (function() { 
var G__3557__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3557 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3557__delegate.call(this, x, y, more);
};
G__3557.cljs$lang$maxFixedArity = 2;
G__3557.cljs$lang$applyTo = (function (arglist__3558){
var x = cljs.core.first(arglist__3558);
var y = cljs.core.first(cljs.core.next(arglist__3558));
var more = cljs.core.rest(cljs.core.next(arglist__3558));
return G__3557__delegate.call(this, x, y, more);
});
return G__3557;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3553.call(this,x);
case  2 :
return ___3554.call(this,x,y);
default:
return ___3555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3555.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3559 = (function (){
return 1;
});
var _STAR___3560 = (function (x){
return x;
});
var _STAR___3561 = (function (x,y){
return (x * y);
});
var _STAR___3562 = (function() { 
var G__3564__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3564 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3564__delegate.call(this, x, y, more);
};
G__3564.cljs$lang$maxFixedArity = 2;
G__3564.cljs$lang$applyTo = (function (arglist__3565){
var x = cljs.core.first(arglist__3565);
var y = cljs.core.first(cljs.core.next(arglist__3565));
var more = cljs.core.rest(cljs.core.next(arglist__3565));
return G__3564__delegate.call(this, x, y, more);
});
return G__3564;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3559.call(this);
case  1 :
return _STAR___3560.call(this,x);
case  2 :
return _STAR___3561.call(this,x,y);
default:
return _STAR___3562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3562.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3566 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3567 = (function (x,y){
return (x / y);
});
var _SLASH___3568 = (function() { 
var G__3570__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3570 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3570__delegate.call(this, x, y, more);
};
G__3570.cljs$lang$maxFixedArity = 2;
G__3570.cljs$lang$applyTo = (function (arglist__3571){
var x = cljs.core.first(arglist__3571);
var y = cljs.core.first(cljs.core.next(arglist__3571));
var more = cljs.core.rest(cljs.core.next(arglist__3571));
return G__3570__delegate.call(this, x, y, more);
});
return G__3570;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3566.call(this,x);
case  2 :
return _SLASH___3567.call(this,x,y);
default:
return _SLASH___3568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3568.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3572 = (function (x){
return true;
});
var _LT___3573 = (function (x,y){
return (x < y);
});
var _LT___3574 = (function() { 
var G__3576__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3577 = y;
var G__3578 = cljs.core.first.call(null,more);
var G__3579 = cljs.core.next.call(null,more);
x = G__3577;
y = G__3578;
more = G__3579;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3576 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3576__delegate.call(this, x, y, more);
};
G__3576.cljs$lang$maxFixedArity = 2;
G__3576.cljs$lang$applyTo = (function (arglist__3580){
var x = cljs.core.first(arglist__3580);
var y = cljs.core.first(cljs.core.next(arglist__3580));
var more = cljs.core.rest(cljs.core.next(arglist__3580));
return G__3576__delegate.call(this, x, y, more);
});
return G__3576;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3572.call(this,x);
case  2 :
return _LT___3573.call(this,x,y);
default:
return _LT___3574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3574.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3581 = (function (x){
return true;
});
var _LT__EQ___3582 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3583 = (function() { 
var G__3585__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3586 = y;
var G__3587 = cljs.core.first.call(null,more);
var G__3588 = cljs.core.next.call(null,more);
x = G__3586;
y = G__3587;
more = G__3588;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3585 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3585__delegate.call(this, x, y, more);
};
G__3585.cljs$lang$maxFixedArity = 2;
G__3585.cljs$lang$applyTo = (function (arglist__3589){
var x = cljs.core.first(arglist__3589);
var y = cljs.core.first(cljs.core.next(arglist__3589));
var more = cljs.core.rest(cljs.core.next(arglist__3589));
return G__3585__delegate.call(this, x, y, more);
});
return G__3585;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3581.call(this,x);
case  2 :
return _LT__EQ___3582.call(this,x,y);
default:
return _LT__EQ___3583.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3583.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3590 = (function (x){
return true;
});
var _GT___3591 = (function (x,y){
return (x > y);
});
var _GT___3592 = (function() { 
var G__3594__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3595 = y;
var G__3596 = cljs.core.first.call(null,more);
var G__3597 = cljs.core.next.call(null,more);
x = G__3595;
y = G__3596;
more = G__3597;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3594 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3594__delegate.call(this, x, y, more);
};
G__3594.cljs$lang$maxFixedArity = 2;
G__3594.cljs$lang$applyTo = (function (arglist__3598){
var x = cljs.core.first(arglist__3598);
var y = cljs.core.first(cljs.core.next(arglist__3598));
var more = cljs.core.rest(cljs.core.next(arglist__3598));
return G__3594__delegate.call(this, x, y, more);
});
return G__3594;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3590.call(this,x);
case  2 :
return _GT___3591.call(this,x,y);
default:
return _GT___3592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3592.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3599 = (function (x){
return true;
});
var _GT__EQ___3600 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3601 = (function() { 
var G__3603__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3604 = y;
var G__3605 = cljs.core.first.call(null,more);
var G__3606 = cljs.core.next.call(null,more);
x = G__3604;
y = G__3605;
more = G__3606;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3603 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3603__delegate.call(this, x, y, more);
};
G__3603.cljs$lang$maxFixedArity = 2;
G__3603.cljs$lang$applyTo = (function (arglist__3607){
var x = cljs.core.first(arglist__3607);
var y = cljs.core.first(cljs.core.next(arglist__3607));
var more = cljs.core.rest(cljs.core.next(arglist__3607));
return G__3603__delegate.call(this, x, y, more);
});
return G__3603;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3599.call(this,x);
case  2 :
return _GT__EQ___3600.call(this,x,y);
default:
return _GT__EQ___3601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3601.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3608 = (function (x){
return x;
});
var max__3609 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3610 = (function() { 
var G__3612__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3612 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3612__delegate.call(this, x, y, more);
};
G__3612.cljs$lang$maxFixedArity = 2;
G__3612.cljs$lang$applyTo = (function (arglist__3613){
var x = cljs.core.first(arglist__3613);
var y = cljs.core.first(cljs.core.next(arglist__3613));
var more = cljs.core.rest(cljs.core.next(arglist__3613));
return G__3612__delegate.call(this, x, y, more);
});
return G__3612;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3608.call(this,x);
case  2 :
return max__3609.call(this,x,y);
default:
return max__3610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3610.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3614 = (function (x){
return x;
});
var min__3615 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3616 = (function() { 
var G__3618__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3618 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3618__delegate.call(this, x, y, more);
};
G__3618.cljs$lang$maxFixedArity = 2;
G__3618.cljs$lang$applyTo = (function (arglist__3619){
var x = cljs.core.first(arglist__3619);
var y = cljs.core.first(cljs.core.next(arglist__3619));
var more = cljs.core.rest(cljs.core.next(arglist__3619));
return G__3618__delegate.call(this, x, y, more);
});
return G__3618;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3614.call(this,x);
case  2 :
return min__3615.call(this,x,y);
default:
return min__3616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3616.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3620 = (n % d);

return cljs.core.fix.call(null,((n - rem__3620) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3621 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3621));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3622 = (function (){
return Math.random.call(null);
});
var rand__3623 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3622.call(this);
case  1 :
return rand__3623.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3625 = (function (x){
return true;
});
var _EQ__EQ___3626 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3627 = (function() { 
var G__3629__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3630 = y;
var G__3631 = cljs.core.first.call(null,more);
var G__3632 = cljs.core.next.call(null,more);
x = G__3630;
y = G__3631;
more = G__3632;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3629__delegate.call(this, x, y, more);
};
G__3629.cljs$lang$maxFixedArity = 2;
G__3629.cljs$lang$applyTo = (function (arglist__3633){
var x = cljs.core.first(arglist__3633);
var y = cljs.core.first(cljs.core.next(arglist__3633));
var more = cljs.core.rest(cljs.core.next(arglist__3633));
return G__3629__delegate.call(this, x, y, more);
});
return G__3629;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3625.call(this,x);
case  2 :
return _EQ__EQ___3626.call(this,x,y);
default:
return _EQ__EQ___3627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3627.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3634 = n;
var xs__3635 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3636 = xs__3635;

if(cljs.core.truth_(and__3546__auto____3636))
{return (n__3634 > 0);
} else
{return and__3546__auto____3636;
}
})()))
{{
var G__3637 = (n__3634 - 1);
var G__3638 = cljs.core.next.call(null,xs__3635);
n__3634 = G__3637;
xs__3635 = G__3638;
continue;
}
} else
{return xs__3635;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3643 = null;
var G__3643__3644 = (function (coll,n){
var temp__3695__auto____3639 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3639))
{var xs__3640 = temp__3695__auto____3639;

return cljs.core.first.call(null,xs__3640);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3643__3645 = (function (coll,n,not_found){
var temp__3695__auto____3641 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3641))
{var xs__3642 = temp__3695__auto____3641;

return cljs.core.first.call(null,xs__3642);
} else
{return not_found;
}
});
G__3643 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3643__3644.call(this,coll,n);
case  3 :
return G__3643__3645.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3643;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3647 = (function (){
return "";
});
var str_STAR___3648 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3649 = (function() { 
var G__3651__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3652 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3653 = cljs.core.next.call(null,more);
sb = G__3652;
more = G__3653;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3651 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3651__delegate.call(this, x, ys);
};
G__3651.cljs$lang$maxFixedArity = 1;
G__3651.cljs$lang$applyTo = (function (arglist__3654){
var x = cljs.core.first(arglist__3654);
var ys = cljs.core.rest(arglist__3654);
return G__3651__delegate.call(this, x, ys);
});
return G__3651;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3647.call(this);
case  1 :
return str_STAR___3648.call(this,x);
default:
return str_STAR___3649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3649.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3655 = (function (){
return "";
});
var str__3656 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3657 = (function() { 
var G__3659__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3660 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3661 = cljs.core.next.call(null,more);
sb = G__3660;
more = G__3661;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3659 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3659__delegate.call(this, x, ys);
};
G__3659.cljs$lang$maxFixedArity = 1;
G__3659.cljs$lang$applyTo = (function (arglist__3662){
var x = cljs.core.first(arglist__3662);
var ys = cljs.core.rest(arglist__3662);
return G__3659__delegate.call(this, x, ys);
});
return G__3659;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3655.call(this);
case  1 :
return str__3656.call(this,x);
default:
return str__3657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3657.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3663 = (function (s,start){
return s.substring(start);
});
var subs__3664 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3663.call(this,s,start);
case  3 :
return subs__3664.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3666 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__3667 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3666.call(this,ns);
case  2 :
return symbol__3667.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3669 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__3670 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3669.call(this,ns);
case  2 :
return keyword__3670.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3672 = cljs.core.seq.call(null,x);
var ys__3673 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3672 === null)))
{return (ys__3673 === null);
} else
{if(cljs.core.truth_((ys__3673 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3672),cljs.core.first.call(null,ys__3673))))
{{
var G__3674 = cljs.core.next.call(null,xs__3672);
var G__3675 = cljs.core.next.call(null,ys__3673);
xs__3672 = G__3674;
ys__3673 = G__3675;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3676_SHARP_,p2__3677_SHARP_){
return cljs.core.hash_combine.call(null,p1__3676_SHARP_,cljs.core.hash.call(null,p2__3677_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3678__3679 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3678__3679))
{var G__3681__3683 = cljs.core.first.call(null,G__3678__3679);
var vec__3682__3684 = G__3681__3683;
var key_name__3685 = cljs.core.nth.call(null,vec__3682__3684,0,null);
var f__3686 = cljs.core.nth.call(null,vec__3682__3684,1,null);
var G__3678__3687 = G__3678__3679;

var G__3681__3688 = G__3681__3683;
var G__3678__3689 = G__3678__3687;

while(true){
var vec__3690__3691 = G__3681__3688;
var key_name__3692 = cljs.core.nth.call(null,vec__3690__3691,0,null);
var f__3693 = cljs.core.nth.call(null,vec__3690__3691,1,null);
var G__3678__3694 = G__3678__3689;

var str_name__3695 = cljs.core.name.call(null,key_name__3692);

obj[str_name__3695] = f__3693;
var temp__3698__auto____3696 = cljs.core.next.call(null,G__3678__3694);

if(cljs.core.truth_(temp__3698__auto____3696))
{var G__3678__3697 = temp__3698__auto____3696;

{
var G__3698 = cljs.core.first.call(null,G__3678__3697);
var G__3699 = G__3678__3697;
G__3681__3688 = G__3698;
G__3678__3689 = G__3699;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3700 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3701 = this;
return (new cljs.core.List(this__3701.meta,o,coll,(this__3701.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3702 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3703 = this;
return this__3703.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3704 = this;
return this__3704.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3705 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3706 = this;
return this__3706.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3707 = this;
return this__3707.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3708 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3709 = this;
return (new cljs.core.List(meta,this__3709.first,this__3709.rest,this__3709.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3710 = this;
return this__3710.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3711 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3712 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3713 = this;
return (new cljs.core.List(this__3713.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3714 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3715 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3716 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3717 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3718 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3719 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3720 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3721 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3722 = this;
return this__3722.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3723 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3724){
var items = cljs.core.seq( arglist__3724 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3725 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3726 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3727 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3728 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3728.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3729 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3730 = this;
return this__3730.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3731 = this;
if(cljs.core.truth_((this__3731.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3731.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3732 = this;
return this__3732.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3733 = this;
return (new cljs.core.Cons(meta,this__3733.first,this__3733.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3734 = null;
var G__3734__3735 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3734__3736 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3734 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3734__3735.call(this,string,f);
case  3 :
return G__3734__3736.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3734;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3738 = null;
var G__3738__3739 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3738__3740 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3738 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3738__3739.call(this,string,k);
case  3 :
return G__3738__3740.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3738;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3742 = null;
var G__3742__3743 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3742__3744 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3742 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3742__3743.call(this,string,n);
case  3 :
return G__3742__3744.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3742;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3752 = null;
var G__3752__3753 = (function (tsym3746,coll){
var tsym3746__3748 = this;

var this$__3749 = tsym3746__3748;

return cljs.core.get.call(null,coll,this$__3749.toString());
});
var G__3752__3754 = (function (tsym3747,coll,not_found){
var tsym3747__3750 = this;

var this$__3751 = tsym3747__3750;

return cljs.core.get.call(null,coll,this$__3751.toString(),not_found);
});
G__3752 = function(tsym3747,coll,not_found){
switch(arguments.length){
case  2 :
return G__3752__3753.call(this,tsym3747,coll);
case  3 :
return G__3752__3754.call(this,tsym3747,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3752;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3756 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3756;
} else
{lazy_seq.x = x__3756.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3757 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3758 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3759 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3760 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3760.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3761 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3762 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3763 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3764 = this;
return this__3764.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3765 = this;
return (new cljs.core.LazySeq(meta,this__3765.realized,this__3765.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3766 = [];

var s__3767 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3767)))
{ary__3766.push(cljs.core.first.call(null,s__3767));
{
var G__3768 = cljs.core.next.call(null,s__3767);
s__3767 = G__3768;
continue;
}
} else
{return ary__3766;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3769 = s;
var i__3770 = n;
var sum__3771 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3772 = (i__3770 > 0);

if(cljs.core.truth_(and__3546__auto____3772))
{return cljs.core.seq.call(null,s__3769);
} else
{return and__3546__auto____3772;
}
})()))
{{
var G__3773 = cljs.core.next.call(null,s__3769);
var G__3774 = (i__3770 - 1);
var G__3775 = (sum__3771 + 1);
s__3769 = G__3773;
i__3770 = G__3774;
sum__3771 = G__3775;
continue;
}
} else
{return sum__3771;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3779 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3780 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3781 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3776 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3776))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3776),concat.call(null,cljs.core.rest.call(null,s__3776),y));
} else
{return y;
}
})));
});
var concat__3782 = (function() { 
var G__3784__delegate = function (x,y,zs){
var cat__3778 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3777 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3777))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3777),cat.call(null,cljs.core.rest.call(null,xys__3777),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3778.call(null,concat.call(null,x,y),zs);
};
var G__3784 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3784__delegate.call(this, x, y, zs);
};
G__3784.cljs$lang$maxFixedArity = 2;
G__3784.cljs$lang$applyTo = (function (arglist__3785){
var x = cljs.core.first(arglist__3785);
var y = cljs.core.first(cljs.core.next(arglist__3785));
var zs = cljs.core.rest(cljs.core.next(arglist__3785));
return G__3784__delegate.call(this, x, y, zs);
});
return G__3784;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3779.call(this);
case  1 :
return concat__3780.call(this,x);
case  2 :
return concat__3781.call(this,x,y);
default:
return concat__3782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3782.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3786 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3787 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3788 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3789 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3790 = (function() { 
var G__3792__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3792 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3792__delegate.call(this, a, b, c, d, more);
};
G__3792.cljs$lang$maxFixedArity = 4;
G__3792.cljs$lang$applyTo = (function (arglist__3793){
var a = cljs.core.first(arglist__3793);
var b = cljs.core.first(cljs.core.next(arglist__3793));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3793)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3793))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3793))));
return G__3792__delegate.call(this, a, b, c, d, more);
});
return G__3792;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3786.call(this,a);
case  2 :
return list_STAR___3787.call(this,a,b);
case  3 :
return list_STAR___3788.call(this,a,b,c);
case  4 :
return list_STAR___3789.call(this,a,b,c,d);
default:
return list_STAR___3790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3790.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3803 = (function (f,args){
var fixed_arity__3794 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3794 + 1)) <= fixed_arity__3794)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3804 = (function (f,x,args){
var arglist__3795 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3796 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3795,fixed_arity__3796) <= fixed_arity__3796)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3795));
} else
{return f.cljs$lang$applyTo(arglist__3795);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3795));
}
});
var apply__3805 = (function (f,x,y,args){
var arglist__3797 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3798 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3797,fixed_arity__3798) <= fixed_arity__3798)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3797));
} else
{return f.cljs$lang$applyTo(arglist__3797);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3797));
}
});
var apply__3806 = (function (f,x,y,z,args){
var arglist__3799 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3800 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3799,fixed_arity__3800) <= fixed_arity__3800)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3799));
} else
{return f.cljs$lang$applyTo(arglist__3799);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3799));
}
});
var apply__3807 = (function() { 
var G__3809__delegate = function (f,a,b,c,d,args){
var arglist__3801 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3802 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3801,fixed_arity__3802) <= fixed_arity__3802)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3801));
} else
{return f.cljs$lang$applyTo(arglist__3801);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3801));
}
};
var G__3809 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3809__delegate.call(this, f, a, b, c, d, args);
};
G__3809.cljs$lang$maxFixedArity = 5;
G__3809.cljs$lang$applyTo = (function (arglist__3810){
var f = cljs.core.first(arglist__3810);
var a = cljs.core.first(cljs.core.next(arglist__3810));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3810)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3810))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3810)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3810)))));
return G__3809__delegate.call(this, f, a, b, c, d, args);
});
return G__3809;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3803.call(this,f,a);
case  3 :
return apply__3804.call(this,f,a,b);
case  4 :
return apply__3805.call(this,f,a,b,c);
case  5 :
return apply__3806.call(this,f,a,b,c,d);
default:
return apply__3807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3807.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3811){
var obj = cljs.core.first(arglist__3811);
var f = cljs.core.first(cljs.core.next(arglist__3811));
var args = cljs.core.rest(cljs.core.next(arglist__3811));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3812 = (function (x){
return false;
});
var not_EQ___3813 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3814 = (function() { 
var G__3816__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3816 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3816__delegate.call(this, x, y, more);
};
G__3816.cljs$lang$maxFixedArity = 2;
G__3816.cljs$lang$applyTo = (function (arglist__3817){
var x = cljs.core.first(arglist__3817);
var y = cljs.core.first(cljs.core.next(arglist__3817));
var more = cljs.core.rest(cljs.core.next(arglist__3817));
return G__3816__delegate.call(this, x, y, more);
});
return G__3816;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3812.call(this,x);
case  2 :
return not_EQ___3813.call(this,x,y);
default:
return not_EQ___3814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3814.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3818 = pred;
var G__3819 = cljs.core.next.call(null,coll);
pred = G__3818;
coll = G__3819;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3820 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3820))
{return or__3548__auto____3820;
} else
{{
var G__3821 = pred;
var G__3822 = cljs.core.next.call(null,coll);
pred = G__3821;
coll = G__3822;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3823 = null;
var G__3823__3824 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3823__3825 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3823__3826 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3823__3827 = (function() { 
var G__3829__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3829 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3829__delegate.call(this, x, y, zs);
};
G__3829.cljs$lang$maxFixedArity = 2;
G__3829.cljs$lang$applyTo = (function (arglist__3830){
var x = cljs.core.first(arglist__3830);
var y = cljs.core.first(cljs.core.next(arglist__3830));
var zs = cljs.core.rest(cljs.core.next(arglist__3830));
return G__3829__delegate.call(this, x, y, zs);
});
return G__3829;
})()
;
G__3823 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3823__3824.call(this);
case  1 :
return G__3823__3825.call(this,x);
case  2 :
return G__3823__3826.call(this,x,y);
default:
return G__3823__3827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3823.cljs$lang$maxFixedArity = 2;
G__3823.cljs$lang$applyTo = G__3823__3827.cljs$lang$applyTo;
return G__3823;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3831__delegate = function (args){
return x;
};
var G__3831 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3831__delegate.call(this, args);
};
G__3831.cljs$lang$maxFixedArity = 0;
G__3831.cljs$lang$applyTo = (function (arglist__3832){
var args = cljs.core.seq( arglist__3832 );;
return G__3831__delegate.call(this, args);
});
return G__3831;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3836 = (function (){
return cljs.core.identity;
});
var comp__3837 = (function (f){
return f;
});
var comp__3838 = (function (f,g){
return (function() {
var G__3842 = null;
var G__3842__3843 = (function (){
return f.call(null,g.call(null));
});
var G__3842__3844 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3842__3845 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3842__3846 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3842__3847 = (function() { 
var G__3849__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3849__delegate.call(this, x, y, z, args);
};
G__3849.cljs$lang$maxFixedArity = 3;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var x = cljs.core.first(arglist__3850);
var y = cljs.core.first(cljs.core.next(arglist__3850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3850)));
return G__3849__delegate.call(this, x, y, z, args);
});
return G__3849;
})()
;
G__3842 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3842__3843.call(this);
case  1 :
return G__3842__3844.call(this,x);
case  2 :
return G__3842__3845.call(this,x,y);
case  3 :
return G__3842__3846.call(this,x,y,z);
default:
return G__3842__3847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3842.cljs$lang$maxFixedArity = 3;
G__3842.cljs$lang$applyTo = G__3842__3847.cljs$lang$applyTo;
return G__3842;
})()
});
var comp__3839 = (function (f,g,h){
return (function() {
var G__3851 = null;
var G__3851__3852 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3851__3853 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3851__3854 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3851__3855 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3851__3856 = (function() { 
var G__3858__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3858 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3858__delegate.call(this, x, y, z, args);
};
G__3858.cljs$lang$maxFixedArity = 3;
G__3858.cljs$lang$applyTo = (function (arglist__3859){
var x = cljs.core.first(arglist__3859);
var y = cljs.core.first(cljs.core.next(arglist__3859));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3859)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3859)));
return G__3858__delegate.call(this, x, y, z, args);
});
return G__3858;
})()
;
G__3851 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3851__3852.call(this);
case  1 :
return G__3851__3853.call(this,x);
case  2 :
return G__3851__3854.call(this,x,y);
case  3 :
return G__3851__3855.call(this,x,y,z);
default:
return G__3851__3856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3851.cljs$lang$maxFixedArity = 3;
G__3851.cljs$lang$applyTo = G__3851__3856.cljs$lang$applyTo;
return G__3851;
})()
});
var comp__3840 = (function() { 
var G__3860__delegate = function (f1,f2,f3,fs){
var fs__3833 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3861__delegate = function (args){
var ret__3834 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3833),args);
var fs__3835 = cljs.core.next.call(null,fs__3833);

while(true){
if(cljs.core.truth_(fs__3835))
{{
var G__3862 = cljs.core.first.call(null,fs__3835).call(null,ret__3834);
var G__3863 = cljs.core.next.call(null,fs__3835);
ret__3834 = G__3862;
fs__3835 = G__3863;
continue;
}
} else
{return ret__3834;
}
break;
}
};
var G__3861 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3861__delegate.call(this, args);
};
G__3861.cljs$lang$maxFixedArity = 0;
G__3861.cljs$lang$applyTo = (function (arglist__3864){
var args = cljs.core.seq( arglist__3864 );;
return G__3861__delegate.call(this, args);
});
return G__3861;
})()
;
};
var G__3860 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3860__delegate.call(this, f1, f2, f3, fs);
};
G__3860.cljs$lang$maxFixedArity = 3;
G__3860.cljs$lang$applyTo = (function (arglist__3865){
var f1 = cljs.core.first(arglist__3865);
var f2 = cljs.core.first(cljs.core.next(arglist__3865));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3865)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3865)));
return G__3860__delegate.call(this, f1, f2, f3, fs);
});
return G__3860;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3836.call(this);
case  1 :
return comp__3837.call(this,f1);
case  2 :
return comp__3838.call(this,f1,f2);
case  3 :
return comp__3839.call(this,f1,f2,f3);
default:
return comp__3840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3840.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3866 = (function (f,arg1){
return (function() { 
var G__3871__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3871 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3871__delegate.call(this, args);
};
G__3871.cljs$lang$maxFixedArity = 0;
G__3871.cljs$lang$applyTo = (function (arglist__3872){
var args = cljs.core.seq( arglist__3872 );;
return G__3871__delegate.call(this, args);
});
return G__3871;
})()
;
});
var partial__3867 = (function (f,arg1,arg2){
return (function() { 
var G__3873__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3873__delegate.call(this, args);
};
G__3873.cljs$lang$maxFixedArity = 0;
G__3873.cljs$lang$applyTo = (function (arglist__3874){
var args = cljs.core.seq( arglist__3874 );;
return G__3873__delegate.call(this, args);
});
return G__3873;
})()
;
});
var partial__3868 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3875__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3875__delegate.call(this, args);
};
G__3875.cljs$lang$maxFixedArity = 0;
G__3875.cljs$lang$applyTo = (function (arglist__3876){
var args = cljs.core.seq( arglist__3876 );;
return G__3875__delegate.call(this, args);
});
return G__3875;
})()
;
});
var partial__3869 = (function() { 
var G__3877__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3878__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3878 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3878__delegate.call(this, args);
};
G__3878.cljs$lang$maxFixedArity = 0;
G__3878.cljs$lang$applyTo = (function (arglist__3879){
var args = cljs.core.seq( arglist__3879 );;
return G__3878__delegate.call(this, args);
});
return G__3878;
})()
;
};
var G__3877 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3877__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3877.cljs$lang$maxFixedArity = 4;
G__3877.cljs$lang$applyTo = (function (arglist__3880){
var f = cljs.core.first(arglist__3880);
var arg1 = cljs.core.first(cljs.core.next(arglist__3880));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3880)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3880))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3880))));
return G__3877__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3877;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3866.call(this,f,arg1);
case  3 :
return partial__3867.call(this,f,arg1,arg2);
case  4 :
return partial__3868.call(this,f,arg1,arg2,arg3);
default:
return partial__3869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3869.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3881 = (function (f,x){
return (function() {
var G__3885 = null;
var G__3885__3886 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3885__3887 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3885__3888 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3885__3889 = (function() { 
var G__3891__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3891 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3891__delegate.call(this, a, b, c, ds);
};
G__3891.cljs$lang$maxFixedArity = 3;
G__3891.cljs$lang$applyTo = (function (arglist__3892){
var a = cljs.core.first(arglist__3892);
var b = cljs.core.first(cljs.core.next(arglist__3892));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3892)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3892)));
return G__3891__delegate.call(this, a, b, c, ds);
});
return G__3891;
})()
;
G__3885 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3885__3886.call(this,a);
case  2 :
return G__3885__3887.call(this,a,b);
case  3 :
return G__3885__3888.call(this,a,b,c);
default:
return G__3885__3889.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3885.cljs$lang$maxFixedArity = 3;
G__3885.cljs$lang$applyTo = G__3885__3889.cljs$lang$applyTo;
return G__3885;
})()
});
var fnil__3882 = (function (f,x,y){
return (function() {
var G__3893 = null;
var G__3893__3894 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3893__3895 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3893__3896 = (function() { 
var G__3898__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3898 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3898__delegate.call(this, a, b, c, ds);
};
G__3898.cljs$lang$maxFixedArity = 3;
G__3898.cljs$lang$applyTo = (function (arglist__3899){
var a = cljs.core.first(arglist__3899);
var b = cljs.core.first(cljs.core.next(arglist__3899));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3899)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3899)));
return G__3898__delegate.call(this, a, b, c, ds);
});
return G__3898;
})()
;
G__3893 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3893__3894.call(this,a,b);
case  3 :
return G__3893__3895.call(this,a,b,c);
default:
return G__3893__3896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3893.cljs$lang$maxFixedArity = 3;
G__3893.cljs$lang$applyTo = G__3893__3896.cljs$lang$applyTo;
return G__3893;
})()
});
var fnil__3883 = (function (f,x,y,z){
return (function() {
var G__3900 = null;
var G__3900__3901 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3900__3902 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3900__3903 = (function() { 
var G__3905__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3905 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3905__delegate.call(this, a, b, c, ds);
};
G__3905.cljs$lang$maxFixedArity = 3;
G__3905.cljs$lang$applyTo = (function (arglist__3906){
var a = cljs.core.first(arglist__3906);
var b = cljs.core.first(cljs.core.next(arglist__3906));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3906)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3906)));
return G__3905__delegate.call(this, a, b, c, ds);
});
return G__3905;
})()
;
G__3900 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3900__3901.call(this,a,b);
case  3 :
return G__3900__3902.call(this,a,b,c);
default:
return G__3900__3903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3900.cljs$lang$maxFixedArity = 3;
G__3900.cljs$lang$applyTo = G__3900__3903.cljs$lang$applyTo;
return G__3900;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3881.call(this,f,x);
case  3 :
return fnil__3882.call(this,f,x,y);
case  4 :
return fnil__3883.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3909 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3907 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3907))
{var s__3908 = temp__3698__auto____3907;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3908)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3908)));
} else
{return null;
}
})));
});

return mapi__3909.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3910 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3910))
{var s__3911 = temp__3698__auto____3910;

var x__3912 = f.call(null,cljs.core.first.call(null,s__3911));

if(cljs.core.truth_((x__3912 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3911));
} else
{return cljs.core.cons.call(null,x__3912,keep.call(null,f,cljs.core.rest.call(null,s__3911)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3922 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3919 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3919))
{var s__3920 = temp__3698__auto____3919;

var x__3921 = f.call(null,idx,cljs.core.first.call(null,s__3920));

if(cljs.core.truth_((x__3921 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3920));
} else
{return cljs.core.cons.call(null,x__3921,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3920)));
}
} else
{return null;
}
})));
});

return keepi__3922.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3967 = (function (p){
return (function() {
var ep1 = null;
var ep1__3972 = (function (){
return true;
});
var ep1__3973 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3974 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3929 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3929))
{return p.call(null,y);
} else
{return and__3546__auto____3929;
}
})());
});
var ep1__3975 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3930 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3930))
{var and__3546__auto____3931 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3931))
{return p.call(null,z);
} else
{return and__3546__auto____3931;
}
} else
{return and__3546__auto____3930;
}
})());
});
var ep1__3976 = (function() { 
var G__3978__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3932 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3932))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3932;
}
})());
};
var G__3978 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3978__delegate.call(this, x, y, z, args);
};
G__3978.cljs$lang$maxFixedArity = 3;
G__3978.cljs$lang$applyTo = (function (arglist__3979){
var x = cljs.core.first(arglist__3979);
var y = cljs.core.first(cljs.core.next(arglist__3979));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3979)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3979)));
return G__3978__delegate.call(this, x, y, z, args);
});
return G__3978;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3972.call(this);
case  1 :
return ep1__3973.call(this,x);
case  2 :
return ep1__3974.call(this,x,y);
case  3 :
return ep1__3975.call(this,x,y,z);
default:
return ep1__3976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3976.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3968 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3980 = (function (){
return true;
});
var ep2__3981 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3933 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3933))
{return p2.call(null,x);
} else
{return and__3546__auto____3933;
}
})());
});
var ep2__3982 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3934 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3934))
{var and__3546__auto____3935 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3935))
{var and__3546__auto____3936 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3936))
{return p2.call(null,y);
} else
{return and__3546__auto____3936;
}
} else
{return and__3546__auto____3935;
}
} else
{return and__3546__auto____3934;
}
})());
});
var ep2__3983 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3937 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3937))
{var and__3546__auto____3938 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3938))
{var and__3546__auto____3939 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3939))
{var and__3546__auto____3940 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3940))
{var and__3546__auto____3941 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3941))
{return p2.call(null,z);
} else
{return and__3546__auto____3941;
}
} else
{return and__3546__auto____3940;
}
} else
{return and__3546__auto____3939;
}
} else
{return and__3546__auto____3938;
}
} else
{return and__3546__auto____3937;
}
})());
});
var ep2__3984 = (function() { 
var G__3986__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3942 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3942))
{return cljs.core.every_QMARK_.call(null,(function (p1__3913_SHARP_){
var and__3546__auto____3943 = p1.call(null,p1__3913_SHARP_);

if(cljs.core.truth_(and__3546__auto____3943))
{return p2.call(null,p1__3913_SHARP_);
} else
{return and__3546__auto____3943;
}
}),args);
} else
{return and__3546__auto____3942;
}
})());
};
var G__3986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3986__delegate.call(this, x, y, z, args);
};
G__3986.cljs$lang$maxFixedArity = 3;
G__3986.cljs$lang$applyTo = (function (arglist__3987){
var x = cljs.core.first(arglist__3987);
var y = cljs.core.first(cljs.core.next(arglist__3987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3987)));
return G__3986__delegate.call(this, x, y, z, args);
});
return G__3986;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3980.call(this);
case  1 :
return ep2__3981.call(this,x);
case  2 :
return ep2__3982.call(this,x,y);
case  3 :
return ep2__3983.call(this,x,y,z);
default:
return ep2__3984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3984.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3969 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3988 = (function (){
return true;
});
var ep3__3989 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3944 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3944))
{var and__3546__auto____3945 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3945))
{return p3.call(null,x);
} else
{return and__3546__auto____3945;
}
} else
{return and__3546__auto____3944;
}
})());
});
var ep3__3990 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3946 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3946))
{var and__3546__auto____3947 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3947))
{var and__3546__auto____3948 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3948))
{var and__3546__auto____3949 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3949))
{var and__3546__auto____3950 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3950))
{return p3.call(null,y);
} else
{return and__3546__auto____3950;
}
} else
{return and__3546__auto____3949;
}
} else
{return and__3546__auto____3948;
}
} else
{return and__3546__auto____3947;
}
} else
{return and__3546__auto____3946;
}
})());
});
var ep3__3991 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3951 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3951))
{var and__3546__auto____3952 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3952))
{var and__3546__auto____3953 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3953))
{var and__3546__auto____3954 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3954))
{var and__3546__auto____3955 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3955))
{var and__3546__auto____3956 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3956))
{var and__3546__auto____3957 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3957))
{var and__3546__auto____3958 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3958))
{return p3.call(null,z);
} else
{return and__3546__auto____3958;
}
} else
{return and__3546__auto____3957;
}
} else
{return and__3546__auto____3956;
}
} else
{return and__3546__auto____3955;
}
} else
{return and__3546__auto____3954;
}
} else
{return and__3546__auto____3953;
}
} else
{return and__3546__auto____3952;
}
} else
{return and__3546__auto____3951;
}
})());
});
var ep3__3992 = (function() { 
var G__3994__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3959 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3959))
{return cljs.core.every_QMARK_.call(null,(function (p1__3914_SHARP_){
var and__3546__auto____3960 = p1.call(null,p1__3914_SHARP_);

if(cljs.core.truth_(and__3546__auto____3960))
{var and__3546__auto____3961 = p2.call(null,p1__3914_SHARP_);

if(cljs.core.truth_(and__3546__auto____3961))
{return p3.call(null,p1__3914_SHARP_);
} else
{return and__3546__auto____3961;
}
} else
{return and__3546__auto____3960;
}
}),args);
} else
{return and__3546__auto____3959;
}
})());
};
var G__3994 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3994__delegate.call(this, x, y, z, args);
};
G__3994.cljs$lang$maxFixedArity = 3;
G__3994.cljs$lang$applyTo = (function (arglist__3995){
var x = cljs.core.first(arglist__3995);
var y = cljs.core.first(cljs.core.next(arglist__3995));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3995)));
return G__3994__delegate.call(this, x, y, z, args);
});
return G__3994;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3988.call(this);
case  1 :
return ep3__3989.call(this,x);
case  2 :
return ep3__3990.call(this,x,y);
case  3 :
return ep3__3991.call(this,x,y,z);
default:
return ep3__3992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3992.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3970 = (function() { 
var G__3996__delegate = function (p1,p2,p3,ps){
var ps__3962 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3997 = (function (){
return true;
});
var epn__3998 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3915_SHARP_){
return p1__3915_SHARP_.call(null,x);
}),ps__3962);
});
var epn__3999 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3916_SHARP_){
var and__3546__auto____3963 = p1__3916_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3963))
{return p1__3916_SHARP_.call(null,y);
} else
{return and__3546__auto____3963;
}
}),ps__3962);
});
var epn__4000 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3917_SHARP_){
var and__3546__auto____3964 = p1__3917_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3964))
{var and__3546__auto____3965 = p1__3917_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3965))
{return p1__3917_SHARP_.call(null,z);
} else
{return and__3546__auto____3965;
}
} else
{return and__3546__auto____3964;
}
}),ps__3962);
});
var epn__4001 = (function() { 
var G__4003__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3966 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3966))
{return cljs.core.every_QMARK_.call(null,(function (p1__3918_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3918_SHARP_,args);
}),ps__3962);
} else
{return and__3546__auto____3966;
}
})());
};
var G__4003 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4003__delegate.call(this, x, y, z, args);
};
G__4003.cljs$lang$maxFixedArity = 3;
G__4003.cljs$lang$applyTo = (function (arglist__4004){
var x = cljs.core.first(arglist__4004);
var y = cljs.core.first(cljs.core.next(arglist__4004));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4004)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4004)));
return G__4003__delegate.call(this, x, y, z, args);
});
return G__4003;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3997.call(this);
case  1 :
return epn__3998.call(this,x);
case  2 :
return epn__3999.call(this,x,y);
case  3 :
return epn__4000.call(this,x,y,z);
default:
return epn__4001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4001.cljs$lang$applyTo;
return epn;
})()
};
var G__3996 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3996__delegate.call(this, p1, p2, p3, ps);
};
G__3996.cljs$lang$maxFixedArity = 3;
G__3996.cljs$lang$applyTo = (function (arglist__4005){
var p1 = cljs.core.first(arglist__4005);
var p2 = cljs.core.first(cljs.core.next(arglist__4005));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4005)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4005)));
return G__3996__delegate.call(this, p1, p2, p3, ps);
});
return G__3996;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3967.call(this,p1);
case  2 :
return every_pred__3968.call(this,p1,p2);
case  3 :
return every_pred__3969.call(this,p1,p2,p3);
default:
return every_pred__3970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3970.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__4045 = (function (p){
return (function() {
var sp1 = null;
var sp1__4050 = (function (){
return null;
});
var sp1__4051 = (function (x){
return p.call(null,x);
});
var sp1__4052 = (function (x,y){
var or__3548__auto____4007 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4007))
{return or__3548__auto____4007;
} else
{return p.call(null,y);
}
});
var sp1__4053 = (function (x,y,z){
var or__3548__auto____4008 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4008))
{return or__3548__auto____4008;
} else
{var or__3548__auto____4009 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____4009))
{return or__3548__auto____4009;
} else
{return p.call(null,z);
}
}
});
var sp1__4054 = (function() { 
var G__4056__delegate = function (x,y,z,args){
var or__3548__auto____4010 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4010))
{return or__3548__auto____4010;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4056 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4056__delegate.call(this, x, y, z, args);
};
G__4056.cljs$lang$maxFixedArity = 3;
G__4056.cljs$lang$applyTo = (function (arglist__4057){
var x = cljs.core.first(arglist__4057);
var y = cljs.core.first(cljs.core.next(arglist__4057));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4057)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4057)));
return G__4056__delegate.call(this, x, y, z, args);
});
return G__4056;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4050.call(this);
case  1 :
return sp1__4051.call(this,x);
case  2 :
return sp1__4052.call(this,x,y);
case  3 :
return sp1__4053.call(this,x,y,z);
default:
return sp1__4054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4054.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4046 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4058 = (function (){
return null;
});
var sp2__4059 = (function (x){
var or__3548__auto____4011 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4011))
{return or__3548__auto____4011;
} else
{return p2.call(null,x);
}
});
var sp2__4060 = (function (x,y){
var or__3548__auto____4012 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4012))
{return or__3548__auto____4012;
} else
{var or__3548__auto____4013 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4013))
{return or__3548__auto____4013;
} else
{var or__3548__auto____4014 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4014))
{return or__3548__auto____4014;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4061 = (function (x,y,z){
var or__3548__auto____4015 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4015))
{return or__3548__auto____4015;
} else
{var or__3548__auto____4016 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4016))
{return or__3548__auto____4016;
} else
{var or__3548__auto____4017 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4017))
{return or__3548__auto____4017;
} else
{var or__3548__auto____4018 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4018))
{return or__3548__auto____4018;
} else
{var or__3548__auto____4019 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4019))
{return or__3548__auto____4019;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4062 = (function() { 
var G__4064__delegate = function (x,y,z,args){
var or__3548__auto____4020 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4020))
{return or__3548__auto____4020;
} else
{return cljs.core.some.call(null,(function (p1__3923_SHARP_){
var or__3548__auto____4021 = p1.call(null,p1__3923_SHARP_);

if(cljs.core.truth_(or__3548__auto____4021))
{return or__3548__auto____4021;
} else
{return p2.call(null,p1__3923_SHARP_);
}
}),args);
}
};
var G__4064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4064__delegate.call(this, x, y, z, args);
};
G__4064.cljs$lang$maxFixedArity = 3;
G__4064.cljs$lang$applyTo = (function (arglist__4065){
var x = cljs.core.first(arglist__4065);
var y = cljs.core.first(cljs.core.next(arglist__4065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4065)));
return G__4064__delegate.call(this, x, y, z, args);
});
return G__4064;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4058.call(this);
case  1 :
return sp2__4059.call(this,x);
case  2 :
return sp2__4060.call(this,x,y);
case  3 :
return sp2__4061.call(this,x,y,z);
default:
return sp2__4062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4062.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4047 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4066 = (function (){
return null;
});
var sp3__4067 = (function (x){
var or__3548__auto____4022 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4022))
{return or__3548__auto____4022;
} else
{var or__3548__auto____4023 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4023))
{return or__3548__auto____4023;
} else
{return p3.call(null,x);
}
}
});
var sp3__4068 = (function (x,y){
var or__3548__auto____4024 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4024))
{return or__3548__auto____4024;
} else
{var or__3548__auto____4025 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4025))
{return or__3548__auto____4025;
} else
{var or__3548__auto____4026 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4026))
{return or__3548__auto____4026;
} else
{var or__3548__auto____4027 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4027))
{return or__3548__auto____4027;
} else
{var or__3548__auto____4028 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4028))
{return or__3548__auto____4028;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4069 = (function (x,y,z){
var or__3548__auto____4029 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4029))
{return or__3548__auto____4029;
} else
{var or__3548__auto____4030 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4030))
{return or__3548__auto____4030;
} else
{var or__3548__auto____4031 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4031))
{return or__3548__auto____4031;
} else
{var or__3548__auto____4032 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4032))
{return or__3548__auto____4032;
} else
{var or__3548__auto____4033 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4033))
{return or__3548__auto____4033;
} else
{var or__3548__auto____4034 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____4034))
{return or__3548__auto____4034;
} else
{var or__3548__auto____4035 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4035))
{return or__3548__auto____4035;
} else
{var or__3548__auto____4036 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____4036))
{return or__3548__auto____4036;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4070 = (function() { 
var G__4072__delegate = function (x,y,z,args){
var or__3548__auto____4037 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4037))
{return or__3548__auto____4037;
} else
{return cljs.core.some.call(null,(function (p1__3924_SHARP_){
var or__3548__auto____4038 = p1.call(null,p1__3924_SHARP_);

if(cljs.core.truth_(or__3548__auto____4038))
{return or__3548__auto____4038;
} else
{var or__3548__auto____4039 = p2.call(null,p1__3924_SHARP_);

if(cljs.core.truth_(or__3548__auto____4039))
{return or__3548__auto____4039;
} else
{return p3.call(null,p1__3924_SHARP_);
}
}
}),args);
}
};
var G__4072 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4072__delegate.call(this, x, y, z, args);
};
G__4072.cljs$lang$maxFixedArity = 3;
G__4072.cljs$lang$applyTo = (function (arglist__4073){
var x = cljs.core.first(arglist__4073);
var y = cljs.core.first(cljs.core.next(arglist__4073));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4073)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4073)));
return G__4072__delegate.call(this, x, y, z, args);
});
return G__4072;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4066.call(this);
case  1 :
return sp3__4067.call(this,x);
case  2 :
return sp3__4068.call(this,x,y);
case  3 :
return sp3__4069.call(this,x,y,z);
default:
return sp3__4070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4070.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4048 = (function() { 
var G__4074__delegate = function (p1,p2,p3,ps){
var ps__4040 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4075 = (function (){
return null;
});
var spn__4076 = (function (x){
return cljs.core.some.call(null,(function (p1__3925_SHARP_){
return p1__3925_SHARP_.call(null,x);
}),ps__4040);
});
var spn__4077 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3926_SHARP_){
var or__3548__auto____4041 = p1__3926_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4041))
{return or__3548__auto____4041;
} else
{return p1__3926_SHARP_.call(null,y);
}
}),ps__4040);
});
var spn__4078 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3927_SHARP_){
var or__3548__auto____4042 = p1__3927_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4042))
{return or__3548__auto____4042;
} else
{var or__3548__auto____4043 = p1__3927_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4043))
{return or__3548__auto____4043;
} else
{return p1__3927_SHARP_.call(null,z);
}
}
}),ps__4040);
});
var spn__4079 = (function() { 
var G__4081__delegate = function (x,y,z,args){
var or__3548__auto____4044 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4044))
{return or__3548__auto____4044;
} else
{return cljs.core.some.call(null,(function (p1__3928_SHARP_){
return cljs.core.some.call(null,p1__3928_SHARP_,args);
}),ps__4040);
}
};
var G__4081 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4081__delegate.call(this, x, y, z, args);
};
G__4081.cljs$lang$maxFixedArity = 3;
G__4081.cljs$lang$applyTo = (function (arglist__4082){
var x = cljs.core.first(arglist__4082);
var y = cljs.core.first(cljs.core.next(arglist__4082));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4082)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4082)));
return G__4081__delegate.call(this, x, y, z, args);
});
return G__4081;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4075.call(this);
case  1 :
return spn__4076.call(this,x);
case  2 :
return spn__4077.call(this,x,y);
case  3 :
return spn__4078.call(this,x,y,z);
default:
return spn__4079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4079.cljs$lang$applyTo;
return spn;
})()
};
var G__4074 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4074__delegate.call(this, p1, p2, p3, ps);
};
G__4074.cljs$lang$maxFixedArity = 3;
G__4074.cljs$lang$applyTo = (function (arglist__4083){
var p1 = cljs.core.first(arglist__4083);
var p2 = cljs.core.first(cljs.core.next(arglist__4083));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4083)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4083)));
return G__4074__delegate.call(this, p1, p2, p3, ps);
});
return G__4074;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4045.call(this,p1);
case  2 :
return some_fn__4046.call(this,p1,p2);
case  3 :
return some_fn__4047.call(this,p1,p2,p3);
default:
return some_fn__4048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4048.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__4096 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4084 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4084))
{var s__4085 = temp__3698__auto____4084;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4085)),map.call(null,f,cljs.core.rest.call(null,s__4085)));
} else
{return null;
}
})));
});
var map__4097 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4086 = cljs.core.seq.call(null,c1);
var s2__4087 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4088 = s1__4086;

if(cljs.core.truth_(and__3546__auto____4088))
{return s2__4087;
} else
{return and__3546__auto____4088;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4086),cljs.core.first.call(null,s2__4087)),map.call(null,f,cljs.core.rest.call(null,s1__4086),cljs.core.rest.call(null,s2__4087)));
} else
{return null;
}
})));
});
var map__4098 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4089 = cljs.core.seq.call(null,c1);
var s2__4090 = cljs.core.seq.call(null,c2);
var s3__4091 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4092 = s1__4089;

if(cljs.core.truth_(and__3546__auto____4092))
{var and__3546__auto____4093 = s2__4090;

if(cljs.core.truth_(and__3546__auto____4093))
{return s3__4091;
} else
{return and__3546__auto____4093;
}
} else
{return and__3546__auto____4092;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4089),cljs.core.first.call(null,s2__4090),cljs.core.first.call(null,s3__4091)),map.call(null,f,cljs.core.rest.call(null,s1__4089),cljs.core.rest.call(null,s2__4090),cljs.core.rest.call(null,s3__4091)));
} else
{return null;
}
})));
});
var map__4099 = (function() { 
var G__4101__delegate = function (f,c1,c2,c3,colls){
var step__4095 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4094 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4094)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4094),step.call(null,map.call(null,cljs.core.rest,ss__4094)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4006_SHARP_){
return cljs.core.apply.call(null,f,p1__4006_SHARP_);
}),step__4095.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4101 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4101__delegate.call(this, f, c1, c2, c3, colls);
};
G__4101.cljs$lang$maxFixedArity = 4;
G__4101.cljs$lang$applyTo = (function (arglist__4102){
var f = cljs.core.first(arglist__4102);
var c1 = cljs.core.first(cljs.core.next(arglist__4102));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4102)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4102))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4102))));
return G__4101__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4101;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4096.call(this,f,c1);
case  3 :
return map__4097.call(this,f,c1,c2);
case  4 :
return map__4098.call(this,f,c1,c2,c3);
default:
return map__4099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4099.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____4103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4103))
{var s__4104 = temp__3698__auto____4103;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4104),take.call(null,(n - 1),cljs.core.rest.call(null,s__4104)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__4107 = (function (n,coll){
while(true){
var s__4105 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4106 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4106))
{return s__4105;
} else
{return and__3546__auto____4106;
}
})()))
{{
var G__4108 = (n - 1);
var G__4109 = cljs.core.rest.call(null,s__4105);
n = G__4108;
coll = G__4109;
continue;
}
} else
{return s__4105;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4107.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4110 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4111 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4110.call(this,n);
case  2 :
return drop_last__4111.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4113 = cljs.core.seq.call(null,coll);
var lead__4114 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4114))
{{
var G__4115 = cljs.core.next.call(null,s__4113);
var G__4116 = cljs.core.next.call(null,lead__4114);
s__4113 = G__4115;
lead__4114 = G__4116;
continue;
}
} else
{return s__4113;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4119 = (function (pred,coll){
while(true){
var s__4117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4118 = s__4117;

if(cljs.core.truth_(and__3546__auto____4118))
{return pred.call(null,cljs.core.first.call(null,s__4117));
} else
{return and__3546__auto____4118;
}
})()))
{{
var G__4120 = pred;
var G__4121 = cljs.core.rest.call(null,s__4117);
pred = G__4120;
coll = G__4121;
continue;
}
} else
{return s__4117;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4119.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4122))
{var s__4123 = temp__3698__auto____4122;

return cljs.core.concat.call(null,s__4123,cycle.call(null,s__4123));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4124 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4125 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4124.call(this,n);
case  2 :
return repeat__4125.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__4127 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4128 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4127.call(this,n);
case  2 :
return repeatedly__4128.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__4134 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4130 = cljs.core.seq.call(null,c1);
var s2__4131 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4132 = s1__4130;

if(cljs.core.truth_(and__3546__auto____4132))
{return s2__4131;
} else
{return and__3546__auto____4132;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4130),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4131),interleave.call(null,cljs.core.rest.call(null,s1__4130),cljs.core.rest.call(null,s2__4131))));
} else
{return null;
}
})));
});
var interleave__4135 = (function() { 
var G__4137__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4133 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4133)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4133),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4133)));
} else
{return null;
}
})));
};
var G__4137 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4137__delegate.call(this, c1, c2, colls);
};
G__4137.cljs$lang$maxFixedArity = 2;
G__4137.cljs$lang$applyTo = (function (arglist__4138){
var c1 = cljs.core.first(arglist__4138);
var c2 = cljs.core.first(cljs.core.next(arglist__4138));
var colls = cljs.core.rest(cljs.core.next(arglist__4138));
return G__4137__delegate.call(this, c1, c2, colls);
});
return G__4137;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4134.call(this,c1,c2);
default:
return interleave__4135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4135.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__4141 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4139))
{var coll__4140 = temp__3695__auto____4139;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4140),cat.call(null,cljs.core.rest.call(null,coll__4140),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4141.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4142 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4143 = (function() { 
var G__4145__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4145 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4145__delegate.call(this, f, coll, colls);
};
G__4145.cljs$lang$maxFixedArity = 2;
G__4145.cljs$lang$applyTo = (function (arglist__4146){
var f = cljs.core.first(arglist__4146);
var coll = cljs.core.first(cljs.core.next(arglist__4146));
var colls = cljs.core.rest(cljs.core.next(arglist__4146));
return G__4145__delegate.call(this, f, coll, colls);
});
return G__4145;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4142.call(this,f,coll);
default:
return mapcat__4143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4143.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4147))
{var s__4148 = temp__3698__auto____4147;

var f__4149 = cljs.core.first.call(null,s__4148);
var r__4150 = cljs.core.rest.call(null,s__4148);

if(cljs.core.truth_(pred.call(null,f__4149)))
{return cljs.core.cons.call(null,f__4149,filter.call(null,pred,r__4150));
} else
{return filter.call(null,pred,r__4150);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__4152 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4152.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4151_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4151_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__4159 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4160 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4153 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4153))
{var s__4154 = temp__3698__auto____4153;

var p__4155 = cljs.core.take.call(null,n,s__4154);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4155))))
{return cljs.core.cons.call(null,p__4155,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4154)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4161 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4156))
{var s__4157 = temp__3698__auto____4156;

var p__4158 = cljs.core.take.call(null,n,s__4157);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4158))))
{return cljs.core.cons.call(null,p__4158,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4157)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4158,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4159.call(this,n,step);
case  3 :
return partition__4160.call(this,n,step,pad);
case  4 :
return partition__4161.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__4167 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4168 = (function (m,ks,not_found){
var sentinel__4163 = cljs.core.lookup_sentinel;
var m__4164 = m;
var ks__4165 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4165))
{var m__4166 = cljs.core.get.call(null,m__4164,cljs.core.first.call(null,ks__4165),sentinel__4163);

if(cljs.core.truth_((sentinel__4163 === m__4166)))
{return not_found;
} else
{{
var G__4170 = sentinel__4163;
var G__4171 = m__4166;
var G__4172 = cljs.core.next.call(null,ks__4165);
sentinel__4163 = G__4170;
m__4164 = G__4171;
ks__4165 = G__4172;
continue;
}
}
} else
{return m__4164;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4167.call(this,m,ks);
case  3 :
return get_in__4168.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4173,v){
var vec__4174__4175 = p__4173;
var k__4176 = cljs.core.nth.call(null,vec__4174__4175,0,null);
var ks__4177 = cljs.core.nthnext.call(null,vec__4174__4175,1);

if(cljs.core.truth_(ks__4177))
{return cljs.core.assoc.call(null,m,k__4176,assoc_in.call(null,cljs.core.get.call(null,m,k__4176),ks__4177,v));
} else
{return cljs.core.assoc.call(null,m,k__4176,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4178,f,args){
var vec__4179__4180 = p__4178;
var k__4181 = cljs.core.nth.call(null,vec__4179__4180,0,null);
var ks__4182 = cljs.core.nthnext.call(null,vec__4179__4180,1);

if(cljs.core.truth_(ks__4182))
{return cljs.core.assoc.call(null,m,k__4181,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4181),ks__4182,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4181,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4181),args));
}
};
var update_in = function (m,p__4178,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4178, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4183){
var m = cljs.core.first(arglist__4183);
var p__4178 = cljs.core.first(cljs.core.next(arglist__4183));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4183)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4183)));
return update_in__delegate.call(this, m, p__4178, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4184 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4217 = null;
var G__4217__4218 = (function (coll,k){
var this__4185 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4217__4219 = (function (coll,k,not_found){
var this__4186 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4217 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4217__4218.call(this,coll,k);
case  3 :
return G__4217__4219.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4217;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4187 = this;
var new_array__4188 = cljs.core.aclone.call(null,this__4187.array);

(new_array__4188[k] = v);
return (new cljs.core.Vector(this__4187.meta,new_array__4188));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4221 = null;
var G__4221__4222 = (function (tsym4189,k){
var this__4191 = this;
var tsym4189__4192 = this;

var coll__4193 = tsym4189__4192;

return cljs.core._lookup.call(null,coll__4193,k);
});
var G__4221__4223 = (function (tsym4190,k,not_found){
var this__4194 = this;
var tsym4190__4195 = this;

var coll__4196 = tsym4190__4195;

return cljs.core._lookup.call(null,coll__4196,k,not_found);
});
G__4221 = function(tsym4190,k,not_found){
switch(arguments.length){
case  2 :
return G__4221__4222.call(this,tsym4190,k);
case  3 :
return G__4221__4223.call(this,tsym4190,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4221;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4197 = this;
var new_array__4198 = cljs.core.aclone.call(null,this__4197.array);

new_array__4198.push(o);
return (new cljs.core.Vector(this__4197.meta,new_array__4198));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4225 = null;
var G__4225__4226 = (function (v,f){
var this__4199 = this;
return cljs.core.ci_reduce.call(null,this__4199.array,f);
});
var G__4225__4227 = (function (v,f,start){
var this__4200 = this;
return cljs.core.ci_reduce.call(null,this__4200.array,f,start);
});
G__4225 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4225__4226.call(this,v,f);
case  3 :
return G__4225__4227.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4225;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4201 = this;
if(cljs.core.truth_((this__4201.array.length > 0)))
{var vector_seq__4202 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4201.array.length)))
{return cljs.core.cons.call(null,(this__4201.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4202.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4203 = this;
return this__4203.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4204 = this;
var count__4205 = this__4204.array.length;

if(cljs.core.truth_((count__4205 > 0)))
{return (this__4204.array[(count__4205 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4206 = this;
if(cljs.core.truth_((this__4206.array.length > 0)))
{var new_array__4207 = cljs.core.aclone.call(null,this__4206.array);

new_array__4207.pop();
return (new cljs.core.Vector(this__4206.meta,new_array__4207));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4208 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4209 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4210 = this;
return (new cljs.core.Vector(meta,this__4210.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4211 = this;
return this__4211.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4229 = null;
var G__4229__4230 = (function (coll,n){
var this__4212 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4213 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4213))
{return (n < this__4212.array.length);
} else
{return and__3546__auto____4213;
}
})()))
{return (this__4212.array[n]);
} else
{return null;
}
});
var G__4229__4231 = (function (coll,n,not_found){
var this__4214 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4215 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4215))
{return (n < this__4214.array.length);
} else
{return and__3546__auto____4215;
}
})()))
{return (this__4214.array[n]);
} else
{return not_found;
}
});
G__4229 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4229__4230.call(this,coll,n);
case  3 :
return G__4229__4231.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4229;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4216 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4216.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__4233 = pv.cnt;

if(cljs.core.truth_((cnt__4233 < 32)))
{return 0;
} else
{return (((cnt__4233 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__4234 = level;
var ret__4235 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__4234)))
{return ret__4235;
} else
{var embed__4236 = ret__4235;
var r__4237 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___4238 = (r__4237[0] = embed__4236);

{
var G__4239 = (ll__4234 - 5);
var G__4240 = r__4237;
ll__4234 = G__4239;
ret__4235 = G__4240;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__4241 = cljs.core.aclone.call(null,parent);
var subidx__4242 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__4241[subidx__4242] = tailnode);
return ret__4241;
} else
{var temp__3695__auto____4243 = (parent[subidx__4242]);

if(cljs.core.truth_(temp__3695__auto____4243))
{var child__4244 = temp__3695__auto____4243;

var node_to_insert__4245 = push_tail.call(null,pv,(level - 5),child__4244,tailnode);
var ___4246 = (ret__4241[subidx__4242] = node_to_insert__4245);

return ret__4241;
} else
{var node_to_insert__4247 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___4248 = (ret__4241[subidx__4242] = node_to_insert__4247);

return ret__4241;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____4249 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____4249))
{return (i < pv.cnt);
} else
{return and__3546__auto____4249;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__4250 = pv.root;
var level__4251 = pv.shift;

while(true){
if(cljs.core.truth_((level__4251 > 0)))
{{
var G__4252 = (node__4250[((i >> level__4251) & 31)]);
var G__4253 = (level__4251 - 5);
node__4250 = G__4252;
level__4251 = G__4253;
continue;
}
} else
{return node__4250;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__4254 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__4254[(i & 31)] = val);
return ret__4254;
} else
{var subidx__4255 = ((i >> level) & 31);
var ___4256 = (ret__4254[subidx__4255] = do_assoc.call(null,pv,(level - 5),(node[subidx__4255]),i,val));

return ret__4254;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__4257 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__4258 = pop_tail.call(null,pv,(level - 5),(node[subidx__4257]));

if(cljs.core.truth_((function (){var and__3546__auto____4259 = (new_child__4258 === null);

if(cljs.core.truth_(and__3546__auto____4259))
{return (subidx__4257 === 0);
} else
{return and__3546__auto____4259;
}
})()))
{return null;
} else
{var ret__4260 = cljs.core.aclone.call(null,node);
var ___4261 = (ret__4260[subidx__4257] = new_child__4258);

return ret__4260;
}
} else
{if(cljs.core.truth_((subidx__4257 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__4262 = cljs.core.aclone.call(null,node);
var ___4263 = (ret__4262[subidx__4257] = null);

return ret__4262;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4264 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4304 = null;
var G__4304__4305 = (function (coll,k){
var this__4265 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4304__4306 = (function (coll,k,not_found){
var this__4266 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4304 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4304__4305.call(this,coll,k);
case  3 :
return G__4304__4306.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4304;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4267 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4268 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____4268))
{return (k < this__4267.cnt);
} else
{return and__3546__auto____4268;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__4269 = cljs.core.aclone.call(null,this__4267.tail);

(new_tail__4269[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__4267.meta,this__4267.cnt,this__4267.shift,this__4267.root,new_tail__4269));
} else
{return (new cljs.core.PersistentVector(this__4267.meta,this__4267.cnt,this__4267.shift,cljs.core.do_assoc.call(null,coll,this__4267.shift,this__4267.root,k,v),this__4267.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__4267.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__4267.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__4308 = null;
var G__4308__4309 = (function (tsym4270,k){
var this__4272 = this;
var tsym4270__4273 = this;

var coll__4274 = tsym4270__4273;

return cljs.core._lookup.call(null,coll__4274,k);
});
var G__4308__4310 = (function (tsym4271,k,not_found){
var this__4275 = this;
var tsym4271__4276 = this;

var coll__4277 = tsym4271__4276;

return cljs.core._lookup.call(null,coll__4277,k,not_found);
});
G__4308 = function(tsym4271,k,not_found){
switch(arguments.length){
case  2 :
return G__4308__4309.call(this,tsym4271,k);
case  3 :
return G__4308__4310.call(this,tsym4271,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4308;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4278 = this;
if(cljs.core.truth_(((this__4278.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__4279 = cljs.core.aclone.call(null,this__4278.tail);

new_tail__4279.push(o);
return (new cljs.core.PersistentVector(this__4278.meta,(this__4278.cnt + 1),this__4278.shift,this__4278.root,new_tail__4279));
} else
{var root_overflow_QMARK___4280 = ((this__4278.cnt >> 5) > (1 << this__4278.shift));
var new_shift__4281 = (cljs.core.truth_(root_overflow_QMARK___4280)?(this__4278.shift + 5):this__4278.shift);
var new_root__4283 = (cljs.core.truth_(root_overflow_QMARK___4280)?(function (){var n_r__4282 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__4282[0] = this__4278.root);
(n_r__4282[1] = cljs.core.new_path.call(null,this__4278.shift,this__4278.tail));
return n_r__4282;
})():cljs.core.push_tail.call(null,coll,this__4278.shift,this__4278.root,this__4278.tail));

return (new cljs.core.PersistentVector(this__4278.meta,(this__4278.cnt + 1),new_shift__4281,new_root__4283,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4312 = null;
var G__4312__4313 = (function (v,f){
var this__4284 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__4312__4314 = (function (v,f,start){
var this__4285 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__4312 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4312__4313.call(this,v,f);
case  3 :
return G__4312__4314.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4312;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4286 = this;
if(cljs.core.truth_((this__4286.cnt > 0)))
{var vector_seq__4287 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4286.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4287.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4288 = this;
return this__4288.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4289 = this;
if(cljs.core.truth_((this__4289.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__4289.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4290 = this;
if(cljs.core.truth_((this__4290.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__4290.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4290.meta);
} else
{if(cljs.core.truth_((1 < (this__4290.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__4290.meta,(this__4290.cnt - 1),this__4290.shift,this__4290.root,cljs.core.aclone.call(null,this__4290.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__4291 = cljs.core.array_for.call(null,coll,(this__4290.cnt - 2));
var nr__4292 = cljs.core.pop_tail.call(null,this__4290.shift,this__4290.root);
var new_root__4293 = (cljs.core.truth_((nr__4292 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__4292);
var cnt_1__4294 = (this__4290.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____4295 = (5 < this__4290.shift);

if(cljs.core.truth_(and__3546__auto____4295))
{return ((new_root__4293[1]) === null);
} else
{return and__3546__auto____4295;
}
})()))
{return (new cljs.core.PersistentVector(this__4290.meta,cnt_1__4294,(this__4290.shift - 5),(new_root__4293[0]),new_tail__4291));
} else
{return (new cljs.core.PersistentVector(this__4290.meta,cnt_1__4294,this__4290.shift,new_root__4293,new_tail__4291));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4296 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4297 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4298 = this;
return (new cljs.core.PersistentVector(meta,this__4298.cnt,this__4298.shift,this__4298.root,this__4298.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4299 = this;
return this__4299.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4316 = null;
var G__4316__4317 = (function (coll,n){
var this__4300 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__4316__4318 = (function (coll,n,not_found){
var this__4301 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4302 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4302))
{return (n < this__4301.cnt);
} else
{return and__3546__auto____4302;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__4316 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4316__4317.call(this,coll,n);
case  3 :
return G__4316__4318.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4316;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4303 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4303.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4320){
var args = cljs.core.seq( arglist__4320 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4321 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4349 = null;
var G__4349__4350 = (function (coll,k){
var this__4322 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4349__4351 = (function (coll,k,not_found){
var this__4323 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4349 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4349__4350.call(this,coll,k);
case  3 :
return G__4349__4351.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4349;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4324 = this;
var v_pos__4325 = (this__4324.start + key);

return (new cljs.core.Subvec(this__4324.meta,cljs.core._assoc.call(null,this__4324.v,v_pos__4325,val),this__4324.start,((this__4324.end > (v_pos__4325 + 1)) ? this__4324.end : (v_pos__4325 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4353 = null;
var G__4353__4354 = (function (tsym4326,k){
var this__4328 = this;
var tsym4326__4329 = this;

var coll__4330 = tsym4326__4329;

return cljs.core._lookup.call(null,coll__4330,k);
});
var G__4353__4355 = (function (tsym4327,k,not_found){
var this__4331 = this;
var tsym4327__4332 = this;

var coll__4333 = tsym4327__4332;

return cljs.core._lookup.call(null,coll__4333,k,not_found);
});
G__4353 = function(tsym4327,k,not_found){
switch(arguments.length){
case  2 :
return G__4353__4354.call(this,tsym4327,k);
case  3 :
return G__4353__4355.call(this,tsym4327,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4353;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4334 = this;
return (new cljs.core.Subvec(this__4334.meta,cljs.core._assoc_n.call(null,this__4334.v,this__4334.end,o),this__4334.start,(this__4334.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4357 = null;
var G__4357__4358 = (function (coll,f){
var this__4335 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4357__4359 = (function (coll,f,start){
var this__4336 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4357 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4357__4358.call(this,coll,f);
case  3 :
return G__4357__4359.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4357;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4337 = this;
var subvec_seq__4338 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4337.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4337.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4338.call(null,this__4337.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4339 = this;
return (this__4339.end - this__4339.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4340 = this;
return cljs.core._nth.call(null,this__4340.v,(this__4340.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4341 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4341.start,this__4341.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4341.meta,this__4341.v,this__4341.start,(this__4341.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4342 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4343 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4344 = this;
return (new cljs.core.Subvec(meta,this__4344.v,this__4344.start,this__4344.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4345 = this;
return this__4345.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4361 = null;
var G__4361__4362 = (function (coll,n){
var this__4346 = this;
return cljs.core._nth.call(null,this__4346.v,(this__4346.start + n));
});
var G__4361__4363 = (function (coll,n,not_found){
var this__4347 = this;
return cljs.core._nth.call(null,this__4347.v,(this__4347.start + n),not_found);
});
G__4361 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4361__4362.call(this,coll,n);
case  3 :
return G__4361__4363.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4361;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4348 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4348.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__4365 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4366 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4365.call(this,v,start);
case  3 :
return subvec__4366.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4368 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4369 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4370 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4371 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4371.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4372 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4373 = this;
return cljs.core._first.call(null,this__4373.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4374 = this;
var temp__3695__auto____4375 = cljs.core.next.call(null,this__4374.front);

if(cljs.core.truth_(temp__3695__auto____4375))
{var f1__4376 = temp__3695__auto____4375;

return (new cljs.core.PersistentQueueSeq(this__4374.meta,f1__4376,this__4374.rear));
} else
{if(cljs.core.truth_((this__4374.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4374.meta,this__4374.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4377 = this;
return this__4377.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4378 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4378.front,this__4378.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4379 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4380 = this;
if(cljs.core.truth_(this__4380.front))
{return (new cljs.core.PersistentQueue(this__4380.meta,(this__4380.count + 1),this__4380.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4381 = this__4380.rear;

if(cljs.core.truth_(or__3548__auto____4381))
{return or__3548__auto____4381;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4380.meta,(this__4380.count + 1),cljs.core.conj.call(null,this__4380.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4382 = this;
var rear__4383 = cljs.core.seq.call(null,this__4382.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4384 = this__4382.front;

if(cljs.core.truth_(or__3548__auto____4384))
{return or__3548__auto____4384;
} else
{return rear__4383;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4382.front,cljs.core.seq.call(null,rear__4383)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4385 = this;
return this__4385.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4386 = this;
return cljs.core._first.call(null,this__4386.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4387 = this;
if(cljs.core.truth_(this__4387.front))
{var temp__3695__auto____4388 = cljs.core.next.call(null,this__4387.front);

if(cljs.core.truth_(temp__3695__auto____4388))
{var f1__4389 = temp__3695__auto____4388;

return (new cljs.core.PersistentQueue(this__4387.meta,(this__4387.count - 1),f1__4389,this__4387.rear));
} else
{return (new cljs.core.PersistentQueue(this__4387.meta,(this__4387.count - 1),cljs.core.seq.call(null,this__4387.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4390 = this;
return cljs.core.first.call(null,this__4390.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4391 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4392 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4393 = this;
return (new cljs.core.PersistentQueue(meta,this__4393.count,this__4393.front,this__4393.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4394 = this;
return this__4394.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4395 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4396 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4397 = array.length;

var i__4398 = 0;

while(true){
if(cljs.core.truth_((i__4398 < len__4397)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4398]))))
{return i__4398;
} else
{{
var G__4399 = (i__4398 + incr);
i__4398 = G__4399;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4401 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4402 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4400 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4400))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4400;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4401.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4402.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4405 = cljs.core.hash.call(null,a);
var b__4406 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4405 < b__4406)))
{return -1;
} else
{if(cljs.core.truth_((a__4405 > b__4406)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4407 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4434 = null;
var G__4434__4435 = (function (coll,k){
var this__4408 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4434__4436 = (function (coll,k,not_found){
var this__4409 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4409.strobj,(this__4409.strobj[k]),not_found);
});
G__4434 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4434__4435.call(this,coll,k);
case  3 :
return G__4434__4436.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4434;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4410 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4411 = goog.object.clone.call(null,this__4410.strobj);
var overwrite_QMARK___4412 = new_strobj__4411.hasOwnProperty(k);

(new_strobj__4411[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4412))
{return (new cljs.core.ObjMap(this__4410.meta,this__4410.keys,new_strobj__4411));
} else
{var new_keys__4413 = cljs.core.aclone.call(null,this__4410.keys);

new_keys__4413.push(k);
return (new cljs.core.ObjMap(this__4410.meta,new_keys__4413,new_strobj__4411));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4410.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4414 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4414.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4438 = null;
var G__4438__4439 = (function (tsym4415,k){
var this__4417 = this;
var tsym4415__4418 = this;

var coll__4419 = tsym4415__4418;

return cljs.core._lookup.call(null,coll__4419,k);
});
var G__4438__4440 = (function (tsym4416,k,not_found){
var this__4420 = this;
var tsym4416__4421 = this;

var coll__4422 = tsym4416__4421;

return cljs.core._lookup.call(null,coll__4422,k,not_found);
});
G__4438 = function(tsym4416,k,not_found){
switch(arguments.length){
case  2 :
return G__4438__4439.call(this,tsym4416,k);
case  3 :
return G__4438__4440.call(this,tsym4416,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4438;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4423 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4424 = this;
if(cljs.core.truth_((this__4424.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4404_SHARP_){
return cljs.core.vector.call(null,p1__4404_SHARP_,(this__4424.strobj[p1__4404_SHARP_]));
}),this__4424.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4425 = this;
return this__4425.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4426 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4427 = this;
return (new cljs.core.ObjMap(meta,this__4427.keys,this__4427.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4428 = this;
return this__4428.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4429 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4429.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4430 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4431 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4431))
{return this__4430.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4431;
}
})()))
{var new_keys__4432 = cljs.core.aclone.call(null,this__4430.keys);
var new_strobj__4433 = goog.object.clone.call(null,this__4430.strobj);

new_keys__4432.splice(cljs.core.scan_array.call(null,1,k,new_keys__4432),1);
cljs.core.js_delete.call(null,new_strobj__4433,k);
return (new cljs.core.ObjMap(this__4430.meta,new_keys__4432,new_strobj__4433));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4443 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4481 = null;
var G__4481__4482 = (function (coll,k){
var this__4444 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4481__4483 = (function (coll,k,not_found){
var this__4445 = this;
var bucket__4446 = (this__4445.hashobj[cljs.core.hash.call(null,k)]);
var i__4447 = (cljs.core.truth_(bucket__4446)?cljs.core.scan_array.call(null,2,k,bucket__4446):null);

if(cljs.core.truth_(i__4447))
{return (bucket__4446[(i__4447 + 1)]);
} else
{return not_found;
}
});
G__4481 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4481__4482.call(this,coll,k);
case  3 :
return G__4481__4483.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4481;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4448 = this;
var h__4449 = cljs.core.hash.call(null,k);
var bucket__4450 = (this__4448.hashobj[h__4449]);

if(cljs.core.truth_(bucket__4450))
{var new_bucket__4451 = cljs.core.aclone.call(null,bucket__4450);
var new_hashobj__4452 = goog.object.clone.call(null,this__4448.hashobj);

(new_hashobj__4452[h__4449] = new_bucket__4451);
var temp__3695__auto____4453 = cljs.core.scan_array.call(null,2,k,new_bucket__4451);

if(cljs.core.truth_(temp__3695__auto____4453))
{var i__4454 = temp__3695__auto____4453;

(new_bucket__4451[(i__4454 + 1)] = v);
return (new cljs.core.HashMap(this__4448.meta,this__4448.count,new_hashobj__4452));
} else
{new_bucket__4451.push(k,v);
return (new cljs.core.HashMap(this__4448.meta,(this__4448.count + 1),new_hashobj__4452));
}
} else
{var new_hashobj__4455 = goog.object.clone.call(null,this__4448.hashobj);

(new_hashobj__4455[h__4449] = [k,v]);
return (new cljs.core.HashMap(this__4448.meta,(this__4448.count + 1),new_hashobj__4455));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4456 = this;
var bucket__4457 = (this__4456.hashobj[cljs.core.hash.call(null,k)]);
var i__4458 = (cljs.core.truth_(bucket__4457)?cljs.core.scan_array.call(null,2,k,bucket__4457):null);

if(cljs.core.truth_(i__4458))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4485 = null;
var G__4485__4486 = (function (tsym4459,k){
var this__4461 = this;
var tsym4459__4462 = this;

var coll__4463 = tsym4459__4462;

return cljs.core._lookup.call(null,coll__4463,k);
});
var G__4485__4487 = (function (tsym4460,k,not_found){
var this__4464 = this;
var tsym4460__4465 = this;

var coll__4466 = tsym4460__4465;

return cljs.core._lookup.call(null,coll__4466,k,not_found);
});
G__4485 = function(tsym4460,k,not_found){
switch(arguments.length){
case  2 :
return G__4485__4486.call(this,tsym4460,k);
case  3 :
return G__4485__4487.call(this,tsym4460,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4485;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4467 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4468 = this;
if(cljs.core.truth_((this__4468.count > 0)))
{var hashes__4469 = cljs.core.js_keys.call(null,this__4468.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4442_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4468.hashobj[p1__4442_SHARP_])));
}),hashes__4469);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4470 = this;
return this__4470.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4471 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4472 = this;
return (new cljs.core.HashMap(meta,this__4472.count,this__4472.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4473 = this;
return this__4473.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4474 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4474.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4475 = this;
var h__4476 = cljs.core.hash.call(null,k);
var bucket__4477 = (this__4475.hashobj[h__4476]);
var i__4478 = (cljs.core.truth_(bucket__4477)?cljs.core.scan_array.call(null,2,k,bucket__4477):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4478)))
{return coll;
} else
{var new_hashobj__4479 = goog.object.clone.call(null,this__4475.hashobj);

if(cljs.core.truth_((3 > bucket__4477.length)))
{cljs.core.js_delete.call(null,new_hashobj__4479,h__4476);
} else
{var new_bucket__4480 = cljs.core.aclone.call(null,bucket__4477);

new_bucket__4480.splice(i__4478,2);
(new_hashobj__4479[h__4476] = new_bucket__4480);
}
return (new cljs.core.HashMap(this__4475.meta,(this__4475.count - 1),new_hashobj__4479));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4489 = ks.length;

var i__4490 = 0;
var out__4491 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4490 < len__4489)))
{{
var G__4492 = (i__4490 + 1);
var G__4493 = cljs.core.assoc.call(null,out__4491,(ks[i__4490]),(vs[i__4490]));
i__4490 = G__4492;
out__4491 = G__4493;
continue;
}
} else
{return out__4491;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4494 = cljs.core.seq.call(null,keyvals);
var out__4495 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4494))
{{
var G__4496 = cljs.core.nnext.call(null,in$__4494);
var G__4497 = cljs.core.assoc.call(null,out__4495,cljs.core.first.call(null,in$__4494),cljs.core.second.call(null,in$__4494));
in$__4494 = G__4496;
out__4495 = G__4497;
continue;
}
} else
{return out__4495;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4498){
var keyvals = cljs.core.seq( arglist__4498 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4499_SHARP_,p2__4500_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4501 = p1__4499_SHARP_;

if(cljs.core.truth_(or__3548__auto____4501))
{return or__3548__auto____4501;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4500_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4502){
var maps = cljs.core.seq( arglist__4502 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4505 = (function (m,e){
var k__4503 = cljs.core.first.call(null,e);
var v__4504 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4503)))
{return cljs.core.assoc.call(null,m,k__4503,f.call(null,cljs.core.get.call(null,m,k__4503),v__4504));
} else
{return cljs.core.assoc.call(null,m,k__4503,v__4504);
}
});
var merge2__4507 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4505,(function (){var or__3548__auto____4506 = m1;

if(cljs.core.truth_(or__3548__auto____4506))
{return or__3548__auto____4506;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4507,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4508){
var f = cljs.core.first(arglist__4508);
var maps = cljs.core.rest(arglist__4508);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4510 = cljs.core.ObjMap.fromObject([],{});
var keys__4511 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4511))
{var key__4512 = cljs.core.first.call(null,keys__4511);
var entry__4513 = cljs.core.get.call(null,map,key__4512,"\uFDD0'user/not-found");

{
var G__4514 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4513,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4510,key__4512,entry__4513):ret__4510);
var G__4515 = cljs.core.next.call(null,keys__4511);
ret__4510 = G__4514;
keys__4511 = G__4515;
continue;
}
} else
{return ret__4510;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4516 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4537 = null;
var G__4537__4538 = (function (coll,v){
var this__4517 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4537__4539 = (function (coll,v,not_found){
var this__4518 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4518.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4537 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4537__4538.call(this,coll,v);
case  3 :
return G__4537__4539.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4537;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4541 = null;
var G__4541__4542 = (function (tsym4519,k){
var this__4521 = this;
var tsym4519__4522 = this;

var coll__4523 = tsym4519__4522;

return cljs.core._lookup.call(null,coll__4523,k);
});
var G__4541__4543 = (function (tsym4520,k,not_found){
var this__4524 = this;
var tsym4520__4525 = this;

var coll__4526 = tsym4520__4525;

return cljs.core._lookup.call(null,coll__4526,k,not_found);
});
G__4541 = function(tsym4520,k,not_found){
switch(arguments.length){
case  2 :
return G__4541__4542.call(this,tsym4520,k);
case  3 :
return G__4541__4543.call(this,tsym4520,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4541;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4527 = this;
return (new cljs.core.Set(this__4527.meta,cljs.core.assoc.call(null,this__4527.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4528 = this;
return cljs.core.keys.call(null,this__4528.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4529 = this;
return (new cljs.core.Set(this__4529.meta,cljs.core.dissoc.call(null,this__4529.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4530 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4531 = this;
var and__3546__auto____4532 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4532))
{var and__3546__auto____4533 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4533))
{return cljs.core.every_QMARK_.call(null,(function (p1__4509_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4509_SHARP_);
}),other);
} else
{return and__3546__auto____4533;
}
} else
{return and__3546__auto____4532;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4534 = this;
return (new cljs.core.Set(meta,this__4534.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4535 = this;
return this__4535.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4536 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4536.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4546 = cljs.core.seq.call(null,coll);
var out__4547 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4546))))
{{
var G__4548 = cljs.core.rest.call(null,in$__4546);
var G__4549 = cljs.core.conj.call(null,out__4547,cljs.core.first.call(null,in$__4546));
in$__4546 = G__4548;
out__4547 = G__4549;
continue;
}
} else
{return out__4547;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4550 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4551 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4551))
{var e__4552 = temp__3695__auto____4551;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4552));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4550,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4545_SHARP_){
var temp__3695__auto____4553 = cljs.core.find.call(null,smap,p1__4545_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4553))
{var e__4554 = temp__3695__auto____4553;

return cljs.core.second.call(null,e__4554);
} else
{return p1__4545_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4562 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4555,seen){
while(true){
var vec__4556__4557 = p__4555;
var f__4558 = cljs.core.nth.call(null,vec__4556__4557,0,null);
var xs__4559 = vec__4556__4557;

var temp__3698__auto____4560 = cljs.core.seq.call(null,xs__4559);

if(cljs.core.truth_(temp__3698__auto____4560))
{var s__4561 = temp__3698__auto____4560;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4558)))
{{
var G__4563 = cljs.core.rest.call(null,s__4561);
var G__4564 = seen;
p__4555 = G__4563;
seen = G__4564;
continue;
}
} else
{return cljs.core.cons.call(null,f__4558,step.call(null,cljs.core.rest.call(null,s__4561),cljs.core.conj.call(null,seen,f__4558)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4562.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4565 = cljs.core.PersistentVector.fromArray([]);
var s__4566 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4566)))
{{
var G__4567 = cljs.core.conj.call(null,ret__4565,cljs.core.first.call(null,s__4566));
var G__4568 = cljs.core.next.call(null,s__4566);
ret__4565 = G__4567;
s__4566 = G__4568;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4565);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4569 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4569))
{return or__3548__auto____4569;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4570 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4570 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4570 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4571 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4571))
{return or__3548__auto____4571;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4572 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4572 > -1)))
{return cljs.core.subs.call(null,x,2,i__4572);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4575 = cljs.core.ObjMap.fromObject([],{});
var ks__4576 = cljs.core.seq.call(null,keys);
var vs__4577 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4578 = ks__4576;

if(cljs.core.truth_(and__3546__auto____4578))
{return vs__4577;
} else
{return and__3546__auto____4578;
}
})()))
{{
var G__4579 = cljs.core.assoc.call(null,map__4575,cljs.core.first.call(null,ks__4576),cljs.core.first.call(null,vs__4577));
var G__4580 = cljs.core.next.call(null,ks__4576);
var G__4581 = cljs.core.next.call(null,vs__4577);
map__4575 = G__4579;
ks__4576 = G__4580;
vs__4577 = G__4581;
continue;
}
} else
{return map__4575;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4584 = (function (k,x){
return x;
});
var max_key__4585 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4586 = (function() { 
var G__4588__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4573_SHARP_,p2__4574_SHARP_){
return max_key.call(null,k,p1__4573_SHARP_,p2__4574_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4588 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4588__delegate.call(this, k, x, y, more);
};
G__4588.cljs$lang$maxFixedArity = 3;
G__4588.cljs$lang$applyTo = (function (arglist__4589){
var k = cljs.core.first(arglist__4589);
var x = cljs.core.first(cljs.core.next(arglist__4589));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4589)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4589)));
return G__4588__delegate.call(this, k, x, y, more);
});
return G__4588;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4584.call(this,k,x);
case  3 :
return max_key__4585.call(this,k,x,y);
default:
return max_key__4586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4586.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4590 = (function (k,x){
return x;
});
var min_key__4591 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4592 = (function() { 
var G__4594__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4582_SHARP_,p2__4583_SHARP_){
return min_key.call(null,k,p1__4582_SHARP_,p2__4583_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4594 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4594__delegate.call(this, k, x, y, more);
};
G__4594.cljs$lang$maxFixedArity = 3;
G__4594.cljs$lang$applyTo = (function (arglist__4595){
var k = cljs.core.first(arglist__4595);
var x = cljs.core.first(cljs.core.next(arglist__4595));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4595)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4595)));
return G__4594__delegate.call(this, k, x, y, more);
});
return G__4594;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4590.call(this,k,x);
case  3 :
return min_key__4591.call(this,k,x,y);
default:
return min_key__4592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4592.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4598 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4599 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4596))
{var s__4597 = temp__3698__auto____4596;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4597),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4597)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4598.call(this,n,step);
case  3 :
return partition_all__4599.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4601 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4601))
{var s__4602 = temp__3698__auto____4601;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4602))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4602),take_while.call(null,pred,cljs.core.rest.call(null,s__4602)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4603 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4604 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4620 = null;
var G__4620__4621 = (function (rng,f){
var this__4605 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4620__4622 = (function (rng,f,s){
var this__4606 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4620 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4620__4621.call(this,rng,f);
case  3 :
return G__4620__4622.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4620;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4607 = this;
var comp__4608 = (cljs.core.truth_((this__4607.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4608.call(null,this__4607.start,this__4607.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4609 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4609.end - this__4609.start) / this__4609.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4610 = this;
return this__4610.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4611 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4611.meta,(this__4611.start + this__4611.step),this__4611.end,this__4611.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4612 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4613 = this;
return (new cljs.core.Range(meta,this__4613.start,this__4613.end,this__4613.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4614 = this;
return this__4614.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4624 = null;
var G__4624__4625 = (function (rng,n){
var this__4615 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4615.start + (n * this__4615.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4616 = (this__4615.start > this__4615.end);

if(cljs.core.truth_(and__3546__auto____4616))
{return cljs.core._EQ_.call(null,this__4615.step,0);
} else
{return and__3546__auto____4616;
}
})()))
{return this__4615.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4624__4626 = (function (rng,n,not_found){
var this__4617 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4617.start + (n * this__4617.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4618 = (this__4617.start > this__4617.end);

if(cljs.core.truth_(and__3546__auto____4618))
{return cljs.core._EQ_.call(null,this__4617.step,0);
} else
{return and__3546__auto____4618;
}
})()))
{return this__4617.start;
} else
{return not_found;
}
}
});
G__4624 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4624__4625.call(this,rng,n);
case  3 :
return G__4624__4626.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4624;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4619 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4619.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4628 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4629 = (function (end){
return range.call(null,0,end,1);
});
var range__4630 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4631 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4628.call(this);
case  1 :
return range__4629.call(this,start);
case  2 :
return range__4630.call(this,start,end);
case  3 :
return range__4631.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4633 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4633))
{var s__4634 = temp__3698__auto____4633;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4634),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4634)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4636 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4636))
{var s__4637 = temp__3698__auto____4636;

var fst__4638 = cljs.core.first.call(null,s__4637);
var fv__4639 = f.call(null,fst__4638);
var run__4640 = cljs.core.cons.call(null,fst__4638,cljs.core.take_while.call(null,(function (p1__4635_SHARP_){
return cljs.core._EQ_.call(null,fv__4639,f.call(null,p1__4635_SHARP_));
}),cljs.core.next.call(null,s__4637)));

return cljs.core.cons.call(null,run__4640,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4640),s__4637))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4655 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4651))
{var s__4652 = temp__3695__auto____4651;

return reductions.call(null,f,cljs.core.first.call(null,s__4652),cljs.core.rest.call(null,s__4652));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4656 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4653 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4653))
{var s__4654 = temp__3698__auto____4653;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4654)),cljs.core.rest.call(null,s__4654));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4655.call(this,f,init);
case  3 :
return reductions__4656.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4659 = (function (f){
return (function() {
var G__4664 = null;
var G__4664__4665 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4664__4666 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4664__4667 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4664__4668 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4664__4669 = (function() { 
var G__4671__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4671 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4671__delegate.call(this, x, y, z, args);
};
G__4671.cljs$lang$maxFixedArity = 3;
G__4671.cljs$lang$applyTo = (function (arglist__4672){
var x = cljs.core.first(arglist__4672);
var y = cljs.core.first(cljs.core.next(arglist__4672));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4672)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4672)));
return G__4671__delegate.call(this, x, y, z, args);
});
return G__4671;
})()
;
G__4664 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4664__4665.call(this);
case  1 :
return G__4664__4666.call(this,x);
case  2 :
return G__4664__4667.call(this,x,y);
case  3 :
return G__4664__4668.call(this,x,y,z);
default:
return G__4664__4669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4664.cljs$lang$maxFixedArity = 3;
G__4664.cljs$lang$applyTo = G__4664__4669.cljs$lang$applyTo;
return G__4664;
})()
});
var juxt__4660 = (function (f,g){
return (function() {
var G__4673 = null;
var G__4673__4674 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4673__4675 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4673__4676 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4673__4677 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4673__4678 = (function() { 
var G__4680__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4680 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4680__delegate.call(this, x, y, z, args);
};
G__4680.cljs$lang$maxFixedArity = 3;
G__4680.cljs$lang$applyTo = (function (arglist__4681){
var x = cljs.core.first(arglist__4681);
var y = cljs.core.first(cljs.core.next(arglist__4681));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4681)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4681)));
return G__4680__delegate.call(this, x, y, z, args);
});
return G__4680;
})()
;
G__4673 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4673__4674.call(this);
case  1 :
return G__4673__4675.call(this,x);
case  2 :
return G__4673__4676.call(this,x,y);
case  3 :
return G__4673__4677.call(this,x,y,z);
default:
return G__4673__4678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4673.cljs$lang$maxFixedArity = 3;
G__4673.cljs$lang$applyTo = G__4673__4678.cljs$lang$applyTo;
return G__4673;
})()
});
var juxt__4661 = (function (f,g,h){
return (function() {
var G__4682 = null;
var G__4682__4683 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4682__4684 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4682__4685 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4682__4686 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4682__4687 = (function() { 
var G__4689__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4689 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4689__delegate.call(this, x, y, z, args);
};
G__4689.cljs$lang$maxFixedArity = 3;
G__4689.cljs$lang$applyTo = (function (arglist__4690){
var x = cljs.core.first(arglist__4690);
var y = cljs.core.first(cljs.core.next(arglist__4690));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4690)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4690)));
return G__4689__delegate.call(this, x, y, z, args);
});
return G__4689;
})()
;
G__4682 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4682__4683.call(this);
case  1 :
return G__4682__4684.call(this,x);
case  2 :
return G__4682__4685.call(this,x,y);
case  3 :
return G__4682__4686.call(this,x,y,z);
default:
return G__4682__4687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4682.cljs$lang$maxFixedArity = 3;
G__4682.cljs$lang$applyTo = G__4682__4687.cljs$lang$applyTo;
return G__4682;
})()
});
var juxt__4662 = (function() { 
var G__4691__delegate = function (f,g,h,fs){
var fs__4658 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4692 = null;
var G__4692__4693 = (function (){
return cljs.core.reduce.call(null,(function (p1__4641_SHARP_,p2__4642_SHARP_){
return cljs.core.conj.call(null,p1__4641_SHARP_,p2__4642_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4658);
});
var G__4692__4694 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4643_SHARP_,p2__4644_SHARP_){
return cljs.core.conj.call(null,p1__4643_SHARP_,p2__4644_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4658);
});
var G__4692__4695 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4645_SHARP_,p2__4646_SHARP_){
return cljs.core.conj.call(null,p1__4645_SHARP_,p2__4646_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4658);
});
var G__4692__4696 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4647_SHARP_,p2__4648_SHARP_){
return cljs.core.conj.call(null,p1__4647_SHARP_,p2__4648_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4658);
});
var G__4692__4697 = (function() { 
var G__4699__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4649_SHARP_,p2__4650_SHARP_){
return cljs.core.conj.call(null,p1__4649_SHARP_,cljs.core.apply.call(null,p2__4650_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4658);
};
var G__4699 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4699__delegate.call(this, x, y, z, args);
};
G__4699.cljs$lang$maxFixedArity = 3;
G__4699.cljs$lang$applyTo = (function (arglist__4700){
var x = cljs.core.first(arglist__4700);
var y = cljs.core.first(cljs.core.next(arglist__4700));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4700)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4700)));
return G__4699__delegate.call(this, x, y, z, args);
});
return G__4699;
})()
;
G__4692 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4692__4693.call(this);
case  1 :
return G__4692__4694.call(this,x);
case  2 :
return G__4692__4695.call(this,x,y);
case  3 :
return G__4692__4696.call(this,x,y,z);
default:
return G__4692__4697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4692.cljs$lang$maxFixedArity = 3;
G__4692.cljs$lang$applyTo = G__4692__4697.cljs$lang$applyTo;
return G__4692;
})()
};
var G__4691 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4691__delegate.call(this, f, g, h, fs);
};
G__4691.cljs$lang$maxFixedArity = 3;
G__4691.cljs$lang$applyTo = (function (arglist__4701){
var f = cljs.core.first(arglist__4701);
var g = cljs.core.first(cljs.core.next(arglist__4701));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4701)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4701)));
return G__4691__delegate.call(this, f, g, h, fs);
});
return G__4691;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4659.call(this,f);
case  2 :
return juxt__4660.call(this,f,g);
case  3 :
return juxt__4661.call(this,f,g,h);
default:
return juxt__4662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4662.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4703 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4706 = cljs.core.next.call(null,coll);
coll = G__4706;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4704 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4702 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4702))
{return (n > 0);
} else
{return and__3546__auto____4702;
}
})()))
{{
var G__4707 = (n - 1);
var G__4708 = cljs.core.next.call(null,coll);
n = G__4707;
coll = G__4708;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4703.call(this,n);
case  2 :
return dorun__4704.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4709 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4710 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4709.call(this,n);
case  2 :
return doall__4710.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4712 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4712),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4712),1)))
{return cljs.core.first.call(null,matches__4712);
} else
{return cljs.core.vec.call(null,matches__4712);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4713 = re.exec(s);

if(cljs.core.truth_((matches__4713 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4713),1)))
{return cljs.core.first.call(null,matches__4713);
} else
{return cljs.core.vec.call(null,matches__4713);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4714 = cljs.core.re_find.call(null,re,s);
var match_idx__4715 = s.search(re);
var match_str__4716 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4714))?cljs.core.first.call(null,match_data__4714):match_data__4714);
var post_match__4717 = cljs.core.subs.call(null,s,(match_idx__4715 + cljs.core.count.call(null,match_str__4716)));

if(cljs.core.truth_(match_data__4714))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4714,re_seq.call(null,re,post_match__4717));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4719__4720 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4721 = cljs.core.nth.call(null,vec__4719__4720,0,null);
var flags__4722 = cljs.core.nth.call(null,vec__4719__4720,1,null);
var pattern__4723 = cljs.core.nth.call(null,vec__4719__4720,2,null);

return (new RegExp(pattern__4723,flags__4722));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4718_SHARP_){
return print_one.call(null,p1__4718_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4724 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4724))
{var and__3546__auto____4728 = (function (){var x__451__auto____4725 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4726 = x__451__auto____4725;

if(cljs.core.truth_(and__3546__auto____4726))
{var and__3546__auto____4727 = x__451__auto____4725.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4727))
{return cljs.core.not.call(null,x__451__auto____4725.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4727;
}
} else
{return and__3546__auto____4726;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____4725);
}
})();

if(cljs.core.truth_(and__3546__auto____4728))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4728;
}
} else
{return and__3546__auto____4724;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____4729 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4730 = x__451__auto____4729;

if(cljs.core.truth_(and__3546__auto____4730))
{var and__3546__auto____4731 = x__451__auto____4729.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4731))
{return cljs.core.not.call(null,x__451__auto____4729.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4731;
}
} else
{return and__3546__auto____4730;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____4729);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4732 = cljs.core.first.call(null,objs);
var sb__4733 = (new goog.string.StringBuffer());

var G__4734__4735 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4734__4735))
{var obj__4736 = cljs.core.first.call(null,G__4734__4735);
var G__4734__4737 = G__4734__4735;

while(true){
if(cljs.core.truth_((obj__4736 === first_obj__4732)))
{} else
{sb__4733.append(" ");
}
var G__4738__4739 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4736,opts));

if(cljs.core.truth_(G__4738__4739))
{var string__4740 = cljs.core.first.call(null,G__4738__4739);
var G__4738__4741 = G__4738__4739;

while(true){
sb__4733.append(string__4740);
var temp__3698__auto____4742 = cljs.core.next.call(null,G__4738__4741);

if(cljs.core.truth_(temp__3698__auto____4742))
{var G__4738__4743 = temp__3698__auto____4742;

{
var G__4746 = cljs.core.first.call(null,G__4738__4743);
var G__4747 = G__4738__4743;
string__4740 = G__4746;
G__4738__4741 = G__4747;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4744 = cljs.core.next.call(null,G__4734__4737);

if(cljs.core.truth_(temp__3698__auto____4744))
{var G__4734__4745 = temp__3698__auto____4744;

{
var G__4748 = cljs.core.first.call(null,G__4734__4745);
var G__4749 = G__4734__4745;
obj__4736 = G__4748;
G__4734__4737 = G__4749;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4733;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__4750 = cljs.core.pr_sb.call(null,objs,opts);

sb__4750.append("\n");
return cljs.core.str.call(null,sb__4750);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4751 = cljs.core.first.call(null,objs);

var G__4752__4753 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4752__4753))
{var obj__4754 = cljs.core.first.call(null,G__4752__4753);
var G__4752__4755 = G__4752__4753;

while(true){
if(cljs.core.truth_((obj__4754 === first_obj__4751)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4756__4757 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4754,opts));

if(cljs.core.truth_(G__4756__4757))
{var string__4758 = cljs.core.first.call(null,G__4756__4757);
var G__4756__4759 = G__4756__4757;

while(true){
cljs.core.string_print.call(null,string__4758);
var temp__3698__auto____4760 = cljs.core.next.call(null,G__4756__4759);

if(cljs.core.truth_(temp__3698__auto____4760))
{var G__4756__4761 = temp__3698__auto____4760;

{
var G__4764 = cljs.core.first.call(null,G__4756__4761);
var G__4765 = G__4756__4761;
string__4758 = G__4764;
G__4756__4759 = G__4765;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4762 = cljs.core.next.call(null,G__4752__4755);

if(cljs.core.truth_(temp__3698__auto____4762))
{var G__4752__4763 = temp__3698__auto____4762;

{
var G__4766 = cljs.core.first.call(null,G__4752__4763);
var G__4767 = G__4752__4763;
obj__4754 = G__4766;
G__4752__4755 = G__4767;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4768){
var objs = cljs.core.seq( arglist__4768 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__4769){
var objs = cljs.core.seq( arglist__4769 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4770){
var objs = cljs.core.seq( arglist__4770 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4771){
var objs = cljs.core.seq( arglist__4771 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__4772){
var objs = cljs.core.seq( arglist__4772 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4773){
var objs = cljs.core.seq( arglist__4773 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__4774){
var objs = cljs.core.seq( arglist__4774 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4775){
var objs = cljs.core.seq( arglist__4775 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4776 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4776,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4777 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4777))
{var nspc__4778 = temp__3698__auto____4777;

return cljs.core.str.call(null,nspc__4778,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4779 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4779))
{var nspc__4780 = temp__3698__auto____4779;

return cljs.core.str.call(null,nspc__4780,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4781 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4781,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4782 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4783 = this;
var G__4784__4785 = cljs.core.seq.call(null,this__4783.watches);

if(cljs.core.truth_(G__4784__4785))
{var G__4787__4789 = cljs.core.first.call(null,G__4784__4785);
var vec__4788__4790 = G__4787__4789;
var key__4791 = cljs.core.nth.call(null,vec__4788__4790,0,null);
var f__4792 = cljs.core.nth.call(null,vec__4788__4790,1,null);
var G__4784__4793 = G__4784__4785;

var G__4787__4794 = G__4787__4789;
var G__4784__4795 = G__4784__4793;

while(true){
var vec__4796__4797 = G__4787__4794;
var key__4798 = cljs.core.nth.call(null,vec__4796__4797,0,null);
var f__4799 = cljs.core.nth.call(null,vec__4796__4797,1,null);
var G__4784__4800 = G__4784__4795;

f__4799.call(null,key__4798,this$,oldval,newval);
var temp__3698__auto____4801 = cljs.core.next.call(null,G__4784__4800);

if(cljs.core.truth_(temp__3698__auto____4801))
{var G__4784__4802 = temp__3698__auto____4801;

{
var G__4809 = cljs.core.first.call(null,G__4784__4802);
var G__4810 = G__4784__4802;
G__4787__4794 = G__4809;
G__4784__4795 = G__4810;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4803 = this;
return this$.watches = cljs.core.assoc.call(null,this__4803.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4804 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4804.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4805 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4805.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4806 = this;
return this__4806.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4807 = this;
return this__4807.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4808 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4817 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4818 = (function() { 
var G__4820__delegate = function (x,p__4811){
var map__4812__4813 = p__4811;
var map__4812__4814 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4812__4813))?cljs.core.apply.call(null,cljs.core.hash_map,map__4812__4813):map__4812__4813);
var validator__4815 = cljs.core.get.call(null,map__4812__4814,"\uFDD0'validator");
var meta__4816 = cljs.core.get.call(null,map__4812__4814,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4816,validator__4815,null));
};
var G__4820 = function (x,var_args){
var p__4811 = null;
if (goog.isDef(var_args)) {
  p__4811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4820__delegate.call(this, x, p__4811);
};
G__4820.cljs$lang$maxFixedArity = 1;
G__4820.cljs$lang$applyTo = (function (arglist__4821){
var x = cljs.core.first(arglist__4821);
var p__4811 = cljs.core.rest(arglist__4821);
return G__4820__delegate.call(this, x, p__4811);
});
return G__4820;
})()
;
atom = function(x,var_args){
var p__4811 = var_args;
switch(arguments.length){
case  1 :
return atom__4817.call(this,x);
default:
return atom__4818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4818.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4822 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4822))
{var validate__4823 = temp__3698__auto____4822;

if(cljs.core.truth_(validate__4823.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4824 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4824,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4825 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4826 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4827 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4828 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4829 = (function() { 
var G__4831__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4831 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4831__delegate.call(this, a, f, x, y, z, more);
};
G__4831.cljs$lang$maxFixedArity = 5;
G__4831.cljs$lang$applyTo = (function (arglist__4832){
var a = cljs.core.first(arglist__4832);
var f = cljs.core.first(cljs.core.next(arglist__4832));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4832)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4832))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4832)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4832)))));
return G__4831__delegate.call(this, a, f, x, y, z, more);
});
return G__4831;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4825.call(this,a,f);
case  3 :
return swap_BANG___4826.call(this,a,f,x);
case  4 :
return swap_BANG___4827.call(this,a,f,x,y);
case  5 :
return swap_BANG___4828.call(this,a,f,x,y,z);
default:
return swap_BANG___4829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4829.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4833){
var iref = cljs.core.first(arglist__4833);
var f = cljs.core.first(cljs.core.next(arglist__4833));
var args = cljs.core.rest(cljs.core.next(arglist__4833));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4834 = (function (){
return gensym.call(null,"G__");
});
var gensym__4835 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4834.call(this);
case  1 :
return gensym__4835.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4837 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4837.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4838 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4838.state,(function (p__4839){
var curr_state__4840 = p__4839;
var curr_state__4841 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4840))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4840):curr_state__4840);
var done__4842 = cljs.core.get.call(null,curr_state__4841,"\uFDD0'done");

if(cljs.core.truth_(done__4842))
{return curr_state__4841;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4838.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4843__4844 = options;
var map__4843__4845 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4843__4844))?cljs.core.apply.call(null,cljs.core.hash_map,map__4843__4844):map__4843__4844);
var keywordize_keys__4846 = cljs.core.get.call(null,map__4843__4845,"\uFDD0'keywordize-keys");
var keyfn__4847 = (cljs.core.truth_(keywordize_keys__4846)?cljs.core.keyword:cljs.core.str);
var f__4853 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____4852 = (function iter__4848(s__4849){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4849__4850 = s__4849;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4849__4850)))
{var k__4851 = cljs.core.first.call(null,s__4849__4850);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4847.call(null,k__4851),thisfn.call(null,(x[k__4851]))]),iter__4848.call(null,cljs.core.rest.call(null,s__4849__4850)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____4852.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4853.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4854){
var x = cljs.core.first(arglist__4854);
var options = cljs.core.rest(arglist__4854);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4855 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4859__delegate = function (args){
var temp__3695__auto____4856 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4855),args);

if(cljs.core.truth_(temp__3695__auto____4856))
{var v__4857 = temp__3695__auto____4856;

return v__4857;
} else
{var ret__4858 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4855,cljs.core.assoc,args,ret__4858);
return ret__4858;
}
};
var G__4859 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4859__delegate.call(this, args);
};
G__4859.cljs$lang$maxFixedArity = 0;
G__4859.cljs$lang$applyTo = (function (arglist__4860){
var args = cljs.core.seq( arglist__4860 );;
return G__4859__delegate.call(this, args);
});
return G__4859;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4862 = (function (f){
while(true){
var ret__4861 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4861)))
{{
var G__4865 = ret__4861;
f = G__4865;
continue;
}
} else
{return ret__4861;
}
break;
}
});
var trampoline__4863 = (function() { 
var G__4866__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4866 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4866__delegate.call(this, f, args);
};
G__4866.cljs$lang$maxFixedArity = 1;
G__4866.cljs$lang$applyTo = (function (arglist__4867){
var f = cljs.core.first(arglist__4867);
var args = cljs.core.rest(arglist__4867);
return G__4866__delegate.call(this, f, args);
});
return G__4866;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4862.call(this,f);
default:
return trampoline__4863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4863.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4868 = (function (){
return rand.call(null,1);
});
var rand__4869 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4868.call(this);
case  1 :
return rand__4869.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4871 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4871,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4871,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4880 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4881 = (function (h,child,parent){
var or__3548__auto____4872 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4872))
{return or__3548__auto____4872;
} else
{var or__3548__auto____4873 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4873))
{return or__3548__auto____4873;
} else
{var and__3546__auto____4874 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4874))
{var and__3546__auto____4875 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4875))
{var and__3546__auto____4876 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4876))
{var ret__4877 = true;
var i__4878 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4879 = cljs.core.not.call(null,ret__4877);

if(cljs.core.truth_(or__3548__auto____4879))
{return or__3548__auto____4879;
} else
{return cljs.core._EQ_.call(null,i__4878,cljs.core.count.call(null,parent));
}
})()))
{return ret__4877;
} else
{{
var G__4883 = isa_QMARK_.call(null,h,child.call(null,i__4878),parent.call(null,i__4878));
var G__4884 = (i__4878 + 1);
ret__4877 = G__4883;
i__4878 = G__4884;
continue;
}
}
break;
}
} else
{return and__3546__auto____4876;
}
} else
{return and__3546__auto____4875;
}
} else
{return and__3546__auto____4874;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4880.call(this,h,child);
case  3 :
return isa_QMARK___4881.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4885 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4886 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4885.call(this,h);
case  2 :
return parents__4886.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4888 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4889 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4888.call(this,h);
case  2 :
return ancestors__4889.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4891 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4892 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4891.call(this,h);
case  2 :
return descendants__4892.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4902 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4903 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4897 = "\uFDD0'parents".call(null,h);
var td__4898 = "\uFDD0'descendants".call(null,h);
var ta__4899 = "\uFDD0'ancestors".call(null,h);
var tf__4900 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4901 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4897.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4899.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4899.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4897,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4900.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4898,parent,ta__4899),"\uFDD0'descendants":tf__4900.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4899,tag,td__4898)});
})());

if(cljs.core.truth_(or__3548__auto____4901))
{return or__3548__auto____4901;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4902.call(this,h,tag);
case  3 :
return derive__4903.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4909 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4910 = (function (h,tag,parent){
var parentMap__4905 = "\uFDD0'parents".call(null,h);
var childsParents__4906 = (cljs.core.truth_(parentMap__4905.call(null,tag))?cljs.core.disj.call(null,parentMap__4905.call(null,tag),parent):cljs.core.set([]));
var newParents__4907 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4906))?cljs.core.assoc.call(null,parentMap__4905,tag,childsParents__4906):cljs.core.dissoc.call(null,parentMap__4905,tag));
var deriv_seq__4908 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4894_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4894_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4894_SHARP_),cljs.core.second.call(null,p1__4894_SHARP_)));
}),cljs.core.seq.call(null,newParents__4907)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4905.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4895_SHARP_,p2__4896_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4895_SHARP_,p2__4896_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4908));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4909.call(this,h,tag);
case  3 :
return underive__4910.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4912 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4914 = (cljs.core.truth_((function (){var and__3546__auto____4913 = xprefs__4912;

if(cljs.core.truth_(and__3546__auto____4913))
{return xprefs__4912.call(null,y);
} else
{return and__3546__auto____4913;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4914))
{return or__3548__auto____4914;
} else
{var or__3548__auto____4916 = (function (){var ps__4915 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4915) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4915),prefer_table)))
{} else
{}
{
var G__4919 = cljs.core.rest.call(null,ps__4915);
ps__4915 = G__4919;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4916))
{return or__3548__auto____4916;
} else
{var or__3548__auto____4918 = (function (){var ps__4917 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4917) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4917),y,prefer_table)))
{} else
{}
{
var G__4920 = cljs.core.rest.call(null,ps__4917);
ps__4917 = G__4920;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4918))
{return or__3548__auto____4918;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4921 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4921))
{return or__3548__auto____4921;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4930 = cljs.core.reduce.call(null,(function (be,p__4922){
var vec__4923__4924 = p__4922;
var k__4925 = cljs.core.nth.call(null,vec__4923__4924,0,null);
var ___4926 = cljs.core.nth.call(null,vec__4923__4924,1,null);
var e__4927 = vec__4923__4924;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4925)))
{var be2__4929 = (cljs.core.truth_((function (){var or__3548__auto____4928 = (be === null);

if(cljs.core.truth_(or__3548__auto____4928))
{return or__3548__auto____4928;
} else
{return cljs.core.dominates.call(null,k__4925,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4927:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4929),k__4925,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4925," and ",cljs.core.first.call(null,be2__4929),", and neither is preferred")));
}
return be2__4929;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4930))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4930));
return cljs.core.second.call(null,best_entry__4930);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4931 = mf;

if(cljs.core.truth_(and__3546__auto____4931))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4931;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4932 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4932))
{return or__3548__auto____4932;
} else
{var or__3548__auto____4933 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4933))
{return or__3548__auto____4933;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4934 = mf;

if(cljs.core.truth_(and__3546__auto____4934))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4934;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4935 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4935))
{return or__3548__auto____4935;
} else
{var or__3548__auto____4936 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4936))
{return or__3548__auto____4936;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4937 = mf;

if(cljs.core.truth_(and__3546__auto____4937))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4937;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4938 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4938))
{return or__3548__auto____4938;
} else
{var or__3548__auto____4939 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4939))
{return or__3548__auto____4939;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4940 = mf;

if(cljs.core.truth_(and__3546__auto____4940))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4940;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4941 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4941))
{return or__3548__auto____4941;
} else
{var or__3548__auto____4942 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4942))
{return or__3548__auto____4942;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4943 = mf;

if(cljs.core.truth_(and__3546__auto____4943))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4943;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4944 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4944))
{return or__3548__auto____4944;
} else
{var or__3548__auto____4945 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4945))
{return or__3548__auto____4945;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4946 = mf;

if(cljs.core.truth_(and__3546__auto____4946))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4946;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4947 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4947))
{return or__3548__auto____4947;
} else
{var or__3548__auto____4948 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4948))
{return or__3548__auto____4948;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4949 = mf;

if(cljs.core.truth_(and__3546__auto____4949))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4949;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4950 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4950))
{return or__3548__auto____4950;
} else
{var or__3548__auto____4951 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4951))
{return or__3548__auto____4951;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4952 = mf;

if(cljs.core.truth_(and__3546__auto____4952))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4952;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4953 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4953))
{return or__3548__auto____4953;
} else
{var or__3548__auto____4954 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4954))
{return or__3548__auto____4954;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4955 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4956 = cljs.core._get_method.call(null,mf,dispatch_val__4955);

if(cljs.core.truth_(target_fn__4956))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4955)));
}
return cljs.core.apply.call(null,target_fn__4956,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__367__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4957 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4958 = this;
cljs.core.swap_BANG_.call(null,this__4958.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4958.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4958.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4958.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4959 = this;
cljs.core.swap_BANG_.call(null,this__4959.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4959.method_cache,this__4959.method_table,this__4959.cached_hierarchy,this__4959.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4960 = this;
cljs.core.swap_BANG_.call(null,this__4960.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4960.method_cache,this__4960.method_table,this__4960.cached_hierarchy,this__4960.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4961 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4961.cached_hierarchy),cljs.core.deref.call(null,this__4961.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4961.method_cache,this__4961.method_table,this__4961.cached_hierarchy,this__4961.hierarchy);
}
var temp__3695__auto____4962 = cljs.core.deref.call(null,this__4961.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4962))
{var target_fn__4963 = temp__3695__auto____4962;

return target_fn__4963;
} else
{var temp__3695__auto____4964 = cljs.core.find_and_cache_best_method.call(null,this__4961.name,dispatch_val,this__4961.hierarchy,this__4961.method_table,this__4961.prefer_table,this__4961.method_cache,this__4961.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4964))
{var target_fn__4965 = temp__3695__auto____4964;

return target_fn__4965;
} else
{return cljs.core.deref.call(null,this__4961.method_table).call(null,this__4961.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4966 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4966.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4966.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4966.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4966.method_cache,this__4966.method_table,this__4966.cached_hierarchy,this__4966.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4967 = this;
return cljs.core.deref.call(null,this__4967.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4968 = this;
return cljs.core.deref.call(null,this__4968.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4969 = this;
return cljs.core.do_dispatch.call(null,mf,this__4969.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4970__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4970 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4970__delegate.call(this, _, args);
};
G__4970.cljs$lang$maxFixedArity = 1;
G__4970.cljs$lang$applyTo = (function (arglist__4971){
var _ = cljs.core.first(arglist__4971);
var args = cljs.core.rest(arglist__4971);
return G__4970__delegate.call(this, _, args);
});
return G__4970;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
