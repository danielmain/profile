-- file: app/Main.hs
{-# LANGUAGE OverloadedStrings #-}

module Main where

import Web.Scotty
import qualified Text.Blaze.Html5 as H
import qualified Text.Blaze.Html5.Attributes as A
import Text.Blaze.Html.Renderer.Text (renderHtml)
import qualified Data.Text.Lazy as TL
import qualified Data.Text.Lazy.IO as TLIO
import Control.Monad.IO.Class (liftIO)

main :: IO ()
main = scotty 3000 $ do
    get "/" $ do
        content <- liftIO $ TLIO.readFile "../README.md"
        html $ renderHtml $ profilePage content

profilePage :: TL.Text -> H.Html
profilePage content = H.html $ do
    H.head $ do
        H.title "My Personal Profile"
        H.style $ H.toHtml (cssContent :: String)
    H.body $ do
        mapM_ parseMdSection $ TL.lines content

cssContent :: String
cssContent = mconcat
    [ "body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }"
    , "h1, h2 { color: #333; }"
    , "ul { padding-left: 20px; }"
    , "p { line-height: 1.6; }"
    ]

parseMdSection :: TL.Text -> H.Html
parseMdSection line
    | "# " `TL.isPrefixOf` line = H.h1 $ H.toHtml $ TL.drop 2 line
    | "## " `TL.isPrefixOf` line = H.h2 $ H.toHtml $ TL.drop 3 line
    | "- " `TL.isPrefixOf` line = H.li $ H.toHtml $ TL.drop 2 line
    | TL.null line = H.br
    | otherwise = H.p $ H.toHtml line
