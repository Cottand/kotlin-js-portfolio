@file:Suppress("unused")

package external

import com.ccfraser.muirwik.components.createStyled
import com.ccfraser.muirwik.components.mAppBar
import com.ccfraser.muirwik.components.setStyledPropsAndRunHandler
import react.RBuilder
import react.RComponent
import react.RState
import styled.StyledHandler
import styled.StyledProps

@JsNonModule
@JsModule("react-swipeable-views")
private external val swipeableViewsModule: dynamic

@Suppress("UnsafeCastFromDynamic")
private val swipeableViewsComponent: RComponent<SwipeableViewsProps, RState> = swipeableViewsModule.default

/**
 * Basic Container layout component.
 * Note: Setting maxWidth to null will disable maxWidth (i.e. pass false to underlying Material UI)
 */
fun RBuilder.mSwipeableViews(
    className: String? = null,
    handler: StyledHandler<SwipeableViewsProps>? = null
) = createStyled(swipeableViewsComponent) {
    mAppBar()
    setStyledPropsAndRunHandler(className, handler)
}

external interface SwipeableViewsProps : StyledProps {
    var animateHeight: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var animateTransitions: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var axis: String? /* "x" | "x-reverse" | "y" | "y-reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var containerStyle: Any?
        get() = definedExternally
        set(value) = definedExternally
    var disabled: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var disableLazyLoading: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var enableMouseEvents: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var hysteresis: Number?
        get() = definedExternally
        set(value) = definedExternally
    var ignoreNativeScroll: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var index: Number?
        get() = definedExternally
        set(value) = definedExternally
    var onChangeIndex: OnChangeIndexCallback?
        get() = definedExternally
        set(value) = definedExternally
    var onSwitching: OnSwitchingCallback?
        get() = definedExternally
        set(value) = definedExternally
    var resistance: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var slideStyle: Any?
        get() = definedExternally
        set(value) = definedExternally
    var slideClassName: String?
        get() = definedExternally
        set(value) = definedExternally
    var threshold: Number?
        get() = definedExternally
        set(value) = definedExternally
}

external interface SwipeableViewsState : RState {
    var indexCurrent: Number?
        get() = definedExternally
        set(value) = definedExternally
    var indexLatest: Number?
        get() = definedExternally
        set(value) = definedExternally
    var isDragging: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var isFirstRender: Boolean?
        get() = definedExternally
        set(value) = definedExternally
    var heightLatest: Number?
        get() = definedExternally
        set(value) = definedExternally
    var displaySameSlide: Boolean?
        get() = definedExternally
        set(value) = definedExternally
}

typealias OnChangeIndexCallback = (index: Number, indexLatest: Number) -> Unit

typealias OnTransitionEndCallback = () -> Unit

typealias OnSwitchingCallback = (index: Number, type: String /* "move" | "end" */) -> Unit
