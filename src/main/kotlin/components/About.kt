package components

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.MGridAlignItems
import com.ccfraser.muirwik.components.MGridDirection.column
import com.ccfraser.muirwik.components.MGridJustify
import com.ccfraser.muirwik.components.MGridSize.cells8
import com.ccfraser.muirwik.components.MGridSpacing.spacing0
import com.ccfraser.muirwik.components.MTypographyAlign.center
import com.ccfraser.muirwik.components.MTypographyVariant.h5
import com.ccfraser.muirwik.components.MTypographyVariant.subtitle1
import com.ccfraser.muirwik.components.direction
import com.ccfraser.muirwik.components.list.mList
import com.ccfraser.muirwik.components.list.mListItemWithIcon
import com.ccfraser.muirwik.components.mContainer
import com.ccfraser.muirwik.components.mGridContainer
import com.ccfraser.muirwik.components.mGridItem
import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.spacingUnits
import kotlinx.css.height
import kotlinx.css.padding
import kotlinx.css.pct
import kotlinx.css.width
import react.RBuilder
import react.RProps
import react.child
import react.dom.br
import style.BaseStyle
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
                width = 32.spacingUnits
                height = 32.spacingUnits
                padding = 4.spacingUnits.value
                with(BaseStyle) {
                    +centered
                    +round
                }
            }
        }
        mTypography("Hi", variant = h5, align = center)
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
//        mTypography("You can find me at:", variant = body1, align = center)
        contactList()
    }
}

fun RBuilder.contactList() =
    mGridContainer(spacing0, alignItems = MGridAlignItems.center, justify = MGridJustify.center) {
        attrs.direction = column
        mGridItem(cells8) {
            mList(component = "nav") {
                mListItemWithIcon(
                    "linkedin",
                    "linkedin.com/in/ndcotta",
                    hRefOptions = HRefOptions("https://linkedin.com/in/ndcotta"),
                )
                mListItemWithIcon(
                    "email",
                    "ndcotta@blockchain.com",
                    hRefOptions = HRefOptions("mailto:ndcotta@blockchain.com"),
                )
                mListItemWithIcon(
                    "code",
                    "github.com/cottand",
                    hRefOptions = HRefOptions("https://github.com/cottand"),
                )
                mListItemWithIcon(
                    "save_alt",
                    "download resume",
                    hRefOptions = HRefOptions("https://docs.google.com/document/d/1p5J2Aq2By9c3VWa32TL_2vOgmgB93rt-Wdtv-MzQLoU/export?format=pdf"),
                    divider = false,
                )
            }
        }
    }
