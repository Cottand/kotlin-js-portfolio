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
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var unboxChar = Kotlin.unboxChar;
  var Any = Object;
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
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var createElement = $module$react.createElement;
  var createContext = $module$react.createContext;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_8bz2yq$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var getKClass = Kotlin.getKClass;
  var set_key = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.set_key_38rnt0$;
  var InputType$values = $module$kotlinx_html_js.kotlinx.html.InputType.values;
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
  MTableCellAlign.prototype = Object.create(Enum.prototype);
  MTableCellAlign.prototype.constructor = MTableCellAlign;
  MTableCellVariant.prototype = Object.create(Enum.prototype);
  MTableCellVariant.prototype.constructor = MTableCellVariant;
  MTableCellSize.prototype = Object.create(Enum.prototype);
  MTableCellSize.prototype.constructor = MTableCellSize;
  MTableSortLabelDirection.prototype = Object.create(Enum.prototype);
  MTableSortLabelDirection.prototype.constructor = MTableSortLabelDirection;
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
  MAppBarPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'MAppBarPosition', interfaces: [Enum]};
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
  MAppBarColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MAppBarColor', interfaces: [Enum]};
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
  var color;
  var color_metadata = new PropertyMetadata('color');
  var position;
  var position_metadata = new PropertyMetadata('position');
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
  MAvatarVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MAvatarVariant', interfaces: [Enum]};
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
  var variant;
  var variant_metadata = new PropertyMetadata('variant');
  var backdropComponent;
  var transitionDuration;
  var transitionDuration_metadata = new PropertyMetadata('transitionDuration');
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
  MBadgeColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MBadgeColor', interfaces: [Enum]};
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
  MBadgeVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MBadgeVariant', interfaces: [Enum]};
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
  MBadgeOverlap.$metadata$ = {kind: Kind_CLASS, simpleName: 'MBadgeOverlap', interfaces: [Enum]};
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
  MBadgeAnchorOriginHorizontal.$metadata$ = {kind: Kind_CLASS, simpleName: 'MBadgeAnchorOriginHorizontal', interfaces: [Enum]};
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
  MBadgeAnchorOriginVertical.$metadata$ = {kind: Kind_CLASS, simpleName: 'MBadgeAnchorOriginVertical', interfaces: [Enum]};
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
  var anchorOriginHorizontal;
  var anchorOriginHorizontal_metadata = new PropertyMetadata('anchorOriginHorizontal');
  var anchorOriginVertical;
  var anchorOriginVertical_metadata = new PropertyMetadata('anchorOriginVertical');
  var color_0;
  var color_metadata_0 = new PropertyMetadata('color');
  var overlap;
  var overlap_metadata = new PropertyMetadata('overlap');
  var variant_0;
  var variant_metadata_0 = new PropertyMetadata('variant');
  function setStyledPropsAndRunHandler($receiver, className, handler) {
    if (className != null) {
      $receiver.attrs.className = className;
    }if (handler != null)
      handler($receiver);
  }
  function createStyled($receiver, component, addAsChild, handler) {
    if (addAsChild === void 0)
      addAsChild = true;
    var builder = new StyledElementBuilder(component);
    handler(builder);
    return addAsChild ? $receiver.child_52psg1$(builder.create()) : builder.create();
  }
  var MAlignment$inherit_instance;
  var MAlignment$left_instance;
  var MAlignment$center_instance;
  var MAlignment$right_instance;
  var MAlignment$justify_instance;
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
  MColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MColor', interfaces: [Enum]};
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
  MOptionColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MOptionColor', interfaces: [Enum]};
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
  var bottomNavigationComponent;
  var bottomNavigationActionComponent;
  var breadcrumbsComponent;
  var checkboxComponent;
  var color_1;
  var color_metadata_1 = new PropertyMetadata('color');
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
  ChildPropDelegateNullable.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildPropDelegateNullable', interfaces: []};
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
  MChipVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MChipVariant', interfaces: [Enum]};
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
  MChipColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MChipColor', interfaces: [Enum]};
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
  MChipSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'MChipSize', interfaces: [Enum]};
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
  var color_2;
  var color_metadata_2 = new PropertyMetadata('color');
  var size;
  var size_metadata = new PropertyMetadata('size');
  var variant_1;
  var variant_metadata_1 = new PropertyMetadata('variant');
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
  MCircularProgressColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MCircularProgressColor', interfaces: [Enum]};
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
  MCircularProgressVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MCircularProgressVariant', interfaces: [Enum]};
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
  var color_3;
  var color_metadata_3 = new PropertyMetadata('color');
  var variant_2;
  var variant_metadata_2 = new PropertyMetadata('variant');
  var clickAwayListenerComponent;
  var MClickAwayListenerMouseEvent$onClick_instance;
  var MClickAwayListenerMouseEvent$onMouseDown_instance;
  var MClickAwayListenerMouseEvent$onMouseUp_instance;
  var MClickAwayListenerMouseEvent$disable_instance;
  var MClickAwayListenerTouchEvent$onTouchStart_instance;
  var MClickAwayListenerTouchEvent$onTouchEnd_instance;
  var MClickAwayListenerTouchEvent$disable_instance;
  var Colors$Red_instance = null;
  var Colors$Pink_instance = null;
  var Colors$Purple_instance = null;
  var Colors$DeepPurple_instance = null;
  var Colors$Indigo_instance = null;
  var Colors$Blue_instance = null;
  var Colors$LightBlue_instance = null;
  var Colors$Cyan_instance = null;
  var Colors$Teal_instance = null;
  var Colors$Green_instance = null;
  var Colors$LightGreen_instance = null;
  var Colors$Lime_instance = null;
  var Colors$Yellow_instance = null;
  var Colors$Amber_instance = null;
  var Colors$Orange_instance = null;
  var Colors$DeepOrange_instance = null;
  var Colors$Brown_instance = null;
  var Colors$Grey_instance = null;
  var Colors$BlueGrey_instance = null;
  var Colors$Companion_instance = null;
  var containerComponent;
  var cssBaselineComponent;
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
  MDividerOrientation.$metadata$ = {kind: Kind_CLASS, simpleName: 'MDividerOrientation', interfaces: [Enum]};
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
  MDividerVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MDividerVariant', interfaces: [Enum]};
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
  var orientation;
  var orientation_metadata = new PropertyMetadata('orientation');
  var variant_3;
  var variant_metadata_3 = new PropertyMetadata('variant');
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
  MDrawerAnchor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MDrawerAnchor', interfaces: [Enum]};
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
  MDrawerVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MDrawerVariant', interfaces: [Enum]};
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
  var anchor;
  var anchor_metadata = new PropertyMetadata('anchor');
  var transitionDuration_0;
  var transitionDuration_metadata_0 = new PropertyMetadata('transitionDuration');
  var variant_4;
  var variant_metadata_4 = new PropertyMetadata('variant');
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
  EnumPropToString.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnumPropToString', interfaces: [ReadWriteProperty]};
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
  EnumPropToStringNullable.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnumPropToStringNullable', interfaces: [ReadWriteProperty]};
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
  MGridAlignContent.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridAlignContent', interfaces: [Enum]};
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
  MGridAlignItems.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridAlignItems', interfaces: [Enum]};
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
  MGridDirection.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridDirection', interfaces: [Enum]};
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
  MGridJustify.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridJustify', interfaces: [Enum]};
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
  MGridSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridSize', interfaces: [Enum]};
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
  MGridWrap.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridWrap', interfaces: [Enum]};
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
  MGridSpacing.$metadata$ = {kind: Kind_CLASS, simpleName: 'MGridSpacing', interfaces: [Enum]};
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
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  var justify;
  var justify_metadata = new PropertyMetadata('justify');
  var lg;
  var lg_metadata = new PropertyMetadata('lg');
  var md;
  var md_metadata = new PropertyMetadata('md');
  var sm;
  var sm_metadata = new PropertyMetadata('sm');
  var spacing;
  var spacing_metadata = new PropertyMetadata('spacing');
  var wrap;
  var wrap_metadata = new PropertyMetadata('wrap');
  var xl;
  var xl_metadata = new PropertyMetadata('xl');
  var xs;
  var xs_metadata = new PropertyMetadata('xs');
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
  GridSizeDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridSizeDelegate', interfaces: [ReadWriteProperty]};
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
  GridSpacingDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'GridSpacingDelegate', interfaces: [ReadWriteProperty]};
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
  MHiddenImplementation.$metadata$ = {kind: Kind_CLASS, simpleName: 'MHiddenImplementation', interfaces: [Enum]};
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
  var initialWidth;
  var initialWidth_metadata = new PropertyMetadata('initialWidth');
  var implementation;
  var implementation_metadata = new PropertyMetadata('implementation');
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
  MIconColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MIconColor', interfaces: [Enum]};
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
  MIconFontSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'MIconFontSize', interfaces: [Enum]};
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
  var color_4;
  var color_metadata_4 = new PropertyMetadata('color');
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
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
  MLinearProgressColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MLinearProgressColor', interfaces: [Enum]};
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
  MLinearProgressVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MLinearProgressVariant', interfaces: [Enum]};
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
  var color_5;
  var color_metadata_5 = new PropertyMetadata('color');
  var variant_5;
  var variant_metadata_5 = new PropertyMetadata('variant');
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
  MLinkUnderline.$metadata$ = {kind: Kind_CLASS, simpleName: 'MLinkUnderline', interfaces: [Enum]};
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
  var underline;
  var underline_metadata = new PropertyMetadata('underline');
  var Locales_instance = null;
  var muiThemeProviderComponent;
  var nativeSelectComponent;
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  var variant_6;
  var variant_metadata_6 = new PropertyMetadata('variant');
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
  OnClosePropWithReasonDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'OnClosePropWithReasonDelegate', interfaces: [ReadWriteProperty]};
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
  MPaperVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MPaperVariant', interfaces: [Enum]};
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
  var variant_7;
  var variant_metadata_7 = new PropertyMetadata('variant');
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
  MPopoverAnchorRef.$metadata$ = {kind: Kind_CLASS, simpleName: 'MPopoverAnchorRef', interfaces: [Enum]};
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
  MPopoverHorizontalPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'MPopoverHorizontalPosition', interfaces: [Enum]};
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
  MPopoverVerticalPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'MPopoverVerticalPosition', interfaces: [Enum]};
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
  var anchorOriginHorizontal_0;
  var anchorOriginHorizontal_metadata_0 = new PropertyMetadata('anchorOriginHorizontal');
  var anchorOriginVertical_0;
  var anchorOriginVertical_metadata_0 = new PropertyMetadata('anchorOriginVertical');
  var anchorOriginHorizontalNumeric;
  var anchorOriginHorizontalNumeric_metadata = new PropertyMetadata('anchorOriginHorizontalNumeric');
  var anchorOriginVerticalNumeric;
  var anchorOriginVerticalNumeric_metadata = new PropertyMetadata('anchorOriginVerticalNumeric');
  var anchorPositionLeft;
  var anchorPositionLeft_metadata = new PropertyMetadata('anchorPositionLeft');
  var anchorPositionTop;
  var anchorPositionTop_metadata = new PropertyMetadata('anchorPositionTop');
  var anchorReference;
  var anchorReference_metadata = new PropertyMetadata('anchorReference');
  var transformOriginHorizontal;
  var transformOriginHorizontal_metadata = new PropertyMetadata('transformOriginHorizontal');
  var transformOriginVertical;
  var transformOriginVertical_metadata = new PropertyMetadata('transformOriginVertical');
  var transformOriginHorizontalNumeric;
  var transformOriginHorizontalNumeric_metadata = new PropertyMetadata('transformOriginHorizontalNumeric');
  var transformOriginVerticalNumeric;
  var transformOriginVerticalNumeric_metadata = new PropertyMetadata('transformOriginVerticalNumeric');
  var transitionComponent;
  var transitionComponent_metadata = new PropertyMetadata('transitionComponent');
  var transitionDuration_1;
  var transitionDuration_metadata_1 = new PropertyMetadata('transitionDuration');
  var radioComponent;
  var color_6;
  var color_metadata_6 = new PropertyMetadata('color');
  var size_0;
  var size_metadata_0 = new PropertyMetadata('size');
  var radioGroupComponent;
  var AutoCapitalize$off_instance;
  var AutoCapitalize$none_instance;
  var AutoCapitalize$on_instance;
  var AutoCapitalize$sentences_instance;
  var AutoCapitalize$words_instance;
  var AutoCapitalize$characters_instance;
  var TextDir$ltr_instance;
  var TextDir$rtl_instance;
  var TextDir$auto_instance;
  var DropZone$copy_instance;
  var DropZone$move_instance;
  var DropZone$link_instance;
  var selectComponent;
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
  MSliderOrientation.$metadata$ = {kind: Kind_CLASS, simpleName: 'MSliderOrientation', interfaces: [Enum]};
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
  MSliderValueLabelDisplay.$metadata$ = {kind: Kind_CLASS, simpleName: 'MSliderValueLabelDisplay', interfaces: [Enum]};
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
  var orientation_0;
  var orientation_metadata_0 = new PropertyMetadata('orientation');
  var valueLabelDisplay;
  var valueLabelDisplay_metadata = new PropertyMetadata('valueLabelDisplay');
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
  MSnackbarHorizAnchor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MSnackbarHorizAnchor', interfaces: [Enum]};
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
  MSnackbarVertAnchor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MSnackbarVertAnchor', interfaces: [Enum]};
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
  MSnackbarOnCloseReason.$metadata$ = {kind: Kind_CLASS, simpleName: 'MSnackbarOnCloseReason', interfaces: [Enum]};
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
  var anchorOriginHorizontal_1;
  var anchorOriginHorizontal_metadata_1 = new PropertyMetadata('anchorOriginHorizontal');
  var anchorOriginVertical_1;
  var anchorOriginVertical_metadata_1 = new PropertyMetadata('anchorOriginVertical');
  var onClose;
  var onClose_metadata = new PropertyMetadata('onClose');
  var transitionComponent_0;
  var transitionComponent_metadata_0 = new PropertyMetadata('transitionComponent');
  var transitionDuration_2;
  var transitionDuration_metadata_2 = new PropertyMetadata('transitionDuration');
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
  SvgShapeRendering.$metadata$ = {kind: Kind_CLASS, simpleName: 'SvgShapeRendering', interfaces: [Enum]};
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
  var shapeRendering;
  var shapeRendering_metadata = new PropertyMetadata('shapeRendering');
  var swipeableDrawerComponent;
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
  MSwitchEdge.$metadata$ = {kind: Kind_CLASS, simpleName: 'MSwitchEdge', interfaces: [Enum]};
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
  var color_7;
  var color_metadata_7 = new PropertyMetadata('color');
  var edge;
  var edge_metadata = new PropertyMetadata('edge');
  var size_1;
  var size_metadata_1 = new PropertyMetadata('size');
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
  MTabTextColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTabTextColor', interfaces: [Enum]};
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
  MTabScrollButtons.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTabScrollButtons', interfaces: [Enum]};
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
  MTabIndicatorColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTabIndicatorColor', interfaces: [Enum]};
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
  MTabVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTabVariant', interfaces: [Enum]};
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
  MTabOrientation.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTabOrientation', interfaces: [Enum]};
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
  var indicatorColor;
  var indicatorColor_metadata = new PropertyMetadata('indicatorColor');
  var orientation_1;
  var orientation_metadata_1 = new PropertyMetadata('orientation');
  var scrollButtons;
  var scrollButtons_metadata = new PropertyMetadata('scrollButtons');
  var textColor;
  var textColor_metadata = new PropertyMetadata('textColor');
  var variant_8;
  var variant_metadata_8 = new PropertyMetadata('variant');
  var tabComponent;
  var textAreaAutosizeComponent;
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
  MTextFieldColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTextFieldColor', interfaces: [Enum]};
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
  var color_8;
  var color_metadata_8 = new PropertyMetadata('color');
  var themeOptions;
  var defaultTheme;
  var themeContext;
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
  ToolbarVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'ToolbarVariant', interfaces: [Enum]};
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
  var variant_9;
  var variant_metadata_9 = new PropertyMetadata('variant');
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
  TooltipPlacement.$metadata$ = {kind: Kind_CLASS, simpleName: 'TooltipPlacement', interfaces: [Enum]};
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
  var placement;
  var placement_metadata = new PropertyMetadata('placement');
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
  MTypographyAlign.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTypographyAlign', interfaces: [Enum]};
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
  MTypographyColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTypographyColor', interfaces: [Enum]};
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
  MTypographyVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTypographyVariant', interfaces: [Enum]};
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
  var align;
  var align_metadata = new PropertyMetadata('align');
  var color_9;
  var color_metadata_9 = new PropertyMetadata('color');
  var variant_10;
  var variant_metadata_10 = new PropertyMetadata('variant');
  var component_0;
  var transitionComponent_1;
  var transitionComponent_metadata_1 = new PropertyMetadata('transitionComponent');
  var component_1;
  var component_2;
  var component_3;
  var buttonComponent;
  var color_10;
  var color_metadata_10 = new PropertyMetadata('color');
  var size_2;
  var size_metadata_2 = new PropertyMetadata('size');
  var variant_11;
  var variant_metadata_11 = new PropertyMetadata('variant');
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
  MButtonSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'MButtonSize', interfaces: [Enum]};
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
  MButtonVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MButtonVariant', interfaces: [Enum]};
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
  MButtonGroupVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MButtonGroupVariant', interfaces: [Enum]};
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
  MButtonGroupOrientation.$metadata$ = {kind: Kind_CLASS, simpleName: 'MButtonGroupOrientation', interfaces: [Enum]};
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
  var color_11;
  var color_metadata_11 = new PropertyMetadata('color');
  var orientation_2;
  var orientation_metadata_2 = new PropertyMetadata('orientation');
  var size_3;
  var size_metadata_3 = new PropertyMetadata('size');
  var variant_12;
  var variant_metadata_12 = new PropertyMetadata('variant');
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
  MFabVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MFabVariant', interfaces: [Enum]};
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
  var color_12;
  var color_metadata_12 = new PropertyMetadata('color');
  var size_4;
  var size_metadata_4 = new PropertyMetadata('size');
  var variant_13;
  var variant_metadata_13 = new PropertyMetadata('variant');
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
  MIconButtonSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'MIconButtonSize', interfaces: [Enum]};
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
  MIconEdge.$metadata$ = {kind: Kind_CLASS, simpleName: 'MIconEdge', interfaces: [Enum]};
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
  var color_13;
  var color_metadata_13 = new PropertyMetadata('color');
  var edge_0;
  var edge_metadata_0 = new PropertyMetadata('edge');
  var size_5;
  var size_metadata_5 = new PropertyMetadata('size');
  var cardComponent;
  var cardActionAreaComponent;
  var cardActionsComponent;
  var cardContentComponent;
  var cardHeaderComponent;
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
  DialogScroll.$metadata$ = {kind: Kind_CLASS, simpleName: 'DialogScroll', interfaces: [Enum]};
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
  var scroll;
  var scroll_metadata = new PropertyMetadata('scroll');
  var transitionComponent_2;
  var transitionComponent_metadata_2 = new PropertyMetadata('transitionComponent');
  var transitionDuration_3;
  var transitionDuration_metadata_3 = new PropertyMetadata('transitionDuration');
  var dialogActionsComponent;
  var dialogContentComponent;
  var dialogContentTextComponent;
  var dialogTitleComponent;
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
  ModalOnCloseReason.$metadata$ = {kind: Kind_CLASS, simpleName: 'ModalOnCloseReason', interfaces: [Enum]};
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
  var onClose_0;
  var onClose_metadata_0 = new PropertyMetadata('onClose');
  var expansionPanelComponent;
  var expansionPanelActionsComponent;
  var expansionPanelDetailsComponent;
  var expansionPanelSummaryComponent;
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
  MFormControlVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MFormControlVariant', interfaces: [Enum]};
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
  MFormControlComponent.$metadata$ = {kind: Kind_CLASS, simpleName: 'MFormControlComponent', interfaces: [Enum]};
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
  MFormControlMargin.$metadata$ = {kind: Kind_CLASS, simpleName: 'MFormControlMargin', interfaces: [Enum]};
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
  var margin_0;
  var margin_metadata_0 = new PropertyMetadata('margin');
  var component_4;
  var component_metadata = new PropertyMetadata('component');
  var variant_14;
  var variant_metadata_14 = new PropertyMetadata('variant');
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
  MLabelPlacement.$metadata$ = {kind: Kind_CLASS, simpleName: 'MLabelPlacement', interfaces: [Enum]};
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
  var labelPlacement;
  var labelPlacement_metadata = new PropertyMetadata('labelPlacement');
  var formGroupComponent;
  var formHelperTextComponent;
  var margin_1;
  var margin_metadata_1 = new PropertyMetadata('margin');
  var variant_15;
  var variant_metadata_15 = new PropertyMetadata('variant');
  var formLabelComponent;
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
  MLabelMargin.$metadata$ = {kind: Kind_CLASS, simpleName: 'MLabelMargin', interfaces: [Enum]};
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
  var gridListTileComponent;
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
  MActionPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'MActionPosition', interfaces: [Enum]};
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
  MTitlePosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTitlePosition', interfaces: [Enum]};
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
  var actionPosition;
  var actionPosition_metadata = new PropertyMetadata('actionPosition');
  var titlePosition;
  var titlePosition_metadata = new PropertyMetadata('titlePosition');
  var filledInputComponent;
  var inputComponent;
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
  MInputAdornmentPosition.$metadata$ = {kind: Kind_CLASS, simpleName: 'MInputAdornmentPosition', interfaces: [Enum]};
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
  var position_0;
  var position_metadata_0 = new PropertyMetadata('position');
  var variant_16;
  var variant_metadata_16 = new PropertyMetadata('variant');
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
  MInputMargin.$metadata$ = {kind: Kind_CLASS, simpleName: 'MInputMargin', interfaces: [Enum]};
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
  var margin_2;
  var margin_metadata_2 = new PropertyMetadata('margin');
  var inputLabelComponent;
  var margin_3;
  var margin_metadata_3 = new PropertyMetadata('margin');
  var variant_17;
  var variant_metadata_17 = new PropertyMetadata('variant');
  var outlinedInputComponent;
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
  MAlertVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MAlertVariant', interfaces: [Enum]};
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
  MAlertSeverity.$metadata$ = {kind: Kind_CLASS, simpleName: 'MAlertSeverity', interfaces: [Enum]};
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
  var variant_18;
  var variant_metadata_18 = new PropertyMetadata('variant');
  var severity;
  var severity_metadata = new PropertyMetadata('severity');
  var component_6;
  var listComponent;
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
  MListItemAlignItems.$metadata$ = {kind: Kind_CLASS, simpleName: 'MListItemAlignItems', interfaces: [Enum]};
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
  var alignItems_0;
  var alignItems_metadata_0 = new PropertyMetadata('alignItems');
  var listItemAvatarComponent;
  var listItemIconComponent;
  var listItemSecondaryActionComponent;
  var listItemTextComponent;
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
  MListSubheaderColor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MListSubheaderColor', interfaces: [Enum]};
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
  var color_14;
  var color_metadata_14 = new PropertyMetadata('color');
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
  MenuOnCloseReason.$metadata$ = {kind: Kind_CLASS, simpleName: 'MenuOnCloseReason', interfaces: [Enum]};
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
  MMenuVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MMenuVariant', interfaces: [Enum]};
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
  var variant_19;
  var variant_metadata_19 = new PropertyMetadata('variant');
  var onClose_1;
  var onClose_metadata_1 = new PropertyMetadata('onClose');
  var menuItemComponent;
  var menuList;
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
  Breakpoint.$metadata$ = {kind: Kind_CLASS, simpleName: 'Breakpoint', interfaces: [Enum]};
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
  var tableComponent;
  var padding_0;
  var padding_metadata = new PropertyMetadata('padding');
  var size_6;
  var size_metadata_6 = new PropertyMetadata('size');
  var tableBodyComponent;
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
  MTableCellPadding.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTableCellPadding', interfaces: [Enum]};
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
  var MTableCellSortDirection$asc_instance;
  var MTableCellSortDirection$desc_instance;
  var MTableCellSortDirection$False_instance;
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
  MTableCellAlign.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTableCellAlign', interfaces: [Enum]};
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
  MTableCellVariant.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTableCellVariant', interfaces: [Enum]};
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
  MTableCellSize.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTableCellSize', interfaces: [Enum]};
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
  var align_0;
  var align_metadata_0 = new PropertyMetadata('align');
  var padding_1;
  var padding_metadata_0 = new PropertyMetadata('padding');
  var size_7;
  var size_metadata_7 = new PropertyMetadata('size');
  var variant_20;
  var variant_metadata_20 = new PropertyMetadata('variant');
  var tableContainerComponent;
  var TableFooterComponent;
  var TableHeadComponent;
  var tablePaginationComponent;
  var tableRowComponent;
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
  MTableSortLabelDirection.$metadata$ = {kind: Kind_CLASS, simpleName: 'MTableSortLabelDirection', interfaces: [Enum]};
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
  var direction_0;
  var direction_metadata_0 = new PropertyMetadata('direction');
  var collapseComponent;
  var timeout;
  var timeout_metadata = new PropertyMetadata('timeout');
  var fadeComponent;
  var timeout_0;
  var timeout_metadata_0 = new PropertyMetadata('timeout');
  var growComponent;
  var timeout_1;
  var timeout_metadata_1 = new PropertyMetadata('timeout');
  var slideComponent;
  var SlideTransitionDirection$left_instance;
  var SlideTransitionDirection$right_instance;
  var SlideTransitionDirection$up_instance;
  var SlideTransitionDirection$down_instance;
  var timeout_2;
  var timeout_metadata_2 = new PropertyMetadata('timeout');
  function TransitionDurationDelegate() {
  }
  TransitionDurationDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionDuration cannot be read from props'.toString());
  };
  TransitionDurationDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value.value();
  };
  TransitionDurationDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'TransitionDurationDelegate', interfaces: [ReadWriteProperty]};
  function TransitionDurationDelegateNullable() {
  }
  TransitionDurationDelegateNullable.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionDuration cannot be read from props'.toString());
  };
  TransitionDurationDelegateNullable.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value != null ? value.value() : null;
  };
  TransitionDurationDelegateNullable.$metadata$ = {kind: Kind_CLASS, simpleName: 'TransitionDurationDelegateNullable', interfaces: [ReadWriteProperty]};
  function TransitionDurationWithAutoDelegate() {
  }
  TransitionDurationWithAutoDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    throw IllegalStateException_init('transitionDuration cannot be read from props'.toString());
  };
  TransitionDurationWithAutoDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    thisRef[property.callableName] = value.value();
  };
  TransitionDurationWithAutoDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'TransitionDurationWithAutoDelegate', interfaces: [ReadWriteProperty]};
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
  TransitionComponentDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'TransitionComponentDelegate', interfaces: [ReadWriteProperty]};
  var zoomComponent;
  var timeout_3;
  var timeout_metadata_3 = new PropertyMetadata('timeout');
  Object.defineProperty(MAppBarPosition, 'fixed', {get: MAppBarPosition$fixed_getInstance});
  Object.defineProperty(MAppBarPosition, 'absolute', {get: MAppBarPosition$absolute_getInstance});
  Object.defineProperty(MAppBarPosition, 'sticky', {get: MAppBarPosition$sticky_getInstance});
  Object.defineProperty(MAppBarPosition, 'static', {get: MAppBarPosition$static_getInstance});
  Object.defineProperty(MAppBarPosition, 'relative', {get: MAppBarPosition$relative_getInstance});
  var package$com = _.com || (_.com = {});
  var package$ccfraser = package$com.ccfraser || (package$com.ccfraser = {});
  var package$muirwik = package$ccfraser.muirwik || (package$ccfraser.muirwik = {});
  var package$components = package$muirwik.components || (package$muirwik.components = {});
  package$components.MAppBarPosition = MAppBarPosition;
  Object.defineProperty(MAppBarColor, 'default', {get: MAppBarColor$default_getInstance});
  Object.defineProperty(MAppBarColor, 'inherit', {get: MAppBarColor$inherit_getInstance});
  Object.defineProperty(MAppBarColor, 'primary', {get: MAppBarColor$primary_getInstance});
  Object.defineProperty(MAppBarColor, 'secondary', {get: MAppBarColor$secondary_getInstance});
  Object.defineProperty(MAppBarColor, 'transparent', {get: MAppBarColor$transparent_getInstance});
  package$components.MAppBarColor = MAppBarColor;
  Object.defineProperty(MAvatarVariant, 'circle', {get: MAvatarVariant$circle_getInstance});
  Object.defineProperty(MAvatarVariant, 'rounded', {get: MAvatarVariant$rounded_getInstance});
  Object.defineProperty(MAvatarVariant, 'square', {get: MAvatarVariant$square_getInstance});
  package$components.MAvatarVariant = MAvatarVariant;
  Object.defineProperty(MBadgeColor, 'primary', {get: MBadgeColor$primary_getInstance});
  Object.defineProperty(MBadgeColor, 'secondary', {get: MBadgeColor$secondary_getInstance});
  Object.defineProperty(MBadgeColor, 'error', {get: MBadgeColor$error_getInstance});
  Object.defineProperty(MBadgeColor, 'default', {get: MBadgeColor$default_getInstance});
  package$components.MBadgeColor = MBadgeColor;
  Object.defineProperty(MBadgeVariant, 'standard', {get: MBadgeVariant$standard_getInstance});
  Object.defineProperty(MBadgeVariant, 'dot', {get: MBadgeVariant$dot_getInstance});
  package$components.MBadgeVariant = MBadgeVariant;
  Object.defineProperty(MBadgeOverlap, 'circle', {get: MBadgeOverlap$circle_getInstance});
  Object.defineProperty(MBadgeOverlap, 'rectangle', {get: MBadgeOverlap$rectangle_getInstance});
  package$components.MBadgeOverlap = MBadgeOverlap;
  Object.defineProperty(MBadgeAnchorOriginHorizontal, 'left', {get: MBadgeAnchorOriginHorizontal$left_getInstance});
  Object.defineProperty(MBadgeAnchorOriginHorizontal, 'right', {get: MBadgeAnchorOriginHorizontal$right_getInstance});
  package$components.MBadgeAnchorOriginHorizontal = MBadgeAnchorOriginHorizontal;
  Object.defineProperty(MBadgeAnchorOriginVertical, 'top', {get: MBadgeAnchorOriginVertical$top_getInstance});
  Object.defineProperty(MBadgeAnchorOriginVertical, 'bottom', {get: MBadgeAnchorOriginVertical$bottom_getInstance});
  package$components.MBadgeAnchorOriginVertical = MBadgeAnchorOriginVertical;
  package$components.setStyledPropsAndRunHandler_swhgju$ = setStyledPropsAndRunHandler;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$components.createStyled_z1rhxe$ = createStyled;
  Object.defineProperty(MColor, 'default', {get: MColor$default_getInstance});
  Object.defineProperty(MColor, 'inherit', {get: MColor$inherit_getInstance});
  Object.defineProperty(MColor, 'primary', {get: MColor$primary_getInstance});
  Object.defineProperty(MColor, 'secondary', {get: MColor$secondary_getInstance});
  package$components.MColor = MColor;
  Object.defineProperty(MOptionColor, 'primary', {get: MOptionColor$primary_getInstance});
  Object.defineProperty(MOptionColor, 'secondary', {get: MOptionColor$secondary_getInstance});
  Object.defineProperty(MOptionColor, 'default', {get: MOptionColor$default_getInstance});
  package$components.MOptionColor = MOptionColor;
  package$components.toHyphenCase_pdl1vz$ = toHyphenCase;
  package$components.ChildPropDelegateNullable = ChildPropDelegateNullable;
  Object.defineProperty(MChipVariant, 'default', {get: MChipVariant$default_getInstance});
  Object.defineProperty(MChipVariant, 'outlined', {get: MChipVariant$outlined_getInstance});
  package$components.MChipVariant = MChipVariant;
  Object.defineProperty(MChipColor, 'default', {get: MChipColor$default_getInstance});
  Object.defineProperty(MChipColor, 'primary', {get: MChipColor$primary_getInstance});
  Object.defineProperty(MChipColor, 'secondary', {get: MChipColor$secondary_getInstance});
  package$components.MChipColor = MChipColor;
  Object.defineProperty(MChipSize, 'small', {get: MChipSize$small_getInstance});
  Object.defineProperty(MChipSize, 'medium', {get: MChipSize$medium_getInstance});
  package$components.MChipSize = MChipSize;
  Object.defineProperty(MCircularProgressColor, 'primary', {get: MCircularProgressColor$primary_getInstance});
  Object.defineProperty(MCircularProgressColor, 'secondary', {get: MCircularProgressColor$secondary_getInstance});
  Object.defineProperty(MCircularProgressColor, 'inherit', {get: MCircularProgressColor$inherit_getInstance});
  package$components.MCircularProgressColor = MCircularProgressColor;
  Object.defineProperty(MCircularProgressVariant, 'determinate', {get: MCircularProgressVariant$determinate_getInstance});
  Object.defineProperty(MCircularProgressVariant, 'indeterminate', {get: MCircularProgressVariant$indeterminate_getInstance});
  Object.defineProperty(MCircularProgressVariant, 'static', {get: MCircularProgressVariant$static_getInstance});
  package$components.MCircularProgressVariant = MCircularProgressVariant;
  Object.defineProperty(MDividerOrientation, 'horizontal', {get: MDividerOrientation$horizontal_getInstance});
  Object.defineProperty(MDividerOrientation, 'vertical', {get: MDividerOrientation$vertical_getInstance});
  package$components.MDividerOrientation = MDividerOrientation;
  Object.defineProperty(MDividerVariant, 'fullWidth', {get: MDividerVariant$fullWidth_getInstance});
  Object.defineProperty(MDividerVariant, 'inset', {get: MDividerVariant$inset_getInstance});
  Object.defineProperty(MDividerVariant, 'middle', {get: MDividerVariant$middle_getInstance});
  package$components.MDividerVariant = MDividerVariant;
  Object.defineProperty(MDrawerAnchor, 'left', {get: MDrawerAnchor$left_getInstance});
  Object.defineProperty(MDrawerAnchor, 'top', {get: MDrawerAnchor$top_getInstance});
  Object.defineProperty(MDrawerAnchor, 'right', {get: MDrawerAnchor$right_getInstance});
  Object.defineProperty(MDrawerAnchor, 'bottom', {get: MDrawerAnchor$bottom_getInstance});
  package$components.MDrawerAnchor = MDrawerAnchor;
  Object.defineProperty(MDrawerVariant, 'permanent', {get: MDrawerVariant$permanent_getInstance});
  Object.defineProperty(MDrawerVariant, 'persistent', {get: MDrawerVariant$persistent_getInstance});
  Object.defineProperty(MDrawerVariant, 'temporary', {get: MDrawerVariant$temporary_getInstance});
  package$components.MDrawerVariant = MDrawerVariant;
  package$components.EnumPropToString = EnumPropToString;
  package$components.EnumPropToStringNullable = EnumPropToStringNullable;
  Object.defineProperty(MGridAlignContent, 'stretch', {get: MGridAlignContent$stretch_getInstance});
  Object.defineProperty(MGridAlignContent, 'center', {get: MGridAlignContent$center_getInstance});
  Object.defineProperty(MGridAlignContent, 'flexStart', {get: MGridAlignContent$flexStart_getInstance});
  Object.defineProperty(MGridAlignContent, 'flexEnd', {get: MGridAlignContent$flexEnd_getInstance});
  Object.defineProperty(MGridAlignContent, 'spaceBetween', {get: MGridAlignContent$spaceBetween_getInstance});
  Object.defineProperty(MGridAlignContent, 'spaceAround', {get: MGridAlignContent$spaceAround_getInstance});
  package$components.MGridAlignContent = MGridAlignContent;
  Object.defineProperty(MGridAlignItems, 'stretch', {get: MGridAlignItems$stretch_getInstance});
  Object.defineProperty(MGridAlignItems, 'center', {get: MGridAlignItems$center_getInstance});
  Object.defineProperty(MGridAlignItems, 'flexStart', {get: MGridAlignItems$flexStart_getInstance});
  Object.defineProperty(MGridAlignItems, 'flexEnd', {get: MGridAlignItems$flexEnd_getInstance});
  Object.defineProperty(MGridAlignItems, 'baseline', {get: MGridAlignItems$baseline_getInstance});
  package$components.MGridAlignItems = MGridAlignItems;
  Object.defineProperty(MGridDirection, 'row', {get: MGridDirection$row_getInstance});
  Object.defineProperty(MGridDirection, 'rowReverse', {get: MGridDirection$rowReverse_getInstance});
  Object.defineProperty(MGridDirection, 'column', {get: MGridDirection$column_getInstance});
  Object.defineProperty(MGridDirection, 'columnReverse', {get: MGridDirection$columnReverse_getInstance});
  package$components.MGridDirection = MGridDirection;
  Object.defineProperty(MGridJustify, 'flexStart', {get: MGridJustify$flexStart_getInstance});
  Object.defineProperty(MGridJustify, 'center', {get: MGridJustify$center_getInstance});
  Object.defineProperty(MGridJustify, 'flexEnd', {get: MGridJustify$flexEnd_getInstance});
  Object.defineProperty(MGridJustify, 'spaceBetween', {get: MGridJustify$spaceBetween_getInstance});
  Object.defineProperty(MGridJustify, 'spaceAround', {get: MGridJustify$spaceAround_getInstance});
  package$components.MGridJustify = MGridJustify;
  Object.defineProperty(MGridSize, 'cellsFalse', {get: MGridSize$cellsFalse_getInstance});
  Object.defineProperty(MGridSize, 'cellsAuto', {get: MGridSize$cellsAuto_getInstance});
  Object.defineProperty(MGridSize, 'cellsTrue', {get: MGridSize$cellsTrue_getInstance});
  Object.defineProperty(MGridSize, 'cells1', {get: MGridSize$cells1_getInstance});
  Object.defineProperty(MGridSize, 'cells2', {get: MGridSize$cells2_getInstance});
  Object.defineProperty(MGridSize, 'cells3', {get: MGridSize$cells3_getInstance});
  Object.defineProperty(MGridSize, 'cells4', {get: MGridSize$cells4_getInstance});
  Object.defineProperty(MGridSize, 'cells5', {get: MGridSize$cells5_getInstance});
  Object.defineProperty(MGridSize, 'cells6', {get: MGridSize$cells6_getInstance});
  Object.defineProperty(MGridSize, 'cells7', {get: MGridSize$cells7_getInstance});
  Object.defineProperty(MGridSize, 'cells8', {get: MGridSize$cells8_getInstance});
  Object.defineProperty(MGridSize, 'cells9', {get: MGridSize$cells9_getInstance});
  Object.defineProperty(MGridSize, 'cells10', {get: MGridSize$cells10_getInstance});
  Object.defineProperty(MGridSize, 'cells11', {get: MGridSize$cells11_getInstance});
  Object.defineProperty(MGridSize, 'cells12', {get: MGridSize$cells12_getInstance});
  package$components.MGridSize = MGridSize;
  Object.defineProperty(MGridWrap, 'noWrap', {get: MGridWrap$noWrap_getInstance});
  Object.defineProperty(MGridWrap, 'wrap', {get: MGridWrap$wrap_getInstance});
  Object.defineProperty(MGridWrap, 'wrapReverse', {get: MGridWrap$wrapReverse_getInstance});
  package$components.MGridWrap = MGridWrap;
  Object.defineProperty(MGridSpacing, 'spacing0', {get: MGridSpacing$spacing0_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing1', {get: MGridSpacing$spacing1_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing2', {get: MGridSpacing$spacing2_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing3', {get: MGridSpacing$spacing3_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing4', {get: MGridSpacing$spacing4_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing5', {get: MGridSpacing$spacing5_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing6', {get: MGridSpacing$spacing6_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing7', {get: MGridSpacing$spacing7_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing8', {get: MGridSpacing$spacing8_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing9', {get: MGridSpacing$spacing9_getInstance});
  Object.defineProperty(MGridSpacing, 'spacing10', {get: MGridSpacing$spacing10_getInstance});
  package$components.MGridSpacing = MGridSpacing;
  package$components.GridSizeDelegate = GridSizeDelegate;
  package$components.GridSpacingDelegate = GridSpacingDelegate;
  Object.defineProperty(MHiddenImplementation, 'js', {get: MHiddenImplementation$js_getInstance});
  Object.defineProperty(MHiddenImplementation, 'css', {get: MHiddenImplementation$css_getInstance});
  package$components.MHiddenImplementation = MHiddenImplementation;
  Object.defineProperty(MIconColor, 'inherit', {get: MIconColor$inherit_getInstance});
  Object.defineProperty(MIconColor, 'primary', {get: MIconColor$primary_getInstance});
  Object.defineProperty(MIconColor, 'secondary', {get: MIconColor$secondary_getInstance});
  Object.defineProperty(MIconColor, 'action', {get: MIconColor$action_getInstance});
  Object.defineProperty(MIconColor, 'error', {get: MIconColor$error_getInstance});
  Object.defineProperty(MIconColor, 'disabled', {get: MIconColor$disabled_getInstance});
  package$components.MIconColor = MIconColor;
  Object.defineProperty(MIconFontSize, 'inherit', {get: MIconFontSize$inherit_getInstance});
  Object.defineProperty(MIconFontSize, 'default', {get: MIconFontSize$default_getInstance});
  Object.defineProperty(MIconFontSize, 'small', {get: MIconFontSize$small_getInstance});
  Object.defineProperty(MIconFontSize, 'large', {get: MIconFontSize$large_getInstance});
  package$components.MIconFontSize = MIconFontSize;
  Object.defineProperty(MLinearProgressColor, 'primary', {get: MLinearProgressColor$primary_getInstance});
  Object.defineProperty(MLinearProgressColor, 'secondary', {get: MLinearProgressColor$secondary_getInstance});
  package$components.MLinearProgressColor = MLinearProgressColor;
  Object.defineProperty(MLinearProgressVariant, 'determinate', {get: MLinearProgressVariant$determinate_getInstance});
  Object.defineProperty(MLinearProgressVariant, 'indeterminate', {get: MLinearProgressVariant$indeterminate_getInstance});
  Object.defineProperty(MLinearProgressVariant, 'buffer', {get: MLinearProgressVariant$buffer_getInstance});
  Object.defineProperty(MLinearProgressVariant, 'query', {get: MLinearProgressVariant$query_getInstance});
  package$components.MLinearProgressVariant = MLinearProgressVariant;
  Object.defineProperty(MLinkUnderline, 'none', {get: MLinkUnderline$none_getInstance});
  Object.defineProperty(MLinkUnderline, 'hover', {get: MLinkUnderline$hover_getInstance});
  Object.defineProperty(MLinkUnderline, 'always', {get: MLinkUnderline$always_getInstance});
  package$components.MLinkUnderline = MLinkUnderline;
  package$components.OnClosePropWithReasonDelegate = OnClosePropWithReasonDelegate;
  Object.defineProperty(MPaperVariant, 'elevation', {get: MPaperVariant$elevation_getInstance});
  Object.defineProperty(MPaperVariant, 'outlined', {get: MPaperVariant$outlined_getInstance});
  package$components.MPaperVariant = MPaperVariant;
  Object.defineProperty(MPopoverAnchorRef, 'anchorEl', {get: MPopoverAnchorRef$anchorEl_getInstance});
  Object.defineProperty(MPopoverAnchorRef, 'anchorPosition', {get: MPopoverAnchorRef$anchorPosition_getInstance});
  Object.defineProperty(MPopoverAnchorRef, 'none', {get: MPopoverAnchorRef$none_getInstance});
  package$components.MPopoverAnchorRef = MPopoverAnchorRef;
  Object.defineProperty(MPopoverHorizontalPosition, 'left', {get: MPopoverHorizontalPosition$left_getInstance});
  Object.defineProperty(MPopoverHorizontalPosition, 'center', {get: MPopoverHorizontalPosition$center_getInstance});
  Object.defineProperty(MPopoverHorizontalPosition, 'right', {get: MPopoverHorizontalPosition$right_getInstance});
  package$components.MPopoverHorizontalPosition = MPopoverHorizontalPosition;
  Object.defineProperty(MPopoverVerticalPosition, 'top', {get: MPopoverVerticalPosition$top_getInstance});
  Object.defineProperty(MPopoverVerticalPosition, 'center', {get: MPopoverVerticalPosition$center_getInstance});
  Object.defineProperty(MPopoverVerticalPosition, 'bottom', {get: MPopoverVerticalPosition$bottom_getInstance});
  package$components.MPopoverVerticalPosition = MPopoverVerticalPosition;
  Object.defineProperty(MSliderOrientation, 'horizontal', {get: MSliderOrientation$horizontal_getInstance});
  Object.defineProperty(MSliderOrientation, 'vertical', {get: MSliderOrientation$vertical_getInstance});
  package$components.MSliderOrientation = MSliderOrientation;
  Object.defineProperty(MSliderValueLabelDisplay, 'on', {get: MSliderValueLabelDisplay$on_getInstance});
  Object.defineProperty(MSliderValueLabelDisplay, 'off', {get: MSliderValueLabelDisplay$off_getInstance});
  Object.defineProperty(MSliderValueLabelDisplay, 'auto', {get: MSliderValueLabelDisplay$auto_getInstance});
  package$components.MSliderValueLabelDisplay = MSliderValueLabelDisplay;
  Object.defineProperty(MSnackbarHorizAnchor, 'left', {get: MSnackbarHorizAnchor$left_getInstance});
  Object.defineProperty(MSnackbarHorizAnchor, 'center', {get: MSnackbarHorizAnchor$center_getInstance});
  Object.defineProperty(MSnackbarHorizAnchor, 'right', {get: MSnackbarHorizAnchor$right_getInstance});
  package$components.MSnackbarHorizAnchor = MSnackbarHorizAnchor;
  Object.defineProperty(MSnackbarVertAnchor, 'top', {get: MSnackbarVertAnchor$top_getInstance});
  Object.defineProperty(MSnackbarVertAnchor, 'bottom', {get: MSnackbarVertAnchor$bottom_getInstance});
  package$components.MSnackbarVertAnchor = MSnackbarVertAnchor;
  Object.defineProperty(MSnackbarOnCloseReason, 'timeout', {get: MSnackbarOnCloseReason$timeout_getInstance});
  Object.defineProperty(MSnackbarOnCloseReason, 'clickaway', {get: MSnackbarOnCloseReason$clickaway_getInstance});
  package$components.MSnackbarOnCloseReason = MSnackbarOnCloseReason;
  Object.defineProperty(SvgShapeRendering, 'auto', {get: SvgShapeRendering$auto_getInstance});
  Object.defineProperty(SvgShapeRendering, 'optimizeSpeed', {get: SvgShapeRendering$optimizeSpeed_getInstance});
  Object.defineProperty(SvgShapeRendering, 'crispEdges', {get: SvgShapeRendering$crispEdges_getInstance});
  Object.defineProperty(SvgShapeRendering, 'geometricPrecision', {get: SvgShapeRendering$geometricPrecision_getInstance});
  package$components.SvgShapeRendering = SvgShapeRendering;
  Object.defineProperty(MSwitchEdge, 'start', {get: MSwitchEdge$start_getInstance});
  Object.defineProperty(MSwitchEdge, 'end', {get: MSwitchEdge$end_getInstance});
  package$components.MSwitchEdge = MSwitchEdge;
  Object.defineProperty(MTabTextColor, 'secondary', {get: MTabTextColor$secondary_getInstance});
  Object.defineProperty(MTabTextColor, 'primary', {get: MTabTextColor$primary_getInstance});
  Object.defineProperty(MTabTextColor, 'inherit', {get: MTabTextColor$inherit_getInstance});
  package$components.MTabTextColor = MTabTextColor;
  Object.defineProperty(MTabScrollButtons, 'auto', {get: MTabScrollButtons$auto_getInstance});
  Object.defineProperty(MTabScrollButtons, 'desktop', {get: MTabScrollButtons$desktop_getInstance});
  Object.defineProperty(MTabScrollButtons, 'on', {get: MTabScrollButtons$on_getInstance});
  Object.defineProperty(MTabScrollButtons, 'off', {get: MTabScrollButtons$off_getInstance});
  package$components.MTabScrollButtons = MTabScrollButtons;
  Object.defineProperty(MTabIndicatorColor, 'secondary', {get: MTabIndicatorColor$secondary_getInstance});
  Object.defineProperty(MTabIndicatorColor, 'primary', {get: MTabIndicatorColor$primary_getInstance});
  package$components.MTabIndicatorColor = MTabIndicatorColor;
  Object.defineProperty(MTabVariant, 'standard', {get: MTabVariant$standard_getInstance});
  Object.defineProperty(MTabVariant, 'scrollable', {get: MTabVariant$scrollable_getInstance});
  Object.defineProperty(MTabVariant, 'fullWidth', {get: MTabVariant$fullWidth_getInstance});
  package$components.MTabVariant = MTabVariant;
  Object.defineProperty(MTabOrientation, 'horizontal', {get: MTabOrientation$horizontal_getInstance});
  Object.defineProperty(MTabOrientation, 'vertical', {get: MTabOrientation$vertical_getInstance});
  package$components.MTabOrientation = MTabOrientation;
  Object.defineProperty(MTextFieldColor, 'primary', {get: MTextFieldColor$primary_getInstance});
  Object.defineProperty(MTextFieldColor, 'secondary', {get: MTextFieldColor$secondary_getInstance});
  package$components.MTextFieldColor = MTextFieldColor;
  Object.defineProperty(ToolbarVariant, 'regular', {get: ToolbarVariant$regular_getInstance});
  Object.defineProperty(ToolbarVariant, 'dense', {get: ToolbarVariant$dense_getInstance});
  package$components.ToolbarVariant = ToolbarVariant;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  Object.defineProperty(TooltipPlacement, 'bottomEnd', {get: TooltipPlacement$bottomEnd_getInstance});
  Object.defineProperty(TooltipPlacement, 'bottomStart', {get: TooltipPlacement$bottomStart_getInstance});
  Object.defineProperty(TooltipPlacement, 'bottom', {get: TooltipPlacement$bottom_getInstance});
  Object.defineProperty(TooltipPlacement, 'leftEnd', {get: TooltipPlacement$leftEnd_getInstance});
  Object.defineProperty(TooltipPlacement, 'leftStart', {get: TooltipPlacement$leftStart_getInstance});
  Object.defineProperty(TooltipPlacement, 'left', {get: TooltipPlacement$left_getInstance});
  Object.defineProperty(TooltipPlacement, 'rightEnd', {get: TooltipPlacement$rightEnd_getInstance});
  Object.defineProperty(TooltipPlacement, 'rightStart', {get: TooltipPlacement$rightStart_getInstance});
  Object.defineProperty(TooltipPlacement, 'right', {get: TooltipPlacement$right_getInstance});
  Object.defineProperty(TooltipPlacement, 'topEnd', {get: TooltipPlacement$topEnd_getInstance});
  Object.defineProperty(TooltipPlacement, 'topStart', {get: TooltipPlacement$topStart_getInstance});
  Object.defineProperty(TooltipPlacement, 'top', {get: TooltipPlacement$top_getInstance});
  package$components.TooltipPlacement = TooltipPlacement;
  Object.defineProperty(MTypographyAlign, 'inherit', {get: MTypographyAlign$inherit_getInstance});
  Object.defineProperty(MTypographyAlign, 'left', {get: MTypographyAlign$left_getInstance});
  Object.defineProperty(MTypographyAlign, 'center', {get: MTypographyAlign$center_getInstance});
  Object.defineProperty(MTypographyAlign, 'right', {get: MTypographyAlign$right_getInstance});
  Object.defineProperty(MTypographyAlign, 'justify', {get: MTypographyAlign$justify_getInstance});
  package$components.MTypographyAlign = MTypographyAlign;
  Object.defineProperty(MTypographyColor, 'initial', {get: MTypographyColor$initial_getInstance});
  Object.defineProperty(MTypographyColor, 'inherit', {get: MTypographyColor$inherit_getInstance});
  Object.defineProperty(MTypographyColor, 'primary', {get: MTypographyColor$primary_getInstance});
  Object.defineProperty(MTypographyColor, 'secondary', {get: MTypographyColor$secondary_getInstance});
  Object.defineProperty(MTypographyColor, 'textPrimary', {get: MTypographyColor$textPrimary_getInstance});
  Object.defineProperty(MTypographyColor, 'textSecondary', {get: MTypographyColor$textSecondary_getInstance});
  Object.defineProperty(MTypographyColor, 'error', {get: MTypographyColor$error_getInstance});
  package$components.MTypographyColor = MTypographyColor;
  Object.defineProperty(MTypographyVariant, 'h1', {get: MTypographyVariant$h1_getInstance});
  Object.defineProperty(MTypographyVariant, 'h2', {get: MTypographyVariant$h2_getInstance});
  Object.defineProperty(MTypographyVariant, 'h3', {get: MTypographyVariant$h3_getInstance});
  Object.defineProperty(MTypographyVariant, 'h4', {get: MTypographyVariant$h4_getInstance});
  Object.defineProperty(MTypographyVariant, 'h5', {get: MTypographyVariant$h5_getInstance});
  Object.defineProperty(MTypographyVariant, 'h6', {get: MTypographyVariant$h6_getInstance});
  Object.defineProperty(MTypographyVariant, 'subtitle1', {get: MTypographyVariant$subtitle1_getInstance});
  Object.defineProperty(MTypographyVariant, 'subtitle2', {get: MTypographyVariant$subtitle2_getInstance});
  Object.defineProperty(MTypographyVariant, 'body1', {get: MTypographyVariant$body1_getInstance});
  Object.defineProperty(MTypographyVariant, 'body2', {get: MTypographyVariant$body2_getInstance});
  Object.defineProperty(MTypographyVariant, 'caption', {get: MTypographyVariant$caption_getInstance});
  Object.defineProperty(MTypographyVariant, 'button', {get: MTypographyVariant$button_getInstance});
  Object.defineProperty(MTypographyVariant, 'overline', {get: MTypographyVariant$overline_getInstance});
  Object.defineProperty(MTypographyVariant, 'srOnly', {get: MTypographyVariant$srOnly_getInstance});
  Object.defineProperty(MTypographyVariant, 'inherit', {get: MTypographyVariant$inherit_getInstance});
  package$components.MTypographyVariant = MTypographyVariant;
  var package$button = package$components.button || (package$components.button = {});
  Object.defineProperty(MButtonSize, 'small', {get: MButtonSize$small_getInstance});
  Object.defineProperty(MButtonSize, 'medium', {get: MButtonSize$medium_getInstance});
  Object.defineProperty(MButtonSize, 'large', {get: MButtonSize$large_getInstance});
  package$button.MButtonSize = MButtonSize;
  Object.defineProperty(MButtonVariant, 'text', {get: MButtonVariant$text_getInstance});
  Object.defineProperty(MButtonVariant, 'outlined', {get: MButtonVariant$outlined_getInstance});
  Object.defineProperty(MButtonVariant, 'contained', {get: MButtonVariant$contained_getInstance});
  package$button.MButtonVariant = MButtonVariant;
  Object.defineProperty(MButtonGroupVariant, 'text', {get: MButtonGroupVariant$text_getInstance});
  Object.defineProperty(MButtonGroupVariant, 'outlined', {get: MButtonGroupVariant$outlined_getInstance});
  Object.defineProperty(MButtonGroupVariant, 'contained', {get: MButtonGroupVariant$contained_getInstance});
  package$button.MButtonGroupVariant = MButtonGroupVariant;
  Object.defineProperty(MButtonGroupOrientation, 'vertical', {get: MButtonGroupOrientation$vertical_getInstance});
  Object.defineProperty(MButtonGroupOrientation, 'horizontal', {get: MButtonGroupOrientation$horizontal_getInstance});
  package$button.MButtonGroupOrientation = MButtonGroupOrientation;
  Object.defineProperty(MFabVariant, 'round', {get: MFabVariant$round_getInstance});
  Object.defineProperty(MFabVariant, 'extended', {get: MFabVariant$extended_getInstance});
  package$button.MFabVariant = MFabVariant;
  Object.defineProperty(MIconButtonSize, 'small', {get: MIconButtonSize$small_getInstance});
  Object.defineProperty(MIconButtonSize, 'medium', {get: MIconButtonSize$medium_getInstance});
  package$button.MIconButtonSize = MIconButtonSize;
  Object.defineProperty(MIconEdge, 'start', {get: MIconEdge$start_getInstance});
  Object.defineProperty(MIconEdge, 'end', {get: MIconEdge$end_getInstance});
  package$button.MIconEdge = MIconEdge;
  var package$card = package$components.card || (package$components.card = {});
  package$card.mCardHeader_teifvr$ = mCardHeader_0;
  Object.defineProperty(DialogScroll, 'paper', {get: DialogScroll$paper_getInstance});
  Object.defineProperty(DialogScroll, 'body', {get: DialogScroll$body_getInstance});
  var package$dialog = package$components.dialog || (package$components.dialog = {});
  package$dialog.DialogScroll = DialogScroll;
  Object.defineProperty(ModalOnCloseReason, 'escapeKeyDown', {get: ModalOnCloseReason$escapeKeyDown_getInstance});
  Object.defineProperty(ModalOnCloseReason, 'backdropClick', {get: ModalOnCloseReason$backdropClick_getInstance});
  package$dialog.ModalOnCloseReason = ModalOnCloseReason;
  Object.defineProperty(MFormControlVariant, 'standard', {get: MFormControlVariant$standard_getInstance});
  Object.defineProperty(MFormControlVariant, 'outlined', {get: MFormControlVariant$outlined_getInstance});
  Object.defineProperty(MFormControlVariant, 'filled', {get: MFormControlVariant$filled_getInstance});
  var package$form = package$components.form || (package$components.form = {});
  package$form.MFormControlVariant = MFormControlVariant;
  Object.defineProperty(MFormControlComponent, 'div', {get: MFormControlComponent$div_getInstance});
  Object.defineProperty(MFormControlComponent, 'fieldSet', {get: MFormControlComponent$fieldSet_getInstance});
  package$form.MFormControlComponent = MFormControlComponent;
  Object.defineProperty(MFormControlMargin, 'none', {get: MFormControlMargin$none_getInstance});
  Object.defineProperty(MFormControlMargin, 'dense', {get: MFormControlMargin$dense_getInstance});
  Object.defineProperty(MFormControlMargin, 'normal', {get: MFormControlMargin$normal_getInstance});
  package$form.MFormControlMargin = MFormControlMargin;
  Object.defineProperty(MLabelPlacement, 'end', {get: MLabelPlacement$end_getInstance});
  Object.defineProperty(MLabelPlacement, 'start', {get: MLabelPlacement$start_getInstance});
  Object.defineProperty(MLabelPlacement, 'top', {get: MLabelPlacement$top_getInstance});
  Object.defineProperty(MLabelPlacement, 'bottom', {get: MLabelPlacement$bottom_getInstance});
  package$form.MLabelPlacement = MLabelPlacement;
  Object.defineProperty(MLabelMargin, 'dense', {get: MLabelMargin$dense_getInstance});
  package$form.MLabelMargin = MLabelMargin;
  var package$gridlist = package$components.gridlist || (package$components.gridlist = {});
  Object.defineProperty(MActionPosition, 'left', {get: MActionPosition$left_getInstance});
  Object.defineProperty(MActionPosition, 'right', {get: MActionPosition$right_getInstance});
  package$gridlist.MActionPosition = MActionPosition;
  Object.defineProperty(MTitlePosition, 'top', {get: MTitlePosition$top_getInstance});
  Object.defineProperty(MTitlePosition, 'bottom', {get: MTitlePosition$bottom_getInstance});
  package$gridlist.MTitlePosition = MTitlePosition;
  var package$input = package$components.input || (package$components.input = {});
  Object.defineProperty(MInputAdornmentPosition, 'start', {get: MInputAdornmentPosition$start_getInstance});
  Object.defineProperty(MInputAdornmentPosition, 'end', {get: MInputAdornmentPosition$end_getInstance});
  package$input.MInputAdornmentPosition = MInputAdornmentPosition;
  Object.defineProperty(MInputMargin, 'dense', {get: MInputMargin$dense_getInstance});
  Object.defineProperty(MInputMargin, 'none', {get: MInputMargin$none_getInstance});
  package$input.MInputMargin = MInputMargin;
  Object.defineProperty(MAlertVariant, 'filled', {get: MAlertVariant$filled_getInstance});
  Object.defineProperty(MAlertVariant, 'outlined', {get: MAlertVariant$outlined_getInstance});
  Object.defineProperty(MAlertVariant, 'standard', {get: MAlertVariant$standard_getInstance});
  var package$lab = package$components.lab || (package$components.lab = {});
  var package$alert = package$lab.alert || (package$lab.alert = {});
  package$alert.MAlertVariant = MAlertVariant;
  Object.defineProperty(MAlertSeverity, 'error', {get: MAlertSeverity$error_getInstance});
  Object.defineProperty(MAlertSeverity, 'info', {get: MAlertSeverity$info_getInstance});
  Object.defineProperty(MAlertSeverity, 'success', {get: MAlertSeverity$success_getInstance});
  Object.defineProperty(MAlertSeverity, 'warning', {get: MAlertSeverity$warning_getInstance});
  package$alert.MAlertSeverity = MAlertSeverity;
  var package$list = package$components.list || (package$components.list = {});
  Object.defineProperty(MListItemAlignItems, 'flexStart', {get: MListItemAlignItems$flexStart_getInstance});
  Object.defineProperty(MListItemAlignItems, 'center', {get: MListItemAlignItems$center_getInstance});
  package$list.MListItemAlignItems = MListItemAlignItems;
  Object.defineProperty(MListSubheaderColor, 'default', {get: MListSubheaderColor$default_getInstance});
  Object.defineProperty(MListSubheaderColor, 'primary', {get: MListSubheaderColor$primary_getInstance});
  Object.defineProperty(MListSubheaderColor, 'inherit', {get: MListSubheaderColor$inherit_getInstance});
  package$list.MListSubheaderColor = MListSubheaderColor;
  Object.defineProperty(MenuOnCloseReason, 'escapeKeyDown', {get: MenuOnCloseReason$escapeKeyDown_getInstance});
  Object.defineProperty(MenuOnCloseReason, 'backdropClick', {get: MenuOnCloseReason$backdropClick_getInstance});
  Object.defineProperty(MenuOnCloseReason, 'tabKeyDown', {get: MenuOnCloseReason$tabKeyDown_getInstance});
  var package$menu = package$components.menu || (package$components.menu = {});
  package$menu.MenuOnCloseReason = MenuOnCloseReason;
  Object.defineProperty(MMenuVariant, 'menu', {get: MMenuVariant$menu_getInstance});
  Object.defineProperty(MMenuVariant, 'selectedMenu', {get: MMenuVariant$selectedMenu_getInstance});
  package$menu.MMenuVariant = MMenuVariant;
  Object.defineProperty(Breakpoint, 'xs', {get: Breakpoint$xs_getInstance});
  Object.defineProperty(Breakpoint, 'sm', {get: Breakpoint$sm_getInstance});
  Object.defineProperty(Breakpoint, 'md', {get: Breakpoint$md_getInstance});
  Object.defineProperty(Breakpoint, 'lg', {get: Breakpoint$lg_getInstance});
  Object.defineProperty(Breakpoint, 'xl', {get: Breakpoint$xl_getInstance});
  var package$styles = package$components.styles || (package$components.styles = {});
  package$styles.Breakpoint = Breakpoint;
  package$styles.createMuiTheme_m0ai6n$ = createMuiTheme;
  var package$table = package$components.table || (package$components.table = {});
  Object.defineProperty(MTableCellPadding, 'default', {get: MTableCellPadding$default_getInstance});
  Object.defineProperty(MTableCellPadding, 'checkbox', {get: MTableCellPadding$checkbox_getInstance});
  Object.defineProperty(MTableCellPadding, 'none', {get: MTableCellPadding$none_getInstance});
  package$table.MTableCellPadding = MTableCellPadding;
  Object.defineProperty(MTableCellAlign, 'inherit', {get: MTableCellAlign$inherit_getInstance});
  Object.defineProperty(MTableCellAlign, 'left', {get: MTableCellAlign$left_getInstance});
  Object.defineProperty(MTableCellAlign, 'center', {get: MTableCellAlign$center_getInstance});
  Object.defineProperty(MTableCellAlign, 'right', {get: MTableCellAlign$right_getInstance});
  Object.defineProperty(MTableCellAlign, 'justify', {get: MTableCellAlign$justify_getInstance});
  package$table.MTableCellAlign = MTableCellAlign;
  Object.defineProperty(MTableCellVariant, 'head', {get: MTableCellVariant$head_getInstance});
  Object.defineProperty(MTableCellVariant, 'body', {get: MTableCellVariant$body_getInstance});
  Object.defineProperty(MTableCellVariant, 'footer', {get: MTableCellVariant$footer_getInstance});
  package$table.MTableCellVariant = MTableCellVariant;
  Object.defineProperty(MTableCellSize, 'small', {get: MTableCellSize$small_getInstance});
  Object.defineProperty(MTableCellSize, 'medium', {get: MTableCellSize$medium_getInstance});
  package$table.MTableCellSize = MTableCellSize;
  Object.defineProperty(MTableSortLabelDirection, 'asc', {get: MTableSortLabelDirection$asc_getInstance});
  Object.defineProperty(MTableSortLabelDirection, 'desc', {get: MTableSortLabelDirection$desc_getInstance});
  package$table.MTableSortLabelDirection = MTableSortLabelDirection;
  var package$transitions = package$components.transitions || (package$components.transitions = {});
  package$transitions.TransitionDurationDelegate = TransitionDurationDelegate;
  package$transitions.TransitionDurationDelegateNullable = TransitionDurationDelegateNullable;
  package$transitions.TransitionDurationWithAutoDelegate = TransitionDurationWithAutoDelegate;
  package$transitions.TransitionComponentDelegate = TransitionComponentDelegate;
  color = new EnumPropToString(MAppBarColor$values());
  position = new EnumPropToString(MAppBarPosition$values());
  variant = new EnumPropToStringNullable(MAvatarVariant$values());
  transitionDuration = new TransitionDurationDelegate();
  anchorOriginHorizontal = new EnumPropToString(MBadgeAnchorOriginHorizontal$values(), 'anchorOrigin', 'horizontal');
  anchorOriginVertical = new EnumPropToString(MBadgeAnchorOriginVertical$values(), 'anchorOrigin', 'vertical');
  color_0 = new EnumPropToString(MBadgeColor$values());
  overlap = new EnumPropToString(MBadgeOverlap$values());
  variant_0 = new EnumPropToString(MBadgeVariant$values());
  color_1 = new EnumPropToString(MOptionColor$values());
  color_2 = new EnumPropToString(MChipColor$values());
  size = new EnumPropToString(MChipSize$values());
  variant_1 = new EnumPropToString(MChipVariant$values());
  color_3 = new EnumPropToString(MCircularProgressColor$values());
  variant_2 = new EnumPropToString(MCircularProgressVariant$values());
  orientation = new EnumPropToString(MDividerOrientation$values());
  variant_3 = new EnumPropToString(MDividerVariant$values());
  anchor = new EnumPropToString(MDrawerAnchor$values());
  transitionDuration_0 = new TransitionDurationDelegateNullable();
  variant_4 = new EnumPropToString(MDrawerVariant$values());
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
  initialWidth = new EnumPropToStringNullable(Breakpoint$values());
  implementation = new EnumPropToString(MHiddenImplementation$values());
  color_4 = new EnumPropToString(MIconColor$values());
  fontSize = new EnumPropToString(MIconFontSize$values());
  color_5 = new EnumPropToString(MLinearProgressColor$values());
  variant_5 = new EnumPropToString(MLinearProgressVariant$values());
  underline = new EnumPropToString(MLinkUnderline$values());
  margin = new EnumPropToStringNullable(MInputMargin$values());
  variant_6 = new EnumPropToString(MFormControlVariant$values());
  variant_7 = new EnumPropToString(MPaperVariant$values());
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
  color_6 = new EnumPropToString(MOptionColor$values());
  size_0 = new EnumPropToString(MIconButtonSize$values());
  orientation_0 = new EnumPropToString(MSliderOrientation$values());
  valueLabelDisplay = new EnumPropToString(MSliderValueLabelDisplay$values());
  anchorOriginHorizontal_1 = new EnumPropToStringNullable(MSnackbarHorizAnchor$values(), 'anchorOrigin', 'horizontal');
  anchorOriginVertical_1 = new EnumPropToStringNullable(MSnackbarVertAnchor$values(), 'anchorOrigin', 'vertical');
  onClose = new OnClosePropWithReasonDelegate(MSnackbarOnCloseReason$values());
  transitionComponent_0 = new TransitionComponentDelegate();
  transitionDuration_2 = new TransitionDurationDelegate();
  shapeRendering = new EnumPropToStringNullable(SvgShapeRendering$values());
  color_7 = new EnumPropToString(MOptionColor$values());
  edge = new EnumPropToString(MSwitchEdge$values());
  size_1 = new EnumPropToString(MIconButtonSize$values());
  indicatorColor = new EnumPropToString(MTabIndicatorColor$values());
  orientation_1 = new EnumPropToString(MTabOrientation$values());
  scrollButtons = new EnumPropToString(MTabScrollButtons$values());
  textColor = new EnumPropToString(MTabTextColor$values());
  variant_8 = new EnumPropToString(MTabVariant$values());
  color_8 = new EnumPropToString(MTextFieldColor$values());
  themeOptions = {typography: {useNextVariants: true}};
  defaultTheme = createMuiTheme(themeOptions);
  themeContext = createContext(defaultTheme);
  variant_9 = new EnumPropToString(ToolbarVariant$values());
  placement = new EnumPropToString(TooltipPlacement$values());
  align = new EnumPropToString(MTypographyAlign$values());
  color_9 = new EnumPropToString(MTypographyColor$values());
  variant_10 = new EnumPropToString(MTypographyVariant$values());
  transitionComponent_1 = new TransitionComponentDelegate();
  color_10 = new EnumPropToString(MColor$values());
  size_2 = new EnumPropToString(MButtonSize$values());
  variant_11 = new EnumPropToStringNullable(MButtonVariant$values());
  color_11 = new EnumPropToString(MColor$values());
  orientation_2 = new EnumPropToString(MButtonGroupOrientation$values());
  size_3 = new EnumPropToString(MButtonSize$values());
  variant_12 = new EnumPropToString(MButtonGroupVariant$values());
  color_12 = new EnumPropToString(MColor$values());
  size_4 = new EnumPropToString(MButtonSize$values());
  variant_13 = new EnumPropToString(MFabVariant$values());
  color_13 = new EnumPropToString(MColor$values());
  edge_0 = new EnumPropToStringNullable(MIconEdge$values());
  size_5 = new EnumPropToString(MIconButtonSize$values());
  cardHeaderComponent = $module$_material_ui_core_CardHeader.default;
  scroll = new EnumPropToString(DialogScroll$values());
  transitionComponent_2 = new TransitionComponentDelegate();
  transitionDuration_3 = new TransitionDurationDelegateNullable();
  onClose_0 = new OnClosePropWithReasonDelegate(ModalOnCloseReason$values());
  margin_0 = new EnumPropToString(MFormControlMargin$values());
  component_4 = new EnumPropToString(MFormControlComponent$values());
  variant_14 = new EnumPropToString(MFormControlVariant$values());
  labelPlacement = new EnumPropToString(MLabelPlacement$values());
  margin_1 = new EnumPropToStringNullable(MLabelMargin$values());
  variant_15 = new EnumPropToString(MFormControlVariant$values());
  actionPosition = new EnumPropToString(MActionPosition$values());
  titlePosition = new EnumPropToString(MTitlePosition$values());
  position_0 = new EnumPropToStringNullable(MInputAdornmentPosition$values());
  variant_16 = new EnumPropToStringNullable(MFormControlVariant$values());
  margin_2 = new EnumPropToStringNullable(MInputMargin$values());
  margin_3 = new EnumPropToStringNullable(MLabelMargin$values());
  variant_17 = new EnumPropToString(MFormControlVariant$values());
  variant_18 = new EnumPropToStringNullable(MAlertVariant$values());
  severity = new EnumPropToStringNullable(MAlertSeverity$values());
  alignItems_0 = new EnumPropToString(MListItemAlignItems$values());
  color_14 = new EnumPropToString(MListSubheaderColor$values());
  variant_19 = new EnumPropToString(MMenuVariant$values());
  onClose_1 = new OnClosePropWithReasonDelegate(MenuOnCloseReason$values());
  padding_0 = new EnumPropToString(MTableCellPadding$values());
  size_6 = new EnumPropToString(MTableCellSize$values());
  align_0 = new EnumPropToString(MTableCellAlign$values());
  padding_1 = new EnumPropToString(MTableCellPadding$values());
  size_7 = new EnumPropToString(MTableCellSize$values());
  variant_20 = new EnumPropToString(MTableCellVariant$values());
  direction_0 = new EnumPropToString(MTableSortLabelDirection$values());
  timeout = new TransitionDurationWithAutoDelegate();
  timeout_0 = new TransitionDurationDelegate();
  timeout_1 = new TransitionDurationWithAutoDelegate();
  timeout_2 = new TransitionDurationDelegate();
  timeout_3 = new TransitionDurationDelegate();
  return _;
}(module.exports, require('kotlin'), require('@material-ui/core/AppBar'), require('@material-ui/core/Avatar'), require('@material-ui/core/Backdrop'), require('@material-ui/core/Badge'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('@material-ui/core/BottomNavigation'), require('@material-ui/core/BottomNavigationAction'), require('@material-ui/core/Breadcrumbs'), require('@material-ui/core/Checkbox'), require('kotlinx-html-js'), require('@material-ui/core/Chip'), require('@material-ui/core/CircularProgress'), require('styled-components'), require('kotlin-css'), require('@material-ui/core/ClickAwayListener'), require('@material-ui/core/Container'), require('@material-ui/core/CssBaseline'), require('@material-ui/core/Divider'), require('@material-ui/core/Drawer'), require('@material-ui/core/Grid'), require('@material-ui/core/Hidden'), require('@material-ui/core/Icon'), require('@material-ui/core/LinearProgress'), require('@material-ui/core/Link'), require('@material-ui/core/locale'), require('@material-ui/core/styles'), require('@material-ui/core/NativeSelect'), require('@material-ui/core/Paper'), require('@material-ui/core/Popover'), require('@material-ui/core/Radio'), require('@material-ui/core/RadioGroup'), require('@material-ui/core/Select'), require('@material-ui/core/Slider'), require('@material-ui/core/Snackbar'), require('@material-ui/core/SvgIcon'), require('react'), require('@material-ui/core/SwipeableDrawer'), require('@material-ui/core/Switch'), require('@material-ui/core/Tabs'), require('@material-ui/core/Tab'), require('@material-ui/core/TextareaAutosize'), require('@material-ui/core/TextField'), require('@material-ui/core/Toolbar'), require('@material-ui/core/Tooltip'), require('@material-ui/core/Typography'), require('@material-ui/core/Accordion'), require('@material-ui/core/AccordionActions'), require('@material-ui/core/AccordionDetails'), require('@material-ui/core/AccordionSummary'), require('@material-ui/core/Button'), require('@material-ui/core/ButtonGroup'), require('@material-ui/core/Fab'), require('@material-ui/core/IconButton'), require('@material-ui/core/Card'), require('@material-ui/core/CardActionArea'), require('@material-ui/core/CardActions'), require('@material-ui/core/CardContent'), require('@material-ui/core/CardHeader'), require('@material-ui/core/CardMedia'), require('@material-ui/core/Dialog'), require('@material-ui/core/DialogActions'), require('@material-ui/core/DialogContent'), require('@material-ui/core/DialogContentText'), require('@material-ui/core/DialogTitle'), require('@material-ui/core/ExpansionPanel'), require('@material-ui/core/ExpansionPanelActions'), require('@material-ui/core/ExpansionPanelDetails'), require('@material-ui/core/ExpansionPanelSummary'), require('@material-ui/core/FormControl'), require('@material-ui/core/FormControlLabel'), require('@material-ui/core/FormGroup'), require('@material-ui/core/FormHelperText'), require('@material-ui/core/FormLabel'), require('@material-ui/core/GridList'), require('@material-ui/core/GridListTile'), require('@material-ui/core/GridListTileBar'), require('@material-ui/core/FilledInput'), require('@material-ui/core/Input'), require('@material-ui/core/InputAdornment'), require('@material-ui/core/InputLabel'), require('@material-ui/core/OutlinedInput'), require('@material-ui/lab/Alert'), require('@material-ui/lab/AlertTitle'), require('@material-ui/core/List'), require('@material-ui/core/ListItem'), require('@material-ui/core/ListItemAvatar'), require('@material-ui/core/ListItemIcon'), require('@material-ui/core/ListItemSecondaryAction'), require('@material-ui/core/ListItemText'), require('@material-ui/core/ListSubheader'), require('@material-ui/core/Menu'), require('@material-ui/core/MenuItem'), require('@material-ui/core/MenuList'), require('@material-ui/core/styles/createMuiTheme'), require('@material-ui/styles/StylesProvider'), require('@material-ui/styles/jssPreset'), require('jss'), require('@material-ui/core/Table'), require('@material-ui/core/TableBody'), require('@material-ui/core/TableCell'), require('@material-ui/core/TableContainer'), require('@material-ui/core/TableFooter'), require('@material-ui/core/TableHead'), require('@material-ui/core/TablePagination'), require('@material-ui/core/TableRow'), require('@material-ui/core/TableSortLabel'), require('@material-ui/core/Collapse'), require('@material-ui/core/Fade'), require('@material-ui/core/Grow'), require('@material-ui/core/Slide'), require('@material-ui/core/Zoom')));

//# sourceMappingURL=muirwik-muirwik-components.js.map
