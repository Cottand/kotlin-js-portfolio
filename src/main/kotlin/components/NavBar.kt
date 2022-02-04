package components

import Settings
import com.ccfraser.muirwik.components.MAppBarColor.transparent
import com.ccfraser.muirwik.components.MAppBarPosition.static
import com.ccfraser.muirwik.components.MTabIndicatorColor
import com.ccfraser.muirwik.components.MTabTextColor.primary
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.mTab
import com.ccfraser.muirwik.components.mTabs
import kotlinx.css.Color
import kotlinx.css.boxShadow
import kotlinx.css.color
import kotlinx.css.pct
import kotlinx.css.width
import react.Fragment
import react.RBuilder
import react.RHandler
import react.RProps
import react.child
import react.functionalComponent
import react.router.dom.redirect
import react.router.dom.route
import react.router.dom.switch
import react.router.dom.useLocation
import styled.css

val navBar = functionalComponent<RProps> {
    Fragment {
        mAppBar(position = static, color = transparent) {
            css {
                boxShadow.clear()
                width = 100.pct
            }
            mTabs(value = useLocation().pathname, textColor = primary, indicatorColor = MTabIndicatorColor.primary) {
                attrs {
                    centered = true
                }
                linkTab("About me", Routes.About)
                linkTab("Projects", Routes.Projects)
                if (Settings.blogEnabled)
                    linkTab("Blog + Talks", Routes.Blog)
            }
        }
        switch {
            operator fun Routes.invoke(exact: Boolean = true, handler: RHandler<TabPanelProps>) =
                route(path, exact = exact) {
                    child(tabPanel) {
                        handler()
                    }
                }
            Routes.About { child(about) }
            Routes.Projects { child(projects) }
            Routes.Blog { child(blog) }
            redirect(to = Routes.About.path)
        }
    }
}

fun RBuilder.linkTab(label: String, to: Routes) = mTab(label, to.ordinal) {
    attrs.value = to.path
    attrs.component = "a"
    css {
        color = Color.ghostWhite
    }
    with(attrs.asDynamic()) {
        this.href = "/#${to.path}"
    }
}
