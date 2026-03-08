import { GetSubscriptionInfoByShortUuidCommand } from '@remnawave/backend-contract'

type ExtendedSubscription =
  GetSubscriptionInfoByShortUuidCommand.Response['response'] & {
    userObject?: any
    subpageConfigUuid?: string | null
}

export interface IState {
    subscription: ExtendedSubscription | null
}
