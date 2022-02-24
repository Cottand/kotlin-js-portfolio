package components

import com.ccfraser.muirwik.components.HRefOptions
import com.ccfraser.muirwik.components.MTypographyVariant.caption
import com.ccfraser.muirwik.components.card.mCard
import com.ccfraser.muirwik.components.list.mList
import com.ccfraser.muirwik.components.list.mListItem
import com.ccfraser.muirwik.components.list.mListItemText
import com.ccfraser.muirwik.components.mTypography
import components.Type.Article
import components.Type.Talk
import react.RBuilder
import react.RProps
import react.dom.div
import react.functionalComponent

val blog = functionalComponent<RProps> {
    mCard {
        mList(component = "nav") {
            entry(
                type = Article,
                title = "Detailed Case Study of Blockchain.com, a Fast-growing Cryptocurrency Company",
                hRef = "https://github.com/Cottand/articles/raw/master/blockchainCaseStudy.pdf",
                date = "24/02/22",
            )
            entry(Talk, "Adding Pattern Matching to Kotlin", "https://youtu.be/Blj-7SGYUnE?t=215", "01/07/20", false)
        }
    }
}

private enum class Type { Blog, Talk, Article }

private fun RBuilder.entry(type: Type, title: String, hRef: String, date: String, divider: Boolean = true) =
    mListItem(hRefOptions = HRefOptions(hRef), button = true, divider = divider) {
        div {
            mTypography(date, variant = caption)
            mListItemText(title, type.name)
        }
        attrs.component = "a"
    }
