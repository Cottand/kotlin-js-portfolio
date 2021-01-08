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
import Property.All

external interface StandardLonghandProperties<TLength, TTime> {
    var alignContent: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var alignItems: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var alignSelf: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "auto" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var alignTracks: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alternate" | "alternate-reverse" | "normal" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationFillMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "backwards" | "both" | "forwards" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationIterationCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "infinite" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationName: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationPlayState: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "paused" | "running" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var animationTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var appearance: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "button" | "checkbox" | "listbox" | "menulist" | "meter" | "progress-bar" | "push-button" | "radio" | "searchfield" | "slider-horizontal" | "square-button" | "textarea" | "auto" | "menulist-button" | "none" | "textfield" */
        get() = definedExternally
        set(value) = definedExternally
    var aspectRatio: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backdropFilter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backfaceVisibility: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "hidden" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundAttachment: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "fixed" | "local" | "scroll" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundBlendMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "saturation" | "screen" | "soft-light" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundClip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundImage: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundOrigin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundPosition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundPositionX: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "center" | "left" | "right" | "x-end" | "x-start" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundPositionY: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "top" | "y-end" | "y-start" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundRepeat: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var backgroundSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "contain" | "cover" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var blockOverflow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clip" | "ellipsis" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var blockSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockEndColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockEndStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockEndWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockStartColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockStartStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockStartWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBottomColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBottomLeftRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBottomRightRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBottomStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderBottomWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderCollapse: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "collapse" | "separate" */
        get() = definedExternally
        set(value) = definedExternally
    var borderEndEndRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderEndStartRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderImageOutset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderImageRepeat: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "repeat" | "round" | "space" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderImageSlice: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderImageSource: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderImageWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineEndColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineEndStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineEndWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineStartColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineStartStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineStartWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderLeftColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderLeftStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderLeftWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderRightColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderRightStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderRightWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var borderSpacing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderStartEndRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderStartStartRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderTopColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderTopLeftRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderTopRightRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderTopStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var borderTopWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var bottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var boxDecorationBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clone" | "slice" */
        get() = definedExternally
        set(value) = definedExternally
    var boxShadow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var boxSizing: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" */
        get() = definedExternally
        set(value) = definedExternally
    var breakAfter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso" */
        get() = definedExternally
        set(value) = definedExternally
    var breakBefore: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "always" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" | "column" | "left" | "page" | "recto" | "region" | "right" | "verso" */
        get() = definedExternally
        set(value) = definedExternally
    var breakInside: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "avoid" | "avoid-column" | "avoid-page" | "avoid-region" */
        get() = definedExternally
        set(value) = definedExternally
    var captionSide: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-end" | "block-start" | "bottom" | "inline-end" | "inline-start" | "top" */
        get() = definedExternally
        set(value) = definedExternally
    var caretColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var clear: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "both" | "inline-end" | "inline-start" | "left" | "none" | "right" */
        get() = definedExternally
        set(value) = definedExternally
    var clipPath: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var color: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var colorAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "economy" | "exact" */
        get() = definedExternally
        set(value) = definedExternally
    var columnCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columnFill: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "balance" */
        get() = definedExternally
        set(value) = definedExternally
    var columnGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columnRuleColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columnRuleStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columnRuleWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columnSpan: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var columnWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var contain: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "content" | "layout" | "none" | "paint" | "size" | "strict" | "style" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var content: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "close-quote" | "no-close-quote" | "no-open-quote" | "open-quote" | "contents" | String? & Any? | "none" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var contentVisibility: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "hidden" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var counterIncrement: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var counterReset: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var counterSet: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var cursor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-grab" | "-webkit-grab" | "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var direction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ltr" | "rtl" */
        get() = definedExternally
        set(value) = definedExternally
    var display: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "inline" | "run-in" | "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table" | "contents" | "list-item" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var emptyCells: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "hide" | "show" */
        get() = definedExternally
        set(value) = definedExternally
    var filter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var flexBasis: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-auto" | "auto" | "content" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var flexDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var flexGrow: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var flexShrink: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var flexWrap: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "nowrap" | "wrap" | "wrap-reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var float: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "inline-end" | "inline-start" | "left" | "none" | "right" */
        get() = definedExternally
        set(value) = definedExternally
    var fontFamily: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontFeatureSettings: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontKerning: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var fontLanguageOverride: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontOpticalSizing: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var fontSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large" | TLength? | "larger" | "smaller" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontSizeAdjust: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontSmooth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large" | TLength? | "always" | "auto" | "never" */
        get() = definedExternally
        set(value) = definedExternally
    var fontStretch: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "italic" | "normal" | "oblique" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontSynthesis: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "style" | "weight" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariant: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional" | "all-petite-caps" | "all-small-caps" | "common-ligatures" | "contextual" | "diagonal-fractions" | "discretionary-ligatures" | "full-width" | "historical-forms" | "historical-ligatures" | "lining-nums" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | "oldstyle-nums" | "ordinal" | "petite-caps" | "proportional-nums" | "proportional-width" | "ruby" | "slashed-zero" | "small-caps" | "stacked-fractions" | "tabular-nums" | "titling-caps" | "unicase" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariantCaps: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all-petite-caps" | "all-small-caps" | "normal" | "petite-caps" | "small-caps" | "titling-caps" | "unicase" */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariantEastAsian: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional" | "full-width" | "normal" | "proportional-width" | "ruby" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariantLigatures: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariantNumeric: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "diagonal-fractions" | "lining-nums" | "normal" | "oldstyle-nums" | "ordinal" | "proportional-nums" | "slashed-zero" | "stacked-fractions" | "tabular-nums" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariantPosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "sub" | "super" */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariationSettings: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontWeight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bold" | "normal" | Number? & Any? | "bolder" | "lighter" */
        get() = definedExternally
        set(value) = definedExternally
    var forcedColorAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var gridAutoColumns: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridAutoFlow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "dense" | "row" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridAutoRows: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridColumnEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridColumnStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridRowEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridRowStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridTemplateAreas: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridTemplateColumns: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "max-content" | "min-content" | String? & Any? | "none" | "subgrid" */
        get() = definedExternally
        set(value) = definedExternally
    var gridTemplateRows: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "max-content" | "min-content" | String? & Any? | "none" | "subgrid" */
        get() = definedExternally
        set(value) = definedExternally
    var hangingPunctuation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "allow-end" | "first" | "force-end" | "last" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var height: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var hyphens: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "manual" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var imageOrientation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "flip" | "from-image" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var imageRendering: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated" */
        get() = definedExternally
        set(value) = definedExternally
    var imageResolution: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "from-image" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var initialLetter: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var inlineSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var inset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var insetBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var insetBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var insetBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var insetInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var insetInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var insetInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var isolation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "isolate" */
        get() = definedExternally
        set(value) = definedExternally
    var justifyContent: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "left" | "normal" | "right" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var justifyItems: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var justifySelf: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var justifyTracks: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "left" | "normal" | "right" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var left: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var letterSpacing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var lineBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "anywhere" | "auto" | "loose" | "normal" | "strict" */
        get() = definedExternally
        set(value) = definedExternally
    var lineHeight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var lineHeightStep: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var listStyleImage: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var listStylePosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "inside" | "outside" */
        get() = definedExternally
        set(value) = definedExternally
    var listStyleType: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginBottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginLeft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginRight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marginTop: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorderMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alpha" | "luminance" */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorderOutset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorderRepeat: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "repeat" | "round" | "space" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorderSlice: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorderSource: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorderWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskClip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "no-clip" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskComposite: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "add" | "exclude" | "intersect" | "subtract" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskImage: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alpha" | "luminance" | "match-source" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskOrigin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "margin-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskPosition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskRepeat: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "contain" | "cover" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maskType: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alpha" | "luminance" */
        get() = definedExternally
        set(value) = definedExternally
    var mathStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "compact" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var maxBlockSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "max-content" | "min-content" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maxHeight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-max-content" | "-webkit-min-content" | "max-content" | "min-content" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maxInlineSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "max-content" | "min-content" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maxLines: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var maxWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-max-content" | "-webkit-min-content" | "intrinsic" | "max-content" | "min-content" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var minBlockSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var minHeight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-max-content" | "-webkit-min-content" | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var minInlineSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "auto" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var minWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-max-content" | "-webkit-min-content" | "auto" | "intrinsic" | "max-content" | "min-content" | "min-intrinsic" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var mixBlendMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "color" | "color-burn" | "color-dodge" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "saturation" | "screen" | "soft-light" */
        get() = definedExternally
        set(value) = definedExternally
    var motionDistance: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var motionPath: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var motionRotation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var objectFit: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "contain" | "cover" | "fill" | "none" | "scale-down" */
        get() = definedExternally
        set(value) = definedExternally
    var objectPosition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetAnchor: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var offsetDistance: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetPath: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetRotate: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetRotation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var opacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var order: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var orphans: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var outlineColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "invert" */
        get() = definedExternally
        set(value) = definedExternally
    var outlineOffset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var outlineStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var outlineWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowAnchor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowBlock: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "clip" | "hidden" | "scroll" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowClipBox: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "content-box" | "padding-box" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowInline: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "clip" | "hidden" | "scroll" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowWrap: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "anywhere" | "break-word" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var overflowY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var overscrollBehavior: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "contain" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var overscrollBehaviorBlock: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "contain" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var overscrollBehaviorInline: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "contain" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var overscrollBehaviorX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "contain" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var overscrollBehaviorY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "contain" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var paddingBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingBottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingLeft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingRight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paddingTop: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var pageBreakAfter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso" */
        get() = definedExternally
        set(value) = definedExternally
    var pageBreakBefore: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "always" | "auto" | "avoid" | "left" | "recto" | "right" | "verso" */
        get() = definedExternally
        set(value) = definedExternally
    var pageBreakInside: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "avoid" */
        get() = definedExternally
        set(value) = definedExternally
    var paintOrder: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "fill" | "markers" | "normal" | "stroke" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var perspective: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var perspectiveOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var placeContent: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var pointerEvents: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "auto" | "fill" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" */
        get() = definedExternally
        set(value) = definedExternally
    var position: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky" */
        get() = definedExternally
        set(value) = definedExternally
    var quotes: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var resize: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "both" | "horizontal" | "inline" | "none" | "vertical" */
        get() = definedExternally
        set(value) = definedExternally
    var right: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var rotate: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var rowGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var rubyAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "space-around" | "space-between" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var rubyMerge: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "collapse" | "separate" */
        get() = definedExternally
        set(value) = definedExternally
    var rubyPosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "over" | "under" */
        get() = definedExternally
        set(value) = definedExternally
    var scale: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollBehavior: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "smooth" */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMargin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginBottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginLeft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginRight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollMarginTop: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPadding: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingBottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingLeft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingRight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollPaddingTop: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "none" | "start" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapMargin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapMarginBottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapMarginLeft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapMarginRight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapMarginTop: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapStop: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "always" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapType: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "both" | "inline" | "none" | "x" | "y" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollbarColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "auto" | "dark" | "light" */
        get() = definedExternally
        set(value) = definedExternally
    var scrollbarGutter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "always" | "auto" | "stable" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollbarWidth: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var shapeImageThreshold: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var shapeMargin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var shapeOutside: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "margin-box" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var tabSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var tableLayout: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "fixed" */
        get() = definedExternally
        set(value) = definedExternally
    var textAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "left" | "match-parent" | "right" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var textAlignLast: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "center" | "end" | "justify" | "left" | "right" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var textCombineUpright: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-text-combine-horizontal" | "all" | "digits" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationLine: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationSkip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationSkipInk: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "solid" | "wavy" */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationThickness: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "from-font" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textDecorationWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "from-font" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textEmphasisColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textEmphasisPosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textEmphasisStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textIndent: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textJustify: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "inter-character" | "inter-word" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var textOrientation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mixed" | "sideways" | "upright" */
        get() = definedExternally
        set(value) = definedExternally
    var textOverflow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clip" | "ellipsis" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textRendering: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed" */
        get() = definedExternally
        set(value) = definedExternally
    var textShadow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textSizeAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textTransform: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "capitalize" | "full-size-kana" | "full-width" | "lowercase" | "none" | "uppercase" */
        get() = definedExternally
        set(value) = definedExternally
    var textUnderlineOffset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textUnderlinePosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "from-font" | "left" | "right" | "under" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var top: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var touchAction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-manipulation" | "-ms-none" | "-ms-pinch-zoom" | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var transform: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var transformBox: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "fill-box" | "stroke-box" | "view-box" */
        get() = definedExternally
        set(value) = definedExternally
    var transformOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var transformStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "flat" | "preserve-3d" */
        get() = definedExternally
        set(value) = definedExternally
    var transitionDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var transitionDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var transitionProperty: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var transitionTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var translate: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var unicodeBidi: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-isolate" | "-moz-isolate-override" | "-moz-plaintext" | "-webkit-isolate" | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext" */
        get() = definedExternally
        set(value) = definedExternally
    var userSelect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text" */
        get() = definedExternally
        set(value) = definedExternally
    var verticalAlign: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "baseline" | "bottom" | "middle" | "sub" | "super" | "text-bottom" | "text-top" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var visibility: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "collapse" | "hidden" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var whiteSpace: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" */
        get() = definedExternally
        set(value) = definedExternally
    var widows: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var width: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-max-content" | "auto" | "intrinsic" | "max-content" | "min-content" | "min-intrinsic" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var willChange: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "contents" | "scroll-position" | String? & Any? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var wordBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "break-all" | "break-word" | "keep-all" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var wordSpacing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var wordWrap: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "break-word" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var writingMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" */
        get() = definedExternally
        set(value) = definedExternally
    var zIndex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var zoom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "reset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface StandardShorthandProperties<TLength, TTime> {
    var all: All?
        get() = definedExternally
        set(value) = definedExternally
    var animation: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | "alternate" | "alternate-reverse" | "normal" | "reverse" | "backwards" | "both" | "forwards" | "none" | TTime? | "infinite" | "paused" | "running" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var background: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | TLength? | "bottom" | "center" | "left" | "right" | "top" | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | "fixed" | "local" | "scroll" | "border-box" | "content-box" | "padding-box" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var border: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderBottom: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderImage: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "repeat" | "round" | "space" | "stretch" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderLeft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderRight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderTop: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var borderWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columnRule: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var columns: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var flex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "content" | "max-content" | "min-content" | "none" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var flexFlow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var font: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var grid: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridArea: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridColumn: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridRow: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridTemplate: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var lineClamp: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var listStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "inside" | "none" | "outside" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var margin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var mask: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "add" | "exclude" | "intersect" | "subtract" | "alpha" | "luminance" | "match-source" | "no-clip" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var maskBorder: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alpha" | "luminance" | "none" | "repeat" | "round" | "space" | "stretch" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var motion: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var offset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var outline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | TLength? | "medium" | "thick" | "thin" | "auto" | "invert" */
        get() = definedExternally
        set(value) = definedExternally
    var overflow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var padding: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var placeItems: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var placeSelf: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "auto" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textDecoration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | TLength? | "auto" | "blink" | "dashed" | "dotted" | "double" | "from-font" | "grammar-error" | "line-through" | "none" | "overline" | "solid" | "spelling-error" | "underline" | "wavy" */
        get() = definedExternally
        set(value) = definedExternally
    var textEmphasis: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" */
        get() = definedExternally
        set(value) = definedExternally
    var transition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | TTime? | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface StandardProperties<TLength, TTime> : StandardLonghandProperties<TLength, TTime>, StandardShorthandProperties<TLength, TTime>

external interface VendorLonghandProperties<TLength, TTime> {
    var MozAnimationDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alternate" | "alternate-reverse" | "normal" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationFillMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "backwards" | "both" | "forwards" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationIterationCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "infinite" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationName: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationPlayState: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "paused" | "running" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozAnimationTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var MozAppearance: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-mac-unified-toolbar" | "-moz-win-borderless-glass" | "-moz-win-browsertabbar-toolbox" | "-moz-win-communications-toolbox" | "-moz-win-communicationstext" | "-moz-win-exclude-glass" | "-moz-win-glass" | "-moz-win-media-toolbox" | "-moz-win-mediatext" | "-moz-window-button-box" | "-moz-window-button-box-maximized" | "-moz-window-button-close" | "-moz-window-button-maximize" | "-moz-window-button-minimize" | "-moz-window-button-restore" | "-moz-window-frame-bottom" | "-moz-window-frame-left" | "-moz-window-frame-right" | "-moz-window-titlebar" | "-moz-window-titlebar-maximized" | "button" | "button-arrow-down" | "button-arrow-next" | "button-arrow-previous" | "button-arrow-up" | "button-bevel" | "button-focus" | "caret" | "checkbox" | "checkbox-container" | "checkbox-label" | "checkmenuitem" | "dualbutton" | "groupbox" | "listbox" | "listitem" | "menuarrow" | "menubar" | "menucheckbox" | "menuimage" | "menuitem" | "menuitemtext" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "menupopup" | "menuradio" | "menuseparator" | "meterbar" | "meterchunk" | "none" | "progressbar" | "progressbar-vertical" | "progresschunk" | "progresschunk-vertical" | "radio" | "radio-container" | "radio-label" | "radiomenuitem" | "range" | "range-thumb" | "resizer" | "resizerpanel" | "scale-horizontal" | "scale-vertical" | "scalethumb-horizontal" | "scalethumb-vertical" | "scalethumbend" | "scalethumbstart" | "scalethumbtick" | "scrollbarbutton-down" | "scrollbarbutton-left" | "scrollbarbutton-right" | "scrollbarbutton-up" | "scrollbarthumb-horizontal" | "scrollbarthumb-vertical" | "scrollbartrack-horizontal" | "scrollbartrack-vertical" | "searchfield" | "separator" | "sheet" | "spinner" | "spinner-downbutton" | "spinner-textfield" | "spinner-upbutton" | "splitter" | "statusbar" | "statusbarpanel" | "tab" | "tab-scroll-arrow-back" | "tab-scroll-arrow-forward" | "tabpanel" | "tabpanels" | "textfield" | "textfield-multiline" | "toolbar" | "toolbarbutton" | "toolbarbutton-dropdown" | "toolbargripper" | "toolbox" | "tooltip" | "treeheader" | "treeheadercell" | "treeheadersortarrow" | "treeitem" | "treeline" | "treetwisty" | "treetwistyopen" | "treeview" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBackfaceVisibility: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "hidden" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderBottomColors: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderEndColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderEndStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderEndWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderLeftColors: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderRightColors: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderStartColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderStartStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderTopColors: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxSizing: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnFill: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "balance" */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnRuleColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnRuleStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnRuleWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var MozContextProperties: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "fill" | "fill-opacity" | "none" | "stroke" | "stroke-opacity" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozFontFeatureSettings: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozFontLanguageOverride: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozHyphens: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "manual" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozImageRegion: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozMarginEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozMarginStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOrient: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "horizontal" | "inline" | "vertical" */
        get() = definedExternally
        set(value) = definedExternally
    var MozOsxFontSmoothing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large" | TLength? | "always" | "auto" | "never" */
        get() = definedExternally
        set(value) = definedExternally
    var MozPaddingEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozPaddingStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozPerspective: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozPerspectiveOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozStackSizing: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ignore" | "stretch-to-fit" */
        get() = definedExternally
        set(value) = definedExternally
    var MozTabSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTextBlink: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "blink" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var MozTextSizeAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransformOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransformStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "flat" | "preserve-3d" */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransitionDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransitionDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransitionProperty: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransitionTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var MozUserFocus: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ignore" | "none" | "normal" | "select-after" | "select-all" | "select-before" | "select-menu" | "select-same" */
        get() = definedExternally
        set(value) = definedExternally
    var MozUserModify: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "read-only" | "read-write" | "write-only" */
        get() = definedExternally
        set(value) = definedExternally
    var MozUserSelect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text" */
        get() = definedExternally
        set(value) = definedExternally
    var MozWindowDragging: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "drag" | "no-drag" */
        get() = definedExternally
        set(value) = definedExternally
    var MozWindowShadow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "default" | "menu" | "none" | "sheet" | "tooltip" */
        get() = definedExternally
        set(value) = definedExternally
    var msAccelerator: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "false" | "true" */
        get() = definedExternally
        set(value) = definedExternally
    var msAlignSelf: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "auto" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msBlockProgression: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bt" | "lr" | "rl" | "tb" */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomChaining: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "chained" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomLimitMax: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomLimitMin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomSnapPoints: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomSnapType: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mandatory" | "none" | "proximity" */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZooming: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "zoom" */
        get() = definedExternally
        set(value) = definedExternally
    var msFilter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msFlexDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var msFlexPositive: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msFlowFrom: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msFlowInto: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msGridColumns: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "max-content" | "min-content" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msGridRows: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "max-content" | "min-content" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msHighContrastAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msHyphenateLimitChars: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msHyphenateLimitLines: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "no-limit" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msHyphenateLimitZone: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msHyphens: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "manual" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msImeAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "after" | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var msJustifySelf: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "auto" | "baseline" | "left" | "normal" | "right" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msLineBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "anywhere" | "auto" | "loose" | "normal" | "strict" */
        get() = definedExternally
        set(value) = definedExternally
    var msOrder: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msOverflowStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-autohiding-scrollbar" | "auto" | "none" | "scrollbar" */
        get() = definedExternally
        set(value) = definedExternally
    var msOverflowX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var msOverflowY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollChaining: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "chained" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollLimitXMax: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollLimitXMin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollLimitYMax: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollLimitYMin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollRails: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "railed" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollSnapPointsX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollSnapPointsY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollSnapType: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mandatory" | "none" | "proximity" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollTranslation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "vertical-to-horizontal" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbar3dlightColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarArrowColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarBaseColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarDarkshadowColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarFaceColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarHighlightColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarShadowColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTextAutospace: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ideograph-alpha" | "ideograph-numeric" | "ideograph-parenthesis" | "ideograph-space" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msTextCombineHorizontal: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-text-combine-horizontal" | "all" | "digits" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTextOverflow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clip" | "ellipsis" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTouchAction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-manipulation" | "-ms-none" | "-ms-pinch-zoom" | "auto" | "manipulation" | "none" | "pan-down" | "pan-left" | "pan-right" | "pan-up" | "pan-x" | "pan-y" | "pinch-zoom" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTouchSelect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "grippers" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msTransform: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTransformOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTransitionDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTransitionDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTransitionProperty: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTransitionTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var msUserSelect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "element" | "none" | "text" */
        get() = definedExternally
        set(value) = definedExternally
    var msWordBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "break-all" | "break-word" | "keep-all" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var msWrapFlow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "both" | "clear" | "end" | "maximum" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var msWrapMargin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var msWrapThrough: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "wrap" */
        get() = definedExternally
        set(value) = definedExternally
    var msWritingMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" */
        get() = definedExternally
        set(value) = definedExternally
    var OObjectFit: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "contain" | "cover" | "fill" | "none" | "scale-down" */
        get() = definedExternally
        set(value) = definedExternally
    var OObjectPosition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTabSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTextOverflow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clip" | "ellipsis" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTransformOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAlignContent: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "baseline" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAlignItems: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAlignSelf: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "auto" | "baseline" | "normal" | "stretch" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alternate" | "alternate-reverse" | "normal" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationFillMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "backwards" | "both" | "forwards" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationIterationCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "infinite" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationName: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationPlayState: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "paused" | "running" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimationTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAppearance: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-apple-pay-button" | "button" | "button-bevel" | "caret" | "checkbox" | "default-button" | "inner-spin-button" | "listbox" | "listitem" | "media-controls-background" | "media-controls-fullscreen-background" | "media-current-time-display" | "media-enter-fullscreen-button" | "media-exit-fullscreen-button" | "media-fullscreen-button" | "media-mute-button" | "media-overlay-play-button" | "media-play-button" | "media-seek-back-button" | "media-seek-forward-button" | "media-slider" | "media-sliderthumb" | "media-time-remaining-display" | "media-toggle-closed-captions-button" | "media-volume-slider" | "media-volume-slider-container" | "media-volume-sliderthumb" | "menulist" | "menulist-button" | "menulist-text" | "menulist-textfield" | "meter" | "none" | "progress-bar" | "progress-bar-value" | "push-button" | "radio" | "searchfield" | "searchfield-cancel-button" | "searchfield-decoration" | "searchfield-results-button" | "searchfield-results-decoration" | "slider-horizontal" | "slider-vertical" | "sliderthumb-horizontal" | "sliderthumb-vertical" | "square-button" | "textarea" | "textfield" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBackdropFilter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBackfaceVisibility: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "hidden" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBackgroundClip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBackgroundOrigin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBackgroundSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "contain" | "cover" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderBeforeColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderBeforeStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderBeforeWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderBottomLeftRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderBottomRightRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderImageSlice: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderTopLeftRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderTopRightRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxDecorationBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clone" | "slice" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxReflect: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "above" | "below" | "left" | "right" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxShadow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxSizing: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitClipPath: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnFill: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "balance" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnRuleColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnRuleStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnRuleWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnSpan: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFilter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlexBasis: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "-webkit-auto" | "auto" | "content" | "max-content" | "min-content" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlexDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "row" | "row-reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlexGrow: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlexShrink: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlexWrap: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "nowrap" | "wrap" | "wrap-reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFontFeatureSettings: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFontKerning: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFontSmoothing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large" | TLength? | "always" | "auto" | "never" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFontVariantLigatures: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "common-ligatures" | "contextual" | "discretionary-ligatures" | "historical-ligatures" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitHyphens: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "manual" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitJustifyContent: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "space-around" | "space-between" | "space-evenly" | "stretch" | "center" | "end" | "flex-end" | "flex-start" | "start" | "left" | "normal" | "right" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitLineBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "anywhere" | "auto" | "loose" | "normal" | "strict" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitLineClamp: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMarginEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMarginStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskAttachment: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "fixed" | "local" | "scroll" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskClip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "border" | "content" | "padding" | "text" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskComposite: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clear" | "copy" | "destination-atop" | "destination-in" | "destination-out" | "destination-over" | "source-atop" | "source-in" | "source-out" | "source-over" | "xor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskImage: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskOrigin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "border" | "content" | "padding" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskPosition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskPositionX: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "center" | "left" | "right" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskPositionY: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskRepeat: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskRepeatX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "no-repeat" | "repeat" | "round" | "space" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskRepeatY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "no-repeat" | "repeat" | "round" | "space" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaskSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "contain" | "cover" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMaxInlineSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "-moz-max-content" | "-moz-min-content" | "max-content" | "min-content" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitOrder: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitOverflowScrolling: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "touch" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitPaddingEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitPaddingStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitPerspective: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitPerspectiveOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitPrintColorAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "economy" | "exact" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitRubyPosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "over" | "under" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitScrollSnapType: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "both" | "inline" | "none" | "x" | "y" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitShapeMargin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTapHighlightColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextCombine: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-text-combine-horizontal" | "all" | "digits" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextDecorationColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextDecorationLine: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextDecorationSkip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "box-decoration" | "edges" | "leading-spaces" | "none" | "objects" | "spaces" | "trailing-spaces" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextDecorationStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "solid" | "wavy" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextEmphasisColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextEmphasisPosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextEmphasisStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextFillColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextOrientation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mixed" | "sideways" | "upright" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextSizeAdjust: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextStrokeColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextStrokeWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextUnderlinePosition: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "from-font" | "left" | "right" | "under" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTouchCallout: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "default" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransform: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransformOrigin: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransformStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "flat" | "preserve-3d" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransitionDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransitionDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransitionProperty: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransitionTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitUserModify: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "read-only" | "read-write" | "read-write-plaintext-only" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitUserSelect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitWritingMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface VendorShorthandProperties<TLength, TTime> {
    var MozAnimation: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | "alternate" | "alternate-reverse" | "normal" | "reverse" | "backwards" | "both" | "forwards" | "none" | TTime? | "infinite" | "paused" | "running" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderImage: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "repeat" | "round" | "space" | "stretch" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumnRule: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozColumns: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTransition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | TTime? | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomLimit: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msContentZoomSnap: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mandatory" | "none" | "proximity" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msFlex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "content" | "max-content" | "min-content" | "none" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollLimit: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollSnapX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollSnapY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var msTransition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | TTime? | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitAnimation: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | "alternate" | "alternate-reverse" | "normal" | "reverse" | "backwards" | "both" | "forwards" | "none" | TTime? | "infinite" | "paused" | "running" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderBefore: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderImage: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "repeat" | "round" | "space" | "stretch" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBorderRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumnRule: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitColumns: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "content" | "max-content" | "min-content" | "none" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitFlexFlow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "column" | "column-reverse" | "nowrap" | "row" | "row-reverse" | "wrap" | "wrap-reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitMask: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | "border-box" | "content-box" | "padding-box" | "border" | "content" | "none" | "padding" | "text" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextEmphasis: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "circle" | "dot" | "double-circle" | "filled" | "none" | "open" | "sesame" | "triangle" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTextStroke: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | TLength? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitTransition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | TTime? | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface VendorProperties<TLength, TTime> : VendorLonghandProperties<TLength, TTime>, VendorShorthandProperties<TLength, TTime>

external interface ObsoleteProperties<TLength, TTime> {
    var azimuth: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "behind" | "center" | "center-left" | "center-right" | "far-left" | "far-right" | "left" | "left-side" | "leftwards" | "right" | "right-side" | "rightwards" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var boxAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "baseline" | "center" | "end" | "start" | "stretch" */
        get() = definedExternally
        set(value) = definedExternally
    var boxDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var boxFlex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var boxFlexGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var boxLines: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "multiple" | "single" */
        get() = definedExternally
        set(value) = definedExternally
    var boxOrdinalGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var boxOrient: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" */
        get() = definedExternally
        set(value) = definedExternally
    var boxPack: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var clip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariantAlternates: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "historical-forms" | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridColumnGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var gridRowGap: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var imeMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "active" | "auto" | "disabled" | "inactive" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var offsetBlock: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetBlockEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetBlockStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetInline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetInlineEnd: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var offsetInlineStart: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapCoordinate: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapDestination: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapPointsX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapPointsY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapTypeX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mandatory" | "none" | "proximity" */
        get() = definedExternally
        set(value) = definedExternally
    var scrollSnapTypeY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "mandatory" | "none" | "proximity" */
        get() = definedExternally
        set(value) = definedExternally
    var scrollbarTrackColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textCombineHorizontal: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-ms-text-combine-horizontal" | "all" | "digits" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "baseline" | "center" | "end" | "start" | "stretch" */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxFlex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxFlexGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxLines: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "multiple" | "single" */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxOrdinalGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxOrient: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlBoxPack: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlLineBreak: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "anywhere" | "auto" | "loose" | "normal" | "strict" */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlOpacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var KhtmlUserSelect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-none" | "all" | "auto" | "contain" | "element" | "none" | "text" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBackgroundClip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBackgroundInlinePolicy: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "clone" | "slice" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBackgroundOrigin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBackgroundSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "contain" | "cover" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBinding: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderRadiusBottomleft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderRadiusBottomright: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderRadiusTopleft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBorderRadiusTopright: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "baseline" | "center" | "end" | "start" | "stretch" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxFlex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxOrdinalGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxOrient: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxPack: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var MozBoxShadow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozFloatEdge: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "margin-box" | "padding-box" */
        get() = definedExternally
        set(value) = definedExternally
    var MozForceBrokenImageIcon: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOpacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutline: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | TLength? | "medium" | "thick" | "thin" | "auto" | "invert" */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "invert" */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineRadius: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineRadiusBottomleft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineRadiusBottomright: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineRadiusTopleft: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineRadiusTopright: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "groove" | "hidden" | "inset" | "none" | "outset" | "ridge" | "solid" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozOutlineWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "medium" | "thick" | "thin" */
        get() = definedExternally
        set(value) = definedExternally
    var MozTextAlignLast: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "center" | "end" | "justify" | "left" | "right" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var MozTextDecorationColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTextDecorationLine: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "blink" | "grammar-error" | "line-through" | "none" | "overline" | "spelling-error" | "underline" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var MozTextDecorationStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "dashed" | "dotted" | "double" | "solid" | "wavy" */
        get() = definedExternally
        set(value) = definedExternally
    var MozUserInput: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "disabled" | "enabled" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var msImeMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "active" | "auto" | "disabled" | "inactive" | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var msScrollbarTrackColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimation: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | "alternate" | "alternate-reverse" | "normal" | "reverse" | "backwards" | "both" | "forwards" | "none" | TTime? | "infinite" | "paused" | "running" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alternate" | "alternate-reverse" | "normal" | "reverse" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationFillMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "backwards" | "both" | "forwards" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationIterationCount: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "infinite" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationName: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationPlayState: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "paused" | "running" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OAnimationTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var OBackgroundSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "auto" | "contain" | "cover" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OBorderImage: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | "repeat" | "round" | "space" | "stretch" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTransform: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTransition: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" | TTime? | "all" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var OTransitionDelay: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTransitionDuration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TTime? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTransitionProperty: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var OTransitionTimingFunction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ease" | "ease-in" | "ease-in-out" | "ease-out" | String? & Any? | "step-end" | "step-start" | "linear" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxAlign: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "baseline" | "center" | "end" | "start" | "stretch" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxDirection: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "normal" | "reverse" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxFlex: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxFlexGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxLines: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "multiple" | "single" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxOrdinalGroup: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxOrient: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block-axis" | "horizontal" | "inline-axis" | "vertical" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitBoxPack: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "justify" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitScrollSnapPointsX: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var WebkitScrollSnapPointsY: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface SvgProperties<TLength, TTime> {
    var alignmentBaseline: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "after-edge" | "alphabetic" | "auto" | "baseline" | "before-edge" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "text-after-edge" | "text-before-edge" */
        get() = definedExternally
        set(value) = definedExternally
    var baselineShift: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "baseline" | "sub" | "super" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var clip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var clipPath: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var clipRule: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "evenodd" | "nonzero" */
        get() = definedExternally
        set(value) = definedExternally
    var color: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var colorInterpolation: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "linearRGB" | "sRGB" */
        get() = definedExternally
        set(value) = definedExternally
    var colorRendering: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "optimizeQuality" | "optimizeSpeed" */
        get() = definedExternally
        set(value) = definedExternally
    var cursor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-grab" | "-webkit-grab" | "alias" | "all-scroll" | "auto" | "cell" | "col-resize" | "context-menu" | "copy" | "crosshair" | "default" | "e-resize" | "ew-resize" | "grab" | "grabbing" | "help" | "move" | "n-resize" | "ne-resize" | "nesw-resize" | "no-drop" | "none" | "not-allowed" | "ns-resize" | "nw-resize" | "nwse-resize" | "pointer" | "progress" | "row-resize" | "s-resize" | "se-resize" | "sw-resize" | "text" | "vertical-text" | "w-resize" | "wait" | "zoom-in" | "zoom-out" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var direction: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "ltr" | "rtl" */
        get() = definedExternally
        set(value) = definedExternally
    var display: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "block" | "inline" | "run-in" | "-ms-flexbox" | "-ms-grid" | "-webkit-flex" | "flex" | "flow" | "flow-root" | "grid" | "ruby" | "table" | "ruby-base" | "ruby-base-container" | "ruby-text" | "ruby-text-container" | "table-caption" | "table-cell" | "table-column" | "table-column-group" | "table-footer-group" | "table-header-group" | "table-row" | "table-row-group" | "-ms-inline-flexbox" | "-ms-inline-grid" | "-webkit-inline-flex" | "inline-block" | "inline-flex" | "inline-grid" | "inline-list-item" | "inline-table" | "contents" | "list-item" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var dominantBaseline: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "alphabetic" | "auto" | "central" | "hanging" | "ideographic" | "mathematical" | "middle" | "no-change" | "reset-size" | "text-after-edge" | "text-before-edge" | "use-script" */
        get() = definedExternally
        set(value) = definedExternally
    var fill: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "child" | "context-fill" | "context-stroke" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var fillOpacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fillRule: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "evenodd" | "nonzero" */
        get() = definedExternally
        set(value) = definedExternally
    var filter: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var floodColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "currentColor" */
        get() = definedExternally
        set(value) = definedExternally
    var floodOpacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var font: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "caption" | "icon" | "menu" | "message-box" | "small-caption" | "status-bar" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontFamily: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "cursive" | "fantasy" | "monospace" | "sans-serif" | "serif" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontSize: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "large" | "medium" | "small" | "x-large" | "x-small" | "xx-large" | "xx-small" | "xxx-large" | TLength? | "larger" | "smaller" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontSizeAdjust: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontStretch: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "condensed" | "expanded" | "extra-condensed" | "extra-expanded" | "normal" | "semi-condensed" | "semi-expanded" | "ultra-condensed" | "ultra-expanded" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontStyle: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "italic" | "normal" | "oblique" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontVariant: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "jis04" | "jis78" | "jis83" | "jis90" | "simplified" | "traditional" | "all-petite-caps" | "all-small-caps" | "common-ligatures" | "contextual" | "diagonal-fractions" | "discretionary-ligatures" | "full-width" | "historical-forms" | "historical-ligatures" | "lining-nums" | "no-common-ligatures" | "no-contextual" | "no-discretionary-ligatures" | "no-historical-ligatures" | "none" | "normal" | "oldstyle-nums" | "ordinal" | "petite-caps" | "proportional-nums" | "proportional-width" | "ruby" | "slashed-zero" | "small-caps" | "stacked-fractions" | "tabular-nums" | "titling-caps" | "unicase" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var fontWeight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bold" | "normal" | Number? & Any? | "bolder" | "lighter" */
        get() = definedExternally
        set(value) = definedExternally
    var glyphOrientationVertical: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var imageRendering: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-crisp-edges" | "-webkit-optimize-contrast" | "auto" | "crisp-edges" | "pixelated" */
        get() = definedExternally
        set(value) = definedExternally
    var letterSpacing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" */
        get() = definedExternally
        set(value) = definedExternally
    var lightingColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "currentColor" */
        get() = definedExternally
        set(value) = definedExternally
    var lineHeight: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var marker: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var markerEnd: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var markerMid: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var markerStart: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "none" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var mask: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "bottom" | "center" | "left" | "right" | "top" | String? & Any? | "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "round" | "space" | "border-box" | "content-box" | "padding-box" | "fill-box" | "margin-box" | "stroke-box" | "view-box" | "add" | "exclude" | "intersect" | "subtract" | "alpha" | "luminance" | "match-source" | "no-clip" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var opacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | String? & Any? | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var overflow: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-hidden-unscrollable" | "auto" | "clip" | "hidden" | "scroll" | "visible" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var paintOrder: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "fill" | "markers" | "normal" | "stroke" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var pointerEvents: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "all" | "auto" | "fill" | "none" | "painted" | "stroke" | "visible" | "visibleFill" | "visiblePainted" | "visibleStroke" */
        get() = definedExternally
        set(value) = definedExternally
    var shapeRendering: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "crispEdges" | "geometricPrecision" | "optimizeSpeed" */
        get() = definedExternally
        set(value) = definedExternally
    var stopColor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "currentColor" */
        get() = definedExternally
        set(value) = definedExternally
    var stopOpacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var stroke: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | "child" | "context-fill" | "context-stroke" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var strokeDasharray: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? | Number? & Any? | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var strokeDashoffset: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeLinecap: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "butt" | "round" | "square" */
        get() = definedExternally
        set(value) = definedExternally
    var strokeLinejoin: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "bevel" | "miter" | "round" */
        get() = definedExternally
        set(value) = definedExternally
    var strokeMiterlimit: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeOpacity: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | Number? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var strokeWidth: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var textAnchor: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "end" | "middle" | "start" */
        get() = definedExternally
        set(value) = definedExternally
    var textDecoration: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "transparent" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | "ActiveBorder" | "ActiveCaption" | "AppWorkspace" | "Background" | "ButtonFace" | "ButtonHighlight" | "ButtonShadow" | "ButtonText" | "CaptionText" | "GrayText" | "Highlight" | "HighlightText" | "InactiveBorder" | "InactiveCaption" | "InactiveCaptionText" | "InfoBackground" | "InfoText" | "Menu" | "MenuText" | "Scrollbar" | "ThreeDDarkShadow" | "ThreeDFace" | "ThreeDHighlight" | "ThreeDLightShadow" | "ThreeDShadow" | "Window" | "WindowFrame" | "WindowText" | "currentcolor" | String? & Any? | TLength? | "auto" | "blink" | "dashed" | "dotted" | "double" | "from-font" | "grammar-error" | "line-through" | "none" | "overline" | "solid" | "spelling-error" | "underline" | "wavy" */
        get() = definedExternally
        set(value) = definedExternally
    var textRendering: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | "geometricPrecision" | "optimizeLegibility" | "optimizeSpeed" */
        get() = definedExternally
        set(value) = definedExternally
    var unicodeBidi: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-isolate" | "-moz-isolate-override" | "-moz-plaintext" | "-webkit-isolate" | "bidi-override" | "embed" | "isolate" | "isolate-override" | "normal" | "plaintext" */
        get() = definedExternally
        set(value) = definedExternally
    var vectorEffect: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "non-scaling-stroke" | "none" */
        get() = definedExternally
        set(value) = definedExternally
    var visibility: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "collapse" | "hidden" | "visible" */
        get() = definedExternally
        set(value) = definedExternally
    var whiteSpace: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap" */
        get() = definedExternally
        set(value) = definedExternally
    var wordSpacing: dynamic /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | TLength? | "normal" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
    var writingMode: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "horizontal-tb" | "sideways-lr" | "sideways-rl" | "vertical-lr" | "vertical-rl" */
        get() = definedExternally
        set(value) = definedExternally
}

external interface Properties<TLength, TTime> : StandardProperties<TLength, TTime>, VendorProperties<TLength, TTime>, ObsoleteProperties<TLength, TTime>, SvgProperties<TLength, TTime> {
    override var clip: String? /* "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "auto" | String? & Any? */
        get() = definedExternally
        set(value) = definedExternally
}

external interface Properties__1<TLength> : Properties<TLength, String /* String & Any */>