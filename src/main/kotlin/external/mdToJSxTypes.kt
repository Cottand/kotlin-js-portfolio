@file:Suppress(
    "INTERFACE_WITH_SUPERCLASS",
    "OVERRIDING_FINAL_MEMBER",
    "RETURN_TYPE_MISMATCH_ON_OVERRIDE",
    "CONFLICTING_OVERLOADS",
    "unused"
)

package external

import react.Component
import react.FunctionalComponent
import react.RProps
import react.RState

external interface `T$1` {
    @nativeGetter
    operator fun get(customComponent: String): dynamic // Any? & dynamic | React.ComponentType<Any>?

    @nativeSetter
    operator fun <P : RProps> set(customComponent: String, value: FunctionalComponent<P>)

    @nativeSetter
    operator fun <P : RProps, S : RState> set(customComponent: String, value: Component<P, S>)
}

external interface NamedCodesToUnicodeOptions {
    @nativeGetter
    operator fun get(key: String): String?

    @nativeSetter
    operator fun set(key: String, value: String)
}

external interface MdToKotlinJSProps {
    var options: MdToJsOptions
}

external interface MdToJsOptions {
    var disableParsingRawHTML: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var forceBlock: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var forceInline: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var namedCodesToUnicode: NamedCodesToUnicodeOptions?
        get() = definedExternally
        set(value) = definedExternally
    var overrides: Any? /* Any? & `T$1`? */
        get() = definedExternally
        set(value) = definedExternally
    var wrapper: Any?
        get() = definedExternally
        set(value) = definedExternally
    var forceWrapper: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var slugify: ((source: String) -> String)?
        get() = definedExternally
        set(value) = definedExternally
}
