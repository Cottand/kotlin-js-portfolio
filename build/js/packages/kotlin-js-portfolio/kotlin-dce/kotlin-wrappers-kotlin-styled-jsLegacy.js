(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-extensions-jsLegacy', 'inline-style-prefixer', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'styled-components', 'react', 'react-dom', 'react', 'kotlinx-html-js', 'styled-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('styled-components'), require('react'), require('react-dom'), require('react'), require('kotlinx-html-js'), require('styled-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof StyledComponents === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }root['kotlin-wrappers-kotlin-styled-jsLegacy'] = factory(typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-styled-jsLegacy'], kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-extensions-jsLegacy'], this['inline-style-prefixer'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['styled-components'], react, this['react-dom'], ReactModule, this['kotlinx-html-js'], StyledComponents);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$styled_components, $module$react, $module$react_dom, $module$react_0, $module$kotlinx_html_js, $module$styled_components_0) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CSSBuilder = $module$kotlin_css.kotlinx.css.CSSBuilder;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RElementBuilder;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var invoke = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_dgimx$;
  var invoke_0 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_9p99ed$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var invoke_1 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_z5wujd$;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_7g4vsr$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledElementBuilder.prototype = Object.create(RElementBuilder.prototype);
  StyledElementBuilder.prototype.constructor = StyledElementBuilder;
  StyledDOMBuilder.prototype = Object.create(RDOMBuilder.prototype);
  StyledDOMBuilder.prototype.constructor = StyledDOMBuilder;
  function StyleSheet(name, isStatic) {
    if (isStatic === void 0)
      isStatic = false;
    this.name = name;
    this.isStatic = isStatic;
    this.isLoaded_1mk3xi$_0 = false;
    this.holders_q142jc$_0 = ArrayList_init();
  }
  StyleSheet.prototype.dependsOn_tsq8y7$ = function (handler) {
    handler().inject();
  };
  StyleSheet.prototype.css_wopuc9$ = function (parents, builder) {
    var $receiver = new CssHolder(this, parents.concat([builder]));
    this.addCssHolder_jwasi7$($receiver);
    return $receiver;
  };
  StyleSheet.prototype.addCssHolder_jwasi7$ = function (holder) {
    this.holders_q142jc$_0.add_11rb$(holder);
  };
  function StyleSheet$inject$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$it.second.ruleSets_8be2vx$;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var r = tmp$[tmp$_0];
        r($receiver);
      }
      return Unit;
    };
  }
  StyleSheet.prototype.inject = function () {
    if (!this.isLoaded_1mk3xi$_0 && this.isStatic) {
      this.isLoaded_1mk3xi$_0 = true;
      var $receiver = this.holders_q142jc$_0;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0 = element.properties;
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination_0.add_11rb$(to(item, element));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      var keys = destination;
      var $receiver_1 = new CSSBuilder(void 0, false);
      var tmp$_1;
      tmp$_1 = keys.iterator();
      while (tmp$_1.hasNext()) {
        var element_0 = tmp$_1.next();
        $receiver_1.invoke_32jdrg$('.' + getClassName_0(this, element_0.first), StyleSheet$inject$lambda$lambda$lambda(element_0));
      }
      var builder = $receiver_1;
      injectGlobal(builder.toString());
    }};
  StyleSheet.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleSheet', interfaces: []};
  function CssHolder(sheet, ruleSets) {
    this.sheet_0 = sheet;
    this.ruleSets_8be2vx$ = ruleSets;
    this._properties_0 = ArrayList_init();
  }
  Object.defineProperty(CssHolder.prototype, 'properties', {configurable: true, get: function () {
    return this._properties_0;
  }});
  function CssHolder$provideDelegate$lambda$lambda(this$CssHolder, closure$property) {
    return function ($receiver) {
      if (this$CssHolder.sheet_0.isStatic) {
        $receiver.unaryPlus_pdl1vz$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        this$CssHolder.sheet_0.inject();
      }if (!this$CssHolder.sheet_0.isStatic || !$receiver.allowClasses) {
        $receiver.styleName.add_11rb$(getClassName_0(this$CssHolder.sheet_0, closure$property));
        var $receiver_0 = this$CssHolder.ruleSets_8be2vx$;
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
          var element = $receiver_0[tmp$];
          element($receiver);
        }
      }return Unit;
    };
  }
  function CssHolder$provideDelegate$lambda(this$CssHolder) {
    return function (f, property) {
      return CssHolder$provideDelegate$lambda$lambda(this$CssHolder, property);
    };
  }
  CssHolder.prototype.provideDelegate_n5byny$ = function (thisRef, providingProperty) {
    this._properties_0.add_11rb$(providingProperty);
    return new ReadOnlyProperty(CssHolder$provideDelegate$lambda(this));
  };
  CssHolder.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssHolder', interfaces: []};
  function getClassName_0($receiver, property) {
    return $receiver.name + '-' + property.callableName;
  }
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
  function StyledElementBuilder(type, attrs) {
    if (attrs === void 0) {
      attrs = {};
    }RElementBuilder.call(this, attrs);
    this.type_3g7xlt$_0 = type;
    this.css_i7l61k$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledElementBuilder.prototype, 'type', {get: function () {
    return this.type_3g7xlt$_0;
  }});
  Object.defineProperty(StyledElementBuilder.prototype, 'css', {configurable: true, get: function () {
    return this.css_i7l61k$_0;
  }});
  StyledElementBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.attrs, this.childList);
  };
  StyledElementBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledElementBuilder', interfaces: [StyledBuilder, RElementBuilder]};
  function StyledDOMBuilder(factory) {
    RDOMBuilder.call(this, factory);
    this.type_redftz$_0 = this.attrs.tagName;
    this.css_en1qsi$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.type_redftz$_0;
  }});
  Object.defineProperty(StyledDOMBuilder.prototype, 'css', {configurable: true, get: function () {
    return this.css_en1qsi$_0;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.props, this.childList);
  };
  StyledDOMBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  function GlobalStyles() {
    GlobalStyles_instance = this;
    this.component_0 = functionalComponent(void 0, GlobalStyles$component$lambda);
    this.root_djryty$_0 = lazy(GlobalStyles$root$lambda);
    this.styles_0 = ArrayList_init();
  }
  Object.defineProperty(GlobalStyles.prototype, 'root_0', {configurable: true, get: function () {
    return this.root_djryty$_0.value;
  }});
  GlobalStyles.prototype.add_tpp4ch$ = function (globalStyle) {
    this.styles_0.add_11rb$(globalStyle);
    var tmp$ = GlobalStyles_getInstance().component_0;
    var $receiver = {};
    $receiver.globalStyles = this.styles_0;
    var reactElement = createElement(tmp$, $receiver);
    render(reactElement, this.root_0);
  };
  function GlobalStyles$component$lambda($receiver, props) {
    var tmp$;
    tmp$ = props.globalStyles.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = {};
      $receiver.child_k3oess$(element, $receiver_0, emptyList());
    }
    return Unit;
  }
  function GlobalStyles$root$lambda() {
    var tmp$;
    var element = Kotlin.isType(tmp$ = ensureNotNull(window.document.body).appendChild(window.document.createElement('div')), Element) ? tmp$ : throwCCE();
    element.setAttribute('id', 'sc-global-styles');
    return element;
  }
  GlobalStyles.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GlobalStyles', interfaces: []};
  var GlobalStyles_instance = null;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance === null) {
      new GlobalStyles();
    }return GlobalStyles_instance;
  }
  function injectGlobal$lambda(closure$string) {
    return function () {
      return invoke($module$styled_components.createGlobalStyle, closure$string, []);
    };
  }
  function injectGlobal$lambda_0(closure$globalStyle) {
    return function (it) {
      GlobalStyles_getInstance().add_tpp4ch$(closure$globalStyle);
      return Unit;
    };
  }
  function injectGlobal(string) {
    var globalStyle = devOverrideUseRef(injectGlobal$lambda(string));
    Promise.resolve(Unit).then(injectGlobal$lambda_0(globalStyle));
  }
  function devOverrideUseRef$lambda() {
    throw Error_init('invalid hook call');
  }
  function devOverrideUseRef(action) {
    var tmp$;
    if (process.env.NODE_ENV !== 'production') {
      var useRef = $module$react_0.useRef;
      $module$react_0.useRef = devOverrideUseRef$lambda;
      var result = action();
      $module$react_0.useRef = useRef;
      tmp$ = result;
    } else
      tmp$ = action();
    return tmp$;
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda$lambda(it) {
    return it._css;
  }
  function Styled$wrap$lambda$lambda(closure$type) {
    return function () {
      return invoke_0(rawStyled(closure$type), [Styled$wrap$lambda$lambda$lambda]);
    };
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = devOverrideUseRef(Styled$wrap$lambda$lambda(type));
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_lnfw8r$ = function (type, css, props, children) {
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      var wrappedType = this.wrap_0(type);
      var styledProps = props;
      styledProps._css = css.toString();
      if (!css.classes.isEmpty()) {
        styledProps.className = joinToString(css.classes, ' ');
      }if (!css.styleName.isEmpty()) {
        styledProps['data-style'] = joinToString(css.styleName, ' ');
      }return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
    } else {
      if (!css.classes.isEmpty()) {
        props.className = joinToString(css.classes, ' ');
      }return createElement.apply(null, [type, props].concat(copyToArray(children)));
    }
  };
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  function rawStyled(target) {
    return $module$styled_components_0.default(target);
  }
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$styled.StyleSheet = StyleSheet;
  package$styled.CssHolder = CssHolder;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.StyledElementBuilder = StyledElementBuilder;
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  package$styled.injectGlobal_61zpoe$ = injectGlobal;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-jsLegacy.js.map
