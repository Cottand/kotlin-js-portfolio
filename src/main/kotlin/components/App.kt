package components

import com.ccfraser.muirwik.components.MTypographyVariant.h2
import com.ccfraser.muirwik.components.mCssBaseline
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.padding
import kotlinx.css.px
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledDiv

val app = functionalComponent<RProps> { props ->
    mCssBaseline()

    styledDiv {
        css { padding(16.px) }
        css(FooterStyles.root) // this will keep the footer stuck to the bottom
        mTypography("The Portfolio Website", variant = h2)

        child(navBar)
        child(footer)
    }
}
