export const ALL = 'ALL'
export const ACTIVE = 'ACTIVE'
export const COMPLETED = 'COMPLETED'
export const DELETED = 'DELETED'

export const currentType = {
  state: ALL,
  reducers: {
    changeType(state, type = ACTIVE) {
      return type
    }
  }
}
