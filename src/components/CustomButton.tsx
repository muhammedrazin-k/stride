
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, FONTS } from '../theme/theme';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    variant?: 'primary' | 'secondary' | 'outline';
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    onPress,
    title,
    variant = 'primary',
    style,
    textStyle
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'secondary': return styles.secondary;
            case 'outline': return styles.outline;
            default: return styles.primary;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'outline': return styles.outlineText;
            default: return styles.text;
        }
    };

    return (
        <TouchableOpacity
            style={[styles.base, getButtonStyle(), style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.xl,
        borderRadius: BORDER_RADIUS.lg,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    primary: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.secondary,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: COLORS.primary,
        elevation: 0,
        shadowOpacity: 0,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: FONTS.bold,
    },
    outlineText: {
        color: COLORS.primary,
        fontSize: 18,
        fontFamily: FONTS.bold,
    }
});
