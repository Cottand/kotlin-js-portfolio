@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")

import kotlin.js.*
import org.khronos.webgl.*
import org.w3c.dom.*
import org.w3c.dom.events.*
import org.w3c.dom.parsing.*
import org.w3c.dom.svg.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import org.w3c.files.*
import org.w3c.notifications.*
import org.w3c.performance.*
import org.w3c.workers.*
import org.w3c.xhr.*
import React.ReactElement__1
import React.Component__1
import React.ComponentClass__1
import React.FunctionComponent
import React.ErrorInfo

external interface ErrorReporterProps {
    var error: Any
}

external interface AppContainerProps {
    var errorBoundary: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var errorReporter: dynamic /* ComponentClass__1<ErrorReporterProps>? | FunctionComponent<ErrorReporterProps>? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface AppChildren {
    var children: ReactElement__1<Any>?
        get() = definedExternally
        set(value) = definedExternally
}

external open class AppContainer : Component__1<AppContainerProps /* AppContainerProps & AppChildren */>

external fun hot(module: Any): (Component: T, props: AppContainerProps) -> T

external fun <T> cold(component: T): T

external fun <T> areComponentsEqual(typeA: ComponentClass__1<T>, typeB: ComponentClass__1<T>): Boolean

external fun <T> areComponentsEqual(typeA: ComponentClass__1<T>, typeB: FunctionComponent<T>): Boolean

external fun <T> areComponentsEqual(typeA: FunctionComponent<T>, typeB: ComponentClass__1<T>): Boolean

external fun <T> areComponentsEqual(typeA: FunctionComponent<T>, typeB: FunctionComponent<T>): Boolean

external interface HotError {
    var error: Error
    var errorInfo: ErrorInfo?
        get() = definedExternally
        set(value) = definedExternally
}

external interface Config {
    var logLevel: String
    var onComponentRegister: (type: Any, uniqueLocalName: String, fileName: String) -> Any
    var onComponentCreate: (type: Any, displayName: String) -> Any
    var pureSFC: Boolean
    var pureRender: Boolean
    var allowSFC: Boolean
    var disableHotRenderer: Boolean
    var disableHotRendererWhenInjected: Boolean
    var showReactDomPatchNotification: Boolean
    var ignoreSFC: Boolean
    var ignoreComponents: Boolean
    var reloadHooks: Boolean
    var errorReporter: dynamic /* ComponentClass__1<HotError> | FunctionComponent<HotError> */
        get() = definedExternally
        set(value) = definedExternally
    var ErrorOverlay: dynamic /* ComponentClass__1<`T$16`> | FunctionComponent<`T$16`> */
        get() = definedExternally
        set(value) = definedExternally
    var trackTailUpdates: Boolean
}

external interface ConfigPartial {
    var logLevel: String?
        get() = definedExternally
        set(value) = definedExternally
    var onComponentRegister: ((type: Any, uniqueLocalName: String, fileName: String) -> Any)?
        get() = definedExternally
        set(value) = definedExternally
    var onComponentCreate: ((type: Any, displayName: String) -> Any)?
        get() = definedExternally
        set(value) = definedExternally
    var pureSFC: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var pureRender: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var allowSFC: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disableHotRenderer: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disableHotRendererWhenInjected: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var showReactDomPatchNotification: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var ignoreSFC: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var ignoreComponents: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var reloadHooks: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var errorReporter: dynamic /* ComponentClass__1<HotError>? | FunctionComponent<HotError>? */
        get() = definedExternally
        set(value) = definedExternally
    var ErrorOverlay: dynamic /* ComponentClass__1<`T$16`>? | FunctionComponent<`T$16`>? */
        get() = definedExternally
        set(value) = definedExternally
    var trackTailUpdates: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

external fun setConfig(config: ConfigPartial)