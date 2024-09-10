{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE ExtendedDefaultRules #-}

module Main where

import Web.Scotty
import Lucid
import Data.Text.Lazy (Text)
import qualified Data.Text.Lazy as TL
import qualified Data.Text.Lazy.IO as TLIO
import Control.Monad.IO.Class (liftIO)

main :: IO ()
main = scotty 3000 $ do
    get "/" $ do
        content <- liftIO $ TLIO.readFile "./README.md"
        html $ renderText $ profilePage content
    get "/static/output.css" $ file "./static/output.css"

profilePage :: Text -> Html ()
profilePage content = html_ $ do
    head_ $ do
        title_ "Daniel Main - CV"
        link_ [rel_ "stylesheet", type_ "text/css", href_ "/static/output.css"]
        link_ [rel_ "stylesheet", href_ "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]
    body_ [class_ "bg-gray-100 font-sans"] $ do
        div_ [class_ "container mx-auto p-8"] $ do
            div_ [class_ "bg-white shadow-lg flex flex-col md:flex-row"] $ do
                leftColumn content
                rightColumn content

leftColumn :: Text -> Html ()
leftColumn content = do
    div_ [class_ "w-full md:w-1/3 bg-blue-900 text-white p-8"] $ do
        profileSection content
        contactSection content
        skillsSection content
        languagesSection content

rightColumn :: Text -> Html ()
rightColumn content = do
    div_ [class_ "w-full md:w-2/3 p-8"] $ do
        professionalSummary content
        workExperience content
        education content

profileSection :: Text -> Html ()
profileSection _ = do
    div_ [class_ "mb-8"] $ do
        h1_ [class_ "text-4xl font-bold mb-2"] "Daniel Main"
        p_ [class_ "text-xl"] "Technical Lead & Full-Stack Developer & Software Architect"

contactSection :: Text -> Html ()
contactSection content = do
    div_ [class_ "mb-8"] $ do
        h2_ [class_ "text-2xl font-semibold mb-4"] "Contact Information"
        ul_ [class_ "list-none"] $ mapM_ parseContactInfo $ take 5 $ drop 2 $ TL.lines content

parseContactInfo :: Text -> Html ()
parseContactInfo line =
    if "- " `TL.isPrefixOf` line
        then li_ [class_ "flex items-center mb-2"] $ do
                 i_ [class_ "fas fa-check-circle mr-2"] ""
                 toHtml $ TL.drop 2 line
        else mempty

skillsSection :: Text -> Html ()
skillsSection content = do
    div_ [class_ "mb-8"] $ do
        h2_ [class_ "text-2xl font-semibold mb-4"] "Skills"
        ul_ [class_ "list-none"] $ mapM_ parseSkills $ filter (\l -> "- " `TL.isPrefixOf` l && not ("- Email:" `TL.isPrefixOf` l)) $ TL.lines content

parseSkills :: Text -> Html ()
parseSkills line = li_ [class_ "mb-2"] $ toHtml $ TL.drop 2 line

languagesSection :: Text -> Html ()
languagesSection content = do
    div_ [class_ "mb-8"] $ do
        h2_ [class_ "text-2xl font-semibold mb-4"] "Languages"
        ul_ [class_ "list-none"] $ mapM_ parseLanguages $ filter ("- " `TL.isPrefixOf`) $ reverse $ take 4 $ reverse $ TL.lines content

parseLanguages :: Text -> Html ()
parseLanguages line = li_ [class_ "mb-2"] $ toHtml $ TL.drop 2 line

professionalSummary :: Text -> Html ()
professionalSummary content = do
    div_ [class_ "mb-8"] $ do
        h2_ [class_ "text-3xl font-bold text-blue-900 mb-4"] "Professional Summary"
        p_ [class_ "text-gray-700"] $ toHtml $ head $ drop 7 $ TL.lines content

workExperience :: Text -> Html ()
workExperience content = do
    div_ [class_ "mb-8"] $ do
        h2_ [class_ "text-3xl font-bold text-blue-900 mb-4"] "Professional Experience"
        mapM_ parseWorkExperience $ TL.lines content

parseWorkExperience :: Text -> Html ()
parseWorkExperience line
    | "### " `TL.isPrefixOf` line = h3_ [class_ "text-2xl font-semibold text-blue-800 mt-4 mb-2"] $ toHtml $ TL.drop 4 line
    | "**" `TL.isPrefixOf` line = p_ [class_ "text-gray-600 mb-2 italic"] $ toHtml $ TL.dropAround (=='*') line
    | "- " `TL.isPrefixOf` line = li_ [class_ "text-gray-700 mb-1"] $ do
                                      i_ [class_ "fas fa-circle text-blue-500 mr-2 text-xs"] ""
                                      toHtml $ TL.drop 2 line
    | otherwise = mempty

education :: Text -> Html ()
education content = do
    div_ [class_ "mb-8"] $ do
        h2_ [class_ "text-3xl font-bold text-blue-900 mb-4"] "Education"
        mapM_ parseEducation $ reverse $ take 5 $ reverse $ TL.lines content

parseEducation :: Text -> Html ()
parseEducation line
    | "**" `TL.isPrefixOf` line = h3_ [class_ "text-xl font-semibold text-gray-800 mt-4 mb-2"] $ toHtml $ TL.dropAround (=='*') line
    | otherwise = p_ [class_ "text-gray-700 mb-2"] $ toHtml line
