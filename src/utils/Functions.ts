export const ValidEmail = (email: string): boolean =>
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)

export const CleanToken = (token: string): string => token.replace(/['"]+/g, '')
