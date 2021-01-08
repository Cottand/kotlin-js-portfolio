@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
package MarkdownToJSX

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
import tsstdlib.RegExpMatchArray
import global.JSX.Element
import Priority

typealias CreateElement = Any

external interface State {
    var _list: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var inline: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var inTable: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var key: Any?
        get() = definedExternally
        set(value) = definedExternally
    var simple: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external interface ParserResult {
    @nativeGetter
    operator fun get(key: String): Any?
    @nativeSetter
    operator fun set(key: String, value: Any)
    var type: String?
        get() = definedExternally
        set(value) = definedExternally
}

typealias NestedParser = (input: String, state: State) -> ParserResult

typealias Parser<ParserOutput> = (capture: RegExpMatchArray, nestedParse: NestedParser, state: State) -> ParserOutput

typealias RuleOutput = (ast: ParserResult, state: State) -> Element

external interface Rule<ParserOutput> {
    var match: (source: String, state: State, prevCapturedString: String) -> RegExpMatchArray
    var order: Priority
    var parse: Parser<ParserOutput>
    var react: ((node: ParserOutput, output: RuleOutput, state: State) -> React.ReactChild)?
        get() = definedExternally
        set(value) = definedExternally
}

external interface Rule__0 : Rule<ParserResult>

external interface Rules {
    @nativeGetter
    operator fun get(key: String): Rule__0?
    @nativeSetter
    operator fun set(key: String, value: Rule__0)
}

external interface `T$0` {
    var component: Any
    var props: Any
}

external interface `T$1` {
    @nativeGetter
    operator fun get(customComponent: String): dynamic /* Any? & dynamic | React.ComponentType<Any>? */
    @nativeSetter
    operator fun set(customComponent: String, value: Any /* Any & dynamic */)
    @nativeSetter
    operator fun set(customComponent: String, value: React.ComponentType<Any>)
}

external interface `T$2` {
    @nativeGetter
    operator fun get(key: String): String?
    @nativeSetter
    operator fun set(key: String, value: String)
}

external interface `T$3` {
    var createElement: ((tag: Any, props: React.Props<Any>, children: React.ReactChild) -> Element)?
        get() = definedExternally
        set(value) = definedExternally
    var disableParsingRawHTML: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var forceBlock: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var forceInline: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var namedCodesToUnicode: `T$2`?
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