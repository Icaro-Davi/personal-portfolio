const handleSideEffectEventClosure = (element: HTMLElement, elementClassNameRef: string) => {
    const events: (keyof HTMLElementEventMap)[] = ['mousedown', 'touchstart', 'touchend'];
    const elements = element.querySelectorAll(elementClassNameRef);
    const stopPropagationFn = (ev: MouseEvent | TouchEvent) => {
        ev.stopPropagation();
    }
   
    elements.forEach((e) => (
        events.forEach(event =>
            (e as HTMLElement).addEventListener(event, stopPropagationFn as EventListenerOrEventListenerObject)
        )
    ));

    return {
        destroy: () => {
            elements.forEach((e) => (
                events.forEach(event =>
                    (e as HTMLElement).removeEventListener(event, stopPropagationFn as EventListenerOrEventListenerObject)
                )
            ));
        }
    }
}

export default handleSideEffectEventClosure;