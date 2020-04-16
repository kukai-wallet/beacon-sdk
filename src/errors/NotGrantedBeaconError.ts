import { BeaconError, BeaconErrorType } from '..'

export class NotGrantedBeaconError extends BeaconError {
  public name: string = 'NotGrantedBeaconError'
  constructor() {
    super(
      BeaconErrorType.NOT_GRANTED_ERROR,
      'You do not have the necessary permissions to perform this action. Please initiate another permission request and give the necessary permissions.'
    )
  }
}
