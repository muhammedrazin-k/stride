
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS, BORDER_RADIUS, SPACING, FONTS } from '../theme/theme';
import { Footprints, Rocket } from 'lucide-react-native';

interface ActivityCardProps {
    type: 'walking' | 'running';
    selected: boolean;
    onPress: () => void;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ type, selected, onPress }) => {
    const Icon = type === 'walking' ? Footprints : Rocket;
    const label = type === 'walking' ? 'Walking' : 'Running';

    return (
        <TouchableOpacity
            style={[
                styles.card,
                selected && styles.selectedCard
            ]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={[styles.iconWrapper, selected && styles.selectedIconWrapper]}>
                <Icon size={28} color={selected ? COLORS.surface : COLORS.primary} />
            </View>
            <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.lg,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
        marginHorizontal: SPACING.xs,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    selectedCard: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.surfaceSubtle,
    },
    iconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.sm,
    },
    selectedIconWrapper: {
        backgroundColor: COLORS.primary,
    },
    label: {
        fontSize: 16,
        fontFamily: FONTS.bold,
        color: COLORS.text,
    },
    selectedLabel: {
        color: COLORS.primary,
    }
});
