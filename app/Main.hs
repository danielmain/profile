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
        title_ "Daniel Main - Profile"
        link_ [rel_ "stylesheet", type_ "text/css", href_ "/static/output.css"]
        script_ [src_ "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"] ("" :: Text)
    body_ [class_ "bg-gray-100 font-sans"] $ do
        div_ [class_ "container mx-auto p-8"] $ do
            div_ [class_ "flex flex-col md:flex-row gap-8"] $ do
                leftColumn content
                rightColumn content
        script_ "feather.replace()"

leftColumn :: Text -> Html ()
leftColumn content = do
    div_ [class_ "md:w-1/3"] $ do
        div_ [class_ "bg-white rounded-lg shadow-md p-6 mb-6"] $ do
            h1_ [class_ "text-4xl font-bold text-blue-800 mb-2"] "Daniel Main"
            p_ [class_ "text-xl text-gray-600 mb-4"] "Technical Lead & Full-Stack Developer & Software Architect"
            contactInfo content
        skillsSection content

rightColumn :: Text -> Html ()
rightColumn content = do
    div_ [class_ "md:w-2/3"] $ do
        professionalSummary content
        workExperience content
        education content

contactInfo :: Text -> Html ()
contactInfo content = do
    div_ [class_ "mb-6"] $ do
        h2_ [class_ "text-2xl font-semibold text-blue-800 mb-4"] $ do
            i_ [class_ "feather feather-user mr-2"] ""
            "Contact Information"
        parseContactInfo $ TL.lines content

parseContactInfo :: [Text] -> Html ()
parseContactInfo = mapM_ (\line ->
    if "- " `TL.isPrefixOf` line
        then p_ [class_ "flex items-center text-gray-700 mb-2"] $ do
                 i_ [class_ "feather feather-check mr-2"] ""
                 toHtml $ TL.drop 2 line
        else mempty)

skillsSection :: Text -> Html ()
skillsSection content = do
    div_ [class_ "bg-white rounded-lg shadow-md p-6 mb-6"] $ do
        h2_ [class_ "text-2xl font-semibold text-blue-800 mb-4"] $ do
            i_ [class_ "feather feather-award mr-2"] ""
            "Skills"
        parseSkills $ TL.lines content

parseSkills :: [Text] -> Html ()
parseSkills = mapM_ (\line ->
    if "- " `TL.isPrefixOf` line && TL.isInfixOf ":" line
        then let (category, skills) = TL.break (==':') $ TL.drop 2 line
             in div_ [class_ "mb-4"] $ do
                    h3_ [class_ "text-lg font-semibold text-gray-800 mb-2"] $ toHtml category
                    ul_ [class_ "list-disc list-inside"] $
                        mapM_ (\skill -> li_ [class_ "text-gray-700"] $ toHtml $ TL.strip skill) $
                            TL.split (==',') $ TL.drop 1 skills
        else mempty)

professionalSummary :: Text -> Html ()
professionalSummary content = do
    div_ [class_ "bg-white rounded-lg shadow-md p-6 mb-6"] $ do
        h2_ [class_ "text-2xl font-semibold text-blue-800 mb-4"] $ do
            i_ [class_ "feather feather-briefcase mr-2"] ""
            "Professional Summary"
        parseProfessionalSummary $ TL.lines content

parseProfessionalSummary :: [Text] -> Html ()
parseProfessionalSummary = mapM_ (\line ->
    if not $ "## " `TL.isPrefixOf` line
        then p_ [class_ "text-gray-700 mb-2"] $ toHtml line
        else mempty)

workExperience :: Text -> Html ()
workExperience content = do
    div_ [class_ "bg-white rounded-lg shadow-md p-6 mb-6"] $ do
        h2_ [class_ "text-2xl font-semibold text-blue-800 mb-4"] $ do
            i_ [class_ "feather feather-briefcase mr-2"] ""
            "Work Experience"
        parseWorkExperience $ TL.lines content

parseWorkExperience :: [Text] -> Html ()
parseWorkExperience = mapM_ (\line ->
    if "### " `TL.isPrefixOf` line
        then h3_ [class_ "text-xl font-semibold text-gray-800 mt-4 mb-2"] $ toHtml $ TL.drop 4 line
    else if "**" `TL.isPrefixOf` line
        then p_ [class_ "text-gray-600 mb-2"] $ toHtml $ TL.dropAround (=='*') line
    else if "- " `TL.isPrefixOf` line
        then li_ [class_ "text-gray-700 mb-1"] $ toHtml $ TL.drop 2 line
    else mempty)

education :: Text -> Html ()
education content = do
    div_ [class_ "bg-white rounded-lg shadow-md p-6"] $ do
        h2_ [class_ "text-2xl font-semibold text-blue-800 mb-4"] $ do
            i_ [class_ "feather feather-book mr-2"] ""
            "Education"
        parseEducation $ TL.lines content

parseEducation :: [Text] -> Html ()
parseEducation = mapM_ (\line ->
    if "## Education" `TL.isPrefixOf` line
        then h3_ [class_ "text-xl font-semibold text-gray-800 mt-4 mb-2"] $ toHtml $ TL.drop 3 line
    else if not $ "## " `TL.isPrefixOf` line
        then p_ [class_ "text-gray-700 mb-2"] $ toHtml line
    else mempty)
