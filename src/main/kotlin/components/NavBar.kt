package components

import Settings
import com.ccfraser.muirwik.components.MAppBarColor.transparent
import com.ccfraser.muirwik.components.MAppBarPosition.static
import com.ccfraser.muirwik.components.MTabIndicatorColor
import com.ccfraser.muirwik.components.MTabTextColor.primary
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.mTab
import com.ccfraser.muirwik.components.mTabs
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.boxShadow
import kotlinx.css.padding
import kotlinx.css.px
import react.RBuilder
import react.RHandler
import react.RProps
import react.child
import react.router.dom.redirect
import react.router.dom.route
import react.router.dom.switch
import react.router.dom.useLocation
import react.useState
import styled.css
import util.component

val navBar by component<RProps> {
    var indexValue by useState(initValue = Routes.from(useLocation().pathname).ordinal)
    mAppBar(position = static, color = transparent) {
        css { boxShadow.clear() }
        mTabs(value = indexValue, textColor = primary, indicatorColor = MTabIndicatorColor.primary) {
            attrs {
                centered = true
                onChange = { _, newValue ->
                    indexValue = newValue as Int
                }
            }
            linkTab("About me", Routes.About)
            linkTab("Projects", Routes.Projects)
            if (Settings.blogEnabled)
                linkTab("Blog Posts", Routes.Blog)
        }
    }
    switch {
        operator fun Routes.invoke(exact: Boolean = true, handler: RHandler<TabPanelProps>) =
            route(path, exact) {
                child(tabPanel) {
                    attrs { value = indexValue; index = this@invoke.ordinal }
                    handler()
                }
            }
        Routes.About { child(about) }
        Routes.Projects { child(projects) }
        Routes.Blog {
            mCard {
                css { padding(16.px) }
                mTypography("This is some other tab")
            }
        }
        redirect(to = Routes.About.path)
    }
}

fun RBuilder.linkTab(label: String, to: Routes) = mTab(label, to.ordinal) {
    attrs.component = "a"
    with(attrs.asDynamic()) {
        this.href = "/#${to.path}"
    }
}
