@file:JsModule("react")
@file:JsNonModule
@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
package React

import kotlin.js.*
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*
import tsstdlib.Partial
import tsstdlib.Readonly
import NativeClipboardEvent
import NativeCompositionEvent
import NativeDragEvent
import NativePointerEvent
import NativeFocusEvent
import NativeKeyboardEvent
import NativeMouseEvent
import NativeTouchEvent
import NativeUIEvent
import NativeWheelEvent
import NativeAnimationEvent
import NativeTransitionEvent
import Properties__1
import tsstdlib.HTMLTableDataCellElement
import tsstdlib.HTMLTableHeaderCellElement
import HTMLWebViewElement
import tsstdlib.StyleMedia

external interface RefObject<T> {
    var current: T?
}

external interface `T$5`<T> {
    fun bivarianceHack(instance: T?)
}

external interface Attributes {
    var key: dynamic /* String? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface RefAttributes<T> : Attributes {
    var ref: dynamic /* Any | RefObject<T>? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ClassAttributes<T> : Attributes {
    var ref: dynamic /* String? | Any | RefObject<T>? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ReactElement<P, T> {
    var type: T
    var props: P
    var key: dynamic /* String? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ReactElement__0 : ReactElement<Any, dynamic /* String | (props: Any) -> ReactElement__0? | Any */>

external interface ReactElement__1<P> : ReactElement<P, dynamic /* String | (props: Any) -> ReactElement__0? | Any */>

external interface ReactComponentElement<T, P> : ReactElement<P, Any>

external interface FunctionComponentElement<P> : ReactElement<P, FunctionComponent<P>> {
    var ref: Any?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ComponentElement<P, T : Component__2<P, ComponentState>> : ReactElement<P, ComponentClass__1<P>> {
    var ref: dynamic /* String? | Any | RefObject<T>? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface DOMElement<P, T : Element> : ReactElement<P, String> {
    var ref: dynamic /* String? | Any | RefObject<T>? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ReactHTMLElement<T : HTMLElement> : DetailedReactHTMLElement<AllHTMLAttributes<T>, T>

external interface DetailedReactHTMLElement<P : HTMLAttributes<T>, T : HTMLElement> : DOMElement<P, T> {
    override var type: String /* "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" */
}

external interface ReactSVGElement : DOMElement<SVGAttributes<SVGElement>, SVGElement> {
    override var type: String /* "animate" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "symbol" | "text" | "textPath" | "tspan" | "use" | "view" */
}

external interface ReactPortal : ReactElement__0 {
    override var key: dynamic /* String? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface HTMLFactory<T : HTMLElement> : DetailedHTMLFactory<AllHTMLAttributes<T>, T>

external interface DetailedHTMLFactory<P : HTMLAttributes<T>, T : HTMLElement> {
    @nativeInvoke
    operator fun <P : DOMAttributes<T>, T : Element> invoke(props: ClassAttributes<T> /* ClassAttributes<T> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): DOMElement<P, T>
    @nativeInvoke
    operator fun invoke(props: ClassAttributes<T> /* ClassAttributes<T> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): DetailedReactHTMLElement<P, T>
}

external interface SVGFactory {
    @nativeInvoke
    operator fun <P : DOMAttributes<T>, T : Element> invoke(props: ClassAttributes<T> /* ClassAttributes<T> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): DOMElement<P, T>
    @nativeInvoke
    operator fun invoke(props: ClassAttributes<SVGElement> /* ClassAttributes<SVGElement> & SVGAttributes<SVGElement> */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): ReactSVGElement
}

external fun <T : HTMLElement> createFactory(type: String /* "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" */): HTMLFactory<T>

external fun createFactory(type: String /* "animate" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "symbol" | "text" | "textPath" | "tspan" | "use" | "view" */): SVGFactory

external fun <P : DOMAttributes<T>, T : Element> createFactory(type: String): DOMFactory<P, T>

external fun <P> createFactory(type: FunctionComponent<P>): FunctionComponentFactory<P>

external fun <P> createFactory(type: ClassicComponentClass<P> /* ClassicComponentClass<P> & Any */): CFactory<P, ClassicComponent<P, ComponentState>>

external fun <P, T : Component__2<P, ComponentState>, C : ComponentClass__1<P>> createFactory(type: C /* C & Any */): CFactory<P, T>

external fun <P> createFactory(type: ComponentClass__1<P>): Factory<P>

external fun createElement(type: String /* "input" */, props: InputHTMLAttributes<HTMLInputElement> /* InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement> */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

external fun <P : HTMLAttributes<T>, T : HTMLElement> createElement(type: String /* "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "slot" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "animate" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "symbol" | "text" | "textPath" | "tspan" | "use" | "view" */, props: ClassAttributes<T> /* ClassAttributes<T> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): dynamic /* DOMElement */

external fun <P : Any> createElement(type: FunctionComponent<P>, props: Attributes /* Attributes & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): dynamic /* FunctionComponentElement | ReactElement__1 */

external fun <P : Any> createElement(type: ClassicComponentClass<P> /* ClassicComponentClass<P> & Any */, props: ClassAttributes<ClassicComponent<P, ComponentState>> /* ClassAttributes<ClassicComponent<P, ComponentState>> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): CElement<P, ClassicComponent<P, ComponentState>>

external fun <P : Any, T : Component__2<P, ComponentState>, C : ComponentClass__1<P>> createElement(type: C /* C & Any */, props: ClassAttributes<T> /* ClassAttributes<T> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): CElement<P, T>

external fun <P : Any> createElement(type: ComponentClass__1<P>, props: Attributes /* Attributes & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): ReactElement__1<P>

external fun <P : Any> createElement(type: String, props: Attributes /* Attributes & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): ReactElement__1<P>

external fun <P : HTMLAttributes<T>, T : HTMLElement> cloneElement(element: DetailedReactHTMLElement<P, T>, props: P = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): DetailedReactHTMLElement<P, T>

external fun <P : HTMLAttributes<T>, T : HTMLElement> cloneElement(element: ReactHTMLElement<T>, props: P = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): ReactHTMLElement<T>

external fun <P : SVGAttributes<T>, T : SVGElement> cloneElement(element: ReactSVGElement, props: P = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): ReactSVGElement

external fun <P : DOMAttributes<T>, T : Element> cloneElement(element: DOMElement<P, T>, props: DOMAttributes<T> /* DOMAttributes<T> & P */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): DOMElement<P, T>

external fun <P> cloneElement(element: FunctionComponentElement<P>, props: Partial<P> /* Partial<P> & Attributes */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): FunctionComponentElement<P>

external fun <P, T : Component__2<P, ComponentState>> cloneElement(element: CElement<P, T>, props: Partial<P> /* Partial<P> & ClassAttributes<T> */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): CElement<P, T>

external fun <P> cloneElement(element: ReactElement__1<P>, props: Partial<P> /* Partial<P> & Attributes */ = definedExternally, vararg children: Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */): ReactElement__1<P>

external interface ProviderProps<T> {
    var value: T
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ConsumerProps<T> {
    var children: (value: T) -> dynamic
}

external interface ExoticComponent<P> {
    @nativeInvoke
    operator fun invoke(props: P): ReactElement__0?
    var `$$typeof`: Any
}

external interface NamedExoticComponent<P> : ExoticComponent<P> {
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ProviderExoticComponent<P> : ExoticComponent<P> {
    var propTypes: WeakValidationMap<P>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface Context<T> {
    var Provider: Provider<T>
    var Consumer: Consumer<T>
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
}

external fun <T> createContext(defaultValue: T): Context<T>

external fun <P> isValidElement(obj: Any?): Boolean

external var Children: ReactChildren

external interface `T$6` {
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
}

external var Fragment: ExoticComponent<`T$6`>

external var StrictMode: ExoticComponent<`T$6`>

external interface SuspenseProps {
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
    var fallback: Any?
}

external var Suspense: ExoticComponent<SuspenseProps>

external var version: String

external interface ProfilerProps {
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
    var id: String
    var onRender: ProfilerOnRenderCallback
}

external var Profiler: ExoticComponent<ProfilerProps>

external interface `T$7` {
    @nativeGetter
    operator fun get(key: String): dynamic /* Component__1<Any>? | Element? */
    @nativeSetter
    operator fun set(key: String, value: Component__1<Any>)
    @nativeSetter
    operator fun set(key: String, value: Element)
}

external open class Component<P, S, SS> : ComponentLifecycle<P, S, SS> {
    override val componentDidMount: (() -> Unit)?
    override val shouldComponentUpdate: ((nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: Any) -> Boolean)?
    override val componentWillUnmount: (() -> Unit)?
    override val componentDidCatch: ((error: Error, errorInfo: ErrorInfo) -> Unit)?
    override val getSnapshotBeforeUpdate: ((prevProps: Readonly<P>, prevState: Readonly<S>) -> SS?)?
    override val componentDidUpdate: ((prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) -> Unit)?
    override val componentWillMount: (() -> Unit)?
    override val UNSAFE_componentWillMount: (() -> Unit)?
    override val componentWillReceiveProps: ((nextProps: Readonly<P>, nextContext: Any) -> Unit)?
    override val UNSAFE_componentWillReceiveProps: ((nextProps: Readonly<P>, nextContext: Any) -> Unit)?
    override val componentWillUpdate: ((nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: Any) -> Unit)?
    override val UNSAFE_componentWillUpdate: ((nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: Any) -> Unit)?
    open var context: Any
    constructor(props: Readonly<P>)
    constructor(props: P)
    constructor(props: P, context: Any)
    open fun setState(state: ((prevState: Readonly<S>, props: Readonly<P>) -> Any?)?, callback: () -> Unit = definedExternally)
    open fun setState(state: ((prevState: Readonly<S>, props: Readonly<P>) -> Any?)?)
    open fun setState(state: Any?, callback: () -> Unit = definedExternally)
    open fun setState(state: Any?)
    open fun setState(state: S?, callback: () -> Unit = definedExternally)
    open fun setState(state: S?)
    open fun forceUpdate(callback: () -> Unit = definedExternally)
    open fun render(): dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
    open var props: Readonly<P> /* Readonly<P> & Readonly<`T$6`> */
    open var state: Readonly<S>
    open var refs: `T$7`

    companion object {
        var contextType: Context<Any>
    }
}

external open class Component__2<P, S> : Component<P, S, Any>

external open class Component__1<P> : Component<P, Any, Any>

external open class PureComponent<P, S, SS> : Component<P, S, SS>

external interface ClassicComponent<P, S> : Component__2<P, S> {
    fun replaceState(nextState: S, callback: () -> Unit = definedExternally)
    fun isMounted(): Boolean
    val getInitialState: (() -> S)?
}

external interface ChildContextProvider<CC> {
    fun getChildContext(): CC
}

external interface FunctionComponent<P> {
    @nativeInvoke
    operator fun invoke(props: P /* P & `T$6` */, context: Any = definedExternally): ReactElement<Any, Any>?
    var propTypes: WeakValidationMap<P>?
        get() = definedExternally
        set(value) = definedExternally
    var contextTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var defaultProps: Partial<P>?
        get() = definedExternally
        set(value) = definedExternally
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface VoidFunctionComponent<P> {
    @nativeInvoke
    operator fun invoke(props: P, context: Any = definedExternally): ReactElement<Any, Any>?
    var propTypes: WeakValidationMap<P>?
        get() = definedExternally
        set(value) = definedExternally
    var contextTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var defaultProps: Partial<P>?
        get() = definedExternally
        set(value) = definedExternally
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ForwardRefRenderFunction<T, P> {
    @nativeInvoke
    operator fun invoke(props: P /* P & `T$6` */, ref: ((instance: T?) -> Unit)?): ReactElement__0?
    @nativeInvoke
    operator fun invoke(props: P /* P & `T$6` */, ref: MutableRefObject<T?>?): ReactElement__0?
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
    var defaultProps: Any?
        get() = definedExternally
        set(value) = definedExternally
    var propTypes: Any?
        get() = definedExternally
        set(value) = definedExternally
}

external interface RefForwardingComponent<T, P> : ForwardRefRenderFunction<T, P>

external interface ComponentClass<P, S> : StaticLifecycle<P, S> {
    var propTypes: WeakValidationMap<P>?
        get() = definedExternally
        set(value) = definedExternally
    var contextType: Context<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var contextTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var childContextTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var defaultProps: Partial<P>?
        get() = definedExternally
        set(value) = definedExternally
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ComponentClass__1<P> : ComponentClass<P, ComponentState>

external interface ClassicComponentClass<P> : ComponentClass__1<P> {
    val getDefaultProps: (() -> P)?
}

external interface ComponentLifecycle<P, S, SS> : NewLifecycle<P, S, SS>, DeprecatedLifecycle<P, S> {
    val componentDidMount: (() -> Unit)?
    val shouldComponentUpdate: ((nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: Any) -> Boolean)?
    val componentWillUnmount: (() -> Unit)?
    val componentDidCatch: ((error: Error, errorInfo: ErrorInfo) -> Unit)?
}

external interface ComponentLifecycle__2<P, S> : ComponentLifecycle<P, S, Any>

external interface StaticLifecycle<P, S> {
    var getDerivedStateFromProps: GetDerivedStateFromProps<P, S>?
        get() = definedExternally
        set(value) = definedExternally
    var getDerivedStateFromError: GetDerivedStateFromError<P, S>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface NewLifecycle<P, S, SS> {
    val getSnapshotBeforeUpdate: ((prevProps: Readonly<P>, prevState: Readonly<S>) -> SS?)?
    val componentDidUpdate: ((prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) -> Unit)?
}

external interface DeprecatedLifecycle<P, S> {
    val componentWillMount: (() -> Unit)?
    val UNSAFE_componentWillMount: (() -> Unit)?
    val componentWillReceiveProps: ((nextProps: Readonly<P>, nextContext: Any) -> Unit)?
    val UNSAFE_componentWillReceiveProps: ((nextProps: Readonly<P>, nextContext: Any) -> Unit)?
    val componentWillUpdate: ((nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: Any) -> Unit)?
    val UNSAFE_componentWillUpdate: ((nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: Any) -> Unit)?
}

external interface Mixin<P, S> : ComponentLifecycle__2<P, S> {
    var mixins: Array<Mixin<P, S>>?
        get() = definedExternally
        set(value) = definedExternally
    var statics: Json?
        get() = definedExternally
        set(value) = definedExternally
    var displayName: String?
        get() = definedExternally
        set(value) = definedExternally
    var propTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var contextTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    var childContextTypes: ValidationMap<Any>?
        get() = definedExternally
        set(value) = definedExternally
    val getDefaultProps: (() -> P)?
    val getInitialState: (() -> S)?
}

external interface ComponentSpec<P, S> : Mixin<P, S> {
    fun render(): dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
    @nativeGetter
    operator fun get(propertyName: String): Any?
    @nativeSetter
    operator fun set(propertyName: String, value: Any)
}

external fun <T> createRef(): RefObject<T>

external interface ForwardRefExoticComponent<P> : NamedExoticComponent<P> {
    var defaultProps: Partial<P>?
        get() = definedExternally
        set(value) = definedExternally
    var propTypes: WeakValidationMap<P>?
        get() = definedExternally
        set(value) = definedExternally
}

external fun <T, P> forwardRef(render: ForwardRefRenderFunction<T, P>): ForwardRefExoticComponent<PropsWithoutRef<P> /* PropsWithoutRef<P> & RefAttributes<T> */>

external interface `T$8`<T> {
    var type: T
}

external fun <P : Any?> memo(Component: SFC<P>, propsAreEqual: (prevProps: Readonly<P /* P & `T$6` */>, nextProps: Readonly<P /* P & `T$6` */>) -> Boolean = definedExternally): NamedExoticComponent<P>

external fun <P : Any?> memo(Component: SFC<P>): NamedExoticComponent<P>

external fun <T> memo(Component: T, propsAreEqual: (prevProps: Readonly<ComponentProps<T>>, nextProps: Readonly<ComponentProps<T>>) -> Boolean = definedExternally): NamedExoticComponent<ComponentPropsWithRef<T>> /* NamedExoticComponent<ComponentPropsWithRef<T>> & `T$8`<T> */

external fun <T> memo(Component: T): NamedExoticComponent<ComponentPropsWithRef<T>> /* NamedExoticComponent<ComponentPropsWithRef<T>> & `T$8`<T> */

external interface `T$9`<T> {
    var _result: T
}

external interface `T$10`<T> {
    var default: T
}

external fun <T> lazy(factory: () -> Promise<`T$10`<T>>): ExoticComponent<ComponentPropsWithRef<T>> /* ExoticComponent<ComponentPropsWithRef<T>> & `T$9`<T> */

external interface MutableRefObject<T> {
    var current: T
}

external fun <T> useContext(context: Context<T>): T

external fun <S> useState(initialState: S): dynamic /* JsTuple<S, Dispatch<dynamic /* S | (prevState: S) -> S */>> */

external fun <S> useState(initialState: () -> S): dynamic /* JsTuple<S, Dispatch<dynamic /* S | (prevState: S) -> S */>> */

external fun <S> useState(): dynamic /* JsTuple<S?, Dispatch<dynamic /* S? | ((prevState: S?) -> S?)? */>> */

external fun <R : ReducerWithoutAction<Any>, I> useReducer(reducer: R, initializerArg: I, initializer: (arg: I) -> ReducerStateWithoutAction<R>): dynamic /* JsTuple<ReducerStateWithoutAction<R>, DispatchWithoutAction> */

external fun <R : ReducerWithoutAction<Any>> useReducer(reducer: R, initializerArg: ReducerStateWithoutAction<R>, initializer: Nothing? = definedExternally): dynamic /* JsTuple<ReducerStateWithoutAction<R>, DispatchWithoutAction> | JsTuple<ReducerState<R>, Dispatch<ReducerAction<R>>> */

external fun <R : ReducerWithoutAction<Any>> useReducer(reducer: R, initializerArg: ReducerStateWithoutAction<R>): dynamic /* JsTuple<ReducerStateWithoutAction<R>, DispatchWithoutAction> | JsTuple<ReducerState<R>, Dispatch<ReducerAction<R>>> */

external fun <R : Reducer<Any, Any>, I> useReducer(reducer: R, initializerArg: I /* I & ReducerState<R> */, initializer: (arg: I /* I & ReducerState<R> */) -> ReducerState<R>): dynamic /* JsTuple<ReducerState<R>, Dispatch<ReducerAction<R>>> */

external fun <T> useRef(initialValue: T): MutableRefObject<T>

external fun <T> useRef(initialValue: T?): RefObject<T>

external fun <T> useRef(): MutableRefObject<T?>

external fun useLayoutEffect(effect: EffectCallback, deps: DependencyList = definedExternally)

external fun useEffect(effect: EffectCallback, deps: DependencyList = definedExternally)

external fun <T, R : T> useImperativeHandle(ref: Any, init: () -> R, deps: DependencyList = definedExternally)

external fun <T, R : T> useImperativeHandle(ref: Any, init: () -> R)

external fun <T, R : T> useImperativeHandle(ref: RefObject<T>?, init: () -> R, deps: DependencyList = definedExternally)

external fun <T, R : T> useImperativeHandle(ref: RefObject<T>?, init: () -> R)

external fun <T : (args: Any) -> Any> useCallback(callback: T, deps: DependencyList): T

external fun <T> useMemo(factory: () -> T, deps: DependencyList?): T

external fun <T> useDebugValue(value: T, format: (value: T) -> Any = definedExternally)

external interface BaseSyntheticEvent<E, C, T> {
    var nativeEvent: E
    var currentTarget: C
    var target: T
    var bubbles: Boolean
    var cancelable: Boolean
    var defaultPrevented: Boolean
    var eventPhase: Number
    var isTrusted: Boolean
    fun preventDefault()
    fun isDefaultPrevented(): Boolean
    fun stopPropagation()
    fun isPropagationStopped(): Boolean
    fun persist()
    var timeStamp: Number
    var type: String
}

external interface SyntheticEvent<T, E> : BaseSyntheticEvent<E, EventTarget /* EventTarget & T */, EventTarget>

external interface SyntheticEvent__1<T> : SyntheticEvent<T, Event>

external interface ClipboardEvent<T> : SyntheticEvent<T, NativeClipboardEvent> {
    var clipboardData: DataTransfer
}

external interface CompositionEvent<T> : SyntheticEvent<T, NativeCompositionEvent> {
    var data: String
}

external interface DragEvent<T> : MouseEvent<T, NativeDragEvent> {
    var dataTransfer: DataTransfer
}

external interface PointerEvent<T> : MouseEvent<T, NativePointerEvent> {
    var pointerId: Number
    var pressure: Number
    var tangentialPressure: Number
    var tiltX: Number
    var tiltY: Number
    var twist: Number
    var width: Number
    var height: Number
    var pointerType: String /* "mouse" | "pen" | "touch" */
    var isPrimary: Boolean
}

external interface FocusEvent<T> : SyntheticEvent<T, NativeFocusEvent> {
    var relatedTarget: EventTarget?
    override var target: EventTarget /* EventTarget & T */
}

external interface FormEvent<T> : SyntheticEvent__1<T>

external interface InvalidEvent<T> : SyntheticEvent__1<T> {
    override var target: EventTarget /* EventTarget & T */
}

external interface ChangeEvent<T> : SyntheticEvent__1<T> {
    override var target: EventTarget /* EventTarget & T */
}

external interface KeyboardEvent<T> : SyntheticEvent<T, NativeKeyboardEvent> {
    var altKey: Boolean
    var charCode: Number
    var ctrlKey: Boolean
    var code: String
    fun getModifierState(key: String): Boolean
    var key: String
    var keyCode: Number
    var locale: String
    var location: Number
    var metaKey: Boolean
    var repeat: Boolean
    var shiftKey: Boolean
    var which: Number
}

external interface MouseEvent<T, E> : UIEvent<T, E> {
    var altKey: Boolean
    var button: Number
    var buttons: Number
    var clientX: Number
    var clientY: Number
    var ctrlKey: Boolean
    fun getModifierState(key: String): Boolean
    var metaKey: Boolean
    var movementX: Number
    var movementY: Number
    var pageX: Number
    var pageY: Number
    var relatedTarget: EventTarget?
    var screenX: Number
    var screenY: Number
    var shiftKey: Boolean
}

external interface MouseEvent__1<T> : MouseEvent<T, NativeMouseEvent>

external interface TouchEvent<T> : UIEvent<T, NativeTouchEvent> {
    var altKey: Boolean
    var changedTouches: TouchList
    var ctrlKey: Boolean
    fun getModifierState(key: String): Boolean
    var metaKey: Boolean
    var shiftKey: Boolean
    var targetTouches: TouchList
    var touches: TouchList
}

external interface UIEvent<T, E> : SyntheticEvent<T, E> {
    var detail: Number
    var view: AbstractView
}

external interface UIEvent__1<T> : UIEvent<T, NativeUIEvent>

external interface WheelEvent<T> : MouseEvent<T, NativeWheelEvent> {
    var deltaMode: Number
    var deltaX: Number
    var deltaY: Number
    var deltaZ: Number
}

external interface AnimationEvent<T> : SyntheticEvent<T, NativeAnimationEvent> {
    var animationName: String
    var elapsedTime: Number
    var pseudoElement: String
}

external interface TransitionEvent<T> : SyntheticEvent<T, NativeTransitionEvent> {
    var elapsedTime: Number
    var propertyName: String
    var pseudoElement: String
}

external interface `T$11`<E> {
    fun bivarianceHack(event: E)
}

external interface Props<T> {
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
    var key: dynamic /* String? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var ref: dynamic /* String? | Any | RefObject<T>? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface HTMLProps<T> : AllHTMLAttributes<T>, ClassAttributes<T>

external interface SVGProps<T> : SVGAttributes<T>, ClassAttributes<T>

external interface `T$12` {
    var __html: String
}

external interface DOMAttributes<T> {
    var children: dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
        get() = definedExternally
        set(value) = definedExternally
    var dangerouslySetInnerHTML: `T$12`?
        get() = definedExternally
        set(value) = definedExternally
    var onCopy: ClipboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCopyCapture: ClipboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCut: ClipboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCutCapture: ClipboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPaste: ClipboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPasteCapture: ClipboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCompositionEnd: CompositionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCompositionEndCapture: CompositionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCompositionStart: CompositionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCompositionStartCapture: CompositionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCompositionUpdate: CompositionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCompositionUpdateCapture: CompositionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onFocus: FocusEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onFocusCapture: FocusEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onBlur: FocusEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onBlurCapture: FocusEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onChange: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onChangeCapture: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onBeforeInput: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onBeforeInputCapture: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onInput: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onInputCapture: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onReset: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onResetCapture: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSubmit: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSubmitCapture: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onInvalid: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onInvalidCapture: FormEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoad: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onError: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onErrorCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onKeyDown: KeyboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onKeyDownCapture: KeyboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onKeyPress: KeyboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onKeyPressCapture: KeyboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onKeyUp: KeyboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onKeyUpCapture: KeyboardEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAbort: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAbortCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCanPlay: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCanPlayCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCanPlayThrough: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onCanPlayThroughCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDurationChange: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDurationChangeCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onEmptied: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onEmptiedCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onEncrypted: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onEncryptedCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onEnded: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onEndedCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadedData: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadedDataCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadedMetadata: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadedMetadataCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadStart: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLoadStartCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPause: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPauseCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPlay: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPlayCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPlaying: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPlayingCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onProgress: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onProgressCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onRateChange: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onRateChangeCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSeeked: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSeekedCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSeeking: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSeekingCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onStalled: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onStalledCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSuspend: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSuspendCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTimeUpdate: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTimeUpdateCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onVolumeChange: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onVolumeChangeCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onWaiting: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onWaitingCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAuxClick: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAuxClickCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onClick: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onClickCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onContextMenu: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onContextMenuCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDoubleClick: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDoubleClickCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDrag: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragEnd: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragEndCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragEnter: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragEnterCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragExit: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragExitCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragLeave: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragLeaveCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragOver: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragOverCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragStart: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDragStartCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDrop: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onDropCapture: DragEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseDown: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseDownCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseEnter: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseLeave: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseMove: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseMoveCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseOut: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseOutCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseOver: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseOverCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseUp: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onMouseUpCapture: MouseEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSelect: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onSelectCapture: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchCancel: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchCancelCapture: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchEnd: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchEndCapture: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchMove: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchMoveCapture: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchStart: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTouchStartCapture: TouchEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerDown: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerDownCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerMove: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerMoveCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerUp: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerUpCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerCancel: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerCancelCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerEnter: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerEnterCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerLeave: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerLeaveCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerOver: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerOverCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerOut: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onPointerOutCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onGotPointerCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onGotPointerCaptureCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLostPointerCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onLostPointerCaptureCapture: PointerEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onScroll: UIEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onScrollCapture: UIEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onWheel: WheelEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onWheelCapture: WheelEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAnimationStart: AnimationEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAnimationStartCapture: AnimationEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAnimationEnd: AnimationEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAnimationEndCapture: AnimationEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAnimationIteration: AnimationEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onAnimationIterationCapture: AnimationEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTransitionEnd: TransitionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
    var onTransitionEndCapture: TransitionEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface CSSProperties : Properties__1<dynamic /* String | Number */>

external interface AriaAttributes {
    @nativeGetter
    operator fun get(key: String): Any?
    @nativeSetter
    operator fun set(key: String, value: String?)
    @nativeSetter
    operator fun set(key: String, value: dynamic /* Boolean? | "false" | "true" */)
    @nativeSetter
    operator fun set(key: String, value: Number?)
}

external interface HTMLAttributes<T> : AriaAttributes, DOMAttributes<T> {
    var defaultChecked: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var defaultValue: dynamic /* String? | Number? | ReadonlyArray<String>? */
        get() = definedExternally
        set(value) = definedExternally
    var suppressContentEditableWarning: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var suppressHydrationWarning: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var accessKey: String?
        get() = definedExternally
        set(value) = definedExternally
    var className: String?
        get() = definedExternally
        set(value) = definedExternally
    var contentEditable: dynamic /* Boolean? | "true" | "false" | "inherit" */
        get() = definedExternally
        set(value) = definedExternally
    var contextMenu: String?
        get() = definedExternally
        set(value) = definedExternally
    var dir: String?
        get() = definedExternally
        set(value) = definedExternally
    var draggable: dynamic /* Boolean? | "true" | "false" */
        get() = definedExternally
        set(value) = definedExternally
    var hidden: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var id: String?
        get() = definedExternally
        set(value) = definedExternally
    var lang: String?
        get() = definedExternally
        set(value) = definedExternally
    var placeholder: String?
        get() = definedExternally
        set(value) = definedExternally
    var slot: String?
        get() = definedExternally
        set(value) = definedExternally
    var spellCheck: dynamic /* Boolean? | "true" | "false" */
        get() = definedExternally
        set(value) = definedExternally
    var style: CSSProperties?
        get() = definedExternally
        set(value) = definedExternally
    var tabIndex: Number?
        get() = definedExternally
        set(value) = definedExternally
    var title: String?
        get() = definedExternally
        set(value) = definedExternally
    var translate: String? /* "yes" | "no" */
        get() = definedExternally
        set(value) = definedExternally
    var radioGroup: String?
        get() = definedExternally
        set(value) = definedExternally
    var role: String?
        get() = definedExternally
        set(value) = definedExternally
    var about: String?
        get() = definedExternally
        set(value) = definedExternally
    var datatype: String?
        get() = definedExternally
        set(value) = definedExternally
    var inlist: Any?
        get() = definedExternally
        set(value) = definedExternally
    var prefix: String?
        get() = definedExternally
        set(value) = definedExternally
    var property: String?
        get() = definedExternally
        set(value) = definedExternally
    var resource: String?
        get() = definedExternally
        set(value) = definedExternally
    var `typeof`: String?
        get() = definedExternally
        set(value) = definedExternally
    var vocab: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoCapitalize: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoCorrect: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoSave: String?
        get() = definedExternally
        set(value) = definedExternally
    var color: String?
        get() = definedExternally
        set(value) = definedExternally
    var itemProp: String?
        get() = definedExternally
        set(value) = definedExternally
    var itemScope: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var itemType: String?
        get() = definedExternally
        set(value) = definedExternally
    var itemID: String?
        get() = definedExternally
        set(value) = definedExternally
    var itemRef: String?
        get() = definedExternally
        set(value) = definedExternally
    var results: Number?
        get() = definedExternally
        set(value) = definedExternally
    var security: String?
        get() = definedExternally
        set(value) = definedExternally
    var unselectable: String? /* "on" | "off" */
        get() = definedExternally
        set(value) = definedExternally
    var inputMode: String? /* "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" */
        get() = definedExternally
        set(value) = definedExternally
    var `is`: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface AllHTMLAttributes<T> : HTMLAttributes<T> {
    var accept: String?
        get() = definedExternally
        set(value) = definedExternally
    var acceptCharset: String?
        get() = definedExternally
        set(value) = definedExternally
    var action: String?
        get() = definedExternally
        set(value) = definedExternally
    var allowFullScreen: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var allowTransparency: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var alt: String?
        get() = definedExternally
        set(value) = definedExternally
    var `as`: String?
        get() = definedExternally
        set(value) = definedExternally
    var async: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var autoComplete: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var autoPlay: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var capture: dynamic /* Boolean? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var cellPadding: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var cellSpacing: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var charSet: String?
        get() = definedExternally
        set(value) = definedExternally
    var challenge: String?
        get() = definedExternally
        set(value) = definedExternally
    var checked: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var cite: String?
        get() = definedExternally
        set(value) = definedExternally
    var classID: String?
        get() = definedExternally
        set(value) = definedExternally
    var cols: Number?
        get() = definedExternally
        set(value) = definedExternally
    var colSpan: Number?
        get() = definedExternally
        set(value) = definedExternally
    var content: String?
        get() = definedExternally
        set(value) = definedExternally
    var controls: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var coords: String?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String?
        get() = definedExternally
        set(value) = definedExternally
    var data: String?
        get() = definedExternally
        set(value) = definedExternally
    var dateTime: String?
        get() = definedExternally
        set(value) = definedExternally
    var default: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var defer: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var download: Any?
        get() = definedExternally
        set(value) = definedExternally
    var encType: String?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var formAction: String?
        get() = definedExternally
        set(value) = definedExternally
    var formEncType: String?
        get() = definedExternally
        set(value) = definedExternally
    var formMethod: String?
        get() = definedExternally
        set(value) = definedExternally
    var formNoValidate: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var formTarget: String?
        get() = definedExternally
        set(value) = definedExternally
    var frameBorder: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var headers: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var high: Number?
        get() = definedExternally
        set(value) = definedExternally
    var href: String?
        get() = definedExternally
        set(value) = definedExternally
    var hrefLang: String?
        get() = definedExternally
        set(value) = definedExternally
    var htmlFor: String?
        get() = definedExternally
        set(value) = definedExternally
    var httpEquiv: String?
        get() = definedExternally
        set(value) = definedExternally
    var integrity: String?
        get() = definedExternally
        set(value) = definedExternally
    var keyParams: String?
        get() = definedExternally
        set(value) = definedExternally
    var keyType: String?
        get() = definedExternally
        set(value) = definedExternally
    var kind: String?
        get() = definedExternally
        set(value) = definedExternally
    var label: String?
        get() = definedExternally
        set(value) = definedExternally
    var list: String?
        get() = definedExternally
        set(value) = definedExternally
    var loop: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var low: Number?
        get() = definedExternally
        set(value) = definedExternally
    var manifest: String?
        get() = definedExternally
        set(value) = definedExternally
    var marginHeight: Number?
        get() = definedExternally
        set(value) = definedExternally
    var marginWidth: Number?
        get() = definedExternally
        set(value) = definedExternally
    var max: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var maxLength: Number?
        get() = definedExternally
        set(value) = definedExternally
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var mediaGroup: String?
        get() = definedExternally
        set(value) = definedExternally
    var method: String?
        get() = definedExternally
        set(value) = definedExternally
    var min: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var minLength: Number?
        get() = definedExternally
        set(value) = definedExternally
    var multiple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var muted: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var nonce: String?
        get() = definedExternally
        set(value) = definedExternally
    var noValidate: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var open: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var optimum: Number?
        get() = definedExternally
        set(value) = definedExternally
    var pattern: String?
        get() = definedExternally
        set(value) = definedExternally
    override var placeholder: String?
        get() = definedExternally
        set(value) = definedExternally
    var playsInline: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var poster: String?
        get() = definedExternally
        set(value) = definedExternally
    var preload: String?
        get() = definedExternally
        set(value) = definedExternally
    var readOnly: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var rel: String?
        get() = definedExternally
        set(value) = definedExternally
    var required: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var reversed: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var rows: Number?
        get() = definedExternally
        set(value) = definedExternally
    var rowSpan: Number?
        get() = definedExternally
        set(value) = definedExternally
    var sandbox: String?
        get() = definedExternally
        set(value) = definedExternally
    var scope: String?
        get() = definedExternally
        set(value) = definedExternally
    var scoped: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var scrolling: String?
        get() = definedExternally
        set(value) = definedExternally
    var seamless: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var selected: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var shape: String?
        get() = definedExternally
        set(value) = definedExternally
    var size: Number?
        get() = definedExternally
        set(value) = definedExternally
    var sizes: String?
        get() = definedExternally
        set(value) = definedExternally
    var span: Number?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcDoc: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcLang: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcSet: String?
        get() = definedExternally
        set(value) = definedExternally
    var start: Number?
        get() = definedExternally
        set(value) = definedExternally
    var step: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var summary: String?
        get() = definedExternally
        set(value) = definedExternally
    var target: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var useMap: String?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var wmode: String?
        get() = definedExternally
        set(value) = definedExternally
    var wrap: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface AnchorHTMLAttributes<T> : HTMLAttributes<T> {
    var download: Any?
        get() = definedExternally
        set(value) = definedExternally
    var href: String?
        get() = definedExternally
        set(value) = definedExternally
    var hrefLang: String?
        get() = definedExternally
        set(value) = definedExternally
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var ping: String?
        get() = definedExternally
        set(value) = definedExternally
    var rel: String?
        get() = definedExternally
        set(value) = definedExternally
    var target: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var referrerPolicy: String? /* "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface AudioHTMLAttributes<T> : MediaHTMLAttributes<T>

external interface AreaHTMLAttributes<T> : HTMLAttributes<T> {
    var alt: String?
        get() = definedExternally
        set(value) = definedExternally
    var coords: String?
        get() = definedExternally
        set(value) = definedExternally
    var download: Any?
        get() = definedExternally
        set(value) = definedExternally
    var href: String?
        get() = definedExternally
        set(value) = definedExternally
    var hrefLang: String?
        get() = definedExternally
        set(value) = definedExternally
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var referrerPolicy: String? /* "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" */
        get() = definedExternally
        set(value) = definedExternally
    var rel: String?
        get() = definedExternally
        set(value) = definedExternally
    var shape: String?
        get() = definedExternally
        set(value) = definedExternally
    var target: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface BaseHTMLAttributes<T> : HTMLAttributes<T> {
    var href: String?
        get() = definedExternally
        set(value) = definedExternally
    var target: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface BlockquoteHTMLAttributes<T> : HTMLAttributes<T> {
    var cite: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ButtonHTMLAttributes<T> : HTMLAttributes<T> {
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var formAction: String?
        get() = definedExternally
        set(value) = definedExternally
    var formEncType: String?
        get() = definedExternally
        set(value) = definedExternally
    var formMethod: String?
        get() = definedExternally
        set(value) = definedExternally
    var formNoValidate: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var formTarget: String?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String? /* "submit" | "reset" | "button" */
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface CanvasHTMLAttributes<T> : HTMLAttributes<T> {
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ColHTMLAttributes<T> : HTMLAttributes<T> {
    var span: Number?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ColgroupHTMLAttributes<T> : HTMLAttributes<T> {
    var span: Number?
        get() = definedExternally
        set(value) = definedExternally
}

external interface DataHTMLAttributes<T> : HTMLAttributes<T> {
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface DetailsHTMLAttributes<T> : HTMLAttributes<T> {
    var open: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var onToggle: ReactEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface DelHTMLAttributes<T> : HTMLAttributes<T> {
    var cite: String?
        get() = definedExternally
        set(value) = definedExternally
    var dateTime: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface DialogHTMLAttributes<T> : HTMLAttributes<T> {
    var open: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface EmbedHTMLAttributes<T> : HTMLAttributes<T> {
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface FieldsetHTMLAttributes<T> : HTMLAttributes<T> {
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface FormHTMLAttributes<T> : HTMLAttributes<T> {
    var acceptCharset: String?
        get() = definedExternally
        set(value) = definedExternally
    var action: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoComplete: String?
        get() = definedExternally
        set(value) = definedExternally
    var encType: String?
        get() = definedExternally
        set(value) = definedExternally
    var method: String?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var noValidate: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var target: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface HtmlHTMLAttributes<T> : HTMLAttributes<T> {
    var manifest: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface IframeHTMLAttributes<T> : HTMLAttributes<T> {
    var allow: String?
        get() = definedExternally
        set(value) = definedExternally
    var allowFullScreen: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var allowTransparency: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var frameBorder: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var loading: String? /* "eager" | "lazy" */
        get() = definedExternally
        set(value) = definedExternally
    var marginHeight: Number?
        get() = definedExternally
        set(value) = definedExternally
    var marginWidth: Number?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var referrerPolicy: String? /* "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" */
        get() = definedExternally
        set(value) = definedExternally
    var sandbox: String?
        get() = definedExternally
        set(value) = definedExternally
    var scrolling: String?
        get() = definedExternally
        set(value) = definedExternally
    var seamless: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcDoc: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ImgHTMLAttributes<T> : HTMLAttributes<T> {
    var alt: String?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String? /* "anonymous" | "use-credentials" | "" */
        get() = definedExternally
        set(value) = definedExternally
    var decoding: String? /* "async" | "auto" | "sync" */
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var loading: String? /* "eager" | "lazy" */
        get() = definedExternally
        set(value) = definedExternally
    var referrerPolicy: String? /* "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" */
        get() = definedExternally
        set(value) = definedExternally
    var sizes: String?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcSet: String?
        get() = definedExternally
        set(value) = definedExternally
    var useMap: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface InsHTMLAttributes<T> : HTMLAttributes<T> {
    var cite: String?
        get() = definedExternally
        set(value) = definedExternally
    var dateTime: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface InputHTMLAttributes<T> : HTMLAttributes<T> {
    var accept: String?
        get() = definedExternally
        set(value) = definedExternally
    var alt: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoComplete: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var capture: dynamic /* Boolean? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var checked: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var enterKeyHint: String? /* "enter" | "done" | "go" | "next" | "previous" | "search" | "send" */
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var formAction: String?
        get() = definedExternally
        set(value) = definedExternally
    var formEncType: String?
        get() = definedExternally
        set(value) = definedExternally
    var formMethod: String?
        get() = definedExternally
        set(value) = definedExternally
    var formNoValidate: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var formTarget: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var list: String?
        get() = definedExternally
        set(value) = definedExternally
    var max: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var maxLength: Number?
        get() = definedExternally
        set(value) = definedExternally
    var min: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var minLength: Number?
        get() = definedExternally
        set(value) = definedExternally
    var multiple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var pattern: String?
        get() = definedExternally
        set(value) = definedExternally
    override var placeholder: String?
        get() = definedExternally
        set(value) = definedExternally
    var readOnly: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var required: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var size: Number?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var step: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    override var onChange: ChangeEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface KeygenHTMLAttributes<T> : HTMLAttributes<T> {
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var challenge: String?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var keyType: String?
        get() = definedExternally
        set(value) = definedExternally
    var keyParams: String?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface LabelHTMLAttributes<T> : HTMLAttributes<T> {
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var htmlFor: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface LiHTMLAttributes<T> : HTMLAttributes<T> {
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface LinkHTMLAttributes<T> : HTMLAttributes<T> {
    var `as`: String?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String?
        get() = definedExternally
        set(value) = definedExternally
    var href: String?
        get() = definedExternally
        set(value) = definedExternally
    var hrefLang: String?
        get() = definedExternally
        set(value) = definedExternally
    var integrity: String?
        get() = definedExternally
        set(value) = definedExternally
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var referrerPolicy: String? /* "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" */
        get() = definedExternally
        set(value) = definedExternally
    var rel: String?
        get() = definedExternally
        set(value) = definedExternally
    var sizes: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var charSet: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface MapHTMLAttributes<T> : HTMLAttributes<T> {
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface MenuHTMLAttributes<T> : HTMLAttributes<T> {
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface MediaHTMLAttributes<T> : HTMLAttributes<T> {
    var autoPlay: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var controls: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var controlsList: String?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String?
        get() = definedExternally
        set(value) = definedExternally
    var loop: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var mediaGroup: String?
        get() = definedExternally
        set(value) = definedExternally
    var muted: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var playsInline: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var preload: String?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface MetaHTMLAttributes<T> : HTMLAttributes<T> {
    var charSet: String?
        get() = definedExternally
        set(value) = definedExternally
    var content: String?
        get() = definedExternally
        set(value) = definedExternally
    var httpEquiv: String?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface MeterHTMLAttributes<T> : HTMLAttributes<T> {
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var high: Number?
        get() = definedExternally
        set(value) = definedExternally
    var low: Number?
        get() = definedExternally
        set(value) = definedExternally
    var max: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var min: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var optimum: Number?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface QuoteHTMLAttributes<T> : HTMLAttributes<T> {
    var cite: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ObjectHTMLAttributes<T> : HTMLAttributes<T> {
    var classID: String?
        get() = definedExternally
        set(value) = definedExternally
    var data: String?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var useMap: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var wmode: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface OlHTMLAttributes<T> : HTMLAttributes<T> {
    var reversed: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var start: Number?
        get() = definedExternally
        set(value) = definedExternally
    var type: String? /* "1" | "a" | "A" | "i" | "I" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface OptgroupHTMLAttributes<T> : HTMLAttributes<T> {
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var label: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface OptionHTMLAttributes<T> : HTMLAttributes<T> {
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var label: String?
        get() = definedExternally
        set(value) = definedExternally
    var selected: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface OutputHTMLAttributes<T> : HTMLAttributes<T> {
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var htmlFor: String?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ParamHTMLAttributes<T> : HTMLAttributes<T> {
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ProgressHTMLAttributes<T> : HTMLAttributes<T> {
    var max: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface SlotHTMLAttributes<T> : HTMLAttributes<T> {
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ScriptHTMLAttributes<T> : HTMLAttributes<T> {
    var async: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var charSet: String?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String?
        get() = definedExternally
        set(value) = definedExternally
    var defer: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var integrity: String?
        get() = definedExternally
        set(value) = definedExternally
    var noModule: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var nonce: String?
        get() = definedExternally
        set(value) = definedExternally
    var referrerPolicy: String? /* "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" */
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface SelectHTMLAttributes<T> : HTMLAttributes<T> {
    var autoComplete: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var multiple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var required: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var size: Number?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    override var onChange: ChangeEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface SourceHTMLAttributes<T> : HTMLAttributes<T> {
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var sizes: String?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcSet: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface StyleHTMLAttributes<T> : HTMLAttributes<T> {
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var nonce: String?
        get() = definedExternally
        set(value) = definedExternally
    var scoped: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface TableHTMLAttributes<T> : HTMLAttributes<T> {
    var cellPadding: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var cellSpacing: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var summary: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface TextareaHTMLAttributes<T> : HTMLAttributes<T> {
    var autoComplete: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var cols: Number?
        get() = definedExternally
        set(value) = definedExternally
    var dirName: String?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var form: String?
        get() = definedExternally
        set(value) = definedExternally
    var maxLength: Number?
        get() = definedExternally
        set(value) = definedExternally
    var minLength: Number?
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    override var placeholder: String?
        get() = definedExternally
        set(value) = definedExternally
    var readOnly: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var required: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var rows: Number?
        get() = definedExternally
        set(value) = definedExternally
    var value: dynamic /* String? | ReadonlyArray<String>? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var wrap: String?
        get() = definedExternally
        set(value) = definedExternally
    override var onChange: ChangeEventHandler<T>?
        get() = definedExternally
        set(value) = definedExternally
}

external interface TdHTMLAttributes<T> : HTMLAttributes<T> {
    var align: String? /* "left" | "center" | "right" | "justify" | "char" */
        get() = definedExternally
        set(value) = definedExternally
    var colSpan: Number?
        get() = definedExternally
        set(value) = definedExternally
    var headers: String?
        get() = definedExternally
        set(value) = definedExternally
    var rowSpan: Number?
        get() = definedExternally
        set(value) = definedExternally
    var scope: String?
        get() = definedExternally
        set(value) = definedExternally
    var abbr: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var valign: String? /* "top" | "middle" | "bottom" | "baseline" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface ThHTMLAttributes<T> : HTMLAttributes<T> {
    var align: String? /* "left" | "center" | "right" | "justify" | "char" */
        get() = definedExternally
        set(value) = definedExternally
    var colSpan: Number?
        get() = definedExternally
        set(value) = definedExternally
    var headers: String?
        get() = definedExternally
        set(value) = definedExternally
    var rowSpan: Number?
        get() = definedExternally
        set(value) = definedExternally
    var scope: String?
        get() = definedExternally
        set(value) = definedExternally
    var abbr: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface TimeHTMLAttributes<T> : HTMLAttributes<T> {
    var dateTime: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface TrackHTMLAttributes<T> : HTMLAttributes<T> {
    var default: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var kind: String?
        get() = definedExternally
        set(value) = definedExternally
    var label: String?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var srcLang: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface VideoHTMLAttributes<T> : MediaHTMLAttributes<T> {
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    override var playsInline: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var poster: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var disablePictureInPicture: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disableRemotePlayback: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface SVGAttributes<T> : AriaAttributes, DOMAttributes<T> {
    var className: String?
        get() = definedExternally
        set(value) = definedExternally
    var color: String?
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var id: String?
        get() = definedExternally
        set(value) = definedExternally
    var lang: String?
        get() = definedExternally
        set(value) = definedExternally
    var max: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var media: String?
        get() = definedExternally
        set(value) = definedExternally
    var method: String?
        get() = definedExternally
        set(value) = definedExternally
    var min: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var name: String?
        get() = definedExternally
        set(value) = definedExternally
    var style: CSSProperties?
        get() = definedExternally
        set(value) = definedExternally
    var target: String?
        get() = definedExternally
        set(value) = definedExternally
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var role: String?
        get() = definedExternally
        set(value) = definedExternally
    var tabIndex: Number?
        get() = definedExternally
        set(value) = definedExternally
    var crossOrigin: String? /* "anonymous" | "use-credentials" | "" */
        get() = definedExternally
        set(value) = definedExternally
    var accentHeight: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var accumulate: String? /* "none" | "sum" */
        get() = definedExternally
        set(value) = definedExternally
    var additive: String? /* "replace" | "sum" */
        get() = definedExternally
        set(value) = definedExternally
    var alignmentBaseline: String? /* "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" */
        get() = definedExternally
        set(value) = definedExternally
    var allowReorder: String? /* "no" | "yes" */
        get() = definedExternally
        set(value) = definedExternally
    var alphabetic: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var amplitude: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var arabicForm: String? /* "initial" | "medial" | "terminal" | "isolated" */
        get() = definedExternally
        set(value) = definedExternally
    var ascent: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var attributeName: String?
        get() = definedExternally
        set(value) = definedExternally
    var attributeType: String?
        get() = definedExternally
        set(value) = definedExternally
    var autoReverse: dynamic /* Boolean? | "true" | "false" */
        get() = definedExternally
        set(value) = definedExternally
    var azimuth: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var baseFrequency: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var baselineShift: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var baseProfile: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var bbox: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var begin: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var bias: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var by: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var calcMode: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var capHeight: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var clip: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var clipPath: String?
        get() = definedExternally
        set(value) = definedExternally
    var clipPathUnits: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var clipRule: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var colorInterpolation: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var colorInterpolationFilters: String? /* "auto" | "sRGB" | "linearRGB" | "inherit" */
        get() = definedExternally
        set(value) = definedExternally
    var colorProfile: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var colorRendering: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var contentScriptType: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var contentStyleType: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var cursor: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var cx: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var cy: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var d: String?
        get() = definedExternally
        set(value) = definedExternally
    var decelerate: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var descent: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var diffuseConstant: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var direction: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var display: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var divisor: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var dominantBaseline: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var dur: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var dx: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var dy: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var edgeMode: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var elevation: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var enableBackground: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var end: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var exponent: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var externalResourcesRequired: dynamic /* Boolean? | "true" | "false" */
        get() = definedExternally
        set(value) = definedExternally
    var fill: String?
        get() = definedExternally
        set(value) = definedExternally
    var fillOpacity: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fillRule: String? /* "nonzero" | "evenodd" | "inherit" */
        get() = definedExternally
        set(value) = definedExternally
    var filter: String?
        get() = definedExternally
        set(value) = definedExternally
    var filterRes: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var filterUnits: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var floodColor: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var floodOpacity: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var focusable: dynamic /* Boolean? | "true" | "false" | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var fontFamily: String?
        get() = definedExternally
        set(value) = definedExternally
    var fontSize: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fontSizeAdjust: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fontStretch: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fontStyle: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariant: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fontWeight: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var format: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var from: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fx: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var fy: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var g1: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var g2: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var glyphName: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var glyphOrientationHorizontal: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var glyphOrientationVertical: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var glyphRef: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var gradientTransform: String?
        get() = definedExternally
        set(value) = definedExternally
    var gradientUnits: String?
        get() = definedExternally
        set(value) = definedExternally
    var hanging: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var horizAdvX: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var horizOriginX: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var href: String?
        get() = definedExternally
        set(value) = definedExternally
    var ideographic: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var imageRendering: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var in2: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var `in`: String?
        get() = definedExternally
        set(value) = definedExternally
    var intercept: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var k1: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var k2: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var k3: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var k4: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var k: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var kernelMatrix: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var kernelUnitLength: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var kerning: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var keyPoints: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var keySplines: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var keyTimes: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var lengthAdjust: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var letterSpacing: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var lightingColor: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var limitingConeAngle: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var local: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var markerEnd: String?
        get() = definedExternally
        set(value) = definedExternally
    var markerHeight: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var markerMid: String?
        get() = definedExternally
        set(value) = definedExternally
    var markerStart: String?
        get() = definedExternally
        set(value) = definedExternally
    var markerUnits: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var markerWidth: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var mask: String?
        get() = definedExternally
        set(value) = definedExternally
    var maskContentUnits: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var maskUnits: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var mathematical: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var mode: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var numOctaves: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var offset: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var opacity: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var operator: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var order: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var orient: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var orientation: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var origin: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var overflow: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var overlinePosition: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var overlineThickness: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var paintOrder: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var panose1: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var path: String?
        get() = definedExternally
        set(value) = definedExternally
    var pathLength: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var patternContentUnits: String?
        get() = definedExternally
        set(value) = definedExternally
    var patternTransform: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var patternUnits: String?
        get() = definedExternally
        set(value) = definedExternally
    var pointerEvents: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var points: String?
        get() = definedExternally
        set(value) = definedExternally
    var pointsAtX: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var pointsAtY: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var pointsAtZ: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var preserveAlpha: dynamic /* Boolean? | "true" | "false" */
        get() = definedExternally
        set(value) = definedExternally
    var preserveAspectRatio: String?
        get() = definedExternally
        set(value) = definedExternally
    var primitiveUnits: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var r: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var radius: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var refX: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var refY: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var renderingIntent: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var repeatCount: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var repeatDur: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var requiredExtensions: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var requiredFeatures: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var restart: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var result: String?
        get() = definedExternally
        set(value) = definedExternally
    var rotate: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var rx: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var ry: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var scale: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var seed: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var shapeRendering: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var slope: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var spacing: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var specularConstant: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var specularExponent: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var speed: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var spreadMethod: String?
        get() = definedExternally
        set(value) = definedExternally
    var startOffset: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var stdDeviation: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var stemh: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var stemv: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var stitchTiles: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var stopColor: String?
        get() = definedExternally
        set(value) = definedExternally
    var stopOpacity: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var strikethroughPosition: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var strikethroughThickness: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var string: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var stroke: String?
        get() = definedExternally
        set(value) = definedExternally
    var strokeDasharray: dynamic /* String? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeDashoffset: dynamic /* String? | Number? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeLinecap: String? /* "butt" | "round" | "square" | "inherit" */
        get() = definedExternally
        set(value) = definedExternally
    var strokeLinejoin: String? /* "miter" | "round" | "bevel" | "inherit" */
        get() = definedExternally
        set(value) = definedExternally
    var strokeMiterlimit: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeOpacity: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeWidth: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var surfaceScale: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var systemLanguage: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var tableValues: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var targetX: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var targetY: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var textAnchor: String?
        get() = definedExternally
        set(value) = definedExternally
    var textDecoration: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var textLength: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var textRendering: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var to: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var transform: String?
        get() = definedExternally
        set(value) = definedExternally
    var u1: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var u2: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var underlinePosition: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var underlineThickness: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var unicode: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var unicodeBidi: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var unicodeRange: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var unitsPerEm: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var vAlphabetic: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var values: String?
        get() = definedExternally
        set(value) = definedExternally
    var vectorEffect: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var version: String?
        get() = definedExternally
        set(value) = definedExternally
    var vertAdvY: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var vertOriginX: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var vertOriginY: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var vHanging: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var vIdeographic: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var viewBox: String?
        get() = definedExternally
        set(value) = definedExternally
    var viewTarget: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var visibility: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var vMathematical: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var widths: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var wordSpacing: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var writingMode: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var x1: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var x2: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var x: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var xChannelSelector: String?
        get() = definedExternally
        set(value) = definedExternally
    var xHeight: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var xlinkActuate: String?
        get() = definedExternally
        set(value) = definedExternally
    var xlinkArcrole: String?
        get() = definedExternally
        set(value) = definedExternally
    var xlinkHref: String?
        get() = definedExternally
        set(value) = definedExternally
    var xlinkRole: String?
        get() = definedExternally
        set(value) = definedExternally
    var xlinkShow: String?
        get() = definedExternally
        set(value) = definedExternally
    var xlinkTitle: String?
        get() = definedExternally
        set(value) = definedExternally
    var xlinkType: String?
        get() = definedExternally
        set(value) = definedExternally
    var xmlBase: String?
        get() = definedExternally
        set(value) = definedExternally
    var xmlLang: String?
        get() = definedExternally
        set(value) = definedExternally
    var xmlns: String?
        get() = definedExternally
        set(value) = definedExternally
    var xmlnsXlink: String?
        get() = definedExternally
        set(value) = definedExternally
    var xmlSpace: String?
        get() = definedExternally
        set(value) = definedExternally
    var y1: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var y2: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var y: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var yChannelSelector: String?
        get() = definedExternally
        set(value) = definedExternally
    var z: dynamic /* Number? | String? */
        get() = definedExternally
        set(value) = definedExternally
    var zoomAndPan: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface WebViewHTMLAttributes<T> : HTMLAttributes<T> {
    var allowFullScreen: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var allowpopups: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var autoFocus: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var autosize: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var blinkfeatures: String?
        get() = definedExternally
        set(value) = definedExternally
    var disableblinkfeatures: String?
        get() = definedExternally
        set(value) = definedExternally
    var disableguestresize: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disablewebsecurity: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var guestinstance: String?
        get() = definedExternally
        set(value) = definedExternally
    var httpreferrer: String?
        get() = definedExternally
        set(value) = definedExternally
    var nodeintegration: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var partition: String?
        get() = definedExternally
        set(value) = definedExternally
    var plugins: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var preload: String?
        get() = definedExternally
        set(value) = definedExternally
    var src: String?
        get() = definedExternally
        set(value) = definedExternally
    var useragent: String?
        get() = definedExternally
        set(value) = definedExternally
    var webpreferences: String?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ReactHTML {
    var a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
    var abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>
    var article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>
    var b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>
    var bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>
    var body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>
    var br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>
    var button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    var canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
    var caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
    var colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
    var data: DetailedHTMLFactory<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>
    var datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>
    var dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var del: DetailedHTMLFactory<DelHTMLAttributes<HTMLElement>, HTMLElement>
    var details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLElement>, HTMLElement>
    var dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var dialog: DetailedHTMLFactory<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>
    var div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    var dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>
    var dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>
    var fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>
    var figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
    var h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    var h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    var h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    var h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    var h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    var h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
    var head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>
    var header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>
    var html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>
    var i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>
    var img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    var input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    var ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>
    var kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>
    var label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
    var legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>
    var li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
    var link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>
    var main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>
    var mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>
    var menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>
    var meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLElement>, HTMLElement>
    var nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var `object`: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>
    var ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>
    var optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>
    var option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
    var output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLElement>, HTMLElement>
    var p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
    var param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>
    var picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
    var progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>
    var q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>
    var rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var slot: DetailedHTMLFactory<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>
    var script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>
    var section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    var small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>
    var span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    var strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>
    var sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>
    var template: DetailedHTMLFactory<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>
    var tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
    var td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>
    var textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
    var tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
    var th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>
    var thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>
    var time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLElement>, HTMLElement>
    var title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>
    var tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
    var track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>
    var u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
    var `var`: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>
    var wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>
    var webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>
}

external interface ReactSVG {
    var animate: SVGFactory
    var circle: SVGFactory
    var clipPath: SVGFactory
    var defs: SVGFactory
    var desc: SVGFactory
    var ellipse: SVGFactory
    var feBlend: SVGFactory
    var feColorMatrix: SVGFactory
    var feComponentTransfer: SVGFactory
    var feComposite: SVGFactory
    var feConvolveMatrix: SVGFactory
    var feDiffuseLighting: SVGFactory
    var feDisplacementMap: SVGFactory
    var feDistantLight: SVGFactory
    var feDropShadow: SVGFactory
    var feFlood: SVGFactory
    var feFuncA: SVGFactory
    var feFuncB: SVGFactory
    var feFuncG: SVGFactory
    var feFuncR: SVGFactory
    var feGaussianBlur: SVGFactory
    var feImage: SVGFactory
    var feMerge: SVGFactory
    var feMergeNode: SVGFactory
    var feMorphology: SVGFactory
    var feOffset: SVGFactory
    var fePointLight: SVGFactory
    var feSpecularLighting: SVGFactory
    var feSpotLight: SVGFactory
    var feTile: SVGFactory
    var feTurbulence: SVGFactory
    var filter: SVGFactory
    var foreignObject: SVGFactory
    var g: SVGFactory
    var image: SVGFactory
    var line: SVGFactory
    var linearGradient: SVGFactory
    var marker: SVGFactory
    var mask: SVGFactory
    var metadata: SVGFactory
    var path: SVGFactory
    var pattern: SVGFactory
    var polygon: SVGFactory
    var polyline: SVGFactory
    var radialGradient: SVGFactory
    var rect: SVGFactory
    var stop: SVGFactory
    var svg: SVGFactory
    var switch: SVGFactory
    var symbol: SVGFactory
    var text: SVGFactory
    var textPath: SVGFactory
    var tspan: SVGFactory
    var use: SVGFactory
    var view: SVGFactory
}

external interface ReactDOM : ReactHTML, ReactSVG

external interface ReactPropTypes {
    var any: Any
    var array: Any
    var bool: Any
    var func: Any
    var number: Any
    var `object`: Any
    var string: Any
    var node: Any
    var element: Any
    var instanceOf: Any
    var oneOf: Any
    var oneOfType: Any
    var arrayOf: Any
    var objectOf: Any
    var shape: Any
    var exact: Any
}

external interface ReactChildren {
    fun <T, C> map(children: C, fn: (child: C, index: Number) -> T): Any
    fun <T, C> map(children: Array<C>, fn: (child: C, index: Number) -> T): Any
    fun <C> forEach(children: C, fn: (child: C, index: Number) -> Unit)
    fun <C> forEach(children: Array<C>, fn: (child: C, index: Number) -> Unit)
    fun count(children: Any): Number
    fun <C> only(children: C): Any
    fun toArray(children: ReactElement__0?): Array<Any>
    fun toArray(children: String?): Array<Any>
    fun toArray(children: Number?): Array<Any>
    fun toArray(children: Any?): Array<Any>
    fun toArray(children: ReactNodeArray?): Array<Any>
    fun toArray(children: ReactPortal?): Array<Any>
    fun toArray(children: Boolean?): Array<Any>
    fun toArray(children: Array<Any? /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */>?): Array<Any>
}

external interface AbstractView {
    var styleMedia: StyleMedia
    var document: Document
}

external interface Touch {
    var identifier: Number
    var target: EventTarget
    var screenX: Number
    var screenY: Number
    var clientX: Number
    var clientY: Number
    var pageX: Number
    var pageY: Number
}

external interface TouchList {
    @nativeGetter
    operator fun get(index: Number): Touch?
    @nativeSetter
    operator fun set(index: Number, value: Touch)
    var length: Number
    fun item(index: Number): Touch
    fun identifiedTouch(identifier: Number): Touch
}

external interface ErrorInfo {
    var componentStack: String
}