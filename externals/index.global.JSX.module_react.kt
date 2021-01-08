@file:Suppress("INTERFACE_WITH_SUPERCLASS", "OVERRIDING_FINAL_MEMBER", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "CONFLICTING_OVERLOADS")
package global.JSX

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
import React.ReactElement
import React.Component__1
import React.Attributes
import React.ClassAttributes
import tsstdlib.HTMLTableDataCellElement
import tsstdlib.HTMLTableHeaderCellElement
import HTMLWebViewElement
import React.SVGProps
import tsstdlib.SVGClipPathElement
import tsstdlib.SVGFEBlendElement
import tsstdlib.SVGFEColorMatrixElement
import tsstdlib.SVGFEComponentTransferElement
import tsstdlib.SVGFECompositeElement
import tsstdlib.SVGFEConvolveMatrixElement
import tsstdlib.SVGFEDiffuseLightingElement
import tsstdlib.SVGFEDisplacementMapElement
import tsstdlib.SVGFEDistantLightElement
import tsstdlib.SVGFEDropShadowElement
import tsstdlib.SVGFEFloodElement
import tsstdlib.SVGFEFuncAElement
import tsstdlib.SVGFEFuncBElement
import tsstdlib.SVGFEFuncGElement
import tsstdlib.SVGFEFuncRElement
import tsstdlib.SVGFEGaussianBlurElement
import tsstdlib.SVGFEImageElement
import tsstdlib.SVGFEMergeElement
import tsstdlib.SVGFEMergeNodeElement
import tsstdlib.SVGFEMorphologyElement
import tsstdlib.SVGFEOffsetElement
import tsstdlib.SVGFEPointLightElement
import tsstdlib.SVGFESpecularLightingElement
import tsstdlib.SVGFESpotLightElement
import tsstdlib.SVGFETileElement
import tsstdlib.SVGFETurbulenceElement
import tsstdlib.SVGFilterElement
import tsstdlib.SVGMaskElement

external interface Element : ReactElement<Any, Any>

external interface ElementClass : Component__1<Any> {
    override fun render(): dynamic /* ReactElement__0? | String? | Number? | Any? | ReactNodeArray? | ReactPortal? | Boolean? */
}

external interface ElementAttributesProperty {
    var props: Any
}

external interface ElementChildrenAttribute {
    var children: Any
}

typealias LibraryManagedAttributes<C, P> = Any

external interface IntrinsicAttributes : Attributes

external interface IntrinsicClassAttributes<T> : ClassAttributes<T>

