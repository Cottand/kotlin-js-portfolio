package util

import com.ccfraser.muirwik.components.styles.Spacing
import com.ccfraser.muirwik.components.styles.Theme
import com.ccfraser.muirwik.components.styles.invoke
import com.ccfraser.muirwik.components.themeContext
import kotlinx.css.Image
import kotlinx.css.px
import react.RBuilder

fun Image.Companion.path(str: String) = Image("url($str)")

fun RBuilder.withTheme(block: Theme.() -> Unit) {
    themeContext.Consumer { theme -> theme.block() }
}

operator fun Spacing.times(i: Int) = this(i).px
operator fun Int.times(spacing: Spacing) = spacing.invoke(this).px
