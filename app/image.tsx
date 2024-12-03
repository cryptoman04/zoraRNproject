import ImageDetails from "@/components/ImageDetails";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View } from "react-native";

const Image = () => {
    const params = useLocalSearchParams<{
        likes: number;
        imageUri: string;
        profileImage: string;
        username: string;
        description: string;
    }>();

    return (
        <View style={{ flex: 1 }}>
            <ImageDetails
                likes={params.likes}
                imageUri={params.imageUri}
                profileImage={params.profileImage}
                username={params.username}
                description={params.description}
            />
        </View>
    );
};

export default Image;
