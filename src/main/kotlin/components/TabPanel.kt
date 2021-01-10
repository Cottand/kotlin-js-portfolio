package components

import kotlinx.css.Align.center
import kotlinx.css.alignSelf
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import kotlinx.html.dir
import kotlinx.html.hidden
import kotlinx.html.id
import kotlinx.html.role
import react.Child
import react.RProps
import styled.css
import styled.styledDiv
import util.component
import util.withTheme

external interface TabPanelProps : RProps {
    var children: Child
    var index: Int
    var value: Int
}

val tabPanel by component<TabPanelProps> { props ->
    styledDiv {
        val isHidden = props.index != props.value
        css {
            width = min(860.px, 100.pct)
            alignSelf = center
        }
        attrs {
            role = "tabpanel"
            hidden = isHidden
            id = "simple-tabpanel-${props.index}"
            withTheme {
                dir = direction
            }
            set("aria-labelledby", "simple-tab-${props.index}")
        }
        if (isHidden.not()) +props.children
    }
}
