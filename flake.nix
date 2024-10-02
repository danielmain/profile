{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.rust-overlay.url = "github:oxalica/rust-overlay";

  outputs = { self, nixpkgs, flake-utils, rust-overlay }:
    flake-utils.lib.eachSystem [ "x86_64-linux" "aarch64-darwin" ] (system:
    let
      overlays = [ (import rust-overlay) ];
      pkgs = import nixpkgs {
        inherit system overlays;
      };
      rustVersion = pkgs.rust-bin.stable.latest.default;

      # Common dependencies for all platforms
      commonDeps = with pkgs; [
        (rustVersion.override { extensions = [ "rust-src" ]; })
        wasm-bindgen-cli
        wasm-pack
        binaryen
        protobuf
        nodejs_22
        openssl.dev
        rustfmt
      ];

      # Platform-specific dependencies and configuration
      platformDeps = if pkgs.stdenv.isDarwin then
        with pkgs; [
          darwin.apple_sdk.frameworks.SystemConfiguration
          darwin.apple_sdk.frameworks.Security
          darwin.apple_sdk.frameworks.CoreFoundation
        ]
      else
        [];

      platformEnv = if pkgs.stdenv.isDarwin then
        ''
          export LIBRARY_PATH=$LIBRARY_PATH:${pkgs.darwin.apple_sdk.frameworks.SystemConfiguration}/Library/Frameworks:${pkgs.darwin.apple_sdk.frameworks.Security}/Library/Frameworks:${pkgs.darwin.apple_sdk.frameworks.CoreFoundation}/Library/Frameworks
        ''
      else
        "";

    in
      {
        devShells.default = pkgs.mkShell {
          nativeBuildInputs = commonDeps;
          buildInputs = platformDeps;

          # Set PKG_CONFIG_PATH to ensure OpenSSL is found
          env.PKG_CONFIG_PATH = "${pkgs.openssl.dev}/lib/pkgconfig";

          # Set RUST_SRC_PATH for rust-analyzer
          RUST_SRC_PATH = "${rustVersion}/lib/rustlib/src/rust/library";

          # Platform-specific shell hook
          shellHook = platformEnv;
        };
      }
    );
}
