package components

import com.ccfraser.muirwik.components.mCssBaseline
import kotlinx.css.padding
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

val app = functionalComponent<RProps> {
    mCssBaseline()
    styledDiv {
        css { padding(16.px) }
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
        route(path, exact, strict, render)

    companion object {
        fun from(route: String) = when (route) {
            "/projects" -> Projects
            "/blog" -> Blog
            else -> About
        }
    }
}
