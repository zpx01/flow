import {
    Grid, // our UI Component to display the results
    SearchBar, // the search bar the user will type into
    SearchContext, // the context that wraps and connects our components
    SearchContextManager, // the context manager, includes the Context.Provider
    SuggestionBar, // an optional UI component that displays trending searches and channel / username results
    SearchTheme,
} from '@giphy/react-components'
import { useContext } from 'react'
// the search experience consists of the manager and its child components that use SearchContext
export const CarouselDemo = () => (
    <SearchContextManager apiKey={"T8n3iMoLUOguSsK56GgLJRYhh9lyrAWL"} theme={"dark"}>
        <Components />
    </SearchContextManager>
)

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
const Components = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext)
    return (
        <>
            <SearchBar />
            <br />
            <SuggestionBar />
            <br />
            <Grid key={searchKey} columns={2} width={525} fetchGifs={fetchGifs} />
        </>
    )
}