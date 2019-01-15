/// <reference path="../node_modules/tns-platform-declarations/android.d.ts" />


declare module jp {
	export module wasabeef {
		export module richeditor {
			export class BuildConfig {
				public static class: java.lang.Class<jp.wasabeef.richeditor.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module richeditor {
			export class RichEditor {
				public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor>;
				public addJavascriptInterface(param0: any, param1: string): void;
				public clearFocusEditor(): void;
				public setHtml(param0: string): void;
				public exec(param0: string): void;
				public undo(): void;
				public setSuperscript(): void;
				public setPadding(param0: number, param1: number, param2: number, param3: number): void;
				public setOutdent(): void;
				public setIndent(): void;
				public setPlaceholder(param0: string): void;
				public setNumbers(): void;
				public setTextColor(param0: number): void;
				public insertImage(param0: string, param1: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setBold(): void;
				public setOnFocusEventListener(param0: jp.wasabeef.richeditor.RichEditor.OnFocusEventListener): void;
				public setBullets(): void;
				public setOnTextChangeListener(param0: jp.wasabeef.richeditor.RichEditor.OnTextChangeListener): void;
				public setInputEnabled(param0: java.lang.Boolean): void;
				public setItalic(): void;
				public setSubscript(): void;
				public setEditorBackgroundColor(param0: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setOnInitialLoadListener(param0: jp.wasabeef.richeditor.RichEditor.AfterInitialLoadListener): void;
				public setAlignRight(): void;
				public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
				public setStrikeThrough(): void;
				public insertLink(param0: string, param1: string): void;
				public loadCSS(param0: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public setHeading(param0: number): void;
				public getHtml(): string;
				public setFontSize(param0: number): void;
				public setAlignCenter(): void;
				public setBackgroundColor(param0: number): void;
				public setBackground(param0: string): void;
				public setTextBackgroundColor(param0: number): void;
				public insertTodo(): void;
				public focusEditor(): void;
				public setEditorFontSize(param0: number): void;
				public setUnderline(): void;
				public setAlignLeft(): void;
				public redo(): void;
				public removeFormat(): void;
				public setOnDecorationChangeListener(param0: jp.wasabeef.richeditor.RichEditor.OnDecorationStateListener): void;
				public setBackground(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setEditorFontColor(param0: number): void;
				public setEditorWidth(param0: number): void;
				public setBackgroundResource(param0: number): void;
				public setEditorHeight(param0: number): void;
				public setBlockquote(): void;
				public createWebviewClient(): jp.wasabeef.richeditor.RichEditor.EditorWebViewClient;
			}
			export module RichEditor {
				export class AfterInitialLoadListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.AfterInitialLoadListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$AfterInitialLoadListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAfterInitialLoad(param0: boolean): void;
					});
					public constructor();
					public onAfterInitialLoad(param0: boolean): void;
				}
				export class EditorWebViewClient {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.EditorWebViewClient>;
					public constructor(param0: jp.wasabeef.richeditor.RichEditor);
					public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
				}
				export class OnDecorationStateListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.OnDecorationStateListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$OnDecorationStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStateChangeListener(param0: string, param1: java.util.List<jp.wasabeef.richeditor.RichEditor.Type>): void;
					});
					public constructor();
					public onStateChangeListener(param0: string, param1: java.util.List<jp.wasabeef.richeditor.RichEditor.Type>): void;
				}
				export class OnFocusEventListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.OnFocusEventListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$OnFocusEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onChangeFocus(param0: java.lang.Boolean): void;
					});
					public constructor();
					public onChangeFocus(param0: java.lang.Boolean): void;
				}
				export class OnTextChangeListener {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.OnTextChangeListener>;
					/**
					 * Constructs a new instance of the jp.wasabeef.richeditor.RichEditor$OnTextChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTextChange(param0: string): void;
					});
					public constructor();
					public onTextChange(param0: string): void;
				}
				export class Type {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.Type>;
					public static BOLD: jp.wasabeef.richeditor.RichEditor.Type;
					public static ITALIC: jp.wasabeef.richeditor.RichEditor.Type;
					public static SUBSCRIPT: jp.wasabeef.richeditor.RichEditor.Type;
					public static SUPERSCRIPT: jp.wasabeef.richeditor.RichEditor.Type;
					public static STRIKETHROUGH: jp.wasabeef.richeditor.RichEditor.Type;
					public static UNDERLINE: jp.wasabeef.richeditor.RichEditor.Type;
					public static H1: jp.wasabeef.richeditor.RichEditor.Type;
					public static H2: jp.wasabeef.richeditor.RichEditor.Type;
					public static H3: jp.wasabeef.richeditor.RichEditor.Type;
					public static H4: jp.wasabeef.richeditor.RichEditor.Type;
					public static H5: jp.wasabeef.richeditor.RichEditor.Type;
					public static H6: jp.wasabeef.richeditor.RichEditor.Type;
					public static ORDEREDLIST: jp.wasabeef.richeditor.RichEditor.Type;
					public static UNORDEREDLIST: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYCENTER: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYFULL: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTUFYLEFT: jp.wasabeef.richeditor.RichEditor.Type;
					public static JUSTIFYRIGHT: jp.wasabeef.richeditor.RichEditor.Type;
					public static values(): native.Array<jp.wasabeef.richeditor.RichEditor.Type>;
					public static valueOf(param0: string): jp.wasabeef.richeditor.RichEditor.Type;
				}
				export class WebAppInterface {
					public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditor.WebAppInterface>;
					public constructor(param0: jp.wasabeef.richeditor.RichEditor);
					public onFocus(param0: string): void;
					public onBlur(param0: string): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module richeditor {
			export class RichEditorToolbar {
				public static class: java.lang.Class<jp.wasabeef.richeditor.RichEditorToolbar>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setEditor(param0: jp.wasabeef.richeditor.RichEditor): void;
				public setBackgroundColor(param0: number): void;
				public setColor(param0: number): void;
				
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module richeditor {
			export class Utils {
				public static class: java.lang.Class<jp.wasabeef.richeditor.Utils>;
				public static decodeResource(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.Bitmap;
				public static getCurrentTime(): number;
				public static toBitmap(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.Bitmap;
				public static toBase64(param0: globalAndroid.graphics.Bitmap): string;
			}
		}
	}
}

//Generics information:

