package components

import kotlinx.css.Align.center
import kotlinx.css.alignSelf
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import kotlinx.html.dir
import kotlinx.html.hidden
import kotlinx.html.role
import react.Child
import react.RProps
import react.dom.attrs
import react.functionalComponent
import styled.css
import styled.styledDiv
import util.withTheme

external interface TabPanelProps : RProps {
    var children: Child
}

val tabPanel = functionalComponent<TabPanelProps> { props ->
    styledDiv {
        css {
            width = min(860.px, 100.pct)
            alignSelf = center
        }
        attrs {
            role = "tabpanel"
            hidden = false
            withTheme {
                dir = direction
            }
        }
        +props.children
    }
}
