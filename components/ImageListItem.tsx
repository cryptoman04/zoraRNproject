import { UnsplashedResult } from "@/utils/unsplashed";
import { ListRenderItemInfo } from "@shopify/flash-list";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import ImageDetails from "./ImageDetails";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

const ImageListItem = (item: ListRenderItemInfo<UnsplashedResult>) => {
    return (
        <Pressable
            onPress={() =>
                router.push({
                    pathname: "/image",
                    params: {
                        likes: item.item.likes,
                        imageUri: encodeURI(item.item.urls.regular),
                        profileImage: item.item.user.profile_image.small,
                        username: item.item.user.username,
                        description: item.item.description,
                    },
                })
            }
        >
            <ImageDetails
                likes={item.item.likes}
                imageUri={item.item.urls.regular}
                profileImage={item.item.user.profile_image.small}
                username={item.item.user.username}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        paddingVertical: 7,
    },
    profileImage: {
        borderRadius: 20,
        height: 40,
        width: 40,
        borderWidth: 2,
        borderColor: "black",
    },
    imageHeaderSection: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 5,
        flexDirection: "row",
        flex: 1,
    },
    imageFooterSection: {
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },
});

export default ImageListItem;
