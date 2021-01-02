package components

import com.ccfraser.muirwik.components.MTypographyVariant.h2
import com.ccfraser.muirwik.components.mPaper
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.Image
import kotlinx.css.backgroundImage
import kotlinx.css.backgroundPosition
import kotlinx.css.backgroundSize
import kotlinx.css.fontFamily
import kotlinx.css.padding
import kotlinx.css.px
import react.RProps
import styled.css
import util.component

val header by component<RProps> {
    mPaper(elevation = 0) {
        css {
            backgroundImage = Image("url(/guincho1.jpg)")
            backgroundPosition = "center center"
            backgroundSize = "cover"
        }
        mTypography("The Portfolio Website", variant = h2) {
            css {
                padding(8.px)
                fontFamily = "'Fira Code', monospace;"
            }
        }
    }
}
