package components

import com.ccfraser.muirwik.components.MTypographyVariant.h3
import com.ccfraser.muirwik.components.accordion.mAccordion
import com.ccfraser.muirwik.components.accordion.mAccordionDetails
import com.ccfraser.muirwik.components.accordion.mAccordionSummary
import com.ccfraser.muirwik.components.mIcon
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import components.Panel.DJStreamr
import components.Panel.Ivann
import components.Panel.Pintos
import components.Panel.WACC
import components.projectEntries.djStreamrEntry
import components.projectEntries.ivannEntry
import components.projectEntries.pintosEntry
import components.projectEntries.waccEntry
import kotlinx.css.Align.center
import kotlinx.css.Color.Companion.darkGray
import kotlinx.css.Display.flex
import kotlinx.css.FontWeight.Companion.lighter
import kotlinx.css.alignItems
import kotlinx.css.basis
import kotlinx.css.color
import kotlinx.css.display
import kotlinx.css.flexBasis
import kotlinx.css.flexShrink
import kotlinx.css.fontSize
import kotlinx.css.fontWeight
import kotlinx.css.paddingRight
import kotlinx.css.pct
import kotlinx.css.width
import kotlinx.html.DIV
import react.RBuilder
import react.RProps
import react.dom.br
import react.useState
import styled.StyleSheet
import styled.StyledDOMBuilder
import styled.css
import styled.styledDiv
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
                    }
                    css.width = 100.pct
                    details()
                }
            }
        }

    styledDiv {
        css(Styles.root)
        DJStreamr.entry("Full-stack collaborative live DJ software") { djStreamrEntry() }
        Ivann.entry("Web visual neural network builder", "icivann/ivann") { ivannEntry() }
        WACC.entry("Multiplatform compiler of a small language for ARM and the JVM", "cottand/wacc") { waccEntry() }
        Pintos.entry("UNIX-like pint-sized OS", "cottand/pintos") { pintosEntry() }
    }
}

@Suppress("SpellCheckingInspection")
enum class Panel {
    DJStreamr,
    Ivann,
    WACC,
    Pintos,
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
