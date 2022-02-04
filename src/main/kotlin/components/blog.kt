package components

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.MTypographyVariant.caption
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.list.mList
import com.ccfraser.muirwik.components.list.mListItem
import com.ccfraser.muirwik.components.list.mListItemText
import com.ccfraser.muirwik.components.mTypography
import components.Type.Talk
import react.RBuilder
import react.RProps
import react.dom.div
import react.functionalComponent

val blog = functionalComponent<RProps> {
    mCard {
        mList(component = "nav") {
            entry(Talk, "Adding Pattern Matching to Kotlin", "https://youtu.be/Blj-7SGYUnE?t=215", "01/07/20", false)
        }
    }
}

private enum class Type { Blog, Talk }

private fun RBuilder.entry(type: Type, title: String, hRef: String, date: String, divider: Boolean = true) =
    mListItem(hRefOptions = HRefOptions(hRef), button = true, divider = divider) {
        div {
            mTypography(date, variant = caption)
            mListItemText(title, type.name)
        }
        attrs.component = "a"
    }
