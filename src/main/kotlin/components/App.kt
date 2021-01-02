package components

import com.ccfraser.muirwik.components.MTypographyVariant.h3
import com.ccfraser.muirwik.components.mCssBaseline
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.padding
import kotlinx.css.px
import react.RProps
import react.child
import styled.css
import styled.styledDiv
import util.component

val app by component<RProps> { props ->
    mCssBaseline()

    styledDiv {
        css { padding(16.px) }
        css(FooterStyles.root) // this will keep the footer stuck to the bottom
        mTypography("The Portfolio Website", variant = h3)

        child(navBar)
        child(footer)
    }
}
