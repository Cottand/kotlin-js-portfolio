package components

import com.ccfraser.muirwik.components.accordion.mAccordion
import com.ccfraser.muirwik.components.accordion.mAccordionDetails
import com.ccfraser.muirwik.components.accordion.mAccordionSummary
import com.ccfraser.muirwik.components.mIcon
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import components.Panel.Checkm8
import components.Panel.DJStreamr
import components.Panel.ICHack19
import components.Panel.Ivann
import components.Panel.KEEP213
import components.Panel.Pintos
import components.Panel.ThisWebsite
import components.Panel.WACC
import components.projectEntries.checkm8Entry
import components.projectEntries.djStreamrEntry
import components.projectEntries.icHackEntry
import components.projectEntries.ivannEntry
import components.projectEntries.keep213Entry
import components.projectEntries.pintosEntry
import components.projectEntries.thisWebsiteEntry
import components.projectEntries.waccEntry
import kotlinx.browser.window
import kotlinx.css.Align.center
import kotlinx.css.Color.Companion.darkGray
import kotlinx.css.Display.flex
import kotlinx.css.VerticalAlign.Companion
import kotlinx.css.alignItems
import kotlinx.css.basis
import kotlinx.css.color
import kotlinx.css.display
import kotlinx.css.flexBasis
import kotlinx.css.flexShrink
import kotlinx.css.fontSize
import kotlinx.css.paddingRight
import kotlinx.css.pct
import kotlinx.css.verticalAlign
import kotlinx.css.width
import kotlinx.html.DIV
import org.w3c.dom.events.EventListener
import react.RBuilder
import react.RProps
import react.dom.br
import react.useEffectWithCleanup
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

    var aligned by useState(window.innerWidth > 600)
    val updater = EventListener { aligned = window.innerWidth > 600 }
    useEffectWithCleanup(emptyList()) {
        window.addEventListener("resize", updater);
        { window.removeEventListener("resize", updater) }
    }

    fun Panel.entry(
        summary: String,
        gh: String? = null,
        name: String = this.name,
        details: StyledDOMBuilder<DIV>.() -> Unit
    ) = mAccordion(expanded = expandedPanel == this, onChange = handleChange(this)) {
        mAccordionSummary(expandIcon = icon("expand_more")) {
            fun RBuilder.texts() {
                mTypography(name) { css(Styles.heading) }
                mTypography(summary) { css(Styles.subHeading) }
            }
            if (aligned) texts() else styledDiv {
                css.verticalAlign = Companion.middle
                texts()
            }
        }
        mAccordionDetails {
            styledDiv {
                css.width = 100.pct
                if (gh != null) {
                    githubBanner(gh)
                    br {}
                }
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
        ThisWebsite.entry("Made with Kotlin/JS + React", "cottand/kotlin-js-portfolio", "This website") {
            thisWebsiteEntry()
        }
        KEEP213.entry(
            "Pattern matching proposal for the Kotlin language",
            "cottand/KEEP/blob/pattern-matching/proposals/pattern-matching.md"
        ) {
            keep213Entry()
        }
        ICHack19.entry("Hackathon project on AR-assisted teaching", "cottand/ICHack19") { icHackEntry() }
        Checkm8.entry("Chess player through computer vision and smart contracts", "cottand/checkm8-public") {
            checkm8Entry()
        }
    }
}

@Suppress("SpellCheckingInspection")
enum class Panel {
    DJStreamr,
    Ivann,
    WACC,
    Pintos,
    ThisWebsite,
    KEEP213,
    ICHack19,
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
        fontSize = 3.spacingUnits
        flexBasis = 33.33.pct.basis
        flexShrink = 0.0
    }
    val subHeading by css {
        color = darkGray
        display = flex
        alignItems = center
    }
}
