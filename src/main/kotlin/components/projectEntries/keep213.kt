package components.projectEntries

import external.highlightCode
import external.markdown
import react.RBuilder

fun RBuilder.keep213Entry() {
    markdown {
        +"""|KEEP 213 hopes to bring pattern matching to Kotlin, which _almost_ already supports it through a
            |combination of
            |its `when {}` clauses, smart casts, and destructuring. The proposal takes that a step beyond and
            |introduces nested patterns and guards.""".trimMargin()

        +"If you would like to see it happen, make sure you drop a thumbs up at ".trimMargin()
        +"the PR"["https://github.com/Kotlin/KEEP/pull/213"]
        +"!"
    }
    markdown {
        +"""|Overall, the 'flavour' of pattern matching the KEEP suggests is similar to Haskell's (with chained patters
            |and potentially several guards in each pattern) but with the absence of as-patters and enforcing
            |exhaustive matches.
            |
            |The proposal, despite all its shortcomings, has received great support from the community, but the Kotlin
            |team has yet to give an opinion. It is likely the team prefers to wait and see how Java's future pattern
            |matching inside `switch` and destructuring look at the bytecode level in order to guarantee
            |interoperability.
        """.trimMargin()
    }

    highlightCode("kotlin") {
        val name = "\$name"
        val title = "\$title"
        +"""
            sealed class Download
            data class App(val name: String, val developer: Person) : Download()
            data class Movie(val title: String, val director: Person) : Download()
            val download: Download = // ...

            // Without pattern matching:
            val result = when(download) {
              is App -> {
                val (name, dev) = download
                when(dev) {
                  is Person -> 
                    if(dev.name == "Alice") "Alice's app $name" else "Not by Alice"
                  else -> "Not by Alice"
                }
              }
              is Movie -> {
                val (title, diretor) = download
                if (director.name == "Alice") {
                  "Alice's movie $title"
                } else {
                  "Not by Alice"
                }
              }
            }

            // With pattern matching:
            val result = when(download) {
              is App(name, Person("Alice", _)) -> "Alice's app $name"
              is Movie(title, Person("Alice", _)) -> "Alice's movie $title"
              is App, Movie -> "Not by Alice"
            }
        """.trimIndent()
    }
}
