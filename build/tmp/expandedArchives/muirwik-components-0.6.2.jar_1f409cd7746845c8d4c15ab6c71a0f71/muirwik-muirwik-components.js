(function (_, Kotlin, $module$_material_ui_core_AppBar, $module$_material_ui_core_Avatar, $module$_material_ui_core_Backdrop, $module$_material_ui_core_Badge, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$_material_ui_core_BottomNavigation, $module$_material_ui_core_BottomNavigationAction, $module$_material_ui_core_Breadcrumbs, $module$_material_ui_core_Checkbox, $module$kotlinx_html_js, $module$_material_ui_core_Chip, $module$_material_ui_core_CircularProgress, $module$styled_components, $module$kotlin_css, $module$_material_ui_core_ClickAwayListener, $module$_material_ui_core_Container, $module$_material_ui_core_CssBaseline, $module$_material_ui_core_Divider, $module$_material_ui_core_Drawer, $module$_material_ui_core_Grid, $module$_material_ui_core_Hidden, $module$_material_ui_core_Icon, $module$_material_ui_core_LinearProgress, $module$_material_ui_core_Link, $module$_material_ui_core_locale, $module$_material_ui_core_styles, $module$_material_ui_core_NativeSelect, $module$_material_ui_core_Paper, $module$_material_ui_core_Popover, $module$_material_ui_core_Radio, $module$_material_ui_core_RadioGroup, $module$_material_ui_core_Select, $module$_material_ui_core_Slider, $module$_material_ui_core_Snackbar, $module$_material_ui_core_SvgIcon, $module$react, $module$_material_ui_core_SwipeableDrawer, $module$_material_ui_core_Switch, $module$_material_ui_core_Tabs, $module$_material_ui_core_Tab, $module$_material_ui_core_TextareaAutosize, $module$_material_ui_core_TextField, $module$_material_ui_core_Toolbar, $module$_material_ui_core_Tooltip, $module$_material_ui_core_Typography, $module$_material_ui_core_Accordion, $module$_material_ui_core_AccordionActions, $module$_material_ui_core_AccordionDetails, $module$_material_ui_core_AccordionSummary, $module$_material_ui_core_Button, $module$_material_ui_core_ButtonGroup, $module$_material_ui_core_Fab, $module$_material_ui_core_IconButton, $module$_material_ui_core_Card, $module$_material_ui_core_CardActionArea, $module$_material_ui_core_CardActions, $module$_material_ui_core_CardContent, $module$_material_ui_core_CardHeader, $module$_material_ui_core_CardMedia, $module$_material_ui_core_Dialog, $module$_material_ui_core_DialogActions, $module$_material_ui_core_DialogContent, $module$_material_ui_core_DialogContentText, $module$_material_ui_core_DialogTitle, $module$_material_ui_core_ExpansionPanel, $module$_material_ui_core_ExpansionPanelActions, $module$_material_ui_core_ExpansionPanelDetails, $module$_material_ui_core_ExpansionPanelSummary, $module$_material_ui_core_FormControl, $module$_material_ui_core_FormControlLabel, $module$_material_ui_core_FormGroup, $module$_material_ui_core_FormHelperText, $module$_material_ui_core_FormLabel, $module$_material_ui_core_GridList, $module$_material_ui_core_GridListTile, $module$_material_ui_core_GridListTileBar, $module$_material_ui_core_FilledInput, $module$_material_ui_core_Input, $module$_material_ui_core_InputAdornment, $module$_material_ui_core_InputLabel, $module$_material_ui_core_OutlinedInput, $module$_material_ui_lab_Alert, $module$_material_ui_lab_AlertTitle, $module$_material_ui_core_List, $module$_material_ui_core_ListItem, $module$_material_ui_core_ListItemAvatar, $module$_material_ui_core_ListItemIcon, $module$_material_ui_core_ListItemSecondaryAction, $module$_material_ui_core_ListItemText, $module$_material_ui_core_ListSubheader, $module$_material_ui_core_Menu, $module$_material_ui_core_MenuItem, $module$_material_ui_core_MenuList, $module$_material_ui_core_styles_createMuiTheme, $module$_material_ui_styles_StylesProvider, $module$_material_ui_styles_jssPreset, $module$jss, $module$_material_ui_core_Table, $module$_material_ui_core_TableBody, $module$_material_ui_core_TableCell, $module$_material_ui_core_TableContainer, $module$_material_ui_core_TableFooter, $module$_material_ui_core_TableHead, $module$_material_ui_core_TablePagination, $module$_material_ui_core_TableRow, $module$_material_ui_core_TableSortLabel, $module$_material_ui_core_Collapse, $module$_material_ui_core_Fade, $module$_material_ui_core_Grow, $module$_material_ui_core_Slide, $module$_material_ui_core_Zoom) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var StyledElementBuilder = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledElementBuilder;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var get_children = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.get_children_yllgzm$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toStyle = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.toStyle_y3tcm5$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var unboxChar = Kotlin.unboxChar;
  var Any = Object;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var toChar = Kotlin.toChar;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var equals = Kotlin.equals;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var toList = Kotlin.kotlin.toList_tt9upe$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var createElement = $module$react.createElement;
  var createContext = $module$react.createContext;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var getKClass = Kotlin.getKClass;
  var set_flexGrow = $module$kotlin_css.kotlinx.css.set_flexGrow_dlibp2$;
  var set_key = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_key_38rnt0$;
  var InputType$values = $module$kotlinx_html_js.kotlinx.html.InputType.values;
  var LineHeight = $module$kotlin_css.kotlinx.css.properties.LineHeight;
  var set_lineHeight = $module$kotlin_css.kotlinx.css.set_lineHeight_ftzj10$;
  var padding = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var first = Kotlin.kotlin.text.first_gw00vp$;
  MAppBarPosition.prototype = Object.create(Enum.prototype);
  MAppBarPosition.prototype.constructor = MAppBarPosition;
  MAppBarColor.prototype = Object.create(Enum.prototype);
  MAppBarColor.prototype.constructor = MAppBarColor;
  MAvatarVariant.prototype = Object.create(Enum.prototype);
  MAvatarVariant.prototype.constructor = MAvatarVariant;
  MBadgeColor.prototype = Object.create(Enum.prototype);
  MBadgeColor.prototype.constructor = MBadgeColor;
  MBadgeVariant.prototype = Object.create(Enum.prototype);
  MBadgeVariant.prototype.constructor = MBadgeVariant;
  MBadgeOverlap.prototype = Object.create(Enum.prototype);
  MBadgeOverlap.prototype.constructor = MBadgeOverlap;
  MBadgeAnchorOriginHorizontal.prototype = Object.create(Enum.prototype);
  MBadgeAnchorOriginHorizontal.prototype.constructor = MBadgeAnchorOriginHorizontal;
  MBadgeAnchorOriginVertical.prototype = Object.create(Enum.prototype);
  MBadgeAnchorOriginVertical.prototype.constructor = MBadgeAnchorOriginVertical;
  MAlignment.prototype = Object.create(Enum.prototype);
  MAlignment.prototype.constructor = MAlignment;
  MColor.prototype = Object.create(Enum.prototype);
  MColor.prototype.constructor = MColor;
  MOptionColor.prototype = Object.create(Enum.prototype);
  MOptionColor.prototype.constructor = MOptionColor;
  MChipVariant.prototype = Object.create(Enum.prototype);
  MChipVariant.prototype.constructor = MChipVariant;
  MChipColor.prototype = Object.create(Enum.prototype);
  MChipColor.prototype.constructor = MChipColor;
  MChipSize.prototype = Object.create(Enum.prototype);
  MChipSize.prototype.constructor = MChipSize;
  MCircularProgressColor.prototype = Object.create(Enum.prototype);
  MCircularProgressColor.prototype.constructor = MCircularProgressColor;
  MCircularProgressVariant.prototype = Object.create(Enum.prototype);
  MCircularProgressVariant.prototype.constructor = MCircularProgressVariant;
  MClickAwayListenerMouseEvent.prototype = Object.create(Enum.prototype);
  MClickAwayListenerMouseEvent.prototype.constructor = MClickAwayListenerMouseEvent;
  MClickAwayListenerTouchEvent.prototype = Object.create(Enum.prototype);
  MClickAwayListenerTouchEvent.prototype.constructor = MClickAwayListenerTouchEvent;
  MDividerOrientation.prototype = Object.create(Enum.prototype);
  MDividerOrientation.prototype.constructor = MDividerOrientation;
  MDividerVariant.prototype = Object.create(Enum.prototype);
  MDividerVariant.prototype.constructor = MDividerVariant;
  MDrawerAnchor.prototype = Object.create(Enum.prototype);
  MDrawerAnchor.prototype.constructor = MDrawerAnchor;
  MDrawerVariant.prototype = Object.create(Enum.prototype);
  MDrawerVariant.prototype.constructor = MDrawerVariant;
  MGridAlignContent.prototype = Object.create(Enum.prototype);
  MGridAlignContent.prototype.constructor = MGridAlignContent;
  MGridAlignItems.prototype = Object.create(Enum.prototype);
  MGridAlignItems.prototype.constructor = MGridAlignItems;
  MGridDirection.prototype = Object.create(Enum.prototype);
  MGridDirection.prototype.constructor = MGridDirection;
  MGridJustify.prototype = Object.create(Enum.prototype);
  MGridJustify.prototype.constructor = MGridJustify;
  MGridSize.prototype = Object.create(Enum.prototype);
  MGridSize.prototype.constructor = MGridSize;
  MGridWrap.prototype = Object.create(Enum.prototype);
  MGridWrap.prototype.constructor = MGridWrap;
  MGridSpacing.prototype = Object.create(Enum.prototype);
  MGridSpacing.prototype.constructor = MGridSpacing;
  MHiddenImplementation.prototype = Object.create(Enum.prototype);
  MHiddenImplementation.prototype.constructor = MHiddenImplementation;
  MIconColor.prototype = Object.create(Enum.prototype);
  MIconColor.prototype.constructor = MIconColor;
  MIconFontSize.prototype = Object.create(Enum.prototype);
  MIconFontSize.prototype.constructor = MIconFontSize;
  MLinearProgressColor.prototype = Object.create(Enum.prototype);
  MLinearProgressColor.prototype.constructor = MLinearProgressColor;
  MLinearProgressVariant.prototype = Object.create(Enum.prototype);
  MLinearProgressVariant.prototype.constructor = MLinearProgressVariant;
  MLinkUnderline.prototype = Object.create(Enum.prototype);
  MLinkUnderline.prototype.constructor = MLinkUnderline;
  MPaperVariant.prototype = Object.create(Enum.prototype);
  MPaperVariant.prototype.constructor = MPaperVariant;
  MPopoverAnchorRef.prototype = Object.create(Enum.prototype);
  MPopoverAnchorRef.prototype.constructor = MPopoverAnchorRef;
  MPopoverHorizontalPosition.prototype = Object.create(Enum.prototype);
  MPopoverHorizontalPosition.prototype.constructor = MPopoverHorizontalPosition;
  MPopoverVerticalPosition.prototype = Object.create(Enum.prototype);
  MPopoverVerticalPosition.prototype.constructor = MPopoverVerticalPosition;
  AutoCapitalize.prototype = Object.create(Enum.prototype);
  AutoCapitalize.prototype.constructor = AutoCapitalize;
  TextDir.prototype = Object.create(Enum.prototype);
  TextDir.prototype.constructor = TextDir;
  DropZone.prototype = Object.create(Enum.prototype);
  DropZone.prototype.constructor = DropZone;
  MSliderOrientation.prototype = Object.create(Enum.prototype);
  MSliderOrientation.prototype.constructor = MSliderOrientation;
  MSliderValueLabelDisplay.prototype = Object.create(Enum.prototype);
  MSliderValueLabelDisplay.prototype.constructor = MSliderValueLabelDisplay;
  MSnackbarHorizAnchor.prototype = Object.create(Enum.prototype);
  MSnackbarHorizAnchor.prototype.constructor = MSnackbarHorizAnchor;
  MSnackbarVertAnchor.prototype = Object.create(Enum.prototype);
  MSnackbarVertAnchor.prototype.constructor = MSnackbarVertAnchor;
  MSnackbarOnCloseReason.prototype = Object.create(Enum.prototype);
  MSnackbarOnCloseReason.prototype.constructor = MSnackbarOnCloseReason;
  SvgShapeRendering.prototype = Object.create(Enum.prototype);
  SvgShapeRendering.prototype.constructor = SvgShapeRendering;
  MSwitchEdge.prototype = Object.create(Enum.prototype);
  MSwitchEdge.prototype.constructor = MSwitchEdge;
  MTabTextColor.prototype = Object.create(Enum.prototype);
  MTabTextColor.prototype.constructor = MTabTextColor;
  MTabScrollButtons.prototype = Object.create(Enum.prototype);
  MTabScrollButtons.prototype.constructor = MTabScrollButtons;
  MTabIndicatorColor.prototype = Object.create(Enum.prototype);
  MTabIndicatorColor.prototype.constructor = MTabIndicatorColor;
  MTabVariant.prototype = Object.create(Enum.prototype);
  MTabVariant.prototype.constructor = MTabVariant;
  MTabOrientation.prototype = Object.create(Enum.prototype);
  MTabOrientation.prototype.constructor = MTabOrientation;
  MTextFieldColor.prototype = Object.create(Enum.prototype);
  MTextFieldColor.prototype.constructor = MTextFieldColor;
  MThemeProvider.prototype = Object.create(RComponent.prototype);
  MThemeProvider.prototype.constructor = MThemeProvider;
  ToolbarVariant.prototype = Object.create(Enum.prototype);
  ToolbarVariant.prototype.constructor = ToolbarVariant;
  TooltipPlacement.prototype = Object.create(Enum.prototype);
  TooltipPlacement.prototype.constructor = TooltipPlacement;
  MTypographyAlign.prototype = Object.create(Enum.prototype);
  MTypographyAlign.prototype.constructor = MTypographyAlign;
  MTypographyColor.prototype = Object.create(Enum.prototype);
  MTypographyColor.prototype.constructor = MTypographyColor;
  MTypographyVariant.prototype = Object.create(Enum.prototype);
  MTypographyVariant.prototype.constructor = MTypographyVariant;
  MButtonSize.prototype = Object.create(Enum.prototype);
  MButtonSize.prototype.constructor = MButtonSize;
  MButtonVariant.prototype = Object.create(Enum.prototype);
  MButtonVariant.prototype.constructor = MButtonVariant;
  MButtonGroupVariant.prototype = Object.create(Enum.prototype);
  MButtonGroupVariant.prototype.constructor = MButtonGroupVariant;
  MButtonGroupOrientation.prototype = Object.create(Enum.prototype);
  MButtonGroupOrientation.prototype.constructor = MButtonGroupOrientation;
  MFabVariant.prototype = Object.create(Enum.prototype);
  MFabVariant.prototype.constructor = MFabVariant;
  MIconButtonSize.prototype = Object.create(Enum.prototype);
  MIconButtonSize.prototype.constructor = MIconButtonSize;
  MIconEdge.prototype = Object.create(Enum.prototype);
  MIconEdge.prototype.constructor = MIconEdge;
  DialogScroll.prototype = Object.create(Enum.prototype);
  DialogScroll.prototype.constructor = DialogScroll;
  ModalOnCloseReason.prototype = Object.create(Enum.prototype);
  ModalOnCloseReason.prototype.constructor = ModalOnCloseReason;
  MFormControlVariant.prototype = Object.create(Enum.prototype);
  MFormControlVariant.prototype.constructor = MFormControlVariant;
  MFormControlComponent.prototype = Object.create(Enum.prototype);
  MFormControlComponent.prototype.constructor = MFormControlComponent;
  MFormControlMargin.prototype = Object.create(Enum.prototype);
  MFormControlMargin.prototype.constructor = MFormControlMargin;
  MLabelPlacement.prototype = Object.create(Enum.prototype);
  MLabelPlacement.prototype.constructor = MLabelPlacement;
  MLabelMargin.prototype = Object.create(Enum.prototype);
  MLabelMargin.prototype.constructor = MLabelMargin;
  MActionPosition.prototype = Object.create(Enum.prototype);
  MActionPosition.prototype.constructor = MActionPosition;
  MTitlePosition.prototype = Object.create(Enum.prototype);
  MTitlePosition.prototype.constructor = MTitlePosition;
  MInputAdornmentPosition.prototype = Object.create(Enum.prototype);
  MInputAdornmentPosition.prototype.constructor = MInputAdornmentPosition;
  MInputMargin.prototype = Object.create(Enum.prototype);
  MInputMargin.prototype.constructor = MInputMargin;
  MAlertVariant.prototype = Object.create(Enum.prototype);
  MAlertVariant.prototype.constructor = MAlertVariant;
  MAlertSeverity.prototype = Object.create(Enum.prototype);
  MAlertSeverity.prototype.constructor = MAlertSeverity;
  MListItemAlignItems.prototype = Object.create(Enum.prototype);
  MListItemAlignItems.prototype.constructor = MListItemAlignItems;
  MListSubheaderColor.prototype = Object.create(Enum.prototype);
  MListSubheaderColor.prototype.constructor = MListSubheaderColor;
  MenuOnCloseReason.prototype = Object.create(Enum.prototype);
  MenuOnCloseReason.prototype.constructor = MenuOnCloseReason;
  MMenuVariant.prototype = Object.create(Enum.prototype);
  MMenuVariant.prototype.constructor = MMenuVariant;
  Breakpoint.prototype = Object.create(Enum.prototype);
  Breakpoint.prototype.constructor = Breakpoint;
  MTableCellPadding.prototype = Object.create(Enum.prototype);
  MTableCellPadding.prototype.constructor = MTableCellPadding;
  MTableCellSortDirection.prototype = Object.create(Enum.prototype);
  MTableCellSortDirection.prototype.constructor = MTableCellSortDirection;
  MTableCellAlign.prototype = Object.create(Enum.prototype);
  MTableCellAlign.prototype.constructor = MTableCellAlign;
  MTableCellVariant.prototype = Object.create(Enum.prototype);
  MTableCellVariant.prototype.constructor = MTableCellVariant;
  MTableCellSize.prototype = Object.create(Enum.prototype);
  MTableCellSize.prototype.constructor = MTableCellSize;
  MTableSortLabelDirection.prototype = Object.create(Enum.prototype);
  MTableSortLabelDirection.prototype.constructor = MTableSortLabelDirection;
  SlideTransitionDirection.prototype = Object.create(Enum.prototype);
  SlideTransitionDirection.prototype.constructor = SlideTransitionDirection;
  var appBarComponent;
  function MAppBarPosition(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MAppBarPosition_initFields() {
    MAppBarPosition_initFields = function () {
    };
    MAppBarPosition$fixed_instance = new MAppBarPosition('fixed', 0);
    MAppBarPosition$absolute_instance = new MAppBarPosition('absolute', 1);
    MAppBarPosition$sticky_instance = new MAppBarPosition('sticky', 2);
    MAppBarPosition$static_instance = new MAppBarPosition('static', 3);
    MAppBarPosition$relative_instance = new MAppBarPosition('relative', 4);
  }
  var MAppBarPosition$fixed_instance;
  function MAppBarPosition$fixed_getInstance() {
    MAppBarPosition_initFields();
    return MAppBarPosition$fixed_instance;
  }
  var MAppBarPosition$absolute_instance;
  function MAppBarPosition$absolute_getInstance() {
    MAppBarPosition_initFields();
    return MAppBarPosition$absolute_instance;
  }
  var MAppBarPosition$sticky_instance;
  function MAppBarPosition$sticky_getInstance() {
    MAppBarPosition_initFields();
    return MAppBarPosition$sticky_instance;
  }
  var MAppBarPosition$static_instance;
  function MAppBarPosition$static_getInstance() {
    MAppBarPosition_initFields();
    return MAppBarPosition$static_instance;
  }
  var MAppBarPosition$relative_instance;
  function MAppBarPosition$relative_getInstance() {
    MAppBarPosition_initFields();
    return MAppBarPosition$relative_instance;
  }
  MAppBarPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAppBarPosition',
    interfaces: [Enum]
  };
  function MAppBarPosition$values() {
    return [MAppBarPosition$fixed_getInstance(), MAppBarPosition$absolute_getInstance(), MAppBarPosition$sticky_getInstance(), MAppBarPosition$static_getInstance(), MAppBarPosition$relative_getInstance()];
  }
  MAppBarPosition.values = MAppBarPosition$values;
  function MAppBarPosition$valueOf(name) {
    switch (name) {
      case 'fixed':
        return MAppBarPosition$fixed_getInstance();
      case 'absolute':
        return MAppBarPosition$absolute_getInstance();
      case 'sticky':
        return MAppBarPosition$sticky_getInstance();
      case 'static':
        return MAppBarPosition$static_getInstance();
      case 'relative':
        return MAppBarPosition$relative_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MAppBarPosition.' + name);
    }
  }
  MAppBarPosition.valueOf_61zpoe$ = MAppBarPosition$valueOf;
  function MAppBarColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MAppBarColor_initFields() {
    MAppBarColor_initFields = function () {
    };
    MAppBarColor$default_instance = new MAppBarColor('default', 0);
    MAppBarColor$inherit_instance = new MAppBarColor('inherit', 1);
    MAppBarColor$primary_instance = new MAppBarColor('primary', 2);
    MAppBarColor$secondary_instance = new MAppBarColor('secondary', 3);
    MAppBarColor$transparent_instance = new MAppBarColor('transparent', 4);
  }
  var MAppBarColor$default_instance;
  function MAppBarColor$default_getInstance() {
    MAppBarColor_initFields();
    return MAppBarColor$default_instance;
  }
  var MAppBarColor$inherit_instance;
  function MAppBarColor$inherit_getInstance() {
    MAppBarColor_initFields();
    return MAppBarColor$inherit_instance;
  }
  var MAppBarColor$primary_instance;
  function MAppBarColor$primary_getInstance() {
    MAppBarColor_initFields();
    return MAppBarColor$primary_instance;
  }
  var MAppBarColor$secondary_instance;
  function MAppBarColor$secondary_getInstance() {
    MAppBarColor_initFields();
    return MAppBarColor$secondary_instance;
  }
  var MAppBarColor$transparent_instance;
  function MAppBarColor$transparent_getInstance() {
    MAppBarColor_initFields();
    return MAppBarColor$transparent_instance;
  }
  MAppBarColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAppBarColor',
    interfaces: [Enum]
  };
  function MAppBarColor$values() {
    return [MAppBarColor$default_getInstance(), MAppBarColor$inherit_getInstance(), MAppBarColor$primary_getInstance(), MAppBarColor$secondary_getInstance(), MAppBarColor$transparent_getInstance()];
  }
  MAppBarColor.values = MAppBarColor$values;
  function MAppBarColor$valueOf(name) {
    switch (name) {
      case 'default':
        return MAppBarColor$default_getInstance();
      case 'inherit':
        return MAppBarColor$inherit_getInstance();
      case 'primary':
        return MAppBarColor$primary_getInstance();
      case 'secondary':
        return MAppBarColor$secondary_getInstance();
      case 'transparent':
        return MAppBarColor$transparent_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MAppBarColor.' + name);
    }
  }
  MAppBarColor.valueOf_61zpoe$ = MAppBarColor$valueOf;
  function MAppBarProps() {
  }
  MAppBarProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MAppBarProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var color;
  var color_metadata = new PropertyMetadata('color');
  function get_color($receiver) {
    return color.getValue_lrcp0p$($receiver, color_metadata);
  }
  function set_color($receiver, color_0) {
    color.setValue_9rddgb$($receiver, color_metadata, color_0);
  }
  var position;
  var position_metadata = new PropertyMetadata('position');
  function get_position($receiver) {
    return position.getValue_lrcp0p$($receiver, position_metadata);
  }
  function set_position($receiver, position_0) {
    position.setValue_9rddgb$($receiver, position_metadata, position_0);
  }
  function mAppBar$lambda(closure$color, closure$position, closure$className, closure$handler) {
    return function ($receiver) {
      set_color($receiver.attrs, closure$color);
      set_position($receiver.attrs, closure$position);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAppBar($receiver, color, position, className, handler) {
    if (color === void 0)
      color = MAppBarColor$primary_getInstance();
    if (position === void 0)
      position = MAppBarPosition$fixed_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, appBarComponent, void 0, mAppBar$lambda(color, position, className, handler));
  }
  var avatarComponent;
  function MAvatarVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MAvatarVariant_initFields() {
    MAvatarVariant_initFields = function () {
    };
    MAvatarVariant$circle_instance = new MAvatarVariant('circle', 0);
    MAvatarVariant$rounded_instance = new MAvatarVariant('rounded', 1);
    MAvatarVariant$square_instance = new MAvatarVariant('square', 2);
  }
  var MAvatarVariant$circle_instance;
  function MAvatarVariant$circle_getInstance() {
    MAvatarVariant_initFields();
    return MAvatarVariant$circle_instance;
  }
  var MAvatarVariant$rounded_instance;
  function MAvatarVariant$rounded_getInstance() {
    MAvatarVariant_initFields();
    return MAvatarVariant$rounded_instance;
  }
  var MAvatarVariant$square_instance;
  function MAvatarVariant$square_getInstance() {
    MAvatarVariant_initFields();
    return MAvatarVariant$square_instance;
  }
  MAvatarVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAvatarVariant',
    interfaces: [Enum]
  };
  function MAvatarVariant$values() {
    return [MAvatarVariant$circle_getInstance(), MAvatarVariant$rounded_getInstance(), MAvatarVariant$square_getInstance()];
  }
  MAvatarVariant.values = MAvatarVariant$values;
  function MAvatarVariant$valueOf(name) {
    switch (name) {
      case 'circle':
        return MAvatarVariant$circle_getInstance();
      case 'rounded':
        return MAvatarVariant$rounded_getInstance();
      case 'square':
        return MAvatarVariant$square_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MAvatarVariant.' + name);
    }
  }
  MAvatarVariant.valueOf_61zpoe$ = MAvatarVariant$valueOf;
  function MAvatarProps() {
  }
  MAvatarProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MAvatarProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var variant;
  var variant_metadata = new PropertyMetadata('variant');
  function get_variant($receiver) {
    return variant.getValue_lrcp0p$($receiver, variant_metadata);
  }
  function set_variant($receiver, variant_0) {
    variant.setValue_9rddgb$($receiver, variant_metadata, variant_0);
  }
  function mAvatar$lambda(closure$alt, closure$component, closure$imgProps, closure$sizes, closure$src, closure$srcSet, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$alt != null) {
        var closure$alt_0 = closure$alt;
        $receiver.attrs.alt = closure$alt_0;
      }$receiver.attrs.component = closure$component;
      if (closure$imgProps != null) {
        var closure$imgProps_0 = closure$imgProps;
        $receiver.attrs.imgProps = closure$imgProps_0;
      }if (closure$sizes != null) {
        var closure$sizes_0 = closure$sizes;
        $receiver.attrs.sizes = closure$sizes_0;
      }if (closure$src != null) {
        var closure$src_0 = closure$src;
        $receiver.attrs.src = closure$src_0;
      }if (closure$srcSet != null) {
        var closure$srcSet_0 = closure$srcSet;
        $receiver.attrs.srcSet = closure$srcSet_0;
      }set_variant($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAvatar($receiver, src, alt, srcSet, variant, component, imgProps, sizes, addAsChild, className, handler) {
    if (src === void 0)
      src = null;
    if (alt === void 0)
      alt = null;
    if (srcSet === void 0)
      srcSet = null;
    if (variant === void 0)
      variant = MAvatarVariant$circle_getInstance();
    if (component === void 0)
      component = 'div';
    if (imgProps === void 0)
      imgProps = null;
    if (sizes === void 0)
      sizes = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, avatarComponent, addAsChild, mAvatar$lambda(alt, component, imgProps, sizes, src, srcSet, variant, className, handler));
  }
  var backdropComponent;
  function MBackdropProps() {
  }
  MBackdropProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MBackdropProps',
    interfaces: [ReactHtmlElementEvents]
  };
  var transitionDuration;
  var transitionDuration_metadata = new PropertyMetadata('transitionDuration');
  function get_transitionDuration($receiver) {
    return transitionDuration.getValue_lrcp0p$($receiver, transitionDuration_metadata);
  }
  function set_transitionDuration($receiver, transitionDuration_0) {
    transitionDuration.setValue_9rddgb$($receiver, transitionDuration_metadata, transitionDuration_0);
  }
  function mBackdrop$lambda(closure$open, closure$invisible, closure$transitionDuration, closure$onClick, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.open = closure$open;
      $receiver.attrs.invisible = closure$invisible;
      if (closure$transitionDuration != null) {
        var it = closure$transitionDuration;
        set_transitionDuration($receiver.attrs, it);
      }if (closure$onClick != null) {
        var it_0 = closure$onClick;
        $receiver.attrs.onClick = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mBackdrop($receiver, open, invisible, transitionDuration, onClick, className, handler) {
    if (invisible === void 0)
      invisible = false;
    if (transitionDuration === void 0)
      transitionDuration = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, backdropComponent, void 0, mBackdrop$lambda(open, invisible, transitionDuration, onClick, className, handler));
  }
  var badgeComponent;
  function MBadgeColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MBadgeColor_initFields() {
    MBadgeColor_initFields = function () {
    };
    MBadgeColor$primary_instance = new MBadgeColor('primary', 0);
    MBadgeColor$secondary_instance = new MBadgeColor('secondary', 1);
    MBadgeColor$error_instance = new MBadgeColor('error', 2);
    MBadgeColor$default_instance = new MBadgeColor('default', 3);
  }
  var MBadgeColor$primary_instance;
  function MBadgeColor$primary_getInstance() {
    MBadgeColor_initFields();
    return MBadgeColor$primary_instance;
  }
  var MBadgeColor$secondary_instance;
  function MBadgeColor$secondary_getInstance() {
    MBadgeColor_initFields();
    return MBadgeColor$secondary_instance;
  }
  var MBadgeColor$error_instance;
  function MBadgeColor$error_getInstance() {
    MBadgeColor_initFields();
    return MBadgeColor$error_instance;
  }
  var MBadgeColor$default_instance;
  function MBadgeColor$default_getInstance() {
    MBadgeColor_initFields();
    return MBadgeColor$default_instance;
  }
  MBadgeColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MBadgeColor',
    interfaces: [Enum]
  };
  function MBadgeColor$values() {
    return [MBadgeColor$primary_getInstance(), MBadgeColor$secondary_getInstance(), MBadgeColor$error_getInstance(), MBadgeColor$default_getInstance()];
  }
  MBadgeColor.values = MBadgeColor$values;
  function MBadgeColor$valueOf(name) {
    switch (name) {
      case 'primary':
        return MBadgeColor$primary_getInstance();
      case 'secondary':
        return MBadgeColor$secondary_getInstance();
      case 'error':
        return MBadgeColor$error_getInstance();
      case 'default':
        return MBadgeColor$default_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MBadgeColor.' + name);
    }
  }
  MBadgeColor.valueOf_61zpoe$ = MBadgeColor$valueOf;
  function MBadgeVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MBadgeVariant_initFields() {
    MBadgeVariant_initFields = function () {
    };
    MBadgeVariant$standard_instance = new MBadgeVariant('standard', 0);
    MBadgeVariant$dot_instance = new MBadgeVariant('dot', 1);
  }
  var MBadgeVariant$standard_instance;
  function MBadgeVariant$standard_getInstance() {
    MBadgeVariant_initFields();
    return MBadgeVariant$standard_instance;
  }
  var MBadgeVariant$dot_instance;
  function MBadgeVariant$dot_getInstance() {
    MBadgeVariant_initFields();
    return MBadgeVariant$dot_instance;
  }
  MBadgeVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MBadgeVariant',
    interfaces: [Enum]
  };
  function MBadgeVariant$values() {
    return [MBadgeVariant$standard_getInstance(), MBadgeVariant$dot_getInstance()];
  }
  MBadgeVariant.values = MBadgeVariant$values;
  function MBadgeVariant$valueOf(name) {
    switch (name) {
      case 'standard':
        return MBadgeVariant$standard_getInstance();
      case 'dot':
        return MBadgeVariant$dot_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MBadgeVariant.' + name);
    }
  }
  MBadgeVariant.valueOf_61zpoe$ = MBadgeVariant$valueOf;
  function MBadgeOverlap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MBadgeOverlap_initFields() {
    MBadgeOverlap_initFields = function () {
    };
    MBadgeOverlap$circle_instance = new MBadgeOverlap('circle', 0);
    MBadgeOverlap$rectangle_instance = new MBadgeOverlap('rectangle', 1);
  }
  var MBadgeOverlap$circle_instance;
  function MBadgeOverlap$circle_getInstance() {
    MBadgeOverlap_initFields();
    return MBadgeOverlap$circle_instance;
  }
  var MBadgeOverlap$rectangle_instance;
  function MBadgeOverlap$rectangle_getInstance() {
    MBadgeOverlap_initFields();
    return MBadgeOverlap$rectangle_instance;
  }
  MBadgeOverlap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MBadgeOverlap',
    interfaces: [Enum]
  };
  function MBadgeOverlap$values() {
    return [MBadgeOverlap$circle_getInstance(), MBadgeOverlap$rectangle_getInstance()];
  }
  MBadgeOverlap.values = MBadgeOverlap$values;
  function MBadgeOverlap$valueOf(name) {
    switch (name) {
      case 'circle':
        return MBadgeOverlap$circle_getInstance();
      case 'rectangle':
        return MBadgeOverlap$rectangle_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MBadgeOverlap.' + name);
    }
  }
  MBadgeOverlap.valueOf_61zpoe$ = MBadgeOverlap$valueOf;
  function MBadgeAnchorOriginHorizontal(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MBadgeAnchorOriginHorizontal_initFields() {
    MBadgeAnchorOriginHorizontal_initFields = function () {
    };
    MBadgeAnchorOriginHorizontal$left_instance = new MBadgeAnchorOriginHorizontal('left', 0);
    MBadgeAnchorOriginHorizontal$right_instance = new MBadgeAnchorOriginHorizontal('right', 1);
  }
  var MBadgeAnchorOriginHorizontal$left_instance;
  function MBadgeAnchorOriginHorizontal$left_getInstance() {
    MBadgeAnchorOriginHorizontal_initFields();
    return MBadgeAnchorOriginHorizontal$left_instance;
  }
  var MBadgeAnchorOriginHorizontal$right_instance;
  function MBadgeAnchorOriginHorizontal$right_getInstance() {
    MBadgeAnchorOriginHorizontal_initFields();
    return MBadgeAnchorOriginHorizontal$right_instance;
  }
  MBadgeAnchorOriginHorizontal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MBadgeAnchorOriginHorizontal',
    interfaces: [Enum]
  };
  function MBadgeAnchorOriginHorizontal$values() {
    return [MBadgeAnchorOriginHorizontal$left_getInstance(), MBadgeAnchorOriginHorizontal$right_getInstance()];
  }
  MBadgeAnchorOriginHorizontal.values = MBadgeAnchorOriginHorizontal$values;
  function MBadgeAnchorOriginHorizontal$valueOf(name) {
    switch (name) {
      case 'left':
        return MBadgeAnchorOriginHorizontal$left_getInstance();
      case 'right':
        return MBadgeAnchorOriginHorizontal$right_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MBadgeAnchorOriginHorizontal.' + name);
    }
  }
  MBadgeAnchorOriginHorizontal.valueOf_61zpoe$ = MBadgeAnchorOriginHorizontal$valueOf;
  function MBadgeAnchorOriginVertical(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MBadgeAnchorOriginVertical_initFields() {
    MBadgeAnchorOriginVertical_initFields = function () {
    };
    MBadgeAnchorOriginVertical$top_instance = new MBadgeAnchorOriginVertical('top', 0);
    MBadgeAnchorOriginVertical$bottom_instance = new MBadgeAnchorOriginVertical('bottom', 1);
  }
  var MBadgeAnchorOriginVertical$top_instance;
  function MBadgeAnchorOriginVertical$top_getInstance() {
    MBadgeAnchorOriginVertical_initFields();
    return MBadgeAnchorOriginVertical$top_instance;
  }
  var MBadgeAnchorOriginVertical$bottom_instance;
  function MBadgeAnchorOriginVertical$bottom_getInstance() {
    MBadgeAnchorOriginVertical_initFields();
    return MBadgeAnchorOriginVertical$bottom_instance;
  }
  MBadgeAnchorOriginVertical.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MBadgeAnchorOriginVertical',
    interfaces: [Enum]
  };
  function MBadgeAnchorOriginVertical$values() {
    return [MBadgeAnchorOriginVertical$top_getInstance(), MBadgeAnchorOriginVertical$bottom_getInstance()];
  }
  MBadgeAnchorOriginVertical.values = MBadgeAnchorOriginVertical$values;
  function MBadgeAnchorOriginVertical$valueOf(name) {
    switch (name) {
      case 'top':
        return MBadgeAnchorOriginVertical$top_getInstance();
      case 'bottom':
        return MBadgeAnchorOriginVertical$bottom_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MBadgeAnchorOriginVertical.' + name);
    }
  }
  MBadgeAnchorOriginVertical.valueOf_61zpoe$ = MBadgeAnchorOriginVertical$valueOf;
  function MBadgeProps() {
  }
  MBadgeProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MBadgeProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var anchorOriginHorizontal;
  var anchorOriginHorizontal_metadata = new PropertyMetadata('anchorOriginHorizontal');
  function get_anchorOriginHorizontal($receiver) {
    return anchorOriginHorizontal.getValue_lrcp0p$($receiver, anchorOriginHorizontal_metadata);
  }
  function set_anchorOriginHorizontal($receiver, anchorOriginHorizontal_0) {
    anchorOriginHorizontal.setValue_9rddgb$($receiver, anchorOriginHorizontal_metadata, anchorOriginHorizontal_0);
  }
  var anchorOriginVertical;
  var anchorOriginVertical_metadata = new PropertyMetadata('anchorOriginVertical');
  function get_anchorOriginVertical($receiver) {
    return anchorOriginVertical.getValue_lrcp0p$($receiver, anchorOriginVertical_metadata);
  }
  function set_anchorOriginVertical($receiver, anchorOriginVertical_0) {
    anchorOriginVertical.setValue_9rddgb$($receiver, anchorOriginVertical_metadata, anchorOriginVertical_0);
  }
  var color_0;
  var color_metadata_0 = new PropertyMetadata('color');
  function get_color_0($receiver) {
    return color_0.getValue_lrcp0p$($receiver, color_metadata_0);
  }
  function set_color_0($receiver, color) {
    color_0.setValue_9rddgb$($receiver, color_metadata_0, color);
  }
  var overlap;
  var overlap_metadata = new PropertyMetadata('overlap');
  function get_overlap($receiver) {
    return overlap.getValue_lrcp0p$($receiver, overlap_metadata);
  }
  function set_overlap($receiver, overlap_0) {
    overlap.setValue_9rddgb$($receiver, overlap_metadata, overlap_0);
  }
  var variant_0;
  var variant_metadata_0 = new PropertyMetadata('variant');
  function get_variant_0($receiver) {
    return variant_0.getValue_lrcp0p$($receiver, variant_metadata_0);
  }
  function set_variant_0($receiver, variant) {
    variant_0.setValue_9rddgb$($receiver, variant_metadata_0, variant);
  }
  function mBadge($receiver, badgeContent, color, variant, component, invisible, addAsChild, className, handler) {
    if (color === void 0)
      color = MBadgeColor$default_getInstance();
    if (variant === void 0)
      variant = MBadgeVariant$standard_getInstance();
    if (component === void 0)
      component = 'span';
    if (invisible === void 0)
      invisible = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var tmp$;
    var badgeContentAsElement = Kotlin.isType(tmp$ = badgeContent, Object) ? tmp$ : throwCCE();
    return mBadge_1($receiver, badgeContentAsElement, color, false, 99, variant, component, invisible, addAsChild, className, handler);
  }
  function mBadge_0($receiver, badgeContent, color, showZero, max, variant, component, invisible, addAsChild, className, handler) {
    if (color === void 0)
      color = MBadgeColor$default_getInstance();
    if (showZero === void 0)
      showZero = false;
    if (max === void 0)
      max = 99;
    if (variant === void 0)
      variant = MBadgeVariant$standard_getInstance();
    if (component === void 0)
      component = 'span';
    if (invisible === void 0)
      invisible = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var tmp$;
    var badgeContentAsElement = Kotlin.isType(tmp$ = badgeContent, Object) ? tmp$ : throwCCE();
    return mBadge_1($receiver, badgeContentAsElement, color, showZero, max, variant, component, invisible, addAsChild, className, handler);
  }
  function mBadge$lambda(closure$badgeContent, closure$color, closure$invisible, closure$showZero, closure$max, closure$variant, closure$component, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.badgeContent = closure$badgeContent;
      set_color_0($receiver.attrs, closure$color);
      if (closure$invisible != null) {
        var it = closure$invisible;
        $receiver.attrs.invisible = it;
      }$receiver.attrs.showZero = closure$showZero;
      $receiver.attrs.max = closure$max;
      set_variant_0($receiver.attrs, closure$variant);
      if (closure$component != null) {
        var closure$component_0 = closure$component;
        $receiver.attrs.component = closure$component_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mBadge_1($receiver, badgeContent, color, showZero, max, variant, component, invisible, addAsChild, className, handler) {
    if (color === void 0)
      color = MBadgeColor$default_getInstance();
    if (showZero === void 0)
      showZero = false;
    if (max === void 0)
      max = 99;
    if (variant === void 0)
      variant = MBadgeVariant$standard_getInstance();
    if (component === void 0)
      component = 'span';
    if (invisible === void 0)
      invisible = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, badgeComponent, addAsChild, mBadge$lambda(badgeContent, color, invisible, showZero, max, variant, component, className, handler));
  }
  function mBadgeDot$lambda(closure$color, closure$invisible, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_0($receiver.attrs, closure$color);
      if (closure$invisible != null) {
        var it = closure$invisible;
        $receiver.attrs.invisible = it;
      }set_variant_0($receiver.attrs, MBadgeVariant$dot_getInstance());
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mBadgeDot($receiver, color, invisible, addAsChild, className, handler) {
    if (color === void 0)
      color = MBadgeColor$default_getInstance();
    if (invisible === void 0)
      invisible = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, badgeComponent, addAsChild, mBadgeDot$lambda(color, invisible, className, handler));
  }
  function setStyledPropsAndRunHandler($receiver, className, handler) {
    if (className != null) {
      $receiver.attrs.className = className;
    }if (handler != null)
      handler($receiver);
  }
  function child($receiver, component, handler) {
    var $receiver_0 = {};
    var props = $receiver_0;
    return $receiver.child_4dvv5y$(component, props, handler);
  }
  function createStyled($receiver, component, addAsChild, handler) {
    if (addAsChild === void 0)
      addAsChild = true;
    var builder = new StyledElementBuilder(component);
    handler(builder);
    return addAsChild ? $receiver.child_52psg1$(builder.create()) : builder.create();
  }
  function createStyled_0($receiver, componentClass, addAsChild, handler) {
    if (addAsChild === void 0)
      addAsChild = true;
    var builder = new StyledElementBuilder(get_js(componentClass));
    handler(builder);
    var el = addAsChild ? $receiver.child_52psg1$(builder.create()) : builder.create();
    get_children(el.props);
    return el;
  }
  function toolbarJsCssToPartialCss$addSuffix(key, value) {
    var tmp$;
    if (contains(key, 'height', true) || contains(key, 'width', true)) {
      tmp$ = value + 'px';
    } else {
      tmp$ = value;
    }
    return tmp$;
  }
  function toolbarJsCssToPartialCss$lambda$lambda(closure$value, closure$addSuffix) {
    return function ($receiver) {
      var keys2 = Object.keys(closure$value);
      var tmp$;
      for (tmp$ = 0; tmp$ !== keys2.length; ++tmp$) {
        var element = keys2[tmp$];
        var closure$value_0 = closure$value;
        var closure$addSuffix_0 = closure$addSuffix;
        var value2 = closure$value_0[element];
        $receiver.put_puj7f4$(element, closure$addSuffix_0(element, value2));
      }
      return Unit;
    };
  }
  function toolbarJsCssToPartialCss($receiver, jsObject) {
    var addSuffix = toolbarJsCssToPartialCss$addSuffix;
    var keys = Object.keys(jsObject);
    var tmp$;
    for (tmp$ = 0; tmp$ !== keys.length; ++tmp$) {
      var element = keys[tmp$];
      var tmp$_0;
      var value = jsObject[element];
      if (value != null && (typeof (tmp$_0 = typeof value === 'object') === 'boolean' ? tmp$_0 : throwCCE())) {
        if (startsWith(element, '@media', true)) {
          var $receiver_0 = element.substring(6);
          var tmp$_1;
          var query = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : throwCCE()).toString();
          $receiver.media_xk38i9$(query, toolbarJsCssToPartialCss$lambda$lambda(value, addSuffix));
        } else {
          console.error("Don't know how to handle non query sub-object");
        }
      } else {
        $receiver.put_puj7f4$(element, addSuffix(element, value));
      }
    }
  }
  function PropsWithJsStyle(style) {
    this.style = style;
  }
  PropsWithJsStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropsWithJsStyle',
    interfaces: []
  };
  function toJsStyle($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = toStyle($receiver), Object) ? tmp$ : throwCCE();
  }
  function MAlignment(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MAlignment_initFields() {
    MAlignment_initFields = function () {
    };
    MAlignment$inherit_instance = new MAlignment('inherit', 0);
    MAlignment$left_instance = new MAlignment('left', 1);
    MAlignment$center_instance = new MAlignment('center', 2);
    MAlignment$right_instance = new MAlignment('right', 3);
    MAlignment$justify_instance = new MAlignment('justify', 4);
  }
  var MAlignment$inherit_instance;
  function MAlignment$inherit_getInstance() {
    MAlignment_initFields();
    return MAlignment$inherit_instance;
  }
  var MAlignment$left_instance;
  function MAlignment$left_getInstance() {
    MAlignment_initFields();
    return MAlignment$left_instance;
  }
  var MAlignment$center_instance;
  function MAlignment$center_getInstance() {
    MAlignment_initFields();
    return MAlignment$center_instance;
  }
  var MAlignment$right_instance;
  function MAlignment$right_getInstance() {
    MAlignment_initFields();
    return MAlignment$right_instance;
  }
  var MAlignment$justify_instance;
  function MAlignment$justify_getInstance() {
    MAlignment_initFields();
    return MAlignment$justify_instance;
  }
  MAlignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAlignment',
    interfaces: [Enum]
  };
  function MAlignment$values() {
    return [MAlignment$inherit_getInstance(), MAlignment$left_getInstance(), MAlignment$center_getInstance(), MAlignment$right_getInstance(), MAlignment$justify_getInstance()];
  }
  MAlignment.values = MAlignment$values;
  function MAlignment$valueOf(name) {
    switch (name) {
      case 'inherit':
        return MAlignment$inherit_getInstance();
      case 'left':
        return MAlignment$left_getInstance();
      case 'center':
        return MAlignment$center_getInstance();
      case 'right':
        return MAlignment$right_getInstance();
      case 'justify':
        return MAlignment$justify_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MAlignment.' + name);
    }
  }
  MAlignment.valueOf_61zpoe$ = MAlignment$valueOf;
  function MColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MColor_initFields() {
    MColor_initFields = function () {
    };
    MColor$default_instance = new MColor('default', 0);
    MColor$inherit_instance = new MColor('inherit', 1);
    MColor$primary_instance = new MColor('primary', 2);
    MColor$secondary_instance = new MColor('secondary', 3);
  }
  var MColor$default_instance;
  function MColor$default_getInstance() {
    MColor_initFields();
    return MColor$default_instance;
  }
  var MColor$inherit_instance;
  function MColor$inherit_getInstance() {
    MColor_initFields();
    return MColor$inherit_instance;
  }
  var MColor$primary_instance;
  function MColor$primary_getInstance() {
    MColor_initFields();
    return MColor$primary_instance;
  }
  var MColor$secondary_instance;
  function MColor$secondary_getInstance() {
    MColor_initFields();
    return MColor$secondary_instance;
  }
  MColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MColor',
    interfaces: [Enum]
  };
  function MColor$values() {
    return [MColor$default_getInstance(), MColor$inherit_getInstance(), MColor$primary_getInstance(), MColor$secondary_getInstance()];
  }
  MColor.values = MColor$values;
  function MColor$valueOf(name) {
    switch (name) {
      case 'default':
        return MColor$default_getInstance();
      case 'inherit':
        return MColor$inherit_getInstance();
      case 'primary':
        return MColor$primary_getInstance();
      case 'secondary':
        return MColor$secondary_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MColor.' + name);
    }
  }
  MColor.valueOf_61zpoe$ = MColor$valueOf;
  function MOptionColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MOptionColor_initFields() {
    MOptionColor_initFields = function () {
    };
    MOptionColor$primary_instance = new MOptionColor('primary', 0);
    MOptionColor$secondary_instance = new MOptionColor('secondary', 1);
    MOptionColor$default_instance = new MOptionColor('default', 2);
  }
  var MOptionColor$primary_instance;
  function MOptionColor$primary_getInstance() {
    MOptionColor_initFields();
    return MOptionColor$primary_instance;
  }
  var MOptionColor$secondary_instance;
  function MOptionColor$secondary_getInstance() {
    MOptionColor_initFields();
    return MOptionColor$secondary_instance;
  }
  var MOptionColor$default_instance;
  function MOptionColor$default_getInstance() {
    MOptionColor_initFields();
    return MOptionColor$default_instance;
  }
  MOptionColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MOptionColor',
    interfaces: [Enum]
  };
  function MOptionColor$values() {
    return [MOptionColor$primary_getInstance(), MOptionColor$secondary_getInstance(), MOptionColor$default_getInstance()];
  }
  MOptionColor.values = MOptionColor$values;
  function MOptionColor$valueOf(name) {
    switch (name) {
      case 'primary':
        return MOptionColor$primary_getInstance();
      case 'secondary':
        return MOptionColor$secondary_getInstance();
      case 'default':
        return MOptionColor$default_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MOptionColor.' + name);
    }
  }
  MOptionColor.valueOf_61zpoe$ = MOptionColor$valueOf;
  function toHyphenCase($receiver) {
    var text = {v: ''};
    var isFirst = {v: true};
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      var it = toBoxedChar(element);
      if ((new CharRange(65, 90)).contains_mef7kx$(unboxChar(it))) {
        if (!isFirst.v)
          text.v += '-';
        var tmp$_0 = String;
        var tmp$_1 = tmp$_0.fromCharCode;
        var $receiver_0 = unboxChar(it);
        text.v += tmp$_1.call(tmp$_0, toChar(String.fromCharCode($receiver_0 | 0).toLowerCase().charCodeAt(0)));
      } else {
        text.v += String.fromCharCode(unboxChar(it));
      }
      isFirst.v = false;
    }
    return text.v;
  }
  function get_targetInputValue($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return (tmp$_4 = (tmp$_3 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver.target, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.value : null) != null ? tmp$_3 : (tmp$_2 = Kotlin.isType(tmp$_1 = $receiver.target, HTMLTextAreaElement) ? tmp$_1 : null) != null ? tmp$_2.value : null) != null ? tmp$_4 : '';
  }
  function get_targetChecked($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver.target, HTMLInputElement) ? tmp$ : null) != null ? tmp$_0.checked : null) != null ? tmp$_1 : false;
  }
  function get_targetValue($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.target.value, Any) ? tmp$ : throwCCE();
  }
  function persist($receiver) {
    $receiver.persist();
  }
  function HRefOptions(href, targetBlank, target) {
    if (targetBlank === void 0)
      targetBlank = true;
    if (target === void 0)
      target = '';
    this.href = href;
    this.targetBlank = targetBlank;
    this.target = target;
  }
  HRefOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HRefOptions',
    interfaces: []
  };
  HRefOptions.prototype.component1 = function () {
    return this.href;
  };
  HRefOptions.prototype.component2 = function () {
    return this.targetBlank;
  };
  HRefOptions.prototype.component3 = function () {
    return this.target;
  };
  HRefOptions.prototype.copy_etpw90$ = function (href, targetBlank, target) {
    return new HRefOptions(href === void 0 ? this.href : href, targetBlank === void 0 ? this.targetBlank : targetBlank, target === void 0 ? this.target : target);
  };
  HRefOptions.prototype.toString = function () {
    return 'HRefOptions(href=' + Kotlin.toString(this.href) + (', targetBlank=' + Kotlin.toString(this.targetBlank)) + (', target=' + Kotlin.toString(this.target)) + ')';
  };
  HRefOptions.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.href) | 0;
    result = result * 31 + Kotlin.hashCode(this.targetBlank) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    return result;
  };
  HRefOptions.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.href, other.href) && Kotlin.equals(this.targetBlank, other.targetBlank) && Kotlin.equals(this.target, other.target)))));
  };
  function setHRefTargetNoOpener(attrs, hRefOptions) {
    setHRefTargetNoOpener_0(attrs, hRefOptions.href, hRefOptions.targetBlank, hRefOptions.target);
  }
  function setHRefTargetNoOpener_0(attrs, href, targetBlank, target) {
    if (href != null) {
      attrs.href = href;
      if (target != null) {
        attrs.target = target;
      }if (targetBlank) {
        attrs.target = '_blank';
        attrs.rel = 'noopener';
      }}}
  var bottomNavigationComponent;
  function MBottomNavigationProps() {
  }
  MBottomNavigationProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MBottomNavigationProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mBottomNavigation$lambda(closure$component, closure$onChange, closure$showLabels, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      if (closure$onChange != null) {
        var it = closure$onChange;
        $receiver.attrs.onChange = it;
      }$receiver.attrs.showLabels = closure$showLabels;
      $receiver.attrs.value = closure$value;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mBottomNavigation($receiver, value, showLabels, component, onChange, className, handler) {
    if (value === void 0)
      value = false;
    if (showLabels === void 0)
      showLabels = false;
    if (component === void 0)
      component = 'div';
    if (onChange === void 0)
      onChange = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, bottomNavigationComponent, void 0, mBottomNavigation$lambda(component, onChange, showLabels, value, className, handler));
  }
  var bottomNavigationActionComponent;
  function MBottomNavigationActionProps() {
  }
  MBottomNavigationActionProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MBottomNavigationActionProps',
    interfaces: [MButtonBaseProps]
  };
  function mBottomNavigationAction($receiver, label, icon, showLabel, value, disabled, className, handler) {
    if (icon === void 0)
      icon = null;
    if (showLabel === void 0)
      showLabel = null;
    if (value === void 0)
      value = null;
    if (disabled === void 0)
      disabled = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mBottomNavigationAction_0($receiver, label, icon, showLabel, value, disabled, className, handler);
  }
  function mBottomNavigationAction$lambda(closure$disabled, closure$icon, closure$label, closure$showLabel, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disabled = closure$disabled;
      if (closure$icon != null) {
        var closure$icon_0 = closure$icon;
        $receiver.attrs.icon = closure$icon_0;
      }if (closure$label != null) {
        var it = closure$label;
        $receiver.attrs.label = it;
      }if (closure$showLabel != null) {
        var closure$showLabel_0 = closure$showLabel;
        $receiver.attrs.showLabel = closure$showLabel_0;
      }if (closure$value != null) {
        var it_0 = closure$value;
        $receiver.attrs.value = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mBottomNavigationAction_0($receiver, label, icon, showLabel, value, disabled, className, handler) {
    if (label === void 0)
      label = null;
    if (icon === void 0)
      icon = null;
    if (showLabel === void 0)
      showLabel = null;
    if (value === void 0)
      value = null;
    if (disabled === void 0)
      disabled = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, bottomNavigationActionComponent, void 0, mBottomNavigationAction$lambda(disabled, icon, label, showLabel, value, className, handler));
  }
  var breadcrumbsComponent;
  function MBreadcrumbsProps() {
  }
  MBreadcrumbsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MBreadcrumbsProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mBreadcrumbs($receiver, separator, maxItems, itemsBeforeCollapse, itemsAfterCollapse, component, className, handler) {
    if (separator === void 0)
      separator = '/';
    if (maxItems === void 0)
      maxItems = 8;
    if (itemsBeforeCollapse === void 0)
      itemsBeforeCollapse = 1;
    if (itemsAfterCollapse === void 0)
      itemsAfterCollapse = 1;
    if (component === void 0)
      component = 'nav';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var tmp$;
    return mBreadcrumbs_0($receiver, Kotlin.isType(tmp$ = separator, Object) ? tmp$ : throwCCE(), maxItems, itemsBeforeCollapse, itemsAfterCollapse, component, className, handler);
  }
  function mBreadcrumbs$lambda(closure$component, closure$itemsAfterCollapse, closure$itemsBeforeCollapse, closure$maxItems, closure$separator, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      $receiver.attrs.itemsAfterCollapse = closure$itemsAfterCollapse;
      $receiver.attrs.itemsBeforeCollapse = closure$itemsBeforeCollapse;
      $receiver.attrs.maxItems = closure$maxItems;
      $receiver.attrs.separator = closure$separator;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mBreadcrumbs_0($receiver, separator, maxItems, itemsBeforeCollapse, itemsAfterCollapse, component, className, handler) {
    if (maxItems === void 0)
      maxItems = 8;
    if (itemsBeforeCollapse === void 0)
      itemsBeforeCollapse = 1;
    if (itemsAfterCollapse === void 0)
      itemsAfterCollapse = 1;
    if (component === void 0)
      component = 'nav';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, breadcrumbsComponent, void 0, mBreadcrumbs$lambda(component, itemsAfterCollapse, itemsBeforeCollapse, maxItems, separator, className, handler));
  }
  var checkboxComponent;
  function MCheckboxProps() {
  }
  MCheckboxProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCheckboxProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var color_1;
  var color_metadata_1 = new PropertyMetadata('color');
  function get_color_1($receiver) {
    return color_1.getValue_lrcp0p$($receiver, color_metadata_1);
  }
  function set_color_1($receiver, color) {
    color_1.setValue_9rddgb$($receiver, color_metadata_1, color);
  }
  function mCheckbox$lambda(closure$checked, closure$color, closure$disabled, closure$required, closure$id, closure$indeterminate, closure$inputProps, closure$onChange, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.checked = closure$checked;
      set_color_1($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$required != null) {
        var it = closure$required;
        $receiver.attrs.required = it;
      }if (closure$id != null) {
        var closure$id_0 = closure$id;
        $receiver.attrs.id = closure$id_0;
      }$receiver.attrs.indeterminate = closure$indeterminate;
      if (closure$inputProps != null) {
        var closure$inputProps_0 = closure$inputProps;
        $receiver.attrs.inputProps = closure$inputProps_0;
      }if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }$receiver.attrs.type = InputType.checkBox.realValue;
      if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCheckbox($receiver, checked, color, disabled, required, indeterminate, onChange, id, inputProps, value, addAsChild, className, handler) {
    if (checked === void 0)
      checked = false;
    if (color === void 0)
      color = MOptionColor$secondary_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (required === void 0)
      required = null;
    if (indeterminate === void 0)
      indeterminate = false;
    if (onChange === void 0)
      onChange = null;
    if (id === void 0)
      id = null;
    if (inputProps === void 0)
      inputProps = null;
    if (value === void 0)
      value = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, checkboxComponent, addAsChild, mCheckbox$lambda(checked, color, disabled, required, id, indeterminate, inputProps, onChange, value, className, handler));
  }
  function mCheckboxWithLabel($receiver, label, checked, color, disabled, required, indeterminate, labelPlacement, onChange, id, inputProps, value, className, handler) {
    if (checked === void 0)
      checked = false;
    if (color === void 0)
      color = MOptionColor$secondary_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (required === void 0)
      required = null;
    if (indeterminate === void 0)
      indeterminate = false;
    if (labelPlacement === void 0)
      labelPlacement = MLabelPlacement$end_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (id === void 0)
      id = null;
    if (inputProps === void 0)
      inputProps = null;
    if (value === void 0)
      value = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var checkBox = mCheckbox($receiver, checked, color, disabled, required, indeterminate, onChange, id, inputProps, value, false);
    return mFormControlLabel($receiver, label, checkBox, checked, disabled, value, void 0, labelPlacement, void 0, className, handler);
  }
  function ChildPropDelegate(propName, childPropName) {
    this.propName_0 = propName;
    this.childPropName_0 = childPropName;
  }
  ChildPropDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    return (tmp$ = thisRef[this.propName_0][this.childPropName_0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  ChildPropDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    if (thisRef[this.propName_0] == undefined) {
      thisRef[this.propName_0] = {};
    }thisRef[this.propName_0][this.childPropName_0] = value;
  };
  ChildPropDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildPropDelegate',
    interfaces: [ReadWriteProperty]
  };
  function ChildPropDelegateNullable(propName, childPropName) {
    this.propName = propName;
    this.childPropName = childPropName;
  }
  ChildPropDelegateNullable.prototype.getValue_kl50cn$ = defineInlineFunction('muirwik-muirwik-components.com.ccfraser.muirwik.components.ChildPropDelegateNullable.getValue_kl50cn$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, thisRef, property) {
      var tmp$, tmp$_0;
      if (thisRef[this.propName] == undefined)
        tmp$_0 = null;
      else if (thisRef[this.propName][this.childPropName] == undefined)
        tmp$_0 = null;
      else if (!isT(thisRef[this.propName][this.childPropName]))
        tmp$_0 = null;
      else
        tmp$_0 = isT(tmp$ = thisRef[this.propName][this.childPropName]) ? tmp$ : throwCCE();
      return tmp$_0;
    };
  }));
  ChildPropDelegateNullable.prototype.setValue_kmk2k6$ = function (thisRef, property, value) {
    if (thisRef[this.propName] == undefined) {
      thisRef[this.propName] = {};
    }thisRef[this.propName][this.childPropName] = value;
  };
  ChildPropDelegateNullable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChildPropDelegateNullable',
    interfaces: []
  };
  var chipComponent;
  function MChipVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MChipVariant_initFields() {
    MChipVariant_initFields = function () {
    };
    MChipVariant$default_instance = new MChipVariant('default', 0);
    MChipVariant$outlined_instance = new MChipVariant('outlined', 1);
  }
  var MChipVariant$default_instance;
  function MChipVariant$default_getInstance() {
    MChipVariant_initFields();
    return MChipVariant$default_instance;
  }
  var MChipVariant$outlined_instance;
  function MChipVariant$outlined_getInstance() {
    MChipVariant_initFields();
    return MChipVariant$outlined_instance;
  }
  MChipVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MChipVariant',
    interfaces: [Enum]
  };
  function MChipVariant$values() {
    return [MChipVariant$default_getInstance(), MChipVariant$outlined_getInstance()];
  }
  MChipVariant.values = MChipVariant$values;
  function MChipVariant$valueOf(name) {
    switch (name) {
      case 'default':
        return MChipVariant$default_getInstance();
      case 'outlined':
        return MChipVariant$outlined_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MChipVariant.' + name);
    }
  }
  MChipVariant.valueOf_61zpoe$ = MChipVariant$valueOf;
  function MChipColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MChipColor_initFields() {
    MChipColor_initFields = function () {
    };
    MChipColor$default_instance = new MChipColor('default', 0);
    MChipColor$primary_instance = new MChipColor('primary', 1);
    MChipColor$secondary_instance = new MChipColor('secondary', 2);
  }
  var MChipColor$default_instance;
  function MChipColor$default_getInstance() {
    MChipColor_initFields();
    return MChipColor$default_instance;
  }
  var MChipColor$primary_instance;
  function MChipColor$primary_getInstance() {
    MChipColor_initFields();
    return MChipColor$primary_instance;
  }
  var MChipColor$secondary_instance;
  function MChipColor$secondary_getInstance() {
    MChipColor_initFields();
    return MChipColor$secondary_instance;
  }
  MChipColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MChipColor',
    interfaces: [Enum]
  };
  function MChipColor$values() {
    return [MChipColor$default_getInstance(), MChipColor$primary_getInstance(), MChipColor$secondary_getInstance()];
  }
  MChipColor.values = MChipColor$values;
  function MChipColor$valueOf(name) {
    switch (name) {
      case 'default':
        return MChipColor$default_getInstance();
      case 'primary':
        return MChipColor$primary_getInstance();
      case 'secondary':
        return MChipColor$secondary_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MChipColor.' + name);
    }
  }
  MChipColor.valueOf_61zpoe$ = MChipColor$valueOf;
  function MChipSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MChipSize_initFields() {
    MChipSize_initFields = function () {
    };
    MChipSize$small_instance = new MChipSize('small', 0);
    MChipSize$medium_instance = new MChipSize('medium', 1);
  }
  var MChipSize$small_instance;
  function MChipSize$small_getInstance() {
    MChipSize_initFields();
    return MChipSize$small_instance;
  }
  var MChipSize$medium_instance;
  function MChipSize$medium_getInstance() {
    MChipSize_initFields();
    return MChipSize$medium_instance;
  }
  MChipSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MChipSize',
    interfaces: [Enum]
  };
  function MChipSize$values() {
    return [MChipSize$small_getInstance(), MChipSize$medium_getInstance()];
  }
  MChipSize.values = MChipSize$values;
  function MChipSize$valueOf(name) {
    switch (name) {
      case 'small':
        return MChipSize$small_getInstance();
      case 'medium':
        return MChipSize$medium_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MChipSize.' + name);
    }
  }
  MChipSize.valueOf_61zpoe$ = MChipSize$valueOf;
  function MChipProps() {
  }
  MChipProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MChipProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var color_2;
  var color_metadata_2 = new PropertyMetadata('color');
  function get_color_2($receiver) {
    return color_2.getValue_lrcp0p$($receiver, color_metadata_2);
  }
  function set_color_2($receiver, color) {
    color_2.setValue_9rddgb$($receiver, color_metadata_2, color);
  }
  var size;
  var size_metadata = new PropertyMetadata('size');
  function get_size($receiver) {
    return size.getValue_lrcp0p$($receiver, size_metadata);
  }
  function set_size($receiver, size_0) {
    size.setValue_9rddgb$($receiver, size_metadata, size_0);
  }
  var variant_1;
  var variant_metadata_1 = new PropertyMetadata('variant');
  function get_variant_1($receiver) {
    return variant_1.getValue_lrcp0p$($receiver, variant_metadata_1);
  }
  function set_variant_1($receiver, variant) {
    variant_1.setValue_9rddgb$($receiver, variant_metadata_1, variant);
  }
  function mChip$lambda(closure$avatar, closure$color, closure$label, closure$key, closure$onClick, closure$onDelete, closure$size, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$avatar != null) {
        var it = closure$avatar;
        $receiver.attrs.avatar = it;
      }set_color_2($receiver.attrs, closure$color);
      $receiver.attrs.component = 'div';
      $receiver.attrs.label = closure$label;
      if (closure$key != null) {
        var it_0 = closure$key;
        $receiver.attrs.key = it_0;
      }if (closure$onClick != null) {
        var it_1 = closure$onClick;
        $receiver.attrs.onClick = it_1;
      }if (closure$onDelete != null) {
        var it_2 = closure$onDelete;
        $receiver.attrs.onDelete = it_2;
      }set_size($receiver.attrs, closure$size);
      set_variant_1($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mChip($receiver, label, avatar, onClick, onDelete, key, color, size, variant, addAsChild, className, handler) {
    if (avatar === void 0)
      avatar = null;
    if (onClick === void 0)
      onClick = null;
    if (onDelete === void 0)
      onDelete = null;
    if (key === void 0)
      key = null;
    if (color === void 0)
      color = MChipColor$default_getInstance();
    if (size === void 0)
      size = MChipSize$medium_getInstance();
    if (variant === void 0)
      variant = MChipVariant$default_getInstance();
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, chipComponent, addAsChild, mChip$lambda(avatar, color, label, key, onClick, onDelete, size, variant, className, handler));
  }
  var circularProgressComponent;
  function MCircularProgressColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MCircularProgressColor_initFields() {
    MCircularProgressColor_initFields = function () {
    };
    MCircularProgressColor$primary_instance = new MCircularProgressColor('primary', 0);
    MCircularProgressColor$secondary_instance = new MCircularProgressColor('secondary', 1);
    MCircularProgressColor$inherit_instance = new MCircularProgressColor('inherit', 2);
  }
  var MCircularProgressColor$primary_instance;
  function MCircularProgressColor$primary_getInstance() {
    MCircularProgressColor_initFields();
    return MCircularProgressColor$primary_instance;
  }
  var MCircularProgressColor$secondary_instance;
  function MCircularProgressColor$secondary_getInstance() {
    MCircularProgressColor_initFields();
    return MCircularProgressColor$secondary_instance;
  }
  var MCircularProgressColor$inherit_instance;
  function MCircularProgressColor$inherit_getInstance() {
    MCircularProgressColor_initFields();
    return MCircularProgressColor$inherit_instance;
  }
  MCircularProgressColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MCircularProgressColor',
    interfaces: [Enum]
  };
  function MCircularProgressColor$values() {
    return [MCircularProgressColor$primary_getInstance(), MCircularProgressColor$secondary_getInstance(), MCircularProgressColor$inherit_getInstance()];
  }
  MCircularProgressColor.values = MCircularProgressColor$values;
  function MCircularProgressColor$valueOf(name) {
    switch (name) {
      case 'primary':
        return MCircularProgressColor$primary_getInstance();
      case 'secondary':
        return MCircularProgressColor$secondary_getInstance();
      case 'inherit':
        return MCircularProgressColor$inherit_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MCircularProgressColor.' + name);
    }
  }
  MCircularProgressColor.valueOf_61zpoe$ = MCircularProgressColor$valueOf;
  function MCircularProgressVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MCircularProgressVariant_initFields() {
    MCircularProgressVariant_initFields = function () {
    };
    MCircularProgressVariant$determinate_instance = new MCircularProgressVariant('determinate', 0);
    MCircularProgressVariant$indeterminate_instance = new MCircularProgressVariant('indeterminate', 1);
    MCircularProgressVariant$static_instance = new MCircularProgressVariant('static', 2);
  }
  var MCircularProgressVariant$determinate_instance;
  function MCircularProgressVariant$determinate_getInstance() {
    MCircularProgressVariant_initFields();
    return MCircularProgressVariant$determinate_instance;
  }
  var MCircularProgressVariant$indeterminate_instance;
  function MCircularProgressVariant$indeterminate_getInstance() {
    MCircularProgressVariant_initFields();
    return MCircularProgressVariant$indeterminate_instance;
  }
  var MCircularProgressVariant$static_instance;
  function MCircularProgressVariant$static_getInstance() {
    MCircularProgressVariant_initFields();
    return MCircularProgressVariant$static_instance;
  }
  MCircularProgressVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MCircularProgressVariant',
    interfaces: [Enum]
  };
  function MCircularProgressVariant$values() {
    return [MCircularProgressVariant$determinate_getInstance(), MCircularProgressVariant$indeterminate_getInstance(), MCircularProgressVariant$static_getInstance()];
  }
  MCircularProgressVariant.values = MCircularProgressVariant$values;
  function MCircularProgressVariant$valueOf(name) {
    switch (name) {
      case 'determinate':
        return MCircularProgressVariant$determinate_getInstance();
      case 'indeterminate':
        return MCircularProgressVariant$indeterminate_getInstance();
      case 'static':
        return MCircularProgressVariant$static_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MCircularProgressVariant.' + name);
    }
  }
  MCircularProgressVariant.valueOf_61zpoe$ = MCircularProgressVariant$valueOf;
  function MCircularProgressProps() {
  }
  MCircularProgressProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCircularProgressProps',
    interfaces: []
  };
  var color_3;
  var color_metadata_3 = new PropertyMetadata('color');
  function get_color_3($receiver) {
    return color_3.getValue_lrcp0p$($receiver, color_metadata_3);
  }
  function set_color_3($receiver, color) {
    color_3.setValue_9rddgb$($receiver, color_metadata_3, color);
  }
  var variant_2;
  var variant_metadata_2 = new PropertyMetadata('variant');
  function get_variant_2($receiver) {
    return variant_2.getValue_lrcp0p$($receiver, variant_metadata_2);
  }
  function set_variant_2($receiver, variant) {
    variant_2.setValue_9rddgb$($receiver, variant_metadata_2, variant);
  }
  function get_size_0($receiver) {
    var tmp$;
    return new LinearDimension(typeof (tmp$ = $receiver.size) === 'string' ? tmp$ : throwCCE());
  }
  function set_size_0($receiver, value) {
    $receiver.size = value.toString();
  }
  function mCircularProgress$lambda(closure$color, closure$disableShrink, closure$size, closure$thickness, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_3($receiver.attrs, closure$color);
      $receiver.attrs.disableShrink = closure$disableShrink;
      set_size_0($receiver.attrs, closure$size);
      $receiver.attrs.thickness = closure$thickness;
      if (closure$value != null) {
        var it = closure$value;
        $receiver.attrs.value = it;
      }set_variant_2($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCircularProgress($receiver, value, variant, size, color, thickness, disableShrink, className, handler) {
    if (value === void 0)
      value = null;
    if (variant === void 0)
      variant = MCircularProgressVariant$indeterminate_getInstance();
    if (size === void 0)
      size = get_px(40);
    if (color === void 0)
      color = MCircularProgressColor$primary_getInstance();
    if (thickness === void 0)
      thickness = 3.6;
    if (disableShrink === void 0)
      disableShrink = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, circularProgressComponent, void 0, mCircularProgress$lambda(color, disableShrink, size, thickness, value, variant, className, handler));
  }
  var clickAwayListenerComponent;
  function MClickAwayListenerMouseEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MClickAwayListenerMouseEvent_initFields() {
    MClickAwayListenerMouseEvent_initFields = function () {
    };
    MClickAwayListenerMouseEvent$onClick_instance = new MClickAwayListenerMouseEvent('onClick', 0);
    MClickAwayListenerMouseEvent$onMouseDown_instance = new MClickAwayListenerMouseEvent('onMouseDown', 1);
    MClickAwayListenerMouseEvent$onMouseUp_instance = new MClickAwayListenerMouseEvent('onMouseUp', 2);
    MClickAwayListenerMouseEvent$disable_instance = new MClickAwayListenerMouseEvent('disable', 3);
  }
  var MClickAwayListenerMouseEvent$onClick_instance;
  function MClickAwayListenerMouseEvent$onClick_getInstance() {
    MClickAwayListenerMouseEvent_initFields();
    return MClickAwayListenerMouseEvent$onClick_instance;
  }
  var MClickAwayListenerMouseEvent$onMouseDown_instance;
  function MClickAwayListenerMouseEvent$onMouseDown_getInstance() {
    MClickAwayListenerMouseEvent_initFields();
    return MClickAwayListenerMouseEvent$onMouseDown_instance;
  }
  var MClickAwayListenerMouseEvent$onMouseUp_instance;
  function MClickAwayListenerMouseEvent$onMouseUp_getInstance() {
    MClickAwayListenerMouseEvent_initFields();
    return MClickAwayListenerMouseEvent$onMouseUp_instance;
  }
  var MClickAwayListenerMouseEvent$disable_instance;
  function MClickAwayListenerMouseEvent$disable_getInstance() {
    MClickAwayListenerMouseEvent_initFields();
    return MClickAwayListenerMouseEvent$disable_instance;
  }
  MClickAwayListenerMouseEvent.prototype.value = function () {
    return this === MClickAwayListenerMouseEvent$disable_getInstance() ? false : Enum.prototype.toString.call(this);
  };
  MClickAwayListenerMouseEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MClickAwayListenerMouseEvent',
    interfaces: [Enum]
  };
  function MClickAwayListenerMouseEvent$values() {
    return [MClickAwayListenerMouseEvent$onClick_getInstance(), MClickAwayListenerMouseEvent$onMouseDown_getInstance(), MClickAwayListenerMouseEvent$onMouseUp_getInstance(), MClickAwayListenerMouseEvent$disable_getInstance()];
  }
  MClickAwayListenerMouseEvent.values = MClickAwayListenerMouseEvent$values;
  function MClickAwayListenerMouseEvent$valueOf(name) {
    switch (name) {
      case 'onClick':
        return MClickAwayListenerMouseEvent$onClick_getInstance();
      case 'onMouseDown':
        return MClickAwayListenerMouseEvent$onMouseDown_getInstance();
      case 'onMouseUp':
        return MClickAwayListenerMouseEvent$onMouseUp_getInstance();
      case 'disable':
        return MClickAwayListenerMouseEvent$disable_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MClickAwayListenerMouseEvent.' + name);
    }
  }
  MClickAwayListenerMouseEvent.valueOf_61zpoe$ = MClickAwayListenerMouseEvent$valueOf;
  function MClickAwayListenerTouchEvent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MClickAwayListenerTouchEvent_initFields() {
    MClickAwayListenerTouchEvent_initFields = function () {
    };
    MClickAwayListenerTouchEvent$onTouchStart_instance = new MClickAwayListenerTouchEvent('onTouchStart', 0);
    MClickAwayListenerTouchEvent$onTouchEnd_instance = new MClickAwayListenerTouchEvent('onTouchEnd', 1);
    MClickAwayListenerTouchEvent$disable_instance = new MClickAwayListenerTouchEvent('disable', 2);
  }
  var MClickAwayListenerTouchEvent$onTouchStart_instance;
  function MClickAwayListenerTouchEvent$onTouchStart_getInstance() {
    MClickAwayListenerTouchEvent_initFields();
    return MClickAwayListenerTouchEvent$onTouchStart_instance;
  }
  var MClickAwayListenerTouchEvent$onTouchEnd_instance;
  function MClickAwayListenerTouchEvent$onTouchEnd_getInstance() {
    MClickAwayListenerTouchEvent_initFields();
    return MClickAwayListenerTouchEvent$onTouchEnd_instance;
  }
  var MClickAwayListenerTouchEvent$disable_instance;
  function MClickAwayListenerTouchEvent$disable_getInstance() {
    MClickAwayListenerTouchEvent_initFields();
    return MClickAwayListenerTouchEvent$disable_instance;
  }
  MClickAwayListenerTouchEvent.prototype.value = function () {
    return this === MClickAwayListenerTouchEvent$disable_getInstance() ? false : Enum.prototype.toString.call(this);
  };
  MClickAwayListenerTouchEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MClickAwayListenerTouchEvent',
    interfaces: [Enum]
  };
  function MClickAwayListenerTouchEvent$values() {
    return [MClickAwayListenerTouchEvent$onTouchStart_getInstance(), MClickAwayListenerTouchEvent$onTouchEnd_getInstance(), MClickAwayListenerTouchEvent$disable_getInstance()];
  }
  MClickAwayListenerTouchEvent.values = MClickAwayListenerTouchEvent$values;
  function MClickAwayListenerTouchEvent$valueOf(name) {
    switch (name) {
      case 'onTouchStart':
        return MClickAwayListenerTouchEvent$onTouchStart_getInstance();
      case 'onTouchEnd':
        return MClickAwayListenerTouchEvent$onTouchEnd_getInstance();
      case 'disable':
        return MClickAwayListenerTouchEvent$disable_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MClickAwayListenerTouchEvent.' + name);
    }
  }
  MClickAwayListenerTouchEvent.valueOf_61zpoe$ = MClickAwayListenerTouchEvent$valueOf;
  function MClickAwayListenerProps() {
  }
  MClickAwayListenerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MClickAwayListenerProps',
    interfaces: []
  };
  function get_mouseEvent($receiver) {
    if (typeof $receiver.mouseEvent === 'string')
      return MClickAwayListenerMouseEvent$valueOf($receiver.mouseEvent);
    else
      return MClickAwayListenerMouseEvent$disable_getInstance();
  }
  function set_mouseEvent($receiver, value) {
    $receiver.mouseEvent = value.value();
  }
  function get_touchEvent($receiver) {
    if (typeof $receiver.touchEvent === 'string')
      return MClickAwayListenerTouchEvent$valueOf($receiver.touchEvent);
    else
      return MClickAwayListenerTouchEvent$disable_getInstance();
  }
  function set_touchEvent($receiver, value) {
    $receiver.touchEvent = value.value();
  }
  function mClickAwayListener$lambda(closure$mouseEvent, closure$touchEvent, closure$onClickAway, closure$handler) {
    return function ($receiver) {
      set_mouseEvent($receiver.attrs, closure$mouseEvent);
      set_touchEvent($receiver.attrs, closure$touchEvent);
      $receiver.attrs.onClickAway = closure$onClickAway;
      if (closure$handler != null)
        closure$handler($receiver);
      $receiver.attrs.mouseEvent = get_mouseEvent($receiver.attrs).value();
      $receiver.attrs.touchEvent = get_touchEvent($receiver.attrs).value();
      return Unit;
    };
  }
  function mClickAwayListener($receiver, onClickAway, mouseEvent, touchEvent, handler) {
    if (mouseEvent === void 0)
      mouseEvent = MClickAwayListenerMouseEvent$onClick_getInstance();
    if (touchEvent === void 0)
      touchEvent = MClickAwayListenerTouchEvent$onTouchStart_getInstance();
    if (handler === void 0)
      handler = null;
    return child($receiver, clickAwayListenerComponent, mClickAwayListener$lambda(mouseEvent, touchEvent, onClickAway, handler));
  }
  function Colors() {
    Colors$Companion_getInstance();
  }
  function Colors$Red() {
    Colors$Red_instance = this;
    this.shade50 = new Color('#ffebee');
    this.shade100 = new Color('#ffcdd2');
    this.shade200 = new Color('#ef9a9a');
    this.shade300 = new Color('#e57373');
    this.shade400 = new Color('#ef5350');
    this.shade500 = new Color('#f44336');
    this.shade600 = new Color('#e53935');
    this.shade700 = new Color('#d32f2f');
    this.shade800 = new Color('#c62828');
    this.shade900 = new Color('#b71c1c');
    this.accent100 = new Color('#ff8a80');
    this.accent200 = new Color('#ff5252');
    this.accent400 = new Color('#ff1744');
    this.accent700 = new Color('#d50000');
  }
  Colors$Red.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Red',
    interfaces: []
  };
  var Colors$Red_instance = null;
  function Colors$Red_getInstance() {
    if (Colors$Red_instance === null) {
      new Colors$Red();
    }return Colors$Red_instance;
  }
  function Colors$Pink() {
    Colors$Pink_instance = this;
    this.shade50 = new Color('#fce4ec');
    this.shade100 = new Color('#f8bbd0');
    this.shade200 = new Color('#f48fb1');
    this.shade300 = new Color('#f06292');
    this.shade400 = new Color('#ec407a');
    this.shade500 = new Color('#e91e63');
    this.shade600 = new Color('#d81b60');
    this.shade700 = new Color('#c2185b');
    this.shade800 = new Color('#ad1457');
    this.shade900 = new Color('#880e4f');
    this.accent100 = new Color('#ff80ab');
    this.accent200 = new Color('#ff4081');
    this.accent400 = new Color('#f50057');
    this.accent700 = new Color('#c51162');
  }
  Colors$Pink.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Pink',
    interfaces: []
  };
  var Colors$Pink_instance = null;
  function Colors$Pink_getInstance() {
    if (Colors$Pink_instance === null) {
      new Colors$Pink();
    }return Colors$Pink_instance;
  }
  function Colors$Purple() {
    Colors$Purple_instance = this;
    this.shade50 = new Color('#f3e5f5');
    this.shade100 = new Color('#e1bee7');
    this.shade200 = new Color('#ce93d8');
    this.shade300 = new Color('#ba68c8');
    this.shade400 = new Color('#ab47bc');
    this.shade500 = new Color('#9c27b0');
    this.shade600 = new Color('#8e24aa');
    this.shade700 = new Color('#7b1fa2');
    this.shade800 = new Color('#6a1b9a');
    this.shade900 = new Color('#4a148c');
    this.accent100 = new Color('#ea80fc');
    this.accent200 = new Color('#e040fb');
    this.accent400 = new Color('#d500f9');
    this.accent700 = new Color('#aa00ff');
  }
  Colors$Purple.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Purple',
    interfaces: []
  };
  var Colors$Purple_instance = null;
  function Colors$Purple_getInstance() {
    if (Colors$Purple_instance === null) {
      new Colors$Purple();
    }return Colors$Purple_instance;
  }
  function Colors$DeepPurple() {
    Colors$DeepPurple_instance = this;
    this.shade50 = new Color('#ede7f6');
    this.shade100 = new Color('#d1c4e9');
    this.shade200 = new Color('#b39ddb');
    this.shade300 = new Color('#9575cd');
    this.shade400 = new Color('#7e57c2');
    this.shade500 = new Color('#673ab7');
    this.shade600 = new Color('#5e35b1');
    this.shade700 = new Color('#512da8');
    this.shade800 = new Color('#4527a0');
    this.shade900 = new Color('#311b92');
    this.accent100 = new Color('#b388ff');
    this.accent200 = new Color('#7c4dff');
    this.accent400 = new Color('#651fff');
    this.accent700 = new Color('#6200ea');
  }
  Colors$DeepPurple.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DeepPurple',
    interfaces: []
  };
  var Colors$DeepPurple_instance = null;
  function Colors$DeepPurple_getInstance() {
    if (Colors$DeepPurple_instance === null) {
      new Colors$DeepPurple();
    }return Colors$DeepPurple_instance;
  }
  function Colors$Indigo() {
    Colors$Indigo_instance = this;
    this.shade50 = new Color('#e8eaf6');
    this.shade100 = new Color('#c5cae9');
    this.shade200 = new Color('#9fa8da');
    this.shade300 = new Color('#7986cb');
    this.shade400 = new Color('#5c6bc0');
    this.shade500 = new Color('#3f51b5');
    this.shade600 = new Color('#3949ab');
    this.shade700 = new Color('#303f9f');
    this.shade800 = new Color('#283593');
    this.shade900 = new Color('#1a237e');
    this.accent100 = new Color('#8c9eff');
    this.accent200 = new Color('#536dfe');
    this.accent400 = new Color('#3d5afe');
    this.accent700 = new Color('#304ffe');
  }
  Colors$Indigo.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Indigo',
    interfaces: []
  };
  var Colors$Indigo_instance = null;
  function Colors$Indigo_getInstance() {
    if (Colors$Indigo_instance === null) {
      new Colors$Indigo();
    }return Colors$Indigo_instance;
  }
  function Colors$Blue() {
    Colors$Blue_instance = this;
    this.shade50 = new Color('#e3f2fd');
    this.shade100 = new Color('#bbdefb');
    this.shade200 = new Color('#90caf9');
    this.shade300 = new Color('#64b5f6');
    this.shade400 = new Color('#42a5f5');
    this.shade500 = new Color('#2196f3');
    this.shade600 = new Color('#1e88e5');
    this.shade700 = new Color('#1976d2');
    this.shade800 = new Color('#1565c0');
    this.shade900 = new Color('#0d47a1');
    this.accent100 = new Color('#82b1ff');
    this.accent200 = new Color('#448aff');
    this.accent400 = new Color('#2979ff');
    this.accent700 = new Color('#2962ff');
  }
  Colors$Blue.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Blue',
    interfaces: []
  };
  var Colors$Blue_instance = null;
  function Colors$Blue_getInstance() {
    if (Colors$Blue_instance === null) {
      new Colors$Blue();
    }return Colors$Blue_instance;
  }
  function Colors$LightBlue() {
    Colors$LightBlue_instance = this;
    this.shade50 = new Color('#e1f5fe');
    this.shade100 = new Color('#b3e5fc');
    this.shade200 = new Color('#81d4fa');
    this.shade300 = new Color('#4fc3f7');
    this.shade400 = new Color('#29b6f6');
    this.shade500 = new Color('#03a9f4');
    this.shade600 = new Color('#039be5');
    this.shade700 = new Color('#0288d1');
    this.shade800 = new Color('#0277bd');
    this.shade900 = new Color('#01579b');
    this.accent100 = new Color('#80d8ff');
    this.accent200 = new Color('#40c4ff');
    this.accent400 = new Color('#00b0ff');
    this.accent700 = new Color('#0091ea');
  }
  Colors$LightBlue.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LightBlue',
    interfaces: []
  };
  var Colors$LightBlue_instance = null;
  function Colors$LightBlue_getInstance() {
    if (Colors$LightBlue_instance === null) {
      new Colors$LightBlue();
    }return Colors$LightBlue_instance;
  }
  function Colors$Cyan() {
    Colors$Cyan_instance = this;
    this.shade50 = new Color('#e0f7fa');
    this.shade100 = new Color('#b2ebf2');
    this.shade200 = new Color('#80deea');
    this.shade300 = new Color('#4dd0e1');
    this.shade400 = new Color('#26c6da');
    this.shade500 = new Color('#00bcd4');
    this.shade600 = new Color('#00acc1');
    this.shade700 = new Color('#0097a7');
    this.shade800 = new Color('#00838f');
    this.shade900 = new Color('#006064');
    this.accent100 = new Color('#84ffff');
    this.accent200 = new Color('#18ffff');
    this.accent400 = new Color('#00e5ff');
    this.accent700 = new Color('#00b8d4');
  }
  Colors$Cyan.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Cyan',
    interfaces: []
  };
  var Colors$Cyan_instance = null;
  function Colors$Cyan_getInstance() {
    if (Colors$Cyan_instance === null) {
      new Colors$Cyan();
    }return Colors$Cyan_instance;
  }
  function Colors$Teal() {
    Colors$Teal_instance = this;
    this.shade50 = new Color('#e0f2f1');
    this.shade100 = new Color('#b2dfdb');
    this.shade200 = new Color('#80cbc4');
    this.shade300 = new Color('#4db6ac');
    this.shade400 = new Color('#26a69a');
    this.shade500 = new Color('#9688');
    this.shade600 = new Color('#00897b');
    this.shade700 = new Color('#00796b');
    this.shade800 = new Color('#00695c');
    this.shade900 = new Color('#004d40');
    this.accent100 = new Color('#a7ffeb');
    this.accent200 = new Color('#64ffda');
    this.accent400 = new Color('#1de9b6');
    this.accent700 = new Color('#00bfa5');
  }
  Colors$Teal.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Teal',
    interfaces: []
  };
  var Colors$Teal_instance = null;
  function Colors$Teal_getInstance() {
    if (Colors$Teal_instance === null) {
      new Colors$Teal();
    }return Colors$Teal_instance;
  }
  function Colors$Green() {
    Colors$Green_instance = this;
    this.shade50 = new Color('#e8f5e9');
    this.shade100 = new Color('#c8e6c9');
    this.shade200 = new Color('#a5d6a7');
    this.shade300 = new Color('#81c784');
    this.shade400 = new Color('#66bb6a');
    this.shade500 = new Color('#4caf50');
    this.shade600 = new Color('#43a047');
    this.shade700 = new Color('#388e3c');
    this.shade800 = new Color('#2e7d32');
    this.shade900 = new Color('#1b5e20');
    this.accent100 = new Color('#b9f6ca');
    this.accent200 = new Color('#69f0ae');
    this.accent400 = new Color('#00E676');
    this.accent700 = new Color('#00c853');
  }
  Colors$Green.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Green',
    interfaces: []
  };
  var Colors$Green_instance = null;
  function Colors$Green_getInstance() {
    if (Colors$Green_instance === null) {
      new Colors$Green();
    }return Colors$Green_instance;
  }
  function Colors$LightGreen() {
    Colors$LightGreen_instance = this;
    this.shade50 = new Color('#f1f8e9');
    this.shade100 = new Color('#dcedc8');
    this.shade200 = new Color('#c5e1a5');
    this.shade300 = new Color('#aed581');
    this.shade400 = new Color('#9ccc65');
    this.shade500 = new Color('#8bc34a');
    this.shade600 = new Color('#7cb342');
    this.shade700 = new Color('#689f38');
    this.shade800 = new Color('#558b2f');
    this.shade900 = new Color('#33691e');
    this.accent100 = new Color('#ccff90');
    this.accent200 = new Color('#b2ff59');
    this.accent400 = new Color('#76ff03');
    this.accent700 = new Color('#64dd17');
  }
  Colors$LightGreen.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LightGreen',
    interfaces: []
  };
  var Colors$LightGreen_instance = null;
  function Colors$LightGreen_getInstance() {
    if (Colors$LightGreen_instance === null) {
      new Colors$LightGreen();
    }return Colors$LightGreen_instance;
  }
  function Colors$Lime() {
    Colors$Lime_instance = this;
    this.shade50 = new Color('#f9fbe7');
    this.shade100 = new Color('#f0f4c3');
    this.shade200 = new Color('#e6ee9c');
    this.shade300 = new Color('#dce775');
    this.shade400 = new Color('#d4e157');
    this.shade500 = new Color('#cddc39');
    this.shade600 = new Color('#c0ca33');
    this.shade700 = new Color('#afb42b');
    this.shade800 = new Color('#9e9d24');
    this.shade900 = new Color('#827717');
    this.accent100 = new Color('#f4ff81');
    this.accent200 = new Color('#eeff41');
    this.accent400 = new Color('#c6ff00');
    this.accent700 = new Color('#aeea00');
  }
  Colors$Lime.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Lime',
    interfaces: []
  };
  var Colors$Lime_instance = null;
  function Colors$Lime_getInstance() {
    if (Colors$Lime_instance === null) {
      new Colors$Lime();
    }return Colors$Lime_instance;
  }
  function Colors$Yellow() {
    Colors$Yellow_instance = this;
    this.shade50 = new Color('#fffde7');
    this.shade100 = new Color('#fff9c4');
    this.shade200 = new Color('#fff59d');
    this.shade300 = new Color('#fff176');
    this.shade400 = new Color('#ffee58');
    this.shade500 = new Color('#ffeb3b');
    this.shade600 = new Color('#fdd835');
    this.shade700 = new Color('#fbc02d');
    this.shade800 = new Color('#f9a825');
    this.shade900 = new Color('#f57f17');
    this.accent100 = new Color('#ffff8d');
    this.accent200 = new Color('#ffff00');
    this.accent400 = new Color('#ffea00');
    this.accent700 = new Color('#ffd600');
  }
  Colors$Yellow.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Yellow',
    interfaces: []
  };
  var Colors$Yellow_instance = null;
  function Colors$Yellow_getInstance() {
    if (Colors$Yellow_instance === null) {
      new Colors$Yellow();
    }return Colors$Yellow_instance;
  }
  function Colors$Amber() {
    Colors$Amber_instance = this;
    this.shade50 = new Color('#fff8e1');
    this.shade100 = new Color('#ffecb3');
    this.shade200 = new Color('#ffe082');
    this.shade300 = new Color('#ffd54f');
    this.shade400 = new Color('#ffca28');
    this.shade500 = new Color('#ffc107');
    this.shade600 = new Color('#ffb300');
    this.shade700 = new Color('#ffa000');
    this.shade800 = new Color('#ff8f00');
    this.shade900 = new Color('#ff6f00');
    this.accent100 = new Color('#ffe57f');
    this.accent200 = new Color('#ffd740');
    this.accent400 = new Color('#ffc400');
    this.accent700 = new Color('#ffab00');
  }
  Colors$Amber.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Amber',
    interfaces: []
  };
  var Colors$Amber_instance = null;
  function Colors$Amber_getInstance() {
    if (Colors$Amber_instance === null) {
      new Colors$Amber();
    }return Colors$Amber_instance;
  }
  function Colors$Orange() {
    Colors$Orange_instance = this;
    this.shade50 = new Color('#fff3e0');
    this.shade100 = new Color('#ffe0b2');
    this.shade200 = new Color('#ffcc80');
    this.shade300 = new Color('#ffb74d');
    this.shade400 = new Color('#ffa726');
    this.shade500 = new Color('#ff9800');
    this.shade600 = new Color('#fb8c00');
    this.shade700 = new Color('#f57c00');
    this.shade800 = new Color('#ef6c00');
    this.shade900 = new Color('#e65100');
    this.accent100 = new Color('#ffd180');
    this.accent200 = new Color('#ffab40');
    this.accent400 = new Color('#ff9100');
    this.accent700 = new Color('#ff6d00');
  }
  Colors$Orange.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Orange',
    interfaces: []
  };
  var Colors$Orange_instance = null;
  function Colors$Orange_getInstance() {
    if (Colors$Orange_instance === null) {
      new Colors$Orange();
    }return Colors$Orange_instance;
  }
  function Colors$DeepOrange() {
    Colors$DeepOrange_instance = this;
    this.shade50 = new Color('#fbe9e7');
    this.shade100 = new Color('#ffccbc');
    this.shade200 = new Color('#ffab91');
    this.shade300 = new Color('#ff8a65');
    this.shade400 = new Color('#ff7043');
    this.shade500 = new Color('#ff5722');
    this.shade600 = new Color('#f4511e');
    this.shade700 = new Color('#e64a19');
    this.shade800 = new Color('#d84315');
    this.shade900 = new Color('#bf360c');
    this.accent100 = new Color('#ff9e80');
    this.accent200 = new Color('#ff6e40');
    this.accent400 = new Color('#ff3d00');
    this.accent700 = new Color('#dd2c00');
  }
  Colors$DeepOrange.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DeepOrange',
    interfaces: []
  };
  var Colors$DeepOrange_instance = null;
  function Colors$DeepOrange_getInstance() {
    if (Colors$DeepOrange_instance === null) {
      new Colors$DeepOrange();
    }return Colors$DeepOrange_instance;
  }
  function Colors$Brown() {
    Colors$Brown_instance = this;
    this.shade50 = new Color('#efebe9');
    this.shade100 = new Color('#d7ccc8');
    this.shade200 = new Color('#bcaaa4');
    this.shade300 = new Color('#a1887f');
    this.shade400 = new Color('#8d6e63');
    this.shade500 = new Color('#795548');
    this.shade600 = new Color('#6d4c41');
    this.shade700 = new Color('#5d4037');
    this.shade800 = new Color('#4e342e');
    this.shade900 = new Color('#3E2723');
  }
  Colors$Brown.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Brown',
    interfaces: []
  };
  var Colors$Brown_instance = null;
  function Colors$Brown_getInstance() {
    if (Colors$Brown_instance === null) {
      new Colors$Brown();
    }return Colors$Brown_instance;
  }
  function Colors$Grey() {
    Colors$Grey_instance = this;
    this.shade50 = new Color('#fafafa');
    this.shade100 = new Color('#f5f5f5');
    this.shade200 = new Color('#eeeeee');
    this.shade300 = new Color('#e0e0e0');
    this.shade400 = new Color('#bdbdbd');
    this.shade500 = new Color('#9e9e9e');
    this.shade600 = new Color('#757575');
    this.shade700 = new Color('#616161');
    this.shade800 = new Color('#424242');
    this.shade900 = new Color('#212121');
  }
  Colors$Grey.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Grey',
    interfaces: []
  };
  var Colors$Grey_instance = null;
  function Colors$Grey_getInstance() {
    if (Colors$Grey_instance === null) {
      new Colors$Grey();
    }return Colors$Grey_instance;
  }
  function Colors$BlueGrey() {
    Colors$BlueGrey_instance = this;
    this.shade50 = new Color('#eceff1');
    this.shade100 = new Color('#cfd8dc');
    this.shade200 = new Color('#b0bec5');
    this.shade300 = new Color('#90a4ae');
    this.shade400 = new Color('#78909c');
    this.shade500 = new Color('#607d8b');
    this.shade600 = new Color('#546e7a');
    this.shade700 = new Color('#455a64');
    this.shade800 = new Color('#37474f');
    this.shade900 = new Color('#263238');
  }
  Colors$BlueGrey.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BlueGrey',
    interfaces: []
  };
  var Colors$BlueGrey_instance = null;
  function Colors$BlueGrey_getInstance() {
    if (Colors$BlueGrey_instance === null) {
      new Colors$BlueGrey();
    }return Colors$BlueGrey_instance;
  }
  function Colors$Companion() {
    Colors$Companion_instance = this;
    this.black = new Color('#000000');
    this.white = new Color('#ffffff');
  }
  Colors$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Colors$Companion_instance = null;
  function Colors$Companion_getInstance() {
    if (Colors$Companion_instance === null) {
      new Colors$Companion();
    }return Colors$Companion_instance;
  }
  Colors.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Colors',
    interfaces: []
  };
  var containerComponent;
  function MContainerProps() {
  }
  MContainerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MContainerProps',
    interfaces: []
  };
  function mContainer$lambda(closure$component, closure$disableGutters, closure$fixed, closure$maxWidth, closure$className, closure$handler) {
    return function ($receiver) {
      var tmp$;
      $receiver.attrs.component = closure$component;
      $receiver.attrs.disableGutters = closure$disableGutters;
      $receiver.attrs.fixed = closure$fixed;
      $receiver.attrs.maxWidth = (tmp$ = closure$maxWidth != null ? closure$maxWidth.toString() : null) != null ? tmp$ : false;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mContainer($receiver, maxWidth, fixed, disableGutters, component, className, handler) {
    if (maxWidth === void 0)
      maxWidth = Breakpoint$lg_getInstance();
    if (fixed === void 0)
      fixed = false;
    if (disableGutters === void 0)
      disableGutters = false;
    if (component === void 0)
      component = 'div';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, containerComponent, void 0, mContainer$lambda(component, disableGutters, fixed, maxWidth, className, handler));
  }
  var cssBaselineComponent;
  function mCssBaseline$lambda($receiver) {
    return Unit;
  }
  function mCssBaseline($receiver) {
    return child($receiver, cssBaselineComponent, mCssBaseline$lambda);
  }
  var dividerComponent;
  function MDividerOrientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDividerOrientation_initFields() {
    MDividerOrientation_initFields = function () {
    };
    MDividerOrientation$horizontal_instance = new MDividerOrientation('horizontal', 0);
    MDividerOrientation$vertical_instance = new MDividerOrientation('vertical', 1);
  }
  var MDividerOrientation$horizontal_instance;
  function MDividerOrientation$horizontal_getInstance() {
    MDividerOrientation_initFields();
    return MDividerOrientation$horizontal_instance;
  }
  var MDividerOrientation$vertical_instance;
  function MDividerOrientation$vertical_getInstance() {
    MDividerOrientation_initFields();
    return MDividerOrientation$vertical_instance;
  }
  MDividerOrientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDividerOrientation',
    interfaces: [Enum]
  };
  function MDividerOrientation$values() {
    return [MDividerOrientation$horizontal_getInstance(), MDividerOrientation$vertical_getInstance()];
  }
  MDividerOrientation.values = MDividerOrientation$values;
  function MDividerOrientation$valueOf(name) {
    switch (name) {
      case 'horizontal':
        return MDividerOrientation$horizontal_getInstance();
      case 'vertical':
        return MDividerOrientation$vertical_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MDividerOrientation.' + name);
    }
  }
  MDividerOrientation.valueOf_61zpoe$ = MDividerOrientation$valueOf;
  function MDividerVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDividerVariant_initFields() {
    MDividerVariant_initFields = function () {
    };
    MDividerVariant$fullWidth_instance = new MDividerVariant('fullWidth', 0);
    MDividerVariant$inset_instance = new MDividerVariant('inset', 1);
    MDividerVariant$middle_instance = new MDividerVariant('middle', 2);
  }
  var MDividerVariant$fullWidth_instance;
  function MDividerVariant$fullWidth_getInstance() {
    MDividerVariant_initFields();
    return MDividerVariant$fullWidth_instance;
  }
  var MDividerVariant$inset_instance;
  function MDividerVariant$inset_getInstance() {
    MDividerVariant_initFields();
    return MDividerVariant$inset_instance;
  }
  var MDividerVariant$middle_instance;
  function MDividerVariant$middle_getInstance() {
    MDividerVariant_initFields();
    return MDividerVariant$middle_instance;
  }
  MDividerVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDividerVariant',
    interfaces: [Enum]
  };
  function MDividerVariant$values() {
    return [MDividerVariant$fullWidth_getInstance(), MDividerVariant$inset_getInstance(), MDividerVariant$middle_getInstance()];
  }
  MDividerVariant.values = MDividerVariant$values;
  function MDividerVariant$valueOf(name) {
    switch (name) {
      case 'fullWidth':
        return MDividerVariant$fullWidth_getInstance();
      case 'inset':
        return MDividerVariant$inset_getInstance();
      case 'middle':
        return MDividerVariant$middle_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MDividerVariant.' + name);
    }
  }
  MDividerVariant.valueOf_61zpoe$ = MDividerVariant$valueOf;
  function MDividerProps() {
  }
  MDividerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDividerProps',
    interfaces: []
  };
  var orientation;
  var orientation_metadata = new PropertyMetadata('orientation');
  function get_orientation($receiver) {
    return orientation.getValue_lrcp0p$($receiver, orientation_metadata);
  }
  function set_orientation($receiver, orientation_0) {
    orientation.setValue_9rddgb$($receiver, orientation_metadata, orientation_0);
  }
  var variant_3;
  var variant_metadata_3 = new PropertyMetadata('variant');
  function get_variant_3($receiver) {
    return variant_3.getValue_lrcp0p$($receiver, variant_metadata_3);
  }
  function set_variant_3($receiver, variant) {
    variant_3.setValue_9rddgb$($receiver, variant_metadata_3, variant);
  }
  function mDivider$lambda(closure$absolute, closure$component, closure$light, closure$orientation, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.absolute = closure$absolute;
      $receiver.attrs.component = closure$component;
      $receiver.attrs.light = closure$light;
      set_orientation($receiver.attrs, closure$orientation);
      set_variant_3($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDivider($receiver, variant, light, absolute, orientation, component, addAsChild, className, handler) {
    if (variant === void 0)
      variant = MDividerVariant$fullWidth_getInstance();
    if (light === void 0)
      light = false;
    if (absolute === void 0)
      absolute = false;
    if (orientation === void 0)
      orientation = MDividerOrientation$horizontal_getInstance();
    if (component === void 0)
      component = 'hr';
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, dividerComponent, addAsChild, mDivider$lambda(absolute, component, light, orientation, variant, className, handler));
  }
  var drawerComponent;
  function MDrawerAnchor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDrawerAnchor_initFields() {
    MDrawerAnchor_initFields = function () {
    };
    MDrawerAnchor$left_instance = new MDrawerAnchor('left', 0);
    MDrawerAnchor$top_instance = new MDrawerAnchor('top', 1);
    MDrawerAnchor$right_instance = new MDrawerAnchor('right', 2);
    MDrawerAnchor$bottom_instance = new MDrawerAnchor('bottom', 3);
  }
  var MDrawerAnchor$left_instance;
  function MDrawerAnchor$left_getInstance() {
    MDrawerAnchor_initFields();
    return MDrawerAnchor$left_instance;
  }
  var MDrawerAnchor$top_instance;
  function MDrawerAnchor$top_getInstance() {
    MDrawerAnchor_initFields();
    return MDrawerAnchor$top_instance;
  }
  var MDrawerAnchor$right_instance;
  function MDrawerAnchor$right_getInstance() {
    MDrawerAnchor_initFields();
    return MDrawerAnchor$right_instance;
  }
  var MDrawerAnchor$bottom_instance;
  function MDrawerAnchor$bottom_getInstance() {
    MDrawerAnchor_initFields();
    return MDrawerAnchor$bottom_instance;
  }
  MDrawerAnchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDrawerAnchor',
    interfaces: [Enum]
  };
  function MDrawerAnchor$values() {
    return [MDrawerAnchor$left_getInstance(), MDrawerAnchor$top_getInstance(), MDrawerAnchor$right_getInstance(), MDrawerAnchor$bottom_getInstance()];
  }
  MDrawerAnchor.values = MDrawerAnchor$values;
  function MDrawerAnchor$valueOf(name) {
    switch (name) {
      case 'left':
        return MDrawerAnchor$left_getInstance();
      case 'top':
        return MDrawerAnchor$top_getInstance();
      case 'right':
        return MDrawerAnchor$right_getInstance();
      case 'bottom':
        return MDrawerAnchor$bottom_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MDrawerAnchor.' + name);
    }
  }
  MDrawerAnchor.valueOf_61zpoe$ = MDrawerAnchor$valueOf;
  function MDrawerVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MDrawerVariant_initFields() {
    MDrawerVariant_initFields = function () {
    };
    MDrawerVariant$permanent_instance = new MDrawerVariant('permanent', 0);
    MDrawerVariant$persistent_instance = new MDrawerVariant('persistent', 1);
    MDrawerVariant$temporary_instance = new MDrawerVariant('temporary', 2);
  }
  var MDrawerVariant$permanent_instance;
  function MDrawerVariant$permanent_getInstance() {
    MDrawerVariant_initFields();
    return MDrawerVariant$permanent_instance;
  }
  var MDrawerVariant$persistent_instance;
  function MDrawerVariant$persistent_getInstance() {
    MDrawerVariant_initFields();
    return MDrawerVariant$persistent_instance;
  }
  var MDrawerVariant$temporary_instance;
  function MDrawerVariant$temporary_getInstance() {
    MDrawerVariant_initFields();
    return MDrawerVariant$temporary_instance;
  }
  MDrawerVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MDrawerVariant',
    interfaces: [Enum]
  };
  function MDrawerVariant$values() {
    return [MDrawerVariant$permanent_getInstance(), MDrawerVariant$persistent_getInstance(), MDrawerVariant$temporary_getInstance()];
  }
  MDrawerVariant.values = MDrawerVariant$values;
  function MDrawerVariant$valueOf(name) {
    switch (name) {
      case 'permanent':
        return MDrawerVariant$permanent_getInstance();
      case 'persistent':
        return MDrawerVariant$persistent_getInstance();
      case 'temporary':
        return MDrawerVariant$temporary_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MDrawerVariant.' + name);
    }
  }
  MDrawerVariant.valueOf_61zpoe$ = MDrawerVariant$valueOf;
  function MDrawerProps() {
  }
  MDrawerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDrawerProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var anchor;
  var anchor_metadata = new PropertyMetadata('anchor');
  function get_anchor($receiver) {
    return anchor.getValue_lrcp0p$($receiver, anchor_metadata);
  }
  function set_anchor($receiver, anchor_0) {
    anchor.setValue_9rddgb$($receiver, anchor_metadata, anchor_0);
  }
  var transitionDuration_0;
  var transitionDuration_metadata_0 = new PropertyMetadata('transitionDuration');
  function get_transitionDuration_0($receiver) {
    return transitionDuration_0.getValue_lrcp0p$($receiver, transitionDuration_metadata_0);
  }
  function set_transitionDuration_0($receiver, transitionDuration) {
    transitionDuration_0.setValue_9rddgb$($receiver, transitionDuration_metadata_0, transitionDuration);
  }
  var variant_4;
  var variant_metadata_4 = new PropertyMetadata('variant');
  function get_variant_4($receiver) {
    return variant_4.getValue_lrcp0p$($receiver, variant_metadata_4);
  }
  function set_variant_4($receiver, variant) {
    variant_4.setValue_9rddgb$($receiver, variant_metadata_4, variant);
  }
  function mDrawer$lambda(closure$anchor, closure$elevation, closure$modalProps, closure$onClose, closure$open, closure$paperProps, closure$slideProps, closure$variant, closure$transitionDuration, closure$className, closure$handler) {
    return function ($receiver) {
      set_anchor($receiver.attrs, closure$anchor);
      $receiver.attrs.elevation = closure$elevation;
      if (closure$modalProps != null) {
        var it = closure$modalProps;
        $receiver.attrs.ModalProps = it;
      }if (closure$onClose != null) {
        var it_0 = closure$onClose;
        $receiver.attrs.onClose = it_0;
      }$receiver.attrs.open = closure$open;
      if (closure$paperProps != null) {
        var it_1 = closure$paperProps;
        $receiver.attrs.PaperProps = it_1;
      }if (closure$slideProps != null) {
        var it_2 = closure$slideProps;
        $receiver.attrs.SlideProps = it_2;
      }set_variant_4($receiver.attrs, closure$variant);
      if (closure$transitionDuration != null) {
        var it_3 = closure$transitionDuration;
        set_transitionDuration_0($receiver.attrs, it_3);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDrawer($receiver, open, anchor, variant, onClose, elevation, modalProps, paperProps, slideProps, transitionDuration, className, handler) {
    if (open === void 0)
      open = false;
    if (anchor === void 0)
      anchor = MDrawerAnchor$left_getInstance();
    if (variant === void 0)
      variant = MDrawerVariant$temporary_getInstance();
    if (onClose === void 0)
      onClose = null;
    if (elevation === void 0)
      elevation = 16;
    if (modalProps === void 0)
      modalProps = null;
    if (paperProps === void 0)
      paperProps = null;
    if (slideProps === void 0)
      slideProps = null;
    if (transitionDuration === void 0)
      transitionDuration = null;
    if (className === void 0)
      className = null;
    return createStyled($receiver, drawerComponent, void 0, mDrawer$lambda(anchor, elevation, modalProps, onClose, open, paperProps, slideProps, variant, transitionDuration, className, handler));
  }
  function EnumPropToString(enumValues, propNameOverride, childProp) {
    if (propNameOverride === void 0)
      propNameOverride = null;
    if (childProp === void 0)
      childProp = null;
    this.enumValues_0 = enumValues;
    this.propNameOverride_0 = propNameOverride;
    this.childProp_0 = childProp;
  }
  EnumPropToString.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var valAsString = valueAsString(property, thisRef, this.propNameOverride_0, this.childProp_0);
    var $receiver = this.enumValues_0;
    var first$result;
    first$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(toString(element), valAsString)) {
          first$result = element;
          break first$break;
        }}
      throw new NoSuchElementException_init('Array contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  };
  EnumPropToString.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var propName = (tmp$ = this.propNameOverride_0) != null ? tmp$ : property.callableName;
    if (this.childProp_0 == null) {
      thisRef[propName] = toString(value);
    } else {
      if (thisRef[propName] == undefined) {
        thisRef[propName] = {};
      }thisRef[propName][this.childProp_0] = toString(value);
    }
  };
  EnumPropToString.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumPropToString',
    interfaces: [ReadWriteProperty]
  };
  function EnumPropToStringNullable(enumValues, propNameOverride, childProp) {
    if (propNameOverride === void 0)
      propNameOverride = null;
    if (childProp === void 0)
      childProp = null;
    this.enumValues_0 = enumValues;
    this.propNameOverride_0 = propNameOverride;
    this.childProp_0 = childProp;
  }
  EnumPropToStringNullable.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$;
    var valAsString = valueAsString(property, thisRef, this.propNameOverride_0, this.childProp_0);
    if (valAsString != null) {
      var $receiver = this.enumValues_0;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
          var element = $receiver[tmp$_0];
          if (equals(toString(element), valAsString)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$ = firstOrNull$result;
    } else {
      tmp$ = null;
    }
    return tmp$;
  };
  EnumPropToStringNullable.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var propName = (tmp$ = this.propNameOverride_0) != null ? tmp$ : property.callableName;
    if (this.childProp_0 == null) {
      thisRef[propName] = value != null ? value.toString() : null;
    } else {
      if (thisRef[propName] == undefined) {
        thisRef[propName] = {};
      }thisRef[propName][this.childProp_0] = value != null ? value.toString() : null;
    }
  };
  EnumPropToStringNullable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumPropToStringNullable',
    interfaces: [ReadWriteProperty]
  };
  function valueAsString(property, thisRef, propNameOverride, childProp) {
    var tmp$, tmp$_0, tmp$_1;
    var propName = propNameOverride != null ? propNameOverride : property.callableName;
    if (childProp == null) {
      if (typeof thisRef[propName] === 'string') {
        tmp$_1 = (tmp$ = thisRef[propName]) == null || typeof tmp$ === 'string' ? tmp$ : throwCCE();
      } else {
        tmp$_1 = null;
      }
    } else {
      if (thisRef[propName] != undefined) {
        if (typeof thisRef[propName][childProp] === 'string') {
          tmp$_1 = (tmp$_0 = thisRef[propName][childProp]) == null || typeof tmp$_0 === 'string' ? tmp$_0 : throwCCE();
        } else {
          tmp$_1 = null;
        }
      } else {
        tmp$_1 = null;
      }
    }
    return tmp$_1;
  }
  var gridComponent;
  function MGridAlignContent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridAlignContent_initFields() {
    MGridAlignContent_initFields = function () {
    };
    MGridAlignContent$stretch_instance = new MGridAlignContent('stretch', 0);
    MGridAlignContent$center_instance = new MGridAlignContent('center', 1);
    MGridAlignContent$flexStart_instance = new MGridAlignContent('flexStart', 2);
    MGridAlignContent$flexEnd_instance = new MGridAlignContent('flexEnd', 3);
    MGridAlignContent$spaceBetween_instance = new MGridAlignContent('spaceBetween', 4);
    MGridAlignContent$spaceAround_instance = new MGridAlignContent('spaceAround', 5);
  }
  var MGridAlignContent$stretch_instance;
  function MGridAlignContent$stretch_getInstance() {
    MGridAlignContent_initFields();
    return MGridAlignContent$stretch_instance;
  }
  var MGridAlignContent$center_instance;
  function MGridAlignContent$center_getInstance() {
    MGridAlignContent_initFields();
    return MGridAlignContent$center_instance;
  }
  var MGridAlignContent$flexStart_instance;
  function MGridAlignContent$flexStart_getInstance() {
    MGridAlignContent_initFields();
    return MGridAlignContent$flexStart_instance;
  }
  var MGridAlignContent$flexEnd_instance;
  function MGridAlignContent$flexEnd_getInstance() {
    MGridAlignContent_initFields();
    return MGridAlignContent$flexEnd_instance;
  }
  var MGridAlignContent$spaceBetween_instance;
  function MGridAlignContent$spaceBetween_getInstance() {
    MGridAlignContent_initFields();
    return MGridAlignContent$spaceBetween_instance;
  }
  var MGridAlignContent$spaceAround_instance;
  function MGridAlignContent$spaceAround_getInstance() {
    MGridAlignContent_initFields();
    return MGridAlignContent$spaceAround_instance;
  }
  MGridAlignContent.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  MGridAlignContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridAlignContent',
    interfaces: [Enum]
  };
  function MGridAlignContent$values() {
    return [MGridAlignContent$stretch_getInstance(), MGridAlignContent$center_getInstance(), MGridAlignContent$flexStart_getInstance(), MGridAlignContent$flexEnd_getInstance(), MGridAlignContent$spaceBetween_getInstance(), MGridAlignContent$spaceAround_getInstance()];
  }
  MGridAlignContent.values = MGridAlignContent$values;
  function MGridAlignContent$valueOf(name) {
    switch (name) {
      case 'stretch':
        return MGridAlignContent$stretch_getInstance();
      case 'center':
        return MGridAlignContent$center_getInstance();
      case 'flexStart':
        return MGridAlignContent$flexStart_getInstance();
      case 'flexEnd':
        return MGridAlignContent$flexEnd_getInstance();
      case 'spaceBetween':
        return MGridAlignContent$spaceBetween_getInstance();
      case 'spaceAround':
        return MGridAlignContent$spaceAround_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridAlignContent.' + name);
    }
  }
  MGridAlignContent.valueOf_61zpoe$ = MGridAlignContent$valueOf;
  function MGridAlignItems(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridAlignItems_initFields() {
    MGridAlignItems_initFields = function () {
    };
    MGridAlignItems$stretch_instance = new MGridAlignItems('stretch', 0);
    MGridAlignItems$center_instance = new MGridAlignItems('center', 1);
    MGridAlignItems$flexStart_instance = new MGridAlignItems('flexStart', 2);
    MGridAlignItems$flexEnd_instance = new MGridAlignItems('flexEnd', 3);
    MGridAlignItems$baseline_instance = new MGridAlignItems('baseline', 4);
  }
  var MGridAlignItems$stretch_instance;
  function MGridAlignItems$stretch_getInstance() {
    MGridAlignItems_initFields();
    return MGridAlignItems$stretch_instance;
  }
  var MGridAlignItems$center_instance;
  function MGridAlignItems$center_getInstance() {
    MGridAlignItems_initFields();
    return MGridAlignItems$center_instance;
  }
  var MGridAlignItems$flexStart_instance;
  function MGridAlignItems$flexStart_getInstance() {
    MGridAlignItems_initFields();
    return MGridAlignItems$flexStart_instance;
  }
  var MGridAlignItems$flexEnd_instance;
  function MGridAlignItems$flexEnd_getInstance() {
    MGridAlignItems_initFields();
    return MGridAlignItems$flexEnd_instance;
  }
  var MGridAlignItems$baseline_instance;
  function MGridAlignItems$baseline_getInstance() {
    MGridAlignItems_initFields();
    return MGridAlignItems$baseline_instance;
  }
  MGridAlignItems.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  MGridAlignItems.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridAlignItems',
    interfaces: [Enum]
  };
  function MGridAlignItems$values() {
    return [MGridAlignItems$stretch_getInstance(), MGridAlignItems$center_getInstance(), MGridAlignItems$flexStart_getInstance(), MGridAlignItems$flexEnd_getInstance(), MGridAlignItems$baseline_getInstance()];
  }
  MGridAlignItems.values = MGridAlignItems$values;
  function MGridAlignItems$valueOf(name) {
    switch (name) {
      case 'stretch':
        return MGridAlignItems$stretch_getInstance();
      case 'center':
        return MGridAlignItems$center_getInstance();
      case 'flexStart':
        return MGridAlignItems$flexStart_getInstance();
      case 'flexEnd':
        return MGridAlignItems$flexEnd_getInstance();
      case 'baseline':
        return MGridAlignItems$baseline_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridAlignItems.' + name);
    }
  }
  MGridAlignItems.valueOf_61zpoe$ = MGridAlignItems$valueOf;
  function MGridDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridDirection_initFields() {
    MGridDirection_initFields = function () {
    };
    MGridDirection$row_instance = new MGridDirection('row', 0);
    MGridDirection$rowReverse_instance = new MGridDirection('rowReverse', 1);
    MGridDirection$column_instance = new MGridDirection('column', 2);
    MGridDirection$columnReverse_instance = new MGridDirection('columnReverse', 3);
  }
  var MGridDirection$row_instance;
  function MGridDirection$row_getInstance() {
    MGridDirection_initFields();
    return MGridDirection$row_instance;
  }
  var MGridDirection$rowReverse_instance;
  function MGridDirection$rowReverse_getInstance() {
    MGridDirection_initFields();
    return MGridDirection$rowReverse_instance;
  }
  var MGridDirection$column_instance;
  function MGridDirection$column_getInstance() {
    MGridDirection_initFields();
    return MGridDirection$column_instance;
  }
  var MGridDirection$columnReverse_instance;
  function MGridDirection$columnReverse_getInstance() {
    MGridDirection_initFields();
    return MGridDirection$columnReverse_instance;
  }
  MGridDirection.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  MGridDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridDirection',
    interfaces: [Enum]
  };
  function MGridDirection$values() {
    return [MGridDirection$row_getInstance(), MGridDirection$rowReverse_getInstance(), MGridDirection$column_getInstance(), MGridDirection$columnReverse_getInstance()];
  }
  MGridDirection.values = MGridDirection$values;
  function MGridDirection$valueOf(name) {
    switch (name) {
      case 'row':
        return MGridDirection$row_getInstance();
      case 'rowReverse':
        return MGridDirection$rowReverse_getInstance();
      case 'column':
        return MGridDirection$column_getInstance();
      case 'columnReverse':
        return MGridDirection$columnReverse_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridDirection.' + name);
    }
  }
  MGridDirection.valueOf_61zpoe$ = MGridDirection$valueOf;
  function MGridJustify(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridJustify_initFields() {
    MGridJustify_initFields = function () {
    };
    MGridJustify$flexStart_instance = new MGridJustify('flexStart', 0);
    MGridJustify$center_instance = new MGridJustify('center', 1);
    MGridJustify$flexEnd_instance = new MGridJustify('flexEnd', 2);
    MGridJustify$spaceBetween_instance = new MGridJustify('spaceBetween', 3);
    MGridJustify$spaceAround_instance = new MGridJustify('spaceAround', 4);
  }
  var MGridJustify$flexStart_instance;
  function MGridJustify$flexStart_getInstance() {
    MGridJustify_initFields();
    return MGridJustify$flexStart_instance;
  }
  var MGridJustify$center_instance;
  function MGridJustify$center_getInstance() {
    MGridJustify_initFields();
    return MGridJustify$center_instance;
  }
  var MGridJustify$flexEnd_instance;
  function MGridJustify$flexEnd_getInstance() {
    MGridJustify_initFields();
    return MGridJustify$flexEnd_instance;
  }
  var MGridJustify$spaceBetween_instance;
  function MGridJustify$spaceBetween_getInstance() {
    MGridJustify_initFields();
    return MGridJustify$spaceBetween_instance;
  }
  var MGridJustify$spaceAround_instance;
  function MGridJustify$spaceAround_getInstance() {
    MGridJustify_initFields();
    return MGridJustify$spaceAround_instance;
  }
  MGridJustify.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  MGridJustify.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridJustify',
    interfaces: [Enum]
  };
  function MGridJustify$values() {
    return [MGridJustify$flexStart_getInstance(), MGridJustify$center_getInstance(), MGridJustify$flexEnd_getInstance(), MGridJustify$spaceBetween_getInstance(), MGridJustify$spaceAround_getInstance()];
  }
  MGridJustify.values = MGridJustify$values;
  function MGridJustify$valueOf(name) {
    switch (name) {
      case 'flexStart':
        return MGridJustify$flexStart_getInstance();
      case 'center':
        return MGridJustify$center_getInstance();
      case 'flexEnd':
        return MGridJustify$flexEnd_getInstance();
      case 'spaceBetween':
        return MGridJustify$spaceBetween_getInstance();
      case 'spaceAround':
        return MGridJustify$spaceAround_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridJustify.' + name);
    }
  }
  MGridJustify.valueOf_61zpoe$ = MGridJustify$valueOf;
  function MGridSize(name, ordinal, sizeVal) {
    Enum.call(this);
    this.sizeVal_8be2vx$ = sizeVal;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridSize_initFields() {
    MGridSize_initFields = function () {
    };
    MGridSize$cellsFalse_instance = new MGridSize('cellsFalse', 0, false);
    MGridSize$cellsAuto_instance = new MGridSize('cellsAuto', 1, 'auto');
    MGridSize$cellsTrue_instance = new MGridSize('cellsTrue', 2, true);
    MGridSize$cells1_instance = new MGridSize('cells1', 3, 1);
    MGridSize$cells2_instance = new MGridSize('cells2', 4, 2);
    MGridSize$cells3_instance = new MGridSize('cells3', 5, 3);
    MGridSize$cells4_instance = new MGridSize('cells4', 6, 4);
    MGridSize$cells5_instance = new MGridSize('cells5', 7, 5);
    MGridSize$cells6_instance = new MGridSize('cells6', 8, 6);
    MGridSize$cells7_instance = new MGridSize('cells7', 9, 7);
    MGridSize$cells8_instance = new MGridSize('cells8', 10, 8);
    MGridSize$cells9_instance = new MGridSize('cells9', 11, 9);
    MGridSize$cells10_instance = new MGridSize('cells10', 12, 10);
    MGridSize$cells11_instance = new MGridSize('cells11', 13, 11);
    MGridSize$cells12_instance = new MGridSize('cells12', 14, 12);
  }
  var MGridSize$cellsFalse_instance;
  function MGridSize$cellsFalse_getInstance() {
    MGridSize_initFields();
    return MGridSize$cellsFalse_instance;
  }
  var MGridSize$cellsAuto_instance;
  function MGridSize$cellsAuto_getInstance() {
    MGridSize_initFields();
    return MGridSize$cellsAuto_instance;
  }
  var MGridSize$cellsTrue_instance;
  function MGridSize$cellsTrue_getInstance() {
    MGridSize_initFields();
    return MGridSize$cellsTrue_instance;
  }
  var MGridSize$cells1_instance;
  function MGridSize$cells1_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells1_instance;
  }
  var MGridSize$cells2_instance;
  function MGridSize$cells2_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells2_instance;
  }
  var MGridSize$cells3_instance;
  function MGridSize$cells3_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells3_instance;
  }
  var MGridSize$cells4_instance;
  function MGridSize$cells4_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells4_instance;
  }
  var MGridSize$cells5_instance;
  function MGridSize$cells5_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells5_instance;
  }
  var MGridSize$cells6_instance;
  function MGridSize$cells6_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells6_instance;
  }
  var MGridSize$cells7_instance;
  function MGridSize$cells7_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells7_instance;
  }
  var MGridSize$cells8_instance;
  function MGridSize$cells8_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells8_instance;
  }
  var MGridSize$cells9_instance;
  function MGridSize$cells9_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells9_instance;
  }
  var MGridSize$cells10_instance;
  function MGridSize$cells10_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells10_instance;
  }
  var MGridSize$cells11_instance;
  function MGridSize$cells11_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells11_instance;
  }
  var MGridSize$cells12_instance;
  function MGridSize$cells12_getInstance() {
    MGridSize_initFields();
    return MGridSize$cells12_instance;
  }
  MGridSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridSize',
    interfaces: [Enum]
  };
  function MGridSize$values() {
    return [MGridSize$cellsFalse_getInstance(), MGridSize$cellsAuto_getInstance(), MGridSize$cellsTrue_getInstance(), MGridSize$cells1_getInstance(), MGridSize$cells2_getInstance(), MGridSize$cells3_getInstance(), MGridSize$cells4_getInstance(), MGridSize$cells5_getInstance(), MGridSize$cells6_getInstance(), MGridSize$cells7_getInstance(), MGridSize$cells8_getInstance(), MGridSize$cells9_getInstance(), MGridSize$cells10_getInstance(), MGridSize$cells11_getInstance(), MGridSize$cells12_getInstance()];
  }
  MGridSize.values = MGridSize$values;
  function MGridSize$valueOf(name) {
    switch (name) {
      case 'cellsFalse':
        return MGridSize$cellsFalse_getInstance();
      case 'cellsAuto':
        return MGridSize$cellsAuto_getInstance();
      case 'cellsTrue':
        return MGridSize$cellsTrue_getInstance();
      case 'cells1':
        return MGridSize$cells1_getInstance();
      case 'cells2':
        return MGridSize$cells2_getInstance();
      case 'cells3':
        return MGridSize$cells3_getInstance();
      case 'cells4':
        return MGridSize$cells4_getInstance();
      case 'cells5':
        return MGridSize$cells5_getInstance();
      case 'cells6':
        return MGridSize$cells6_getInstance();
      case 'cells7':
        return MGridSize$cells7_getInstance();
      case 'cells8':
        return MGridSize$cells8_getInstance();
      case 'cells9':
        return MGridSize$cells9_getInstance();
      case 'cells10':
        return MGridSize$cells10_getInstance();
      case 'cells11':
        return MGridSize$cells11_getInstance();
      case 'cells12':
        return MGridSize$cells12_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridSize.' + name);
    }
  }
  MGridSize.valueOf_61zpoe$ = MGridSize$valueOf;
  function MGridWrap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridWrap_initFields() {
    MGridWrap_initFields = function () {
    };
    MGridWrap$noWrap_instance = new MGridWrap('noWrap', 0);
    MGridWrap$wrap_instance = new MGridWrap('wrap', 1);
    MGridWrap$wrapReverse_instance = new MGridWrap('wrapReverse', 2);
  }
  var MGridWrap$noWrap_instance;
  function MGridWrap$noWrap_getInstance() {
    MGridWrap_initFields();
    return MGridWrap$noWrap_instance;
  }
  var MGridWrap$wrap_instance;
  function MGridWrap$wrap_getInstance() {
    MGridWrap_initFields();
    return MGridWrap$wrap_instance;
  }
  var MGridWrap$wrapReverse_instance;
  function MGridWrap$wrapReverse_getInstance() {
    MGridWrap_initFields();
    return MGridWrap$wrapReverse_instance;
  }
  MGridWrap.prototype.toString = function () {
    var tmp$;
    switch (this.name) {
      case 'noWrap':
        tmp$ = 'nowrap';
        break;
      case 'wrap':
        tmp$ = 'wrap';
        break;
      case 'wrapReverse':
        tmp$ = 'wrap-reverse';
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  MGridWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridWrap',
    interfaces: [Enum]
  };
  function MGridWrap$values() {
    return [MGridWrap$noWrap_getInstance(), MGridWrap$wrap_getInstance(), MGridWrap$wrapReverse_getInstance()];
  }
  MGridWrap.values = MGridWrap$values;
  function MGridWrap$valueOf(name) {
    switch (name) {
      case 'noWrap':
        return MGridWrap$noWrap_getInstance();
      case 'wrap':
        return MGridWrap$wrap_getInstance();
      case 'wrapReverse':
        return MGridWrap$wrapReverse_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridWrap.' + name);
    }
  }
  MGridWrap.valueOf_61zpoe$ = MGridWrap$valueOf;
  function MGridSpacing(name, ordinal, size) {
    Enum.call(this);
    this.size_8be2vx$ = size;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MGridSpacing_initFields() {
    MGridSpacing_initFields = function () {
    };
    MGridSpacing$spacing0_instance = new MGridSpacing('spacing0', 0, 0);
    MGridSpacing$spacing1_instance = new MGridSpacing('spacing1', 1, 1);
    MGridSpacing$spacing2_instance = new MGridSpacing('spacing2', 2, 2);
    MGridSpacing$spacing3_instance = new MGridSpacing('spacing3', 3, 3);
    MGridSpacing$spacing4_instance = new MGridSpacing('spacing4', 4, 4);
    MGridSpacing$spacing5_instance = new MGridSpacing('spacing5', 5, 5);
    MGridSpacing$spacing6_instance = new MGridSpacing('spacing6', 6, 6);
    MGridSpacing$spacing7_instance = new MGridSpacing('spacing7', 7, 7);
    MGridSpacing$spacing8_instance = new MGridSpacing('spacing8', 8, 8);
    MGridSpacing$spacing9_instance = new MGridSpacing('spacing9', 9, 9);
    MGridSpacing$spacing10_instance = new MGridSpacing('spacing10', 10, 10);
  }
  var MGridSpacing$spacing0_instance;
  function MGridSpacing$spacing0_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing0_instance;
  }
  var MGridSpacing$spacing1_instance;
  function MGridSpacing$spacing1_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing1_instance;
  }
  var MGridSpacing$spacing2_instance;
  function MGridSpacing$spacing2_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing2_instance;
  }
  var MGridSpacing$spacing3_instance;
  function MGridSpacing$spacing3_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing3_instance;
  }
  var MGridSpacing$spacing4_instance;
  function MGridSpacing$spacing4_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing4_instance;
  }
  var MGridSpacing$spacing5_instance;
  function MGridSpacing$spacing5_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing5_instance;
  }
  var MGridSpacing$spacing6_instance;
  function MGridSpacing$spacing6_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing6_instance;
  }
  var MGridSpacing$spacing7_instance;
  function MGridSpacing$spacing7_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing7_instance;
  }
  var MGridSpacing$spacing8_instance;
  function MGridSpacing$spacing8_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing8_instance;
  }
  var MGridSpacing$spacing9_instance;
  function MGridSpacing$spacing9_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing9_instance;
  }
  var MGridSpacing$spacing10_instance;
  function MGridSpacing$spacing10_getInstance() {
    MGridSpacing_initFields();
    return MGridSpacing$spacing10_instance;
  }
  MGridSpacing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridSpacing',
    interfaces: [Enum]
  };
  function MGridSpacing$values() {
    return [MGridSpacing$spacing0_getInstance(), MGridSpacing$spacing1_getInstance(), MGridSpacing$spacing2_getInstance(), MGridSpacing$spacing3_getInstance(), MGridSpacing$spacing4_getInstance(), MGridSpacing$spacing5_getInstance(), MGridSpacing$spacing6_getInstance(), MGridSpacing$spacing7_getInstance(), MGridSpacing$spacing8_getInstance(), MGridSpacing$spacing9_getInstance(), MGridSpacing$spacing10_getInstance()];
  }
  MGridSpacing.values = MGridSpacing$values;
  function MGridSpacing$valueOf(name) {
    switch (name) {
      case 'spacing0':
        return MGridSpacing$spacing0_getInstance();
      case 'spacing1':
        return MGridSpacing$spacing1_getInstance();
      case 'spacing2':
        return MGridSpacing$spacing2_getInstance();
      case 'spacing3':
        return MGridSpacing$spacing3_getInstance();
      case 'spacing4':
        return MGridSpacing$spacing4_getInstance();
      case 'spacing5':
        return MGridSpacing$spacing5_getInstance();
      case 'spacing6':
        return MGridSpacing$spacing6_getInstance();
      case 'spacing7':
        return MGridSpacing$spacing7_getInstance();
      case 'spacing8':
        return MGridSpacing$spacing8_getInstance();
      case 'spacing9':
        return MGridSpacing$spacing9_getInstance();
      case 'spacing10':
        return MGridSpacing$spacing10_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MGridSpacing.' + name);
    }
  }
  MGridSpacing.valueOf_61zpoe$ = MGridSpacing$valueOf;
  function MGridBreakpoints(xs, sm, md, lg, xl) {
    if (xs === void 0)
      xs = MGridSize$cellsAuto_getInstance();
    if (sm === void 0)
      sm = MGridSize$cellsAuto_getInstance();
    if (md === void 0)
      md = MGridSize$cellsAuto_getInstance();
    if (lg === void 0)
      lg = MGridSize$cellsAuto_getInstance();
    if (xl === void 0)
      xl = MGridSize$cellsAuto_getInstance();
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
  }
  MGridBreakpoints.prototype.down_24saur$ = function (breakpoint, gridSize) {
    var tmp$;
    switch (breakpoint.name) {
      case 'xs':
        tmp$ = this.copy_27qu6g$(gridSize);
        break;
      case 'sm':
        tmp$ = this.copy_27qu6g$(gridSize, gridSize);
        break;
      case 'md':
        tmp$ = this.copy_27qu6g$(gridSize, gridSize, gridSize);
        break;
      case 'lg':
        tmp$ = this.copy_27qu6g$(gridSize, gridSize, gridSize, gridSize);
        break;
      case 'xl':
        tmp$ = this.copy_27qu6g$(gridSize, gridSize, gridSize, gridSize, gridSize);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  MGridBreakpoints.prototype.up_24saur$ = function (breakpoint, gridSize) {
    var tmp$;
    switch (breakpoint.name) {
      case 'xs':
        tmp$ = this.copy_27qu6g$(gridSize, gridSize, gridSize, gridSize, gridSize);
        break;
      case 'sm':
        tmp$ = this.copy_27qu6g$(void 0, gridSize, gridSize, gridSize, gridSize);
        break;
      case 'md':
        tmp$ = this.copy_27qu6g$(void 0, void 0, gridSize, gridSize, gridSize);
        break;
      case 'lg':
        tmp$ = this.copy_27qu6g$(void 0, void 0, void 0, gridSize, gridSize);
        break;
      case 'xl':
        tmp$ = this.copy_27qu6g$(void 0, void 0, void 0, void 0, gridSize);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  MGridBreakpoints.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MGridBreakpoints',
    interfaces: []
  };
  function MGridBreakpoints_init(defaultGridSize, $this) {
    $this = $this || Object.create(MGridBreakpoints.prototype);
    MGridBreakpoints.call($this, defaultGridSize, defaultGridSize, defaultGridSize, defaultGridSize, defaultGridSize);
    return $this;
  }
  MGridBreakpoints.prototype.component1 = function () {
    return this.xs;
  };
  MGridBreakpoints.prototype.component2 = function () {
    return this.sm;
  };
  MGridBreakpoints.prototype.component3 = function () {
    return this.md;
  };
  MGridBreakpoints.prototype.component4 = function () {
    return this.lg;
  };
  MGridBreakpoints.prototype.component5 = function () {
    return this.xl;
  };
  MGridBreakpoints.prototype.copy_27qu6g$ = function (xs, sm, md, lg, xl) {
    return new MGridBreakpoints(xs === void 0 ? this.xs : xs, sm === void 0 ? this.sm : sm, md === void 0 ? this.md : md, lg === void 0 ? this.lg : lg, xl === void 0 ? this.xl : xl);
  };
  MGridBreakpoints.prototype.toString = function () {
    return 'MGridBreakpoints(xs=' + Kotlin.toString(this.xs) + (', sm=' + Kotlin.toString(this.sm)) + (', md=' + Kotlin.toString(this.md)) + (', lg=' + Kotlin.toString(this.lg)) + (', xl=' + Kotlin.toString(this.xl)) + ')';
  };
  MGridBreakpoints.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.xs) | 0;
    result = result * 31 + Kotlin.hashCode(this.sm) | 0;
    result = result * 31 + Kotlin.hashCode(this.md) | 0;
    result = result * 31 + Kotlin.hashCode(this.lg) | 0;
    result = result * 31 + Kotlin.hashCode(this.xl) | 0;
    return result;
  };
  MGridBreakpoints.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.xs, other.xs) && Kotlin.equals(this.sm, other.sm) && Kotlin.equals(this.md, other.md) && Kotlin.equals(this.lg, other.lg) && Kotlin.equals(this.xl, other.xl)))));
  };
  function MGridProps() {
  }
  MGridProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MGridProps',
    interfaces: []
  };
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  function get_alignContent($receiver) {
    return alignContent.getValue_lrcp0p$($receiver, alignContent_metadata);
  }
  function set_alignContent($receiver, alignContent_0) {
    alignContent.setValue_9rddgb$($receiver, alignContent_metadata, alignContent_0);
  }
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  function get_alignItems($receiver) {
    return alignItems.getValue_lrcp0p$($receiver, alignItems_metadata);
  }
  function set_alignItems($receiver, alignItems_0) {
    alignItems.setValue_9rddgb$($receiver, alignItems_metadata, alignItems_0);
  }
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  function get_direction($receiver) {
    return direction.getValue_lrcp0p$($receiver, direction_metadata);
  }
  function set_direction($receiver, direction_0) {
    direction.setValue_9rddgb$($receiver, direction_metadata, direction_0);
  }
  var justify;
  var justify_metadata = new PropertyMetadata('justify');
  function get_justify($receiver) {
    return justify.getValue_lrcp0p$($receiver, justify_metadata);
  }
  function set_justify($receiver, justify_0) {
    justify.setValue_9rddgb$($receiver, justify_metadata, justify_0);
  }
  var lg;
  var lg_metadata = new PropertyMetadata('lg');
  function get_lg($receiver) {
    return lg.getValue_lrcp0p$($receiver, lg_metadata);
  }
  function set_lg($receiver, lg_0) {
    lg.setValue_9rddgb$($receiver, lg_metadata, lg_0);
  }
  var md;
  var md_metadata = new PropertyMetadata('md');
  function get_md($receiver) {
    return md.getValue_lrcp0p$($receiver, md_metadata);
  }
  function set_md($receiver, md_0) {
    md.setValue_9rddgb$($receiver, md_metadata, md_0);
  }
  var sm;
  var sm_metadata = new PropertyMetadata('sm');
  function get_sm($receiver) {
    return sm.getValue_lrcp0p$($receiver, sm_metadata);
  }
  function set_sm($receiver, sm_0) {
    sm.setValue_9rddgb$($receiver, sm_metadata, sm_0);
  }
  var spacing;
  var spacing_metadata = new PropertyMetadata('spacing');
  function get_spacing($receiver) {
    return spacing.getValue_lrcp0p$($receiver, spacing_metadata);
  }
  function set_spacing($receiver, spacing_0) {
    spacing.setValue_9rddgb$($receiver, spacing_metadata, spacing_0);
  }
  var wrap;
  var wrap_metadata = new PropertyMetadata('wrap');
  function get_wrap($receiver) {
    return wrap.getValue_lrcp0p$($receiver, wrap_metadata);
  }
  function set_wrap($receiver, wrap_0) {
    wrap.setValue_9rddgb$($receiver, wrap_metadata, wrap_0);
  }
  var xl;
  var xl_metadata = new PropertyMetadata('xl');
  function get_xl($receiver) {
    return xl.getValue_lrcp0p$($receiver, xl_metadata);
  }
  function set_xl($receiver, xl_0) {
    xl.setValue_9rddgb$($receiver, xl_metadata, xl_0);
  }
  var xs;
  var xs_metadata = new PropertyMetadata('xs');
  function get_xs($receiver) {
    return xs.getValue_lrcp0p$($receiver, xs_metadata);
  }
  function set_xs($receiver, xs_0) {
    xs.setValue_9rddgb$($receiver, xs_metadata, xs_0);
  }
  function GridSizeDelegate() {
  }
  GridSizeDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    tmp$ = thisRef[property.callableName];
    if (tmp$ == null)
      tmp$_0 = null;
    else if (equals(tmp$, undefined))
      tmp$_0 = null;
    else if (equals(tmp$, true))
      tmp$_0 = MGridSize$cellsTrue_getInstance();
    else if (equals(tmp$, false))
      tmp$_0 = MGridSize$cellsFalse_getInstance();
    else
      switch (tmp$) {
        case 1:
          tmp$_0 = MGridSize$cells1_getInstance();
          break;
        case 2:
          tmp$_0 = MGridSize$cells2_getInstance();
          break;
        case 3:
          tmp$_0 = MGridSize$cells3_getInstance();
          break;
        case 4:
          tmp$_0 = MGridSize$cells4_getInstance();
          break;
        case 5:
          tmp$_0 = MGridSize$cells5_getInstance();
          break;
        case 6:
          tmp$_0 = MGridSize$cells6_getInstance();
          break;
        case 7:
          tmp$_0 = MGridSize$cells7_getInstance();
          break;
        case 8:
          tmp$_0 = MGridSize$cells8_getInstance();
          break;
        case 9:
          tmp$_0 = MGridSize$cells9_getInstance();
          break;
        case 10:
          tmp$_0 = MGridSize$cells10_getInstance();
          break;
        case 11:
          tmp$_0 = MGridSize$cells11_getInstance();
          break;
        case 12:
          tmp$_0 = MGridSize$cells12_getInstance();
          break;
        default:tmp$_0 = MGridSize$cellsAuto_getInstance();
          break;
      }
    return tmp$_0;
  };
  GridSizeDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value != null ? value.sizeVal_8be2vx$ : null;
  };
  GridSizeDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridSizeDelegate',
    interfaces: [ReadWriteProperty]
  };
  function GridSpacingDelegate() {
  }
  GridSpacingDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    tmp$ = thisRef[property.callableName];
    if (tmp$ == null)
      tmp$_0 = null;
    else if (equals(tmp$, undefined))
      tmp$_0 = null;
    else
      switch (tmp$) {
        case 1:
          tmp$_0 = MGridSpacing$spacing1_getInstance();
          break;
        case 2:
          tmp$_0 = MGridSpacing$spacing2_getInstance();
          break;
        case 3:
          tmp$_0 = MGridSpacing$spacing3_getInstance();
          break;
        case 4:
          tmp$_0 = MGridSpacing$spacing4_getInstance();
          break;
        case 5:
          tmp$_0 = MGridSpacing$spacing5_getInstance();
          break;
        case 6:
          tmp$_0 = MGridSpacing$spacing6_getInstance();
          break;
        case 7:
          tmp$_0 = MGridSpacing$spacing7_getInstance();
          break;
        case 8:
          tmp$_0 = MGridSpacing$spacing8_getInstance();
          break;
        case 9:
          tmp$_0 = MGridSpacing$spacing9_getInstance();
          break;
        case 10:
          tmp$_0 = MGridSpacing$spacing10_getInstance();
          break;
        default:tmp$_0 = MGridSpacing$spacing0_getInstance();
          break;
      }
    return tmp$_0;
  };
  GridSpacingDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value != null ? value.size_8be2vx$ : null;
  };
  GridSpacingDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridSpacingDelegate',
    interfaces: [ReadWriteProperty]
  };
  function mGridContainer$lambda(closure$alignContent, closure$alignItems, closure$justify, closure$spacing, closure$wrap, closure$className, closure$handler) {
    return function ($receiver) {
      set_alignContent($receiver.attrs, closure$alignContent);
      set_alignItems($receiver.attrs, closure$alignItems);
      $receiver.attrs.container = true;
      set_justify($receiver.attrs, closure$justify);
      set_spacing($receiver.attrs, closure$spacing);
      set_wrap($receiver.attrs, closure$wrap);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGridContainer($receiver, spacing, alignContent, alignItems, justify, wrap, className, handler) {
    if (spacing === void 0)
      spacing = MGridSpacing$spacing0_getInstance();
    if (alignContent === void 0)
      alignContent = MGridAlignContent$stretch_getInstance();
    if (alignItems === void 0)
      alignItems = MGridAlignItems$stretch_getInstance();
    if (justify === void 0)
      justify = MGridJustify$flexStart_getInstance();
    if (wrap === void 0)
      wrap = MGridWrap$wrap_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, gridComponent, void 0, mGridContainer$lambda(alignContent, alignItems, justify, spacing, wrap, className, handler));
  }
  function mGridItem$lambda(closure$sm, closure$md, closure$lg, closure$xs, closure$xl, closure$zeroMinWidth, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.item = true;
      set_sm($receiver.attrs, closure$sm);
      set_md($receiver.attrs, closure$md);
      set_lg($receiver.attrs, closure$lg);
      set_xs($receiver.attrs, closure$xs);
      set_xl($receiver.attrs, closure$xl);
      if (closure$zeroMinWidth != null) {
        var it = closure$zeroMinWidth;
        $receiver.attrs.zeroMinWidth = it;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGridItem($receiver, xs, sm, md, lg, xl, zeroMinWidth, className, handler) {
    if (xs === void 0)
      xs = MGridSize$cellsFalse_getInstance();
    if (sm === void 0)
      sm = MGridSize$cellsFalse_getInstance();
    if (md === void 0)
      md = MGridSize$cellsFalse_getInstance();
    if (lg === void 0)
      lg = MGridSize$cellsFalse_getInstance();
    if (xl === void 0)
      xl = MGridSize$cellsFalse_getInstance();
    if (zeroMinWidth === void 0)
      zeroMinWidth = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, gridComponent, void 0, mGridItem$lambda(sm, md, lg, xs, xl, zeroMinWidth, className, handler));
  }
  function mGridItem_0($receiver, breakpoints, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mGridItem($receiver, breakpoints.xs, breakpoints.sm, breakpoints.md, breakpoints.lg, breakpoints.xl, null, className, handler);
  }
  var hiddenComponent;
  function MHiddenImplementation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MHiddenImplementation_initFields() {
    MHiddenImplementation_initFields = function () {
    };
    MHiddenImplementation$js_instance = new MHiddenImplementation('js', 0);
    MHiddenImplementation$css_instance = new MHiddenImplementation('css', 1);
  }
  var MHiddenImplementation$js_instance;
  function MHiddenImplementation$js_getInstance() {
    MHiddenImplementation_initFields();
    return MHiddenImplementation$js_instance;
  }
  var MHiddenImplementation$css_instance;
  function MHiddenImplementation$css_getInstance() {
    MHiddenImplementation_initFields();
    return MHiddenImplementation$css_instance;
  }
  MHiddenImplementation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MHiddenImplementation',
    interfaces: [Enum]
  };
  function MHiddenImplementation$values() {
    return [MHiddenImplementation$js_getInstance(), MHiddenImplementation$css_getInstance()];
  }
  MHiddenImplementation.values = MHiddenImplementation$values;
  function MHiddenImplementation$valueOf(name) {
    switch (name) {
      case 'js':
        return MHiddenImplementation$js_getInstance();
      case 'css':
        return MHiddenImplementation$css_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MHiddenImplementation.' + name);
    }
  }
  MHiddenImplementation.valueOf_61zpoe$ = MHiddenImplementation$valueOf;
  function MHiddenProps() {
  }
  MHiddenProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MHiddenProps',
    interfaces: []
  };
  var initialWidth;
  var initialWidth_metadata = new PropertyMetadata('initialWidth');
  function get_initialWidth($receiver) {
    return initialWidth.getValue_lrcp0p$($receiver, initialWidth_metadata);
  }
  function set_initialWidth($receiver, initialWidth_0) {
    initialWidth.setValue_9rddgb$($receiver, initialWidth_metadata, initialWidth_0);
  }
  var implementation;
  var implementation_metadata = new PropertyMetadata('implementation');
  function get_implementation($receiver) {
    return implementation.getValue_lrcp0p$($receiver, implementation_metadata);
  }
  function set_implementation($receiver, implementation_0) {
    implementation.setValue_9rddgb$($receiver, implementation_metadata, implementation_0);
  }
  function mHidden$lambda(closure$implementation, closure$initialWidth, closure$lgDown, closure$lgUp, closure$mdDown, closure$mdUp, closure$only, closure$smDown, closure$smUp, closure$xlDown, closure$xlUp, closure$xsDown, closure$xsUp, closure$className, closure$handler) {
    return function ($receiver) {
      set_implementation($receiver.attrs, closure$implementation);
      if (closure$initialWidth != null) {
        var it = closure$initialWidth;
        set_initialWidth($receiver.attrs, it);
      }$receiver.attrs.lgDown = closure$lgDown;
      $receiver.attrs.lgUp = closure$lgUp;
      $receiver.attrs.mdDown = closure$mdDown;
      $receiver.attrs.mdUp = closure$mdUp;
      $receiver.attrs.only = closure$only;
      $receiver.attrs.smDown = closure$smDown;
      $receiver.attrs.smUp = closure$smUp;
      $receiver.attrs.xlDown = closure$xlDown;
      $receiver.attrs.xlUp = closure$xlUp;
      $receiver.attrs.xsDown = closure$xsDown;
      $receiver.attrs.xsUp = closure$xsUp;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mHidden($receiver, only, xsUp, smUp, mdUp, lgUp, xlUp, xsDown, smDown, mdDown, lgDown, xlDown, className, implementation, initialWidth, handler) {
    if (only === void 0) {
      only = [];
    }if (xsUp === void 0)
      xsUp = false;
    if (smUp === void 0)
      smUp = false;
    if (mdUp === void 0)
      mdUp = false;
    if (lgUp === void 0)
      lgUp = false;
    if (xlUp === void 0)
      xlUp = false;
    if (xsDown === void 0)
      xsDown = false;
    if (smDown === void 0)
      smDown = false;
    if (mdDown === void 0)
      mdDown = false;
    if (lgDown === void 0)
      lgDown = false;
    if (xlDown === void 0)
      xlDown = false;
    if (className === void 0)
      className = null;
    if (implementation === void 0)
      implementation = MHiddenImplementation$js_getInstance();
    if (initialWidth === void 0)
      initialWidth = null;
    return createStyled($receiver, hiddenComponent, void 0, mHidden$lambda(implementation, initialWidth, lgDown, lgUp, mdDown, mdUp, only, smDown, smUp, xlDown, xlUp, xsDown, xsUp, className, handler));
  }
  var iconComponent;
  function MIconColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MIconColor_initFields() {
    MIconColor_initFields = function () {
    };
    MIconColor$inherit_instance = new MIconColor('inherit', 0);
    MIconColor$primary_instance = new MIconColor('primary', 1);
    MIconColor$secondary_instance = new MIconColor('secondary', 2);
    MIconColor$action_instance = new MIconColor('action', 3);
    MIconColor$error_instance = new MIconColor('error', 4);
    MIconColor$disabled_instance = new MIconColor('disabled', 5);
  }
  var MIconColor$inherit_instance;
  function MIconColor$inherit_getInstance() {
    MIconColor_initFields();
    return MIconColor$inherit_instance;
  }
  var MIconColor$primary_instance;
  function MIconColor$primary_getInstance() {
    MIconColor_initFields();
    return MIconColor$primary_instance;
  }
  var MIconColor$secondary_instance;
  function MIconColor$secondary_getInstance() {
    MIconColor_initFields();
    return MIconColor$secondary_instance;
  }
  var MIconColor$action_instance;
  function MIconColor$action_getInstance() {
    MIconColor_initFields();
    return MIconColor$action_instance;
  }
  var MIconColor$error_instance;
  function MIconColor$error_getInstance() {
    MIconColor_initFields();
    return MIconColor$error_instance;
  }
  var MIconColor$disabled_instance;
  function MIconColor$disabled_getInstance() {
    MIconColor_initFields();
    return MIconColor$disabled_instance;
  }
  MIconColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MIconColor',
    interfaces: [Enum]
  };
  function MIconColor$values() {
    return [MIconColor$inherit_getInstance(), MIconColor$primary_getInstance(), MIconColor$secondary_getInstance(), MIconColor$action_getInstance(), MIconColor$error_getInstance(), MIconColor$disabled_getInstance()];
  }
  MIconColor.values = MIconColor$values;
  function MIconColor$valueOf(name) {
    switch (name) {
      case 'inherit':
        return MIconColor$inherit_getInstance();
      case 'primary':
        return MIconColor$primary_getInstance();
      case 'secondary':
        return MIconColor$secondary_getInstance();
      case 'action':
        return MIconColor$action_getInstance();
      case 'error':
        return MIconColor$error_getInstance();
      case 'disabled':
        return MIconColor$disabled_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MIconColor.' + name);
    }
  }
  MIconColor.valueOf_61zpoe$ = MIconColor$valueOf;
  function MIconFontSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MIconFontSize_initFields() {
    MIconFontSize_initFields = function () {
    };
    MIconFontSize$inherit_instance = new MIconFontSize('inherit', 0);
    MIconFontSize$default_instance = new MIconFontSize('default', 1);
    MIconFontSize$small_instance = new MIconFontSize('small', 2);
    MIconFontSize$large_instance = new MIconFontSize('large', 3);
  }
  var MIconFontSize$inherit_instance;
  function MIconFontSize$inherit_getInstance() {
    MIconFontSize_initFields();
    return MIconFontSize$inherit_instance;
  }
  var MIconFontSize$default_instance;
  function MIconFontSize$default_getInstance() {
    MIconFontSize_initFields();
    return MIconFontSize$default_instance;
  }
  var MIconFontSize$small_instance;
  function MIconFontSize$small_getInstance() {
    MIconFontSize_initFields();
    return MIconFontSize$small_instance;
  }
  var MIconFontSize$large_instance;
  function MIconFontSize$large_getInstance() {
    MIconFontSize_initFields();
    return MIconFontSize$large_instance;
  }
  MIconFontSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MIconFontSize',
    interfaces: [Enum]
  };
  function MIconFontSize$values() {
    return [MIconFontSize$inherit_getInstance(), MIconFontSize$default_getInstance(), MIconFontSize$small_getInstance(), MIconFontSize$large_getInstance()];
  }
  MIconFontSize.values = MIconFontSize$values;
  function MIconFontSize$valueOf(name) {
    switch (name) {
      case 'inherit':
        return MIconFontSize$inherit_getInstance();
      case 'default':
        return MIconFontSize$default_getInstance();
      case 'small':
        return MIconFontSize$small_getInstance();
      case 'large':
        return MIconFontSize$large_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MIconFontSize.' + name);
    }
  }
  MIconFontSize.valueOf_61zpoe$ = MIconFontSize$valueOf;
  function MIconProps() {
  }
  MIconProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MIconProps',
    interfaces: []
  };
  var color_4;
  var color_metadata_4 = new PropertyMetadata('color');
  function get_color_4($receiver) {
    return color_4.getValue_lrcp0p$($receiver, color_metadata_4);
  }
  function set_color_4($receiver, color) {
    color_4.setValue_9rddgb$($receiver, color_metadata_4, color);
  }
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
  function get_fontSize($receiver) {
    return fontSize.getValue_lrcp0p$($receiver, fontSize_metadata);
  }
  function set_fontSize($receiver, fontSize_0) {
    fontSize.setValue_9rddgb$($receiver, fontSize_metadata, fontSize_0);
  }
  function mIcon$lambda(closure$color, closure$fontSize, closure$iconName, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_4($receiver.attrs, closure$color);
      set_fontSize($receiver.attrs, closure$fontSize);
      $receiver.childList.add_11rb$(closure$iconName);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mIcon($receiver, iconName, color, fontSize, addAsChild, className, handler) {
    if (color === void 0)
      color = MIconColor$inherit_getInstance();
    if (fontSize === void 0)
      fontSize = MIconFontSize$default_getInstance();
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, iconComponent, addAsChild, mIcon$lambda(color, fontSize, iconName, className, handler));
  }
  var linearProgressComponent;
  function MLinearProgressColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MLinearProgressColor_initFields() {
    MLinearProgressColor_initFields = function () {
    };
    MLinearProgressColor$primary_instance = new MLinearProgressColor('primary', 0);
    MLinearProgressColor$secondary_instance = new MLinearProgressColor('secondary', 1);
  }
  var MLinearProgressColor$primary_instance;
  function MLinearProgressColor$primary_getInstance() {
    MLinearProgressColor_initFields();
    return MLinearProgressColor$primary_instance;
  }
  var MLinearProgressColor$secondary_instance;
  function MLinearProgressColor$secondary_getInstance() {
    MLinearProgressColor_initFields();
    return MLinearProgressColor$secondary_instance;
  }
  MLinearProgressColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MLinearProgressColor',
    interfaces: [Enum]
  };
  function MLinearProgressColor$values() {
    return [MLinearProgressColor$primary_getInstance(), MLinearProgressColor$secondary_getInstance()];
  }
  MLinearProgressColor.values = MLinearProgressColor$values;
  function MLinearProgressColor$valueOf(name) {
    switch (name) {
      case 'primary':
        return MLinearProgressColor$primary_getInstance();
      case 'secondary':
        return MLinearProgressColor$secondary_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MLinearProgressColor.' + name);
    }
  }
  MLinearProgressColor.valueOf_61zpoe$ = MLinearProgressColor$valueOf;
  function MLinearProgressVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MLinearProgressVariant_initFields() {
    MLinearProgressVariant_initFields = function () {
    };
    MLinearProgressVariant$determinate_instance = new MLinearProgressVariant('determinate', 0);
    MLinearProgressVariant$indeterminate_instance = new MLinearProgressVariant('indeterminate', 1);
    MLinearProgressVariant$buffer_instance = new MLinearProgressVariant('buffer', 2);
    MLinearProgressVariant$query_instance = new MLinearProgressVariant('query', 3);
  }
  var MLinearProgressVariant$determinate_instance;
  function MLinearProgressVariant$determinate_getInstance() {
    MLinearProgressVariant_initFields();
    return MLinearProgressVariant$determinate_instance;
  }
  var MLinearProgressVariant$indeterminate_instance;
  function MLinearProgressVariant$indeterminate_getInstance() {
    MLinearProgressVariant_initFields();
    return MLinearProgressVariant$indeterminate_instance;
  }
  var MLinearProgressVariant$buffer_instance;
  function MLinearProgressVariant$buffer_getInstance() {
    MLinearProgressVariant_initFields();
    return MLinearProgressVariant$buffer_instance;
  }
  var MLinearProgressVariant$query_instance;
  function MLinearProgressVariant$query_getInstance() {
    MLinearProgressVariant_initFields();
    return MLinearProgressVariant$query_instance;
  }
  MLinearProgressVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MLinearProgressVariant',
    interfaces: [Enum]
  };
  function MLinearProgressVariant$values() {
    return [MLinearProgressVariant$determinate_getInstance(), MLinearProgressVariant$indeterminate_getInstance(), MLinearProgressVariant$buffer_getInstance(), MLinearProgressVariant$query_getInstance()];
  }
  MLinearProgressVariant.values = MLinearProgressVariant$values;
  function MLinearProgressVariant$valueOf(name) {
    switch (name) {
      case 'determinate':
        return MLinearProgressVariant$determinate_getInstance();
      case 'indeterminate':
        return MLinearProgressVariant$indeterminate_getInstance();
      case 'buffer':
        return MLinearProgressVariant$buffer_getInstance();
      case 'query':
        return MLinearProgressVariant$query_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MLinearProgressVariant.' + name);
    }
  }
  MLinearProgressVariant.valueOf_61zpoe$ = MLinearProgressVariant$valueOf;
  function MLinearProgressProps() {
  }
  MLinearProgressProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MLinearProgressProps',
    interfaces: []
  };
  var color_5;
  var color_metadata_5 = new PropertyMetadata('color');
  function get_color_5($receiver) {
    return color_5.getValue_lrcp0p$($receiver, color_metadata_5);
  }
  function set_color_5($receiver, color) {
    color_5.setValue_9rddgb$($receiver, color_metadata_5, color);
  }
  var variant_5;
  var variant_metadata_5 = new PropertyMetadata('variant');
  function get_variant_5($receiver) {
    return variant_5.getValue_lrcp0p$($receiver, variant_metadata_5);
  }
  function set_variant_5($receiver, variant) {
    variant_5.setValue_9rddgb$($receiver, variant_metadata_5, variant);
  }
  function mLinearProgress$lambda(closure$color, closure$value, closure$valueBuffer, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_5($receiver.attrs, closure$color);
      if (closure$value != null) {
        var it = closure$value;
        $receiver.attrs.value = it;
      }if (closure$valueBuffer != null) {
        var it_0 = closure$valueBuffer;
        $receiver.attrs.valueBuffer = it_0;
      }set_variant_5($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mLinearProgress($receiver, value, valueBuffer, variant, color, className, handler) {
    if (value === void 0)
      value = null;
    if (valueBuffer === void 0)
      valueBuffer = null;
    if (variant === void 0)
      variant = MLinearProgressVariant$indeterminate_getInstance();
    if (color === void 0)
      color = MLinearProgressColor$primary_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, linearProgressComponent, void 0, mLinearProgress$lambda(color, value, valueBuffer, variant, className, handler));
  }
  var linkComponent;
  function MLinkUnderline(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MLinkUnderline_initFields() {
    MLinkUnderline_initFields = function () {
    };
    MLinkUnderline$none_instance = new MLinkUnderline('none', 0);
    MLinkUnderline$hover_instance = new MLinkUnderline('hover', 1);
    MLinkUnderline$always_instance = new MLinkUnderline('always', 2);
  }
  var MLinkUnderline$none_instance;
  function MLinkUnderline$none_getInstance() {
    MLinkUnderline_initFields();
    return MLinkUnderline$none_instance;
  }
  var MLinkUnderline$hover_instance;
  function MLinkUnderline$hover_getInstance() {
    MLinkUnderline_initFields();
    return MLinkUnderline$hover_instance;
  }
  var MLinkUnderline$always_instance;
  function MLinkUnderline$always_getInstance() {
    MLinkUnderline_initFields();
    return MLinkUnderline$always_instance;
  }
  MLinkUnderline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MLinkUnderline',
    interfaces: [Enum]
  };
  function MLinkUnderline$values() {
    return [MLinkUnderline$none_getInstance(), MLinkUnderline$hover_getInstance(), MLinkUnderline$always_getInstance()];
  }
  MLinkUnderline.values = MLinkUnderline$values;
  function MLinkUnderline$valueOf(name) {
    switch (name) {
      case 'none':
        return MLinkUnderline$none_getInstance();
      case 'hover':
        return MLinkUnderline$hover_getInstance();
      case 'always':
        return MLinkUnderline$always_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MLinkUnderline.' + name);
    }
  }
  MLinkUnderline.valueOf_61zpoe$ = MLinkUnderline$valueOf;
  function MLinkProps() {
  }
  MLinkProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MLinkProps',
    interfaces: [MTypographyProps]
  };
  var underline;
  var underline_metadata = new PropertyMetadata('underline');
  function get_underline($receiver) {
    return underline.getValue_lrcp0p$($receiver, underline_metadata);
  }
  function set_underline($receiver, underline_0) {
    underline.setValue_9rddgb$($receiver, underline_metadata, underline_0);
  }
  function mLink$lambda(closure$gutterBottom, closure$hRefOptions, closure$noWrap, closure$underline, closure$text, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.gutterBottom = closure$gutterBottom;
      if (closure$hRefOptions != null) {
        var it = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it);
      }$receiver.attrs.noWrap = closure$noWrap;
      set_underline($receiver.attrs, closure$underline);
      if (closure$text != null) {
        var it_0 = closure$text;
        $receiver.childList.add_11rb$(it_0);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mLink($receiver, text, hRefOptions, underline, gutterBottom, noWrap, className, handler) {
    if (text === void 0)
      text = null;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (underline === void 0)
      underline = MLinkUnderline$hover_getInstance();
    if (gutterBottom === void 0)
      gutterBottom = false;
    if (noWrap === void 0)
      noWrap = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, linkComponent, void 0, mLink$lambda(gutterBottom, hRefOptions, noWrap, underline, text, className, handler));
  }
  function mLink_0($receiver, text, hRef, underline, gutterBottom, noWrap, className, handler) {
    if (underline === void 0)
      underline = MLinkUnderline$hover_getInstance();
    if (gutterBottom === void 0)
      gutterBottom = false;
    if (noWrap === void 0)
      noWrap = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mLink($receiver, text, new HRefOptions(hRef), underline, gutterBottom, noWrap, className, handler);
  }
  function Locales() {
    Locales_instance = this;
  }
  Locales.prototype.keys = function () {
    var tmp$;
    return Object.keys(Kotlin.isType(tmp$ = $module$_material_ui_core_locale, Any) ? tmp$ : throwCCE());
  };
  Locales.prototype.findByKey_61zpoe$ = function (key) {
    return $module$_material_ui_core_locale[key];
  };
  Locales.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Locales',
    interfaces: []
  };
  var Locales_instance = null;
  function Locales_getInstance() {
    if (Locales_instance === null) {
      new Locales();
    }return Locales_instance;
  }
  var muiThemeProviderComponent;
  function MuiThemeProviderProps() {
  }
  MuiThemeProviderProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MuiThemeProviderProps',
    interfaces: []
  };
  function mMuiThemeProvider$lambda(closure$disableStylesGeneration, closure$sheetsManager, closure$theme, closure$handler) {
    return function ($receiver) {
      if (closure$disableStylesGeneration != null) {
        var closure$disableStylesGeneration_0 = closure$disableStylesGeneration;
        $receiver.attrs.disableStylesGeneration = closure$disableStylesGeneration_0;
      }if (closure$sheetsManager != null) {
        var closure$sheetsManager_0 = closure$sheetsManager;
        $receiver.attrs.sheetsManager = closure$sheetsManager_0;
      }$receiver.attrs.theme = closure$theme;
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mMuiThemeProvider($receiver, theme, disableStylesGeneration, sheetsManager, handler) {
    if (disableStylesGeneration === void 0)
      disableStylesGeneration = null;
    if (sheetsManager === void 0)
      sheetsManager = null;
    if (handler === void 0)
      handler = null;
    return child($receiver, muiThemeProviderComponent, mMuiThemeProvider$lambda(disableStylesGeneration, sheetsManager, theme, handler));
  }
  var nativeSelectComponent;
  function MNativeSelectProps() {
  }
  MNativeSelectProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MNativeSelectProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  function get_margin($receiver) {
    return margin.getValue_lrcp0p$($receiver, margin_metadata);
  }
  function set_margin($receiver, margin_0) {
    margin.setValue_9rddgb$($receiver, margin_metadata, margin_0);
  }
  var variant_6;
  var variant_metadata_6 = new PropertyMetadata('variant');
  function get_variant_6($receiver) {
    return variant_6.getValue_lrcp0p$($receiver, variant_metadata_6);
  }
  function set_variant_6($receiver, variant) {
    variant_6.setValue_9rddgb$($receiver, variant_metadata_6, variant);
  }
  function mNativeSelect$lambda(closure$autoFocus, closure$disabled, closure$error, closure$iconComponent, closure$id, closure$multiple, closure$name, closure$onChange, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoFocus != null) {
        var it = closure$autoFocus;
        $receiver.attrs.autoFocus = it;
      }if (closure$disabled != null) {
        var it_0 = closure$disabled;
        $receiver.attrs.disabled = it_0;
      }if (closure$error != null) {
        var it_1 = closure$error;
        $receiver.attrs.error = it_1;
      }if (closure$iconComponent != null) {
        var it_2 = closure$iconComponent;
        $receiver.attrs.IconComponent = it_2;
      }if (closure$id != null) {
        var it_3 = closure$id;
        $receiver.attrs.id = it_3;
      }$receiver.attrs.multiple = closure$multiple;
      if (closure$name != null) {
        var it_4 = closure$name;
        $receiver.attrs.name = it_4;
      }if (closure$onChange != null) {
        var it_5 = closure$onChange;
        $receiver.attrs.onChange = it_5;
      }if (closure$value != null) {
        var it_6 = closure$value;
        $receiver.attrs.value = it_6;
      }set_variant_6($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mNativeSelect($receiver, value, error, disabled, multiple, iconComponent, autoFocus, id, name, variant, onChange, addAsChild, className, handler) {
    if (error === void 0)
      error = null;
    if (disabled === void 0)
      disabled = null;
    if (multiple === void 0)
      multiple = false;
    if (iconComponent === void 0)
      iconComponent = null;
    if (autoFocus === void 0)
      autoFocus = null;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, nativeSelectComponent, addAsChild, mNativeSelect$lambda(autoFocus, disabled, error, iconComponent, id, multiple, name, onChange, value, variant, className, handler));
  }
  function OnClosePropWithReasonDelegate(enumValues) {
    this.enumValues_0 = enumValues;
  }
  OnClosePropWithReasonDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init(("Can't read value of " + thisRef + '.' + property.callableName).toString());
  };
  function OnClosePropWithReasonDelegate$setValue$lambda(closure$value, this$OnClosePropWithReasonDelegate) {
    return function (event, s) {
      var tmp$ = closure$value;
      var $receiver = this$OnClosePropWithReasonDelegate.enumValues_0;
      var first$result;
      first$break: do {
        var tmp$_0;
        for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
          var element = $receiver[tmp$_0];
          if (equals(toString(element), s)) {
            first$result = element;
            break first$break;
          }}
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      tmp$(event, first$result);
      return Unit;
    };
  }
  OnClosePropWithReasonDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    if (value == null) {
      thisRef[property.callableName] = null;
    } else {
      thisRef[property.callableName] = OnClosePropWithReasonDelegate$setValue$lambda(value, this);
    }
  };
  OnClosePropWithReasonDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OnClosePropWithReasonDelegate',
    interfaces: [ReadWriteProperty]
  };
  var paperComponent;
  function MPaperVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MPaperVariant_initFields() {
    MPaperVariant_initFields = function () {
    };
    MPaperVariant$elevation_instance = new MPaperVariant('elevation', 0);
    MPaperVariant$outlined_instance = new MPaperVariant('outlined', 1);
  }
  var MPaperVariant$elevation_instance;
  function MPaperVariant$elevation_getInstance() {
    MPaperVariant_initFields();
    return MPaperVariant$elevation_instance;
  }
  var MPaperVariant$outlined_instance;
  function MPaperVariant$outlined_getInstance() {
    MPaperVariant_initFields();
    return MPaperVariant$outlined_instance;
  }
  MPaperVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MPaperVariant',
    interfaces: [Enum]
  };
  function MPaperVariant$values() {
    return [MPaperVariant$elevation_getInstance(), MPaperVariant$outlined_getInstance()];
  }
  MPaperVariant.values = MPaperVariant$values;
  function MPaperVariant$valueOf(name) {
    switch (name) {
      case 'elevation':
        return MPaperVariant$elevation_getInstance();
      case 'outlined':
        return MPaperVariant$outlined_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MPaperVariant.' + name);
    }
  }
  MPaperVariant.valueOf_61zpoe$ = MPaperVariant$valueOf;
  function MPaperProps() {
  }
  MPaperProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MPaperProps',
    interfaces: []
  };
  var variant_7;
  var variant_metadata_7 = new PropertyMetadata('variant');
  function get_variant_7($receiver) {
    return variant_7.getValue_lrcp0p$($receiver, variant_metadata_7);
  }
  function set_variant_7($receiver, variant) {
    variant_7.setValue_9rddgb$($receiver, variant_metadata_7, variant);
  }
  function mPaper$lambda(closure$component, closure$elevation, closure$square, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      $receiver.attrs.elevation = closure$elevation;
      $receiver.attrs.square = closure$square;
      set_variant_7($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mPaper($receiver, component, elevation, square, variant, className, handler) {
    if (component === void 0)
      component = 'div';
    if (elevation === void 0)
      elevation = 2;
    if (square === void 0)
      square = false;
    if (variant === void 0)
      variant = MPaperVariant$elevation_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, paperComponent, void 0, mPaper$lambda(component, elevation, square, variant, className, handler));
  }
  var popoverComponent;
  function MPopoverAnchorRef(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MPopoverAnchorRef_initFields() {
    MPopoverAnchorRef_initFields = function () {
    };
    MPopoverAnchorRef$anchorEl_instance = new MPopoverAnchorRef('anchorEl', 0);
    MPopoverAnchorRef$anchorPosition_instance = new MPopoverAnchorRef('anchorPosition', 1);
    MPopoverAnchorRef$none_instance = new MPopoverAnchorRef('none', 2);
  }
  var MPopoverAnchorRef$anchorEl_instance;
  function MPopoverAnchorRef$anchorEl_getInstance() {
    MPopoverAnchorRef_initFields();
    return MPopoverAnchorRef$anchorEl_instance;
  }
  var MPopoverAnchorRef$anchorPosition_instance;
  function MPopoverAnchorRef$anchorPosition_getInstance() {
    MPopoverAnchorRef_initFields();
    return MPopoverAnchorRef$anchorPosition_instance;
  }
  var MPopoverAnchorRef$none_instance;
  function MPopoverAnchorRef$none_getInstance() {
    MPopoverAnchorRef_initFields();
    return MPopoverAnchorRef$none_instance;
  }
  MPopoverAnchorRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MPopoverAnchorRef',
    interfaces: [Enum]
  };
  function MPopoverAnchorRef$values() {
    return [MPopoverAnchorRef$anchorEl_getInstance(), MPopoverAnchorRef$anchorPosition_getInstance(), MPopoverAnchorRef$none_getInstance()];
  }
  MPopoverAnchorRef.values = MPopoverAnchorRef$values;
  function MPopoverAnchorRef$valueOf(name) {
    switch (name) {
      case 'anchorEl':
        return MPopoverAnchorRef$anchorEl_getInstance();
      case 'anchorPosition':
        return MPopoverAnchorRef$anchorPosition_getInstance();
      case 'none':
        return MPopoverAnchorRef$none_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MPopoverAnchorRef.' + name);
    }
  }
  MPopoverAnchorRef.valueOf_61zpoe$ = MPopoverAnchorRef$valueOf;
  function MPopoverHorizontalPosition(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MPopoverHorizontalPosition_initFields() {
    MPopoverHorizontalPosition_initFields = function () {
    };
    MPopoverHorizontalPosition$left_instance = new MPopoverHorizontalPosition('left', 0);
    MPopoverHorizontalPosition$center_instance = new MPopoverHorizontalPosition('center', 1);
    MPopoverHorizontalPosition$right_instance = new MPopoverHorizontalPosition('right', 2);
  }
  var MPopoverHorizontalPosition$left_instance;
  function MPopoverHorizontalPosition$left_getInstance() {
    MPopoverHorizontalPosition_initFields();
    return MPopoverHorizontalPosition$left_instance;
  }
  var MPopoverHorizontalPosition$center_instance;
  function MPopoverHorizontalPosition$center_getInstance() {
    MPopoverHorizontalPosition_initFields();
    return MPopoverHorizontalPosition$center_instance;
  }
  var MPopoverHorizontalPosition$right_instance;
  function MPopoverHorizontalPosition$right_getInstance() {
    MPopoverHorizontalPosition_initFields();
    return MPopoverHorizontalPosition$right_instance;
  }
  MPopoverHorizontalPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MPopoverHorizontalPosition',
    interfaces: [Enum]
  };
  function MPopoverHorizontalPosition$values() {
    return [MPopoverHorizontalPosition$left_getInstance(), MPopoverHorizontalPosition$center_getInstance(), MPopoverHorizontalPosition$right_getInstance()];
  }
  MPopoverHorizontalPosition.values = MPopoverHorizontalPosition$values;
  function MPopoverHorizontalPosition$valueOf(name) {
    switch (name) {
      case 'left':
        return MPopoverHorizontalPosition$left_getInstance();
      case 'center':
        return MPopoverHorizontalPosition$center_getInstance();
      case 'right':
        return MPopoverHorizontalPosition$right_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MPopoverHorizontalPosition.' + name);
    }
  }
  MPopoverHorizontalPosition.valueOf_61zpoe$ = MPopoverHorizontalPosition$valueOf;
  function MPopoverVerticalPosition(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MPopoverVerticalPosition_initFields() {
    MPopoverVerticalPosition_initFields = function () {
    };
    MPopoverVerticalPosition$top_instance = new MPopoverVerticalPosition('top', 0);
    MPopoverVerticalPosition$center_instance = new MPopoverVerticalPosition('center', 1);
    MPopoverVerticalPosition$bottom_instance = new MPopoverVerticalPosition('bottom', 2);
  }
  var MPopoverVerticalPosition$top_instance;
  function MPopoverVerticalPosition$top_getInstance() {
    MPopoverVerticalPosition_initFields();
    return MPopoverVerticalPosition$top_instance;
  }
  var MPopoverVerticalPosition$center_instance;
  function MPopoverVerticalPosition$center_getInstance() {
    MPopoverVerticalPosition_initFields();
    return MPopoverVerticalPosition$center_instance;
  }
  var MPopoverVerticalPosition$bottom_instance;
  function MPopoverVerticalPosition$bottom_getInstance() {
    MPopoverVerticalPosition_initFields();
    return MPopoverVerticalPosition$bottom_instance;
  }
  MPopoverVerticalPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MPopoverVerticalPosition',
    interfaces: [Enum]
  };
  function MPopoverVerticalPosition$values() {
    return [MPopoverVerticalPosition$top_getInstance(), MPopoverVerticalPosition$center_getInstance(), MPopoverVerticalPosition$bottom_getInstance()];
  }
  MPopoverVerticalPosition.values = MPopoverVerticalPosition$values;
  function MPopoverVerticalPosition$valueOf(name) {
    switch (name) {
      case 'top':
        return MPopoverVerticalPosition$top_getInstance();
      case 'center':
        return MPopoverVerticalPosition$center_getInstance();
      case 'bottom':
        return MPopoverVerticalPosition$bottom_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MPopoverVerticalPosition.' + name);
    }
  }
  MPopoverVerticalPosition.valueOf_61zpoe$ = MPopoverVerticalPosition$valueOf;
  function MPopoverProps() {
  }
  MPopoverProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MPopoverProps',
    interfaces: [MModalProps]
  };
  var anchorOriginHorizontal_0;
  var anchorOriginHorizontal_metadata_0 = new PropertyMetadata('anchorOriginHorizontal');
  function get_anchorOriginHorizontal_0($receiver) {
    return anchorOriginHorizontal_0.getValue_lrcp0p$($receiver, anchorOriginHorizontal_metadata_0);
  }
  function set_anchorOriginHorizontal_0($receiver, anchorOriginHorizontal) {
    anchorOriginHorizontal_0.setValue_9rddgb$($receiver, anchorOriginHorizontal_metadata_0, anchorOriginHorizontal);
  }
  var anchorOriginVertical_0;
  var anchorOriginVertical_metadata_0 = new PropertyMetadata('anchorOriginVertical');
  function get_anchorOriginVertical_0($receiver) {
    return anchorOriginVertical_0.getValue_lrcp0p$($receiver, anchorOriginVertical_metadata_0);
  }
  function set_anchorOriginVertical_0($receiver, anchorOriginVertical) {
    anchorOriginVertical_0.setValue_9rddgb$($receiver, anchorOriginVertical_metadata_0, anchorOriginVertical);
  }
  var anchorOriginHorizontalNumeric;
  var anchorOriginHorizontalNumeric_metadata = new PropertyMetadata('anchorOriginHorizontalNumeric');
  function get_anchorOriginHorizontalNumeric($receiver) {
    var tmp$, tmp$_0;
    if ($receiver[anchorOriginHorizontalNumeric.propName] == undefined)
      tmp$_0 = null;
    else if ($receiver[anchorOriginHorizontalNumeric.propName][anchorOriginHorizontalNumeric.childPropName] == undefined)
      tmp$_0 = null;
    else {
      var tmp$_1;
      if (!((tmp$_1 = $receiver[anchorOriginHorizontalNumeric.propName][anchorOriginHorizontalNumeric.childPropName]) == null || typeof tmp$_1 === 'number'))
        tmp$_0 = null;
      else
        tmp$_0 = (tmp$ = $receiver[anchorOriginHorizontalNumeric.propName][anchorOriginHorizontalNumeric.childPropName]) == null || typeof tmp$ === 'number' ? tmp$ : throwCCE();
    }
    return tmp$_0;
  }
  function set_anchorOriginHorizontalNumeric($receiver, anchorOriginHorizontalNumeric_0) {
    anchorOriginHorizontalNumeric.setValue_kmk2k6$($receiver, anchorOriginHorizontalNumeric_metadata, anchorOriginHorizontalNumeric_0);
  }
  var anchorOriginVerticalNumeric;
  var anchorOriginVerticalNumeric_metadata = new PropertyMetadata('anchorOriginVerticalNumeric');
  function get_anchorOriginVerticalNumeric($receiver) {
    var tmp$, tmp$_0;
    if ($receiver[anchorOriginVerticalNumeric.propName] == undefined)
      tmp$_0 = null;
    else if ($receiver[anchorOriginVerticalNumeric.propName][anchorOriginVerticalNumeric.childPropName] == undefined)
      tmp$_0 = null;
    else {
      var tmp$_1;
      if (!((tmp$_1 = $receiver[anchorOriginVerticalNumeric.propName][anchorOriginVerticalNumeric.childPropName]) == null || typeof tmp$_1 === 'number'))
        tmp$_0 = null;
      else
        tmp$_0 = (tmp$ = $receiver[anchorOriginVerticalNumeric.propName][anchorOriginVerticalNumeric.childPropName]) == null || typeof tmp$ === 'number' ? tmp$ : throwCCE();
    }
    return tmp$_0;
  }
  function set_anchorOriginVerticalNumeric($receiver, anchorOriginVerticalNumeric_0) {
    anchorOriginVerticalNumeric.setValue_kmk2k6$($receiver, anchorOriginVerticalNumeric_metadata, anchorOriginVerticalNumeric_0);
  }
  var anchorPositionLeft;
  var anchorPositionLeft_metadata = new PropertyMetadata('anchorPositionLeft');
  function get_anchorPositionLeft($receiver) {
    var tmp$, tmp$_0;
    if ($receiver[anchorPositionLeft.propName] == undefined)
      tmp$_0 = null;
    else if ($receiver[anchorPositionLeft.propName][anchorPositionLeft.childPropName] == undefined)
      tmp$_0 = null;
    else {
      var tmp$_1;
      if (!((tmp$_1 = $receiver[anchorPositionLeft.propName][anchorPositionLeft.childPropName]) == null || typeof tmp$_1 === 'number'))
        tmp$_0 = null;
      else
        tmp$_0 = (tmp$ = $receiver[anchorPositionLeft.propName][anchorPositionLeft.childPropName]) == null || typeof tmp$ === 'number' ? tmp$ : throwCCE();
    }
    return tmp$_0;
  }
  function set_anchorPositionLeft($receiver, anchorPositionLeft_0) {
    anchorPositionLeft.setValue_kmk2k6$($receiver, anchorPositionLeft_metadata, anchorPositionLeft_0);
  }
  var anchorPositionTop;
  var anchorPositionTop_metadata = new PropertyMetadata('anchorPositionTop');
  function get_anchorPositionTop($receiver) {
    var tmp$, tmp$_0;
    if ($receiver[anchorPositionTop.propName] == undefined)
      tmp$_0 = null;
    else if ($receiver[anchorPositionTop.propName][anchorPositionTop.childPropName] == undefined)
      tmp$_0 = null;
    else {
      var tmp$_1;
      if (!((tmp$_1 = $receiver[anchorPositionTop.propName][anchorPositionTop.childPropName]) == null || typeof tmp$_1 === 'number'))
        tmp$_0 = null;
      else
        tmp$_0 = (tmp$ = $receiver[anchorPositionTop.propName][anchorPositionTop.childPropName]) == null || typeof tmp$ === 'number' ? tmp$ : throwCCE();
    }
    return tmp$_0;
  }
  function set_anchorPositionTop($receiver, anchorPositionTop_0) {
    anchorPositionTop.setValue_kmk2k6$($receiver, anchorPositionTop_metadata, anchorPositionTop_0);
  }
  var anchorReference;
  var anchorReference_metadata = new PropertyMetadata('anchorReference');
  function get_anchorReference($receiver) {
    return anchorReference.getValue_lrcp0p$($receiver, anchorReference_metadata);
  }
  function set_anchorReference($receiver, anchorReference_0) {
    anchorReference.setValue_9rddgb$($receiver, anchorReference_metadata, anchorReference_0);
  }
  var transformOriginHorizontal;
  var transformOriginHorizontal_metadata = new PropertyMetadata('transformOriginHorizontal');
  function get_transformOriginHorizontal($receiver) {
    return transformOriginHorizontal.getValue_lrcp0p$($receiver, transformOriginHorizontal_metadata);
  }
  function set_transformOriginHorizontal($receiver, transformOriginHorizontal_0) {
    transformOriginHorizontal.setValue_9rddgb$($receiver, transformOriginHorizontal_metadata, transformOriginHorizontal_0);
  }
  var transformOriginVertical;
  var transformOriginVertical_metadata = new PropertyMetadata('transformOriginVertical');
  function get_transformOriginVertical($receiver) {
    return transformOriginVertical.getValue_lrcp0p$($receiver, transformOriginVertical_metadata);
  }
  function set_transformOriginVertical($receiver, transformOriginVertical_0) {
    transformOriginVertical.setValue_9rddgb$($receiver, transformOriginVertical_metadata, transformOriginVertical_0);
  }
  var transformOriginHorizontalNumeric;
  var transformOriginHorizontalNumeric_metadata = new PropertyMetadata('transformOriginHorizontalNumeric');
  function get_transformOriginHorizontalNumeric($receiver) {
    var tmp$, tmp$_0;
    if ($receiver[transformOriginHorizontalNumeric.propName] == undefined)
      tmp$_0 = null;
    else if ($receiver[transformOriginHorizontalNumeric.propName][transformOriginHorizontalNumeric.childPropName] == undefined)
      tmp$_0 = null;
    else {
      var tmp$_1;
      if (!((tmp$_1 = $receiver[transformOriginHorizontalNumeric.propName][transformOriginHorizontalNumeric.childPropName]) == null || typeof tmp$_1 === 'number'))
        tmp$_0 = null;
      else
        tmp$_0 = (tmp$ = $receiver[transformOriginHorizontalNumeric.propName][transformOriginHorizontalNumeric.childPropName]) == null || typeof tmp$ === 'number' ? tmp$ : throwCCE();
    }
    return tmp$_0;
  }
  function set_transformOriginHorizontalNumeric($receiver, transformOriginHorizontalNumeric_0) {
    transformOriginHorizontalNumeric.setValue_kmk2k6$($receiver, transformOriginHorizontalNumeric_metadata, transformOriginHorizontalNumeric_0);
  }
  var transformOriginVerticalNumeric;
  var transformOriginVerticalNumeric_metadata = new PropertyMetadata('transformOriginVerticalNumeric');
  function get_transformOriginVerticalNumeric($receiver) {
    var tmp$, tmp$_0;
    if ($receiver[transformOriginVerticalNumeric.propName] == undefined)
      tmp$_0 = null;
    else if ($receiver[transformOriginVerticalNumeric.propName][transformOriginVerticalNumeric.childPropName] == undefined)
      tmp$_0 = null;
    else {
      var tmp$_1;
      if (!((tmp$_1 = $receiver[transformOriginVerticalNumeric.propName][transformOriginVerticalNumeric.childPropName]) == null || typeof tmp$_1 === 'number'))
        tmp$_0 = null;
      else
        tmp$_0 = (tmp$ = $receiver[transformOriginVerticalNumeric.propName][transformOriginVerticalNumeric.childPropName]) == null || typeof tmp$ === 'number' ? tmp$ : throwCCE();
    }
    return tmp$_0;
  }
  function set_transformOriginVerticalNumeric($receiver, transformOriginVerticalNumeric_0) {
    transformOriginVerticalNumeric.setValue_kmk2k6$($receiver, transformOriginVerticalNumeric_metadata, transformOriginVerticalNumeric_0);
  }
  var transitionComponent;
  var transitionComponent_metadata = new PropertyMetadata('transitionComponent');
  function get_transitionComponent($receiver) {
    return transitionComponent.getValue_lrcp0p$($receiver, transitionComponent_metadata);
  }
  function set_transitionComponent($receiver, transitionComponent_0) {
    transitionComponent.setValue_9rddgb$($receiver, transitionComponent_metadata, transitionComponent_0);
  }
  var transitionDuration_1;
  var transitionDuration_metadata_1 = new PropertyMetadata('transitionDuration');
  function get_transitionDuration_1($receiver) {
    return transitionDuration_1.getValue_lrcp0p$($receiver, transitionDuration_metadata_1);
  }
  function set_transitionDuration_1($receiver, transitionDuration) {
    transitionDuration_1.setValue_9rddgb$($receiver, transitionDuration_metadata_1, transitionDuration);
  }
  function mPopover$lambda(closure$anchorOriginHorizontal, closure$anchorOriginVertical, closure$closeAfterTransition, closure$container, closure$hideBackdrop, closure$keepMounted, closure$onBackdropClick, closure$onClose, closure$onEscapeKeyDown, closure$open, closure$className, closure$handler) {
    return function ($receiver) {
      set_anchorOriginHorizontal_0($receiver.attrs, closure$anchorOriginHorizontal);
      set_anchorOriginVertical_0($receiver.attrs, closure$anchorOriginVertical);
      $receiver.attrs.closeAfterTransition = closure$closeAfterTransition;
      if (closure$container != null) {
        var it = closure$container;
        $receiver.attrs.container = it;
      }$receiver.attrs.hideBackdrop = closure$hideBackdrop;
      $receiver.attrs.keepMounted = closure$keepMounted;
      if (closure$onBackdropClick != null) {
        var it_0 = closure$onBackdropClick;
        $receiver.attrs.onBackdropClick = it_0;
      }set_onClose_0($receiver.attrs, closure$onClose);
      if (closure$onEscapeKeyDown != null) {
        var it_1 = closure$onEscapeKeyDown;
        $receiver.attrs.onEscapeKeyDown = it_1;
      }$receiver.attrs.open = closure$open;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mPopover($receiver, open, container, anchorOriginHorizontal, anchorOriginVertical, hideBackdrop, keepMounted, closeAfterTransition, onBackdropClick, onClose, onEscapeKeyDown, className, handler) {
    if (open === void 0)
      open = false;
    if (container === void 0)
      container = null;
    if (anchorOriginHorizontal === void 0)
      anchorOriginHorizontal = MPopoverHorizontalPosition$left_getInstance();
    if (anchorOriginVertical === void 0)
      anchorOriginVertical = MPopoverVerticalPosition$top_getInstance();
    if (hideBackdrop === void 0)
      hideBackdrop = false;
    if (keepMounted === void 0)
      keepMounted = false;
    if (closeAfterTransition === void 0)
      closeAfterTransition = false;
    if (onBackdropClick === void 0)
      onBackdropClick = null;
    if (onClose === void 0)
      onClose = null;
    if (onEscapeKeyDown === void 0)
      onEscapeKeyDown = null;
    if (className === void 0)
      className = null;
    return createStyled($receiver, popoverComponent, void 0, mPopover$lambda(anchorOriginHorizontal, anchorOriginVertical, closeAfterTransition, container, hideBackdrop, keepMounted, onBackdropClick, onClose, onEscapeKeyDown, open, className, handler));
  }
  var radioComponent;
  function MRadioProps() {
  }
  MRadioProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MRadioProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var color_6;
  var color_metadata_6 = new PropertyMetadata('color');
  function get_color_6($receiver) {
    return color_6.getValue_lrcp0p$($receiver, color_metadata_6);
  }
  function set_color_6($receiver, color) {
    color_6.setValue_9rddgb$($receiver, color_metadata_6, color);
  }
  var size_0;
  var size_metadata_0 = new PropertyMetadata('size');
  function get_size_1($receiver) {
    return size_0.getValue_lrcp0p$($receiver, size_metadata_0);
  }
  function set_size_1($receiver, size) {
    size_0.setValue_9rddgb$($receiver, size_metadata_0, size);
  }
  function mRadio$lambda(closure$checked, closure$color, closure$disabled, closure$id, closure$inputProps, closure$onChange, closure$required, closure$size, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$checked != null) {
        var it = closure$checked;
        $receiver.attrs.checked = it;
      }set_color_6($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$id != null) {
        var it_0 = closure$id;
        $receiver.attrs.id = it_0;
      }if (closure$inputProps != null) {
        var it_1 = closure$inputProps;
        $receiver.attrs.inputProps = it_1;
      }if (closure$onChange != null) {
        var it_2 = closure$onChange;
        $receiver.attrs.onChange = it_2;
      }if (closure$required != null) {
        var it_3 = closure$required;
        $receiver.attrs.required = it_3;
      }set_size_1($receiver.attrs, closure$size);
      if (closure$value != null) {
        var it_4 = closure$value;
        $receiver.attrs.value = it_4;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mRadio($receiver, checked, color, disabled, required, size, onChange, id, inputProps, value, addAsChild, className, handler) {
    if (checked === void 0)
      checked = null;
    if (color === void 0)
      color = MOptionColor$secondary_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (required === void 0)
      required = null;
    if (size === void 0)
      size = MIconButtonSize$medium_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (id === void 0)
      id = null;
    if (inputProps === void 0)
      inputProps = null;
    if (value === void 0)
      value = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, radioComponent, addAsChild, mRadio$lambda(checked, color, disabled, id, inputProps, onChange, required, size, value, className, handler));
  }
  function mRadioWithLabel($receiver, label, checked, color, disabled, required, size, labelPlacement, onChange, id, inputProps, value, className, handler) {
    if (checked === void 0)
      checked = null;
    if (color === void 0)
      color = MOptionColor$secondary_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (required === void 0)
      required = null;
    if (size === void 0)
      size = MIconButtonSize$medium_getInstance();
    if (labelPlacement === void 0)
      labelPlacement = MLabelPlacement$end_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (id === void 0)
      id = null;
    if (inputProps === void 0)
      inputProps = null;
    if (value === void 0)
      value = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var radio = mRadio($receiver, checked, color, disabled, required, size, onChange, id, inputProps, value, false);
    return mFormControlLabel($receiver, label, radio, checked, disabled, value, void 0, labelPlacement, void 0, className, handler);
  }
  var radioGroupComponent;
  function MRadioGroupProps() {
  }
  MRadioGroupProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MRadioGroupProps',
    interfaces: [MFormGroupProps]
  };
  function mRadioGroup$lambda(closure$name, closure$onChange, closure$row, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$name != null) {
        var closure$name_0 = closure$name;
        $receiver.attrs.name = closure$name_0;
      }if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }$receiver.attrs.row = closure$row;
      if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mRadioGroup($receiver, value, row, onChange, name, className, handler) {
    if (value === void 0)
      value = null;
    if (row === void 0)
      row = false;
    if (onChange === void 0)
      onChange = null;
    if (name === void 0)
      name = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, radioGroupComponent, void 0, mRadioGroup$lambda(name, onChange, row, value, className, handler));
  }
  function AutoCapitalize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AutoCapitalize_initFields() {
    AutoCapitalize_initFields = function () {
    };
    AutoCapitalize$off_instance = new AutoCapitalize('off', 0);
    AutoCapitalize$none_instance = new AutoCapitalize('none', 1);
    AutoCapitalize$on_instance = new AutoCapitalize('on', 2);
    AutoCapitalize$sentences_instance = new AutoCapitalize('sentences', 3);
    AutoCapitalize$words_instance = new AutoCapitalize('words', 4);
    AutoCapitalize$characters_instance = new AutoCapitalize('characters', 5);
  }
  var AutoCapitalize$off_instance;
  function AutoCapitalize$off_getInstance() {
    AutoCapitalize_initFields();
    return AutoCapitalize$off_instance;
  }
  var AutoCapitalize$none_instance;
  function AutoCapitalize$none_getInstance() {
    AutoCapitalize_initFields();
    return AutoCapitalize$none_instance;
  }
  var AutoCapitalize$on_instance;
  function AutoCapitalize$on_getInstance() {
    AutoCapitalize_initFields();
    return AutoCapitalize$on_instance;
  }
  var AutoCapitalize$sentences_instance;
  function AutoCapitalize$sentences_getInstance() {
    AutoCapitalize_initFields();
    return AutoCapitalize$sentences_instance;
  }
  var AutoCapitalize$words_instance;
  function AutoCapitalize$words_getInstance() {
    AutoCapitalize_initFields();
    return AutoCapitalize$words_instance;
  }
  var AutoCapitalize$characters_instance;
  function AutoCapitalize$characters_getInstance() {
    AutoCapitalize_initFields();
    return AutoCapitalize$characters_instance;
  }
  AutoCapitalize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutoCapitalize',
    interfaces: [Enum]
  };
  function AutoCapitalize$values() {
    return [AutoCapitalize$off_getInstance(), AutoCapitalize$none_getInstance(), AutoCapitalize$on_getInstance(), AutoCapitalize$sentences_getInstance(), AutoCapitalize$words_getInstance(), AutoCapitalize$characters_getInstance()];
  }
  AutoCapitalize.values = AutoCapitalize$values;
  function AutoCapitalize$valueOf(name) {
    switch (name) {
      case 'off':
        return AutoCapitalize$off_getInstance();
      case 'none':
        return AutoCapitalize$none_getInstance();
      case 'on':
        return AutoCapitalize$on_getInstance();
      case 'sentences':
        return AutoCapitalize$sentences_getInstance();
      case 'words':
        return AutoCapitalize$words_getInstance();
      case 'characters':
        return AutoCapitalize$characters_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.AutoCapitalize.' + name);
    }
  }
  AutoCapitalize.valueOf_61zpoe$ = AutoCapitalize$valueOf;
  function TextDir(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TextDir_initFields() {
    TextDir_initFields = function () {
    };
    TextDir$ltr_instance = new TextDir('ltr', 0);
    TextDir$rtl_instance = new TextDir('rtl', 1);
    TextDir$auto_instance = new TextDir('auto', 2);
  }
  var TextDir$ltr_instance;
  function TextDir$ltr_getInstance() {
    TextDir_initFields();
    return TextDir$ltr_instance;
  }
  var TextDir$rtl_instance;
  function TextDir$rtl_getInstance() {
    TextDir_initFields();
    return TextDir$rtl_instance;
  }
  var TextDir$auto_instance;
  function TextDir$auto_getInstance() {
    TextDir_initFields();
    return TextDir$auto_instance;
  }
  TextDir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextDir',
    interfaces: [Enum]
  };
  function TextDir$values() {
    return [TextDir$ltr_getInstance(), TextDir$rtl_getInstance(), TextDir$auto_getInstance()];
  }
  TextDir.values = TextDir$values;
  function TextDir$valueOf(name) {
    switch (name) {
      case 'ltr':
        return TextDir$ltr_getInstance();
      case 'rtl':
        return TextDir$rtl_getInstance();
      case 'auto':
        return TextDir$auto_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.TextDir.' + name);
    }
  }
  TextDir.valueOf_61zpoe$ = TextDir$valueOf;
  function DropZone(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DropZone_initFields() {
    DropZone_initFields = function () {
    };
    DropZone$copy_instance = new DropZone('copy', 0);
    DropZone$move_instance = new DropZone('move', 1);
    DropZone$link_instance = new DropZone('link', 2);
  }
  var DropZone$copy_instance;
  function DropZone$copy_getInstance() {
    DropZone_initFields();
    return DropZone$copy_instance;
  }
  var DropZone$move_instance;
  function DropZone$move_getInstance() {
    DropZone_initFields();
    return DropZone$move_instance;
  }
  var DropZone$link_instance;
  function DropZone$link_getInstance() {
    DropZone_initFields();
    return DropZone$link_instance;
  }
  DropZone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropZone',
    interfaces: [Enum]
  };
  function DropZone$values() {
    return [DropZone$copy_getInstance(), DropZone$move_getInstance(), DropZone$link_getInstance()];
  }
  DropZone.values = DropZone$values;
  function DropZone$valueOf(name) {
    switch (name) {
      case 'copy':
        return DropZone$copy_getInstance();
      case 'move':
        return DropZone$move_getInstance();
      case 'link':
        return DropZone$link_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.DropZone.' + name);
    }
  }
  DropZone.valueOf_61zpoe$ = DropZone$valueOf;
  function ReactHtmlElementAttributes() {
  }
  ReactHtmlElementAttributes.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReactHtmlElementAttributes',
    interfaces: []
  };
  function ReactHtmlElementEvents() {
  }
  ReactHtmlElementEvents.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReactHtmlElementEvents',
    interfaces: []
  };
  function Touch() {
  }
  Touch.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Touch',
    interfaces: []
  };
  var selectComponent;
  function MSelectProps() {
  }
  MSelectProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSelectProps',
    interfaces: [MInputBaseNoOnChangeProps]
  };
  function mSelect$lambda(closure$autoFocus, closure$autoWidth, closure$disabled, closure$displayEmpty, closure$error, closure$fullWidth, closure$id, closure$input, closure$multiple, closure$native, closure$name, closure$onChange, closure$open, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoFocus != null) {
        var it = closure$autoFocus;
        $receiver.attrs.autoFocus = it;
      }$receiver.attrs.autoWidth = closure$autoWidth;
      if (closure$disabled != null) {
        var it_0 = closure$disabled;
        $receiver.attrs.disabled = it_0;
      }$receiver.attrs.displayEmpty = closure$displayEmpty;
      if (closure$error != null) {
        var it_1 = closure$error;
        $receiver.attrs.error = it_1;
      }$receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$id != null) {
        var it_2 = closure$id;
        $receiver.attrs.id = it_2;
      }if (closure$input != null) {
        var it_3 = closure$input;
        $receiver.attrs.input = it_3;
      }$receiver.attrs.multiple = closure$multiple;
      $receiver.attrs.native = closure$native;
      if (closure$name != null) {
        var it_4 = closure$name;
        $receiver.attrs.name = it_4;
      }if (closure$onChange != null) {
        var it_5 = closure$onChange;
        $receiver.attrs.onChange = it_5;
      }if (closure$open != null) {
        var it_6 = closure$open;
        $receiver.attrs.open = it_6;
      }if (closure$value != null) {
        var it_7 = closure$value;
        $receiver.attrs.value = it_7;
      }if (closure$variant != null) {
        var it_8 = closure$variant;
        $receiver.attrs.variant = it_8.toString();
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSelect($receiver, value, open, error, disabled, multiple, variant, autoWidth, fullWidth, displayEmpty, autoFocus, id, name, input, native, onChange, addAsChild, className, handler) {
    if (open === void 0)
      open = null;
    if (error === void 0)
      error = null;
    if (disabled === void 0)
      disabled = null;
    if (multiple === void 0)
      multiple = false;
    if (variant === void 0)
      variant = null;
    if (autoWidth === void 0)
      autoWidth = false;
    if (fullWidth === void 0)
      fullWidth = false;
    if (displayEmpty === void 0)
      displayEmpty = false;
    if (autoFocus === void 0)
      autoFocus = null;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (input === void 0)
      input = null;
    if (native === void 0)
      native = false;
    if (onChange === void 0)
      onChange = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, selectComponent, addAsChild, mSelect$lambda(autoFocus, autoWidth, disabled, displayEmpty, error, fullWidth, id, input, multiple, native, name, onChange, open, value, variant, className, handler));
  }
  var sliderComponent;
  function MSliderOrientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MSliderOrientation_initFields() {
    MSliderOrientation_initFields = function () {
    };
    MSliderOrientation$horizontal_instance = new MSliderOrientation('horizontal', 0);
    MSliderOrientation$vertical_instance = new MSliderOrientation('vertical', 1);
  }
  var MSliderOrientation$horizontal_instance;
  function MSliderOrientation$horizontal_getInstance() {
    MSliderOrientation_initFields();
    return MSliderOrientation$horizontal_instance;
  }
  var MSliderOrientation$vertical_instance;
  function MSliderOrientation$vertical_getInstance() {
    MSliderOrientation_initFields();
    return MSliderOrientation$vertical_instance;
  }
  MSliderOrientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSliderOrientation',
    interfaces: [Enum]
  };
  function MSliderOrientation$values() {
    return [MSliderOrientation$horizontal_getInstance(), MSliderOrientation$vertical_getInstance()];
  }
  MSliderOrientation.values = MSliderOrientation$values;
  function MSliderOrientation$valueOf(name) {
    switch (name) {
      case 'horizontal':
        return MSliderOrientation$horizontal_getInstance();
      case 'vertical':
        return MSliderOrientation$vertical_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MSliderOrientation.' + name);
    }
  }
  MSliderOrientation.valueOf_61zpoe$ = MSliderOrientation$valueOf;
  function MSliderValueLabelDisplay(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MSliderValueLabelDisplay_initFields() {
    MSliderValueLabelDisplay_initFields = function () {
    };
    MSliderValueLabelDisplay$on_instance = new MSliderValueLabelDisplay('on', 0);
    MSliderValueLabelDisplay$off_instance = new MSliderValueLabelDisplay('off', 1);
    MSliderValueLabelDisplay$auto_instance = new MSliderValueLabelDisplay('auto', 2);
  }
  var MSliderValueLabelDisplay$on_instance;
  function MSliderValueLabelDisplay$on_getInstance() {
    MSliderValueLabelDisplay_initFields();
    return MSliderValueLabelDisplay$on_instance;
  }
  var MSliderValueLabelDisplay$off_instance;
  function MSliderValueLabelDisplay$off_getInstance() {
    MSliderValueLabelDisplay_initFields();
    return MSliderValueLabelDisplay$off_instance;
  }
  var MSliderValueLabelDisplay$auto_instance;
  function MSliderValueLabelDisplay$auto_getInstance() {
    MSliderValueLabelDisplay_initFields();
    return MSliderValueLabelDisplay$auto_instance;
  }
  MSliderValueLabelDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSliderValueLabelDisplay',
    interfaces: [Enum]
  };
  function MSliderValueLabelDisplay$values() {
    return [MSliderValueLabelDisplay$on_getInstance(), MSliderValueLabelDisplay$off_getInstance(), MSliderValueLabelDisplay$auto_getInstance()];
  }
  MSliderValueLabelDisplay.values = MSliderValueLabelDisplay$values;
  function MSliderValueLabelDisplay$valueOf(name) {
    switch (name) {
      case 'on':
        return MSliderValueLabelDisplay$on_getInstance();
      case 'off':
        return MSliderValueLabelDisplay$off_getInstance();
      case 'auto':
        return MSliderValueLabelDisplay$auto_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MSliderValueLabelDisplay.' + name);
    }
  }
  MSliderValueLabelDisplay.valueOf_61zpoe$ = MSliderValueLabelDisplay$valueOf;
  function MSliderMark(value, label) {
    if (label === void 0)
      label = null;
    this.value = value;
    this.label = label;
  }
  MSliderMark.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSliderMark',
    interfaces: []
  };
  MSliderMark.prototype.component1 = function () {
    return this.value;
  };
  MSliderMark.prototype.component2 = function () {
    return this.label;
  };
  MSliderMark.prototype.copy_sq6htj$ = function (value, label) {
    return new MSliderMark(value === void 0 ? this.value : value, label === void 0 ? this.label : label);
  };
  MSliderMark.prototype.toString = function () {
    return 'MSliderMark(value=' + Kotlin.toString(this.value) + (', label=' + Kotlin.toString(this.label)) + ')';
  };
  MSliderMark.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  MSliderMark.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.value, other.value) && Kotlin.equals(this.label, other.label)))));
  };
  function MSliderProps() {
  }
  MSliderProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSliderProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var orientation_0;
  var orientation_metadata_0 = new PropertyMetadata('orientation');
  function get_orientation_0($receiver) {
    return orientation_0.getValue_lrcp0p$($receiver, orientation_metadata_0);
  }
  function set_orientation_0($receiver, orientation) {
    orientation_0.setValue_9rddgb$($receiver, orientation_metadata_0, orientation);
  }
  var valueLabelDisplay;
  var valueLabelDisplay_metadata = new PropertyMetadata('valueLabelDisplay');
  function get_valueLabelDisplay($receiver) {
    return valueLabelDisplay.getValue_lrcp0p$($receiver, valueLabelDisplay_metadata);
  }
  function set_valueLabelDisplay($receiver, valueLabelDisplay_0) {
    valueLabelDisplay.setValue_9rddgb$($receiver, valueLabelDisplay_metadata, valueLabelDisplay_0);
  }
  function mSlider$lambda(closure$min, closure$max, closure$step, closure$showMarks, closure$marks, closure$orientation, closure$disabled, closure$label, closure$labelledBy, closure$name, closure$component, closure$thumbComponent, closure$valueText, closure$onChange, closure$onChangeCommitted, closure$getAriaValueText, closure$valueLabelComponent, closure$valueLabelDisplay, closure$valueLabelFormat, closure$defaultValue, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      setCommonAttrs($receiver.attrs, closure$min, closure$max, closure$step, closure$showMarks, closure$marks, closure$orientation, closure$disabled, closure$label, closure$labelledBy, closure$name, closure$component, closure$thumbComponent, closure$valueText, closure$onChange, closure$onChangeCommitted, closure$getAriaValueText, closure$valueLabelComponent, closure$valueLabelDisplay, closure$valueLabelFormat);
      if (closure$defaultValue != null) {
        var it = closure$defaultValue;
        $receiver.attrs.defaultValue = it;
      }if (closure$value != null) {
        var it_0 = closure$value;
        $receiver.attrs.value = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSlider($receiver, value, min, max, step, showMarks, marks, defaultValue, orientation, disabled, label, labelledBy, name, component, thumbComponent, valueText, onChange, onChangeCommitted, getAriaValueText, valueLabelComponent, valueLabelDisplay, valueLabelFormat, addAsChild, className, handler) {
    if (value === void 0)
      value = null;
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 100;
    if (step === void 0)
      step = 1;
    if (showMarks === void 0)
      showMarks = false;
    if (marks === void 0)
      marks = emptyList();
    if (defaultValue === void 0)
      defaultValue = null;
    if (orientation === void 0)
      orientation = MSliderOrientation$horizontal_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (label === void 0)
      label = null;
    if (labelledBy === void 0)
      labelledBy = null;
    if (name === void 0)
      name = null;
    if (component === void 0)
      component = 'span';
    if (thumbComponent === void 0)
      thumbComponent = 'span';
    if (valueText === void 0)
      valueText = null;
    if (onChange === void 0)
      onChange = null;
    if (onChangeCommitted === void 0)
      onChangeCommitted = null;
    if (getAriaValueText === void 0)
      getAriaValueText = null;
    if (valueLabelComponent === void 0)
      valueLabelComponent = null;
    if (valueLabelDisplay === void 0)
      valueLabelDisplay = MSliderValueLabelDisplay$off_getInstance();
    if (valueLabelFormat === void 0)
      valueLabelFormat = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, sliderComponent, addAsChild, mSlider$lambda(min, max, step, showMarks, marks, orientation, disabled, label, labelledBy, name, component, thumbComponent, valueText, onChange, onChangeCommitted, getAriaValueText, valueLabelComponent, valueLabelDisplay, valueLabelFormat, defaultValue, value, className, handler));
  }
  function mSliderWithRange$lambda(closure$min, closure$max, closure$step, closure$showMarks, closure$marks, closure$orientation, closure$disabled, closure$label, closure$labelledBy, closure$name, closure$component, closure$thumbComponent, closure$valueText, closure$onChange, closure$onChangeCommitted, closure$getAriaValueText, closure$valueLabelComponent, closure$valueLabelDisplay, closure$valueLabelFormat, closure$defaultValue, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      setCommonAttrs($receiver.attrs, closure$min, closure$max, closure$step, closure$showMarks, closure$marks, closure$orientation, closure$disabled, closure$label, closure$labelledBy, closure$name, closure$component, closure$thumbComponent, closure$valueText, closure$onChange, closure$onChangeCommitted, closure$getAriaValueText, closure$valueLabelComponent, closure$valueLabelDisplay, closure$valueLabelFormat);
      if (closure$defaultValue != null) {
        var it = closure$defaultValue;
        $receiver.attrs.defaultValue = copyToArray(toList(it));
      }if (closure$value != null) {
        var it_0 = closure$value;
        $receiver.attrs.value = copyToArray(toList(it_0));
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSliderWithRange($receiver, value, min, max, step, showMarks, marks, defaultValue, orientation, disabled, label, labelledBy, name, component, thumbComponent, valueText, onChange, onChangeCommitted, getAriaValueText, valueLabelComponent, valueLabelDisplay, valueLabelFormat, addAsChild, className, handler) {
    if (value === void 0)
      value = null;
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 100;
    if (step === void 0)
      step = 1;
    if (showMarks === void 0)
      showMarks = false;
    if (marks === void 0)
      marks = emptyList();
    if (defaultValue === void 0)
      defaultValue = null;
    if (orientation === void 0)
      orientation = MSliderOrientation$horizontal_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (label === void 0)
      label = null;
    if (labelledBy === void 0)
      labelledBy = null;
    if (name === void 0)
      name = null;
    if (component === void 0)
      component = 'span';
    if (thumbComponent === void 0)
      thumbComponent = 'span';
    if (valueText === void 0)
      valueText = null;
    if (onChange === void 0)
      onChange = null;
    if (onChangeCommitted === void 0)
      onChangeCommitted = null;
    if (getAriaValueText === void 0)
      getAriaValueText = null;
    if (valueLabelComponent === void 0)
      valueLabelComponent = null;
    if (valueLabelDisplay === void 0)
      valueLabelDisplay = MSliderValueLabelDisplay$off_getInstance();
    if (valueLabelFormat === void 0)
      valueLabelFormat = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, sliderComponent, addAsChild, mSliderWithRange$lambda(min, max, step, showMarks, marks, orientation, disabled, label, labelledBy, name, component, thumbComponent, valueText, onChange, onChangeCommitted, getAriaValueText, valueLabelComponent, valueLabelDisplay, valueLabelFormat, defaultValue, value, className, handler));
  }
  function setCommonAttrs(attrs, min, max, step, showMarks, marks, orientation, disabled, label, labelledBy, name, component, thumbComponent, valueText, onChange, onChangeCommitted, getAriaValueText, valueLabelComponent, valueLabelDisplay, valueLabelFormat) {
    attrs.component = component;
    attrs['aria-label'] = label;
    attrs['aria-labelledby'] = labelledBy;
    attrs['aria-valuetext'] = valueText;
    attrs.component = component;
    attrs.disabled = disabled;
    if (getAriaValueText != null) {
      attrs.getAriaValueText = getAriaValueText;
    }if (showMarks) {
      attrs.marks = marks.isEmpty() ? true : copyToArray(marks);
    }attrs.max = max;
    attrs.min = min;
    if (name != null) {
      attrs.name = name;
    }if (onChange != null) {
      attrs.onChange = onChange;
    }if (onChangeCommitted != null) {
      attrs.onChangeCommitted = onChangeCommitted;
    }set_orientation_0(attrs, orientation);
    attrs.step = step;
    attrs.ThumbComponent = thumbComponent;
    if (valueLabelComponent != null) {
      attrs.ValueLabelComponent = valueLabelComponent;
    }set_valueLabelDisplay(attrs, valueLabelDisplay);
    if (valueLabelFormat != null) {
      attrs.valueLabelFormat = valueLabelFormat;
    }}
  var snackbarComponent;
  function MSnackbarHorizAnchor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MSnackbarHorizAnchor_initFields() {
    MSnackbarHorizAnchor_initFields = function () {
    };
    MSnackbarHorizAnchor$left_instance = new MSnackbarHorizAnchor('left', 0);
    MSnackbarHorizAnchor$center_instance = new MSnackbarHorizAnchor('center', 1);
    MSnackbarHorizAnchor$right_instance = new MSnackbarHorizAnchor('right', 2);
  }
  var MSnackbarHorizAnchor$left_instance;
  function MSnackbarHorizAnchor$left_getInstance() {
    MSnackbarHorizAnchor_initFields();
    return MSnackbarHorizAnchor$left_instance;
  }
  var MSnackbarHorizAnchor$center_instance;
  function MSnackbarHorizAnchor$center_getInstance() {
    MSnackbarHorizAnchor_initFields();
    return MSnackbarHorizAnchor$center_instance;
  }
  var MSnackbarHorizAnchor$right_instance;
  function MSnackbarHorizAnchor$right_getInstance() {
    MSnackbarHorizAnchor_initFields();
    return MSnackbarHorizAnchor$right_instance;
  }
  MSnackbarHorizAnchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSnackbarHorizAnchor',
    interfaces: [Enum]
  };
  function MSnackbarHorizAnchor$values() {
    return [MSnackbarHorizAnchor$left_getInstance(), MSnackbarHorizAnchor$center_getInstance(), MSnackbarHorizAnchor$right_getInstance()];
  }
  MSnackbarHorizAnchor.values = MSnackbarHorizAnchor$values;
  function MSnackbarHorizAnchor$valueOf(name) {
    switch (name) {
      case 'left':
        return MSnackbarHorizAnchor$left_getInstance();
      case 'center':
        return MSnackbarHorizAnchor$center_getInstance();
      case 'right':
        return MSnackbarHorizAnchor$right_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MSnackbarHorizAnchor.' + name);
    }
  }
  MSnackbarHorizAnchor.valueOf_61zpoe$ = MSnackbarHorizAnchor$valueOf;
  function MSnackbarVertAnchor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MSnackbarVertAnchor_initFields() {
    MSnackbarVertAnchor_initFields = function () {
    };
    MSnackbarVertAnchor$top_instance = new MSnackbarVertAnchor('top', 0);
    MSnackbarVertAnchor$bottom_instance = new MSnackbarVertAnchor('bottom', 1);
  }
  var MSnackbarVertAnchor$top_instance;
  function MSnackbarVertAnchor$top_getInstance() {
    MSnackbarVertAnchor_initFields();
    return MSnackbarVertAnchor$top_instance;
  }
  var MSnackbarVertAnchor$bottom_instance;
  function MSnackbarVertAnchor$bottom_getInstance() {
    MSnackbarVertAnchor_initFields();
    return MSnackbarVertAnchor$bottom_instance;
  }
  MSnackbarVertAnchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSnackbarVertAnchor',
    interfaces: [Enum]
  };
  function MSnackbarVertAnchor$values() {
    return [MSnackbarVertAnchor$top_getInstance(), MSnackbarVertAnchor$bottom_getInstance()];
  }
  MSnackbarVertAnchor.values = MSnackbarVertAnchor$values;
  function MSnackbarVertAnchor$valueOf(name) {
    switch (name) {
      case 'top':
        return MSnackbarVertAnchor$top_getInstance();
      case 'bottom':
        return MSnackbarVertAnchor$bottom_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MSnackbarVertAnchor.' + name);
    }
  }
  MSnackbarVertAnchor.valueOf_61zpoe$ = MSnackbarVertAnchor$valueOf;
  function MSnackbarOnCloseReason(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MSnackbarOnCloseReason_initFields() {
    MSnackbarOnCloseReason_initFields = function () {
    };
    MSnackbarOnCloseReason$timeout_instance = new MSnackbarOnCloseReason('timeout', 0);
    MSnackbarOnCloseReason$clickaway_instance = new MSnackbarOnCloseReason('clickaway', 1);
  }
  var MSnackbarOnCloseReason$timeout_instance;
  function MSnackbarOnCloseReason$timeout_getInstance() {
    MSnackbarOnCloseReason_initFields();
    return MSnackbarOnCloseReason$timeout_instance;
  }
  var MSnackbarOnCloseReason$clickaway_instance;
  function MSnackbarOnCloseReason$clickaway_getInstance() {
    MSnackbarOnCloseReason_initFields();
    return MSnackbarOnCloseReason$clickaway_instance;
  }
  MSnackbarOnCloseReason.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSnackbarOnCloseReason',
    interfaces: [Enum]
  };
  function MSnackbarOnCloseReason$values() {
    return [MSnackbarOnCloseReason$timeout_getInstance(), MSnackbarOnCloseReason$clickaway_getInstance()];
  }
  MSnackbarOnCloseReason.values = MSnackbarOnCloseReason$values;
  function MSnackbarOnCloseReason$valueOf(name) {
    switch (name) {
      case 'timeout':
        return MSnackbarOnCloseReason$timeout_getInstance();
      case 'clickaway':
        return MSnackbarOnCloseReason$clickaway_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MSnackbarOnCloseReason.' + name);
    }
  }
  MSnackbarOnCloseReason.valueOf_61zpoe$ = MSnackbarOnCloseReason$valueOf;
  function MSnackbarProps() {
  }
  MSnackbarProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSnackbarProps',
    interfaces: []
  };
  var anchorOriginHorizontal_1;
  var anchorOriginHorizontal_metadata_1 = new PropertyMetadata('anchorOriginHorizontal');
  function get_anchorOriginHorizontal_1($receiver) {
    return anchorOriginHorizontal_1.getValue_lrcp0p$($receiver, anchorOriginHorizontal_metadata_1);
  }
  function set_anchorOriginHorizontal_1($receiver, anchorOriginHorizontal) {
    anchorOriginHorizontal_1.setValue_9rddgb$($receiver, anchorOriginHorizontal_metadata_1, anchorOriginHorizontal);
  }
  var anchorOriginVertical_1;
  var anchorOriginVertical_metadata_1 = new PropertyMetadata('anchorOriginVertical');
  function get_anchorOriginVertical_1($receiver) {
    return anchorOriginVertical_1.getValue_lrcp0p$($receiver, anchorOriginVertical_metadata_1);
  }
  function set_anchorOriginVertical_1($receiver, anchorOriginVertical) {
    anchorOriginVertical_1.setValue_9rddgb$($receiver, anchorOriginVertical_metadata_1, anchorOriginVertical);
  }
  var onClose;
  var onClose_metadata = new PropertyMetadata('onClose');
  function get_onClose($receiver) {
    return onClose.getValue_lrcp0p$($receiver, onClose_metadata);
  }
  function set_onClose($receiver, onClose_0) {
    onClose.setValue_9rddgb$($receiver, onClose_metadata, onClose_0);
  }
  var transitionComponent_0;
  var transitionComponent_metadata_0 = new PropertyMetadata('transitionComponent');
  function get_transitionComponent_0($receiver) {
    return transitionComponent_0.getValue_lrcp0p$($receiver, transitionComponent_metadata_0);
  }
  function set_transitionComponent_0($receiver, transitionComponent) {
    transitionComponent_0.setValue_9rddgb$($receiver, transitionComponent_metadata_0, transitionComponent);
  }
  var transitionDuration_2;
  var transitionDuration_metadata_2 = new PropertyMetadata('transitionDuration');
  function get_transitionDuration_2($receiver) {
    return transitionDuration_2.getValue_lrcp0p$($receiver, transitionDuration_metadata_2);
  }
  function set_transitionDuration_2($receiver, transitionDuration) {
    transitionDuration_2.setValue_9rddgb$($receiver, transitionDuration_metadata_2, transitionDuration);
  }
  function mSnackbar$lambda(closure$horizAnchor, closure$vertAnchor, closure$autoHideDuration, closure$key, closure$message, closure$onClose, closure$open, closure$resumeHideDuration, closure$className, closure$handler) {
    return function ($receiver) {
      set_anchorOriginHorizontal_1($receiver.attrs, closure$horizAnchor);
      set_anchorOriginVertical_1($receiver.attrs, closure$vertAnchor);
      if (closure$autoHideDuration != null) {
        var it = closure$autoHideDuration;
        $receiver.attrs.autoHideDuration = it;
      }if (closure$key != null) {
        var it_0 = closure$key;
        $receiver.attrs.key = it_0;
      }if (closure$message != null) {
        var closure$message_0 = closure$message;
        $receiver.attrs.message = closure$message_0;
      }set_onClose($receiver.attrs, closure$onClose);
      if (closure$open != null) {
        var it_1 = closure$open;
        $receiver.attrs.open = it_1;
      }if (closure$resumeHideDuration != null) {
        var it_2 = closure$resumeHideDuration;
        $receiver.attrs.resumeHideDuration = it_2;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSnackbar($receiver, message, open, onClose, horizAnchor, vertAnchor, key, autoHideDuration, resumeHideDuration, className, handler) {
    if (open === void 0)
      open = null;
    if (onClose === void 0)
      onClose = null;
    if (horizAnchor === void 0)
      horizAnchor = MSnackbarHorizAnchor$center_getInstance();
    if (vertAnchor === void 0)
      vertAnchor = MSnackbarVertAnchor$bottom_getInstance();
    if (key === void 0)
      key = null;
    if (autoHideDuration === void 0)
      autoHideDuration = null;
    if (resumeHideDuration === void 0)
      resumeHideDuration = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, snackbarComponent, void 0, mSnackbar$lambda(horizAnchor, vertAnchor, autoHideDuration, key, message, onClose, open, resumeHideDuration, className, handler));
  }
  function mSnackbar_0($receiver, message, open, onClose, horizAnchor, vertAnchor, key, autoHideDuration, resumeHideDuration, className, handler) {
    if (open === void 0)
      open = null;
    if (onClose === void 0)
      onClose = null;
    if (horizAnchor === void 0)
      horizAnchor = MSnackbarHorizAnchor$center_getInstance();
    if (vertAnchor === void 0)
      vertAnchor = MSnackbarVertAnchor$bottom_getInstance();
    if (key === void 0)
      key = null;
    if (autoHideDuration === void 0)
      autoHideDuration = null;
    if (resumeHideDuration === void 0)
      resumeHideDuration = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var dynamicElement = message;
    return mSnackbar($receiver, dynamicElement, open, onClose, horizAnchor, vertAnchor, key, autoHideDuration, resumeHideDuration, className, handler);
  }
  function mSnackbar_1($receiver, open, onClose, horizAnchor, vertAnchor, key, autoHideDuration, resumeHideDuration, className, handler) {
    if (open === void 0)
      open = null;
    if (onClose === void 0)
      onClose = null;
    if (horizAnchor === void 0)
      horizAnchor = MSnackbarHorizAnchor$center_getInstance();
    if (vertAnchor === void 0)
      vertAnchor = MSnackbarVertAnchor$bottom_getInstance();
    if (key === void 0)
      key = null;
    if (autoHideDuration === void 0)
      autoHideDuration = null;
    if (resumeHideDuration === void 0)
      resumeHideDuration = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mSnackbar($receiver, null, open, onClose, horizAnchor, vertAnchor, key, autoHideDuration, resumeHideDuration, className, handler);
  }
  function StyledPropsWithCommonAttributes() {
  }
  StyledPropsWithCommonAttributes.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StyledPropsWithCommonAttributes',
    interfaces: [ReactHtmlElementEvents, ReactHtmlElementAttributes]
  };
  var component;
  function SvgShapeRendering(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SvgShapeRendering_initFields() {
    SvgShapeRendering_initFields = function () {
    };
    SvgShapeRendering$auto_instance = new SvgShapeRendering('auto', 0);
    SvgShapeRendering$optimizeSpeed_instance = new SvgShapeRendering('optimizeSpeed', 1);
    SvgShapeRendering$crispEdges_instance = new SvgShapeRendering('crispEdges', 2);
    SvgShapeRendering$geometricPrecision_instance = new SvgShapeRendering('geometricPrecision', 3);
  }
  var SvgShapeRendering$auto_instance;
  function SvgShapeRendering$auto_getInstance() {
    SvgShapeRendering_initFields();
    return SvgShapeRendering$auto_instance;
  }
  var SvgShapeRendering$optimizeSpeed_instance;
  function SvgShapeRendering$optimizeSpeed_getInstance() {
    SvgShapeRendering_initFields();
    return SvgShapeRendering$optimizeSpeed_instance;
  }
  var SvgShapeRendering$crispEdges_instance;
  function SvgShapeRendering$crispEdges_getInstance() {
    SvgShapeRendering_initFields();
    return SvgShapeRendering$crispEdges_instance;
  }
  var SvgShapeRendering$geometricPrecision_instance;
  function SvgShapeRendering$geometricPrecision_getInstance() {
    SvgShapeRendering_initFields();
    return SvgShapeRendering$geometricPrecision_instance;
  }
  SvgShapeRendering.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgShapeRendering',
    interfaces: [Enum]
  };
  function SvgShapeRendering$values() {
    return [SvgShapeRendering$auto_getInstance(), SvgShapeRendering$optimizeSpeed_getInstance(), SvgShapeRendering$crispEdges_getInstance(), SvgShapeRendering$geometricPrecision_getInstance()];
  }
  SvgShapeRendering.values = SvgShapeRendering$values;
  function SvgShapeRendering$valueOf(name) {
    switch (name) {
      case 'auto':
        return SvgShapeRendering$auto_getInstance();
      case 'optimizeSpeed':
        return SvgShapeRendering$optimizeSpeed_getInstance();
      case 'crispEdges':
        return SvgShapeRendering$crispEdges_getInstance();
      case 'geometricPrecision':
        return SvgShapeRendering$geometricPrecision_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.SvgShapeRendering.' + name);
    }
  }
  SvgShapeRendering.valueOf_61zpoe$ = SvgShapeRendering$valueOf;
  function MSvgIconProps() {
  }
  MSvgIconProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSvgIconProps',
    interfaces: [MIconProps]
  };
  var shapeRendering;
  var shapeRendering_metadata = new PropertyMetadata('shapeRendering');
  function get_shapeRendering($receiver) {
    return shapeRendering.getValue_lrcp0p$($receiver, shapeRendering_metadata);
  }
  function set_shapeRendering($receiver, shapeRendering_0) {
    shapeRendering.setValue_9rddgb$($receiver, shapeRendering_metadata, shapeRendering_0);
  }
  function mSvgIcon$lambda(closure$color, closure$htmlColor, closure$fontSize, closure$svgPath, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_4($receiver.attrs, closure$color);
      if (closure$htmlColor != null) {
        var it = closure$htmlColor;
        $receiver.attrs.htmlColor = it;
      }set_fontSize($receiver.attrs, closure$fontSize);
      var $receiver_0 = {};
      var props = $receiver_0;
      props.d = closure$svgPath;
      $receiver.childList.add_11rb$(createElement('path', props));
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSvgIcon($receiver, svgPath, color, htmlColor, fontSize, addAsChild, className, handler) {
    if (color === void 0)
      color = MIconColor$inherit_getInstance();
    if (htmlColor === void 0)
      htmlColor = null;
    if (fontSize === void 0)
      fontSize = MIconFontSize$default_getInstance();
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component, addAsChild, mSvgIcon$lambda(color, htmlColor, fontSize, svgPath, className, handler));
  }
  var swipeableDrawerComponent;
  function MSwipeableDrawerProps() {
  }
  MSwipeableDrawerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSwipeableDrawerProps',
    interfaces: [MDrawerProps]
  };
  function MSwipeAreaProps() {
  }
  MSwipeAreaProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSwipeAreaProps',
    interfaces: []
  };
  function mSwipeableDrawer$lambda(closure$anchor, closure$elevation, closure$swipeAreaWidth, closure$onClose, closure$open, closure$onOpen, closure$transitionDuration, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      set_anchor($receiver.attrs, closure$anchor);
      $receiver.attrs.elevation = closure$elevation;
      $receiver.attrs.swipeAreaWidth = closure$swipeAreaWidth;
      if (closure$onClose != null) {
        var it = closure$onClose;
        $receiver.attrs.onClose = it;
      }$receiver.attrs.open = closure$open;
      if (closure$onOpen != null) {
        var it_0 = closure$onOpen;
        $receiver.attrs.onOpen = it_0;
      }if (closure$transitionDuration != null) {
        var it_1 = closure$transitionDuration;
        set_transitionDuration_0($receiver.attrs, it_1);
      }set_variant_4($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSwipeableDrawer($receiver, open, anchor, variant, onOpen, onClose, swipeAreaWidth, elevation, transitionDuration, className, handler) {
    if (open === void 0)
      open = false;
    if (anchor === void 0)
      anchor = MDrawerAnchor$left_getInstance();
    if (variant === void 0)
      variant = MDrawerVariant$temporary_getInstance();
    if (onOpen === void 0)
      onOpen = null;
    if (onClose === void 0)
      onClose = null;
    if (swipeAreaWidth === void 0)
      swipeAreaWidth = 20;
    if (elevation === void 0)
      elevation = 16;
    if (transitionDuration === void 0)
      transitionDuration = null;
    if (className === void 0)
      className = null;
    return createStyled($receiver, swipeableDrawerComponent, void 0, mSwipeableDrawer$lambda(anchor, elevation, swipeAreaWidth, onClose, open, onOpen, transitionDuration, variant, className, handler));
  }
  var switchComponent;
  function MSwitchEdge(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MSwitchEdge_initFields() {
    MSwitchEdge_initFields = function () {
    };
    MSwitchEdge$start_instance = new MSwitchEdge('start', 0);
    MSwitchEdge$end_instance = new MSwitchEdge('end', 1);
  }
  var MSwitchEdge$start_instance;
  function MSwitchEdge$start_getInstance() {
    MSwitchEdge_initFields();
    return MSwitchEdge$start_instance;
  }
  var MSwitchEdge$end_instance;
  function MSwitchEdge$end_getInstance() {
    MSwitchEdge_initFields();
    return MSwitchEdge$end_instance;
  }
  MSwitchEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MSwitchEdge',
    interfaces: [Enum]
  };
  function MSwitchEdge$values() {
    return [MSwitchEdge$start_getInstance(), MSwitchEdge$end_getInstance()];
  }
  MSwitchEdge.values = MSwitchEdge$values;
  function MSwitchEdge$valueOf(name) {
    switch (name) {
      case 'start':
        return MSwitchEdge$start_getInstance();
      case 'end':
        return MSwitchEdge$end_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MSwitchEdge.' + name);
    }
  }
  MSwitchEdge.valueOf_61zpoe$ = MSwitchEdge$valueOf;
  function MSwitchProps() {
  }
  MSwitchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MSwitchProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var color_7;
  var color_metadata_7 = new PropertyMetadata('color');
  function get_color_7($receiver) {
    return color_7.getValue_lrcp0p$($receiver, color_metadata_7);
  }
  function set_color_7($receiver, color) {
    color_7.setValue_9rddgb$($receiver, color_metadata_7, color);
  }
  var edge;
  var edge_metadata = new PropertyMetadata('edge');
  function get_edge($receiver) {
    return edge.getValue_lrcp0p$($receiver, edge_metadata);
  }
  function set_edge($receiver, edge_0) {
    edge.setValue_9rddgb$($receiver, edge_metadata, edge_0);
  }
  var size_1;
  var size_metadata_1 = new PropertyMetadata('size');
  function get_size_2($receiver) {
    return size_1.getValue_lrcp0p$($receiver, size_metadata_1);
  }
  function set_size_2($receiver, size) {
    size_1.setValue_9rddgb$($receiver, size_metadata_1, size);
  }
  function mSwitch$lambda(closure$checked, closure$color, closure$disabled, closure$required, closure$edge, closure$id, closure$inputProps, closure$onChange, closure$size, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.checked = closure$checked;
      set_color_7($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$required != null) {
        var it = closure$required;
        $receiver.attrs.required = it;
      }if (closure$edge != null) {
        var it_0 = closure$edge;
        set_edge($receiver.attrs, it_0);
      }$receiver.attrs.disabled = closure$disabled;
      if (closure$id != null) {
        var closure$id_0 = closure$id;
        $receiver.attrs.id = closure$id_0;
      }if (closure$inputProps != null) {
        var closure$inputProps_0 = closure$inputProps;
        $receiver.attrs.inputProps = closure$inputProps_0;
      }if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }set_size_2($receiver.attrs, closure$size);
      $receiver.attrs.type = InputType.checkBox.realValue;
      if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mSwitch($receiver, checked, color, disabled, required, size, onChange, id, inputProps, value, edge, addAsChild, className, handler) {
    if (checked === void 0)
      checked = false;
    if (color === void 0)
      color = MOptionColor$secondary_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (required === void 0)
      required = null;
    if (size === void 0)
      size = MIconButtonSize$medium_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (id === void 0)
      id = null;
    if (inputProps === void 0)
      inputProps = null;
    if (value === void 0)
      value = null;
    if (edge === void 0)
      edge = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, switchComponent, addAsChild, mSwitch$lambda(checked, color, disabled, required, edge, id, inputProps, onChange, size, value, className, handler));
  }
  function mSwitchWithLabel($receiver, label, checked, color, disabled, required, size, onChange, id, inputProps, value, edge, className, handler) {
    if (checked === void 0)
      checked = false;
    if (color === void 0)
      color = MOptionColor$secondary_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (required === void 0)
      required = null;
    if (size === void 0)
      size = MIconButtonSize$medium_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (id === void 0)
      id = null;
    if (inputProps === void 0)
      inputProps = null;
    if (value === void 0)
      value = null;
    if (edge === void 0)
      edge = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var switch_0 = mSwitch($receiver, checked, color, disabled, required, size, onChange, id, inputProps, value, edge, false);
    return mFormControlLabel($receiver, label, switch_0, checked, disabled, value, void 0, void 0, void 0, className, handler);
  }
  var tabsComponent;
  function MTabTextColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTabTextColor_initFields() {
    MTabTextColor_initFields = function () {
    };
    MTabTextColor$secondary_instance = new MTabTextColor('secondary', 0);
    MTabTextColor$primary_instance = new MTabTextColor('primary', 1);
    MTabTextColor$inherit_instance = new MTabTextColor('inherit', 2);
  }
  var MTabTextColor$secondary_instance;
  function MTabTextColor$secondary_getInstance() {
    MTabTextColor_initFields();
    return MTabTextColor$secondary_instance;
  }
  var MTabTextColor$primary_instance;
  function MTabTextColor$primary_getInstance() {
    MTabTextColor_initFields();
    return MTabTextColor$primary_instance;
  }
  var MTabTextColor$inherit_instance;
  function MTabTextColor$inherit_getInstance() {
    MTabTextColor_initFields();
    return MTabTextColor$inherit_instance;
  }
  MTabTextColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTabTextColor',
    interfaces: [Enum]
  };
  function MTabTextColor$values() {
    return [MTabTextColor$secondary_getInstance(), MTabTextColor$primary_getInstance(), MTabTextColor$inherit_getInstance()];
  }
  MTabTextColor.values = MTabTextColor$values;
  function MTabTextColor$valueOf(name) {
    switch (name) {
      case 'secondary':
        return MTabTextColor$secondary_getInstance();
      case 'primary':
        return MTabTextColor$primary_getInstance();
      case 'inherit':
        return MTabTextColor$inherit_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTabTextColor.' + name);
    }
  }
  MTabTextColor.valueOf_61zpoe$ = MTabTextColor$valueOf;
  function MTabScrollButtons(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTabScrollButtons_initFields() {
    MTabScrollButtons_initFields = function () {
    };
    MTabScrollButtons$auto_instance = new MTabScrollButtons('auto', 0);
    MTabScrollButtons$desktop_instance = new MTabScrollButtons('desktop', 1);
    MTabScrollButtons$on_instance = new MTabScrollButtons('on', 2);
    MTabScrollButtons$off_instance = new MTabScrollButtons('off', 3);
  }
  var MTabScrollButtons$auto_instance;
  function MTabScrollButtons$auto_getInstance() {
    MTabScrollButtons_initFields();
    return MTabScrollButtons$auto_instance;
  }
  var MTabScrollButtons$desktop_instance;
  function MTabScrollButtons$desktop_getInstance() {
    MTabScrollButtons_initFields();
    return MTabScrollButtons$desktop_instance;
  }
  var MTabScrollButtons$on_instance;
  function MTabScrollButtons$on_getInstance() {
    MTabScrollButtons_initFields();
    return MTabScrollButtons$on_instance;
  }
  var MTabScrollButtons$off_instance;
  function MTabScrollButtons$off_getInstance() {
    MTabScrollButtons_initFields();
    return MTabScrollButtons$off_instance;
  }
  MTabScrollButtons.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTabScrollButtons',
    interfaces: [Enum]
  };
  function MTabScrollButtons$values() {
    return [MTabScrollButtons$auto_getInstance(), MTabScrollButtons$desktop_getInstance(), MTabScrollButtons$on_getInstance(), MTabScrollButtons$off_getInstance()];
  }
  MTabScrollButtons.values = MTabScrollButtons$values;
  function MTabScrollButtons$valueOf(name) {
    switch (name) {
      case 'auto':
        return MTabScrollButtons$auto_getInstance();
      case 'desktop':
        return MTabScrollButtons$desktop_getInstance();
      case 'on':
        return MTabScrollButtons$on_getInstance();
      case 'off':
        return MTabScrollButtons$off_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTabScrollButtons.' + name);
    }
  }
  MTabScrollButtons.valueOf_61zpoe$ = MTabScrollButtons$valueOf;
  function MTabIndicatorColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTabIndicatorColor_initFields() {
    MTabIndicatorColor_initFields = function () {
    };
    MTabIndicatorColor$secondary_instance = new MTabIndicatorColor('secondary', 0);
    MTabIndicatorColor$primary_instance = new MTabIndicatorColor('primary', 1);
  }
  var MTabIndicatorColor$secondary_instance;
  function MTabIndicatorColor$secondary_getInstance() {
    MTabIndicatorColor_initFields();
    return MTabIndicatorColor$secondary_instance;
  }
  var MTabIndicatorColor$primary_instance;
  function MTabIndicatorColor$primary_getInstance() {
    MTabIndicatorColor_initFields();
    return MTabIndicatorColor$primary_instance;
  }
  MTabIndicatorColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTabIndicatorColor',
    interfaces: [Enum]
  };
  function MTabIndicatorColor$values() {
    return [MTabIndicatorColor$secondary_getInstance(), MTabIndicatorColor$primary_getInstance()];
  }
  MTabIndicatorColor.values = MTabIndicatorColor$values;
  function MTabIndicatorColor$valueOf(name) {
    switch (name) {
      case 'secondary':
        return MTabIndicatorColor$secondary_getInstance();
      case 'primary':
        return MTabIndicatorColor$primary_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTabIndicatorColor.' + name);
    }
  }
  MTabIndicatorColor.valueOf_61zpoe$ = MTabIndicatorColor$valueOf;
  function MTabVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTabVariant_initFields() {
    MTabVariant_initFields = function () {
    };
    MTabVariant$standard_instance = new MTabVariant('standard', 0);
    MTabVariant$scrollable_instance = new MTabVariant('scrollable', 1);
    MTabVariant$fullWidth_instance = new MTabVariant('fullWidth', 2);
  }
  var MTabVariant$standard_instance;
  function MTabVariant$standard_getInstance() {
    MTabVariant_initFields();
    return MTabVariant$standard_instance;
  }
  var MTabVariant$scrollable_instance;
  function MTabVariant$scrollable_getInstance() {
    MTabVariant_initFields();
    return MTabVariant$scrollable_instance;
  }
  var MTabVariant$fullWidth_instance;
  function MTabVariant$fullWidth_getInstance() {
    MTabVariant_initFields();
    return MTabVariant$fullWidth_instance;
  }
  MTabVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTabVariant',
    interfaces: [Enum]
  };
  function MTabVariant$values() {
    return [MTabVariant$standard_getInstance(), MTabVariant$scrollable_getInstance(), MTabVariant$fullWidth_getInstance()];
  }
  MTabVariant.values = MTabVariant$values;
  function MTabVariant$valueOf(name) {
    switch (name) {
      case 'standard':
        return MTabVariant$standard_getInstance();
      case 'scrollable':
        return MTabVariant$scrollable_getInstance();
      case 'fullWidth':
        return MTabVariant$fullWidth_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTabVariant.' + name);
    }
  }
  MTabVariant.valueOf_61zpoe$ = MTabVariant$valueOf;
  function MTabOrientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTabOrientation_initFields() {
    MTabOrientation_initFields = function () {
    };
    MTabOrientation$horizontal_instance = new MTabOrientation('horizontal', 0);
    MTabOrientation$vertical_instance = new MTabOrientation('vertical', 1);
  }
  var MTabOrientation$horizontal_instance;
  function MTabOrientation$horizontal_getInstance() {
    MTabOrientation_initFields();
    return MTabOrientation$horizontal_instance;
  }
  var MTabOrientation$vertical_instance;
  function MTabOrientation$vertical_getInstance() {
    MTabOrientation_initFields();
    return MTabOrientation$vertical_instance;
  }
  MTabOrientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTabOrientation',
    interfaces: [Enum]
  };
  function MTabOrientation$values() {
    return [MTabOrientation$horizontal_getInstance(), MTabOrientation$vertical_getInstance()];
  }
  MTabOrientation.values = MTabOrientation$values;
  function MTabOrientation$valueOf(name) {
    switch (name) {
      case 'horizontal':
        return MTabOrientation$horizontal_getInstance();
      case 'vertical':
        return MTabOrientation$vertical_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTabOrientation.' + name);
    }
  }
  MTabOrientation.valueOf_61zpoe$ = MTabOrientation$valueOf;
  function MTabsProps() {
  }
  MTabsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTabsProps',
    interfaces: []
  };
  var indicatorColor;
  var indicatorColor_metadata = new PropertyMetadata('indicatorColor');
  function get_indicatorColor($receiver) {
    return indicatorColor.getValue_lrcp0p$($receiver, indicatorColor_metadata);
  }
  function set_indicatorColor($receiver, indicatorColor_0) {
    indicatorColor.setValue_9rddgb$($receiver, indicatorColor_metadata, indicatorColor_0);
  }
  var orientation_1;
  var orientation_metadata_1 = new PropertyMetadata('orientation');
  function get_orientation_1($receiver) {
    return orientation_1.getValue_lrcp0p$($receiver, orientation_metadata_1);
  }
  function set_orientation_1($receiver, orientation) {
    orientation_1.setValue_9rddgb$($receiver, orientation_metadata_1, orientation);
  }
  var scrollButtons;
  var scrollButtons_metadata = new PropertyMetadata('scrollButtons');
  function get_scrollButtons($receiver) {
    return scrollButtons.getValue_lrcp0p$($receiver, scrollButtons_metadata);
  }
  function set_scrollButtons($receiver, scrollButtons_0) {
    scrollButtons.setValue_9rddgb$($receiver, scrollButtons_metadata, scrollButtons_0);
  }
  var textColor;
  var textColor_metadata = new PropertyMetadata('textColor');
  function get_textColor($receiver) {
    return textColor.getValue_lrcp0p$($receiver, textColor_metadata);
  }
  function set_textColor($receiver, textColor_0) {
    textColor.setValue_9rddgb$($receiver, textColor_metadata, textColor_0);
  }
  var variant_8;
  var variant_metadata_8 = new PropertyMetadata('variant');
  function get_variant_8($receiver) {
    return variant_8.getValue_lrcp0p$($receiver, variant_metadata_8);
  }
  function set_variant_8($receiver, variant) {
    variant_8.setValue_9rddgb$($receiver, variant_metadata_8, variant);
  }
  function mTabs$lambda(closure$action, closure$centered, closure$indicatorColor, closure$onChange, closure$orientation, closure$scrollButtonComponent, closure$scrollButtons, closure$tabIndicatorProps, closure$textColor, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$action != null) {
        var it = closure$action;
        $receiver.attrs.action = it;
      }$receiver.attrs.centered = closure$centered;
      set_indicatorColor($receiver.attrs, closure$indicatorColor);
      if (closure$onChange != null) {
        var it_0 = closure$onChange;
        $receiver.attrs.onChange = it_0;
      }set_orientation_1($receiver.attrs, closure$orientation);
      if (closure$scrollButtonComponent != null) {
        var it_1 = closure$scrollButtonComponent;
        $receiver.attrs.ScrollButtonComponent = it_1;
      }set_scrollButtons($receiver.attrs, closure$scrollButtons);
      if (closure$tabIndicatorProps != null) {
        var it_2 = closure$tabIndicatorProps;
        $receiver.attrs.TabIndicatorProps = it_2;
      }set_textColor($receiver.attrs, closure$textColor);
      $receiver.attrs.value = closure$value;
      set_variant_8($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTabs($receiver, value, centered, variant, orientation, indicatorColor, textColor, tabIndicatorProps, scrollButtons, scrollButtonComponent, onChange, action, className, handler) {
    if (value === void 0)
      value = false;
    if (centered === void 0)
      centered = false;
    if (variant === void 0)
      variant = MTabVariant$standard_getInstance();
    if (orientation === void 0)
      orientation = MTabOrientation$horizontal_getInstance();
    if (indicatorColor === void 0)
      indicatorColor = MTabIndicatorColor$secondary_getInstance();
    if (textColor === void 0)
      textColor = MTabTextColor$inherit_getInstance();
    if (tabIndicatorProps === void 0)
      tabIndicatorProps = null;
    if (scrollButtons === void 0)
      scrollButtons = MTabScrollButtons$auto_getInstance();
    if (scrollButtonComponent === void 0)
      scrollButtonComponent = null;
    if (onChange === void 0)
      onChange = null;
    if (action === void 0)
      action = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tabsComponent, void 0, mTabs$lambda(action, centered, indicatorColor, onChange, orientation, scrollButtonComponent, scrollButtons, tabIndicatorProps, textColor, value, variant, className, handler));
  }
  var tabComponent;
  function MTabProps() {
  }
  MTabProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTabProps',
    interfaces: [MButtonBaseProps]
  };
  function mTab$lambda(closure$disabled, closure$disableFocusRipple, closure$disableRipple, closure$icon, closure$label, closure$value, closure$wrapped, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disabled = closure$disabled;
      if (closure$disableFocusRipple != null) {
        var it = closure$disableFocusRipple;
        $receiver.attrs.disableFocusRipple = it;
      }if (closure$disableRipple != null) {
        var it_0 = closure$disableRipple;
        $receiver.attrs.disableRipple = it_0;
      }if (closure$icon != null) {
        var closure$icon_0 = closure$icon;
        $receiver.attrs.icon = closure$icon_0;
      }if (closure$label != null) {
        var closure$label_0 = closure$label;
        $receiver.attrs.label = closure$label_0;
      }if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }$receiver.attrs.wrapped = closure$wrapped;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTab($receiver, label, value, icon, disabled, disableRipple, disableFocusRipple, wrapped, className, handler) {
    if (label === void 0)
      label = null;
    if (value === void 0)
      value = null;
    if (icon === void 0)
      icon = null;
    if (disabled === void 0)
      disabled = false;
    if (disableRipple === void 0)
      disableRipple = null;
    if (disableFocusRipple === void 0)
      disableFocusRipple = null;
    if (wrapped === void 0)
      wrapped = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tabComponent, void 0, mTab$lambda(disabled, disableFocusRipple, disableRipple, icon, label, value, wrapped, className, handler));
  }
  function mTab$lambda_0(closure$disabled, closure$icon, closure$label, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disabled = closure$disabled;
      if (closure$icon != null) {
        var closure$icon_0 = closure$icon;
        $receiver.attrs.icon = closure$icon_0;
      }$receiver.attrs.label = closure$label;
      $receiver.attrs.value = closure$value;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTab_0($receiver, label, value, icon, disabled, className, handler) {
    if (value === void 0)
      value = label;
    if (icon === void 0)
      icon = null;
    if (disabled === void 0)
      disabled = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tabComponent, void 0, mTab$lambda_0(disabled, icon, label, value, className, handler));
  }
  var textAreaAutosizeComponent;
  function MTextAreaAutosizeProps() {
  }
  MTextAreaAutosizeProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTextAreaAutosizeProps',
    interfaces: [MFormControlProps]
  };
  function mTextAreaAutosize$lambda(closure$rowsMax, closure$rowsMin, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$rowsMax != null) {
        var it = closure$rowsMax;
        $receiver.attrs.rowsMax = it;
      }$receiver.attrs.rowsMin = closure$rowsMin;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTextAreaAutosize($receiver, rowsMin, rowsMax, className, handler) {
    if (rowsMin === void 0)
      rowsMin = 1;
    if (rowsMax === void 0)
      rowsMax = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, textAreaAutosizeComponent, void 0, mTextAreaAutosize$lambda(rowsMax, rowsMin, className, handler));
  }
  var textFieldComponent;
  function MTextFieldColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTextFieldColor_initFields() {
    MTextFieldColor_initFields = function () {
    };
    MTextFieldColor$primary_instance = new MTextFieldColor('primary', 0);
    MTextFieldColor$secondary_instance = new MTextFieldColor('secondary', 1);
  }
  var MTextFieldColor$primary_instance;
  function MTextFieldColor$primary_getInstance() {
    MTextFieldColor_initFields();
    return MTextFieldColor$primary_instance;
  }
  var MTextFieldColor$secondary_instance;
  function MTextFieldColor$secondary_getInstance() {
    MTextFieldColor_initFields();
    return MTextFieldColor$secondary_instance;
  }
  MTextFieldColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTextFieldColor',
    interfaces: [Enum]
  };
  function MTextFieldColor$values() {
    return [MTextFieldColor$primary_getInstance(), MTextFieldColor$secondary_getInstance()];
  }
  MTextFieldColor.values = MTextFieldColor$values;
  function MTextFieldColor$valueOf(name) {
    switch (name) {
      case 'primary':
        return MTextFieldColor$primary_getInstance();
      case 'secondary':
        return MTextFieldColor$secondary_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTextFieldColor.' + name);
    }
  }
  MTextFieldColor.valueOf_61zpoe$ = MTextFieldColor$valueOf;
  function MTextFieldProps() {
  }
  MTextFieldProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTextFieldProps',
    interfaces: [MFormControlProps]
  };
  var color_8;
  var color_metadata_8 = new PropertyMetadata('color');
  function get_color_8($receiver) {
    return color_8.getValue_lrcp0p$($receiver, color_metadata_8);
  }
  function set_color_8($receiver, color) {
    color_8.setValue_9rddgb$($receiver, color_metadata_8, color);
  }
  function mTextField$lambda(closure$autoComplete, closure$autoFocus, closure$defaultValue, closure$disabled, closure$error, closure$fullWidth, closure$helperText, closure$id, closure$label, closure$margin, closure$name, closure$onChange, closure$placeholder, closure$required, closure$type, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoComplete != null) {
        var it = closure$autoComplete;
        $receiver.attrs.autoComplete = it;
      }$receiver.attrs.autoFocus = closure$autoFocus;
      if (closure$defaultValue != null) {
        var closure$defaultValue_0 = closure$defaultValue;
        $receiver.attrs.defaultValue = closure$defaultValue_0;
      }$receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.error = closure$error;
      $receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$helperText != null) {
        var closure$helperText_0 = closure$helperText;
        $receiver.attrs.helperText = closure$helperText_0;
      }if (closure$id != null) {
        var it_0 = closure$id;
        $receiver.attrs.id = it_0;
      }$receiver.attrs.label = closure$label;
      set_margin_0($receiver.attrs, closure$margin);
      $receiver.attrs.multiline = false;
      if (closure$name != null) {
        var it_1 = closure$name;
        $receiver.attrs.name = it_1;
      }if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }if (closure$placeholder != null) {
        var closure$placeholder_0 = closure$placeholder;
        $receiver.attrs.placeholder = closure$placeholder_0;
      }$receiver.attrs.required = closure$required;
      $receiver.attrs.select = false;
      $receiver.attrs.type = closure$type.toString();
      if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }set_variant_14($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTextField($receiver, label, value, helperText, defaultValue, placeholder, variant, onChange, type, required, disabled, error, autoFocus, fullWidth, margin, autoComplete, id, name, className, handler) {
    if (value === void 0)
      value = null;
    if (helperText === void 0)
      helperText = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (placeholder === void 0)
      placeholder = null;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (type === void 0)
      type = InputType.text;
    if (required === void 0)
      required = false;
    if (disabled === void 0)
      disabled = false;
    if (error === void 0)
      error = false;
    if (autoFocus === void 0)
      autoFocus = false;
    if (fullWidth === void 0)
      fullWidth = false;
    if (margin === void 0)
      margin = MFormControlMargin$normal_getInstance();
    if (autoComplete === void 0)
      autoComplete = null;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, textFieldComponent, void 0, mTextField$lambda(autoComplete, autoFocus, defaultValue, disabled, error, fullWidth, helperText, id, label, margin, name, onChange, placeholder, required, type, value, variant, className, handler));
  }
  function mTextFieldMultiLine$lambda(closure$autoFocus, closure$defaultValue, closure$disabled, closure$error, closure$fullWidth, closure$helperText, closure$id, closure$label, closure$margin, closure$name, closure$onChange, closure$placeholder, closure$required, closure$rows, closure$rowsMax, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.autoFocus = closure$autoFocus;
      if (closure$defaultValue != null) {
        var closure$defaultValue_0 = closure$defaultValue;
        $receiver.attrs.defaultValue = closure$defaultValue_0;
      }$receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.error = closure$error;
      $receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$helperText != null) {
        var closure$helperText_0 = closure$helperText;
        $receiver.attrs.helperText = closure$helperText_0;
      }if (closure$id != null) {
        var it = closure$id;
        $receiver.attrs.id = it;
      }$receiver.attrs.label = closure$label;
      set_margin_0($receiver.attrs, closure$margin);
      $receiver.attrs.multiline = true;
      if (closure$name != null) {
        var it_0 = closure$name;
        $receiver.attrs.name = it_0;
      }if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }if (closure$placeholder != null) {
        var closure$placeholder_0 = closure$placeholder;
        $receiver.attrs.placeholder = closure$placeholder_0;
      }$receiver.attrs.required = closure$required;
      if (closure$rows != null) {
        var closure$rows_0 = closure$rows;
        $receiver.attrs.rows = closure$rows_0;
      }if (closure$rowsMax != null) {
        var closure$rowsMax_0 = closure$rowsMax;
        $receiver.attrs.rowsMax = closure$rowsMax_0;
      }$receiver.attrs.select = false;
      $receiver.attrs.type = InputType.text.toString();
      if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }set_variant_14($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTextFieldMultiLine($receiver, label, value, helperText, defaultValue, placeholder, variant, onChange, required, disabled, error, autoFocus, fullWidth, margin, rows, rowsMax, id, name, className, handler) {
    if (value === void 0)
      value = null;
    if (helperText === void 0)
      helperText = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (placeholder === void 0)
      placeholder = null;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (required === void 0)
      required = false;
    if (disabled === void 0)
      disabled = false;
    if (error === void 0)
      error = false;
    if (autoFocus === void 0)
      autoFocus = false;
    if (fullWidth === void 0)
      fullWidth = false;
    if (margin === void 0)
      margin = MFormControlMargin$normal_getInstance();
    if (rows === void 0)
      rows = null;
    if (rowsMax === void 0)
      rowsMax = null;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, textFieldComponent, void 0, mTextFieldMultiLine$lambda(autoFocus, defaultValue, disabled, error, fullWidth, helperText, id, label, margin, name, onChange, placeholder, required, rows, rowsMax, value, variant, className, handler));
  }
  function mTextFieldSelect$lambda(closure$autoComplete, closure$autoFocus, closure$defaultValue, closure$disabled, closure$error, closure$fullWidth, closure$helperText, closure$id, closure$label, closure$margin, closure$name, closure$onChange, closure$placeholder, closure$required, closure$value, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoComplete != null) {
        var it = closure$autoComplete;
        $receiver.attrs.autoComplete = it;
      }$receiver.attrs.autoFocus = closure$autoFocus;
      if (closure$defaultValue != null) {
        var closure$defaultValue_0 = closure$defaultValue;
        $receiver.attrs.defaultValue = closure$defaultValue_0;
      }$receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.error = closure$error;
      $receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$helperText != null) {
        var closure$helperText_0 = closure$helperText;
        $receiver.attrs.helperText = closure$helperText_0;
      }if (closure$id != null) {
        var it_0 = closure$id;
        $receiver.attrs.id = it_0;
      }$receiver.attrs.label = closure$label;
      set_margin_0($receiver.attrs, closure$margin);
      $receiver.attrs.multiline = true;
      if (closure$name != null) {
        var it_1 = closure$name;
        $receiver.attrs.name = it_1;
      }if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }if (closure$placeholder != null) {
        var closure$placeholder_0 = closure$placeholder;
        $receiver.attrs.placeholder = closure$placeholder_0;
      }$receiver.attrs.required = closure$required;
      $receiver.attrs.select = true;
      $receiver.attrs.type = InputType.text.toString();
      if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }set_variant_14($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTextFieldSelect($receiver, label, value, helperText, defaultValue, placeholder, variant, onChange, required, disabled, error, autoFocus, fullWidth, margin, autoComplete, id, name, className, handler) {
    if (value === void 0)
      value = null;
    if (helperText === void 0)
      helperText = null;
    if (defaultValue === void 0)
      defaultValue = null;
    if (placeholder === void 0)
      placeholder = null;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (required === void 0)
      required = false;
    if (disabled === void 0)
      disabled = false;
    if (error === void 0)
      error = false;
    if (autoFocus === void 0)
      autoFocus = false;
    if (fullWidth === void 0)
      fullWidth = false;
    if (margin === void 0)
      margin = MFormControlMargin$normal_getInstance();
    if (autoComplete === void 0)
      autoComplete = null;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, textFieldComponent, void 0, mTextFieldSelect$lambda(autoComplete, autoFocus, defaultValue, disabled, error, fullWidth, helperText, id, label, margin, name, onChange, placeholder, required, value, variant, className, handler));
  }
  var themeOptions;
  var defaultTheme;
  var themeContext;
  function get_spacingUnits($receiver) {
    return get_px(defaultTheme.spacing($receiver));
  }
  function MThemeProvider(props) {
    RComponent_init(props, this);
  }
  function MThemeProvider$render$lambda$lambda(this$MThemeProvider) {
    return function ($receiver) {
      this$MThemeProvider.children_ss14n$($receiver);
      return Unit;
    };
  }
  function MThemeProvider$render$lambda(this$MThemeProvider) {
    return function ($receiver) {
      $receiver.invoke_csqs6z$(themeContext.Provider, this$MThemeProvider.props.theme, MThemeProvider$render$lambda$lambda(this$MThemeProvider));
      return Unit;
    };
  }
  MThemeProvider.prototype.render_ss14n$ = function ($receiver) {
    mMuiThemeProvider($receiver, this.props.theme, void 0, void 0, MThemeProvider$render$lambda(this));
  };
  MThemeProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MThemeProvider',
    interfaces: [RComponent]
  };
  function mThemeProvider$lambda(closure$theme, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.theme = closure$theme;
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mThemeProvider($receiver, theme, handler) {
    if (theme === void 0)
      theme = createMuiTheme();
    if (handler === void 0)
      handler = null;
    return $receiver.child_ssazr1$(getKClass(MThemeProvider), mThemeProvider$lambda(theme, handler));
  }
  var toolbarComponent;
  function ToolbarVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ToolbarVariant_initFields() {
    ToolbarVariant_initFields = function () {
    };
    ToolbarVariant$regular_instance = new ToolbarVariant('regular', 0);
    ToolbarVariant$dense_instance = new ToolbarVariant('dense', 1);
  }
  var ToolbarVariant$regular_instance;
  function ToolbarVariant$regular_getInstance() {
    ToolbarVariant_initFields();
    return ToolbarVariant$regular_instance;
  }
  var ToolbarVariant$dense_instance;
  function ToolbarVariant$dense_getInstance() {
    ToolbarVariant_initFields();
    return ToolbarVariant$dense_instance;
  }
  ToolbarVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToolbarVariant',
    interfaces: [Enum]
  };
  function ToolbarVariant$values() {
    return [ToolbarVariant$regular_getInstance(), ToolbarVariant$dense_getInstance()];
  }
  ToolbarVariant.values = ToolbarVariant$values;
  function ToolbarVariant$valueOf(name) {
    switch (name) {
      case 'regular':
        return ToolbarVariant$regular_getInstance();
      case 'dense':
        return ToolbarVariant$dense_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.ToolbarVariant.' + name);
    }
  }
  ToolbarVariant.valueOf_61zpoe$ = ToolbarVariant$valueOf;
  function MToolbarProps() {
  }
  MToolbarProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MToolbarProps',
    interfaces: []
  };
  var variant_9;
  var variant_metadata_9 = new PropertyMetadata('variant');
  function get_variant_9($receiver) {
    return variant_9.getValue_lrcp0p$($receiver, variant_metadata_9);
  }
  function set_variant_9($receiver, variant) {
    variant_9.setValue_9rddgb$($receiver, variant_metadata_9, variant);
  }
  function mToolbar$lambda(closure$disableGutters, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disableGutters = closure$disableGutters;
      set_variant_9($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mToolbar($receiver, disableGutters, variant, className, handler) {
    if (disableGutters === void 0)
      disableGutters = false;
    if (variant === void 0)
      variant = ToolbarVariant$regular_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, toolbarComponent, void 0, mToolbar$lambda(disableGutters, variant, className, handler));
  }
  function mToolbarTitle$lambda($receiver) {
    set_flexGrow($receiver.css, 1.0);
    return Unit;
  }
  function mToolbarTitle($receiver, text) {
    return mTypography($receiver, text, MTypographyVariant$h6_getInstance(), MTypographyColor$inherit_getInstance(), void 0, void 0, true, void 0, void 0, void 0, void 0, mToolbarTitle$lambda);
  }
  var tooltipComponent;
  function TooltipPlacement(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TooltipPlacement_initFields() {
    TooltipPlacement_initFields = function () {
    };
    TooltipPlacement$bottomEnd_instance = new TooltipPlacement('bottomEnd', 0);
    TooltipPlacement$bottomStart_instance = new TooltipPlacement('bottomStart', 1);
    TooltipPlacement$bottom_instance = new TooltipPlacement('bottom', 2);
    TooltipPlacement$leftEnd_instance = new TooltipPlacement('leftEnd', 3);
    TooltipPlacement$leftStart_instance = new TooltipPlacement('leftStart', 4);
    TooltipPlacement$left_instance = new TooltipPlacement('left', 5);
    TooltipPlacement$rightEnd_instance = new TooltipPlacement('rightEnd', 6);
    TooltipPlacement$rightStart_instance = new TooltipPlacement('rightStart', 7);
    TooltipPlacement$right_instance = new TooltipPlacement('right', 8);
    TooltipPlacement$topEnd_instance = new TooltipPlacement('topEnd', 9);
    TooltipPlacement$topStart_instance = new TooltipPlacement('topStart', 10);
    TooltipPlacement$top_instance = new TooltipPlacement('top', 11);
  }
  var TooltipPlacement$bottomEnd_instance;
  function TooltipPlacement$bottomEnd_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$bottomEnd_instance;
  }
  var TooltipPlacement$bottomStart_instance;
  function TooltipPlacement$bottomStart_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$bottomStart_instance;
  }
  var TooltipPlacement$bottom_instance;
  function TooltipPlacement$bottom_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$bottom_instance;
  }
  var TooltipPlacement$leftEnd_instance;
  function TooltipPlacement$leftEnd_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$leftEnd_instance;
  }
  var TooltipPlacement$leftStart_instance;
  function TooltipPlacement$leftStart_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$leftStart_instance;
  }
  var TooltipPlacement$left_instance;
  function TooltipPlacement$left_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$left_instance;
  }
  var TooltipPlacement$rightEnd_instance;
  function TooltipPlacement$rightEnd_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$rightEnd_instance;
  }
  var TooltipPlacement$rightStart_instance;
  function TooltipPlacement$rightStart_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$rightStart_instance;
  }
  var TooltipPlacement$right_instance;
  function TooltipPlacement$right_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$right_instance;
  }
  var TooltipPlacement$topEnd_instance;
  function TooltipPlacement$topEnd_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$topEnd_instance;
  }
  var TooltipPlacement$topStart_instance;
  function TooltipPlacement$topStart_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$topStart_instance;
  }
  var TooltipPlacement$top_instance;
  function TooltipPlacement$top_getInstance() {
    TooltipPlacement_initFields();
    return TooltipPlacement$top_instance;
  }
  TooltipPlacement.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  TooltipPlacement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TooltipPlacement',
    interfaces: [Enum]
  };
  function TooltipPlacement$values() {
    return [TooltipPlacement$bottomEnd_getInstance(), TooltipPlacement$bottomStart_getInstance(), TooltipPlacement$bottom_getInstance(), TooltipPlacement$leftEnd_getInstance(), TooltipPlacement$leftStart_getInstance(), TooltipPlacement$left_getInstance(), TooltipPlacement$rightEnd_getInstance(), TooltipPlacement$rightStart_getInstance(), TooltipPlacement$right_getInstance(), TooltipPlacement$topEnd_getInstance(), TooltipPlacement$topStart_getInstance(), TooltipPlacement$top_getInstance()];
  }
  TooltipPlacement.values = TooltipPlacement$values;
  function TooltipPlacement$valueOf(name) {
    switch (name) {
      case 'bottomEnd':
        return TooltipPlacement$bottomEnd_getInstance();
      case 'bottomStart':
        return TooltipPlacement$bottomStart_getInstance();
      case 'bottom':
        return TooltipPlacement$bottom_getInstance();
      case 'leftEnd':
        return TooltipPlacement$leftEnd_getInstance();
      case 'leftStart':
        return TooltipPlacement$leftStart_getInstance();
      case 'left':
        return TooltipPlacement$left_getInstance();
      case 'rightEnd':
        return TooltipPlacement$rightEnd_getInstance();
      case 'rightStart':
        return TooltipPlacement$rightStart_getInstance();
      case 'right':
        return TooltipPlacement$right_getInstance();
      case 'topEnd':
        return TooltipPlacement$topEnd_getInstance();
      case 'topStart':
        return TooltipPlacement$topStart_getInstance();
      case 'top':
        return TooltipPlacement$top_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.TooltipPlacement.' + name);
    }
  }
  TooltipPlacement.valueOf_61zpoe$ = TooltipPlacement$valueOf;
  function MTooltipProps() {
  }
  MTooltipProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTooltipProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var placement;
  var placement_metadata = new PropertyMetadata('placement');
  function get_placement($receiver) {
    return placement.getValue_lrcp0p$($receiver, placement_metadata);
  }
  function set_placement($receiver, placement_0) {
    placement.setValue_9rddgb$($receiver, placement_metadata, placement_0);
  }
  function mTooltip$lambda(closure$arrow, closure$enterDelay, closure$enterTouchDelay, closure$id, closure$leaveDelay, closure$leaveTouchDelay, closure$placement, closure$title, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.arrow = closure$arrow;
      if (closure$enterDelay != null) {
        var closure$enterDelay_0 = closure$enterDelay;
        $receiver.attrs.enterDelay = closure$enterDelay_0;
      }if (closure$enterTouchDelay != null) {
        var closure$enterTouchDelay_0 = closure$enterTouchDelay;
        $receiver.attrs.enterTouchDelay = closure$enterTouchDelay_0;
      }if (closure$id != null) {
        var closure$id_0 = closure$id;
        $receiver.attrs.id = closure$id_0;
      }if (closure$leaveDelay != null) {
        var closure$leaveDelay_0 = closure$leaveDelay;
        $receiver.attrs.leaveDelay = closure$leaveDelay_0;
      }if (closure$leaveTouchDelay != null) {
        var closure$leaveTouchDelay_0 = closure$leaveTouchDelay;
        $receiver.attrs.leaveTouchDelay = closure$leaveTouchDelay_0;
      }set_placement($receiver.attrs, closure$placement);
      $receiver.attrs.title = closure$title;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      $receiver.attrs.placement = get_placement($receiver.attrs).toString();
      return Unit;
    };
  }
  function mTooltip($receiver, title, placement, arrow, enterDelay, enterTouchDelay, leaveDelay, leaveTouchDelay, id, className, handler) {
    if (placement === void 0)
      placement = TooltipPlacement$bottom_getInstance();
    if (arrow === void 0)
      arrow = false;
    if (enterDelay === void 0)
      enterDelay = null;
    if (enterTouchDelay === void 0)
      enterTouchDelay = null;
    if (leaveDelay === void 0)
      leaveDelay = null;
    if (leaveTouchDelay === void 0)
      leaveTouchDelay = null;
    if (id === void 0)
      id = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tooltipComponent, void 0, mTooltip$lambda(arrow, enterDelay, enterTouchDelay, id, leaveDelay, leaveTouchDelay, placement, title, className, handler));
  }
  var typographyComponent;
  function MTypographyAlign(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTypographyAlign_initFields() {
    MTypographyAlign_initFields = function () {
    };
    MTypographyAlign$inherit_instance = new MTypographyAlign('inherit', 0);
    MTypographyAlign$left_instance = new MTypographyAlign('left', 1);
    MTypographyAlign$center_instance = new MTypographyAlign('center', 2);
    MTypographyAlign$right_instance = new MTypographyAlign('right', 3);
    MTypographyAlign$justify_instance = new MTypographyAlign('justify', 4);
  }
  var MTypographyAlign$inherit_instance;
  function MTypographyAlign$inherit_getInstance() {
    MTypographyAlign_initFields();
    return MTypographyAlign$inherit_instance;
  }
  var MTypographyAlign$left_instance;
  function MTypographyAlign$left_getInstance() {
    MTypographyAlign_initFields();
    return MTypographyAlign$left_instance;
  }
  var MTypographyAlign$center_instance;
  function MTypographyAlign$center_getInstance() {
    MTypographyAlign_initFields();
    return MTypographyAlign$center_instance;
  }
  var MTypographyAlign$right_instance;
  function MTypographyAlign$right_getInstance() {
    MTypographyAlign_initFields();
    return MTypographyAlign$right_instance;
  }
  var MTypographyAlign$justify_instance;
  function MTypographyAlign$justify_getInstance() {
    MTypographyAlign_initFields();
    return MTypographyAlign$justify_instance;
  }
  MTypographyAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTypographyAlign',
    interfaces: [Enum]
  };
  function MTypographyAlign$values() {
    return [MTypographyAlign$inherit_getInstance(), MTypographyAlign$left_getInstance(), MTypographyAlign$center_getInstance(), MTypographyAlign$right_getInstance(), MTypographyAlign$justify_getInstance()];
  }
  MTypographyAlign.values = MTypographyAlign$values;
  function MTypographyAlign$valueOf(name) {
    switch (name) {
      case 'inherit':
        return MTypographyAlign$inherit_getInstance();
      case 'left':
        return MTypographyAlign$left_getInstance();
      case 'center':
        return MTypographyAlign$center_getInstance();
      case 'right':
        return MTypographyAlign$right_getInstance();
      case 'justify':
        return MTypographyAlign$justify_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTypographyAlign.' + name);
    }
  }
  MTypographyAlign.valueOf_61zpoe$ = MTypographyAlign$valueOf;
  function MTypographyColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTypographyColor_initFields() {
    MTypographyColor_initFields = function () {
    };
    MTypographyColor$initial_instance = new MTypographyColor('initial', 0);
    MTypographyColor$inherit_instance = new MTypographyColor('inherit', 1);
    MTypographyColor$primary_instance = new MTypographyColor('primary', 2);
    MTypographyColor$secondary_instance = new MTypographyColor('secondary', 3);
    MTypographyColor$textPrimary_instance = new MTypographyColor('textPrimary', 4);
    MTypographyColor$textSecondary_instance = new MTypographyColor('textSecondary', 5);
    MTypographyColor$error_instance = new MTypographyColor('error', 6);
  }
  var MTypographyColor$initial_instance;
  function MTypographyColor$initial_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$initial_instance;
  }
  var MTypographyColor$inherit_instance;
  function MTypographyColor$inherit_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$inherit_instance;
  }
  var MTypographyColor$primary_instance;
  function MTypographyColor$primary_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$primary_instance;
  }
  var MTypographyColor$secondary_instance;
  function MTypographyColor$secondary_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$secondary_instance;
  }
  var MTypographyColor$textPrimary_instance;
  function MTypographyColor$textPrimary_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$textPrimary_instance;
  }
  var MTypographyColor$textSecondary_instance;
  function MTypographyColor$textSecondary_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$textSecondary_instance;
  }
  var MTypographyColor$error_instance;
  function MTypographyColor$error_getInstance() {
    MTypographyColor_initFields();
    return MTypographyColor$error_instance;
  }
  MTypographyColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTypographyColor',
    interfaces: [Enum]
  };
  function MTypographyColor$values() {
    return [MTypographyColor$initial_getInstance(), MTypographyColor$inherit_getInstance(), MTypographyColor$primary_getInstance(), MTypographyColor$secondary_getInstance(), MTypographyColor$textPrimary_getInstance(), MTypographyColor$textSecondary_getInstance(), MTypographyColor$error_getInstance()];
  }
  MTypographyColor.values = MTypographyColor$values;
  function MTypographyColor$valueOf(name) {
    switch (name) {
      case 'initial':
        return MTypographyColor$initial_getInstance();
      case 'inherit':
        return MTypographyColor$inherit_getInstance();
      case 'primary':
        return MTypographyColor$primary_getInstance();
      case 'secondary':
        return MTypographyColor$secondary_getInstance();
      case 'textPrimary':
        return MTypographyColor$textPrimary_getInstance();
      case 'textSecondary':
        return MTypographyColor$textSecondary_getInstance();
      case 'error':
        return MTypographyColor$error_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTypographyColor.' + name);
    }
  }
  MTypographyColor.valueOf_61zpoe$ = MTypographyColor$valueOf;
  function MTypographyVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTypographyVariant_initFields() {
    MTypographyVariant_initFields = function () {
    };
    MTypographyVariant$h1_instance = new MTypographyVariant('h1', 0);
    MTypographyVariant$h2_instance = new MTypographyVariant('h2', 1);
    MTypographyVariant$h3_instance = new MTypographyVariant('h3', 2);
    MTypographyVariant$h4_instance = new MTypographyVariant('h4', 3);
    MTypographyVariant$h5_instance = new MTypographyVariant('h5', 4);
    MTypographyVariant$h6_instance = new MTypographyVariant('h6', 5);
    MTypographyVariant$subtitle1_instance = new MTypographyVariant('subtitle1', 6);
    MTypographyVariant$subtitle2_instance = new MTypographyVariant('subtitle2', 7);
    MTypographyVariant$body1_instance = new MTypographyVariant('body1', 8);
    MTypographyVariant$body2_instance = new MTypographyVariant('body2', 9);
    MTypographyVariant$caption_instance = new MTypographyVariant('caption', 10);
    MTypographyVariant$button_instance = new MTypographyVariant('button', 11);
    MTypographyVariant$overline_instance = new MTypographyVariant('overline', 12);
    MTypographyVariant$srOnly_instance = new MTypographyVariant('srOnly', 13);
    MTypographyVariant$inherit_instance = new MTypographyVariant('inherit', 14);
  }
  var MTypographyVariant$h1_instance;
  function MTypographyVariant$h1_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$h1_instance;
  }
  var MTypographyVariant$h2_instance;
  function MTypographyVariant$h2_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$h2_instance;
  }
  var MTypographyVariant$h3_instance;
  function MTypographyVariant$h3_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$h3_instance;
  }
  var MTypographyVariant$h4_instance;
  function MTypographyVariant$h4_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$h4_instance;
  }
  var MTypographyVariant$h5_instance;
  function MTypographyVariant$h5_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$h5_instance;
  }
  var MTypographyVariant$h6_instance;
  function MTypographyVariant$h6_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$h6_instance;
  }
  var MTypographyVariant$subtitle1_instance;
  function MTypographyVariant$subtitle1_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$subtitle1_instance;
  }
  var MTypographyVariant$subtitle2_instance;
  function MTypographyVariant$subtitle2_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$subtitle2_instance;
  }
  var MTypographyVariant$body1_instance;
  function MTypographyVariant$body1_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$body1_instance;
  }
  var MTypographyVariant$body2_instance;
  function MTypographyVariant$body2_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$body2_instance;
  }
  var MTypographyVariant$caption_instance;
  function MTypographyVariant$caption_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$caption_instance;
  }
  var MTypographyVariant$button_instance;
  function MTypographyVariant$button_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$button_instance;
  }
  var MTypographyVariant$overline_instance;
  function MTypographyVariant$overline_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$overline_instance;
  }
  var MTypographyVariant$srOnly_instance;
  function MTypographyVariant$srOnly_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$srOnly_instance;
  }
  var MTypographyVariant$inherit_instance;
  function MTypographyVariant$inherit_getInstance() {
    MTypographyVariant_initFields();
    return MTypographyVariant$inherit_instance;
  }
  MTypographyVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTypographyVariant',
    interfaces: [Enum]
  };
  function MTypographyVariant$values() {
    return [MTypographyVariant$h1_getInstance(), MTypographyVariant$h2_getInstance(), MTypographyVariant$h3_getInstance(), MTypographyVariant$h4_getInstance(), MTypographyVariant$h5_getInstance(), MTypographyVariant$h6_getInstance(), MTypographyVariant$subtitle1_getInstance(), MTypographyVariant$subtitle2_getInstance(), MTypographyVariant$body1_getInstance(), MTypographyVariant$body2_getInstance(), MTypographyVariant$caption_getInstance(), MTypographyVariant$button_getInstance(), MTypographyVariant$overline_getInstance(), MTypographyVariant$srOnly_getInstance(), MTypographyVariant$inherit_getInstance()];
  }
  MTypographyVariant.values = MTypographyVariant$values;
  function MTypographyVariant$valueOf(name) {
    switch (name) {
      case 'h1':
        return MTypographyVariant$h1_getInstance();
      case 'h2':
        return MTypographyVariant$h2_getInstance();
      case 'h3':
        return MTypographyVariant$h3_getInstance();
      case 'h4':
        return MTypographyVariant$h4_getInstance();
      case 'h5':
        return MTypographyVariant$h5_getInstance();
      case 'h6':
        return MTypographyVariant$h6_getInstance();
      case 'subtitle1':
        return MTypographyVariant$subtitle1_getInstance();
      case 'subtitle2':
        return MTypographyVariant$subtitle2_getInstance();
      case 'body1':
        return MTypographyVariant$body1_getInstance();
      case 'body2':
        return MTypographyVariant$body2_getInstance();
      case 'caption':
        return MTypographyVariant$caption_getInstance();
      case 'button':
        return MTypographyVariant$button_getInstance();
      case 'overline':
        return MTypographyVariant$overline_getInstance();
      case 'srOnly':
        return MTypographyVariant$srOnly_getInstance();
      case 'inherit':
        return MTypographyVariant$inherit_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.MTypographyVariant.' + name);
    }
  }
  MTypographyVariant.valueOf_61zpoe$ = MTypographyVariant$valueOf;
  function MTypographyProps() {
  }
  MTypographyProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTypographyProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var align;
  var align_metadata = new PropertyMetadata('align');
  function get_align($receiver) {
    return align.getValue_lrcp0p$($receiver, align_metadata);
  }
  function set_align($receiver, align_0) {
    align.setValue_9rddgb$($receiver, align_metadata, align_0);
  }
  var color_9;
  var color_metadata_9 = new PropertyMetadata('color');
  function get_color_9($receiver) {
    return color_9.getValue_lrcp0p$($receiver, color_metadata_9);
  }
  function set_color_9($receiver, color) {
    color_9.setValue_9rddgb$($receiver, color_metadata_9, color);
  }
  var variant_10;
  var variant_metadata_10 = new PropertyMetadata('variant');
  function get_variant_10($receiver) {
    return variant_10.getValue_lrcp0p$($receiver, variant_metadata_10);
  }
  function set_variant_10($receiver, variant) {
    variant_10.setValue_9rddgb$($receiver, variant_metadata_10, variant);
  }
  function mTypography$lambda(closure$align, closure$color, closure$component, closure$gutterBottom, closure$noWrap, closure$paragraph, closure$variant, closure$text, closure$className, closure$handler) {
    return function ($receiver) {
      set_align($receiver.attrs, closure$align);
      set_color_9($receiver.attrs, closure$color);
      if (closure$component != null) {
        var it = closure$component;
        $receiver.attrs.component = it;
      }$receiver.attrs.gutterBottom = closure$gutterBottom;
      $receiver.attrs.noWrap = closure$noWrap;
      $receiver.attrs.paragraph = closure$paragraph;
      set_variant_10($receiver.attrs, closure$variant);
      if (closure$text != null) {
        var it_0 = closure$text;
        $receiver.childList.add_11rb$(it_0);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTypography($receiver, text, variant, color, align, gutterBottom, noWrap, paragraph, component, addAsChild, className, handler) {
    if (text === void 0)
      text = null;
    if (variant === void 0)
      variant = MTypographyVariant$body1_getInstance();
    if (color === void 0)
      color = MTypographyColor$initial_getInstance();
    if (align === void 0)
      align = MTypographyAlign$left_getInstance();
    if (gutterBottom === void 0)
      gutterBottom = false;
    if (noWrap === void 0)
      noWrap = false;
    if (paragraph === void 0)
      paragraph = false;
    if (component === void 0)
      component = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, typographyComponent, addAsChild, mTypography$lambda(align, color, component, gutterBottom, noWrap, paragraph, variant, text, className, handler));
  }
  var component_0;
  function MAccordionProps() {
  }
  MAccordionProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MAccordionProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var transitionComponent_1;
  var transitionComponent_metadata_1 = new PropertyMetadata('transitionComponent');
  function get_transitionComponent_1($receiver) {
    return transitionComponent_1.getValue_lrcp0p$($receiver, transitionComponent_metadata_1);
  }
  function set_transitionComponent_1($receiver, transitionComponent) {
    transitionComponent_1.setValue_9rddgb$($receiver, transitionComponent_metadata_1, transitionComponent);
  }
  function mAccordion$lambda(closure$defaultExpanded, closure$disabled, closure$square, closure$expanded, closure$onChange, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.defaultExpanded = closure$defaultExpanded;
      $receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.square = closure$square;
      if (closure$expanded != null) {
        var it = closure$expanded;
        $receiver.attrs.expanded = it;
      }if (closure$onChange != null) {
        var it_0 = closure$onChange;
        $receiver.attrs.onChange = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAccordion($receiver, expanded, defaultExpanded, disabled, square, onChange, className, handler) {
    if (expanded === void 0)
      expanded = null;
    if (defaultExpanded === void 0)
      defaultExpanded = false;
    if (disabled === void 0)
      disabled = false;
    if (square === void 0)
      square = false;
    if (onChange === void 0)
      onChange = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_0, void 0, mAccordion$lambda(defaultExpanded, disabled, square, expanded, onChange, className, handler));
  }
  var component_1;
  function MAccordionActionsProps() {
  }
  MAccordionActionsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MAccordionActionsProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mAccordionActions$lambda(closure$disableSpacing, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$disableSpacing != null) {
        var it = closure$disableSpacing;
        $receiver.attrs.disableSpacing = it;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAccordionActions($receiver, disableSpacing, className, handler) {
    if (disableSpacing === void 0)
      disableSpacing = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_1, void 0, mAccordionActions$lambda(disableSpacing, className, handler));
  }
  var component_2;
  function mAccordionDetails$lambda(closure$className, closure$handler) {
    return function ($receiver) {
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAccordionDetails($receiver, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_2, void 0, mAccordionDetails$lambda(className, handler));
  }
  var component_3;
  function MAccordionSummaryProps() {
  }
  MAccordionSummaryProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MAccordionSummaryProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mAccordionSummary$lambda(closure$expandIcon, closure$iconButtonProps, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$expandIcon != null) {
        var it = closure$expandIcon;
        $receiver.attrs.expandIcon = it;
      }if (closure$iconButtonProps != null) {
        var it_0 = closure$iconButtonProps;
        $receiver.attrs.iconButtonProps = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAccordionSummary($receiver, expandIcon, iconButtonProps, className, handler) {
    if (expandIcon === void 0)
      expandIcon = null;
    if (iconButtonProps === void 0)
      iconButtonProps = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_3, void 0, mAccordionSummary$lambda(expandIcon, iconButtonProps, className, handler));
  }
  var buttonComponent;
  function MButtonProps() {
  }
  MButtonProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MButtonProps',
    interfaces: [MButtonBaseProps]
  };
  var color_10;
  var color_metadata_10 = new PropertyMetadata('color');
  function get_color_10($receiver) {
    return color_10.getValue_lrcp0p$($receiver, color_metadata_10);
  }
  function set_color_10($receiver, color) {
    color_10.setValue_9rddgb$($receiver, color_metadata_10, color);
  }
  var size_2;
  var size_metadata_2 = new PropertyMetadata('size');
  function get_size_3($receiver) {
    return size_2.getValue_lrcp0p$($receiver, size_metadata_2);
  }
  function set_size_3($receiver, size) {
    size_2.setValue_9rddgb$($receiver, size_metadata_2, size);
  }
  var variant_11;
  var variant_metadata_11 = new PropertyMetadata('variant');
  function get_variant_11($receiver) {
    return variant_11.getValue_lrcp0p$($receiver, variant_metadata_11);
  }
  function set_variant_11($receiver, variant) {
    variant_11.setValue_9rddgb$($receiver, variant_metadata_11, variant);
  }
  function mButton$lambda(closure$color, closure$disabled, closure$hRefOptions, closure$onClick, closure$size, closure$variant, closure$caption, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_10($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$hRefOptions != null) {
        var it = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it);
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }set_size_3($receiver.attrs, closure$size);
      set_variant_11($receiver.attrs, closure$variant);
      $receiver.childList.add_11rb$(closure$caption);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mButton($receiver, caption, color, variant, disabled, onClick, size, hRefOptions, addAsChild, className, handler) {
    if (color === void 0)
      color = MColor$default_getInstance();
    if (variant === void 0)
      variant = null;
    if (disabled === void 0)
      disabled = false;
    if (onClick === void 0)
      onClick = null;
    if (size === void 0)
      size = MButtonSize$medium_getInstance();
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, buttonComponent, addAsChild, mButton$lambda(color, disabled, hRefOptions, onClick, size, variant, caption, className, handler));
  }
  function MButtonBaseProps() {
  }
  MButtonBaseProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MButtonBaseProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function MButtonSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MButtonSize_initFields() {
    MButtonSize_initFields = function () {
    };
    MButtonSize$small_instance = new MButtonSize('small', 0);
    MButtonSize$medium_instance = new MButtonSize('medium', 1);
    MButtonSize$large_instance = new MButtonSize('large', 2);
  }
  var MButtonSize$small_instance;
  function MButtonSize$small_getInstance() {
    MButtonSize_initFields();
    return MButtonSize$small_instance;
  }
  var MButtonSize$medium_instance;
  function MButtonSize$medium_getInstance() {
    MButtonSize_initFields();
    return MButtonSize$medium_instance;
  }
  var MButtonSize$large_instance;
  function MButtonSize$large_getInstance() {
    MButtonSize_initFields();
    return MButtonSize$large_instance;
  }
  MButtonSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MButtonSize',
    interfaces: [Enum]
  };
  function MButtonSize$values() {
    return [MButtonSize$small_getInstance(), MButtonSize$medium_getInstance(), MButtonSize$large_getInstance()];
  }
  MButtonSize.values = MButtonSize$values;
  function MButtonSize$valueOf(name) {
    switch (name) {
      case 'small':
        return MButtonSize$small_getInstance();
      case 'medium':
        return MButtonSize$medium_getInstance();
      case 'large':
        return MButtonSize$large_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MButtonSize.' + name);
    }
  }
  MButtonSize.valueOf_61zpoe$ = MButtonSize$valueOf;
  function MButtonVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MButtonVariant_initFields() {
    MButtonVariant_initFields = function () {
    };
    MButtonVariant$text_instance = new MButtonVariant('text', 0);
    MButtonVariant$outlined_instance = new MButtonVariant('outlined', 1);
    MButtonVariant$contained_instance = new MButtonVariant('contained', 2);
  }
  var MButtonVariant$text_instance;
  function MButtonVariant$text_getInstance() {
    MButtonVariant_initFields();
    return MButtonVariant$text_instance;
  }
  var MButtonVariant$outlined_instance;
  function MButtonVariant$outlined_getInstance() {
    MButtonVariant_initFields();
    return MButtonVariant$outlined_instance;
  }
  var MButtonVariant$contained_instance;
  function MButtonVariant$contained_getInstance() {
    MButtonVariant_initFields();
    return MButtonVariant$contained_instance;
  }
  MButtonVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MButtonVariant',
    interfaces: [Enum]
  };
  function MButtonVariant$values() {
    return [MButtonVariant$text_getInstance(), MButtonVariant$outlined_getInstance(), MButtonVariant$contained_getInstance()];
  }
  MButtonVariant.values = MButtonVariant$values;
  function MButtonVariant$valueOf(name) {
    switch (name) {
      case 'text':
        return MButtonVariant$text_getInstance();
      case 'outlined':
        return MButtonVariant$outlined_getInstance();
      case 'contained':
        return MButtonVariant$contained_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MButtonVariant.' + name);
    }
  }
  MButtonVariant.valueOf_61zpoe$ = MButtonVariant$valueOf;
  var buttonGroupComponent;
  function MButtonGroupVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MButtonGroupVariant_initFields() {
    MButtonGroupVariant_initFields = function () {
    };
    MButtonGroupVariant$text_instance = new MButtonGroupVariant('text', 0);
    MButtonGroupVariant$outlined_instance = new MButtonGroupVariant('outlined', 1);
    MButtonGroupVariant$contained_instance = new MButtonGroupVariant('contained', 2);
  }
  var MButtonGroupVariant$text_instance;
  function MButtonGroupVariant$text_getInstance() {
    MButtonGroupVariant_initFields();
    return MButtonGroupVariant$text_instance;
  }
  var MButtonGroupVariant$outlined_instance;
  function MButtonGroupVariant$outlined_getInstance() {
    MButtonGroupVariant_initFields();
    return MButtonGroupVariant$outlined_instance;
  }
  var MButtonGroupVariant$contained_instance;
  function MButtonGroupVariant$contained_getInstance() {
    MButtonGroupVariant_initFields();
    return MButtonGroupVariant$contained_instance;
  }
  MButtonGroupVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MButtonGroupVariant',
    interfaces: [Enum]
  };
  function MButtonGroupVariant$values() {
    return [MButtonGroupVariant$text_getInstance(), MButtonGroupVariant$outlined_getInstance(), MButtonGroupVariant$contained_getInstance()];
  }
  MButtonGroupVariant.values = MButtonGroupVariant$values;
  function MButtonGroupVariant$valueOf(name) {
    switch (name) {
      case 'text':
        return MButtonGroupVariant$text_getInstance();
      case 'outlined':
        return MButtonGroupVariant$outlined_getInstance();
      case 'contained':
        return MButtonGroupVariant$contained_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MButtonGroupVariant.' + name);
    }
  }
  MButtonGroupVariant.valueOf_61zpoe$ = MButtonGroupVariant$valueOf;
  function MButtonGroupOrientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MButtonGroupOrientation_initFields() {
    MButtonGroupOrientation_initFields = function () {
    };
    MButtonGroupOrientation$vertical_instance = new MButtonGroupOrientation('vertical', 0);
    MButtonGroupOrientation$horizontal_instance = new MButtonGroupOrientation('horizontal', 1);
  }
  var MButtonGroupOrientation$vertical_instance;
  function MButtonGroupOrientation$vertical_getInstance() {
    MButtonGroupOrientation_initFields();
    return MButtonGroupOrientation$vertical_instance;
  }
  var MButtonGroupOrientation$horizontal_instance;
  function MButtonGroupOrientation$horizontal_getInstance() {
    MButtonGroupOrientation_initFields();
    return MButtonGroupOrientation$horizontal_instance;
  }
  MButtonGroupOrientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MButtonGroupOrientation',
    interfaces: [Enum]
  };
  function MButtonGroupOrientation$values() {
    return [MButtonGroupOrientation$vertical_getInstance(), MButtonGroupOrientation$horizontal_getInstance()];
  }
  MButtonGroupOrientation.values = MButtonGroupOrientation$values;
  function MButtonGroupOrientation$valueOf(name) {
    switch (name) {
      case 'vertical':
        return MButtonGroupOrientation$vertical_getInstance();
      case 'horizontal':
        return MButtonGroupOrientation$horizontal_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MButtonGroupOrientation.' + name);
    }
  }
  MButtonGroupOrientation.valueOf_61zpoe$ = MButtonGroupOrientation$valueOf;
  function MButtonGroupProps() {
  }
  MButtonGroupProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MButtonGroupProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var color_11;
  var color_metadata_11 = new PropertyMetadata('color');
  function get_color_11($receiver) {
    return color_11.getValue_lrcp0p$($receiver, color_metadata_11);
  }
  function set_color_11($receiver, color) {
    color_11.setValue_9rddgb$($receiver, color_metadata_11, color);
  }
  var orientation_2;
  var orientation_metadata_2 = new PropertyMetadata('orientation');
  function get_orientation_2($receiver) {
    return orientation_2.getValue_lrcp0p$($receiver, orientation_metadata_2);
  }
  function set_orientation_2($receiver, orientation) {
    orientation_2.setValue_9rddgb$($receiver, orientation_metadata_2, orientation);
  }
  var size_3;
  var size_metadata_3 = new PropertyMetadata('size');
  function get_size_4($receiver) {
    return size_3.getValue_lrcp0p$($receiver, size_metadata_3);
  }
  function set_size_4($receiver, size) {
    size_3.setValue_9rddgb$($receiver, size_metadata_3, size);
  }
  var variant_12;
  var variant_metadata_12 = new PropertyMetadata('variant');
  function get_variant_12($receiver) {
    return variant_12.getValue_lrcp0p$($receiver, variant_metadata_12);
  }
  function set_variant_12($receiver, variant) {
    variant_12.setValue_9rddgb$($receiver, variant_metadata_12, variant);
  }
  function mButtonGroup$lambda(closure$color, closure$component, closure$disabled, closure$disableFocusRipple, closure$disableRipple, closure$fullWidth, closure$orientation, closure$size, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_11($receiver.attrs, closure$color);
      if (closure$component != null) {
        var closure$component_0 = closure$component;
        $receiver.attrs.component = closure$component_0;
      }$receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.disableFocusRipple = closure$disableFocusRipple;
      $receiver.attrs.disableRipple = closure$disableRipple;
      $receiver.attrs.fullWidth = closure$fullWidth;
      set_orientation_2($receiver.attrs, closure$orientation);
      set_size_4($receiver.attrs, closure$size);
      set_variant_12($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mButtonGroup($receiver, color, variant, orientation, size, fullWidth, disabled, component, disableFocusRipple, disableRipple, className, handler) {
    if (color === void 0)
      color = MColor$default_getInstance();
    if (variant === void 0)
      variant = MButtonGroupVariant$outlined_getInstance();
    if (orientation === void 0)
      orientation = MButtonGroupOrientation$horizontal_getInstance();
    if (size === void 0)
      size = MButtonSize$medium_getInstance();
    if (fullWidth === void 0)
      fullWidth = false;
    if (disabled === void 0)
      disabled = false;
    if (component === void 0)
      component = null;
    if (disableFocusRipple === void 0)
      disableFocusRipple = false;
    if (disableRipple === void 0)
      disableRipple = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, buttonGroupComponent, void 0, mButtonGroup$lambda(color, component, disabled, disableFocusRipple, disableRipple, fullWidth, orientation, size, variant, className, handler));
  }
  var fabComponent;
  function MFabVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MFabVariant_initFields() {
    MFabVariant_initFields = function () {
    };
    MFabVariant$round_instance = new MFabVariant('round', 0);
    MFabVariant$extended_instance = new MFabVariant('extended', 1);
  }
  var MFabVariant$round_instance;
  function MFabVariant$round_getInstance() {
    MFabVariant_initFields();
    return MFabVariant$round_instance;
  }
  var MFabVariant$extended_instance;
  function MFabVariant$extended_getInstance() {
    MFabVariant_initFields();
    return MFabVariant$extended_instance;
  }
  MFabVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MFabVariant',
    interfaces: [Enum]
  };
  function MFabVariant$values() {
    return [MFabVariant$round_getInstance(), MFabVariant$extended_getInstance()];
  }
  MFabVariant.values = MFabVariant$values;
  function MFabVariant$valueOf(name) {
    switch (name) {
      case 'round':
        return MFabVariant$round_getInstance();
      case 'extended':
        return MFabVariant$extended_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MFabVariant.' + name);
    }
  }
  MFabVariant.valueOf_61zpoe$ = MFabVariant$valueOf;
  function MFabProps() {
  }
  MFabProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFabProps',
    interfaces: [MButtonBaseProps]
  };
  var color_12;
  var color_metadata_12 = new PropertyMetadata('color');
  function get_color_12($receiver) {
    return color_12.getValue_lrcp0p$($receiver, color_metadata_12);
  }
  function set_color_12($receiver, color) {
    color_12.setValue_9rddgb$($receiver, color_metadata_12, color);
  }
  var size_4;
  var size_metadata_4 = new PropertyMetadata('size');
  function get_size_5($receiver) {
    return size_4.getValue_lrcp0p$($receiver, size_metadata_4);
  }
  function set_size_5($receiver, size) {
    size_4.setValue_9rddgb$($receiver, size_metadata_4, size);
  }
  var variant_13;
  var variant_metadata_13 = new PropertyMetadata('variant');
  function get_variant_13($receiver) {
    return variant_13.getValue_lrcp0p$($receiver, variant_metadata_13);
  }
  function set_variant_13($receiver, variant) {
    variant_13.setValue_9rddgb$($receiver, variant_metadata_13, variant);
  }
  function mFab$lambda(closure$color, closure$disabled, closure$hRefOptions, closure$onClick, closure$size, closure$iconName, closure$className, closure$handler) {
    return function ($receiver) {
      var tmp$;
      set_color_12($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$hRefOptions != null) {
        var it = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it);
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }set_size_5($receiver.attrs, closure$size);
      set_variant_13($receiver.attrs, MFabVariant$round_getInstance());
      if (closure$iconName != null) {
        switch (closure$size.name) {
          case 'small':
            tmp$ = MIconFontSize$small_getInstance();
            break;
          case 'medium':
            tmp$ = MIconFontSize$default_getInstance();
            break;
          case 'large':
            tmp$ = MIconFontSize$large_getInstance();
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        var fontSize = tmp$;
        mIcon($receiver, closure$iconName, void 0, fontSize);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFab($receiver, iconName, color, disabled, onClick, size, hRefOptions, addAsChild, className, handler) {
    if (iconName === void 0)
      iconName = null;
    if (color === void 0)
      color = MColor$default_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (onClick === void 0)
      onClick = null;
    if (size === void 0)
      size = MButtonSize$medium_getInstance();
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, fabComponent, addAsChild, mFab$lambda(color, disabled, hRefOptions, onClick, size, iconName, className, handler));
  }
  function mFab$lambda_0(closure$color, closure$disabled, closure$hRefOptions, closure$onClick, closure$size, closure$iconName, closure$caption, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_12($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$hRefOptions != null) {
        var it = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it);
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }set_size_5($receiver.attrs, closure$size);
      set_variant_13($receiver.attrs, MFabVariant$extended_getInstance());
      mIcon($receiver, closure$iconName);
      $receiver.childList.add_11rb$(closure$caption);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFab_0($receiver, iconName, caption, color, disabled, onClick, size, hRefOptions, addAsChild, className, handler) {
    if (color === void 0)
      color = MColor$default_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (onClick === void 0)
      onClick = null;
    if (size === void 0)
      size = MButtonSize$medium_getInstance();
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, fabComponent, addAsChild, mFab$lambda_0(color, disabled, hRefOptions, onClick, size, iconName, caption, className, handler));
  }
  var iconButtonComponent;
  function MIconButtonSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MIconButtonSize_initFields() {
    MIconButtonSize_initFields = function () {
    };
    MIconButtonSize$small_instance = new MIconButtonSize('small', 0);
    MIconButtonSize$medium_instance = new MIconButtonSize('medium', 1);
  }
  var MIconButtonSize$small_instance;
  function MIconButtonSize$small_getInstance() {
    MIconButtonSize_initFields();
    return MIconButtonSize$small_instance;
  }
  var MIconButtonSize$medium_instance;
  function MIconButtonSize$medium_getInstance() {
    MIconButtonSize_initFields();
    return MIconButtonSize$medium_instance;
  }
  MIconButtonSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MIconButtonSize',
    interfaces: [Enum]
  };
  function MIconButtonSize$values() {
    return [MIconButtonSize$small_getInstance(), MIconButtonSize$medium_getInstance()];
  }
  MIconButtonSize.values = MIconButtonSize$values;
  function MIconButtonSize$valueOf(name) {
    switch (name) {
      case 'small':
        return MIconButtonSize$small_getInstance();
      case 'medium':
        return MIconButtonSize$medium_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MIconButtonSize.' + name);
    }
  }
  MIconButtonSize.valueOf_61zpoe$ = MIconButtonSize$valueOf;
  function MIconEdge(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MIconEdge_initFields() {
    MIconEdge_initFields = function () {
    };
    MIconEdge$start_instance = new MIconEdge('start', 0);
    MIconEdge$end_instance = new MIconEdge('end', 1);
  }
  var MIconEdge$start_instance;
  function MIconEdge$start_getInstance() {
    MIconEdge_initFields();
    return MIconEdge$start_instance;
  }
  var MIconEdge$end_instance;
  function MIconEdge$end_getInstance() {
    MIconEdge_initFields();
    return MIconEdge$end_instance;
  }
  MIconEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MIconEdge',
    interfaces: [Enum]
  };
  function MIconEdge$values() {
    return [MIconEdge$start_getInstance(), MIconEdge$end_getInstance()];
  }
  MIconEdge.values = MIconEdge$values;
  function MIconEdge$valueOf(name) {
    switch (name) {
      case 'start':
        return MIconEdge$start_getInstance();
      case 'end':
        return MIconEdge$end_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.button.MIconEdge.' + name);
    }
  }
  MIconEdge.valueOf_61zpoe$ = MIconEdge$valueOf;
  function MIconButtonProps() {
  }
  MIconButtonProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MIconButtonProps',
    interfaces: [MButtonBaseProps]
  };
  var color_13;
  var color_metadata_13 = new PropertyMetadata('color');
  function get_color_13($receiver) {
    return color_13.getValue_lrcp0p$($receiver, color_metadata_13);
  }
  function set_color_13($receiver, color) {
    color_13.setValue_9rddgb$($receiver, color_metadata_13, color);
  }
  var edge_0;
  var edge_metadata_0 = new PropertyMetadata('edge');
  function get_edge_0($receiver) {
    return edge_0.getValue_lrcp0p$($receiver, edge_metadata_0);
  }
  function set_edge_0($receiver, edge) {
    edge_0.setValue_9rddgb$($receiver, edge_metadata_0, edge);
  }
  var size_5;
  var size_metadata_5 = new PropertyMetadata('size');
  function get_size_6($receiver) {
    return size_5.getValue_lrcp0p$($receiver, size_metadata_5);
  }
  function set_size_6($receiver, size) {
    size_5.setValue_9rddgb$($receiver, size_metadata_5, size);
  }
  function mIconButton$lambda(closure$color, closure$disabled, closure$edge, closure$hRefOptions, closure$onClick, closure$iconColor, closure$size, closure$iconName, closure$className, closure$handler) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      set_color_13($receiver.attrs, closure$color);
      $receiver.attrs.disabled = closure$disabled;
      if (closure$edge != null) {
        var it = closure$edge;
        set_edge_0($receiver.attrs, it);
      }if (closure$hRefOptions != null) {
        var it_0 = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it_0);
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }var iconColorToUse = closure$iconColor;
      if (iconColorToUse == null) {
        switch (closure$color.name) {
          case 'inherit':
            tmp$ = MIconColor$inherit_getInstance();
            break;
          case 'default':
            tmp$ = MIconColor$action_getInstance();
            break;
          case 'secondary':
            tmp$ = MIconColor$secondary_getInstance();
            break;
          case 'primary':
            tmp$ = MIconColor$primary_getInstance();
            break;
          default:tmp$ = Kotlin.noWhenBranchMatched();
            break;
        }
        iconColorToUse = tmp$;
      }set_size_6($receiver.attrs, closure$size);
      if (closure$iconName != null) {
        switch (closure$size.name) {
          case 'small':
            tmp$_0 = MIconFontSize$small_getInstance();
            break;
          case 'medium':
            tmp$_0 = MIconFontSize$default_getInstance();
            break;
          default:tmp$_0 = Kotlin.noWhenBranchMatched();
            break;
        }
        var fontSize = tmp$_0;
        mIcon($receiver, closure$iconName, iconColorToUse, fontSize);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mIconButton($receiver, iconName, color, disabled, onClick, size, hRefOptions, iconColor, edge, addAsChild, className, handler) {
    if (iconName === void 0)
      iconName = null;
    if (color === void 0)
      color = MColor$default_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (onClick === void 0)
      onClick = null;
    if (size === void 0)
      size = MIconButtonSize$medium_getInstance();
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (iconColor === void 0)
      iconColor = null;
    if (edge === void 0)
      edge = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, iconButtonComponent, addAsChild, mIconButton$lambda(color, disabled, edge, hRefOptions, onClick, iconColor, size, iconName, className, handler));
  }
  var cardComponent;
  function MCardProps() {
  }
  MCardProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCardProps',
    interfaces: []
  };
  function mCard$lambda(closure$raised, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.raised = closure$raised;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCard($receiver, raised, className, handler) {
    if (raised === void 0)
      raised = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, cardComponent, void 0, mCard$lambda(raised, className, handler));
  }
  var cardActionAreaComponent;
  function mCardActionArea$lambda(closure$disabled, closure$onClick, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disabled = closure$disabled;
      if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCardActionArea($receiver, onClick, disabled, className, handler) {
    if (onClick === void 0)
      onClick = null;
    if (disabled === void 0)
      disabled = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, cardActionAreaComponent, void 0, mCardActionArea$lambda(disabled, onClick, className, handler));
  }
  var cardActionsComponent;
  function MCardActionsProps() {
  }
  MCardActionsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCardActionsProps',
    interfaces: []
  };
  function mCardActions$lambda(closure$disableSpacing, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disableSpacing = closure$disableSpacing;
      setStyledPropsAndRunHandler($receiver, null, closure$handler);
      return Unit;
    };
  }
  function mCardActions($receiver, disableSpacing, handler) {
    if (disableSpacing === void 0)
      disableSpacing = false;
    return createStyled($receiver, cardActionsComponent, void 0, mCardActions$lambda(disableSpacing, handler));
  }
  var cardContentComponent;
  function MCardContentProps() {
  }
  MCardContentProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCardContentProps',
    interfaces: []
  };
  function mCardContent$lambda(closure$className, closure$handler) {
    return function ($receiver) {
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCardContent($receiver, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, cardContentComponent, void 0, mCardContent$lambda(className, handler));
  }
  var cardHeaderComponent;
  function MCardHeaderProps() {
  }
  MCardHeaderProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCardHeaderProps',
    interfaces: []
  };
  function mCardHeader($receiver, title, subHeader, avatar, action, className, handler) {
    if (subHeader === void 0)
      subHeader = null;
    if (avatar === void 0)
      avatar = null;
    if (action === void 0)
      action = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var titleNode = title;
    var subHeaderNode = subHeader != null ? subHeader : null;
    return mCardHeader_0($receiver, titleNode, subHeaderNode, avatar, action, className, handler);
  }
  function mCardHeader$lambda(closure$action, closure$avatar, closure$subHeader, closure$title, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$action != null) {
        var it = closure$action;
        $receiver.attrs.action = it;
      }if (closure$avatar != null) {
        var it_0 = closure$avatar;
        $receiver.attrs.avatar = it_0;
      }if (closure$subHeader != null) {
        var it_1 = closure$subHeader;
        $receiver.attrs.subheader = it_1;
      }if (closure$title != null) {
        var it_2 = closure$title;
        $receiver.attrs.title = it_2;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCardHeader_0($receiver, title, subHeader, avatar, action, className, handler) {
    if (title === void 0)
      title = null;
    if (subHeader === void 0)
      subHeader = null;
    if (avatar === void 0)
      avatar = null;
    if (action === void 0)
      action = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, cardHeaderComponent, void 0, mCardHeader$lambda(action, avatar, subHeader, title, className, handler));
  }
  var cardMediaComponent;
  function MCardMediaProps() {
  }
  MCardMediaProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MCardMediaProps',
    interfaces: []
  };
  function mCardMedia$lambda(closure$image, closure$title, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.image = closure$image;
      $receiver.attrs.title = closure$title;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCardMedia($receiver, image, title, className, handler) {
    if (title === void 0)
      title = '';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, cardMediaComponent, void 0, mCardMedia$lambda(image, title, className, handler));
  }
  var dialogComponent;
  function DialogScroll(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DialogScroll_initFields() {
    DialogScroll_initFields = function () {
    };
    DialogScroll$paper_instance = new DialogScroll('paper', 0);
    DialogScroll$body_instance = new DialogScroll('body', 1);
  }
  var DialogScroll$paper_instance;
  function DialogScroll$paper_getInstance() {
    DialogScroll_initFields();
    return DialogScroll$paper_instance;
  }
  var DialogScroll$body_instance;
  function DialogScroll$body_getInstance() {
    DialogScroll_initFields();
    return DialogScroll$body_instance;
  }
  DialogScroll.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DialogScroll',
    interfaces: [Enum]
  };
  function DialogScroll$values() {
    return [DialogScroll$paper_getInstance(), DialogScroll$body_getInstance()];
  }
  DialogScroll.values = DialogScroll$values;
  function DialogScroll$valueOf(name) {
    switch (name) {
      case 'paper':
        return DialogScroll$paper_getInstance();
      case 'body':
        return DialogScroll$body_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.dialog.DialogScroll.' + name);
    }
  }
  DialogScroll.valueOf_61zpoe$ = DialogScroll$valueOf;
  function MDialogProps() {
  }
  MDialogProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDialogProps',
    interfaces: [MModalProps]
  };
  var scroll;
  var scroll_metadata = new PropertyMetadata('scroll');
  function get_scroll($receiver) {
    return scroll.getValue_lrcp0p$($receiver, scroll_metadata);
  }
  function set_scroll($receiver, scroll_0) {
    scroll.setValue_9rddgb$($receiver, scroll_metadata, scroll_0);
  }
  var transitionComponent_2;
  var transitionComponent_metadata_2 = new PropertyMetadata('transitionComponent');
  function get_transitionComponent_2($receiver) {
    return transitionComponent_2.getValue_lrcp0p$($receiver, transitionComponent_metadata_2);
  }
  function set_transitionComponent_2($receiver, transitionComponent) {
    transitionComponent_2.setValue_9rddgb$($receiver, transitionComponent_metadata_2, transitionComponent);
  }
  var transitionDuration_3;
  var transitionDuration_metadata_3 = new PropertyMetadata('transitionDuration');
  function get_transitionDuration_3($receiver) {
    return transitionDuration_3.getValue_lrcp0p$($receiver, transitionDuration_metadata_3);
  }
  function set_transitionDuration_3($receiver, transitionDuration) {
    transitionDuration_3.setValue_9rddgb$($receiver, transitionDuration_metadata_3, transitionDuration);
  }
  function mDialog$lambda(closure$closeAfterTransition, closure$hideBackdrop, closure$keepMounted, closure$onBackdropClick, closure$onClose, closure$onEscapeKeyDown, closure$open, closure$fullScreen, closure$fullWidth, closure$maxWidth, closure$scroll, closure$transitionComponent, closure$transitionProps, closure$className, closure$handler) {
    return function ($receiver) {
      var tmp$;
      $receiver.attrs.closeAfterTransition = closure$closeAfterTransition;
      $receiver.attrs.hideBackdrop = closure$hideBackdrop;
      $receiver.attrs.keepMounted = closure$keepMounted;
      if (closure$onBackdropClick != null) {
        var it = closure$onBackdropClick;
        $receiver.attrs.onBackdropClick = it;
      }set_onClose_0($receiver.attrs, closure$onClose);
      if (closure$onEscapeKeyDown != null) {
        var it_0 = closure$onEscapeKeyDown;
        $receiver.attrs.onEscapeKeyDown = it_0;
      }$receiver.attrs.open = closure$open;
      $receiver.attrs.fullScreen = closure$fullScreen;
      $receiver.attrs.fullWidth = closure$fullWidth;
      $receiver.attrs.maxWidth = (tmp$ = closure$maxWidth != null ? closure$maxWidth.toString() : null) != null ? tmp$ : false;
      set_scroll($receiver.attrs, closure$scroll);
      set_transitionComponent_2($receiver.attrs, closure$transitionComponent);
      if (closure$transitionProps != null) {
        var it_1 = closure$transitionProps;
        $receiver.attrs.TransitionProps = it_1;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDialog($receiver, open, fullScreen, fullWidth, maxWidth, hideBackdrop, keepMounted, closeAfterTransition, onBackdropClick, onClose, onEscapeKeyDown, scroll, transitionComponent, transitionProps, className, handler) {
    if (open === void 0)
      open = false;
    if (fullScreen === void 0)
      fullScreen = false;
    if (fullWidth === void 0)
      fullWidth = false;
    if (maxWidth === void 0)
      maxWidth = Breakpoint$sm_getInstance();
    if (hideBackdrop === void 0)
      hideBackdrop = false;
    if (keepMounted === void 0)
      keepMounted = false;
    if (closeAfterTransition === void 0)
      closeAfterTransition = false;
    if (onBackdropClick === void 0)
      onBackdropClick = null;
    if (onClose === void 0)
      onClose = null;
    if (onEscapeKeyDown === void 0)
      onEscapeKeyDown = null;
    if (scroll === void 0)
      scroll = DialogScroll$paper_getInstance();
    if (transitionComponent === void 0)
      transitionComponent = null;
    if (transitionProps === void 0)
      transitionProps = null;
    if (className === void 0)
      className = null;
    return createStyled($receiver, dialogComponent, void 0, mDialog$lambda(closeAfterTransition, hideBackdrop, keepMounted, onBackdropClick, onClose, onEscapeKeyDown, open, fullScreen, fullWidth, maxWidth, scroll, transitionComponent, transitionProps, className, handler));
  }
  var dialogActionsComponent;
  function MDialogActionsProps() {
  }
  MDialogActionsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDialogActionsProps',
    interfaces: []
  };
  function mDialogActions$lambda(closure$disableSpacing, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disableSpacing = closure$disableSpacing;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDialogActions($receiver, disableSpacing, className, handler) {
    if (disableSpacing === void 0)
      disableSpacing = false;
    if (className === void 0)
      className = null;
    return createStyled($receiver, dialogActionsComponent, void 0, mDialogActions$lambda(disableSpacing, className, handler));
  }
  var dialogContentComponent;
  function MDialogContentProps() {
  }
  MDialogContentProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDialogContentProps',
    interfaces: []
  };
  function mDialogContent$lambda(closure$dividers, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.dividers = closure$dividers;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDialogContent($receiver, dividers, className, handler) {
    if (dividers === void 0)
      dividers = false;
    if (className === void 0)
      className = null;
    return createStyled($receiver, dialogContentComponent, void 0, mDialogContent$lambda(dividers, className, handler));
  }
  var dialogContentTextComponent;
  function mDialogContentText$lambda(closure$text, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.childList.add_11rb$(closure$text);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDialogContentText($receiver, text, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, dialogContentTextComponent, void 0, mDialogContentText$lambda(text, className, handler));
  }
  var dialogTitleComponent;
  function MDialogTitleProps() {
  }
  MDialogTitleProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MDialogTitleProps',
    interfaces: []
  };
  function mDialogTitle$lambda(closure$disableTypography, closure$text, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disableTypography = closure$disableTypography;
      $receiver.childList.add_11rb$(closure$text);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mDialogTitle($receiver, text, disableTypography, className, handler) {
    if (disableTypography === void 0)
      disableTypography = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, dialogTitleComponent, void 0, mDialogTitle$lambda(disableTypography, text, className, handler));
  }
  var dialogComponent_0;
  function ModalOnCloseReason(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ModalOnCloseReason_initFields() {
    ModalOnCloseReason_initFields = function () {
    };
    ModalOnCloseReason$escapeKeyDown_instance = new ModalOnCloseReason('escapeKeyDown', 0);
    ModalOnCloseReason$backdropClick_instance = new ModalOnCloseReason('backdropClick', 1);
  }
  var ModalOnCloseReason$escapeKeyDown_instance;
  function ModalOnCloseReason$escapeKeyDown_getInstance() {
    ModalOnCloseReason_initFields();
    return ModalOnCloseReason$escapeKeyDown_instance;
  }
  var ModalOnCloseReason$backdropClick_instance;
  function ModalOnCloseReason$backdropClick_getInstance() {
    ModalOnCloseReason_initFields();
    return ModalOnCloseReason$backdropClick_instance;
  }
  ModalOnCloseReason.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModalOnCloseReason',
    interfaces: [Enum]
  };
  function ModalOnCloseReason$values() {
    return [ModalOnCloseReason$escapeKeyDown_getInstance(), ModalOnCloseReason$backdropClick_getInstance()];
  }
  ModalOnCloseReason.values = ModalOnCloseReason$values;
  function ModalOnCloseReason$valueOf(name) {
    switch (name) {
      case 'escapeKeyDown':
        return ModalOnCloseReason$escapeKeyDown_getInstance();
      case 'backdropClick':
        return ModalOnCloseReason$backdropClick_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.dialog.ModalOnCloseReason.' + name);
    }
  }
  ModalOnCloseReason.valueOf_61zpoe$ = ModalOnCloseReason$valueOf;
  function MModalProps() {
  }
  MModalProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MModalProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var onClose_0;
  var onClose_metadata_0 = new PropertyMetadata('onClose');
  function get_onClose_0($receiver) {
    return onClose_0.getValue_lrcp0p$($receiver, onClose_metadata_0);
  }
  function set_onClose_0($receiver, onClose) {
    onClose_0.setValue_9rddgb$($receiver, onClose_metadata_0, onClose);
  }
  var expansionPanelComponent;
  function MExpansionPanelProps() {
  }
  MExpansionPanelProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MExpansionPanelProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mExpansionPanel$lambda(closure$defaultExpanded, closure$disabled, closure$expanded, closure$onChange, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.defaultExpanded = closure$defaultExpanded;
      $receiver.attrs.disabled = closure$disabled;
      if (closure$expanded != null) {
        var it = closure$expanded;
        $receiver.attrs.expanded = it;
      }if (closure$onChange != null) {
        var it_0 = closure$onChange;
        $receiver.attrs.onChange = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mExpansionPanel($receiver, expanded, defaultExpanded, disabled, onChange, className, handler) {
    if (expanded === void 0)
      expanded = null;
    if (defaultExpanded === void 0)
      defaultExpanded = false;
    if (disabled === void 0)
      disabled = false;
    if (onChange === void 0)
      onChange = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, expansionPanelComponent, void 0, mExpansionPanel$lambda(defaultExpanded, disabled, expanded, onChange, className, handler));
  }
  var expansionPanelActionsComponent;
  function MExpansionPanelActionsProps() {
  }
  MExpansionPanelActionsProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MExpansionPanelActionsProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mExpansionPanelActions$lambda(closure$disableSpacing, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$disableSpacing != null) {
        var it = closure$disableSpacing;
        $receiver.attrs.disableSpacing = it;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mExpansionPanelActions($receiver, disableSpacing, className, handler) {
    if (disableSpacing === void 0)
      disableSpacing = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, expansionPanelActionsComponent, void 0, mExpansionPanelActions$lambda(disableSpacing, className, handler));
  }
  var expansionPanelDetailsComponent;
  function mExpansionPanelDetails$lambda(closure$className, closure$handler) {
    return function ($receiver) {
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mExpansionPanelDetails($receiver, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, expansionPanelDetailsComponent, void 0, mExpansionPanelDetails$lambda(className, handler));
  }
  var expansionPanelSummaryComponent;
  function MExpansionPanelSummaryProps() {
  }
  MExpansionPanelSummaryProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MExpansionPanelSummaryProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mExpansionPanelSummary$lambda(closure$expandIcon, closure$iconButtonProps, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$expandIcon != null) {
        var it = closure$expandIcon;
        $receiver.attrs.expandIcon = it;
      }if (closure$iconButtonProps != null) {
        var it_0 = closure$iconButtonProps;
        $receiver.attrs.iconButtonProps = it_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mExpansionPanelSummary($receiver, expandIcon, iconButtonProps, className, handler) {
    if (expandIcon === void 0)
      expandIcon = null;
    if (iconButtonProps === void 0)
      iconButtonProps = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, expansionPanelSummaryComponent, void 0, mExpansionPanelSummary$lambda(expandIcon, iconButtonProps, className, handler));
  }
  var formControlComponent;
  function MFormControlVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MFormControlVariant_initFields() {
    MFormControlVariant_initFields = function () {
    };
    MFormControlVariant$standard_instance = new MFormControlVariant('standard', 0);
    MFormControlVariant$outlined_instance = new MFormControlVariant('outlined', 1);
    MFormControlVariant$filled_instance = new MFormControlVariant('filled', 2);
  }
  var MFormControlVariant$standard_instance;
  function MFormControlVariant$standard_getInstance() {
    MFormControlVariant_initFields();
    return MFormControlVariant$standard_instance;
  }
  var MFormControlVariant$outlined_instance;
  function MFormControlVariant$outlined_getInstance() {
    MFormControlVariant_initFields();
    return MFormControlVariant$outlined_instance;
  }
  var MFormControlVariant$filled_instance;
  function MFormControlVariant$filled_getInstance() {
    MFormControlVariant_initFields();
    return MFormControlVariant$filled_instance;
  }
  MFormControlVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MFormControlVariant',
    interfaces: [Enum]
  };
  function MFormControlVariant$values() {
    return [MFormControlVariant$standard_getInstance(), MFormControlVariant$outlined_getInstance(), MFormControlVariant$filled_getInstance()];
  }
  MFormControlVariant.values = MFormControlVariant$values;
  function MFormControlVariant$valueOf(name) {
    switch (name) {
      case 'standard':
        return MFormControlVariant$standard_getInstance();
      case 'outlined':
        return MFormControlVariant$outlined_getInstance();
      case 'filled':
        return MFormControlVariant$filled_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.form.MFormControlVariant.' + name);
    }
  }
  MFormControlVariant.valueOf_61zpoe$ = MFormControlVariant$valueOf;
  function MFormControlComponent(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MFormControlComponent_initFields() {
    MFormControlComponent_initFields = function () {
    };
    MFormControlComponent$div_instance = new MFormControlComponent('div', 0);
    MFormControlComponent$fieldSet_instance = new MFormControlComponent('fieldSet', 1);
  }
  var MFormControlComponent$div_instance;
  function MFormControlComponent$div_getInstance() {
    MFormControlComponent_initFields();
    return MFormControlComponent$div_instance;
  }
  var MFormControlComponent$fieldSet_instance;
  function MFormControlComponent$fieldSet_getInstance() {
    MFormControlComponent_initFields();
    return MFormControlComponent$fieldSet_instance;
  }
  MFormControlComponent.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  MFormControlComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MFormControlComponent',
    interfaces: [Enum]
  };
  function MFormControlComponent$values() {
    return [MFormControlComponent$div_getInstance(), MFormControlComponent$fieldSet_getInstance()];
  }
  MFormControlComponent.values = MFormControlComponent$values;
  function MFormControlComponent$valueOf(name) {
    switch (name) {
      case 'div':
        return MFormControlComponent$div_getInstance();
      case 'fieldSet':
        return MFormControlComponent$fieldSet_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.form.MFormControlComponent.' + name);
    }
  }
  MFormControlComponent.valueOf_61zpoe$ = MFormControlComponent$valueOf;
  function MFormControlMargin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MFormControlMargin_initFields() {
    MFormControlMargin_initFields = function () {
    };
    MFormControlMargin$none_instance = new MFormControlMargin('none', 0);
    MFormControlMargin$dense_instance = new MFormControlMargin('dense', 1);
    MFormControlMargin$normal_instance = new MFormControlMargin('normal', 2);
  }
  var MFormControlMargin$none_instance;
  function MFormControlMargin$none_getInstance() {
    MFormControlMargin_initFields();
    return MFormControlMargin$none_instance;
  }
  var MFormControlMargin$dense_instance;
  function MFormControlMargin$dense_getInstance() {
    MFormControlMargin_initFields();
    return MFormControlMargin$dense_instance;
  }
  var MFormControlMargin$normal_instance;
  function MFormControlMargin$normal_getInstance() {
    MFormControlMargin_initFields();
    return MFormControlMargin$normal_instance;
  }
  MFormControlMargin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MFormControlMargin',
    interfaces: [Enum]
  };
  function MFormControlMargin$values() {
    return [MFormControlMargin$none_getInstance(), MFormControlMargin$dense_getInstance(), MFormControlMargin$normal_getInstance()];
  }
  MFormControlMargin.values = MFormControlMargin$values;
  function MFormControlMargin$valueOf(name) {
    switch (name) {
      case 'none':
        return MFormControlMargin$none_getInstance();
      case 'dense':
        return MFormControlMargin$dense_getInstance();
      case 'normal':
        return MFormControlMargin$normal_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.form.MFormControlMargin.' + name);
    }
  }
  MFormControlMargin.valueOf_61zpoe$ = MFormControlMargin$valueOf;
  function MFormControlProps() {
  }
  MFormControlProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFormControlProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var margin_0;
  var margin_metadata_0 = new PropertyMetadata('margin');
  function get_margin_0($receiver) {
    return margin_0.getValue_lrcp0p$($receiver, margin_metadata_0);
  }
  function set_margin_0($receiver, margin) {
    margin_0.setValue_9rddgb$($receiver, margin_metadata_0, margin);
  }
  var component_4;
  var component_metadata = new PropertyMetadata('component');
  function get_component($receiver) {
    return component_4.getValue_lrcp0p$($receiver, component_metadata);
  }
  function set_component($receiver, component) {
    component_4.setValue_9rddgb$($receiver, component_metadata, component);
  }
  var variant_14;
  var variant_metadata_14 = new PropertyMetadata('variant');
  function get_variant_14($receiver) {
    return variant_14.getValue_lrcp0p$($receiver, variant_metadata_14);
  }
  function set_variant_14($receiver, variant) {
    variant_14.setValue_9rddgb$($receiver, variant_metadata_14, variant);
  }
  function mFormControl$lambda(closure$component, closure$disabled, closure$error, closure$fullWidth, closure$hiddenLabel, closure$margin, closure$required, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      set_component($receiver.attrs, closure$component);
      $receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.error = closure$error;
      $receiver.attrs.fullWidth = closure$fullWidth;
      $receiver.attrs.hiddenLabel = closure$hiddenLabel;
      set_margin_0($receiver.attrs, closure$margin);
      $receiver.attrs.required = closure$required;
      set_variant_14($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFormControl($receiver, component, disabled, error, fullWidth, margin, required, variant, hiddenLabel, className, handler) {
    if (component === void 0)
      component = MFormControlComponent$div_getInstance();
    if (disabled === void 0)
      disabled = false;
    if (error === void 0)
      error = false;
    if (fullWidth === void 0)
      fullWidth = false;
    if (margin === void 0)
      margin = MFormControlMargin$none_getInstance();
    if (required === void 0)
      required = false;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (hiddenLabel === void 0)
      hiddenLabel = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, formControlComponent, void 0, mFormControl$lambda(component, disabled, error, fullWidth, hiddenLabel, margin, required, variant, className, handler));
  }
  var formControlLabelComponent;
  function MLabelPlacement(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MLabelPlacement_initFields() {
    MLabelPlacement_initFields = function () {
    };
    MLabelPlacement$end_instance = new MLabelPlacement('end', 0);
    MLabelPlacement$start_instance = new MLabelPlacement('start', 1);
    MLabelPlacement$top_instance = new MLabelPlacement('top', 2);
    MLabelPlacement$bottom_instance = new MLabelPlacement('bottom', 3);
  }
  var MLabelPlacement$end_instance;
  function MLabelPlacement$end_getInstance() {
    MLabelPlacement_initFields();
    return MLabelPlacement$end_instance;
  }
  var MLabelPlacement$start_instance;
  function MLabelPlacement$start_getInstance() {
    MLabelPlacement_initFields();
    return MLabelPlacement$start_instance;
  }
  var MLabelPlacement$top_instance;
  function MLabelPlacement$top_getInstance() {
    MLabelPlacement_initFields();
    return MLabelPlacement$top_instance;
  }
  var MLabelPlacement$bottom_instance;
  function MLabelPlacement$bottom_getInstance() {
    MLabelPlacement_initFields();
    return MLabelPlacement$bottom_instance;
  }
  MLabelPlacement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MLabelPlacement',
    interfaces: [Enum]
  };
  function MLabelPlacement$values() {
    return [MLabelPlacement$end_getInstance(), MLabelPlacement$start_getInstance(), MLabelPlacement$top_getInstance(), MLabelPlacement$bottom_getInstance()];
  }
  MLabelPlacement.values = MLabelPlacement$values;
  function MLabelPlacement$valueOf(name) {
    switch (name) {
      case 'end':
        return MLabelPlacement$end_getInstance();
      case 'start':
        return MLabelPlacement$start_getInstance();
      case 'top':
        return MLabelPlacement$top_getInstance();
      case 'bottom':
        return MLabelPlacement$bottom_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.form.MLabelPlacement.' + name);
    }
  }
  MLabelPlacement.valueOf_61zpoe$ = MLabelPlacement$valueOf;
  function MFormControlLabelProps() {
  }
  MFormControlLabelProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFormControlLabelProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var labelPlacement;
  var labelPlacement_metadata = new PropertyMetadata('labelPlacement');
  function get_labelPlacement($receiver) {
    return labelPlacement.getValue_lrcp0p$($receiver, labelPlacement_metadata);
  }
  function set_labelPlacement($receiver, labelPlacement_0) {
    labelPlacement.setValue_9rddgb$($receiver, labelPlacement_metadata, labelPlacement_0);
  }
  function mFormControlLabel$lambda(closure$checked, closure$control, closure$disabled, closure$label, closure$labelPlacement, closure$name, closure$onChange, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$checked != null) {
        var closure$checked_0 = closure$checked;
        $receiver.attrs.checked = closure$checked_0;
      }$receiver.attrs.control = closure$control;
      $receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.label = closure$label;
      set_labelPlacement($receiver.attrs, closure$labelPlacement);
      $receiver.attrs.name = closure$name;
      if (closure$onChange != null) {
        var closure$onChange_0 = closure$onChange;
        $receiver.attrs.onChange = closure$onChange_0;
      }if (closure$value != null) {
        var closure$value_0 = closure$value;
        $receiver.attrs.value = closure$value_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFormControlLabel($receiver, label, control, checked, disabled, value, name, labelPlacement, onChange, className, handler) {
    if (checked === void 0)
      checked = null;
    if (disabled === void 0)
      disabled = false;
    if (value === void 0)
      value = null;
    if (name === void 0)
      name = null;
    if (labelPlacement === void 0)
      labelPlacement = MLabelPlacement$end_getInstance();
    if (onChange === void 0)
      onChange = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, formControlLabelComponent, void 0, mFormControlLabel$lambda(checked, control, disabled, label, labelPlacement, name, onChange, value, className, handler));
  }
  var formGroupComponent;
  function MFormGroupProps() {
  }
  MFormGroupProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFormGroupProps',
    interfaces: []
  };
  function mFormGroup$lambda(closure$row, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.row = closure$row;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFormGroup($receiver, row, className, handler) {
    if (row === void 0)
      row = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, formGroupComponent, void 0, mFormGroup$lambda(row, className, handler));
  }
  var formHelperTextComponent;
  function MFormHelperTextProps() {
  }
  MFormHelperTextProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFormHelperTextProps',
    interfaces: []
  };
  var margin_1;
  var margin_metadata_1 = new PropertyMetadata('margin');
  function get_margin_1($receiver) {
    return margin_1.getValue_lrcp0p$($receiver, margin_metadata_1);
  }
  function set_margin_1($receiver, margin) {
    margin_1.setValue_9rddgb$($receiver, margin_metadata_1, margin);
  }
  var variant_15;
  var variant_metadata_15 = new PropertyMetadata('variant');
  function get_variant_15($receiver) {
    return variant_15.getValue_lrcp0p$($receiver, variant_metadata_15);
  }
  function set_variant_15($receiver, variant) {
    variant_15.setValue_9rddgb$($receiver, variant_metadata_15, variant);
  }
  function mFormHelperText$lambda(closure$component, closure$disabled, closure$error, closure$filled, closure$focused, closure$margin, closure$required, closure$variant, closure$caption, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$component != null) {
        var it = closure$component;
        $receiver.attrs.component = it;
      }$receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.error = closure$error;
      $receiver.attrs.filled = closure$filled;
      $receiver.attrs.focused = closure$focused;
      set_margin_1($receiver.attrs, closure$margin);
      $receiver.attrs.required = closure$required;
      set_variant_15($receiver.attrs, closure$variant);
      $receiver.childList.add_11rb$(closure$caption);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFormHelperText($receiver, caption, disabled, error, filled, focused, required, variant, margin, component, className, handler) {
    if (disabled === void 0)
      disabled = false;
    if (error === void 0)
      error = false;
    if (filled === void 0)
      filled = false;
    if (focused === void 0)
      focused = false;
    if (required === void 0)
      required = false;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (margin === void 0)
      margin = null;
    if (component === void 0)
      component = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, formHelperTextComponent, void 0, mFormHelperText$lambda(component, disabled, error, filled, focused, margin, required, variant, caption, className, handler));
  }
  var formLabelComponent;
  function MFormLabelProps() {
  }
  MFormLabelProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFormLabelProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mFormLabel$lambda(closure$component, closure$disabled, closure$error, closure$filled, closure$focused, closure$htmlFor, closure$required, closure$caption, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      if (closure$disabled != null) {
        var it = closure$disabled;
        $receiver.attrs.disabled = it;
      }if (closure$error != null) {
        var it_0 = closure$error;
        $receiver.attrs.error = it_0;
      }if (closure$filled != null) {
        var it_1 = closure$filled;
        $receiver.attrs.filled = it_1;
      }if (closure$focused != null) {
        var it_2 = closure$focused;
        $receiver.attrs.focused = it_2;
      }if (closure$htmlFor != null) {
        var it_3 = closure$htmlFor;
        $receiver.attrs.htmlFor = it_3;
      }if (closure$required != null) {
        var it_4 = closure$required;
        $receiver.attrs.required = it_4;
      }$receiver.childList.add_11rb$(closure$caption);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFormLabel($receiver, caption, htmlFor, required, disabled, error, focused, filled, component, className, handler) {
    if (htmlFor === void 0)
      htmlFor = null;
    if (required === void 0)
      required = null;
    if (disabled === void 0)
      disabled = null;
    if (error === void 0)
      error = null;
    if (focused === void 0)
      focused = null;
    if (filled === void 0)
      filled = null;
    if (component === void 0)
      component = 'label';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, formLabelComponent, void 0, mFormLabel$lambda(component, disabled, error, filled, focused, htmlFor, required, caption, className, handler));
  }
  function MLabelMargin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MLabelMargin_initFields() {
    MLabelMargin_initFields = function () {
    };
    MLabelMargin$dense_instance = new MLabelMargin('dense', 0);
  }
  var MLabelMargin$dense_instance;
  function MLabelMargin$dense_getInstance() {
    MLabelMargin_initFields();
    return MLabelMargin$dense_instance;
  }
  MLabelMargin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MLabelMargin',
    interfaces: [Enum]
  };
  function MLabelMargin$values() {
    return [MLabelMargin$dense_getInstance()];
  }
  MLabelMargin.values = MLabelMargin$values;
  function MLabelMargin$valueOf(name) {
    switch (name) {
      case 'dense':
        return MLabelMargin$dense_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.form.MLabelMargin.' + name);
    }
  }
  MLabelMargin.valueOf_61zpoe$ = MLabelMargin$valueOf;
  var gridListComponent;
  function MGridListProps() {
  }
  MGridListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MGridListProps',
    interfaces: []
  };
  function get_cellHeight($receiver) {
    var it = $receiver.cellHeight;
    return typeof it === 'number' ? it : 0;
  }
  function set_cellHeight($receiver, value) {
    $receiver.cellHeight = value === 0 ? 'auto' : value;
  }
  function mGridList$lambda(closure$cellHeight, closure$cols, closure$component, closure$spacing, closure$className, closure$handler) {
    return function ($receiver) {
      set_cellHeight($receiver.attrs, closure$cellHeight);
      $receiver.attrs.cols = closure$cols;
      $receiver.attrs.component = closure$component;
      $receiver.attrs.spacing = closure$spacing;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGridList($receiver, cols, spacing, cellHeight, component, className, handler) {
    if (cols === void 0)
      cols = 2;
    if (spacing === void 0)
      spacing = 4;
    if (cellHeight === void 0)
      cellHeight = 180;
    if (component === void 0)
      component = 'ul';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, gridListComponent, void 0, mGridList$lambda(cellHeight, cols, component, spacing, className, handler));
  }
  var gridListTileComponent;
  function MGridListTileProps() {
  }
  MGridListTileProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MGridListTileProps',
    interfaces: []
  };
  function mGridListTile$lambda(closure$cols, closure$component, closure$key, closure$rows, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.cols = closure$cols;
      $receiver.attrs.component = closure$component;
      set_key($receiver.attrs, closure$key);
      $receiver.attrs.rows = closure$rows;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGridListTile($receiver, key, cols, component, rows, className, handler) {
    if (cols === void 0)
      cols = 1;
    if (component === void 0)
      component = 'li';
    if (rows === void 0)
      rows = 1;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, gridListTileComponent, void 0, mGridListTile$lambda(cols, component, key, rows, className, handler));
  }
  var gridListTileBarComponent;
  function MActionPosition(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MActionPosition_initFields() {
    MActionPosition_initFields = function () {
    };
    MActionPosition$left_instance = new MActionPosition('left', 0);
    MActionPosition$right_instance = new MActionPosition('right', 1);
  }
  var MActionPosition$left_instance;
  function MActionPosition$left_getInstance() {
    MActionPosition_initFields();
    return MActionPosition$left_instance;
  }
  var MActionPosition$right_instance;
  function MActionPosition$right_getInstance() {
    MActionPosition_initFields();
    return MActionPosition$right_instance;
  }
  MActionPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MActionPosition',
    interfaces: [Enum]
  };
  function MActionPosition$values() {
    return [MActionPosition$left_getInstance(), MActionPosition$right_getInstance()];
  }
  MActionPosition.values = MActionPosition$values;
  function MActionPosition$valueOf(name) {
    switch (name) {
      case 'left':
        return MActionPosition$left_getInstance();
      case 'right':
        return MActionPosition$right_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.gridlist.MActionPosition.' + name);
    }
  }
  MActionPosition.valueOf_61zpoe$ = MActionPosition$valueOf;
  function MTitlePosition(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTitlePosition_initFields() {
    MTitlePosition_initFields = function () {
    };
    MTitlePosition$top_instance = new MTitlePosition('top', 0);
    MTitlePosition$bottom_instance = new MTitlePosition('bottom', 1);
  }
  var MTitlePosition$top_instance;
  function MTitlePosition$top_getInstance() {
    MTitlePosition_initFields();
    return MTitlePosition$top_instance;
  }
  var MTitlePosition$bottom_instance;
  function MTitlePosition$bottom_getInstance() {
    MTitlePosition_initFields();
    return MTitlePosition$bottom_instance;
  }
  MTitlePosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTitlePosition',
    interfaces: [Enum]
  };
  function MTitlePosition$values() {
    return [MTitlePosition$top_getInstance(), MTitlePosition$bottom_getInstance()];
  }
  MTitlePosition.values = MTitlePosition$values;
  function MTitlePosition$valueOf(name) {
    switch (name) {
      case 'top':
        return MTitlePosition$top_getInstance();
      case 'bottom':
        return MTitlePosition$bottom_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.gridlist.MTitlePosition.' + name);
    }
  }
  MTitlePosition.valueOf_61zpoe$ = MTitlePosition$valueOf;
  function MGridListTileBarProps() {
  }
  MGridListTileBarProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MGridListTileBarProps',
    interfaces: []
  };
  var actionPosition;
  var actionPosition_metadata = new PropertyMetadata('actionPosition');
  function get_actionPosition($receiver) {
    return actionPosition.getValue_lrcp0p$($receiver, actionPosition_metadata);
  }
  function set_actionPosition($receiver, actionPosition_0) {
    actionPosition.setValue_9rddgb$($receiver, actionPosition_metadata, actionPosition_0);
  }
  var titlePosition;
  var titlePosition_metadata = new PropertyMetadata('titlePosition');
  function get_titlePosition($receiver) {
    return titlePosition.getValue_lrcp0p$($receiver, titlePosition_metadata);
  }
  function set_titlePosition($receiver, titlePosition_0) {
    titlePosition.setValue_9rddgb$($receiver, titlePosition_metadata, titlePosition_0);
  }
  function mGridListTileBar$lambda(closure$actionIcon, closure$actionPosition, closure$subtitle, closure$title, closure$titlePosition, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$actionIcon != null) {
        var it = closure$actionIcon;
        $receiver.attrs.actionIcon = it;
      }set_actionPosition($receiver.attrs, closure$actionPosition);
      if (closure$subtitle != null) {
        var it_0 = closure$subtitle;
        $receiver.attrs.subtitle = it_0;
      }$receiver.attrs.title = closure$title;
      set_titlePosition($receiver.attrs, closure$titlePosition);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGridListTileBar($receiver, title, subtitle, actionIcon, titlePosition, actionPosition, className, handler) {
    if (subtitle === void 0)
      subtitle = null;
    if (actionIcon === void 0)
      actionIcon = null;
    if (titlePosition === void 0)
      titlePosition = MTitlePosition$bottom_getInstance();
    if (actionPosition === void 0)
      actionPosition = MActionPosition$right_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, gridListTileBarComponent, void 0, mGridListTileBar$lambda(actionIcon, actionPosition, subtitle, title, titlePosition, className, handler));
  }
  function mGridListTileBar$lambda_0(closure$actionIcon, closure$actionPosition, closure$subtitle, closure$title, closure$titlePosition, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$actionIcon != null) {
        var it = closure$actionIcon;
        $receiver.attrs.actionIcon = it;
      }set_actionPosition($receiver.attrs, closure$actionPosition);
      if (closure$subtitle != null) {
        var it_0 = closure$subtitle;
        $receiver.attrs.subtitle = it_0;
      }$receiver.attrs.title = closure$title;
      set_titlePosition($receiver.attrs, closure$titlePosition);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGridListTileBar_0($receiver, title, subtitle, actionIcon, titlePosition, actionPosition, className, handler) {
    if (subtitle === void 0)
      subtitle = null;
    if (actionIcon === void 0)
      actionIcon = null;
    if (titlePosition === void 0)
      titlePosition = MTitlePosition$bottom_getInstance();
    if (actionPosition === void 0)
      actionPosition = MActionPosition$right_getInstance();
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, gridListTileBarComponent, void 0, mGridListTileBar$lambda_0(actionIcon, actionPosition, subtitle, title, titlePosition, className, handler));
  }
  var filledInputComponent;
  function MFilledInputProps() {
  }
  MFilledInputProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MFilledInputProps',
    interfaces: [MInputBaseProps]
  };
  function mFilledInput$lambda(closure$autoFocus, closure$defaultValue, closure$disabled, closure$disableUnderline, closure$error, closure$fullWidth, closure$id, closure$multiline, closure$name, closure$onChange, closure$placeholder, closure$readOnly, closure$required, closure$rows, closure$rowsMax, closure$type, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoFocus != null) {
        var it = closure$autoFocus;
        $receiver.attrs.autoFocus = it;
      }if (closure$defaultValue != null) {
        var it_0 = closure$defaultValue;
        $receiver.attrs.defaultValue = it_0;
      }if (closure$disabled != null) {
        var it_1 = closure$disabled;
        $receiver.attrs.disabled = it_1;
      }if (closure$disableUnderline != null) {
        var it_2 = closure$disableUnderline;
        $receiver.attrs.disableUnderline = it_2;
      }if (closure$error != null) {
        var it_3 = closure$error;
        $receiver.attrs.error = it_3;
      }$receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$id != null) {
        var it_4 = closure$id;
        $receiver.attrs.id = it_4;
      }$receiver.attrs.multiline = closure$multiline;
      if (closure$name != null) {
        var it_5 = closure$name;
        $receiver.attrs.name = it_5;
      }if (closure$onChange != null) {
        var it_6 = closure$onChange;
        $receiver.attrs.onChange = it_6;
      }if (closure$placeholder != null) {
        var it_7 = closure$placeholder;
        $receiver.attrs.placeholder = it_7;
      }if (closure$readOnly != null) {
        var it_8 = closure$readOnly;
        $receiver.attrs.readOnly = it_8;
      }if (closure$required != null) {
        var it_9 = closure$required;
        $receiver.attrs.required = it_9;
      }if (closure$rows != null) {
        var it_10 = closure$rows;
        $receiver.attrs.rows = it_10;
      }if (closure$rowsMax != null) {
        var it_11 = closure$rowsMax;
        $receiver.attrs.rowsMax = it_11;
      }set_type($receiver.attrs, closure$type);
      if (closure$value != null) {
        var it_12 = closure$value;
        $receiver.attrs.value = it_12;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFilledInput($receiver, value, required, disabled, readOnly, error, fullWidth, defaultValue, placeholder, disableUnderline, autoFocus, type, id, name, multiline, rows, rowsMax, onChange, addAsChild, className, handler) {
    if (value === void 0)
      value = null;
    if (required === void 0)
      required = null;
    if (disabled === void 0)
      disabled = null;
    if (readOnly === void 0)
      readOnly = null;
    if (error === void 0)
      error = null;
    if (fullWidth === void 0)
      fullWidth = false;
    if (defaultValue === void 0)
      defaultValue = null;
    if (placeholder === void 0)
      placeholder = null;
    if (disableUnderline === void 0)
      disableUnderline = null;
    if (autoFocus === void 0)
      autoFocus = null;
    if (type === void 0)
      type = InputType.text;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (multiline === void 0)
      multiline = false;
    if (rows === void 0)
      rows = null;
    if (rowsMax === void 0)
      rowsMax = null;
    if (onChange === void 0)
      onChange = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, filledInputComponent, addAsChild, mFilledInput$lambda(autoFocus, defaultValue, disabled, disableUnderline, error, fullWidth, id, multiline, name, onChange, placeholder, readOnly, required, rows, rowsMax, type, value, className, handler));
  }
  var inputComponent;
  function MInputProps() {
  }
  MInputProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MInputProps',
    interfaces: [MInputBaseProps]
  };
  function mInput$lambda(closure$autoFocus, closure$defaultValue, closure$disabled, closure$disableUnderline, closure$error, closure$fullWidth, closure$id, closure$multiline, closure$name, closure$onChange, closure$placeholder, closure$readOnly, closure$required, closure$rows, closure$rowsMax, closure$type, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoFocus != null) {
        var it = closure$autoFocus;
        $receiver.attrs.autoFocus = it;
      }if (closure$defaultValue != null) {
        var it_0 = closure$defaultValue;
        $receiver.attrs.defaultValue = it_0;
      }if (closure$disabled != null) {
        var it_1 = closure$disabled;
        $receiver.attrs.disabled = it_1;
      }if (closure$disableUnderline != null) {
        var it_2 = closure$disableUnderline;
        $receiver.attrs.disableUnderline = it_2;
      }if (closure$error != null) {
        var it_3 = closure$error;
        $receiver.attrs.error = it_3;
      }$receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$id != null) {
        var it_4 = closure$id;
        $receiver.attrs.id = it_4;
      }$receiver.attrs.multiline = closure$multiline;
      if (closure$name != null) {
        var it_5 = closure$name;
        $receiver.attrs.name = it_5;
      }if (closure$onChange != null) {
        var it_6 = closure$onChange;
        $receiver.attrs.onChange = it_6;
      }if (closure$placeholder != null) {
        var it_7 = closure$placeholder;
        $receiver.attrs.placeholder = it_7;
      }if (closure$readOnly != null) {
        var it_8 = closure$readOnly;
        $receiver.attrs.readOnly = it_8;
      }if (closure$required != null) {
        var it_9 = closure$required;
        $receiver.attrs.required = it_9;
      }if (closure$rows != null) {
        var it_10 = closure$rows;
        $receiver.attrs.rows = it_10;
      }if (closure$rowsMax != null) {
        var it_11 = closure$rowsMax;
        $receiver.attrs.rowsMax = it_11;
      }set_type($receiver.attrs, closure$type);
      if (closure$value != null) {
        var it_12 = closure$value;
        $receiver.attrs.value = it_12;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mInput($receiver, value, required, disabled, readOnly, error, fullWidth, defaultValue, placeholder, disableUnderline, autoFocus, type, id, name, multiline, rows, rowsMax, onChange, addAsChild, className, handler) {
    if (value === void 0)
      value = null;
    if (required === void 0)
      required = null;
    if (disabled === void 0)
      disabled = null;
    if (readOnly === void 0)
      readOnly = null;
    if (error === void 0)
      error = null;
    if (fullWidth === void 0)
      fullWidth = false;
    if (defaultValue === void 0)
      defaultValue = null;
    if (placeholder === void 0)
      placeholder = null;
    if (disableUnderline === void 0)
      disableUnderline = null;
    if (autoFocus === void 0)
      autoFocus = null;
    if (type === void 0)
      type = InputType.text;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (multiline === void 0)
      multiline = false;
    if (rows === void 0)
      rows = null;
    if (rowsMax === void 0)
      rowsMax = null;
    if (onChange === void 0)
      onChange = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, inputComponent, addAsChild, mInput$lambda(autoFocus, defaultValue, disabled, disableUnderline, error, fullWidth, id, multiline, name, onChange, placeholder, readOnly, required, rows, rowsMax, type, value, className, handler));
  }
  var inputAdornmentComponent;
  function MInputAdornmentPosition(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MInputAdornmentPosition_initFields() {
    MInputAdornmentPosition_initFields = function () {
    };
    MInputAdornmentPosition$start_instance = new MInputAdornmentPosition('start', 0);
    MInputAdornmentPosition$end_instance = new MInputAdornmentPosition('end', 1);
  }
  var MInputAdornmentPosition$start_instance;
  function MInputAdornmentPosition$start_getInstance() {
    MInputAdornmentPosition_initFields();
    return MInputAdornmentPosition$start_instance;
  }
  var MInputAdornmentPosition$end_instance;
  function MInputAdornmentPosition$end_getInstance() {
    MInputAdornmentPosition_initFields();
    return MInputAdornmentPosition$end_instance;
  }
  MInputAdornmentPosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MInputAdornmentPosition',
    interfaces: [Enum]
  };
  function MInputAdornmentPosition$values() {
    return [MInputAdornmentPosition$start_getInstance(), MInputAdornmentPosition$end_getInstance()];
  }
  MInputAdornmentPosition.values = MInputAdornmentPosition$values;
  function MInputAdornmentPosition$valueOf(name) {
    switch (name) {
      case 'start':
        return MInputAdornmentPosition$start_getInstance();
      case 'end':
        return MInputAdornmentPosition$end_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.input.MInputAdornmentPosition.' + name);
    }
  }
  MInputAdornmentPosition.valueOf_61zpoe$ = MInputAdornmentPosition$valueOf;
  function MInputAdornmentProps() {
  }
  MInputAdornmentProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MInputAdornmentProps',
    interfaces: []
  };
  var position_0;
  var position_metadata_0 = new PropertyMetadata('position');
  function get_position_0($receiver) {
    return position_0.getValue_lrcp0p$($receiver, position_metadata_0);
  }
  function set_position_0($receiver, position) {
    position_0.setValue_9rddgb$($receiver, position_metadata_0, position);
  }
  var variant_16;
  var variant_metadata_16 = new PropertyMetadata('variant');
  function get_variant_16($receiver) {
    return variant_16.getValue_lrcp0p$($receiver, variant_metadata_16);
  }
  function set_variant_16($receiver, variant) {
    variant_16.setValue_9rddgb$($receiver, variant_metadata_16, variant);
  }
  function mInputAdornment$lambda(closure$disablePointerEvents, closure$disableTypography, closure$position, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disablePointerEvents = closure$disablePointerEvents;
      $receiver.attrs.disableTypography = closure$disableTypography;
      set_position_0($receiver.attrs, closure$position);
      set_variant_16($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mInputAdornment($receiver, position, disablePointerEvents, disableTypography, variant, className, handler) {
    if (position === void 0)
      position = MInputAdornmentPosition$start_getInstance();
    if (disablePointerEvents === void 0)
      disablePointerEvents = false;
    if (disableTypography === void 0)
      disableTypography = false;
    if (variant === void 0)
      variant = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, inputAdornmentComponent, false, mInputAdornment$lambda(disablePointerEvents, disableTypography, position, variant, className, handler));
  }
  function MInputMargin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MInputMargin_initFields() {
    MInputMargin_initFields = function () {
    };
    MInputMargin$dense_instance = new MInputMargin('dense', 0);
    MInputMargin$none_instance = new MInputMargin('none', 1);
  }
  var MInputMargin$dense_instance;
  function MInputMargin$dense_getInstance() {
    MInputMargin_initFields();
    return MInputMargin$dense_instance;
  }
  var MInputMargin$none_instance;
  function MInputMargin$none_getInstance() {
    MInputMargin_initFields();
    return MInputMargin$none_instance;
  }
  MInputMargin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MInputMargin',
    interfaces: [Enum]
  };
  function MInputMargin$values() {
    return [MInputMargin$dense_getInstance(), MInputMargin$none_getInstance()];
  }
  MInputMargin.values = MInputMargin$values;
  function MInputMargin$valueOf(name) {
    switch (name) {
      case 'dense':
        return MInputMargin$dense_getInstance();
      case 'none':
        return MInputMargin$none_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.input.MInputMargin.' + name);
    }
  }
  MInputMargin.valueOf_61zpoe$ = MInputMargin$valueOf;
  function MInputBaseNoOnChangeProps() {
  }
  MInputBaseNoOnChangeProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MInputBaseNoOnChangeProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function MInputBaseProps() {
  }
  MInputBaseProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MInputBaseProps',
    interfaces: [MInputBaseNoOnChangeProps]
  };
  var margin_2;
  var margin_metadata_2 = new PropertyMetadata('margin');
  function get_margin_2($receiver) {
    return margin_2.getValue_lrcp0p$($receiver, margin_metadata_2);
  }
  function set_margin_2($receiver, margin) {
    margin_2.setValue_9rddgb$($receiver, margin_metadata_2, margin);
  }
  function get_type($receiver) {
    var $receiver_0 = InputType$values();
    var first$result;
    first$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        if (equals(element.realValue, $receiver.type)) {
          first$result = element;
          break first$break;
        }}
      throw new NoSuchElementException_init('Array contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  }
  function set_type($receiver, value) {
    $receiver.type = value.realValue;
  }
  var inputLabelComponent;
  function MInputLabelProps() {
  }
  MInputLabelProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MInputLabelProps',
    interfaces: [MFormLabelProps]
  };
  var margin_3;
  var margin_metadata_3 = new PropertyMetadata('margin');
  function get_margin_3($receiver) {
    return margin_3.getValue_lrcp0p$($receiver, margin_metadata_3);
  }
  function set_margin_3($receiver, margin) {
    margin_3.setValue_9rddgb$($receiver, margin_metadata_3, margin);
  }
  var variant_17;
  var variant_metadata_17 = new PropertyMetadata('variant');
  function get_variant_17($receiver) {
    return variant_17.getValue_lrcp0p$($receiver, variant_metadata_17);
  }
  function set_variant_17($receiver, variant) {
    variant_17.setValue_9rddgb$($receiver, variant_metadata_17, variant);
  }
  function mInputLabel$lambda(closure$component, closure$disabled, closure$disableAnimation, closure$htmlFor, closure$error, closure$focused, closure$margin, closure$required, closure$shrink, closure$variant, closure$caption, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$component != null) {
        var it = closure$component;
        $receiver.attrs.component = it;
      }if (closure$disabled != null) {
        var it_0 = closure$disabled;
        $receiver.attrs.disabled = it_0;
      }$receiver.attrs.disableAnimation = closure$disableAnimation;
      if (closure$htmlFor != null) {
        var it_1 = closure$htmlFor;
        $receiver.attrs.htmlFor = it_1;
      }if (closure$error != null) {
        var it_2 = closure$error;
        $receiver.attrs.error = it_2;
      }if (closure$focused != null) {
        var it_3 = closure$focused;
        $receiver.attrs.focused = it_3;
      }if (closure$margin != null) {
        var it_4 = closure$margin;
        set_margin_3($receiver.attrs, it_4);
      }if (closure$required != null) {
        var it_5 = closure$required;
        $receiver.attrs.required = it_5;
      }if (closure$shrink != null) {
        var it_6 = closure$shrink;
        if (it_6) {
          $receiver.attrs.shrink = it_6;
        }}set_variant_17($receiver.attrs, closure$variant);
      $receiver.childList.add_11rb$(closure$caption);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mInputLabel($receiver, caption, htmlFor, required, disabled, error, focused, variant, shrink, disableAnimation, margin, component, className, handler) {
    if (htmlFor === void 0)
      htmlFor = null;
    if (required === void 0)
      required = null;
    if (disabled === void 0)
      disabled = null;
    if (error === void 0)
      error = null;
    if (focused === void 0)
      focused = null;
    if (variant === void 0)
      variant = MFormControlVariant$standard_getInstance();
    if (shrink === void 0)
      shrink = null;
    if (disableAnimation === void 0)
      disableAnimation = false;
    if (margin === void 0)
      margin = null;
    if (component === void 0)
      component = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, inputLabelComponent, void 0, mInputLabel$lambda(component, disabled, disableAnimation, htmlFor, error, focused, margin, required, shrink, variant, caption, className, handler));
  }
  var outlinedInputComponent;
  function MOutlinedInputProps() {
  }
  MOutlinedInputProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MOutlinedInputProps',
    interfaces: [MInputBaseProps]
  };
  function mOutlinedInput$lambda(closure$autoFocus, closure$defaultValue, closure$disabled, closure$error, closure$fullWidth, closure$id, closure$labelWidth, closure$multiline, closure$name, closure$notched, closure$onChange, closure$placeholder, closure$readOnly, closure$required, closure$rows, closure$rowsMax, closure$type, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$autoFocus != null) {
        var it = closure$autoFocus;
        $receiver.attrs.autoFocus = it;
      }if (closure$defaultValue != null) {
        var it_0 = closure$defaultValue;
        $receiver.attrs.defaultValue = it_0;
      }if (closure$disabled != null) {
        var it_1 = closure$disabled;
        $receiver.attrs.disabled = it_1;
      }if (closure$error != null) {
        var it_2 = closure$error;
        $receiver.attrs.error = it_2;
      }$receiver.attrs.fullWidth = closure$fullWidth;
      if (closure$id != null) {
        var it_3 = closure$id;
        $receiver.attrs.id = it_3;
      }if (closure$labelWidth != null) {
        var it_4 = closure$labelWidth;
        $receiver.attrs.labelWidth = it_4;
      }$receiver.attrs.multiline = closure$multiline;
      if (closure$name != null) {
        var it_5 = closure$name;
        $receiver.attrs.name = it_5;
      }if (closure$notched != null) {
        var it_6 = closure$notched;
        $receiver.attrs.notched = it_6;
      }if (closure$onChange != null) {
        var it_7 = closure$onChange;
        $receiver.attrs.onChange = it_7;
      }if (closure$placeholder != null) {
        var it_8 = closure$placeholder;
        $receiver.attrs.placeholder = it_8;
      }if (closure$readOnly != null) {
        var it_9 = closure$readOnly;
        $receiver.attrs.readOnly = it_9;
      }if (closure$required != null) {
        var it_10 = closure$required;
        $receiver.attrs.required = it_10;
      }if (closure$rows != null) {
        var it_11 = closure$rows;
        $receiver.attrs.rows = it_11;
      }if (closure$rowsMax != null) {
        var it_12 = closure$rowsMax;
        $receiver.attrs.rowsMax = it_12;
      }set_type($receiver.attrs, closure$type);
      if (closure$value != null) {
        var it_13 = closure$value;
        $receiver.attrs.value = it_13;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mOutlinedInput($receiver, value, required, disabled, readOnly, error, fullWidth, defaultValue, placeholder, labelWidth, notched, autoFocus, type, id, name, multiline, rows, rowsMax, onChange, addAsChild, className, handler) {
    if (value === void 0)
      value = null;
    if (required === void 0)
      required = null;
    if (disabled === void 0)
      disabled = null;
    if (readOnly === void 0)
      readOnly = null;
    if (error === void 0)
      error = null;
    if (fullWidth === void 0)
      fullWidth = false;
    if (defaultValue === void 0)
      defaultValue = null;
    if (placeholder === void 0)
      placeholder = null;
    if (labelWidth === void 0)
      labelWidth = null;
    if (notched === void 0)
      notched = null;
    if (autoFocus === void 0)
      autoFocus = null;
    if (type === void 0)
      type = InputType.text;
    if (id === void 0)
      id = null;
    if (name === void 0)
      name = null;
    if (multiline === void 0)
      multiline = false;
    if (rows === void 0)
      rows = null;
    if (rowsMax === void 0)
      rowsMax = null;
    if (onChange === void 0)
      onChange = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, outlinedInputComponent, addAsChild, mOutlinedInput$lambda(autoFocus, defaultValue, disabled, error, fullWidth, id, labelWidth, multiline, name, notched, onChange, placeholder, readOnly, required, rows, rowsMax, type, value, className, handler));
  }
  var component_5;
  function MAlertVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MAlertVariant_initFields() {
    MAlertVariant_initFields = function () {
    };
    MAlertVariant$filled_instance = new MAlertVariant('filled', 0);
    MAlertVariant$outlined_instance = new MAlertVariant('outlined', 1);
    MAlertVariant$standard_instance = new MAlertVariant('standard', 2);
  }
  var MAlertVariant$filled_instance;
  function MAlertVariant$filled_getInstance() {
    MAlertVariant_initFields();
    return MAlertVariant$filled_instance;
  }
  var MAlertVariant$outlined_instance;
  function MAlertVariant$outlined_getInstance() {
    MAlertVariant_initFields();
    return MAlertVariant$outlined_instance;
  }
  var MAlertVariant$standard_instance;
  function MAlertVariant$standard_getInstance() {
    MAlertVariant_initFields();
    return MAlertVariant$standard_instance;
  }
  MAlertVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAlertVariant',
    interfaces: [Enum]
  };
  function MAlertVariant$values() {
    return [MAlertVariant$filled_getInstance(), MAlertVariant$outlined_getInstance(), MAlertVariant$standard_getInstance()];
  }
  MAlertVariant.values = MAlertVariant$values;
  function MAlertVariant$valueOf(name) {
    switch (name) {
      case 'filled':
        return MAlertVariant$filled_getInstance();
      case 'outlined':
        return MAlertVariant$outlined_getInstance();
      case 'standard':
        return MAlertVariant$standard_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.lab.alert.MAlertVariant.' + name);
    }
  }
  MAlertVariant.valueOf_61zpoe$ = MAlertVariant$valueOf;
  function MAlertSeverity(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MAlertSeverity_initFields() {
    MAlertSeverity_initFields = function () {
    };
    MAlertSeverity$error_instance = new MAlertSeverity('error', 0);
    MAlertSeverity$info_instance = new MAlertSeverity('info', 1);
    MAlertSeverity$success_instance = new MAlertSeverity('success', 2);
    MAlertSeverity$warning_instance = new MAlertSeverity('warning', 3);
  }
  var MAlertSeverity$error_instance;
  function MAlertSeverity$error_getInstance() {
    MAlertSeverity_initFields();
    return MAlertSeverity$error_instance;
  }
  var MAlertSeverity$info_instance;
  function MAlertSeverity$info_getInstance() {
    MAlertSeverity_initFields();
    return MAlertSeverity$info_instance;
  }
  var MAlertSeverity$success_instance;
  function MAlertSeverity$success_getInstance() {
    MAlertSeverity_initFields();
    return MAlertSeverity$success_instance;
  }
  var MAlertSeverity$warning_instance;
  function MAlertSeverity$warning_getInstance() {
    MAlertSeverity_initFields();
    return MAlertSeverity$warning_instance;
  }
  MAlertSeverity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MAlertSeverity',
    interfaces: [Enum]
  };
  function MAlertSeverity$values() {
    return [MAlertSeverity$error_getInstance(), MAlertSeverity$info_getInstance(), MAlertSeverity$success_getInstance(), MAlertSeverity$warning_getInstance()];
  }
  MAlertSeverity.values = MAlertSeverity$values;
  function MAlertSeverity$valueOf(name) {
    switch (name) {
      case 'error':
        return MAlertSeverity$error_getInstance();
      case 'info':
        return MAlertSeverity$info_getInstance();
      case 'success':
        return MAlertSeverity$success_getInstance();
      case 'warning':
        return MAlertSeverity$warning_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.lab.alert.MAlertSeverity.' + name);
    }
  }
  MAlertSeverity.valueOf_61zpoe$ = MAlertSeverity$valueOf;
  function MAlertProps() {
  }
  MAlertProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MAlertProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var variant_18;
  var variant_metadata_18 = new PropertyMetadata('variant');
  function get_variant_18($receiver) {
    return variant_18.getValue_lrcp0p$($receiver, variant_metadata_18);
  }
  function set_variant_18($receiver, variant) {
    variant_18.setValue_9rddgb$($receiver, variant_metadata_18, variant);
  }
  var severity;
  var severity_metadata = new PropertyMetadata('severity');
  function get_severity($receiver) {
    return severity.getValue_lrcp0p$($receiver, severity_metadata);
  }
  function set_severity($receiver, severity_0) {
    severity.setValue_9rddgb$($receiver, severity_metadata, severity_0);
  }
  function mAlert$lambda(closure$message, closure$variant, closure$severity, closure$closeText, closure$onClose, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$message != null) {
        $receiver.unaryPlus_pdl1vz$(closure$message);
      }set_variant_18($receiver.attrs, closure$variant);
      set_severity($receiver.attrs, closure$severity);
      $receiver.attrs.closeText = closure$closeText;
      if (closure$onClose != null) {
        var closure$onClose_0 = closure$onClose;
        $receiver.attrs.onClose = closure$onClose_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAlert($receiver, message, variant, severity, closeText, onClose, addAsChild, className, handler) {
    if (variant === void 0)
      variant = MAlertVariant$standard_getInstance();
    if (severity === void 0)
      severity = MAlertSeverity$success_getInstance();
    if (closeText === void 0)
      closeText = 'Close';
    if (onClose === void 0)
      onClose = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_5, addAsChild, mAlert$lambda(message, variant, severity, closeText, onClose, className, handler));
  }
  function mAlert$lambda_0(closure$variant, closure$severity, closure$closeText, closure$onClose, closure$title, closure$message, closure$className, closure$handler) {
    return function ($receiver) {
      set_variant_18($receiver.attrs, closure$variant);
      set_severity($receiver.attrs, closure$severity);
      $receiver.attrs.closeText = closure$closeText;
      if (closure$onClose != null) {
        var closure$onClose_0 = closure$onClose;
        $receiver.attrs.onClose = closure$onClose_0;
      }$receiver.unaryPlus_84gpoi$(mAlertTitle($receiver, closure$title, false));
      if (closure$message != null) {
        $receiver.unaryPlus_pdl1vz$(closure$message);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAlert_0($receiver, title, message, variant, severity, closeText, onClose, addAsChild, className, handler) {
    if (variant === void 0)
      variant = MAlertVariant$standard_getInstance();
    if (severity === void 0)
      severity = MAlertSeverity$success_getInstance();
    if (closeText === void 0)
      closeText = 'Close';
    if (onClose === void 0)
      onClose = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_5, addAsChild, mAlert$lambda_0(variant, severity, closeText, onClose, title, message, className, handler));
  }
  var component_6;
  function mAlertTitle$lambda(closure$title, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$title);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mAlertTitle($receiver, title, addAsChild, className, handler) {
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, component_6, addAsChild, mAlertTitle$lambda(title, className, handler));
  }
  var listComponent;
  function MListProps() {
  }
  MListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MListProps',
    interfaces: [MButtonBaseProps]
  };
  function mList$lambda(closure$component, closure$dense, closure$disablePadding, closure$subheader, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      $receiver.attrs.dense = closure$dense;
      $receiver.attrs.disablePadding = closure$disablePadding;
      if (closure$subheader != null) {
        var closure$subheader_0 = closure$subheader;
        $receiver.attrs.subheader = closure$subheader_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mList($receiver, dense, disablePadding, subheader, component, className, handler) {
    if (dense === void 0)
      dense = false;
    if (disablePadding === void 0)
      disablePadding = false;
    if (subheader === void 0)
      subheader = null;
    if (component === void 0)
      component = 'ul';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listComponent, void 0, mList$lambda(component, dense, disablePadding, subheader, className, handler));
  }
  function mList$lambda_0(closure$component, closure$dense, closure$disablePadding, closure$subheader, closure$addHeadDivider, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      $receiver.attrs.dense = closure$dense;
      $receiver.attrs.disablePadding = closure$disablePadding;
      $receiver.attrs.subheader = mListSubheader($receiver, closure$subheader, void 0, void 0, void 0, void 0, void 0, void 0, false);
      if (closure$addHeadDivider) {
        $receiver.childList.add_11rb$(mDivider($receiver, void 0, void 0, void 0, void 0, void 0, false));
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mList_0($receiver, subheader, addHeadDivider, dense, disablePadding, component, className, handler) {
    if (addHeadDivider === void 0)
      addHeadDivider = false;
    if (dense === void 0)
      dense = false;
    if (disablePadding === void 0)
      disablePadding = false;
    if (component === void 0)
      component = 'ul';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listComponent, void 0, mList$lambda_0(component, dense, disablePadding, subheader, addHeadDivider, className, handler));
  }
  var listItemComponent;
  function MListItemAlignItems(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MListItemAlignItems_initFields() {
    MListItemAlignItems_initFields = function () {
    };
    MListItemAlignItems$flexStart_instance = new MListItemAlignItems('flexStart', 0);
    MListItemAlignItems$center_instance = new MListItemAlignItems('center', 1);
  }
  var MListItemAlignItems$flexStart_instance;
  function MListItemAlignItems$flexStart_getInstance() {
    MListItemAlignItems_initFields();
    return MListItemAlignItems$flexStart_instance;
  }
  var MListItemAlignItems$center_instance;
  function MListItemAlignItems$center_getInstance() {
    MListItemAlignItems_initFields();
    return MListItemAlignItems$center_instance;
  }
  MListItemAlignItems.prototype.toString = function () {
    return toHyphenCase(Enum.prototype.toString.call(this));
  };
  MListItemAlignItems.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MListItemAlignItems',
    interfaces: [Enum]
  };
  function MListItemAlignItems$values() {
    return [MListItemAlignItems$flexStart_getInstance(), MListItemAlignItems$center_getInstance()];
  }
  MListItemAlignItems.values = MListItemAlignItems$values;
  function MListItemAlignItems$valueOf(name) {
    switch (name) {
      case 'flexStart':
        return MListItemAlignItems$flexStart_getInstance();
      case 'center':
        return MListItemAlignItems$center_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.list.MListItemAlignItems.' + name);
    }
  }
  MListItemAlignItems.valueOf_61zpoe$ = MListItemAlignItems$valueOf;
  function MListItemProps() {
  }
  MListItemProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MListItemProps',
    interfaces: [MButtonBaseProps]
  };
  var alignItems_0;
  var alignItems_metadata_0 = new PropertyMetadata('alignItems');
  function get_alignItems_0($receiver) {
    return alignItems_0.getValue_lrcp0p$($receiver, alignItems_metadata_0);
  }
  function set_alignItems_0($receiver, alignItems) {
    alignItems_0.setValue_9rddgb$($receiver, alignItems_metadata_0, alignItems);
  }
  function mListItem$lambda(closure$hRefOptions, closure$primaryText, closure$secondaryText, closure$handler) {
    return function ($receiver) {
      if (closure$hRefOptions != null) {
        $receiver.attrs.component = 'a';
      }mListItemText($receiver, closure$primaryText, closure$secondaryText);
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mListItem($receiver, primaryText, secondaryText, selected, key, alignItems, divider, hRefOptions, onClick, className, handler) {
    if (secondaryText === void 0)
      secondaryText = null;
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (alignItems === void 0)
      alignItems = MListItemAlignItems$center_getInstance();
    if (divider === void 0)
      divider = true;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mListItem_0($receiver, true, void 0, void 0, selected, key, alignItems, void 0, void 0, void 0, divider, hRefOptions, onClick, className, mListItem$lambda(hRefOptions, primaryText, secondaryText, handler));
  }
  function mListItemWithIcon$lambda$lambda$lambda(closure$iconName) {
    return function ($receiver) {
      mIcon($receiver, closure$iconName);
      return Unit;
    };
  }
  function mListItemWithIcon$lambda$lambda(closure$iconName) {
    return function ($receiver) {
      mAvatar($receiver, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, mListItemWithIcon$lambda$lambda$lambda(closure$iconName));
      return Unit;
    };
  }
  function mListItemWithIcon$lambda(closure$hRefOptions, closure$useAvatar, closure$iconName, closure$primaryText, closure$secondaryText, closure$handler) {
    return function ($receiver) {
      if (closure$hRefOptions != null) {
        $receiver.attrs.component = 'a';
      }if (closure$useAvatar) {
        mListItemAvatar($receiver, void 0, mListItemWithIcon$lambda$lambda(closure$iconName));
      } else {
        mListItemIcon($receiver, closure$iconName);
      }
      mListItemText($receiver, closure$primaryText, closure$secondaryText);
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mListItemWithIcon($receiver, iconName, primaryText, secondaryText, selected, key, alignItems, divider, useAvatar, hRefOptions, onClick, className, handler) {
    if (secondaryText === void 0)
      secondaryText = null;
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (alignItems === void 0)
      alignItems = MListItemAlignItems$center_getInstance();
    if (divider === void 0)
      divider = true;
    if (useAvatar === void 0)
      useAvatar = false;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mListItem_0($receiver, true, void 0, void 0, selected, key, alignItems, void 0, void 0, void 0, divider, hRefOptions, onClick, className, mListItemWithIcon$lambda(hRefOptions, useAvatar, iconName, primaryText, secondaryText, handler));
  }
  function mListItemWithAvatar$lambda$lambda(closure$avatarSrc) {
    return function ($receiver) {
      mAvatar($receiver, closure$avatarSrc);
      return Unit;
    };
  }
  function mListItemWithAvatar$lambda(closure$hRefOptions, closure$avatarSrc, closure$primaryText, closure$secondaryText, closure$handler) {
    return function ($receiver) {
      if (closure$hRefOptions != null) {
        $receiver.attrs.component = 'a';
      }mListItemAvatar($receiver, void 0, mListItemWithAvatar$lambda$lambda(closure$avatarSrc));
      mListItemText($receiver, closure$primaryText, closure$secondaryText);
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mListItemWithAvatar($receiver, avatarSrc, primaryText, secondaryText, selected, key, alignItems, divider, hRefOptions, onClick, className, handler) {
    if (secondaryText === void 0)
      secondaryText = null;
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (alignItems === void 0)
      alignItems = MListItemAlignItems$center_getInstance();
    if (divider === void 0)
      divider = true;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mListItem_0($receiver, true, void 0, void 0, selected, key, alignItems, void 0, void 0, void 0, divider, hRefOptions, onClick, className, mListItemWithAvatar$lambda(hRefOptions, avatarSrc, primaryText, secondaryText, handler));
  }
  function mListItem$lambda_0(closure$alignItems, closure$button, closure$component, closure$containerComponent, closure$containerProps, closure$dense, closure$disableGutters, closure$divider, closure$hRefOptions, closure$onClick, closure$selected, closure$key, closure$className, closure$handler) {
    return function ($receiver) {
      set_alignItems_0($receiver.attrs, closure$alignItems);
      $receiver.attrs.button = closure$button;
      if (closure$component != null) {
        var closure$component_0 = closure$component;
        $receiver.attrs.component = closure$component_0;
      }$receiver.attrs.ContainerComponent = closure$containerComponent;
      if (closure$containerProps != null) {
        var closure$containerProps_0 = closure$containerProps;
        $receiver.attrs.ContainerProps = closure$containerProps_0;
      }$receiver.attrs.dense = closure$dense;
      $receiver.attrs.disableGutters = closure$disableGutters;
      $receiver.attrs.divider = closure$divider;
      if (closure$hRefOptions != null) {
        var it = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it);
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }$receiver.attrs.selected = closure$selected;
      if (closure$key != null) {
        var closure$key_0 = closure$key;
        set_key($receiver.attrs, closure$key_0);
      }$receiver.attrs.selected = closure$selected;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListItem_0($receiver, button, component, containerComponent, selected, key, alignItems, containerProps, dense, disableGutters, divider, hRefOptions, onClick, className, handler) {
    if (button === void 0)
      button = false;
    if (component === void 0)
      component = null;
    if (containerComponent === void 0)
      containerComponent = 'li';
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (alignItems === void 0)
      alignItems = MListItemAlignItems$center_getInstance();
    if (containerProps === void 0)
      containerProps = null;
    if (dense === void 0)
      dense = false;
    if (disableGutters === void 0)
      disableGutters = false;
    if (divider === void 0)
      divider = false;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listItemComponent, void 0, mListItem$lambda_0(alignItems, button, component, containerComponent, containerProps, dense, disableGutters, divider, hRefOptions, onClick, selected, key, className, handler));
  }
  var listItemAvatarComponent;
  function mListItemAvatar$lambda(closure$className, closure$handler) {
    return function ($receiver) {
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListItemAvatar($receiver, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listItemAvatarComponent, void 0, mListItemAvatar$lambda(className, handler));
  }
  function mListItemAvatar$lambda_0(closure$src, closure$srcSet, closure$alt, closure$variant, closure$component, closure$imgProps, closure$sizes, closure$className, closure$handler) {
    return function ($receiver) {
      mAvatar($receiver, closure$src, closure$srcSet, closure$alt, closure$variant, closure$component, closure$imgProps, closure$sizes);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListItemAvatar_0($receiver, src, alt, srcSet, variant, component, imgProps, sizes, className, handler) {
    if (src === void 0)
      src = null;
    if (alt === void 0)
      alt = null;
    if (srcSet === void 0)
      srcSet = null;
    if (variant === void 0)
      variant = MAvatarVariant$circle_getInstance();
    if (component === void 0)
      component = 'div';
    if (imgProps === void 0)
      imgProps = null;
    if (sizes === void 0)
      sizes = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listItemAvatarComponent, void 0, mListItemAvatar$lambda_0(src, srcSet, alt, variant, component, imgProps, sizes, className, handler));
  }
  var listItemIconComponent;
  function mListItemIcon$lambda(closure$iconName, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$iconName != null) {
        mIcon($receiver, closure$iconName);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListItemIcon($receiver, iconName, className, handler) {
    if (iconName === void 0)
      iconName = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listItemIconComponent, void 0, mListItemIcon$lambda(iconName, className, handler));
  }
  var listItemSecondaryActionComponent;
  function mListItemSecondaryAction$lambda(closure$className, closure$handler) {
    return function ($receiver) {
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListItemSecondaryAction($receiver, className, handler) {
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listItemSecondaryActionComponent, void 0, mListItemSecondaryAction$lambda(className, handler));
  }
  var listItemTextComponent;
  function MListItemTextProps() {
  }
  MListItemTextProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MListItemTextProps',
    interfaces: [MButtonBaseProps]
  };
  function mListItemText($receiver, primary, secondary, inset, disableTypography, className, handler) {
    if (secondary === void 0)
      secondary = null;
    if (inset === void 0)
      inset = false;
    if (disableTypography === void 0)
      disableTypography = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    var primaryAsElement = primary;
    var secondaryAsElement = secondary != null ? secondary : null;
    return mListItemText_0($receiver, primaryAsElement, secondaryAsElement, inset, disableTypography, className, handler);
  }
  function mListItemText$lambda(closure$disableTypography, closure$inset, closure$primary, closure$secondary, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.disableTypography = closure$disableTypography;
      $receiver.attrs.inset = closure$inset;
      if (closure$primary != null) {
        var closure$primary_0 = closure$primary;
        $receiver.attrs.primary = closure$primary_0;
      }if (closure$secondary != null) {
        var closure$secondary_0 = closure$secondary;
        $receiver.attrs.secondary = closure$secondary_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListItemText_0($receiver, primary, secondary, inset, disableTypography, className, handler) {
    if (primary === void 0)
      primary = null;
    if (secondary === void 0)
      secondary = null;
    if (inset === void 0)
      inset = false;
    if (disableTypography === void 0)
      disableTypography = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listItemTextComponent, void 0, mListItemText$lambda(disableTypography, inset, primary, secondary, className, handler));
  }
  var listSubheaderComponent;
  function MListSubheaderColor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MListSubheaderColor_initFields() {
    MListSubheaderColor_initFields = function () {
    };
    MListSubheaderColor$default_instance = new MListSubheaderColor('default', 0);
    MListSubheaderColor$primary_instance = new MListSubheaderColor('primary', 1);
    MListSubheaderColor$inherit_instance = new MListSubheaderColor('inherit', 2);
  }
  var MListSubheaderColor$default_instance;
  function MListSubheaderColor$default_getInstance() {
    MListSubheaderColor_initFields();
    return MListSubheaderColor$default_instance;
  }
  var MListSubheaderColor$primary_instance;
  function MListSubheaderColor$primary_getInstance() {
    MListSubheaderColor_initFields();
    return MListSubheaderColor$primary_instance;
  }
  var MListSubheaderColor$inherit_instance;
  function MListSubheaderColor$inherit_getInstance() {
    MListSubheaderColor_initFields();
    return MListSubheaderColor$inherit_instance;
  }
  MListSubheaderColor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MListSubheaderColor',
    interfaces: [Enum]
  };
  function MListSubheaderColor$values() {
    return [MListSubheaderColor$default_getInstance(), MListSubheaderColor$primary_getInstance(), MListSubheaderColor$inherit_getInstance()];
  }
  MListSubheaderColor.values = MListSubheaderColor$values;
  function MListSubheaderColor$valueOf(name) {
    switch (name) {
      case 'default':
        return MListSubheaderColor$default_getInstance();
      case 'primary':
        return MListSubheaderColor$primary_getInstance();
      case 'inherit':
        return MListSubheaderColor$inherit_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.list.MListSubheaderColor.' + name);
    }
  }
  MListSubheaderColor.valueOf_61zpoe$ = MListSubheaderColor$valueOf;
  function MListSubheaderProps() {
  }
  MListSubheaderProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MListSubheaderProps',
    interfaces: [MButtonBaseProps]
  };
  var color_14;
  var color_metadata_14 = new PropertyMetadata('color');
  function get_color_14($receiver) {
    return color_14.getValue_lrcp0p$($receiver, color_metadata_14);
  }
  function set_color_14($receiver, color) {
    color_14.setValue_9rddgb$($receiver, color_metadata_14, color);
  }
  function mListSubheader$lambda(closure$color, closure$component, closure$disableGutters, closure$disableSticky, closure$inset, closure$heading, closure$compact, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_14($receiver.attrs, closure$color);
      if (closure$component != null) {
        var closure$component_0 = closure$component;
        $receiver.attrs.component = closure$component_0;
      }$receiver.attrs.disableGutters = closure$disableGutters;
      $receiver.attrs.disableSticky = closure$disableSticky;
      $receiver.attrs.inset = closure$inset;
      $receiver.childList.add_11rb$(closure$heading);
      if (closure$compact) {
        var $receiver_0 = $receiver.css;
        set_lineHeight($receiver_0, new LineHeight('1em'));
        padding($receiver_0, get_spacingUnits(1));
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListSubheader($receiver, heading, color, component, disableGutters, disableSticky, inset, compact, addAsChild, className, handler) {
    if (color === void 0)
      color = MListSubheaderColor$default_getInstance();
    if (component === void 0)
      component = null;
    if (disableGutters === void 0)
      disableGutters = false;
    if (disableSticky === void 0)
      disableSticky = false;
    if (inset === void 0)
      inset = false;
    if (compact === void 0)
      compact = false;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listSubheaderComponent, addAsChild, mListSubheader$lambda(color, component, disableGutters, disableSticky, inset, heading, compact, className, handler));
  }
  function mListSubheader$lambda_0(closure$color, closure$component, closure$disableGutters, closure$disableSticky, closure$inset, closure$className, closure$handler) {
    return function ($receiver) {
      set_color_14($receiver.attrs, closure$color);
      if (closure$component != null) {
        var closure$component_0 = closure$component;
        $receiver.attrs.component = closure$component_0;
      }$receiver.attrs.disableGutters = closure$disableGutters;
      $receiver.attrs.disableSticky = closure$disableSticky;
      $receiver.attrs.inset = closure$inset;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mListSubheader_0($receiver, color, component, disableGutters, disableSticky, inset, addAsChild, className, handler) {
    if (color === void 0)
      color = MListSubheaderColor$default_getInstance();
    if (component === void 0)
      component = null;
    if (disableGutters === void 0)
      disableGutters = false;
    if (disableSticky === void 0)
      disableSticky = false;
    if (inset === void 0)
      inset = false;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, listSubheaderComponent, addAsChild, mListSubheader$lambda_0(color, component, disableGutters, disableSticky, inset, className, handler));
  }
  var menuComponent;
  function MenuOnCloseReason(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MenuOnCloseReason_initFields() {
    MenuOnCloseReason_initFields = function () {
    };
    MenuOnCloseReason$escapeKeyDown_instance = new MenuOnCloseReason('escapeKeyDown', 0);
    MenuOnCloseReason$backdropClick_instance = new MenuOnCloseReason('backdropClick', 1);
    MenuOnCloseReason$tabKeyDown_instance = new MenuOnCloseReason('tabKeyDown', 2);
  }
  var MenuOnCloseReason$escapeKeyDown_instance;
  function MenuOnCloseReason$escapeKeyDown_getInstance() {
    MenuOnCloseReason_initFields();
    return MenuOnCloseReason$escapeKeyDown_instance;
  }
  var MenuOnCloseReason$backdropClick_instance;
  function MenuOnCloseReason$backdropClick_getInstance() {
    MenuOnCloseReason_initFields();
    return MenuOnCloseReason$backdropClick_instance;
  }
  var MenuOnCloseReason$tabKeyDown_instance;
  function MenuOnCloseReason$tabKeyDown_getInstance() {
    MenuOnCloseReason_initFields();
    return MenuOnCloseReason$tabKeyDown_instance;
  }
  MenuOnCloseReason.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MenuOnCloseReason',
    interfaces: [Enum]
  };
  function MenuOnCloseReason$values() {
    return [MenuOnCloseReason$escapeKeyDown_getInstance(), MenuOnCloseReason$backdropClick_getInstance(), MenuOnCloseReason$tabKeyDown_getInstance()];
  }
  MenuOnCloseReason.values = MenuOnCloseReason$values;
  function MenuOnCloseReason$valueOf(name) {
    switch (name) {
      case 'escapeKeyDown':
        return MenuOnCloseReason$escapeKeyDown_getInstance();
      case 'backdropClick':
        return MenuOnCloseReason$backdropClick_getInstance();
      case 'tabKeyDown':
        return MenuOnCloseReason$tabKeyDown_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.menu.MenuOnCloseReason.' + name);
    }
  }
  MenuOnCloseReason.valueOf_61zpoe$ = MenuOnCloseReason$valueOf;
  function MMenuVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MMenuVariant_initFields() {
    MMenuVariant_initFields = function () {
    };
    MMenuVariant$menu_instance = new MMenuVariant('menu', 0);
    MMenuVariant$selectedMenu_instance = new MMenuVariant('selectedMenu', 1);
  }
  var MMenuVariant$menu_instance;
  function MMenuVariant$menu_getInstance() {
    MMenuVariant_initFields();
    return MMenuVariant$menu_instance;
  }
  var MMenuVariant$selectedMenu_instance;
  function MMenuVariant$selectedMenu_getInstance() {
    MMenuVariant_initFields();
    return MMenuVariant$selectedMenu_instance;
  }
  MMenuVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MMenuVariant',
    interfaces: [Enum]
  };
  function MMenuVariant$values() {
    return [MMenuVariant$menu_getInstance(), MMenuVariant$selectedMenu_getInstance()];
  }
  MMenuVariant.values = MMenuVariant$values;
  function MMenuVariant$valueOf(name) {
    switch (name) {
      case 'menu':
        return MMenuVariant$menu_getInstance();
      case 'selectedMenu':
        return MMenuVariant$selectedMenu_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.menu.MMenuVariant.' + name);
    }
  }
  MMenuVariant.valueOf_61zpoe$ = MMenuVariant$valueOf;
  function MMenuProps() {
  }
  MMenuProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MMenuProps',
    interfaces: [MPopoverProps]
  };
  var variant_19;
  var variant_metadata_19 = new PropertyMetadata('variant');
  function get_variant_19($receiver) {
    return variant_19.getValue_lrcp0p$($receiver, variant_metadata_19);
  }
  function set_variant_19($receiver, variant) {
    variant_19.setValue_9rddgb$($receiver, variant_metadata_19, variant);
  }
  var onClose_1;
  var onClose_metadata_1 = new PropertyMetadata('onClose');
  function get_onClose_1($receiver) {
    return onClose_1.getValue_lrcp0p$($receiver, onClose_metadata_1);
  }
  function set_onClose_1($receiver, onClose) {
    onClose_1.setValue_9rddgb$($receiver, onClose_metadata_1, onClose);
  }
  function mMenu$lambda(closure$anchorElement, closure$autoFocus, closure$menuListProps, closure$onClose, closure$open, closure$popoverClasses, closure$transitionComponent, closure$transitionDuration, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$anchorElement != null) {
        var closure$anchorElement_0 = closure$anchorElement;
        $receiver.attrs.anchorEl = closure$anchorElement_0;
      }$receiver.attrs.autoFocus = closure$autoFocus;
      if (closure$menuListProps != null) {
        var closure$menuListProps_0 = closure$menuListProps;
        $receiver.attrs.MenuListProps = closure$menuListProps_0;
      }set_onClose_1($receiver.attrs, closure$onClose);
      $receiver.attrs.open = closure$open;
      if (closure$popoverClasses != null) {
        var closure$popoverClasses_0 = closure$popoverClasses;
        $receiver.attrs.PopoverClasses = closure$popoverClasses_0;
      }set_transitionComponent($receiver.attrs, closure$transitionComponent);
      set_transitionDuration_1($receiver.attrs, closure$transitionDuration);
      set_variant_19($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mMenu($receiver, open, anchorElement, onClose, autoFocus, menuListProps, popoverClasses, transitionComponent, transitionDuration, variant, className, handler) {
    if (anchorElement === void 0)
      anchorElement = null;
    if (onClose === void 0)
      onClose = null;
    if (autoFocus === void 0)
      autoFocus = true;
    if (menuListProps === void 0)
      menuListProps = null;
    if (popoverClasses === void 0)
      popoverClasses = null;
    if (transitionComponent === void 0)
      transitionComponent = null;
    if (transitionDuration === void 0)
      transitionDuration = new AutoTransitionDuration();
    if (variant === void 0)
      variant = MMenuVariant$selectedMenu_getInstance();
    if (className === void 0)
      className = null;
    return createStyled($receiver, menuComponent, void 0, mMenu$lambda(anchorElement, autoFocus, menuListProps, onClose, open, popoverClasses, transitionComponent, transitionDuration, variant, className, handler));
  }
  var menuItemComponent;
  function MMenuItemProps() {
  }
  MMenuItemProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MMenuItemProps',
    interfaces: [MListItemProps]
  };
  function mMenuItem$lambda(closure$hRefOptions, closure$secondaryText, closure$primaryText, closure$handler) {
    return function ($receiver) {
      if (closure$hRefOptions != null) {
        $receiver.attrs.component = 'a';
      }if (closure$secondaryText == null) {
        $receiver.unaryPlus_pdl1vz$(closure$primaryText);
      } else {
        mListItemText($receiver, closure$primaryText, closure$secondaryText);
      }
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mMenuItem($receiver, primaryText, secondaryText, selected, key, value, divider, disabled, hRefOptions, onClick, className, handler) {
    if (secondaryText === void 0)
      secondaryText = null;
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (value === void 0)
      value = null;
    if (divider === void 0)
      divider = false;
    if (disabled === void 0)
      disabled = false;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mMenuItem_0($receiver, selected, true, void 0, void 0, key, value, divider, disabled, hRefOptions, void 0, void 0, void 0, onClick, className, mMenuItem$lambda(hRefOptions, secondaryText, primaryText, handler));
  }
  function mMenuItemWithIcon$lambda$lambda$lambda(closure$iconName) {
    return function ($receiver) {
      mIcon($receiver, closure$iconName);
      return Unit;
    };
  }
  function mMenuItemWithIcon$lambda$lambda(closure$iconName) {
    return function ($receiver) {
      mAvatar($receiver, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, mMenuItemWithIcon$lambda$lambda$lambda(closure$iconName));
      return Unit;
    };
  }
  function mMenuItemWithIcon$lambda(closure$hRefOptions, closure$useAvatar, closure$iconName, closure$secondaryText, closure$primaryText, closure$handler) {
    return function ($receiver) {
      if (closure$hRefOptions != null) {
        $receiver.attrs.component = 'a';
      }if (closure$useAvatar) {
        mListItemAvatar($receiver, void 0, mMenuItemWithIcon$lambda$lambda(closure$iconName));
      } else {
        mListItemIcon($receiver, closure$iconName);
      }
      if (closure$secondaryText == null) {
        $receiver.unaryPlus_pdl1vz$(closure$primaryText);
      } else {
        mListItemText($receiver, closure$primaryText, closure$secondaryText);
      }
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mMenuItemWithIcon($receiver, iconName, primaryText, secondaryText, selected, key, value, divider, disabled, useAvatar, hRefOptions, onClick, className, handler) {
    if (secondaryText === void 0)
      secondaryText = null;
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (value === void 0)
      value = null;
    if (divider === void 0)
      divider = false;
    if (disabled === void 0)
      disabled = false;
    if (useAvatar === void 0)
      useAvatar = false;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mMenuItem_0($receiver, selected, true, void 0, void 0, key, value, divider, disabled, hRefOptions, void 0, void 0, void 0, onClick, className, mMenuItemWithIcon$lambda(hRefOptions, useAvatar, iconName, secondaryText, primaryText, handler));
  }
  function mMenuItemWithAvatar$lambda$lambda(closure$avatarSrc) {
    return function ($receiver) {
      mAvatar($receiver, closure$avatarSrc);
      return Unit;
    };
  }
  function mMenuItemWithAvatar$lambda(closure$hRefOptions, closure$avatarSrc, closure$secondaryText, closure$primaryText, closure$handler) {
    return function ($receiver) {
      if (closure$hRefOptions != null) {
        $receiver.attrs.component = 'a';
      }mListItemAvatar($receiver, void 0, mMenuItemWithAvatar$lambda$lambda(closure$avatarSrc));
      if (closure$secondaryText == null) {
        $receiver.unaryPlus_pdl1vz$(closure$primaryText);
      } else {
        mListItemText($receiver, closure$primaryText, closure$secondaryText);
      }
      if (closure$handler != null)
        closure$handler($receiver);
      return Unit;
    };
  }
  function mMenuItemWithAvatar($receiver, avatarSrc, primaryText, secondaryText, selected, key, value, divider, disabled, hRefOptions, onClick, className, handler) {
    if (secondaryText === void 0)
      secondaryText = null;
    if (selected === void 0)
      selected = false;
    if (key === void 0)
      key = null;
    if (value === void 0)
      value = null;
    if (divider === void 0)
      divider = false;
    if (disabled === void 0)
      disabled = false;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return mMenuItem_0($receiver, selected, true, void 0, void 0, key, value, divider, disabled, hRefOptions, void 0, void 0, void 0, onClick, className, mMenuItemWithAvatar$lambda(hRefOptions, avatarSrc, secondaryText, primaryText, handler));
  }
  function mMenuItem$lambda_0(closure$button, closure$component, closure$containerComponent, closure$containerProps, closure$dense, closure$disabled, closure$disableGutters, closure$divider, closure$hRefOptions, closure$onClick, closure$key, closure$selected, closure$value, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.button = closure$button;
      if (closure$component != null) {
        var it = closure$component;
        $receiver.attrs.component = it;
      }$receiver.attrs.ContainerComponent = closure$containerComponent;
      if (closure$containerProps != null) {
        var it_0 = closure$containerProps;
        $receiver.attrs.ContainerProps = it_0;
      }$receiver.attrs.dense = closure$dense;
      $receiver.attrs.disabled = closure$disabled;
      $receiver.attrs.disableGutters = closure$disableGutters;
      $receiver.attrs.divider = closure$divider;
      if (closure$hRefOptions != null) {
        var it_1 = closure$hRefOptions;
        setHRefTargetNoOpener($receiver.attrs, it_1);
      }if (closure$onClick != null) {
        var it_2 = closure$onClick;
        $receiver.attrs.onClick = it_2;
      }if (closure$key != null) {
        var it_3 = closure$key;
        set_key($receiver.attrs, it_3);
      }$receiver.attrs.selected = closure$selected;
      if (closure$value != null) {
        var it_4 = closure$value;
        $receiver.attrs.value = it_4;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mMenuItem_0($receiver, selected, button, component, containerComponent, key, value, divider, disabled, hRefOptions, containerProps, dense, disableGutters, onClick, className, handler) {
    if (selected === void 0)
      selected = false;
    if (button === void 0)
      button = false;
    if (component === void 0)
      component = null;
    if (containerComponent === void 0)
      containerComponent = 'li';
    if (key === void 0)
      key = null;
    if (value === void 0)
      value = null;
    if (divider === void 0)
      divider = false;
    if (disabled === void 0)
      disabled = false;
    if (hRefOptions === void 0)
      hRefOptions = null;
    if (containerProps === void 0)
      containerProps = null;
    if (dense === void 0)
      dense = false;
    if (disableGutters === void 0)
      disableGutters = false;
    if (onClick === void 0)
      onClick = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, menuItemComponent, void 0, mMenuItem$lambda_0(button, component, containerComponent, containerProps, dense, disabled, disableGutters, divider, hRefOptions, onClick, key, selected, value, className, handler));
  }
  var menuList;
  function MMenuListProps() {
  }
  MMenuListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MMenuListProps',
    interfaces: [MListProps]
  };
  function mMenuList$lambda(closure$component, closure$dense, closure$disableListWrap, closure$disablePadding, closure$subheader, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      $receiver.attrs.dense = closure$dense;
      $receiver.attrs.disableListWrap = closure$disableListWrap;
      $receiver.attrs.disablePadding = closure$disablePadding;
      if (closure$subheader != null) {
        var closure$subheader_0 = closure$subheader;
        $receiver.attrs.subheader = closure$subheader_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mMenuList($receiver, dense, disablePadding, subheader, component, disableListWrap, className, handler) {
    if (dense === void 0)
      dense = false;
    if (disablePadding === void 0)
      disablePadding = false;
    if (subheader === void 0)
      subheader = null;
    if (component === void 0)
      component = 'ul';
    if (disableListWrap === void 0)
      disableListWrap = false;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, menuList, void 0, mMenuList$lambda(component, dense, disableListWrap, disablePadding, subheader, className, handler));
  }
  function Breakpoint(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Breakpoint_initFields() {
    Breakpoint_initFields = function () {
    };
    Breakpoint$xs_instance = new Breakpoint('xs', 0);
    Breakpoint$sm_instance = new Breakpoint('sm', 1);
    Breakpoint$md_instance = new Breakpoint('md', 2);
    Breakpoint$lg_instance = new Breakpoint('lg', 3);
    Breakpoint$xl_instance = new Breakpoint('xl', 4);
  }
  var Breakpoint$xs_instance;
  function Breakpoint$xs_getInstance() {
    Breakpoint_initFields();
    return Breakpoint$xs_instance;
  }
  var Breakpoint$sm_instance;
  function Breakpoint$sm_getInstance() {
    Breakpoint_initFields();
    return Breakpoint$sm_instance;
  }
  var Breakpoint$md_instance;
  function Breakpoint$md_getInstance() {
    Breakpoint_initFields();
    return Breakpoint$md_instance;
  }
  var Breakpoint$lg_instance;
  function Breakpoint$lg_getInstance() {
    Breakpoint_initFields();
    return Breakpoint$lg_instance;
  }
  var Breakpoint$xl_instance;
  function Breakpoint$xl_getInstance() {
    Breakpoint_initFields();
    return Breakpoint$xl_instance;
  }
  Breakpoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Breakpoint',
    interfaces: [Enum]
  };
  function Breakpoint$values() {
    return [Breakpoint$xs_getInstance(), Breakpoint$sm_getInstance(), Breakpoint$md_getInstance(), Breakpoint$lg_getInstance(), Breakpoint$xl_getInstance()];
  }
  Breakpoint.values = Breakpoint$values;
  function Breakpoint$valueOf(name) {
    switch (name) {
      case 'xs':
        return Breakpoint$xs_getInstance();
      case 'sm':
        return Breakpoint$sm_getInstance();
      case 'md':
        return Breakpoint$md_getInstance();
      case 'lg':
        return Breakpoint$lg_getInstance();
      case 'xl':
        return Breakpoint$xl_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.styles.Breakpoint.' + name);
    }
  }
  Breakpoint.valueOf_61zpoe$ = Breakpoint$valueOf;
  function removeMediaString(query) {
    return startsWith(query, '@media') ? query.substring(6) : query;
  }
  function up($receiver, key) {
    return removeMediaString($receiver.up(key.toString()));
  }
  function down($receiver, key) {
    return removeMediaString($receiver.down(key.toString()));
  }
  function between($receiver, startKey, endKey) {
    return removeMediaString($receiver.between(startKey.toString(), endKey.toString()));
  }
  function only($receiver, key) {
    return removeMediaString($receiver.only(key.toString()));
  }
  function width($receiver, key) {
    return $receiver.width(key.toString());
  }
  function createMuiTheme(themeOptions, args) {
    if (themeOptions === void 0)
      themeOptions = null;
    if (args === void 0)
      args = null;
    var tmp$;
    if (themeOptions != null)
      tmp$ = themeOptions;
    else {
      var $receiver = {};
      tmp$ = $receiver;
    }
    var ourThemeOptions = tmp$;
    return $module$_material_ui_core_styles_createMuiTheme.default(ourThemeOptions, args);
  }
  var stylesProviderComponent;
  function MStylesProviderProps() {
  }
  MStylesProviderProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MStylesProviderProps',
    interfaces: []
  };
  function mStylesProvider$lambda(closure$injectFirst, closure$disableGeneration, closure$generateClassName, closure$jss, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.injectFirst = closure$injectFirst;
      $receiver.attrs.disableGeneration = closure$disableGeneration;
      if (closure$generateClassName != null) {
        var it = closure$generateClassName;
        $receiver.attrs.generateClassName = it;
      }if (closure$jss != null) {
        var it_0 = closure$jss;
        $receiver.attrs.jss = it_0;
      }if (closure$handler != null) {
        closure$handler($receiver);
      }return Unit;
    };
  }
  function mStylesProvider($receiver, injectFirst, disableGeneration, generateClassName, jss, handler) {
    if (injectFirst === void 0)
      injectFirst = false;
    if (disableGeneration === void 0)
      disableGeneration = false;
    if (generateClassName === void 0)
      generateClassName = null;
    if (jss === void 0)
      jss = null;
    if (handler === void 0)
      handler = null;
    return child($receiver, stylesProviderComponent, mStylesProvider$lambda(injectFirst, disableGeneration, generateClassName, jss, handler));
  }
  function mStylesProvider_0($receiver, insertionPointComment, handler) {
    if (handler === void 0)
      handler = null;
    var jssPresets = $module$_material_ui_styles_jssPreset.default();
    jssPresets.insertionPoint = insertionPointComment;
    var jss = $module$jss.create(jssPresets);
    return mStylesProvider($receiver, false, false, null, jss, handler);
  }
  function mStylesProvider_1($receiver, insertionPointElement, handler) {
    if (handler === void 0)
      handler = null;
    var jssPresets = $module$_material_ui_styles_jssPreset.default();
    jssPresets.insertionPoint = insertionPointElement;
    var jss = $module$jss.create(jssPresets);
    return mStylesProvider($receiver, false, false, null, jss, handler);
  }
  var tableComponent;
  function MTableProps() {
  }
  MTableProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableProps',
    interfaces: []
  };
  var padding_0;
  var padding_metadata = new PropertyMetadata('padding');
  function get_padding($receiver) {
    return padding_0.getValue_lrcp0p$($receiver, padding_metadata);
  }
  function set_padding($receiver, padding) {
    padding_0.setValue_9rddgb$($receiver, padding_metadata, padding);
  }
  var size_6;
  var size_metadata_6 = new PropertyMetadata('size');
  function get_size_7($receiver) {
    return size_6.getValue_lrcp0p$($receiver, size_metadata_6);
  }
  function set_size_7($receiver, size) {
    size_6.setValue_9rddgb$($receiver, size_metadata_6, size);
  }
  function mTable$lambda(closure$component, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTable($receiver, component, className, handler) {
    if (component === void 0)
      component = 'table';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tableComponent, void 0, mTable$lambda(component, className, handler));
  }
  var tableBodyComponent;
  function MTableBodyProps() {
  }
  MTableBodyProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableBodyProps',
    interfaces: []
  };
  function mTableBody$lambda(closure$component, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableBody($receiver, component, className, handler) {
    if (component === void 0)
      component = 'tbody';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tableBodyComponent, void 0, mTableBody$lambda(component, className, handler));
  }
  var TableCellComponent;
  function MTableCellPadding(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTableCellPadding_initFields() {
    MTableCellPadding_initFields = function () {
    };
    MTableCellPadding$default_instance = new MTableCellPadding('default', 0);
    MTableCellPadding$checkbox_instance = new MTableCellPadding('checkbox', 1);
    MTableCellPadding$none_instance = new MTableCellPadding('none', 2);
  }
  var MTableCellPadding$default_instance;
  function MTableCellPadding$default_getInstance() {
    MTableCellPadding_initFields();
    return MTableCellPadding$default_instance;
  }
  var MTableCellPadding$checkbox_instance;
  function MTableCellPadding$checkbox_getInstance() {
    MTableCellPadding_initFields();
    return MTableCellPadding$checkbox_instance;
  }
  var MTableCellPadding$none_instance;
  function MTableCellPadding$none_getInstance() {
    MTableCellPadding_initFields();
    return MTableCellPadding$none_instance;
  }
  MTableCellPadding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTableCellPadding',
    interfaces: [Enum]
  };
  function MTableCellPadding$values() {
    return [MTableCellPadding$default_getInstance(), MTableCellPadding$checkbox_getInstance(), MTableCellPadding$none_getInstance()];
  }
  MTableCellPadding.values = MTableCellPadding$values;
  function MTableCellPadding$valueOf(name) {
    switch (name) {
      case 'default':
        return MTableCellPadding$default_getInstance();
      case 'checkbox':
        return MTableCellPadding$checkbox_getInstance();
      case 'none':
        return MTableCellPadding$none_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.table.MTableCellPadding.' + name);
    }
  }
  MTableCellPadding.valueOf_61zpoe$ = MTableCellPadding$valueOf;
  function MTableCellSortDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTableCellSortDirection_initFields() {
    MTableCellSortDirection_initFields = function () {
    };
    MTableCellSortDirection$asc_instance = new MTableCellSortDirection('asc', 0);
    MTableCellSortDirection$desc_instance = new MTableCellSortDirection('desc', 1);
    MTableCellSortDirection$False_instance = new MTableCellSortDirection('False', 2);
  }
  var MTableCellSortDirection$asc_instance;
  function MTableCellSortDirection$asc_getInstance() {
    MTableCellSortDirection_initFields();
    return MTableCellSortDirection$asc_instance;
  }
  var MTableCellSortDirection$desc_instance;
  function MTableCellSortDirection$desc_getInstance() {
    MTableCellSortDirection_initFields();
    return MTableCellSortDirection$desc_instance;
  }
  var MTableCellSortDirection$False_instance;
  function MTableCellSortDirection$False_getInstance() {
    MTableCellSortDirection_initFields();
    return MTableCellSortDirection$False_instance;
  }
  MTableCellSortDirection.prototype.toString = function () {
    return Enum.prototype.toString.call(this).toLowerCase();
  };
  MTableCellSortDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTableCellSortDirection',
    interfaces: [Enum]
  };
  function MTableCellSortDirection$values() {
    return [MTableCellSortDirection$asc_getInstance(), MTableCellSortDirection$desc_getInstance(), MTableCellSortDirection$False_getInstance()];
  }
  MTableCellSortDirection.values = MTableCellSortDirection$values;
  function MTableCellSortDirection$valueOf(name) {
    switch (name) {
      case 'asc':
        return MTableCellSortDirection$asc_getInstance();
      case 'desc':
        return MTableCellSortDirection$desc_getInstance();
      case 'False':
        return MTableCellSortDirection$False_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.table.MTableCellSortDirection.' + name);
    }
  }
  MTableCellSortDirection.valueOf_61zpoe$ = MTableCellSortDirection$valueOf;
  function MTableCellAlign(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTableCellAlign_initFields() {
    MTableCellAlign_initFields = function () {
    };
    MTableCellAlign$inherit_instance = new MTableCellAlign('inherit', 0);
    MTableCellAlign$left_instance = new MTableCellAlign('left', 1);
    MTableCellAlign$center_instance = new MTableCellAlign('center', 2);
    MTableCellAlign$right_instance = new MTableCellAlign('right', 3);
    MTableCellAlign$justify_instance = new MTableCellAlign('justify', 4);
  }
  var MTableCellAlign$inherit_instance;
  function MTableCellAlign$inherit_getInstance() {
    MTableCellAlign_initFields();
    return MTableCellAlign$inherit_instance;
  }
  var MTableCellAlign$left_instance;
  function MTableCellAlign$left_getInstance() {
    MTableCellAlign_initFields();
    return MTableCellAlign$left_instance;
  }
  var MTableCellAlign$center_instance;
  function MTableCellAlign$center_getInstance() {
    MTableCellAlign_initFields();
    return MTableCellAlign$center_instance;
  }
  var MTableCellAlign$right_instance;
  function MTableCellAlign$right_getInstance() {
    MTableCellAlign_initFields();
    return MTableCellAlign$right_instance;
  }
  var MTableCellAlign$justify_instance;
  function MTableCellAlign$justify_getInstance() {
    MTableCellAlign_initFields();
    return MTableCellAlign$justify_instance;
  }
  MTableCellAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTableCellAlign',
    interfaces: [Enum]
  };
  function MTableCellAlign$values() {
    return [MTableCellAlign$inherit_getInstance(), MTableCellAlign$left_getInstance(), MTableCellAlign$center_getInstance(), MTableCellAlign$right_getInstance(), MTableCellAlign$justify_getInstance()];
  }
  MTableCellAlign.values = MTableCellAlign$values;
  function MTableCellAlign$valueOf(name) {
    switch (name) {
      case 'inherit':
        return MTableCellAlign$inherit_getInstance();
      case 'left':
        return MTableCellAlign$left_getInstance();
      case 'center':
        return MTableCellAlign$center_getInstance();
      case 'right':
        return MTableCellAlign$right_getInstance();
      case 'justify':
        return MTableCellAlign$justify_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.table.MTableCellAlign.' + name);
    }
  }
  MTableCellAlign.valueOf_61zpoe$ = MTableCellAlign$valueOf;
  function MTableCellVariant(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTableCellVariant_initFields() {
    MTableCellVariant_initFields = function () {
    };
    MTableCellVariant$head_instance = new MTableCellVariant('head', 0);
    MTableCellVariant$body_instance = new MTableCellVariant('body', 1);
    MTableCellVariant$footer_instance = new MTableCellVariant('footer', 2);
  }
  var MTableCellVariant$head_instance;
  function MTableCellVariant$head_getInstance() {
    MTableCellVariant_initFields();
    return MTableCellVariant$head_instance;
  }
  var MTableCellVariant$body_instance;
  function MTableCellVariant$body_getInstance() {
    MTableCellVariant_initFields();
    return MTableCellVariant$body_instance;
  }
  var MTableCellVariant$footer_instance;
  function MTableCellVariant$footer_getInstance() {
    MTableCellVariant_initFields();
    return MTableCellVariant$footer_instance;
  }
  MTableCellVariant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTableCellVariant',
    interfaces: [Enum]
  };
  function MTableCellVariant$values() {
    return [MTableCellVariant$head_getInstance(), MTableCellVariant$body_getInstance(), MTableCellVariant$footer_getInstance()];
  }
  MTableCellVariant.values = MTableCellVariant$values;
  function MTableCellVariant$valueOf(name) {
    switch (name) {
      case 'head':
        return MTableCellVariant$head_getInstance();
      case 'body':
        return MTableCellVariant$body_getInstance();
      case 'footer':
        return MTableCellVariant$footer_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.table.MTableCellVariant.' + name);
    }
  }
  MTableCellVariant.valueOf_61zpoe$ = MTableCellVariant$valueOf;
  function MTableCellSize(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTableCellSize_initFields() {
    MTableCellSize_initFields = function () {
    };
    MTableCellSize$small_instance = new MTableCellSize('small', 0);
    MTableCellSize$medium_instance = new MTableCellSize('medium', 1);
  }
  var MTableCellSize$small_instance;
  function MTableCellSize$small_getInstance() {
    MTableCellSize_initFields();
    return MTableCellSize$small_instance;
  }
  var MTableCellSize$medium_instance;
  function MTableCellSize$medium_getInstance() {
    MTableCellSize_initFields();
    return MTableCellSize$medium_instance;
  }
  MTableCellSize.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTableCellSize',
    interfaces: [Enum]
  };
  function MTableCellSize$values() {
    return [MTableCellSize$small_getInstance(), MTableCellSize$medium_getInstance()];
  }
  MTableCellSize.values = MTableCellSize$values;
  function MTableCellSize$valueOf(name) {
    switch (name) {
      case 'small':
        return MTableCellSize$small_getInstance();
      case 'medium':
        return MTableCellSize$medium_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.table.MTableCellSize.' + name);
    }
  }
  MTableCellSize.valueOf_61zpoe$ = MTableCellSize$valueOf;
  function MTableCellProps() {
  }
  MTableCellProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableCellProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  var align_0;
  var align_metadata_0 = new PropertyMetadata('align');
  function get_align_0($receiver) {
    return align_0.getValue_lrcp0p$($receiver, align_metadata_0);
  }
  function set_align_0($receiver, align) {
    align_0.setValue_9rddgb$($receiver, align_metadata_0, align);
  }
  var padding_1;
  var padding_metadata_0 = new PropertyMetadata('padding');
  function get_padding_0($receiver) {
    return padding_1.getValue_lrcp0p$($receiver, padding_metadata_0);
  }
  function set_padding_0($receiver, padding) {
    padding_1.setValue_9rddgb$($receiver, padding_metadata_0, padding);
  }
  var size_7;
  var size_metadata_7 = new PropertyMetadata('size');
  function get_size_8($receiver) {
    return size_7.getValue_lrcp0p$($receiver, size_metadata_7);
  }
  function set_size_8($receiver, size) {
    size_7.setValue_9rddgb$($receiver, size_metadata_7, size);
  }
  function get_sortDirection($receiver) {
    return $receiver.sortDirection == false ? MTableCellSortDirection$False_getInstance() : MTableCellSortDirection$valueOf($receiver.sortDirection);
  }
  function set_sortDirection($receiver, value) {
    $receiver.sortDirection = value === MTableCellSortDirection$False_getInstance() ? false : value.toString();
  }
  var variant_20;
  var variant_metadata_20 = new PropertyMetadata('variant');
  function get_variant_20($receiver) {
    return variant_20.getValue_lrcp0p$($receiver, variant_metadata_20);
  }
  function set_variant_20($receiver, variant) {
    variant_20.setValue_9rddgb$($receiver, variant_metadata_20, variant);
  }
  function mTableCell$lambda(closure$align, closure$colSpan, closure$component, closure$key, closure$padding, closure$scope, closure$size, closure$sortDirection, closure$variant, closure$className, closure$handler) {
    return function ($receiver) {
      set_align_0($receiver.attrs, closure$align);
      if (closure$colSpan != null) {
        var it = closure$colSpan;
        $receiver.attrs.colSpan = it;
      }if (closure$component != null) {
        var closure$component_0 = closure$component;
        $receiver.attrs.component = closure$component_0;
      }if (closure$key != null) {
        var it_0 = closure$key;
        $receiver.attrs.key = it_0;
      }set_padding_0($receiver.attrs, closure$padding);
      if (closure$scope != null) {
        var it_1 = closure$scope;
        $receiver.attrs.scope = it_1;
      }set_size_8($receiver.attrs, closure$size);
      set_sortDirection($receiver.attrs, closure$sortDirection);
      set_variant_20($receiver.attrs, closure$variant);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableCell($receiver, key, variant, sortDirection, align, padding, size, colSpan, component, scope, className, handler) {
    if (key === void 0)
      key = null;
    if (variant === void 0)
      variant = MTableCellVariant$body_getInstance();
    if (sortDirection === void 0)
      sortDirection = MTableCellSortDirection$False_getInstance();
    if (align === void 0)
      align = MTableCellAlign$inherit_getInstance();
    if (padding === void 0)
      padding = MTableCellPadding$default_getInstance();
    if (size === void 0)
      size = MTableCellSize$medium_getInstance();
    if (colSpan === void 0)
      colSpan = null;
    if (component === void 0)
      component = null;
    if (scope === void 0)
      scope = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, TableCellComponent, void 0, mTableCell$lambda(align, colSpan, component, key, padding, scope, size, sortDirection, variant, className, handler));
  }
  var tableContainerComponent;
  function MTableContainerProps() {
  }
  MTableContainerProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableContainerProps',
    interfaces: [StyledPropsWithCommonAttributes]
  };
  function mTableContainer$lambda(closure$component, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$component != null) {
        var it = closure$component;
        $receiver.attrs.component = it;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableContainer($receiver, component, className, handler) {
    if (component === void 0)
      component = 'div';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tableContainerComponent, void 0, mTableContainer$lambda(component, className, handler));
  }
  var TableFooterComponent;
  function MTableFooterProps() {
  }
  MTableFooterProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableFooterProps',
    interfaces: []
  };
  function mTableFooter$lambda(closure$component, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableFooter($receiver, component, className, handler) {
    if (component === void 0)
      component = 'tfoot';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, TableFooterComponent, void 0, mTableFooter$lambda(component, className, handler));
  }
  var TableHeadComponent;
  function MTableHeadProps() {
  }
  MTableHeadProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableHeadProps',
    interfaces: []
  };
  function mTableHead$lambda(closure$component, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.component = closure$component;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableHead($receiver, component, className, handler) {
    if (component === void 0)
      component = 'thead';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, TableHeadComponent, void 0, mTableHead$lambda(component, className, handler));
  }
  var tablePaginationComponent;
  function MTablePaginationProps() {
  }
  MTablePaginationProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTablePaginationProps',
    interfaces: [MButtonBaseProps]
  };
  function mTablePagination$lambda(closure$actions, closure$backIconButtonProps, closure$component, closure$count, closure$labelDisplayedRows, closure$labelRowsPerPage, closure$nextIconButtonProps, closure$onChangePage, closure$onChangeRowsPerPage, closure$page, closure$rowsPerPage, closure$rowsPerPageOptions, closure$selectProps, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$actions != null) {
        var it = closure$actions;
        $receiver.attrs.actions = it;
      }if (closure$backIconButtonProps != null) {
        var it_0 = closure$backIconButtonProps;
        $receiver.attrs.backIconButtonProps = it_0;
      }if (closure$component != null) {
        var it_1 = closure$component;
        $receiver.attrs.component = it_1;
      }if (closure$count != null) {
        var it_2 = closure$count;
        $receiver.attrs.count = it_2;
      }if (closure$labelDisplayedRows != null) {
        var it_3 = closure$labelDisplayedRows;
        $receiver.attrs.labelDisplayedRows = it_3;
      }if (closure$labelRowsPerPage != null) {
        var it_4 = closure$labelRowsPerPage;
        $receiver.attrs.labelRowsPerPage = it_4;
      }if (closure$nextIconButtonProps != null) {
        var it_5 = closure$nextIconButtonProps;
        $receiver.attrs.nextIconButtonProps = it_5;
      }if (closure$onChangePage != null) {
        var it_6 = closure$onChangePage;
        $receiver.attrs.onChangePage = it_6;
      }if (closure$onChangeRowsPerPage != null) {
        var it_7 = closure$onChangeRowsPerPage;
        $receiver.attrs.onChangeRowsPerPage = it_7;
      }if (closure$page != null) {
        var it_8 = closure$page;
        $receiver.attrs.page = it_8;
      }if (closure$rowsPerPage != null) {
        var it_9 = closure$rowsPerPage;
        $receiver.attrs.rowsPerPage = it_9;
      }if (closure$rowsPerPageOptions != null) {
        var it_10 = closure$rowsPerPageOptions;
        $receiver.attrs.rowsPerPageOptions = it_10;
      }if (closure$selectProps != null) {
        var it_11 = closure$selectProps;
        $receiver.attrs.selectProps = it_11;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTablePagination($receiver, actions, backIconButtonProps, component, count, labelDisplayedRows, labelRowsPerPage, nextIconButtonProps, onChangePage, onChangeRowsPerPage, page, rowsPerPage, rowsPerPageOptions, selectProps, className, handler) {
    if (actions === void 0)
      actions = null;
    if (backIconButtonProps === void 0)
      backIconButtonProps = null;
    if (component === void 0)
      component = 'div';
    if (count === void 0)
      count = null;
    if (labelDisplayedRows === void 0)
      labelDisplayedRows = null;
    if (labelRowsPerPage === void 0)
      labelRowsPerPage = null;
    if (nextIconButtonProps === void 0)
      nextIconButtonProps = null;
    if (onChangePage === void 0)
      onChangePage = null;
    if (onChangeRowsPerPage === void 0)
      onChangeRowsPerPage = null;
    if (page === void 0)
      page = null;
    if (rowsPerPage === void 0)
      rowsPerPage = null;
    if (rowsPerPageOptions === void 0)
      rowsPerPageOptions = null;
    if (selectProps === void 0)
      selectProps = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tablePaginationComponent, void 0, mTablePagination$lambda(actions, backIconButtonProps, component, count, labelDisplayedRows, labelRowsPerPage, nextIconButtonProps, onChangePage, onChangeRowsPerPage, page, rowsPerPage, rowsPerPageOptions, selectProps, className, handler));
  }
  var tableRowComponent;
  function MTableRowProps() {
  }
  MTableRowProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableRowProps',
    interfaces: [MButtonBaseProps]
  };
  function mTableRow$lambda(closure$key, closure$component, closure$hover, closure$onClick, closure$selected, closure$className, closure$handler) {
    return function ($receiver) {
      if (closure$key != null) {
        var closure$key_0 = closure$key;
        $receiver.attrs.key = closure$key_0;
      }$receiver.attrs.component = closure$component;
      $receiver.attrs.hover = closure$hover;
      if (closure$onClick != null) {
        var it = closure$onClick;
        $receiver.attrs.onClick = it;
      }$receiver.attrs.selected = closure$selected;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableRow($receiver, key, selected, hover, onClick, component, className, handler) {
    if (key === void 0)
      key = null;
    if (selected === void 0)
      selected = false;
    if (hover === void 0)
      hover = false;
    if (onClick === void 0)
      onClick = null;
    if (component === void 0)
      component = 'tr';
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tableRowComponent, void 0, mTableRow$lambda(key, component, hover, onClick, selected, className, handler));
  }
  var tableSortLabelComponent;
  function MTableSortLabelDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MTableSortLabelDirection_initFields() {
    MTableSortLabelDirection_initFields = function () {
    };
    MTableSortLabelDirection$asc_instance = new MTableSortLabelDirection('asc', 0);
    MTableSortLabelDirection$desc_instance = new MTableSortLabelDirection('desc', 1);
  }
  var MTableSortLabelDirection$asc_instance;
  function MTableSortLabelDirection$asc_getInstance() {
    MTableSortLabelDirection_initFields();
    return MTableSortLabelDirection$asc_instance;
  }
  var MTableSortLabelDirection$desc_instance;
  function MTableSortLabelDirection$desc_getInstance() {
    MTableSortLabelDirection_initFields();
    return MTableSortLabelDirection$desc_instance;
  }
  MTableSortLabelDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MTableSortLabelDirection',
    interfaces: [Enum]
  };
  function MTableSortLabelDirection$values() {
    return [MTableSortLabelDirection$asc_getInstance(), MTableSortLabelDirection$desc_getInstance()];
  }
  MTableSortLabelDirection.values = MTableSortLabelDirection$values;
  function MTableSortLabelDirection$valueOf(name) {
    switch (name) {
      case 'asc':
        return MTableSortLabelDirection$asc_getInstance();
      case 'desc':
        return MTableSortLabelDirection$desc_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.table.MTableSortLabelDirection.' + name);
    }
  }
  MTableSortLabelDirection.valueOf_61zpoe$ = MTableSortLabelDirection$valueOf;
  function MTableSortLabelProps() {
  }
  MTableSortLabelProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MTableSortLabelProps',
    interfaces: []
  };
  var direction_0;
  var direction_metadata_0 = new PropertyMetadata('direction');
  function get_direction_0($receiver) {
    return direction_0.getValue_lrcp0p$($receiver, direction_metadata_0);
  }
  function set_direction_0($receiver, direction) {
    direction_0.setValue_9rddgb$($receiver, direction_metadata_0, direction);
  }
  function mTableSortLabel$lambda(closure$active, closure$direction, closure$iconFunction, closure$onClick, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.active = closure$active;
      set_direction_0($receiver.attrs, closure$direction);
      if (closure$iconFunction != null) {
        var closure$iconFunction_0 = closure$iconFunction;
        $receiver.attrs.IconComponent = closure$iconFunction_0;
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableSortLabel($receiver, active, direction, onClick, iconFunction, className, handler) {
    if (active === void 0)
      active = false;
    if (direction === void 0)
      direction = MTableSortLabelDirection$desc_getInstance();
    if (onClick === void 0)
      onClick = null;
    if (iconFunction === void 0)
      iconFunction = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tableSortLabelComponent, void 0, mTableSortLabel$lambda(active, direction, iconFunction, onClick, className, handler));
  }
  function mTableSortLabel$lambda_0(closure$active, closure$direction, closure$iconFunction, closure$onClick, closure$label, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.active = closure$active;
      set_direction_0($receiver.attrs, closure$direction);
      if (closure$iconFunction != null) {
        var closure$iconFunction_0 = closure$iconFunction;
        $receiver.attrs.IconComponent = closure$iconFunction_0;
      }if (closure$onClick != null) {
        var closure$onClick_0 = closure$onClick;
        $receiver.attrs.onClick = closure$onClick_0;
      }$receiver.childList.add_11rb$(closure$label);
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mTableSortLabel_0($receiver, label, active, direction, onClick, iconFunction, className, handler) {
    if (active === void 0)
      active = false;
    if (direction === void 0)
      direction = MTableSortLabelDirection$desc_getInstance();
    if (onClick === void 0)
      onClick = null;
    if (iconFunction === void 0)
      iconFunction = null;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, tableSortLabelComponent, void 0, mTableSortLabel$lambda_0(active, direction, iconFunction, onClick, label, className, handler));
  }
  var collapseComponent;
  var timeout;
  var timeout_metadata = new PropertyMetadata('timeout');
  function get_timeout($receiver) {
    return timeout.getValue_lrcp0p$($receiver, timeout_metadata);
  }
  function set_timeout($receiver, timeout_0) {
    timeout.setValue_9rddgb$($receiver, timeout_metadata, timeout_0);
  }
  function mCollapse$lambda(closure$collapsedHeight, closure$component, closure$show, closure$timeout, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.collapsedHeight = closure$collapsedHeight.toString();
      $receiver.attrs.component = closure$component;
      $receiver.attrs.in = closure$show;
      if (closure$timeout != null) {
        var it = closure$timeout;
        set_timeout($receiver.attrs, it);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mCollapse($receiver, show, collapsedHeight, component, timeout, addAsChild, className, handler) {
    if (show === void 0)
      show = false;
    if (collapsedHeight === void 0)
      collapsedHeight = get_px(0);
    if (component === void 0)
      component = 'div';
    if (timeout === void 0)
      timeout = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, collapseComponent, addAsChild, mCollapse$lambda(collapsedHeight, component, show, timeout, className, handler));
  }
  function TransitionDuration() {
  }
  TransitionDuration.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransitionDuration',
    interfaces: []
  };
  function TransitionDurationWithAuto() {
  }
  TransitionDurationWithAuto.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransitionDurationWithAuto',
    interfaces: []
  };
  function EnterExitTransitionDuration(enterTimeMs, exitTimeMs) {
    this.enterTimeMs_0 = enterTimeMs;
    this.exitTimeMs_0 = exitTimeMs;
  }
  EnterExitTransitionDuration.prototype.value = function () {
    var value = {};
    value.enter = this.enterTimeMs_0;
    value.exit = this.exitTimeMs_0;
    return value;
  };
  EnterExitTransitionDuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnterExitTransitionDuration',
    interfaces: [TransitionDurationWithAuto, TransitionDuration]
  };
  function SimpleTransitionDuration(timeMs) {
    this.timeMs = timeMs;
  }
  SimpleTransitionDuration.prototype.value = function () {
    return this.timeMs;
  };
  SimpleTransitionDuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleTransitionDuration',
    interfaces: [TransitionDurationWithAuto, TransitionDuration]
  };
  function AutoTransitionDuration() {
  }
  AutoTransitionDuration.prototype.value = function () {
    return 'auto';
  };
  AutoTransitionDuration.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AutoTransitionDuration',
    interfaces: [TransitionDurationWithAuto]
  };
  var fadeComponent;
  var timeout_0;
  var timeout_metadata_0 = new PropertyMetadata('timeout');
  function get_timeout_0($receiver) {
    return timeout_0.getValue_lrcp0p$($receiver, timeout_metadata_0);
  }
  function set_timeout_0($receiver, timeout) {
    timeout_0.setValue_9rddgb$($receiver, timeout_metadata_0, timeout);
  }
  function mFade$lambda(closure$show, closure$timeout, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.in = closure$show;
      if (closure$timeout != null) {
        var it = closure$timeout;
        set_timeout_0($receiver.attrs, it);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mFade($receiver, show, timeout, addAsChild, className, handler) {
    if (show === void 0)
      show = false;
    if (timeout === void 0)
      timeout = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, fadeComponent, addAsChild, mFade$lambda(show, timeout, className, handler));
  }
  var growComponent;
  var timeout_1;
  var timeout_metadata_1 = new PropertyMetadata('timeout');
  function get_timeout_1($receiver) {
    return timeout_1.getValue_lrcp0p$($receiver, timeout_metadata_1);
  }
  function set_timeout_1($receiver, timeout) {
    timeout_1.setValue_9rddgb$($receiver, timeout_metadata_1, timeout);
  }
  function mGrow$lambda(closure$show, closure$timeout, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.in = closure$show;
      if (closure$timeout != null) {
        var it = closure$timeout;
        set_timeout_1($receiver.attrs, it);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mGrow($receiver, show, timeout, addAsChild, className, handler) {
    if (show === void 0)
      show = false;
    if (timeout === void 0)
      timeout = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, growComponent, addAsChild, mGrow$lambda(show, timeout, className, handler));
  }
  var slideComponent;
  function SlideTransitionDirection(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SlideTransitionDirection_initFields() {
    SlideTransitionDirection_initFields = function () {
    };
    SlideTransitionDirection$left_instance = new SlideTransitionDirection('left', 0);
    SlideTransitionDirection$right_instance = new SlideTransitionDirection('right', 1);
    SlideTransitionDirection$up_instance = new SlideTransitionDirection('up', 2);
    SlideTransitionDirection$down_instance = new SlideTransitionDirection('down', 3);
  }
  var SlideTransitionDirection$left_instance;
  function SlideTransitionDirection$left_getInstance() {
    SlideTransitionDirection_initFields();
    return SlideTransitionDirection$left_instance;
  }
  var SlideTransitionDirection$right_instance;
  function SlideTransitionDirection$right_getInstance() {
    SlideTransitionDirection_initFields();
    return SlideTransitionDirection$right_instance;
  }
  var SlideTransitionDirection$up_instance;
  function SlideTransitionDirection$up_getInstance() {
    SlideTransitionDirection_initFields();
    return SlideTransitionDirection$up_instance;
  }
  var SlideTransitionDirection$down_instance;
  function SlideTransitionDirection$down_getInstance() {
    SlideTransitionDirection_initFields();
    return SlideTransitionDirection$down_instance;
  }
  SlideTransitionDirection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlideTransitionDirection',
    interfaces: [Enum]
  };
  function SlideTransitionDirection$values() {
    return [SlideTransitionDirection$left_getInstance(), SlideTransitionDirection$right_getInstance(), SlideTransitionDirection$up_getInstance(), SlideTransitionDirection$down_getInstance()];
  }
  SlideTransitionDirection.values = SlideTransitionDirection$values;
  function SlideTransitionDirection$valueOf(name) {
    switch (name) {
      case 'left':
        return SlideTransitionDirection$left_getInstance();
      case 'right':
        return SlideTransitionDirection$right_getInstance();
      case 'up':
        return SlideTransitionDirection$up_getInstance();
      case 'down':
        return SlideTransitionDirection$down_getInstance();
      default:throwISE('No enum constant com.ccfraser.muirwik.components.transitions.SlideTransitionDirection.' + name);
    }
  }
  SlideTransitionDirection.valueOf_61zpoe$ = SlideTransitionDirection$valueOf;
  var timeout_2;
  var timeout_metadata_2 = new PropertyMetadata('timeout');
  function get_timeout_2($receiver) {
    return timeout_2.getValue_lrcp0p$($receiver, timeout_metadata_2);
  }
  function set_timeout_2($receiver, timeout) {
    timeout_2.setValue_9rddgb$($receiver, timeout_metadata_2, timeout);
  }
  function mSlide$lambda(closure$direction, closure$show, closure$timeout, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.direction = closure$direction;
      $receiver.attrs.in = closure$show;
      if (closure$timeout != null) {
        var it = closure$timeout;
        set_timeout_2($receiver.attrs, it);
      }$receiver.attrs.mountOnEnter = true;
      $receiver.attrs.unmountOnExit = true;
      setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      $receiver.attrs.direction = $receiver.attrs.direction.toString();
      return Unit;
    };
  }
  function mSlide($receiver, show, direction, timeout, addAsChild, className, handler) {
    if (show === void 0)
      show = false;
    if (direction === void 0)
      direction = SlideTransitionDirection$down_getInstance();
    if (timeout === void 0)
      timeout = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, slideComponent, addAsChild, mSlide$lambda(direction, show, timeout, className, handler));
  }
  function TransitionDurationDelegate() {
  }
  TransitionDurationDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionDuration cannot be read from props'.toString());
  };
  TransitionDurationDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value.value();
  };
  TransitionDurationDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionDurationDelegate',
    interfaces: [ReadWriteProperty]
  };
  function TransitionDurationDelegateNullable() {
  }
  TransitionDurationDelegateNullable.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionDuration cannot be read from props'.toString());
  };
  TransitionDurationDelegateNullable.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value != null ? value.value() : null;
  };
  TransitionDurationDelegateNullable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionDurationDelegateNullable',
    interfaces: [ReadWriteProperty]
  };
  function TransitionDurationWithAutoDelegate() {
  }
  TransitionDurationWithAutoDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionDuration cannot be read from props'.toString());
  };
  TransitionDurationWithAutoDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value.value();
  };
  TransitionDurationWithAutoDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionDurationWithAutoDelegate',
    interfaces: [ReadWriteProperty]
  };
  function TransitionComponentDelegate() {
  }
  TransitionComponentDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionComponent cannot be read from props'.toString());
  };
  TransitionComponentDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    var tmp$;
    var $receiver = first(property.callableName);
    var tmp$_0 = toChar(String.fromCharCode($receiver | 0).toUpperCase().charCodeAt(0));
    var other = property.callableName.substring(1);
    var propName = String.fromCharCode(tmp$_0) + other;
    thisRef[propName] = (tmp$ = value != null ? get_js(value) : null) != null ? tmp$ : undefined;
  };
  TransitionComponentDelegate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionComponentDelegate',
    interfaces: [ReadWriteProperty]
  };
  var zoomComponent;
  var timeout_3;
  var timeout_metadata_3 = new PropertyMetadata('timeout');
  function get_timeout_3($receiver) {
    return timeout_3.getValue_lrcp0p$($receiver, timeout_metadata_3);
  }
  function set_timeout_3($receiver, timeout) {
    timeout_3.setValue_9rddgb$($receiver, timeout_metadata_3, timeout);
  }
  function mZoom$lambda(closure$show, closure$timeout, closure$className, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.in = closure$show;
      if (closure$timeout != null) {
        var it = closure$timeout;
        set_timeout_3($receiver.attrs, it);
      }setStyledPropsAndRunHandler($receiver, closure$className, closure$handler);
      return Unit;
    };
  }
  function mZoom($receiver, show, timeout, addAsChild, className, handler) {
    if (show === void 0)
      show = false;
    if (timeout === void 0)
      timeout = null;
    if (addAsChild === void 0)
      addAsChild = true;
    if (className === void 0)
      className = null;
    if (handler === void 0)
      handler = null;
    return createStyled($receiver, zoomComponent, addAsChild, mZoom$lambda(show, timeout, className, handler));
  }
  Object.defineProperty(MAppBarPosition, 'fixed', {
    get: MAppBarPosition$fixed_getInstance
  });
  Object.defineProperty(MAppBarPosition, 'absolute', {
    get: MAppBarPosition$absolute_getInstance
  });
  Object.defineProperty(MAppBarPosition, 'sticky', {
    get: MAppBarPosition$sticky_getInstance
  });
  Object.defineProperty(MAppBarPosition, 'static', {
    get: MAppBarPosition$static_getInstance
  });
  Object.defineProperty(MAppBarPosition, 'relative', {
    get: MAppBarPosition$relative_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$ccfraser = package$com.ccfraser || (package$com.ccfraser = {});
  var package$muirwik = package$ccfraser.muirwik || (package$ccfraser.muirwik = {});
  var package$components = package$muirwik.components || (package$muirwik.components = {});
  package$components.MAppBarPosition = MAppBarPosition;
  Object.defineProperty(MAppBarColor, 'default', {
    get: MAppBarColor$default_getInstance
  });
  Object.defineProperty(MAppBarColor, 'inherit', {
    get: MAppBarColor$inherit_getInstance
  });
  Object.defineProperty(MAppBarColor, 'primary', {
    get: MAppBarColor$primary_getInstance
  });
  Object.defineProperty(MAppBarColor, 'secondary', {
    get: MAppBarColor$secondary_getInstance
  });
  Object.defineProperty(MAppBarColor, 'transparent', {
    get: MAppBarColor$transparent_getInstance
  });
  package$components.MAppBarColor = MAppBarColor;
  package$components.MAppBarProps = MAppBarProps;
  package$components.get_color_24pv0i$ = get_color;
  package$components.set_color_b6x3r2$ = set_color;
  package$components.get_position_24pv0i$ = get_position;
  package$components.set_position_epq1ka$ = set_position;
  package$components.mAppBar_g18fwc$ = mAppBar;
  Object.defineProperty(MAvatarVariant, 'circle', {
    get: MAvatarVariant$circle_getInstance
  });
  Object.defineProperty(MAvatarVariant, 'rounded', {
    get: MAvatarVariant$rounded_getInstance
  });
  Object.defineProperty(MAvatarVariant, 'square', {
    get: MAvatarVariant$square_getInstance
  });
  package$components.MAvatarVariant = MAvatarVariant;
  package$components.MAvatarProps = MAvatarProps;
  package$components.get_variant_bok3l5$ = get_variant;
  package$components.set_variant_lb5e63$ = set_variant;
  package$components.mAvatar_9357xj$ = mAvatar;
  package$components.MBackdropProps = MBackdropProps;
  package$components.get_transitionDuration_16vq5i$ = get_transitionDuration;
  package$components.set_transitionDuration_tsbzgl$ = set_transitionDuration;
  package$components.mBackdrop_idp9yc$ = mBackdrop;
  Object.defineProperty(MBadgeColor, 'primary', {
    get: MBadgeColor$primary_getInstance
  });
  Object.defineProperty(MBadgeColor, 'secondary', {
    get: MBadgeColor$secondary_getInstance
  });
  Object.defineProperty(MBadgeColor, 'error', {
    get: MBadgeColor$error_getInstance
  });
  Object.defineProperty(MBadgeColor, 'default', {
    get: MBadgeColor$default_getInstance
  });
  package$components.MBadgeColor = MBadgeColor;
  Object.defineProperty(MBadgeVariant, 'standard', {
    get: MBadgeVariant$standard_getInstance
  });
  Object.defineProperty(MBadgeVariant, 'dot', {
    get: MBadgeVariant$dot_getInstance
  });
  package$components.MBadgeVariant = MBadgeVariant;
  Object.defineProperty(MBadgeOverlap, 'circle', {
    get: MBadgeOverlap$circle_getInstance
  });
  Object.defineProperty(MBadgeOverlap, 'rectangle', {
    get: MBadgeOverlap$rectangle_getInstance
  });
  package$components.MBadgeOverlap = MBadgeOverlap;
  Object.defineProperty(MBadgeAnchorOriginHorizontal, 'left', {
    get: MBadgeAnchorOriginHorizontal$left_getInstance
  });
  Object.defineProperty(MBadgeAnchorOriginHorizontal, 'right', {
    get: MBadgeAnchorOriginHorizontal$right_getInstance
  });
  package$components.MBadgeAnchorOriginHorizontal = MBadgeAnchorOriginHorizontal;
  Object.defineProperty(MBadgeAnchorOriginVertical, 'top', {
    get: MBadgeAnchorOriginVertical$top_getInstance
  });
  Object.defineProperty(MBadgeAnchorOriginVertical, 'bottom', {
    get: MBadgeAnchorOriginVertical$bottom_getInstance
  });
  package$components.MBadgeAnchorOriginVertical = MBadgeAnchorOriginVertical;
  package$components.MBadgeProps = MBadgeProps;
  package$components.get_anchorOriginHorizontal_6k44gf$ = get_anchorOriginHorizontal;
  package$components.set_anchorOriginHorizontal_d96zc2$ = set_anchorOriginHorizontal;
  package$components.get_anchorOriginVertical_6k44gf$ = get_anchorOriginVertical;
  package$components.set_anchorOriginVertical_vpr8b0$ = set_anchorOriginVertical;
  package$components.get_color_6k44gf$ = get_color_0;
  package$components.set_color_vruijk$ = set_color_0;
  package$components.get_overlap_6k44gf$ = get_overlap;
  package$components.set_overlap_sd7cw4$ = set_overlap;
  package$components.get_variant_6k44gf$ = get_variant_0;
  package$components.set_variant_kp7gse$ = set_variant_0;
  package$components.mBadge_g7t9pv$ = mBadge;
  package$components.mBadge_7zx3ji$ = mBadge_0;
  package$components.mBadge_vylmay$ = mBadge_1;
  package$components.mBadgeDot_r11vsd$ = mBadgeDot;
  package$components.setStyledPropsAndRunHandler_swhgju$ = setStyledPropsAndRunHandler;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$components.child_6a4hg0$ = child;
  package$components.createStyled_z1rhxe$ = createStyled;
  package$components.createStyled_np1rda$ = createStyled_0;
  package$components.toolbarJsCssToPartialCss_goyjrz$ = toolbarJsCssToPartialCss;
  package$components.PropsWithJsStyle = PropsWithJsStyle;
  package$components.toJsStyle_t0u3ez$ = toJsStyle;
  Object.defineProperty(MAlignment, 'inherit', {
    get: MAlignment$inherit_getInstance
  });
  Object.defineProperty(MAlignment, 'left', {
    get: MAlignment$left_getInstance
  });
  Object.defineProperty(MAlignment, 'center', {
    get: MAlignment$center_getInstance
  });
  Object.defineProperty(MAlignment, 'right', {
    get: MAlignment$right_getInstance
  });
  Object.defineProperty(MAlignment, 'justify', {
    get: MAlignment$justify_getInstance
  });
  package$components.MAlignment = MAlignment;
  Object.defineProperty(MColor, 'default', {
    get: MColor$default_getInstance
  });
  Object.defineProperty(MColor, 'inherit', {
    get: MColor$inherit_getInstance
  });
  Object.defineProperty(MColor, 'primary', {
    get: MColor$primary_getInstance
  });
  Object.defineProperty(MColor, 'secondary', {
    get: MColor$secondary_getInstance
  });
  package$components.MColor = MColor;
  Object.defineProperty(MOptionColor, 'primary', {
    get: MOptionColor$primary_getInstance
  });
  Object.defineProperty(MOptionColor, 'secondary', {
    get: MOptionColor$secondary_getInstance
  });
  Object.defineProperty(MOptionColor, 'default', {
    get: MOptionColor$default_getInstance
  });
  package$components.MOptionColor = MOptionColor;
  package$components.toHyphenCase_pdl1vz$ = toHyphenCase;
  package$components.get_targetInputValue_g0pdir$ = get_targetInputValue;
  package$components.get_targetChecked_g0pdir$ = get_targetChecked;
  package$components.get_targetValue_g0pdir$ = get_targetValue;
  package$components.persist_g0pdir$ = persist;
  package$components.HRefOptions = HRefOptions;
  package$components.setHRefTargetNoOpener_665otk$ = setHRefTargetNoOpener;
  package$components.setHRefTargetNoOpener_u1y6bq$ = setHRefTargetNoOpener_0;
  package$components.MBottomNavigationProps = MBottomNavigationProps;
  package$components.mBottomNavigation_y2aniu$ = mBottomNavigation;
  package$components.MBottomNavigationActionProps = MBottomNavigationActionProps;
  package$components.mBottomNavigationAction_9of4y1$ = mBottomNavigationAction;
  package$components.mBottomNavigationAction_hixqa$ = mBottomNavigationAction_0;
  package$components.MBreadcrumbsProps = MBreadcrumbsProps;
  package$components.mBreadcrumbs_8bcmke$ = mBreadcrumbs;
  package$components.mBreadcrumbs_ubdk3m$ = mBreadcrumbs_0;
  package$components.MCheckboxProps = MCheckboxProps;
  package$components.get_color_7ilsml$ = get_color_1;
  package$components.set_color_pql6r4$ = set_color_1;
  package$components.mCheckbox_vupby9$ = mCheckbox;
  package$components.mCheckboxWithLabel_qqe6y8$ = mCheckboxWithLabel;
  package$components.ChildPropDelegate = ChildPropDelegate;
  package$components.ChildPropDelegateNullable = ChildPropDelegateNullable;
  Object.defineProperty(MChipVariant, 'default', {
    get: MChipVariant$default_getInstance
  });
  Object.defineProperty(MChipVariant, 'outlined', {
    get: MChipVariant$outlined_getInstance
  });
  package$components.MChipVariant = MChipVariant;
  Object.defineProperty(MChipColor, 'default', {
    get: MChipColor$default_getInstance
  });
  Object.defineProperty(MChipColor, 'primary', {
    get: MChipColor$primary_getInstance
  });
  Object.defineProperty(MChipColor, 'secondary', {
    get: MChipColor$secondary_getInstance
  });
  package$components.MChipColor = MChipColor;
  Object.defineProperty(MChipSize, 'small', {
    get: MChipSize$small_getInstance
  });
  Object.defineProperty(MChipSize, 'medium', {
    get: MChipSize$medium_getInstance
  });
  package$components.MChipSize = MChipSize;
  package$components.MChipProps = MChipProps;
  package$components.get_color_gy4eec$ = get_color_2;
  package$components.set_color_4v2gzm$ = set_color_2;
  package$components.get_size_gy4eec$ = get_size;
  package$components.set_size_2geygy$ = set_size;
  package$components.get_variant_gy4eec$ = get_variant_1;
  package$components.set_variant_qgsz6k$ = set_variant_1;
  package$components.mChip_qybejc$ = mChip;
  Object.defineProperty(MCircularProgressColor, 'primary', {
    get: MCircularProgressColor$primary_getInstance
  });
  Object.defineProperty(MCircularProgressColor, 'secondary', {
    get: MCircularProgressColor$secondary_getInstance
  });
  Object.defineProperty(MCircularProgressColor, 'inherit', {
    get: MCircularProgressColor$inherit_getInstance
  });
  package$components.MCircularProgressColor = MCircularProgressColor;
  Object.defineProperty(MCircularProgressVariant, 'determinate', {
    get: MCircularProgressVariant$determinate_getInstance
  });
  Object.defineProperty(MCircularProgressVariant, 'indeterminate', {
    get: MCircularProgressVariant$indeterminate_getInstance
  });
  Object.defineProperty(MCircularProgressVariant, 'static', {
    get: MCircularProgressVariant$static_getInstance
  });
  package$components.MCircularProgressVariant = MCircularProgressVariant;
  package$components.MCircularProgressProps = MCircularProgressProps;
  package$components.get_color_ezq98c$ = get_color_3;
  package$components.set_color_colm6a$ = set_color_3;
  package$components.get_variant_ezq98c$ = get_variant_2;
  package$components.set_variant_umeodg$ = set_variant_2;
  package$components.get_size_ezq98c$ = get_size_0;
  package$components.set_size_ijze1p$ = set_size_0;
  package$components.mCircularProgress_yrpcr$ = mCircularProgress;
  Object.defineProperty(MClickAwayListenerMouseEvent, 'onClick', {
    get: MClickAwayListenerMouseEvent$onClick_getInstance
  });
  Object.defineProperty(MClickAwayListenerMouseEvent, 'onMouseDown', {
    get: MClickAwayListenerMouseEvent$onMouseDown_getInstance
  });
  Object.defineProperty(MClickAwayListenerMouseEvent, 'onMouseUp', {
    get: MClickAwayListenerMouseEvent$onMouseUp_getInstance
  });
  Object.defineProperty(MClickAwayListenerMouseEvent, 'disable', {
    get: MClickAwayListenerMouseEvent$disable_getInstance
  });
  package$components.MClickAwayListenerMouseEvent = MClickAwayListenerMouseEvent;
  Object.defineProperty(MClickAwayListenerTouchEvent, 'onTouchStart', {
    get: MClickAwayListenerTouchEvent$onTouchStart_getInstance
  });
  Object.defineProperty(MClickAwayListenerTouchEvent, 'onTouchEnd', {
    get: MClickAwayListenerTouchEvent$onTouchEnd_getInstance
  });
  Object.defineProperty(MClickAwayListenerTouchEvent, 'disable', {
    get: MClickAwayListenerTouchEvent$disable_getInstance
  });
  package$components.MClickAwayListenerTouchEvent = MClickAwayListenerTouchEvent;
  package$components.MClickAwayListenerProps = MClickAwayListenerProps;
  package$components.get_mouseEvent_shl4lk$ = get_mouseEvent;
  package$components.set_mouseEvent_99fq6y$ = set_mouseEvent;
  package$components.get_touchEvent_shl4lk$ = get_touchEvent;
  package$components.set_touchEvent_iot1sc$ = set_touchEvent;
  package$components.mClickAwayListener_hebyo0$ = mClickAwayListener;
  Object.defineProperty(Colors, 'Red', {
    get: Colors$Red_getInstance
  });
  Object.defineProperty(Colors, 'Pink', {
    get: Colors$Pink_getInstance
  });
  Object.defineProperty(Colors, 'Purple', {
    get: Colors$Purple_getInstance
  });
  Object.defineProperty(Colors, 'DeepPurple', {
    get: Colors$DeepPurple_getInstance
  });
  Object.defineProperty(Colors, 'Indigo', {
    get: Colors$Indigo_getInstance
  });
  Object.defineProperty(Colors, 'Blue', {
    get: Colors$Blue_getInstance
  });
  Object.defineProperty(Colors, 'LightBlue', {
    get: Colors$LightBlue_getInstance
  });
  Object.defineProperty(Colors, 'Cyan', {
    get: Colors$Cyan_getInstance
  });
  Object.defineProperty(Colors, 'Teal', {
    get: Colors$Teal_getInstance
  });
  Object.defineProperty(Colors, 'Green', {
    get: Colors$Green_getInstance
  });
  Object.defineProperty(Colors, 'LightGreen', {
    get: Colors$LightGreen_getInstance
  });
  Object.defineProperty(Colors, 'Lime', {
    get: Colors$Lime_getInstance
  });
  Object.defineProperty(Colors, 'Yellow', {
    get: Colors$Yellow_getInstance
  });
  Object.defineProperty(Colors, 'Amber', {
    get: Colors$Amber_getInstance
  });
  Object.defineProperty(Colors, 'Orange', {
    get: Colors$Orange_getInstance
  });
  Object.defineProperty(Colors, 'DeepOrange', {
    get: Colors$DeepOrange_getInstance
  });
  Object.defineProperty(Colors, 'Brown', {
    get: Colors$Brown_getInstance
  });
  Object.defineProperty(Colors, 'Grey', {
    get: Colors$Grey_getInstance
  });
  Object.defineProperty(Colors, 'BlueGrey', {
    get: Colors$BlueGrey_getInstance
  });
  Object.defineProperty(Colors, 'Companion', {
    get: Colors$Companion_getInstance
  });
  package$components.Colors = Colors;
  package$components.MContainerProps = MContainerProps;
  package$components.mContainer_bat9cz$ = mContainer;
  package$components.mCssBaseline_ss14n$ = mCssBaseline;
  Object.defineProperty(MDividerOrientation, 'horizontal', {
    get: MDividerOrientation$horizontal_getInstance
  });
  Object.defineProperty(MDividerOrientation, 'vertical', {
    get: MDividerOrientation$vertical_getInstance
  });
  package$components.MDividerOrientation = MDividerOrientation;
  Object.defineProperty(MDividerVariant, 'fullWidth', {
    get: MDividerVariant$fullWidth_getInstance
  });
  Object.defineProperty(MDividerVariant, 'inset', {
    get: MDividerVariant$inset_getInstance
  });
  Object.defineProperty(MDividerVariant, 'middle', {
    get: MDividerVariant$middle_getInstance
  });
  package$components.MDividerVariant = MDividerVariant;
  package$components.MDividerProps = MDividerProps;
  package$components.get_orientation_y8q1t3$ = get_orientation;
  package$components.set_orientation_usatpd$ = set_orientation;
  package$components.get_variant_y8q1t3$ = get_variant_3;
  package$components.set_variant_nzwf86$ = set_variant_3;
  package$components.mDivider_oxrk4f$ = mDivider;
  Object.defineProperty(MDrawerAnchor, 'left', {
    get: MDrawerAnchor$left_getInstance
  });
  Object.defineProperty(MDrawerAnchor, 'top', {
    get: MDrawerAnchor$top_getInstance
  });
  Object.defineProperty(MDrawerAnchor, 'right', {
    get: MDrawerAnchor$right_getInstance
  });
  Object.defineProperty(MDrawerAnchor, 'bottom', {
    get: MDrawerAnchor$bottom_getInstance
  });
  package$components.MDrawerAnchor = MDrawerAnchor;
  Object.defineProperty(MDrawerVariant, 'permanent', {
    get: MDrawerVariant$permanent_getInstance
  });
  Object.defineProperty(MDrawerVariant, 'persistent', {
    get: MDrawerVariant$persistent_getInstance
  });
  Object.defineProperty(MDrawerVariant, 'temporary', {
    get: MDrawerVariant$temporary_getInstance
  });
  package$components.MDrawerVariant = MDrawerVariant;
  package$components.MDrawerProps = MDrawerProps;
  package$components.get_anchor_kihi9t$ = get_anchor;
  package$components.set_anchor_1byc6$ = set_anchor;
  package$components.get_transitionDuration_kihi9t$ = get_transitionDuration_0;
  package$components.set_transitionDuration_lwp9g7$ = set_transitionDuration_0;
  package$components.get_variant_kihi9t$ = get_variant_4;
  package$components.set_variant_jbuhms$ = set_variant_4;
  package$components.mDrawer_728dms$ = mDrawer;
  package$components.EnumPropToString = EnumPropToString;
  package$components.EnumPropToStringNullable = EnumPropToStringNullable;
  Object.defineProperty(MGridAlignContent, 'stretch', {
    get: MGridAlignContent$stretch_getInstance
  });
  Object.defineProperty(MGridAlignContent, 'center', {
    get: MGridAlignContent$center_getInstance
  });
  Object.defineProperty(MGridAlignContent, 'flexStart', {
    get: MGridAlignContent$flexStart_getInstance
  });
  Object.defineProperty(MGridAlignContent, 'flexEnd', {
    get: MGridAlignContent$flexEnd_getInstance
  });
  Object.defineProperty(MGridAlignContent, 'spaceBetween', {
    get: MGridAlignContent$spaceBetween_getInstance
  });
  Object.defineProperty(MGridAlignContent, 'spaceAround', {
    get: MGridAlignContent$spaceAround_getInstance
  });
  package$components.MGridAlignContent = MGridAlignContent;
  Object.defineProperty(MGridAlignItems, 'stretch', {
    get: MGridAlignItems$stretch_getInstance
  });
  Object.defineProperty(MGridAlignItems, 'center', {
    get: MGridAlignItems$center_getInstance
  });
  Object.defineProperty(MGridAlignItems, 'flexStart', {
    get: MGridAlignItems$flexStart_getInstance
  });
  Object.defineProperty(MGridAlignItems, 'flexEnd', {
    get: MGridAlignItems$flexEnd_getInstance
  });
  Object.defineProperty(MGridAlignItems, 'baseline', {
    get: MGridAlignItems$baseline_getInstance
  });
  package$components.MGridAlignItems = MGridAlignItems;
  Object.defineProperty(MGridDirection, 'row', {
    get: MGridDirection$row_getInstance
  });
  Object.defineProperty(MGridDirection, 'rowReverse', {
    get: MGridDirection$rowReverse_getInstance
  });
  Object.defineProperty(MGridDirection, 'column', {
    get: MGridDirection$column_getInstance
  });
  Object.defineProperty(MGridDirection, 'columnReverse', {
    get: MGridDirection$columnReverse_getInstance
  });
  package$components.MGridDirection = MGridDirection;
  Object.defineProperty(MGridJustify, 'flexStart', {
    get: MGridJustify$flexStart_getInstance
  });
  Object.defineProperty(MGridJustify, 'center', {
    get: MGridJustify$center_getInstance
  });
  Object.defineProperty(MGridJustify, 'flexEnd', {
    get: MGridJustify$flexEnd_getInstance
  });
  Object.defineProperty(MGridJustify, 'spaceBetween', {
    get: MGridJustify$spaceBetween_getInstance
  });
  Object.defineProperty(MGridJustify, 'spaceAround', {
    get: MGridJustify$spaceAround_getInstance
  });
  package$components.MGridJustify = MGridJustify;
  Object.defineProperty(MGridSize, 'cellsFalse', {
    get: MGridSize$cellsFalse_getInstance
  });
  Object.defineProperty(MGridSize, 'cellsAuto', {
    get: MGridSize$cellsAuto_getInstance
  });
  Object.defineProperty(MGridSize, 'cellsTrue', {
    get: MGridSize$cellsTrue_getInstance
  });
  Object.defineProperty(MGridSize, 'cells1', {
    get: MGridSize$cells1_getInstance
  });
  Object.defineProperty(MGridSize, 'cells2', {
    get: MGridSize$cells2_getInstance
  });
  Object.defineProperty(MGridSize, 'cells3', {
    get: MGridSize$cells3_getInstance
  });
  Object.defineProperty(MGridSize, 'cells4', {
    get: MGridSize$cells4_getInstance
  });
  Object.defineProperty(MGridSize, 'cells5', {
    get: MGridSize$cells5_getInstance
  });
  Object.defineProperty(MGridSize, 'cells6', {
    get: MGridSize$cells6_getInstance
  });
  Object.defineProperty(MGridSize, 'cells7', {
    get: MGridSize$cells7_getInstance
  });
  Object.defineProperty(MGridSize, 'cells8', {
    get: MGridSize$cells8_getInstance
  });
  Object.defineProperty(MGridSize, 'cells9', {
    get: MGridSize$cells9_getInstance
  });
  Object.defineProperty(MGridSize, 'cells10', {
    get: MGridSize$cells10_getInstance
  });
  Object.defineProperty(MGridSize, 'cells11', {
    get: MGridSize$cells11_getInstance
  });
  Object.defineProperty(MGridSize, 'cells12', {
    get: MGridSize$cells12_getInstance
  });
  package$components.MGridSize = MGridSize;
  Object.defineProperty(MGridWrap, 'noWrap', {
    get: MGridWrap$noWrap_getInstance
  });
  Object.defineProperty(MGridWrap, 'wrap', {
    get: MGridWrap$wrap_getInstance
  });
  Object.defineProperty(MGridWrap, 'wrapReverse', {
    get: MGridWrap$wrapReverse_getInstance
  });
  package$components.MGridWrap = MGridWrap;
  Object.defineProperty(MGridSpacing, 'spacing0', {
    get: MGridSpacing$spacing0_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing1', {
    get: MGridSpacing$spacing1_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing2', {
    get: MGridSpacing$spacing2_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing3', {
    get: MGridSpacing$spacing3_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing4', {
    get: MGridSpacing$spacing4_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing5', {
    get: MGridSpacing$spacing5_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing6', {
    get: MGridSpacing$spacing6_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing7', {
    get: MGridSpacing$spacing7_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing8', {
    get: MGridSpacing$spacing8_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing9', {
    get: MGridSpacing$spacing9_getInstance
  });
  Object.defineProperty(MGridSpacing, 'spacing10', {
    get: MGridSpacing$spacing10_getInstance
  });
  package$components.MGridSpacing = MGridSpacing;
  package$components.MGridBreakpoints_init_4ik2g8$ = MGridBreakpoints_init;
  package$components.MGridBreakpoints = MGridBreakpoints;
  package$components.MGridProps = MGridProps;
  package$components.get_alignContent_7s7iay$ = get_alignContent;
  package$components.set_alignContent_98u6wl$ = set_alignContent;
  package$components.get_alignItems_7s7iay$ = get_alignItems;
  package$components.set_alignItems_eql1h8$ = set_alignItems;
  package$components.get_direction_7s7iay$ = get_direction;
  package$components.set_direction_ls8fvi$ = set_direction;
  package$components.get_justify_7s7iay$ = get_justify;
  package$components.set_justify_2t05kf$ = set_justify;
  package$components.get_lg_7s7iay$ = get_lg;
  package$components.set_lg_i9psg3$ = set_lg;
  package$components.get_md_7s7iay$ = get_md;
  package$components.set_md_i9psg3$ = set_md;
  package$components.get_sm_7s7iay$ = get_sm;
  package$components.set_sm_i9psg3$ = set_sm;
  package$components.get_spacing_7s7iay$ = get_spacing;
  package$components.set_spacing_jwu4ir$ = set_spacing;
  package$components.get_wrap_7s7iay$ = get_wrap;
  package$components.set_wrap_yygbud$ = set_wrap;
  package$components.get_xl_7s7iay$ = get_xl;
  package$components.set_xl_i9psg3$ = set_xl;
  package$components.get_xs_7s7iay$ = get_xs;
  package$components.set_xs_i9psg3$ = set_xs;
  package$components.GridSizeDelegate = GridSizeDelegate;
  package$components.GridSpacingDelegate = GridSpacingDelegate;
  package$components.mGridContainer_x56xbf$ = mGridContainer;
  package$components.mGridItem_x3s3um$ = mGridItem;
  package$components.mGridItem_7dmt5n$ = mGridItem_0;
  Object.defineProperty(MHiddenImplementation, 'js', {
    get: MHiddenImplementation$js_getInstance
  });
  Object.defineProperty(MHiddenImplementation, 'css', {
    get: MHiddenImplementation$css_getInstance
  });
  package$components.MHiddenImplementation = MHiddenImplementation;
  package$components.MHiddenProps = MHiddenProps;
  package$components.get_initialWidth_enx6m2$ = get_initialWidth;
  package$components.set_initialWidth_aln2dk$ = set_initialWidth;
  package$components.get_implementation_enx6m2$ = get_implementation;
  package$components.set_implementation_jwkukt$ = set_implementation;
  package$components.mHidden_b7q1ap$ = mHidden;
  Object.defineProperty(MIconColor, 'inherit', {
    get: MIconColor$inherit_getInstance
  });
  Object.defineProperty(MIconColor, 'primary', {
    get: MIconColor$primary_getInstance
  });
  Object.defineProperty(MIconColor, 'secondary', {
    get: MIconColor$secondary_getInstance
  });
  Object.defineProperty(MIconColor, 'action', {
    get: MIconColor$action_getInstance
  });
  Object.defineProperty(MIconColor, 'error', {
    get: MIconColor$error_getInstance
  });
  Object.defineProperty(MIconColor, 'disabled', {
    get: MIconColor$disabled_getInstance
  });
  package$components.MIconColor = MIconColor;
  Object.defineProperty(MIconFontSize, 'inherit', {
    get: MIconFontSize$inherit_getInstance
  });
  Object.defineProperty(MIconFontSize, 'default', {
    get: MIconFontSize$default_getInstance
  });
  Object.defineProperty(MIconFontSize, 'small', {
    get: MIconFontSize$small_getInstance
  });
  Object.defineProperty(MIconFontSize, 'large', {
    get: MIconFontSize$large_getInstance
  });
  package$components.MIconFontSize = MIconFontSize;
  package$components.MIconProps = MIconProps;
  package$components.get_color_rj216f$ = get_color_4;
  package$components.set_color_bnah0i$ = set_color_4;
  package$components.get_fontSize_rj216f$ = get_fontSize;
  package$components.set_fontSize_5c9glt$ = set_fontSize;
  package$components.mIcon_jwdiw1$ = mIcon;
  Object.defineProperty(MLinearProgressColor, 'primary', {
    get: MLinearProgressColor$primary_getInstance
  });
  Object.defineProperty(MLinearProgressColor, 'secondary', {
    get: MLinearProgressColor$secondary_getInstance
  });
  package$components.MLinearProgressColor = MLinearProgressColor;
  Object.defineProperty(MLinearProgressVariant, 'determinate', {
    get: MLinearProgressVariant$determinate_getInstance
  });
  Object.defineProperty(MLinearProgressVariant, 'indeterminate', {
    get: MLinearProgressVariant$indeterminate_getInstance
  });
  Object.defineProperty(MLinearProgressVariant, 'buffer', {
    get: MLinearProgressVariant$buffer_getInstance
  });
  Object.defineProperty(MLinearProgressVariant, 'query', {
    get: MLinearProgressVariant$query_getInstance
  });
  package$components.MLinearProgressVariant = MLinearProgressVariant;
  package$components.MLinearProgressProps = MLinearProgressProps;
  package$components.get_color_gtoz9a$ = get_color_5;
  package$components.set_color_qewaf6$ = set_color_5;
  package$components.get_variant_gtoz9a$ = get_variant_5;
  package$components.set_variant_dudq90$ = set_variant_5;
  package$components.mLinearProgress_qqljz4$ = mLinearProgress;
  Object.defineProperty(MLinkUnderline, 'none', {
    get: MLinkUnderline$none_getInstance
  });
  Object.defineProperty(MLinkUnderline, 'hover', {
    get: MLinkUnderline$hover_getInstance
  });
  Object.defineProperty(MLinkUnderline, 'always', {
    get: MLinkUnderline$always_getInstance
  });
  package$components.MLinkUnderline = MLinkUnderline;
  package$components.MLinkProps = MLinkProps;
  package$components.get_underline_5d3646$ = get_underline;
  package$components.set_underline_eweujv$ = set_underline;
  package$components.mLink_un0lt6$ = mLink;
  package$components.mLink_1evsyh$ = mLink_0;
  Object.defineProperty(package$components, 'Locales', {
    get: Locales_getInstance
  });
  package$components.MuiThemeProviderProps = MuiThemeProviderProps;
  package$components.mMuiThemeProvider_qgwdrg$ = mMuiThemeProvider;
  package$components.MNativeSelectProps = MNativeSelectProps;
  package$components.get_margin_9y4ynx$ = get_margin;
  package$components.set_margin_u9yp1t$ = set_margin;
  package$components.get_variant_9y4ynx$ = get_variant_6;
  package$components.set_variant_foj5vy$ = set_variant_6;
  package$components.mNativeSelect_hikljo$ = mNativeSelect;
  package$components.OnClosePropWithReasonDelegate = OnClosePropWithReasonDelegate;
  Object.defineProperty(MPaperVariant, 'elevation', {
    get: MPaperVariant$elevation_getInstance
  });
  Object.defineProperty(MPaperVariant, 'outlined', {
    get: MPaperVariant$outlined_getInstance
  });
  package$components.MPaperVariant = MPaperVariant;
  package$components.MPaperProps = MPaperProps;
  package$components.get_variant_8vjsyu$ = get_variant_7;
  package$components.set_variant_f1x4ts$ = set_variant_7;
  package$components.mPaper_1l6flt$ = mPaper;
  Object.defineProperty(MPopoverAnchorRef, 'anchorEl', {
    get: MPopoverAnchorRef$anchorEl_getInstance
  });
  Object.defineProperty(MPopoverAnchorRef, 'anchorPosition', {
    get: MPopoverAnchorRef$anchorPosition_getInstance
  });
  Object.defineProperty(MPopoverAnchorRef, 'none', {
    get: MPopoverAnchorRef$none_getInstance
  });
  package$components.MPopoverAnchorRef = MPopoverAnchorRef;
  Object.defineProperty(MPopoverHorizontalPosition, 'left', {
    get: MPopoverHorizontalPosition$left_getInstance
  });
  Object.defineProperty(MPopoverHorizontalPosition, 'center', {
    get: MPopoverHorizontalPosition$center_getInstance
  });
  Object.defineProperty(MPopoverHorizontalPosition, 'right', {
    get: MPopoverHorizontalPosition$right_getInstance
  });
  package$components.MPopoverHorizontalPosition = MPopoverHorizontalPosition;
  Object.defineProperty(MPopoverVerticalPosition, 'top', {
    get: MPopoverVerticalPosition$top_getInstance
  });
  Object.defineProperty(MPopoverVerticalPosition, 'center', {
    get: MPopoverVerticalPosition$center_getInstance
  });
  Object.defineProperty(MPopoverVerticalPosition, 'bottom', {
    get: MPopoverVerticalPosition$bottom_getInstance
  });
  package$components.MPopoverVerticalPosition = MPopoverVerticalPosition;
  package$components.MPopoverProps = MPopoverProps;
  package$components.get_anchorOriginHorizontal_z9o1cd$ = get_anchorOriginHorizontal_0;
  package$components.set_anchorOriginHorizontal_82q8vf$ = set_anchorOriginHorizontal_0;
  package$components.get_anchorOriginVertical_z9o1cd$ = get_anchorOriginVertical_0;
  package$components.set_anchorOriginVertical_5y5tw9$ = set_anchorOriginVertical_0;
  $$importsForInline$$['muirwik-muirwik-components'] = _;
  package$components.get_anchorOriginHorizontalNumeric_z9o1cd$ = get_anchorOriginHorizontalNumeric;
  package$components.set_anchorOriginHorizontalNumeric_fssyru$ = set_anchorOriginHorizontalNumeric;
  package$components.get_anchorOriginVerticalNumeric_z9o1cd$ = get_anchorOriginVerticalNumeric;
  package$components.set_anchorOriginVerticalNumeric_fssyru$ = set_anchorOriginVerticalNumeric;
  package$components.get_anchorPositionLeft_z9o1cd$ = get_anchorPositionLeft;
  package$components.set_anchorPositionLeft_fssyru$ = set_anchorPositionLeft;
  package$components.get_anchorPositionTop_z9o1cd$ = get_anchorPositionTop;
  package$components.set_anchorPositionTop_fssyru$ = set_anchorPositionTop;
  package$components.get_anchorReference_z9o1cd$ = get_anchorReference;
  package$components.set_anchorReference_ncep0p$ = set_anchorReference;
  package$components.get_transformOriginHorizontal_z9o1cd$ = get_transformOriginHorizontal;
  package$components.set_transformOriginHorizontal_82q8vf$ = set_transformOriginHorizontal;
  package$components.get_transformOriginVertical_z9o1cd$ = get_transformOriginVertical;
  package$components.set_transformOriginVertical_5y5tw9$ = set_transformOriginVertical;
  package$components.get_transformOriginHorizontalNumeric_z9o1cd$ = get_transformOriginHorizontalNumeric;
  package$components.set_transformOriginHorizontalNumeric_fssyru$ = set_transformOriginHorizontalNumeric;
  package$components.get_transformOriginVerticalNumeric_z9o1cd$ = get_transformOriginVerticalNumeric;
  package$components.set_transformOriginVerticalNumeric_fssyru$ = set_transformOriginVerticalNumeric;
  package$components.get_transitionComponent_z9o1cd$ = get_transitionComponent;
  package$components.set_transitionComponent_27fjgm$ = set_transitionComponent;
  package$components.get_transitionDuration_z9o1cd$ = get_transitionDuration_1;
  package$components.set_transitionDuration_cp8rpf$ = set_transitionDuration_1;
  package$components.mPopover_atry0z$ = mPopover;
  package$components.MRadioProps = MRadioProps;
  package$components.get_color_6htf49$ = get_color_6;
  package$components.set_color_i8wpei$ = set_color_6;
  package$components.get_size_6htf49$ = get_size_1;
  package$components.set_size_w9ak66$ = set_size_1;
  package$components.mRadio_9k28s0$ = mRadio;
  package$components.mRadioWithLabel_oxn1lb$ = mRadioWithLabel;
  package$components.MRadioGroupProps = MRadioGroupProps;
  package$components.mRadioGroup_iyklsl$ = mRadioGroup;
  Object.defineProperty(AutoCapitalize, 'off', {
    get: AutoCapitalize$off_getInstance
  });
  Object.defineProperty(AutoCapitalize, 'none', {
    get: AutoCapitalize$none_getInstance
  });
  Object.defineProperty(AutoCapitalize, 'on', {
    get: AutoCapitalize$on_getInstance
  });
  Object.defineProperty(AutoCapitalize, 'sentences', {
    get: AutoCapitalize$sentences_getInstance
  });
  Object.defineProperty(AutoCapitalize, 'words', {
    get: AutoCapitalize$words_getInstance
  });
  Object.defineProperty(AutoCapitalize, 'characters', {
    get: AutoCapitalize$characters_getInstance
  });
  package$components.AutoCapitalize = AutoCapitalize;
  Object.defineProperty(TextDir, 'ltr', {
    get: TextDir$ltr_getInstance
  });
  Object.defineProperty(TextDir, 'rtl', {
    get: TextDir$rtl_getInstance
  });
  Object.defineProperty(TextDir, 'auto', {
    get: TextDir$auto_getInstance
  });
  package$components.TextDir = TextDir;
  Object.defineProperty(DropZone, 'copy', {
    get: DropZone$copy_getInstance
  });
  Object.defineProperty(DropZone, 'move', {
    get: DropZone$move_getInstance
  });
  Object.defineProperty(DropZone, 'link', {
    get: DropZone$link_getInstance
  });
  package$components.DropZone = DropZone;
  package$components.ReactHtmlElementAttributes = ReactHtmlElementAttributes;
  package$components.ReactHtmlElementEvents = ReactHtmlElementEvents;
  package$components.Touch = Touch;
  package$components.MSelectProps = MSelectProps;
  package$components.mSelect_64kplo$ = mSelect;
  Object.defineProperty(MSliderOrientation, 'horizontal', {
    get: MSliderOrientation$horizontal_getInstance
  });
  Object.defineProperty(MSliderOrientation, 'vertical', {
    get: MSliderOrientation$vertical_getInstance
  });
  package$components.MSliderOrientation = MSliderOrientation;
  Object.defineProperty(MSliderValueLabelDisplay, 'on', {
    get: MSliderValueLabelDisplay$on_getInstance
  });
  Object.defineProperty(MSliderValueLabelDisplay, 'off', {
    get: MSliderValueLabelDisplay$off_getInstance
  });
  Object.defineProperty(MSliderValueLabelDisplay, 'auto', {
    get: MSliderValueLabelDisplay$auto_getInstance
  });
  package$components.MSliderValueLabelDisplay = MSliderValueLabelDisplay;
  package$components.MSliderMark = MSliderMark;
  package$components.MSliderProps = MSliderProps;
  package$components.get_orientation_8jomkv$ = get_orientation_0;
  package$components.set_orientation_khkgwf$ = set_orientation_0;
  package$components.get_valueLabelDisplay_8jomkv$ = get_valueLabelDisplay;
  package$components.set_valueLabelDisplay_5qn6bi$ = set_valueLabelDisplay;
  package$components.mSlider_565mqx$ = mSlider;
  package$components.mSliderWithRange_2gz2m1$ = mSliderWithRange;
  Object.defineProperty(MSnackbarHorizAnchor, 'left', {
    get: MSnackbarHorizAnchor$left_getInstance
  });
  Object.defineProperty(MSnackbarHorizAnchor, 'center', {
    get: MSnackbarHorizAnchor$center_getInstance
  });
  Object.defineProperty(MSnackbarHorizAnchor, 'right', {
    get: MSnackbarHorizAnchor$right_getInstance
  });
  package$components.MSnackbarHorizAnchor = MSnackbarHorizAnchor;
  Object.defineProperty(MSnackbarVertAnchor, 'top', {
    get: MSnackbarVertAnchor$top_getInstance
  });
  Object.defineProperty(MSnackbarVertAnchor, 'bottom', {
    get: MSnackbarVertAnchor$bottom_getInstance
  });
  package$components.MSnackbarVertAnchor = MSnackbarVertAnchor;
  Object.defineProperty(MSnackbarOnCloseReason, 'timeout', {
    get: MSnackbarOnCloseReason$timeout_getInstance
  });
  Object.defineProperty(MSnackbarOnCloseReason, 'clickaway', {
    get: MSnackbarOnCloseReason$clickaway_getInstance
  });
  package$components.MSnackbarOnCloseReason = MSnackbarOnCloseReason;
  package$components.MSnackbarProps = MSnackbarProps;
  package$components.get_anchorOriginHorizontal_v96a97$ = get_anchorOriginHorizontal_1;
  package$components.set_anchorOriginHorizontal_n94ii7$ = set_anchorOriginHorizontal_1;
  package$components.get_anchorOriginVertical_v96a97$ = get_anchorOriginVertical_1;
  package$components.set_anchorOriginVertical_oadgso$ = set_anchorOriginVertical_1;
  package$components.get_onClose_v96a97$ = get_onClose;
  package$components.set_onClose_heyyty$ = set_onClose;
  package$components.get_transitionComponent_v96a97$ = get_transitionComponent_0;
  package$components.set_transitionComponent_q2gr30$ = set_transitionComponent_0;
  package$components.get_transitionDuration_v96a97$ = get_transitionDuration_2;
  package$components.set_transitionDuration_lrn3l6$ = set_transitionDuration_2;
  package$components.mSnackbar_4o8ntx$ = mSnackbar;
  package$components.mSnackbar_bx84ds$ = mSnackbar_0;
  package$components.mSnackbar_z1mewy$ = mSnackbar_1;
  package$components.StyledPropsWithCommonAttributes = StyledPropsWithCommonAttributes;
  Object.defineProperty(SvgShapeRendering, 'auto', {
    get: SvgShapeRendering$auto_getInstance
  });
  Object.defineProperty(SvgShapeRendering, 'optimizeSpeed', {
    get: SvgShapeRendering$optimizeSpeed_getInstance
  });
  Object.defineProperty(SvgShapeRendering, 'crispEdges', {
    get: SvgShapeRendering$crispEdges_getInstance
  });
  Object.defineProperty(SvgShapeRendering, 'geometricPrecision', {
    get: SvgShapeRendering$geometricPrecision_getInstance
  });
  package$components.SvgShapeRendering = SvgShapeRendering;
  package$components.MSvgIconProps = MSvgIconProps;
  package$components.get_shapeRendering_h1wv4b$ = get_shapeRendering;
  package$components.set_shapeRendering_6etju1$ = set_shapeRendering;
  package$components.mSvgIcon_pc4g8s$ = mSvgIcon;
  package$components.MSwipeableDrawerProps = MSwipeableDrawerProps;
  package$components.MSwipeAreaProps = MSwipeAreaProps;
  package$components.mSwipeableDrawer_60u4c9$ = mSwipeableDrawer;
  Object.defineProperty(MSwitchEdge, 'start', {
    get: MSwitchEdge$start_getInstance
  });
  Object.defineProperty(MSwitchEdge, 'end', {
    get: MSwitchEdge$end_getInstance
  });
  package$components.MSwitchEdge = MSwitchEdge;
  package$components.MSwitchProps = MSwitchProps;
  package$components.get_color_npjxvg$ = get_color_7;
  package$components.set_color_ebdw67$ = set_color_7;
  package$components.get_edge_npjxvg$ = get_edge;
  package$components.set_edge_8arkua$ = set_edge;
  package$components.get_size_npjxvg$ = get_size_2;
  package$components.set_size_akgueb$ = set_size_2;
  package$components.mSwitch_j34aln$ = mSwitch;
  package$components.mSwitchWithLabel_sva5px$ = mSwitchWithLabel;
  Object.defineProperty(MTabTextColor, 'secondary', {
    get: MTabTextColor$secondary_getInstance
  });
  Object.defineProperty(MTabTextColor, 'primary', {
    get: MTabTextColor$primary_getInstance
  });
  Object.defineProperty(MTabTextColor, 'inherit', {
    get: MTabTextColor$inherit_getInstance
  });
  package$components.MTabTextColor = MTabTextColor;
  Object.defineProperty(MTabScrollButtons, 'auto', {
    get: MTabScrollButtons$auto_getInstance
  });
  Object.defineProperty(MTabScrollButtons, 'desktop', {
    get: MTabScrollButtons$desktop_getInstance
  });
  Object.defineProperty(MTabScrollButtons, 'on', {
    get: MTabScrollButtons$on_getInstance
  });
  Object.defineProperty(MTabScrollButtons, 'off', {
    get: MTabScrollButtons$off_getInstance
  });
  package$components.MTabScrollButtons = MTabScrollButtons;
  Object.defineProperty(MTabIndicatorColor, 'secondary', {
    get: MTabIndicatorColor$secondary_getInstance
  });
  Object.defineProperty(MTabIndicatorColor, 'primary', {
    get: MTabIndicatorColor$primary_getInstance
  });
  package$components.MTabIndicatorColor = MTabIndicatorColor;
  Object.defineProperty(MTabVariant, 'standard', {
    get: MTabVariant$standard_getInstance
  });
  Object.defineProperty(MTabVariant, 'scrollable', {
    get: MTabVariant$scrollable_getInstance
  });
  Object.defineProperty(MTabVariant, 'fullWidth', {
    get: MTabVariant$fullWidth_getInstance
  });
  package$components.MTabVariant = MTabVariant;
  Object.defineProperty(MTabOrientation, 'horizontal', {
    get: MTabOrientation$horizontal_getInstance
  });
  Object.defineProperty(MTabOrientation, 'vertical', {
    get: MTabOrientation$vertical_getInstance
  });
  package$components.MTabOrientation = MTabOrientation;
  package$components.MTabsProps = MTabsProps;
  package$components.get_indicatorColor_koi52q$ = get_indicatorColor;
  package$components.set_indicatorColor_ofq5h6$ = set_indicatorColor;
  package$components.get_orientation_koi52q$ = get_orientation_1;
  package$components.set_orientation_xby882$ = set_orientation_1;
  package$components.get_scrollButtons_koi52q$ = get_scrollButtons;
  package$components.set_scrollButtons_ksjcea$ = set_scrollButtons;
  package$components.get_textColor_koi52q$ = get_textColor;
  package$components.set_textColor_wgf29o$ = set_textColor;
  package$components.get_variant_koi52q$ = get_variant_8;
  package$components.set_variant_rjwihf$ = set_variant_8;
  package$components.mTabs_59o4ug$ = mTabs;
  package$components.MTabProps = MTabProps;
  package$components.mTab_6u6box$ = mTab;
  package$components.mTab_oaz52e$ = mTab_0;
  package$components.MTextAreaAutosizeProps = MTextAreaAutosizeProps;
  package$components.mTextAreaAutosize_8l8q5d$ = mTextAreaAutosize;
  Object.defineProperty(MTextFieldColor, 'primary', {
    get: MTextFieldColor$primary_getInstance
  });
  Object.defineProperty(MTextFieldColor, 'secondary', {
    get: MTextFieldColor$secondary_getInstance
  });
  package$components.MTextFieldColor = MTextFieldColor;
  package$components.MTextFieldProps = MTextFieldProps;
  package$components.get_color_o9r2hx$ = get_color_8;
  package$components.set_color_3vzz7w$ = set_color_8;
  package$components.mTextField_b9u9i0$ = mTextField;
  package$components.mTextFieldMultiLine_rv3vv5$ = mTextFieldMultiLine;
  package$components.mTextFieldSelect_uyltwc$ = mTextFieldSelect;
  Object.defineProperty(package$components, 'themeContext', {
    get: function () {
      return themeContext;
    }
  });
  package$components.get_spacingUnits_s8ev3n$ = get_spacingUnits;
  package$components.MThemeProvider = MThemeProvider;
  package$components.mThemeProvider_2g26fu$ = mThemeProvider;
  Object.defineProperty(ToolbarVariant, 'regular', {
    get: ToolbarVariant$regular_getInstance
  });
  Object.defineProperty(ToolbarVariant, 'dense', {
    get: ToolbarVariant$dense_getInstance
  });
  package$components.ToolbarVariant = ToolbarVariant;
  package$components.MToolbarProps = MToolbarProps;
  package$components.get_variant_tvlnjr$ = get_variant_9;
  package$components.set_variant_aoei1d$ = set_variant_9;
  package$components.mToolbar_gnqltc$ = mToolbar;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  package$components.mToolbarTitle_hw0qe1$ = mToolbarTitle;
  Object.defineProperty(TooltipPlacement, 'bottomEnd', {
    get: TooltipPlacement$bottomEnd_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'bottomStart', {
    get: TooltipPlacement$bottomStart_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'bottom', {
    get: TooltipPlacement$bottom_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'leftEnd', {
    get: TooltipPlacement$leftEnd_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'leftStart', {
    get: TooltipPlacement$leftStart_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'left', {
    get: TooltipPlacement$left_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'rightEnd', {
    get: TooltipPlacement$rightEnd_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'rightStart', {
    get: TooltipPlacement$rightStart_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'right', {
    get: TooltipPlacement$right_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'topEnd', {
    get: TooltipPlacement$topEnd_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'topStart', {
    get: TooltipPlacement$topStart_getInstance
  });
  Object.defineProperty(TooltipPlacement, 'top', {
    get: TooltipPlacement$top_getInstance
  });
  package$components.TooltipPlacement = TooltipPlacement;
  package$components.MTooltipProps = MTooltipProps;
  package$components.get_placement_bjuju7$ = get_placement;
  package$components.set_placement_rcdh4h$ = set_placement;
  package$components.mTooltip_geaisj$ = mTooltip;
  Object.defineProperty(MTypographyAlign, 'inherit', {
    get: MTypographyAlign$inherit_getInstance
  });
  Object.defineProperty(MTypographyAlign, 'left', {
    get: MTypographyAlign$left_getInstance
  });
  Object.defineProperty(MTypographyAlign, 'center', {
    get: MTypographyAlign$center_getInstance
  });
  Object.defineProperty(MTypographyAlign, 'right', {
    get: MTypographyAlign$right_getInstance
  });
  Object.defineProperty(MTypographyAlign, 'justify', {
    get: MTypographyAlign$justify_getInstance
  });
  package$components.MTypographyAlign = MTypographyAlign;
  Object.defineProperty(MTypographyColor, 'initial', {
    get: MTypographyColor$initial_getInstance
  });
  Object.defineProperty(MTypographyColor, 'inherit', {
    get: MTypographyColor$inherit_getInstance
  });
  Object.defineProperty(MTypographyColor, 'primary', {
    get: MTypographyColor$primary_getInstance
  });
  Object.defineProperty(MTypographyColor, 'secondary', {
    get: MTypographyColor$secondary_getInstance
  });
  Object.defineProperty(MTypographyColor, 'textPrimary', {
    get: MTypographyColor$textPrimary_getInstance
  });
  Object.defineProperty(MTypographyColor, 'textSecondary', {
    get: MTypographyColor$textSecondary_getInstance
  });
  Object.defineProperty(MTypographyColor, 'error', {
    get: MTypographyColor$error_getInstance
  });
  package$components.MTypographyColor = MTypographyColor;
  Object.defineProperty(MTypographyVariant, 'h1', {
    get: MTypographyVariant$h1_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'h2', {
    get: MTypographyVariant$h2_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'h3', {
    get: MTypographyVariant$h3_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'h4', {
    get: MTypographyVariant$h4_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'h5', {
    get: MTypographyVariant$h5_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'h6', {
    get: MTypographyVariant$h6_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'subtitle1', {
    get: MTypographyVariant$subtitle1_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'subtitle2', {
    get: MTypographyVariant$subtitle2_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'body1', {
    get: MTypographyVariant$body1_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'body2', {
    get: MTypographyVariant$body2_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'caption', {
    get: MTypographyVariant$caption_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'button', {
    get: MTypographyVariant$button_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'overline', {
    get: MTypographyVariant$overline_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'srOnly', {
    get: MTypographyVariant$srOnly_getInstance
  });
  Object.defineProperty(MTypographyVariant, 'inherit', {
    get: MTypographyVariant$inherit_getInstance
  });
  package$components.MTypographyVariant = MTypographyVariant;
  package$components.MTypographyProps = MTypographyProps;
  package$components.get_align_lqpt6n$ = get_align;
  package$components.set_align_i2spfo$ = set_align;
  package$components.get_color_lqpt6n$ = get_color_9;
  package$components.set_color_i3ya02$ = set_color_9;
  package$components.get_variant_lqpt6n$ = get_variant_10;
  package$components.set_variant_auxbwc$ = set_variant_10;
  package$components.mTypography_7dzlti$ = mTypography;
  var package$accordion = package$components.accordion || (package$components.accordion = {});
  package$accordion.MAccordionProps = MAccordionProps;
  package$accordion.get_transitionComponent_nyv77o$ = get_transitionComponent_1;
  package$accordion.set_transitionComponent_z5j41p$ = set_transitionComponent_1;
  package$accordion.mAccordion_9bge2g$ = mAccordion;
  package$accordion.MAccordionActionsProps = MAccordionActionsProps;
  package$accordion.mAccordionActions_6z5tzx$ = mAccordionActions;
  package$accordion.mAccordionDetails_b0ba2x$ = mAccordionDetails;
  package$accordion.MAccordionSummaryProps = MAccordionSummaryProps;
  package$accordion.mAccordionSummary_cqsh6f$ = mAccordionSummary;
  var package$button = package$components.button || (package$components.button = {});
  package$button.MButtonProps = MButtonProps;
  package$button.get_color_gat6ym$ = get_color_10;
  package$button.set_color_wvpakw$ = set_color_10;
  package$button.get_size_gat6ym$ = get_size_3;
  package$button.set_size_rp8vpe$ = set_size_3;
  package$button.get_variant_gat6ym$ = get_variant_11;
  package$button.set_variant_bfnkgn$ = set_variant_11;
  package$button.mButton_u96fxf$ = mButton;
  package$button.MButtonBaseProps = MButtonBaseProps;
  Object.defineProperty(MButtonSize, 'small', {
    get: MButtonSize$small_getInstance
  });
  Object.defineProperty(MButtonSize, 'medium', {
    get: MButtonSize$medium_getInstance
  });
  Object.defineProperty(MButtonSize, 'large', {
    get: MButtonSize$large_getInstance
  });
  package$button.MButtonSize = MButtonSize;
  Object.defineProperty(MButtonVariant, 'text', {
    get: MButtonVariant$text_getInstance
  });
  Object.defineProperty(MButtonVariant, 'outlined', {
    get: MButtonVariant$outlined_getInstance
  });
  Object.defineProperty(MButtonVariant, 'contained', {
    get: MButtonVariant$contained_getInstance
  });
  package$button.MButtonVariant = MButtonVariant;
  Object.defineProperty(MButtonGroupVariant, 'text', {
    get: MButtonGroupVariant$text_getInstance
  });
  Object.defineProperty(MButtonGroupVariant, 'outlined', {
    get: MButtonGroupVariant$outlined_getInstance
  });
  Object.defineProperty(MButtonGroupVariant, 'contained', {
    get: MButtonGroupVariant$contained_getInstance
  });
  package$button.MButtonGroupVariant = MButtonGroupVariant;
  Object.defineProperty(MButtonGroupOrientation, 'vertical', {
    get: MButtonGroupOrientation$vertical_getInstance
  });
  Object.defineProperty(MButtonGroupOrientation, 'horizontal', {
    get: MButtonGroupOrientation$horizontal_getInstance
  });
  package$button.MButtonGroupOrientation = MButtonGroupOrientation;
  package$button.MButtonGroupProps = MButtonGroupProps;
  package$button.get_color_c2qs01$ = get_color_11;
  package$button.set_color_prm75b$ = set_color_11;
  package$button.get_orientation_c2qs01$ = get_orientation_2;
  package$button.set_orientation_8iq7ch$ = set_orientation_2;
  package$button.get_size_c2qs01$ = get_size_4;
  package$button.set_size_ot4kn5$ = set_size_4;
  package$button.get_variant_c2qs01$ = get_variant_12;
  package$button.set_variant_sfkews$ = set_variant_12;
  package$button.mButtonGroup_tayrff$ = mButtonGroup;
  Object.defineProperty(MFabVariant, 'round', {
    get: MFabVariant$round_getInstance
  });
  Object.defineProperty(MFabVariant, 'extended', {
    get: MFabVariant$extended_getInstance
  });
  package$button.MFabVariant = MFabVariant;
  package$button.MFabProps = MFabProps;
  package$button.get_color_uojxsp$ = get_color_12;
  package$button.set_color_gu2vx1$ = set_color_12;
  package$button.get_size_uojxsp$ = get_size_5;
  package$button.set_size_pzj5sp$ = set_size_5;
  package$button.get_variant_uojxsp$ = get_variant_13;
  package$button.set_variant_a5av8$ = set_variant_13;
  package$button.mFab_onwvx0$ = mFab;
  package$button.mFab_nktpjf$ = mFab_0;
  Object.defineProperty(MIconButtonSize, 'small', {
    get: MIconButtonSize$small_getInstance
  });
  Object.defineProperty(MIconButtonSize, 'medium', {
    get: MIconButtonSize$medium_getInstance
  });
  package$button.MIconButtonSize = MIconButtonSize;
  Object.defineProperty(MIconEdge, 'start', {
    get: MIconEdge$start_getInstance
  });
  Object.defineProperty(MIconEdge, 'end', {
    get: MIconEdge$end_getInstance
  });
  package$button.MIconEdge = MIconEdge;
  package$button.MIconButtonProps = MIconButtonProps;
  package$button.get_color_hq0rft$ = get_color_13;
  package$button.set_color_3z66hj$ = set_color_13;
  package$button.get_edge_hq0rft$ = get_edge_0;
  package$button.set_edge_2b9d7p$ = set_edge_0;
  package$button.get_size_hq0rft$ = get_size_6;
  package$button.set_size_nfyu34$ = set_size_6;
  package$button.mIconButton_ny9671$ = mIconButton;
  var package$card = package$components.card || (package$components.card = {});
  package$card.MCardProps = MCardProps;
  package$card.mCard_aegkul$ = mCard;
  package$card.mCardActionArea_bm2qhs$ = mCardActionArea;
  package$card.MCardActionsProps = MCardActionsProps;
  package$card.mCardActions_mx4047$ = mCardActions;
  package$card.MCardContentProps = MCardContentProps;
  package$card.mCardContent_6njh8n$ = mCardContent;
  package$card.MCardHeaderProps = MCardHeaderProps;
  package$card.mCardHeader_g8m6la$ = mCardHeader;
  package$card.mCardHeader_teifvr$ = mCardHeader_0;
  package$card.MCardMediaProps = MCardMediaProps;
  package$card.mCardMedia_6ug0o0$ = mCardMedia;
  Object.defineProperty(DialogScroll, 'paper', {
    get: DialogScroll$paper_getInstance
  });
  Object.defineProperty(DialogScroll, 'body', {
    get: DialogScroll$body_getInstance
  });
  var package$dialog = package$components.dialog || (package$components.dialog = {});
  package$dialog.DialogScroll = DialogScroll;
  package$dialog.MDialogProps = MDialogProps;
  package$dialog.get_scroll_l6etsm$ = get_scroll;
  package$dialog.set_scroll_swcowl$ = set_scroll;
  package$dialog.get_transitionComponent_l6etsm$ = get_transitionComponent_2;
  package$dialog.set_transitionComponent_nmxob3$ = set_transitionComponent_2;
  package$dialog.get_transitionDuration_l6etsm$ = get_transitionDuration_3;
  package$dialog.set_transitionDuration_603lls$ = set_transitionDuration_3;
  package$dialog.mDialog_xhedjz$ = mDialog;
  package$dialog.MDialogActionsProps = MDialogActionsProps;
  package$dialog.mDialogActions_qnzi1d$ = mDialogActions;
  package$dialog.MDialogContentProps = MDialogContentProps;
  package$dialog.mDialogContent_2uytm3$ = mDialogContent;
  package$dialog.mDialogContentText_b8lid7$ = mDialogContentText;
  package$dialog.MDialogTitleProps = MDialogTitleProps;
  package$dialog.mDialogTitle_ylosbh$ = mDialogTitle;
  Object.defineProperty(ModalOnCloseReason, 'escapeKeyDown', {
    get: ModalOnCloseReason$escapeKeyDown_getInstance
  });
  Object.defineProperty(ModalOnCloseReason, 'backdropClick', {
    get: ModalOnCloseReason$backdropClick_getInstance
  });
  package$dialog.ModalOnCloseReason = ModalOnCloseReason;
  package$dialog.MModalProps = MModalProps;
  package$dialog.get_onClose_ne6rc9$ = get_onClose_0;
  package$dialog.set_onClose_lexkn7$ = set_onClose_0;
  var package$expansionpanel = package$components.expansionpanel || (package$components.expansionpanel = {});
  package$expansionpanel.MExpansionPanelProps = MExpansionPanelProps;
  package$expansionpanel.mExpansionPanel_2s8yu5$ = mExpansionPanel;
  package$expansionpanel.MExpansionPanelActionsProps = MExpansionPanelActionsProps;
  package$expansionpanel.mExpansionPanelActions_npjx9h$ = mExpansionPanelActions;
  package$expansionpanel.mExpansionPanelDetails_b0ba2x$ = mExpansionPanelDetails;
  package$expansionpanel.MExpansionPanelSummaryProps = MExpansionPanelSummaryProps;
  package$expansionpanel.mExpansionPanelSummary_lx1yy7$ = mExpansionPanelSummary;
  Object.defineProperty(MFormControlVariant, 'standard', {
    get: MFormControlVariant$standard_getInstance
  });
  Object.defineProperty(MFormControlVariant, 'outlined', {
    get: MFormControlVariant$outlined_getInstance
  });
  Object.defineProperty(MFormControlVariant, 'filled', {
    get: MFormControlVariant$filled_getInstance
  });
  var package$form = package$components.form || (package$components.form = {});
  package$form.MFormControlVariant = MFormControlVariant;
  Object.defineProperty(MFormControlComponent, 'div', {
    get: MFormControlComponent$div_getInstance
  });
  Object.defineProperty(MFormControlComponent, 'fieldSet', {
    get: MFormControlComponent$fieldSet_getInstance
  });
  package$form.MFormControlComponent = MFormControlComponent;
  Object.defineProperty(MFormControlMargin, 'none', {
    get: MFormControlMargin$none_getInstance
  });
  Object.defineProperty(MFormControlMargin, 'dense', {
    get: MFormControlMargin$dense_getInstance
  });
  Object.defineProperty(MFormControlMargin, 'normal', {
    get: MFormControlMargin$normal_getInstance
  });
  package$form.MFormControlMargin = MFormControlMargin;
  package$form.MFormControlProps = MFormControlProps;
  package$form.get_margin_e24lfr$ = get_margin_0;
  package$form.set_margin_jutv4f$ = set_margin_0;
  package$form.get_component_e24lfr$ = get_component;
  package$form.set_component_9xolvo$ = set_component;
  package$form.get_variant_e24lfr$ = get_variant_14;
  package$form.set_variant_xox4sc$ = set_variant_14;
  package$form.mFormControl_kpnx5w$ = mFormControl;
  Object.defineProperty(MLabelPlacement, 'end', {
    get: MLabelPlacement$end_getInstance
  });
  Object.defineProperty(MLabelPlacement, 'start', {
    get: MLabelPlacement$start_getInstance
  });
  Object.defineProperty(MLabelPlacement, 'top', {
    get: MLabelPlacement$top_getInstance
  });
  Object.defineProperty(MLabelPlacement, 'bottom', {
    get: MLabelPlacement$bottom_getInstance
  });
  package$form.MLabelPlacement = MLabelPlacement;
  package$form.MFormControlLabelProps = MFormControlLabelProps;
  package$form.get_labelPlacement_7t4omf$ = get_labelPlacement;
  package$form.set_labelPlacement_cq6d1z$ = set_labelPlacement;
  package$form.mFormControlLabel_9i9y15$ = mFormControlLabel;
  package$form.MFormGroupProps = MFormGroupProps;
  package$form.mFormGroup_g5fns6$ = mFormGroup;
  package$form.MFormHelperTextProps = MFormHelperTextProps;
  package$form.get_margin_h0e5c3$ = get_margin_1;
  package$form.set_margin_afsgzr$ = set_margin_1;
  package$form.get_variant_h0e5c3$ = get_variant_15;
  package$form.set_variant_xk0lmg$ = set_variant_15;
  package$form.mFormHelperText_b7jds0$ = mFormHelperText;
  package$form.MFormLabelProps = MFormLabelProps;
  package$form.mFormLabel_gp500h$ = mFormLabel;
  Object.defineProperty(MLabelMargin, 'dense', {
    get: MLabelMargin$dense_getInstance
  });
  package$form.MLabelMargin = MLabelMargin;
  var package$gridlist = package$components.gridlist || (package$components.gridlist = {});
  package$gridlist.MGridListProps = MGridListProps;
  package$gridlist.get_cellHeight_lktruq$ = get_cellHeight;
  package$gridlist.set_cellHeight_m5d25g$ = set_cellHeight;
  package$gridlist.mGridList_wratru$ = mGridList;
  package$gridlist.MGridListTileProps = MGridListTileProps;
  package$gridlist.mGridListTile_k5j60c$ = mGridListTile;
  Object.defineProperty(MActionPosition, 'left', {
    get: MActionPosition$left_getInstance
  });
  Object.defineProperty(MActionPosition, 'right', {
    get: MActionPosition$right_getInstance
  });
  package$gridlist.MActionPosition = MActionPosition;
  Object.defineProperty(MTitlePosition, 'top', {
    get: MTitlePosition$top_getInstance
  });
  Object.defineProperty(MTitlePosition, 'bottom', {
    get: MTitlePosition$bottom_getInstance
  });
  package$gridlist.MTitlePosition = MTitlePosition;
  package$gridlist.MGridListTileBarProps = MGridListTileBarProps;
  package$gridlist.get_actionPosition_ph2ben$ = get_actionPosition;
  package$gridlist.set_actionPosition_44pswv$ = set_actionPosition;
  package$gridlist.get_titlePosition_ph2ben$ = get_titlePosition;
  package$gridlist.set_titlePosition_hdakch$ = set_titlePosition;
  package$gridlist.mGridListTileBar_w4puxh$ = mGridListTileBar;
  package$gridlist.mGridListTileBar_if455b$ = mGridListTileBar_0;
  var package$input = package$components.input || (package$components.input = {});
  package$input.MFilledInputProps = MFilledInputProps;
  package$input.mFilledInput_gq4arg$ = mFilledInput;
  package$input.MInputProps = MInputProps;
  package$input.mInput_q8l8tt$ = mInput;
  Object.defineProperty(MInputAdornmentPosition, 'start', {
    get: MInputAdornmentPosition$start_getInstance
  });
  Object.defineProperty(MInputAdornmentPosition, 'end', {
    get: MInputAdornmentPosition$end_getInstance
  });
  package$input.MInputAdornmentPosition = MInputAdornmentPosition;
  package$input.MInputAdornmentProps = MInputAdornmentProps;
  package$input.get_position_lpnoxk$ = get_position_0;
  package$input.set_position_7vddud$ = set_position_0;
  package$input.get_variant_lpnoxk$ = get_variant_16;
  package$input.set_variant_q8f81g$ = set_variant_16;
  package$input.mInputAdornment_1zmzkm$ = mInputAdornment;
  Object.defineProperty(MInputMargin, 'dense', {
    get: MInputMargin$dense_getInstance
  });
  Object.defineProperty(MInputMargin, 'none', {
    get: MInputMargin$none_getInstance
  });
  package$input.MInputMargin = MInputMargin;
  package$input.MInputBaseNoOnChangeProps = MInputBaseNoOnChangeProps;
  package$input.MInputBaseProps = MInputBaseProps;
  package$input.get_margin_noz68j$ = get_margin_2;
  package$input.set_margin_4kt63d$ = set_margin_2;
  package$input.get_type_noz68j$ = get_type;
  package$input.set_type_hungwr$ = set_type;
  package$input.MInputLabelProps = MInputLabelProps;
  package$input.get_margin_dgglo6$ = get_margin_3;
  package$input.set_margin_2n5jaq$ = set_margin_3;
  package$input.get_variant_dgglo6$ = get_variant_17;
  package$input.set_variant_35nttt$ = set_variant_17;
  package$input.mInputLabel_ma4dms$ = mInputLabel;
  package$input.MOutlinedInputProps = MOutlinedInputProps;
  package$input.mOutlinedInput_vsqdbv$ = mOutlinedInput;
  Object.defineProperty(MAlertVariant, 'filled', {
    get: MAlertVariant$filled_getInstance
  });
  Object.defineProperty(MAlertVariant, 'outlined', {
    get: MAlertVariant$outlined_getInstance
  });
  Object.defineProperty(MAlertVariant, 'standard', {
    get: MAlertVariant$standard_getInstance
  });
  var package$lab = package$components.lab || (package$components.lab = {});
  var package$alert = package$lab.alert || (package$lab.alert = {});
  package$alert.MAlertVariant = MAlertVariant;
  Object.defineProperty(MAlertSeverity, 'error', {
    get: MAlertSeverity$error_getInstance
  });
  Object.defineProperty(MAlertSeverity, 'info', {
    get: MAlertSeverity$info_getInstance
  });
  Object.defineProperty(MAlertSeverity, 'success', {
    get: MAlertSeverity$success_getInstance
  });
  Object.defineProperty(MAlertSeverity, 'warning', {
    get: MAlertSeverity$warning_getInstance
  });
  package$alert.MAlertSeverity = MAlertSeverity;
  package$alert.MAlertProps = MAlertProps;
  package$alert.get_variant_sxehml$ = get_variant_18;
  package$alert.set_variant_ptkp05$ = set_variant_18;
  package$alert.get_severity_sxehml$ = get_severity;
  package$alert.set_severity_2ydbzt$ = set_severity;
  package$alert.mAlert_tnrkql$ = mAlert;
  package$alert.mAlert_n2c5jp$ = mAlert_0;
  package$alert.mAlertTitle_iijpya$ = mAlertTitle;
  var package$list = package$components.list || (package$components.list = {});
  package$list.MListProps = MListProps;
  package$list.mList_l3a0a3$ = mList;
  package$list.mList_dha85t$ = mList_0;
  Object.defineProperty(package$list, 'listItemComponent', {
    get: function () {
      return listItemComponent;
    }
  });
  Object.defineProperty(MListItemAlignItems, 'flexStart', {
    get: MListItemAlignItems$flexStart_getInstance
  });
  Object.defineProperty(MListItemAlignItems, 'center', {
    get: MListItemAlignItems$center_getInstance
  });
  package$list.MListItemAlignItems = MListItemAlignItems;
  package$list.MListItemProps = MListItemProps;
  package$list.get_alignItems_bjg64p$ = get_alignItems_0;
  package$list.set_alignItems_wtgx6a$ = set_alignItems_0;
  package$list.mListItem_so7yty$ = mListItem;
  package$list.mListItemWithIcon_vkxnor$ = mListItemWithIcon;
  package$list.mListItemWithAvatar_8egyh0$ = mListItemWithAvatar;
  package$list.mListItem_xi4d7t$ = mListItem_0;
  package$list.mListItemAvatar_c4d8ff$ = mListItemAvatar;
  package$list.mListItemAvatar_6xzu70$ = mListItemAvatar_0;
  Object.defineProperty(package$list, 'listItemIconComponent', {
    get: function () {
      return listItemIconComponent;
    }
  });
  package$list.mListItemIcon_g81hzm$ = mListItemIcon;
  Object.defineProperty(package$list, 'listItemSecondaryActionComponent', {
    get: function () {
      return listItemSecondaryActionComponent;
    }
  });
  package$list.mListItemSecondaryAction_c4d8ff$ = mListItemSecondaryAction;
  Object.defineProperty(package$list, 'listItemTextComponent', {
    get: function () {
      return listItemTextComponent;
    }
  });
  package$list.MListItemTextProps = MListItemTextProps;
  package$list.mListItemText_fob8lf$ = mListItemText;
  package$list.mListItemText_o7r8tc$ = mListItemText_0;
  Object.defineProperty(package$list, 'listSubheaderComponent', {
    get: function () {
      return listSubheaderComponent;
    }
  });
  Object.defineProperty(MListSubheaderColor, 'default', {
    get: MListSubheaderColor$default_getInstance
  });
  Object.defineProperty(MListSubheaderColor, 'primary', {
    get: MListSubheaderColor$primary_getInstance
  });
  Object.defineProperty(MListSubheaderColor, 'inherit', {
    get: MListSubheaderColor$inherit_getInstance
  });
  package$list.MListSubheaderColor = MListSubheaderColor;
  package$list.MListSubheaderProps = MListSubheaderProps;
  package$list.get_color_fvzb4b$ = get_color_14;
  package$list.set_color_av0k9q$ = set_color_14;
  package$list.mListSubheader_p8g662$ = mListSubheader;
  package$list.mListSubheader_5s2u83$ = mListSubheader_0;
  Object.defineProperty(MenuOnCloseReason, 'escapeKeyDown', {
    get: MenuOnCloseReason$escapeKeyDown_getInstance
  });
  Object.defineProperty(MenuOnCloseReason, 'backdropClick', {
    get: MenuOnCloseReason$backdropClick_getInstance
  });
  Object.defineProperty(MenuOnCloseReason, 'tabKeyDown', {
    get: MenuOnCloseReason$tabKeyDown_getInstance
  });
  var package$menu = package$components.menu || (package$components.menu = {});
  package$menu.MenuOnCloseReason = MenuOnCloseReason;
  Object.defineProperty(MMenuVariant, 'menu', {
    get: MMenuVariant$menu_getInstance
  });
  Object.defineProperty(MMenuVariant, 'selectedMenu', {
    get: MMenuVariant$selectedMenu_getInstance
  });
  package$menu.MMenuVariant = MMenuVariant;
  package$menu.MMenuProps = MMenuProps;
  package$menu.get_variant_wntfs8$ = get_variant_19;
  package$menu.set_variant_vtorsk$ = set_variant_19;
  package$menu.get_onClose_wntfs8$ = get_onClose_1;
  package$menu.set_onClose_v1gbf5$ = set_onClose_1;
  package$menu.mMenu_nvdpxa$ = mMenu;
  package$menu.MMenuItemProps = MMenuItemProps;
  package$menu.mMenuItem_565v6b$ = mMenuItem;
  package$menu.mMenuItemWithIcon_bfb6cm$ = mMenuItemWithIcon;
  package$menu.mMenuItemWithAvatar_m1yelh$ = mMenuItemWithAvatar;
  package$menu.mMenuItem_prmj56$ = mMenuItem_0;
  package$menu.MMenuListProps = MMenuListProps;
  package$menu.mMenuList_ifd8s6$ = mMenuList;
  Object.defineProperty(Breakpoint, 'xs', {
    get: Breakpoint$xs_getInstance
  });
  Object.defineProperty(Breakpoint, 'sm', {
    get: Breakpoint$sm_getInstance
  });
  Object.defineProperty(Breakpoint, 'md', {
    get: Breakpoint$md_getInstance
  });
  Object.defineProperty(Breakpoint, 'lg', {
    get: Breakpoint$lg_getInstance
  });
  Object.defineProperty(Breakpoint, 'xl', {
    get: Breakpoint$xl_getInstance
  });
  var package$styles = package$components.styles || (package$components.styles = {});
  package$styles.Breakpoint = Breakpoint;
  package$styles.up_qb8ngk$ = up;
  package$styles.down_qb8ngk$ = down;
  package$styles.between_s50uwp$ = between;
  package$styles.only_qb8ngk$ = only;
  package$styles.width_qb8ngk$ = width;
  package$styles.createMuiTheme_m0ai6n$ = createMuiTheme;
  Object.defineProperty(package$styles, 'stylesProviderComponent', {
    get: function () {
      return stylesProviderComponent;
    }
  });
  package$styles.MStylesProviderProps = MStylesProviderProps;
  package$styles.mStylesProvider_smegiv$ = mStylesProvider;
  package$styles.mStylesProvider_8v6z4q$ = mStylesProvider_0;
  package$styles.mStylesProvider_a4vmm3$ = mStylesProvider_1;
  var package$table = package$components.table || (package$components.table = {});
  package$table.MTableProps = MTableProps;
  package$table.get_padding_lxj2po$ = get_padding;
  package$table.set_padding_v18lo6$ = set_padding;
  package$table.get_size_lxj2po$ = get_size_7;
  package$table.set_size_29sh38$ = set_size_7;
  package$table.mTable_gwwvai$ = mTable;
  package$table.MTableBodyProps = MTableBodyProps;
  package$table.mTableBody_358dik$ = mTableBody;
  Object.defineProperty(MTableCellPadding, 'default', {
    get: MTableCellPadding$default_getInstance
  });
  Object.defineProperty(MTableCellPadding, 'checkbox', {
    get: MTableCellPadding$checkbox_getInstance
  });
  Object.defineProperty(MTableCellPadding, 'none', {
    get: MTableCellPadding$none_getInstance
  });
  package$table.MTableCellPadding = MTableCellPadding;
  Object.defineProperty(MTableCellSortDirection, 'asc', {
    get: MTableCellSortDirection$asc_getInstance
  });
  Object.defineProperty(MTableCellSortDirection, 'desc', {
    get: MTableCellSortDirection$desc_getInstance
  });
  Object.defineProperty(MTableCellSortDirection, 'False', {
    get: MTableCellSortDirection$False_getInstance
  });
  package$table.MTableCellSortDirection = MTableCellSortDirection;
  Object.defineProperty(MTableCellAlign, 'inherit', {
    get: MTableCellAlign$inherit_getInstance
  });
  Object.defineProperty(MTableCellAlign, 'left', {
    get: MTableCellAlign$left_getInstance
  });
  Object.defineProperty(MTableCellAlign, 'center', {
    get: MTableCellAlign$center_getInstance
  });
  Object.defineProperty(MTableCellAlign, 'right', {
    get: MTableCellAlign$right_getInstance
  });
  Object.defineProperty(MTableCellAlign, 'justify', {
    get: MTableCellAlign$justify_getInstance
  });
  package$table.MTableCellAlign = MTableCellAlign;
  Object.defineProperty(MTableCellVariant, 'head', {
    get: MTableCellVariant$head_getInstance
  });
  Object.defineProperty(MTableCellVariant, 'body', {
    get: MTableCellVariant$body_getInstance
  });
  Object.defineProperty(MTableCellVariant, 'footer', {
    get: MTableCellVariant$footer_getInstance
  });
  package$table.MTableCellVariant = MTableCellVariant;
  Object.defineProperty(MTableCellSize, 'small', {
    get: MTableCellSize$small_getInstance
  });
  Object.defineProperty(MTableCellSize, 'medium', {
    get: MTableCellSize$medium_getInstance
  });
  package$table.MTableCellSize = MTableCellSize;
  package$table.MTableCellProps = MTableCellProps;
  package$table.get_align_qwgf7m$ = get_align_0;
  package$table.set_align_hnh4mg$ = set_align_0;
  package$table.get_padding_qwgf7m$ = get_padding_0;
  package$table.set_padding_axdcss$ = set_padding_0;
  package$table.get_size_qwgf7m$ = get_size_8;
  package$table.set_size_nhowzi$ = set_size_8;
  package$table.get_sortDirection_qwgf7m$ = get_sortDirection;
  package$table.set_sortDirection_yezba4$ = set_sortDirection;
  package$table.get_variant_qwgf7m$ = get_variant_20;
  package$table.set_variant_6bofvs$ = set_variant_20;
  package$table.mTableCell_5irf8p$ = mTableCell;
  package$table.MTableContainerProps = MTableContainerProps;
  package$table.mTableContainer_rgfihw$ = mTableContainer;
  package$table.MTableFooterProps = MTableFooterProps;
  package$table.mTableFooter_dzj9j9$ = mTableFooter;
  package$table.MTableHeadProps = MTableHeadProps;
  package$table.mTableHead_loyh3q$ = mTableHead;
  package$table.MTablePaginationProps = MTablePaginationProps;
  package$table.mTablePagination_7egp4k$ = mTablePagination;
  package$table.MTableRowProps = MTableRowProps;
  package$table.mTableRow_p3gcqy$ = mTableRow;
  Object.defineProperty(MTableSortLabelDirection, 'asc', {
    get: MTableSortLabelDirection$asc_getInstance
  });
  Object.defineProperty(MTableSortLabelDirection, 'desc', {
    get: MTableSortLabelDirection$desc_getInstance
  });
  package$table.MTableSortLabelDirection = MTableSortLabelDirection;
  package$table.MTableSortLabelProps = MTableSortLabelProps;
  package$table.get_direction_40d6tk$ = get_direction_0;
  package$table.set_direction_v5qpgi$ = set_direction_0;
  package$table.mTableSortLabel_alosla$ = mTableSortLabel;
  package$table.mTableSortLabel_qdurm8$ = mTableSortLabel_0;
  var package$transitions = package$components.transitions || (package$components.transitions = {});
  package$transitions.get_timeout_ljdiwj$ = get_timeout;
  package$transitions.set_timeout_wucyqx$ = set_timeout;
  package$transitions.mCollapse_k56art$ = mCollapse;
  package$transitions.TransitionDuration = TransitionDuration;
  package$transitions.TransitionDurationWithAuto = TransitionDurationWithAuto;
  package$transitions.EnterExitTransitionDuration = EnterExitTransitionDuration;
  package$transitions.SimpleTransitionDuration = SimpleTransitionDuration;
  package$transitions.AutoTransitionDuration = AutoTransitionDuration;
  package$transitions.get_timeout_s76ckc$ = get_timeout_0;
  package$transitions.set_timeout_wlzho1$ = set_timeout_0;
  package$transitions.mFade_2wgvii$ = mFade;
  package$transitions.get_timeout_r06a2b$ = get_timeout_1;
  package$transitions.set_timeout_el91x9$ = set_timeout_1;
  package$transitions.mGrow_jnkc54$ = mGrow;
  Object.defineProperty(SlideTransitionDirection, 'left', {
    get: SlideTransitionDirection$left_getInstance
  });
  Object.defineProperty(SlideTransitionDirection, 'right', {
    get: SlideTransitionDirection$right_getInstance
  });
  Object.defineProperty(SlideTransitionDirection, 'up', {
    get: SlideTransitionDirection$up_getInstance
  });
  Object.defineProperty(SlideTransitionDirection, 'down', {
    get: SlideTransitionDirection$down_getInstance
  });
  package$transitions.SlideTransitionDirection = SlideTransitionDirection;
  package$transitions.get_timeout_29c1jl$ = get_timeout_2;
  package$transitions.set_timeout_ho524c$ = set_timeout_2;
  package$transitions.mSlide_nc209s$ = mSlide;
  package$transitions.TransitionDurationDelegate = TransitionDurationDelegate;
  package$transitions.TransitionDurationDelegateNullable = TransitionDurationDelegateNullable;
  package$transitions.TransitionDurationWithAutoDelegate = TransitionDurationWithAutoDelegate;
  package$transitions.TransitionComponentDelegate = TransitionComponentDelegate;
  package$transitions.get_timeout_ktbsul$ = get_timeout_3;
  package$transitions.set_timeout_3bc83s$ = set_timeout_3;
  package$transitions.mZoom_wkeelp$ = mZoom;
  appBarComponent = $module$_material_ui_core_AppBar.default;
  color = new EnumPropToString(MAppBarColor$values());
  position = new EnumPropToString(MAppBarPosition$values());
  avatarComponent = $module$_material_ui_core_Avatar.default;
  variant = new EnumPropToStringNullable(MAvatarVariant$values());
  backdropComponent = $module$_material_ui_core_Backdrop.default;
  transitionDuration = new TransitionDurationDelegate();
  badgeComponent = $module$_material_ui_core_Badge.default;
  anchorOriginHorizontal = new EnumPropToString(MBadgeAnchorOriginHorizontal$values(), 'anchorOrigin', 'horizontal');
  anchorOriginVertical = new EnumPropToString(MBadgeAnchorOriginVertical$values(), 'anchorOrigin', 'vertical');
  color_0 = new EnumPropToString(MBadgeColor$values());
  overlap = new EnumPropToString(MBadgeOverlap$values());
  variant_0 = new EnumPropToString(MBadgeVariant$values());
  bottomNavigationComponent = $module$_material_ui_core_BottomNavigation.default;
  bottomNavigationActionComponent = $module$_material_ui_core_BottomNavigationAction.default;
  breadcrumbsComponent = $module$_material_ui_core_Breadcrumbs.default;
  checkboxComponent = $module$_material_ui_core_Checkbox.default;
  color_1 = new EnumPropToString(MOptionColor$values());
  chipComponent = $module$_material_ui_core_Chip.default;
  color_2 = new EnumPropToString(MChipColor$values());
  size = new EnumPropToString(MChipSize$values());
  variant_1 = new EnumPropToString(MChipVariant$values());
  circularProgressComponent = $module$_material_ui_core_CircularProgress.default;
  color_3 = new EnumPropToString(MCircularProgressColor$values());
  variant_2 = new EnumPropToString(MCircularProgressVariant$values());
  clickAwayListenerComponent = $module$_material_ui_core_ClickAwayListener.default;
  containerComponent = $module$_material_ui_core_Container.default;
  cssBaselineComponent = $module$_material_ui_core_CssBaseline.default;
  dividerComponent = $module$_material_ui_core_Divider.default;
  orientation = new EnumPropToString(MDividerOrientation$values());
  variant_3 = new EnumPropToString(MDividerVariant$values());
  drawerComponent = $module$_material_ui_core_Drawer.default;
  anchor = new EnumPropToString(MDrawerAnchor$values());
  transitionDuration_0 = new TransitionDurationDelegateNullable();
  variant_4 = new EnumPropToString(MDrawerVariant$values());
  gridComponent = $module$_material_ui_core_Grid.default;
  alignContent = new EnumPropToString(MGridAlignContent$values());
  alignItems = new EnumPropToString(MGridAlignItems$values());
  direction = new EnumPropToString(MGridDirection$values());
  justify = new EnumPropToString(MGridJustify$values());
  lg = new GridSizeDelegate();
  md = new GridSizeDelegate();
  sm = new GridSizeDelegate();
  spacing = new GridSpacingDelegate();
  wrap = new EnumPropToString(MGridWrap$values());
  xl = new GridSizeDelegate();
  xs = new GridSizeDelegate();
  hiddenComponent = $module$_material_ui_core_Hidden.default;
  initialWidth = new EnumPropToStringNullable(Breakpoint$values());
  implementation = new EnumPropToString(MHiddenImplementation$values());
  iconComponent = $module$_material_ui_core_Icon.default;
  color_4 = new EnumPropToString(MIconColor$values());
  fontSize = new EnumPropToString(MIconFontSize$values());
  linearProgressComponent = $module$_material_ui_core_LinearProgress.default;
  color_5 = new EnumPropToString(MLinearProgressColor$values());
  variant_5 = new EnumPropToString(MLinearProgressVariant$values());
  linkComponent = $module$_material_ui_core_Link.default;
  underline = new EnumPropToString(MLinkUnderline$values());
  muiThemeProviderComponent = $module$_material_ui_core_styles.ThemeProvider;
  nativeSelectComponent = $module$_material_ui_core_NativeSelect.default;
  margin = new EnumPropToStringNullable(MInputMargin$values());
  variant_6 = new EnumPropToString(MFormControlVariant$values());
  paperComponent = $module$_material_ui_core_Paper.default;
  variant_7 = new EnumPropToString(MPaperVariant$values());
  popoverComponent = $module$_material_ui_core_Popover.default;
  anchorOriginHorizontal_0 = new EnumPropToStringNullable(MPopoverHorizontalPosition$values(), 'anchorOrigin', 'horizontal');
  anchorOriginVertical_0 = new EnumPropToStringNullable(MPopoverVerticalPosition$values(), 'anchorOrigin', 'vertical');
  anchorOriginHorizontalNumeric = new ChildPropDelegateNullable('anchorOrigin', 'horizontal');
  anchorOriginVerticalNumeric = new ChildPropDelegateNullable('anchorOrigin', 'vertical');
  anchorPositionLeft = new ChildPropDelegateNullable('anchorPosition', 'left');
  anchorPositionTop = new ChildPropDelegateNullable('anchorPosition', 'top');
  anchorReference = new EnumPropToString(MPopoverAnchorRef$values());
  transformOriginHorizontal = new EnumPropToStringNullable(MPopoverHorizontalPosition$values(), 'transformOrigin', 'horizontal');
  transformOriginVertical = new EnumPropToStringNullable(MPopoverVerticalPosition$values(), 'transformOrigin', 'vertical');
  transformOriginHorizontalNumeric = new ChildPropDelegateNullable('TransformOrigin', 'horizontal');
  transformOriginVerticalNumeric = new ChildPropDelegateNullable('TransformOrigin', 'vertical');
  transitionComponent = new TransitionComponentDelegate();
  transitionDuration_1 = new TransitionDurationWithAutoDelegate();
  radioComponent = $module$_material_ui_core_Radio.default;
  color_6 = new EnumPropToString(MOptionColor$values());
  size_0 = new EnumPropToString(MIconButtonSize$values());
  radioGroupComponent = $module$_material_ui_core_RadioGroup.default;
  selectComponent = $module$_material_ui_core_Select.default;
  sliderComponent = $module$_material_ui_core_Slider.default;
  orientation_0 = new EnumPropToString(MSliderOrientation$values());
  valueLabelDisplay = new EnumPropToString(MSliderValueLabelDisplay$values());
  snackbarComponent = $module$_material_ui_core_Snackbar.default;
  anchorOriginHorizontal_1 = new EnumPropToStringNullable(MSnackbarHorizAnchor$values(), 'anchorOrigin', 'horizontal');
  anchorOriginVertical_1 = new EnumPropToStringNullable(MSnackbarVertAnchor$values(), 'anchorOrigin', 'vertical');
  onClose = new OnClosePropWithReasonDelegate(MSnackbarOnCloseReason$values());
  transitionComponent_0 = new TransitionComponentDelegate();
  transitionDuration_2 = new TransitionDurationDelegate();
  component = $module$_material_ui_core_SvgIcon.default;
  shapeRendering = new EnumPropToStringNullable(SvgShapeRendering$values());
  swipeableDrawerComponent = $module$_material_ui_core_SwipeableDrawer.default;
  switchComponent = $module$_material_ui_core_Switch.default;
  color_7 = new EnumPropToString(MOptionColor$values());
  edge = new EnumPropToString(MSwitchEdge$values());
  size_1 = new EnumPropToString(MIconButtonSize$values());
  tabsComponent = $module$_material_ui_core_Tabs.default;
  indicatorColor = new EnumPropToString(MTabIndicatorColor$values());
  orientation_1 = new EnumPropToString(MTabOrientation$values());
  scrollButtons = new EnumPropToString(MTabScrollButtons$values());
  textColor = new EnumPropToString(MTabTextColor$values());
  variant_8 = new EnumPropToString(MTabVariant$values());
  tabComponent = $module$_material_ui_core_Tab.default;
  textAreaAutosizeComponent = $module$_material_ui_core_TextareaAutosize.default;
  textFieldComponent = $module$_material_ui_core_TextField.default;
  color_8 = new EnumPropToString(MTextFieldColor$values());
  themeOptions = {typography: {useNextVariants: true}};
  defaultTheme = createMuiTheme(themeOptions);
  themeContext = createContext(defaultTheme);
  toolbarComponent = $module$_material_ui_core_Toolbar.default;
  variant_9 = new EnumPropToString(ToolbarVariant$values());
  tooltipComponent = $module$_material_ui_core_Tooltip.default;
  placement = new EnumPropToString(TooltipPlacement$values());
  typographyComponent = $module$_material_ui_core_Typography.default;
  align = new EnumPropToString(MTypographyAlign$values());
  color_9 = new EnumPropToString(MTypographyColor$values());
  variant_10 = new EnumPropToString(MTypographyVariant$values());
  component_0 = $module$_material_ui_core_Accordion.default;
  transitionComponent_1 = new TransitionComponentDelegate();
  component_1 = $module$_material_ui_core_AccordionActions.default;
  component_2 = $module$_material_ui_core_AccordionDetails.default;
  component_3 = $module$_material_ui_core_AccordionSummary.default;
  buttonComponent = $module$_material_ui_core_Button.default;
  color_10 = new EnumPropToString(MColor$values());
  size_2 = new EnumPropToString(MButtonSize$values());
  variant_11 = new EnumPropToStringNullable(MButtonVariant$values());
  buttonGroupComponent = $module$_material_ui_core_ButtonGroup.default;
  color_11 = new EnumPropToString(MColor$values());
  orientation_2 = new EnumPropToString(MButtonGroupOrientation$values());
  size_3 = new EnumPropToString(MButtonSize$values());
  variant_12 = new EnumPropToString(MButtonGroupVariant$values());
  fabComponent = $module$_material_ui_core_Fab.default;
  color_12 = new EnumPropToString(MColor$values());
  size_4 = new EnumPropToString(MButtonSize$values());
  variant_13 = new EnumPropToString(MFabVariant$values());
  iconButtonComponent = $module$_material_ui_core_IconButton.default;
  color_13 = new EnumPropToString(MColor$values());
  edge_0 = new EnumPropToStringNullable(MIconEdge$values());
  size_5 = new EnumPropToString(MIconButtonSize$values());
  cardComponent = $module$_material_ui_core_Card.default;
  cardActionAreaComponent = $module$_material_ui_core_CardActionArea.default;
  cardActionsComponent = $module$_material_ui_core_CardActions.default;
  cardContentComponent = $module$_material_ui_core_CardContent.default;
  cardHeaderComponent = $module$_material_ui_core_CardHeader.default;
  cardMediaComponent = $module$_material_ui_core_CardMedia.default;
  dialogComponent = $module$_material_ui_core_Dialog.default;
  scroll = new EnumPropToString(DialogScroll$values());
  transitionComponent_2 = new TransitionComponentDelegate();
  transitionDuration_3 = new TransitionDurationDelegateNullable();
  dialogActionsComponent = $module$_material_ui_core_DialogActions.default;
  dialogContentComponent = $module$_material_ui_core_DialogContent.default;
  dialogContentTextComponent = $module$_material_ui_core_DialogContentText.default;
  dialogTitleComponent = $module$_material_ui_core_DialogTitle.default;
  dialogComponent_0 = $module$_material_ui_core_Dialog.default;
  onClose_0 = new OnClosePropWithReasonDelegate(ModalOnCloseReason$values());
  expansionPanelComponent = $module$_material_ui_core_ExpansionPanel.default;
  expansionPanelActionsComponent = $module$_material_ui_core_ExpansionPanelActions.default;
  expansionPanelDetailsComponent = $module$_material_ui_core_ExpansionPanelDetails.default;
  expansionPanelSummaryComponent = $module$_material_ui_core_ExpansionPanelSummary.default;
  formControlComponent = $module$_material_ui_core_FormControl.default;
  margin_0 = new EnumPropToString(MFormControlMargin$values());
  component_4 = new EnumPropToString(MFormControlComponent$values());
  variant_14 = new EnumPropToString(MFormControlVariant$values());
  formControlLabelComponent = $module$_material_ui_core_FormControlLabel.default;
  labelPlacement = new EnumPropToString(MLabelPlacement$values());
  formGroupComponent = $module$_material_ui_core_FormGroup.default;
  formHelperTextComponent = $module$_material_ui_core_FormHelperText.default;
  margin_1 = new EnumPropToStringNullable(MLabelMargin$values());
  variant_15 = new EnumPropToString(MFormControlVariant$values());
  formLabelComponent = $module$_material_ui_core_FormLabel.default;
  gridListComponent = $module$_material_ui_core_GridList.default;
  gridListTileComponent = $module$_material_ui_core_GridListTile.default;
  gridListTileBarComponent = $module$_material_ui_core_GridListTileBar.default;
  actionPosition = new EnumPropToString(MActionPosition$values());
  titlePosition = new EnumPropToString(MTitlePosition$values());
  filledInputComponent = $module$_material_ui_core_FilledInput.default;
  inputComponent = $module$_material_ui_core_Input.default;
  inputAdornmentComponent = $module$_material_ui_core_InputAdornment.default;
  position_0 = new EnumPropToStringNullable(MInputAdornmentPosition$values());
  variant_16 = new EnumPropToStringNullable(MFormControlVariant$values());
  margin_2 = new EnumPropToStringNullable(MInputMargin$values());
  inputLabelComponent = $module$_material_ui_core_InputLabel.default;
  margin_3 = new EnumPropToStringNullable(MLabelMargin$values());
  variant_17 = new EnumPropToString(MFormControlVariant$values());
  outlinedInputComponent = $module$_material_ui_core_OutlinedInput.default;
  component_5 = $module$_material_ui_lab_Alert.default;
  variant_18 = new EnumPropToStringNullable(MAlertVariant$values());
  severity = new EnumPropToStringNullable(MAlertSeverity$values());
  component_6 = $module$_material_ui_lab_AlertTitle.default;
  listComponent = $module$_material_ui_core_List.default;
  listItemComponent = $module$_material_ui_core_ListItem.default;
  alignItems_0 = new EnumPropToString(MListItemAlignItems$values());
  listItemAvatarComponent = $module$_material_ui_core_ListItemAvatar.default;
  listItemIconComponent = $module$_material_ui_core_ListItemIcon.default;
  listItemSecondaryActionComponent = $module$_material_ui_core_ListItemSecondaryAction.default;
  listItemTextComponent = $module$_material_ui_core_ListItemText.default;
  listSubheaderComponent = $module$_material_ui_core_ListSubheader.default;
  color_14 = new EnumPropToString(MListSubheaderColor$values());
  menuComponent = $module$_material_ui_core_Menu.default;
  variant_19 = new EnumPropToString(MMenuVariant$values());
  onClose_1 = new OnClosePropWithReasonDelegate(MenuOnCloseReason$values());
  menuItemComponent = $module$_material_ui_core_MenuItem.default;
  menuList = $module$_material_ui_core_MenuList.default;
  stylesProviderComponent = $module$_material_ui_styles_StylesProvider.default;
  tableComponent = $module$_material_ui_core_Table.default;
  padding_0 = new EnumPropToString(MTableCellPadding$values());
  size_6 = new EnumPropToString(MTableCellSize$values());
  tableBodyComponent = $module$_material_ui_core_TableBody.default;
  TableCellComponent = $module$_material_ui_core_TableCell.default;
  align_0 = new EnumPropToString(MTableCellAlign$values());
  padding_1 = new EnumPropToString(MTableCellPadding$values());
  size_7 = new EnumPropToString(MTableCellSize$values());
  variant_20 = new EnumPropToString(MTableCellVariant$values());
  tableContainerComponent = $module$_material_ui_core_TableContainer.default;
  TableFooterComponent = $module$_material_ui_core_TableFooter.default;
  TableHeadComponent = $module$_material_ui_core_TableHead.default;
  tablePaginationComponent = $module$_material_ui_core_TablePagination.default;
  tableRowComponent = $module$_material_ui_core_TableRow.default;
  tableSortLabelComponent = $module$_material_ui_core_TableSortLabel.default;
  direction_0 = new EnumPropToString(MTableSortLabelDirection$values());
  collapseComponent = $module$_material_ui_core_Collapse.default;
  timeout = new TransitionDurationWithAutoDelegate();
  fadeComponent = $module$_material_ui_core_Fade.default;
  timeout_0 = new TransitionDurationDelegate();
  growComponent = $module$_material_ui_core_Grow.default;
  timeout_1 = new TransitionDurationWithAutoDelegate();
  slideComponent = $module$_material_ui_core_Slide.default;
  timeout_2 = new TransitionDurationDelegate();
  zoomComponent = $module$_material_ui_core_Zoom.default;
  timeout_3 = new TransitionDurationDelegate();
  Kotlin.defineModule('muirwik-muirwik-components', _);
  return _;
}(module.exports, require('kotlin'), require('@material-ui/core/AppBar'), require('@material-ui/core/Avatar'), require('@material-ui/core/Backdrop'), require('@material-ui/core/Badge'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('@material-ui/core/BottomNavigation'), require('@material-ui/core/BottomNavigationAction'), require('@material-ui/core/Breadcrumbs'), require('@material-ui/core/Checkbox'), require('kotlinx-html-js'), require('@material-ui/core/Chip'), require('@material-ui/core/CircularProgress'), require('styled-components'), require('kotlin-css'), require('@material-ui/core/ClickAwayListener'), require('@material-ui/core/Container'), require('@material-ui/core/CssBaseline'), require('@material-ui/core/Divider'), require('@material-ui/core/Drawer'), require('@material-ui/core/Grid'), require('@material-ui/core/Hidden'), require('@material-ui/core/Icon'), require('@material-ui/core/LinearProgress'), require('@material-ui/core/Link'), require('@material-ui/core/locale'), require('@material-ui/core/styles'), require('@material-ui/core/NativeSelect'), require('@material-ui/core/Paper'), require('@material-ui/core/Popover'), require('@material-ui/core/Radio'), require('@material-ui/core/RadioGroup'), require('@material-ui/core/Select'), require('@material-ui/core/Slider'), require('@material-ui/core/Snackbar'), require('@material-ui/core/SvgIcon'), require('react'), require('@material-ui/core/SwipeableDrawer'), require('@material-ui/core/Switch'), require('@material-ui/core/Tabs'), require('@material-ui/core/Tab'), require('@material-ui/core/TextareaAutosize'), require('@material-ui/core/TextField'), require('@material-ui/core/Toolbar'), require('@material-ui/core/Tooltip'), require('@material-ui/core/Typography'), require('@material-ui/core/Accordion'), require('@material-ui/core/AccordionActions'), require('@material-ui/core/AccordionDetails'), require('@material-ui/core/AccordionSummary'), require('@material-ui/core/Button'), require('@material-ui/core/ButtonGroup'), require('@material-ui/core/Fab'), require('@material-ui/core/IconButton'), require('@material-ui/core/Card'), require('@material-ui/core/CardActionArea'), require('@material-ui/core/CardActions'), require('@material-ui/core/CardContent'), require('@material-ui/core/CardHeader'), require('@material-ui/core/CardMedia'), require('@material-ui/core/Dialog'), require('@material-ui/core/DialogActions'), require('@material-ui/core/DialogContent'), require('@material-ui/core/DialogContentText'), require('@material-ui/core/DialogTitle'), require('@material-ui/core/ExpansionPanel'), require('@material-ui/core/ExpansionPanelActions'), require('@material-ui/core/ExpansionPanelDetails'), require('@material-ui/core/ExpansionPanelSummary'), require('@material-ui/core/FormControl'), require('@material-ui/core/FormControlLabel'), require('@material-ui/core/FormGroup'), require('@material-ui/core/FormHelperText'), require('@material-ui/core/FormLabel'), require('@material-ui/core/GridList'), require('@material-ui/core/GridListTile'), require('@material-ui/core/GridListTileBar'), require('@material-ui/core/FilledInput'), require('@material-ui/core/Input'), require('@material-ui/core/InputAdornment'), require('@material-ui/core/InputLabel'), require('@material-ui/core/OutlinedInput'), require('@material-ui/lab/Alert'), require('@material-ui/lab/AlertTitle'), require('@material-ui/core/List'), require('@material-ui/core/ListItem'), require('@material-ui/core/ListItemAvatar'), require('@material-ui/core/ListItemIcon'), require('@material-ui/core/ListItemSecondaryAction'), require('@material-ui/core/ListItemText'), require('@material-ui/core/ListSubheader'), require('@material-ui/core/Menu'), require('@material-ui/core/MenuItem'), require('@material-ui/core/MenuList'), require('@material-ui/core/styles/createMuiTheme'), require('@material-ui/styles/StylesProvider'), require('@material-ui/styles/jssPreset'), require('jss'), require('@material-ui/core/Table'), require('@material-ui/core/TableBody'), require('@material-ui/core/TableCell'), require('@material-ui/core/TableContainer'), require('@material-ui/core/TableFooter'), require('@material-ui/core/TableHead'), require('@material-ui/core/TablePagination'), require('@material-ui/core/TableRow'), require('@material-ui/core/TableSortLabel'), require('@material-ui/core/Collapse'), require('@material-ui/core/Fade'), require('@material-ui/core/Grow'), require('@material-ui/core/Slide'), require('@material-ui/core/Zoom')));

//# sourceMappingURL=muirwik-muirwik-components.js.map
