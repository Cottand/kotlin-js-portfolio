package style

import kotlinx.css.Display.block
import kotlinx.css.LinearDimension.Companion.auto
import kotlinx.css.borderRadius
import kotlinx.css.display
import kotlinx.css.marginLeft
import kotlinx.css.marginRight
import kotlinx.css.pct
import styled.StyleSheet

object BaseStyle : StyleSheet("ImageStyles") {
    val centered by css {
        display = block
        marginLeft = auto
        marginRight = auto
    }
    val round by css {
        borderRadius = 50.pct
    }
}
