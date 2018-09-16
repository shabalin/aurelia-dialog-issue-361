import {autoinject} from 'aurelia-framework'
import {DialogService} from 'aurelia-dialog'
import {DialogViewModel} from './dialog/dialog'
@autoinject
export class App {

  message = 'Hello World!';

  constructor(private dialogService: DialogService){

  }

  openDialog(): void {
    this.dialogService.open({
      model: {message:"Hello"},
      viewModel: DialogViewModel
    })
  }
}
