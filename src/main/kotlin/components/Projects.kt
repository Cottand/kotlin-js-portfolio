package components

import com.ccfraser.muirwik.components.MTypographyAlign.left
import com.ccfraser.muirwik.components.MTypographyVariant.h2
import com.ccfraser.muirwik.components.MTypographyVariant.h3
import com.ccfraser.muirwik.components.MTypographyVariant.h6
import com.ccfraser.muirwik.components.accordion.mAccordion
import com.ccfraser.muirwik.components.accordion.mAccordionDetails
import com.ccfraser.muirwik.components.accordion.mAccordionSummary
import com.ccfraser.muirwik.components.mIcon
import com.ccfraser.muirwik.components.mTypography
import components.Panel.DJStreamr
import components.Panel.Ivann
import kotlinx.css.Align.center
import kotlinx.css.Color
import kotlinx.css.Display.flex
import kotlinx.css.FontWeight
import kotlinx.css.LinearDimension
import kotlinx.css.LinearDimension.Companion
import kotlinx.css.alignItems
import kotlinx.css.basis
import kotlinx.css.br
import kotlinx.css.color
import kotlinx.css.display
import kotlinx.css.flexBasis
import kotlinx.css.flexShrink
import kotlinx.css.fontWeight
import kotlinx.css.paddingBottom
import kotlinx.css.paddingTop
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import react.RBuilder
import react.RProps
import react.dom.br
import react.useState
import styled.StyleSheet
import styled.StyledHandler
import styled.StyledProps
import styled.css
import styled.styledDiv
import util.component

val projects by component<RProps> {
    var expandedPanel: Panel? by useState(null)
    fun handleChange(panel: Panel) = { _: Any, isExpanded: Boolean ->
        expandedPanel = if (isExpanded) panel else null
    }

    fun Panel.entry(summary: String, details: StyledHandler<StyledProps>) =
        mAccordion(expanded = expandedPanel == this, onChange = handleChange(this)) {
            mAccordionSummary(expandIcon = icon("expand_more")) {
                mTypography(name, variant = h3) { css(Styles.heading) }
                mTypography(summary, align = left) { css(Styles.subHeading) }
            }
            mAccordionDetails(handler = details)
        }

    styledDiv {
        css(Styles.root)

        DJStreamr.entry("Full-stack collaborative live DJ software") {
            mTypography(paragraph = true) {
                +"""
                    DJStreamr is a collaborative platform for collaborative, real-time DJing.
                """.trimIndent()
                br {}
                br {}
                +"""|The frontend uses VueJS and is written in Kotlin/JS and Typescript, while 
                    |the backend isfully written in Kotlin and is distributed between AWS Lambda 
                    |functions and a server.""".trimMargin()
            }
        }

        Ivann.entry("Web visual neural network builder") {
            mTypography(paragraph = true) {
                +"""
                    Ivann is an online visual network builder, written using Typescript and VueJS. It generates
                    python files that can then be run anywhere in order to train and evaluate models.
                """.trimIndent()
            }
        }
    }
}

enum class Panel {
    DJStreamr,
    Ivann
}

private fun RBuilder.icon(name: String) = mIcon(name, addAsChild = false)

object Styles : StyleSheet("ProjectStyles") {
    val root by css {
        width = 100.pct
    }
    val heading by css {
        fontWeight = FontWeight.lighter
        flexBasis = 33.33.pct.basis
        flexShrink = 0.0
    }
    val subHeading by css {
        color = Color.darkGray
        display = flex
        alignItems = center
    }
}
