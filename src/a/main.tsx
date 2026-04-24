import { Component, ComponentChildren, hydrate } from "preact";
import { render } from "preact-render-to-string";

export class Page extends Component {
    override render(): ComponentChildren {
        return <>
            <span>hello from a</span>
            <span>hi from a</span>
        </>
    }
}

export function prerender() {
    let html = render(<Page/>);
    return {
        html
    }
}

if (typeof window !== "undefined") {
    hydrate(<Page/>, document.getElementById("root"))
}
