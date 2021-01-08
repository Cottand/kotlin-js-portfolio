@file:JsModule("markdown-to-jsx")
@file:JsNonModule
@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")

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
import MarkdownToJSX.`T$3`
import global.JSX.Element

external enum class Priority {
    MAX /* = 0 */,
    HIGH /* = 1 */,
    MED /* = 2 */,
    LOW /* = 3 */,
    MIN /* = 4 */
}

external fun compiler(markdown: String, options: `T$3` = definedExternally): Element

external interface `T$4` {
    @nativeGetter
    operator fun get(key: String): Any?
    @nativeSetter
    operator fun set(key: String, value: Any)
    var children: String
    var options: `T$3`?
        get() = definedExternally
        set(value) = definedExternally
}

@JsName("default")
external var Markdown: React.FC<`T$4`>