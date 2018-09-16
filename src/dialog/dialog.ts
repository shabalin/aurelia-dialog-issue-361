export class DialogViewModel {
  data: string;

  activate(model) {
    this.data = model.message;
  }
}
