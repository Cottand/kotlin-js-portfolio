package components

import com.ccfraser.muirwik.components.mCssBaseline
import kotlinx.css.padding
import kotlinx.css.px
import react.RBuilder
import react.RProps
import react.ReactElement
import react.child
import react.functionalComponent
import react.router.dom.HashType.hashbang
import react.router.dom.HashType.noslash
import react.router.dom.HashType.slash
import react.router.dom.hashRouter
import react.router.dom.redirect
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
            redirect(from=Routes.Root.path, to = Routes.About.path, exact = true)
            child(navBar)
            redirect(to = Routes.About.path)
        }
        child(footer)
    }

}

enum class Routes(val path: String) {
    About("/about"),
    Resume("/resume"),
    Projects("/projects"),
    Blog("/blog"),
    Root("/");

    operator fun RBuilder.invoke(exact: Boolean = true, strict: Boolean = false, render: () -> ReactElement?) =
        route(path, exact, strict, render)


    companion object {
        fun from(route: String) = when (route) {
            "/resume" -> Resume
            "/projects" -> Projects
            "/blog" -> Blog
            else -> About
        }
    }
}
