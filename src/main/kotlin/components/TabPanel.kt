package components

import kotlinx.html.dir
import kotlinx.html.hidden
import kotlinx.html.id
import kotlinx.html.role
import react.Child
import react.RProps
import react.dom.div
import util.component
import util.withTheme

external interface TabPanelProps : RProps {
    var children: Child
    var index: Int
    var value: Int
}

val tabPanel by component<TabPanelProps> { props ->
    div {
        val isHidden = props.index != props.value
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
