use dioxus::prelude::*;
use comrak::{markdown_to_html, ComrakOptions};
use manganis::mg;

fn main() {
    launch(app);
}

const TAILWIND_URL: &str = mg!(file("public/tailwind.css"));
const PROFILE_PICTURE_URL: &str = mg!(file("assets/profile.jpg"));
const BACKGROUND_IMAGE_URL: &str = mg!(file("assets/background.jpg")); // Add this line

#[component]
fn app() -> Element {
    let readme_content = include_str!("../README.md");
    let html_content = markdown_to_html(readme_content, &ComrakOptions::default());

    rsx! {
        link { rel: "stylesheet", href: "{TAILWIND_URL}" }
        div {
            class: "min-h-screen bg-base-100 flex flex-col items-center relative",
            style: "background-image: url({BACKGROUND_IMAGE_URL})",
            "data-theme": "dracula",

            // Fixed background
            div {
                class: "fixed inset-0 bg-no-repeat bg-center bg-cover z-0",
                style: "background-image: url({BACKGROUND_IMAGE_URL})"
            }

            // Scrollable content container
            div {
                class: "w-3/4 mt-7 overflow-y-auto p-10 bg-base-300 shadow-lg rounded-lg relative z-10 max-h-[calc(100vh-3.5rem)]",
                div {
                    // Title and subtitle
                    h1 {
                        class: "text-4xl font-bold text-primary mb-2",
                        "Daniel Main"
                    }
                    h2 {
                        class: "text-xl text-secondary mb-6",
                        "Technical Lead & Full-Stack Developer & Software Architect"
                    }

                    // Image container
                    div {
                        class: "w-full mb-8 flex",
                        img {
                            src: "{PROFILE_PICTURE_URL}",
                            class: "w-1/4 h-auto rounded-xl border-4 border-purple-500 shadow-lg rounded-lg",
                            alt: "Profile Picture"
                        }
                    }
                    // Markdown content
                    div {
                        class: "prose prose-invert lg:prose-xl max-w-none",
                        dangerous_inner_html: "{html_content}"
                    }
                }
            }
        }
    }
}
