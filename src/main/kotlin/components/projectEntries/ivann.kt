package components.projectEntries

import com.ccfraser.muirwik.components.mLink
import com.ccfraser.muirwik.components.mTypography
import react.RBuilder

fun RBuilder.ivannEntry() = mTypography(paragraph = true) {
    mLink("Ivann", "https://icivann.github.io/ivann")
    +"""
                     is an online visual network builder, written using Typescript and VueJS. It generates
                    python files that can then be run anywhere in order to train and evaluate models.
    """.trimIndent()
}
