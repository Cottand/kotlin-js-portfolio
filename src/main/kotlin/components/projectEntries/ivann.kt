package components.projectEntries

import Files
import components.imgWithCaption
import external.markdown
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import react.RBuilder
import react.dom.br

fun RBuilder.ivannEntry() {
    markdown {
        +"Ivann"["https://icivann.github.io/ivann"]
        +" is an online visual network builder, written using **Typescript** and **VueJS**. It generates Python files that can then be run anywhere in order to train and evaluate models."
    }

    imgWithCaption(Files.ivannLancelot) { width = min(100.pct, 400.px) }
    markdown {
        +"""|It is aimed at Machine Learning researchers,
            |it looks to abstract away the coding aspect of coming up with a neural network model so
            |the scientist can focus on the design. In order to achieve this, the network is represented as a 
            |graph where the layers (or simply components) of the model are nodes which can be connected.
            |
            |This graph can then be used to perform static analysis to catch mistakes and provide
            |early feedback to the user (much like an IDE would!).
            |""".trimMargin()
    }
    br {}

    imgWithCaption(Files.ivannTypeCheck, "Visual feedback of a check for matching matrix dimensions") {
        width = min(100.pct, 300.px)
    }

    markdown {
        +"""|In order to cater to all niches, Ivann supports _custom nodes_, which means the user can make
            |a node out of inline python. This allows using the UI to quickly access the most common bits
            |of the network, while being able to fine-tune other parts of the graph.
            |
            |We developed Ivann as a team of 7. My focus was on the logic concerned with the IR, the static
            |analysis, and making code generation of Python code with Javascript objects a type-safe development
            |experience. In a way, Ivann reminded me a lot of engineering the compiler for WACC.
            |
            |Even then, Ivann was my first purely frontend project, and I got to learn about how difficult it is,
            |and how its challenges are very different from the ones I encounter when doing backend development.
        """.trimMargin()
    }
}
