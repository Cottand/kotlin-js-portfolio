package util

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.mLink
import kotlin.reflect.KClass
import kotlinx.css.Color
import kotlinx.css.Direction
import kotlinx.css.Image
import react.Component
import react.RBuilder
import react.RHandler
import react.RProps
import react.ReactElement
import react.rClass

fun linearGradient(direction: String, from: Color, to: Color): Image =
    Image("linear-gradient($direction, $from, $to)")

fun RBuilder.simpleLink(text: String, href: String) =
    mLink("A link to my github ", hRefOptions = HRefOptions(href))

