# Nativescript Rich Editor View

Nativescript Rich Editor View is beautiful Rich Text Editor.

## Installation


```javascript
tns plugin add nativescript-rich-editor-view
```

## Usage

### XML

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
  xmlns:ui="nativescript-rich-editor-view">
  <StackLayout class="p-20">
    <ui:RichEditorView hint="Insert text here..." class="rich-editor" height="200" />
  </StackLayout>
</Page>
```

```javascript
```

### Angular

<!-- First you need to include the `NativescriptBottomNavigationModule` in your app.module.ts -->

```html
<RichEditorView hint="Insert text here..." class="rich-editor" height="200"></RichEditorView>
```

```typescript
```

### Vue

<!-- First you need to include the `NativescriptBottomNavigationModule` in your app.module.ts -->

```html
<RichEditorView hint="Insert text here..." class="rich-editor" height="200"></RichEditorView>
```

```javascript
```

### CSS

You can also set or change the below properties in your css file

```css
.rich-editor {
    editor-background-color: #eeeeee;
    editor-font-size: 22;
    editor-font-color: red;
    editor-toolbar-background-color: #000000;
    editor-toolbar-color: #f8f8f8;
}
```

## Properties

| Property                 | Type             | Description                                 |
| ------------------------ | ---------------- | ------------------------------------------- |
| `backgroundColor`        | **string/color** | color of the RichEditorView                 |
| `fontSize`               | **number**       | font size for the RichEditorView text       |
| `fontColor`              | **string/color** | font color for the RichEditorView text      |
| `hint`                   | **string**       | placeholder for the RichEditorView          |
| `rToolbarBackgroundColor`| **string/color** | background color of RichEditorView toolbar  |
| `rToolbarColor`          | **string/color** | color icon of RichEditorView toolbar        |

## Author

Jonathan Mayunga, mayunga.j@gmail.com

## Credits

For Android we're using the [RichEditor for Android by Daichi Furiya](https://github.com/wasabeef/richeditor-android),
and for iOS [RichEditorView by Caesar Wirth](https://github.com/cjwirth/RichEditorView).

## License

Apache License Version 2.0, January 2004
