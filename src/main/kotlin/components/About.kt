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
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.direction
import com.ccfraser.muirwik.components.list.mList
import com.ccfraser.muirwik.components.list.mListItem
import com.ccfraser.muirwik.components.list.mListItemIcon
import com.ccfraser.muirwik.components.list.mListItemText
import com.ccfraser.muirwik.components.list.mListItemWithIcon
import com.ccfraser.muirwik.components.mGridContainer
import com.ccfraser.muirwik.components.mGridItem
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import external.githubIcon
import external.linkedInIcon
import kotlinx.css.Color
import kotlinx.css.backgroundColor
import kotlinx.css.color
import kotlinx.css.paddingTop
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.rgba
import kotlinx.css.top
import kotlinx.css.width
import react.RBuilder
import react.RProps
import react.child
import react.dom.br
import styled.css
import styled.styledDiv
import util.component

val about by component<RProps> {
    styledDiv {
        css { width = 100.pct }
        child(aboutHeader)
    }
}

val aboutHeader by component<RProps> {
    mCard {
        css {
            color = Color.white
            top = 50.pct
            paddingTop = 50.px
            backgroundColor = rgba(30, 30, 30, 0.6)
        }

        mTypography("Hi", variant = h5, align = center, color = inherit)
        br {}
        mTypography(variant = subtitle1, align = center, paragraph = true) {
            +"I am an eager Master's student at "
            mLink("Imperial College London", hRef = "https://www.imperial.ac.uk/computing")
            +" and a Software Engineer at "
            mLink("Blockchain", hRef = "https://blockchain.com")
            +"."
            br {}
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
                    hRefOptions = HRefOptions("https://github.com/Cottand/resume/raw/master/out/nicoDCottaResume.pdf"),
                    divider = false,
                )
            }
        }
    }
