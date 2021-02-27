package components.projectEntries

import Files
import com.ccfraser.muirwik.components.spacingUnits
import external.markdown
import kotlinx.css.LinearDimension
import kotlinx.css.height
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import react.RProps
import react.dom.a
import react.dom.br
import react.dom.div
import style.BaseStyle
import styled.css
import styled.styledImg
import util.component

val djStreamrEntry by component<RProps> {
    div {
        a(href = "https://djstreamr.com") {
            styledImg(src = "/djstreamrLogoWhite.png") {
                css {
                    height = 6.spacingUnits
                    width = LinearDimension.auto
                }
            }
        }
    }
    br {}
    markdown {
        +"DJStreamr"["https://djstreamr.com"]
        +" is a collaborative platform for simultaneous, real-time DJing."
        +"""|The frontend uses **VueJS** and is written in **Kotlin/JS** and **Typescript**, while 
            |the backend is fully written in **Kotlin/JVM** and is distributed between **AWS Lambda** 
            |functions and a server.""".trimMargin()
    }
    br {}
    styledImg(src = Files.djstreamrLancelot) {
        css {
            with(BaseStyle) {
                +borderRadius
                +centered
            }
            width = min(75.pct, 500.px)
        }
    }
    br {}
    markdown {
        +"""|DJStreamr abstracts away latency between to simultaneous performers by using the 
            |metadata from audio files and the commands DJs emit to a central server. This allows for a
            |seamless experience for the audience. We hook the performance to popular streaming
            |platforms like Twitch or YouTube for ease of use.
            |
            |I build DJStreamr along with Kacper Kazaniecki, Landelot Blanchard and William Profit. My focus
            |is on the scalability of the service and the development of the cloud infrastructure in general.
            |""".trimMargin()
    }
}
