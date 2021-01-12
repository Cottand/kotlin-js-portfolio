package components

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import external.githubIcon
import kotlinx.css.Float.left
import kotlinx.css.LinearDimension
import kotlinx.css.Position.absolute
import kotlinx.css.Position.relative
import kotlinx.css.TextAlign.center
import kotlinx.css.float
import kotlinx.css.height
import kotlinx.css.lineHeight
import kotlinx.css.paddingLeft
import kotlinx.css.position
import kotlinx.css.properties.lh
import kotlinx.css.px
import kotlinx.css.textAlign
import kotlinx.css.width
import react.RBuilder
import styled.css
import styled.styledDiv

fun RBuilder.githubBanner(gh: String) = styledDiv {
    val svgWidth = 32.px
    css {
        textAlign = center
        position = relative
        width = LinearDimension.fitContent
        height = LinearDimension.fitContent
    }
    mLink(hRefOptions = HRefOptions("https://github.com/$gh")) {
        styledDiv {
            githubIcon() {
                width = svgWidth
                height = width
                position = absolute
            }
            css.float = left
        }
        mTypography(gh) {
            css {
                paddingLeft = svgWidth + 1.spacingUnits
                height = svgWidth
                lineHeight = svgWidth.lh
            }
        }
    }
}
