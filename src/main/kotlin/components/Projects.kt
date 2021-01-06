package components

import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.padding
import kotlinx.css.px
import react.RProps
import styled.css
import util.component

val projects by component<RProps> {
    mCard {
        css { padding(16.px) }
        mTypography("This is some other tabs")
    }
}
