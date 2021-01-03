package components

import com.ccfraser.muirwik.components.mCssBaseline
import kotlinx.css.padding
import kotlinx.css.px
import react.RProps
import react.child
import react.functionalComponent
import styled.css
import styled.styledDiv

val app = functionalComponent<RProps> {
    mCssBaseline()

    styledDiv {
        css { padding(16.px) }
        css(FooterStyles.root) // this will keep the footer stuck to the bottom
        child(header)
        child(navBar)
        child(footer)
    }
}
