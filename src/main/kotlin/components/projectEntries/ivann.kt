package components.projectEntries

import components.imgWithCaption
import external.markdown
import kotlinx.css.LinearDimension
import kotlinx.css.br
import kotlinx.css.width
import react.RBuilder
import react.dom.br

fun RBuilder.ivannEntry() {
    markdown {
        "Ivann"["https://icivann.github.io/ivann"]
        +" is an online visual network builder, written using **Typescript** and **VueJS**. It generates Python files that can then be run anywhere in order to train and evaluate models."
        +"""|It is aimed at Machine Learning researchers,
            |it looks to abstract away the coding aspect of coming up with a neural network model so
            |the scientist can focus on the design. In order to achieve this, the network is represented as a 
            |graph where the layers (or simply components) of the model are nodes which can be connected.
            |
            |This graph can then be used to perform static analysis to catch mistakes and provide
            |early feedback to the user (much like an IDE would!)
            |""".trimMargin()
    }
    br {}
    imgWithCaption(Files.ivannTypeCheck, "Visual feedback of check for matching matrix dimensions") {
        width = LinearDimension("max(50%, 300px)")
    }

    markdown {
        +"""|In order to cater to all niches, Ivann supports _custom nodes_, which means the user can make
            |a node out of inline python. This allows using the UI to quickly access the most common bits
            |of the network, while being able to fine-tune other parts of the graph.
        """.trimMargin()
    }
    br {}
}
