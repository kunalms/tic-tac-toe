(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GFZ9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var a=t.huPlayer,s=t.aiPlayer;function r(){var i=-99999999,r=void 0;return n.default.getEmptyIndexies(e,t).forEach((function(o){e[o]=s;var l=function i(r,o){var l=n.default.playerWon(e,a)?-10:n.default.playerWon(e,s)?10:0;if(10===Math.abs(l))return l;if(!n.default.isMovesLeft(e,t))return 0;var c=99999999,h=n.default.getEmptyIndexies(e,t);return o?(c*=-1,h.forEach((function(t){e[t]=s;var a=i(r+1,!1);c=Math.max(c,a),e[t]=t})),c):(h.forEach((function(t){e[t]=a;var n=i(r+1,!0);c=Math.min(c,n),e[t]=t})),c)}(0,!1);e[o]=o,l>i&&(r=o,i=l)})),r}function o(){var i=n.default.getEmptyIndexies(e,t);return i[Math.floor(Math.random()*i.length)]}var l,c,h=-1;switch(i){case"Easy":h=o();break;case"Normal":l=r(),c=o(),h=Math.random()<.75?l:c;break;case"Hard":h=r();break;default:throw Error("Difficulty not valid!")}return h};var a,n=(a=i("wEoJ"))&&a.__esModule?a:{default:a}},M8Jp:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(i("GFZ9")),n=s(i("uw7I"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={ComputerMove:a.default,GameStep:n.default}},ekgB:function(e,t,i){"use strict";i.r(t);var a=i("ofXK"),n=i("tyNb"),s=i("M8Jp"),r=i.n(s),o=i("fXoL"),l=i("Wp6s"),c=i("GU7r"),h=i("FKr1"),d=i("8LU1"),p=i("3Pt+"),g=i("R1ws"),u=i("u47x"),m=i("cH1L");const b=["thumbContainer"],f=["toggleBar"],_=["input"],y=function(){return{enterDuration:150}},v=["*"],O=new o.q("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let C=0;const k={provide:p.h,useExisting:Object(o.T)(()=>M),multi:!0};class w{constructor(e,t){this.source=e,this.checked=t}}class x{constructor(e){this._elementRef=e}}const S=Object(h.r)(Object(h.n)(Object(h.o)(Object(h.p)(x)),"accent"));let M=(()=>{class e extends S{constructor(e,t,i,a,n,s,r,l){super(e),this._focusMonitor=t,this._changeDetectorRef=i,this.defaults=s,this._animationMode=r,this._onChange=e=>{},this._onTouched=()=>{},this._uniqueId=`mat-slide-toggle-${++C}`,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new o.n,this.toggleChange=new o.n,this.dragChange=new o.n,this.tabIndex=parseInt(a)||0}get required(){return this._required}set required(e){this._required=Object(d.b)(e)}get checked(){return this._checked}set checked(e){this._checked=Object(d.b)(e),this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e){this._focusMonitor.focusVia(this._inputElement,"keyboard",e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new w(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(o.l),o.Nb(u.e),o.Nb(o.h),o.Xb("tabindex"),o.Nb(o.z),o.Nb(O),o.Nb(g.a,8),o.Nb(m.b,8))},e.\u0275cmp=o.Hb({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){var i;1&e&&(o.xc(b,!0),o.xc(f,!0),o.xc(_,!0)),2&e&&(o.kc(i=o.bc())&&(t._thumbEl=i.first),o.kc(i=o.bc())&&(t._thumbBarEl=i.first),o.kc(i=o.bc())&&(t._inputElement=i.first))},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(o.Vb("id",t.id),o.Cb("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),o.Eb("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange",dragChange:"dragChange"},exportAs:["matSlideToggle"],features:[o.Ab([k]),o.yb],ngContentSelectors:v,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(o.fc(),o.Sb(0,"label",0,1),o.Sb(2,"div",2,3),o.Sb(4,"input",4,5),o.ac("change",(function(e){return t._onChangeEvent(e)}))("click",(function(e){return t._onInputClick(e)})),o.Rb(),o.Sb(6,"div",6,7),o.Ob(8,"div",8),o.Sb(9,"div",9),o.Ob(10,"div",10),o.Rb(),o.Rb(),o.Rb(),o.Sb(11,"span",11,12),o.ac("cdkObserveContent",(function(){return t._onLabelTextChange()})),o.Sb(13,"span",13),o.tc(14,"\xa0"),o.Rb(),o.ec(15),o.Rb(),o.Rb()),2&e){const e=o.lc(1),i=o.lc(12);o.Cb("for",t.inputId),o.Bb(2),o.Eb("mat-slide-toggle-bar-no-side-margin",!i.textContent||!i.textContent.trim()),o.Bb(2),o.gc("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),o.Cb("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),o.Bb(5),o.gc("matRippleTrigger",e)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",o.hc(17,y))}},directives:[h.i,c.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)}}),e})(),R=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[I,h.j,h.e,c.c],I,h.e]}),e})();var j=i("kmnG"),D=i("rDax"),P=i("0EQZ"),E=i("FtGj"),F=i("XNiG"),T=i("NXyV"),A=i("VRyK"),B=i("JX91"),L=i("eIep"),V=i("IzEk"),z=i("pLZG"),W=i("lJxs"),q=i("/uUt"),N=i("1G5W"),G=i("R0Ic"),Y=i("vxfF");const K=["trigger"],H=["panel"];function X(e,t){if(1&e&&(o.Sb(0,"span",8),o.tc(1),o.Rb()),2&e){const e=o.dc();o.Bb(1),o.uc(e.placeholder||"\xa0")}}function J(e,t){if(1&e&&(o.Sb(0,"span"),o.tc(1),o.Rb()),2&e){const e=o.dc(2);o.Bb(1),o.uc(e.triggerValue||"\xa0")}}function Z(e,t){1&e&&o.ec(0,0,["*ngSwitchCase","true"])}function U(e,t){if(1&e&&(o.Sb(0,"span",9),o.sc(1,J,2,1,"span",10),o.sc(2,Z,1,0,void 0,11),o.Rb()),2&e){const e=o.dc();o.gc("ngSwitch",!!e.customTrigger),o.Bb(2),o.gc("ngSwitchCase",!0)}}function $(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",12),o.Sb(1,"div",13,14),o.ac("@transformPanel.done",(function(t){return o.mc(e),o.dc()._panelDoneAnimatingStream.next(t.toState)}))("keydown",(function(t){return o.mc(e),o.dc()._handleKeydown(t)})),o.ec(3,1),o.Rb(),o.Rb()}if(2&e){const e=o.dc();o.gc("@transformPanelWrap",void 0),o.Bb(1),o.Db("mat-select-panel ",e._getPanelTheme(),""),o.rc("transform-origin",e._transformOrigin)("font-size",e._triggerFontSize,"px"),o.gc("ngClass",e.panelClass)("@transformPanel",e.multiple?"showing-multiple":"showing")}}const Q=[[["mat-select-trigger"]],"*"],ee=["mat-select-trigger","*"],te={transformPanelWrap:Object(G.m)("transformPanelWrap",[Object(G.l)("* => void",Object(G.h)("@transformPanel",[Object(G.f)()],{optional:!0}))]),transformPanel:Object(G.m)("transformPanel",[Object(G.j)("void",Object(G.k)({transform:"scaleY(0.8)",minWidth:"100%",opacity:0})),Object(G.j)("showing",Object(G.k)({opacity:1,minWidth:"calc(100% + 32px)",transform:"scaleY(1)"})),Object(G.j)("showing-multiple",Object(G.k)({opacity:1,minWidth:"calc(100% + 64px)",transform:"scaleY(1)"})),Object(G.l)("void => *",Object(G.e)("120ms cubic-bezier(0, 0, 0.2, 1)")),Object(G.l)("* => void",Object(G.e)("100ms 25ms linear",Object(G.k)({opacity:0})))])};let ie=0;const ae=new o.q("mat-select-scroll-strategy"),ne=new o.q("MAT_SELECT_CONFIG"),se={provide:ae,deps:[D.c],useFactory:function(e){return()=>e.scrollStrategies.reposition()}};class re{constructor(e,t){this.source=e,this.value=t}}class oe{constructor(e,t,i,a,n){this._elementRef=e,this._defaultErrorStateMatcher=t,this._parentForm=i,this._parentFormGroup=a,this.ngControl=n}}const le=Object(h.o)(Object(h.r)(Object(h.p)(Object(h.q)(oe))));let ce=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=o.Ib({type:e,selectors:[["mat-select-trigger"]]}),e})(),he=(()=>{class e extends le{constructor(e,t,i,a,n,s,r,l,c,h,d,p,g,u){super(n,a,r,l,h),this._viewportRuler=e,this._changeDetectorRef=t,this._ngZone=i,this._dir=s,this._parentFormField=c,this.ngControl=h,this._liveAnnouncer=g,this._panelOpen=!1,this._required=!1,this._scrollTop=0,this._multiple=!1,this._compareWith=(e,t)=>e===t,this._uid=`mat-select-${ie++}`,this._destroy=new F.a,this._triggerFontSize=0,this._onChange=()=>{},this._onTouched=()=>{},this._optionIds="",this._transformOrigin="top",this._panelDoneAnimatingStream=new F.a,this._offsetY=0,this._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}],this._disableOptionCentering=!1,this._focused=!1,this.controlType="mat-select",this.ariaLabel="",this.optionSelectionChanges=Object(T.a)(()=>{const e=this.options;return e?e.changes.pipe(Object(B.a)(e),Object(L.a)(()=>Object(A.a)(...e.map(e=>e.onSelectionChange)))):this._ngZone.onStable.asObservable().pipe(Object(V.a)(1),Object(L.a)(()=>this.optionSelectionChanges))}),this.openedChange=new o.n,this._openedStream=this.openedChange.pipe(Object(z.a)(e=>e),Object(W.a)(()=>{})),this._closedStream=this.openedChange.pipe(Object(z.a)(e=>!e),Object(W.a)(()=>{})),this.selectionChange=new o.n,this.valueChange=new o.n,this.ngControl&&(this.ngControl.valueAccessor=this),this._scrollStrategyFactory=p,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(d)||0,this.id=this.id,u&&(null!=u.disableOptionCentering&&(this.disableOptionCentering=u.disableOptionCentering),null!=u.typeaheadDebounceInterval&&(this.typeaheadDebounceInterval=u.typeaheadDebounceInterval))}get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required}set required(e){this._required=Object(d.b)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){if(this._selectionModel)throw Error("Cannot change `multiple` mode of select after initialization.");this._multiple=Object(d.b)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=Object(d.b)(e)}get compareWith(){return this._compareWith}set compareWith(e){if("function"!=typeof e)throw Error("`compareWith` must be a function.");this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){e!==this._value&&(this.writeValue(e),this._value=e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=Object(d.e)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}ngOnInit(){this._selectionModel=new P.b(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(Object(q.a)(),Object(N.a)(this._destroy)).subscribe(()=>{this.panelOpen?(this._scrollTop=0,this.openedChange.emit(!0)):(this.openedChange.emit(!1),this.overlayDir.offsetX=0,this._changeDetectorRef.markForCheck())}),this._viewportRuler.change().pipe(Object(N.a)(this._destroy)).subscribe(()=>{this._panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._changeDetectorRef.markForCheck())})}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe(Object(N.a)(this._destroy)).subscribe(e=>{e.added.forEach(e=>e.select()),e.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(Object(B.a)(null),Object(N.a)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){this.ngControl&&this.updateErrorState()}ngOnChanges(e){e.disabled&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){!this.disabled&&this.options&&this.options.length&&!this._panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._calculateOverlayPosition(),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this._ngZone.onStable.asObservable().pipe(Object(V.a)(1)).subscribe(()=>{this._triggerFontSize&&this.overlayDir.overlayRef&&this.overlayDir.overlayRef.overlayElement&&(this.overlayDir.overlayRef.overlayElement.style.fontSize=`${this._triggerFontSize}px`)}))}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this.options&&this._setSelectionByValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const t=e.keyCode,i=t===E.b||t===E.l||t===E.g||t===E.i,a=t===E.d||t===E.j,n=this._keyManager;if(!n.isTyping()&&a&&!Object(E.o)(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){const i=this.selected;t===E.f||t===E.c?(t===E.f?n.setFirstItemActive():n.setLastItemActive(),e.preventDefault()):n.onKeydown(e);const a=this.selected;a&&i!==a&&this._liveAnnouncer.announce(a.viewValue,1e4)}}_handleOpenKeydown(e){const t=this._keyManager,i=e.keyCode,a=i===E.b||i===E.l,n=t.isTyping();if(i===E.f||i===E.c)e.preventDefault(),i===E.f?t.setFirstItemActive():t.setLastItemActive();else if(a&&e.altKey)e.preventDefault(),this.close();else if(n||i!==E.d&&i!==E.j||!t.activeItem||Object(E.o)(e))if(!n&&this._multiple&&i===E.a&&e.ctrlKey){e.preventDefault();const t=this.options.some(e=>!e.disabled&&!e.selected);this.options.forEach(e=>{e.disabled||(t?e.select():e.deselect())})}else{const i=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==i&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this.disabled||this.panelOpen||(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this.overlayDir.positionChange.pipe(Object(V.a)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._calculateOverlayOffsetX(),this.panel.nativeElement.scrollTop=this._scrollTop})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this._setSelectionByValue(this.ngControl?this.ngControl.value:this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.multiple&&e){if(!Array.isArray(e))throw Error("Value must be an array in multiple-selection mode.");this._selectionModel.clear(),e.forEach(e=>this._selectValue(e)),this._sortValues()}else{this._selectionModel.clear();const t=this._selectValue(e);t?this._keyManager.setActiveItem(t):this.panelOpen||this._keyManager.setActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectValue(e){const t=this.options.find(t=>{try{return null!=t.value&&this._compareWith(t.value,e)}catch(i){return Object(o.V)()&&console.warn(i),!1}});return t&&this._selectionModel.select(t),t}_initKeyManager(){this._keyManager=new u.b(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe(Object(N.a)(this._destroy)).subscribe(()=>{!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close()}),this._keyManager.change.pipe(Object(N.a)(this._destroy)).subscribe(()=>{this._panelOpen&&this.panel?this._scrollActiveOptionIntoView():this._panelOpen||this.multiple||!this._keyManager.activeItem||this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=Object(A.a)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Object(N.a)(e)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Object(A.a)(...this.options.map(e=>e._stateChanges)).pipe(Object(N.a)(e)).subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()}),this._setOptionIds()}_onSelect(e,t){const i=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),this._propagateChanges(e.value)),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t=null;t=this.multiple?this.selected.map(e=>e.value):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(new re(this,t)),this._changeDetectorRef.markForCheck()}_setOptionIds(){this._optionIds=this.options.map(e=>e.id).join(" ")}_highlightCorrectOption(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}_scrollActiveOptionIntoView(){const e=this._keyManager.activeItemIndex||0,t=Object(h.l)(e,this.options,this.optionGroups);this.panel.nativeElement.scrollTop=Object(h.m)(e+t,this._getItemHeight(),this.panel.nativeElement.scrollTop,256)}focus(e){this._elementRef.nativeElement.focus(e)}_getOptionIndex(e){return this.options.reduce((t,i,a)=>void 0!==t?t:e===i?a:void 0,void 0)}_calculateOverlayPosition(){const e=this._getItemHeight(),t=this._getItemCount(),i=Math.min(t*e,256),a=t*e-i;let n=this.empty?0:this._getOptionIndex(this._selectionModel.selected[0]);n+=Object(h.l)(n,this.options,this.optionGroups);const s=i/2;this._scrollTop=this._calculateOverlayScroll(n,s,a),this._offsetY=this._calculateOverlayOffsetY(n,s,a),this._checkOverlayWithinViewport(a)}_calculateOverlayScroll(e,t,i){const a=this._getItemHeight();return Math.min(Math.max(0,a*e-t+a/2),i)}_getAriaLabel(){return this.ariaLabelledby?null:this.ariaLabel||this.placeholder}_getAriaLabelledby(){return this.ariaLabelledby?this.ariaLabelledby:this._parentFormField&&this._parentFormField._hasFloatingLabel()&&!this._getAriaLabel()&&this._parentFormField._labelId||null}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_calculateOverlayOffsetX(){const e=this.overlayDir.overlayRef.overlayElement.getBoundingClientRect(),t=this._viewportRuler.getViewportSize(),i=this._isRtl(),a=this.multiple?56:32;let n;if(this.multiple)n=40;else{let e=this._selectionModel.selected[0]||this.options.first;n=e&&e.group?32:16}i||(n*=-1);const s=0-(e.left+n-(i?a:0)),r=e.right+n-t.width+(i?0:a);s>0?n+=s+8:r>0&&(n-=r+8),this.overlayDir.offsetX=Math.round(n),this.overlayDir.overlayRef.updatePosition()}_calculateOverlayOffsetY(e,t,i){const a=this._getItemHeight(),n=(a-this._triggerRect.height)/2,s=Math.floor(256/a);let r;return this._disableOptionCentering?0:(r=0===this._scrollTop?e*a:this._scrollTop===i?(e-(this._getItemCount()-s))*a+(a-(this._getItemCount()*a-256)%a):t-a/2,Math.round(-1*r-n))}_checkOverlayWithinViewport(e){const t=this._getItemHeight(),i=this._viewportRuler.getViewportSize(),a=this._triggerRect.top-8,n=i.height-this._triggerRect.bottom-8,s=Math.abs(this._offsetY),r=Math.min(this._getItemCount()*t,256)-s-this._triggerRect.height;r>n?this._adjustPanelUp(r,n):s>a?this._adjustPanelDown(s,a,e):this._transformOrigin=this._getOriginBasedOnOption()}_adjustPanelUp(e,t){const i=Math.round(e-t);this._scrollTop-=i,this._offsetY-=i,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}_adjustPanelDown(e,t,i){const a=Math.round(e-t);if(this._scrollTop+=a,this._offsetY+=a,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=i)return this._scrollTop=i,this._offsetY=0,void(this._transformOrigin="50% top 0px")}_getOriginBasedOnOption(){const e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return`50% ${Math.abs(this._offsetY)-t+e/2}px 0px`}_getItemCount(){return this.options.length+this.optionGroups.length}_getItemHeight(){return 3*this._triggerFontSize}setDescribedByIds(e){this._ariaDescribedby=e.join(" ")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty}}return e.\u0275fac=function(t){return new(t||e)(o.Nb(Y.c),o.Nb(o.h),o.Nb(o.z),o.Nb(h.a),o.Nb(o.l),o.Nb(m.b,8),o.Nb(p.l,8),o.Nb(p.e,8),o.Nb(j.b,8),o.Nb(p.i,10),o.Xb("tabindex"),o.Nb(ae),o.Nb(u.g),o.Nb(ne,8))},e.\u0275cmp=o.Hb({type:e,selectors:[["mat-select"]],contentQueries:function(e,t,i){var a;1&e&&(o.Gb(i,ce,!0),o.Gb(i,h.g,!0),o.Gb(i,h.f,!0)),2&e&&(o.kc(a=o.bc())&&(t.customTrigger=a.first),o.kc(a=o.bc())&&(t.options=a),o.kc(a=o.bc())&&(t.optionGroups=a))},viewQuery:function(e,t){var i;1&e&&(o.xc(K,!0),o.xc(H,!0),o.xc(D.a,!0)),2&e&&(o.kc(i=o.bc())&&(t.trigger=i.first),o.kc(i=o.bc())&&(t.panel=i.first),o.kc(i=o.bc())&&(t.overlayDir=i.first))},hostAttrs:["role","listbox",1,"mat-select"],hostVars:19,hostBindings:function(e,t){1&e&&o.ac("keydown",(function(e){return t._handleKeydown(e)}))("focus",(function(){return t._onFocus()}))("blur",(function(){return t._onBlur()})),2&e&&(o.Cb("id",t.id)("tabindex",t.tabIndex)("aria-label",t._getAriaLabel())("aria-labelledby",t._getAriaLabelledby())("aria-required",t.required.toString())("aria-disabled",t.disabled.toString())("aria-invalid",t.errorState)("aria-owns",t.panelOpen?t._optionIds:null)("aria-multiselectable",t.multiple)("aria-describedby",t._ariaDescribedby||null)("aria-activedescendant",t._getAriaActiveDescendant()),o.Eb("mat-select-disabled",t.disabled)("mat-select-invalid",t.errorState)("mat-select-required",t.required)("mat-select-empty",t.empty))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],id:"id",disableOptionCentering:"disableOptionCentering",typeaheadDebounceInterval:"typeaheadDebounceInterval",placeholder:"placeholder",required:"required",multiple:"multiple",compareWith:"compareWith",value:"value",panelClass:"panelClass",ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",sortComparator:"sortComparator"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[o.Ab([{provide:j.c,useExisting:e},{provide:h.c,useExisting:e}]),o.yb,o.zb()],ngContentSelectors:ee,decls:9,vars:9,consts:[["cdk-overlay-origin","","aria-hidden","true",1,"mat-select-trigger",3,"click"],["origin","cdkOverlayOrigin","trigger",""],[1,"mat-select-value",3,"ngSwitch"],["class","mat-select-placeholder",4,"ngSwitchCase"],["class","mat-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-select-arrow-wrapper"],[1,"mat-select-arrow"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayMinWidth","cdkConnectedOverlayOffsetY","backdropClick","attach","detach"],[1,"mat-select-placeholder"],[1,"mat-select-value-text",3,"ngSwitch"],[4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-select-panel-wrap"],[3,"ngClass","keydown"],["panel",""]],template:function(e,t){if(1&e&&(o.fc(Q),o.Sb(0,"div",0,1),o.ac("click",(function(){return t.toggle()})),o.Sb(3,"div",2),o.sc(4,X,2,1,"span",3),o.sc(5,U,3,2,"span",4),o.Rb(),o.Sb(6,"div",5),o.Ob(7,"div",6),o.Rb(),o.Rb(),o.sc(8,$,4,10,"ng-template",7),o.ac("backdropClick",(function(){return t.close()}))("attach",(function(){return t._onAttached()}))("detach",(function(){return t.close()}))),2&e){const e=o.lc(1);o.Bb(3),o.gc("ngSwitch",t.empty),o.Bb(1),o.gc("ngSwitchCase",!0),o.Bb(1),o.gc("ngSwitchCase",!1),o.Bb(3),o.gc("cdkConnectedOverlayScrollStrategy",t._scrollStrategy)("cdkConnectedOverlayOrigin",e)("cdkConnectedOverlayOpen",t.panelOpen)("cdkConnectedOverlayPositions",t._positions)("cdkConnectedOverlayMinWidth",null==t._triggerRect?null:t._triggerRect.width)("cdkConnectedOverlayOffsetY",t._offsetY)}},directives:[D.b,a.l,a.m,D.a,a.n,a.h],styles:[".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],encapsulation:2,data:{animation:[te.transformPanelWrap,te.transformPanel]},changeDetection:0}),e})(),de=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},providers:[se],imports:[[a.b,D.e,h.h,h.e],j.d,h.h,h.e]}),e})();var pe=i("bTqV");function ge(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",11),o.ac("click",(function(){o.mc(e);const i=t.index;return o.dc().makeHumanMove(i)})),o.tc(1),o.Rb()}if(2&e){const e=t.$implicit;o.Bb(1),o.vc(" ","X"===e||"O"===e?e:""," ")}}function ue(e,t){1&e&&(o.Sb(0,"div"),o.Sb(1,"h3"),o.tc(2,"Your Move"),o.Rb(),o.Rb())}function me(e,t){if(1&e&&(o.Sb(0,"div"),o.Sb(1,"h3"),o.tc(2),o.Rb(),o.Rb()),2&e){const e=o.dc();o.Bb(2),o.uc(e.winner||"Start a new game")}}function be(e,t){if(1&e){const e=o.Tb();o.Sb(0,"button",12),o.ac("click",(function(){return o.mc(e),o.dc().toggleGame(!0)})),o.tc(1,"Start"),o.Rb()}}function fe(e,t){if(1&e){const e=o.Tb();o.Sb(0,"button",13),o.ac("click",(function(){return o.mc(e),o.dc().toggleGame(!1)})),o.tc(1,"Reset"),o.Rb()}}const _e=function(e){return{"tic-tac-toe":!0,playing:e}},{GameStep:ye}=r.a,ve=[{path:"",component:(()=>{class e{constructor(){this.gameState=[0,1,2,3,4,5,6,7,8],this.playing=!1,this.computerFirst=!1,this.difficulty="Normal"}ngOnInit(){}toggleGame(e){e!==this.playing&&(this.gameState=[0,1,2,3,4,5,6,7,8],this.winner=void 0,e&&this.computerFirst&&this.makeComputerMove(),this.playing=e)}makeComputerMove(){const e=ye(this.gameState,{huPlayer:"X",aiPlayer:"O"},this.difficulty);this.gameState=e.board,e.winner&&(this.winner={huPlayer:"Yay \u{1f64c} You Win!",aiPlayer:"Computer Wins!",draw:"It's a Draw!"}[e.winner],this.playing=!1)}makeHumanMove(e){this.playing&&"number"==typeof this.gameState[e]&&(this.gameState[e]="X",this.makeComputerMove())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Hb({type:e,selectors:[["app-game"]],decls:22,vars:12,consts:[[1,"mat-elevation-z4"],[3,"ngClass"],["class","game-field",3,"click",4,"ngFor","ngForOf"],[2,"padding","0"],[4,"ngIf"],["color","primary","mat-raised-button","",3,"click",4,"ngIf"],["color","accent","mat-raised-button","",3,"click",4,"ngIf"],[3,"ngModel","disabled","ngModelChange"],["value","Easy"],["value","Normal"],["value","Hard"],[1,"game-field",3,"click"],["color","primary","mat-raised-button","",3,"click"],["color","accent","mat-raised-button","",3,"click"]],template:function(e,t){1&e&&(o.Sb(0,"mat-card",0),o.Sb(1,"mat-card-content"),o.Sb(2,"div",1),o.sc(3,ge,2,1,"div",2),o.Rb(),o.Rb(),o.Rb(),o.Sb(4,"mat-card",3),o.Sb(5,"mat-card-content"),o.sc(6,ue,3,0,"div",4),o.sc(7,me,3,1,"div",4),o.sc(8,be,2,0,"button",5),o.sc(9,fe,2,0,"button",6),o.Sb(10,"mat-slide-toggle",7),o.ac("ngModelChange",(function(e){return t.computerFirst=e})),o.tc(11,"Computer Moves First"),o.Rb(),o.Sb(12,"mat-form-field"),o.Sb(13,"mat-label"),o.tc(14,"Difficulty"),o.Rb(),o.Sb(15,"mat-select",7),o.ac("ngModelChange",(function(e){return t.difficulty=e})),o.Sb(16,"mat-option",8),o.tc(17,"Easy"),o.Rb(),o.Sb(18,"mat-option",9),o.tc(19,"Normal"),o.Rb(),o.Sb(20,"mat-option",10),o.tc(21,"Hard"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Bb(2),o.gc("ngClass",o.ic(10,_e,t.playing)),o.Bb(1),o.gc("ngForOf",t.gameState),o.Bb(3),o.gc("ngIf",t.playing),o.Bb(1),o.gc("ngIf",!t.playing),o.Bb(1),o.gc("ngIf",!t.playing),o.Bb(1),o.gc("ngIf",t.playing),o.Bb(1),o.gc("ngModel",t.computerFirst)("disabled",t.playing),o.Bb(5),o.gc("ngModel",t.difficulty)("disabled",t.playing))},directives:[l.a,l.b,a.h,a.i,a.j,M,p.j,p.m,j.b,j.e,he,h.g,pe.a],styles:["mat-card[_ngcontent-%COMP%]{max-width:400px;margin:2em auto;text-align:center}mat-card-content[_ngcontent-%COMP%]{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.tic-tac-toe[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.tic-tac-toe[_ngcontent-%COMP%]{width:340px;flex-wrap:wrap}.game-field[_ngcontent-%COMP%]{width:95px;height:95px;margin:8px;background-color:#f0f0f0;line-height:95px;font-size:60px;font-weight:700}.playing[_ngcontent-%COMP%]   .game-field[_ngcontent-%COMP%]{cursor:pointer}button[_ngcontent-%COMP%], mat-slide-toggle[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),e})()}];let Oe=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(ve)],n.e]}),e})();i.d(t,"GameModule",(function(){return Ce}));let Ce=(()=>{class e{}return e.\u0275mod=o.Lb({type:e}),e.\u0275inj=o.Kb({factory:function(t){return new(t||e)},imports:[[a.b,Oe,l.c,R,j.d,de,p.f,pe.b]]}),e})()},uw7I:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var s,r,o,l,c={winner:null,board:null};if(a.default.isGameFinished(e,t)){var h=(o=a.default.playerWon(e,t.huPlayer),l=a.default.playerWon(e,t.aiPlayer),o?"huPlayer":l?"aiPlayer":"draw");c.board=e,c.winner=h}else{var d=(s=(0,n.default)(e,t,i),r=Array.from(e),void 0!==s&&(r[s]=t.aiPlayer),r);if(a.default.isGameFinished(d,t)){var p=a.default.playerWon(d,t.aiPlayer)?"aiPlayer":"draw";c.board=d,c.winner=p}else c.board=d}return c};var a=s(i("wEoJ")),n=s(i("GFZ9"));function s(e){return e&&e.__esModule?e:{default:e}}},wEoJ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,null,[{key:"playerWon",value:function(e,t){return e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t}},{key:"isGameFinished",value:function(e,t){if(!this.isMovesLeft(e,t))return!0;var i=t.aiPlayer;return!(!this.playerWon(e,t.huPlayer)&&!this.playerWon(e,i))}},{key:"getEmptyIndexies",value:function(e,t){var i=t.huPlayer,a=t.aiPlayer;return e.filter((function(e){return e!==i&&e!==a}))}},{key:"isMovesLeft",value:function(e,t){return 0!==this.getEmptyIndexies(e,t).length}}]),e}();t.default=n}}]);