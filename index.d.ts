type Tracker = (id: number, error: unknown) => void

export function getUnhandledPromiseRejectionTracker(): Tracker | undefined
export function setUnhandledPromiseRejectionTracker(tracker: Tracker): void
