import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import {
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    StyleSheet,
} from "react-native";
import { FlashList } from "@shopify/flash-list";

import { searchUnsplashed, UnsplashedResult } from "./unsplashed";
import ImageListItem from "@/components/ImageListItem";

const { width, height } = Dimensions.get("window");

// Usecases:
// - Enter search term into searchbox ✅
// - View list of images related to search ✅
// - If no results, show message ✅
// - Image detail view ✅

export default function Images() {
    const [prevSearchText, setPrevSearchText] = useState("");
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);
    const [imageResults, setImageResults] = useState<UnsplashedResult[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showMessage, setShowMessage] = useState(false);

    const onSearch = async () => {
        try {
            setLoading(true);
            setShowMessage(false);

            let searchPage = prevSearchText === searchText ? currentPage : 1;

            const unsplashedResp = await searchUnsplashed(
                searchText,
                searchPage
            );

            if (
                unsplashedResp.results.length === 0 &&
                unsplashedResp.total === 0 &&
                unsplashedResp.total_pages === 0
            ) {
                setShowMessage(true);
            }

            if (prevSearchText === searchText) {
                setImageResults(imageResults.concat(unsplashedResp.results));
            } else {
                setImageResults(unsplashedResp.results);
            }

            setCurrentPage(searchPage + 1);
            setPrevSearchText(searchText);
        } catch (err) {
            // We can handle the error by displaying an Error message..
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <SearchBar
                onChangeText={(text) => setSearchText(text)}
                onSearch={() => onSearch()}
                text={searchText}
                loading={loading}
            />

            <View style={{ width, height: height - 90 }}>
                <FlashList
                    data={imageResults}
                    renderItem={ImageListItem}
                    estimatedItemSize={200}
                    onEndReachedThreshold={0.8}
                    onEndReached={() => {
                        // Note: It seems like onEndReached gets called
                        // on component mount, so I added this check here to
                        // ensure we dont prematurely call onSearch().
                        if (imageResults.length) {
                            onSearch();
                        }
                    }}
                    ListEmptyComponent={() => {
                        if (showMessage) {
                            return (
                                <View style={styles.listempty}>
                                    <Text>No results found 😢</Text>;
                                </View>
                            );
                        }

                        return null;
                    }}
                    ListFooterComponent={() => {
                        if (loading && imageResults.length) {
                            return (
                                <View style={styles.footer}>
                                    <ActivityIndicator />
                                    <Text>Fetching more images...</Text>
                                </View>
                            );
                        }

                        return null;
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        alignItems: "center",
    },
    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },
    listempty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
