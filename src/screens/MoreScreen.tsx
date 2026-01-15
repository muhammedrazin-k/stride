
import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Linking, Share } from 'react-native';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../theme/theme';
import { Info, Mail, Github, Share2, ShieldQuestion, Globe, ChevronRight } from 'lucide-react-native';

const MenuOption = ({ icon: Icon, title, onPress, subtitle }: any) => (
    <TouchableOpacity style={styles.option} onPress={onPress}>
        <View style={styles.optionIcon}>
            <Icon size={22} color={COLORS.text} />
        </View>
        <View style={styles.optionTextContent}>
            <Text style={styles.optionTitle}>{title}</Text>
            {subtitle && <Text style={styles.optionSubtitle}>{subtitle}</Text>}
        </View>
        <ChevronRight size={20} color={COLORS.textLight} />
    </TouchableOpacity>
);

export const MoreScreen = () => {
    const onShare = async () => {
        try {
            await Share.share({
                message: 'Check out Stride, the scientific step counter app!',
            });
        } catch (error) {
            console.error(error);
        }
    };

    const openLink = (url: string) => {
        Linking.openURL(url);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>More</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>SUPPORT & FEEDBACK</Text>
                    <MenuOption
                        icon={Mail}
                        title="Contact Support"
                        subtitle="Get technical help"
                        onPress={() => openLink('mailto:support@stride.app')}
                    />
                    <MenuOption
                        icon={Github}
                        title="Github Repository"
                        subtitle="View project source"
                        onPress={() => openLink('https://github.com')}
                    />
                    <MenuOption
                        icon={Globe}
                        title="Website"
                        subtitle="visit stride.app"
                        onPress={() => openLink('https://stride.app')}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionLabel}>APP INFO</Text>
                    <MenuOption
                        icon={Info}
                        title="About Stride"
                        subtitle="Version 1.0.0"
                        onPress={() => { }}
                    />
                    <MenuOption
                        icon={ShieldQuestion}
                        title="Privacy Policy"
                        onPress={() => { }}
                    />
                    <MenuOption
                        icon={Share2}
                        title="Spread the word"
                        onPress={onShare}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Made with ❤️ for fitness lovers</Text>
                    <Text style={styles.footerCopy}>© 2026 Stride App. All rights reserved.</Text>
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
        marginBottom: SPACING.xl,
    },
    section: {
        marginBottom: SPACING.xxl,
    },
    sectionLabel: {
        fontSize: 12,
        fontFamily: FONTS.bold,
        color: COLORS.textLight,
        letterSpacing: 1.5,
        marginBottom: SPACING.md,
        marginLeft: SPACING.xs,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SPACING.lg,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    optionIcon: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.lg,
    },
    optionTextContent: {
        flex: 1,
    },
    optionTitle: {
        fontSize: 16,
        fontFamily: FONTS.bold,
        color: COLORS.text,
    },
    optionSubtitle: {
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: COLORS.textLight,
        marginTop: 2,
    },
    footer: {
        alignItems: 'center',
        marginTop: SPACING.xl,
        marginBottom: 60,
    },
    footerText: {
        fontSize: 14,
        fontFamily: FONTS.semiBold,
        color: COLORS.text,
    },
    footerCopy: {
        fontSize: 12,
        fontFamily: FONTS.regular,
        color: COLORS.textLight,
        marginTop: 4,
    }
});
