package components.projectEntries

import components.imgWithCaption
import external.markdown
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import react.RBuilder

fun RBuilder.icHackEntry() {
    markdown {
        +"""|_ICHack_ is a Hackathon celebrated every year at Imperial College. I competed in a team of 6 and we won
            |the _Best Mobile App_ award.
            |Our submission, which we baptised ARnold, was an app that allowed a lecturer to bring 3D models to their
            |students' phones through AR.""".trimMargin()
    }

    imgWithCaption(Files.icHackWin, "The team receiving the prize") { width = max(60.pct, 400.px) }

    markdown {
        +"""|We targeted medical and engineering students, who are often taught
            |complex models (say a plane turbine or a heart) and are often stuck with 2D, non interactive representations
            |of them. Even when they do get the chance to visualise a 3D model, it is not in a lecture, the most crucial
            |part of teaching.
            |
            |We made the app with **Unity**, so in **C#**.
        """.trimMargin()
    }

    imgWithCaption(Files.icHack, "") { width = max(60.pct, 400.px) }
}
