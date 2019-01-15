import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { View } from 'tns-core-modules/ui/content-view/content-view';
import { CssProperty, Property } from 'tns-core-modules/ui/core/properties';
import { Style } from 'tns-core-modules/ui/styling/style';
import { Color } from 'tns-core-modules/color';

export abstract class RichEditorViewBase extends View {

}

// BackgroundColor

export const backgroundColorProperty = new Property<RichEditorViewBase, string>(
  {
    name: 'backgroundColor'
  }
);

backgroundColorProperty.register(RichEditorViewBase);

export const backgroundColorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'editorBackgroundColor',
    cssName: 'editor-background-color',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);
backgroundColorCssProperty.register(Style);

// Height

export const heightProperty = new Property<RichEditorViewBase, number>(
  {
    name: 'height',
    valueConverter: v => parseInt(v)
  }
);

heightProperty.register(RichEditorViewBase);

export const heightCssProperty = new CssProperty<Style, number>(
  {
    name: 'editorHeight',
    cssName: 'editor-height',
    valueConverter: v => parseInt(v)
  }
);
heightCssProperty.register(Style);

// Fonts

export const fontSizeProperty = new Property<RichEditorViewBase, number>(
  {
    name: 'fontSize',
    valueConverter: v => parseInt(v)
  }
);

fontSizeProperty.register(RichEditorViewBase);

export const fontSizeCssProperty = new CssProperty<Style, number>(
  {
    name: 'editorFontSize',
    cssName: 'editor-font-size',
    valueConverter: v => parseInt(v)
  }
);
fontSizeCssProperty.register(Style);

export const fontColorProperty = new Property<RichEditorViewBase, string>(
  {
    name: 'fontColor'
  }
);

fontColorProperty.register(RichEditorViewBase);

export const fontColorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'editorFontColor',
    cssName: 'editor-font-color',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);
fontColorCssProperty.register(Style);

// Placeholder
export const hintProperty = new Property<RichEditorViewBase, string>(
  {
    name: 'hint'
  }
);

hintProperty.register(RichEditorViewBase);

// Toolbar
export const rToolbarBackgroundColorProperty = new Property<RichEditorViewBase, string>(
  {
    name: 'rToolbarBackgroundColor'
  }
);

rToolbarBackgroundColorProperty.register(RichEditorViewBase);

export const rToolbarBackgroundColorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'editorToolbarBackgroundColor',
    cssName: 'editor-toolbar-background-color',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);
rToolbarBackgroundColorCssProperty.register(Style);

export const rToolbarColorProperty = new Property<RichEditorViewBase, string>(
  {
    name: 'rToolbarColor'
  }
);

rToolbarColorProperty.register(RichEditorViewBase);

export const rToolbarColorCssProperty = new CssProperty<Style, Color>(
  {
    name: 'editorToolbarColor',
    cssName: 'editor-toolbar-color',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
  }
);
rToolbarColorCssProperty.register(Style);