@file:Suppress("UnsafeCastFromDynamic")

import com.ccfraser.muirwik.components.mThemeProvider
import com.ccfraser.muirwik.components.styles.mStylesProvider
import components.app
import kotlinx.browser.document
import react.child
import react.dom.render

@JsModule("react-hot-loader")
@JsNonModule
private external val hotModule: dynamic
private val hot = hotModule.hot
private val module = js("module")

fun main() {
    val hotWrapper = hot(module)
    render(document.getElementById("root")) {
        mStylesProvider("jss-insertion-point") {
            mThemeProvider {
                hotWrapper(child(app) {})
            }
        }
    }
}
