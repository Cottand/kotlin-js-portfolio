package components

import Settings
import com.ccfraser.muirwik.components.mCssBaseline
import kotlinx.css.BackgroundAttachment.fixed
import kotlinx.css.BackgroundRepeat.noRepeat
import kotlinx.css.BoxSizing.borderBox
import kotlinx.css.Display.block
import kotlinx.css.Image
import kotlinx.css.backgroundAttachment
import kotlinx.css.backgroundImage
import kotlinx.css.backgroundPosition
import kotlinx.css.backgroundRepeat
import kotlinx.css.backgroundSize
import kotlinx.css.boxSizing
import kotlinx.css.display
import kotlinx.css.minHeight
import kotlinx.css.padding
import kotlinx.css.pct
import kotlinx.css.px
import react.RBuilder
import react.RProps
import react.ReactElement
import react.child
import react.functionalComponent
import react.router.dom.HashType.noslash
import react.router.dom.hashRouter
import react.router.dom.route
import styled.css
import styled.styledDiv
import util.path

val app = functionalComponent<RProps> {
    mCssBaseline()
    styledDiv {
        css {
            padding(16.px)
            backgroundImage = Image.path(Files.maco2)
            backgroundPosition = "center bottom"
            backgroundSize = "cover"
            minHeight = min(100.pct, 600.px)
            backgroundAttachment = fixed
            backgroundRepeat = noRepeat
            boxSizing = borderBox
            display = block
        }
        css(FooterStyles.root) // this will keep the footer stuck to the bottom
        child(header)
        hashRouter(hashType = noslash) {
            child(navBar)
        }
        if (Settings.useFooter) child(footer)
    }
}

enum class Routes(val path: String) {
    About("/about"),
    Projects("/projects"),
    Blog("/blog"),
    Root("/");

    operator fun RBuilder.invoke(exact: Boolean = true, strict: Boolean = false, render: () -> ReactElement?) =
        route(path, exact = exact, strict = strict, render = render)

    companion object {
        fun from(route: String) = when (route) {
            "/projects" -> Projects
            "/blog" -> Blog
            else -> About
        }
    }
}
