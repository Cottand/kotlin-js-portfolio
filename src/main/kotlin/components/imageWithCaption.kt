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
import style.globalTheme
import styled.css
import styled.styledDiv
import styled.styledImg
import util.times

fun RBuilder.imgWithCaption(
    src: String,
    caption: String = "",
    centered: Boolean = true,
    imgCss: CSSBuilder.() -> Unit = {}
) {
    styledDiv {
        css {
            if (centered) +BaseStyle.centered
            width = Companion.fitContent
            paddingTop = 2.spacingUnits
            paddingBottom = 1.spacingUnits
        }
        styledImg(src = src, alt = caption) {
            css {
                if (centered) +BaseStyle.centered
                +BaseStyle.borderRadius
                imgCss()
            }
        }
        if (caption.isNotBlank()) mTypography(
            caption,
            variant = subtitle2,
            align = MTypographyAlign.center
        ) {
            css {
                fontStyle = FontStyle.italic
                paddingTop = globalTheme.spacing * 1
            }
        }
    }
}
