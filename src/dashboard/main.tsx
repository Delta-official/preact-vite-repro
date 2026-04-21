import { Component, ComponentChildren, hydrate } from "preact";
import { render } from "preact-render-to-string";

export class Page extends Component {
    override render(): ComponentChildren {
        return <>
            <span>hello</span>
            <span>hi</span>
        </>
    }
}

export function prerender() {
    let html = render(<Page/>);
    return {
        html
    }
}

hydrate(<Page/>, document.getElementById("root")!)
