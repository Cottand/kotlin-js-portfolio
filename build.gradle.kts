import org.jetbrains.kotlin.gradle.internal.ensureParentDirsCreated
import org.jetbrains.kotlin.gradle.targets.js.webpack.KotlinWebpack

plugins {
    kotlin("js") version "1.5.0"
    id("org.jlleitschuh.gradle.ktlint") version "9.4.1"
}

group = "org"
version = "0.1"
val customDomain = "nico.dcotta.eu"

repositories {
    jcenter()
    mavenCentral()
    maven("https://dl.bintray.com/kotlin/kotlin-js-wrappers")
}

dependencies {
    val reactVersion = "17.0.0"
    val kotlinStyledVersion = "5.2.0"
    val kotlinJsVersion = "pre.135-kotlin-1.4.10"
    testImplementation(kotlin("test-js"))
    implementation("org.jetbrains:kotlin-react:$reactVersion-$kotlinJsVersion")
    implementation("org.jetbrains:kotlin-react-dom:$reactVersion-$kotlinJsVersion")
    implementation("org.jetbrains:kotlin-react-router-dom:5.2.0-$kotlinJsVersion")
    implementation("org.jetbrains:kotlin-styled:$kotlinStyledVersion-$kotlinJsVersion")
    implementation(npm("react-hot-loader", "^4.12.20"))
    implementation(npm("async", "^3.2.0"))
    implementation(npm("react-swipeable-views", "^0.13.9"))
    implementation(npm("markdown-to-jsx", "^7.1.0"))
    implementation(npm("react-highlight", "^0.11.1"))
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

tasks {
    val format by registering {
        dependsOn(ktlintFormat)
    }
    val createCname by registering {
        val webpackTask = named("browserProductionWebpack", KotlinWebpack::class)
        mustRunAfter(webpackTask)
        val webpackDir = webpackTask.get().destinationDirectory
        doLast {
            with(File("$webpackDir/CNAME")) {
                ensureParentDirsCreated()
                writeText(customDomain)
            }
        }
    }

    assemble { dependsOn(createCname) }
}

fun isChromiumInstalled() = ProcessBuilder("sh", "-c", "chromium --help")
    .directory(file("."))
    .start()
    .waitFor() == 0

operator fun <T : Any> SetProperty<T>.plusAssign(elem: T) {
    add(elem)
}
