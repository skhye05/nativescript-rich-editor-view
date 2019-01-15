var RichEditorView = require("nativescript-rich-editor-view").RichEditorView;
var richEditorView = new RichEditorView();

describe("greet function", function() {
    it("exists", function() {
        expect(richEditorView.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(richEditorView.greet()).toEqual("Hello, NS");
    });
});