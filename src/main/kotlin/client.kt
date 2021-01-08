@file:Suppress("UnsafeCastFromDynamic")

import com.ccfraser.muirwik.components.mThemeProvider
import com.ccfraser.muirwik.components.styles.createMuiTheme
import com.ccfraser.muirwik.components.styles.mStylesProvider
import components.app
import kotlinx.browser.document
import react.child
import react.dom.render
import style.themeOptions1

@JsModule("react-hot-loader")
@JsNonModule
private external val hotModule: dynamic
private val hot = hotModule.hot
private val module = js("module")

object Settings {
    const val blogEnabled = false
    const val useFooter = false
}

object Files {
    val ivannTypeCheck = "/ivannLinearLayersCheck.png"
}

fun main() {
    val hotWrapper = hot(module)
    render(document.getElementById("root")) {
        mStylesProvider("jss-insertion-point") {
            mThemeProvider(theme = createMuiTheme(themeOptions1)) {
                hotWrapper(child(app))
            }
        }
    }
}
