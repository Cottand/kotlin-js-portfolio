@file:Suppress(
    "INTERFACE_WITH_SUPERCLASS",
    "OVERRIDING_FINAL_MEMBER",
    "RETURN_TYPE_MISMATCH_ON_OVERRIDE",
    "CONFLICTING_OVERLOADS",
    "UnsafeCastFromDynamic",
    "unused"
)

package external

import com.ccfraser.muirwik.components.child
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder
import react.RComponent
import react.RState
import styled.StyledProps

external enum class Priority {
    MAX /* = 0 */,
    HIGH /* = 1 */,
    MED /* = 2 */,
    LOW /* = 3 */,
    MIN /* = 4 */
}

@JsModule("markdown-to-jsx")
@JsNonModule
private external val mdToJsxModule: dynamic

// val MdToJsxComponent: FunctionalComponent<RProps> = mdToJsxModule.default
val MdToJsxComponent: RComponent<StyledProps, RState> = mdToJsxModule.default

fun RBuilder.markdown(str: String) = mTypography(component = "div") { child(MdToJsxComponent) { +str } }
interface MdBuilder {
    operator fun String.unaryPlus()
    operator fun String.get(href: String)
}

fun RBuilder.markdown(closure: MdBuilder.() -> Unit) = mTypography(component = "div", paragraph = false) {
    val context = object : MdBuilder {
        override fun String.unaryPlus() {
            val string = this
            child(MdToJsxComponent) { +string }
        }

        override fun String.get(href: String) {
            mLink(this, href)
        }
    }
    context.closure()
}
