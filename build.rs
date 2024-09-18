// build.rs

use std::{
    env,
    fs::File,
    io::{Read},
    path::Path,
    process::Command,
};

fn main() {
    // Get the output directory from Cargo
    let out_dir = env::var("OUT_DIR").unwrap();

    // Path to the generated Tailwind CSS file
    let dest_path = Path::new(&out_dir).join("tailwind.css");

    // Read the input CSS file (input.css)
    let mut input_css = String::new();
    File::open("src/input.css") // Adjust the path if your input.css is elsewhere
        .unwrap()
        .read_to_string(&mut input_css)
        .unwrap();

    // Run Tailwind CSS CLI
    let output = Command::new("npx")
        .args(["tailwindcss", "-i", "src/input.css", "-o", &dest_path.to_str().unwrap()])
        .output()
        .expect("failed to execute process");

    // Handle errors
    if !output.status.success() {
        let error_message = String::from_utf8_lossy(&output.stderr);
        panic!("Tailwind CSS processing failed: {}", error_message);
    }

    // Tell Cargo to re-run this script if input.css changes
    println!("cargo:rerun-if-changed=src/input.css");
}
