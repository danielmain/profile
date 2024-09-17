use dioxus::prelude::*;
use comrak::{markdown_to_html, ComrakOptions};
use manganis::mg;

fn main() {
    launch(app);
}

const TAILWIND_URL: &str = mg!(file("public/tailwind.css"));

#[component]
fn app() -> Element {
    let readme_content = include_str!("../README.md");
    let html_content = markdown_to_html(readme_content, &ComrakOptions::default());

    rsx! {
        link { rel: "stylesheet", href: "{TAILWIND_URL}" }
        div {
            class: "min-h-screen bg-base-300",
            "data-theme": "dracula",
            div {
                class: "container mx-auto p-4 bg-base-100 shadow-lg rounded-lg",
                div {
                    class: "prose prose-invert lg:prose-xl max-w-none",
                    dangerous_inner_html: "{html_content}"
                }
            }
        }
    }
}
