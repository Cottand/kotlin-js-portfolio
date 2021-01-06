package components

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
import react.RProps
import react.ReactElement
import react.child
import react.router.dom.route
import react.router.dom.switch
import react.router.dom.useLocation
import react.useState
import styled.css
import util.component

val navBar by component<RProps> {
    operator fun Routes.invoke(exact: Boolean = true, strict: Boolean = false, render: () -> ReactElement?) =
        route(path, exact, strict, render)
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
            linkTab("Resume", Routes.Resume)
            linkTab("Projects", Routes.Projects)
            if (Settings.blogEnabled)
            linkTab("Blog Posts", Routes.Blog)
        }
    }
    switch {
        Routes.About {
            child(tabPanel) {
                attrs { value = indexValue; index = 0 }
                child(about)
            }
        }
        Routes.Resume {
            child(tabPanel) {
                attrs { value = indexValue; index = 1 }
                child(resume)
            }
        }
        Routes.Projects {
            child(tabPanel) {
                attrs { value = indexValue; index = 2 }
                mCard {
                    css { padding(16.px) }
                    mTypography("This is some other tabs")
                }
            }
        }
        Routes.Blog {
            child(tabPanel) {
                attrs { value = indexValue; index = 3 }
                mCard {
                    css { padding(16.px) }
                    mTypography("This is some other tab")
                }
            }
        }
    }
}

fun RBuilder.linkTab(label: String, to: Routes) = mTab(label, to.ordinal) {
    attrs.component = "a"
    with(attrs.asDynamic()) {
        this.href = "/#${to.path}"
    }
}
