
import React from 'react';
import { View, StyleSheet, useWindowDimensions, Platform, Text } from 'react-native';
import { COLORS } from '../theme/theme';

export const Simulator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (Platform.OS !== 'web') return <>{children}</>;

    const { width, height } = useWindowDimensions();
    // Only show simulator on large screens (desktop)
    const isDesktop = width > 500 && height > 600;

    if (!isDesktop) {
        return (
            <View style={{ flex: 1, backgroundColor: COLORS.background }}>
                {children}
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Background Decor */}
            <View style={styles.decorCircle1} />
            <View style={styles.decorCircle2} />

            <View style={styles.phoneWrapper}>
                <View style={styles.phoneFrame}>
                    {/* Top Speaker / Camera Notch */}
                    <View style={styles.notch}>
                        <View style={styles.camera} />
                        <View style={styles.speaker} />
                    </View>

                    {/* Screen Content */}
                    <View style={styles.screen}>
                        {children}
                    </View>

                    {/* Home Bar */}
                    <View style={styles.homeIndicator} />
                </View>

                <Text style={styles.hintText}>Stride Mobile Preview</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#061612', // Deep slate green background
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    decorCircle1: {
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: 300,
        backgroundColor: 'rgba(61, 92, 255, 0.1)',
        top: -200,
        right: -200,
    },
    decorCircle2: {
        position: 'absolute',
        width: 400,
        height: 400,
        borderRadius: 200,
        backgroundColor: 'rgba(255, 107, 107, 0.05)',
        bottom: -100,
        left: -100,
    },
    phoneWrapper: {
        alignItems: 'center',
        gap: 20,
        zIndex: 10,
    },
    phoneFrame: {
        width: 380,
        height: 780,
        backgroundColor: '#000',
        borderRadius: 55,
        padding: 12,
        borderWidth: 4,
        borderColor: '#334155',
        elevation: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 25 },
        shadowOpacity: 0.5,
        shadowRadius: 40,
    },
    screen: {
        flex: 1,
        backgroundColor: COLORS.background,
        borderRadius: 40,
        overflow: 'hidden',
    },
    notch: {
        position: 'absolute',
        top: 12,
        alignSelf: 'center',
        width: 150,
        height: 30,
        backgroundColor: '#000',
        zIndex: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    camera: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#1E293B',
    },
    speaker: {
        width: 40,
        height: 4,
        borderRadius: 2,
        backgroundColor: '#1E293B',
    },
    homeIndicator: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        width: 120,
        height: 5,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 10,
        zIndex: 100,
    },
    hintText: {
        color: '#94A3B8',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
    }
});
