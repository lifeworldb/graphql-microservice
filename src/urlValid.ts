export const isInternalLink = (link: string): boolean => /^\/(?!\/)/.test(link)
