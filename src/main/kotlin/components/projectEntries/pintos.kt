package components.projectEntries

import external.markdown
import react.RBuilder

fun RBuilder.pintosEntry() = markdown {
    "Pintos"["https://pintos-os.org/"]
    +" is an educational operating system for **`x86`** written in **C**, with features such as advanced scheduling, paging and virtual memory, and user programs, along with some of the `C` stdlib."
    +"\n\nDeveloping Pintos required a deep understanding of the workings of an OS and the use of tools like `valgrind`, `gdb`, emulators, etc; as well as reading too much assembly."
}