external interface IntrinsicElements {
    var a: ClassAttributes<HTMLAnchorElement> /* ClassAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> */
    var abbr: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var address: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var area: ClassAttributes<HTMLAreaElement> /* ClassAttributes<HTMLAreaElement> & React.AreaHTMLAttributes<HTMLAreaElement> */
    var article: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var aside: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var audio: ClassAttributes<HTMLAudioElement> /* ClassAttributes<HTMLAudioElement> & React.AudioHTMLAttributes<HTMLAudioElement> */
    var b: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var base: ClassAttributes<HTMLBaseElement> /* ClassAttributes<HTMLBaseElement> & React.BaseHTMLAttributes<HTMLBaseElement> */
    var bdi: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var bdo: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var big: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var blockquote: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.BlockquoteHTMLAttributes<HTMLElement> */
    var body: ClassAttributes<HTMLBodyElement> /* ClassAttributes<HTMLBodyElement> & React.HTMLAttributes<HTMLBodyElement> */
    var br: ClassAttributes<HTMLBRElement> /* ClassAttributes<HTMLBRElement> & React.HTMLAttributes<HTMLBRElement> */
    var button: ClassAttributes<HTMLButtonElement> /* ClassAttributes<HTMLButtonElement> & React.ButtonHTMLAttributes<HTMLButtonElement> */
    var canvas: ClassAttributes<HTMLCanvasElement> /* ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement> */
    var caption: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var cite: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var code: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var col: ClassAttributes<HTMLTableColElement> /* ClassAttributes<HTMLTableColElement> & React.ColHTMLAttributes<HTMLTableColElement> */
    var colgroup: ClassAttributes<HTMLTableColElement> /* ClassAttributes<HTMLTableColElement> & React.ColgroupHTMLAttributes<HTMLTableColElement> */
    var data: ClassAttributes<HTMLDataElement> /* ClassAttributes<HTMLDataElement> & React.DataHTMLAttributes<HTMLDataElement> */
    var datalist: ClassAttributes<HTMLDataListElement> /* ClassAttributes<HTMLDataListElement> & React.HTMLAttributes<HTMLDataListElement> */
    var dd: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var del: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.DelHTMLAttributes<HTMLElement> */
    var details: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.DetailsHTMLAttributes<HTMLElement> */
    var dfn: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var dialog: ClassAttributes<HTMLDialogElement> /* ClassAttributes<HTMLDialogElement> & React.DialogHTMLAttributes<HTMLDialogElement> */
    var div: ClassAttributes<HTMLDivElement> /* ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> */
    var dl: ClassAttributes<HTMLDListElement> /* ClassAttributes<HTMLDListElement> & React.HTMLAttributes<HTMLDListElement> */
    var dt: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var em: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var embed: ClassAttributes<HTMLEmbedElement> /* ClassAttributes<HTMLEmbedElement> & React.EmbedHTMLAttributes<HTMLEmbedElement> */
    var fieldset: ClassAttributes<HTMLFieldSetElement> /* ClassAttributes<HTMLFieldSetElement> & React.FieldsetHTMLAttributes<HTMLFieldSetElement> */
    var figcaption: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var figure: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var footer: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var form: ClassAttributes<HTMLFormElement> /* ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> */
    var h1: ClassAttributes<HTMLHeadingElement> /* ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> */
    var h2: ClassAttributes<HTMLHeadingElement> /* ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> */
    var h3: ClassAttributes<HTMLHeadingElement> /* ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> */
    var h4: ClassAttributes<HTMLHeadingElement> /* ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> */
    var h5: ClassAttributes<HTMLHeadingElement> /* ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> */
    var h6: ClassAttributes<HTMLHeadingElement> /* ClassAttributes<HTMLHeadingElement> & React.HTMLAttributes<HTMLHeadingElement> */
    var head: ClassAttributes<HTMLHeadElement> /* ClassAttributes<HTMLHeadElement> & React.HTMLAttributes<HTMLHeadElement> */
    var header: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var hgroup: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var hr: ClassAttributes<HTMLHRElement> /* ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement> */
    var html: ClassAttributes<HTMLHtmlElement> /* ClassAttributes<HTMLHtmlElement> & React.HtmlHTMLAttributes<HTMLHtmlElement> */
    var i: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var iframe: ClassAttributes<HTMLIFrameElement> /* ClassAttributes<HTMLIFrameElement> & React.IframeHTMLAttributes<HTMLIFrameElement> */
    var img: ClassAttributes<HTMLImageElement> /* ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> */
    var input: ClassAttributes<HTMLInputElement> /* ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> */
    var ins: ClassAttributes<HTMLModElement> /* ClassAttributes<HTMLModElement> & React.InsHTMLAttributes<HTMLModElement> */
    var kbd: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var keygen: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.KeygenHTMLAttributes<HTMLElement> */
    var label: ClassAttributes<HTMLLabelElement> /* ClassAttributes<HTMLLabelElement> & React.LabelHTMLAttributes<HTMLLabelElement> */
    var legend: ClassAttributes<HTMLLegendElement> /* ClassAttributes<HTMLLegendElement> & React.HTMLAttributes<HTMLLegendElement> */
    var li: ClassAttributes<HTMLLIElement> /* ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement> */
    var link: ClassAttributes<HTMLLinkElement> /* ClassAttributes<HTMLLinkElement> & React.LinkHTMLAttributes<HTMLLinkElement> */
    var main: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var map: ClassAttributes<HTMLMapElement> /* ClassAttributes<HTMLMapElement> & React.MapHTMLAttributes<HTMLMapElement> */
    var mark: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var menu: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.MenuHTMLAttributes<HTMLElement> */
    var menuitem: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var meta: ClassAttributes<HTMLMetaElement> /* ClassAttributes<HTMLMetaElement> & React.MetaHTMLAttributes<HTMLMetaElement> */
    var meter: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.MeterHTMLAttributes<HTMLElement> */
    var nav: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var noindex: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var noscript: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var `object`: ClassAttributes<HTMLObjectElement> /* ClassAttributes<HTMLObjectElement> & React.ObjectHTMLAttributes<HTMLObjectElement> */
    var ol: ClassAttributes<HTMLOListElement> /* ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement> */
    var optgroup: ClassAttributes<HTMLOptGroupElement> /* ClassAttributes<HTMLOptGroupElement> & React.OptgroupHTMLAttributes<HTMLOptGroupElement> */
    var option: ClassAttributes<HTMLOptionElement> /* ClassAttributes<HTMLOptionElement> & React.OptionHTMLAttributes<HTMLOptionElement> */
    var output: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.OutputHTMLAttributes<HTMLElement> */
    var p: ClassAttributes<HTMLParagraphElement> /* ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement> */
    var param: ClassAttributes<HTMLParamElement> /* ClassAttributes<HTMLParamElement> & React.ParamHTMLAttributes<HTMLParamElement> */
    var picture: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var pre: ClassAttributes<HTMLPreElement> /* ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement> */
    var progress: ClassAttributes<HTMLProgressElement> /* ClassAttributes<HTMLProgressElement> & React.ProgressHTMLAttributes<HTMLProgressElement> */
    var q: ClassAttributes<HTMLQuoteElement> /* ClassAttributes<HTMLQuoteElement> & React.QuoteHTMLAttributes<HTMLQuoteElement> */
    var rp: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var rt: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var ruby: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var s: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var samp: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var slot: ClassAttributes<HTMLSlotElement> /* ClassAttributes<HTMLSlotElement> & React.SlotHTMLAttributes<HTMLSlotElement> */
    var script: ClassAttributes<HTMLScriptElement> /* ClassAttributes<HTMLScriptElement> & React.ScriptHTMLAttributes<HTMLScriptElement> */
    var section: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var select: ClassAttributes<HTMLSelectElement> /* ClassAttributes<HTMLSelectElement> & React.SelectHTMLAttributes<HTMLSelectElement> */
    var small: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var source: ClassAttributes<HTMLSourceElement> /* ClassAttributes<HTMLSourceElement> & React.SourceHTMLAttributes<HTMLSourceElement> */
    var span: ClassAttributes<HTMLSpanElement> /* ClassAttributes<HTMLSpanElement> & React.HTMLAttributes<HTMLSpanElement> */
    var strong: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var style: ClassAttributes<HTMLStyleElement> /* ClassAttributes<HTMLStyleElement> & React.StyleHTMLAttributes<HTMLStyleElement> */
    var sub: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var summary: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var sup: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var table: ClassAttributes<HTMLTableElement> /* ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement> */
    var template: ClassAttributes<HTMLTemplateElement> /* ClassAttributes<HTMLTemplateElement> & React.HTMLAttributes<HTMLTemplateElement> */
    var tbody: ClassAttributes<HTMLTableSectionElement> /* ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> */
    var td: ClassAttributes<HTMLTableDataCellElement> /* ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement> */
    var textarea: ClassAttributes<HTMLTextAreaElement> /* ClassAttributes<HTMLTextAreaElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement> */
    var tfoot: ClassAttributes<HTMLTableSectionElement> /* ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> */
    var th: ClassAttributes<HTMLTableHeaderCellElement> /* ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement> */
    var thead: ClassAttributes<HTMLTableSectionElement> /* ClassAttributes<HTMLTableSectionElement> & React.HTMLAttributes<HTMLTableSectionElement> */
    var time: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.TimeHTMLAttributes<HTMLElement> */
    var title: ClassAttributes<HTMLTitleElement> /* ClassAttributes<HTMLTitleElement> & React.HTMLAttributes<HTMLTitleElement> */
    var tr: ClassAttributes<HTMLTableRowElement> /* ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement> */
    var track: ClassAttributes<HTMLTrackElement> /* ClassAttributes<HTMLTrackElement> & React.TrackHTMLAttributes<HTMLTrackElement> */
    var u: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var ul: ClassAttributes<HTMLUListElement> /* ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement> */
    var `var`: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var video: ClassAttributes<HTMLVideoElement> /* ClassAttributes<HTMLVideoElement> & React.VideoHTMLAttributes<HTMLVideoElement> */
    var wbr: ClassAttributes<HTMLElement> /* ClassAttributes<HTMLElement> & React.HTMLAttributes<HTMLElement> */
    var webview: ClassAttributes<HTMLWebViewElement> /* ClassAttributes<HTMLWebViewElement> & React.WebViewHTMLAttributes<HTMLWebViewElement> */
    var svg: SVGProps<SVGSVGElement>
    var animate: SVGProps<SVGElement>
    var animateMotion: SVGProps<SVGElement>
    var animateTransform: SVGProps<SVGElement>
    var circle: SVGProps<SVGCircleElement>
    var clipPath: SVGProps<SVGClipPathElement>
    var defs: SVGProps<SVGDefsElement>
    var desc: SVGProps<SVGDescElement>
    var ellipse: SVGProps<SVGEllipseElement>
    var feBlend: SVGProps<SVGFEBlendElement>
    var feColorMatrix: SVGProps<SVGFEColorMatrixElement>
    var feComponentTransfer: SVGProps<SVGFEComponentTransferElement>
    var feComposite: SVGProps<SVGFECompositeElement>
    var feConvolveMatrix: SVGProps<SVGFEConvolveMatrixElement>
    var feDiffuseLighting: SVGProps<SVGFEDiffuseLightingElement>
    var feDisplacementMap: SVGProps<SVGFEDisplacementMapElement>
    var feDistantLight: SVGProps<SVGFEDistantLightElement>
    var feDropShadow: SVGProps<SVGFEDropShadowElement>
    var feFlood: SVGProps<SVGFEFloodElement>
    var feFuncA: SVGProps<SVGFEFuncAElement>
    var feFuncB: SVGProps<SVGFEFuncBElement>
    var feFuncG: SVGProps<SVGFEFuncGElement>
    var feFuncR: SVGProps<SVGFEFuncRElement>
    var feGaussianBlur: SVGProps<SVGFEGaussianBlurElement>
    var feImage: SVGProps<SVGFEImageElement>
    var feMerge: SVGProps<SVGFEMergeElement>
    var feMergeNode: SVGProps<SVGFEMergeNodeElement>
    var feMorphology: SVGProps<SVGFEMorphologyElement>
    var feOffset: SVGProps<SVGFEOffsetElement>
    var fePointLight: SVGProps<SVGFEPointLightElement>
    var feSpecularLighting: SVGProps<SVGFESpecularLightingElement>
    var feSpotLight: SVGProps<SVGFESpotLightElement>
    var feTile: SVGProps<SVGFETileElement>
    var feTurbulence: SVGProps<SVGFETurbulenceElement>
    var filter: SVGProps<SVGFilterElement>
    var foreignObject: SVGProps<SVGForeignObjectElement>
    var g: SVGProps<SVGGElement>
    var image: SVGProps<SVGImageElement>
    var line: SVGProps<SVGLineElement>
    var linearGradient: SVGProps<SVGLinearGradientElement>
    var marker: SVGProps<SVGMarkerElement>
    var mask: SVGProps<SVGMaskElement>
    var metadata: SVGProps<SVGMetadataElement>
    var mpath: SVGProps<SVGElement>
    var path: SVGProps<SVGPathElement>
    var pattern: SVGProps<SVGPatternElement>
    var polygon: SVGProps<SVGPolygonElement>
    var polyline: SVGProps<SVGPolylineElement>
    var radialGradient: SVGProps<SVGRadialGradientElement>
    var rect: SVGProps<SVGRectElement>
    var stop: SVGProps<SVGStopElement>
    var switch: SVGProps<SVGSwitchElement>
    var symbol: SVGProps<SVGSymbolElement>
    var text: SVGProps<SVGTextElement>
    var textPath: SVGProps<SVGTextPathElement>
    var tspan: SVGProps<SVGTSpanElement>
    var use: SVGProps<SVGUseElement>
    var view: SVGProps<SVGViewElement>
}