package components.projectEntries

import components.imgWithCaption
import external.markdown
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import react.RBuilder

fun RBuilder.checkm8Entry() {
    markdown {
        +"""This is our solution the Imperial College Computing dept. first year end of year project.
            | We were awarded full marks and the title _Most Interesting Extension_ for our solution.
            |
            |It consists of basic implementations of an ARM emulator and an assembler, and of its extension,
            |an autonomous chess player powered by computer vision and SingularityNet's AI AlphaZero service.""".trimMargin()
    }

    imgWithCaption(Files.checkm8) {
        width = min(100.pct, 350.px)
    }
}
