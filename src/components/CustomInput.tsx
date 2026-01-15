
import React from 'react';
import { View, Text, TextInput, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, FONTS } from '../theme/theme';

interface CustomInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    keyboardType?: 'numeric' | 'default';
    suffix?: string;
    containerStyle?: ViewStyle;
}

export const CustomInput: React.FC<CustomInputProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    keyboardType = 'numeric',
    suffix,
    containerStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    placeholderTextColor={COLORS.textLight}
                />
                {suffix && <Text style={styles.suffix}>{suffix}</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.lg,
    },
    label: {
        fontSize: 14,
        color: COLORS.text,
        fontFamily: FONTS.semiBold,
        marginBottom: SPACING.xs,
        marginLeft: SPACING.xs,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.inputBg,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        height: 56,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: COLORS.text,
        fontFamily: FONTS.semiBold,
    },
    suffix: {
        fontSize: 16,
        color: COLORS.textLight,
        fontFamily: FONTS.bold,
    },
});
