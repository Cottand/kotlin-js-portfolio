package components

import com.ccfraser.muirwik.components.MTypographyVariant.h3
import com.ccfraser.muirwik.components.accordion.mAccordion
import com.ccfraser.muirwik.components.accordion.mAccordionDetails
import com.ccfraser.muirwik.components.accordion.mAccordionSummary
import com.ccfraser.muirwik.components.mIcon
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import components.Panel.DJStreamr
import components.Panel.Ivann
import components.Panel.PintOS
import components.Panel.WACC
import kotlinx.css.Align.center
import kotlinx.css.Color.Companion.darkGray
import kotlinx.css.Display.flex
import kotlinx.css.FontWeight.Companion.lighter
import kotlinx.css.LinearDimension
import kotlinx.css.alignItems
import kotlinx.css.basis
import kotlinx.css.color
import kotlinx.css.display
import kotlinx.css.flexBasis
import kotlinx.css.flexShrink
import kotlinx.css.fontSize
import kotlinx.css.fontWeight
import kotlinx.css.height
import kotlinx.css.paddingRight
import kotlinx.css.pct
import kotlinx.css.width
import kotlinx.html.DIV
import react.RBuilder
import react.RProps
import react.dom.a
import react.dom.br
import react.useState
import styled.StyleSheet
import styled.StyledDOMBuilder
import styled.css
import styled.styledDiv
import styled.styledImg
import util.component

val projects by component<RProps> {
    var expandedPanel: Panel? by useState(null)
    fun handleChange(panel: Panel) = { _: Any, isExpanded: Boolean ->
        expandedPanel = if (isExpanded) panel else null
    }

    fun Panel.entry(summary: String, gh: String? = null, details: StyledDOMBuilder<DIV>.() -> Unit) =
        mAccordion(expanded = expandedPanel == this, onChange = handleChange(this)) {
            mAccordionSummary(expandIcon = icon("expand_more")) {
                mTypography(name, variant = h3) { css(Styles.heading) }
                mTypography(summary) {
                    css(Styles.subHeading)
                }
            }
            mAccordionDetails {
                styledDiv {
                    if (gh != null) {
                        githubBanner(gh)
                        br {}
                        br {}
                    }
                    details()
                }
            }
        }

    styledDiv {
        css(Styles.root)
        DJStreamr.entry("Full-stack collaborative live DJ software") {
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
        }

        Ivann.entry("Web visual neural network builder", "icivann/ivann") {
            mTypography(paragraph = true) {
                +"""
                    Ivann is an online visual network builder, written using Typescript and VueJS. It generates
                    python files that can then be run anywhere in order to train and evaluate models.
                """.trimIndent()
            }
        }
        WACC.entry("Multiplatform compiler of a small language for ARM and the JVM", "cottand/wacc") {
            mTypography(paragraph = true) {
                +"Hey WACC"
            }
        }
        PintOS.entry("UNIX-like pint-sized OS", "cottand/pintos") {
            mTypography(paragraph = true) {
                +"Hey PintOS"
            }
        }


    }
}

@Suppress("SpellCheckingInspection")
enum class Panel {
    DJStreamr,
    Ivann,
    WACC,
    PintOS,
    KEEP213,
    Checkm8,
    ;
}

private fun RBuilder.icon(name: String) = mIcon(name, addAsChild = false)

private object Styles : StyleSheet("ProjectStyles") {
    val root by css {
        width = 100.pct
    }
    val heading by css {
        paddingRight = 2.spacingUnits
        fontSize = 4.spacingUnits
        fontWeight = lighter
        flexBasis = 33.33.pct.basis
        flexShrink = 0.0
    }
    val subHeading by css {
        color = darkGray
        display = flex
        alignItems = center
    }
}
