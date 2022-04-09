export class LoadingHelper {
  private _isLoading: boolean;

  constructor() {
    this._isLoading = false;
  }

  startLoading(): void {
    this._isLoading = true;
  }

  stopLoading(): void {
    this._isLoading = false;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }
}
