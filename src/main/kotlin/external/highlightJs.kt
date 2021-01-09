package external

import com.ccfraser.muirwik.components.createStyled
import com.ccfraser.muirwik.components.setStyledPropsAndRunHandler
import kotlinx.css.Color
import kotlinx.css.backgroundColor
import react.RBuilder
import react.RComponent
import react.RState
import react.ReactElement
import style.BaseStyle
import style.globalTheme
import styled.StyledHandler
import styled.StyledProps
import styled.css

@JsModule("react-highlight")
@JsNonModule
private external val highlightJsModule: dynamic

val highlightComponent: RComponent<HighlightsProps, RState> = highlightJsModule.default

external interface HighlightsProps : StyledProps {
    var innerHTML: Boolean
}

fun RBuilder.highlightCode(className: String? = null, innerHtml: Boolean = false, handler: StyledHandler<HighlightsProps>): ReactElement {
    return createStyled(highlightComponent) {
        attrs.innerHTML = innerHtml
        css(BaseStyle.borderRadius)
        css.backgroundColor = Color(globalTheme.palette.background.default)
        setStyledPropsAndRunHandler(className, handler)
    }
}
