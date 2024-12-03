import { Image } from "expo-image";
import { View, Text, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
    profileImage: string;
    username: string;
    imageUri: string;
    likes: number;

    // if we want to show the description
    // we assume we are currently in the Image screen.
    description?: string;
}

const ImageDetails = (props: Props) => {
    let containerStyle = styles.container;
    if (props.description) containerStyle.height = height;

    return (
        <View style={styles.container}>
            <View style={styles.imageHeaderSection}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: props.profileImage }}
                />

                <Text style={styles.boldText}>{props.username}</Text>
            </View>
            <View style={styles.mainImageContainer}>
                <Image
                    source={{ uri: props.imageUri }}
                    style={styles.mainImage}
                />
            </View>

            <View style={styles.imageFooterSection}>
                <Image
                    source={require("../assets/images/pixel-heart.png")}
                    style={styles.likeImage}
                />
                <Text style={styles.boldText}>{props.likes} Likes</Text>
            </View>
            {props.description && (
                <View style={styles.descriptionContainer}>
                    <Text>{props.description}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height: 500,
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
        flex: 1,
        flexDirection: "row",
        gap: 3,
        margin: 5,
        alignItems: "center",
    },
    boldText: {
        fontWeight: "bold",
    },
    likeImage: { width: 25, height: 25 },
    mainImage: {
        width,
        resizeMode: "contain",
        height: "100%",
    },
    mainImageContainer: { flex: 8, backgroundColor: "black" },
    descriptionContainer: { flex: 1, margin: 10 },
});

export default ImageDetails;
