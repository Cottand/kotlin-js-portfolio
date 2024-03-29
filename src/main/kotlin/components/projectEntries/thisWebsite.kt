package components.projectEntries

import external.markdown
import react.RProps
import react.dom.li
import react.dom.ul
import react.functionalComponent

val thisWebsiteEntry = functionalComponent<RProps> {
    markdown {
        +"""| This website is a small experiment of pure **Kotlin/JS**. It uses:
            | 
        """.trimMargin()
    }
    data class Line(val text: String, val link: String, val desc: String? = null)

    val libs = listOf(
        Line(
            "Kotlin wrappers",
            "https://github.com/JetBrains/kotlin-wrappers",
            "They provide Kotlin APIs for `react`, `react-router-dom`, etc; and DSLs for generating DOMs and CSS "
        ),
        Line("muirwuik", "https://github.com/cfnz/muirwik", "An amazing wrapper of the Material-UI React library"),
        Line("markdown-to-jsx", "https://probablyup.com/markdown-to-jsx/")
    )
    ul {
        for ((text, link, desc) in libs) li {
            markdown {
                +text[link]
                if (desc != null)
                    +" - $desc"
            }
        }
    }
    markdown {
        +"""|Overall, I would say it is a pleasure to be able to use extension functions and the Kotlin stdlib
            |to write frontend code, but those benefits do not make up for the lack of Kotlin web libraries,
            |and for how painful it is to wrap Typescript ones. The design of TS APIs is very
            |different from Kotlin's, and things become even trickier when one brings React into the picture.
            |
            |
            |On the other hand, for large complex projects that share logic with some backend (even if it is just
            |the DTOs to stay type-safe) the trade-off could be more favourable towards Kotlin. 
            |But that is not the case of this website!
        """.trimMargin()
    }
}
