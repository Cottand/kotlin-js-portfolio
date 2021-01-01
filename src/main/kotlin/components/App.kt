package components

import com.ccfraser.muirwik.components.MTypographyVariant.h5
import com.ccfraser.muirwik.components.button.mIconButton
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.card.mCardActions
import com.ccfraser.muirwik.components.card.mCardContent
import com.ccfraser.muirwik.components.mCssBaseline
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
import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.setState
import styled.css
import styled.styledDiv
import util.simpleLink

class App : RComponent<RProps, RState>() {
    private var expanded = false

    override fun RBuilder.render() {
        mCssBaseline()

        styledDiv {
            css {
                padding(16.px)
            }

            mCard(raised = false) {
                css { width = 100.pct }
                mCardContent {
                    mTypography("Portfolio Kotlin App",
                        gutterBottom = true,
                        variant = h5,
                        component = "h2")
                    mTypography("This is the starting point of the wensite")
                }
                mCardActions {
                    css {
                        justifyContent = JustifyContent.spaceBetween
                        paddingLeft = 16.px
                    }
                    simpleLink("A link to my github", "https://github.com/cottand")

                    mIconButton("expand_more", onClick = { setState { expanded = !expanded } }) {
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
    }
}
