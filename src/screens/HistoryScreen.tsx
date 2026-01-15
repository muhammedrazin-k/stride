
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, SPACING, FONTS, BORDER_RADIUS } from '../theme/theme';
import { Footprints, Rocket, Calendar, ChevronRight, Trash2 } from 'lucide-react-native';

export const HistoryScreen = () => {
    const [history, setHistory] = useState<any[]>([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        try {
            const savedHistory = await AsyncStorage.getItem('stride_history');
            if (savedHistory) {
                setHistory(JSON.parse(savedHistory).reverse());
            }
        } catch (e) {
            console.error(e);
        }
    };

    const clearHistory = async () => {
        try {
            await AsyncStorage.removeItem('stride_history');
            setHistory([]);
        } catch (e) {
            console.error(e);
        }
    };

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: item.activity === 'running' ? '#FEE2E2' : COLORS.surfaceSubtle }]}>
                {item.activity === 'running' ?
                    <Rocket size={20} color="#EF4444" /> :
                    <Footprints size={20} color={COLORS.primary} />
                }
            </View>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.steps.toLocaleString()} Steps</Text>
                <Text style={styles.cardSubtitle}>{item.distance} km • {item.activity}</Text>
            </View>
            <Text style={styles.cardDate}>{item.date}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>History</Text>
                    <TouchableOpacity onPress={clearHistory}>
                        <Trash2 size={20} color={COLORS.textLight} />
                    </TouchableOpacity>
                </View>

                {history.length > 0 ? (
                    <FlatList
                        data={history}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.list}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={styles.emptyState}>
                        <Calendar size={64} color="#E5E7EB" />
                        <Text style={styles.emptyText}>No activity recorded yet</Text>
                    </View>
                )}
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SPACING.xl,
        marginTop: SPACING.md,
    },
    title: {
        fontSize: 32,
        fontFamily: FONTS.black,
        color: COLORS.text,
    },
    list: {
        paddingBottom: SPACING.xl,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.surface,
        padding: SPACING.md,
        borderRadius: BORDER_RADIUS.lg,
        marginBottom: SPACING.md,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.md,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontFamily: FONTS.bold,
        color: COLORS.text,
    },
    cardSubtitle: {
        fontSize: 14,
        fontFamily: FONTS.regular,
        color: COLORS.textLight,
        textTransform: 'capitalize',
    },
    cardDate: {
        fontSize: 12,
        fontFamily: FONTS.semiBold,
        color: COLORS.textLight,
    },
    emptyState: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    emptyText: {
        marginTop: SPACING.md,
        fontSize: 16,
        fontFamily: FONTS.semiBold,
        color: COLORS.textLight,
    }
});
