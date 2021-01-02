package components

import kotlinx.html.CommonAttributeGroupFacade
import kotlinx.html.Tag
import kotlinx.html.hidden
import kotlinx.html.id
import kotlinx.html.role
import react.Child
import react.RBuilder
import react.RProps
import react.child
import react.dom.RDOMBuilder
import react.dom.div
import util.component

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
            set("aria-labelledby", "simple-tab-${props.index}")
        }
        if (isHidden.not()) +props.children
    }
}

fun <T> RDOMBuilder<T>.a11yProps(index: Int) where T : Tag, T : CommonAttributeGroupFacade =
    attrs {
        id = "simple-tab-$index"
        set("aria-controls", "simple-tabpanel-$index")
    }

fun RBuilder.tabPanel(value: Int, index: Int, child: RBuilder.() -> Unit) = child(tabPanel) {
    attrs.value = value
    attrs.index = index
    child()
}
