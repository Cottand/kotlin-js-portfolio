package components.projectEntries

import com.ccfraser.muirwik.components.MTypographyAlign
import com.ccfraser.muirwik.components.MTypographyVariant.subtitle2
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import kotlinx.css.FontStyle
import kotlinx.css.LinearDimension
import kotlinx.css.fontStyle
import kotlinx.css.height
import kotlinx.css.paddingBottom
import kotlinx.css.paddingTop
import kotlinx.css.width
import react.RBuilder
import react.dom.a
import react.dom.br
import style.BaseStyle
import styled.css
import styled.styledDiv
import styled.styledImg

fun RBuilder.djStreamrEntry() {
    a(href = "https://djstreamr.com") {
        styledImg(src = "/djstreamrLogoWhite.png") {
            css {
                height = 6.spacingUnits
                width = LinearDimension.auto
            }
        }
    }
    mTypography(paragraph = true) {
        mLink("DJStreamr", "https://djstreamr.com")
        +" is a collaborative platform for collaborative, real-time DJing."
        br {}
        br {}
        +"""|The frontend uses VueJS and is written in Kotlin/JS and Typescript, while 
                    |the backend is fully written in Kotlin/JVM and is distributed between AWS Lambda 
                    |functions and a server.""".trimMargin()
    }
    styledDiv {
        styledImg(src = "/djstreamrScreenshot.png", alt = "DJStreamr's online interface") {
            css {
                +BaseStyle.centered
                paddingTop = 2.spacingUnits
                paddingBottom = 1.spacingUnits
                width = LinearDimension("min(90%, 920px)")
            }
        }
        mTypography(
            "DJStreamr's online interface",
            variant = subtitle2,
            align = MTypographyAlign.center
        ) {
            css {
                fontStyle = FontStyle.italic
                paddingBottom = 2.spacingUnits
            }
        }
    }
    mTypography(paragraph = true) {
        +"""|DJStreamr abstracts away latency between to simultaneous performers by using the 
                    |metadata from audio files and the commands DJs emit to a central server. This allows for a
                    |seamless experience for the audience. We hook the performance to popular streaming
                    |platforms like Twitch or YouTube for ease of use.
                """.trimMargin()
    }
}
