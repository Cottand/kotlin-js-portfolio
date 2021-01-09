package components

import Settings
import com.ccfraser.muirwik.components.MTypographyVariant.h2
import com.ccfraser.muirwik.components.TooltipPlacement
import com.ccfraser.muirwik.components.TooltipPlacement.leftEnd
import com.ccfraser.muirwik.components.mTypography
import kotlinx.css.FontWeight
import kotlinx.css.fontFamily
import kotlinx.css.fontWeight
import kotlinx.css.letterSpacing
import kotlinx.css.paddingBottom
import kotlinx.css.paddingLeft
import kotlinx.css.paddingTop
import kotlinx.css.px
import react.Child
import react.RProps
import react.child
import styled.css
import util.component

val header by component<RProps> {
    val typo = mTypography("Nico D'Cotta", variant = h2, addAsChild = false) {
        css {
            letterSpacing = 1.px
            fontWeight = FontWeight.bold
            paddingTop = 6.px
            paddingLeft = 14.px
            paddingBottom = if (Settings.useHeaderPic) 64.px else 10.px
            put("text-shadow", "1px 1px #5a5a5a")
            fontFamily = "'Fira Code', monospace;"
        }
    }
    if (Settings.useHeaderPic) child(cardWithImage) {
        attrs {
            imageSrc = "/guincho3.jpg"
            tooltipText = "\uD83D\uDDFA️ Praia Do Guincho, Cascais, Portugal"
            tooltipPlacement = leftEnd
        }
        +typo
    }
    else +typo
}

external interface CardWithImageProps : RProps {
    var imageSrc: String
    var elevation: Int?
    var tooltipText: String?
    var tooltipPlacement: TooltipPlacement?
    var children: Child?
}
