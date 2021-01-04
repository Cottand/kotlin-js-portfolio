plugins {
    kotlin("js") version "1.4.21"
    id("org.jlleitschuh.gradle.ktlint") version "9.4.1"
}

group = "org"
version = "0.1"

repositories {
    jcenter()
    mavenCentral()
    maven("https://dl.bintray.com/kotlin/kotlin-js-wrappers")
}

dependencies {
    val reactVersion = "17.0.0"
    val kotlinStyledVersion = "5.2.0"
    val kotlinJsVersion = "pre.130-kotlin-1.4.21"
    testImplementation(kotlin("test-js"))
    implementation("org.jetbrains:kotlin-react:$reactVersion-$kotlinJsVersion")
    implementation("org.jetbrains:kotlin-react-dom:$reactVersion-$kotlinJsVersion")
    implementation("org.jetbrains:kotlin-styled:$kotlinStyledVersion-$kotlinJsVersion")
    implementation(npm("react-hot-loader", "^4.12.20"))
    implementation(npm("react-swipeable-views", "^0.13.9"))
    implementation("com.ccfraser.muirwik:muirwik-components:0.6.2")
}

kotlin {
    js(LEGACY) {
        browser {
            commonWebpackConfig {
                sourceMaps = true
                cssSupport.enabled = true
            }
            testTask {
                useKarma {
                    if (isChromiumInstalled()) useChromiumHeadless() else useChromeHeadless()
                }
            }
            binaries.executable()
        }
    }
}

ktlint {
//    disabledRules += "no-wildcard-imports"
}

val format by tasks.registering {
    dependsOn(tasks.ktlintFormat)
}

fun isChromiumInstalled() = ProcessBuilder("sh", "-c", "chromium --help")
    .directory(file("."))
    .start()
    .waitFor() == 0

operator fun <T : Any> SetProperty<T>.plusAssign(elem: T) {
    add(elem)
}
