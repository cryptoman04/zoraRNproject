import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    ActivityIndicator,
} from "react-native";

interface Props {
    text: string;
    loading: boolean;
    onChangeText: (text: string) => void;
    onSearch: () => void;
}

const SearchBar = (props: Props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                placeholder="Search for an image 🔍"
                onSubmitEditing={props.onSearch}
            />

            {props.loading ? (
                <ActivityIndicator />
            ) : (
                <TouchableOpacity onPress={props.onSearch}>
                    <Text>Search!</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 80,
        paddingVertical: 20,
    },
    input: {
        borderRadius: 10,
        borderColor: "grey",
    },
});
