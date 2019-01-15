import { Observable } from 'tns-core-modules/data/observable';
import { RichEditorView } from 'nativescript-rich-editor-view';

export class HelloWorldModel extends Observable {
  public message: string;
  private richEditorView: RichEditorView;

  constructor() {
    super();

    this.richEditorView = new RichEditorView();
    this.message = this.richEditorView.message;
  }
}
