
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../theme/theme';
import { CustomButton } from '../components/CustomButton';
import { Accessibility, TrendingUp, ArrowUpDown, Dumbbell, Route } from 'lucide-react-native';

export const WelcomeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Accessibility size={28} color={COLORS.text} />
                <Text style={styles.headerTitle}>Stride</Text>
                <View style={{ width: 28 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.illustrationContainer}>
                    <View style={styles.mainCircle}>
                        <TrendingUp size={60} color="#FFFFFF" strokeWidth={3} />
                    </View>
                    <View style={styles.smallIconsRow}>
                        <View style={styles.smallIconBox}>
                            <ArrowUpDown size={24} color={COLORS.primary} strokeWidth={2.5} />
                        </View>
                        <View style={styles.smallIconBox}>
                            <Dumbbell size={24} color={COLORS.primary} strokeWidth={2.5} />
                        </View>
                        <View style={styles.smallIconBox}>
                            <Route size={24} color={COLORS.primary} strokeWidth={2.5} />
                        </View>
                    </View>
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.title}>Welcome to Stride</Text>
                    <Text style={styles.description}>
                        Experience precision tracking. We use your{' '}
                        <Text style={styles.highlight}>height</Text>,{' '}
                        <Text style={styles.highlight}>weight</Text>, and{' '}
                        <Text style={styles.highlight}>distance</Text> to calculate every step with scientific accuracy.
                    </Text>
                </View>

                <View style={styles.pagination}>
                    <View style={[styles.dot, styles.activeDot]} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                </View>
            </View>

            <View style={styles.footer}>
                <CustomButton
                    title="Get Started"
                    onPress={() => navigation.navigate('Main')}
                    style={styles.button}
                />
                <Text style={styles.versionText}>SCIENTIFIC TRACKING SYSTEM V1.0</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.lg,
        paddingTop: SPACING.md,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: FONTS.bold,
        color: COLORS.text,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.xl,
    },
    illustrationContainer: {
        width: '100%',
        aspectRatio: 1,
        backgroundColor: COLORS.surfaceSubtle,
        borderRadius: BORDER_RADIUS.xl,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.xxl,
    },
    mainCircle: {
        width: 140,
        height: 140,
        borderRadius: 70,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        marginBottom: SPACING.xl,
    },
    smallIconsRow: {
        flexDirection: 'row',
        gap: SPACING.md,
    },
    smallIconBox: {
        width: 56,
        height: 56,
        borderRadius: BORDER_RADIUS.md,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    textContent: {
        alignItems: 'center',
        marginBottom: SPACING.xl,
    },
    title: {
        fontSize: 32,
        fontFamily: FONTS.black,
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SPACING.md,
    },
    description: {
        fontSize: 16,
        fontFamily: FONTS.regular,
        color: COLORS.textLight,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: SPACING.sm,
    },
    highlight: {
        color: COLORS.primary,
        fontFamily: FONTS.bold,
    },
    pagination: {
        flexDirection: 'row',
        gap: 8,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D1D5DB',
    },
    activeDot: {
        width: 24,
        backgroundColor: COLORS.primary,
    },
    footer: {
        padding: SPACING.xl,
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 64,
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.lg,
        elevation: 8,
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    versionText: {
        marginTop: SPACING.lg,
        fontSize: 12,
        fontFamily: FONTS.bold,
        color: '#9CA3AF',
        letterSpacing: 1.5,
    }
});
