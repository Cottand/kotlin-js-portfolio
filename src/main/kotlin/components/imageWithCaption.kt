package components

import com.ccfraser.muirwik.components.MTypographyAlign
import com.ccfraser.muirwik.components.MTypographyVariant.subtitle2
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import kotlinx.css.CSSBuilder
import kotlinx.css.FontStyle
import kotlinx.css.LinearDimension.Companion
import kotlinx.css.fontStyle
import kotlinx.css.paddingBottom
import kotlinx.css.paddingTop
import kotlinx.css.width
import react.RBuilder
import style.BaseStyle
import styled.css
import styled.styledDiv
import styled.styledImg

fun RBuilder.imgWithCaption(src: String, caption: String, centered: Boolean = true, css: CSSBuilder.() -> Unit = {}) {
    styledDiv {
        css {
            if (centered) +BaseStyle.centered
            width = Companion.fitContent
        }
        styledImg(src = src, alt = caption) {
            css {
                if (centered) +BaseStyle.centered
                paddingTop = 2.spacingUnits
                paddingBottom = 1.spacingUnits
                css()
            }
        }
        mTypography(
            caption,
            variant = subtitle2,
            align = MTypographyAlign.center
        ) {
            css {
                fontStyle = FontStyle.italic
                paddingBottom = 2.spacingUnits
            }
        }
    }
}
