package components

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.MGridAlignItems
import com.ccfraser.muirwik.components.MGridDirection.column
import com.ccfraser.muirwik.components.MGridJustify
import com.ccfraser.muirwik.components.MGridSize.cells8
import com.ccfraser.muirwik.components.MGridSpacing.spacing0
import com.ccfraser.muirwik.components.MTypographyAlign.center
import com.ccfraser.muirwik.components.MTypographyColor.inherit
import com.ccfraser.muirwik.components.MTypographyVariant.h5
import com.ccfraser.muirwik.components.MTypographyVariant.subtitle1
import com.ccfraser.muirwik.components.direction
import com.ccfraser.muirwik.components.list.mList
import com.ccfraser.muirwik.components.list.mListItem
import com.ccfraser.muirwik.components.list.mListItemIcon
import com.ccfraser.muirwik.components.list.mListItemText
import com.ccfraser.muirwik.components.list.mListItemWithIcon
import com.ccfraser.muirwik.components.mContainer
import com.ccfraser.muirwik.components.mGridContainer
import com.ccfraser.muirwik.components.mGridItem
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import external.githubIcon
import external.linkedInIcon
import kotlinx.css.Color
import kotlinx.css.Color.Companion
import kotlinx.css.color
import kotlinx.css.height
import kotlinx.css.padding
import kotlinx.css.pct
import kotlinx.css.width
import react.RBuilder
import react.RProps
import react.child
import react.dom.br
import style.BaseStyle
import styled.StyleSheet
import styled.css
import styled.styledDiv
import styled.styledImg
import util.component

val about by component<RProps> {
    styledDiv {
        css { width = 100.pct }
        child(aboutHeader)
    }
}

val aboutHeader by component<RProps> {
    mContainer {

        styledImg(src = "/profileJuneCropped.jpg") {
            css {
                width = min(42.spacingUnits, 80.pct)
                height = width
                padding = 4.spacingUnits.value
                with(BaseStyle) {
                    +centered
                    +round
                }
            }
        }
        css(styleSheet.whiteText)

        mTypography("Hi", variant = h5, align = center, color = inherit)
        mTypography(variant = subtitle1, align = center, paragraph = true) {
            +"I am an eager learner at "
            mLink("Imperial College", hRef = "https://www.imperial.ac.uk/computing")
            +" and a Software Engineer at "
            mLink("Blockchain", hRef = "https://blockchain.com")
            +"."
            br {}
            +"I enjoy building things, music, and kite surfing."
        }
        br {}
        contactList()
    }
}

fun RBuilder.contactList() =
    mGridContainer(spacing0, alignItems = MGridAlignItems.center, justify = MGridJustify.center) {
        attrs.direction = column
        mGridItem(cells8) {
            mList(component = "nav") {
                mListItem(hRefOptions = HRefOptions("https://linkedin.com/in/ndcotta"), divider = true, button = true) {
                    attrs.component = "a"
                    mListItemIcon { linkedInIcon() }
                    mListItemText("linkedin.com/in/ndcotta")
                }
                mListItemWithIcon(
                    "email",
                    "nico@dcotta.eu",
                    hRefOptions = HRefOptions("mailto:nico@dcotta.eu"),
                )
                mListItem(hRefOptions = HRefOptions("https://github.com/cottand"), divider = true, button = true) {
                    attrs.component = "a"
                    mListItemIcon { githubIcon() }
                    mListItemText("github.com/cottand")
                }
                mListItemWithIcon(
                    "save_alt",
                    "download resume",
                    hRefOptions = HRefOptions("https://docs.google.com/document/d/1p5J2Aq2By9c3VWa32TL_2vOgmgB93rt-Wdtv-MzQLoU/export?format=pdf"),
                    divider = false,
                )
            }
        }
    }

private val styleSheet = object : StyleSheet("AboutStyle") {
    val whiteText by css {
        color = Color.white
    }
}
