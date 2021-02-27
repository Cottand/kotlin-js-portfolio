package components.projectEntries

import Files
import components.imgWithCaption
import external.markdown
import kotlinx.css.pct
import kotlinx.css.px
import kotlinx.css.width
import react.RProps
import util.component

// https://github.com/Cottand/multi-paxos
val paxosEntry by component<RProps> {
    markdown {
        +"Paxos"["https://paxos.systems/how/"]
        +" is a "
        +"consensus"["https://en.wikipedia.org/wiki/Consensus_(computer_science)"]
        +" algorithm."
        +""" As part of a university project, we implemented a variant (Multi-Paxos), by modelling
            |a cluster of servers and clients, where the servers each maintained a copy of a ledger database, and
            |the clients broadcasted transactions. The implementation must guarantee a number of properties:
            |
            |- **Consistency**: transactions are appended in the same order to all ledgers
            |
            |- **Liveness**: all transactions will eventually be appended
            |
            |- **Safety**: only transactions broadcast by clients will be appended
            |
            |- **Failure tolerance**: as long as a majority of replicas is correct (ie, have not crashed),
            | we will maintain Consistency, Liveness, and Safety.
        """.trimMargin()
    }

    imgWithCaption(Files.multiPaxosUml, "UML diagram of the lifecycle a Client's request") {
        width = min(100.pct, 700.px)
    }
}
