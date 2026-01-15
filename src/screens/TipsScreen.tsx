
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../theme/theme';
import { Lightbulb, Heart, Zap, Shield, Info } from 'lucide-react-native';

const ADVICES = [
    {
        title: 'Hydration is Key',
        desc: 'Drink at least 500ml of water 2 hours before a long walk or run.',
        icon: Zap,
        color: '#3B82F6'
    },
    {
        title: 'Post-Run Nutrition',
        desc: 'Consume a mix of protein and carbs within 45 mins of finishing.',
        icon: Heart,
        color: '#EF4444'
    },
    {
        title: 'Watch Your Form',
        desc: 'Keep your back straight and gaze about 10-20 feet ahead.',
        icon: Lightbulb,
        color: '#F59E0B'
    },
    {
        title: 'Injury Prevention',
        desc: 'Always stretch your hamstrings and calves after your activity.',
        icon: Shield,
        color: '#10B981'
    }
];

export const TipsScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Fitness Tips</Text>
                <Text style={styles.subtitle}>Curated advice for your Stride journey</Text>

                <View style={styles.featuredCard}>
                    <View style={styles.featuredContent}>
                        <Text style={styles.featuredTag}>DAILY READ</Text>
                        <Text style={styles.featuredTitle}>The Science of Walking Stride</Text>
                        <Text style={styles.featuredDesc}>Learn how small changes in your stride length can impact calorie burn by up to 15%.</Text>
                        <TouchableOpacity style={styles.readMore}>
                            <Text style={styles.readMoreText}>Read Article</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Quick Advice</Text>
                {ADVICES.map((item, index) => (
                    <View key={index} style={styles.adviceCard}>
                        <View style={[styles.iconBox, { backgroundColor: item.color + '15' }]}>
                            <item.icon size={24} color={item.color} />
                        </View>
                        <View style={styles.adviceText}>
                            <Text style={styles.adviceTitle}>{item.title}</Text>
                            <Text style={styles.adviceDesc}>{item.desc}</Text>
                        </View>
                    </View>
                ))}

                <View style={styles.infoBox}>
                    <Info size={20} color={COLORS.primary} />
                    <Text style={styles.infoText}>Stride uses scientific constants to estimate steps. For precise clinical data, please consult a specialist.</Text>
                </View>
            </ScrollView>
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
    title: {
        fontSize: 32,
        fontFamily: FONTS.black,
        color: COLORS.text,
        marginTop: SPACING.md,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: FONTS.semiBold,
        color: COLORS.textLight,
        marginBottom: SPACING.xl,
    },
    featuredCard: {
        backgroundColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.xl,
        padding: SPACING.xl,
        marginBottom: SPACING.xl,
    },
    featuredContent: {
        padding: 0,
    },
    featuredTag: {
        color: COLORS.primary,
        fontFamily: FONTS.bold,
        fontSize: 12,
        letterSpacing: 1,
        marginBottom: SPACING.xs,
    },
    featuredTitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: FONTS.bold,
        marginBottom: SPACING.sm,
    },
    featuredDesc: {
        color: '#94A3B8',
        fontSize: 14,
        lineHeight: 20,
        fontFamily: FONTS.regular,
        marginBottom: SPACING.lg,
    },
    readMore: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
        borderRadius: BORDER_RADIUS.md,
        alignSelf: 'flex-start',
    },
    readMoreText: {
        color: '#FFFFFF',
        fontFamily: FONTS.bold,
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: FONTS.bold,
        color: COLORS.text,
        marginBottom: SPACING.lg,
    },
    adviceCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        padding: SPACING.lg,
        borderRadius: BORDER_RADIUS.xl,
        marginBottom: SPACING.md,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.04,
        shadowRadius: 10,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.lg,
    },
    adviceText: {
        flex: 1,
    },
    adviceTitle: {
        fontSize: 16,
        fontFamily: FONTS.bold,
        color: COLORS.text,
        marginBottom: 2,
    },
    adviceDesc: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.textLight,
        lineHeight: 20,
    },
    infoBox: {
        flexDirection: 'row',
        backgroundColor: COLORS.surfaceSubtle,
        padding: SPACING.lg,
        borderRadius: BORDER_RADIUS.lg,
        marginTop: SPACING.xl,
        marginBottom: 50,
        alignItems: 'center',
    },
    infoText: {
        flex: 1,
        marginLeft: SPACING.md,
        color: COLORS.text,
        fontSize: 12,
        fontFamily: FONTS.semiBold,
        lineHeight: 18,
    }
});
