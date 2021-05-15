package style

import com.ccfraser.muirwik.components.styles.ThemeOptions
import com.ccfraser.muirwik.components.styles.createMuiTheme
import kotlinext.js.js

private val lightTheme by lazy {
    js {
        palette = js {
            common = js {
                black = "#000"
                white = "#fff"
            }
            type = "light"
            primary = js {
                main = "#517fa5"
                light = "rgb(166, 212, 250)"
                dark = "rgb(100, 141, 174)"
            }
            secondary = js {
                main = "#651fff"
                light = "#834bff"
                dark = "#4615b2"
            }
            background = js {
            }
            action = js {
                active = "#fff"
                hover = "rgba(255, 255, 255, 0.08)"
                hoverOpacity = 0.08
                selected = "rgba(255, 255, 255, 0.16)"
                selectedOpacity = 0.16
                disabled = "rgba(255, 255, 255, 0.3)"
                disabledBackground = "rgba(255, 255, 255, 0.12)"
                disabledOpacity = 0.38
                focus = "rgba(255, 255, 255, 0.12)"
                focusOpacity = 0.12
                activatedOpacity = 0.24
            }
        }
    }
}

val globalTheme = lightTheme.unsafeCast<ThemeOptions>().apply {
    palette.asDynamic().background.default = "#121212"
}.let {
    @Suppress("UnsafeCastFromDynamic")
    createMuiTheme(lightTheme)
}
