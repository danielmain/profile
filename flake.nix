{
  description = "Haskell Personal Profile Page";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        haskellPackages = pkgs.haskellPackages;
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with haskellPackages; [
            ghc
            cabal-install
            haskell-language-server
            scotty
            lucid
            clay
            shelly
            zlib
            pkgs.zlib
            pkgs.pkg-config
            pkgs.nodejs
            pkgs.nodePackages.npm
          ];
          shellHook = ''
            export LD_LIBRARY_PATH=${pkgs.zlib}/lib:$LD_LIBRARY_PATH
            export PKG_CONFIG_PATH=${pkgs.zlib.dev}/lib/pkgconfig:$PKG_CONFIG_PATH
          '';
        };

        packages.default = haskellPackages.callCabal2nix "haskell-profile" ./. {};

        apps.default = flake-utils.lib.mkApp {
          drv = self.packages.${system}.default;
        };
      }
    );
}
