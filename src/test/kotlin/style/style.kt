package style

import kotlinext.js.js
import kotlin.test.Test

val themeOptions2 = js {
    breakpoints = js {
        keys = js("['xs', 'sm', 'md', 'lg', 'xl']")
    }
}
// fun jl(vararg: dynamic) =
internal class StyleTest {
    @Test
    fun themePrint() {
        console.log(themeOptions2)
    }
}
