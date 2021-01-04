package components

import com.ccfraser.muirwik.components.TooltipPlacement.bottom
import com.ccfraser.muirwik.components.mPaper
import com.ccfraser.muirwik.components.mTooltip
import kotlinx.css.Image
import kotlinx.css.backgroundImage
import kotlinx.css.backgroundPosition
import kotlinx.css.backgroundSize
import react.RBuilder
import styled.css
import util.component

val cardWithImage by component<CardWithImageProps> { props ->
    val placement = props.tooltipPlacement ?: bottom
    val paper: RBuilder.() -> Unit = {
        mPaper(elevation = props.elevation ?: 0) {
            css {
                backgroundImage = Image("url(${props.imageSrc})")
                backgroundPosition = "center center"
                backgroundSize = "cover"
            }
            props.children?.let { +it }
        }
    }
    if (props.tooltipText != null) mTooltip(props.tooltipText!!, placement = placement) { paper() }
    else paper()
}
