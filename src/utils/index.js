export const convertTimeStamp = timestamp =>
  new Date(timestamp).toLocaleString().substr(0, 16)
