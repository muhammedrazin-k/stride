
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, FONTS } from '../theme/theme';
import { CustomButton } from '../components/CustomButton';
import { ArrowLeft, Info } from 'lucide-react-native';

export const ResultScreen = ({ route, navigation }: any) => {
    const { steps, distance, strideLength, activity } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <ArrowLeft size={24} color={COLORS.text} />
                </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.label}>Estimated Steps</Text>
                    <Text style={styles.stepsCount}>{steps.toLocaleString()}</Text>

                    <View style={styles.statsCard}>
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Distance</Text>
                            <Text style={styles.statValue}>{distance} km</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.statItem}>
                            <Text style={styles.statLabel}>Stride Length</Text>
                            <Text style={styles.statValue}>{strideLength} cm</Text>
                        </View>
                    </View>

                    <View style={styles.infoCard}>
                        <Info size={20} color={COLORS.primary} />
                        <Text style={styles.infoText}>
                            Estimated based on your height and {activity} factor.
                        </Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <CustomButton
                        title="Recalculate"
                        onPress={() => navigation.goBack()}
                        variant="outline"
                        style={styles.recalculateBtn}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
        padding: SPACING.lg,
    },
    backButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: COLORS.surface,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: SPACING.xl,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        color: COLORS.textLight,
        fontFamily: FONTS.semiBold,
        marginBottom: SPACING.xs,
    },
    stepsCount: {
        fontSize: 80,
        fontFamily: FONTS.black,
        color: COLORS.primary,
        marginBottom: SPACING.xxl,
    },
    statsCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.surface,
        borderRadius: BORDER_RADIUS.xl,
        padding: SPACING.xl,
        width: '100%',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 15,
    },
    statItem: {
        flex: 1,
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 14,
        color: COLORS.textLight,
        fontFamily: FONTS.semiBold,
        marginBottom: SPACING.xs,
    },
    statValue: {
        fontSize: 22,
        color: COLORS.text,
        fontFamily: FONTS.bold,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: COLORS.border,
        marginHorizontal: SPACING.md,
    },
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surfaceSubtle,
        padding: SPACING.md,
        borderRadius: BORDER_RADIUS.md,
        marginTop: SPACING.xl,
        width: '100%',
    },
    infoText: {
        fontSize: 14,
        color: COLORS.primary,
        marginLeft: SPACING.sm,
        fontFamily: FONTS.semiBold,
    },
    footer: {
        marginTop: 'auto',
        paddingBottom: SPACING.lg,
    },
    recalculateBtn: {
        height: 60,
    }
});
