package components

import com.ccfraser.muirwik.components.MAppBarPosition.static
import com.ccfraser.muirwik.components.MTypographyVariant.h5
import com.ccfraser.muirwik.components.button.mIconButton
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.card.mCardActions
import com.ccfraser.muirwik.components.card.mCardContent
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.mTab
import com.ccfraser.muirwik.components.mTabs
import com.ccfraser.muirwik.components.mTypography
import com.ccfraser.muirwik.components.transitions.mCollapse
import kotlinx.css.JustifyContent
import kotlinx.css.justifyContent
import kotlinx.css.padding
import kotlinx.css.paddingLeft
import kotlinx.css.pct
import kotlinx.css.properties.Timing
import kotlinx.css.properties.deg
import kotlinx.css.properties.ms
import kotlinx.css.properties.rotate
import kotlinx.css.properties.transition
import kotlinx.css.px
import kotlinx.css.transform
import kotlinx.css.width
import react.RProps
import react.child
import react.useState
import styled.css
import util.component
import util.simpleLink

val navBar by component<RProps> {
    var indexState by useState(0)
    mAppBar(position = static) {
        mTabs(value = indexState) {
            attrs {
                centered = true
                onChange = { _, newValue ->
                    indexState = newValue as Int
                }
            }

            mTab("item1") {
                attrs.value = 0
            }
            mTab("item2") {
                attrs.value = 1
            }
        }
    }
    child(tabPanel) {
        attrs { value = indexState; index = 0 }
        child(landing)
    }
    child(tabPanel) {
        attrs { value = indexState; index = 1 }
        mCard {
            css { padding(16.px) }
            mTypography("This is some other tab")
        }
    }
}

val landing by component<RProps> {
    var expanded by useState(false)
    mCard {
        css { width = 100.pct }
        mCardContent {
            mTypography(
                "Portfolio Kotlin App",
                gutterBottom = true,
                variant = h5,
                component = "h2"
            )
            mTypography("This is the starting point of the website")
        }
        mCardActions {
            css {
                justifyContent = JustifyContent.spaceBetween
                paddingLeft = 16.px
            }
            simpleLink("A link to my github", "https://github.com/cottand")

            mIconButton("expand_more", onClick = { expanded = !expanded }) {
                css {
                    if (expanded) transform.rotate(180.deg)
                    else transform.rotate(0.deg)

                    transition("transform", 400.ms, Timing.easeInOut)
                }
            }
        }

        mCollapse(show = expanded) {
            mCardContent {
                mTypography(paragraph = true) {
                    +"""
                      This content is hidden and shown by use of the mCollapse control. It also shows a small demo 
                      of the badge control.
                    """.trimIndent()
                }
            }
        }
    }
}
