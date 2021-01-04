package components

import com.ccfraser.muirwik.components.MAppBarColor.transparent
import com.ccfraser.muirwik.components.MAppBarPosition.static
import com.ccfraser.muirwik.components.MTabIndicatorColor
import com.ccfraser.muirwik.components.MTabProps
import com.ccfraser.muirwik.components.MTabTextColor.primary
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.mTab
import com.ccfraser.muirwik.components.mTabs
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.boxShadow
import kotlinx.css.padding
import kotlinx.css.px
import react.RProps
import react.child
import react.useState
import styled.StyledElementBuilder
import styled.css
import util.component

val navBar by component<RProps> {
    var indexValue by useState(0)
    mAppBar(position = static, color = transparent) {
        css { boxShadow.clear() }
        mTabs(value = indexValue, textColor = primary, indicatorColor = MTabIndicatorColor.primary) {
            attrs {
                centered = true
                onChange = { _, newValue ->
                    indexValue = newValue as Int
                }
            }

            fun StyledElementBuilder<MTabProps>.a11Stuff(index: Int) {
                attrs.id = "full-width-tab-$index"
                attrs.value = index
            }

            mTab("About me") { attrs.value = 0 }
            mTab("Resume") { attrs.value = 1 }
            mTab("Projects") { attrs.value = 2 }
            mTab("Blog posts") { attrs.value = 3 }
        }
    }
    child(tabPanel) {
        attrs { value = indexValue; index = 0 }
        child(about)
    }
    child(tabPanel) {
        attrs { value = indexValue; index = 1 }
        mCard {
            css { padding(16.px) }
            mTypography("This is some other tab")
        }
    }
    child(tabPanel) {
        attrs { value = indexValue; index = 2 }
        mCard {
            css { padding(16.px) }
            mTypography("This is some other tabs")
        }
    }
    child(tabPanel) {
        attrs { value = indexValue; index = 3 }
        mCard {
            css { padding(16.px) }
            mTypography("This is some other tab")
        }
    }
}
