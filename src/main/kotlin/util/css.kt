package util

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.mLink
import react.FunctionalComponent
import react.RBuilder
import react.RProps
import react.functionalComponent
import kotlin.properties.ReadOnlyProperty

fun RBuilder.simpleLink(text: String, href: String) =
    mLink(text, hRefOptions = HRefOptions(href))

fun <P : RProps> component(builder: RBuilder.(P) -> Unit) =
    ReadOnlyProperty<Any?, FunctionalComponent<P>> { _, property ->
        functionalComponent(displayName = property.name, builder)
    }
