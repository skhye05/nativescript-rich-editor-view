import { RichEditorViewBase, backgroundColorProperty, backgroundColorCssProperty, heightProperty, heightCssProperty, fontSizeProperty, fontSizeCssProperty, fontColorProperty, fontColorCssProperty, hintProperty, rToolbarBackgroundColorProperty, rToolbarBackgroundColorCssProperty, rToolbarColorProperty, rToolbarColorCssProperty } from './rich-editor-view.common';
import { Color } from 'tns-core-modules/color/color';
import * as application from 'tns-core-modules/application';
import * as utils from 'tns-core-modules/utils/utils'

export class RichEditorView extends RichEditorViewBase {
    nativeView: any;
    private richEditorToolbar: jp.wasabeef.richeditor.RichEditorToolbar;
    private observerListener: any = null;

    public createNativeView(): Object {
        const rEditor = new jp.wasabeef.richeditor.RichEditor(this._context);
        rEditor.setOnFocusEventListener(new jp.wasabeef.richeditor.RichEditor.OnFocusEventListener({
            onChangeFocus: (focus: any) => {
                setTimeout(() => {
                    (this.richEditorToolbar as any).setVisibility(focus ? android.view.View.VISIBLE : android.view.View.GONE);
                    if (this.observerListener === null && focus) {
                        this.observerListener = new android.view.ViewTreeObserver.OnGlobalLayoutListener({
                            onGlobalLayout: () => {
                                if (keyboardShown((rEditor as any).getRootView())) {
                                    (this.richEditorToolbar as any).setVisibility(android.view.View.VISIBLE);
                                } else {
                                    (this.richEditorToolbar as any).setVisibility(android.view.View.GONE);
                                }
                            }
                        });
                        (rEditor as any).getViewTreeObserver().addOnGlobalLayoutListener(this.observerListener);
                    }

                    if (focus === false) {
                        this.removeListener();
                    }
                }, 200);
            }
        }));

        return rEditor;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();

        const layoutParams: android.widget.RelativeLayout.LayoutParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.MATCH_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
        this.richEditorToolbar = new jp.wasabeef.richeditor.RichEditorToolbar(application.android.foregroundActivity, null);

        (this.richEditorToolbar as any).setVisibility(android.view.View.GONE);

        this.nativeView.setId(android.view.View.generateViewId());

        (this.richEditorToolbar as any).setId(android.view.View.generateViewId());

        (this.richEditorToolbar as any).setLayoutParams(layoutParams);

        const parentView: android.view.ViewGroup = application.android.foregroundActivity.findViewById(android.R.id.content);

        parentView.addView((this.richEditorToolbar as any));

        this.richEditorToolbar.setEditor(this.nativeView);
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;

        super.disposeNativeView();

        this.removeListener();
    }

    private removeListener(): void {

        if (this.nativeView) {
            (this.richEditorToolbar as any).setVisibility(android.view.View.GONE);

            if (android.os.Build.VERSION.SDK_INT < android.os.Build.VERSION_CODES.JELLY_BEAN) {
                this.nativeView.getViewTreeObserver().removeGlobalOnLayoutListener(this.observerListener);
            } else {
                this.nativeView.getViewTreeObserver().removeOnGlobalLayoutListener(this.observerListener);
            }

            this.observerListener = null;
        }
    }

    // Background Color
    [backgroundColorProperty.setNative](value: string) {
        this.nativeView.setEditorBackgroundColor(new Color(value).android);
    }

    [backgroundColorCssProperty.setNative](value: Color) {
        this.nativeView.setEditorBackgroundColor(value.android);
    }

    // Height
    [heightProperty.setNative](value: number) {
        this.nativeView.setEditorHeight(value);
    }

    [heightCssProperty.setNative](value: number) {
        this.nativeView.setEditorHeight(value);
    }

    // Fonts
    [fontSizeProperty.setNative](value: number) {
        this.nativeView.setEditorFontSize(value);
    }

    [fontSizeCssProperty.setNative](value: number) {
        this.nativeView.setEditorFontSize(value);
    }

    [fontColorProperty.setNative](value: string) {
        this.nativeView.setEditorFontColor(new Color(value).android);
    }

    [fontColorCssProperty.setNative](value: Color) {
        this.nativeView.setEditorFontColor(value.android);
    }

    // Placeholder
    [hintProperty.setNative](value: string) {
        this.nativeView.setPlaceholder(value);
    }

    // Toolbar
    [rToolbarBackgroundColorProperty.setNative](value: string) {
        this.richEditorToolbar.setBackgroundColor(new Color(value).android);
    }

    [rToolbarBackgroundColorCssProperty.setNative](value: Color) {
        this.richEditorToolbar.setBackgroundColor(value.android);
    }

    [rToolbarColorProperty.setNative](value: string) {
        this.richEditorToolbar.setBackgroundColor(new Color(value).android);
    }

    [rToolbarColorCssProperty.setNative](value: Color) {
        this.richEditorToolbar.setBackgroundColor(value.android);
    }

}

function keyboardShown(rootView: android.view.View) {
    const softKeyboardHeight = 100;
    const r = new android.graphics.Rect();
    rootView.getWindowVisibleDisplayFrame(r);
    const dm = rootView.getResources().getDisplayMetrics();
    const heightDiff = rootView.getBottom() - r.bottom;
    return heightDiff > softKeyboardHeight * dm.density;
}