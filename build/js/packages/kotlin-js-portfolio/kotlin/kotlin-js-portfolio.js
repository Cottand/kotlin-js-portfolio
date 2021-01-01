(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-css', 'react-hot-loader', 'muirwik-muirwik-components', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-css'), require('react-hot-loader'), require('muirwik-muirwik-components'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof hotModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'react-hot-loader' was not found. Please, check whether 'react-hot-loader' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof this['muirwik-muirwik-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'muirwik-muirwik-components' was not found. Please, check whether 'muirwik-muirwik-components' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'kotlin-js-portfolio'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-js-portfolio'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-js-portfolio'.");
    }root['kotlin-js-portfolio'] = factory(typeof this['kotlin-js-portfolio'] === 'undefined' ? {} : this['kotlin-js-portfolio'], kotlin, this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-css'], hotModule, this['muirwik-muirwik-components'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_css, $module$react_hot_loader, $module$muirwik_muirwik_components, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var StyleSheet = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyleSheet;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_9vmwvs$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_color = $module$kotlin_css.kotlinx.css.set_color_ommczd$;
  var Unit = Kotlin.kotlin.Unit;
  var margin = $module$kotlin_css.kotlinx.css.margin_cx3uck$;
  var set_fontSize = $module$kotlin_css.kotlinx.css.set_fontSize_n8chyh$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var mThemeProvider = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.mThemeProvider_2g26fu$;
  var mStylesProvider = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.styles.mStylesProvider_8v6z4q$;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var getKClass = Kotlin.getKClass;
  var mCssBaseline = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.mCssBaseline_ss14n$;
  var get_pct = $module$kotlin_css.kotlinx.css.get_pct_rcaex3$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var MTypographyVariant = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.MTypographyVariant;
  var mTypography = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.mTypography_7dzlti$;
  var mCardContent = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.card.mCardContent_6njh8n$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var set_paddingLeft = $module$kotlin_css.kotlinx.css.set_paddingLeft_n8chyh$;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var get_transform = $module$kotlin_css.kotlinx.css.get_transform_z7t51k$;
  var get_deg = $module$kotlin_css.kotlinx.css.properties.get_deg_rcaex3$;
  var rotate = $module$kotlin_css.kotlinx.css.properties.rotate_ycsprd$;
  var get_ms = $module$kotlin_css.kotlinx.css.properties.get_ms_rcaex3$;
  var Timing = $module$kotlin_css.kotlinx.css.properties.Timing;
  var transition = $module$kotlin_css.kotlinx.css.properties.transition_nv0p8h$;
  var mIconButton = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.button.mIconButton_ny9671$;
  var mCardActions = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.card.mCardActions_mx4047$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var mCollapse = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.transitions.mCollapse_k56art$;
  var mCard = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.card.mCard_aegkul$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var Image = $module$kotlin_css.kotlinx.css.Image;
  var HRefOptions = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.HRefOptions;
  var mLink = $module$muirwik_muirwik_components.com.ccfraser.muirwik.components.mLink_un0lt6$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var throwCCE = Kotlin.throwCCE;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var RComponent_init_0 = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  WelcomeStyles.prototype = Object.create(StyleSheet.prototype);
  WelcomeStyles.prototype.constructor = WelcomeStyles;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  Welcome.prototype = Object.create(RComponent.prototype);
  Welcome.prototype.constructor = Welcome;
  function WelcomeStyles() {
    WelcomeStyles_instance = this;
    StyleSheet.call(this, 'WelcomeStyles', true);
    this.textContainer_felub4$_0 = this.css_wopuc9$([], WelcomeStyles$textContainer$lambda).provideDelegate_n5byny$(this, WelcomeStyles$textContainer_metadata);
    this.textInput_7s4gnt$_0 = this.css_wopuc9$([], WelcomeStyles$textInput$lambda).provideDelegate_n5byny$(this, WelcomeStyles$textInput_metadata);
  }
  var WelcomeStyles$textContainer_metadata = new PropertyMetadata('textContainer');
  Object.defineProperty(WelcomeStyles.prototype, 'textContainer', {
    configurable: true,
    get: function () {
      return this.textContainer_felub4$_0.getValue_lrcp0p$(this, WelcomeStyles$textContainer_metadata);
    }
  });
  var WelcomeStyles$textInput_metadata = new PropertyMetadata('textInput');
  Object.defineProperty(WelcomeStyles.prototype, 'textInput', {
    configurable: true,
    get: function () {
      return this.textInput_7s4gnt$_0.getValue_lrcp0p$(this, WelcomeStyles$textInput_metadata);
    }
  });
  function WelcomeStyles$textContainer$lambda($receiver) {
    padding($receiver, get_px(5));
    set_backgroundColor($receiver, rgb(8, 97, 22));
    set_color($receiver, rgb(56, 246, 137));
    return Unit;
  }
  function WelcomeStyles$textInput$lambda($receiver) {
    margin($receiver, get_px(5));
    set_fontSize($receiver, get_px(14));
    return Unit;
  }
  WelcomeStyles.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'WelcomeStyles',
    interfaces: [StyleSheet]
  };
  var WelcomeStyles_instance = null;
  function WelcomeStyles_getInstance() {
    if (WelcomeStyles_instance === null) {
      new WelcomeStyles();
    }return WelcomeStyles_instance;
  }
  var hot;
  var module_0;
  function main$lambda$lambda$lambda(closure$hotWrapper) {
    return function ($receiver) {
      closure$hotWrapper(app($receiver));
      return Unit;
    };
  }
  function main$lambda$lambda(closure$hotWrapper) {
    return function ($receiver) {
      mThemeProvider($receiver, void 0, main$lambda$lambda$lambda(closure$hotWrapper));
      return Unit;
    };
  }
  function main$lambda(closure$hotWrapper) {
    return function ($receiver) {
      mStylesProvider($receiver, 'jss-insertion-point', main$lambda$lambda(closure$hotWrapper));
      return Unit;
    };
  }
  function main() {
    var hotWrapper = hot(module_0);
    render(document.getElementById('root'), void 0, main$lambda(hotWrapper));
  }
  function app$lambda($receiver) {
    return Unit;
  }
  function app($receiver) {
    return $receiver.child_ssazr1$(getKClass(App), app$lambda);
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function App() {
    RComponent_init(this);
    this.expanded_0 = false;
  }
  function App$render$lambda$lambda$lambda($receiver) {
    mTypography($receiver, 'Portfolio Kotlin App', MTypographyVariant.h5, void 0, void 0, true, void 0, void 0, 'h2');
    mTypography($receiver, 'This is the starting point of the wensite');
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda$lambda(this$App) {
    return function ($receiver) {
      this$App.expanded_0 = !this$App.expanded_0;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda(this$App) {
    return function (it) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda$lambda(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      var this$App_0 = this$App;
      var $receiver_0 = $receiver.css;
      if (this$App_0.expanded_0)
        rotate(get_transform($receiver_0), get_deg(180));
      else
        rotate(get_transform($receiver_0), get_deg(0));
      transition($receiver_0, 'transform', get_ms(400), Timing.Companion.easeInOut);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0(this$App) {
    return function ($receiver) {
      var $receiver_0 = $receiver.css;
      set_justifyContent($receiver_0, JustifyContent.spaceBetween);
      set_paddingLeft($receiver_0, get_px(16));
      simpleLink($receiver, 'A link to my github', 'https://github.com/cottand');
      mIconButton($receiver, 'expand_more', void 0, void 0, App$render$lambda$lambda$lambda$lambda(this$App), void 0, void 0, void 0, void 0, void 0, void 0, App$render$lambda$lambda$lambda$lambda_0(this$App));
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$(trimIndent('\n                                This content is hidden and shown by use of the mCollapse control. It also shows a small demo \n                                of the badge control.\n                            '));
    return Unit;
  }
  function App$render$lambda$lambda$lambda$lambda_1($receiver) {
    mTypography($receiver, void 0, void 0, void 0, void 0, void 0, void 0, true, void 0, void 0, void 0, App$render$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function App$render$lambda$lambda$lambda_1($receiver) {
    mCardContent($receiver, void 0, App$render$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      set_width($receiver.css, get_pct(100));
      mCardContent($receiver, void 0, App$render$lambda$lambda$lambda);
      mCardActions($receiver, void 0, App$render$lambda$lambda$lambda_0(this$App));
      mCollapse($receiver, this$App.expanded_0, void 0, void 0, void 0, void 0, void 0, App$render$lambda$lambda$lambda_1);
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    mCssBaseline($receiver);
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    padding($receiver_0.css, get_px(16));
    mCard($receiver_0, false, void 0, App$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function linearGradient(direction, from, to) {
    return new Image('linear-gradient(' + direction + ', ' + from + ', ' + to + ')');
  }
  function simpleLink($receiver, text, href) {
    return mLink($receiver, 'A link to my github ', new HRefOptions(href));
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function styledInput$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name]), it);
    };
  }
  function WelcomeState(name) {
    this.name = name;
  }
  WelcomeState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WelcomeState',
    interfaces: []
  };
  WelcomeState.prototype.component1 = function () {
    return this.name;
  };
  WelcomeState.prototype.copy_61zpoe$ = function (name) {
    return new WelcomeState(name === void 0 ? this.name : name);
  };
  WelcomeState.prototype.toString = function () {
    return 'WelcomeState(name=' + Kotlin.toString(this.name) + ')';
  };
  WelcomeState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  WelcomeState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Welcome(props) {
    RComponent_init_0(props, this);
    this.state = new WelcomeState(props.name);
  }
  function Welcome$render$lambda$lambda$lambda(this$Welcome) {
    return function (event) {
      var tmp$, tmp$_0;
      tmp$_0 = new WelcomeState((Kotlin.isType(tmp$ = event.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
      this$Welcome.setState(tmp$_0);
      return Unit;
    };
  }
  Welcome.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    $receiver_0.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textContainer);
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Welp hot reload does work I guess');
    $receiver_0.child_52psg1$($receiver_0_0.create());
    $receiver_0.unaryPlus_pdl1vz$('Hello, ' + this.state.name);
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledInput$lambda(null, null, null, null));
    $receiver_0_1.css.unaryPlus_ocqyl0$(WelcomeStyles_getInstance().textInput);
    var $receiver_1 = $receiver_0_1.attrs;
    $receiver_1.type = InputType.text;
    $receiver_1.value = this.state.name;
    set_onChangeFunction($receiver_1, Welcome$render$lambda$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_1.create());
  };
  Welcome.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Welcome',
    interfaces: [RComponent]
  };
  Object.defineProperty(_, 'WelcomeStyles', {
    get: WelcomeStyles_getInstance
  });
  _.main = main;
  _.app_ss14n$ = app;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  var package$components = _.components || (_.components = {});
  package$components.App = App;
  var package$util = _.util || (_.util = {});
  package$util.linearGradient_eifxns$ = linearGradient;
  package$util.simpleLink_lzccvt$ = simpleLink;
  _.WelcomeState = WelcomeState;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  _.Welcome = Welcome;
  hot = $module$react_hot_loader.hot;
  module_0 = module;
  main();
  Kotlin.defineModule('kotlin-js-portfolio', _);
  return _;
}));

//# sourceMappingURL=kotlin-js-portfolio.js.map
